import React from "react";
import { Box } from '@mui/material'
import { makeStyles } from 'tss-react/mui';

const useStyle = makeStyles()(({ theme }) => ({
    SupMainLoginCssStyleMui: {
        background: 'linear-gradient(147.59deg, #317DF4 -53.12%, #FFFFFF 131.46%)'
    }
}))

export default function Login() {

    const { classes } = useStyle()

    return (
        <>
            <Box>
                <Box className={classes.SupMainLoginCssStyleMui}>
                    
                </Box>
            </Box>
        </>
    )
}