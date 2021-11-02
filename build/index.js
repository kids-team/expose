(window["webpackJsonp_ctx_products"] = window["webpackJsonp_ctx_products"] || []).push([["style-index"],{

/***/ "./src/blocks/shop/style.scss":
/*!************************************!*\
  !*** ./src/blocks/shop/style.scss ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/common/styles/style.scss":
/*!**************************************!*\
  !*** ./src/common/styles/style.scss ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

}]);

/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"index": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp_ctx_products"] = window["webpackJsonp_ctx_products"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.js","style-index"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/shop/block.json":
/*!************************************!*\
  !*** ./src/blocks/shop/block.json ***!
  \************************************/
/*! exports provided: name, category, attributes, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"ctx-products/shop\",\"category\":\"widgets\",\"attributes\":{\"columnsSmall\":{\"type\":\"number\",\"default\":1},\"columnsMedium\":{\"type\":\"number\",\"default\":2},\"columnsLarge\":{\"type\":\"number\",\"default\":3},\"showImages\":{\"type\":\"boolean\",\"default\":true},\"dropShadow\":{\"type\":\"boolean\",\"default\":false},\"showCategory\":{\"type\":\"boolean\",\"default\":true},\"sortByCategory\":{\"type\":\"boolean\",\"default\":false},\"showFilter\":{\"type\":\"boolean\",\"default\":false},\"showSearchbar\":{\"type\":\"boolean\",\"default\":false},\"style\":{\"type\":\"string\",\"default\":\"card\"},\"order\":{\"type\":\"string\",\"default\":\"desc\"},\"orderBy\":{\"type\":\"string\",\"default\":\"date\"},\"selectedCategories\":{\"type\":\"array\",\"default\":[]},\"selectedTags\":{\"type\":\"array\",\"default\":[]},\"excerptLength\":{\"type\":\"number\",\"default\":20},\"textAlignment\":{\"type\":\"string\",\"default\":\"left\"}}}");

/***/ }),

/***/ "./src/blocks/shop/edit.js":
/*!*********************************!*\
  !*** ./src/blocks/shop/edit.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProductEdit; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _icons_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons.js */ "./src/blocks/shop/icons.js");
/* harmony import */ var _wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/server-side-render */ "@wordpress/server-side-render");
/* harmony import */ var _wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_7__);


/**
 * Internal dependencies
 */





/**
 * Wordpress dependencies
 */





