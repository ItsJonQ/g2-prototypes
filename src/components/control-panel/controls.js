import React from "react";
import { useControlPanelContext } from "./context";
import { Field } from "./field";
import { View } from "../view";
import { ControlBox, Title } from "./styles";

export function Controls() {
	const { updateAttribute } = useControlPanelContext();
	const items = useItems();

	return (
		<ControlBox>
			<View mb={2}>
				<Title>CONTROL PANEL</Title>
			</View>
			{items.map(item => {
				const onChange = nextValue => {
					updateAttribute({ ...item, value: nextValue });
				};
				return <Field {...item} onChange={onChange} />;
			})}
		</ControlBox>
	);
}

function useItems() {
	const { state } = useControlPanelContext();

	if (!Array.isArray(state)) {
		return [];
	}

	return state.map(item => ({
		...item,
		label: item.prop,
		key: item.prop
	}));
}

export default Controls;
