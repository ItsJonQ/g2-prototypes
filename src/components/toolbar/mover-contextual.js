import React from "react";
import styled from "@emotion/styled";
import { ToolbarItem } from "reakit/Toolbar";
import { useSpring, animated } from "react-spring";

import { Icon } from "../icon";
import { IconButton } from "../icon-button";

import { ArrowWrappers, DragSlider, MainToolbar, Group } from "./styles";

export function MoverWrapper(props) {
	const { children, ...restProps } = props;
	return (
		<DragSlider {...restProps}>
			<MainToolbar isAside>
				<Group isLast>{children}</Group>
			</MainToolbar>
		</DragSlider>
	);
}

export function MoverContextual(props) {
	const {
		onMoveUp,
		onMoveDown,
		onMoveLeft,
		onMoveRight,
		isDragging,
		isHorizontal,
		toolbar
	} = props;

	const animatedStyles = useSpring({
		config: {
			duration: 50
		},
		transform: isHorizontal ? "rotate(-90deg)" : "rotate(0deg)"
	});

	const handleOnMoveUp = () => {
		if (!isHorizontal) {
			onMoveUp && onMoveUp();
		} else {
			onMoveLeft && onMoveLeft();
		}
	};

	const handleOnMoveDown = () => {
		if (!isHorizontal) {
			onMoveDown && onMoveDown();
		} else {
			onMoveRight && onMoveRight();
		}
	};

	return (
		<MoverWrapper {...props}>
			<ArrowWrappers {...props} className="no-drag">
				{isDragging ? (
					<Icon icon="mover-dragged" />
				) : (
					<animated.div style={animatedStyles}>
						<Wrapper>
							<ToolbarItemContainer>
								<ToolbarItem
									{...toolbar}
									icon="chevron-up"
									iconSize={20}
									size="micro"
									overflow="hidden"
									as={IconButton}
									onClick={handleOnMoveUp}
								/>
								<ToolbarItem
									{...toolbar}
									as={IconButton}
									icon="chevron-down"
									iconSize={20}
									iconStyles={{
										left: 1
									}}
									size="micro"
									onClick={handleOnMoveDown}
								/>
							</ToolbarItemContainer>
						</Wrapper>
					</animated.div>
				)}
			</ArrowWrappers>
		</MoverWrapper>
	);
}

const Wrapper = styled.div`
	padding-right: 1px;
	margin: 0 -4px;
`;

export const ToolbarItemContainer = styled.div`
	display: flex;
	flex-direction: column;
`;
