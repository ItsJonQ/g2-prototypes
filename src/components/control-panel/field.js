import React from "react";
import { View } from "../view";
import { Input } from "./styles";
import { toNumber } from "./utils";

export function Field({ label, value, onChange, type }) {
	let fieldValue = value;
	const isTypeNumber = type === "number";

	if (isTypeNumber) {
		fieldValue = toNumber(value);
	}

	const handleOnChange = event => {
		const nextRawValue = event.target.value;
		const nextValue = isTypeNumber ? toNumber(nextRawValue) : nextRawValue;
		onChange(nextValue);
	};

	return (
		<View mb={2}>
			<View mb={1}>{label}</View>
			<Input value={fieldValue} onChange={handleOnChange} />
		</View>
	);
}

export default Field;
