import React from "react";
import { ControlledToolbar } from "../components/toolbar";
import Page from "../components/page";
import Text from "../components/text";

export default function ToolbarPage() {
  return (
    <Page title="Toolbar Base">
      <Text shade="muted">Hover and move the Toolbar around</Text>
      <ControlledToolbar />
    </Page>
  );
}
