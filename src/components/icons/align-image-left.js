import React from "react";
import IconWrapper from "./icon-wrapper";

export function AlignImageLeftIcon(props) {
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
					x="5.5"
					y="9.5"
					width="13"
					height="5"
					fill="#1E1E1E"
					stroke="#1E1E1E"
				/>
				<path d="M5 5H13M5 19H13" stroke="#1E1E1E" strokeWidth="1.5" />
			</svg>
		</IconWrapper>
	);
}

export default AlignImageLeftIcon;
