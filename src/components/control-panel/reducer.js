const initialState = [];

export function reducer(state = initialState, action) {
	const { type, payload } = action;
	const { attribute } = payload || {};

	switch (type) {
		case "update_attribute":
			return state.map(attr => {
				if (attr.prop === attribute.prop) {
					return attribute;
				}
				return attr;
			});

		case "add_attribute":
			const existingAttr = state.find(
				attr => attr.prop === attribute.prop
			);

			if (existingAttr) {
				return state.map(attr => {
					if (attr.prop === attribute.prop) {
						return attribute;
					}
					return attr;
				});
			}

			return [...state, attribute];

		case "reset":
			return [];

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
