import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Navbar from './Navbar';


function App() {
	return (
		<Router>
		<div className="container">
			<Navbar />
		</div>
		</Router>
	)
}

export default App
