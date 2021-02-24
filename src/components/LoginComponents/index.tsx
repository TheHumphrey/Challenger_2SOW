import React, { ReactElement, useState } from "react";
import { useDispatch } from "react-redux";
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
import { setAuth } from "../../store/reducers/isAuth/action";

const LoginComponent = (): ReactElement => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [isEmail, setIsEmail] = useState<boolean>(false);
  const [isPassword, setIsPassword] = useState<boolean>(false);

  const validateEmail = (email: string) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    setIsEmail(!re.test(String(email).toLowerCase()));
  };

  const validatePassword = (password: string) => {
    password.length < 4 ? setIsPassword(true) : setIsPassword(false);
  };

  const auth = () => {
    dispatch(setAuth(true));
    localStorage.setItem(
      "auth",
      JSON.stringify({
        token: "Ola Eu Sou Um Token :)",
      })
    );
    return true;
  };

  const handleSubmit = () => {
    !isEmail && !isPassword && auth() && history.push("/");
  };

  return (
    <Grid textAlign="center" style={{ height: "98vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="teal" textAlign="center">
          Log-in to your account
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
              onChange={(e: any) => validateEmail(e.target.value)}
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
              onChange={(e: any) => validatePassword(e.target.value)}
              required
            />

            <Form.Field
              id="form-button-control-public"
              color="teal"
              fluid
              size="large"
              control={Button}
              content="Login"
            />
          </Segment>
        </Form>
        <Message>
          New to us? <Link to="/signup">Sign Up</Link>
        </Message>
      </Grid.Column>
    </Grid>
  );
};

export default LoginComponent;
