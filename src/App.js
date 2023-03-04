import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Dashboard from "./component/Dashboard/Dashboard/Dashboard";
import Home from './component/Home/Home';
import Login from './component/Login/Login/Login';
import PrivateRoute from "./component/Login/PrivateRoute/PrivateRoute";
import Register from './component/Login/Register/Register';
import NotFound from "./component/NotFound/NotFound";
import ProductDetail from "./component/ProductDetail/ProductDetail";
import Products from "./component/Products/Products";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/products">
              <Products></Products>
            </Route>
            <PrivateRoute path="/product/:productId">
              <ProductDetail></ProductDetail>
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/register">
              <Register></Register>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
