import { css } from "@emotion/core";
import styled from "@emotion/styled";

const size = ({ size = 24 }) => {
	return css({
		width: size,
		height: size
	});
};

export const IconWrapper = styled.div`
	${size};
	display: inline-block;

	svg {
		display: block;

		* {
			&[stroke] {
				stroke: currentColor;
			}
			&[fill]:not[fill="white"] {
				fill: currentColor;
			}
		}
	}
`;

export default IconWrapper;
