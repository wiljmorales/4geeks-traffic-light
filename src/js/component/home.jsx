import React, { useState } from "react";

//create your first component
const Home = () => {
	const [color, setColor] = useState("");

	return (
		<>
			<div className="traffic-light_pole"></div>
			<div className="traffic-light">
				<div
					className={`light red ${color === "red" ? "turn-on" : ""}`}
					onClick={() => setColor("red")}></div>
				<div
					className={`light yellow ${
						color === "yellow" ? "turn-on" : ""
					}`}
					onClick={() => setColor("yellow")}></div>
				<div
					className={`light green ${
						color === "green" ? "turn-on" : ""
					}`}
					onClick={() => setColor("green")}></div>
			</div>
		</>
	);
};

export default Home;
