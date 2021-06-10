import React, { useState } from "react";

export default function Input(props) {
	const [value, setValue] = useState("");

	function updateValue() {
		const newValue = document.querySelector(`.oneValue-${props.id}`).value;
		setValue(newValue);
		console.log(props.name, newValue);
	}

	if (props.type === "oneValueText") {
		return (
			<div>
				<input className={`oneValue-${props.id}`} placeholder={props.placeholder} name={props.name} type="text" value={value} onChange={updateValue} autoComplete="off"></input>
			</div>
		);
	}
}
