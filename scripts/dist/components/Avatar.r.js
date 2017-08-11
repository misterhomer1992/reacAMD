define(['exports', 'react'], function (exports, _react) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : {
			default: obj
		};
	}

	exports.default = function (_ref) {
		var url = _ref.url;

		var imgStyle = {
			maxWidth: '100px'
		};

		var h3Style = {
			float: 'right'
		};

		return _react2.default.createElement(
			'div',
			{ className: 'list', style: { maxWidth: '300px' } },
			_react2.default.createElement('hr', null),
			_react2.default.createElement(
				'h1',
				null,
				'Avatar component'
			),
			_react2.default.createElement('img', { style: imgStyle, src: url, className: 'profile' }),
			_react2.default.createElement(
				'h3',
				{ style: h3Style },
				'Hi jack'
			),
			_react2.default.createElement('hr', null)
		);
	};
});