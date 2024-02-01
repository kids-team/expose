/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/_externalForm/Fields/Checkbox.tsx":
/*!***********************************************!*\
  !*** ./src/_externalForm/Fields/Checkbox.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);


const Checkbox = props => {
  const {
    label,
    width,
    onChange,
    type,
    value
  } = props;
  const inputRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const onChangeHandler = event => {
    onChange(event.target.checked);
  };
  const setInvalidity = event => {
    if (!props.customError) return;
    event.target.setCustomValidity(props.customError);
  };
  const reset = () => {
    if (!inputRef.current) return;
    inputRef.current.checked = false;
  };
  const toggle = type === 'toggle';
  const classes = ['ctx-form-field', toggle ? 'toggle' : 'checkbox', 'input--width-' + width].join(' ');
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: classes
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "toggle__control"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    disabled: props.disabled,
    required: props.required,
    ref: inputRef,
    checked: value,
    type: "checkbox",
    onChange: onChangeHandler,
    onInvalid: setInvalidity
  }), toggle && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "toggle__switch"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, label)), !inputRef?.current?.validity.valid && inputRef.current?.validationMessage && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "input__error"
  }, inputRef.current?.validationMessage));
};
Checkbox.defaultProps = {
  label: '',
  help: '',
  width: 6,
  disabled: false,
  required: false,
  defaultChecked: false,
  type: 'checkbox'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Checkbox);

/***/ }),

/***/ "./src/_externalForm/Fields/Combobox.tsx":
/*!***********************************************!*\
  !*** ./src/_externalForm/Fields/Combobox.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const Combobox = props => {
  const {
    onChange,
    options,
    hasEmptyOption,
    help,
    hint,
    disabled,
    placeholder,
    multiple,
    required,
    label,
    name,
    width
  } = props;
  const classes = ['ctx-form-field', 'select', 'input--width-' + width, props.required ? 'select--required' : ''].join(' ');
  const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const onChangeHandler = event => {
    onChange(event.target.value);
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: classes
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, label), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("select", {
    name: name,
    required: required,
    onChange: onChangeHandler,
    autoComplete: hint,
    disabled: disabled,
    multiple: multiple,
    defaultValue: placeholder
  }, hasEmptyOption && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "",
    disabled: true
  }, help !== null && help !== void 0 ? help : 'Make a selection'), options && options.map((option, index) => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
      key: index
    }, option);
  })), !inputRef?.current?.validity.valid && inputRef.current?.validationMessage && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "input__error"
  }, inputRef.current?.validationMessage));
};
Combobox.defaultProps = {
  label: '',
  placeholder: '',
  name: '',
  required: false,
  width: 6,
  region: 'world'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Combobox);

/***/ }),

/***/ "./src/_externalForm/Fields/Country.tsx":
/*!**********************************************!*\
  !*** ./src/_externalForm/Fields/Country.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);


const browserLanguage = navigator.language.split('-')[0];
const Country = props => {
  const {
    onChange,
    emptyOption,
    disabled,
    placeholder,
    required,
    name,
    label,
    width,
    region
  } = props;
  const classes = ['ctx-form-field', 'select', 'input--width-' + width, props.required ? 'select--required' : ''].join(' ');
  const inputRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const [countries, setCountries] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const [selectedCountry, setSelectedCountry] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(placeholder);
  const fetchCountries = async () => {
    const response = await fetch(`https://countries.kids-team.com/countries/${region}/${browserLanguage}`);
    const data = await response.json();
    const countryList = Object.entries(data).map(([key, name], index) => {
      return {
        value: key,
        label: name
      };
    });
    setCountries(countryList);
  };
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    fetchCountries();
  }, []);
  const onChangeHandler = event => {
    setSelectedCountry(event.target.value);
    onChange(event.target.value);
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: classes
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, label), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("select", {
    name: name,
    required: required,
    disabled: disabled,
    onChange: onChangeHandler,
    ref: inputRef,
    value: selectedCountry
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "",
    disabled: true
  }, emptyOption !== null && emptyOption !== void 0 ? emptyOption : 'Make a selection'), countries.map((country, index) => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
      key: index,
      value: country.value
    }, country.label);
  })), !inputRef?.current?.validity.valid && inputRef.current?.validationMessage && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "input__error"
  }, inputRef.current?.validationMessage));
};
Country.defaultProps = {
  label: '',
  placeholder: '',
  name: '',
  required: false,
  width: 6,
  region: 'world'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Country);

/***/ }),

/***/ "./src/_externalForm/Fields/Hidden.tsx":
/*!*********************************************!*\
  !*** ./src/_externalForm/Fields/Hidden.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const HiddenInput = props => {
  const {
    defaultValue,
    name
  } = props;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    value: defaultValue,
    name: name,
    type: "hidden"
  });
};
HiddenInput.defaultProps = {
  name: ''
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HiddenInput);

/***/ }),

/***/ "./src/_externalForm/Fields/HtmlBlock.tsx":
/*!************************************************!*\
  !*** ./src/_externalForm/Fields/HtmlBlock.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const HTMLBlock = props => {
  const {
    content,
    width
  } = props;
  const classes = ['ctx-form-field', 'core-block', 'ctx-form-field-w' + width].join(' ');
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: classes,
    dangerouslySetInnerHTML: {
      __html: content
    }
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HTMLBlock);

/***/ }),

