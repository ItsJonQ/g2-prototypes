import React from "react";
import { is } from "@itsjonq/is";
import { useControlPanelContext } from "./context";
import { Controls } from "./controls";
import { useResetOnUnmount } from "./actions";
import { mapStateToProps } from "./utils";

export function ControlPanel({ children }) {
	useResetOnUnmount();

	return (
		<>
			<Controls />
			{children}
		</>
	);
}

export function withControlPanel(attributes = {}) {
	return WrappedComponent => {
		return props => {
			const controlAttributes = is.function(attributes)
				? attributes()
				: attributes;

			return (
				<ControlPanel attributes={controlAttributes}>
					<ContextConnector>
						<WrappedComponent {...props} />
					</ContextConnector>
				</ControlPanel>
			);
		};
	};
}

export function ContextConnector({ children }) {
	const { state } = useControlPanelContext();

	return React.cloneElement(children, { attributes: mapStateToProps(state) });
}

export default ControlPanel;
