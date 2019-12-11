import React, { useState } from "react";
import { DragHandleWrapper, BaseToolbarArrowItem } from "./drag-handle";
import { Icon } from "../icon";

export function DragHandleDualArrow(props) {
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
			<BaseToolbarArrowItem
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
			</BaseToolbarArrowItem>
			<BaseToolbarArrowItem
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
			</BaseToolbarArrowItem>
		</DragHandleWrapper>
	);
}
