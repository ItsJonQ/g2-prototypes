import React from "react";
import View from "../view";

export default function Field({ label, children }) {
	return (
		<View mb={2}>
			<View mb={1}>{label}</View>
			{children}
		</View>
	);
}
