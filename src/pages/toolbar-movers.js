import React from "react";
import styled from "@emotion/styled";
import { Toolbar } from "../components/toolbar";
import { Page } from "../components/page";
import { Text } from "../components/text";
import { View } from "../components/view";

export function ToolbarMovers() {
	return (
		<Page title="Toolbar Movers">
			<Section title="Option 1. Contextual">
				<Toolbar disableDragging alwaysShowMover={false} />
			</Section>

			<Section title="Option 1. Contextual (Horizontal)">
				<Toolbar
					disableDragging
					alwaysShowMover={false}
					isMoverHorizontal
				/>
			</Section>

			<Divider />

			<Section title="Option 2. Visible by default">
				<Toolbar disableDragging alwaysShowMover={true} />
			</Section>

			<Section title="Option 2. Visible by default (Horizontal)">
				<Toolbar
					disableDragging
					alwaysShowMover={true}
					isMoverHorizontal
				/>
			</Section>

			<Divider />

			<Section title="Option 3. Right Side">
				<Toolbar
					disableDragging
					alwaysShowMover={true}
					isMoverRightSide
					isExpanded
				/>
			</Section>

			<Section title="Option 3. Right Side (Horizontal)">
				<Toolbar
					disableDragging
					alwaysShowMover={true}
					isMoverRightSide
					isExpanded
					isMoverHorizontal
				/>
			</Section>

			<Divider />
		</Page>
	);
}

function Section({ children, title }) {
	return (
		<View mb={5}>
			<View mb={3}>
				<Text shade="muted">{title}</Text>
			</View>
			<Wrapper>{children}</Wrapper>
		</View>
	);
}

function Divider() {
	return (
		<View my={5}>
			<hr />
		</View>
	);
}

const Wrapper = styled.div`
	display: inline-flex;
`;

export default ToolbarMovers;
