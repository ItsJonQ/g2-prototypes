import React from "react";
import IconWrapper from "./icon-wrapper";

export function ChevronUpIcon(props) {
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
					d="M18 14.25L12.25 9L7 14.25"
					stroke="#1E1E1E"
					stroke-width="1.5"
				/>
			</svg>
		</IconWrapper>
	);
}

export default ChevronUpIcon;
