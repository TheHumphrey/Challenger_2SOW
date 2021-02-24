/* eslint-disable react-hooks/exhaustive-deps */
import React, { ReactElement, useEffect, useState } from "react";

import { toast } from "react-semantic-toasts";

import { useHistory, Link } from "react-router-dom";

import {
  Button,
  Form,
  Grid,
  Header,
  Input,
  Message,
  Segment,
} from "semantic-ui-react";

const SignUp = (): ReactElement => {
  const history = useHistory();
  const [isEmail, setIsEmail] = useState<boolean>(false);
  const [isPassword, setIsPassword] = useState<boolean>(false);
  const [isConfirmPassword, setIsConfirmPassword] = useState<boolean>(false);

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [name, setName] = useState<string>("");

  useEffect(() => {
    validateAll();
  }, [email, password, confirmPassword]);

  const validateAll = (): void => {
    email && setIsEmail(validateEmail());
    password && setIsPassword(validatePassword());
    confirmPassword && setIsConfirmPassword(validateConfirmPassword());
  };

  const validateConfirmPassword = () => {
    return password === confirmPassword ? false : true;
  };

  const validateEmail = (): boolean => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return !re.test(String(email).toLowerCase());
  };

  const validatePassword = (): boolean => {
    return password.length < 4 ? true : false;
  };

  const handleSubmit = (): void => {
    toast({
      type: "success",
      icon: "envelope",
      title: "Registered",
      description: "Success registered",
      animation: "drop",
      time: 5000,
    });
    history.push("/login");
  };

  return (
    <Grid textAlign="center" style={{ height: "98vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="teal" textAlign="center">
          Register
        </Header>
        <Form size="large" onSubmit={() => handleSubmit()}>
          <Segment stacked>
            <Form.Field
              id="form-input-control-error-email"
              fluid
              icon="user"
              iconPosition="left"
              placeholder="E-mail address"
              control={Input}
              error={isEmail}
              type="email"
              onChange={(e: any) => setEmail(e.target.value)}
              required
            />
            <Form.Field
              id="form-input-control-error-password"
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              control={Input}
              error={isPassword}
              type="password"
              minLength={4}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPassword(e.target.value)
              }
              required
            />
            <Form.Field
              id="form-input-control-error-confirm-password"
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Confirm Password"
              control={Input}
              error={isConfirmPassword}
              type="password"
              minLength={4}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setConfirmPassword(e.target.value)
              }
              required
            />
            <Form.Field
              id="form-input-control-error-name"
              fluid
              icon="user"
              iconPosition="left"
              placeholder="Name"
              control={Input}
              value={name}
              type="text"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setName(e.target.value)
              }
              required
            />

            <Form.Field
              id="form-button-control-public"
              color="teal"
              fluid
              size="large"
              control={Button}
              content="Submit"
            />
          </Segment>
        </Form>
        <Message>
          Have Account? <Link to="/login">LogIn</Link>
        </Message>
      </Grid.Column>
    </Grid>
  );
};

export default SignUp;
