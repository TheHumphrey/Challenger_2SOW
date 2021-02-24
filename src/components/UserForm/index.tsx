/* eslint-disable react-hooks/exhaustive-deps */
import React, { ReactElement, useEffect, useState } from "react";

import axios from "axios";

import { useHistory } from "react-router-dom";

import api from "../../services/api";

import { Button, Form, Input, Segment } from "semantic-ui-react";

import { User } from "../../types/User";

interface Props {
  callback(): void;
}

const UserForm = ({ callback }: Props): ReactElement => {
  const history = useHistory();
  const [isEmail, setIsEmail] = useState<boolean>(false);
  const [isCpf, setIsCpf] = useState<boolean>(false);
  const [isCep, setIsCep] = useState<boolean>(false);

  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [cpf, setCpf] = useState<string>("");
  const [cep, setCep] = useState<string>("");
  const [street, setStreet] = useState<string>("");
  const [number, setNumber] = useState<number>(0);
  const [district, setDistrict] = useState<string>("");
  const [city, setCity] = useState<string>("");

  useEffect(() => {
    validateAll();
  }, [email, name, cpf, cep]);

  const validateAll = (): void => {
    email && setIsEmail(validateEmail());
    cpf && setIsCpf(validateCpf());
    cep && setIsCep(validateCep());
  };

  const validateEmail = (): boolean => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return !re.test(String(email).toLowerCase());
  };

  const validateCpf = (): boolean => {
    const re = /^\d{1,3}.\d{3}.\d{3}-\d{2}/;
    return !re.test(String(cpf).toLowerCase());
  };

  const validateCep = (): boolean => {
    const re = /^\d{5}\-\d{3}/;
    return !re.test(String(cep).toLowerCase());
  };

  const validateTypeNumber = (value: string) => {
    const re = /\D/g;
    if (!re.test(value.toLowerCase())) {
      setNumber(Number(value));
    } else {
      setNumber(number);
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

  const handleSubmit = async (): Promise<void> => {
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
    if (!isEmail && !isCep && !isCpf) {
      await api.post("/usuarios", data);
      callback();
    } else {
      console.warn("fail");
    }
  };

  return (
    <Form size="large" onSubmit={() => handleSubmit()}>
      <Segment>
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
          id="form-input-control-error-name"
          fluid
          icon="user"
          iconPosition="left"
          placeholder="Name"
          control={Input}
          type="text"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setName(e.target.value)
          }
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
          onKeyUp={(e: React.ChangeEvent<HTMLInputElement>) =>
            maskCpf(e.target.value)
          }
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setCpf(e.target.value)
          }
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
          onBlur={(e: React.ChangeEvent<HTMLInputElement>) =>
            checkCep(e.target.value)
          }
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setCep(e.target.value)
          }
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
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setStreet(e.target.value)
          }
          required
        />
        <Form.Field
          id="form-input-control-error-number"
          fluid
          icon="building"
          iconPosition="left"
          placeholder="Number"
          control={Input}
          type="text"
          value={number}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            validateTypeNumber(e.target.value)
          }
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
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setDistrict(e.target.value)
          }
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
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setCity(e.target.value)
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
  );
};

export default UserForm;
