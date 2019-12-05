import React from "react";
import IconWrapper from "./icon-wrapper";

export function EditIcon(props) {
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
					d="M9.03333 16.1613L19 6.09677L16.8333 4L6.86667 14.0645L6 17L9.03333 16.1613Z"
					fill="#1E1E1E"
				/>
				<path
					d="M4 21H12M19 6.09677L9.03333 16.1613L6 17L6.86667 14.0645L16.8333 4L19 6.09677Z"
					stroke="#1E1E1E"
					stroke-width="1.5"
				/>
			</svg>
		</IconWrapper>
	);
}

export default EditIcon;
