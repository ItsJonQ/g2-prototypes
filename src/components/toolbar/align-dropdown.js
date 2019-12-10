import React from "react";
import {
	useDropdown,
	DropdownIconButton,
	DropdownIconItem,
	DropdownMenu
} from "../dropdown";
import { ToolbarDropdownMenu, Item } from "./styles";

export const AlignDropdown = React.forwardRef((props, ref) => {
	const menu = useDropdown();
	const items = [
		{
			icon: "align-left"
		},
		{
			icon: "align-center"
		},
		{
			icon: "align-right"
		}
	];

	return (
		<>
			<Item>
				<DropdownIconButton
					{...menu}
					{...props}
					ref={ref}
					icon="align-left"
				/>
			</Item>
			<DropdownMenu
				{...menu}
				as={ToolbarDropdownMenu}
				aria-label="alignment"
			>
				{items.map(item => (
					<DropdownIconItem key={item.label} {...item} {...menu}>
						{item.label}
					</DropdownIconItem>
				))}
			</DropdownMenu>
		</>
	);
});
