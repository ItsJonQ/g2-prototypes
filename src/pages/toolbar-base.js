import React from "react";
import { ControlledToolbar } from "../components/toolbar";
import { Page } from "../components/page";
import { Text } from "../components/text";
import { View } from "../components/view";

export function Toolbar() {
	return (
		<Page title="Toolbar Base">
			<Text shade="muted">Hover and move the Toolbar around</Text>
			<View mt={4}>
				<ControlledToolbar default={{ x: 100, y: 0 }} />
			</View>
		</Page>
	);
}

export default Toolbar;
