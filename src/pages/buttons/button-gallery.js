import React from "react";
import styled from "@emotion/styled";
import { Flex } from "@itsjonq/elm";
import { withControlPanel, useKnobs } from "../../components/control-panel";
import { Button } from "../../components/button";
import { View } from "../../components/view";
import { Text } from "../../components/text";

function useCreateAttributes() {
	const { useText } = useKnobs();
	return {
		buttonContent: useText("buttonContent", "Button"),
		buttonMainColor: useText("buttonMainColor", "#3e58e1")
	};
}

function ButtonSample(props) {
	const {
		buttonContent,
		buttonMainColor,
		buttonSize,
		variant,
		title
	} = props;
	const buttonProps = {
		color: buttonMainColor,
		variant,
		size: buttonSize || "md"
	};

	return (
		<View my={4} pb={4}>
			<View mb={3}>
				<Text size={18} fontWeight={600}>
					{title}
				</Text>
			</View>
			<Flex>
				<Flex.Block>
					<Label>Rested</Label>
					<Button {...buttonProps}>{buttonContent}</Button>
				</Flex.Block>
				<Flex.Block>
					<Label>Hover</Label>
					<Button {...buttonProps} isHovered>
						{buttonContent}
					</Button>
				</Flex.Block>
				<Flex.Block>
					<Label>Focus</Label>
					<Button {...buttonProps} isFocused>
						{buttonContent}
					</Button>
				</Flex.Block>
				<Flex.Block>
					<Label>Pressed</Label>
					<Button {...buttonProps} isPressed>
						{buttonContent}
					</Button>
				</Flex.Block>
				<Flex.Block>
					<Label>Disabled</Label>
					<Button {...buttonProps} disabled>
						{buttonContent}
					</Button>
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

export function ButtonGallery(props) {
	const { attributes } = props;

	return (
		<>
			<ButtonSample {...attributes} variant="default" title="Default" />
			<ButtonSample {...attributes} variant="primary" title="Primary" />
			<ButtonSample {...attributes} variant="tertiary" title="Tertiary" />

			<View my={5} pb={4}>
				<hr />
			</View>

			<ButtonSample
				{...attributes}
				buttonSize="sm"
				variant="default"
				title="Default (Small)"
			/>
			<ButtonSample
				{...attributes}
				buttonSize="sm"
				variant="primary"
				title="Primary (Small)"
			/>
			<ButtonSample
				{...attributes}
				buttonSize="sm"
				variant="tertiary"
				title="Tertiary (Small)"
			/>

			<View my={5} pb={6} />
		</>
	);
}

export const ControlledButtonGallery = withControlPanel(useCreateAttributes)(
	ButtonGallery
);

export default ButtonGallery;
