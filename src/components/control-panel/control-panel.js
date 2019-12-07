import React from "react";
import { is } from "@itsjonq/is";
import { useResetOnUnmount } from "./actions";

export function withControlPanel(attributes = {}) {
	return WrappedComponent => {
		return props => {
			useResetOnUnmount();
			const controlAttributes = is.function(attributes)
				? attributes()
				: attributes;

			return (
				<>
					<WrappedComponent
						{...props}
						attributes={controlAttributes}
					/>
				</>
			);
		};
	};
}
