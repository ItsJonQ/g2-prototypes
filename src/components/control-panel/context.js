import { useContext, createContext } from "react";

export const ControlPanelContext = createContext({});

export const useControlPanelContext = () => useContext(ControlPanelContext);

export const useKnobs = () => {
	const {
		useBoolean,
		useNumber,
		useRange,
		useSelect,
		useText
	} = useControlPanelContext();

	return {
		useBoolean,
		useNumber,
		useRange,
		useSelect,
		useText
	};
};
