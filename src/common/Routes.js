import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import Dashboard from "../components/Dashboard";

const Routes = () => {
  let auth = localStorage.getItem("email");
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            {auth ? <Dashboard /> : <Redirect to="/signin" />}
          </Route>
          <Route path="/signup" exact component={SignUp} />
          <Route path="/signin" exact component={SignIn} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Routes;
