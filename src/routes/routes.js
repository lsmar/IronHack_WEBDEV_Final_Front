import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";
import AddNewProfessor from "../pages/addNewProfessor";
import AddNewProject from "../pages/addNewProject";
import CreatePassword from "../pages/createPassword";
import ProjectCreated from "../pages/projectCreated";
import ProfessorCreated from "../pages/professorCreated";
import Home from '../pages/Home'


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
      <Route path="/home" component={Home} />
      <PrivateRoute path="/app" role="TEACHER" component={() => <h1>App</h1>} />
      <Route path="/newTeacher" role="COORDINATOR" component={AddNewProfessor} />
      <Route path="/newUser/:token" role="" component={CreatePassword} />
      <Route path="/newUser" role="COORDINATOR" component={AddNewProfessor} />
      <Route path="/newProject" role="" component={AddNewProject} />
      <Route path="/projectCreated" role="" component={ProjectCreated} />
      <Route path="/professorCreated" role="" component={ProfessorCreated} />
      <Route path="*" component={() => <h1>Page not found</h1>} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
