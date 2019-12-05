import React from "react";
import IconWrapper from "./icon-wrapper";

export function MenuIcon(props) {
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
					d="M5 5H19M5 12H19M5 19H19"
					stroke="#1E1E1E"
					strokeWidth="1.5"
				/>
			</svg>
		</IconWrapper>
	);
}

export default MenuIcon;
