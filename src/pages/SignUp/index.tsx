import React, { ReactElement } from "react";

import { SignUp as SignUpComponent, LoginLayout } from "../../components";

const SignUp = (): ReactElement => (
  <LoginLayout>
    <SignUpComponent />
  </LoginLayout>
);

export default SignUp;
