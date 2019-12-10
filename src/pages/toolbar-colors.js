import React, { useEffect } from "react";
import { useControls } from "@itsjonq/controls";

import { Toolbar } from "../components/toolbar";
import { Page } from "../components/page";
import { View } from "../components/view";

export function ToolbarColors() {
	const { color, attributes } = useControls();

	color("backgroundColor", "#fff");
	const { backgroundColor } = attributes;

	useEffect(() => {
		document.body.style.backgroundColor = backgroundColor;
		document.body.style.transition = "all 200ms linear";
		return () => {
			document.body.style.backgroundColor = null;
			document.body.style.transition = null;
		};
	}, [backgroundColor]);

	return (
		<Page title="Toolbar Colors">
			<View mt={4}>
				<Toolbar default={{ x: 100, y: 0 }} />
			</View>
		</Page>
	);
}

export default ToolbarColors;
