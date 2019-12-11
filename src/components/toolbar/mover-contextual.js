import React from "react";
import styled from "@emotion/styled";
import { ToolbarItem } from "reakit/Toolbar";
import { Icon } from "../icon";
import { IconButton } from "../icon-button";

import { ArrowWrappers, DragSlider, MainToolbar, Group } from "./styles";

export function MoverWrapper(props) {
	const { children, ...restProps } = props;
	return (
		<DragSlider {...restProps}>
			<MainToolbar isAside>
				<Group isLast>{children}</Group>
			</MainToolbar>
		</DragSlider>
	);
}

export function MoverContextual(props) {
	const { isDragging, toolbar } = props;

	return (
		<MoverWrapper {...props}>
			<ArrowWrappers {...props} className="no-drag">
				{isDragging ? (
					<Icon icon="mover-dragged" />
				) : (
					<>
						<ToolbarItemContainer>
							<ToolbarItem
								{...toolbar}
								icon="chevron-up"
								iconSize={20}
								size="micro"
								overflow="hidden"
								as={IconButton}
							/>
							<ToolbarItem
								{...toolbar}
								as={IconButton}
								icon="chevron-down"
								iconSize={20}
								iconStyles={{
									left: 1
								}}
								size="micro"
							/>
						</ToolbarItemContainer>
					</>
				)}
			</ArrowWrappers>
		</MoverWrapper>
	);
}

export const ToolbarItemContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0 -4px;
`;

export const IconPlaceholder = styled.div`
	opacity: 0;
	visibility: hidden;
	pointer-events: none;
`;
