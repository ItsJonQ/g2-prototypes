import React from "react";
import styled from "@emotion/styled";
import PageBody from "./page-body";
import PageHeader from "./page-header";

export default function Page({ children, title }) {
  return (
    <PageBase>
      <PageHeader title={title} />
      <PageBody>{children}</PageBody>
    </PageBase>
  );
}

const PageBase = styled.div`
  padding: 20px;
`;
