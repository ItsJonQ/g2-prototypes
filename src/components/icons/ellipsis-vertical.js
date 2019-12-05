import React from "react";
import IconWrapper from "./icon-wrapper";

export function EllipsisVerticalIcon(props) {
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
					d="M12 11L12 13M12 5L12 7M12 17L12 19"
					stroke="#1E1E1E"
					strokeWidth="2"
				/>
			</svg>
		</IconWrapper>
	);
}

export default EllipsisVerticalIcon;
