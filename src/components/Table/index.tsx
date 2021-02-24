/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";

import { Table, Grid } from "semantic-ui-react";

import { getData } from "../../services/api";

import Body from "./Body";
import { NewUserModal } from "../";
import { useSelector } from "react-redux";
import { RootState } from "../../store/reducers/rootReducer";

const TableUser = () => {
  const users = useSelector((state: RootState) => state.users);

  useEffect(() => {
    getData();
  }, []);

  return (
    <Grid textAlign="center" style={{ paddingTop: "50px" }} verticalAlign="top">
      <Grid.Column>
        <NewUserModal />
        <Table singleLine>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>CPF</Table.HeaderCell>
              <Table.HeaderCell>Email</Table.HeaderCell>
              <Table.HeaderCell>City</Table.HeaderCell>
              <Table.HeaderCell></Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {users &&
              users.map((user, index) => <Body user={user} key={index} />)}
            {users && users.length === 0 && (
              <Table.Row>
                <Table.Cell colSpan={5} textAlign="center">
                  Nenhum Usuário Encontrado!
                </Table.Cell>
              </Table.Row>
            )}
          </Table.Body>
        </Table>
      </Grid.Column>
    </Grid>
  );
};

export default TableUser;
