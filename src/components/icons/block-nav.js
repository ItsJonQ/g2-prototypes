import React from "react";
import IconWrapper from "./icon-wrapper";

export function BlockNavIcon(props) {
	return (
		<IconWrapper {...props}>
			<svg
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<circle
					cx="12"
					cy="12"
					r="7.25"
					stroke="#1E1E1E"
					stroke-width="1.5"
				/>
				<path
					d="M10.5019 11.3502L14.9523 8.36505L13.5037 13.0933L9.04789 16.0466L10.5019 11.3502Z"
					fill="#1E1E1E"
				/>
			</svg>
		</IconWrapper>
	);
}

export default BlockNavIcon;
