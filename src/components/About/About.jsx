import React from 'react'
import { Typography, Divider, Card, CardActions, CardContent, Button, CssBaseline, Container } from '@material-ui/core';
import { Link } from 'react-router-dom';
import useStyles from './styles';

const About = () => {
    const classes = useStyles();
    
    return (
        <>
            <CssBaseline />
            <Divider className={classes.divider} />
            <Typography variant="h6" gutterBottom className={classes.about}>About</Typography>
            <Card className={classes.root} >
                <CardContent>
                    <Typography variant="body2" component="p">
                        606Microgreens was started in 2020 by Osvaldo Romero and his family. They operate out of a small studio in the Humboldt Park area and offer their services along the bike trail “The 606” to both the public and businesses in the area.The public enjoys the multiple nutritional benefits from these young plants.While the restaurants chefs can enjoy the beautiful colors and unique flavors produced by microgreens such as radish.
                        <br />
                        <br />
                        <div className={classes.quote}>
                            {'"I saw there was a shortage of local producers of microgreens in my community so I decided to step up and offer home delivery to those in my area. The more people know about microgreens the healthier we can become as a community! "'}
                            <br />
                            -Osvaldo Romero
                        </div>
                    </Typography>
                </CardContent>
                <CardActions >
                    <Button variant="contained" color="primary" size="small" component={Link} to='/research' >Learn More</Button>
                </CardActions>
            </Card>
            <Container>
                <br />
                <Typography variant="h6" gutterBottom className={classes.about} >
                    Buisness Hours
                </Typography>
                <table border='solid black' width='100%' background-Color='blue'>
                    <tr>
                        <th>Tuesday</th>
                        <th>Thursday</th>
                    </tr>
                    <tr>
                        <td>Public Deliveries</td>
                        <td>Restaurant Deliveries</td>
                    </tr>
                    <tr>
                        <td>8 AM 6 PM</td>
                        <td>8 AM-4 PM</td>
                    </tr>
                </table>
            </Container>
        </>
    )
}

export default About;