/***/ "./src/_externalForm/Fields/Input.tsx":
/*!********************************************!*\
  !*** ./src/_externalForm/Fields/Input.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);


const TextInput = props => {
  const [touched, setTouched] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const inputRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const {
    label,
    required,
    width,
    onChange
  } = props;
  const onChangeHandler = event => {
    onChange(event.target.value);
  };
  const setInvalidity = event => {
    if (!props.customError) return;
    event.target.setCustomValidity(props.customError);
  };
  const classes = ['ctx-form-field', 'input', 'input--width-' + width, required ? 'input--required' : '', !inputRef?.current?.validity.valid && touched ? 'error' : ''].join(' ');
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: classes
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, label), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    placeholder: props.placeholder,
    name: props.name,
    required: required,
    onBlur: () => setTouched(true),
    type: props.type,
    autoComplete: props.autoComplete,
    disabled: props.disabled,
    pattern: props.pattern ? props.pattern : undefined,
    defaultValue: props.defaultValue,
    ref: inputRef,
    onInvalid: setInvalidity,
    onChange: onChangeHandler
  }), !inputRef?.current?.validity.valid && touched && inputRef.current?.validationMessage && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "error-message"
  }, inputRef.current?.validationMessage));
};
TextInput.defaultProps = {
  label: '',
  placeholder: '',
  name: '',
  required: false,
  width: 6,
  type: 'text',
  pattern: null
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TextInput);

/***/ }),

/***/ "./src/_externalForm/Fields/Number.tsx":
/*!*********************************************!*\
  !*** ./src/_externalForm/Fields/Number.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);


const NumberInput = props => {
  const {
    label,
    placeholder,
    name,
    required,
    width,
    min,
    max,
    disabled,
    hasTicks,
    hasLabels,
    onChange
  } = props;
  const [rangeValue, setRangeValue] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(parseInt(placeholder));
  const rangeRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const onChangeHandler = event => {
    setRangeValue(parseInt(event.target.value));
    onChange(event.target.value);
  };
  const classes = ['ctx-form-field', 'range', 'range--ticks', 'input--width-' + width, required ? 'input--required' : ''].join(' ');
  const rangeStyle = {
    backgroundSize: (rangeValue - min) * 100 / (max - min) + '% 100%'
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: classes
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, label), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "range__set"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "range__control"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    value: rangeValue,
    name: name,
    required: required,
    disabled: disabled,
    type: "range",
    max: max,
    min: min,
    style: rangeStyle,
    ref: rangeRef,
    onChange: onChangeHandler
  }), hasTicks && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "range__ticks"
  }, [...Array(max - min + 1)].map((e, i) => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "range__tick",
      key: i
    });
  })), hasLabels && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "range__labels"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "range__label"
  }, min), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "range__label"
  }, max))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "range__value"
  }, rangeValue))));
};
NumberInput.defaultProps = {
  label: '',
  placeholder: 0,
  name: '',
  required: false,
  width: 6,
  min: 0,
  max: 100,
  style: 'input',
  hasLabels: false,
  hasTicks: false
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NumberInput);

/***/ }),

/***/ "./src/_externalForm/Fields/Radio.tsx":
/*!********************************************!*\
  !*** ./src/_externalForm/Fields/Radio.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const Radio = props => {
  const {
    onChange,
    options,
    name,
    disabled,
    placeholder,
    width
  } = props;
  const classes = ['ctx-form-field', 'radio', 'input--width-' + width, props.required ? 'select--required' : ''].join(' ');
  const [selection, setSelection] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(placeholder);
  const onChangeHandler = event => {
    setSelection(event.target.value);
    onChange(event.target.value);
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: classes
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("fieldset", {
    name: props.name
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("legend", null, props.label), options && options.map((option, index) => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      key: index,
      htmlFor: name + index
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      checked: selection === option,
      onChange: value => {
        onChangeHandler(value);
      },
      disabled: disabled,
      type: "radio",
      value: option,
      name: name,
      id: name + index
    }), option);
  })));
};
Radio.defaultProps = {
  label: '',
  placeholder: '',
  name: '',
  options: [],
  required: false,
  width: 6,
  region: 'world'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Radio);

/***/ }),

/***/ "./src/_externalForm/Fields/Select.tsx":
/*!*********************************************!*\
  !*** ./src/_externalForm/Fields/Select.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const Select = props => {
  const {
    onChange,
    options,
    hasEmptyOption,
    help,
    hint,
    disabled,
    placeholder,
    multiple,
    required,
    label,
    name,
    width
  } = props;
  const classes = ['ctx-form-field', 'select', 'input--width-' + width, props.required ? 'select--required' : ''].join(' ');
  const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const onChangeHandler = event => {
    onChange(event.target.value);
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: classes
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, label), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("select", {
    name: name,
    required: required,
    onChange: onChangeHandler,
    autoComplete: hint,
    disabled: disabled,
    multiple: multiple,
    defaultValue: placeholder
  }, hasEmptyOption && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "",
    disabled: true
  }, help !== null && help !== void 0 ? help : 'Make a selection'), options && options.map((option, index) => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
      key: index
    }, option);
  })), !inputRef?.current?.validity.valid && inputRef.current?.validationMessage && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "input__error"
  }, inputRef.current?.validationMessage));
};
Select.defaultProps = {
  label: '',
  placeholder: '',
  name: '',
  required: false,
  width: 6,
  region: 'world'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Select);

/***/ }),

/***/ "./src/_externalForm/Fields/Submit.tsx":
/*!*********************************************!*\
  !*** ./src/_externalForm/Fields/Submit.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const Submit = props => {
  const {
    label,
    width,
    alignment,
    disabled
  } = props;
  const classes = ['ctx-form-field', 'flex', 'input--width-' + width, 'flex--align-center', alignment == 'right' ? 'flex--justify-end' : ''].join(' ');
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: classes
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    className: "button button--primary",
    type: "submit",
    value: label,
    disabled: disabled
  }));
};
Submit.defaultProps = {
  label: '',
  width: 6
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Submit);

/***/ }),

/***/ "./src/_externalForm/Fields/TextArea.tsx":
/*!***********************************************!*\
  !*** ./src/_externalForm/Fields/TextArea.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);


const TextArea = props => {
  const {
    label,
    placeholder,
    name,
    required,
    width,
    rows,
    disabled,
    onChange
  } = props;
  const textInputRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const onChangeHandler = event => {
    onChange(event.target.value);
  };
  const classes = ['ctx-form-field', 'textarea', 'input--width-' + width, required ? 'input--required' : ''].join(' ');
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: classes
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, label), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("textarea", {
    name: name,
    required: required,
    disabled: disabled,
    rows: rows,
    ref: textInputRef,
    placeholder: placeholder,
    onChange: onChangeHandler
  }), !textInputRef?.current?.validity.valid && textInputRef.current?.validationMessage && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "input__error"
  }, textInputRef.current?.validationMessage));
};
TextArea.defaultProps = {
  label: '',
  placeholder: '',
  name: '',
  required: false,
  width: 6,
  rows: 3
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TextArea);

/***/ }),

