import React from "react";
import { cx } from "emotion";
import { ThemeProvider } from "emotion-theming";
import { useControls } from "@itsjonq/controls";

import { Icon } from "../icon";
import { Ripple, RippleEffect } from "../ripple";
import { mainColor, BaseButton, ButtonContent } from "./style";

export const Button = React.forwardRef((props, ref) => {
	const { color, select, attributes } = useControls();

	color("buttonMainColor", "#3e58e1");
	select(
		"buttonClickAnimation",
		{
			Default: "default",
			Ripple: "ripple"
		},
		"default"
	);

	const {
		className,
		buttonClickAnimation: buttonClickAnimationProp,
		children,
		icon,
		isHovered,
		isFocused,
		isActive,
		isPressed,
		disabled,
		...restProps
	} = props;

	const { buttonMainColor, buttonClickAnimation } = attributes;

	const themeProps = {
		color: props.color || buttonMainColor || mainColor,
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

	const showRipple = buttonClickAnimation !== "default" || disabled;
	const RippleComponent = showRipple ? Ripple : React.Fragment;
	const rippleProps = showRipple ? { display: "flex" } : {};

	return (
		<RippleComponent {...rippleProps}>
			<ThemeProvider theme={themeProps}>
				<BaseButton
					{...restProps}
					className={classes}
					disabled={disabled}
					ref={ref}
				>
					{icon ? (
						<Icon
							icon={icon}
							display="block"
							style={{ margin: "-4px 8px -4px -4px" }}
						/>
					) : null}
					<ButtonContent>{children}</ButtonContent>
					{showRipple ? <RippleEffect /> : null}
				</BaseButton>
			</ThemeProvider>
		</RippleComponent>
	);
});

Button.defaultProps = {
	buttonClickAnimation: "default",
	variant: "default"
};

export default Button;
