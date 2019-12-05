import React from "react";
import { HashRouter as Router } from "react-router-dom";
import { ControlPanelProvider } from "./control-panel/provider";

export function AppProvider({ children }) {
	return (
		<ControlPanelProvider>
			<Router>
				<>{children}</>
			</Router>
		</ControlPanelProvider>
	);
}

export default { AppProvider };
