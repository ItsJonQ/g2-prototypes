import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import BlockBase from "./pages/block-base";
import ToolbarBase from "./pages/toolbar-base";

export default function Routes() {
  return (
    <Switch>
      <Route path="/block-base" component={BlockBase} />
      <Route path="/toolbar-base" component={ToolbarBase} />
      <Route path="/" component={Home} />
    </Switch>
  );
}
