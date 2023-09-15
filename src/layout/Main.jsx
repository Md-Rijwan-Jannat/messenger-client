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
            <div className="flex flex-row bg-[#F0F5FA] h-screen px-4">
                <div className="hidden md:block md:w-[70px] bg-gray-50">
                <LeftSidebar />
                </div>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={3}>
                        {/* Mobile: Takes full width (12 columns) */}
                        <Grid item xs={12} sm={3} md={3}>
                            <Outlet />
                        </Grid>

                        {/* Tablet: Takes 6 columns on small screens and 4 columns on medium and larger screens */}
                        {/* Hide this Grid item on mobile screens */}
                        <Grid item xs={6} sm={6} md={5} sx={{ display: { xs: 'none', sm: 'block' } }}>
                            <Message />
                        </Grid>

                        {/* Desktop: Takes full width (12 columns) */}
                        <Grid item xs={12} sm={3} md={3}>
                            <UserProfile />
                        </Grid>
                    </Grid>
                </Box>
            </div>
        </Container>
    )
}
