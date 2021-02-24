import React, { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Container, Menu, Segment } from "semantic-ui-react";

import { UserMenu } from "../";

interface Props {
  children: ReactNode;
}

const FixedMenuLayout = ({ children }: Props) => (
  <div>
    <Menu fixed="top" inverted>
      <Container>
        <Menu.Item as="a" header>
          Project Name
        </Menu.Item>
        <Menu.Item>
          <Link to="/login">Login</Link>
        </Menu.Item>
        <Menu.Item position="right">
          <UserMenu />
        </Menu.Item>
      </Container>
    </Menu>

    <Container text style={{ height: "96.6vh" }}>
      {children}
    </Container>

    <Segment inverted vertical>
      <Container textAlign="center">© 2021 TheHumphrey, Inc.</Container>
    </Segment>
  </div>
);

export default FixedMenuLayout;
