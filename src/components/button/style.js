import colorUtils from "tinycolor2";
import { css } from "@emotion/core";
import styled from "@emotion/styled";

export const mainColor = "#3e58e1";
export const pressedColor = "#1e1e1e";
export const disabledColor = "#ccc";

export const baseButtonStyles = {
	"--buttonTextColor": mainColor,
	"--buttonBackgroundColor": "transparent",
	"--buttonPressedColor": pressedColor,
	"--buttonDisabledColor": disabledColor,
	"--buttonFocusColor": getButtonFocusColor(mainColor),
	"--buttonFontFamily":
		'Cabin, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
	alignItems: "center",
	appearance: "none",
	backgroundColor: "var(--buttonBackgroundColor)",
	border: "1px solid",
	borderColor: "currentColor",
	borderRadius: 4,
	color: "var(--buttonTextColor)",
	cursor: "pointer",
	display: "inline-flex",
	justifyContent: "center",
	fontFamily: "var(--buttonFontFamily)",
	fontSize: 14,
	fontWeight: 500,
	height: 36,
	lineHeight: 1,
	padding: "8px 24px",
	position: "relative",
	outline: "none",
	transition: "all 100ms linear",
	"&[disabled]": {
		pointerEvents: "none"
	}
};

const baseButton = () => {
	return css(baseButtonStyles);
};

const variantDefault = ({ theme: { color } }) => {
	return css`
		--buttonTextColor: ${color};
		--buttonFocusColor: ${getButtonFocusColor(color)};

		&:hover,
		&.is-hovered {
			color: var(--buttonFocusColor);
		}

		&:focus,
		&.is-focused {
			box-shadow: 0 0 0 1px var(--buttonFocusColor);
		}

		&:active,
		&.is-active,
		&.is-pressed {
			color: ${pressedColor};
			box-shadow: none;
		}

		&[disabled] {
			color: var(--buttonDisabledColor);
		}
	`;
};

const variantPrimary = ({ theme: { color } }) => {
	return css`
		--buttonBackgroundColor: ${color};
		--buttonTextColor: white;
		--buttonFocusColor: ${getButtonFocusColor(color)};

		&:hover,
		&.is-hovered {
			background: var(--buttonFocusColor);
		}

		&:focus,
		&.is-focused {
			background: var(--buttonFocusColor);
			box-shadow: 0 0 0 2px var(--buttonFocusColor), 0 0 0 1px white;
		}

		&:active,
		&.is-active,
		&.is-pressed {
			background: var(--buttonPressedColor);
			box-shadow: none;
		}

		&[disabled] {
			background: var(--buttonDisabledColor);
		}
	`;
};

const variantTertiary = ({ theme: { color } }) => {
	return css`
		--buttonTextColor: ${color};
		--buttonFocusColor: ${getButtonFocusColor(color)};

		border-color: transparent;

		&:hover,
		&.is-hovered {
			color: var(--buttonFocusColor);
		}

		&:focus,
		&.is-focused {
			box-shadow: 0 0 0 2px var(--buttonFocusColor);
		}

		&:active,
		&.is-active,
		&.is-pressed {
			color: ${pressedColor};
			box-shadow: none;
		}

		&[disabled] {
			color: var(--buttonDisabledColor);
			border-color: currentColor;
		}
	`;
};

const variantDropdown = ({ theme: { color } }) => {
	return css`
		--buttonTextColor: ${color};
		--buttonFocusColor: ${getButtonFocusColor(color)};

		border-color: transparent;
		border-radius: 2px;
		color: #1e1e1e;

		&:hover,
		&.is-hovered {
			color: var(--buttonFocusColor);
		}

		&:focus,
		&.is-focused {
			color: var(--buttonFocusColor);
		}

		&:active,
		&.is-active,
		&.is-pressed {
			box-shadow: 0 0 0 1px var(--buttonFocusColor);
			color: var(--buttonFocusColor);
		}

		&[disabled] {
			color: var(--buttonDisabledColor);
			border-color: currentColor;
		}
	`;
};

