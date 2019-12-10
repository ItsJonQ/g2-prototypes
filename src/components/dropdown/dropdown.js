import React from "react";
import { Portal } from "reakit/Portal";
import { useMenuState, Menu, MenuItem, MenuDisclosure } from "reakit/Menu";

import { Button } from "../button";
import { IconButton } from "../icon-button";
import { DropdownMenuBase } from "./style";

export { DropdownHeader } from "./style";

export const DropdownIconButton = React.forwardRef((props, ref) => {
	return <MenuDisclosure as={IconButton} {...props} ref={ref} />;
});

export const DropdownButton = React.forwardRef((props, ref) => {
	return <MenuDisclosure as={Button} {...props} ref={ref} />;
});

export const DropdownMenu = React.forwardRef((props, ref) => {
	return (
		<Portal>
			<Menu as={DropdownMenuBase} {...props} ref={ref} />
		</Portal>
	);
});

export const DropdownItem = React.forwardRef((props, ref) => {
	return (
		<MenuItem
			as={Button}
			isBlock
			isNarrow
			variant="dropdown"
			alignItems="left"
			{...props}
			ref={ref}
			onClick={props.hide}
		/>
	);
});

export const DropdownIconItem = React.forwardRef((props, ref) => {
	return (
		<DropdownItem
			as={IconButton}
			{...props}
			alignItems="center"
			ref={ref}
		/>
	);
});

export function useDropdown(props) {
	const menu = useMenuState({ gutter: 8, ...props });
	return menu;
}
