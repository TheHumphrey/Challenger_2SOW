import axios, { AxiosResponse } from "axios";
import { store } from "../../store";
import { setUsers } from "../../store/reducers/users/action";
import { User } from "../../types/User";

const api = axios.create({
  baseURL: "http://localhost:5000",
});

export const getData = () => {
  api
    .get("/usuarios")
    .then((res: AxiosResponse<User[]>) => {
      store.dispatch(setUsers(res.data));
    })
    .catch((err) => {
      console.warn(err);
    });
};

export default api;
