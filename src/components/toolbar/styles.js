import React from "react";
import {
	Toolbar as ReakitToolbar,
	ToolbarItem as ReakitToolbarItem
} from "reakit/Toolbar";
import { css } from "@emotion/core";
import styled from "@emotion/styled";

const CONFIG = {
	size: {
		lg: 48,
		md: 40,
		sm: 36
	}
};

export function BaseToolbar(props) {
	return <ReakitToolbar {...props} as={ToolbarWrapper} />;
}

export function BaseToolbarItem(props) {
	return <ReakitToolbarItem {...props} as={Item} />;
}

export function BaseToolbarArrowItem(props) {
	return <ReakitToolbarItem {...props} as={ArrowWrappers} />;
}

const animationStyles = props => {
	const { animationEasing, animationSpeed } = props.theme;
	return css`
		transition: all ${animationSpeed}ms ${animationEasing};
	`;
};

const size = props => {
	const sizes = CONFIG.size;
	const value = props.theme.size || sizes.md;

	return css`
		min-width: ${value}px;
		height: ${value}px;
	`;
};

export const ToolbarWrapper = styled.div`
	position: relative;
	border-radius: 2px;
`;

export const MainToolbar = styled.div`
	${animationStyles};
	${size};
	display: flex;
	border-radius: 2px;
	border: 1px solid black;
	box-shadow: 0 0 0 rgba(0, 0, 0, 0);
	overflow: hidden;
	position: relative;

	${({ isActive }) =>
		isActive &&
		`
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  `}

	${({ isAside }) =>
		isAside &&
		`
    border-radius: 2px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  `}
`;

export const Group = styled.div`
	${animationStyles};
	background: white;
	display: inline-flex;
	border-right: 1px solid black;
	height: 100%;
	vertical-align: middle;

	${({ isLast }) =>
		isLast &&
		css`
			border-right: none;
			margin-left: auto;
		`}
`;
Group.defaultProps = {
	className: "ToolbarGroup"
};

const itemPrimaryStyles = props => {
	const { isPrimaryAction } = props;
	if (!isPrimaryAction) return "";

	return css`
		&::before {
			width: 0;
			height: 0;
			border-left: 6px solid transparent;
			border-right: 6px solid transparent;
			border-bottom: 6px solid currentColor;
			position: absolute;
			content: "";
			bottom: -2px;
			right: -4px;
			transform: rotate(135deg);
		}
	`;
};

const itemHoverStyles = props => {
	const { interactionColor, hoverAnimationSpeed } = props.theme;

	return css`
		transition: color ${hoverAnimationSpeed}ms linear;
		&:hover {
			color: ${interactionColor};
		}
	`;
};

const itemBorderStyles = props => {
	const { isWithBorder } = props;

	if (!isWithBorder) return "";

	return css`
		border-right: 1px solid black !important;
	`;
};

export const Item = styled.div`
	color: black;
	display: inline-flex;
	vertical-align: middle;
	align-items: center;
	justify-content: center;
	height: 100%;
	padding: 4px;
	position: relative;

	&:last-child {
		border-right: none;
	}

	&:focus {
		outline: none;
		background: rgba(0, 0, 0, 0.1);
	}

	${itemPrimaryStyles};
	${itemHoverStyles};
	${itemBorderStyles}

	> * {
		fill: currentColor;
		${animationStyles};
	}
`;
Item.defaultProps = {
	className: "ToolbarItem"
};

export const DragHandlerSliderWrapper = styled.div`
	${animationStyles};
	display: inline-block;
	vertical-align: top;
	position: absolute;
	top: 0;
	left: 0;

	${({ innerWidth, isActive }) =>
		isActive &&
		`
		transform: translateX(-${innerWidth - 2}px);
	`}
`;

export const DragSlider = styled.div``;

export const Slider = styled.div`
	${animationStyles};
	width: 0;
	overflow: hidden;
`;

export const ArrowWrappers = styled(Item)`
	${animationStyles};
	background: white;
	position: relative;
	padding: 4px 10px;

	.react-draggable:hover & {
		cursor: grab;
	}

	${itemBorderStyles};

	${({ isDragging }) =>
		isDragging &&
		css`
			cursor: grabbing !important;
			background: black;
			color: white;

			&:focus {
				background: black;
				color: white;
			}

			* {
				color: white;
			}
		`}
`;
ArrowWrappers.defaultProps = {
	className: "drag-handle"
};
