import React, { useState } from "react";
import { Box, InputLabel, TextField, InputAdornment, IconButton } from "@mui/material";
import { makeStyles } from "tss-react/mui";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const useStyle = makeStyles()(({ theme }) => ({
    InputLabelTextField: {
        fontSize: '14px',
        color: 'black',
        textAlign: 'start',
        marginBottom: '4px',
        marginRight: '2px'
    },
    CaptionValidCssStyleMui: {
        color: 'rgb(239, 98, 122)',
        fontFamily: 'Inter, sans-serif'
    }
}));

export default function CommonTextField({
    id,
    placeholder,
    InputLabelTextField,
    captionValid,
    onClick,
    type,
    InputProps,
    ...rest
}) {
    const { classes } = useStyle();
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => {
        setShowPassword((show) => !show);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const inputType = type === 'password' 
        ? (showPassword ? 'text' : 'password') 
        : type;

    const combinedInputProps = {
        ...InputProps,
        ...(type === 'password' ? {
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
        } : {})
    };

    return (
        <Box>
            <Box>
                <Box sx={{ display: 'flex' }}>
                    <InputLabel className={classes.InputLabelTextField}>{InputLabelTextField}</InputLabel>
                    <caption className={classes.CaptionValidCssStyleMui}>{captionValid}</caption>
                </Box>
                <TextField
                    id={id}
                    variant="outlined"
                    onClick={onClick}
                    type={inputType}
                    placeholder={placeholder}
                    fullWidth
                    required
                    size="small"
                    InputLabelProps={{ shrink: true }}
                    InputProps={combinedInputProps}
                    {...rest}
                />
            </Box>
        </Box>
    );
}