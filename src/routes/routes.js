import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";
import AddProfessor from "../pages/AddProfessor";

import { isAuthenticated } from "../services/auth";

const PrivateRoute = ({ component: Component, role, ...rest }) => (
  <Route
    {...rest}
    render={props => (isAuthenticated(role) ? <Component {...props} /> : <Redirect to={{ pathname: "/", state: { from: props.location } }} />)}
  />
);

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/signup" component={SignUp} />
      <PrivateRoute path="/app" role="TEACHER" component={() => <h1>App</h1>} />
      <PrivateRoute path="/user" role="COORDINATOR" component={AddProfessor} />
      <Route path="*" component={() => <h1>Page not found</h1>} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
