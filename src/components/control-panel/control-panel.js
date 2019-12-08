import React from "react";
import { useControlPanel } from "@itsjonq/controls";
import { is } from "@itsjonq/is";

export function withControlPanel(attributes = {}) {
	return WrappedComponent => {
		return props => {
			const { attributeProps } = useControlPanel();
			if (is.function(attributes)) {
				attributes();
			}
			return (
				<>
					<WrappedComponent {...props} attributes={attributeProps} />
				</>
			);
		};
	};
}
