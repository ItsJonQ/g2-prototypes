import React from "react";
import { Link as LinkBase } from "react-router-dom";
import { Flex } from "@itsjonq/elm";
import { Page } from "../components/page";
import { Text } from "../components/text";
import { View } from "../components/view";

export function Home() {
	return (
		<Page title="Prototypes">
			<Divider />

			<Section title="Links:">
				<Flex justifyContent="flex-start" gap="xl">
					<Flex.Item>
						<Link
							href="https://github.com/WordPress/gutenberg/issues/18667"
							target="_blank"
						>
							Github Proposal
						</Link>
					</Flex.Item>
					<Flex.Item>
						<Link
							href="https://www.figma.com/file/fnyj380i05vGzuuH60frLQ/G2-Design?node-id=80%3A190"
							target="_blank"
						>
							Figma Mockups
						</Link>
					</Flex.Item>
				</Flex>
			</Section>

			<Divider />

			<Section title="Select a prototype:">
				<Link to="/toolbar-base">Toolbar (Base)</Link>
				<Link to="/toolbar-movers">Toolbar (Movers)</Link>
				<Link to="/block-base">Block x Toolbar (Base)</Link>
			</Section>

			<Divider />

			<Section title="Select a component:">
				<Link to="/buttons">Buttons</Link>
				<Link to="/icons">Icons</Link>
				<Link to="/icon-buttons">IconButtons</Link>
			</Section>
		</Page>
	);
}

const Link = props => {
	const { to } = props;
	return (
		<p>{to ? <LinkBase {...props} /> : React.createElement("a", props)}</p>
	);
};

const Divider = () => (
	<View my={4}>
		<hr />
	</View>
);

const Section = ({ title, children }) => {
	return (
		<View mb={2}>
			<Text shade="muted">{title}</Text>
			{children}
		</View>
	);
};

export default Home;
