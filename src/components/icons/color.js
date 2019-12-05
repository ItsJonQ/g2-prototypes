import React from "react";
import IconWrapper from "./icon-wrapper";

export function ColorIcon(props) {
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
					d="M17.4405 13.9048C17.4405 16.8569 15.0473 19.25 12.0952 19.25C9.14314 19.25 6.75 16.8569 6.75 13.9048C6.75 13.2532 7.05742 12.3484 7.61616 11.2861C8.16265 10.2472 8.89988 9.14863 9.65011 8.13668C10.3983 7.12748 11.1482 6.21939 11.7119 5.56279C11.8524 5.3991 11.9812 5.25128 12.0952 5.12167C12.2093 5.25128 12.338 5.3991 12.4786 5.56279C13.0423 6.21939 13.7922 7.12748 14.5404 8.13668C15.2906 9.14863 16.0278 10.2472 16.5743 11.2861C17.1331 12.3484 17.4405 13.2532 17.4405 13.9048Z"
					stroke="#1E1E1E"
					stroke-width="1.5"
				/>
			</svg>
		</IconWrapper>
	);
}

export default ColorIcon;
