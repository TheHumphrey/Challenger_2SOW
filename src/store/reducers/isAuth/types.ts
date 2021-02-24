export const SET_AUTH = "SET_AUTH";

interface SetAuthAction {
  readonly type: typeof SET_AUTH;
  readonly payload: boolean;
}

export type AuthActionType = SetAuthAction;
