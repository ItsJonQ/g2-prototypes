import React from "react";
import styled from "@emotion/styled";

export const DropdownHeader = styled.div`
	color: #ccc;
	font-size: 10px;
	font-weight: 600;
	margin-bottom: 8px;
	padding: 4px 12px;
	text-transform: uppercase;
`;

export const DropdownMenuBase = styled.div`
	--fontFamily: Cabin, -apple-system, "Helvetica Neue", sans-serif;
	background: white;
	border-radius: 4px;
	border: 1px solid #ccc;
	font-family: var(--fontFamily);
	padding: 12px 10px;
	box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
	outline: none;
	min-width: 200px;
`;
