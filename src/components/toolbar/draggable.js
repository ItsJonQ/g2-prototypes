import React from "react";
import { Rnd } from "react-rnd";

export function Draggable(props) {
	const {
		children,
		disableDragging,
		isExpanded,
		renderDragHandle,
		...restProps
	} = props;

	if (disableDragging) return children;

	return (
		<Rnd
			dragHandleClassName="drag-handle"
			enableResizing={false}
			bounds="window"
			{...restProps}
		>
			{children}
		</Rnd>
	);
}

export default Draggable;
