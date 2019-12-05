import React from "react";
import * as Icons from "./icons";
import { camelCase, upperFirst } from "lodash";

export function Icon({ icon = "", ...restProps }) {
	const iconName = upperFirst(camelCase(`${icon}-icon`));
	const IconComponent = Icons[iconName] || Icons.AddIcon;

	return <IconComponent {...restProps} />;
}

export default Icon;
