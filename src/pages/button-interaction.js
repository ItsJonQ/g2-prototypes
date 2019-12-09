import React from "react";
import { useControls } from "@itsjonq/controls";
import { View } from "@itsjonq/elm";
import { Button } from "../components/button";
import { IconButton } from "../components/icon-button";
import { Page } from "../components/page";
import { Text } from "../components/text";

export function ButtonInteraction() {
	const { text, range, attributes } = useControls();

	text("content", "Button");
	range("zoomLevel", 3, { min: 1, max: 6 });

	const { content, zoomLevel } = attributes;

	const viewStyle = {
		transform: `scale(${zoomLevel || 1})`,
		transformOrigin: "top left",
		marginBottom: 20 * zoomLevel * 1.5
	};

	return (
		<Page title="Button Interaction">
			<View marginBottom={20}>
				<Text shade="muted">
					Play with the click/pressed interaction
				</Text>
			</View>
			<View {...viewStyle}>
				<Button>{content}</Button>
			</View>
			<View {...viewStyle}>
				<IconButton />
			</View>
		</Page>
	);
}

export default ButtonInteraction;
