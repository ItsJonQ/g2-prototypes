import React from "react";
import { Link as LinkBase } from "react-router-dom";
import Page from "../components/page";
import Text from "../components/text";
import View from "../components/view";

export default function HomePage() {
  return (
    <Page title="Prototypes">
      <View mb={4}>
        <Text shade="muted">Select a prototype:</Text>
      </View>
      <Link to="/toolbar-base">Toolbar (Base)</Link>
      <Link to="/block-base">Block x Toolbar (Base)</Link>
    </Page>
  );
}

const Link = props => (
  <p>
    <LinkBase {...props} />
  </p>
);
