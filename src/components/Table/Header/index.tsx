import { AxiosResponse } from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { Icon, Table } from "semantic-ui-react";
import api from "../../../services/api";
import { setLoading } from "../../../store/reducers/isLoading/action";
import { setUsers } from "../../../store/reducers/users/action";
import { User } from "../../../types/User";

import { HeaderTableStyle } from "./style";

type TIcons =
  | "arrows alternate vertical"
  | "long arrow alternate down"
  | "long arrow alternate up";

const Header = () => {
  const dispatch = useDispatch();

  const [ascOrDesc, setAscOrDesc] = useState("asc");

  const state = "arrows alternate vertical";

  const [nameIcon, setNameIcon] = useState<TIcons>(state);
  const [cpfIcon, setCpfIcon] = useState<TIcons>(state);
  const [emailIcon, setEmailIcon] = useState<TIcons>(state);
  const [cityIcon, setCityIcon] = useState<TIcons>(state);

  const iconManager = (
    column: "nome" | "cpf" | "email" | "endereco.cidade"
  ) => {
    setNameIcon(state);
    setCpfIcon(state);
    setEmailIcon(state);
    setCityIcon(state);
    if (ascOrDesc === "asc") {
      switch (column) {
        case "nome":
          setNameIcon("long arrow alternate up");
          break;
        case "cpf":
          setCpfIcon("long arrow alternate up");
          break;
        case "email":
          setEmailIcon("long arrow alternate up");
          break;
        case "endereco.cidade":
          setCityIcon("long arrow alternate up");
          break;
      }
    } else {
      switch (column) {
        case "nome":
          setNameIcon("long arrow alternate down");
          break;
        case "cpf":
          setCpfIcon("long arrow alternate down");
          break;
        case "email":
          setEmailIcon("long arrow alternate down");
          break;
        case "endereco.cidade":
          setCityIcon("long arrow alternate down");
          break;
      }
    }
  };

  const sortTable = (column: "nome" | "cpf" | "email" | "endereco.cidade") => {
    dispatch(setLoading(true));
    iconManager(column);
    api
      .get(`/usuarios?_sort=${column}&_order=${ascOrDesc}`)
      .then((res: AxiosResponse<User[]>) => {
        dispatch(setUsers(res.data));
        dispatch(setLoading(false));
        ascOrDesc === "asc" ? setAscOrDesc("desc") : setAscOrDesc("asc");
      })
      .catch((err) => {
        console.warn(err);
      });
  };
  return (
    <HeaderTableStyle>
      <Table.HeaderCell onClick={() => sortTable("nome")}>
        Name
        <Icon disabled name={nameIcon} />
      </Table.HeaderCell>
      <Table.HeaderCell onClick={() => sortTable("cpf")}>
        CPF <Icon disabled name={cpfIcon} />
      </Table.HeaderCell>
      <Table.HeaderCell onClick={() => sortTable("email")}>
        Email
        <Icon disabled name={emailIcon} />
      </Table.HeaderCell>
      <Table.HeaderCell onClick={() => sortTable("endereco.cidade")}>
        City
        <Icon disabled name={cityIcon} />
      </Table.HeaderCell>
      <Table.HeaderCell> Options</Table.HeaderCell>
    </HeaderTableStyle>
  );
};

export default Header;
