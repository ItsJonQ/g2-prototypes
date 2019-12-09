import { createContext, useContext } from "react";

export const RippleContext = createContext({});
export const useRippleContext = () => useContext(RippleContext);
