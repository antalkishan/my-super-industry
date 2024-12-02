
import React, { useState } from "react";
import { Button, Link, Grid, Typography, Card, InputAdornment, IconButton, TextField } from "@mui/material";
import { makeStyles } from "tss-react/mui";
import Logo from './Logo';
import ImagesLoginForm from '../assets/TrollyBox.png';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import CommonTextField from '../Common/CommonTextField'

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
        backgroundColor: '#fff', // Keep content readable.
        padding: '24px',
        [theme.breakpoints.up(600)]: {
            padding: '30px 47px',
        }
    },
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
    forgotPassword: {
        marginTop: theme.spacing(0.5),
        display: "block",
        textAlign: "left",
        textDecoration: 'none',
        color: 'rgb(37, 86, 161)',
    },
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

const LoginForm = () => {
    const { classes } = useStyles();
    const [showPassword, setShowPassword] = useState(false);

    // Toggle password visibility
    const handleClickShowPassword = () => {
        setShowPassword((show) => !show);
    };

    // Prevent default action on mouse down
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <Grid container className={classes.MainFormContainer}>
            <Card className={classes.formContainer}>
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
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label={showPassword ? 'hide password' : 'show password'}
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Link href="#" className={classes.forgotPassword}>
                        Forgot Password?
                    </Link>
                </Grid>
                <Grid item xs={12}>
                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.loginButton}
                    >
                        Login
                    </Button>
                </Grid>
                <Grid item xs={12}>
                    <Grid textAlign='start'>
                        <img src={ImagesLoginForm} alt="Images" />
                    </Grid>
                </Grid>
            </Card>
        </Grid>
    );
};

export default LoginForm;