/***/ "./src/_externalForm/Form.tsx":
/*!************************************!*\
  !*** ./src/_externalForm/Form.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _InputField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./InputField */ "./src/_externalForm/InputField.tsx");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss */ "./src/_externalForm/style.scss");




const Form = props => {
  var _response$message$htm;
  const {
    data,
    formUrl,
    onSubmit,
    submitUrl,
    onChange,
    onStateChange,
    extraData,
    onSubmissionFinished
  } = props;
  const [status, setStatus] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)('LOADING');
  const [fields, setFields] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const [form, setForm] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)({});
  const [response, setResponse] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)();
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    onStateChange?.(status);
  }, [status]);
  const formRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (!formUrl && data) {
      setFields(data);
      setStatus('LOADED');
      return;
    }
    fetch(formUrl).then(response => response.json()).then(data => {
      setFields(data.fields);
      setStatus('LOADED');
      const fieldTemplate = {};
      data.fields.forEach(field => {
        fieldTemplate[field.name] = field.defaultValue;
      });
      setForm(fieldTemplate);
    });
  }, [data, formUrl]);
  if (fields.length == 0) return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null);
  const handleSubmit = event => {
    const formData = {
      ...form,
      ...extraData
    };
    event.preventDefault();
    if (onSubmit) {
      onSubmit(event, formData);
      return;
    }
    if (!formRef.current?.checkValidity()) {
      if (formRef.current && formRef.current.reportValidity) {
        formRef.current.reportValidity();
        return;
      }
    }
    if (!submitUrl) {
      console.error('wp-react-form', 'No URL or onSubmit callback provided');
      return;
    }
    if (status == 'SUBMITTING' || status == 'SUCCESS') return;
    setStatus('SUBMITTING');
    fetch(submitUrl, {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => response.json()).then(data => {
      setStatus(data.success ? 'SUCCESS' : 'ERROR');
      setResponse(data);
      onSubmissionFinished?.(data);
      formRef.current?.reset();
    });
  };
  const resetForm = () => {
    setStatus('LOADED');
    const fieldTemplate = {};
    fields.forEach(field => {
      fieldTemplate[field.name] = field.defaultValue;
    });
    setForm(fieldTemplate);
  };
  if (status == 'LOADING') return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null);
  const onFormChange = event => {
    if (onChange) {
      onChange(form);
    }
  };
  const style = {
    gridTemplateColumns: 'repeat(6, minmax(0, 1fr))'
  };
  const classes = ['ctx-form', status == 'LOADED' ? 'ctx-form--loaded' : '', status == 'ERROR' ? 'ctx-form--error' : '', status == 'SUBMITTING' ? 'ctx-form--submitting' : '', status == 'SUCCESS' ? 'ctx-form--submitted' : ''].join(' ');
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("form", {
    className: classes,
    ref: formRef,
    style: style,
    onSubmit: handleSubmit,
    onChange: onFormChange,
    onReset: resetForm
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `ctx-form__response ${response?.message?.html ? 'ctx-form__response--show' : ''}`,
    dangerouslySetInnerHTML: {
      __html: (_response$message$htm = response?.message?.html) !== null && _response$message$htm !== void 0 ? _response$message$htm : ''
    }
  }), fields.map((field, index) => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_InputField__WEBPACK_IMPORTED_MODULE_2__["default"], {
      ...field,
      status: status,
      disabled: status == 'SUBMITTING',
      key: index,
      value: form[field.name],
      onChange: value => {
        setForm(fields => {
          return {
            ...fields,
            [field.name]: value
          };
        });
      }
    });
  })));
};
Form.defaultProps = {
  id: 0,
  lang: 'en',
  data: [],
  formUrl: '',
  onSubmit: null,
  validate: true,
  submitUrl: ''
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Form);

/***/ }),

/***/ "./src/_externalForm/InputField.tsx":
/*!******************************************!*\
  !*** ./src/_externalForm/InputField.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Fields_Checkbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Fields/Checkbox */ "./src/_externalForm/Fields/Checkbox.tsx");
/* harmony import */ var _Fields_Combobox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Fields/Combobox */ "./src/_externalForm/Fields/Combobox.tsx");
/* harmony import */ var _Fields_Country__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Fields/Country */ "./src/_externalForm/Fields/Country.tsx");
/* harmony import */ var _Fields_Hidden__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Fields/Hidden */ "./src/_externalForm/Fields/Hidden.tsx");
/* harmony import */ var _Fields_HtmlBlock__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Fields/HtmlBlock */ "./src/_externalForm/Fields/HtmlBlock.tsx");
/* harmony import */ var _Fields_Input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Fields/Input */ "./src/_externalForm/Fields/Input.tsx");
/* harmony import */ var _Fields_Number__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Fields/Number */ "./src/_externalForm/Fields/Number.tsx");
/* harmony import */ var _Fields_Radio__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Fields/Radio */ "./src/_externalForm/Fields/Radio.tsx");
/* harmony import */ var _Fields_Select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Fields/Select */ "./src/_externalForm/Fields/Select.tsx");
/* harmony import */ var _Fields_Submit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Fields/Submit */ "./src/_externalForm/Fields/Submit.tsx");
/* harmony import */ var _Fields_TextArea__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Fields/TextArea */ "./src/_externalForm/Fields/TextArea.tsx");