function ProductEdit({
  attributes,
  setAttributes
}) {
  const {
    columnsSmall,
    columnsMedium,
    columnsLarge,
    showImages,
    showFilter,
    showSearchbar,
    sortByCategory,
    dropShadow,
    style,
    textAlignment,
    showCategory,
    excerptLength,
    selectedCategories,
    selectedTags
  } = attributes;
  console.log(attributes);
  const [selectedCategoryState, setSelectedCategoryState] = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useState"])(selectedCategories);
  const categoryList = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_6__["useSelect"])(select => {
    const {
      getEntityRecords
    } = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_7__["store"]);
    const query = {
      hide_empty: true
    };
    const list = getEntityRecords('taxonomy', 'product-categories', query);
    let categoryOptionsArray = [];

    if (!list) {
      return categoryOptionsArray;
    }

    list.map(category => {
      categoryOptionsArray.push({
        id: category.id,
        name: category.name
      });
    });
    return categoryOptionsArray;
  }, []);
  const tagList = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_6__["useSelect"])(select => {
    const {
      getEntityRecords
    } = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_7__["store"]);
    const query = {
      hide_empty: true
    };
    const list = getEntityRecords('taxonomy', 'product-tags', query);

    if (!list) {
      return null;
    }

    return list;
  }, []);
  let tagNames = [];
  let tagsFieldValue = [];

  if (tagList !== null) {
    tagNames = tagList.map(tag => tag.name);
    tagsFieldValue = selectedTags.map(tagId => {
      let wantedTag = tagList.find(tag => {
        return tag.id === tagId;
      });

      if (wantedTag === undefined || !wantedTag) {
        return false;
      }

      return wantedTag.name;
    });
  }

  const blockProps = Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["useBlockProps"])({
    className: ["columns-" + columnsLarge, showImages ? "hasImage" : false, dropShadow ? "hover" : false, "style-" + style, "text-" + textAlignment].filter(Boolean).join(" ")
  });

  const setCategory = (category, checked) => {
    var categories = selectedCategories;

    if (checked && !categories.includes(category)) {
      categories.push(category);
    }

    if (!checked && categories.includes(category)) {
      const index = categories.indexOf(category);
      categories.splice(index, 1);
    }

    setAttributes({
      selectedCategories: Array.from(categories)
    });
    setSelectedCategoryState(Array.from(categories));
    return;
  };

  const inspectorControls = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["InspectorControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Data', 'ctx-products'),
    initialOpen: true
  }, categoryList.map((category, i) => Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["CheckboxControl"], {
    label: category.name,
    key: i,
    onChange: value => {
      setCategory(category.id, value);
    },
    checked: selectedCategoryState.includes(category.id)
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["FormTokenField"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Tags', 'ctx-products'),
    value: tagsFieldValue,
    suggestions: tagNames,
    onChange: selectedTags => {
      let selectedTagsArray = [];
      selectedTags.map(tagName => {
        const matchingTag = tagList.find(tag => {
          return tag.name === tagName;
        });

        if (matchingTag !== undefined) {
          selectedTagsArray.push(matchingTag.id);
        }
      });
      setAttributes({
        selectedTags: selectedTagsArray
      });
    },
    __experimentalExpandOnFocus: true
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Layout', 'ctx-products'),
    initialOpen: true
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Columns on small screens", 'ctx-products'),
    max: 6,
    min: 1,
    help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("eg. Smartphones", 'ctx-products'),
    onChange: value => {
      setAttributes({
        columnsSmall: value
      });
    },
    value: columnsSmall
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Columns on medium screens", 'ctx-products'),
    max: 6,
    min: 1,
    help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Tablets and smaller screens", 'ctx-products'),
    onChange: value => {
      setAttributes({
        columnsMedium: value
      });
    },
    value: columnsMedium
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Columns on large screens", 'ctx-products'),
    max: 6,
    min: 1,
    help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Desktop screens", 'ctx-products'),
    onChange: value => {
      setAttributes({
        columnsLarge: value
      });
    },
    value: columnsLarge
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Appearance', 'ctx-products'),
    initialOpen: true
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", {
    className: "components-base-control__label",
    htmlFor: "inspector-range-control-4"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Style", "ctx-products")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("br", null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "styleSelector"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    onClick: () => setAttributes({
      style: "mini"
    }),
    className: style == "mini" ? "active" : ""
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
    size: "64",
    className: "icon",
    icon: _icons_js__WEBPACK_IMPORTED_MODULE_3__["default"].mini
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Minimal", "ctx-products"))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    onClick: () => setAttributes({
      style: "list"
    }),
    className: style == "list" ? "active" : ""
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
    size: "64",
    className: "icon",
    icon: _icons_js__WEBPACK_IMPORTED_MODULE_3__["default"].list
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("List", "ctx-products"))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    onClick: () => setAttributes({
      style: "cards"
    }),
    className: style == "cards" ? "active" : ""
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
    size: "64",
    className: "icon",
    icon: _icons_js__WEBPACK_IMPORTED_MODULE_3__["default"].cards
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Cards", "ctx-products")))), showImages && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["ToggleControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Show filter", 'ctx-products'),
    checked: showFilter,
    onChange: value => setAttributes({
      showFilter: value
    })
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["ToggleControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Show searchbar", 'ctx-products'),
    checked: showSearchbar,
    onChange: value => setAttributes({
      showSearchbar: value
    })
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["ToggleControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Show category", 'ctx-products'),
    checked: showCategory,
    onChange: value => setAttributes({
      showCategory: value
    })
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["ToggleControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Sort by category", 'ctx-products'),
    checked: sortByCategory,
    onChange: value => setAttributes({
      sortByCategory: value
    })
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["ToggleControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Drop shadow", 'ctx-products'),
    checked: dropShadow,
    onChange: value => setAttributes({
      dropShadow: value
    })
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Length of preview text", 'ctx-products'),
    max: 200,
    min: 0,
    help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Number of words", 'ctx-products'),
    onChange: value => {
      setAttributes({
        excerptLength: value
      });
    },
    value: excerptLength
  })));
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, inspectorControls, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", blockProps, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "components-placeholder is-large"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "components-placeholder__label"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: "block-editor-block-icon has-colors"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: "24px",
    viewBox: "0 0 24 24",
    width: "24px",
    fill: "#000000"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    d: "M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"
  }))), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Product Shop", "ctx-products")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "components-placeholder__instructions"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("See for settings in the inspector. The result can be seen in the frontend", "ctx-products")))));
}

/***/ }),

