/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";

import { Table, Grid, Loader, Input } from "semantic-ui-react";

import { getData } from "../../services/api";

import Body from "./Body";
import Header from "./Header";

import { NewUserModal } from "../";
import { useSelector } from "react-redux";
import { RootState } from "../../store/reducers/rootReducer";

import { OptionsTableStyle } from "./style";

const TableUser = () => {
  const users = useSelector((state: RootState) => state.users);
  const isLoading = useSelector((state: RootState) => state.isLoading);

  const [isDataEmpty, setIsDataEmpty] = useState(false);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    users.filter((user) => user.status.toLocaleLowerCase().includes("on"))
      .length === 0
      ? setIsDataEmpty(true)
      : setIsDataEmpty(false);
  }, [users]);

  return (
    <Grid textAlign="center" style={{ paddingTop: "50px" }} verticalAlign="top">
      <Grid.Column>
        <OptionsTableStyle>
          <NewUserModal />
          <Input
            icon="search"
            placeholder="Search..."
            onChange={(e) => setFilter(e.target.value)}
          />
        </OptionsTableStyle>
        <Table singleLine>
          <Table.Header>
            <Header />
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
              !isLoading &&
              users
                .filter(
                  (user) =>
                    (user.status.toLowerCase().includes("on") &&
                      user.nome.toLowerCase().includes(filter.toLowerCase())) ||
                    user.email.toLowerCase().includes(filter.toLowerCase()) ||
                    user.cpf.toLowerCase().includes(filter.toLowerCase()) ||
                    user.endereco.cidade
                      .toLowerCase()
                      .includes(filter.toLowerCase())
                )
                .map((user, index) => <Body user={user} key={index} />)}
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
