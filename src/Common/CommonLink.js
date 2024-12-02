import React, { useState } from "react";
import { Link, Box } from "@mui/material";
import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => ({
    forgotPassword: {
        marginTop: theme.spacing(0.5),
        display: "block",
        textAlign: "left",
        textDecoration: 'none',
        color: 'rgb(37, 86, 161)',
    },
}));

export default function LoginForm({ pathName, href }) {

    const { classes } = useStyles();

    return (
        <>
            <Box>
                <Link href={href}
                    className={classes.forgotPassword}>
                    {pathName}
                </Link>
            </Box>
        </>
    );
};