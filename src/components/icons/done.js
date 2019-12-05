import React from "react";
import IconWrapper from "./icon-wrapper";

export function DoneIcon(props) {
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
					d="M4 12.5L9 17.5L19 7"
					stroke="#1E1E1E"
					strokeWidth="1.5"
				/>
			</svg>
		</IconWrapper>
	);
}

export default DoneIcon;
