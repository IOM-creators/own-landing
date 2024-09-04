export interface HeaderState {
  filled?: boolean;
  height?: number;
}

export enum HeaderActionTypes {
  HEADER_STATE = "HEADER_STATE",
}
interface HeaderStateAction {
  type: HeaderActionTypes.HEADER_STATE;
  payload: HeaderState;
}

export type HeaderAction = HeaderStateAction;
