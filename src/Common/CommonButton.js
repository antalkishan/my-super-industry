import React from "react";
import { Box, Button } from "@mui/material";
import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => ({
    loginButton: {
        marginTop: theme.spacing(2),
        textTransform: 'capitalize',
        backgroundColor: 'rgb(37, 86, 161)',
        width: '100px',
        height: '45px',
        boxShadow: 'none',
        [theme.breakpoints.up(600)]: {
            height: '45px',
            width: '160px'
        }
    },
}));

export default function LoginForm() {

    const { classes } = useStyles();

    return (
        <>
            <Box>
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.loginButton}
                >
                    Login
                </Button>
            </Box>
        </>
    );
};