import React from "react";

import { Table, Button } from "semantic-ui-react";

import { EditUserModal } from "../../";

import api, { getData } from "../../../services/api";

import { User } from "../../../types/User";

interface Props {
  user: User;
}

const Body = ({ user }: Props) => {
  const deleteUser = () => {
    api.delete(`/usuarios/${user.id}`).then(() => getData());
  };

  return (
    <Table.Row>
      <Table.Cell>{user.nome}</Table.Cell>
      <Table.Cell>{user.cpf}</Table.Cell>
      <Table.Cell>{user.email}</Table.Cell>
      <Table.Cell>{user.endereco.cidade}</Table.Cell>
      <Table.Cell>
        <span>
          <EditUserModal user={user} />
          <Button negative onClick={() => deleteUser()}>
            Delete
          </Button>
        </span>
      </Table.Cell>
    </Table.Row>
  );
};

export default Body;
