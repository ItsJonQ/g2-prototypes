import React from "react";
import { MoverContextual } from "./mover-contextual";
import { MoverDraggable } from "./mover-draggable";

const MoverComponent = {
	contextual: MoverContextual,
	draggable: MoverDraggable
};

export const Mover = React.forwardRef((props, ref) => {
	const FallbackComponent = MoverComponent.contextual;
	const Component = MoverComponent[props.type] || FallbackComponent;

	return <Component {...props} ref={ref} />;
});
