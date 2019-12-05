import React from "react";
import IconWrapper from "./icon-wrapper";

export function AlignImageRightIcon(props) {
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
					x="-0.5"
					y="0.5"
					width="13"
					height="5"
					transform="matrix(-1 0 0 1 18 9)"
					fill="#1E1E1E"
					stroke="#1E1E1E"
				/>
				<path
					d="M19 5H11M19 19H11"
					stroke="#1E1E1E"
					stroke-width="1.5"
				/>
			</svg>
		</IconWrapper>
	);
}

export default AlignImageRightIcon;
