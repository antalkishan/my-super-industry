import React from "react";
import { Box, Typography, InputBase } from "@mui/material";
import { makeStyles } from "tss-react/mui";
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search'
import Drawer from "./Drawer";

const useStyles = makeStyles()((theme) => ({
    SupTextEmployees: {
        fontWeight: '500',
        fontSize: '26px',
    },
    SupTextAndDrawerCssStyleMui : {
        display:'flex',
        alignItems:'center',
        textAlign:'center',
        justifyContent:'space-between',
        marginBottom:'16px'
    } 
}))

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 1.3),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRight: '1px solid rgba(213, 218, 224, 1)',
    color: 'rgba(0, 0, 0, 0.26)',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        border: '1px solid rgba(187, 191, 196, 1)',
        borderRadius: '4px',
        width: '27ch'
    },
 
}));


export default function Employees() {
    const { classes } = useStyles();
    return (
        <>
            <Box>
                <Box>
                    <Box>
                        <Box className={classes.SupTextAndDrawerCssStyleMui}>
                            <Typography variant="h3" className={classes.SupTextEmployees}>
                                Employees
                            </Typography>
                            <Drawer />
                        </Box>
                        <Search>
                            <SearchIconWrapper>
                                <SearchIcon sx={{ fontSize: '1.25rem' }} />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search Here"
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>
                    </Box>
                </Box>
            </Box>
        </>
    )
}