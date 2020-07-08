import React from "react";
import { Route, Switch } from "react-router-dom";
import DemoPage from "./components/DemoPage";
import RegistrationPage from "./components/RegistrationPage";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/register" component={RegistrationPage}></Route>
        <Route exact path="/demo" component={DemoPage}></Route>
      </Switch>
    </>
  );
};

export default App;
