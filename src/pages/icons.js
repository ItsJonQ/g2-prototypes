import React from "react";
import styled from "@emotion/styled";

import * as Icons from "../components/icons";
import { Page } from "../components/page";
import { Text } from "../components/text";

export function IconsPage() {
	const items = Object.keys(Icons);

	return (
		<Page title="Icons">
			<Grid>
				{items.map(key => {
					const Icon = Icons[key];
					return (
						<GridItem key={key}>
							<IconWrapper>
								<Icon />
							</IconWrapper>
							<Text size={10}>{key}</Text>
						</GridItem>
					);
				})}
			</Grid>
		</Page>
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

export default IconsPage;
