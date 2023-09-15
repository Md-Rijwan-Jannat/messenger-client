import { Box } from "@mui/material";
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import { SocialLogin } from "../../components/socailLogin/SocialLogin"
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { toast } from 'react-toastify';

export const SignUp = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { signUpUser } = useContext(AuthContext);
  const navigate = useNavigate()
  const onSubmit = data => {
    console.log(data)
    signUpUser(data.email, data.password)
      .then(result => {
        const signInUser = result.user;
        if (signInUser) {
          toast.dismiss()
          toast.success('successfully create account!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
          navigate('/')
        }
      })
      .catch(error => {
        console.log(error)
        toast.dismiss()
        toast.warn('something went wrong!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      });

  }

  // Custom password validation function
  const validatePassword = (value) => {
    if (!value) {
      return "This fields are required";
    }
    if (value.length < 8) {
      return "Password must be at least 8 characters long";
    }
    // Check for at least one number, one letter, and one special character
    if (!/[0-9]/.test(value) || !/[a-zA-Z]/.test(value) || !/[!@#$%^&*]/.test(value)) {
      return "Password must contain at least one number, one letter, and one special character";
    }
    return true;
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-screen bg-gray-50">
        <h1 className="text-blue-500 text-2xl my-5 font-semibold">Create a New Account</h1>
        <div className="w-full m-5 md:m-0 p-5 md:w-1/2 lg:w-[450px] border rounded-md bg-white">
          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 2, width: '100%' },
            }}
            noValidate
            autoComplete="off"
          >
            {errors.password && <div className="bg-blue-100 border-t-4 border-blue-500 rounded-b text-blue-900 px-4 py-3 shadow-md" role="alert">
              <div className="flex">
                <div className="py-1"><svg className="fill-current h-6 w-6 text-rose-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" /></svg></div>
                <div>
                  <p className="font-bold">Our privacy policy has changed</p>
                  <p className="text-sm text-rose-500">{errors.password.message}</p>
                </div>
              </div>
            </div> }
            <div className="-ml-5 mr-3">
              <TextField
                {...register("name", { required: true })}
                id="outlined-multiline-flexible"
                label="Full name"
                className="hover:border border-gray-300 rounded-md"
                multiline
              />
              <TextField
                {...register("email", { required: true })}
                id="outlined-multiline-flexible"
                label="Email"
                className="hover:border border-gray-300 rounded-md"
                multiline
              />
              <TextField
                {...register("password", { validate: validatePassword })}
                id="outlined-multiline-flexible"
                label="Password"
                className="hover:border border-gray-300 rounded-md"
                multiline
              />

            </div>
            <div className="flex justify-between items-center mb-10">
              <div className="flex gap-2 items-center">
                <input type="checkbox" name="Remind me" id="" />
                <span className="text-gray-500 text-sm font-semibold">I agree to the Envato <span className="text-blue-500 hover:border-b border-blue-500">Privacy Policy
                  .</span></span>
              </div>
            </div>
          </Box>
          <Button onClick={handleSubmit(onSubmit)} className="w-full rounded-md mt-2" variant="contained">Sign Up</Button>
          <hr className="border border-gray-300 px-5 mt-10" />
          <SocialLogin />
          <div className="text-center text-sm">
            <span className="text-gray-500 "> Already you have an account <Link to='/login' className="text-blue-500 hover:border-b border-blue-500">Please Login</Link></span>
          </div>
        </div>
        <div className="text-center">
          <p className="text-gray-500 text-sm mt-10">By signin up, you agree to our <br /> <span className="text-lg border-b border-gray-500">Terms and Conditions & Privacy Policy</span></p>
        </div>
      </div>
    </>
  );
};
