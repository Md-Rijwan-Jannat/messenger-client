import { Header } from "../components/header/Header"
import { Box } from "@mui/material"
import Grid from '@mui/material/Grid';
import { Container } from "../components/Container";
import { LeftSidebar } from "../components/leftSidebar/LeftSidebar";
import { Setting } from "../pages/settings/Setting";
import { SaveSetting } from "../pages/settings/SaveSetting";

export const Settings = () => {
  return (
    // <div>
    //   <Header/>
    //   <Outlet />

    // </div>
    <Container>
      <Header />
      <div className="flex flex-row px-4">
        <div className="hidden md:block">
          <LeftSidebar />
        </div>
        <div className="pl-[150px] px-2 pt-32 h-screen min-w-full bg-[#F0F5FA]">
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} md={6}>
                <Setting />
              </Grid>
              <Grid item xs={12} sm={6} md={6} >
                <SaveSetting />
              </Grid>
            </Grid>
          </Box>
        </div>

      </div>
    </Container>
  )
}
