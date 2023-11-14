import { combineReducers } from "redux";

import { popup } from "./popup/popup";

export const rootReducer = combineReducers({
  popup,
});

export type RootState = ReturnType<typeof rootReducer>;
