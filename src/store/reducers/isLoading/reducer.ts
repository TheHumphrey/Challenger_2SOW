import { LoadingActionType } from "./types";

const isLoading = (
  state: boolean = true,
  action: LoadingActionType
): boolean => {
  switch (action.type) {
    case "SET_LOADING":
      return (state = action.payload);
    default:
      return state;
  }
};

export default isLoading;
