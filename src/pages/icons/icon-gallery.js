import React from "react";
import styled from "@emotion/styled";

import { withControlPanel, useKnobs } from "../../components/control-panel";
import * as Icons from "../../components/icons";
import { Text } from "../../components/text";

function useCreateAttributes() {
	const { useNumber, useText } = useKnobs();
	return {
		iconSize: useNumber("iconSize", 24),
		iconColor: useText("iconColor", "black")
	};
}

export function IconGallery(props) {
	const { attributes } = props;
	const { iconColor, iconSize } = attributes;
	const items = Object.keys(Icons);

	return (
		<Grid>
			{items.map(key => {
				const Icon = Icons[key];
				return (
					<GridItem key={key}>
						<IconWrapper>
							<Icon
								size={iconSize}
								style={{ color: iconColor }}
							/>
						</IconWrapper>
						<Text size={10}>{key}</Text>
					</GridItem>
				);
			})}
		</Grid>
	);
}

const Grid = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin: 0 -8px;
`;

const GridItem = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 25%;
	padding: 8px;
	text-align: center;

	@media (min-width: 40em) {
		width: 20%;
	}
`;

const IconWrapper = styled.div`
	padding: 20px;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const ControlledIconGallery = withControlPanel(useCreateAttributes)(
	IconGallery
);

export default IconGallery;
