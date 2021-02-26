import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-semantic-toasts";

import { Table, Button } from "semantic-ui-react";

import { EditUserModal } from "../../";

import api from "../../../services/api";
import { RootState } from "../../../store/reducers/rootReducer";
import { setUsers } from "../../../store/reducers/users/action";

import { User } from "../../../types/User";

interface Props {
  user: User;
}

const Body = ({ user }: Props) => {
  const users = useSelector((state: RootState) => state.users);
  const dispatch = useDispatch();

  const deleteUser = () => {
    const deleteUser: User = { ...user, status: "off" };

    api.put(`/usuarios/${deleteUser.id}`, deleteUser).then((res) => {
      const newUsers = users.map((item) =>
        item.id === deleteUser.id ? deleteUser : item
      );
      dispatch(setUsers(newUsers));

      toast({
        type: "success",
        icon: "envelope",
        title: "User Delete",
        description: `User ${deleteUser.nome} Delete with success!`,
        animation: "drop",
        time: 3000,
      });
    });
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
