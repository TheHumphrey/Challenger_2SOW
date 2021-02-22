/* eslint-disable react-hooks/exhaustive-deps */
import React, { ReactElement, useEffect, useState } from "react";

import axios from "axios";

import api from "../../services/api";

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
import { User } from "../../types/User";

const SignUp = (): ReactElement => {
  const history = useHistory();
  const [isEmail, setIsEmail] = useState<boolean>(false);
  const [isPassword, setIsPassword] = useState<boolean>(false);
  const [isConfirmPassword, setIsConfirmPassword] = useState<boolean>(false);
  const [isCpf, setIsCpf] = useState<boolean>(false);
  const [isCep, setIsCep] = useState<boolean>(false);

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [cpf, setCpf] = useState<string>("");
  const [cep, setCep] = useState<string>("");
  const [street, setStreet] = useState<string>("");
  const [number, setNumber] = useState<number>(0);
  const [district, setDistrict] = useState<string>("");
  const [city, setCity] = useState<string>("");

  useEffect(() => {
    validateAll();
  }, [email, password, confirmPassword, name, cpf, cep]);

  const validateAll = (): void => {
    email && setIsEmail(validateEmail());
    password && setIsPassword(validatePassword());
    confirmPassword && setIsConfirmPassword(validateConfirmPassword());
    cpf && setIsCpf(validateCpf());
    cep && setIsCep(validateCep());
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

  const validateCpf = (): boolean => {
    const re = /^\d{1,3}.\d{3}.\d{3}-\d{2}/;
    return !re.test(String(cpf).toLowerCase());
  };

  const validateCep = (): boolean => {
    const re = /^\d{5}\-\d{3}/;
    return !re.test(String(cep).toLowerCase());
  };

  const handleSubmit = (): void => {
    const data: User = {
      email: email,
      nome: name,
      cpf: cpf,
      endereco: {
        bairro: district,
        cep: cep,
        cidade: city,
        numero: Number(number) || 0,
        rua: street,
      },
    };
    if (!isEmail && !isPassword && !isConfirmPassword && !isCep && !isCpf) {
      api.post("/usuarios", data);
      history.push("/login");
    } else {
      console.warn("fail");
    }
  };

  const checkCep = (cep: string): void => {
    const cepApi = axios.create({
      baseURL: "https://viacep.com.br/ws",
    });

    cepApi
      .get(`${cep.replace("-", "")}/json/`)
      .then((res) => {
        const { logradouro, bairro, localidade } = res.data;

        setStreet(logradouro);
        setDistrict(bairro);
        setCity(localidade);
      })
      .catch(() => {
        setIsCep(true);
      });
  };

  const maskCep = (e: string): void => {
    if (e.length === 5) {
      e += "-";
      setCep(e);
    }
  };

  const maskCpf = (e: string): void => {
    if (e.length === 3 || e.length === 7) {
      e += ".";
      setCpf(e);
    } else if (e.length === 11) {
      e += "-";
      setCpf(e);
    }
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
              maxLength={14}
              type="text"
              value={cpf}
              onKeyUp={(e: any) => maskCpf(e.target.value)}
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
              maxLength={9}
              onKeyUp={(e: any) => maskCep(e.target.value)}
              value={cep}
              control={Input}
              error={isCep}
              type="text"
              onBlur={(e: any) => checkCep(e.target.value)}
              onChange={(e: any) => setCep(e.target.value)}
              required
            />
            <Form.Field
              id="form-input-control-error-street"
              fluid
              icon="building"
              iconPosition="left"
              placeholder="Street"
              value={street}
              control={Input}
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
              type="number"
              onChange={(e: any) => setNumber(e.target.value)}
              required
            />
            <Form.Field
              id="form-input-control-error-district"
              fluid
              icon="warehouse"
              iconPosition="left"
              placeholder="District"
              value={district}
              control={Input}
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
              value={city}
              control={Input}
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
