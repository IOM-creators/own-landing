import {
  HeaderActionTypes,
  HeaderAction,
  HeaderState,
} from "../../types/header";

const initialState: HeaderState = {
  filled: false,
  height: 0,
};

export const header = (header = initialState, action: HeaderAction) => {
  const { type, payload } = action;

  switch (type) {
    case HeaderActionTypes.HEADER_STATE:
      return { ...header, ...payload };
    default:
      return header;
  }
};
