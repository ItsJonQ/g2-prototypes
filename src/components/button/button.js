import React from "react";
import { cx } from "emotion";
import { ThemeProvider } from "emotion-theming";
import { useControls } from "@itsjonq/controls";

import { Ripple, RippleEffect } from "../ripple";
import { mainColor, BaseButton, ButtonContent } from "./style";

export const Button = React.forwardRef((props, ref) => {
	const { select, attributes } = useControls();

	select(
		"clickAnimation",
		{
			Default: "default",
			Ripple: "ripple"
		},
		"default"
	);

	const {
		className,
		clickAnimation: clickAnimationProp,
		children,
		isHovered,
		isFocused,
		isActive,
		isPressed,
		disabled,
		onClick,
		...restProps
	} = props;

	const { clickAnimation } = attributes;

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

	const showRipple = clickAnimation !== "default" || disabled;
	const RippleComponent = showRipple ? Ripple : React.Fragment;

	return (
		<RippleComponent>
			<ThemeProvider theme={themeProps}>
				<BaseButton
					{...restProps}
					className={classes}
					disabled={disabled}
					ref={ref}
				>
					<ButtonContent>{children}</ButtonContent>
					{showRipple ? <RippleEffect /> : null}
				</BaseButton>
			</ThemeProvider>
		</RippleComponent>
	);
});

Button.defaultProps = {
	clickAnimation: "default",
	variant: "default"
};

export default Button;
