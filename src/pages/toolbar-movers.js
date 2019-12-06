import React, { useState } from "react";
import styled from "@emotion/styled";
import { ControlledToolbar } from "../components/toolbar";
import {
	DragHandleWrapper,
	ArrowWrappers
} from "../components/toolbar/drag-handle";
import { DualArrowDragHandle } from "../components/toolbar/dual-arrow-drag-handle";
import { Icon } from "../components/icon";
import { Page } from "../components/page";
import { Text } from "../components/text";
import { View } from "../components/view";

export function ToolbarMovers() {
	return (
		<Page title="Toolbar Movers">
			<Text shade="muted">Hover and move the Toolbar around</Text>
			<View mt={4}>
				<ControlledToolbar default={{ x: 100, y: 0 }} />

				<ControlledToolbar
					default={{ x: 100, y: 100 }}
					renderDragHandle={CombinedArrowDragHandle}
				/>

				<ControlledToolbar
					default={{ x: 100, y: 200 }}
					renderDragHandle={DualArrowDragHandle}
					dragHandleClassName="drag-arrow"
				/>
			</View>
		</Page>
	);
}

function CombinedArrowDragHandle(props) {
	const { isDragging } = props;
	return (
		<DragHandleWrapper {...props}>
			<ArrowWrappers {...props}>
				<CombinedArrowIconWrapper>
					{isDragging ? (
						<Icon icon="mover-dragged" />
					) : (
						<>
							<Icon icon="chevron-up" />
							<Icon icon="chevron-down" />
						</>
					)}
				</CombinedArrowIconWrapper>
			</ArrowWrappers>
		</DragHandleWrapper>
	);
}
const CombinedArrowIconWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 48px;
`;

export default ToolbarMovers;
