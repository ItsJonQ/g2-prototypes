import React from "react";
import IconWrapper from "./icon-wrapper";

export function BlockImageIcon(props) {
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
					x="5.75"
					y="5.75"
					width="12.5"
					height="12.5"
					rx="1.25"
					stroke="#1E1E1E"
					stroke-width="1.5"
				/>
				<path
					d="M6 16L9.72671 13.6037C10.0824 13.375 10.5436 13.3948 10.8784 13.6531L12.5303 14.9277C12.9169 15.226 13.4624 15.2015 13.8206 14.8698L18 11"
					stroke="#1E1E1E"
					stroke-width="1.5"
					stroke-linecap="round"
					stroke-linejoin="bevel"
				/>
			</svg>
		</IconWrapper>
	);
}

export default BlockImageIcon;