const InputField = props => {
  const {
    type,
    onChange,
    disabled
  } = props;
  const renderField = () => {
    switch (type) {
      case 'select':
        return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Fields_Select__WEBPACK_IMPORTED_MODULE_9__["default"], {
          ...props,
          onChange: onChange,
          disabled: disabled
        });
      case 'radio':
      case 'options':
        return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Fields_Radio__WEBPACK_IMPORTED_MODULE_8__["default"], {
          ...props,
          onChange: onChange,
          disabled: disabled
        });
      case 'textarea':
        return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Fields_TextArea__WEBPACK_IMPORTED_MODULE_11__["default"], {
          ...props,
          onChange: onChange,
          disabled: disabled
        });
      case 'checkbox':
      case 'toggle':
        return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Fields_Checkbox__WEBPACK_IMPORTED_MODULE_1__["default"], {
          ...props,
          onChange: onChange,
          disabled: disabled
        });
      case 'country':
        return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Fields_Country__WEBPACK_IMPORTED_MODULE_3__["default"], {
          ...props,
          onChange: onChange,
          disabled: disabled
        });
      case 'combobox':
        return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Fields_Combobox__WEBPACK_IMPORTED_MODULE_2__["default"], {
          ...props,
          onChange: onChange,
          disabled: disabled
        });
      case 'number':
      case 'range':
      case 'numberpicker':
        return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Fields_Number__WEBPACK_IMPORTED_MODULE_7__["default"], {
          ...props,
          onChange: onChange,
          disabled: disabled
        });
      case 'html':
        return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Fields_HtmlBlock__WEBPACK_IMPORTED_MODULE_5__["default"], {
          ...props
        });
      case 'hidden':
        return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Fields_Hidden__WEBPACK_IMPORTED_MODULE_4__["default"], {
          ...props
        });
      case 'submit':
        return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Fields_Submit__WEBPACK_IMPORTED_MODULE_10__["default"], {
          ...props,
          onChange: onChange,
          disabled: disabled,
          type: "submit"
        });
      default:
        return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Fields_Input__WEBPACK_IMPORTED_MODULE_6__["default"], {
          ...props,
          onChange: onChange,
          disabled: disabled
        });
    }
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, renderField(props));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InputField);

/***/ }),

/***/ "./src/_externalNumberPicker/NumberPicker.tsx":
/*!****************************************************!*\
  !*** ./src/_externalNumberPicker/NumberPicker.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/_externalNumberPicker/style.scss");



const NumberPicker = props => {
  const {
    value,
    max,
    min,
    steps,
    onChange
  } = props;
  const changeNumber = value => {
    onChange(value);
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ctx-numberpicker"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "ctx-numberpicker-add",
    onClick: () => {
      if (value > min) {
        changeNumber(value - steps);
      }
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: "20",
    viewBox: "0 -960 960 960",
    width: "20"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M200-440v-80h560v80H200Z"
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("fieldset", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    onChange: event => {
      changeNumber(parseInt(event.target.value));
    },
    className: "ctx-number-picker__number",
    value: value,
    type: "text",
    inputMode: "numeric",
    pattern: "\\d*",
    min: min,
    max: max
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "button--secondary",
    onClick: () => {
      if (value < max) {
        changeNumber(value + steps);
      }
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: "20",
    viewBox: "0 -960 960 960",
    width: "20"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"
  }))));
};
NumberPicker.defaultProps = {
  start: 0,
  max: 100,
  min: 0,
  steps: 1
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NumberPicker);

/***/ }),

/***/ "./src/_externalNumberPicker/index.tsx":
/*!*********************************************!*\
  !*** ./src/_externalNumberPicker/index.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _NumberPicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NumberPicker */ "./src/_externalNumberPicker/NumberPicker.tsx");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_NumberPicker__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/frontend/services/context.js":
/*!******************************************!*\
  !*** ./src/frontend/services/context.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppContext: () => (/* binding */ AppContext),
/* harmony export */   AppProvider: () => (/* binding */ AppProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducer */ "./src/frontend/services/reducer.js");



const AppContext = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createContext)({
  state: _reducer__WEBPACK_IMPORTED_MODULE_2__.initialState,
  dispatch: () => undefined
});
const AppProvider = ({
  children
}) => {
  const [state, dispatch] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useReducer)(_reducer__WEBPACK_IMPORTED_MODULE_2__.reducer, _reducer__WEBPACK_IMPORTED_MODULE_2__.initialState);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(AppContext.Provider, {
    value: {
      state,
      dispatch
    }
  }, children);
};


/***/ }),

/***/ "./src/frontend/services/reducer.js":
/*!******************************************!*\
  !*** ./src/frontend/services/reducer.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initialState: () => (/* binding */ initialState),
/* harmony export */   reducer: () => (/* binding */ reducer)
/* harmony export */ });
const initialState = {
  products: [],
  status: 'INIT',
  formStatus: 'INIT',
  cart: {},
  error: '',
  categories: {},
  tags: {},
  response: '',
  wizzard: {
    step: 0,
    checkValidity: false
  },
  selectedProduct: 0,
  selectedCategory: 0,
  selectedTags: [],
  showOrderModal: false
};
const reducer = (state, action) => {
  const {
    type,
    payload
  } = action;
  switch (type) {
    case 'SET_WIZZARD_STEP':
      state.wizzard.step = payload;
      state.wizzard.checkValidity = true;
      return {
        ...state
      };
    case 'INCREMENT_WIZZARD':
      state.wizzard.step = state.wizzard.step + (payload ? payload : 1);
      state.wizzard.checkValidity = true;
      return {
        ...state
      };
    case 'DECREMENT_WIZZARD':
      state.wizzard.step = state.wizzard.step - (payload ? payload : 1);
      state.wizzard.checkValidity = true;
      return {
        ...state
      };
    case 'SET_PRODUCTS':
      return {
        ...state,
        products: payload
      };
    case 'SET_ORDER_MODAL':
      return {
        ...state,
        showOrderModal: payload
      };
    case 'SET_CATEGORIES':
      return {
        ...state,
        categories: payload
      };
    case 'SET_SELECTED_CATEGORY':
      return {
        ...state,
        selectedCategory: payload
      };
    case 'SET_SELECTED_TAGS':
      return {
        ...state,
        selectedTags: payload
      };
    case 'SET_TAGS':
      return {
        ...state,
        tags: payload
      };
    case 'SET_STATUS':
      state.status = payload;
      return {
        ...state
      };
    case 'SET_FORM_STATUS':
      state.formStatus = payload;
      return {
        ...state
      };
    case 'SET_SELECTED_PRODUCT':
      return {
        ...state,
        selectedProduct: payload
      };
    case 'ADD_TO_CART':
      if (payload.count === 0) {
        delete state.cart[payload.id];
        return {
          ...state
        };
      }
      const oldCount = state.cart[payload.id] || 0;
      console.log('oct', oldCount);
      console.log('plc', payload.count);
      state.cart[payload.id] = payload.count === 1 ? oldCount + 1 : payload.count;
      if (Object.keys(state.cart).length === 0) {
        state.showOrderModal = false;
      }
      return {
        ...state
      };
    case 'REMOVE_FROM_CART':
      delete state.cart[payload.id];
      if (Object.keys(state.cart).length === 0) {
        state.showOrderModal = false;
      }
      return {
        ...state
      };
    case 'SET_RESPONSE':
      return {
        ...state,
        response: payload
      };
    case 'RESET':
      return {
        ...state,
        cart: {},
        wizzard: {
          step: 0,
          checkValidity: false
        },
        status: 'init'
      };
    default:
  }
  return {
    ...state
  };
};

