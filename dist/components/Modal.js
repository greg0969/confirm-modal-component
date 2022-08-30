"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _close = _interopRequireDefault(require("./close.svg"));

var _ModalModule = _interopRequireDefault(require("./Modal.module.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const Modal = _ref => {
  let {
    children,
    showIcon,
    show,
    setShow,
    closeAnywhere,
    overlayClassname,
    sectionClassname,
    iconClassname,
    overlayStyle,
    sectionStyle,
    iconStyle
  } = _ref;
  const modalRef = (0, _react.useRef)();

  const handleClickOutside = e => {
    if (show && closeAnywhere && !modalRef.current.contains(e.target)) {
      setShow(false);
    }
  };

  const handleEscape = e => {
    if (show && e.key === "Escape" || e.key === "Esc") {
      setShow(false);
    }
  };

  (0, _react.useEffect)(() => {
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  });
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(_ModalModule.default.overlay, " ").concat(show ? _ModalModule.default.show : _ModalModule.default.hide, " ").concat(overlayClassname !== null && overlayClassname !== void 0 ? overlayClassname : null),
    style: overlayStyle !== null && overlayStyle !== void 0 ? overlayStyle : null
  }, /*#__PURE__*/_react.default.createElement("section", {
    className: "".concat(_ModalModule.default.content, " ").concat(sectionClassname !== null && sectionClassname !== void 0 ? sectionClassname : null),
    ref: closeAnywhere ? modalRef : null,
    style: sectionStyle !== null && sectionStyle !== void 0 ? sectionStyle : null
  }, showIcon && /*#__PURE__*/_react.default.createElement("img", {
    src: _close.default,
    alt: "close modal",
    className: "".concat(_ModalModule.default.close, " ").concat(iconClassname !== null && iconClassname !== void 0 ? iconClassname : null),
    style: iconStyle !== null && iconStyle !== void 0 ? iconStyle : null,
    onClick: () => setShow(false)
  }), children));
};

var _default = Modal;
exports.default = _default;