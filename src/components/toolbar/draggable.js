import React from "react";
import { Rnd } from "react-rnd";

export function Draggable(props) {
	const { children, disableDragging } = props;

	if (disableDragging) return children;

	return (
		<Rnd
			dragHandleClassName="drag-handle"
			enableResizing={false}
			bounds="window"
			{...props}
		>
			{children}
		</Rnd>
	);
}

export default Draggable;
