import React, { useState } from "react";
import { ThemeProvider } from "emotion-theming";
import { Dashicon } from "@wordpress/components";

import { Slider, ToolbarWrapper, ToolbarBase, Group, Item } from "./styles";
import { withControlPanel } from "../control-panel";
import { Draggable } from "./draggable";
import { DragHandle } from "./drag-handle";
import { useKnobs } from "../control-panel/context";

// CONFIGS
// Play with these!
function useCreateAttributes() {
	const { useText, useNumber } = useKnobs();

	return {
		animationSpeed: useNumber("animationSpeed", 100),
		animationEasing: useText("animationEasing", "linear"),
		hoverAnimationSpeed: useNumber("hoverAnimationSpeed", 0),
		interactionColor: useText("interactionColor", "#3E58E1"),
		size: useNumber("size", 40)
	};
}

/**
 * Notes:
 * ToolbarContent
 * Width needs to be dynamically calculated before transitioning
 *
 * DragHandle
 * Exists as a separate under layer.
 * Positioned absolutely and hidden.
 * Slide into view by transform.
 * Does not affect layout of container.
 * Therefore... cannot be considered for styles like
 * borderRadius or boxShadow.
 */

export function Toolbar(props) {
	const [isExpanded, setIsExpanded] = useState(props.isExpanded);
	const [isActive, setIsActive] = useState(props.isActive);

	const expand = () => {
		setIsExpanded(true);
		setIsActive(true);
	};

	const collapse = () => {
		if (!props.isExpanded) {
			setIsExpanded(false);
		}
		setIsActive(false);
	};

	const theme = {
		...props.attributes
	};

	return (
		<Draggable>
			<ThemeProvider theme={theme}>
				<ToolbarWrapper
					{...props}
					onMouseEnter={expand}
					onMouseLeave={collapse}
					className="editor-toolbar"
				>
					<DragHandle
						isActive={isActive}
						isExpanded={isExpanded}
						onMouseLeave={props.onMouseLeave}
					/>
					<ToolbarBase isActive={isActive} isExpanded={isExpanded}>
						<Group>
							<Item isPrimaryAction>
								<Dashicon icon="editor-paragraph" />
							</Item>
						</Group>
						<Group>
							<Item>
								<Dashicon icon="editor-alignleft" />
							</Item>
						</Group>
						<Slider isActive={isActive} isExpanded={isExpanded}>
							<Group>
								<Item>
									<Dashicon icon="editor-bold" />
								</Item>
								<Item>
									<Dashicon icon="editor-italic" />
								</Item>
								<Item>
									<Dashicon icon="admin-links" />
								</Item>
								<Item>
									<Dashicon icon="arrow-down-alt2" />
								</Item>
							</Group>
						</Slider>
						<Group isLast>
							<Item>
								<Dashicon icon="ellipsis" />
							</Item>
						</Group>
					</ToolbarBase>
				</ToolbarWrapper>
			</ThemeProvider>
		</Draggable>
	);
}

export const ControlledToolbar = withControlPanel(useCreateAttributes)(Toolbar);

export default Toolbar;
