import React, { useState } from "react";

import { DragHandleWrapper, BaseToolbarArrowItem } from "./drag-handle";
import { Icon } from "../icon";
import { IconButton } from "../icon-button";

export function DragHandleSplit(props) {
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
			>
				<IconButton icon="chevron-up" />
			</BaseToolbarArrowItem>
			<BaseToolbarArrowItem
				{...props}
				onMouseDown={setRight}
				isDragging={isPressedRight && isDragging}
			>
				<Icon icon="chevron-down" />
			</BaseToolbarArrowItem>
		</DragHandleWrapper>
	);
}
