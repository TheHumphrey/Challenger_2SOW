/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";

import { Table, Grid, Loader, Input, Pagination } from "semantic-ui-react";

import api, { getData } from "../../services/api";

import Body from "./Body";
import Header from "./Header";

import { NewUserModal } from "../";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/reducers/rootReducer";

import { OptionsTableStyle } from "./style";
import { AxiosResponse } from "axios";
import { User } from "../../types/User";
import { setLoading } from "../../store/reducers/isLoading/action";

const TableUser = () => {
  const users = useSelector((state: RootState) => state.users);
  const isLoading = useSelector((state: RootState) => state.isLoading);

  const dispatch = useDispatch();

  const [isDataEmpty, setIsDataEmpty] = useState(false);
  const [pag, setPag] = useState(1);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    dispatch(setLoading(true));
    getData(1);
    updatePagination();
  }, []);

  useEffect(() => {
    users.filter((user) => user.status.toLocaleLowerCase().includes("on"))
      .length === 0
      ? setIsDataEmpty(true)
      : setIsDataEmpty(false);

    updatePagination();
  }, [users]);

  const updatePagination = () => {
    api
      .get(`/usuarios`)
      .then((res: AxiosResponse<User[]>) => {
        setPag(
          Math.ceil(
            (res.data.filter((user) =>
              user.status.toLocaleLowerCase().includes("on")
            ).length +
              1) /
              10
          )
        );
      })
      .catch((err) => {
        console.warn(err);
      });
  };

  const pageChange = (n: any) => {
    getData(n);
  };

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
        <Table style={{ height: "100%" }}>
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
          <Table.Footer>
            <Table.Row>
              <Table.HeaderCell colSpan="5" textAlign="center">
                <Pagination
                  defaultActivePage={1}
                  totalPages={pag}
                  onPageChange={(e, data) => pageChange(data.activePage)}
                />
              </Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
        </Table>
      </Grid.Column>
    </Grid>
  );
};

export default TableUser;
