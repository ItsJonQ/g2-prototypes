import React from "react";
import { Controls, useControls } from "@itsjonq/controls";
import { MouseTrail } from "../mouse-trail";

export function ControlPanelProvider({ children }) {
	const { attributes } = useControls();
	const { showMouseTrail } = attributes;

	return (
		<>
			<Controls top={60} />
			{showMouseTrail ? <MouseTrail /> : null}
			{children}
		</>
	);
}

export default ControlPanelProvider;
