import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";

export function Phone(props) {
	const [position, setPosition] = useState({ x: 0, y: 0 });
	const { children } = props;

	useEffect(() => {
		document.body.style.cursor = "none";

		const handleOnMouseMove = event => {
			const { clientX, clientY } = event;
			setPosition({ x: clientX, y: clientY });
		};

		document.addEventListener("mousemove", handleOnMouseMove);

		return () => {
			document.body.style.cursor = null;
			document.removeEventListener("mousemove", handleOnMouseMove);
		};
	}, [setPosition]);

	const touchCursorStyle = {
		transform: `translate(${position.x - 25}px, ${position.y - 25}px)`
	};

	return (
		<>
			<TouchCursor style={touchCursorStyle} />
			<Device>
				<Screen>{children}</Screen>
			</Device>
		</>
	);
}

const Device = styled.div`
	background: white;
	border-radius: 20px;
	padding: 40px 16px 50px;
	box-shadow: 0 8px 12px rgba(0, 0, 0, 0.1), 0 10px 30px rgba(0, 0, 0, 0.1),
		0 0 12px rgba(0, 0, 0, 0.1) inset;
	display: inline-flex;
	position: relative;
`;

const Screen = styled.div`
	border: 1px solid rgba(0, 0, 0, 0.1);
	width: 375px;
	height: 697px;
	border-radius: 8px;
	overflow: hidden;
`;

const TouchCursor = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 50px;
	height: 50px;
	background: rgba(0, 0, 0, 0.2);
	border-radius: 50%;
	z-index: 99999;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	border: 1px solid rgba(0, 0, 0, 0.2);
	pointer-events: none;
`;
