import React, { ReactElement } from "react";
import { Input } from "semantic-ui-react";

interface IProps {
  focus: boolean;
}

const EmailInput = ({ focus }: IProps): ReactElement => (
  <Input focus={focus} placeholder="Email" />
);

export default EmailInput;
