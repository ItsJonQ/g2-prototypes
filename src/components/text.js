import styled from "@emotion/styled";

const shades = ({ shade }) => {
	const shades = {
		normal: 1,
		subtle: 0.75,
		muted: 0.5
	};

	const value = shades[shade] || 1;

	return `opacity: ${value};`;
};

export const Text = styled.div`
	margin: 0;
	padding: 0;
	${shades}
`;

Text.defaultProps = {
	shade: 1
};

export default Text;
