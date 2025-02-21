// Filename - Header.js

import * as React from "react";

import { AppBar, Toolbar, Typography, Button } from '@mui/material'; 
import { Link } from 'react-router';

import './styles/App.css'; 
import { ROUTES } from './resources/routes-constants'

import finwise from './images/finwise-logo.jpg';
import { TypeAnimation } from "react-type-animation";

export default function Header() {
    return (
        <AppBar position="static">
            <Toolbar>
                <img style={{ width: 200, height: 100 }} src={finwise}/>
                    {/* The Typography component applies 
                     default font weights and sizes */}
                     &nbsp;&nbsp;&nbsp;
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} >
                    <TypeAnimation
                        sequence={[
                        "",
                        1000,
                        "Work,",
                        1000,
                        "Work, Innovate,",
                        1000,
                        "Work, Innovate, Save,",
                        1000,
                        "Work, Innovate, Save, Empower!",
                        1000,
                        ]}
                        className="h2"
                        speed={50}
                        repeat={Infinity}
                      />
                </Typography>

                <Button variant="dark" href="/">Home</Button>
                <Button variant="dark" href={ROUTES.DASHBOARDPAGE_ROUTE}>Summary</Button>
                <Button variant="dark" href={ROUTES.TRANSPAGE_ROUTE}>Transactions</Button>
                <Button variant="dark" href={ROUTES.ARTICLEPAGE_ROUTE}>Articles</Button>
                <Button variant="dark" href={ROUTES.ABOUTPAGE_ROUTE}>About us</Button>

            </Toolbar>
        </AppBar>
    );
}