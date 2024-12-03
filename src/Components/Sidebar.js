import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { NavLink } from 'react-router-dom';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import { Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
    SupTextMainDrawer: {
        fontSize: '24px',
        fontWeight: '700',
        color: 'rgb(255, 255, 255)'
    },
    SupMainLogoTextCssStyleMui: {
        padding: '16px',
        display: 'flex',
        justifyContent: 'center'
    },
    ListItemButtonCssStyleMui: {
        color: 'white',
        marginLeft: '16px',
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
}))

const routes = [
    { path: '/dashboard', label: 'Dashboard', icon: <DashboardIcon /> },
    { path: '/employees', label: 'Employees', icon: <PeopleIcon /> },
    { path: '/inbox', label: 'Inbox', icon: <InboxIcon /> },
    { path: '/mail', label: 'Mail', icon: <MailIcon /> },
];

const drawerWidth = 243;

export default function Sidebar() {

    const { classes } = useStyles();

    return (
        <Box sx={{ display: 'flex' }}>
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
                variant="permanent"
                anchor="left"
            >
                <Box>
                    <Box className={classes.SupMainLogoTextCssStyleMui}>
                        <Typography variant='p'
                            className={classes.SupTextMainDrawer} >
                            Super Industry
                        </Typography>
                    </Box>
                </Box>
                <List>
                    {routes.map((route, index) => (
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
            <Box
                component="main"
                sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
            >
            </Box>
        </Box>
    );
}
