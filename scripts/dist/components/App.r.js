define(['exports', 'react', 'components/Avatar.r', 'react-dom', 'components/Logger'], function (exports, _react, _Avatar, _reactDom, _Logger) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react2 = _interopRequireDefault(_react);

	var _Avatar2 = _interopRequireDefault(_Avatar);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _Logger2 = _interopRequireDefault(_Logger);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : {
			default: obj
		};
	}

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}

	var _createClass = function () {
		function defineProperties(target, props) {
			for (var i = 0; i < props.length; i++) {
				var descriptor = props[i];
				descriptor.enumerable = descriptor.enumerable || false;
				descriptor.configurable = true;
				if ("value" in descriptor) descriptor.writable = true;
				Object.defineProperty(target, descriptor.key, descriptor);
			}
		}

		return function (Constructor, protoProps, staticProps) {
			if (protoProps) defineProperties(Constructor.prototype, protoProps);
			if (staticProps) defineProperties(Constructor, staticProps);
			return Constructor;
		};
	}();

	function _possibleConstructorReturn(self, call) {
		if (!self) {
			throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		}

		return call && (typeof call === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
		if (typeof superClass !== "function" && superClass !== null) {
			throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
		}

		subClass.prototype = Object.create(superClass && superClass.prototype, {
			constructor: {
				value: subClass,
				enumerable: false,
				writable: true,
				configurable: true
			}
		});
		if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var App = function (_React$Component) {
		_inherits(App, _React$Component);

		function App(props) {
			_classCallCheck(this, App);

			var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

			_this.state = {
				title: 'Hi there!',
				avatarUrl: 'http://s.storage.akamai.coub.com/get/b30/p/coub/simple/cw_timeline_pic/d87c657f374/238ad6b27b6ab65bdf7ca/med_1444127990_image.jpg'
			};
			return _this;
		}

		_createClass(App, [{
			key: 'componentDidMount',
			value: function componentDidMount() {
				console.log(_reactDom2.default.findDOMNode(this));
			}
		}, {
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(
						'h2',
						null,
						this.state.title,
						' #',
						_react2.default.createElement(
							'small',
							null,
							this.props.appId
						)
					),
					_react2.default.createElement(_Avatar2.default, { url: this.state.avatarUrl }),
					_react2.default.createElement(
						'ul',
						{ className: 'list' },
						_react2.default.createElement(
							'li',
							null,
							'item 1'
						),
						_react2.default.createElement(
							'li',
							null,
							'item 2'
						)
					)
				);
			}
		}]);

		return App;
	}(_react2.default.Component);

	exports.default = App;
});