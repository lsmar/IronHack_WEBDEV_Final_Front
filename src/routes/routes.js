import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";
import AddNewProfessor from "../pages/addNewProfessor";
import AddNewProject from "../pages/addNewProject";

import { isAuthenticated } from "../services/auth";
import ProjectDetail from "../pages/projectDetail";

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
      <Route path="/newUser" role="COORDINATOR" component={AddNewProfessor} />
      <Route path="/newProject" role="" component={AddNewProject} />
      <Route path="/project/:id" role="" component={ProjectDetail} />
      <Route path="*" component={() => <h1>Page not found</h1>} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
