import React, { Component, createRef } from "react";
import { Form, Col, Row, Button, Alert } from "react-bootstrap";

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

    const users = this.getUsers();

    if (!users) {
      this.setState({
        user: null,
        error: true,
        errorMessage: "Pas d'users dans la base"
      });
    } else if (users && login && password) {
      const user = users.find(
        user => user.login === login && user.password === password
      );
      if (user) {
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
          errorMessage: "Login ou password inexistant"
        });
      }
    } else {
      this.setState({
        user: null,
        error: true,
        errorMessage: "Merci de compléter les champs"
      });
    }
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit} className="form-signin">
        <h2>Se connecter</h2>
        {this.state.error && (
          <Alert variant="danger">{this.state.errorMessage}</Alert>
        )}
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
          Submit
        </Button>
      </Form>
    );
  }
}
