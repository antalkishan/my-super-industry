import React from "react";
import { Grid } from "@mui/material";
import { makeStyles } from "tss-react/mui";
import LoginForm from './LoginForm';
import MainImages from '../assets/Group 1000003217.png'

const useStyles = makeStyles()((theme) => ({
    SupMainBoxCssStyleMui: {
        minHeight: '100vh',
        backgroundColor: theme.palette.background.default,
    },
    imageContainer: {
        display: 'none',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.up('lg')]: { // Use 'lg' for 1200px breakpoint.
            display: 'flex',
        },
    },
    image: {
        width: "100%",
        maxWidth: '900px',
    },
}));

const LoginPage = () => {
    const { classes } = useStyles();

    return (
        <Grid container className={classes.SupMainBoxCssStyleMui}>
            <Grid item xs={12} lg={6} className={classes.imageContainer}>
                <img src={MainImages} alt="Factory Illustration" className={classes.image} />
            </Grid>
            <Grid item xs={12} lg={6}>
                <LoginForm />
            </Grid>
        </Grid>
    );
};

export default LoginPage;
