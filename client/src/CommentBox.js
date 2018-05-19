import React, {Component} from 'react';

class CommentBox extends Component {
	constructor(){
		super();
		this.state = {
			color: "blue"
		}
	}

	render(){
		return (
				<div>
					<h3>hello CommentBox</h3>
				</div>
			)
	}
}

export default CommentBox