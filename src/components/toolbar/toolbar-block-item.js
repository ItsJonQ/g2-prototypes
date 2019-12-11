import React from "react";
import { ToolbarItem as ReakitToolbarItem } from "reakit/Toolbar";
import { IconButton } from "../icon-button";

export const ToolbarBlockItem = React.forwardRef((props, ref) => {
	return (
		<ReakitToolbarItem
			{...props}
			as={IconButton}
			hasFlag
			icon="block-paragraph"
			variant="toolbar-block"
		/>
	);
});
