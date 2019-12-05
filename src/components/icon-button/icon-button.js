import React from "react";
import Button from "../button";
import Icon from "../icon";

export function IconButton(props) {
	const { icon, ...restProps } = props;
	return (
		<Button {...restProps} isIconButton>
			<Icon icon={icon} display="block" />
		</Button>
	);
}

export default IconButton;
