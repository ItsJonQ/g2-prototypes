import React from "react";
import { Dashicon } from "@wordpress/components";

import { DragSlider, ToolbarBase, Group, Item } from "./styles";

export function DragHandle(props) {
	return (
		<DragSlider {...props}>
			<ToolbarBase isAside>
				<Group isLast>
					<Item className="drag-handle">
						<Dashicon icon="move" />
					</Item>
				</Group>
			</ToolbarBase>
		</DragSlider>
	);
}

export default DragHandle;
