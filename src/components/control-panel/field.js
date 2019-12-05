import React from "react";
import { View } from "../view";
import { Input } from "./styles";

export function Field({ label, value, onChange }) {
	return (
		<View mb={2}>
			<View mb={1}>{label}</View>
			<Input value={value} onChange={e => onChange(e.target.value)} />
		</View>
	);
}

export default Field;
