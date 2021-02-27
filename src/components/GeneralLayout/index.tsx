import React, { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Container, Menu, Segment } from "semantic-ui-react";

import { UserMenu } from "../";

interface Props {
  children: ReactNode;
}

const FixedMenuLayout = ({ children }: Props) => (
  <div style={{ position: "relative", height: "100%" }}>
    <Menu fixed="top" inverted>
      <Container>
        <Menu.Item as="a" header>
          2sow-eu-o-escolhido
        </Menu.Item>
        <Menu.Item>
          <Link to="/login">Login</Link>
        </Menu.Item>
        <Menu.Item position="right">
          <UserMenu />
        </Menu.Item>
      </Container>
    </Menu>

    <Container text style={{ minHeight: "100%" }}>
      {children}
    </Container>

    <Segment inverted>
      <Container textAlign="center">
        <Container textAlign="center">© 2021 TheHumphrey, Inc.</Container>
      </Container>
    </Segment>
  </div>
);

export default FixedMenuLayout;
