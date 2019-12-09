import React from "react";
import styled from "@emotion/styled";
import { Icon } from "../icon";

import { BaseToolbarArrowItem, DragSlider, MainToolbar, Group } from "./styles";
export { BaseToolbarArrowItem, Group } from "./styles";

export function DragHandleWrapper(props) {
	const { children, ...restProps } = props;
	return (
		<DragSlider {...restProps}>
			<MainToolbar isAside>
				<Group isLast>{children}</Group>
			</MainToolbar>
		</DragSlider>
	);
}

export function DragHandle(props) {
	const { isDragging } = props;

	return (
		<DragHandleWrapper {...props}>
			<BaseToolbarArrowItem {...props}>
				{isDragging ? (
					<Icon icon="mover-dragged" />
				) : (
					<>
						<UpWrapper>
							<Icon icon="chevron-up" size={20} />
						</UpWrapper>
						<DownWrapper>
							<Icon icon="chevron-down" size={20} />
						</DownWrapper>
						<IconPlaceholder>
							<Icon />
						</IconPlaceholder>
					</>
				)}
			</BaseToolbarArrowItem>
		</DragHandleWrapper>
	);
}

export const UpWrapper = styled.div`
	position: absolute;
	top: 2px;
	left: 12px;
`;

export const DownWrapper = styled.div`
	position: absolute;
	bottom: -2px;
	left: 13px;
`;

export const IconPlaceholder = styled.div`
	opacity: 0;
	visibility: hidden;
	pointer-events: none;
`;

export default DragHandle;
