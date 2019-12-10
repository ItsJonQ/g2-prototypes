import React, { useEffect, useState, useRef } from "react";
import { useToolbarState } from "reakit/Toolbar";
import { ThemeProvider } from "emotion-theming";
import { useDebouncedCallback } from "use-debounce";
import { useControls } from "@itsjonq/controls";

import {
	DragHandlerSliderWrapper,
	BaseToolbar,
	MainToolbar,
	Group
} from "./styles";
import { Draggable } from "./draggable";
import { DragHandle } from "./drag-handle";
import { Expander } from "./expander";
import { ToolbarItem } from "./toolbar-item";

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
	const { boolean, color, number, text, attributes } = useControls();

	// Debugging
	boolean("showMouseTrail", false);
	boolean("alwaysShowMover", true);
	// Controls
	boolean("isExpanded", props.isExpanded || false);
	// Animations
	number("animationSpeed", 100);
	text("animationEasing", "linear");
	// Interactions
	number("collapseDebounceTiming", 500);
	number("hoverAnimationSpeed", 100);
	// Visuals
	color("interactionColor", "#3E58E1");
	number("size", 40);

	const [isExpanded, setIsExpanded] = useState(props.isExpanded);
	const [isActive, setIsActive] = useState(props.isActive);
	const [isDragging, setIsDragging] = useState(false);
	const [dragHandleWidth, setDragHandleWidth] = useState(0);
	const toolbar = useToolbarState();

	const {
		alwaysShowMover,
		collapseDebounceTiming,
		isExpanded: isExpandedProp
	} = attributes;

	const isExpandedRef = useRef(isExpandedProp);
	const dragHandleRef = useRef(null);

	const { onDragStart, onDragStop, renderDragHandle, ...restProps } = props;

	useEffect(() => {
		if (dragHandleRef.current) {
			setDragHandleWidth(dragHandleRef.current.offsetWidth);
		}
	}, [dragHandleRef, setDragHandleWidth]);

	useEffect(() => {
		if (isExpandedProp !== isExpandedRef.current) {
			setIsExpanded(isExpandedProp);
			isExpandedRef.current = isExpandedProp;
		}
	}, [isExpandedProp, isExpandedRef, setIsExpanded]);

	const handleOnDragStart = props => {
		setIsDragging(true);
		onDragStart && onDragStart(props);
	};

	const handleOnDragStop = props => {
		setIsDragging(false);
		onDragStop && onDragStop(props);
	};

	const handleOnMouseMove = () => {
		if (!isExpanded) {
			expand();
		}
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
		...attributes
	};

	const showDragHandle = alwaysShowMover || isExpanded;

	const renderDragHandleProps = {
		isActive: showDragHandle,
		isDragging,
		showDragHandle,
		onMouseLeave: props.onMouseLeave,
		...toolbar
	};

	return (
		<Draggable
			{...props}
			onDragStart={handleOnDragStart}
			onDragStop={handleOnDragStop}
		>
			<ThemeProvider theme={theme}>
				<BaseToolbar
					{...restProps}
					{...toolbar}
					aria-label="G2 Toolbar"
					onMouseMove={handleOnMouseMove}
					onMouseLeave={collapse}
					className="editor-toolbar"
				>
					<DragHandlerSliderWrapper
						ref={dragHandleRef}
						isActive={showDragHandle}
						innerWidth={dragHandleWidth}
						className="drag-handler-slider-wrapper"
					>
						{renderDragHandle ? (
							renderDragHandle(renderDragHandleProps)
						) : (
							<DragHandle {...renderDragHandleProps} />
						)}
					</DragHandlerSliderWrapper>
					<MainToolbar
						isActive={showDragHandle || isActive}
						isExpanded={isExpanded}
					>
						<Group>
							<ToolbarItem
								{...toolbar}
								isPrimaryAction
								icon="block-paragraph"
							/>
						</Group>
						<Group>
							<ToolbarItem {...toolbar} icon="align-left" />
						</Group>
						<Expander isActive={isActive} isExpanded={isExpanded}>
							<Group>
								<ToolbarItem
									{...toolbar}
									onFocus={expand}
									icon="bold"
								/>
								<ToolbarItem {...toolbar} icon="italic" />
								<ToolbarItem {...toolbar} icon="link" />
								<ToolbarItem {...toolbar} icon="chevron-down" />
							</Group>
						</Expander>
						<Group isLast>
							<ToolbarItem {...toolbar} icon="ellipsis" />
						</Group>
					</MainToolbar>
				</BaseToolbar>
			</ThemeProvider>
		</Draggable>
	);
}

export default Toolbar;
