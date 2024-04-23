import {
  HeaderActionTypes,
  HeaderAction,
  HeaderState,
} from "../../types/header";

export function headerState(header: HeaderState): HeaderAction {
  return { type: HeaderActionTypes.HEADER_STATE, payload: header };
}
