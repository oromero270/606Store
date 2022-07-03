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
                    <Typography variant="body2" component="p" className={classes.aboutUs} >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis numquam reiciendis maiores explicabo odit necessitatibus nam obcaecati saepe aut dolores cumque laudantium, natus doloremque expedita veniam nesciunt unde, dolore reprehenderit?
                        <br />
                        <br />
                    </Typography>
                    <Typography className={classes.quote}>
                    
                    </Typography>
                </CardContent>
                <CardActions style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        align="center"
                        component={Link} to='/research'>Learn More
                    </Button>
                </CardActions>
            </Card>
            <Container>
                <br />
                <Typography variant="h6" gutterBottom className={classes.about} >
                    Buisness Hours
                </Typography>
                <table align="center" border='solid black' justifyContent='center' display='flex' className={classes.table}>
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
