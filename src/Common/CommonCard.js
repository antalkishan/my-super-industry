import React from "react";
import { Grid, Card, } from "@mui/material";
import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => ({
    MainFormContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        padding: '10px',
        background: 'linear-gradient(147.59deg, #317DF4 -53.12%, #FFFFFF 131.46%) !important',
        [theme.breakpoints.up('lg')]: {
            background: 'none',
        },
    },
    formContainer: {
        maxWidth: '500px',
        width: '100%',
        borderRadius: 10,
        boxShadow: 'none',
        textAlign: "center",
        backgroundColor: '#fff',
        padding: '24px',
        [theme.breakpoints.up(600)]: {
            padding: '30px 47px',
        }
    },
}));

const LoginForm = ({ children }) => {

    const { classes } = useStyles();

    return (
        <Grid container className={classes.MainFormContainer}>
            <Card className={classes.formContainer}>
                {children}
            </Card>
        </Grid>
    );
};

export default LoginForm;