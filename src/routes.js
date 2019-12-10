import React from "react";
import { Route, Switch } from "react-router-dom";
import { Home } from "./pages/home";
import { BlockBase } from "./pages/block-base";
import { ButtonInteraction } from "./pages/button-interaction";
import { ToolbarBase } from "./pages/toolbar-base";
import { ToolbarColors } from "./pages/toolbar-colors";
import { ToolbarMovers } from "./pages/toolbar-movers";
import { ToolbarMobile } from "./pages/toolbar-mobile";
import { Buttons } from "./pages/buttons";
import { IconButtons } from "./pages/icon-buttons";
import { Icons } from "./pages/icons";

export function Routes() {
	return (
		<Switch>
			<Route path="/block-base" component={BlockBase} />
			<Route path="/button-interaction" component={ButtonInteraction} />
			<Route path="/toolbar-base" component={ToolbarBase} />
			<Route path="/toolbar-colors" component={ToolbarColors} />
			<Route path="/toolbar-movers" component={ToolbarMovers} />
			<Route path="/toolbar-mobile" component={ToolbarMobile} />
			<Route path="/buttons" component={Buttons} />
			<Route path="/icon-buttons" component={IconButtons} />
			<Route path="/icons" component={Icons} />
			<Route path="/" component={Home} />
		</Switch>
	);
}

export default Routes;
