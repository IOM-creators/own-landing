import { PopupActionTypes, PopupAction, PopupState } from "../../types/popup";

const initialState: PopupState = {
  isOpen: false,
  children: `<></>`,
  title: "",
  closeButton: true,
  fullScreen: false,
};

export const popup = (popup = initialState, action: PopupAction) => {
  const { type, payload } = action;

  switch (type) {
    case PopupActionTypes.POPUP_STATE:
      return { ...popup, ...payload };
    default:
      return popup;
  }
};
