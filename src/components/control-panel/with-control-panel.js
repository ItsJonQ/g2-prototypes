import React from "react";
import { useControls } from "@itsjonq/controls";
import { is } from "@itsjonq/is";

export function withControlPanel(useAttributes) {
	return WrappedComponent => {
		return props => {
			const { attributes } = useControls();
			if (is.function(useAttributes)) {
				useAttributes();
			}

			return (
				<>
					<WrappedComponent {...props} attributes={attributes} />
				</>
			);
		};
	};
}
