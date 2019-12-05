import { css } from "@emotion/core";
import styled from "@emotion/styled";
import { is } from "@itsjonq/is";

const size = ({ size = 24 }) => {
	const iconSize = is.number(size) ? size : 24;
	return css({
		width: iconSize,
		height: iconSize
	});
};

const display = ({ display = "inline-block" }) => {
	return css({
		display
	});
};

export const IconWrapper = styled.div`
	${display};
	${size};

	svg {
		display: block;
		width: 100%;
		height: 100%;

		* {
			&[stroke] {
				stroke: currentColor;
			}
			&[fill]:not([fill="white"]) {
				fill: currentColor;
			}
		}
	}
`;

export default IconWrapper;
