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

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
          {/* Left-side Slide Navbar */}
          {/* Hide this Grid item on mobile screens */}
          <Grid item xs={1} sm={1} md={1} sx={{ display: { xs: 'none', sm: 'block', md: 'block' } }}>
            <LeftSidebar />
          </Grid>

          {/* Mobile: Takes full width (12 columns) */}
          <Grid item xs={12} sm={5} md={5}>
            <Setting />
          </Grid>

          {/* Tablet: Takes 6 columns on small screens and 4 columns on medium and larger screens */}
          {/* Hide this Grid item on mobile screens */}
          <Grid item xs={12} sm={5} md={5} >
            <SaveSetting />
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}
