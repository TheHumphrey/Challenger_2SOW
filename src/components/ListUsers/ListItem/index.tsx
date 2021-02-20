import React, { ReactElement } from "react";

import { Image, List } from "semantic-ui-react";

const ListItem = ({ item }: any): ReactElement => {
  return (
    <List.Item>
      <Image avatar src={item.image} />
      <List.Content>
        <List.Header>{item.name}</List.Header>
        <List.Description>email@example.com</List.Description>
      </List.Content>
    </List.Item>
  );
};
export default ListItem;
