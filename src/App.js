import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginContext from "./context/LoginContext";
import TestComponent from "./components/TestComponent";
import Intro from "./components/Intro";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Signup from "./components/Signup";
import UserApps from "./components/UserApps";
import "./App.css";

function App() {
  const loggedIn = [{
    status: "false",
    user_id: 0,
    admin: ""
  }];

  return (
    <LoginContext.Provider value = {loggedIn[0]}>
      <Router>
        <Route exact path="/">
          <Header />
          <Intro />
          <Footer />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/applications">
          <UserApps />
        </Route>
      </Router>
      <TestComponent></TestComponent>
    </LoginContext.Provider>
  );
}

export default App;
