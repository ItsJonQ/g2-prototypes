import React from "react";
import Button from "../button";
import Icon from "../icon";

export const IconButton = React.forwardRef((props, ref) => {
	const { icon, iconSize, iconStyles = {}, size, ...restProps } = props;

	let iconProps = {
		...iconStyles,
		display: "block"
	};

	if (size === "micro") {
		iconProps = {
			...iconProps,
			position: "relative",
			top: -6
		};
	}

	return (
		<Button {...restProps} size={size} isIconButton ref={ref}>
			<Icon icon={icon} iconSize={iconSize} {...iconProps} />
		</Button>
	);
});

export default IconButton;