/***/ }),

/***/ "./src/frontend/shop/CartButton.js":
/*!*****************************************!*\
  !*** ./src/frontend/shop/CartButton.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MiniCart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MiniCart */ "./src/frontend/shop/MiniCart.js");



const CartButton = props => {
  const {
    cartSize,
    onClick
  } = props;
  const [showMiniCart, setShowMiniCart] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const className = cartSize ? '' : '';
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ctx-cart-button"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: className,
    onClick: onClick,
    disabled: cartSize == 0
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("em", {
    className: "material-icons"
  }, "shopping_cart"), !!cartSize && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "ctx-cart-button-badge"
  }, cartSize)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MiniCart__WEBPACK_IMPORTED_MODULE_2__["default"], {
    show: cartSize > 0
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CartButton);

/***/ }),

/***/ "./src/frontend/shop/CategoryView.js":
/*!*******************************************!*\
  !*** ./src/frontend/shop/CategoryView.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/context */ "./src/frontend/services/context.js");
/* harmony import */ var _FakeCards__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FakeCards */ "./src/frontend/shop/FakeCards.js");
/* harmony import */ var _ProductCategory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ProductCategory */ "./src/frontend/shop/ProductCategory.js");






const CategoryView = ({
  products,
  className
}) => {
  const {
    state,
    dispatch
  } = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useContext)(_services_context__WEBPACK_IMPORTED_MODULE_3__.AppContext);
  const [showCategory, setShowCategory] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const addToCart = (product, count = 1) => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        id: product,
        count
      }
    });
  };
  const getProductsByCategory = category => {
    return products.filter(product => {
      return product.categories.hasOwnProperty(category);
    });
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, state.status === 'SUCCESS' ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: className
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('All Products', 'expose')), Object.entries(state.categories).map(([key, value]) => {
    const products = getProductsByCategory(key);
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_ProductCategory__WEBPACK_IMPORTED_MODULE_5__["default"], {
      key: key,
      title: value,
      products: products
    });
  })) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: className
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", {
    className: "fake-heading"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ctx-product-grid"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_FakeCards__WEBPACK_IMPORTED_MODULE_4__["default"], {
    count: 3
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", {
    className: "fake-heading"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ctx-product-grid"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_FakeCards__WEBPACK_IMPORTED_MODULE_4__["default"], {
    count: 3
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CategoryView);

/***/ }),

/***/ "./src/frontend/shop/FakeCards.js":
/*!****************************************!*\
  !*** ./src/frontend/shop/FakeCards.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function FakeCards(props) {
  const {
    count
  } = props;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [...Array(count)].map((item, key) => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "fake-card"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "fake-card-image"
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "fake-card-content"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null)));
  }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FakeCards);

/***/ }),

/***/ "./src/frontend/shop/Filter.js":
/*!*************************************!*\
  !*** ./src/frontend/shop/Filter.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/context */ "./src/frontend/services/context.js");





const Filter = ({
  showFilter
}) => {
  const {
    state,
    dispatch
  } = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useContext)(_services_context__WEBPACK_IMPORTED_MODULE_3__.AppContext);
  const selectedCategory = state.selectedCategory;
  const selectedTags = state.selectedTags;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `filters ${showFilter ? '' : 'filters-mobile-hidden'}`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Categories', 'expose')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "pills"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: selectedCategory == 0 ? 'active' : '',
    onClick: () => {
      dispatch({
        type: 'SET_SELECTED_CATEGORY',
        payload: 0
      });
    },
    value: 0
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('All', 'expose')), Object.entries(state.categories).map(([key, value]) => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      className: selectedCategory == key ? 'active' : '',
      onClick: () => {
        dispatch({
          type: 'SET_SELECTED_CATEGORY',
          payload: key
        });
      },
      key: key,
      value: key
    }, value);
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tags"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Tags', 'expose')), Object.entries(state.tags).map(([key, value]) => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "checkbox",
      key: key
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      type: "checkbox",
      value: key,
      onChange: () => {
        if (selectedTags.includes(key)) {
          dispatch({
            type: 'SET_SELECTED_TAGS',
            payload: selectedTags.filter(tag => tag !== key)
          });
        } else {
          dispatch({
            type: 'SET_SELECTED_TAGS',
            payload: [...selectedTags, key]
          });
        }
      }
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, value)));
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Filter);

/***/ }),

/***/ "./src/frontend/shop/ListHeading.js":
/*!******************************************!*\
  !*** ./src/frontend/shop/ListHeading.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/context */ "./src/frontend/services/context.js");





