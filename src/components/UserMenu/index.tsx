import React from "react";
import { useDispatch } from "react-redux";
import { Dropdown } from "semantic-ui-react";
import { setAuth } from "../../store/reducers/isAuth/action";

const UserMenu = () => {
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(setAuth(false));
  };

  return (
    <Dropdown text="Menu" icon="user" floating labeled button className="icon">
      <Dropdown.Menu>
        <Dropdown.Item
          key={"logout"}
          text={"LogOut"}
          value={"LogOut"}
          onClick={() => logOut()}
        />
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default UserMenu;
