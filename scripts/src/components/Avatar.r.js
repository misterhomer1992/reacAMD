import React from 'react';

export default ({url}) => {
	const imgStyle = {
		maxWidth: '100px'
	};

	const h3Style = {
		float: 'right'
	};

	return (
		<div className="list" style={{maxWidth: '300px'}}>
			<hr/>
			<h1>Avatar component</h1>
			<img style={imgStyle} src={url} className="profile"/>
			<h3 style={h3Style}>Hi jack</h3>
			<hr/>
		</div>
	);
}