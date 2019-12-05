import React from "react";
import IconWrapper from "./icon-wrapper";

export function RedoIcon(props) {
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
					d="M14.0046 7L18.0046 11.5M18.0046 11.5L14.0046 15.5M18.0046 11.5C14.6713 11.5 11.2024 11.5 8.00243 11.5C4.80175 11.5 5.00265 16 5.00243 17.5"
					stroke="#1E1E1E"
					stroke-width="1.5"
				/>
			</svg>
		</IconWrapper>
	);
}

export default RedoIcon;
