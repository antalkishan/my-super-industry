
import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { Box, Drawer, CssBaseline, AppBar as MuiAppBar, Toolbar, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import MailIcon from '@mui/icons-material/Mail';
import PeopleIcon from '@mui/icons-material/People';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import { NavLink, Outlet } from 'react-router-dom';
import { makeStyles } from 'tss-react/mui';
import useMediaQuery from '@mui/material/useMediaQuery';

const useStyles = makeStyles()((theme) => ({
    SupTextMainDrawer: {
        fontSize: '24px',
        fontWeight: '700',
        color: 'rgb(255, 255, 255)'
    },
    SupMainLogoTextCssStyleMui: {
        padding: '15px',
        display: 'flex',
        justifyContent: 'center'
    },
    ListItemButtonCssStyleMui: {
        color: 'white',
        marginLeft: '16px',
        marginBottom: '16px',
        '&.active': {
            backgroundColor: 'rgb(243, 248, 255)',
            color: 'rgb(37, 86, 161)',
            borderRadius: '25px 0px 0px 25px',
            position: 'relative',
            '&::after': {
                content: '""',
                position: 'absolute',
                top: '-40px',
                right: '0px',
                width: '40px',
                height: '40px',
                background: 'transparent',
                borderRadius: '50%',
                boxShadow: 'rgb(243, 248, 255) 20px 20px 0px',
            },
            '&::before': {
                content: '""',
                position: "absolute",
                bottom: "-40px",
                right: '0px',
                width: '40px',
                height: '40px',
                background: 'transparent',
                borderRadius: '50%',
                boxShadow: 'rgb(243, 248, 255) 20px -20px 0px'
            }
        },
        '&:hover': {
            borderRadius: '25px 0px 0px 25px'
        },
    },
    ListItemIconCssStyleMui: {
        color: 'white',
        '&:hover': {
            color: 'rgb(37, 86, 161)',
        },
        '.active &': {
            color: 'rgb(37, 86, 161)',
        }
    },
    SupMenuIconCssStyleMui: {
        color: 'rgb(0, 0, 0)'
    }
}));

const drawerWidth = 240;

const routes = [
    { path: '/employees', label: 'Employees', icon: <PeopleIcon /> },
    { path: '/products', label: 'Products', icon: <ProductionQuantityLimitsIcon /> },
    { path: '/mail', label: 'Mail', icon: <MailIcon /> },
];

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(1),
        overflowX: 'auto',
        [theme.breakpoints.up(600)]: {
            padding: theme.spacing(3),
        },
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: open ? 0 : `-${drawerWidth}px`,
        backgroundColor: 'rgb(243, 248, 255)'
    }),
);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    backgroundColor: 'rgb(255, 255, 255)',
    boxShadow: 'none',
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

export default function PersistentDrawerLeft() {
    const { classes } = useStyles();
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down(600))
    const [open, setOpen] = React.useState(!isSmallScreen);

    React.useEffect(() => {
        setOpen(!isSmallScreen);
    }, [isSmallScreen]);

    const toggleDrawer = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="toggle drawer"
                        onClick={toggleDrawer}
                        edge="start"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon className={classes.SupMenuIconCssStyleMui} />
                    </IconButton>
                    <Box>
                        <Typography variant="h6" noWrap component="div">
                            Persistent drawer
                        </Typography>
                    </Box>
                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                        background: 'rgb(37, 86, 161)',
                        borderRadius: '0px 25px 25px 0px',
                        borderRight: 'none'
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <Box>
                    <Box className={classes.SupMainLogoTextCssStyleMui}>
                        <Typography variant='p' component='p'
                            className={classes.SupTextMainDrawer}>
                            Super Industry
                        </Typography>
                    </Box>
                </Box>
                <List sx={{ padding: '0' }}>
                    {routes.map((route) => (
                        <ListItem key={route.label} disablePadding>
                            <ListItemButton
                                component={NavLink}
                                to={route.path}
                                className={classes.ListItemButtonCssStyleMui}
                            >
                                <ListItemIcon className={classes.ListItemIconCssStyleMui}>
                                    {route.icon}
                                </ListItemIcon>
                                <ListItemText primary={route.label} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <Main open={open}>
                <Box>
                    <Toolbar />
                    <Outlet />
                </Box>
            </Main>
        </Box>
    );
}
