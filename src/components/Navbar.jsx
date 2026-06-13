import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import logo from "../assets/logo.svg";
import useMediaQuery from '@mui/material/useMediaQuery';
import TemporaryDrawer from "./Drawer";


export default function AppNavbar() {
  const isDesktop = useMediaQuery('(min-width:768px)');
  return (
    <AppBar position="static" sx={{zIndex: 7, backgroundColor:"#044e52" , height:64,position:"fixed"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
            <Box component="img" src={logo} alt="logo" sx={{ width: 50 }} />
            <Typography variant="h5" component="div" sx={{flexShrink: 1, fontWeight: 800, margin:1 }}>
            Hyper Notes
          </Typography>
            </Box>
          {/* show drawer button only on screens <= 767px */}
          {!isDesktop && (
            <Box sx={{ flexGrow: 0 }}>
              <TemporaryDrawer />
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
