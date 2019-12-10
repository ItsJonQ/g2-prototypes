import React from "react";
import { Button } from "../button";
import { IconButton } from "../icon-button";
import { useMenuState, Menu, MenuItem, MenuDisclosure } from "reakit/Menu";
import { DropdownMenuBase } from "./style";

export { DropdownHeader } from "./style";

export const DropdownIconButton = React.forwardRef((props, ref) => {
	return <MenuDisclosure as={IconButton} {...props} ref={ref} />;
});

export const DropdownButton = React.forwardRef((props, ref) => {
	return <MenuDisclosure as={Button} {...props} ref={ref} />;
});

export const DropdownMenu = React.forwardRef((props, ref) => {
	return <Menu as={DropdownMenuBase} {...props} ref={ref} />;
});

export const DropdownItem = React.forwardRef((props, ref) => {
	return (
		<MenuItem
			as={Button}
			{...props}
			isBlock
			isNarrow
			variant="dropdown"
			alignItems="left"
			ref={ref}
			onClick={props.hide}
		/>
	);
});

export function useDropdown(props) {
	const menu = useMenuState({ gutter: 8, ...props });
	return menu;
}
