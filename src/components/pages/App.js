import React from 'react';
import Navbar from './Navbar';
import Main from './Main';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function app() {
	return (
		<Router>
			<div className="flex flex-r">
				<Navbar />
				<Main />
			</div>
		</Router>
	)
}

export default app
