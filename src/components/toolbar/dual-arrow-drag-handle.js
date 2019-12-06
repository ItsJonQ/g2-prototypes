import React, { useState } from "react";
import styled from "@emotion/styled";
import { DragHandleWrapper, ArrowWrappers } from "./drag-handle";
import { Icon } from "../icon";

export function DualArrowDragHandle(props) {
	const { isDragging } = props;
	const [isPressedLeft, setIsPressedLeft] = useState(false);
	const isPressedRight = !isPressedLeft;

	const setLeft = () => {
		setIsPressedLeft(true);
	};

	const setRight = () => {
		setIsPressedLeft(false);
	};

	const isLeftDragging = isPressedLeft && isDragging;
	const isRightDragging = isPressedRight && isDragging;

	return (
		<DragHandleWrapper {...props}>
			<LeftArrowWrapper>
				<ArrowWrappers
					{...props}
					onMouseDown={setLeft}
					isDragging={isPressedLeft && isDragging}
					isWithBorder
					className="drag-arrow"
				>
					{isLeftDragging ? (
						<Icon icon="mover-dragged" />
					) : (
						<Icon icon="chevron-up" />
					)}
				</ArrowWrappers>
			</LeftArrowWrapper>
			<ArrowWrappers
				{...props}
				onMouseDown={setRight}
				isDragging={isPressedRight && isDragging}
				className="drag-arrow"
			>
				{isRightDragging ? (
					<Icon icon="mover-dragged" />
				) : (
					<Icon icon="chevron-down" />
				)}
			</ArrowWrappers>
		</DragHandleWrapper>
	);
}

const LeftArrowWrapper = styled.div`
	padding-right: 12px;
`;
