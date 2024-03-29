import React from "react";
import IconWrapper from "./icon-wrapper";

export function SearchIcon(props) {
	return (
		<IconWrapper {...props}>
			<svg
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path d="M5 18L9 14.5" stroke="#1E1E1E" strokeWidth="1.5" />
				<circle
					cx="12.5"
					cy="11.5"
					r="4.75"
					stroke="#1E1E1E"
					strokeWidth="1.5"
				/>
			</svg>
		</IconWrapper>
	);
}

export default SearchIcon;
