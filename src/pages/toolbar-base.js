import React from "react";
import { Toolbar } from "../components/toolbar";
import { Page } from "../components/page";
import { Text } from "../components/text";
import { View } from "../components/view";

export function ToolbarBase() {
	return (
		<Page title="Toolbar Base">
			<Text shade="muted">Hover and move the Toolbar around</Text>
			<View mt={4}>
				<Toolbar default={{ x: 100, y: 0 }} />
			</View>
		</Page>
	);
}

export default ToolbarBase;
