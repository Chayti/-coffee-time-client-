import { Typography, TextField, Button, CircularProgress, Alert } from '@mui/material';
import React, { useState } from 'react';
import { Grid } from '@mui/material';
import './Login.css';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import { Box } from '@mui/system';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, signInWithGoogle, isLoading, authError } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
    }
    return (
        <Box className="front-bg-login-page">
            <Grid container className="login-box">
                <Grid item>
                    <Typography variant="h2" gutterBottom className="login">Login</Typography>
                    <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            name="email"
                            onChange={handleOnChange}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Password"
                            type="password"
                            name="password"
                            onChange={handleOnChange}
                            variant="standard" />

                        <Button style={{
                            borderRadius: 35,
                            backgroundColor: "#331a15",
                            padding: "1% 7%",
                            fontSize: "18px"
                        }} sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Login</Button>

                        <NavLink style={{ textDecoration: 'none' }} to="/register">
                            <Button style={{
                                color: "#331a15"
                            }} variant="text">New User? Please Register</Button>
                        </NavLink>

                        {isLoading && <div className="d-flex justify-content-center"><CircularProgress /></div>}
                        {user?.email && <Alert severity="success">Login successfully!</Alert>}

                        {authError && <Alert severity="error">{authError}</Alert>}

                    </form>
                    <p>------------------------</p>

                    <Button style={{
                        border: "3px solid #331a15",
                        backgroundColor: "#d2b48c",
                        color: "#331a15"
                    }} onClick={handleGoogleSignIn} variant="contained">Google Sign In</Button>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Login;