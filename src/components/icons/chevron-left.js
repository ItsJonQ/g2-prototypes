import React from "react";
import IconWrapper from "./icon-wrapper";

export function ChevronLeftIcon(props) {
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
					d="M14.25 7L9 12.75L14.25 18"
					stroke="#1E1E1E"
					stroke-width="1.5"
				/>
			</svg>
		</IconWrapper>
	);
}

export default ChevronLeftIcon;
