import { View } from "@itsjonq/elm";
import styled from "@emotion/styled";
import { is } from "@itsjonq/is";

const shades = ({ shade }) => {
	const shades = {
		normal: 1,
		subtle: 0.75,
		muted: 0.5
	};

	const value = shades[shade] || 1;

	return `opacity: ${value};`;
};

const size = ({ size = "1rem" }) => {
	const fontSize = is.number(size) ? `${size}px` : size;
	return `font-size: ${fontSize}`;
};

export const Text = styled(View)`
	margin: 0;
	padding: 0;
	${size};
	${shades};
`;

Text.defaultProps = {
	shade: 1
};

export default Text;
