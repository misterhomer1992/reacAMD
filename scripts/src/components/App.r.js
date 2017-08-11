import React from 'react';
import Avatar from 'components/Avatar.r';
import ReactDOM from 'react-dom';
import Logger from 'components/Logger';

export default class App extends React.Component {
	constructor (props) {
		super(props);

		this.state = {
			title: 'Hi there!',
			avatarUrl: 'http://s.storage.akamai.coub.com/get/b30/p/coub/simple/cw_timeline_pic/d87c657f374/238ad6b27b6ab65bdf7ca/med_1444127990_image.jpg'
		};
	}

	componentDidMount() {
		console.log(
			ReactDOM.findDOMNode(this)
		)
	}

	render () {
		return (
			<div>
				<h2>{this.state.title} #
					<small>{this.props.appId}</small>
				</h2>
				<Avatar url={this.state.avatarUrl}/>
				<ul className="list">
					<li>item 1</li>
					<li>item 2</li>
				</ul>
			</div>
		);
	}
}