import React from "react";
import { ControlledBlock } from "../components/block";
import { Page } from "../components/page";

export function BlockBase() {
	return (
		<Page title="Block Base">
			<ControlledBlock />
		</Page>
	);
}

export default BlockBase;
