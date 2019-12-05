import React, { useCallback, useReducer } from "react";
import { ControlPanelContext } from "./context";
import { reducer } from "./reducer";
import { useAddAttribute, useResetAttributes } from "./actions";
import { toNumber } from "./utils";

const KNOB_TYPE = {
	boolean: "boolean",
	text: "text",
	number: "number",
	select: "select"
};

export function ControlPanelProvider({ children }) {
	const [state, dispatch] = useReducer(reducer);

	const addAttribute = useCallback(
		attribute => {
			dispatch({
				type: "add_attribute",
				payload: {
					attribute
				}
			});
		},
		[dispatch]
	);

	const updateAttribute = attribute => {
		dispatch({
			type: "update_attribute",
			payload: {
				attribute
			}
		});
	};

	const resetAttributes = () => {
		dispatch({
			type: "reset"
		});
	};

	const useNumber = (prop, value) => {
		const numberValue = toNumber(value);
		useAddAttribute({
			type: KNOB_TYPE.number,
			prop,
			value: numberValue
		});
	};

	const useText = (prop, value) => {
		useAddAttribute({
			type: KNOB_TYPE.text,
			prop,
			value: value
		});
	};

	const useBoolean = (prop, value) => {
		useAddAttribute({
			type: KNOB_TYPE.boolean,
			prop,
			value: value
		});
	};

	const contextProps = {
		addAttribute,
		dispatch,
		resetAttributes,
		state,
		updateAttribute,
		useAddAttribute,
		useBoolean,
		useNumber,
		useResetAttributes,
		useText
	};

	return (
		<ControlPanelContext.Provider value={contextProps}>
			<>{children}</>
		</ControlPanelContext.Provider>
	);
}

export default ControlPanelProvider;
