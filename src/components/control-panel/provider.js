import React from "react";
import { ControlPanel, useControlPanel } from "@itsjonq/controls";
import { Controls } from "./controls";
import { MouseTrail } from "../mouse-trail";

export function ControlPanelProvider({ children }) {
	const showMouseTrail = shouldShowMouseTrail(useControlPanel().attributes);

	return (
		<>
			<ControlPanel top={60} />
			<Controls />
			{showMouseTrail ? <MouseTrail /> : null}
			{children}
		</>
	);
}

function shouldShowMouseTrail(state = []) {
	if (!state.length) return false;
	const option = state.find(item => item.prop === "showMouseTrail");

	return !!(option && option.value);
}

export default ControlPanelProvider;
