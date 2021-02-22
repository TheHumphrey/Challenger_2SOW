import React, { ReactNode } from "react";
import { Container, Menu, Segment } from "semantic-ui-react";

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
        <Menu.Item as="a">Home</Menu.Item>
      </Container>
    </Menu>

    <Container text style={{ marginTop: "7em" }}>
      {children}
    </Container>

    <Segment
      inverted
      vertical
      style={{ margin: "5em 0em 0em", padding: "5em 0em" }}
    >
      <Container textAlign="center"></Container>
    </Segment>
  </div>
);

export default FixedMenuLayout;
