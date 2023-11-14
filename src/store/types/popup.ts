export interface PopupState {
  isOpen: boolean;
  fullScreen?: boolean;
  children?: React.ReactNode;
  title?: string;
}

export enum PopupActionTypes {
  POPUP_STATE = "POPUP_STATE",
}
interface PopupStateAction {
  type: PopupActionTypes.POPUP_STATE;
  payload: PopupState;
}

export type PopupAction = PopupStateAction;
