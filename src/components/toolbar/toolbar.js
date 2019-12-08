import React, { useEffect, useState, useRef } from "react";
import { ThemeProvider } from "emotion-theming";
import { useDebouncedCallback } from "use-debounce";
import { useControlPanel } from "@itsjonq/controls";

import {
	DragHandlerSliderWrapper,
	Slider,
	ToolbarWrapper,
	ToolbarBase,
	Group,
	Item
} from "./styles";
import { withControlPanel } from "../control-panel";
import { Icon } from "../icon";
import { Draggable } from "./draggable";
import { DragHandle } from "./drag-handle";

// CONFIGS
// Play with these!
function useAttributes() {
	const { boolean, color, number, text } = useControlPanel();

	boolean("showMouseTrail", false);
	boolean("alwaysShowMover", true);
	number("animationSpeed", 100);
	text("animationEasing", "linear");
	number("collapseDebounceTiming", 300);
	number("hoverAnimationSpeed", 100);
	color("interactionColor", "#3E58E1");
	number("size", 40);
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
	const [isDragging, setIsDragging] = useState(false);
	const [dragHandleWidth, setDragHandleWidth] = useState(0);

	const dragHandleRef = useRef(null);

	const { alwaysShowMover, collapseDebounceTiming } = props.attributes;
	const { onDragStart, onDragStop, renderDragHandle, ...restProps } = props;

	useEffect(() => {
		if (dragHandleRef.current) {
			setDragHandleWidth(dragHandleRef.current.offsetWidth);
		}
	}, [dragHandleRef, setDragHandleWidth]);

	const handleOnDragStart = props => {
		setIsDragging(true);
		onDragStart && onDragStart(props);
	};

	const handleOnDragStop = props => {
		setIsDragging(false);
		onDragStop && onDragStop(props);
	};

	const expand = () => {
		setIsExpanded(true);
		setIsActive(true);
	};

	const [collapse] = useDebouncedCallback(() => {
		if (!props.isExpanded) {
			setIsExpanded(false);
		}
		setIsActive(false);
	}, collapseDebounceTiming);

	const theme = {
		...props.attributes
	};

	const showDragHandle = alwaysShowMover || isExpanded;

	const renderDragHandleProps = {
		isActive: showDragHandle,
		isDragging,
		showDragHandle,
		onMouseLeave: props.onMouseLeave
	};

	return (
		<Draggable
			{...props}
			onDragStart={handleOnDragStart}
			onDragStop={handleOnDragStop}
		>
			<ThemeProvider theme={theme}>
				<ToolbarWrapper
					{...restProps}
					onMouseEnter={expand}
					onMouseLeave={collapse}
					className="editor-toolbar"
				>
					<DragHandlerSliderWrapper
						ref={dragHandleRef}
						isActive={showDragHandle}
						innerWidth={dragHandleWidth}
					>
						{renderDragHandle ? (
							renderDragHandle(renderDragHandleProps)
						) : (
							<DragHandle {...renderDragHandleProps} />
						)}
					</DragHandlerSliderWrapper>
					<ToolbarBase
						isActive={showDragHandle || isActive}
						isExpanded={isExpanded}
					>
						<Group>
							<Item isPrimaryAction>
								<Icon icon="block-paragraph" />
							</Item>
						</Group>
						<Group>
							<Item>
								<Icon icon="align-left" />
							</Item>
						</Group>
						<Slider isActive={isActive} isExpanded={isExpanded}>
							<Group>
								<Item>
									<Icon icon="bold" />
								</Item>
								<Item>
									<Icon icon="italic" />
								</Item>
								<Item>
									<Icon icon="link" />
								</Item>
								<Item>
									<Icon icon="chevron-down" />
								</Item>
							</Group>
						</Slider>
						<Group isLast>
							<Item>
								<Icon icon="ellipsis" />
							</Item>
						</Group>
					</ToolbarBase>
				</ToolbarWrapper>
			</ThemeProvider>
		</Draggable>
	);
}

export const ControlledToolbar = withControlPanel(useAttributes)(Toolbar);

export default Toolbar;
