import React from "react";
import { MoverContextual } from "./mover-contextual";

const MoverComponent = {
	contextual: MoverContextual
};

export const Mover = React.forwardRef((props, ref) => {
	const FallbackComponent = MoverComponent.contextual;
	const Component = MoverComponent[props.type] || FallbackComponent;

	return <Component {...props} ref={ref} />;
});
