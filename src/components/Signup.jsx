import React, { useState } from "react";
import validator from "validator";
import { Dice6Fill } from "react-bootstrap-icons";
import { Navigate } from "react-router-dom";
import { useContext } from "react";
import axios from "axios";
import {
  Form,
  FormFeedback,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validate, setValidate] = useState({
    usernameState: "",
    emailState: "",
    passwordState: "",
  });

  const handleChange = (event) => {
    const { target } = event;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const { name } = target;

    if (name === "username") {
      setUsername(value);
      validateUsername(value);
    } else if (name === "email") {
      setEmail(value);
      validateEmail(value);
    } else if (name === "password") {
      setPassword(value);
      validatePassword(value);
    }
  };

  const validateUsername = async (value) => {
    const response = await axios.get("http://localhost:5000/checkuser", {
      params: {
        username: value,
      },
    });
    setValidate((prevState) => ({
      ...prevState,
      usernameState:
        validator.isAlphanumeric(value) && !validator.isEmpty(value) && response
          ? "success"
          : "danger",
    }));
  };

  const validateEmail = (value) => {
    setValidate((prevState) => ({
      ...prevState,
      emailState:
        validator.isEmail(value) && !validator.isEmpty(value)
          ? "success"
          : "danger",
    }));
  };

  const validatePassword = async (value) => {
    setValidate((prevState) => ({
      ...prevState,
      passwordState:
        validator.isStrongPassword(value) && !validator.isEmpty(value)
          ? "success"
          : "danger",
    }));
  };

  const submitForm = (e) => {
    e.preventDefault();
    console.log(`User Name: ${username}`);
    console.log(`Email: ${email}`);
    console.log(`Password: ${password}`);
    const data = { username, email, password };

    axios.post("http://localhost:5000/register", data).then((res) => {});
  };
  const random = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/getGeneratedName"
      );
      setUsername(response.data.username);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Form
      className="form px-4 py-4 text-center fs-4"
      onSubmit={(e) => submitForm(e)}
    >
      <h2 className="fs-1 fw-bold">Sign Up</h2>
      <FormGroup className="text-start">
        <Label>User Name</Label>
        <Input
          type="text"
          name="username"
          id="username"
          className="mb-2 fs-4"
          placeholder="randomuser123"
          valid={validate.usernameState === "success"}
          invalid={validate.usernameState === "danger"}
          value={username}
          onChange={handleChange}
        />
        <FormFeedback>
          Uh oh! Looks like this username is taken. Pick a new one.
        </FormFeedback>
        <FormFeedback valid>That's a valid username. Go ahead.</FormFeedback>
      </FormGroup>
      <Button color="primary fs-4" block onClick={random}>
        <Dice6Fill className="bs-primary d-inline-block align-middle" />
        <p
          className="d-inline-block align-middle"
          style={{ marginLeft: "0.5em", marginBottom: "0" }}
        >
          Random User Name
        </p>
      </Button>
      <FormGroup className="text-start">
        <Label>Email</Label>
        <Input
          type="email"
          name="email"
          id="email"
          className="mb-2 fs-4"
          placeholder="example@example.com"
          valid={validate.emailState === "success"}
          invalid={validate.emailState === "danger"}
          value={email}
          onChange={handleChange}
        />
        <FormFeedback>
          Uh oh! Looks like there is an issue with your email. Please enter a
          valid email.
        </FormFeedback>
        <FormFeedback valid>That's a valid email. Go ahead.</FormFeedback>
      </FormGroup>
      <FormGroup className="text-start">
        <Label for="password">Password</Label>
        <Input
          type="password"
          name="password"
          id="password"
          className="mb-2 fs-4"
          placeholder="********"
          value={password}
          onChange={handleChange}
        />
      </FormGroup>
      <Button color="primary" size="lg" className="fs-4" block>
        Sign Up
      </Button>
      <br />
    </Form>
  );
};

export default Signup;
