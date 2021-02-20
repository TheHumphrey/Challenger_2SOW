import React, { ReactElement, useState } from "react";

import { Button, Form, Input } from "semantic-ui-react";

const Login = (): ReactElement => {
  const [isEmail, setIsEmail] = useState<boolean>(false);
  const [isPassword, setIsPassword] = useState<boolean>(false);

  const validateEmail = (email: string) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    setIsEmail(!re.test(String(email).toLowerCase()));
  };

  const validatePassword = (password: string) => {
    password.length < 4 ? setIsPassword(true) : setIsPassword(false);
  };

  return (
    <div>
      <Form onSubmit={() => console.log("funcionou")}>
        <Form.Field
          id="form-input-control-error-email"
          control={Input}
          label="Email"
          error={isEmail}
          type="email"
          onChange={(e: any) => validateEmail(e.target.value)}
          required
        />
        <Form.Field
          id="form-input-control-error-email"
          control={Input}
          label="Senha"
          error={isPassword}
          type="password"
          minLength={4}
          onChange={(e: any) => validatePassword(e.target.value)}
          required
        />
        <Form.Field
          id="form-button-control-public"
          control={Button}
          content="Enviar"
        />
      </Form>
    </div>
  );
};

export default Login;
