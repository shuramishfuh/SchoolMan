import React from "react";
import { Route, Switch } from "react-router-dom";
import DemoPage from "./components/DemoPage";
import RegistrationPage from "./components/RegistrationPage";
import "bootstrap/dist/css/bootstrap.min.css";
import SubscribePage from "./components/SubscribePage";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import PrivacynCookies from "./components/PrivacynCookies";
import TermsOfUse from "./components/TermsOfUse";
import HelpPage from "./components/HelpPage";
import MoreInfoPage from "./components/MoreInfoPage";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/about" component={AboutPage}></Route>
        <Route exact path="/privacy" component={PrivacynCookies}></Route>
        <Route exact path="/terms-of-use" component={TermsOfUse}></Route>
        <Route exact path="/register" component={RegistrationPage}></Route>
        <Route exact path="/demo" component={DemoPage}></Route>
        <Route exact path="/subscribe" component={SubscribePage}></Route>
        <Route exact path="/help" component={HelpPage}></Route>
        <Route exact path="/more-info" component={MoreInfoPage}></Route>
      </Switch>
    </>
  );
};

export default App;
