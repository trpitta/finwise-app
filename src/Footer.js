import React from 'react'
import { Link } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AppBar, Toolbar } from '@mui/material'; 

const Footer = () => {
  return (
    <AppBar position="static">
          <Toolbar>
            <h3 className="text-lg font-bold">Contact Us &nbsp;&nbsp;&nbsp;</h3>
            <p>Phone: +1 404-431-4373&nbsp;&nbsp;&nbsp;</p>
            <p>Email: finwise@gmail.com</p>
            <h3 className="text-lg font-bold">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h3>
            <br></br>
            <h3 className="text-lg font-bold">Connect With Us! &nbsp;&nbsp;&nbsp;</h3>
            Stay connected for up-to-date updates and tips!
          </Toolbar>
          
    </AppBar>
  );
};

export default Footer;