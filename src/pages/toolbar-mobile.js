import React, { useRef, useState, useEffect } from "react";
import styled from "@emotion/styled";
import { useControls } from "@itsjonq/controls";

import { withControlPanel } from "../components/control-panel";
import { Toolbar } from "../components/toolbar";
import { DualArrowDragHandle } from "../components/toolbar/dual-arrow-drag-handle";
import { Phone } from "../components/phone";
import { Page } from "../components/page";

function useAttributes() {
	const { number } = useControls();

	number("toolbarRevealAnimationSpeed", 200);
	number("toolbarRevealAnimationDelay", 200);
}

export function BaseToolbarMobile(props) {
	const ref = useRef(null);
	const [isEditing, setIsEditing] = useSelectedState(ref);
	const {
		toolbarRevealAnimationSpeed,
		toolbarRevealAnimationDelay
	} = props.attributes;

	return (
		<Page title="Toolbar (Mobile)">
			<PhoneWrapper>
				<Phone>
					<ContentView>
						<TopBar />
						<ContentArea
							ref={ref}
							contentEditable={true}
							spellCheck="false"
							suppressContentEditableWarning
							onClick={() => setIsEditing(true)}
						>
							Hello
						</ContentArea>
						<KeyboardWrapper isEditing={isEditing}>
							<ToolbarWrapper
								isEditing={isEditing}
								style={{
									transitionDuration: `${toolbarRevealAnimationSpeed}ms`,
									transitionDelay: `${toolbarRevealAnimationDelay}ms`
								}}
							>
								<Toolbar
									default={{ x: 0, y: 0 }}
									disableDragging={true}
									isExpanded
									style={{ marginLeft: 89 }}
									renderDragHandle={DualArrowDragHandle}
								/>
							</ToolbarWrapper>
							<Keyboard />
						</KeyboardWrapper>
					</ContentView>
				</Phone>
			</PhoneWrapper>
		</Page>
	);
}

export const ToolbarMobile = withControlPanel(useAttributes)(BaseToolbarMobile);

function useSelectedState(ref) {
	const [isSelected, setIsSelected] = useState(false);

	useEffect(() => {
		const node = ref.current;

		if (!node) {
			return;
		}

		const targetNode = node.parentElement;

		const handleOnBodyClick = event => {
			const { target } = event;
			if (!targetNode.contains(target) && targetNode !== target) {
				setIsSelected(false);
			}
		};

		document.addEventListener("click", handleOnBodyClick);

		return () => {
			document.removeEventListener("click", handleOnBodyClick);
		};
	}, [ref, setIsSelected]);

	return [isSelected, setIsSelected];
}

const PhoneWrapper = styled.div`
	margin: auto;
	display: flex;
	justify-content: center;
`;

const KeyboardWrapper = styled.div`
	transform: translateY(100%);
	transition: all 200ms linear;

	${({ isEditing }) =>
		isEditing &&
		`
	transform: translateY(0%);
	`}
`;

const ToolbarWrapper = styled(KeyboardWrapper)`
	transition: all 200ms linear 200ms;
`;

const ContentView = styled.div`
	display: flex;
	height: 100%;
	flex-direction: column;
`;
const BaseView = styled.div`
	background: #eee;
`;

const TopBar = styled(BaseView)`
	height: 50px;
`;

const ContentArea = styled.div`
	padding: 50px;
	flex: 1;
	outline: none;
`;

const Keyboard = styled(BaseView)`
	height: 275px;
	position: relative;
	z-index: 3;
`;

export default ToolbarMobile;
