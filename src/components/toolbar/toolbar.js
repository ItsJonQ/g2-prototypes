import React, { useEffect, useState, useRef } from "react";
import {
	useToolbarState,
	ToolbarItem as ReakitToolbarItem
} from "reakit/Toolbar";
import { is } from "@itsjonq/is";
import { ThemeProvider } from "emotion-theming";
import { useDebouncedCallback } from "use-debounce";
import { useControls } from "@itsjonq/controls";

import {
	DragHandlerSliderWrapper,
	BaseToolbar,
	MainToolbar,
	Group
} from "./styles";
import { AlignDropdown } from "./align-dropdown";
import { Draggable } from "./draggable";
import { Expander } from "./expander";
import { Mover } from "./mover";
import { ToolbarItem } from "./toolbar-item";
import { ToolbarBlockItem } from "./toolbar-block-item";

export function ToolbarComponent(props) {
	const [isExpanded, setIsExpanded] = useState(props.isExpanded);
	const [isActive, setIsActive] = useState(props.isActive);
	const [isDragging, setIsDragging] = useState(false);
	const [dragHandleWidth, setDragHandleWidth] = useState(0);
	const toolbar = useToolbarState();

	const {
		attributes,
		onDragStart,
		onDragStop,
		moverType,
		renderDragHandle,
		...restProps
	} = props;

	const {
		alwaysShowMover,
		collapseDebounceTiming,
		isExpanded: isExpandedProp,
		isMoverHorizontal,
		isMoverRightSide
	} = attributes;

	const isExpandedRef = useRef(isExpandedProp);
	const dragHandleRef = useRef(null);

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

	const showDragHandle =
		props.alwaysShowMover || alwaysShowMover || isExpanded;

	const renderDragHandleProps = {
		isActive: showDragHandle,
		isDragging,
		showDragHandle,
		onMouseLeave: props.onMouseLeave,
		...toolbar
	};

	const isHorizontal = props.isMoverHorizontal || isMoverHorizontal;
	const isRightSide = props.isMoverRightSide || isMoverRightSide;

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
						isRight={isRightSide}
					>
						{renderDragHandle ? (
							renderDragHandle(renderDragHandleProps)
						) : (
							<Mover
								toolbar={toolbar}
								{...renderDragHandleProps}
								type={moverType}
								isHorizontal={isHorizontal}
							/>
						)}
					</DragHandlerSliderWrapper>
					<MainToolbar
						isActive={showDragHandle || isActive}
						isExpanded={isExpanded}
						zIndex={1}
					>
						<Group>
							<ToolbarBlockItem {...toolbar} />
						</Group>
						<Group>
							<ReakitToolbarItem
								{...toolbar}
								as={AlignDropdown}
							/>
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

export function Toolbar(props) {
	const { boolean, number, text, attributes } = useControls();

	const intialAlwaysShowMover = is.defined(props.alwaysShowMover)
		? props.alwaysShowMover
		: true;

	// Debugging
	boolean("showMouseTrail", false);
	// Movers
	boolean("alwaysShowMover", intialAlwaysShowMover);
	// Controls
	boolean("isDarkMode", props.isDarkMode || false);
	boolean("isExpanded", props.isExpanded || false);
	boolean("isMoverHorizontal", props.isMoverHorizontal || false);
	boolean("isMoverRightSide", props.isMoverRightSide || false);
	// Animations
	number("animationSpeed", 100);
	text("animationEasing", "linear");
	// Interactions
	number("collapseDebounceTiming", 500);
	number("hoverAnimationSpeed", 100);
	// Visuals
	number("size", 40);

	return <ToolbarComponent {...props} attributes={attributes} />;
}

export default Toolbar;
