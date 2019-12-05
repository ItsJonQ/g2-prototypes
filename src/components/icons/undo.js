import React from "react";
import IconWrapper from "./icon-wrapper";

export function UndoIcon(props) {
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
					d="M8.99999 7L4.99999 11.5M4.99999 11.5L8.99999 15.5M4.99999 11.5C8.33333 11.5 11.8022 11.5 15.0022 11.5C18.2029 11.5 18.002 16 18.0022 17.5"
					stroke="#1E1E1E"
					strokeWidth="1.5"
				/>
			</svg>
		</IconWrapper>
	);
}

export default UndoIcon;
