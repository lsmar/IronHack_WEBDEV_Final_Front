import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";
import AddNewProfessor from "../pages/addNewProfessor";
import AddNewProject from "../pages/addNewProject";
import CreatePassword from "../pages/createPassword";
import ProjectCreated from "../pages/projectCreated";
import ProfessorCreated from "../pages/professorCreated";
import RecordBookMainPage from "../pages/RecordBookMainPage";
import RecordBookPerDate from "../pages/RecordBookPerDate";
import RecordBookPerStudent from "../pages/RecordBookPerStudent";
import EditProject from "../pages/editProject";
import DeleteProject from "../pages/deleteProject";
import Home from '../pages/Home';
import MyProjects from '../pages/meusProjetos';
import Conta from '../pages/conta';
import Chart from '../pages/chart'


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
      <PrivateRoute role='' exact path="/project" component={Home} />
      <PrivateRoute role='TEACHER' path='/project/my' component={MyProjects} />
      <PrivateRoute role='' path='/conta' component={Conta} />
      <PrivateRoute path="/app" role="TEACHER" component={() => <h1>App</h1>} />
      <Route path="/newTeacher" role="COORDINATOR" component={AddNewProfessor} />
      <Route path="/newUser/:token" role="" component={CreatePassword} />
      <Route path="/newUser" role="COORDINATOR" component={AddNewProfessor} />
      <Route path="/newProject" role="" component={AddNewProject} />
      <Route path="/projectCreated" role="" component={ProjectCreated} />
      <Route path="/professorCreated" role="" component={ProfessorCreated} />
      <Route exact path="/project/:id/recordBook" role="" component={RecordBookMainPage} />
      <Route exact path="/project/:id/recordBook/:date" role="" component={RecordBookPerDate} />
      <Route exact path="/project/:id/recordBook/:date/:idRecord" role="" component={RecordBookPerStudent} />
      <Route exact path="/project/:id" role="" component={ProjectDetail} />
      <Route exact path="/project/edit/:id" role="" component={EditProject} />
      <Route exact path="/project/delete/:id" role="" component={DeleteProject} />
      <Route exact path="/project/review/:projectId/student/:studentId" role="" component={Chart} />
      <Route path="*" component={() => <h1>Page not found</h1>} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
