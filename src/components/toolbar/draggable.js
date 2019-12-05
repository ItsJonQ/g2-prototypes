import React from "react";
import { Rnd } from "react-rnd";

export function Draggable(props) {
	const { children } = props;

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
