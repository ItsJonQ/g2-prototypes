import React, { useCallback, useReducer } from "react";
import { ControlPanelContext } from "./context";
import { reducer } from "./reducer";
import { useAddAttribute, useResetAttributes } from "./actions";
import { toNumber } from "./utils";

const KNOB_TYPE = {
	boolean: "boolean",
	text: "text",
	number: "number",
	range: "range",
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

	const useRange = (prop, value, extraProps = {}) => {
		useAddAttribute({
			type: KNOB_TYPE.range,
			prop,
			value,
			...extraProps
		});
	};

	const useSelect = (prop, options, value, extraProps = {}) => {
		useAddAttribute({
			type: KNOB_TYPE.select,
			prop,
			options,
			value,
			...extraProps
		});
	};

	const useNumber = (prop, value, extraProps = {}) => {
		const numberValue = toNumber(value);
		useAddAttribute({
			type: KNOB_TYPE.number,
			prop,
			value: numberValue,
			...extraProps
		});
	};

	const useText = (prop, value, extraProps = {}) => {
		useAddAttribute({
			type: KNOB_TYPE.text,
			prop,
			value,
			...extraProps
		});
	};

	const useBoolean = (prop, value, extraProps = {}) => {
		useAddAttribute({
			type: KNOB_TYPE.boolean,
			prop,
			value,
			...extraProps
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
		useRange,
		useResetAttributes,
		useSelect,
		useText
	};

	return (
		<ControlPanelContext.Provider value={contextProps}>
			<>{children}</>
		</ControlPanelContext.Provider>
	);
}

export default ControlPanelProvider;
