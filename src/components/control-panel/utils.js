export function toNumber(value) {
	const numberValue = parseFloat(value, 10);
	return isNaN(numberValue) ? value : numberValue;
}

export function mapStateToProps(state = []) {
	return state.reduce((collection, item) => {
		return { ...collection, [item.prop]: item.value };
	}, {});
}
