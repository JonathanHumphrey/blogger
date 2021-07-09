import React from "react";

// Style Import
import "./Styles/global.scss"

// Component Imports
import Header from "./Components/Header";
import Body from "./Components/Body";

function App() {
	return (
		<div className="App">
      <Header />
      <Body />
		</div>
	);
}

export default App;
