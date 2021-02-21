import React from "react";
import { Table, Button } from "semantic-ui-react";
import { User } from "../../../types/User";

interface Props {
  user: User;
}

const Body = ({ user }: Props) => (
  <Table.Row>
    <Table.Cell>{user.nome}</Table.Cell>
    <Table.Cell>{user.cpf}</Table.Cell>
    <Table.Cell>{user.email}</Table.Cell>
    <Table.Cell>{user.endereco.cidade}</Table.Cell>
    <Table.Cell>
      <span>
        <Button color="blue">Editar</Button>
        <Button negative>Deletar</Button>
      </span>
    </Table.Cell>
  </Table.Row>
);

export default Body;
