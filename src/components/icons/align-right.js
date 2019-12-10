import React from "react";
import IconWrapper from "./icon-wrapper";

export function AlignRightIcon(props) {
	return (
		<IconWrapper {...props}>
			<svg
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M21 5H11M21 12H3M21 19H11"
					stroke="#1E1E1E"
					strokeWidth="1.5"
				/>
			</svg>
		</IconWrapper>
	);
}

export default AlignRightIcon;
