const initialState = {};

export function reducer(state = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		case "update_value":
			return {
				...state,
				[payload.prop]: {
					...state[payload.prop],
					value: payload.value
				}
			};

		case "add_value":
			return {
				...state,
				[payload.prop]: payload.value
			};

		default:
			return state;
	}
}

export function getAttributesAsValues(attributes) {
	const keys = Object.keys(attributes);

	return keys.reduce((collection, key) => {
		const item = attributes[key];
		return {
			...collection,
			[key]: item.value
		};
	}, {});
}
