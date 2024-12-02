import React from "react";
import ImagesLoginForm from '../assets/TrollyBox.png';
import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => ({
    TrollyBoyBoxImages: {
        width: '100%',
        height: 'auto',
        maxWidth: '165px'
    }
}))

export default function TrollyBoyBox() {

    const { classes } = useStyles();

    return (
        <>
            <img src={ImagesLoginForm} className={classes.TrollyBoyBoxImages} alt="Images" />
        </>
    );
};