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

const themeStyles = ({ theme }) => {
	const { isDarkMode } = theme;
	let backgroundColor = isDarkMode ? "black" : "white";
	let textColor = isDarkMode ? "white" : "black";

	return css`
		--toolbarBackgroundColor: ${backgroundColor};
		--toolbarBorderColor: ${textColor};
		--toolbarTextColor: ${textColor};
	`;
};

export const MainToolbar = styled.div`
	${themeStyles};
	${animationStyles};
	${size};
	display: flex;
	border-radius: 2px;
	border: 1px solid var(--toolbarBorderColor);
	overflow: hidden;
	position: relative;

	${({ isActive }) =>
		isActive &&
		css`
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
		`}

	${({ isAside }) =>
		isAside &&
		css`
			border-radius: 2px;
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
		`}
`;

export const Group = styled.div`
	${animationStyles};
	background: var(--toolbarBackgroundColor);
	display: inline-flex;
	border-right: 1px solid var(--toolbarBorderColor);
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
	const { hoverAnimationSpeed } = props.theme;

	return css`
		transition: color ${hoverAnimationSpeed}ms linear;
	`;
};

const itemBorderStyles = props => {
	const { isWithBorder } = props;

	if (!isWithBorder) return "";

	return css`
		border-right: 1px solid var(--toolbarBorderColor) !important;
	`;
};

export const Item = styled.div`
	color: var(--toolbarTextColor);
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

	button {
		color: currentColor;
	}

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
		css`
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
	background: var(--toolbarBackgroundColor);
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
			background: var(--toolbarTextColor);
			color: var(--toolbarBackgroundColor);

			&:focus {
				background: var(--toolbarTextColor);
				color: var(--toolbarBackgroundColor);
			}

			* {
				color: var(--toolbarBackgroundColor);
			}
		`}
`;
ArrowWrappers.defaultProps = {
	className: "drag-handle"
};
