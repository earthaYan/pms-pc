"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var React = _interopRequireWildcard(require("react"));

var _rcProgress = require("rc-progress");

var _classnames = _interopRequireDefault(require("classnames"));

var _utils = require("./utils");

function getPercentage(_ref) {
  var percent = _ref.percent,
      success = _ref.success,
      successPercent = _ref.successPercent;
  var ptg = (0, _utils.validProgress)(percent);
  /** @deprecated Use `percent` instead */

  if (success && 'progress' in success) {
    successPercent = success.progress;
  }

  if (success && 'percent' in success) {
    successPercent = success.percent;
  }

  if (!successPercent) {
    return ptg;
  }

  var successPtg = (0, _utils.validProgress)(successPercent);
  return [successPercent, (0, _utils.validProgress)(ptg - successPtg)];
}

function getStrokeColor(_ref2) {
  var success = _ref2.success,
      strokeColor = _ref2.strokeColor,
      successPercent = _ref2.successPercent;
  var color = strokeColor || null;
  /** @deprecated Use `percent` instead */

  if (success && 'progress' in success) {
    successPercent = success.progress;
  }

  if (success && 'percent' in success) {
    successPercent = success.percent;
  }

  if (!successPercent) {
    return color;
  }

  return [null, color];
}

var Circle = function Circle(props) {
  var prefixCls = props.prefixCls,
      width = props.width,
      strokeWidth = props.strokeWidth,
      trailWidth = props.trailwidth,
      trailColor = props.trailColor,
      strokeLinecap = props.strokeLinecap,
      gapPosition = props.gapPosition,
      gapDegree = props.gapDegree,
      type = props.type,
      children = props.children;
  var circleSize = width || 120;
  var circleStyle = {
    width: circleSize,
    height: circleSize,
    fontSize: circleSize * 0.15 + 6
  };
  var circleWidth = strokeWidth || 6;
  var trailWidth = trailWidth || 6
  var gapPos = gapPosition || type === 'dashboard' && 'bottom' || 'top'; // Support gapDeg = 0 when type = 'dashboard'

  var gapDeg;

  if (gapDegree || gapDegree === 0) {
    gapDeg = gapDegree;
  } else if (type === 'dashboard') {
    gapDeg = 75;
  } // using className to style stroke color


  var strokeColor = getStrokeColor(props);
  var isGradient = Object.prototype.toString.call(strokeColor) === '[object Object]';
  var wrapperClassName = (0, _classnames["default"])("".concat(prefixCls, "-inner"), (0, _defineProperty2["default"])({}, "".concat(prefixCls, "-circle-gradient"), isGradient));
  return /*#__PURE__*/React.createElement("div", {
    className: wrapperClassName,
    style: circleStyle
  }, /*#__PURE__*/React.createElement(_rcProgress.Circle, {
    percent: getPercentage(props),
    strokeWidth: circleWidth,
    trailWidth: trailWidth,
    strokeColor: strokeColor,
    strokeLinecap: strokeLinecap,
    trailColor: trailColor,
    prefixCls: prefixCls,
    gapDegree: gapDeg,
    gapPosition: gapPos
  }), children);
};

var _default = Circle;
exports["default"] = _default;