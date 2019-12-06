import styled from "@emotion/styled";

export const Title = styled.div`
	font-weight: bold;
	margin-bottom: 8px;
	padding: 8px;
	border-bottom: 2px solid black;
	margin: -8px -8px 8px;
`;

export const ControlBox = styled.div`
	background: white;
	border: 3px solid black;
	padding: 8px 8px 0;
	font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;
	font-size: 11px;
	width: 240px;
	box-shadow: 2px 2px 0 rgba(0, 0, 0, 0.2);
	position: fixed;
	top: 56px;
	right: 8px;
	z-index: 1000;
`;

export const Input = styled.input`
	width: 100%;
	font-family: inherit;
	border: 1px solid black;

	&[type="checkbox"] {
		cursor: pointer;
		margin: 0;
		display: block;
	}
`;

export const Select = styled.select`
	width: 100%;
	font-family: inherit;
	border: 1px solid black;
	border-radius: 0;
`;
