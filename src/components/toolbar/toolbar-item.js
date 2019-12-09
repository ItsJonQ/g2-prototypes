import React from "react";
import { ToolbarItem as ReakitToolbarItem } from "reakit/Toolbar";
import { IconButton } from "../icon-button";
import { Item } from "./styles";

export function ToolbarItem(props) {
	const { isPrimaryAction } = props;
	return (
		<Item isPrimaryAction={isPrimaryAction}>
			<ReakitToolbarItem {...props} as={IconButton} />
		</Item>
	);
}
