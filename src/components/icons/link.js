import React from "react";
import IconWrapper from "./icon-wrapper";

export function LinkIcon(props) {
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
					d="M14.6667 8H15.5556C18.0102 8 20.0001 9.98985 20.0001 12.4444V12.4444C20.0001 14.899 18.0102 16.8889 15.5556 16.8889H14.6667"
					stroke="#1E1E1E"
					strokeWidth="1.5"
					strokeLinecap="square"
				/>
				<path
					d="M9.33325 16.8889L8.44436 16.8889C5.98976 16.8889 3.99992 14.8991 3.99992 12.4445V12.4445C3.99992 9.98987 5.98976 8.00003 8.44436 8.00003L9.33325 8.00003"
					stroke="#1E1E1E"
					strokeWidth="1.5"
					strokeLinecap="square"
				/>
				<line
					x1="9.33325"
					y1="12.5834"
					x2="14.6666"
					y2="12.5834"
					stroke="#1E1E1E"
					strokeWidth="1.5"
				/>
			</svg>
		</IconWrapper>
	);
}

export default LinkIcon;
