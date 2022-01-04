import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import { Button } from '@mui/material';
import DashboardHome from '../DashboardHome/DashboardHome';
import useAuth from './../../../hooks/useAuth';
import './Dashboard.css';
import Payment from '../Payment/Payment';
import MyOrders from '../MyOrders/MyOrders';
import AddReview from '../AddReview/AddReview';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AddProduct from '../AddProduct/AddProduct';
import ManageOrder from '../ManageOrder/ManageOrder';
import ManageProduct from '../ManageProduct/ManageProduct';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import AddPhoto from '../AddPhoto/AddPhoto';

const drawerWidth = 200;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let { path, url } = useRouteMatch();
    const { user, logout, admin } = useAuth();
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar style={{
                backgroundColor: "#d2b48c"
            }} />
            <Divider style={{ backgroundColor: "#331a15" }} />
            <Link to="/home"><Button style={{ color: "#d2b48c" }}>Home</Button></Link>
            <br />
            <Link to="/products"><Button style={{ color: "#d2b48c" }}>Products</Button></Link>
            <br />
            {
                !admin && <Box>
                    <Link to={`${url}/myOrders`}><Button style={{ color: "#d2b48c" }}>My Orders</Button></Link>
                    <br />
                    <Link to={`${url}/addReview`}><Button style={{ color: "#d2b48c" }}>Add Review</Button></Link>
                </Box>
            }

            {
                admin && <Box>
                    <Link to={`${url}/makeAdmin`}><Button style={{ color: "#d2b48c" }}>Make Admin</Button></Link>
                    <Link to={`${url}/addPhoto`}><Button style={{ color: "#d2b48c" }}>Add Photos</Button></Link>
                    <Link to={`${url}/addProduct`}><Button style={{ color: "#d2b48c" }}>Add A Product</Button></Link>
                    <Link to={`${url}/manageOrder`}><Button style={{ color: "#d2b48c" }}>Manage all Orders</Button></Link>
                    <Link to={`${url}/manageProduct`}><Button style={{ color: "#d2b48c" }}>Manage All Products</Button></Link>
                </Box>
            }
            {
                user.email
                    ? <button style={{
                        border: "3px solid #a88d67",
                        backgroundColor: "#d2b48c",
                        color: "#331a15"
                    }} onClick={logout} className="btn rounded-pill"><FontAwesomeIcon icon={faSignOutAlt} size="1x" />&nbsp;Log out</button>
                    : <p></p>
            }
        </div >
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar style={{
                    backgroundColor: "#331a15",
                    color: "#d2b48c"
                }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Hello, {user.displayName}
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />

                <Switch>
                    <Route exact path={path}>
                        <DashboardHome></DashboardHome>
                    </Route>
                    <Route exact path={`${path}/payment/:id`}>
                        <Payment></Payment>
                    </Route>
                    <Route exact path={`${path}/myOrders`}>
                        <MyOrders></MyOrders>
                    </Route>
                    <Route exact path={`${path}/addReview`}>
                        <AddReview></AddReview>
                    </Route>

                    <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                    <AdminRoute path={`${path}/addProduct`}>
                        <AddProduct></AddProduct>
                    </AdminRoute>
                    <AdminRoute path={`${path}/addPhoto`}>
                        <AddPhoto></AddPhoto>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageOrder`}>
                        <ManageOrder></ManageOrder>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageProduct`}>
                        <ManageProduct></ManageProduct>
                    </AdminRoute>
                </Switch>

            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;
