import React from 'react'
import finwise from '../images/finwise-home.png';
import work from '../images/work.png';
import innovate from '../images/innovate.png';
import save from '../images/save.png';
import empower from '../images/empower.png';

import {
    Container,
    Grid,
    Card,
    CardMedia,
    CardContent,
    Typography,
  } from "@mui/material";

const HomePage: React.FC = () => {
    return (
        <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <h1 style={{ fontSize: '4em' }}>Get WISE together!</h1>
            <h2 style={{ fontSize: '2em' }}>Dream big, Get WISE.</h2>
            <img style={{ width: 500, height: 600 }} src={finwise}/>
            <h2 style={{ fontSize: '2em' }}>Our Mission</h2>
            <h2 style={{ fontSize: '1em' }}>FinWISE serves as an all-in-one financial life planner to turn your dreams into financial success.</h2>

            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                            <Card>
                            <center> <img style={{ width: 80, height: 80 }} src={work}/></center>

                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                    Work
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                    Break down your dreams into actionable steps that align with your financial future.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Card>
                        <center> <img style={{ width: 80, height: 80 }} src={innovate}/></center>
                        <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                Innovate
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                Leverage smart tools and insights to make informed decisions about your money and goals.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Card>
                           <center> <img style={{ width: 80, height: 80 }} src={save}/></center>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                Save
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                Develop consistent habits to allocate resources toward what truly matters to you.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Card>
                        <center> <img style={{ width: 80, height: 80 }} src={empower}/></center>

                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                Empower
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                Build confidence and independence through knowledge, tools, and a community that supports your growth.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
               </Grid>
            </Container>

            <h2 style={{ fontSize: '2em' }}>Why FinWise?</h2>
            <ul>
                <li>For Students, By Design</li>
                <li>Education Meets Empowerment</li>
                <li>Goal-Oriented Focus</li>
                <li>Community Support</li>
            </ul>
            <h2 style={{ fontSize: '2em' }}>Choose FinWise today!</h2>
        </div>
    )
}

export default HomePage
