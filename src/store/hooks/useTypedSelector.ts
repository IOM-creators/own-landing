import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../redusers";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
