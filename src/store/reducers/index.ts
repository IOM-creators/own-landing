import { combineReducers } from "redux";

import { popup } from "./popup";
import { header } from "./header";

export const rootReducer = combineReducers({
  popup,
  header,
});

export type RootState = ReturnType<typeof rootReducer>;
