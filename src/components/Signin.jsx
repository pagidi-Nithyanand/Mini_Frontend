import React, { useContext, useState } from "react";
import validator from "validator";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

import {
  Form,
  FormFeedback,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";
import { store } from "../main";
import { LoginSocialFacebook, LoginSocialGoogle } from "reactjs-social-login";
import {
  FacebookLoginButton,
  GoogleLoginButton,
} from "react-social-login-buttons";

const Signin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [validate, setValidate] = useState({
    usernameState: "",
    passwordState: "",
  });
  const [token, setToken] = useContext(store);

  const handleChange = (event) => {
    const { target } = event;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const { name } = target;

    if (name === "username") {
      setUsername(value);
      validateUsername(value);
    } else if (name === "password") {
      setPassword(value);
      validatePassword(value);
    }
  };

  const validateUsername = async (value) => {
    if (validator.isAlphanumeric(value) && !validator.isEmpty(value)) {
      setValidate((prevValidate) => ({
        ...prevValidate,
        usernameState: "success",
      }));
    } else {
      setValidate((prevValidate) => ({
        ...prevValidate,
        usernameState: "danger",
      }));
    }
  };

  const validatePassword = (value) => {
    if (validator.isStrongPassword(value) && !validator.isEmpty(value)) {
      setValidate((prevValidate) => ({
        ...prevValidate,
        passwordState: "success",
      }));
    } else {
      setValidate((prevValidate) => ({
        ...prevValidate,
        passwordState: "danger",
      }));
    }
  };

  const submitForm = (e) => {
    e.preventDefault();
    const data = { username, password };

    axios.post("http://localhost:5000/login", data).then((res) => {
      setToken(res.data);
    });
  };
  const Fsubmit = (Response) => {
    e.preventDefault();
    axios
      .get("http://localhost:5000/auth/facebook")
      .then((res) => {
        if (res && res.data && res.data.redirectUrl) {
          // Redirect to the Facebook authentication page
          window.location = res.data.redirectUrl;
        } else {
          console.error("Invalid server response:", res);
          // Handle unexpected server response or inform the user appropriately
        }
      })
      .catch((error) => {
        console.error("Error initiating Facebook authentication: ", error);
        // Handle errors or inform the user appropriately
      });
  };

  if (token) {
    return <Navigate to="/" />;
  }

  return (
    <Form
      className="form px-4 py-4 text-center fs-4"
      onSubmit={(e) => submitForm(e)}
    >
      <h2 className="fs-1 fw-bold">Sign In</h2>
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
          valid={validate.passwordState === "success"}
          invalid={validate.passwordState === "danger"}
          onChange={handleChange}
        />
        <FormFeedback>Invalid User name or Password</FormFeedback>
        <FormFeedback valid></FormFeedback>
      </FormGroup>
      <Button color="primary" size="lg" className="fs-4" type="submit" block>
        Sign In
      </Button>
      <br></br>
      <LoginSocialFacebook
        appId="1257312144964229"
        onResolve={async (Response) => {
          await axios
            .post("http://localhost:5000/setfbtoken", Response)
            .then((res) => {
              setToken(res.data);
              localStorage.setItem("token", token);
              <Navigate to="/" />;
            });
        }}
        onReject={(error) => {}}
      >
        <FacebookLoginButton />
      </LoginSocialFacebook>
      <br></br>
      <LoginSocialGoogle
        client_id="78948829328-hv7isv045lbks942g1ip6e7f6bjgj068.apps.googleusercontent.com"
        onResolve={(Response) => {
          axios
            .post("http://localhost:5000/setgoogletoken", Response)
            .then((res) => {
              setToken(res.data);
              <Navigate to="/" />;
            });
        }}
        onReject={(error) => {}}
      >
        <GoogleLoginButton />
      </LoginSocialGoogle>
    </Form>
  );
};

export default Signin;
