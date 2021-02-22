import React, { ReactElement, useEffect, useState } from "react";
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
  const [isName, setIsName] = useState<boolean>(false);
  const [isCpf, setIsCpf] = useState<boolean>(false);
  const [isCep, setIsCep] = useState<boolean>(false);
  const [isStreet, setIsStreet] = useState<boolean>(false);
  const [isNumber, setIsNumber] = useState<boolean>(false);
  const [isDistrict, setIsDistrict] = useState<boolean>(false);
  const [isCity, setIsCity] = useState<boolean>(false);

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [cpf, setCpf] = useState<number>(0);
  const [cep, setCep] = useState<number>(0);
  const [street, setStreet] = useState<string>("");
  const [number, setNumber] = useState<number>(0);
  const [district, setDistrict] = useState<string>("");
  const [city, setCity] = useState<string>("");

  useEffect(() => {
    validateAll(email, password, confirmPassword);
  }, [
    email,
    password,
    confirmPassword,
    name,
    cpf,
    cep,
    street,
    number,
    district,
    city,
  ]);

  const validateAll = (
    email?: string,
    password?: string,
    confirmPassword?: string,
    name?: string,
    cpf?: string,
    cep?: string,
    street?: string,
    number?: string,
    district?: string,
    city?: string
  ) => {
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

  const handleSubmit = () => {
    !isEmail && !isPassword && history.push("/login");
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
              onChange={(e: any) => setPassword(e.target.value)}
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
              onChange={(e: any) => setConfirmPassword(e.target.value)}
              required
            />
            <Form.Field
              id="form-input-control-error-name"
              fluid
              icon="user"
              iconPosition="left"
              placeholder="Name"
              control={Input}
              error={isName}
              type="text"
              onChange={(e: any) => setName(e.target.value)}
              required
            />
            <Form.Field
              id="form-input-control-error-cpf"
              fluid
              icon="address card"
              iconPosition="left"
              placeholder="CPF"
              control={Input}
              error={isCpf}
              type="number"
              onChange={(e: any) => setCpf(e.target.value)}
              required
            />
            <Form.Field
              id="form-input-control-error-cep"
              fluid
              icon="map marker alternate"
              className="cep-mask"
              iconPosition="left"
              placeholder="Cep"
              control={Input}
              error={isCep}
              type="number"
              onChange={(e: any) => setCep(e.target.value)}
              required
            />
            <Form.Field
              id="form-input-control-error-street"
              fluid
              icon="building"
              iconPosition="left"
              placeholder="Street"
              control={Input}
              error={isStreet}
              type="text"
              onChange={(e: any) => setStreet(e.target.value)}
              required
            />
            <Form.Field
              id="form-input-control-error-number"
              fluid
              icon="building"
              iconPosition="left"
              placeholder="Number"
              control={Input}
              error={isNumber}
              type="text"
              onChange={(e: any) => setNumber(e.target.value)}
              required
            />
            <Form.Field
              id="form-input-control-error-district"
              fluid
              icon="warehouse"
              iconPosition="left"
              placeholder="District"
              control={Input}
              error={isDistrict}
              type="text"
              onChange={(e: any) => setDistrict(e.target.value)}
              required
            />
            <Form.Field
              id="form-input-control-error-city"
              fluid
              icon="globe"
              iconPosition="left"
              placeholder="City"
              control={Input}
              error={isCity}
              type="text"
              onChange={(e: any) => setCity(e.target.value)}
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