const ListHeading = () => {
  const {
    state
  } = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useContext)(_services_context__WEBPACK_IMPORTED_MODULE_3__.AppContext);
  const getTags = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    const tags = state.selectedTags.map(tag => {
      return state.tags[tag];
    });
    return tags.join(', ');
  });
  if (state.selectedCategory === 0 && state.selectedTags.length === 0) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "ctx-products-category"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('All Products', 'expose')));
  }
  if (state.selectedCategory === 0 && state.selectedTags.length > 0) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "ctx-products-category"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__._n)('Selected Tag:', 'Selected Tags:', state.selectedTags.length, 'expose'), "\xA0", getTags()));
  }
  if (state.selectedCategory !== 0 && state.selectedTags.length > 0) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "ctx-products-category"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, state.categories[state.selectedCategory], "\xA0", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__._n)('with tag:', 'with tags:', state.selectedTags.length, 'expose'), "\xA0", getTags()));
  }
  if (state.selectedCategory !== 0) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "ctx-products-category"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, state.categories[state.selectedCategory]));
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ListHeading);

/***/ }),

/***/ "./src/frontend/shop/ListView.js":
/*!***************************************!*\
  !*** ./src/frontend/shop/ListView.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/context */ "./src/frontend/services/context.js");
/* harmony import */ var _FakeCards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FakeCards */ "./src/frontend/shop/FakeCards.js");
/* harmony import */ var _ProductCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ProductCard */ "./src/frontend/shop/ProductCard.js");





const ListView = ({
  products,
  className
}) => {
  const {
    state,
    dispatch
  } = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useContext)(_services_context__WEBPACK_IMPORTED_MODULE_2__.AppContext);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, state.status === 'SUCCESS' ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `ctx-product-grid ${className}`
  }, products.map(product => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_ProductCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: product.id,
      product: product
    });
  })) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `ctx-product-grid ${className}`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_FakeCards__WEBPACK_IMPORTED_MODULE_3__["default"], {
    count: 6
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ListView);

/***/ }),

/***/ "./src/frontend/shop/MiniCart.js":
/*!***************************************!*\
  !*** ./src/frontend/shop/MiniCart.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/context */ "./src/frontend/services/context.js");




const MiniCart = props => {
  const show = props.show;
  const {
    state,
    dispatch
  } = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useContext)(_services_context__WEBPACK_IMPORTED_MODULE_3__.AppContext);
  const hasProducts = Object.keys(state.cart).length > 0;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, hasProducts && !state.showOrderModal ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `ctx-minicart`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Cart', 'expose')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ctx-minicart-content"
  }, Object.keys(state.cart).map((id, key) => {
    const product = state.products.find(product => product.id == id);
    const quantity = state.cart[id];
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "ctx-minicart-product",
      key: key
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "ctx-minicart-product-image"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: product?._embedded['wp:featuredmedia'][0].media_details.sizes.thumbnail.source_url
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "ctx-minicart-product-content"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", null, product?.title.rendered)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "ctx-minicart-product-footer"
    }, quantity, " ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('pcs.', 'expose')));
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ctx-minicart-footer"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    onClick: () => {
      dispatch({
        type: 'SET_ORDER_MODAL',
        payload: true
      });
    },
    className: "button button--primary"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Checkout', 'expose')))) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MiniCart);

/***/ }),

/***/ "./src/frontend/shop/OrderModal.js":
/*!*****************************************!*\
  !*** ./src/frontend/shop/OrderModal.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _externalNumberPicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_externalNumberPicker */ "./src/_externalNumberPicker/index.tsx");
/* harmony import */ var _services_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/context */ "./src/frontend/services/context.js");
/* harmony import */ var _externalForm_Form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../_externalForm/Form */ "./src/_externalForm/Form.tsx");






const OrderModal = props => {
  const {
    state,
    dispatch
  } = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useContext)(_services_context__WEBPACK_IMPORTED_MODULE_4__.AppContext);
  const closeModel = event => {
    event.bubbles = false;
    if (event.target !== event.currentTarget) return;
    dispatch({
      type: 'SET_ORDER_MODAL',
      payload: false
    });
  };
  const setCartItem = (id, count) => {
    const type = count == 0 ? 'REMOVE_FROM_CART' : 'ADD_TO_CART';
    dispatch({
      type,
      payload: {
        id,
        count
      }
    });
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `ctx-order-modal ${state.showOrderModal ? 'open' : ''}`,
    onClick: event => {
      closeModel(event);
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ctx-order-modal-window"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ctx-order-modal-header"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Order', 'expose')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    onClick: () => {
      dispatch({
        type: 'SET_ORDER_MODAL',
        payload: false
      });
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    className: "material-icons"
  }, "close"))), state.formStatus !== 'SUCCESS' ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ctx-order-modal-content"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ctx-order-modal-summary"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Order Summary', 'expose')), Object.keys(state.cart).map((id, key) => {
    const product = state.products.find(product => product.id == id);
    const quantity = state.cart[id];
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "ctx-order-modal-product",
      key: key
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "ctx-order-modal-product-image"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: product?._embedded['wp:featuredmedia'][0].media_details.sizes.thumbnail.source_url
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "ctx-order-modal-product-content"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", null, product?.title.rendered), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      dangerouslySetInnerHTML: {
        __html: product?.content.rendered
      }
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "ctx-order-modal-product-footer"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "ctx-order-modal-product-actions"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_externalNumberPicker__WEBPACK_IMPORTED_MODULE_3__["default"], {
      value: quantity,
      onChange: value => setCartItem(id, value),
      min: 0,
      steps: 1
    }))));
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "form ctx-order-modal-form"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Order Form', 'expose')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_externalForm_Form__WEBPACK_IMPORTED_MODULE_5__["default"], {
    formUrl: props.formId ? `/wp-json/gbf-form/v2/form/${props.formId}` : '/wp-json/order/vs/form',
    extraData: {
      products: state.cart
    },
    submitUrl: "/wp-json/expose/v2/order",
    onSubmissionFinished: response => {
      console.log(response);
      dispatch({
        type: 'SET_FORM_STATUS',
        payload: 'SUCCESS'
      });
      dispatch({
        type: 'SET_RESPONSE',
        payload: response.data
      });
      dispatch({
        type: 'RESET'
      });
    }
  }))) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ctx-order-modal-success",
    dangerouslySetInnerHTML: {
      __html: state.response
    }
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OrderModal);

