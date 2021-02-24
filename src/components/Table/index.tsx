/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";

import { Table, Grid, Loader } from "semantic-ui-react";

import { getData } from "../../services/api";

import Body from "./Body";
import { NewUserModal } from "../";
import { useSelector } from "react-redux";
import { RootState } from "../../store/reducers/rootReducer";

const TableUser = () => {
  const users = useSelector((state: RootState) => state.users);
  const isLoading = useSelector((state: RootState) => state.isLoading);

  const [isDataEmpty, setIsDataEmpty] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    users.length === 0 ? setIsDataEmpty(true) : setIsDataEmpty(false);
  }, [users]);

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
            {isLoading ? (
              <Table.Row>
                <Table.Cell colSpan={5} textAlign="center">
                  <Loader active inline="centered" />
                </Table.Cell>
              </Table.Row>
            ) : null}
            {users &&
              users.map((user, index) => <Body user={user} key={index} />)}
            {!isLoading && isDataEmpty ? (
              <Table.Row>
                <Table.Cell colSpan={5} textAlign="center">
                  Nenhum Usuário Encontrado!
                </Table.Cell>
              </Table.Row>
            ) : null}
          </Table.Body>
        </Table>
      </Grid.Column>
    </Grid>
  );
};

export default TableUser;
