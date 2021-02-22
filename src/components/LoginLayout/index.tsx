import React, { ReactElement, ReactNode } from "react";
import { Container, Menu, Segment } from "semantic-ui-react";

interface Props {
  children: ReactNode;
}

const fixedMenuStyle = {
  backgroundColor: "#fff",
  border: "1px solid #ddd",
  boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.2)",
};

const LoginLayout = ({ children }: Props): ReactElement => {
  return (
    <div>
      <Menu fixed="top" style={fixedMenuStyle}>
        <Container text>
          <Menu.Item as="a" header>
            Project Name
          </Menu.Item>
          <Menu.Item as="a">Home</Menu.Item>
        </Container>
      </Menu>

      <Container text>{children}</Container>

      <Segment vertical>
        <Container textAlign="center">© 2021 TheHumphrey, Inc.</Container>
      </Segment>
    </div>
  );
};

export default LoginLayout;