/***/ }),

/***/ "./src/frontend/shop/ProductCard.js":
/*!******************************************!*\
  !*** ./src/frontend/shop/ProductCard.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/context */ "./src/frontend/services/context.js");




const ProductCard = props => {
  const {
    product,
    onCartClick
  } = props;
  const {
    state,
    dispatch
  } = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useContext)(_services_context__WEBPACK_IMPORTED_MODULE_3__.AppContext);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    key: product.id,
    className: "ctx-product-card"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ctx-product-card-image"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: product._embedded['wp:featuredmedia'][0].source_url
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ctx-product-card-content"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", null, product.title.rendered), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    dangerouslySetInnerHTML: {
      __html: product.content.rendered
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ctx-product-card-footer"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "button button--secondary",
    onClick: () => {
      dispatch({
        type: 'SET_SELECTED_PRODUCT',
        payload: product.id
      });
    }
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Details', 'expose'))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ctx-product-card-actions"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "ctx-product-card-add",
    onClick: () => dispatch({
      type: 'ADD_TO_CART',
      payload: {
        id: product.id,
        count: 1
      }
    })
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("em", {
    className: "material-icons"
  }, "add_shopping_cart"))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductCard);

/***/ }),

/***/ "./src/frontend/shop/ProductCategory.js":
/*!**********************************************!*\
  !*** ./src/frontend/shop/ProductCategory.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/context */ "./src/frontend/services/context.js");
/* harmony import */ var _ProductCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProductCard */ "./src/frontend/shop/ProductCard.js");




const ProductCategory = props => {
  const {
    products,
    onCartClick,
    title
  } = props;
  const {
    state,
    dispatch
  } = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useContext)(_services_context__WEBPACK_IMPORTED_MODULE_2__.AppContext);
  const [showCategory, setShowCategory] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const addToCart = (product, count = 1) => {
    if (count == 0) return dispatch({
      type: 'REMOVE_FROM_CART',
      payload: {
        id: product,
        count
      }
    });
    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        id: product,
        count
      }
    });
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `ctx-products-category ${showCategory ? '' : 'hidden'}`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    onClick: () => {
      setShowCategory(!showCategory);
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    className: "material-icons"
  }, "keyboard_arrow_down")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", null, title)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `ctx-product-grid-wrapper ${showCategory ? '' : 'hidden'}`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ctx-product-grid"
  }, products.map(product => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_ProductCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: product.id,
      product: product,
      onCartClick: () => addToCart(product.id, quantity)
    });
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductCategory);

/***/ }),

/***/ "./src/frontend/shop/ProductModal.js":
/*!*******************************************!*\
  !*** ./src/frontend/shop/ProductModal.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _externalNumberPicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_externalNumberPicker */ "./src/_externalNumberPicker/index.tsx");
/* harmony import */ var _services_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/context */ "./src/frontend/services/context.js");





const ProductModal = props => {
  const {
    state,
    dispatch
  } = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useContext)(_services_context__WEBPACK_IMPORTED_MODULE_4__.AppContext);
  const [product, setProduct] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const [status, setStatus] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)('INIT');
  const [quantity, setQuantity] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(1);
  const id = state.selectedProduct;
  const closeModel = event => {
    event.bubbles = false;
    if (event.target !== event.currentTarget) return;
    dispatch({
      type: 'SET_SELECTED_PRODUCT',
      payload: 0
    });
  };
  const addToCart = (product, count = 1) => {
    if (count == 0) return dispatch({
      type: 'REMOVE_FROM_CART',
      payload: {
        id: product,
        count
      }
    });
    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        id: product,
        count
      }
    });
  };
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (!id) return;
    setStatus('LOADING');
    fetch(`/wp-json/wp/v2/ctx-products/${id}`).then(response => response.json()).then(data => {
      setProduct(data);
      setStatus('LOADED');
    });
  }, [id]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'ctx-order-modal ' + (id ? 'open' : ''),
    onClick: event => {
      closeModel(event);
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ctx-order-modal-window"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ctx-order-modal-headerimage"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: product?.images?.full
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, product?.title.rendered), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    onClick: () => {
      dispatch({
        type: 'SET_SELECTED_PRODUCT',
        payload: 0
      });
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    className: "material-icons"
  }, "close"))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    alt: product?.title.raw
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    dangerouslySetInnerHTML: {
      __html: product?.content?.rendered
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ctx-order-modal-footer"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "button button--secondary",
    onClick: () => {
      dispatch({
        type: 'SET_SELECTED_PRODUCT',
        payload: 0
      });
    }
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Close', 'expose')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ctx-order-modal-actions"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_externalNumberPicker__WEBPACK_IMPORTED_MODULE_3__["default"], {
    value: quantity,
    onChange: value => setQuantity(value),
    min: 1
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "ctx-product-card-add",
    onClick: () => addToCart(product.id, quantity)
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("em", {
    className: "material-icons"
  }, "add_shopping_cart"))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductModal);

/***/ }),

/***/ "./src/frontend/shop/Shop.js":
/*!***********************************!*\
  !*** ./src/frontend/shop/Shop.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/url */ "@wordpress/url");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _services_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/context */ "./src/frontend/services/context.js");
/* harmony import */ var _CartButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CartButton */ "./src/frontend/shop/CartButton.js");
/* harmony import */ var _CategoryView__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./CategoryView */ "./src/frontend/shop/CategoryView.js");
/* harmony import */ var _Filter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Filter */ "./src/frontend/shop/Filter.js");
/* harmony import */ var _ListHeading__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ListHeading */ "./src/frontend/shop/ListHeading.js");
/* harmony import */ var _ListView__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ListView */ "./src/frontend/shop/ListView.js");
/* harmony import */ var _OrderModal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./OrderModal */ "./src/frontend/shop/OrderModal.js");
/* harmony import */ var _ProductModal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ProductModal */ "./src/frontend/shop/ProductModal.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./style.scss */ "./src/frontend/shop/style.scss");















