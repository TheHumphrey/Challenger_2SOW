export const SET_LOADING = "SET_LOADING";

interface SetLoadingAction {
  readonly type: typeof SET_LOADING;
  readonly payload: boolean;
}

export type LoadingActionType = SetLoadingAction;
