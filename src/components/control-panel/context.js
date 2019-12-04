import { useContext, createContext } from "react";

export const ControlPanelContext = createContext({});

export const useControlPanelContext = () => useContext(ControlPanelContext);
