import React from "react";
import { Route, Switch } from "react-router-dom";
import { HomePage } from "./pages/home";
import { BlockBasePage } from "./pages/block-base";
import { ToolbarPage } from "./pages/toolbar-base";
import { ButtonsPage } from "./pages/buttons";
import { IconsPage } from "./pages/icons";

export function Routes() {
	return (
		<Switch>
			<Route path="/block-base" component={BlockBasePage} />
			<Route path="/toolbar-base" component={ToolbarPage} />
			<Route path="/buttons" component={ButtonsPage} />
			<Route path="/icons" component={IconsPage} />
			<Route path="/" component={HomePage} />
		</Switch>
	);
}

export default Routes;
