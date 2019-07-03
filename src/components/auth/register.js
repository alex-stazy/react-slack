import React, { Component, createRef } from "react";
import { Form, Col, Row, Button } from "react-bootstrap";

import "./auth.css";

export default class LoginContainer extends Component {
  state = {
    userLogged: null,
    error: false,
    errorMessage: null
  };

  inputLogin = createRef();
  inputPassword = createRef();

  getUsers() {
    return JSON.parse(localStorage.getItem("users"));
  }

  handleSubmit = e => {
    e.preventDefault();
    const login = this.inputLogin.current.value;
    const password = this.inputPassword.current.value;

    if (login && password) {
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const user = users.find(user => user.login === login);
      if (!user) {
        users.push({ login: login, password: password });
        localStorage.setItem("users", JSON.stringify(users));

        this.setState({
          user: login,
          error: false,
          errorMessage: null
        });
        this.props.history.push("/");
      } else {
        this.setState({
          user: null,
          error: true,
          errorMessage: "Login déjà existant"
        });
      }
    }
  };

  handleChange = e => {
    e.preventDefault();
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <h2>S'enregistrer</h2>
        <Form.Group as={Row}>
          <Form.Label column sm="2">
            Email
          </Form.Label>
          <Col sm="10">
            <Form.Control ref={this.inputLogin} />
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Form.Label column sm="2">
            Password
          </Form.Label>
          <Col sm="10">
            <Form.Control ref={this.inputPassword} type="password" />
          </Col>
        </Form.Group>
        <Button variant="primary" type="submit">
          Créer son compte
        </Button>
      </Form>
    );
  }
}
