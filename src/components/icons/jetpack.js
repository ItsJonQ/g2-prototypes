import React from "react";
import IconWrapper from "./icon-wrapper";

export function JetpackIcon(props) {
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
					d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z"
					fill="#1E1E1E"
				/>
				<path
					d="M12.4053 10.6616V18.4151L16.3959 10.6616H12.4053Z"
					fill="white"
				/>
				<path
					d="M11.5941 13.3391V5.58557L7.60352 13.3391H11.5941Z"
					fill="white"
				/>
			</svg>
		</IconWrapper>
	);
}

export default JetpackIcon;
