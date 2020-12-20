import React from "react";

class SearchBar extends React.Component {
	state = {
		term:
			"Write some search term, e.g. cars, developers, flowers... and press the Enter",
	};

	onFormSubmit = (event) => {
		event.preventDefault();

		this.props.onSubmit(this.state.term);
	};

	render() {
		return (
			<div className="ui segment">
				<form onSubmit={this.onFormSubmit} className="ui form">
					<div className="field">
						<label>Image Search</label>
						<input
							type="text"
							value={this.state.term}
							onChange={(e) => this.setState({ term: e.target.value })}
							onFocus={() => this.setState({ term: "" })}
						/>
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;
