import React from 'react';
import ReactDOM from 'react-dom';

import Grid from './Grid';

export default class Main extends React.Component {
	
	constructor() {
		super();
		this.state = {
			generation: 0
		}
	}
 	
	render() {
		return (
			<div>
				<h1>The Game of Life</h1>
				<Grid />
				<h2>Generations: {this.state.generation}</h2> 
			</div>
		);
	}
	
}