const variantToolbarBlock = ({ theme: { color }, hasFlag }) => {
	return css`
		--buttonTextColor: ${color};
		--buttonFocusColor: ${getButtonFocusColor(color)};

		border-color: transparent;
		border-radius: 0px;
		color: inherit;
		margin: -1px;
		min-height: calc(100% + 2px);
		min-width: 32px;
		padding: 2px 8px;
		position: relative;
		width: calc(100% + 2px);
		z-index: 1;

		&:hover,
		&.is-hovered {
			color: var(--buttonFocusColor);
		}

		&:focus,
		&.is-focused {
			color: var(--buttonFocusColor);
			box-shadow: 0 0 0 2px var(--buttonFocusColor) inset;
		}

		&:active,
		&.is-active,
		&.is-pressed {
			box-shadow: 0 0 0 1px var(--buttonFocusColor);
			color: var(--buttonFocusColor);
		}

		&[disabled] {
			color: var(--buttonDisabledColor);
			border-color: currentColor;
		}

		${hasFlag &&
			css`
				&::before {
					width: 0;
					height: 0;
					border-left: 6px solid transparent;
					border-right: 6px solid transparent;
					border-bottom: 6px solid currentColor;
					position: absolute;
					content: "";
					bottom: -2px;
					right: -3px;
					transform: rotate(135deg);
				}
			`}
	`;
};

const variant = props => {
	const { variant } = props;
	switch (variant) {
		case "default":
			return variantDefault(props);
		case "primary":
			return variantPrimary(props);
		case "tertiary":
			return variantTertiary(props);
		case "dropdown":
			return variantDropdown(props);
		case "toolbar-block":
			return variantToolbarBlock(props);
		default:
			return variantDefault(props);
	}
};

const alignItems = props => {
	const { alignItems } = props;
	switch (alignItems) {
		case "left":
			return css`
				justify-content: flex-start;
			`;
		case "right":
			return css`
				justify-content: flex-end;
			`;
		default:
			return css`
				justify-content: center;
			`;
	}
};

const block = props => {
	const { isBlock } = props;

	if (!isBlock) return "";

	return css`
		display: flex;
		width: 100%;
	`;
};

const narrow = props => {
	const { isNarrow } = props;

	if (!isNarrow) return "";

	return css`
		padding-left: 4px;
		padding-right: 4px;
	`;
};

const size = props => {
	const { size } = props;

	switch (size) {
		case "sm":
			return css`
				font-size: 11px;
				height: 24px;
				padding: 4px 24px 4px;
			`;
		case "micro":
			return css`
				height: 16px;
				padding: 2px 4px;
			`;
		default:
			return "";
	}
};

const iconButton = props => {
	const {
		isIconButton,
		theme: { color }
	} = props;

	if (!isIconButton) return "";

	return css`
		--buttonFocusColor: ${getButtonFocusColor(color)};
		border: none;
		border-radius: 2px;
		color: #1e1e1e;
		width: 32px;
		height: 100%;
		max-height: 32px;
		padding: 2px;

		&:focus,
		&.is-focused {
			color: var(--buttonTextColor);
		}

		&:active,
		&.is-active,
		&.is-pressed {
			background-color: var(--buttonPressedColor);
			box-shadow: 0 0 0 1px var(--buttonPressedColor);
			color: white !important;
		}
	`;
};

function getButtonFocusColor(color) {
	return colorUtils(color)
		.darken(10)
		.toHexString();
}

const styleProps = ({ overflow }) => css({ overflow });

export const BaseButton = styled.button`
	${baseButton};
	${iconButton};
	${variant};
	${alignItems};
	${block};
	${narrow};
	${size};
	${styleProps};
`;

export const ButtonContent = styled.span`
	position: relative;
	z-index: 1;
`;

export const RippleBase = styled.span`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 0;
`;
