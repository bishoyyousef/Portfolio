import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { AppDispatch, RootState } from "@/StateStore/Store";

export const useTypedDispatch = () => useDispatch<AppDispatch>();
export const useTypedSelector:TypedUseSelectorHook<RootState> = useSelector;

// export const useTypedSelector = useSelector<RootState>(); --> XXX is wrong because useSelector expected arguments 