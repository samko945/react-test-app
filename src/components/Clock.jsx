import React, { useState } from "react";

export default function Clock() {
	const [time, setTime] = useState(new Date().toLocaleTimeString());
	setInterval(updateClock, 1000);
	function updateClock() {
		setTime(new Date().toLocaleTimeString());
	}
	return (
		<div>
			<h1 className="clock">{time && time}</h1>
		</div>
	);
}
