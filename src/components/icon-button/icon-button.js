import React from "react";
import Button from "../button";
import Icon from "../icon";

export const IconButton = React.forwardRef((props, ref) => {
	const { icon, ...restProps } = props;

	return (
		<Button {...restProps} isIconButton ref={ref}>
			<Icon icon={icon} display="block" />
		</Button>
	);
});

export default IconButton;
