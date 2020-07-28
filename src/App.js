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
import LoginPage from "./components/LoginPage";
import StudentDashboard from "./components/StudentViews/StudentDashboard";
import StaffDashboard from "./components/StaffViews/StaffDashboard";
import AdminDashboard from "./components/AdminViews/AdminDashboard";
import RecoverLoginDetails from "./components/RecoverLoginDetails";
import WelcomePage from "./components/WelcomePage";
import ErrorPage from "./components/ErrorPage";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/welcome" component={WelcomePage}></Route>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/login" component={LoginPage}></Route>
        <Route exact path="/about" component={AboutPage}></Route>
        <Route exact path="/privacy" component={PrivacynCookies}></Route>
        <Route exact path="/terms-of-use" component={TermsOfUse}></Route>
        <Route exact path="/register" component={RegistrationPage}></Route>
        <Route exact path="/demo" component={DemoPage}></Route>
        <Route exact path="/subscribe" component={SubscribePage}></Route>
        <Route exact path="/help" component={HelpPage}></Route>
        <Route exact path="/more-info" component={MoreInfoPage}></Route>
        <Route
          exact
          path="/recover-details"
          component={RecoverLoginDetails}
        ></Route>
        <Route
          exact
          path="/student/dashboard"
          component={StudentDashboard}
        ></Route>
        <Route exact path="/staff/dashboard" component={StaffDashboard}></Route>
        <Route exact path="/admin/dashboard" component={AdminDashboard}></Route>
        <Route path="*" component={ErrorPage}></Route>
      </Switch>
    </>
  );
};

export default App;
