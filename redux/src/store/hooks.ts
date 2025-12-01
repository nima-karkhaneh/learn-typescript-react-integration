import { useDispatch } from "react-redux";

import { type DispatchType } from "./store";


type DispatchFunction = () => DispatchType


export  const useCartDispatch: DispatchFunction = useDispatch