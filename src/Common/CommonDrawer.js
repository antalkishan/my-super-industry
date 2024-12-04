import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
    header: {
        backgroundColor: 'rgb(37, 86, 161)',
        display: 'flex',
        height: '50px',
        alignItems: 'center',
        padding: '0 32px',
        justifyContent: 'space-between',
    },
    headerText: {
        color: 'white',
        fontSize: '1.25rem',
        fontWeight: '700',
    },
}));

export default function CommonDrawer({ open, onClose, title, children }) {
    const { classes } = useStyles();

    return (
        <Drawer
            anchor="right"
            open={open}
            onClose={onClose}
            sx={{ '& .MuiDrawer-paper': { width: 600 } }}
        >
            <Box>
                <Box className={classes.header}>
                    <Typography variant="h6" className={classes.headerText}>
                        {title}
                    </Typography>
                    <CloseIcon onClick={onClose} sx={{ color: 'white', cursor: 'pointer' }} />
                </Box>
                <Box
                    component="form"
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2,
                        padding: 3,
                    }}
                >
                    {children}
                </Box>
            </Box>
        </Drawer>
    );
}
