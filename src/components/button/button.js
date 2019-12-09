import React from "react";
import { cx } from "emotion";
import { ThemeProvider } from "emotion-theming";
import { mainColor, BaseButton, ButtonContent } from "./style";

export const Button = React.forwardRef((props, ref) => {
	const {
		className,
		children,
		isHovered,
		isFocused,
		isActive,
		isPressed,
		disabled,
		...restProps
	} = props;

	const themeProps = {
		color: props.color || mainColor,
		variant: props.variant
	};

	const classes = cx(
		className,
		isPressed && "is-pressed",
		isActive && "is-active",
		isFocused && "is-focused",
		isHovered && "is-hovered",
		disabled && "is-disabled"
	);

	return (
		<ThemeProvider theme={themeProps}>
			<BaseButton
				{...restProps}
				className={classes}
				disabled={disabled}
				ref={ref}
			>
				<ButtonContent>{children}</ButtonContent>
			</BaseButton>
		</ThemeProvider>
	);
});

Button.defaultProps = {
	variant: "default"
};

export default Button;
