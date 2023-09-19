import { Outlet } from "react-router-dom"
import { Header } from "../components/header/Header"
import { Box } from "@mui/material"
import Grid from '@mui/material/Grid';
import { UserProfile } from "../components/userProfile/UserProfile";
import { Message } from "../components/messages/Message";
import { Container } from "../components/Container";
import { LeftSidebar } from "../components/leftSidebar/LeftSidebar";


export const Main = () => {
    return (

        <Container>
            <Header />
            <div className="flex flex-col md:flex-row px-4">
                <div className="hidden md:block">
                    <LeftSidebar />
                </div>
                <div className="pl-[150px] px-2 pt-32 h-screen min-w-full bg-[#F0F5FA]">
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={3}>
                            {/* Mobile: Takes full width (12 columns) */}
                            <Grid item xs={12} md={3}>
                                <Outlet />
                            </Grid>

                            {/* Tablet and larger: Takes 4 columns */}
                            <Grid item xs={12} md={6}>
                                <Message />
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <UserProfile />
                            </Grid>
                        </Grid>
                    </Box>
                </div>
            </div>
        </Container>
    )
}


