import React, { Component } from 'react';

export default class SearchBar extends Component {

	constructor(props) {
		super(props);

		this.state = { term: '' };
		// this.onInputChange = this.onInputChange.bind(this);
	}
	onInputChange(e) {
		console.log('event object: ', e.target.value);
		this.setState({
			term: e.target.value
		});
	}
	onFormSubmit(e) {
		e.preventDefault();
		// hit the backend weather API
	}
	render() {
		return (
			<form onSubmit={e => this.onFormSubmit(e)} className="input-group">
				<input
					placeholder="get a fiveday forecast in your favorite cities!"
					className="form-control"
					value={this.state.term}
					onChange={(e) => this.onInputChange(e)}
				/>
				<span className="input-group-btn">
					<button type="submit" className="btn btn-secondary">Submit</button>
				</span>
			</form>
		)
	}
}
