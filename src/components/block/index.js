import React, { useEffect, useRef, useState } from "react";
import { ThemeProvider } from "emotion-theming";
import { useControls } from "@itsjonq/controls";

import { Toolbar } from "../toolbar";
import { BlockWrapper, ToolbarWrapper, ContentWrapper } from "./styles";

export function Block(props) {
	const { number, attributes } = useControls();
	number("blockBorderAnimationSpeed", 0);
	number("toolbarFadeAnimationSpeed", 220);
	number("toolbarTopOffset", -40);

	const ref = useRef(null);
	const [showToolbar, setShowToolbar] = useState(false);
	const [isSelected, setIsSelected] = useSelectedState(ref);
	const [position, setPosition] = useState({ x: 0, y: 0 });
	const [isDragging, setIsDragging] = useState(false);

	const theme = {
		...attributes
	};

	const onDrag = event => {
		const { movementX, movementY } = event;
		const nextPosition = {
			x: position.x + movementX,
			y: position.y + movementY
		};
		setPosition(nextPosition);
	};

	const contentStyle = {
		opacity: isDragging ? 0.5 : 1,
		transform: `translate(${position.x}px, ${position.y}px)`
	};

	return (
		<ThemeProvider theme={theme}>
			<BlockWrapper
				onMouseMove={() => setShowToolbar(true)}
				onMouseLeave={() => setShowToolbar(false)}
				onClick={() => setIsSelected(true)}
				ref={ref}
			>
				<ToolbarWrapper showToolbar={showToolbar}>
					<Toolbar
						isExpanded
						onDrag={onDrag}
						onDragStart={() => setIsDragging(true)}
						onDragStop={() => setIsDragging(false)}
					/>
				</ToolbarWrapper>
				<ContentWrapper isSelected={isSelected} style={contentStyle}>
					<p
						contentEditable={true}
						spellCheck="false"
						suppressContentEditableWarning
					>
						Cheesecake halvah muffin halvah pastry macaroon cupcake.
						Cookie lollipop ice cream toffee pudding lemon drops.
						Marshmallow dragée oat cake pudding gummies donut
						pudding. Marzipan macaroon jelly-o brownie soufflé.
						Chocolate candy donut icing donut sesame snaps. Toffee
						bear claw fruitcake apple pie danish jelly beans.
						Cheesecake sugar plum jelly-o sweet cookie. Oat cake
						pudding brownie. Jelly beans macaroon sweet. Danish
						sugar plum soufflé sweet roll chocolate cake. Jelly
						danish cookie candy canes jelly. Sweet roll gingerbread
						sweet roll tootsie roll lemon drops tart. Cake jujubes
						donut sweet roll candy canes chocolate cake biscuit
						sweet roll.
					</p>
				</ContentWrapper>
			</BlockWrapper>
		</ThemeProvider>
	);
}

function useSelectedState(ref) {
	const [isSelected, setIsSelected] = useState(false);

	useEffect(() => {
		const node = ref.current;

		if (!node) {
			return;
		}

		const handleOnBodyClick = event => {
			const { target } = event;
			if (!node.contains(target) && node !== target) {
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

export default Block;
