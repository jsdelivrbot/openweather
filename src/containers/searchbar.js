import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {

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
	
	onFormSubmit(e) {
		e.preventDefault();
		// hit the backend weather API
		this.props.fetchWeather(this.state.term);
		this.setState({ term: '' })
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

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
