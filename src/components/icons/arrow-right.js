import React from "react";
import IconWrapper from "./icon-wrapper";

export function ArrowRightIcon(props) {
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
					d="M19 12.25L13.75 18M19 12.25H4M19 12.25L13.75 7"
					stroke="#1E1E1E"
					stroke-width="1.5"
				/>
			</svg>
		</IconWrapper>
	);
}

export default ArrowRightIcon;
