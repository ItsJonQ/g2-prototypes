import React, { useReducer } from "react";
import { ControlPanelContext, useControlPanelContext } from "./context";
import Controls from "./controls";
import { getAttributesAsValues, reducer } from "./reducer";

export * from "./context";
export { getAttributesAsValues } from "./reducer";

export default function ControlPanel(props) {
	const { attributes, children } = props;
	const [state, dispatch] = useReducer(reducer, attributes);

	const updateValue = (prop, value, { type: knobType }) => {
		let nextValue = value;
		if (knobType === "number") {
			nextValue = toNumber(nextValue);
		}

		dispatch({ type: "update_value", payload: { prop, value: nextValue } });
	};

	const addValue = (prop, value) => {
		dispatch({ type: "add_value", payload: { prop, value: value } });
	};

	const contextProps = {
		state,
		dispatch,
		addValue,
		updateValue
	};

	return (
		<>
			<ControlPanelContext.Provider value={contextProps}>
				<Controls />
				{children}
			</ControlPanelContext.Provider>
		</>
	);
}

export function withControlPanel(attributes = {}) {
	return WrappedComponent => {
		return props => (
			<ControlPanel attributes={attributes}>
				<ContextConnector>
					<WrappedComponent {...props} />
				</ContextConnector>
			</ControlPanel>
		);
	};
}

function ContextConnector({ children }) {
	const { state } = useControlPanelContext();
	const attributesAsValues = getAttributesAsValues(state);

	return React.cloneElement(children, { attributes: attributesAsValues });
}

function toNumber(value) {
	const numberValue = parseInt(value, 10);
	return isNaN(numberValue) ? value : numberValue;
}
