import React, { useState } from "react";
import { ThemeProvider } from "emotion-theming";
import { Dashicon } from "@wordpress/components";
import { Rnd } from "react-rnd";

import {
	DragSlider,
	Slider,
	ToolbarWrapper,
	ToolbarBase,
	Group,
	Item
} from "./styles";
import { getAttributesAsValues, withControlPanel } from "../control-panel";
import { number, text } from "../control-panel/knobs";

// CONFIGS
// Play with these!
const ATTRIBUTES = {
	animationSpeed: number("animationSpeed", 100),
	animationEasing: text("animationEasing", "linear"),
	hoverAnimationSpeed: number("hoverAnimationSpeed", 0),
	interactionColor: text("interactionColor", "#3E58E1"),
	size: number("size", 40)
};

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
	);
}

Toolbar.defaultProps = { attributes: { ...getAttributesAsValues(ATTRIBUTES) } };

export function DraggableEditorToolbar(props) {
	const { attributes } = props;

	return (
		<Rnd
			dragHandleClassName="drag-handle"
			enableResizing={false}
			bounds="window"
			default={{
				x: 100,
				y: 100
			}}
			{...props}
		>
			<Toolbar attributes={attributes} />
		</Rnd>
	);
}

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

export const ControlledToolbar = withControlPanel(ATTRIBUTES)(
	DraggableEditorToolbar
);

export default Toolbar;
