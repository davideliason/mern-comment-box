import React, {Component} from 'react';

class CommentList extends Component {
	constructor(){
		super();
		this.state={
			color: "blue"
		}
	}

	render(){
		return (
				<div> CommentList {this.props.data}</div>
			)
	}
}

export default CommentList;