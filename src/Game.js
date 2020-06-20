import React from 'react';
import Red from './Red.css';
//import { render } from '@testing-library/react';

class Game extends React.Component {
	constructor() {
		super();
		this.state = {
			num1: Math.floor(Math.random() * 5),
			num2: Math.floor(Math.random() * 5),
			score: 0,
			answer: '',
			incorrect: false
		};
	}
	updateResponse = (e) => {
		this.setState({
			answer: e.target.value
		});
	};
	inputKeyPress = (e) => {
		if (e.key === 'Enter') {
			const response = parseInt(this.state.answer);
			if (response === this.state.num1 + this.state.num2) {
				this.setState((state) => ({
					//answer right
					score: state.score + 1,
					//Math.random comes up as an error, debug later
					num1: Math.ceil(Math.random() * 10),
					num2: Math.ceil(Math.random() * 10),
					answer: '',
					incorrect: false
				}));
			} else {
				//answer wrong
				this.setState({
					answer: '',
					incorrect: true
				});
			}
		}
	};
	render() {
		if (this.state.score >= 5) {
			return this.renderWin();
		} else {
			return this.renderProblem();
		}
	}
	renderProblem() {
		return (
			<div>
				<h1 className={this.state.incorrect ? 'incorrect' : ''}>
					{this.state.num1} + {this.state.num2}
				</h1>

				<input onKeyPress={this.inputKeyPress} onChange={this.updateResponse} value={this.state.answer} />
				<p>Current guess is: {this.state.answer}</p>
				<p>Current score is: {this.state.score}</p>
			</div>
		);
	}

	renderWin() {
		return <h1>Congratulations! You win!</h1>;
	}
}

export default Game;
