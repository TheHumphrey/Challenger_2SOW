import React from "react";
import { Table } from "semantic-ui-react";
import { User } from "../../types/User";
import Body from "./Body";

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

const TableUser = () => (
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

export default TableUser;
