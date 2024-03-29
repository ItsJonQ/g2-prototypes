import React from "react";
import { kebabCase } from "lodash";
import { Flex } from "@itsjonq/elm";

import * as Icons from "../../components/icons";
import IconButton from "../../components/icon-button";
import { View } from "../../components/view";
import { Text } from "../../components/text";

export function IconButtonGallery(props) {
	const { attributes } = props;
	const iconNames = Object.keys(Icons)
		.map(kebabCase)
		.map(item => item.replace("-icon", ""));

	return (
		<>
			{iconNames.map(icon => (
				<IconButtonSample
					{...attributes}
					title={icon}
					key={icon}
					icon={icon}
				/>
			))}
		</>
	);
}

function IconButtonSample(props) {
	const { icon, title } = props;

	const { buttonMainColor } = props;

	const componentProps = { color: buttonMainColor, icon };

	return (
		<View my={4} pb={4}>
			<Label fontWeight={600}>{title}</Label>
			<Flex>
				<Flex.Block>
					<Label>Rested</Label>
					<IconButton {...componentProps} />
				</Flex.Block>
				<Flex.Block>
					<Label>Hover</Label>
					<IconButton {...componentProps} isHovered />
				</Flex.Block>
				<Flex.Block>
					<Label>Focus</Label>
					<IconButton {...componentProps} isFocused />
				</Flex.Block>
				<Flex.Block>
					<Label>Pressed</Label>
					<IconButton {...componentProps} isPressed />
				</Flex.Block>
				<Flex.Block>
					<Label>Disabled</Label>
					<IconButton {...componentProps} disabled />
				</Flex.Block>
			</Flex>
		</View>
	);
}

function Label(props) {
	return (
		<View mb={3}>
			<Text size={12} {...props} />
		</View>
	);
}

export default IconButtonGallery;
