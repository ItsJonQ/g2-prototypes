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
	const [position, setPosition] = useState({ x: 0, y: 0 });
	const [wrapperPosition, setWrapperPosition] = useState({ x: 0, y: 0 });
	const [dragDelta, setDragDelta] = useState(0);
	const [isExpanded, setIsExpanded] = useState(props.isExpanded);
	const [isActive, setIsActive] = useState(props.isActive);
	const [isDragging, setIsDragging] = useState(false);
	const [isMoverDragging, setIsMoverDragging] = useState(false);
	const [dragHandleWidth, setDragHandleWidth] = useState(0);
	const toolbar = useToolbarState();
	const wrapperRef = useRef(null);

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
		isMoverRightSide,
		moveAmount
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

	useEffect(() => {
		const handleOnMove = event => {
			const { movementX, movementY } = event;

			setWrapperPosition({
				x: wrapperPosition.x + movementX * 1,
				y: wrapperPosition.y + movementY * 1
			});
		};

		const handleMoveEnd = () => {
			if (isDragging) {
				setIsDragging(false);
				setIsMoverDragging(false);
			}
		};

		if (isDragging) {
			document.addEventListener("mousemove", handleOnMove);
			document.addEventListener("mouseup", handleMoveEnd);
		}

		return () => {
			if (isDragging) {
				document.removeEventListener("mousemove", handleOnMove);
				document.removeEventListener("mouseup", handleMoveEnd);
			}
		};
	}, [
		isDragging,
		wrapperPosition,
		setWrapperPosition,
		setIsMoverDragging,
		setIsDragging
	]);

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

	const isHorizontal = props.isMoverHorizontal || isMoverHorizontal;
	const isRightSide = props.isMoverRightSide || isMoverRightSide;

	const onMoveUp = () => {
		setPosition({ x: position.x, y: position.y - moveAmount });
	};

	const onMoveDown = () => {
		setPosition({ x: position.x, y: position.y + moveAmount });
	};

	const onMoveLeft = () => {
		setPosition({ x: position.x - moveAmount, y: position.y });
	};

	const onMoveRight = () => {
		setPosition({ x: position.x + moveAmount, y: position.y });
	};

	const onMoverMouseMove = event => {
		const { movementX, movementY } = event;
		const DRAG_THRESHOLD = 15;
		const nextDelta = Math.max(movementX, movementY);
		setDragDelta(dragDelta + nextDelta);

		if (dragDelta >= DRAG_THRESHOLD && isMoverDragging) {
			setIsDragging(true);
		}
	};

	const onMoverMouseUp = event => {
		setIsDragging(false);
		setIsMoverDragging(false);
	};

	const onMoverMouseDown = event => {
		setIsMoverDragging(true);
	};

	const renderDragHandleProps = {
		isActive: showDragHandle,
		isDragging,
		showDragHandle,
		onMouseLeave: props.onMouseLeave,
		onMoveUp,
		onMoveDown,
		onMoveLeft,
		onMoveRight,
		...toolbar
	};

	const wrapperStyle = {
		transform: `translate(${wrapperPosition.x}px, ${wrapperPosition.y}px)`
	};

	const positionStyle = {
		position: "relative",
		transition: "all 200ms ease",
		transform: `translate(${position.x}px, ${position.y}px)`,
		zIndex: 1
	};

	return (
		<Draggable
			{...props}
			onDragStart={handleOnDragStart}
			onDragStop={handleOnDragStop}
		>
			<div style={wrapperStyle}>
				<div style={positionStyle} ref={wrapperRef}>
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
										onMouseUp={onMoverMouseUp}
										onMouseDown={onMoverMouseDown}
										onMouseMove={onMoverMouseMove}
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
								<Expander
									isActive={isActive}
									isExpanded={isExpanded}
								>
									<Group>
										<ToolbarItem
											{...toolbar}
											onFocus={expand}
											icon="bold"
										/>
										<ToolbarItem
											{...toolbar}
											icon="italic"
										/>
										<ToolbarItem {...toolbar} icon="link" />
										<ToolbarItem
											{...toolbar}
											icon="chevron-down"
										/>
									</Group>
								</Expander>
								<Group isLast>
									<ToolbarItem {...toolbar} icon="ellipsis" />
								</Group>
							</MainToolbar>
						</BaseToolbar>
					</ThemeProvider>
				</div>
			</div>
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
	number("moveAmount", 100);
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
