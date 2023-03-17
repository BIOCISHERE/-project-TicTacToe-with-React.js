import React from "react"; 
import Board from "./board.jsx";

//create your first component
const Home = () => {
	return (
		<div className="text-center ">
			<div id="shadowBox">
			<h1 className="rainbow rainbow_text_animated">Tic Tac Toe in React.js</h1>
			</div>
			<Board />
			
		</div>
	);
};

export default Home;
