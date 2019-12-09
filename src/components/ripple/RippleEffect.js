import React from "react";
import { useControls } from "@itsjonq/controls";
import { useRippleContext } from "./context";
import { RippleEffectBase, RippleWave } from "./style";

export function RippleEffect(props) {
	const { number, range, attributes } = useControls();

	number("rippleDuration", 300);
	range("rippleOpacity", 3, { min: 0, max: 10 });

	const { position, isRippling } = useRippleContext();
	const { x, y, size } = position;

	const { rippleDuration, rippleOpacity } = attributes;

	const defaultStyle = {
		opacity: 0,
		transform: `scale(${size / 9})`,
		transition: `all ${rippleDuration}ms linear`,
		top: y,
		left: x
	};

	const rippleStyle = {
		opacity: rippleOpacity / 10,
		transition: "initial",
		top: y,
		left: x
	};

	const currentStyle = isRippling ? rippleStyle : defaultStyle;

	return (
		<RippleEffectBase>
			<RippleWave style={currentStyle} />
		</RippleEffectBase>
	);
}
