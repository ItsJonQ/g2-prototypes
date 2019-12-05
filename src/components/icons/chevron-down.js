import React from "react";
import IconWrapper from "./icon-wrapper";

export function ChevronDownIcon(props) {
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
					d="M6 9.875L11.75 15.125L17 9.875"
					stroke="#1E1E1E"
					stroke-width="1.5"
				/>
			</svg>
		</IconWrapper>
	);
}

export default ChevronDownIcon;
