import React, { ReactElement } from "react";
import { Route, Redirect } from "react-router-dom";

import { useSelector } from "react-redux";
import { RootState } from "../../store/reducers/rootReducer";

interface Props {
  children: ReactElement;
  exact?: boolean;
  path: string;
}

const PrivateRoutes = ({ children, path }: Props): ReactElement => {
  const auth = useSelector((state: RootState) => state.isAuth);

  return (
    <Route
      path={path}
      exact
      render={() =>
        auth ? children : <Redirect to={{ pathname: "/login" }} />
      }
    />
  );
};

export default PrivateRoutes;
