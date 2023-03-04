import { Typography, TextField, Button, CircularProgress, Alert } from '@mui/material';
import React, { useState } from 'react';
import { Grid } from '@mui/material';
import { NavLink, useHistory } from 'react-router-dom';
import { Box } from '@mui/system';
import useAuth from './../../../hooks/useAuth';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const history = useHistory();
    const { user, registerUser, isLoading, authError } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your password did not match');
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }
    return (
        <Box className="front-bg-login-page">
            <Grid container className="login-box">
                <Grid item>
                    <Typography variant="h2" gutterBottom className="login">Register</Typography>
                    {!isLoading && <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Name"
                            name="name"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            name="email"
                            type="email"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Password"
                            type="password"
                            name="password"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Confirm Password"
                            type="password"
                            name="password2"
                            onBlur={handleOnBlur}
                            variant="standard" />

                        <Button style={{
                            borderRadius: 35,
                            backgroundColor: "#331a15",
                            padding: "1% 7%",
                            fontSize: "18px"
                        }} sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Register</Button>

                        <br />

                        <NavLink style={{ textDecoration: 'none' }} to="/login">
                            <Button style={{
                                color: "#331a15"
                            }} variant="text">Already Registered? Please Login</Button>
                        </NavLink>
                    </form>}

                    {isLoading && <div className="d-flex justify-content-center"><CircularProgress /></div>}

                    {user?.email && <Alert severity="success">User Created successfully!</Alert>}

                    {authError && <Alert severity="error">{authError}</Alert>}
                </Grid>
            </Grid>
        </Box>
    );
};

export default Register;