/***/ "./src/blocks/shop/editor.scss":
/*!*************************************!*\
  !*** ./src/blocks/shop/editor.scss ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/shop/icons.js":
/*!**********************************!*\
  !*** ./src/blocks/shop/icons.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

let icons = [];
icons.shop = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24px",
  viewBox: "0 0 24 24",
  width: "24px",
  fill: "#000000"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
  d: "M0 0h24v24H0z",
  fill: "none"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
  d: "M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"
}));
icons.mini = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
  viewBox: "0 0 32 32",
  xmlns: "http://www.w3.org/2000/svg",
  fillRule: "evenodd",
  clipRule: "evenodd",
  strokeLinejoin: "round",
  strokeMiterlimit: 2
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
  d: "M30 24v2H2.429v-2h27.57zm0-10v2H2.429v-2h27.57zm0-10v2H2.429V4h27.57z",
  fillRule: "nonzero"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
  fill: "#919191",
  fillRule: "nonzero",
  d: "M2.429 7h24.043v3H2.429zM2.429 17h24.043v3H2.429zM2.429 27h24.043v3H2.429z"
}));
icons.list = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fillRule: "evenodd",
  strokeLinejoin: "round",
  strokeMiterlimit: "2",
  clipRule: "evenodd",
  viewBox: "0 0 32 32"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
  d: "M30 24v2H10v-2h20zm0-10v2H10v-2h20zm0-10v2H10V4h20z"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("circle", {
  cx: "4.773",
  cy: "7",
  r: "3"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("circle", {
  cx: "4.773",
  cy: "7",
  r: "3",
  transform: "translate(0 10)"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("circle", {
  cx: "4.773",
  cy: "7",
  r: "3",
  transform: "translate(0 20)"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
  fill: "#919191",
  d: "M10 7H26.472V10H10z"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
  fill: "#919191",
  d: "M10 7H26.472V10H10z",
  transform: "translate(0 10)"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
  fill: "#919191",
  d: "M10 7H26.472V10H10z",
  transform: "translate(0 20)"
}));
icons.cards = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fillRule: "evenodd",
  strokeLinejoin: "round",
  strokeMiterlimit: "2",
  clipRule: "evenodd",
  viewBox: "0 0 32 32"
}, " ", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
  fill: "#E5E5E5",
  d: "M2.274 1.794H10.702000000000002V16.772H2.274z",
  transform: "matrix(1.52569 0 0 1.59368 -1.304 1.206)"
}), " ", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
  d: "M10 24H30V26H10z",
  transform: "matrix(.4577 0 0 .96245 -.566 -6.375)"
}), " ", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("circle", {
  cx: "4.773",
  cy: "7",
  r: "3",
  transform: "translate(1.306 -.773) scale(1.52569)"
}), " ", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
  fill: "#919191",
  d: "M10 7H26.472V10H10z",
  transform: "matrix(.55574 0 0 1.52569 -1.546 10.482)"
}), " ", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
  fill: "#E5E5E5",
  d: "M2.274 1.794H10.702000000000002V16.772H2.274z",
  transform: "matrix(1.52569 0 0 1.59368 13.507 1.206)"
}), " ", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
  d: "M10 24H30V26H10z",
  transform: "matrix(.4577 0 0 .96245 14.245 -6.375)"
}), " ", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("circle", {
  cx: "4.773",
  cy: "7",
  r: "3",
  transform: "translate(16.117 -.773) scale(1.52569)"
}), " ", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
  fill: "#919191",
  d: "M10 7H26.472V10H10z",
  transform: "matrix(.55574 0 0 1.52569 13.265 10.482)"
}), " ");
/* harmony default export */ __webpack_exports__["default"] = (icons);

/***/ }),

/***/ "./src/blocks/shop/index.js":
/*!**********************************!*\
  !*** ./src/blocks/shop/index.js ***!
  \**********************************/
/*! exports provided: name, category, metadata, settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "category", function() { return category; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./src/blocks/shop/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./src/blocks/shop/block.json");
var _block_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./block.json */ "./src/blocks/shop/block.json", 1);
/* harmony reexport (default from named exports) */ __webpack_require__.d(__webpack_exports__, "metadata", function() { return _block_json__WEBPACK_IMPORTED_MODULE_1__; });
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons */ "./src/blocks/shop/icons.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/shop/style.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/shop/editor.scss");
/**
 * Internal dependencies
 */



/**
 * Wordpress dependencies
 */

const {
  __
} = wp.i18n;


/**
 * Block constants
 */

const {
  name,
  category,
  attributes
} = _block_json__WEBPACK_IMPORTED_MODULE_1__;
const settings = {
  title: __('Product shop', 'ctx-products'),
  description: __('Shows s free shop', 'ctx-products'),
  icon: _icons__WEBPACK_IMPORTED_MODULE_2__["default"].shop,
  apiVersion: 2,
  keywords: ['ctx-products', __('events', 'ctx-products'), __('list', 'ctx-products')],
  attributes,
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],

  save() {
    return null;
  }

};


/***/ }),

/***/ "./src/common/styles/editor.scss":
/*!***************************************!*\
  !*** ./src/common/styles/editor.scss ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: registerBlocks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerBlocks", function() { return registerBlocks; });
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _blocks_shop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blocks/shop */ "./src/blocks/shop/index.js");
/* harmony import */ var _common_styles_editor_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/styles/editor.scss */ "./src/common/styles/editor.scss");
/* harmony import */ var _common_styles_style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/styles/style.scss */ "./src/common/styles/style.scss");
/**
 * Wordpress dependencies.
 */

/**
 * Blocks dependencies.
 */


/**
 * Stylesheets
 */




const registerBlock = block => {
  if (!block) {
    return;
  }

  const {
    name,
    category,
    settings
  } = block;
  Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["registerBlockType"])(name, {
    category: category,
    ...settings
  });
};

const registerBlocks = () => {
  [_blocks_shop__WEBPACK_IMPORTED_MODULE_1__].forEach(registerBlock);
};
registerBlocks();

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blockEditor"]; }());

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blocks"]; }());

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["components"]; }());

/***/ }),

/***/ "@wordpress/core-data":
/*!**********************************!*\
  !*** external ["wp","coreData"] ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["coreData"]; }());

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["data"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["element"]; }());

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["i18n"]; }());

/***/ }),

/***/ "@wordpress/server-side-render":
/*!******************************************!*\
  !*** external ["wp","serverSideRender"] ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["serverSideRender"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map