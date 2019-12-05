import { useRef, useEffect, useCallback } from "react";
import { useControlPanelContext } from "./context";

export function useAddAttribute(attribute) {
	const { dispatch } = useControlPanelContext();
	const ref = useRef(attribute);

	useEffect(() => {
		dispatch({
			type: "add_attribute",
			payload: {
				attribute: ref.current
			}
		});
	}, [dispatch, ref]);
}

export const useUpdateAttribute = attribute => {
	const { dispatch } = useControlPanelContext();
	const ref = useRef(attribute);

	useEffect(() => {
		dispatch({
			type: "update_attribute",
			payload: {
				attribute: ref.current
			}
		});
	}, [dispatch, ref]);
};

export function useResetAttributes() {
	const { dispatch } = useControlPanelContext();
	const ref = useRef(null);

	useEffect(() => {
		dispatch({
			type: "reset_attributes",
			payload: {}
		});
	}, [dispatch, ref]);
}

export function useResetOnUnmount() {
	const { resetAttributes } = useControlPanelContext();
	const reset = useCallback(resetAttributes, []);

	useEffect(() => {
		return reset;
	}, [reset]);
}
