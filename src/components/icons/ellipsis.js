import React from "react";
import IconWrapper from "./icon-wrapper";

export function EllipsisIcon(props) {
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
					d="M13 12L11 12M19 12L17 12M7 12L5 12"
					stroke="#1E1E1E"
					strokeWidth="2"
				/>
			</svg>
		</IconWrapper>
	);
}

export default EllipsisIcon;
