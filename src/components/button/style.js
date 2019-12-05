import colorUtils from "tinycolor2";
import { css } from "@emotion/core";
import styled from "@emotion/styled";

export const mainColor = "#3e58e1";
export const pressedColor = "#000";
export const disabledColor = "#ccc";

export const baseButtonStyles = {
	["--buttonTextColor"]: mainColor,
	["--buttonBackgroundColor"]: "transparent",
	["--buttonFocusColor"]: "transparent",
	["--buttonPressedColor"]: pressedColor,
	["--buttonDisabledColor"]: disabledColor,
	["--buttonFontFamily"]:
		'Cabin, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
	appearance: "none",
	border: "1px solid",
	borderColor: "currentColor",
	backgroundColor: "var(--buttonBackgroundColor)",
	color: "var(--buttonTextColor)",
	cursor: "pointer",
	fontFamily: "var(--buttonFontFamily)",
	fontWeight: 500,
	fontSize: 14,
	lineHeight: 1,
	borderRadius: 4,
	padding: "8px 24px",
	height: 36,
	outline: "none",
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
		--buttonFocusColor: ${colorUtils(color)
			.darken(10)
			.toHexString()};

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
		--buttonFocusColor: ${colorUtils(color)
			.darken(10)
			.toHexString()};

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
		--buttonFocusColor: ${colorUtils(color)
			.darken(10)
			.toHexString()};

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

const variant = props => {
	const { variant } = props;
	switch (variant) {
		case "default":
			return variantDefault(props);
		case "primary":
			return variantPrimary(props);
		case "tertiary":
			return variantTertiary(props);
		default:
			return variantDefault(props);
	}
};

const size = props => {
	const { size } = props;

	switch (size) {
		case "sm":
			return css`
				font-size: 11px;
				padding: 4px 24px 4px;
				height: 24px;
			`;
		default:
			return "";
	}
};

export const BaseButton = styled("button")`
	${baseButton};
	${variant};
	${size};
`;

export const ButtonContent = styled.span``;
