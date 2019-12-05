import React from "react";
import { Link as LinkBase } from "react-router-dom";
import { Page } from "../components/page";
import { Text } from "../components/text";
import { View } from "../components/view";

export function HomePage() {
	return (
		<Page title="Prototypes">
			<View mb={4}>
				<Text shade="muted">Select a prototype:</Text>
			</View>
			<Link to="/toolbar-base">Toolbar (Base)</Link>
			<Link to="/block-base">Block x Toolbar (Base)</Link>

			<View mt={4} mb={4}>
				<hr />
			</View>

			<View mb={4}>
				<Text shade="muted">Select a component:</Text>
			</View>
			<Link to="/buttons">Buttons</Link>
			<Link to="/icons">Icons</Link>
			<Link to="/icon-buttons">IconButtons</Link>
		</Page>
	);
}

const Link = props => (
	<p>
		<LinkBase {...props} />
	</p>
);

export default HomePage;
