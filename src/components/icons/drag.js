import React from "react";
import IconWrapper from "./icon-wrapper";

export function DragIcon(props) {
	return (
		<IconWrapper {...props}>
			<svg
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path d="M4 8H6V10H4V8Z" fill="#1E1E1E" />
				<path d="M11 8H13V10H11V8Z" fill="#1E1E1E" />
				<path d="M18 8H20V10H18V8Z" fill="#1E1E1E" />
				<path d="M4 14H6V16H4V14Z" fill="#1E1E1E" />
				<path d="M11 14H13V16H11V14Z" fill="#1E1E1E" />
				<path d="M18 14H20V16H18V14Z" fill="#1E1E1E" />
			</svg>
		</IconWrapper>
	);
}

export default DragIcon;
