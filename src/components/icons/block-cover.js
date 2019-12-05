import React from "react";
import IconWrapper from "./icon-wrapper";

export function BlockCoverIcon(props) {
	return (
		<IconWrapper {...props}>
			<svg
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<rect
					x="5.75"
					y="5.75"
					width="12.5"
					height="12.5"
					rx="1.25"
					stroke="#1E1E1E"
					strokeWidth="1.5"
				/>
				<path
					d="M15 13L13 10.5L11 13V6H15V13Z"
					fill="#1E1E1E"
					stroke="#1E1E1E"
				/>
			</svg>
		</IconWrapper>
	);
}

export default BlockCoverIcon;
