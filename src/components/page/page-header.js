import React from "react";
import styled from "@emotion/styled";
import { Helmet } from "react-helmet";

export function PageHeader({ title }) {
	const baseTitle = "G2 Prototypes";
	const pageTitle = title ? `${title} | ${baseTitle}` : baseTitle;

	return (
		<Header>
			<Helmet>
				<title>{pageTitle}</title>
			</Helmet>
			<Title>{title}</Title>
		</Header>
	);
}

const Header = styled.div`
	padding: 20px 0 20px;
`;

const Title = styled.h1`
	margin: 0%;
`;

export default PageHeader;
