import React from "react";
import styled from "@emotion/styled";
import { ToolbarItem } from "reakit/Toolbar";

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

export function MoverDraggable(props) {
	const { isDragging, toolbar } = props;

	return (
		<Container>
			<MoverWrapper {...props}>
				<ArrowWrappers {...props}>
					<Wrapper>
						{isDragging ? (
							<IconButton
								variant="toolbar-block"
								icon="mover-dragged"
								style={{ cursor: "grabbing" }}
							/>
						) : (
							<ToolbarItem
								{...toolbar}
								icon="drag"
								variant="toolbar-block"
								as={IconButton}
							/>
						)}
					</Wrapper>
				</ArrowWrappers>
			</MoverWrapper>
		</Container>
	);
}

const Container = styled.div`
	position: relative;
	right: 0px;
`;

const Wrapper = styled.div`
	padding-right: 1px;
	margin: -4px -10px;
	height: calc(100% + 8px);
	overflow: hidden;
`;
