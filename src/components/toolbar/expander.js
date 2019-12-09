import React, { useEffect, useRef, useState } from "react";
import { Slider } from "./styles";

export function Expander(props) {
	const { children, isExpanded, ...restProps } = props;
	const [width, setWidth] = useState(0);
	const containerRef = useRef(null);

	useEffect(() => {
		const containerNode = containerRef.current;
		if (containerNode) {
			const nextWidth = isExpanded ? containerNode.clientWidth : 0;
			setWidth(nextWidth);
		}
	}, [isExpanded, containerRef, setWidth]);

	const style = { display: "inline-flex", width };

	return (
		<Slider {...restProps} style={style}>
			<div ref={containerRef}>{children}</div>
		</Slider>
	);
}

export default Expander;
