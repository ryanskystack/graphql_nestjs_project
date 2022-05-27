
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Link } from 'react-router-dom';
import '../style.css';



const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky">
        <Toolbar>
          <Link to="/" style={{ textDecoration: 'none',color:'white' }}><Button color="inherit">Latest</Button></Link>
          <Link to="/management" style={{ textDecoration: 'none',color:'white' }}><Button color="inherit">Management</Button></Link>         
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;

