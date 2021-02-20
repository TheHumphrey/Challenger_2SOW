import React, { ReactElement } from "react";

import { Image, List } from "semantic-ui-react";
import ListItem from "./ListItem";

const ListUsers = (): ReactElement => {
  const array = [
    {
      name: "Matheus",
      image: "https://react.semantic-ui.com/images/avatar/small/daniel.jpg",
    },
    {
      name: "Marcelo",
      image: "https://react.semantic-ui.com/images/avatar/small/daniel.jpg",
    },
    {
      name: "Jhon",
      image: "https://react.semantic-ui.com/images/avatar/small/daniel.jpg",
    },
  ];

  return (
    <List animated verticalAlign="middle">
      {array.map((item) => (
        <ListItem item={item} />
      ))}
    </List>
  );
};

export default ListUsers;
