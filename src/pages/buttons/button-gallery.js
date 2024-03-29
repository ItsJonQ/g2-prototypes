import React from "react";
import { Flex } from "@itsjonq/elm";
import { useControls } from "@itsjonq/controls";
import { withControlPanel } from "../../components/control-panel";
import { Button } from "../../components/button";
import { View } from "../../components/view";
import { Text } from "../../components/text";

const buttonFonts = {
	cabin: "Cabin",
	system:
		' -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif'
};

function useAttributes() {
	const { select, text } = useControls();

	text("buttonContent", "Button");
	select(
		"buttonFontFamily",
		{
			Cabin: "cabin",
			System: "system"
		},
		"cabin"
	);
}

function ButtonSample(props) {
	const {
		buttonContent,
		buttonFontFamily,
		buttonMainColor,
		buttonSize,
		variant,
		title
	} = props;

	const fontFamily = buttonFonts[buttonFontFamily] || buttonFonts.cabin;

	const componentProps = {
		color: buttonMainColor,
		variant,
		size: buttonSize || "md",
		style: {
			"--buttonFontFamily": fontFamily
		}
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
					<Button {...componentProps}>{buttonContent}</Button>
				</Flex.Block>
				<Flex.Block>
					<Label>Hover</Label>
					<Button {...componentProps} isHovered>
						{buttonContent}
					</Button>
				</Flex.Block>
				<Flex.Block>
					<Label>Focus</Label>
					<Button {...componentProps} isFocused>
						{buttonContent}
					</Button>
				</Flex.Block>
				<Flex.Block>
					<Label>Pressed</Label>
					<Button {...componentProps} isPressed>
						{buttonContent}
					</Button>
				</Flex.Block>
				<Flex.Block>
					<Label>Disabled</Label>
					<Button {...componentProps} disabled>
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

export const ControlledButtonGallery = withControlPanel(useAttributes)(
	ButtonGallery
);

export default ButtonGallery;
