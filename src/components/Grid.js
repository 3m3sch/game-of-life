import React from 'react';
import ReactDOM from 'react-dom';

import Box from './Box';

export default class Grid2 extends React.Component {
	
	constructor() {
		super();
	}
	
	render() {
		const width = this.props.cols * 16;
		var rowsArr = [];
		
		var boxClass = "";
		for (var i = 0; i < this.props.rows; i++) {
			for (var j = 0; j < this.props.cols; j++) {
				let boxId = i + "_" + j;
				
				boxClass = this.props.gridFull[i][j] ? "box on" : "box off";
				rowsArr.push(
					<Box
					 	boxClass={boxClass}
						key={boxId}
						boxId={boxId}
						row={i}
						cols={j}
						selectBox={this.props.selectBox}
					/>
				);
			}
		}
		
		return (
			<div className="grid" style={{width: width}}>
				{rowsArr}
			</div>
		);
	}
	
}