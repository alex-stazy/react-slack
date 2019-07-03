import React, { Component } from "react";

import { Container } from "react-bootstrap";

import Header from "../shared/header/header";
import Login from "./login";
import Register from "./register";

class AuthController extends Component {
  logout = e => {
    e.preventDefault();

    this.setState({
      logIn: false,
      user: null,
      error: true,
      errorMessage: "Vous avez été déconnecté"
    });
  };

  login = () => {};

  render() {
    return (
      <Container>
        <Header />
        <Login login={this.login} />
        <hr />
        <Register />
      </Container>
    );
  }
}

export default AuthController;
