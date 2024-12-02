import React from "react";
import MainLogo from '../assets/mainLogo.png'
import { Box } from '@mui/material'

export default function Logo() {
    return (
        <>
            <Box>
                <Box>
                    <img src={MainLogo} height={80} width={100} alt="Main-Logo" />
                </Box>
            </Box>
        </>
    )
}