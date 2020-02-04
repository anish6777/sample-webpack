import React, { Component } from "react";
import NavBar from "./containers/NavBar";
import { Router } from "@reach/router";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import UserVerification from "./components/UserVerification";
import UserType from "./components/UserType";
import GlobalStyle from "./styles/Global";

class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <GlobalStyle />
        <Router>
          <Home path="/" />
          <Register path="register" />
          <Login path="login" />
          <UserVerification path="userverify" />
          <UserType path="usertype" />
        </Router>
      </>
    );
  }
}
export default App;
