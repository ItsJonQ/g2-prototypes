import React from "react";
import {
	useDropdown,
	DropdownButton,
	DropdownMenu,
	DropdownItem,
	DropdownHeader
} from "../components/dropdown";
import { Page } from "../components/page";

export function Dropdowns() {
	const menu = useDropdown();
	const items = [
		{
			label: "Navigation"
		},
		{
			label: "Cover"
		},
		{
			label: "Paragraph"
		}
	];
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
			label: "Navigation"
		},
		{
			label: "Cover"
		},
		{
			label: "Paragraph"
		}
	];
	return (
		<>
			<DropdownButton {...menu}>Click</DropdownButton>
			<DropdownMenu {...menu}>
				<DropdownHeader>Navigation</DropdownHeader>
				{items.map(item => (
					<DropdownItem key={item.value} {...item} {...menu}>
						{item.label}
					</DropdownItem>
				))}
			</DropdownMenu>
		</>
	);
}

export default Dropdowns;
