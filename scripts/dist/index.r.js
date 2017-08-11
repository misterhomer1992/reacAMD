define(['react', 'react-dom', 'components/App.r'], function (_react, _reactDom, _App) {
  'use strict';

  var _react2 = _interopRequireDefault(_react);

  var _reactDom2 = _interopRequireDefault(_reactDom);

  var _App2 = _interopRequireDefault(_App);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  _reactDom2.default.render(_react2.default.createElement(_App2.default, { appId: '0.12.1' }), document.getElementById('list'));
});