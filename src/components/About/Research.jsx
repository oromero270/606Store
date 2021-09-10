import React from 'react'
import { Typography, Divider } from '@material-ui/core';
import useStyles from './styles';


const Research = () => {
    const classes = useStyles();
    return (
        <>
        <Divider className={classes.divider} />
        <Typography>Howdy</Typography>
        </>
    )
}

export default Research
