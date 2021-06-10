import React from "react";
import Input from "./Input";

export default function Form() {
	return (
		<form>
			<Input key="1" id="1" name="waterAmount" placeholder="Water Amount" type="oneValueText" />
			<Input key="2" id="2" name="foodAmount" placeholder="Food Amount" type="oneValueText" />
			<input type="submit" value="Send"></input>
		</form>
	);
}
