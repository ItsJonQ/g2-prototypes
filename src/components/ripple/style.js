import styled from "@emotion/styled";

export const RippleEffectBase = styled.span`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 0;
	overflow: hidden;
`;

export const RippleWave = styled.span`
	position: absolute;
	border-radius: 50%;
	opacity: 0;
	width: 35px;
	height: 35px;
	transform: translate(-50%, -50%);
	pointer-events: none;
	transition: all 300ms ease 0s;
	background-color: #1e1e1e;
	pointer-events: none;
	will-change: transform, opacity;
`;