const Shop = ({
  attributes,
  category
}) => {
  var _attributes$form;
  const {
    state,
    dispatch
  } = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useContext)(_services_context__WEBPACK_IMPORTED_MODULE_6__.AppContext);
  const [filteredProducts, setFilteredProducts] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
  const [selectedProduct, setSelectedProduct] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(0);
  const [showFilter, setShowFilter] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const selectedCategory = state.selectedCategory;
  const selectedTags = state.selectedTags;
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    const queryParams = {
      _embed: true,
      per_page: 100
    };
    queryParams['product-categories'] = selectedCategory ? selectedCategory : undefined;
    queryParams['product-tags'] = selectedTags.length ? selectedTags.join(',') : undefined;
    dispatch({
      type: 'SET_STATUS',
      payload: 'LOADING'
    });
    _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default()({
      path: (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_4__.addQueryArgs)('wp/v2/ctx-products', queryParams)
    }).then(posts => {
      dispatch({
        type: 'SET_PRODUCTS',
        payload: posts
      });
      dispatch({
        type: 'SET_STATUS',
        payload: 'SUCCESS'
      });
    });
  }, [selectedCategory, selectedTags]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default()({
      path: 'wp/v2/product-categories'
    }).then(categories => {
      const result = {};
      for (const category of categories) {
        result[category.id] = category.name;
      }
      dispatch({
        type: 'SET_CATEGORIES',
        payload: result
      });
      if (category) {
        console.log(category);
        Object.entries(result).forEach(([key, value]) => {
          console.log(key, value);
          if (value.toLowerCase() === category.toLowerCase()) {
            dispatch({
              type: 'SET_SELECTED_CATEGORY',
              payload: key
            });
          }
        });
      }
    });
    _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default()({
      path: 'wp/v2/product-tags'
    }).then(tags => {
      const result = {};
      for (const tag of tags) {
        result[tag.id] = tag.name;
      }
      dispatch({
        type: 'SET_TAGS',
        payload: result
      });
    });
  }, []);
  const filterProducts = event => {
    const filter = event.target.value;
    const result = state.products.filter(product => {
      return product.title.rendered.toLowerCase().includes(filter.toLowerCase());
    });
    setFilteredProducts(result);
  };
  const products = filteredProducts.length ? filteredProducts : state.products;
  const cartSize = Object.keys(state.cart).length;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "shop"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "shop-sidebar"
  }, attributes.showSearchbar ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "shop-sidebar-header"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "input"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Search', 'expose')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "search",
    onChange: filterProducts
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "button mobile-filter-toggle",
    onClick: () => {
      setShowFilter(!showFilter);
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    className: "material-icons"
  }, "tune"))), attributes.showFilter ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Filter__WEBPACK_IMPORTED_MODULE_9__["default"], {
    showFilter: showFilter
  }) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null)) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null), (0,react_dom__WEBPACK_IMPORTED_MODULE_5__.createPortal)((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_CartButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
    cartSize: cartSize,
    onClick: () => {
      dispatch({
        type: 'SET_ORDER_MODAL',
        payload: true
      });
    }
  }), document.getElementById('ctx-cart-button')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null)), attributes.sortByCategory && selectedCategory === 0 && selectedTags.length === 0 ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_CategoryView__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: "shop-content",
    products: products,
    onDetails: id => setSelectedProduct(id)
  }) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "shop-content"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_ListHeading__WEBPACK_IMPORTED_MODULE_10__["default"], null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_ListView__WEBPACK_IMPORTED_MODULE_11__["default"], {
    products: products,
    onDetails: id => setSelectedProduct(id)
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_ProductModal__WEBPACK_IMPORTED_MODULE_13__["default"], null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_OrderModal__WEBPACK_IMPORTED_MODULE_12__["default"], {
    formId: (_attributes$form = attributes.form) !== null && _attributes$form !== void 0 ? _attributes$form : 0
  }));
};
Shop.defaultProps = {};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Shop);

/***/ }),

/***/ "./src/shop.js":
/*!*********************!*\
  !*** ./src/shop.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _frontend_services_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./frontend/services/context */ "./src/frontend/services/context.js");
/* harmony import */ var _frontend_shop_Shop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./frontend/shop/Shop */ "./src/frontend/shop/Shop.js");




document.addEventListener('DOMContentLoaded', () => {
  const rootElement = document.getElementById('ctx-products-shop');
  if (rootElement) {
    const attributes = JSON.parse(rootElement.dataset.attributes);
    const root = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createRoot)(rootElement);
    const hash = window.location.hash;
    const category = hash ? hash.replace('#', '') : '';
    const cartButton = document.getElementById('ctx-cart-button');
    cartButton?.classList.add('has-cart');
    root.render((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_frontend_services_context__WEBPACK_IMPORTED_MODULE_2__.AppProvider, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_frontend_shop_Shop__WEBPACK_IMPORTED_MODULE_3__["default"], {
      attributes: attributes,
      category: category
    }))));
  }
});

/***/ }),

/***/ "./src/_externalForm/style.scss":
/*!**************************************!*\
  !*** ./src/_externalForm/style.scss ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/_externalNumberPicker/style.scss":
/*!**********************************************!*\
  !*** ./src/_externalNumberPicker/style.scss ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/frontend/shop/style.scss":
/*!**************************************!*\
  !*** ./src/frontend/shop/style.scss ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ ((module) => {

module.exports = window["ReactDOM"];

/***/ }),

/***/ "@wordpress/api-fetch":
/*!**********************************!*\
  !*** external ["wp","apiFetch"] ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["wp"]["apiFetch"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "@wordpress/url":
/*!*****************************!*\
  !*** external ["wp","url"] ***!
  \*****************************/
/***/ ((module) => {

module.exports = window["wp"]["url"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"shop": 0,
/******/ 			"./style-shop": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkctx_products"] = globalThis["webpackChunkctx_products"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-shop"], () => (__webpack_require__("./src/shop.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=shop.js.map