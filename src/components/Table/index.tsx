/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";

import { Table } from "semantic-ui-react";
import { User } from "../../types/User";

import api from "../../services/api";

import Body from "./Body";
import { AxiosResponse } from "axios";
import { useDispatch } from "react-redux";
import { setUsers } from "../../store/reducers/users/action";

const test: User = {
  nome: "fernando",
  cpf: "123123",
  email: "fernando@gmail.com",
  endereco: {
    cep: 1111111,
    rua: "aa",
    numero: 11,
    bairro: "aaa",
    cidade: "aaa",
  },
};

const TableUser = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    api
      .post("/usuarios", {
        nome: "fernando",
        cpf: "123123",
        email: "fernando@gmail.com",
        endereco: {
          cep: 1111111,
          rua: "aa",
          numero: 11,
          bairro: "aaa",
          cidade: "aaa",
        },
      })
      .then((res) => {
        console.log(res);
      });

    api
      .get("/usuarios")
      .then((res: AxiosResponse<User[]>) => {
        console.log(res.data);
        dispatch(setUsers(res.data));
      })
      .catch((err) => {
        console.warn(err);
      });
  }, []);
  return (
    <Table singleLine>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Nome</Table.HeaderCell>
          <Table.HeaderCell>CPF</Table.HeaderCell>
          <Table.HeaderCell>Email</Table.HeaderCell>
          <Table.HeaderCell>Cidade</Table.HeaderCell>
          <Table.HeaderCell></Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Body user={test} />
      </Table.Body>
    </Table>
  );
};

export default TableUser;
