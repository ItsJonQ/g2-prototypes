import React from "react";
import IconWrapper from "./icon-wrapper";

export function CloseIcon(props) {
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
					d="M5.40456 5L19 19M5 19L18.5954 5"
					stroke="#1E1E1E"
					strokeWidth="1.5"
				/>
			</svg>
		</IconWrapper>
	);
}

export default CloseIcon;
