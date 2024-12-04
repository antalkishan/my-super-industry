import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import CommonTextField from '../Common/CommonTextField';
import CommonButton from '../Common/CommonButton';
import CommonDrawer from '../Common/CommonDrawer';

export default function EmployeeDrawer() {
    const [open, setOpen] = React.useState(false);
    const [showPassword, setShowPassword] = React.useState(false);
    const [selectedFile, setSelectedFile] = React.useState(null);

    const toggleDrawer = (state) => () => setOpen(state);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) setSelectedFile(file);
    };

    return (
        <Box>
            <CommonButton
                onClick={toggleDrawer(true)}
                startIcon={<AddIcon />}
                style={{ height: 37, width: '160px' }}
                text="Add Employees"
            />
            <CommonDrawer open={open} onClose={toggleDrawer(false)} title="Add Employees">
                <Grid container spacing={3}>
                    <Grid item xs={8}>
                        <CommonTextField
                            InputLabelTextField="Name"
                            captionValid="*"
                            placeholder="Enter Name"
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <CommonTextField
                            InputLabelTextField="Id Number"
                            captionValid="*"
                            placeholder="Enter ID Number"
                        />
                    </Grid>
                </Grid>

                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <CommonTextField
                            select
                            placeholder="Role"
                            InputLabelTextField="Role"
                            captionValid="*"
                            SelectProps={{ native: true }}
                        >
                            <option value="">Select</option>
                            <option value="admin">Admin</option>
                            <option value="employee">Employee</option>
                        </CommonTextField>
                    </Grid>
                    <Grid item xs={6}>
                        <CommonTextField
                            InputLabelTextField="Joining Date"
                            captionValid="*"
                            type="date"
                            placeholder="Joining Date"
                            InputProps={{ shrink: true }}
                        />
                    </Grid>
                </Grid>

                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <CommonTextField
                            InputLabelTextField="Mobile Number"
                            captionValid="*"
                            placeholder="Enter Mobile Number"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <CommonTextField
                            InputLabelTextField="Given Mobile Number"
                            captionValid="*"
                            placeholder="Given Mobile Number"
                        />
                    </Grid>
                </Grid>

                <Grid container spacing={3}>
                    <Grid item xs={4}>
                        <CommonTextField
                            InputLabelTextField="Email Id"
                            captionValid="*"
                            placeholder="Enter Email ID"
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <CommonTextField
                            placeholder="Enter Password"
                            InputLabelTextField="Password"
                            captionValid="*"
                            type={showPassword ? 'text' : 'password'}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <CommonTextField
                            InputLabelTextField="Confirm Password"
                            captionValid="*"
                            placeholder="Enter Confirm Password"
                            type="password"
                        />
                    </Grid>
                </Grid>

                <Box>
                    <Typography variant="body2" sx={{ mb: 1 }}>
                        Profile Image
                    </Typography>
                    <Box sx={{ border: '1px solid rgba(0, 0, 0, 0.26)', borderRadius: '4px', padding: '32px' }}>
                        <Box textAlign="center">
                            <input
                                id="file-upload"
                                type="file"
                                accept="image/*"
                                style={{ display: 'none' }}
                                onChange={handleFileChange}
                            />
                            <label htmlFor="file-upload" style={{ display: 'inline-block' }}>
                                <CommonButton
                                    onClick={() => document.getElementById('file-upload').click()}
                                    text="Choose File"
                                    size="small"
                                    style={{ height: '38px', width: '113px' }}
                                />
                                or Drop Here
                            </label>
                            {selectedFile && (
                                <Typography variant="body1" sx={{ mt: 2 }}>
                                    Selected file: {selectedFile.name}
                                </Typography>
                            )}
                        </Box>
                    </Box>
                </Box>

                <Box textAlign="center">
                    <CommonButton text="Add" style={{ height: 36, width: 100 }} />
                </Box>
            </CommonDrawer>
        </Box>
    );
}
