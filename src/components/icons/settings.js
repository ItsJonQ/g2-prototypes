import React from "react";
import IconWrapper from "./icon-wrapper";

export function SettingsIcon(props) {
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
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M18.3838 12C18.3838 11.5456 18.3384 11.1024 18.252 10.6752L19.6419 9.38561L18.1262 6.6144L16.3664 7.24321C15.745 6.6544 15.0121 6.1968 14.1989 5.9176L13.8367 4H10.8052L10.4414 5.9168C9.63053 6.1968 8.89541 6.6528 8.27547 7.24241L6.51572 6.6144L5 9.38561L6.38992 10.6752C6.30352 11.1024 6.25805 11.5456 6.25805 12C6.25805 12.4544 6.30352 12.8976 6.38992 13.3248L5 14.6144L6.51572 17.3856L8.27547 16.7568C8.89692 17.3456 9.62977 17.8032 10.443 18.0824L10.8052 20H13.8367L14.2004 18.0832C15.0113 17.8032 15.745 17.3472 16.3664 16.7576L18.1262 17.3864L19.6419 14.6152L18.252 13.3248C18.3376 12.8968 18.3838 12.4528 18.3838 11.9992V12ZM12.3219 15.2C10.647 15.2 9.29046 13.768 9.29046 12C9.29046 10.232 10.647 8.80003 12.3219 8.80003C13.9968 8.80003 15.3533 10.232 15.3533 12C15.3533 13.768 13.9968 15.2 12.3219 15.2Z"
					fill="#1E1E1E"
				/>
			</svg>
		</IconWrapper>
	);
}

export default SettingsIcon;