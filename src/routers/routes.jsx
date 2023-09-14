import {
    createBrowserRouter,
} from "react-router-dom";
import { Chat } from "../pages/chats/Chat";
import { CreateGroup } from "../pages/createGroup/CreateGroup";
import { Contacts } from "../pages/contacts/Contacts";
import { Profile } from "../pages/profile/Profile";
import Register from "../layout/Register";
import { Login } from "../pages/login/Login";
import { SignUp } from "../pages/signUp/SignUp";
import { Settings } from "../layout/Settings";
import { Setting } from "../pages/settings/Setting";
import { Main } from "../layout/Main";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Chat />
            },
            {
                path: '/create_group',
                element: <CreateGroup />
            },
            {
                path: '/contacts',
                element: <Contacts />
            },
            {
                path: 'profile',
                element: <Profile />
            }
        ]
    },
    {
        path: '/',
        element: <Register />,
        children: [
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signUp',
                element: <SignUp />
            }
        ]
    },
    {
        path: '/',
        element: <Settings />,
        children: [
            {
                path: '/setting',
                element: <Setting />
            }
        ]
    }
]);