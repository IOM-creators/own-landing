import { PopupAction, PopupActionTypes, PopupState } from "../../types/popup";

export function popupState(popup: PopupState): PopupAction {
  return { type: PopupActionTypes.POPUP_STATE, payload: popup };
}
