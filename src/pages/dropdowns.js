import React from "react";
import {
	useDropdown,
	DropdownIconButton,
	DropdownMenu,
	DropdownItem,
	DropdownHeader
} from "../components/dropdown";
import { Page } from "../components/page";

export function Dropdowns() {
	return (
		<Page title="Dropdowns">
			<NavigationDropdown />
		</Page>
	);
}

function NavigationDropdown() {
	const menu = useDropdown();
	const items = [
		{
			label: "Navigation",
			icon: "block-nav"
		},
		{
			label: "Cover",
			icon: "block-cover"
		},
		{
			label: "Paragraph",
			icon: "block-paragraph"
		},
		{
			label: "Image",
			icon: "block-image"
		}
	];
	return (
		<>
			<DropdownIconButton {...menu} icon="directory" />
			<DropdownMenu {...menu} aria-label="Blocks">
				<DropdownHeader>Navigation</DropdownHeader>
				{items.map(item => (
					<DropdownItem key={item.label} {...item} {...menu}>
						{item.label}
					</DropdownItem>
				))}
			</DropdownMenu>
		</>
	);
}

export default Dropdowns;
