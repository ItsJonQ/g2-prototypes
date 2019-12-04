import React from "react";
import { useControlPanelContext } from "./context";
import View from "../view";
import { ControlBox, Title, Input } from "./styles";

function useItems() {
	const { state } = useControlPanelContext();
	const keys = Object.keys(state);

	return keys.reduce((collection, key) => {
		return [
			...collection,
			{
				...state[key],
				prop: key,
				label: key,
				key
			}
		];
	}, []);
}

function Controls() {
	const { updateValue } = useControlPanelContext();
	const items = useItems();

	return (
		<ControlBox>
			<View mb={2}>
				<Title>CONTROL PANEL</Title>
			</View>
			{items.map(item => {
				const onChange = nextValue => {
					updateValue(item.prop, nextValue, item);
				};
				return <Field {...item} onChange={onChange} />;
			})}
		</ControlBox>
	);
}

function Field({ label, value, onChange }) {
	return (
		<View mb={2}>
			<View mb={1}>{label}</View>
			<Input value={value} onChange={e => onChange(e.target.value)} />
		</View>
	);
}

export default Controls;
