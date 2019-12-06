import React from "react";
import { Route, Switch } from "react-router-dom";
import { Home } from "./pages/home";
import { BlockBase } from "./pages/block-base";
import { Toolbar } from "./pages/toolbar-base";
import { ToolbarMovers } from "./pages/toolbar-movers";
import { Buttons } from "./pages/buttons";
import { IconButtons } from "./pages/icon-buttons";
import { Icons } from "./pages/icons";

export function Routes() {
	return (
		<Switch>
			<Route path="/block-base" component={BlockBase} />
			<Route path="/toolbar-base" component={Toolbar} />
			<Route path="/toolbar-movers" component={ToolbarMovers} />
			<Route path="/buttons" component={Buttons} />
			<Route path="/icon-buttons" component={IconButtons} />
			<Route path="/icons" component={Icons} />
			<Route path="/" component={Home} />
		</Switch>
	);
}

export default Routes;
