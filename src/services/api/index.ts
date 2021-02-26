import axios, { AxiosResponse } from "axios";
import { store } from "../../store";
import { setLoading } from "../../store/reducers/isLoading/action";
import { setUsers } from "../../store/reducers/users/action";
import { User } from "../../types/User";

const api = axios.create({
  baseURL: "http://localhost:5000",
});

export const getData = (pag: number) => {
  let currentPage: number;
  if (pag === 1) {
    currentPage = 0;
  } else {
    currentPage = pag * 10 - 10;
  }
  api
    .get(`/usuarios?_start=${currentPage}&_limit=10`)
    .then((res: AxiosResponse<User[]>) => {
      store.dispatch(setUsers(res.data));
      store.dispatch(setLoading(false));
    })
    .catch((err) => {
      console.warn(err);
    });
};
export default api;
