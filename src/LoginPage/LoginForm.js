import React, { useState } from "react";
import { Grid, Typography } from "@mui/material";
import { makeStyles } from "tss-react/mui";
import Logo from './Logo';
import CommonTextField from '../Common/CommonTextField'
import CommonCard from '../Common/CommonCard'
import CommonButton from '../Common/CommonButton'
import CommonLink from '../Common/CommonLink'
import TrollyBoyBox from "./TrollyBoyBox";

const useStyles = makeStyles()((theme) => ({
    LogoTextCssStyleMui: {
        fontSize: '24px',
        fontWeight: '700',
        color: 'rgb(37, 86, 161)',
        textAlign: 'left',
        [theme.breakpoints.up(600)]: {
            fontSize: '30px'
        }
    },
    GridMediaSmall: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
        flexDirection: 'column',
        width: '100%',
        [theme.breakpoints.up(600)]: {
            flexDirection: 'row',
            flexWrap: 'nowrap',
            justifyContent: 'flex-start',
        }
    },
    GridSmallScreenLogoAndText: {
        width: '100%',
        textAlign: 'start',
        [theme.breakpoints.up(600)]: {
            width: 'auto'
        }
    }
}));

export default function LoginForm() {
    const { classes } = useStyles();
    const [showPassword, setShowPassword] = useState(false);

    return (
        <>
            <CommonCard>
                <Grid container spacing={2} className={classes.GridMediaSmall}>
                    <Grid item className={classes.GridSmallScreenLogoAndText}>
                        <Logo />
                    </Grid>
                    <Grid item className={classes.GridSmallScreenLogoAndText}>
                        <Typography variant="h3" className={classes.LogoTextCssStyleMui}>
                            Login
                        </Typography>
                        <Typography variant="subtitle1">
                            Please Enter Your Detail For Login
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item xs={12} sx={{ marginTop: '16px', marginBottom: '16px' }}>
                    <CommonTextField
                        InputLabelTextField='Email Id'
                        placeholder="Enter Your Email Id"
                        captionValid='*'
                        fullWidth
                        required
                        size="small"
                    />
                </Grid>
                <Grid item xs={12}>
                    <CommonTextField
                        InputLabelTextField="Password"
                        placeholder="Enter Your Password"
                        captionValid='*'
                        type={showPassword ? 'text' : 'password'}
                        fullWidth
                        required
                        size="small"
                    />
                </Grid>
                <Grid item xs={12}>
                    <CommonLink
                        pathName='Forgot Password?'
                        href='#'
                    />
                </Grid>
                <Grid item xs={12}>
                    <CommonButton />
                </Grid>
                <Grid item xs={12}>
                    <Grid textAlign='start'>
                        <TrollyBoyBox />
                    </Grid>
                </Grid>
            </CommonCard>
        </>
    );
};