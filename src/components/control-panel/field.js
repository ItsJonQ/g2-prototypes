import React from "react";
import { View } from "../view";
import { Input, Select } from "./styles";
import { toNumber } from "./utils";

export function Field(props) {
	const { label, value, onChange, type, ...restProps } = props;
	const isNumber = isValueNumber(type);
	const InputComponent = InputComponents[type];

	if (!InputComponent) return null;

	const handleOnChange = event => {
		const nextRawValue = event.target.value;
		const nextValue = isNumber ? toNumber(nextRawValue) : nextRawValue;
		onChange(nextValue);
	};

	return (
		<View mb={2}>
			<View mb={1}>{label}</View>
			<InputComponent
				{...restProps}
				onChange={handleOnChange}
				value={value}
			/>
		</View>
	);
}

function TextInput(props) {
	return <Input {...props} />;
}

function BooleanInput(props) {
	return <Input {...props} type="checkbox" />;
}

function NumberInput(props) {
	const value = toNumber(props.value);
	return <Input {...props} value={value} />;
}

function RangeInput(props) {
	const value = toNumber(props.value);
	return <Input {...props} value={value} type="range" />;
}

function SelectInput(props) {
	const { value, options, ...restProps } = props;
	const items = mapOptionsToItems(options);

	return (
		<Select value={value} {...restProps}>
			{items.map(item => {
				return (
					<option key={item.value} value={item.value}>
						{item.label}
					</option>
				);
			})}
		</Select>
	);
}

const InputComponents = {
	boolean: BooleanInput,
	text: TextInput,
	number: NumberInput,
	range: RangeInput,
	select: SelectInput
};

function isValueNumber(type) {
	return type === "number" || type === "range";
}

function mapOptionsToItems(options) {
	return Object.keys(options).reduce((collection, key) => {
		return [
			...collection,
			{
				label: key,
				value: options[key]
			}
		];
	}, []);
}

export default Field;
