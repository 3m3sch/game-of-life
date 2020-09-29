import React from 'react';
import ReactDOM from 'react-dom';

export default class Box extends React.Component {
	
	selectBox = () => {
		this.props.selectBox(this.props.row, this.props.clol);
	}
	
	render() {
		return (
			<div id={this.props.id} className={this.props.boxClass} onClick={this.selectBox}>
				
			</div>
		);
	}
	
}