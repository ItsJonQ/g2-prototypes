const KNOB_TYPE = {
	boolean: "boolean",
	text: "text",
	number: "number",
	select: "select"
};

export function number(prop, value) {
	return {
		type: KNOB_TYPE.number,
		prop,
		value: parseInt(value, 10)
	};
}

export function select(prop, options, value) {
	return {
		type: KNOB_TYPE.options,
		prop,
		value,
		options
	};
}

export function boolean(prop, value) {
	return {
		type: KNOB_TYPE.boolean,
		prop,
		value
	};
}

export function text(prop, value) {
	return {
		type: KNOB_TYPE.text,
		prop,
		value
	};
}
