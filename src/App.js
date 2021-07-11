import React, {useContext} from "react";

// Style Import
import "./Styles/global.scss"

// Component Imports
import Header from "./Components/Header";
import Body from "./Components/Body";
import Context, { appContext } from "./Context/Context";


function App() {
	
	return (
		<Context>
			<div className="App">
				<Header />
				<Body />
				
			</div>
		</Context>
	);
}

export default App;
