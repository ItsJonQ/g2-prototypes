import React, { useState } from "react";
import { View } from "@itsjonq/elm";
import { useControls } from "@itsjonq/controls";

import { RippleContext } from "./context";

export function Ripple(props) {
	const { attributes } = useControls();

	const [position, setPosition] = useState({ x: 0, y: 0, size: 0 });
	const [isRippling, setIsRippling] = useState(false);

	const zoomLevel = attributes.zoomLevel || 1;

	const handleOnClick = event => {
		const targetNode = event.currentTarget;
		const targetBounds = targetNode.getBoundingClientRect();
		const x =
			(event.pageX - (targetBounds.left + window.scrollX)) / zoomLevel;
		const y =
			(event.pageY - (targetBounds.top + window.scrollY)) / zoomLevel;
		const size = Math.max(targetBounds.width, targetBounds.height);

		setPosition({ x, y, size });

		if (isRippling) {
			setIsRippling(false);
			requestAnimationFrame(() => {
				setIsRippling(true);

				setTimeout(() => {
					setIsRippling(false);
				}, 10);
			});
			return;
		}

		setIsRippling(true);

		setTimeout(() => {
			setIsRippling(false);
		}, 10);
	};

	const contextValue = { position, isRippling };

	return (
		<RippleContext.Provider value={contextValue}>
			<View
				position="relative"
				display="inline-flex"
				{...props}
				onMouseDown={handleOnClick}
			/>
		</RippleContext.Provider>
	);
}

Ripple.defaultProps = {
	as: "span"
};
