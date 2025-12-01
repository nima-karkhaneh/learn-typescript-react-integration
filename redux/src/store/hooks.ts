import { useDispatch, useSelector, type TypedUseSelectorHook } from "react-redux";

import { type DispatchType, type RootState } from "./store";



type DispatchFunction = () => DispatchType


export const useCartDispatch: DispatchFunction = useDispatch
export const useCartSelector: TypedUseSelectorHook<RootState> = useSelector;