(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/_app"],{

/***/ "../../.yarn/__virtual__/@emotion-react-virtual-aa322d377b/0/cache/@emotion-react-npm-11.4.0-174d777529-af2abadbae.zip/node_modules/@emotion/react/dist/emotion-element-a8309070.browser.esm.js":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ../../.yarn/__virtual__/@emotion-react-virtual-aa322d377b/0/cache/@emotion-react-npm-11.4.0-174d777529-af2abadbae.zip/node_modules/@emotion/react/dist/emotion-element-a8309070.browser.esm.js ***!
  \******************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": function() { return /* binding */ CacheProvider; },
/* harmony export */   "E": function() { return /* binding */ Emotion; },
/* harmony export */   "T": function() { return /* binding */ ThemeContext; },
/* harmony export */   "a": function() { return /* binding */ ThemeProvider; },
/* harmony export */   "b": function() { return /* binding */ withTheme; },
/* harmony export */   "c": function() { return /* binding */ createEmotionProps; },
/* harmony export */   "h": function() { return /* binding */ hasOwnProperty; },
/* harmony export */   "u": function() { return /* binding */ useTheme; },
/* harmony export */   "w": function() { return /* binding */ withEmotionCache; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../.yarn/cache/react-npm-18.0.0-alpha-e3b76a85c-20210802-f2b5a5619c-652df3e330.zip/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/cache */ "../../.yarn/cache/@emotion-cache-npm-11.4.0-701cf41a62-bdef4c0ccc.zip/node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "../../.yarn/cache/@babel-runtime-npm-7.14.8-177f7f6866-d2dd0ce51d.zip/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _emotion_weak_memoize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/weak-memoize */ "../../.yarn/cache/@emotion-weak-memoize-npm-0.2.5-9f2e49e7c8-27d402b0c6.zip/node_modules/@emotion/weak-memoize/dist/weak-memoize.browser.esm.js");
/* harmony import */ var _isolated_hoist_non_react_statics_do_not_use_this_in_your_code_dist_emotion_react_isolated_hoist_non_react_statics_do_not_use_this_in_your_code_browser_esm_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../isolated-hoist-non-react-statics-do-not-use-this-in-your-code/dist/emotion-react-isolated-hoist-non-react-statics-do-not-use-this-in-your-code.browser.esm.js */ "../../.yarn/__virtual__/@emotion-react-virtual-aa322d377b/0/cache/@emotion-react-npm-11.4.0-174d777529-af2abadbae.zip/node_modules/@emotion/react/isolated-hoist-non-react-statics-do-not-use-this-in-your-code/dist/emotion-react-isolated-hoist-non-react-statics-do-not-use-this-in-your-code.browser.esm.js");
/* harmony import */ var _emotion_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/utils */ "../../.yarn/cache/@emotion-utils-npm-1.0.0-7f9809289c-3ce8048441.zip/node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js");
/* harmony import */ var _emotion_serialize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/serialize */ "../../.yarn/cache/@emotion-serialize-npm-1.0.2-a692afdb82-ff84fbe09e.zip/node_modules/@emotion/serialize/dist/emotion-serialize.browser.esm.js");








var hasOwnProperty = Object.prototype.hasOwnProperty;

var EmotionCacheContext = /* #__PURE__ */(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)( // we're doing this to avoid preconstruct's dead code elimination in this one case
// because this module is primarily intended for the browser and node
// but it's also required in react native and similar environments sometimes
// and we could have a special build just for that
// but this is much easier and the native packages
// might use a different theme context in the future anyway
typeof HTMLElement !== 'undefined' ? /* #__PURE__ */(0,_emotion_cache__WEBPACK_IMPORTED_MODULE_1__.default)({
  key: 'css'
}) : null);
var CacheProvider = EmotionCacheContext.Provider;

var withEmotionCache = function withEmotionCache(func) {
  // $FlowFixMe
  return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (props, ref) {
    // the cache will never be null in the browser
    var cache = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(EmotionCacheContext);
    return func(props, cache, ref);
  });
};

var ThemeContext = /* #__PURE__ */(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
var useTheme = function useTheme() {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ThemeContext);
};

var getTheme = function getTheme(outerTheme, theme) {
  if (typeof theme === 'function') {
    var mergedTheme = theme(outerTheme);

    if ( true && (mergedTheme == null || typeof mergedTheme !== 'object' || Array.isArray(mergedTheme))) {
      throw new Error('[ThemeProvider] Please return an object from your theme function, i.e. theme={() => ({})}!');
    }

    return mergedTheme;
  }

  if ( true && (theme == null || typeof theme !== 'object' || Array.isArray(theme))) {
    throw new Error('[ThemeProvider] Please make your theme prop a plain object');
  }

  return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__.default)({}, outerTheme, theme);
};

var createCacheWithTheme = /* #__PURE__ */(0,_emotion_weak_memoize__WEBPACK_IMPORTED_MODULE_3__.default)(function (outerTheme) {
  return (0,_emotion_weak_memoize__WEBPACK_IMPORTED_MODULE_3__.default)(function (theme) {
    return getTheme(outerTheme, theme);
  });
});
var ThemeProvider = function ThemeProvider(props) {
  var theme = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ThemeContext);

  if (props.theme !== theme) {
    theme = createCacheWithTheme(theme)(props.theme);
  }

  return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ThemeContext.Provider, {
    value: theme
  }, props.children);
};
function withTheme(Component) {
  var componentName = Component.displayName || Component.name || 'Component';

  var render = function render(props, ref) {
    var theme = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ThemeContext);
    return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Component, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__.default)({
      theme: theme,
      ref: ref
    }, props));
  }; // $FlowFixMe


  var WithTheme = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(render);
  WithTheme.displayName = "WithTheme(" + componentName + ")";
  return (0,_isolated_hoist_non_react_statics_do_not_use_this_in_your_code_dist_emotion_react_isolated_hoist_non_react_statics_do_not_use_this_in_your_code_browser_esm_js__WEBPACK_IMPORTED_MODULE_6__.default)(WithTheme, Component);
}

// thus we only need to replace what is a valid character for JS, but not for CSS

var sanitizeIdentifier = function sanitizeIdentifier(identifier) {
  return identifier.replace(/\$/g, '-');
};

var typePropName = '__EMOTION_TYPE_PLEASE_DO_NOT_USE__';
var labelPropName = '__EMOTION_LABEL_PLEASE_DO_NOT_USE__';
var createEmotionProps = function createEmotionProps(type, props) {
  if ( true && typeof props.css === 'string' && // check if there is a css declaration
  props.css.indexOf(':') !== -1) {
    throw new Error("Strings are not allowed as css prop values, please wrap it in a css template literal from '@emotion/react' like this: css`" + props.css + "`");
  }

  var newProps = {};

  for (var key in props) {
    if (hasOwnProperty.call(props, key)) {
      newProps[key] = props[key];
    }
  }

  newProps[typePropName] = type;

  if (true) {
    var error = new Error();

    if (error.stack) {
      // chrome
      var match = error.stack.match(/at (?:Object\.|Module\.|)(?:jsx|createEmotionProps).*\n\s+at (?:Object\.|)([A-Z][A-Za-z0-9$]+) /);

      if (!match) {
        // safari and firefox
        match = error.stack.match(/.*\n([A-Z][A-Za-z0-9$]+)@/);
      }

      if (match) {
        newProps[labelPropName] = sanitizeIdentifier(match[1]);
      }
    }
  }

  return newProps;
};
var Emotion = /* #__PURE__ */withEmotionCache(function (props, cache, ref) {
  var cssProp = props.css; // so that using `css` from `emotion` and passing the result to the css prop works
  // not passing the registered cache to serializeStyles because it would
  // make certain babel optimisations not possible

  if (typeof cssProp === 'string' && cache.registered[cssProp] !== undefined) {
    cssProp = cache.registered[cssProp];
  }

  var type = props[typePropName];
  var registeredStyles = [cssProp];
  var className = '';

  if (typeof props.className === 'string') {
    className = (0,_emotion_utils__WEBPACK_IMPORTED_MODULE_4__.getRegisteredStyles)(cache.registered, registeredStyles, props.className);
  } else if (props.className != null) {
    className = props.className + " ";
  }

  var serialized = (0,_emotion_serialize__WEBPACK_IMPORTED_MODULE_5__.serializeStyles)(registeredStyles, undefined, typeof cssProp === 'function' || Array.isArray(cssProp) ? (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ThemeContext) : undefined);

  if ( true && serialized.name.indexOf('-') === -1) {
    var labelFromStack = props[labelPropName];

    if (labelFromStack) {
      serialized = (0,_emotion_serialize__WEBPACK_IMPORTED_MODULE_5__.serializeStyles)([serialized, 'label:' + labelFromStack + ';']);
    }
  }

  var rules = (0,_emotion_utils__WEBPACK_IMPORTED_MODULE_4__.insertStyles)(cache, serialized, typeof type === 'string');
  className += cache.key + "-" + serialized.name;
  var newProps = {};

  for (var key in props) {
    if (hasOwnProperty.call(props, key) && key !== 'css' && key !== typePropName && ( false || key !== labelPropName)) {
      newProps[key] = props[key];
    }
  }

  newProps.ref = ref;
  newProps.className = className;
  var ele = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(type, newProps);

  return ele;
});

if (true) {
  Emotion.displayName = 'EmotionCssPropInternal';
}




/***/ }),

/***/ "../../.yarn/__virtual__/@emotion-react-virtual-aa322d377b/0/cache/@emotion-react-npm-11.4.0-174d777529-af2abadbae.zip/node_modules/@emotion/react/dist/emotion-react.browser.esm.js":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ../../.yarn/__virtual__/@emotion-react-virtual-aa322d377b/0/cache/@emotion-react-npm-11.4.0-174d777529-af2abadbae.zip/node_modules/@emotion/react/dist/emotion-react.browser.esm.js ***!
  \*******************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CacheProvider": function() { return /* reexport safe */ _emotion_element_a8309070_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__.C; },
/* harmony export */   "ThemeContext": function() { return /* reexport safe */ _emotion_element_a8309070_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__.T; },
/* harmony export */   "ThemeProvider": function() { return /* reexport safe */ _emotion_element_a8309070_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__.a; },
/* harmony export */   "useTheme": function() { return /* reexport safe */ _emotion_element_a8309070_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__.u; },
/* harmony export */   "withEmotionCache": function() { return /* reexport safe */ _emotion_element_a8309070_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__.w; },
/* harmony export */   "withTheme": function() { return /* reexport safe */ _emotion_element_a8309070_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__.b; },
/* harmony export */   "ClassNames": function() { return /* binding */ ClassNames; },
/* harmony export */   "Global": function() { return /* binding */ Global; },
/* harmony export */   "createElement": function() { return /* binding */ jsx; },
/* harmony export */   "css": function() { return /* binding */ css; },
/* harmony export */   "jsx": function() { return /* binding */ jsx; },
/* harmony export */   "keyframes": function() { return /* binding */ keyframes; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../.yarn/cache/react-npm-18.0.0-alpha-e3b76a85c-20210802-f2b5a5619c-652df3e330.zip/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/cache */ "../../.yarn/cache/@emotion-cache-npm-11.4.0-701cf41a62-bdef4c0ccc.zip/node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js");
/* harmony import */ var _emotion_element_a8309070_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./emotion-element-a8309070.browser.esm.js */ "../../.yarn/__virtual__/@emotion-react-virtual-aa322d377b/0/cache/@emotion-react-npm-11.4.0-174d777529-af2abadbae.zip/node_modules/@emotion/react/dist/emotion-element-a8309070.browser.esm.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "../../.yarn/cache/@babel-runtime-npm-7.14.8-177f7f6866-d2dd0ce51d.zip/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _emotion_weak_memoize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/weak-memoize */ "../../.yarn/cache/@emotion-weak-memoize-npm-0.2.5-9f2e49e7c8-27d402b0c6.zip/node_modules/@emotion/weak-memoize/dist/weak-memoize.browser.esm.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! hoist-non-react-statics */ "../../.yarn/cache/hoist-non-react-statics-npm-3.3.2-e7b709e6c1-b153827042.zip/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _emotion_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/utils */ "../../.yarn/cache/@emotion-utils-npm-1.0.0-7f9809289c-3ce8048441.zip/node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js");
/* harmony import */ var _emotion_serialize__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @emotion/serialize */ "../../.yarn/cache/@emotion-serialize-npm-1.0.2-a692afdb82-ff84fbe09e.zip/node_modules/@emotion/serialize/dist/emotion-serialize.browser.esm.js");
/* harmony import */ var _emotion_sheet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @emotion/sheet */ "../../.yarn/cache/@emotion-sheet-npm-1.0.1-f917bf7ec9-624e2ede03.zip/node_modules/@emotion/sheet/dist/emotion-sheet.browser.esm.js");












var pkg = {
	name: "@emotion/react",
	version: "11.4.0",
	main: "dist/emotion-react.cjs.js",
	module: "dist/emotion-react.esm.js",
	browser: {
		"./dist/emotion-react.cjs.js": "./dist/emotion-react.browser.cjs.js",
		"./dist/emotion-react.esm.js": "./dist/emotion-react.browser.esm.js"
	},
	types: "types/index.d.ts",
	files: [
		"src",
		"dist",
		"jsx-runtime",
		"jsx-dev-runtime",
		"isolated-hoist-non-react-statics-do-not-use-this-in-your-code",
		"types/*.d.ts",
		"macro.js",
		"macro.d.ts",
		"macro.js.flow"
	],
	sideEffects: false,
	author: "mitchellhamilton <mitchell@mitchellhamilton.me>",
	license: "MIT",
	scripts: {
		"test:typescript": "dtslint types"
	},
	dependencies: {
		"@babel/runtime": "^7.13.10",
		"@emotion/cache": "^11.4.0",
		"@emotion/serialize": "^1.0.2",
		"@emotion/sheet": "^1.0.1",
		"@emotion/utils": "^1.0.0",
		"@emotion/weak-memoize": "^0.2.5",
		"hoist-non-react-statics": "^3.3.1"
	},
	peerDependencies: {
		"@babel/core": "^7.0.0",
		react: ">=16.8.0"
	},
	peerDependenciesMeta: {
		"@babel/core": {
			optional: true
		},
		"@types/react": {
			optional: true
		}
	},
	devDependencies: {
		"@babel/core": "^7.13.10",
		"@emotion/css": "11.1.3",
		"@emotion/css-prettifier": "1.0.0",
		"@emotion/server": "11.4.0",
		"@emotion/styled": "11.3.0",
		"@types/react": "^16.9.11",
		dtslint: "^0.3.0",
		"html-tag-names": "^1.1.2",
		react: "16.14.0",
		"svg-tag-names": "^1.1.1"
	},
	repository: "https://github.com/emotion-js/emotion/tree/main/packages/react",
	publishConfig: {
		access: "public"
	},
	"umd:main": "dist/emotion-react.umd.min.js",
	preconstruct: {
		entrypoints: [
			"./index.js",
			"./jsx-runtime.js",
			"./jsx-dev-runtime.js",
			"./isolated-hoist-non-react-statics-do-not-use-this-in-your-code.js"
		],
		umdName: "emotionReact"
	}
};

var jsx = function jsx(type, props) {
  var args = arguments;

  if (props == null || !_emotion_element_a8309070_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__.h.call(props, 'css')) {
    // $FlowFixMe
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement.apply(undefined, args);
  }

  var argsLength = args.length;
  var createElementArgArray = new Array(argsLength);
  createElementArgArray[0] = _emotion_element_a8309070_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__.E;
  createElementArgArray[1] = (0,_emotion_element_a8309070_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__.c)(type, props);

  for (var i = 2; i < argsLength; i++) {
    createElementArgArray[i] = args[i];
  } // $FlowFixMe


  return react__WEBPACK_IMPORTED_MODULE_0__.createElement.apply(null, createElementArgArray);
};

var warnedAboutCssPropForGlobal = false; // maintain place over rerenders.
// initial render from browser, insertBefore context.sheet.tags[0] or if a style hasn't been inserted there yet, appendChild
// initial client-side render from SSR, use place of hydrating tag

var Global = /* #__PURE__ */(0,_emotion_element_a8309070_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__.w)(function (props, cache) {
  if ( true && !warnedAboutCssPropForGlobal && ( // check for className as well since the user is
  // probably using the custom createElement which
  // means it will be turned into a className prop
  // $FlowFixMe I don't really want to add it to the type since it shouldn't be used
  props.className || props.css)) {
    console.error("It looks like you're using the css prop on Global, did you mean to use the styles prop instead?");
    warnedAboutCssPropForGlobal = true;
  }

  var styles = props.styles;
  var serialized = (0,_emotion_serialize__WEBPACK_IMPORTED_MODULE_7__.serializeStyles)([styles], undefined, typeof styles === 'function' || Array.isArray(styles) ? (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_emotion_element_a8309070_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__.T) : undefined);
  // but it is based on a constant that will never change at runtime
  // it's effectively like having two implementations and switching them out
  // so it's not actually breaking anything


  var sheetRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(function () {
    var key = cache.key + "-global";
    var sheet = new _emotion_sheet__WEBPACK_IMPORTED_MODULE_8__.StyleSheet({
      key: key,
      nonce: cache.sheet.nonce,
      container: cache.sheet.container,
      speedy: cache.sheet.isSpeedy
    });
    var rehydrating = false; // $FlowFixMe

    var node = document.querySelector("style[data-emotion=\"" + key + " " + serialized.name + "\"]");

    if (cache.sheet.tags.length) {
      sheet.before = cache.sheet.tags[0];
    }

    if (node !== null) {
      rehydrating = true; // clear the hash so this node won't be recognizable as rehydratable by other <Global/>s

      node.setAttribute('data-emotion', key);
      sheet.hydrate([node]);
    }

    sheetRef.current = [sheet, rehydrating];
    return function () {
      sheet.flush();
    };
  }, [cache]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(function () {
    var sheetRefCurrent = sheetRef.current;
    var sheet = sheetRefCurrent[0],
        rehydrating = sheetRefCurrent[1];

    if (rehydrating) {
      sheetRefCurrent[1] = false;
      return;
    }

    if (serialized.next !== undefined) {
      // insert keyframes
      (0,_emotion_utils__WEBPACK_IMPORTED_MODULE_6__.insertStyles)(cache, serialized.next, true);
    }

    if (sheet.tags.length) {
      // if this doesn't exist then it will be null so the style element will be appended
      var element = sheet.tags[sheet.tags.length - 1].nextElementSibling;
      sheet.before = element;
      sheet.flush();
    }

    cache.insert("", serialized, sheet, false);
  }, [cache, serialized.name]);
  return null;
});

if (true) {
  Global.displayName = 'EmotionGlobal';
}

function css() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return (0,_emotion_serialize__WEBPACK_IMPORTED_MODULE_7__.serializeStyles)(args);
}

var keyframes = function keyframes() {
  var insertable = css.apply(void 0, arguments);
  var name = "animation-" + insertable.name; // $FlowFixMe

  return {
    name: name,
    styles: "@keyframes " + name + "{" + insertable.styles + "}",
    anim: 1,
    toString: function toString() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
};

var classnames = function classnames(args) {
  var len = args.length;
  var i = 0;
  var cls = '';

  for (; i < len; i++) {
    var arg = args[i];
    if (arg == null) continue;
    var toAdd = void 0;

    switch (typeof arg) {
      case 'boolean':
        break;

      case 'object':
        {
          if (Array.isArray(arg)) {
            toAdd = classnames(arg);
          } else {
            if ( true && arg.styles !== undefined && arg.name !== undefined) {
              console.error('You have passed styles created with `css` from `@emotion/react` package to the `cx`.\n' + '`cx` is meant to compose class names (strings) so you should convert those styles to a class name by passing them to the `css` received from <ClassNames/> component.');
            }

            toAdd = '';

            for (var k in arg) {
              if (arg[k] && k) {
                toAdd && (toAdd += ' ');
                toAdd += k;
              }
            }
          }

          break;
        }

      default:
        {
          toAdd = arg;
        }
    }

    if (toAdd) {
      cls && (cls += ' ');
      cls += toAdd;
    }
  }

  return cls;
};

function merge(registered, css, className) {
  var registeredStyles = [];
  var rawClassName = (0,_emotion_utils__WEBPACK_IMPORTED_MODULE_6__.getRegisteredStyles)(registered, registeredStyles, className);

  if (registeredStyles.length < 2) {
    return className;
  }

  return rawClassName + css(registeredStyles);
}

var ClassNames = /* #__PURE__ */(0,_emotion_element_a8309070_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__.w)(function (props, cache) {
  var hasRendered = false;

  var css = function css() {
    if (hasRendered && "development" !== 'production') {
      throw new Error('css can only be used during render');
    }

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var serialized = (0,_emotion_serialize__WEBPACK_IMPORTED_MODULE_7__.serializeStyles)(args, cache.registered);

    {
      (0,_emotion_utils__WEBPACK_IMPORTED_MODULE_6__.insertStyles)(cache, serialized, false);
    }

    return cache.key + "-" + serialized.name;
  };

  var cx = function cx() {
    if (hasRendered && "development" !== 'production') {
      throw new Error('cx can only be used during render');
    }

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return merge(cache.registered, css, classnames(args));
  };

  var content = {
    css: css,
    cx: cx,
    theme: (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_emotion_element_a8309070_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__.T)
  };
  var ele = props.children(content);
  hasRendered = true;

  return ele;
});

if (true) {
  ClassNames.displayName = 'EmotionClassNames';
}

if (true) {
  var isBrowser = "object" !== 'undefined'; // #1727 for some reason Jest evaluates modules twice if some consuming module gets mocked with jest.mock

  var isJest = typeof jest !== 'undefined';

  if (isBrowser && !isJest) {
    var globalContext = isBrowser ? window : __webpack_require__.g;
    var globalKey = "__EMOTION_REACT_" + pkg.version.split('.')[0] + "__";

    if (globalContext[globalKey]) {
      console.warn('You are loading @emotion/react when it is already loaded. Running ' + 'multiple instances may cause problems. This can happen if multiple ' + 'versions are used, or if multiple builds of the same version are ' + 'used.');
    }

    globalContext[globalKey] = true;
  }
}




/***/ }),

/***/ "../../.yarn/__virtual__/@emotion-react-virtual-aa322d377b/0/cache/@emotion-react-npm-11.4.0-174d777529-af2abadbae.zip/node_modules/@emotion/react/isolated-hoist-non-react-statics-do-not-use-this-in-your-code/dist/emotion-react-isolated-hoist-non-react-statics-do-not-use-this-in-your-code.browser.esm.js":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../.yarn/__virtual__/@emotion-react-virtual-aa322d377b/0/cache/@emotion-react-npm-11.4.0-174d777529-af2abadbae.zip/node_modules/@emotion/react/isolated-hoist-non-react-statics-do-not-use-this-in-your-code/dist/emotion-react-isolated-hoist-non-react-statics-do-not-use-this-in-your-code.browser.esm.js ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hoist-non-react-statics */ "../../.yarn/cache/hoist-non-react-statics-npm-3.3.2-e7b709e6c1-b153827042.zip/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_0__);


// this file isolates this package that is not tree-shakeable
// and if this module doesn't actually contain any logic of its own
// then Rollup just use 'hoist-non-react-statics' directly in other chunks

var hoistNonReactStatics = (function (targetComponent, sourceComponent) {
  return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_0___default()(targetComponent, sourceComponent);
});

/* harmony default export */ __webpack_exports__["default"] = (hoistNonReactStatics);


/***/ }),

/***/ "../../.yarn/__virtual__/@emotion-react-virtual-aa322d377b/0/cache/@emotion-react-npm-11.4.0-174d777529-af2abadbae.zip/node_modules/@emotion/react/jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ../../.yarn/__virtual__/@emotion-react-virtual-aa322d377b/0/cache/@emotion-react-npm-11.4.0-174d777529-af2abadbae.zip/node_modules/@emotion/react/jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Fragment": function() { return /* binding */ Fragment; },
/* harmony export */   "jsxDEV": function() { return /* binding */ jsxDEV; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../.yarn/cache/react-npm-18.0.0-alpha-e3b76a85c-20210802-f2b5a5619c-652df3e330.zip/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/cache */ "../../.yarn/cache/@emotion-cache-npm-11.4.0-701cf41a62-bdef4c0ccc.zip/node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js");
/* harmony import */ var _dist_emotion_element_a8309070_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../dist/emotion-element-a8309070.browser.esm.js */ "../../.yarn/__virtual__/@emotion-react-virtual-aa322d377b/0/cache/@emotion-react-npm-11.4.0-174d777529-af2abadbae.zip/node_modules/@emotion/react/dist/emotion-element-a8309070.browser.esm.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "../../.yarn/cache/@babel-runtime-npm-7.14.8-177f7f6866-d2dd0ce51d.zip/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _emotion_weak_memoize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/weak-memoize */ "../../.yarn/cache/@emotion-weak-memoize-npm-0.2.5-9f2e49e7c8-27d402b0c6.zip/node_modules/@emotion/weak-memoize/dist/weak-memoize.browser.esm.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hoist-non-react-statics */ "../../.yarn/cache/hoist-non-react-statics-npm-3.3.2-e7b709e6c1-b153827042.zip/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _emotion_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/utils */ "../../.yarn/cache/@emotion-utils-npm-1.0.0-7f9809289c-3ce8048441.zip/node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js");
/* harmony import */ var _emotion_serialize__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/serialize */ "../../.yarn/cache/@emotion-serialize-npm-1.0.2-a692afdb82-ff84fbe09e.zip/node_modules/@emotion/serialize/dist/emotion-serialize.browser.esm.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../.yarn/cache/react-npm-18.0.0-alpha-e3b76a85c-20210802-f2b5a5619c-652df3e330.zip/node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);











var Fragment = react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment;
function jsxDEV(type, props, key, isStaticChildren, source, self) {
  if (!_dist_emotion_element_a8309070_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.h.call(props, 'css')) {
    return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(type, props, key, isStaticChildren, source, self);
  }

  return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_dist_emotion_element_a8309070_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.E, (0,_dist_emotion_element_a8309070_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.c)(type, props), key, isStaticChildren, source, self);
}




/***/ }),

/***/ "./libs/queryClient.ts":
/*!*****************************!*\
  !*** ./libs/queryClient.ts ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-query */ "../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);

var queryClient = new react_query__WEBPACK_IMPORTED_MODULE_0__.QueryClient({
  defaultOptions: {}
});
/* harmony default export */ __webpack_exports__["default"] = (queryClient);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ "../../.yarn/__virtual__/@emotion-react-virtual-aa322d377b/0/cache/@emotion-react-npm-11.4.0-174d777529-af2abadbae.zip/node_modules/@emotion/react/jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js");
/* harmony import */ var C_Users_jungy_Documents_GitHub_my_tutorial_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../.yarn/cache/@babel-runtime-npm-7.12.5-b3edb8ee8e-64964a0fd1.zip/node_modules/@babel/runtime/helpers/esm/defineProperty */ "../../.yarn/cache/@babel-runtime-npm-7.12.5-b3edb8ee8e-64964a0fd1.zip/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-query */ "../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/index.js");
/* harmony import */ var _libs_queryClient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../libs/queryClient */ "./libs/queryClient.ts");
/* harmony import */ var _styles_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/styles */ "./styles/styles.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\jungy\\Documents\\GitHub\\my-tutorial\\packages\\a\\pages\\_app.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_jungy_Documents_GitHub_my_tutorial_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





function MyApp(_ref) {
  var Component = _ref.Component,
      pageProps = _ref.pageProps;
  return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: [_styles_styles__WEBPACK_IMPORTED_MODULE_2__.default, (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_query__WEBPACK_IMPORTED_MODULE_4__.QueryClientProvider, {
      client: _libs_queryClient__WEBPACK_IMPORTED_MODULE_1__.default,
      children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_c = MyApp;
/* harmony default export */ __webpack_exports__["default"] = (MyApp);

var _c;

$RefreshReg$(_c, "MyApp");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./styles/cssNormalize.ts":
/*!********************************!*\
  !*** ./styles/cssNormalize.ts ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* module decorator */ module = __webpack_require__.hmd(module);
function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }


/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */

/* Document
   ========================================================================== */

/**
 * 1. Correct the line height in all browsers.
 * 2. Prevent adjustments of font size after orientation changes in iOS.
 */

var cssNormalize =  false ? 0 : {
  name: "1ssnijg-cssNormalize",
  styles: "html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0;}main{display:block;}h1{font-size:2em;margin:0.67em 0;}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace,monospace;font-size:1em;}a{background-color:transparent;}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted;}b,strong{font-weight:bolder;}code,kbd,samp{font-family:monospace,monospace;font-size:1em;}small{font-size:80%;}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline;}sub{bottom:-0.25em;}sup{top:-0.5em;}img{border-style:none;}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible;}button,select{text-transform:none;}button,[type=\"button\"],[type=\"reset\"],[type=\"submit\"]{-webkit-appearance:button;}button::-moz-focus-inner,[type=\"button\"]::-moz-focus-inner,[type=\"reset\"]::-moz-focus-inner,[type=\"submit\"]::-moz-focus-inner{border-style:none;padding:0;}button:-moz-focusring,[type=\"button\"]:-moz-focusring,[type=\"reset\"]:-moz-focusring,[type=\"submit\"]:-moz-focusring{outline:1px dotted ButtonText;}fieldset{padding:0.35em 0.75em 0.625em;}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline;}textarea{overflow:auto;}[type=\"checkbox\"],[type=\"radio\"]{box-sizing:border-box;padding:0;}[type=\"number\"]::-webkit-inner-spin-button,[type=\"number\"]::-webkit-outer-spin-button{height:auto;}[type=\"search\"]{-webkit-appearance:textfield;outline-offset:-2px;}[type=\"search\"]::-webkit-search-decoration{-webkit-appearance:none;}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block;}summary{display:list-item;}template{display:none;}[hidden]{display:none;};label:cssNormalize;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcanVuZ3lcXERvY3VtZW50c1xcR2l0SHViXFxteS10dXRvcmlhbFxccGFja2FnZXNcXGFcXHN0eWxlc1xcY3NzTm9ybWFsaXplLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVd3QiIsImZpbGUiOiJDOlxcVXNlcnNcXGp1bmd5XFxEb2N1bWVudHNcXEdpdEh1YlxcbXktdHV0b3JpYWxcXHBhY2thZ2VzXFxhXFxzdHlsZXNcXGNzc05vcm1hbGl6ZS50cyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcyB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xyXG5cclxuLyohIG5vcm1hbGl6ZS5jc3MgdjguMC4xIHwgTUlUIExpY2Vuc2UgfCBnaXRodWIuY29tL25lY29sYXMvbm9ybWFsaXplLmNzcyAqL1xyXG5cclxuLyogRG9jdW1lbnRcclxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbi8qKlxyXG4gKiAxLiBDb3JyZWN0IHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXHJcbiAqIDIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW4gaU9TLlxyXG4gKi9cclxuY29uc3QgY3NzTm9ybWFsaXplID0gY3NzYFxyXG4gIGh0bWwge1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cclxuICAgIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xyXG4gIH1cclxuXHJcbiAgLyogU2VjdGlvbnNcclxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbiAgLyoqXHJcbiAqIFJlbW92ZSB0aGUgbWFyZ2luIGluIGFsbCBicm93c2Vycy5cclxuICovXHJcblxyXG4gIGJvZHkge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAqIFJlbmRlciB0aGUgbWFpbiBlbGVtZW50IGNvbnNpc3RlbnRseSBpbiBJRS5cclxuICovXHJcblxyXG4gIG1haW4ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICogQ29ycmVjdCB0aGUgZm9udCBzaXplIGFuZCBtYXJnaW4gb24gaDEgZWxlbWVudHMgd2l0aGluIHNlY3Rpb24gYW5kXHJcbiAqIGFydGljbGUgY29udGV4dHMgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgU2FmYXJpLlxyXG4gKi9cclxuXHJcbiAgaDEge1xyXG4gICAgZm9udC1zaXplOiAyZW07XHJcbiAgICBtYXJnaW46IDAuNjdlbSAwO1xyXG4gIH1cclxuXHJcbiAgLyogR3JvdXBpbmcgY29udGVudFxyXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuICAvKipcclxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gRmlyZWZveC5cclxuICogMi4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZSBhbmQgSUUuXHJcbiAqL1xyXG5cclxuICBociB7XHJcbiAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDsgLyogMSAqL1xyXG4gICAgaGVpZ2h0OiAwOyAvKiAxICovXHJcbiAgICBvdmVyZmxvdzogdmlzaWJsZTsgLyogMiAqL1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXHJcbiAqIDIuIENvcnJlY3QgdGhlIG9kZCBlbSBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXHJcbiAqL1xyXG5cclxuICBwcmUge1xyXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXHJcbiAgICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xyXG4gIH1cclxuXHJcbiAgLyogVGV4dC1sZXZlbCBzZW1hbnRpY3NcclxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbiAgLyoqXHJcbiAqIFJlbW92ZSB0aGUgZ3JheSBiYWNrZ3JvdW5kIG9uIGFjdGl2ZSBsaW5rcyBpbiBJRSAxMC5cclxuICovXHJcblxyXG4gIGEge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICogMS4gUmVtb3ZlIHRoZSBib3R0b20gYm9yZGVyIGluIENocm9tZSA1Ny1cclxuICogMi4gQWRkIHRoZSBjb3JyZWN0IHRleHQgZGVjb3JhdGlvbiBpbiBDaHJvbWUsIEVkZ2UsIElFLCBPcGVyYSwgYW5kIFNhZmFyaS5cclxuICovXHJcblxyXG4gIGFiYnJbdGl0bGVdIHtcclxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7IC8qIDEgKi9cclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyAvKiAyICovXHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7IC8qIDIgKi9cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxyXG4gKi9cclxuXHJcbiAgYixcclxuICBzdHJvbmcge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxyXG4gKiAyLiBDb3JyZWN0IHRoZSBvZGQgZW0gZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxyXG4gKi9cclxuXHJcbiAgY29kZSxcclxuICBrYmQsXHJcbiAgc2FtcCB7XHJcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7IC8qIDEgKi9cclxuICAgIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXHJcbiAgfVxyXG5cclxuICAvKipcclxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXHJcbiAqL1xyXG5cclxuICBzbWFsbCB7XHJcbiAgICBmb250LXNpemU6IDgwJTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gKiBQcmV2ZW50IHN1YiBhbmQgc3VwIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIHRoZSBsaW5lIGhlaWdodCBpblxyXG4gKiBhbGwgYnJvd3NlcnMuXHJcbiAqL1xyXG5cclxuICBzdWIsXHJcbiAgc3VwIHtcclxuICAgIGZvbnQtc2l6ZTogNzUlO1xyXG4gICAgbGluZS1oZWlnaHQ6IDA7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XHJcbiAgfVxyXG5cclxuICBzdWIge1xyXG4gICAgYm90dG9tOiAtMC4yNWVtO1xyXG4gIH1cclxuXHJcbiAgc3VwIHtcclxuICAgIHRvcDogLTAuNWVtO1xyXG4gIH1cclxuXHJcbiAgLyogRW1iZWRkZWQgY29udGVudFxyXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuICAvKipcclxuICogUmVtb3ZlIHRoZSBib3JkZXIgb24gaW1hZ2VzIGluc2lkZSBsaW5rcyBpbiBJRSAxMC5cclxuICovXHJcblxyXG4gIGltZyB7XHJcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAvKiBGb3Jtc1xyXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuICAvKipcclxuICogMS4gQ2hhbmdlIHRoZSBmb250IHN0eWxlcyBpbiBhbGwgYnJvd3NlcnMuXHJcbiAqIDIuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cclxuICovXHJcblxyXG4gIGJ1dHRvbixcclxuICBpbnB1dCxcclxuICBvcHRncm91cCxcclxuICBzZWxlY3QsXHJcbiAgdGV4dGFyZWEge1xyXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7IC8qIDEgKi9cclxuICAgIGZvbnQtc2l6ZTogMTAwJTsgLyogMSAqL1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cclxuICAgIG1hcmdpbjogMDsgLyogMiAqL1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAqIFNob3cgdGhlIG92ZXJmbG93IGluIElFLlxyXG4gKiAxLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlLlxyXG4gKi9cclxuXHJcbiAgYnV0dG9uLFxyXG4gIGlucHV0IHtcclxuICAgIC8qIDEgKi9cclxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAqIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSwgRmlyZWZveCwgYW5kIElFLlxyXG4gKiAxLiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEZpcmVmb3guXHJcbiAqL1xyXG5cclxuICBidXR0b24sXHJcbiAgc2VsZWN0IHtcclxuICAgIC8qIDEgKi9cclxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAqIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXHJcbiAqL1xyXG5cclxuICBidXR0b24sXHJcbiAgW3R5cGU9XCJidXR0b25cIl0sXHJcbiAgW3R5cGU9XCJyZXNldFwiXSxcclxuICBbdHlwZT1cInN1Ym1pdFwiXSB7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gKiBSZW1vdmUgdGhlIGlubmVyIGJvcmRlciBhbmQgcGFkZGluZyBpbiBGaXJlZm94LlxyXG4gKi9cclxuXHJcbiAgYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxyXG4gIFt0eXBlPVwiYnV0dG9uXCJdOjotbW96LWZvY3VzLWlubmVyLFxyXG4gIFt0eXBlPVwicmVzZXRcIl06Oi1tb3otZm9jdXMtaW5uZXIsXHJcbiAgW3R5cGU9XCJzdWJtaXRcIl06Oi1tb3otZm9jdXMtaW5uZXIge1xyXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gKiBSZXN0b3JlIHRoZSBmb2N1cyBzdHlsZXMgdW5zZXQgYnkgdGhlIHByZXZpb3VzIHJ1bGUuXHJcbiAqL1xyXG5cclxuICBidXR0b246LW1vei1mb2N1c3JpbmcsXHJcbiAgW3R5cGU9XCJidXR0b25cIl06LW1vei1mb2N1c3JpbmcsXHJcbiAgW3R5cGU9XCJyZXNldFwiXTotbW96LWZvY3VzcmluZyxcclxuICBbdHlwZT1cInN1Ym1pdFwiXTotbW96LWZvY3VzcmluZyB7XHJcbiAgICBvdXRsaW5lOiAxcHggZG90dGVkIEJ1dHRvblRleHQ7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICogQ29ycmVjdCB0aGUgcGFkZGluZyBpbiBGaXJlZm94LlxyXG4gKi9cclxuXHJcbiAgZmllbGRzZXQge1xyXG4gICAgcGFkZGluZzogMC4zNWVtIDAuNzVlbSAwLjYyNWVtO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAqIDEuIENvcnJlY3QgdGhlIHRleHQgd3JhcHBpbmcgaW4gRWRnZSBhbmQgSUUuXHJcbiAqIDIuIENvcnJlY3QgdGhlIGNvbG9yIGluaGVyaXRhbmNlIGZyb20gZmllbGRzZXQgZWxlbWVudHMgaW4gSUUuXHJcbiAqIDMuIFJlbW92ZSB0aGUgcGFkZGluZyBzbyBkZXZlbG9wZXJzIGFyZSBub3QgY2F1Z2h0IG91dCB3aGVuIHRoZXkgemVybyBvdXRcclxuICogICAgZmllbGRzZXQgZWxlbWVudHMgaW4gYWxsIGJyb3dzZXJzLlxyXG4gKi9cclxuXHJcbiAgbGVnZW5kIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cclxuICAgIGNvbG9yOiBpbmhlcml0OyAvKiAyICovXHJcbiAgICBkaXNwbGF5OiB0YWJsZTsgLyogMSAqL1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlOyAvKiAxICovXHJcbiAgICBwYWRkaW5nOiAwOyAvKiAzICovXHJcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsOyAvKiAxICovXHJcbiAgfVxyXG5cclxuICAvKipcclxuICogQWRkIHRoZSBjb3JyZWN0IHZlcnRpY2FsIGFsaWdubWVudCBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBPcGVyYS5cclxuICovXHJcblxyXG4gIHByb2dyZXNzIHtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gKiBSZW1vdmUgdGhlIGRlZmF1bHQgdmVydGljYWwgc2Nyb2xsYmFyIGluIElFIDEwKy5cclxuICovXHJcblxyXG4gIHRleHRhcmVhIHtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIElFIDEwLlxyXG4gKiAyLiBSZW1vdmUgdGhlIHBhZGRpbmcgaW4gSUUgMTAuXHJcbiAqL1xyXG5cclxuICBbdHlwZT1cImNoZWNrYm94XCJdLFxyXG4gIFt0eXBlPVwicmFkaW9cIl0ge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xyXG4gICAgcGFkZGluZzogMDsgLyogMiAqL1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAqIENvcnJlY3QgdGhlIGN1cnNvciBzdHlsZSBvZiBpbmNyZW1lbnQgYW5kIGRlY3JlbWVudCBidXR0b25zIGluIENocm9tZS5cclxuICovXHJcblxyXG4gIFt0eXBlPVwibnVtYmVyXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxyXG4gIFt0eXBlPVwibnVtYmVyXCJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcclxuICAgIGhlaWdodDogYXV0bztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gKiAxLiBDb3JyZWN0IHRoZSBvZGQgYXBwZWFyYW5jZSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cclxuICogMi4gQ29ycmVjdCB0aGUgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkuXHJcbiAqL1xyXG5cclxuICBbdHlwZT1cInNlYXJjaFwiXSB7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDsgLyogMSAqL1xyXG4gICAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7IC8qIDIgKi9cclxuICB9XHJcblxyXG4gIC8qIFJlbW92ZSB0aGUgaW5uZXIgcGFkZGluZyBpbiBDaHJvbWUgYW5kIFNhZmFyaSBvbiBtYWNPUy4gKi9cclxuXHJcbiAgW3R5cGU9XCJzZWFyY2hcIl06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAqIDEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXHJcbiAqIDIuIENoYW5nZSBmb250IHByb3BlcnRpZXMgdG8gaW5oZXJpdCBpbiBTYWZhcmkuXHJcbiAqL1xyXG5cclxuICA6Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAxICovXHJcbiAgICBmb250OiBpbmhlcml0OyAvKiAyICovXHJcbiAgfVxyXG5cclxuICAvKiBJbnRlcmFjdGl2ZVxyXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuICAvKlxyXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBFZGdlLCBJRSAxMCssIGFuZCBGaXJlZm94LlxyXG4gKi9cclxuXHJcbiAgZGV0YWlscyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcblxyXG4gIC8qXHJcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIGFsbCBicm93c2Vycy5cclxuICovXHJcblxyXG4gIHN1bW1hcnkge1xyXG4gICAgZGlzcGxheTogbGlzdC1pdGVtO1xyXG4gIH1cclxuXHJcbiAgLyogTWlzY1xyXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuICAvKipcclxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTArLlxyXG4gKi9cclxuXHJcbiAgdGVtcGxhdGUge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMC5cclxuICovXHJcblxyXG4gIFtoaWRkZW5dIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3NzTm9ybWFsaXplO1xyXG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};
/* harmony default export */ __webpack_exports__["default"] = (cssNormalize);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./styles/styles.tsx":
/*!***************************!*\
  !*** ./styles/styles.tsx ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ "../../.yarn/__virtual__/@emotion-react-virtual-aa322d377b/0/cache/@emotion-react-npm-11.4.0-174d777529-af2abadbae.zip/node_modules/@emotion/react/jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/react */ "../../.yarn/__virtual__/@emotion-react-virtual-aa322d377b/0/cache/@emotion-react-npm-11.4.0-174d777529-af2abadbae.zip/node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
/* harmony import */ var _cssNormalize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cssNormalize */ "./styles/cssNormalize.ts");
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "C:\\Users\\jungy\\Documents\\GitHub\\my-tutorial\\packages\\a\\styles\\styles.tsx";



var globalStyles = (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_emotion_react__WEBPACK_IMPORTED_MODULE_2__.Global, {
  styles: _cssNormalize__WEBPACK_IMPORTED_MODULE_0__.default
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 4,
  columnNumber: 22
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (globalStyles);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "../../.yarn/__virtual__/next-virtual-f84b51c559/0/cache/next-npm-11.0.1-c40bc7f380-c6b4747f1a.zip/node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.tsx!":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../.yarn/__virtual__/next-virtual-f84b51c559/0/cache/next-npm-11.0.1-c40bc7f380-c6b4747f1a.zip/node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.tsx! ***!
  \***********************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/_app",
      function () {
        return __webpack_require__(/*! private-next-pages/_app.tsx */ "./pages/_app.tsx");
      }
    ]);
  

/***/ }),

/***/ "../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/focusManager.js":
/*!************************************************************************************************************************************************************************!*\
  !*** ../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/focusManager.js ***!
  \************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "focusManager": function() { return /* binding */ focusManager; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "../../.yarn/cache/@babel-runtime-npm-7.14.8-177f7f6866-d2dd0ce51d.zip/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _subscribable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./subscribable */ "../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/subscribable.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/utils.js");




var FocusManager = /*#__PURE__*/function (_Subscribable) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__.default)(FocusManager, _Subscribable);

  function FocusManager() {
    return _Subscribable.apply(this, arguments) || this;
  }

  var _proto = FocusManager.prototype;

  _proto.onSubscribe = function onSubscribe() {
    if (!this.removeEventListener) {
      this.setDefaultEventListener();
    }
  };

  _proto.setEventListener = function setEventListener(setup) {
    var _this = this;

    if (this.removeEventListener) {
      this.removeEventListener();
    }

    this.removeEventListener = setup(function (focused) {
      if (typeof focused === 'boolean') {
        _this.setFocused(focused);
      } else {
        _this.onFocus();
      }
    });
  };

  _proto.setFocused = function setFocused(focused) {
    this.focused = focused;

    if (focused) {
      this.onFocus();
    }
  };

  _proto.onFocus = function onFocus() {
    this.listeners.forEach(function (listener) {
      listener();
    });
  };

  _proto.isFocused = function isFocused() {
    if (typeof this.focused === 'boolean') {
      return this.focused;
    } // document global can be unavailable in react native


    if (typeof document === 'undefined') {
      return true;
    }

    return [undefined, 'visible', 'prerender'].includes(document.visibilityState);
  };

  _proto.setDefaultEventListener = function setDefaultEventListener() {
    var _window;

    if (!_utils__WEBPACK_IMPORTED_MODULE_1__.isServer && ((_window = window) == null ? void 0 : _window.addEventListener)) {
      this.setEventListener(function (onFocus) {
        var listener = function listener() {
          return onFocus();
        }; // Listen to visibillitychange and focus


        window.addEventListener('visibilitychange', listener, false);
        window.addEventListener('focus', listener, false);
        return function () {
          // Be sure to unsubscribe if a new handler is set
          window.removeEventListener('visibilitychange', listener);
          window.removeEventListener('focus', listener);
        };
      });
    }
  };

  return FocusManager;
}(_subscribable__WEBPACK_IMPORTED_MODULE_2__.Subscribable);

var focusManager = new FocusManager();

/***/ }),

/***/ "../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/index.js":
/*!*****************************************************************************************************************************************************************!*\
  !*** ../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/index.js ***!
  \*****************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CancelledError": function() { return /* reexport safe */ _retryer__WEBPACK_IMPORTED_MODULE_0__.CancelledError; },
/* harmony export */   "QueryCache": function() { return /* reexport safe */ _queryCache__WEBPACK_IMPORTED_MODULE_1__.QueryCache; },
/* harmony export */   "QueryClient": function() { return /* reexport safe */ _queryClient__WEBPACK_IMPORTED_MODULE_2__.QueryClient; },
/* harmony export */   "QueryObserver": function() { return /* reexport safe */ _queryObserver__WEBPACK_IMPORTED_MODULE_3__.QueryObserver; },
/* harmony export */   "QueriesObserver": function() { return /* reexport safe */ _queriesObserver__WEBPACK_IMPORTED_MODULE_4__.QueriesObserver; },
/* harmony export */   "InfiniteQueryObserver": function() { return /* reexport safe */ _infiniteQueryObserver__WEBPACK_IMPORTED_MODULE_5__.InfiniteQueryObserver; },
/* harmony export */   "MutationCache": function() { return /* reexport safe */ _mutationCache__WEBPACK_IMPORTED_MODULE_6__.MutationCache; },
/* harmony export */   "MutationObserver": function() { return /* reexport safe */ _mutationObserver__WEBPACK_IMPORTED_MODULE_7__.MutationObserver; },
/* harmony export */   "setLogger": function() { return /* reexport safe */ _logger__WEBPACK_IMPORTED_MODULE_8__.setLogger; },
/* harmony export */   "notifyManager": function() { return /* reexport safe */ _notifyManager__WEBPACK_IMPORTED_MODULE_9__.notifyManager; },
/* harmony export */   "focusManager": function() { return /* reexport safe */ _focusManager__WEBPACK_IMPORTED_MODULE_10__.focusManager; },
/* harmony export */   "onlineManager": function() { return /* reexport safe */ _onlineManager__WEBPACK_IMPORTED_MODULE_11__.onlineManager; },
/* harmony export */   "hashQueryKey": function() { return /* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_12__.hashQueryKey; },
/* harmony export */   "isError": function() { return /* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_12__.isError; },
/* harmony export */   "isCancelledError": function() { return /* reexport safe */ _retryer__WEBPACK_IMPORTED_MODULE_0__.isCancelledError; }
/* harmony export */ });
/* harmony import */ var _retryer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./retryer */ "../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/retryer.js");
/* harmony import */ var _queryCache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./queryCache */ "../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/queryCache.js");
/* harmony import */ var _queryClient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./queryClient */ "../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/queryClient.js");
/* harmony import */ var _queryObserver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./queryObserver */ "../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/queryObserver.js");
/* harmony import */ var _queriesObserver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./queriesObserver */ "../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/queriesObserver.js");
/* harmony import */ var _infiniteQueryObserver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./infiniteQueryObserver */ "../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/infiniteQueryObserver.js");
/* harmony import */ var _mutationCache__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mutationCache */ "../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/mutationCache.js");
/* harmony import */ var _mutationObserver__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mutationObserver */ "../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/mutationObserver.js");
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./logger */ "../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/logger.js");
/* harmony import */ var _notifyManager__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./notifyManager */ "../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/notifyManager.js");
/* harmony import */ var _focusManager__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./focusManager */ "../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/focusManager.js");
/* harmony import */ var _onlineManager__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./onlineManager */ "../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/onlineManager.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./utils */ "../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/utils.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./types */ "../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/types.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_types__WEBPACK_IMPORTED_MODULE_13__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _types__WEBPACK_IMPORTED_MODULE_13__) if(["default","CancelledError","QueryCache","QueryClient","QueryObserver","QueriesObserver","InfiniteQueryObserver","MutationCache","MutationObserver","setLogger","notifyManager","focusManager","onlineManager","hashQueryKey","isError","isCancelledError"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _types__WEBPACK_IMPORTED_MODULE_13__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);













 // Types



/***/ }),

/***/ "../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/infiniteQueryBehavior.js":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/infiniteQueryBehavior.js ***!
  \*********************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "infiniteQueryBehavior": function() { return /* binding */ infiniteQueryBehavior; },
/* harmony export */   "getNextPageParam": function() { return /* binding */ getNextPageParam; },
/* harmony export */   "getPreviousPageParam": function() { return /* binding */ getPreviousPageParam; },
/* harmony export */   "hasNextPage": function() { return /* binding */ hasNextPage; },
/* harmony export */   "hasPreviousPage": function() { return /* binding */ hasPreviousPage; }
/* harmony export */ });
/* harmony import */ var _retryer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./retryer */ "../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/retryer.js");

function infiniteQueryBehavior() {
  return {
    onFetch: function onFetch(context) {
      context.fetchFn = function () {
        var _context$fetchOptions, _context$fetchOptions2, _context$state$data, _context$state$data2;

        var fetchMore = (_context$fetchOptions = context.fetchOptions) == null ? void 0 : (_context$fetchOptions2 = _context$fetchOptions.meta) == null ? void 0 : _context$fetchOptions2.fetchMore;
        var pageParam = fetchMore == null ? void 0 : fetchMore.pageParam;
        var isFetchingNextPage = (fetchMore == null ? void 0 : fetchMore.direction) === 'forward';
        var isFetchingPreviousPage = (fetchMore == null ? void 0 : fetchMore.direction) === 'backward';
        var oldPages = ((_context$state$data = context.state.data) == null ? void 0 : _context$state$data.pages) || [];
        var oldPageParams = ((_context$state$data2 = context.state.data) == null ? void 0 : _context$state$data2.pageParams) || [];
        var newPageParams = oldPageParams;
        var cancelled = false; // Get query function

        var queryFn = context.options.queryFn || function () {
          return Promise.reject('Missing queryFn');
        }; // Create function to fetch a page


        var fetchPage = function fetchPage(pages, manual, param, previous) {
          if (cancelled) {
            return Promise.reject('Cancelled');
          }

          if (typeof param === 'undefined' && !manual && pages.length) {
            return Promise.resolve(pages);
          }

          var queryFnContext = {
            queryKey: context.queryKey,
            pageParam: param
          };
          var queryFnResult = queryFn(queryFnContext);
          var promise = Promise.resolve(queryFnResult).then(function (page) {
            newPageParams = previous ? [param].concat(newPageParams) : [].concat(newPageParams, [param]);
            return previous ? [page].concat(pages) : [].concat(pages, [page]);
          });

          if ((0,_retryer__WEBPACK_IMPORTED_MODULE_0__.isCancelable)(queryFnResult)) {
            var promiseAsAny = promise;
            promiseAsAny.cancel = queryFnResult.cancel;
          }

          return promise;
        };

        var promise; // Fetch first page?

        if (!oldPages.length) {
          promise = fetchPage([]);
        } // Fetch next page?
        else if (isFetchingNextPage) {
            var manual = typeof pageParam !== 'undefined';
            var param = manual ? pageParam : getNextPageParam(context.options, oldPages);
            promise = fetchPage(oldPages, manual, param);
          } // Fetch previous page?
          else if (isFetchingPreviousPage) {
              var _manual = typeof pageParam !== 'undefined';

              var _param = _manual ? pageParam : getPreviousPageParam(context.options, oldPages);

              promise = fetchPage(oldPages, _manual, _param, true);
            } // Refetch pages
            else {
                (function () {
                  newPageParams = [];
                  var manual = typeof context.options.getNextPageParam === 'undefined'; // Fetch first page

                  promise = fetchPage([], manual, oldPageParams[0]); // Fetch remaining pages

                  var _loop = function _loop(i) {
                    promise = promise.then(function (pages) {
                      var param = manual ? oldPageParams[i] : getNextPageParam(context.options, pages);
                      return fetchPage(pages, manual, param);
                    });
                  };

                  for (var i = 1; i < oldPages.length; i++) {
                    _loop(i);
                  }
                })();
              }

        var finalPromise = promise.then(function (pages) {
          return {
            pages: pages,
            pageParams: newPageParams
          };
        });
        var finalPromiseAsAny = finalPromise;

        finalPromiseAsAny.cancel = function () {
          cancelled = true;

          if ((0,_retryer__WEBPACK_IMPORTED_MODULE_0__.isCancelable)(promise)) {
            promise.cancel();
          }
        };

        return finalPromise;
      };
    }
  };
}
function getNextPageParam(options, pages) {
  return options.getNextPageParam == null ? void 0 : options.getNextPageParam(pages[pages.length - 1], pages);
}
function getPreviousPageParam(options, pages) {
  return options.getPreviousPageParam == null ? void 0 : options.getPreviousPageParam(pages[0], pages);
}
/**
 * Checks if there is a next page.
 * Returns `undefined` if it cannot be determined.
 */

function hasNextPage(options, pages) {
  if (options.getNextPageParam && Array.isArray(pages)) {
    var nextPageParam = getNextPageParam(options, pages);
    return typeof nextPageParam !== 'undefined' && nextPageParam !== null && nextPageParam !== false;
  }
}
/**
 * Checks if there is a previous page.
 * Returns `undefined` if it cannot be determined.
 */

function hasPreviousPage(options, pages) {
  if (options.getPreviousPageParam && Array.isArray(pages)) {
    var previousPageParam = getPreviousPageParam(options, pages);
    return typeof previousPageParam !== 'undefined' && previousPageParam !== null && previousPageParam !== false;
  }
}

/***/ }),

/***/ "../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/infiniteQueryObserver.js":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/infiniteQueryObserver.js ***!
  \*********************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InfiniteQueryObserver": function() { return /* binding */ InfiniteQueryObserver; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "../../.yarn/cache/@babel-runtime-npm-7.14.8-177f7f6866-d2dd0ce51d.zip/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "../../.yarn/cache/@babel-runtime-npm-7.14.8-177f7f6866-d2dd0ce51d.zip/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _queryObserver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./queryObserver */ "../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/queryObserver.js");
/* harmony import */ var _infiniteQueryBehavior__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./infiniteQueryBehavior */ "../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/infiniteQueryBehavior.js");




var InfiniteQueryObserver = /*#__PURE__*/function (_QueryObserver) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__.default)(InfiniteQueryObserver, _QueryObserver);

  // Type override
  // Type override
  // Type override
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  function InfiniteQueryObserver(client, options) {
    return _QueryObserver.call(this, client, options) || this;
  }

  var _proto = InfiniteQueryObserver.prototype;

  _proto.bindMethods = function bindMethods() {
    _QueryObserver.prototype.bindMethods.call(this);

    this.fetchNextPage = this.fetchNextPage.bind(this);
    this.fetchPreviousPage = this.fetchPreviousPage.bind(this);
  };

  _proto.setOptions = function setOptions(options) {
    _QueryObserver.prototype.setOptions.call(this, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, options, {
      behavior: (0,_infiniteQueryBehavior__WEBPACK_IMPORTED_MODULE_2__.infiniteQueryBehavior)()
    }));
  };

  _proto.getOptimisticResult = function getOptimisticResult(options) {
    options.behavior = (0,_infiniteQueryBehavior__WEBPACK_IMPORTED_MODULE_2__.infiniteQueryBehavior)();
    return _QueryObserver.prototype.getOptimisticResult.call(this, options);
  };

  _proto.fetchNextPage = function fetchNextPage(options) {
    return this.fetch({
      cancelRefetch: true,
      throwOnError: options == null ? void 0 : options.throwOnError,
      meta: {
        fetchMore: {
          direction: 'forward',
          pageParam: options == null ? void 0 : options.pageParam
        }
      }
    });
  };

  _proto.fetchPreviousPage = function fetchPreviousPage(options) {
    return this.fetch({
      cancelRefetch: true,
      throwOnError: options == null ? void 0 : options.throwOnError,
      meta: {
        fetchMore: {
          direction: 'backward',
          pageParam: options == null ? void 0 : options.pageParam
        }
      }
    });
  };

  _proto.createResult = function createResult(query, options) {
    var _state$data, _state$data2, _state$fetchMeta, _state$fetchMeta$fetc, _state$fetchMeta2, _state$fetchMeta2$fet;

    var state = query.state;

    var result = _QueryObserver.prototype.createResult.call(this, query, options);

    return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, result, {
      fetchNextPage: this.fetchNextPage,
      fetchPreviousPage: this.fetchPreviousPage,
      hasNextPage: (0,_infiniteQueryBehavior__WEBPACK_IMPORTED_MODULE_2__.hasNextPage)(options, (_state$data = state.data) == null ? void 0 : _state$data.pages),
      hasPreviousPage: (0,_infiniteQueryBehavior__WEBPACK_IMPORTED_MODULE_2__.hasPreviousPage)(options, (_state$data2 = state.data) == null ? void 0 : _state$data2.pages),
      isFetchingNextPage: state.isFetching && ((_state$fetchMeta = state.fetchMeta) == null ? void 0 : (_state$fetchMeta$fetc = _state$fetchMeta.fetchMore) == null ? void 0 : _state$fetchMeta$fetc.direction) === 'forward',
      isFetchingPreviousPage: state.isFetching && ((_state$fetchMeta2 = state.fetchMeta) == null ? void 0 : (_state$fetchMeta2$fet = _state$fetchMeta2.fetchMore) == null ? void 0 : _state$fetchMeta2$fet.direction) === 'backward'
    });
  };

  return InfiniteQueryObserver;
}(_queryObserver__WEBPACK_IMPORTED_MODULE_3__.QueryObserver);

/***/ }),

/***/ "../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/logger.js":
/*!******************************************************************************************************************************************************************!*\
  !*** ../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/logger.js ***!
  \******************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getLogger": function() { return /* binding */ getLogger; },
/* harmony export */   "setLogger": function() { return /* binding */ setLogger; }
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/utils.js");
 // TYPES

// FUNCTIONS
var logger = console || {
  error: _utils__WEBPACK_IMPORTED_MODULE_0__.noop,
  warn: _utils__WEBPACK_IMPORTED_MODULE_0__.noop,
  log: _utils__WEBPACK_IMPORTED_MODULE_0__.noop
};
function getLogger() {
  return logger;
}
function setLogger(newLogger) {
  logger = newLogger;
}

/***/ }),

/***/ "../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/mutation.js":
/*!********************************************************************************************************************************************************************!*\
  !*** ../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/mutation.js ***!
  \********************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Mutation": function() { return /* binding */ Mutation; },
/* harmony export */   "getDefaultState": function() { return /* binding */ getDefaultState; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "../../.yarn/cache/@babel-runtime-npm-7.14.8-177f7f6866-d2dd0ce51d.zip/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logger */ "../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/logger.js");
/* harmony import */ var _notifyManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./notifyManager */ "../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/notifyManager.js");
/* harmony import */ var _retryer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./retryer */ "../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/retryer.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/utils.js");




 // TYPES

// CLASS
var Mutation = /*#__PURE__*/function () {
  function Mutation(config) {
    this.options = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, config.defaultOptions, config.options);
    this.mutationId = config.mutationId;
    this.mutationCache = config.mutationCache;
    this.observers = [];
    this.state = config.state || getDefaultState();
  }

  var _proto = Mutation.prototype;

  _proto.setState = function setState(state) {
    this.dispatch({
      type: 'setState',
      state: state
    });
  };

  _proto.addObserver = function addObserver(observer) {
    if (this.observers.indexOf(observer) === -1) {
      this.observers.push(observer);
    }
  };

  _proto.removeObserver = function removeObserver(observer) {
    this.observers = this.observers.filter(function (x) {
      return x !== observer;
    });
  };

  _proto.cancel = function cancel() {
    if (this.retryer) {
      this.retryer.cancel();
      return this.retryer.promise.then(_utils__WEBPACK_IMPORTED_MODULE_1__.noop).catch(_utils__WEBPACK_IMPORTED_MODULE_1__.noop);
    }

    return Promise.resolve();
  };

  _proto.continue = function _continue() {
    if (this.retryer) {
      this.retryer.continue();
      return this.retryer.promise;
    }

    return this.execute();
  };

  _proto.execute = function execute() {
    var _this = this;

    var data;
    var restored = this.state.status === 'loading';
    var promise = Promise.resolve();

    if (!restored) {
      this.dispatch({
        type: 'loading',
        variables: this.options.variables
      });
      promise = promise.then(function () {
        return _this.options.onMutate == null ? void 0 : _this.options.onMutate(_this.state.variables);
      }).then(function (context) {
        if (context !== _this.state.context) {
          _this.dispatch({
            type: 'loading',
            context: context,
            variables: _this.state.variables
          });
        }
      });
    }

    return promise.then(function () {
      return _this.executeMutation();
    }).then(function (result) {
      data = result; // Notify cache callback

      _this.mutationCache.config.onSuccess == null ? void 0 : _this.mutationCache.config.onSuccess(data, _this.state.variables, _this.state.context, _this);
    }).then(function () {
      return _this.options.onSuccess == null ? void 0 : _this.options.onSuccess(data, _this.state.variables, _this.state.context);
    }).then(function () {
      return _this.options.onSettled == null ? void 0 : _this.options.onSettled(data, null, _this.state.variables, _this.state.context);
    }).then(function () {
      _this.dispatch({
        type: 'success',
        data: data
      });

      return data;
    }).catch(function (error) {
      // Notify cache callback
      _this.mutationCache.config.onError == null ? void 0 : _this.mutationCache.config.onError(error, _this.state.variables, _this.state.context, _this); // Log error

      (0,_logger__WEBPACK_IMPORTED_MODULE_2__.getLogger)().error(error);
      return Promise.resolve().then(function () {
        return _this.options.onError == null ? void 0 : _this.options.onError(error, _this.state.variables, _this.state.context);
      }).then(function () {
        return _this.options.onSettled == null ? void 0 : _this.options.onSettled(undefined, error, _this.state.variables, _this.state.context);
      }).then(function () {
        _this.dispatch({
          type: 'error',
          error: error
        });

        throw error;
      });
    });
  };

  _proto.executeMutation = function executeMutation() {
    var _this2 = this,
        _this$options$retry;

    this.retryer = new _retryer__WEBPACK_IMPORTED_MODULE_3__.Retryer({
      fn: function fn() {
        if (!_this2.options.mutationFn) {
          return Promise.reject('No mutationFn found');
        }

        return _this2.options.mutationFn(_this2.state.variables);
      },
      onFail: function onFail() {
        _this2.dispatch({
          type: 'failed'
        });
      },
      onPause: function onPause() {
        _this2.dispatch({
          type: 'pause'
        });
      },
      onContinue: function onContinue() {
        _this2.dispatch({
          type: 'continue'
        });
      },
      retry: (_this$options$retry = this.options.retry) != null ? _this$options$retry : 0,
      retryDelay: this.options.retryDelay
    });
    return this.retryer.promise;
  };

  _proto.dispatch = function dispatch(action) {
    var _this3 = this;

    this.state = reducer(this.state, action);
    _notifyManager__WEBPACK_IMPORTED_MODULE_4__.notifyManager.batch(function () {
      _this3.observers.forEach(function (observer) {
        observer.onMutationUpdate(action);
      });

      _this3.mutationCache.notify(_this3);
    });
  };

  return Mutation;
}();
function getDefaultState() {
  return {
    context: undefined,
    data: undefined,
    error: null,
    failureCount: 0,
    isPaused: false,
    status: 'idle',
    variables: undefined
  };
}

function reducer(state, action) {
  switch (action.type) {
    case 'failed':
      return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, state, {
        failureCount: state.failureCount + 1
      });

    case 'pause':
      return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, state, {
        isPaused: true
      });

    case 'continue':
      return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, state, {
        isPaused: false
      });

    case 'loading':
      return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, state, {
        context: action.context,
        data: undefined,
        error: null,
        isPaused: false,
        status: 'loading',
        variables: action.variables
      });

    case 'success':
      return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, state, {
        data: action.data,
        error: null,
        status: 'success',
        isPaused: false
      });

    case 'error':
      return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, state, {
        data: undefined,
        error: action.error,
        failureCount: state.failureCount + 1,
        isPaused: false,
        status: 'error'
      });

    case 'setState':
      return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, state, action.state);

    default:
      return state;
  }
}

/***/ }),

/***/ "../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/mutationCache.js":
/*!*************************************************************************************************************************************************************************!*\
  !*** ../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/mutationCache.js ***!
  \*************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MutationCache": function() { return /* binding */ MutationCache; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "../../.yarn/cache/@babel-runtime-npm-7.14.8-177f7f6866-d2dd0ce51d.zip/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _notifyManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notifyManager */ "../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/notifyManager.js");
/* harmony import */ var _mutation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mutation */ "../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/mutation.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/utils.js");
/* harmony import */ var _subscribable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./subscribable */ "../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/subscribable.js");




 // TYPES

// CLASS
var MutationCache = /*#__PURE__*/function (_Subscribable) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__.default)(MutationCache, _Subscribable);

  function MutationCache(config) {
    var _this;

    _this = _Subscribable.call(this) || this;
    _this.config = config || {};
    _this.mutations = [];
    _this.mutationId = 0;
    return _this;
  }

  var _proto = MutationCache.prototype;

  _proto.build = function build(client, options, state) {
    var mutation = new _mutation__WEBPACK_IMPORTED_MODULE_1__.Mutation({
      mutationCache: this,
      mutationId: ++this.mutationId,
      options: client.defaultMutationOptions(options),
      state: state,
      defaultOptions: options.mutationKey ? client.getMutationDefaults(options.mutationKey) : undefined
    });
    this.add(mutation);
    return mutation;
  };

  _proto.add = function add(mutation) {
    this.mutations.push(mutation);
    this.notify(mutation);
  };

  _proto.remove = function remove(mutation) {
    this.mutations = this.mutations.filter(function (x) {
      return x !== mutation;
    });
    mutation.cancel();
    this.notify(mutation);
  };

  _proto.clear = function clear() {
    var _this2 = this;

    _notifyManager__WEBPACK_IMPORTED_MODULE_2__.notifyManager.batch(function () {
      _this2.mutations.forEach(function (mutation) {
        _this2.remove(mutation);
      });
    });
  };

  _proto.getAll = function getAll() {
    return this.mutations;
  };

  _proto.find = function find(filters) {
    if (typeof filters.exact === 'undefined') {
      filters.exact = true;
    }

    return this.mutations.find(function (mutation) {
      return (0,_utils__WEBPACK_IMPORTED_MODULE_3__.matchMutation)(filters, mutation);
    });
  };

  _proto.findAll = function findAll(filters) {
    return this.mutations.filter(function (mutation) {
      return (0,_utils__WEBPACK_IMPORTED_MODULE_3__.matchMutation)(filters, mutation);
    });
  };

  _proto.notify = function notify(mutation) {
    var _this3 = this;

    _notifyManager__WEBPACK_IMPORTED_MODULE_2__.notifyManager.batch(function () {
      _this3.listeners.forEach(function (listener) {
        listener(mutation);
      });
    });
  };

  _proto.onFocus = function onFocus() {
    this.resumePausedMutations();
  };

  _proto.onOnline = function onOnline() {
    this.resumePausedMutations();
  };

  _proto.resumePausedMutations = function resumePausedMutations() {
    var pausedMutations = this.mutations.filter(function (x) {
      return x.state.isPaused;
    });
    return _notifyManager__WEBPACK_IMPORTED_MODULE_2__.notifyManager.batch(function () {
      return pausedMutations.reduce(function (promise, mutation) {
        return promise.then(function () {
          return mutation.continue().catch(_utils__WEBPACK_IMPORTED_MODULE_3__.noop);
        });
      }, Promise.resolve());
    });
  };

  return MutationCache;
}(_subscribable__WEBPACK_IMPORTED_MODULE_4__.Subscribable);

/***/ }),

/***/ "../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/mutationObserver.js":
/*!****************************************************************************************************************************************************************************!*\
  !*** ../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/mutationObserver.js ***!
  \****************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MutationObserver": function() { return /* binding */ MutationObserver; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "../../.yarn/cache/@babel-runtime-npm-7.14.8-177f7f6866-d2dd0ce51d.zip/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "../../.yarn/cache/@babel-runtime-npm-7.14.8-177f7f6866-d2dd0ce51d.zip/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _mutation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mutation */ "../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/mutation.js");
/* harmony import */ var _notifyManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notifyManager */ "../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/notifyManager.js");
/* harmony import */ var _subscribable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./subscribable */ "../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/subscribable.js");





// CLASS
var MutationObserver = /*#__PURE__*/function (_Subscribable) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__.default)(MutationObserver, _Subscribable);

  function MutationObserver(client, options) {
    var _this;

    _this = _Subscribable.call(this) || this;
    _this.client = client;

    _this.setOptions(options);

    _this.bindMethods();

    _this.updateResult();

    return _this;
  }

  var _proto = MutationObserver.prototype;

  _proto.bindMethods = function bindMethods() {
    this.mutate = this.mutate.bind(this);
    this.reset = this.reset.bind(this);
  };

  _proto.setOptions = function setOptions(options) {
    this.options = this.client.defaultMutationOptions(options);
  };

  _proto.onUnsubscribe = function onUnsubscribe() {
    if (!this.listeners.length) {
      var _this$currentMutation;

      (_this$currentMutation = this.currentMutation) == null ? void 0 : _this$currentMutation.removeObserver(this);
    }
  };

  _proto.onMutationUpdate = function onMutationUpdate(action) {
    this.updateResult(); // Determine which callbacks to trigger

    var notifyOptions = {
      listeners: true
    };

    if (action.type === 'success') {
      notifyOptions.onSuccess = true;
    } else if (action.type === 'error') {
      notifyOptions.onError = true;
    }

    this.notify(notifyOptions);
  };

  _proto.getCurrentResult = function getCurrentResult() {
    return this.currentResult;
  };

  _proto.reset = function reset() {
    this.currentMutation = undefined;
    this.updateResult();
    this.notify({
      listeners: true
    });
  };

  _proto.mutate = function mutate(variables, options) {
    this.mutateOptions = options;

    if (this.currentMutation) {
      this.currentMutation.removeObserver(this);
    }

    this.currentMutation = this.client.getMutationCache().build(this.client, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, this.options, {
      variables: typeof variables !== 'undefined' ? variables : this.options.variables
    }));
    this.currentMutation.addObserver(this);
    return this.currentMutation.execute();
  };

  _proto.updateResult = function updateResult() {
    var state = this.currentMutation ? this.currentMutation.state : (0,_mutation__WEBPACK_IMPORTED_MODULE_2__.getDefaultState)();
    this.currentResult = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, state, {
      isLoading: state.status === 'loading',
      isSuccess: state.status === 'success',
      isError: state.status === 'error',
      isIdle: state.status === 'idle',
      mutate: this.mutate,
      reset: this.reset
    });
  };

  _proto.notify = function notify(options) {
    var _this2 = this;

    _notifyManager__WEBPACK_IMPORTED_MODULE_3__.notifyManager.batch(function () {
      // First trigger the mutate callbacks
      if (_this2.mutateOptions) {
        if (options.onSuccess) {
          _this2.mutateOptions.onSuccess == null ? void 0 : _this2.mutateOptions.onSuccess(_this2.currentResult.data, _this2.currentResult.variables, _this2.currentResult.context);
          _this2.mutateOptions.onSettled == null ? void 0 : _this2.mutateOptions.onSettled(_this2.currentResult.data, null, _this2.currentResult.variables, _this2.currentResult.context);
        } else if (options.onError) {
          _this2.mutateOptions.onError == null ? void 0 : _this2.mutateOptions.onError(_this2.currentResult.error, _this2.currentResult.variables, _this2.currentResult.context);
          _this2.mutateOptions.onSettled == null ? void 0 : _this2.mutateOptions.onSettled(undefined, _this2.currentResult.error, _this2.currentResult.variables, _this2.currentResult.context);
        }
      } // Then trigger the listeners


      if (options.listeners) {
        _this2.listeners.forEach(function (listener) {
          listener(_this2.currentResult);
        });
      }
    });
  };

  return MutationObserver;
}(_subscribable__WEBPACK_IMPORTED_MODULE_4__.Subscribable);

/***/ }),

/***/ "../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/notifyManager.js":
/*!*************************************************************************************************************************************************************************!*\
  !*** ../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/notifyManager.js ***!
  \*************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "notifyManager": function() { return /* binding */ notifyManager; }
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/utils.js");
 // TYPES

// CLASS
var NotifyManager = /*#__PURE__*/function () {
  function NotifyManager() {
    this.queue = [];
    this.transactions = 0;

    this.notifyFn = function (callback) {
      callback();
    };

    this.batchNotifyFn = function (callback) {
      callback();
    };
  }

  var _proto = NotifyManager.prototype;

  _proto.batch = function batch(callback) {
    this.transactions++;
    var result = callback();
    this.transactions--;

    if (!this.transactions) {
      this.flush();
    }

    return result;
  };

  _proto.schedule = function schedule(callback) {
    var _this = this;

    if (this.transactions) {
      this.queue.push(callback);
    } else {
      (0,_utils__WEBPACK_IMPORTED_MODULE_0__.scheduleMicrotask)(function () {
        _this.notifyFn(callback);
      });
    }
  }
  /**
   * All calls to the wrapped function will be batched.
   */
  ;

  _proto.batchCalls = function batchCalls(callback) {
    var _this2 = this;

    return function () {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this2.schedule(function () {
        callback.apply(void 0, args);
      });
    };
  };

  _proto.flush = function flush() {
    var _this3 = this;

    var queue = this.queue;
    this.queue = [];

    if (queue.length) {
      (0,_utils__WEBPACK_IMPORTED_MODULE_0__.scheduleMicrotask)(function () {
        _this3.batchNotifyFn(function () {
          queue.forEach(function (callback) {
            _this3.notifyFn(callback);
          });
        });
      });
    }
  }
  /**
   * Use this method to set a custom notify function.
   * This can be used to for example wrap notifications with `React.act` while running tests.
   */
  ;

  _proto.setNotifyFunction = function setNotifyFunction(fn) {
    this.notifyFn = fn;
  }
  /**
   * Use this method to set a custom function to batch notifications together into a single tick.
   * By default React Query will use the batch function provided by ReactDOM or React Native.
   */
  ;

  _proto.setBatchNotifyFunction = function setBatchNotifyFunction(fn) {
    this.batchNotifyFn = fn;
  };

  return NotifyManager;
}(); // SINGLETON


var notifyManager = new NotifyManager();

/***/ }),

/***/ "../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/onlineManager.js":
/*!*************************************************************************************************************************************************************************!*\
  !*** ../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/onlineManager.js ***!
  \*************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "onlineManager": function() { return /* binding */ onlineManager; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "../../.yarn/cache/@babel-runtime-npm-7.14.8-177f7f6866-d2dd0ce51d.zip/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _subscribable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./subscribable */ "../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/subscribable.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/utils.js");




var OnlineManager = /*#__PURE__*/function (_Subscribable) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__.default)(OnlineManager, _Subscribable);

  function OnlineManager() {
    return _Subscribable.apply(this, arguments) || this;
  }

  var _proto = OnlineManager.prototype;

  _proto.onSubscribe = function onSubscribe() {
    if (!this.removeEventListener) {
      this.setDefaultEventListener();
    }
  };

  _proto.setEventListener = function setEventListener(setup) {
    var _this = this;

    if (this.removeEventListener) {
      this.removeEventListener();
    }

    this.removeEventListener = setup(function (online) {
      if (typeof online === 'boolean') {
        _this.setOnline(online);
      } else {
        _this.onOnline();
      }
    });
  };

  _proto.setOnline = function setOnline(online) {
    this.online = online;

    if (online) {
      this.onOnline();
    }
  };

  _proto.onOnline = function onOnline() {
    this.listeners.forEach(function (listener) {
      listener();
    });
  };

  _proto.isOnline = function isOnline() {
    if (typeof this.online === 'boolean') {
      return this.online;
    }

    if (typeof navigator === 'undefined' || typeof navigator.onLine === 'undefined') {
      return true;
    }

    return navigator.onLine;
  };

  _proto.setDefaultEventListener = function setDefaultEventListener() {
    var _window;

    if (!_utils__WEBPACK_IMPORTED_MODULE_1__.isServer && ((_window = window) == null ? void 0 : _window.addEventListener)) {
      this.setEventListener(function (onOnline) {
        var listener = function listener() {
          return onOnline();
        }; // Listen to online


        window.addEventListener('online', listener, false);
        window.addEventListener('offline', listener, false);
        return function () {
          // Be sure to unsubscribe if a new handler is set
          window.removeEventListener('online', listener);
          window.removeEventListener('offline', listener);
        };
      });
    }
  };

  return OnlineManager;
}(_subscribable__WEBPACK_IMPORTED_MODULE_2__.Subscribable);

var onlineManager = new OnlineManager();

/***/ }),

/***/ "../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/queriesObserver.js":
/*!***************************************************************************************************************************************************************************!*\
  !*** ../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/queriesObserver.js ***!
  \***************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QueriesObserver": function() { return /* binding */ QueriesObserver; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "../../.yarn/cache/@babel-runtime-npm-7.14.8-177f7f6866-d2dd0ce51d.zip/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/utils.js");
/* harmony import */ var _notifyManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notifyManager */ "../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/notifyManager.js");
/* harmony import */ var _queryObserver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./queryObserver */ "../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/queryObserver.js");
/* harmony import */ var _subscribable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./subscribable */ "../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/subscribable.js");





var QueriesObserver = /*#__PURE__*/function (_Subscribable) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__.default)(QueriesObserver, _Subscribable);

  function QueriesObserver(client, queries) {
    var _this;

    _this = _Subscribable.call(this) || this;
    _this.client = client;
    _this.queries = [];
    _this.result = [];
    _this.observers = [];
    _this.observersMap = {};

    if (queries) {
      _this.setQueries(queries);
    }

    return _this;
  }

  var _proto = QueriesObserver.prototype;

  _proto.onSubscribe = function onSubscribe() {
    var _this2 = this;

    if (this.listeners.length === 1) {
      this.observers.forEach(function (observer) {
        observer.subscribe(function (result) {
          _this2.onUpdate(observer, result);
        });
      });
    }
  };

  _proto.onUnsubscribe = function onUnsubscribe() {
    if (!this.listeners.length) {
      this.destroy();
    }
  };

  _proto.destroy = function destroy() {
    this.listeners = [];
    this.observers.forEach(function (observer) {
      observer.destroy();
    });
  };

  _proto.setQueries = function setQueries(queries, notifyOptions) {
    this.queries = queries;
    this.updateObservers(notifyOptions);
  };

  _proto.getCurrentResult = function getCurrentResult() {
    return this.result;
  };

  _proto.getOptimisticResult = function getOptimisticResult(queries) {
    var _this3 = this;

    return queries.map(function (options) {
      var defaultedOptions = _this3.client.defaultQueryObserverOptions(options);

      return _this3.getObserver(defaultedOptions).getOptimisticResult(defaultedOptions);
    });
  };

  _proto.getObserver = function getObserver(options) {
    var defaultedOptions = this.client.defaultQueryObserverOptions(options);
    return this.observersMap[defaultedOptions.queryHash] || new _queryObserver__WEBPACK_IMPORTED_MODULE_1__.QueryObserver(this.client, defaultedOptions);
  };

  _proto.updateObservers = function updateObservers(notifyOptions) {
    var _this4 = this;

    _notifyManager__WEBPACK_IMPORTED_MODULE_2__.notifyManager.batch(function () {
      var hasIndexChange = false;
      var prevObservers = _this4.observers;
      var prevOberversMap = _this4.observersMap;
      var newResult = [];
      var newObservers = [];
      var newObserversMap = {};

      _this4.queries.forEach(function (options, i) {
        var defaultedOptions = _this4.client.defaultQueryObserverOptions(options);

        var queryHash = defaultedOptions.queryHash;

        var observer = _this4.getObserver(defaultedOptions);

        if (prevOberversMap[queryHash]) {
          observer.setOptions(defaultedOptions, notifyOptions);
        }

        if (observer !== prevObservers[i]) {
          hasIndexChange = true;
        }

        newObservers.push(observer);
        newResult.push(observer.getCurrentResult());
        newObserversMap[queryHash] = observer;
      });

      if (prevObservers.length === newObservers.length && !hasIndexChange) {
        return;
      }

      _this4.observers = newObservers;
      _this4.observersMap = newObserversMap;
      _this4.result = newResult;

      if (!_this4.hasListeners()) {
        return;
      }

      (0,_utils__WEBPACK_IMPORTED_MODULE_3__.difference)(prevObservers, newObservers).forEach(function (observer) {
        observer.destroy();
      });
      (0,_utils__WEBPACK_IMPORTED_MODULE_3__.difference)(newObservers, prevObservers).forEach(function (observer) {
        observer.subscribe(function (result) {
          _this4.onUpdate(observer, result);
        });
      });

      _this4.notify();
    });
  };

  _proto.onUpdate = function onUpdate(observer, result) {
    var index = this.observers.indexOf(observer);

    if (index !== -1) {
      this.result = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.replaceAt)(this.result, index, result);
      this.notify();
    }
  };

  _proto.notify = function notify() {
    var _this5 = this;

    _notifyManager__WEBPACK_IMPORTED_MODULE_2__.notifyManager.batch(function () {
      _this5.listeners.forEach(function (listener) {
        listener(_this5.result);
      });
    });
  };

  return QueriesObserver;
}(_subscribable__WEBPACK_IMPORTED_MODULE_4__.Subscribable);

/***/ }),

/***/ "../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/query.js":
/*!*****************************************************************************************************************************************************************!*\
  !*** ../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/query.js ***!
  \*****************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Query": function() { return /* binding */ Query; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "../../.yarn/cache/@babel-runtime-npm-7.14.8-177f7f6866-d2dd0ce51d.zip/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/utils.js");
/* harmony import */ var _notifyManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./notifyManager */ "../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/notifyManager.js");
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logger */ "../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/logger.js");
/* harmony import */ var _retryer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./retryer */ "../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/retryer.js");




 // TYPES

// CLASS
var Query = /*#__PURE__*/function () {
  function Query(config) {
    this.defaultOptions = config.defaultOptions;
    this.setOptions(config.options);
    this.observers = [];
    this.cache = config.cache;
    this.queryKey = config.queryKey;
    this.queryHash = config.queryHash;
    this.initialState = config.state || this.getDefaultState(this.options);
    this.state = this.initialState;
    this.scheduleGc();
  }

  var _proto = Query.prototype;

  _proto.setOptions = function setOptions(options) {
    var _this$options$cacheTi;

    this.options = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, this.defaultOptions, options); // Default to 5 minutes if not cache time is set

    this.cacheTime = Math.max(this.cacheTime || 0, (_this$options$cacheTi = this.options.cacheTime) != null ? _this$options$cacheTi : 5 * 60 * 1000);
  };

  _proto.setDefaultOptions = function setDefaultOptions(options) {
    this.defaultOptions = options;
  };

  _proto.scheduleGc = function scheduleGc() {
    var _this = this;

    this.clearGcTimeout();

    if ((0,_utils__WEBPACK_IMPORTED_MODULE_1__.isValidTimeout)(this.cacheTime)) {
      this.gcTimeout = setTimeout(function () {
        _this.optionalRemove();
      }, this.cacheTime);
    }
  };

  _proto.clearGcTimeout = function clearGcTimeout() {
    clearTimeout(this.gcTimeout);
    this.gcTimeout = undefined;
  };

  _proto.optionalRemove = function optionalRemove() {
    if (!this.observers.length && !this.state.isFetching) {
      this.cache.remove(this);
    }
  };

  _proto.setData = function setData(updater, options) {
    var _this$options$isDataE, _this$options;

    var prevData = this.state.data; // Get the new data

    var data = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.functionalUpdate)(updater, prevData); // Use prev data if an isDataEqual function is defined and returns `true`

    if ((_this$options$isDataE = (_this$options = this.options).isDataEqual) == null ? void 0 : _this$options$isDataE.call(_this$options, prevData, data)) {
      data = prevData;
    } else if (this.options.structuralSharing !== false) {
      // Structurally share data between prev and new data if needed
      data = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.replaceEqualDeep)(prevData, data);
    } // Set data and mark it as cached


    this.dispatch({
      data: data,
      type: 'success',
      dataUpdatedAt: options == null ? void 0 : options.updatedAt
    });
    return data;
  };

  _proto.setState = function setState(state, setStateOptions) {
    this.dispatch({
      type: 'setState',
      state: state,
      setStateOptions: setStateOptions
    });
  };

  _proto.cancel = function cancel(options) {
    var _this$retryer;

    var promise = this.promise;
    (_this$retryer = this.retryer) == null ? void 0 : _this$retryer.cancel(options);
    return promise ? promise.then(_utils__WEBPACK_IMPORTED_MODULE_1__.noop).catch(_utils__WEBPACK_IMPORTED_MODULE_1__.noop) : Promise.resolve();
  };

  _proto.destroy = function destroy() {
    this.clearGcTimeout();
    this.cancel({
      silent: true
    });
  };

  _proto.reset = function reset() {
    this.destroy();
    this.setState(this.initialState);
  };

  _proto.isActive = function isActive() {
    return this.observers.some(function (observer) {
      return observer.options.enabled !== false;
    });
  };

  _proto.isFetching = function isFetching() {
    return this.state.isFetching;
  };

  _proto.isStale = function isStale() {
    return this.state.isInvalidated || !this.state.dataUpdatedAt || this.observers.some(function (observer) {
      return observer.getCurrentResult().isStale;
    });
  };

  _proto.isStaleByTime = function isStaleByTime(staleTime) {
    if (staleTime === void 0) {
      staleTime = 0;
    }

    return this.state.isInvalidated || !this.state.dataUpdatedAt || !(0,_utils__WEBPACK_IMPORTED_MODULE_1__.timeUntilStale)(this.state.dataUpdatedAt, staleTime);
  };

  _proto.onFocus = function onFocus() {
    var _this$retryer2;

    var observer = this.observers.find(function (x) {
      return x.shouldFetchOnWindowFocus();
    });

    if (observer) {
      observer.refetch();
    } // Continue fetch if currently paused


    (_this$retryer2 = this.retryer) == null ? void 0 : _this$retryer2.continue();
  };

  _proto.onOnline = function onOnline() {
    var _this$retryer3;

    var observer = this.observers.find(function (x) {
      return x.shouldFetchOnReconnect();
    });

    if (observer) {
      observer.refetch();
    } // Continue fetch if currently paused


    (_this$retryer3 = this.retryer) == null ? void 0 : _this$retryer3.continue();
  };

  _proto.addObserver = function addObserver(observer) {
    if (this.observers.indexOf(observer) === -1) {
      this.observers.push(observer); // Stop the query from being garbage collected

      this.clearGcTimeout();
      this.cache.notify({
        type: 'observerAdded',
        query: this,
        observer: observer
      });
    }
  };

  _proto.removeObserver = function removeObserver(observer) {
    if (this.observers.indexOf(observer) !== -1) {
      this.observers = this.observers.filter(function (x) {
        return x !== observer;
      });

      if (!this.observers.length) {
        // If the transport layer does not support cancellation
        // we'll let the query continue so the result can be cached
        if (this.retryer) {
          if (this.retryer.isTransportCancelable) {
            this.retryer.cancel({
              revert: true
            });
          } else {
            this.retryer.cancelRetry();
          }
        }

        if (this.cacheTime) {
          this.scheduleGc();
        } else {
          this.cache.remove(this);
        }
      }

      this.cache.notify({
        type: 'observerRemoved',
        query: this,
        observer: observer
      });
    }
  };

  _proto.getObserversCount = function getObserversCount() {
    return this.observers.length;
  };

  _proto.invalidate = function invalidate() {
    if (!this.state.isInvalidated) {
      this.dispatch({
        type: 'invalidate'
      });
    }
  };

  _proto.fetch = function fetch(options, fetchOptions) {
    var _this2 = this,
        _this$options$behavio,
        _context$fetchOptions;

    if (this.state.isFetching) {
      if (this.state.dataUpdatedAt && (fetchOptions == null ? void 0 : fetchOptions.cancelRefetch)) {
        // Silently cancel current fetch if the user wants to cancel refetches
        this.cancel({
          silent: true
        });
      } else if (this.promise) {
        // Return current promise if we are already fetching
        return this.promise;
      }
    } // Update config if passed, otherwise the config from the last execution is used


    if (options) {
      this.setOptions(options);
    } // Use the options from the first observer with a query function if no function is found.
    // This can happen when the query is hydrated or created with setQueryData.


    if (!this.options.queryFn) {
      var observer = this.observers.find(function (x) {
        return x.options.queryFn;
      });

      if (observer) {
        this.setOptions(observer.options);
      }
    }

    var queryKey = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.ensureQueryKeyArray)(this.queryKey); // Create query function context

    var queryFnContext = {
      queryKey: queryKey,
      pageParam: undefined
    }; // Create fetch function

    var fetchFn = function fetchFn() {
      return _this2.options.queryFn ? _this2.options.queryFn(queryFnContext) : Promise.reject('Missing queryFn');
    }; // Trigger behavior hook


    var context = {
      fetchOptions: fetchOptions,
      options: this.options,
      queryKey: queryKey,
      state: this.state,
      fetchFn: fetchFn
    };

    if ((_this$options$behavio = this.options.behavior) == null ? void 0 : _this$options$behavio.onFetch) {
      var _this$options$behavio2;

      (_this$options$behavio2 = this.options.behavior) == null ? void 0 : _this$options$behavio2.onFetch(context);
    } // Store state in case the current fetch needs to be reverted


    this.revertState = this.state; // Set to fetching state if not already in it

    if (!this.state.isFetching || this.state.fetchMeta !== ((_context$fetchOptions = context.fetchOptions) == null ? void 0 : _context$fetchOptions.meta)) {
      var _context$fetchOptions2;

      this.dispatch({
        type: 'fetch',
        meta: (_context$fetchOptions2 = context.fetchOptions) == null ? void 0 : _context$fetchOptions2.meta
      });
    } // Try to fetch the data


    this.retryer = new _retryer__WEBPACK_IMPORTED_MODULE_2__.Retryer({
      fn: context.fetchFn,
      onSuccess: function onSuccess(data) {
        _this2.setData(data); // Notify cache callback


        _this2.cache.config.onSuccess == null ? void 0 : _this2.cache.config.onSuccess(data, _this2); // Remove query after fetching if cache time is 0

        if (_this2.cacheTime === 0) {
          _this2.optionalRemove();
        }
      },
      onError: function onError(error) {
        // Optimistically update state if needed
        if (!((0,_retryer__WEBPACK_IMPORTED_MODULE_2__.isCancelledError)(error) && error.silent)) {
          _this2.dispatch({
            type: 'error',
            error: error
          });
        }

        if (!(0,_retryer__WEBPACK_IMPORTED_MODULE_2__.isCancelledError)(error)) {
          // Notify cache callback
          _this2.cache.config.onError == null ? void 0 : _this2.cache.config.onError(error, _this2); // Log error

          (0,_logger__WEBPACK_IMPORTED_MODULE_3__.getLogger)().error(error);
        } // Remove query after fetching if cache time is 0


        if (_this2.cacheTime === 0) {
          _this2.optionalRemove();
        }
      },
      onFail: function onFail() {
        _this2.dispatch({
          type: 'failed'
        });
      },
      onPause: function onPause() {
        _this2.dispatch({
          type: 'pause'
        });
      },
      onContinue: function onContinue() {
        _this2.dispatch({
          type: 'continue'
        });
      },
      retry: context.options.retry,
      retryDelay: context.options.retryDelay
    });
    this.promise = this.retryer.promise;
    return this.promise;
  };

  _proto.dispatch = function dispatch(action) {
    var _this3 = this;

    this.state = this.reducer(this.state, action);
    _notifyManager__WEBPACK_IMPORTED_MODULE_4__.notifyManager.batch(function () {
      _this3.observers.forEach(function (observer) {
        observer.onQueryUpdate(action);
      });

      _this3.cache.notify({
        query: _this3,
        type: 'queryUpdated',
        action: action
      });
    });
  };

  _proto.getDefaultState = function getDefaultState(options) {
    var data = typeof options.initialData === 'function' ? options.initialData() : options.initialData;
    var hasInitialData = typeof options.initialData !== 'undefined';
    var initialDataUpdatedAt = hasInitialData ? typeof options.initialDataUpdatedAt === 'function' ? options.initialDataUpdatedAt() : options.initialDataUpdatedAt : 0;
    var hasData = typeof data !== 'undefined';
    return {
      data: data,
      dataUpdateCount: 0,
      dataUpdatedAt: hasData ? initialDataUpdatedAt != null ? initialDataUpdatedAt : Date.now() : 0,
      error: null,
      errorUpdateCount: 0,
      errorUpdatedAt: 0,
      fetchFailureCount: 0,
      fetchMeta: null,
      isFetching: false,
      isInvalidated: false,
      isPaused: false,
      status: hasData ? 'success' : 'idle'
    };
  };

  _proto.reducer = function reducer(state, action) {
    var _action$meta, _action$dataUpdatedAt;

    switch (action.type) {
      case 'failed':
        return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, state, {
          fetchFailureCount: state.fetchFailureCount + 1
        });

      case 'pause':
        return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, state, {
          isPaused: true
        });

      case 'continue':
        return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, state, {
          isPaused: false
        });

      case 'fetch':
        return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, state, {
          fetchFailureCount: 0,
          fetchMeta: (_action$meta = action.meta) != null ? _action$meta : null,
          isFetching: true,
          isPaused: false,
          status: !state.dataUpdatedAt ? 'loading' : state.status
        });

      case 'success':
        return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, state, {
          data: action.data,
          dataUpdateCount: state.dataUpdateCount + 1,
          dataUpdatedAt: (_action$dataUpdatedAt = action.dataUpdatedAt) != null ? _action$dataUpdatedAt : Date.now(),
          error: null,
          fetchFailureCount: 0,
          isFetching: false,
          isInvalidated: false,
          isPaused: false,
          status: 'success'
        });

      case 'error':
        var error = action.error;

        if ((0,_retryer__WEBPACK_IMPORTED_MODULE_2__.isCancelledError)(error) && error.revert && this.revertState) {
          return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, this.revertState);
        }

        return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, state, {
          error: error,
          errorUpdateCount: state.errorUpdateCount + 1,
          errorUpdatedAt: Date.now(),
          fetchFailureCount: state.fetchFailureCount + 1,
          isFetching: false,
          isPaused: false,
          status: 'error'
        });

      case 'invalidate':
        return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, state, {
          isInvalidated: true
        });

      case 'setState':
        return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, state, action.state);

      default:
        return state;
    }
  };

  return Query;
}();

/***/ }),

/***/ "../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/queryCache.js":
/*!**********************************************************************************************************************************************************************!*\
  !*** ../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/queryCache.js ***!
  \**********************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QueryCache": function() { return /* binding */ QueryCache; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "../../.yarn/cache/@babel-runtime-npm-7.14.8-177f7f6866-d2dd0ce51d.zip/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/utils.js");
/* harmony import */ var _query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./query */ "../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/query.js");
/* harmony import */ var _notifyManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notifyManager */ "../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/notifyManager.js");
/* harmony import */ var _subscribable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./subscribable */ "../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/subscribable.js");





// CLASS
var QueryCache = /*#__PURE__*/function (_Subscribable) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__.default)(QueryCache, _Subscribable);

  function QueryCache(config) {
    var _this;

    _this = _Subscribable.call(this) || this;
    _this.config = config || {};
    _this.queries = [];
    _this.queriesMap = {};
    return _this;
  }

  var _proto = QueryCache.prototype;

  _proto.build = function build(client, options, state) {
    var _options$queryHash;

    var queryKey = options.queryKey;
    var queryHash = (_options$queryHash = options.queryHash) != null ? _options$queryHash : (0,_utils__WEBPACK_IMPORTED_MODULE_1__.hashQueryKeyByOptions)(queryKey, options);
    var query = this.get(queryHash);

    if (!query) {
      query = new _query__WEBPACK_IMPORTED_MODULE_2__.Query({
        cache: this,
        queryKey: queryKey,
        queryHash: queryHash,
        options: client.defaultQueryOptions(options),
        state: state,
        defaultOptions: client.getQueryDefaults(queryKey)
      });
      this.add(query);
    }

    return query;
  };

  _proto.add = function add(query) {
    if (!this.queriesMap[query.queryHash]) {
      this.queriesMap[query.queryHash] = query;
      this.queries.push(query);
      this.notify({
        type: 'queryAdded',
        query: query
      });
    }
  };

  _proto.remove = function remove(query) {
    var queryInMap = this.queriesMap[query.queryHash];

    if (queryInMap) {
      query.destroy();
      this.queries = this.queries.filter(function (x) {
        return x !== query;
      });

      if (queryInMap === query) {
        delete this.queriesMap[query.queryHash];
      }

      this.notify({
        type: 'queryRemoved',
        query: query
      });
    }
  };

  _proto.clear = function clear() {
    var _this2 = this;

    _notifyManager__WEBPACK_IMPORTED_MODULE_3__.notifyManager.batch(function () {
      _this2.queries.forEach(function (query) {
        _this2.remove(query);
      });
    });
  };

  _proto.get = function get(queryHash) {
    return this.queriesMap[queryHash];
  };

  _proto.getAll = function getAll() {
    return this.queries;
  };

  _proto.find = function find(arg1, arg2) {
    var _parseFilterArgs = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.parseFilterArgs)(arg1, arg2),
        filters = _parseFilterArgs[0];

    if (typeof filters.exact === 'undefined') {
      filters.exact = true;
    }

    return this.queries.find(function (query) {
      return (0,_utils__WEBPACK_IMPORTED_MODULE_1__.matchQuery)(filters, query);
    });
  };

  _proto.findAll = function findAll(arg1, arg2) {
    var _parseFilterArgs2 = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.parseFilterArgs)(arg1, arg2),
        filters = _parseFilterArgs2[0];

    return filters ? this.queries.filter(function (query) {
      return (0,_utils__WEBPACK_IMPORTED_MODULE_1__.matchQuery)(filters, query);
    }) : this.queries;
  };

  _proto.notify = function notify(event) {
    var _this3 = this;

    _notifyManager__WEBPACK_IMPORTED_MODULE_3__.notifyManager.batch(function () {
      _this3.listeners.forEach(function (listener) {
        listener(event);
      });
    });
  };

  _proto.onFocus = function onFocus() {
    var _this4 = this;

    _notifyManager__WEBPACK_IMPORTED_MODULE_3__.notifyManager.batch(function () {
      _this4.queries.forEach(function (query) {
        query.onFocus();
      });
    });
  };

  _proto.onOnline = function onOnline() {
    var _this5 = this;

    _notifyManager__WEBPACK_IMPORTED_MODULE_3__.notifyManager.batch(function () {
      _this5.queries.forEach(function (query) {
        query.onOnline();
      });
    });
  };

  return QueryCache;
}(_subscribable__WEBPACK_IMPORTED_MODULE_4__.Subscribable);

/***/ }),

/***/ "../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/queryClient.js":
/*!***********************************************************************************************************************************************************************!*\
  !*** ../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/queryClient.js ***!
  \***********************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QueryClient": function() { return /* binding */ QueryClient; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "../../.yarn/cache/@babel-runtime-npm-7.14.8-177f7f6866-d2dd0ce51d.zip/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils */ "../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/utils.js");
/* harmony import */ var _queryCache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./queryCache */ "../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/queryCache.js");
/* harmony import */ var _mutationCache__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mutationCache */ "../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/mutationCache.js");
/* harmony import */ var _focusManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./focusManager */ "../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/focusManager.js");
/* harmony import */ var _onlineManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./onlineManager */ "../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/onlineManager.js");
/* harmony import */ var _notifyManager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notifyManager */ "../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/notifyManager.js");
/* harmony import */ var _infiniteQueryBehavior__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./infiniteQueryBehavior */ "../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/infiniteQueryBehavior.js");







 // TYPES

// CLASS
var QueryClient = /*#__PURE__*/function () {
  function QueryClient(config) {
    if (config === void 0) {
      config = {};
    }

    this.queryCache = config.queryCache || new _queryCache__WEBPACK_IMPORTED_MODULE_1__.QueryCache();
    this.mutationCache = config.mutationCache || new _mutationCache__WEBPACK_IMPORTED_MODULE_2__.MutationCache();
    this.defaultOptions = config.defaultOptions || {};
    this.queryDefaults = [];
    this.mutationDefaults = [];
  }

  var _proto = QueryClient.prototype;

  _proto.mount = function mount() {
    var _this = this;

    this.unsubscribeFocus = _focusManager__WEBPACK_IMPORTED_MODULE_3__.focusManager.subscribe(function () {
      if (_focusManager__WEBPACK_IMPORTED_MODULE_3__.focusManager.isFocused() && _onlineManager__WEBPACK_IMPORTED_MODULE_4__.onlineManager.isOnline()) {
        _this.mutationCache.onFocus();

        _this.queryCache.onFocus();
      }
    });
    this.unsubscribeOnline = _onlineManager__WEBPACK_IMPORTED_MODULE_4__.onlineManager.subscribe(function () {
      if (_focusManager__WEBPACK_IMPORTED_MODULE_3__.focusManager.isFocused() && _onlineManager__WEBPACK_IMPORTED_MODULE_4__.onlineManager.isOnline()) {
        _this.mutationCache.onOnline();

        _this.queryCache.onOnline();
      }
    });
  };

  _proto.unmount = function unmount() {
    var _this$unsubscribeFocu, _this$unsubscribeOnli;

    (_this$unsubscribeFocu = this.unsubscribeFocus) == null ? void 0 : _this$unsubscribeFocu.call(this);
    (_this$unsubscribeOnli = this.unsubscribeOnline) == null ? void 0 : _this$unsubscribeOnli.call(this);
  };

  _proto.isFetching = function isFetching(arg1, arg2) {
    var _parseFilterArgs = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.parseFilterArgs)(arg1, arg2),
        filters = _parseFilterArgs[0];

    filters.fetching = true;
    return this.queryCache.findAll(filters).length;
  };

  _proto.isMutating = function isMutating(filters) {
    return this.mutationCache.findAll((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, filters, {
      fetching: true
    })).length;
  };

  _proto.getQueryData = function getQueryData(queryKey, filters) {
    var _this$queryCache$find;

    return (_this$queryCache$find = this.queryCache.find(queryKey, filters)) == null ? void 0 : _this$queryCache$find.state.data;
  };

  _proto.setQueryData = function setQueryData(queryKey, updater, options) {
    var parsedOptions = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.parseQueryArgs)(queryKey);
    var defaultedOptions = this.defaultQueryOptions(parsedOptions);
    return this.queryCache.build(this, defaultedOptions).setData(updater, options);
  };

  _proto.setQueriesData = function setQueriesData(queryKeyOrFilters, updater, options) {
    var _this2 = this;

    return _notifyManager__WEBPACK_IMPORTED_MODULE_6__.notifyManager.batch(function () {
      return _this2.getQueryCache().findAll(queryKeyOrFilters).map(function (_ref) {
        var queryKey = _ref.queryKey;
        return [queryKey, _this2.setQueryData(queryKey, updater, options)];
      });
    });
  };

  _proto.getQueryState = function getQueryState(queryKey, filters) {
    var _this$queryCache$find2;

    return (_this$queryCache$find2 = this.queryCache.find(queryKey, filters)) == null ? void 0 : _this$queryCache$find2.state;
  };

  _proto.removeQueries = function removeQueries(arg1, arg2) {
    var _parseFilterArgs2 = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.parseFilterArgs)(arg1, arg2),
        filters = _parseFilterArgs2[0];

    var queryCache = this.queryCache;
    _notifyManager__WEBPACK_IMPORTED_MODULE_6__.notifyManager.batch(function () {
      queryCache.findAll(filters).forEach(function (query) {
        queryCache.remove(query);
      });
    });
  };

  _proto.resetQueries = function resetQueries(arg1, arg2, arg3) {
    var _this3 = this;

    var _parseFilterArgs3 = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.parseFilterArgs)(arg1, arg2, arg3),
        filters = _parseFilterArgs3[0],
        options = _parseFilterArgs3[1];

    var queryCache = this.queryCache;

    var refetchFilters = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, filters, {
      active: true
    });

    return _notifyManager__WEBPACK_IMPORTED_MODULE_6__.notifyManager.batch(function () {
      queryCache.findAll(filters).forEach(function (query) {
        query.reset();
      });
      return _this3.refetchQueries(refetchFilters, options);
    });
  };

  _proto.cancelQueries = function cancelQueries(arg1, arg2, arg3) {
    var _this4 = this;

    var _parseFilterArgs4 = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.parseFilterArgs)(arg1, arg2, arg3),
        filters = _parseFilterArgs4[0],
        _parseFilterArgs4$ = _parseFilterArgs4[1],
        cancelOptions = _parseFilterArgs4$ === void 0 ? {} : _parseFilterArgs4$;

    if (typeof cancelOptions.revert === 'undefined') {
      cancelOptions.revert = true;
    }

    var promises = _notifyManager__WEBPACK_IMPORTED_MODULE_6__.notifyManager.batch(function () {
      return _this4.queryCache.findAll(filters).map(function (query) {
        return query.cancel(cancelOptions);
      });
    });
    return Promise.all(promises).then(_utils__WEBPACK_IMPORTED_MODULE_5__.noop).catch(_utils__WEBPACK_IMPORTED_MODULE_5__.noop);
  };

  _proto.invalidateQueries = function invalidateQueries(arg1, arg2, arg3) {
    var _ref2,
        _filters$refetchActiv,
        _filters$refetchInact,
        _this5 = this;

    var _parseFilterArgs5 = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.parseFilterArgs)(arg1, arg2, arg3),
        filters = _parseFilterArgs5[0],
        options = _parseFilterArgs5[1];

    var refetchFilters = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, filters, {
      // if filters.refetchActive is not provided and filters.active is explicitly false,
      // e.g. invalidateQueries({ active: false }), we don't want to refetch active queries
      active: (_ref2 = (_filters$refetchActiv = filters.refetchActive) != null ? _filters$refetchActiv : filters.active) != null ? _ref2 : true,
      inactive: (_filters$refetchInact = filters.refetchInactive) != null ? _filters$refetchInact : false
    });

    return _notifyManager__WEBPACK_IMPORTED_MODULE_6__.notifyManager.batch(function () {
      _this5.queryCache.findAll(filters).forEach(function (query) {
        query.invalidate();
      });

      return _this5.refetchQueries(refetchFilters, options);
    });
  };

  _proto.refetchQueries = function refetchQueries(arg1, arg2, arg3) {
    var _this6 = this;

    var _parseFilterArgs6 = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.parseFilterArgs)(arg1, arg2, arg3),
        filters = _parseFilterArgs6[0],
        options = _parseFilterArgs6[1];

    var promises = _notifyManager__WEBPACK_IMPORTED_MODULE_6__.notifyManager.batch(function () {
      return _this6.queryCache.findAll(filters).map(function (query) {
        return query.fetch();
      });
    });
    var promise = Promise.all(promises).then(_utils__WEBPACK_IMPORTED_MODULE_5__.noop);

    if (!(options == null ? void 0 : options.throwOnError)) {
      promise = promise.catch(_utils__WEBPACK_IMPORTED_MODULE_5__.noop);
    }

    return promise;
  };

  _proto.fetchQuery = function fetchQuery(arg1, arg2, arg3) {
    var parsedOptions = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.parseQueryArgs)(arg1, arg2, arg3);
    var defaultedOptions = this.defaultQueryOptions(parsedOptions); // https://github.com/tannerlinsley/react-query/issues/652

    if (typeof defaultedOptions.retry === 'undefined') {
      defaultedOptions.retry = false;
    }

    var query = this.queryCache.build(this, defaultedOptions);
    return query.isStaleByTime(defaultedOptions.staleTime) ? query.fetch(defaultedOptions) : Promise.resolve(query.state.data);
  };

  _proto.prefetchQuery = function prefetchQuery(arg1, arg2, arg3) {
    return this.fetchQuery(arg1, arg2, arg3).then(_utils__WEBPACK_IMPORTED_MODULE_5__.noop).catch(_utils__WEBPACK_IMPORTED_MODULE_5__.noop);
  };

  _proto.fetchInfiniteQuery = function fetchInfiniteQuery(arg1, arg2, arg3) {
    var parsedOptions = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.parseQueryArgs)(arg1, arg2, arg3);
    parsedOptions.behavior = (0,_infiniteQueryBehavior__WEBPACK_IMPORTED_MODULE_7__.infiniteQueryBehavior)();
    return this.fetchQuery(parsedOptions);
  };

  _proto.prefetchInfiniteQuery = function prefetchInfiniteQuery(arg1, arg2, arg3) {
    return this.fetchInfiniteQuery(arg1, arg2, arg3).then(_utils__WEBPACK_IMPORTED_MODULE_5__.noop).catch(_utils__WEBPACK_IMPORTED_MODULE_5__.noop);
  };

  _proto.cancelMutations = function cancelMutations() {
    var _this7 = this;

    var promises = _notifyManager__WEBPACK_IMPORTED_MODULE_6__.notifyManager.batch(function () {
      return _this7.mutationCache.getAll().map(function (mutation) {
        return mutation.cancel();
      });
    });
    return Promise.all(promises).then(_utils__WEBPACK_IMPORTED_MODULE_5__.noop).catch(_utils__WEBPACK_IMPORTED_MODULE_5__.noop);
  };

  _proto.resumePausedMutations = function resumePausedMutations() {
    return this.getMutationCache().resumePausedMutations();
  };

  _proto.executeMutation = function executeMutation(options) {
    return this.mutationCache.build(this, options).execute();
  };

  _proto.getQueryCache = function getQueryCache() {
    return this.queryCache;
  };

  _proto.getMutationCache = function getMutationCache() {
    return this.mutationCache;
  };

  _proto.getDefaultOptions = function getDefaultOptions() {
    return this.defaultOptions;
  };

  _proto.setDefaultOptions = function setDefaultOptions(options) {
    this.defaultOptions = options;
  };

  _proto.setQueryDefaults = function setQueryDefaults(queryKey, options) {
    var result = this.queryDefaults.find(function (x) {
      return (0,_utils__WEBPACK_IMPORTED_MODULE_5__.hashQueryKey)(queryKey) === (0,_utils__WEBPACK_IMPORTED_MODULE_5__.hashQueryKey)(x.queryKey);
    });

    if (result) {
      result.defaultOptions = options;
    } else {
      this.queryDefaults.push({
        queryKey: queryKey,
        defaultOptions: options
      });
    }
  };

  _proto.getQueryDefaults = function getQueryDefaults(queryKey) {
    var _this$queryDefaults$f;

    return queryKey ? (_this$queryDefaults$f = this.queryDefaults.find(function (x) {
      return (0,_utils__WEBPACK_IMPORTED_MODULE_5__.partialMatchKey)(queryKey, x.queryKey);
    })) == null ? void 0 : _this$queryDefaults$f.defaultOptions : undefined;
  };

  _proto.setMutationDefaults = function setMutationDefaults(mutationKey, options) {
    var result = this.mutationDefaults.find(function (x) {
      return (0,_utils__WEBPACK_IMPORTED_MODULE_5__.hashQueryKey)(mutationKey) === (0,_utils__WEBPACK_IMPORTED_MODULE_5__.hashQueryKey)(x.mutationKey);
    });

    if (result) {
      result.defaultOptions = options;
    } else {
      this.mutationDefaults.push({
        mutationKey: mutationKey,
        defaultOptions: options
      });
    }
  };

  _proto.getMutationDefaults = function getMutationDefaults(mutationKey) {
    var _this$mutationDefault;

    return mutationKey ? (_this$mutationDefault = this.mutationDefaults.find(function (x) {
      return (0,_utils__WEBPACK_IMPORTED_MODULE_5__.partialMatchKey)(mutationKey, x.mutationKey);
    })) == null ? void 0 : _this$mutationDefault.defaultOptions : undefined;
  };

  _proto.defaultQueryOptions = function defaultQueryOptions(options) {
    if (options == null ? void 0 : options._defaulted) {
      return options;
    }

    var defaultedOptions = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, this.defaultOptions.queries, this.getQueryDefaults(options == null ? void 0 : options.queryKey), options, {
      _defaulted: true
    });

    if (!defaultedOptions.queryHash && defaultedOptions.queryKey) {
      defaultedOptions.queryHash = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.hashQueryKeyByOptions)(defaultedOptions.queryKey, defaultedOptions);
    }

    return defaultedOptions;
  };

  _proto.defaultQueryObserverOptions = function defaultQueryObserverOptions(options) {
    return this.defaultQueryOptions(options);
  };

  _proto.defaultMutationOptions = function defaultMutationOptions(options) {
    if (options == null ? void 0 : options._defaulted) {
      return options;
    }

    return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, this.defaultOptions.mutations, this.getMutationDefaults(options == null ? void 0 : options.mutationKey), options, {
      _defaulted: true
    });
  };

  _proto.clear = function clear() {
    this.queryCache.clear();
    this.mutationCache.clear();
  };

  return QueryClient;
}();

/***/ }),

/***/ "../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/queryObserver.js":
/*!*************************************************************************************************************************************************************************!*\
  !*** ../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/queryObserver.js ***!
  \*************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QueryObserver": function() { return /* binding */ QueryObserver; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "../../.yarn/cache/@babel-runtime-npm-7.14.8-177f7f6866-d2dd0ce51d.zip/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "../../.yarn/cache/@babel-runtime-npm-7.14.8-177f7f6866-d2dd0ce51d.zip/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/utils.js");
/* harmony import */ var _notifyManager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notifyManager */ "../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/notifyManager.js");
/* harmony import */ var _focusManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./focusManager */ "../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/focusManager.js");
/* harmony import */ var _subscribable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./subscribable */ "../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/subscribable.js");
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./logger */ "../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/logger.js");
/* harmony import */ var _retryer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./retryer */ "../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/retryer.js");








var QueryObserver = /*#__PURE__*/function (_Subscribable) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__.default)(QueryObserver, _Subscribable);

  function QueryObserver(client, options) {
    var _this;

    _this = _Subscribable.call(this) || this;
    _this.client = client;
    _this.options = options;
    _this.trackedProps = [];
    _this.previousSelectError = null;

    _this.bindMethods();

    _this.setOptions(options);

    return _this;
  }

  var _proto = QueryObserver.prototype;

  _proto.bindMethods = function bindMethods() {
    this.remove = this.remove.bind(this);
    this.refetch = this.refetch.bind(this);
  };

  _proto.onSubscribe = function onSubscribe() {
    if (this.listeners.length === 1) {
      this.currentQuery.addObserver(this);

      if (shouldFetchOnMount(this.currentQuery, this.options)) {
        this.executeFetch();
      }

      this.updateTimers();
    }
  };

  _proto.onUnsubscribe = function onUnsubscribe() {
    if (!this.listeners.length) {
      this.destroy();
    }
  };

  _proto.shouldFetchOnReconnect = function shouldFetchOnReconnect() {
    return _shouldFetchOnReconnect(this.currentQuery, this.options);
  };

  _proto.shouldFetchOnWindowFocus = function shouldFetchOnWindowFocus() {
    return _shouldFetchOnWindowFocus(this.currentQuery, this.options);
  };

  _proto.destroy = function destroy() {
    this.listeners = [];
    this.clearTimers();
    this.currentQuery.removeObserver(this);
  };

  _proto.setOptions = function setOptions(options, notifyOptions) {
    var prevOptions = this.options;
    var prevQuery = this.currentQuery;
    this.options = this.client.defaultQueryObserverOptions(options);

    if (typeof this.options.enabled !== 'undefined' && typeof this.options.enabled !== 'boolean') {
      throw new Error('Expected enabled to be a boolean');
    } // Keep previous query key if the user does not supply one


    if (!this.options.queryKey) {
      this.options.queryKey = prevOptions.queryKey;
    }

    this.updateQuery();
    var mounted = this.hasListeners(); // Fetch if there are subscribers

    if (mounted && shouldFetchOptionally(this.currentQuery, prevQuery, this.options, prevOptions)) {
      this.executeFetch();
    } // Update result


    this.updateResult(notifyOptions); // Update stale interval if needed

    if (mounted && (this.currentQuery !== prevQuery || this.options.enabled !== prevOptions.enabled || this.options.staleTime !== prevOptions.staleTime)) {
      this.updateStaleTimeout();
    } // Update refetch interval if needed


    if (mounted && (this.currentQuery !== prevQuery || this.options.enabled !== prevOptions.enabled || this.options.refetchInterval !== prevOptions.refetchInterval)) {
      this.updateRefetchInterval();
    }
  };

  _proto.getOptimisticResult = function getOptimisticResult(options) {
    var defaultedOptions = this.client.defaultQueryObserverOptions(options);
    var query = this.client.getQueryCache().build(this.client, defaultedOptions);
    return this.createResult(query, defaultedOptions);
  };

  _proto.getCurrentResult = function getCurrentResult() {
    return this.currentResult;
  };

  _proto.trackResult = function trackResult(result) {
    var _this2 = this;

    var trackedResult = {};
    Object.keys(result).forEach(function (key) {
      Object.defineProperty(trackedResult, key, {
        configurable: false,
        enumerable: true,
        get: function get() {
          var typedKey = key;

          if (!_this2.trackedProps.includes(typedKey)) {
            _this2.trackedProps.push(typedKey);
          }

          return result[typedKey];
        }
      });
    });
    return trackedResult;
  };

  _proto.getNextResult = function getNextResult(options) {
    var _this3 = this;

    return new Promise(function (resolve, reject) {
      var unsubscribe = _this3.subscribe(function (result) {
        if (!result.isFetching) {
          unsubscribe();

          if (result.isError && (options == null ? void 0 : options.throwOnError)) {
            reject(result.error);
          } else {
            resolve(result);
          }
        }
      });
    });
  };

  _proto.getCurrentQuery = function getCurrentQuery() {
    return this.currentQuery;
  };

  _proto.remove = function remove() {
    this.client.getQueryCache().remove(this.currentQuery);
  };

  _proto.refetch = function refetch(options) {
    return this.fetch(options);
  };

  _proto.fetchOptimistic = function fetchOptimistic(options) {
    var _this4 = this;

    var defaultedOptions = this.client.defaultQueryObserverOptions(options);
    var query = this.client.getQueryCache().build(this.client, defaultedOptions);
    return query.fetch().then(function () {
      return _this4.createResult(query, defaultedOptions);
    });
  };

  _proto.fetch = function fetch(fetchOptions) {
    var _this5 = this;

    return this.executeFetch(fetchOptions).then(function () {
      _this5.updateResult();

      return _this5.currentResult;
    });
  };

  _proto.executeFetch = function executeFetch(fetchOptions) {
    // Make sure we reference the latest query as the current one might have been removed
    this.updateQuery(); // Fetch

    var promise = this.currentQuery.fetch(this.options, fetchOptions);

    if (!(fetchOptions == null ? void 0 : fetchOptions.throwOnError)) {
      promise = promise.catch(_utils__WEBPACK_IMPORTED_MODULE_2__.noop);
    }

    return promise;
  };

  _proto.updateStaleTimeout = function updateStaleTimeout() {
    var _this6 = this;

    this.clearStaleTimeout();

    if (_utils__WEBPACK_IMPORTED_MODULE_2__.isServer || this.currentResult.isStale || !(0,_utils__WEBPACK_IMPORTED_MODULE_2__.isValidTimeout)(this.options.staleTime)) {
      return;
    }

    var time = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.timeUntilStale)(this.currentResult.dataUpdatedAt, this.options.staleTime); // The timeout is sometimes triggered 1 ms before the stale time expiration.
    // To mitigate this issue we always add 1 ms to the timeout.

    var timeout = time + 1;
    this.staleTimeoutId = setTimeout(function () {
      if (!_this6.currentResult.isStale) {
        _this6.updateResult();
      }
    }, timeout);
  };

  _proto.updateRefetchInterval = function updateRefetchInterval() {
    var _this7 = this;

    this.clearRefetchInterval();

    if (_utils__WEBPACK_IMPORTED_MODULE_2__.isServer || this.options.enabled === false || !(0,_utils__WEBPACK_IMPORTED_MODULE_2__.isValidTimeout)(this.options.refetchInterval)) {
      return;
    }

    this.refetchIntervalId = setInterval(function () {
      if (_this7.options.refetchIntervalInBackground || _focusManager__WEBPACK_IMPORTED_MODULE_3__.focusManager.isFocused()) {
        _this7.executeFetch();
      }
    }, this.options.refetchInterval);
  };

  _proto.updateTimers = function updateTimers() {
    this.updateStaleTimeout();
    this.updateRefetchInterval();
  };

  _proto.clearTimers = function clearTimers() {
    this.clearStaleTimeout();
    this.clearRefetchInterval();
  };

  _proto.clearStaleTimeout = function clearStaleTimeout() {
    clearTimeout(this.staleTimeoutId);
    this.staleTimeoutId = undefined;
  };

  _proto.clearRefetchInterval = function clearRefetchInterval() {
    clearInterval(this.refetchIntervalId);
    this.refetchIntervalId = undefined;
  };

  _proto.createResult = function createResult(query, options) {
    var prevQuery = this.currentQuery;
    var prevOptions = this.options;
    var prevResult = this.currentResult;
    var prevResultState = this.currentResultState;
    var prevResultOptions = this.currentResultOptions;
    var queryChange = query !== prevQuery;
    var queryInitialState = queryChange ? query.state : this.currentQueryInitialState;
    var prevQueryResult = queryChange ? this.currentResult : this.previousQueryResult;
    var state = query.state;
    var dataUpdatedAt = state.dataUpdatedAt,
        error = state.error,
        errorUpdatedAt = state.errorUpdatedAt,
        isFetching = state.isFetching,
        status = state.status;
    var isPreviousData = false;
    var isPlaceholderData = false;
    var data; // Optimistically set result in fetching state if needed

    if (options.optimisticResults) {
      var mounted = this.hasListeners();
      var fetchOnMount = !mounted && shouldFetchOnMount(query, options);
      var fetchOptionally = mounted && shouldFetchOptionally(query, prevQuery, options, prevOptions);

      if (fetchOnMount || fetchOptionally) {
        isFetching = true;

        if (!dataUpdatedAt) {
          status = 'loading';
        }
      }
    } // Keep previous data if needed


    if (options.keepPreviousData && !state.dataUpdateCount && (prevQueryResult == null ? void 0 : prevQueryResult.isSuccess) && status !== 'error') {
      data = prevQueryResult.data;
      dataUpdatedAt = prevQueryResult.dataUpdatedAt;
      status = prevQueryResult.status;
      isPreviousData = true;
    } // Select data if needed
    else if (options.select && typeof state.data !== 'undefined') {
        // Memoize select result
        if (prevResult && state.data === (prevResultState == null ? void 0 : prevResultState.data) && options.select === (prevResultOptions == null ? void 0 : prevResultOptions.select) && !this.previousSelectError) {
          data = prevResult.data;
        } else {
          try {
            data = options.select(state.data);

            if (options.structuralSharing !== false) {
              data = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.replaceEqualDeep)(prevResult == null ? void 0 : prevResult.data, data);
            }

            this.previousSelectError = null;
          } catch (selectError) {
            (0,_logger__WEBPACK_IMPORTED_MODULE_4__.getLogger)().error(selectError);
            error = selectError;
            this.previousSelectError = selectError;
            errorUpdatedAt = Date.now();
            status = 'error';
          }
        }
      } // Use query data
      else {
          data = state.data;
        } // Show placeholder data if needed


    if (typeof options.placeholderData !== 'undefined' && typeof data === 'undefined' && status === 'loading') {
      var placeholderData; // Memoize placeholder data

      if ((prevResult == null ? void 0 : prevResult.isPlaceholderData) && options.placeholderData === (prevResultOptions == null ? void 0 : prevResultOptions.placeholderData)) {
        placeholderData = prevResult.data;
      } else {
        placeholderData = typeof options.placeholderData === 'function' ? options.placeholderData() : options.placeholderData;

        if (options.select && typeof placeholderData !== 'undefined') {
          try {
            placeholderData = options.select(placeholderData);

            if (options.structuralSharing !== false) {
              placeholderData = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.replaceEqualDeep)(prevResult == null ? void 0 : prevResult.data, placeholderData);
            }

            this.previousSelectError = null;
          } catch (selectError) {
            (0,_logger__WEBPACK_IMPORTED_MODULE_4__.getLogger)().error(selectError);
            error = selectError;
            this.previousSelectError = selectError;
            errorUpdatedAt = Date.now();
            status = 'error';
          }
        }
      }

      if (typeof placeholderData !== 'undefined') {
        status = 'success';
        data = placeholderData;
        isPlaceholderData = true;
      }
    }

    var result = {
      status: status,
      isLoading: status === 'loading',
      isSuccess: status === 'success',
      isError: status === 'error',
      isIdle: status === 'idle',
      data: data,
      dataUpdatedAt: dataUpdatedAt,
      error: error,
      errorUpdatedAt: errorUpdatedAt,
      failureCount: state.fetchFailureCount,
      isFetched: state.dataUpdateCount > 0 || state.errorUpdateCount > 0,
      isFetchedAfterMount: state.dataUpdateCount > queryInitialState.dataUpdateCount || state.errorUpdateCount > queryInitialState.errorUpdateCount,
      isFetching: isFetching,
      isLoadingError: status === 'error' && state.dataUpdatedAt === 0,
      isPlaceholderData: isPlaceholderData,
      isPreviousData: isPreviousData,
      isRefetchError: status === 'error' && state.dataUpdatedAt !== 0,
      isStale: isStale(query, options),
      refetch: this.refetch,
      remove: this.remove
    };
    return result;
  };

  _proto.shouldNotifyListeners = function shouldNotifyListeners(result, prevResult) {
    if (!prevResult) {
      return true;
    }

    if (result === prevResult) {
      return false;
    }

    var _this$options = this.options,
        notifyOnChangeProps = _this$options.notifyOnChangeProps,
        notifyOnChangePropsExclusions = _this$options.notifyOnChangePropsExclusions;

    if (!notifyOnChangeProps && !notifyOnChangePropsExclusions) {
      return true;
    }

    if (notifyOnChangeProps === 'tracked' && !this.trackedProps.length) {
      return true;
    }

    var includedProps = notifyOnChangeProps === 'tracked' ? this.trackedProps : notifyOnChangeProps;
    return Object.keys(result).some(function (key) {
      var typedKey = key;
      var changed = result[typedKey] !== prevResult[typedKey];
      var isIncluded = includedProps == null ? void 0 : includedProps.some(function (x) {
        return x === key;
      });
      var isExcluded = notifyOnChangePropsExclusions == null ? void 0 : notifyOnChangePropsExclusions.some(function (x) {
        return x === key;
      });
      return changed && !isExcluded && (!includedProps || isIncluded);
    });
  };

  _proto.updateResult = function updateResult(notifyOptions) {
    var prevResult = this.currentResult;
    this.currentResult = this.createResult(this.currentQuery, this.options);
    this.currentResultState = this.currentQuery.state;
    this.currentResultOptions = this.options; // Only notify if something has changed

    if ((0,_utils__WEBPACK_IMPORTED_MODULE_2__.shallowEqualObjects)(this.currentResult, prevResult)) {
      return;
    } // Determine which callbacks to trigger


    var defaultNotifyOptions = {
      cache: true
    };

    if ((notifyOptions == null ? void 0 : notifyOptions.listeners) !== false && this.shouldNotifyListeners(this.currentResult, prevResult)) {
      defaultNotifyOptions.listeners = true;
    }

    this.notify((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, defaultNotifyOptions, notifyOptions));
  };

  _proto.updateQuery = function updateQuery() {
    var query = this.client.getQueryCache().build(this.client, this.options);

    if (query === this.currentQuery) {
      return;
    }

    var prevQuery = this.currentQuery;
    this.currentQuery = query;
    this.currentQueryInitialState = query.state;
    this.previousQueryResult = this.currentResult;

    if (this.hasListeners()) {
      prevQuery == null ? void 0 : prevQuery.removeObserver(this);
      query.addObserver(this);
    }
  };

  _proto.onQueryUpdate = function onQueryUpdate(action) {
    var notifyOptions = {};

    if (action.type === 'success') {
      notifyOptions.onSuccess = true;
    } else if (action.type === 'error' && !(0,_retryer__WEBPACK_IMPORTED_MODULE_5__.isCancelledError)(action.error)) {
      notifyOptions.onError = true;
    }

    this.updateResult(notifyOptions);

    if (this.hasListeners()) {
      this.updateTimers();
    }
  };

  _proto.notify = function notify(notifyOptions) {
    var _this8 = this;

    _notifyManager__WEBPACK_IMPORTED_MODULE_6__.notifyManager.batch(function () {
      // First trigger the configuration callbacks
      if (notifyOptions.onSuccess) {
        _this8.options.onSuccess == null ? void 0 : _this8.options.onSuccess(_this8.currentResult.data);
        _this8.options.onSettled == null ? void 0 : _this8.options.onSettled(_this8.currentResult.data, null);
      } else if (notifyOptions.onError) {
        _this8.options.onError == null ? void 0 : _this8.options.onError(_this8.currentResult.error);
        _this8.options.onSettled == null ? void 0 : _this8.options.onSettled(undefined, _this8.currentResult.error);
      } // Then trigger the listeners


      if (notifyOptions.listeners) {
        _this8.listeners.forEach(function (listener) {
          listener(_this8.currentResult);
        });
      } // Then the cache listeners


      if (notifyOptions.cache) {
        _this8.client.getQueryCache().notify({
          query: _this8.currentQuery,
          type: 'observerResultsUpdated'
        });
      }
    });
  };

  return QueryObserver;
}(_subscribable__WEBPACK_IMPORTED_MODULE_7__.Subscribable);

function shouldLoadOnMount(query, options) {
  return options.enabled !== false && !query.state.dataUpdatedAt && !(query.state.status === 'error' && options.retryOnMount === false);
}

function shouldRefetchOnMount(query, options) {
  return options.enabled !== false && query.state.dataUpdatedAt > 0 && (options.refetchOnMount === 'always' || options.refetchOnMount !== false && isStale(query, options));
}

function shouldFetchOnMount(query, options) {
  return shouldLoadOnMount(query, options) || shouldRefetchOnMount(query, options);
}

function _shouldFetchOnReconnect(query, options) {
  return options.enabled !== false && (options.refetchOnReconnect === 'always' || options.refetchOnReconnect !== false && isStale(query, options));
}

function _shouldFetchOnWindowFocus(query, options) {
  return options.enabled !== false && (options.refetchOnWindowFocus === 'always' || options.refetchOnWindowFocus !== false && isStale(query, options));
}

function shouldFetchOptionally(query, prevQuery, options, prevOptions) {
  return options.enabled !== false && (query !== prevQuery || prevOptions.enabled === false) && isStale(query, options);
}

function isStale(query, options) {
  return query.isStaleByTime(options.staleTime);
}

/***/ }),

/***/ "../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/retryer.js":
/*!*******************************************************************************************************************************************************************!*\
  !*** ../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/retryer.js ***!
  \*******************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isCancelable": function() { return /* binding */ isCancelable; },
/* harmony export */   "CancelledError": function() { return /* binding */ CancelledError; },
/* harmony export */   "isCancelledError": function() { return /* binding */ isCancelledError; },
/* harmony export */   "Retryer": function() { return /* binding */ Retryer; }
/* harmony export */ });
/* harmony import */ var _focusManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./focusManager */ "../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/focusManager.js");
/* harmony import */ var _onlineManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./onlineManager */ "../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/onlineManager.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/utils.js");


 // TYPES

function defaultRetryDelay(failureCount) {
  return Math.min(1000 * Math.pow(2, failureCount), 30000);
}

function isCancelable(value) {
  return typeof (value == null ? void 0 : value.cancel) === 'function';
}
var CancelledError = function CancelledError(options) {
  this.revert = options == null ? void 0 : options.revert;
  this.silent = options == null ? void 0 : options.silent;
};
function isCancelledError(value) {
  return value instanceof CancelledError;
} // CLASS

var Retryer = function Retryer(config) {
  var _this = this;

  var cancelRetry = false;
  var cancelFn;
  var continueFn;
  var promiseResolve;
  var promiseReject;

  this.cancel = function (cancelOptions) {
    return cancelFn == null ? void 0 : cancelFn(cancelOptions);
  };

  this.cancelRetry = function () {
    cancelRetry = true;
  };

  this.continue = function () {
    return continueFn == null ? void 0 : continueFn();
  };

  this.failureCount = 0;
  this.isPaused = false;
  this.isResolved = false;
  this.isTransportCancelable = false;
  this.promise = new Promise(function (outerResolve, outerReject) {
    promiseResolve = outerResolve;
    promiseReject = outerReject;
  });

  var resolve = function resolve(value) {
    if (!_this.isResolved) {
      _this.isResolved = true;
      config.onSuccess == null ? void 0 : config.onSuccess(value);
      continueFn == null ? void 0 : continueFn();
      promiseResolve(value);
    }
  };

  var reject = function reject(value) {
    if (!_this.isResolved) {
      _this.isResolved = true;
      config.onError == null ? void 0 : config.onError(value);
      continueFn == null ? void 0 : continueFn();
      promiseReject(value);
    }
  };

  var pause = function pause() {
    return new Promise(function (continueResolve) {
      continueFn = continueResolve;
      _this.isPaused = true;
      config.onPause == null ? void 0 : config.onPause();
    }).then(function () {
      continueFn = undefined;
      _this.isPaused = false;
      config.onContinue == null ? void 0 : config.onContinue();
    });
  }; // Create loop function


  var run = function run() {
    // Do nothing if already resolved
    if (_this.isResolved) {
      return;
    }

    var promiseOrValue; // Execute query

    try {
      promiseOrValue = config.fn();
    } catch (error) {
      promiseOrValue = Promise.reject(error);
    } // Create callback to cancel this fetch


    cancelFn = function cancelFn(cancelOptions) {
      if (!_this.isResolved) {
        reject(new CancelledError(cancelOptions)); // Cancel transport if supported

        if (isCancelable(promiseOrValue)) {
          try {
            promiseOrValue.cancel();
          } catch (_unused) {}
        }
      }
    }; // Check if the transport layer support cancellation


    _this.isTransportCancelable = isCancelable(promiseOrValue);
    Promise.resolve(promiseOrValue).then(resolve).catch(function (error) {
      var _config$retry, _config$retryDelay;

      // Stop if the fetch is already resolved
      if (_this.isResolved) {
        return;
      } // Do we need to retry the request?


      var retry = (_config$retry = config.retry) != null ? _config$retry : 3;
      var retryDelay = (_config$retryDelay = config.retryDelay) != null ? _config$retryDelay : defaultRetryDelay;
      var delay = typeof retryDelay === 'function' ? retryDelay(_this.failureCount, error) : retryDelay;
      var shouldRetry = retry === true || typeof retry === 'number' && _this.failureCount < retry || typeof retry === 'function' && retry(_this.failureCount, error);

      if (cancelRetry || !shouldRetry) {
        // We are done if the query does not need to be retried
        reject(error);
        return;
      }

      _this.failureCount++; // Notify on fail

      config.onFail == null ? void 0 : config.onFail(_this.failureCount, error); // Delay

      (0,_utils__WEBPACK_IMPORTED_MODULE_0__.sleep)(delay) // Pause if the document is not visible or when the device is offline
      .then(function () {
        if (!_focusManager__WEBPACK_IMPORTED_MODULE_1__.focusManager.isFocused() || !_onlineManager__WEBPACK_IMPORTED_MODULE_2__.onlineManager.isOnline()) {
          return pause();
        }
      }).then(function () {
        if (cancelRetry) {
          reject(error);
        } else {
          run();
        }
      });
    });
  }; // Start loop


  run();
};

/***/ }),

/***/ "../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/subscribable.js":
/*!************************************************************************************************************************************************************************!*\
  !*** ../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/subscribable.js ***!
  \************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Subscribable": function() { return /* binding */ Subscribable; }
/* harmony export */ });
var Subscribable = /*#__PURE__*/function () {
  function Subscribable() {
    this.listeners = [];
  }

  var _proto = Subscribable.prototype;

  _proto.subscribe = function subscribe(listener) {
    var _this = this;

    var callback = listener || function () {
      return undefined;
    };

    this.listeners.push(callback);
    this.onSubscribe();
    return function () {
      _this.listeners = _this.listeners.filter(function (x) {
        return x !== callback;
      });

      _this.onUnsubscribe();
    };
  };

  _proto.hasListeners = function hasListeners() {
    return this.listeners.length > 0;
  };

  _proto.onSubscribe = function onSubscribe() {// Do nothing
  };

  _proto.onUnsubscribe = function onUnsubscribe() {// Do nothing
  };

  return Subscribable;
}();

/***/ }),

/***/ "../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/types.js":
/*!*****************************************************************************************************************************************************************!*\
  !*** ../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/types.js ***!
  \*****************************************************************************************************************************************************************/
/***/ (function() {



/***/ }),

/***/ "../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/utils.js":
/*!*****************************************************************************************************************************************************************!*\
  !*** ../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/utils.js ***!
  \*****************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isServer": function() { return /* binding */ isServer; },
/* harmony export */   "noop": function() { return /* binding */ noop; },
/* harmony export */   "functionalUpdate": function() { return /* binding */ functionalUpdate; },
/* harmony export */   "isValidTimeout": function() { return /* binding */ isValidTimeout; },
/* harmony export */   "ensureQueryKeyArray": function() { return /* binding */ ensureQueryKeyArray; },
/* harmony export */   "difference": function() { return /* binding */ difference; },
/* harmony export */   "replaceAt": function() { return /* binding */ replaceAt; },
/* harmony export */   "timeUntilStale": function() { return /* binding */ timeUntilStale; },
/* harmony export */   "parseQueryArgs": function() { return /* binding */ parseQueryArgs; },
/* harmony export */   "parseMutationArgs": function() { return /* binding */ parseMutationArgs; },
/* harmony export */   "parseFilterArgs": function() { return /* binding */ parseFilterArgs; },
/* harmony export */   "mapQueryStatusFilter": function() { return /* binding */ mapQueryStatusFilter; },
/* harmony export */   "matchQuery": function() { return /* binding */ matchQuery; },
/* harmony export */   "matchMutation": function() { return /* binding */ matchMutation; },
/* harmony export */   "hashQueryKeyByOptions": function() { return /* binding */ hashQueryKeyByOptions; },
/* harmony export */   "hashQueryKey": function() { return /* binding */ hashQueryKey; },
/* harmony export */   "stableValueHash": function() { return /* binding */ stableValueHash; },
/* harmony export */   "partialMatchKey": function() { return /* binding */ partialMatchKey; },
/* harmony export */   "partialDeepEqual": function() { return /* binding */ partialDeepEqual; },
/* harmony export */   "replaceEqualDeep": function() { return /* binding */ replaceEqualDeep; },
/* harmony export */   "shallowEqualObjects": function() { return /* binding */ shallowEqualObjects; },
/* harmony export */   "isPlainObject": function() { return /* binding */ isPlainObject; },
/* harmony export */   "isQueryKey": function() { return /* binding */ isQueryKey; },
/* harmony export */   "isError": function() { return /* binding */ isError; },
/* harmony export */   "sleep": function() { return /* binding */ sleep; },
/* harmony export */   "scheduleMicrotask": function() { return /* binding */ scheduleMicrotask; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "../../.yarn/cache/@babel-runtime-npm-7.14.8-177f7f6866-d2dd0ce51d.zip/node_modules/@babel/runtime/helpers/esm/extends.js");

// TYPES
// UTILS
var isServer = typeof window === 'undefined';
function noop() {
  return undefined;
}
function functionalUpdate(updater, input) {
  return typeof updater === 'function' ? updater(input) : updater;
}
function isValidTimeout(value) {
  return typeof value === 'number' && value >= 0 && value !== Infinity;
}
function ensureQueryKeyArray(value) {
  return Array.isArray(value) ? value : [value];
}
function difference(array1, array2) {
  return array1.filter(function (x) {
    return array2.indexOf(x) === -1;
  });
}
function replaceAt(array, index, value) {
  var copy = array.slice(0);
  copy[index] = value;
  return copy;
}
function timeUntilStale(updatedAt, staleTime) {
  return Math.max(updatedAt + (staleTime || 0) - Date.now(), 0);
}
function parseQueryArgs(arg1, arg2, arg3) {
  if (!isQueryKey(arg1)) {
    return arg1;
  }

  if (typeof arg2 === 'function') {
    return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, arg3, {
      queryKey: arg1,
      queryFn: arg2
    });
  }

  return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, arg2, {
    queryKey: arg1
  });
}
function parseMutationArgs(arg1, arg2, arg3) {
  if (isQueryKey(arg1)) {
    if (typeof arg2 === 'function') {
      return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, arg3, {
        mutationKey: arg1,
        mutationFn: arg2
      });
    }

    return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, arg2, {
      mutationKey: arg1
    });
  }

  if (typeof arg1 === 'function') {
    return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, arg2, {
      mutationFn: arg1
    });
  }

  return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, arg1);
}
function parseFilterArgs(arg1, arg2, arg3) {
  return isQueryKey(arg1) ? [(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, arg2, {
    queryKey: arg1
  }), arg3] : [arg1 || {}, arg2];
}
function mapQueryStatusFilter(active, inactive) {
  if (active === true && inactive === true || active == null && inactive == null) {
    return 'all';
  } else if (active === false && inactive === false) {
    return 'none';
  } else {
    // At this point, active|inactive can only be true|false or false|true
    // so, when only one value is provided, the missing one has to be the negated value
    var isActive = active != null ? active : !inactive;
    return isActive ? 'active' : 'inactive';
  }
}
function matchQuery(filters, query) {
  var active = filters.active,
      exact = filters.exact,
      fetching = filters.fetching,
      inactive = filters.inactive,
      predicate = filters.predicate,
      queryKey = filters.queryKey,
      stale = filters.stale;

  if (isQueryKey(queryKey)) {
    if (exact) {
      if (query.queryHash !== hashQueryKeyByOptions(queryKey, query.options)) {
        return false;
      }
    } else if (!partialMatchKey(query.queryKey, queryKey)) {
      return false;
    }
  }

  var queryStatusFilter = mapQueryStatusFilter(active, inactive);

  if (queryStatusFilter === 'none') {
    return false;
  } else if (queryStatusFilter !== 'all') {
    var isActive = query.isActive();

    if (queryStatusFilter === 'active' && !isActive) {
      return false;
    }

    if (queryStatusFilter === 'inactive' && isActive) {
      return false;
    }
  }

  if (typeof stale === 'boolean' && query.isStale() !== stale) {
    return false;
  }

  if (typeof fetching === 'boolean' && query.isFetching() !== fetching) {
    return false;
  }

  if (predicate && !predicate(query)) {
    return false;
  }

  return true;
}
function matchMutation(filters, mutation) {
  var exact = filters.exact,
      fetching = filters.fetching,
      predicate = filters.predicate,
      mutationKey = filters.mutationKey;

  if (isQueryKey(mutationKey)) {
    if (!mutation.options.mutationKey) {
      return false;
    }

    if (exact) {
      if (hashQueryKey(mutation.options.mutationKey) !== hashQueryKey(mutationKey)) {
        return false;
      }
    } else if (!partialMatchKey(mutation.options.mutationKey, mutationKey)) {
      return false;
    }
  }

  if (typeof fetching === 'boolean' && mutation.state.status === 'loading' !== fetching) {
    return false;
  }

  if (predicate && !predicate(mutation)) {
    return false;
  }

  return true;
}
function hashQueryKeyByOptions(queryKey, options) {
  var hashFn = (options == null ? void 0 : options.queryKeyHashFn) || hashQueryKey;
  return hashFn(queryKey);
}
/**
 * Default query keys hash function.
 */

function hashQueryKey(queryKey) {
  var asArray = ensureQueryKeyArray(queryKey);
  return stableValueHash(asArray);
}
/**
 * Hashes the value into a stable hash.
 */

function stableValueHash(value) {
  return JSON.stringify(value, function (_, val) {
    return isPlainObject(val) ? Object.keys(val).sort().reduce(function (result, key) {
      result[key] = val[key];
      return result;
    }, {}) : val;
  });
}
/**
 * Checks if key `b` partially matches with key `a`.
 */

function partialMatchKey(a, b) {
  return partialDeepEqual(ensureQueryKeyArray(a), ensureQueryKeyArray(b));
}
/**
 * Checks if `b` partially matches with `a`.
 */

function partialDeepEqual(a, b) {
  if (a === b) {
    return true;
  }

  if (typeof a !== typeof b) {
    return false;
  }

  if (a && b && typeof a === 'object' && typeof b === 'object') {
    return !Object.keys(b).some(function (key) {
      return !partialDeepEqual(a[key], b[key]);
    });
  }

  return false;
}
/**
 * This function returns `a` if `b` is deeply equal.
 * If not, it will replace any deeply equal children of `b` with those of `a`.
 * This can be used for structural sharing between JSON values for example.
 */

function replaceEqualDeep(a, b) {
  if (a === b) {
    return a;
  }

  var array = Array.isArray(a) && Array.isArray(b);

  if (array || isPlainObject(a) && isPlainObject(b)) {
    var aSize = array ? a.length : Object.keys(a).length;
    var bItems = array ? b : Object.keys(b);
    var bSize = bItems.length;
    var copy = array ? [] : {};
    var equalItems = 0;

    for (var i = 0; i < bSize; i++) {
      var key = array ? i : bItems[i];
      copy[key] = replaceEqualDeep(a[key], b[key]);

      if (copy[key] === a[key]) {
        equalItems++;
      }
    }

    return aSize === bSize && equalItems === aSize ? a : copy;
  }

  return b;
}
/**
 * Shallow compare objects. Only works with objects that always have the same properties.
 */

function shallowEqualObjects(a, b) {
  if (a && !b || b && !a) {
    return false;
  }

  for (var key in a) {
    if (a[key] !== b[key]) {
      return false;
    }
  }

  return true;
} // Copied from: https://github.com/jonschlinkert/is-plain-object

function isPlainObject(o) {
  if (!hasObjectPrototype(o)) {
    return false;
  } // If has modified constructor


  var ctor = o.constructor;

  if (typeof ctor === 'undefined') {
    return true;
  } // If has modified prototype


  var prot = ctor.prototype;

  if (!hasObjectPrototype(prot)) {
    return false;
  } // If constructor does not have an Object-specific method


  if (!prot.hasOwnProperty('isPrototypeOf')) {
    return false;
  } // Most likely a plain Object


  return true;
}

function hasObjectPrototype(o) {
  return Object.prototype.toString.call(o) === '[object Object]';
}

function isQueryKey(value) {
  return typeof value === 'string' || Array.isArray(value);
}
function isError(value) {
  return value instanceof Error;
}
function sleep(timeout) {
  return new Promise(function (resolve) {
    setTimeout(resolve, timeout);
  });
}
/**
 * Schedules a microtask.
 * This can be useful to schedule state updates after rendering.
 */

function scheduleMicrotask(callback) {
  Promise.resolve().then(callback).catch(function (error) {
    return setTimeout(function () {
      throw error;
    });
  });
}

/***/ }),

/***/ "../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/index.js":
/*!************************************************************************************************************************************************************!*\
  !*** ../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/index.js ***!
  \************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ "../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/index.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _core__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _core__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./react */ "../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/react/index.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _react__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _react__WEBPACK_IMPORTED_MODULE_1__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);



/***/ }),

/***/ "../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/react/QueryClientProvider.js":
/*!********************************************************************************************************************************************************************************!*\
  !*** ../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/react/QueryClientProvider.js ***!
  \********************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useQueryClient": function() { return /* binding */ useQueryClient; },
/* harmony export */   "QueryClientProvider": function() { return /* binding */ QueryClientProvider; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../.yarn/cache/react-npm-18.0.0-alpha-e3b76a85c-20210802-f2b5a5619c-652df3e330.zip/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var defaultContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createContext(undefined);
var QueryClientSharingContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createContext(false); // if contextSharing is on, we share the first and at least one
// instance of the context across the window
// to ensure that if React Query is used across
// different bundles or microfrontends they will
// all use the same **instance** of context, regardless
// of module scoping.

function getQueryClientContext(contextSharing) {
  if (contextSharing && typeof window !== 'undefined') {
    if (!window.ReactQueryClientContext) {
      window.ReactQueryClientContext = defaultContext;
    }

    return window.ReactQueryClientContext;
  }

  return defaultContext;
}

var useQueryClient = function useQueryClient() {
  var queryClient = react__WEBPACK_IMPORTED_MODULE_0___default().useContext(getQueryClientContext(react__WEBPACK_IMPORTED_MODULE_0___default().useContext(QueryClientSharingContext)));

  if (!queryClient) {
    throw new Error('No QueryClient set, use QueryClientProvider to set one');
  }

  return queryClient;
};
var QueryClientProvider = function QueryClientProvider(_ref) {
  var client = _ref.client,
      _ref$contextSharing = _ref.contextSharing,
      contextSharing = _ref$contextSharing === void 0 ? false : _ref$contextSharing,
      children = _ref.children;
  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(function () {
    client.mount();
    return function () {
      client.unmount();
    };
  }, [client]);
  var Context = getQueryClientContext(contextSharing);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(QueryClientSharingContext.Provider, {
    value: contextSharing
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Context.Provider, {
    value: client
  }, children));
};

/***/ }),

/***/ "../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/react/QueryErrorResetBoundary.js":
/*!************************************************************************************************************************************************************************************!*\
  !*** ../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/react/QueryErrorResetBoundary.js ***!
  \************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useQueryErrorResetBoundary": function() { return /* binding */ useQueryErrorResetBoundary; },
/* harmony export */   "QueryErrorResetBoundary": function() { return /* binding */ QueryErrorResetBoundary; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../.yarn/cache/react-npm-18.0.0-alpha-e3b76a85c-20210802-f2b5a5619c-652df3e330.zip/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
 // CONTEXT

function createValue() {
  var _isReset = false;
  return {
    clearReset: function clearReset() {
      _isReset = false;
    },
    reset: function reset() {
      _isReset = true;
    },
    isReset: function isReset() {
      return _isReset;
    }
  };
}

var QueryErrorResetBoundaryContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createContext(createValue()); // HOOK

var useQueryErrorResetBoundary = function useQueryErrorResetBoundary() {
  return react__WEBPACK_IMPORTED_MODULE_0___default().useContext(QueryErrorResetBoundaryContext);
}; // COMPONENT

var QueryErrorResetBoundary = function QueryErrorResetBoundary(_ref) {
  var children = _ref.children;
  var value = react__WEBPACK_IMPORTED_MODULE_0___default().useMemo(function () {
    return createValue();
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(QueryErrorResetBoundaryContext.Provider, {
    value: value
  }, typeof children === 'function' ? children(value) : children);
};

/***/ }),

/***/ "../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/react/index.js":
/*!******************************************************************************************************************************************************************!*\
  !*** ../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/react/index.js ***!
  \******************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QueryClientProvider": function() { return /* reexport safe */ _QueryClientProvider__WEBPACK_IMPORTED_MODULE_2__.QueryClientProvider; },
/* harmony export */   "useQueryClient": function() { return /* reexport safe */ _QueryClientProvider__WEBPACK_IMPORTED_MODULE_2__.useQueryClient; },
/* harmony export */   "QueryErrorResetBoundary": function() { return /* reexport safe */ _QueryErrorResetBoundary__WEBPACK_IMPORTED_MODULE_3__.QueryErrorResetBoundary; },
/* harmony export */   "useQueryErrorResetBoundary": function() { return /* reexport safe */ _QueryErrorResetBoundary__WEBPACK_IMPORTED_MODULE_3__.useQueryErrorResetBoundary; },
/* harmony export */   "useIsFetching": function() { return /* reexport safe */ _useIsFetching__WEBPACK_IMPORTED_MODULE_4__.useIsFetching; },
/* harmony export */   "useIsMutating": function() { return /* reexport safe */ _useIsMutating__WEBPACK_IMPORTED_MODULE_5__.useIsMutating; },
/* harmony export */   "useMutation": function() { return /* reexport safe */ _useMutation__WEBPACK_IMPORTED_MODULE_6__.useMutation; },
/* harmony export */   "useQuery": function() { return /* reexport safe */ _useQuery__WEBPACK_IMPORTED_MODULE_7__.useQuery; },
/* harmony export */   "useQueries": function() { return /* reexport safe */ _useQueries__WEBPACK_IMPORTED_MODULE_8__.useQueries; },
/* harmony export */   "useInfiniteQuery": function() { return /* reexport safe */ _useInfiniteQuery__WEBPACK_IMPORTED_MODULE_9__.useInfiniteQuery; }
/* harmony export */ });
/* harmony import */ var _setBatchUpdatesFn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setBatchUpdatesFn */ "../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/react/setBatchUpdatesFn.js");
/* harmony import */ var _setLogger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setLogger */ "../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/react/setLogger.js");
/* harmony import */ var _QueryClientProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./QueryClientProvider */ "../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/react/QueryClientProvider.js");
/* harmony import */ var _QueryErrorResetBoundary__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./QueryErrorResetBoundary */ "../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/react/QueryErrorResetBoundary.js");
/* harmony import */ var _useIsFetching__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./useIsFetching */ "../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/react/useIsFetching.js");
/* harmony import */ var _useIsMutating__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./useIsMutating */ "../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/react/useIsMutating.js");
/* harmony import */ var _useMutation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./useMutation */ "../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/react/useMutation.js");
/* harmony import */ var _useQuery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./useQuery */ "../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/react/useQuery.js");
/* harmony import */ var _useQueries__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./useQueries */ "../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/react/useQueries.js");
/* harmony import */ var _useInfiniteQuery__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./useInfiniteQuery */ "../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/react/useInfiniteQuery.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./types */ "../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/react/types.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_types__WEBPACK_IMPORTED_MODULE_10__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _types__WEBPACK_IMPORTED_MODULE_10__) if(["default","QueryClientProvider","useQueryClient","QueryErrorResetBoundary","useQueryErrorResetBoundary","useIsFetching","useIsMutating","useMutation","useQuery","useQueries","useInfiniteQuery"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _types__WEBPACK_IMPORTED_MODULE_10__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
// Side effects









 // Types



/***/ }),

/***/ "../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/react/logger.js":
/*!*******************************************************************************************************************************************************************!*\
  !*** ../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/react/logger.js ***!
  \*******************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "logger": function() { return /* binding */ logger; }
/* harmony export */ });
var logger = console;

/***/ }),

/***/ "../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/react/reactBatchedUpdates.js":
/*!********************************************************************************************************************************************************************************!*\
  !*** ../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/react/reactBatchedUpdates.js ***!
  \********************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "unstable_batchedUpdates": function() { return /* binding */ unstable_batchedUpdates; }
/* harmony export */ });
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom */ "../../.yarn/__virtual__/react-dom-virtual-ff24a6d21d/0/cache/react-dom-npm-18.0.0-alpha-e3b76a85c-20210802-edd7260178-3227f833e1.zip/node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_0__);

var unstable_batchedUpdates = (react_dom__WEBPACK_IMPORTED_MODULE_0___default().unstable_batchedUpdates);

/***/ }),

/***/ "../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/react/setBatchUpdatesFn.js":
/*!******************************************************************************************************************************************************************************!*\
  !*** ../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/react/setBatchUpdatesFn.js ***!
  \******************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/index.js");
/* harmony import */ var _reactBatchedUpdates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reactBatchedUpdates */ "../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/react/reactBatchedUpdates.js");


_core__WEBPACK_IMPORTED_MODULE_0__.notifyManager.setBatchNotifyFunction(_reactBatchedUpdates__WEBPACK_IMPORTED_MODULE_1__.unstable_batchedUpdates);

/***/ }),

/***/ "../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/react/setLogger.js":
/*!**********************************************************************************************************************************************************************!*\
  !*** ../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/react/setLogger.js ***!
  \**********************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core */ "../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/index.js");
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logger */ "../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/react/logger.js");



if (_logger__WEBPACK_IMPORTED_MODULE_0__.logger) {
  (0,_core__WEBPACK_IMPORTED_MODULE_1__.setLogger)(_logger__WEBPACK_IMPORTED_MODULE_0__.logger);
}

/***/ }),

/***/ "../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/react/types.js":
/*!******************************************************************************************************************************************************************!*\
  !*** ../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/react/types.js ***!
  \******************************************************************************************************************************************************************/
/***/ (function() {



/***/ }),

/***/ "../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/react/useBaseQuery.js":
/*!*************************************************************************************************************************************************************************!*\
  !*** ../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/react/useBaseQuery.js ***!
  \*************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useBaseQuery": function() { return /* binding */ useBaseQuery; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../.yarn/cache/react-npm-18.0.0-alpha-e3b76a85c-20210802-f2b5a5619c-652df3e330.zip/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_notifyManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/notifyManager */ "../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/notifyManager.js");
/* harmony import */ var _QueryErrorResetBoundary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./QueryErrorResetBoundary */ "../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/react/QueryErrorResetBoundary.js");
/* harmony import */ var _QueryClientProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QueryClientProvider */ "../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/react/QueryClientProvider.js");




function useBaseQuery(options, Observer) {
  var mountedRef = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(false);

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default().useState(0),
      forceUpdate = _React$useState[1];

  var queryClient = (0,_QueryClientProvider__WEBPACK_IMPORTED_MODULE_1__.useQueryClient)();
  var errorResetBoundary = (0,_QueryErrorResetBoundary__WEBPACK_IMPORTED_MODULE_2__.useQueryErrorResetBoundary)();
  var defaultedOptions = queryClient.defaultQueryObserverOptions(options); // Make sure results are optimistically set in fetching state before subscribing or updating options

  defaultedOptions.optimisticResults = true; // Include callbacks in batch renders

  if (defaultedOptions.onError) {
    defaultedOptions.onError = _core_notifyManager__WEBPACK_IMPORTED_MODULE_3__.notifyManager.batchCalls(defaultedOptions.onError);
  }

  if (defaultedOptions.onSuccess) {
    defaultedOptions.onSuccess = _core_notifyManager__WEBPACK_IMPORTED_MODULE_3__.notifyManager.batchCalls(defaultedOptions.onSuccess);
  }

  if (defaultedOptions.onSettled) {
    defaultedOptions.onSettled = _core_notifyManager__WEBPACK_IMPORTED_MODULE_3__.notifyManager.batchCalls(defaultedOptions.onSettled);
  }

  if (defaultedOptions.suspense) {
    // Always set stale time when using suspense to prevent
    // fetching again when directly mounting after suspending
    if (typeof defaultedOptions.staleTime !== 'number') {
      defaultedOptions.staleTime = 1000;
    }
  }

  if (defaultedOptions.suspense || defaultedOptions.useErrorBoundary) {
    // Prevent retrying failed query if the error boundary has not been reset yet
    if (!errorResetBoundary.isReset()) {
      defaultedOptions.retryOnMount = false;
    }
  }

  var _React$useState2 = react__WEBPACK_IMPORTED_MODULE_0___default().useState(function () {
    return new Observer(queryClient, defaultedOptions);
  }),
      observer = _React$useState2[0];

  var result = observer.getOptimisticResult(defaultedOptions);
  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(function () {
    mountedRef.current = true;
    errorResetBoundary.clearReset();
    var unsubscribe = observer.subscribe(_core_notifyManager__WEBPACK_IMPORTED_MODULE_3__.notifyManager.batchCalls(function () {
      if (mountedRef.current) {
        forceUpdate(function (x) {
          return x + 1;
        });
      }
    })); // Update result to make sure we did not miss any query updates
    // between creating the observer and subscribing to it.

    observer.updateResult();
    return function () {
      mountedRef.current = false;
      unsubscribe();
    };
  }, [errorResetBoundary, observer]);
  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(function () {
    // Do not notify on updates because of changes in the options because
    // these changes should already be reflected in the optimistic result.
    observer.setOptions(defaultedOptions, {
      listeners: false
    });
  }, [defaultedOptions, observer]); // Handle suspense

  if (defaultedOptions.suspense && result.isLoading) {
    throw observer.fetchOptimistic(defaultedOptions).then(function (_ref) {
      var data = _ref.data;
      defaultedOptions.onSuccess == null ? void 0 : defaultedOptions.onSuccess(data);
      defaultedOptions.onSettled == null ? void 0 : defaultedOptions.onSettled(data, null);
    }).catch(function (error) {
      errorResetBoundary.clearReset();
      defaultedOptions.onError == null ? void 0 : defaultedOptions.onError(error);
      defaultedOptions.onSettled == null ? void 0 : defaultedOptions.onSettled(undefined, error);
    });
  } // Handle error boundary


  if ((defaultedOptions.suspense || defaultedOptions.useErrorBoundary) && result.isError && !result.isFetching) {
    throw result.error;
  } // Handle result property usage tracking


  if (defaultedOptions.notifyOnChangeProps === 'tracked') {
    result = observer.trackResult(result);
  }

  return result;
}

/***/ }),

/***/ "../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/react/useInfiniteQuery.js":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/react/useInfiniteQuery.js ***!
  \*****************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useInfiniteQuery": function() { return /* binding */ useInfiniteQuery; }
/* harmony export */ });
/* harmony import */ var _core_infiniteQueryObserver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/infiniteQueryObserver */ "../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/infiniteQueryObserver.js");
/* harmony import */ var _core_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/utils */ "../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/utils.js");
/* harmony import */ var _useBaseQuery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useBaseQuery */ "../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/react/useBaseQuery.js");


 // HOOK

function useInfiniteQuery(arg1, arg2, arg3) {
  var options = (0,_core_utils__WEBPACK_IMPORTED_MODULE_0__.parseQueryArgs)(arg1, arg2, arg3);
  return (0,_useBaseQuery__WEBPACK_IMPORTED_MODULE_1__.useBaseQuery)(options, _core_infiniteQueryObserver__WEBPACK_IMPORTED_MODULE_2__.InfiniteQueryObserver);
}

/***/ }),

/***/ "../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/react/useIsFetching.js":
/*!**************************************************************************************************************************************************************************!*\
  !*** ../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/react/useIsFetching.js ***!
  \**************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useIsFetching": function() { return /* binding */ useIsFetching; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../.yarn/cache/react-npm-18.0.0-alpha-e3b76a85c-20210802-f2b5a5619c-652df3e330.zip/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_notifyManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/notifyManager */ "../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/notifyManager.js");
/* harmony import */ var _core_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/utils */ "../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/utils.js");
/* harmony import */ var _QueryClientProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QueryClientProvider */ "../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/react/QueryClientProvider.js");




function useIsFetching(arg1, arg2) {
  var mountedRef = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(false);
  var queryClient = (0,_QueryClientProvider__WEBPACK_IMPORTED_MODULE_1__.useQueryClient)();

  var _parseFilterArgs = (0,_core_utils__WEBPACK_IMPORTED_MODULE_2__.parseFilterArgs)(arg1, arg2),
      filters = _parseFilterArgs[0];

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default().useState(queryClient.isFetching(filters)),
      isFetching = _React$useState[0],
      setIsFetching = _React$useState[1];

  var filtersRef = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(filters);
  filtersRef.current = filters;
  var isFetchingRef = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(isFetching);
  isFetchingRef.current = isFetching;
  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(function () {
    mountedRef.current = true;
    var unsubscribe = queryClient.getQueryCache().subscribe(_core_notifyManager__WEBPACK_IMPORTED_MODULE_3__.notifyManager.batchCalls(function () {
      if (mountedRef.current) {
        var newIsFetching = queryClient.isFetching(filtersRef.current);

        if (isFetchingRef.current !== newIsFetching) {
          setIsFetching(newIsFetching);
        }
      }
    }));
    return function () {
      mountedRef.current = false;
      unsubscribe();
    };
  }, [queryClient]);
  return isFetching;
}

/***/ }),

/***/ "../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/react/useIsMutating.js":
/*!**************************************************************************************************************************************************************************!*\
  !*** ../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/react/useIsMutating.js ***!
  \**************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useIsMutating": function() { return /* binding */ useIsMutating; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../.yarn/cache/react-npm-18.0.0-alpha-e3b76a85c-20210802-f2b5a5619c-652df3e330.zip/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_notifyManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/notifyManager */ "../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/notifyManager.js");
/* harmony import */ var _QueryClientProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QueryClientProvider */ "../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/react/QueryClientProvider.js");



function useIsMutating(filters) {
  var mountedRef = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(false);
  var queryClient = (0,_QueryClientProvider__WEBPACK_IMPORTED_MODULE_1__.useQueryClient)();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default().useState(queryClient.isMutating(filters)),
      isMutating = _React$useState[0],
      setIsMutating = _React$useState[1];

  var filtersRef = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(filters);
  filtersRef.current = filters;
  var isMutatingRef = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(isMutating);
  isMutatingRef.current = isMutating;
  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(function () {
    mountedRef.current = true;
    var unsubscribe = queryClient.getMutationCache().subscribe(_core_notifyManager__WEBPACK_IMPORTED_MODULE_2__.notifyManager.batchCalls(function () {
      if (mountedRef.current) {
        var newIsMutating = queryClient.isMutating(filtersRef.current);

        if (isMutatingRef.current !== newIsMutating) {
          setIsMutating(newIsMutating);
        }
      }
    }));
    return function () {
      mountedRef.current = false;
      unsubscribe();
    };
  }, [queryClient]);
  return isMutating;
}

/***/ }),

/***/ "../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/react/useMutation.js":
/*!************************************************************************************************************************************************************************!*\
  !*** ../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/react/useMutation.js ***!
  \************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useMutation": function() { return /* binding */ useMutation; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "../../.yarn/cache/@babel-runtime-npm-7.14.8-177f7f6866-d2dd0ce51d.zip/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../../.yarn/cache/react-npm-18.0.0-alpha-e3b76a85c-20210802-f2b5a5619c-652df3e330.zip/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_notifyManager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/notifyManager */ "../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/notifyManager.js");
/* harmony import */ var _core_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/utils */ "../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/utils.js");
/* harmony import */ var _core_mutationObserver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/mutationObserver */ "../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/mutationObserver.js");
/* harmony import */ var _QueryClientProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./QueryClientProvider */ "../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/react/QueryClientProvider.js");






function useMutation(arg1, arg2, arg3) {
  var mountedRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(false);

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default().useState(0),
      forceUpdate = _React$useState[1];

  var options = (0,_core_utils__WEBPACK_IMPORTED_MODULE_2__.parseMutationArgs)(arg1, arg2, arg3);
  var queryClient = (0,_QueryClientProvider__WEBPACK_IMPORTED_MODULE_3__.useQueryClient)();
  var obsRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef();

  if (!obsRef.current) {
    obsRef.current = new _core_mutationObserver__WEBPACK_IMPORTED_MODULE_4__.MutationObserver(queryClient, options);
  } else {
    obsRef.current.setOptions(options);
  }

  var currentResult = obsRef.current.getCurrentResult();
  react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(function () {
    mountedRef.current = true;
    var unsubscribe = obsRef.current.subscribe(_core_notifyManager__WEBPACK_IMPORTED_MODULE_5__.notifyManager.batchCalls(function () {
      if (mountedRef.current) {
        forceUpdate(function (x) {
          return x + 1;
        });
      }
    }));
    return function () {
      mountedRef.current = false;
      unsubscribe();
    };
  }, []);
  var mutate = react__WEBPACK_IMPORTED_MODULE_1___default().useCallback(function (variables, mutateOptions) {
    obsRef.current.mutate(variables, mutateOptions).catch(_core_utils__WEBPACK_IMPORTED_MODULE_2__.noop);
  }, []);

  if (currentResult.error && obsRef.current.options.useErrorBoundary) {
    throw currentResult.error;
  }

  return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, currentResult, {
    mutate: mutate,
    mutateAsync: currentResult.mutate
  });
}

/***/ }),

/***/ "../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/react/useQueries.js":
/*!***********************************************************************************************************************************************************************!*\
  !*** ../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/react/useQueries.js ***!
  \***********************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useQueries": function() { return /* binding */ useQueries; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../.yarn/cache/react-npm-18.0.0-alpha-e3b76a85c-20210802-f2b5a5619c-652df3e330.zip/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_notifyManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/notifyManager */ "../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/notifyManager.js");
/* harmony import */ var _core_queriesObserver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/queriesObserver */ "../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/queriesObserver.js");
/* harmony import */ var _QueryClientProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QueryClientProvider */ "../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/react/QueryClientProvider.js");




function useQueries(queries) {
  var mountedRef = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(false);

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default().useState(0),
      forceUpdate = _React$useState[1];

  var queryClient = (0,_QueryClientProvider__WEBPACK_IMPORTED_MODULE_1__.useQueryClient)();
  var defaultedQueries = queries.map(function (options) {
    var defaultedOptions = queryClient.defaultQueryObserverOptions(options); // Make sure the results are already in fetching state before subscribing or updating options

    defaultedOptions.optimisticResults = true;
    return defaultedOptions;
  });

  var _React$useState2 = react__WEBPACK_IMPORTED_MODULE_0___default().useState(function () {
    return new _core_queriesObserver__WEBPACK_IMPORTED_MODULE_2__.QueriesObserver(queryClient, defaultedQueries);
  }),
      observer = _React$useState2[0];

  var result = observer.getOptimisticResult(defaultedQueries);
  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(function () {
    mountedRef.current = true;
    var unsubscribe = observer.subscribe(_core_notifyManager__WEBPACK_IMPORTED_MODULE_3__.notifyManager.batchCalls(function () {
      if (mountedRef.current) {
        forceUpdate(function (x) {
          return x + 1;
        });
      }
    }));
    return function () {
      mountedRef.current = false;
      unsubscribe();
    };
  }, [observer]);
  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(function () {
    // Do not notify on updates because of changes in the options because
    // these changes should already be reflected in the optimistic result.
    observer.setQueries(defaultedQueries, {
      listeners: false
    });
  }, [defaultedQueries, observer]);
  return result;
}

/***/ }),

/***/ "../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/react/useQuery.js":
/*!*********************************************************************************************************************************************************************!*\
  !*** ../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/react/useQuery.js ***!
  \*********************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useQuery": function() { return /* binding */ useQuery; }
/* harmony export */ });
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core */ "../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/index.js");
/* harmony import */ var _core_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/utils */ "../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/utils.js");
/* harmony import */ var _useBaseQuery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useBaseQuery */ "../../.yarn/__virtual__/react-query-virtual-f6d654be79/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/react/useBaseQuery.js");


 // HOOK

function useQuery(arg1, arg2, arg3) {
  var parsedOptions = (0,_core_utils__WEBPACK_IMPORTED_MODULE_0__.parseQueryArgs)(arg1, arg2, arg3);
  return (0,_useBaseQuery__WEBPACK_IMPORTED_MODULE_1__.useBaseQuery)(parsedOptions, _core__WEBPACK_IMPORTED_MODULE_2__.QueryObserver);
}

/***/ }),

/***/ "../../.yarn/cache/@babel-runtime-npm-7.12.5-b3edb8ee8e-64964a0fd1.zip/node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!***************************************************************************************************************************************!*\
  !*** ../../.yarn/cache/@babel-runtime-npm-7.12.5-b3edb8ee8e-64964a0fd1.zip/node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \***************************************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _defineProperty; }
/* harmony export */ });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "../../.yarn/cache/@babel-runtime-npm-7.14.8-177f7f6866-d2dd0ce51d.zip/node_modules/@babel/runtime/helpers/esm/extends.js":
/*!********************************************************************************************************************************!*\
  !*** ../../.yarn/cache/@babel-runtime-npm-7.14.8-177f7f6866-d2dd0ce51d.zip/node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \********************************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _extends; }
/* harmony export */ });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "../../.yarn/cache/@babel-runtime-npm-7.14.8-177f7f6866-d2dd0ce51d.zip/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!**************************************************************************************************************************************!*\
  !*** ../../.yarn/cache/@babel-runtime-npm-7.14.8-177f7f6866-d2dd0ce51d.zip/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \**************************************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _inheritsLoose; }
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "../../.yarn/cache/@babel-runtime-npm-7.14.8-177f7f6866-d2dd0ce51d.zip/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__.default)(subClass, superClass);
}

/***/ }),

/***/ "../../.yarn/cache/@babel-runtime-npm-7.14.8-177f7f6866-d2dd0ce51d.zip/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!***************************************************************************************************************************************!*\
  !*** ../../.yarn/cache/@babel-runtime-npm-7.14.8-177f7f6866-d2dd0ce51d.zip/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \***************************************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _setPrototypeOf; }
/* harmony export */ });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "../../.yarn/cache/@emotion-cache-npm-11.4.0-701cf41a62-bdef4c0ccc.zip/node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js":
/*!*******************************************************************************************************************************************!*\
  !*** ../../.yarn/cache/@emotion-cache-npm-11.4.0-701cf41a62-bdef4c0ccc.zip/node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js ***!
  \*******************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_sheet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/sheet */ "../../.yarn/cache/@emotion-sheet-npm-1.0.1-f917bf7ec9-624e2ede03.zip/node_modules/@emotion/sheet/dist/emotion-sheet.browser.esm.js");
/* harmony import */ var stylis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! stylis */ "../../.yarn/cache/stylis-npm-4.0.10-4c0fa47ff8-0fecaf5c23.zip/node_modules/stylis/index.js");
/* harmony import */ var _emotion_weak_memoize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/weak-memoize */ "../../.yarn/cache/@emotion-weak-memoize-npm-0.2.5-9f2e49e7c8-27d402b0c6.zip/node_modules/@emotion/weak-memoize/dist/weak-memoize.browser.esm.js");
/* harmony import */ var _emotion_memoize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/memoize */ "../../.yarn/cache/@emotion-memoize-npm-0.7.5-e5e7e9eeca-83da8d4a76.zip/node_modules/@emotion/memoize/dist/emotion-memoize.browser.esm.js");





var last = function last(arr) {
  return arr.length ? arr[arr.length - 1] : null;
};

var toRules = function toRules(parsed, points) {
  // pretend we've started with a comma
  var index = -1;
  var character = 44;

  do {
    switch ((0,stylis__WEBPACK_IMPORTED_MODULE_3__.token)(character)) {
      case 0:
        // &\f
        if (character === 38 && (0,stylis__WEBPACK_IMPORTED_MODULE_3__.peek)() === 12) {
          // this is not 100% correct, we don't account for literal sequences here - like for example quoted strings
          // stylis inserts \f after & to know when & where it should replace this sequence with the context selector
          // and when it should just concatenate the outer and inner selectors
          // it's very unlikely for this sequence to actually appear in a different context, so we just leverage this fact here
          points[index] = 1;
        }

        parsed[index] += (0,stylis__WEBPACK_IMPORTED_MODULE_3__.identifier)(stylis__WEBPACK_IMPORTED_MODULE_3__.position - 1);
        break;

      case 2:
        parsed[index] += (0,stylis__WEBPACK_IMPORTED_MODULE_3__.delimit)(character);
        break;

      case 4:
        // comma
        if (character === 44) {
          // colon
          parsed[++index] = (0,stylis__WEBPACK_IMPORTED_MODULE_3__.peek)() === 58 ? '&\f' : '';
          points[index] = parsed[index].length;
          break;
        }

      // fallthrough

      default:
        parsed[index] += (0,stylis__WEBPACK_IMPORTED_MODULE_3__.from)(character);
    }
  } while (character = (0,stylis__WEBPACK_IMPORTED_MODULE_3__.next)());

  return parsed;
};

var getRules = function getRules(value, points) {
  return (0,stylis__WEBPACK_IMPORTED_MODULE_3__.dealloc)(toRules((0,stylis__WEBPACK_IMPORTED_MODULE_3__.alloc)(value), points));
}; // WeakSet would be more appropriate, but only WeakMap is supported in IE11


var fixedElements = /* #__PURE__ */new WeakMap();
var compat = function compat(element) {
  if (element.type !== 'rule' || !element.parent || // .length indicates if this rule contains pseudo or not
  !element.length) {
    return;
  }

  var value = element.value,
      parent = element.parent;
  var isImplicitRule = element.column === parent.column && element.line === parent.line;

  while (parent.type !== 'rule') {
    parent = parent.parent;
    if (!parent) return;
  } // short-circuit for the simplest case


  if (element.props.length === 1 && value.charCodeAt(0) !== 58
  /* colon */
  && !fixedElements.get(parent)) {
    return;
  } // if this is an implicitly inserted rule (the one eagerly inserted at the each new nested level)
  // then the props has already been manipulated beforehand as they that array is shared between it and its "rule parent"


  if (isImplicitRule) {
    return;
  }

  fixedElements.set(element, true);
  var points = [];
  var rules = getRules(value, points);
  var parentRules = parent.props;

  for (var i = 0, k = 0; i < rules.length; i++) {
    for (var j = 0; j < parentRules.length; j++, k++) {
      element.props[k] = points[i] ? rules[i].replace(/&\f/g, parentRules[j]) : parentRules[j] + " " + rules[i];
    }
  }
};
var removeLabel = function removeLabel(element) {
  if (element.type === 'decl') {
    var value = element.value;

    if ( // charcode for l
    value.charCodeAt(0) === 108 && // charcode for b
    value.charCodeAt(2) === 98) {
      // this ignores label
      element["return"] = '';
      element.value = '';
    }
  }
};
var ignoreFlag = 'emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason';

var isIgnoringComment = function isIgnoringComment(element) {
  return !!element && element.type === 'comm' && element.children.indexOf(ignoreFlag) > -1;
};

var createUnsafeSelectorsAlarm = function createUnsafeSelectorsAlarm(cache) {
  return function (element, index, children) {
    if (element.type !== 'rule') return;
    var unsafePseudoClasses = element.value.match(/(:first|:nth|:nth-last)-child/g);

    if (unsafePseudoClasses && cache.compat !== true) {
      var prevElement = index > 0 ? children[index - 1] : null;

      if (prevElement && isIgnoringComment(last(prevElement.children))) {
        return;
      }

      unsafePseudoClasses.forEach(function (unsafePseudoClass) {
        console.error("The pseudo class \"" + unsafePseudoClass + "\" is potentially unsafe when doing server-side rendering. Try changing it to \"" + unsafePseudoClass.split('-child')[0] + "-of-type\".");
      });
    }
  };
};

var isImportRule = function isImportRule(element) {
  return element.type.charCodeAt(1) === 105 && element.type.charCodeAt(0) === 64;
};

var isPrependedWithRegularRules = function isPrependedWithRegularRules(index, children) {
  for (var i = index - 1; i >= 0; i--) {
    if (!isImportRule(children[i])) {
      return true;
    }
  }

  return false;
}; // use this to remove incorrect elements from further processing
// so they don't get handed to the `sheet` (or anything else)
// as that could potentially lead to additional logs which in turn could be overhelming to the user


var nullifyElement = function nullifyElement(element) {
  element.type = '';
  element.value = '';
  element["return"] = '';
  element.children = '';
  element.props = '';
};

var incorrectImportAlarm = function incorrectImportAlarm(element, index, children) {
  if (!isImportRule(element)) {
    return;
  }

  if (element.parent) {
    console.error("`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles.");
    nullifyElement(element);
  } else if (isPrependedWithRegularRules(index, children)) {
    console.error("`@import` rules can't be after other rules. Please put your `@import` rules before your other rules.");
    nullifyElement(element);
  }
};

var defaultStylisPlugins = [stylis__WEBPACK_IMPORTED_MODULE_3__.prefixer];

var createCache = function createCache(options) {
  var key = options.key;

  if ( true && !key) {
    throw new Error("You have to configure `key` for your cache. Please make sure it's unique (and not equal to 'css') as it's used for linking styles to your cache.\n" + "If multiple caches share the same key they might \"fight\" for each other's style elements.");
  }

  if ( key === 'css') {
    var ssrStyles = document.querySelectorAll("style[data-emotion]:not([data-s])"); // get SSRed styles out of the way of React's hydration
    // document.head is a safe place to move them to(though note document.head is not necessarily the last place they will be)
    // note this very very intentionally targets all style elements regardless of the key to ensure
    // that creating a cache works inside of render of a React component

    Array.prototype.forEach.call(ssrStyles, function (node) {
      // we want to only move elements which have a space in the data-emotion attribute value
      // because that indicates that it is an Emotion 11 server-side rendered style elements
      // while we will already ignore Emotion 11 client-side inserted styles because of the :not([data-s]) part in the selector
      // Emotion 10 client-side inserted styles did not have data-s (but importantly did not have a space in their data-emotion attributes)
      // so checking for the space ensures that loading Emotion 11 after Emotion 10 has inserted some styles
      // will not result in the Emotion 10 styles being destroyed
      var dataEmotionAttribute = node.getAttribute('data-emotion');

      if (dataEmotionAttribute.indexOf(' ') === -1) {
        return;
      }
      document.head.appendChild(node);
      node.setAttribute('data-s', '');
    });
  }

  var stylisPlugins = options.stylisPlugins || defaultStylisPlugins;

  if (true) {
    // $FlowFixMe
    if (/[^a-z-]/.test(key)) {
      throw new Error("Emotion key must only contain lower case alphabetical characters and - but \"" + key + "\" was passed");
    }
  }

  var inserted = {}; // $FlowFixMe

  var container;
  var nodesToHydrate = [];

  {
    container = options.container || document.head;
    Array.prototype.forEach.call( // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll("style[data-emotion^=\"" + key + " \"]"), function (node) {
      var attrib = node.getAttribute("data-emotion").split(' '); // $FlowFixMe

      for (var i = 1; i < attrib.length; i++) {
        inserted[attrib[i]] = true;
      }

      nodesToHydrate.push(node);
    });
  }

  var _insert;

  var omnipresentPlugins = [compat, removeLabel];

  if (true) {
    omnipresentPlugins.push(createUnsafeSelectorsAlarm({
      get compat() {
        return cache.compat;
      }

    }), incorrectImportAlarm);
  }

  {
    var currentSheet;
    var finalizingPlugins = [stylis__WEBPACK_IMPORTED_MODULE_3__.stringify,  true ? function (element) {
      if (!element.root) {
        if (element["return"]) {
          currentSheet.insert(element["return"]);
        } else if (element.value && element.type !== stylis__WEBPACK_IMPORTED_MODULE_3__.COMMENT) {
          // insert empty rule in non-production environments
          // so @emotion/jest can grab `key` from the (JS)DOM for caches without any rules inserted yet
          currentSheet.insert(element.value + "{}");
        }
      }
    } : 0];
    var serializer = (0,stylis__WEBPACK_IMPORTED_MODULE_3__.middleware)(omnipresentPlugins.concat(stylisPlugins, finalizingPlugins));

    var stylis = function stylis(styles) {
      return (0,stylis__WEBPACK_IMPORTED_MODULE_3__.serialize)((0,stylis__WEBPACK_IMPORTED_MODULE_3__.compile)(styles), serializer);
    };

    _insert = function insert(selector, serialized, sheet, shouldCache) {
      currentSheet = sheet;

      if ( true && serialized.map !== undefined) {
        currentSheet = {
          insert: function insert(rule) {
            sheet.insert(rule + serialized.map);
          }
        };
      }

      stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);

      if (shouldCache) {
        cache.inserted[serialized.name] = true;
      }
    };
  }

  var cache = {
    key: key,
    sheet: new _emotion_sheet__WEBPACK_IMPORTED_MODULE_0__.StyleSheet({
      key: key,
      container: container,
      nonce: options.nonce,
      speedy: options.speedy,
      prepend: options.prepend
    }),
    nonce: options.nonce,
    inserted: inserted,
    registered: {},
    insert: _insert
  };
  cache.sheet.hydrate(nodesToHydrate);
  return cache;
};

/* harmony default export */ __webpack_exports__["default"] = (createCache);


/***/ }),

/***/ "../../.yarn/cache/@emotion-hash-npm-0.8.0-0104f4bbf3-4b35d88a97.zip/node_modules/@emotion/hash/dist/hash.browser.esm.js":
/*!*******************************************************************************************************************************!*\
  !*** ../../.yarn/cache/@emotion-hash-npm-0.8.0-0104f4bbf3-4b35d88a97.zip/node_modules/@emotion/hash/dist/hash.browser.esm.js ***!
  \*******************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable */
// Inspired by https://github.com/garycourt/murmurhash-js
// Ported from https://github.com/aappleby/smhasher/blob/61a0530f28277f2e850bfc39600ce61d02b518de/src/MurmurHash2.cpp#L37-L86
function murmur2(str) {
  // 'm' and 'r' are mixing constants generated offline.
  // They're not really 'magic', they just happen to work well.
  // const m = 0x5bd1e995;
  // const r = 24;
  // Initialize the hash
  var h = 0; // Mix 4 bytes at a time into the hash

  var k,
      i = 0,
      len = str.length;

  for (; len >= 4; ++i, len -= 4) {
    k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
    k =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16);
    k ^=
    /* k >>> r: */
    k >>> 24;
    h =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16) ^
    /* Math.imul(h, m): */
    (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Handle the last few bytes of the input array


  switch (len) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 0xff) << 16;

    case 2:
      h ^= (str.charCodeAt(i + 1) & 0xff) << 8;

    case 1:
      h ^= str.charCodeAt(i) & 0xff;
      h =
      /* Math.imul(h, m): */
      (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Do a few final mixes of the hash to ensure the last few
  // bytes are well-incorporated.


  h ^= h >>> 13;
  h =
  /* Math.imul(h, m): */
  (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  return ((h ^ h >>> 15) >>> 0).toString(36);
}

/* harmony default export */ __webpack_exports__["default"] = (murmur2);


/***/ }),

/***/ "../../.yarn/cache/@emotion-memoize-npm-0.7.5-e5e7e9eeca-83da8d4a76.zip/node_modules/@emotion/memoize/dist/emotion-memoize.browser.esm.js":
/*!************************************************************************************************************************************************!*\
  !*** ../../.yarn/cache/@emotion-memoize-npm-0.7.5-e5e7e9eeca-83da8d4a76.zip/node_modules/@emotion/memoize/dist/emotion-memoize.browser.esm.js ***!
  \************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function memoize(fn) {
  var cache = Object.create(null);
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

/* harmony default export */ __webpack_exports__["default"] = (memoize);


/***/ }),

/***/ "../../.yarn/cache/@emotion-serialize-npm-1.0.2-a692afdb82-ff84fbe09e.zip/node_modules/@emotion/serialize/dist/emotion-serialize.browser.esm.js":
/*!******************************************************************************************************************************************************!*\
  !*** ../../.yarn/cache/@emotion-serialize-npm-1.0.2-a692afdb82-ff84fbe09e.zip/node_modules/@emotion/serialize/dist/emotion-serialize.browser.esm.js ***!
  \******************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "serializeStyles": function() { return /* binding */ serializeStyles; }
/* harmony export */ });
/* harmony import */ var _emotion_hash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/hash */ "../../.yarn/cache/@emotion-hash-npm-0.8.0-0104f4bbf3-4b35d88a97.zip/node_modules/@emotion/hash/dist/hash.browser.esm.js");
/* harmony import */ var _emotion_unitless__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/unitless */ "../../.yarn/cache/@emotion-unitless-npm-0.7.5-14e1171640-f976e5345b.zip/node_modules/@emotion/unitless/dist/unitless.browser.esm.js");
/* harmony import */ var _emotion_memoize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/memoize */ "../../.yarn/cache/@emotion-memoize-npm-0.7.5-e5e7e9eeca-83da8d4a76.zip/node_modules/@emotion/memoize/dist/emotion-memoize.browser.esm.js");




var ILLEGAL_ESCAPE_SEQUENCE_ERROR = "You have illegal escape sequence in your template literal, most likely inside content's property value.\nBecause you write your CSS inside a JavaScript string you actually have to do double escaping, so for example \"content: '\\00d7';\" should become \"content: '\\\\00d7';\".\nYou can read more about this here:\nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences";
var UNDEFINED_AS_OBJECT_KEY_ERROR = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).";
var hyphenateRegex = /[A-Z]|^ms/g;
var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;

var isCustomProperty = function isCustomProperty(property) {
  return property.charCodeAt(1) === 45;
};

var isProcessableValue = function isProcessableValue(value) {
  return value != null && typeof value !== 'boolean';
};

var processStyleName = /* #__PURE__ */(0,_emotion_memoize__WEBPACK_IMPORTED_MODULE_2__.default)(function (styleName) {
  return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, '-$&').toLowerCase();
});

var processStyleValue = function processStyleValue(key, value) {
  switch (key) {
    case 'animation':
    case 'animationName':
      {
        if (typeof value === 'string') {
          return value.replace(animationRegex, function (match, p1, p2) {
            cursor = {
              name: p1,
              styles: p2,
              next: cursor
            };
            return p1;
          });
        }
      }
  }

  if (_emotion_unitless__WEBPACK_IMPORTED_MODULE_1__.default[key] !== 1 && !isCustomProperty(key) && typeof value === 'number' && value !== 0) {
    return value + 'px';
  }

  return value;
};

if (true) {
  var contentValuePattern = /(attr|counters?|url|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/;
  var contentValues = ['normal', 'none', 'initial', 'inherit', 'unset'];
  var oldProcessStyleValue = processStyleValue;
  var msPattern = /^-ms-/;
  var hyphenPattern = /-(.)/g;
  var hyphenatedCache = {};

  processStyleValue = function processStyleValue(key, value) {
    if (key === 'content') {
      if (typeof value !== 'string' || contentValues.indexOf(value) === -1 && !contentValuePattern.test(value) && (value.charAt(0) !== value.charAt(value.length - 1) || value.charAt(0) !== '"' && value.charAt(0) !== "'")) {
        throw new Error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + value + "\"'`");
      }
    }

    var processed = oldProcessStyleValue(key, value);

    if (processed !== '' && !isCustomProperty(key) && key.indexOf('-') !== -1 && hyphenatedCache[key] === undefined) {
      hyphenatedCache[key] = true;
      console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + key.replace(msPattern, 'ms-').replace(hyphenPattern, function (str, _char) {
        return _char.toUpperCase();
      }) + "?");
    }

    return processed;
  };
}

function handleInterpolation(mergedProps, registered, interpolation) {
  if (interpolation == null) {
    return '';
  }

  if (interpolation.__emotion_styles !== undefined) {
    if ( true && interpolation.toString() === 'NO_COMPONENT_SELECTOR') {
      throw new Error('Component selectors can only be used in conjunction with @emotion/babel-plugin.');
    }

    return interpolation;
  }

  switch (typeof interpolation) {
    case 'boolean':
      {
        return '';
      }

    case 'object':
      {
        if (interpolation.anim === 1) {
          cursor = {
            name: interpolation.name,
            styles: interpolation.styles,
            next: cursor
          };
          return interpolation.name;
        }

        if (interpolation.styles !== undefined) {
          var next = interpolation.next;

          if (next !== undefined) {
            // not the most efficient thing ever but this is a pretty rare case
            // and there will be very few iterations of this generally
            while (next !== undefined) {
              cursor = {
                name: next.name,
                styles: next.styles,
                next: cursor
              };
              next = next.next;
            }
          }

          var styles = interpolation.styles + ";";

          if ( true && interpolation.map !== undefined) {
            styles += interpolation.map;
          }

          return styles;
        }

        return createStringFromObject(mergedProps, registered, interpolation);
      }

    case 'function':
      {
        if (mergedProps !== undefined) {
          var previousCursor = cursor;
          var result = interpolation(mergedProps);
          cursor = previousCursor;
          return handleInterpolation(mergedProps, registered, result);
        } else if (true) {
          console.error('Functions that are interpolated in css calls will be stringified.\n' + 'If you want to have a css call based on props, create a function that returns a css call like this\n' + 'let dynamicStyle = (props) => css`color: ${props.color}`\n' + 'It can be called directly with props or interpolated in a styled call like this\n' + "let SomeComponent = styled('div')`${dynamicStyle}`");
        }

        break;
      }

    case 'string':
      if (true) {
        var matched = [];
        var replaced = interpolation.replace(animationRegex, function (match, p1, p2) {
          var fakeVarName = "animation" + matched.length;
          matched.push("const " + fakeVarName + " = keyframes`" + p2.replace(/^@keyframes animation-\w+/, '') + "`");
          return "${" + fakeVarName + "}";
        });

        if (matched.length) {
          console.error('`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\n' + 'Instead of doing this:\n\n' + [].concat(matched, ["`" + replaced + "`"]).join('\n') + '\n\nYou should wrap it with `css` like this:\n\n' + ("css`" + replaced + "`"));
        }
      }

      break;
  } // finalize string values (regular strings and functions interpolated into css calls)


  if (registered == null) {
    return interpolation;
  }

  var cached = registered[interpolation];
  return cached !== undefined ? cached : interpolation;
}

function createStringFromObject(mergedProps, registered, obj) {
  var string = '';

  if (Array.isArray(obj)) {
    for (var i = 0; i < obj.length; i++) {
      string += handleInterpolation(mergedProps, registered, obj[i]) + ";";
    }
  } else {
    for (var _key in obj) {
      var value = obj[_key];

      if (typeof value !== 'object') {
        if (registered != null && registered[value] !== undefined) {
          string += _key + "{" + registered[value] + "}";
        } else if (isProcessableValue(value)) {
          string += processStyleName(_key) + ":" + processStyleValue(_key, value) + ";";
        }
      } else {
        if (_key === 'NO_COMPONENT_SELECTOR' && "development" !== 'production') {
          throw new Error('Component selectors can only be used in conjunction with @emotion/babel-plugin.');
        }

        if (Array.isArray(value) && typeof value[0] === 'string' && (registered == null || registered[value[0]] === undefined)) {
          for (var _i = 0; _i < value.length; _i++) {
            if (isProcessableValue(value[_i])) {
              string += processStyleName(_key) + ":" + processStyleValue(_key, value[_i]) + ";";
            }
          }
        } else {
          var interpolated = handleInterpolation(mergedProps, registered, value);

          switch (_key) {
            case 'animation':
            case 'animationName':
              {
                string += processStyleName(_key) + ":" + interpolated + ";";
                break;
              }

            default:
              {
                if ( true && _key === 'undefined') {
                  console.error(UNDEFINED_AS_OBJECT_KEY_ERROR);
                }

                string += _key + "{" + interpolated + "}";
              }
          }
        }
      }
    }
  }

  return string;
}

var labelPattern = /label:\s*([^\s;\n{]+)\s*(;|$)/g;
var sourceMapPattern;

if (true) {
  sourceMapPattern = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g;
} // this is the cursor for keyframes
// keyframes are stored on the SerializedStyles object as a linked list


var cursor;
var serializeStyles = function serializeStyles(args, registered, mergedProps) {
  if (args.length === 1 && typeof args[0] === 'object' && args[0] !== null && args[0].styles !== undefined) {
    return args[0];
  }

  var stringMode = true;
  var styles = '';
  cursor = undefined;
  var strings = args[0];

  if (strings == null || strings.raw === undefined) {
    stringMode = false;
    styles += handleInterpolation(mergedProps, registered, strings);
  } else {
    if ( true && strings[0] === undefined) {
      console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
    }

    styles += strings[0];
  } // we start at 1 since we've already handled the first arg


  for (var i = 1; i < args.length; i++) {
    styles += handleInterpolation(mergedProps, registered, args[i]);

    if (stringMode) {
      if ( true && strings[i] === undefined) {
        console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
      }

      styles += strings[i];
    }
  }

  var sourceMap;

  if (true) {
    styles = styles.replace(sourceMapPattern, function (match) {
      sourceMap = match;
      return '';
    });
  } // using a global regex with .exec is stateful so lastIndex has to be reset each time


  labelPattern.lastIndex = 0;
  var identifierName = '';
  var match; // https://esbench.com/bench/5b809c2cf2949800a0f61fb5

  while ((match = labelPattern.exec(styles)) !== null) {
    identifierName += '-' + // $FlowFixMe we know it's not null
    match[1];
  }

  var name = (0,_emotion_hash__WEBPACK_IMPORTED_MODULE_0__.default)(styles) + identifierName;

  if (true) {
    // $FlowFixMe SerializedStyles type doesn't have toString property (and we don't want to add it)
    return {
      name: name,
      styles: styles,
      map: sourceMap,
      next: cursor,
      toString: function toString() {
        return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
      }
    };
  }

  return {
    name: name,
    styles: styles,
    next: cursor
  };
};




/***/ }),

/***/ "../../.yarn/cache/@emotion-sheet-npm-1.0.1-f917bf7ec9-624e2ede03.zip/node_modules/@emotion/sheet/dist/emotion-sheet.browser.esm.js":
/*!******************************************************************************************************************************************!*\
  !*** ../../.yarn/cache/@emotion-sheet-npm-1.0.1-f917bf7ec9-624e2ede03.zip/node_modules/@emotion/sheet/dist/emotion-sheet.browser.esm.js ***!
  \******************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StyleSheet": function() { return /* binding */ StyleSheet; }
/* harmony export */ });
/*

Based off glamor's StyleSheet, thanks Sunil ❤️

high performance StyleSheet for css-in-js systems

- uses multiple style tags behind the scenes for millions of rules
- uses `insertRule` for appending in production for *much* faster performance

// usage

import { StyleSheet } from '@emotion/sheet'

let styleSheet = new StyleSheet({ key: '', container: document.head })

styleSheet.insert('#box { border: 1px solid red; }')
- appends a css rule into the stylesheet

styleSheet.flush()
- empties the stylesheet of all its contents

*/
// $FlowFixMe
function sheetForTag(tag) {
  if (tag.sheet) {
    // $FlowFixMe
    return tag.sheet;
  } // this weirdness brought to you by firefox

  /* istanbul ignore next */


  for (var i = 0; i < document.styleSheets.length; i++) {
    if (document.styleSheets[i].ownerNode === tag) {
      // $FlowFixMe
      return document.styleSheets[i];
    }
  }
}

function createStyleElement(options) {
  var tag = document.createElement('style');
  tag.setAttribute('data-emotion', options.key);

  if (options.nonce !== undefined) {
    tag.setAttribute('nonce', options.nonce);
  }

  tag.appendChild(document.createTextNode(''));
  tag.setAttribute('data-s', '');
  return tag;
}

var StyleSheet = /*#__PURE__*/function () {
  function StyleSheet(options) {
    var _this = this;

    this._insertTag = function (tag) {
      var before;

      if (_this.tags.length === 0) {
        before = _this.prepend ? _this.container.firstChild : _this.before;
      } else {
        before = _this.tags[_this.tags.length - 1].nextSibling;
      }

      _this.container.insertBefore(tag, before);

      _this.tags.push(tag);
    };

    this.isSpeedy = options.speedy === undefined ? "development" === 'production' : options.speedy;
    this.tags = [];
    this.ctr = 0;
    this.nonce = options.nonce; // key is the value of the data-emotion attribute, it's used to identify different sheets

    this.key = options.key;
    this.container = options.container;
    this.prepend = options.prepend;
    this.before = null;
  }

  var _proto = StyleSheet.prototype;

  _proto.hydrate = function hydrate(nodes) {
    nodes.forEach(this._insertTag);
  };

  _proto.insert = function insert(rule) {
    // the max length is how many rules we have per style tag, it's 65000 in speedy mode
    // it's 1 in dev because we insert source maps that map a single rule to a location
    // and you can only have one source map per style tag
    if (this.ctr % (this.isSpeedy ? 65000 : 1) === 0) {
      this._insertTag(createStyleElement(this));
    }

    var tag = this.tags[this.tags.length - 1];

    if (true) {
      var isImportRule = rule.charCodeAt(0) === 64 && rule.charCodeAt(1) === 105;

      if (isImportRule && this._alreadyInsertedOrderInsensitiveRule) {
        // this would only cause problem in speedy mode
        // but we don't want enabling speedy to affect the observable behavior
        // so we report this error at all times
        console.error("You're attempting to insert the following rule:\n" + rule + '\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules.');
      }
      this._alreadyInsertedOrderInsensitiveRule = this._alreadyInsertedOrderInsensitiveRule || !isImportRule;
    }

    if (this.isSpeedy) {
      var sheet = sheetForTag(tag);

      try {
        // this is the ultrafast version, works across browsers
        // the big drawback is that the css won't be editable in devtools
        sheet.insertRule(rule, sheet.cssRules.length);
      } catch (e) {
        if ( true && !/:(-moz-placeholder|-ms-input-placeholder|-moz-read-write|-moz-read-only){/.test(rule)) {
          console.error("There was a problem inserting the following rule: \"" + rule + "\"", e);
        }
      }
    } else {
      tag.appendChild(document.createTextNode(rule));
    }

    this.ctr++;
  };

  _proto.flush = function flush() {
    // $FlowFixMe
    this.tags.forEach(function (tag) {
      return tag.parentNode.removeChild(tag);
    });
    this.tags = [];
    this.ctr = 0;

    if (true) {
      this._alreadyInsertedOrderInsensitiveRule = false;
    }
  };

  return StyleSheet;
}();




/***/ }),

/***/ "../../.yarn/cache/@emotion-unitless-npm-0.7.5-14e1171640-f976e5345b.zip/node_modules/@emotion/unitless/dist/unitless.browser.esm.js":
/*!*******************************************************************************************************************************************!*\
  !*** ../../.yarn/cache/@emotion-unitless-npm-0.7.5-14e1171640-f976e5345b.zip/node_modules/@emotion/unitless/dist/unitless.browser.esm.js ***!
  \*******************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

/* harmony default export */ __webpack_exports__["default"] = (unitlessKeys);


/***/ }),

/***/ "../../.yarn/cache/@emotion-utils-npm-1.0.0-7f9809289c-3ce8048441.zip/node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js":
/*!******************************************************************************************************************************************!*\
  !*** ../../.yarn/cache/@emotion-utils-npm-1.0.0-7f9809289c-3ce8048441.zip/node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js ***!
  \******************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getRegisteredStyles": function() { return /* binding */ getRegisteredStyles; },
/* harmony export */   "insertStyles": function() { return /* binding */ insertStyles; }
/* harmony export */ });
var isBrowser = "object" !== 'undefined';
function getRegisteredStyles(registered, registeredStyles, classNames) {
  var rawClassName = '';
  classNames.split(' ').forEach(function (className) {
    if (registered[className] !== undefined) {
      registeredStyles.push(registered[className] + ";");
    } else {
      rawClassName += className + " ";
    }
  });
  return rawClassName;
}
var insertStyles = function insertStyles(cache, serialized, isStringTag) {
  var className = cache.key + "-" + serialized.name;

  if ( // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (isStringTag === false || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  isBrowser === false ) && cache.registered[className] === undefined) {
    cache.registered[className] = serialized.styles;
  }

  if (cache.inserted[serialized.name] === undefined) {
    var current = serialized;

    do {
      var maybeStyles = cache.insert(serialized === current ? "." + className : '', current, cache.sheet, true);

      current = current.next;
    } while (current !== undefined);
  }
};




/***/ }),

/***/ "../../.yarn/cache/@emotion-weak-memoize-npm-0.2.5-9f2e49e7c8-27d402b0c6.zip/node_modules/@emotion/weak-memoize/dist/weak-memoize.browser.esm.js":
/*!*******************************************************************************************************************************************************!*\
  !*** ../../.yarn/cache/@emotion-weak-memoize-npm-0.2.5-9f2e49e7c8-27d402b0c6.zip/node_modules/@emotion/weak-memoize/dist/weak-memoize.browser.esm.js ***!
  \*******************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var weakMemoize = function weakMemoize(func) {
  // $FlowFixMe flow doesn't include all non-primitive types as allowed for weakmaps
  var cache = new WeakMap();
  return function (arg) {
    if (cache.has(arg)) {
      // $FlowFixMe
      return cache.get(arg);
    }

    var ret = func(arg);
    cache.set(arg, ret);
    return ret;
  };
};

/* harmony default export */ __webpack_exports__["default"] = (weakMemoize);


/***/ }),

/***/ "../../.yarn/cache/hoist-non-react-statics-npm-3.3.2-e7b709e6c1-b153827042.zip/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
/*!**************************************************************************************************************************************************************!*\
  !*** ../../.yarn/cache/hoist-non-react-statics-npm-3.3.2-e7b709e6c1-b153827042.zip/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js ***!
  \**************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var reactIs = __webpack_require__(/*! react-is */ "../../.yarn/cache/react-is-npm-16.13.1-a9b9382b4f-f7a19ac349.zip/node_modules/react-is/index.js");

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

function getStatics(component) {
  // React v16.11 and below
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  } // React v16.12 and above


  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);

      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }

    var keys = getOwnPropertyNames(sourceComponent);

    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }

    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }

  return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ "../../.yarn/cache/react-is-npm-16.13.1-a9b9382b4f-f7a19ac349.zip/node_modules/react-is/cjs/react-is.development.js":
/*!**************************************************************************************************************************!*\
  !*** ../../.yarn/cache/react-is-npm-16.13.1-a9b9382b4f-f7a19ac349.zip/node_modules/react-is/cjs/react-is.development.js ***!
  \**************************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "../../.yarn/cache/react-is-npm-16.13.1-a9b9382b4f-f7a19ac349.zip/node_modules/react-is/index.js":
/*!*******************************************************************************************************!*\
  !*** ../../.yarn/cache/react-is-npm-16.13.1-a9b9382b4f-f7a19ac349.zip/node_modules/react-is/index.js ***!
  \*******************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "../../.yarn/cache/react-is-npm-16.13.1-a9b9382b4f-f7a19ac349.zip/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "../../.yarn/cache/react-npm-18.0.0-alpha-e3b76a85c-20210802-f2b5a5619c-652df3e330.zip/node_modules/react/cjs/react-jsx-dev-runtime.development.js":
/*!*********************************************************************************************************************************************************!*\
  !*** ../../.yarn/cache/react-npm-18.0.0-alpha-e3b76a85c-20210802-f2b5a5619c-652df3e330.zip/node_modules/react/cjs/react-jsx-dev-runtime.development.js ***!
  \*********************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/** @license React vundefined
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

var React = __webpack_require__(/*! react */ "../../.yarn/cache/react-npm-18.0.0-alpha-e3b76a85c-20210802-f2b5a5619c-652df3e330.zip/node_modules/react/index.js");
var _assign = __webpack_require__(/*! object-assign */ "../../.yarn/__virtual__/next-virtual-f84b51c559/0/cache/next-npm-11.0.1-c40bc7f380-c6b4747f1a.zip/node_modules/next/dist/build/polyfills/object-assign.js");

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_ELEMENT_TYPE = 0xeac7;
var REACT_PORTAL_TYPE = 0xeaca;
exports.Fragment = 0xeacb;
var REACT_STRICT_MODE_TYPE = 0xeacc;
var REACT_PROFILER_TYPE = 0xead2;
var REACT_PROVIDER_TYPE = 0xeacd;
var REACT_CONTEXT_TYPE = 0xeace;
var REACT_FORWARD_REF_TYPE = 0xead0;
var REACT_SUSPENSE_TYPE = 0xead1;
var REACT_SUSPENSE_LIST_TYPE = 0xead8;
var REACT_MEMO_TYPE = 0xead3;
var REACT_LAZY_TYPE = 0xead4;
var REACT_SCOPE_TYPE = 0xead7;
var REACT_OPAQUE_ID_TYPE = 0xeae0;
var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
var REACT_OFFSCREEN_TYPE = 0xeae2;
var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;
var REACT_CACHE_TYPE = 0xeae4;

if (typeof Symbol === 'function' && Symbol.for) {
  var symbolFor = Symbol.for;
  REACT_ELEMENT_TYPE = symbolFor('react.element');
  REACT_PORTAL_TYPE = symbolFor('react.portal');
  exports.Fragment = symbolFor('react.fragment');
  REACT_STRICT_MODE_TYPE = symbolFor('react.strict_mode');
  REACT_PROFILER_TYPE = symbolFor('react.profiler');
  REACT_PROVIDER_TYPE = symbolFor('react.provider');
  REACT_CONTEXT_TYPE = symbolFor('react.context');
  REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
  REACT_SUSPENSE_TYPE = symbolFor('react.suspense');
  REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
  REACT_MEMO_TYPE = symbolFor('react.memo');
  REACT_LAZY_TYPE = symbolFor('react.lazy');
  REACT_SCOPE_TYPE = symbolFor('react.scope');
  REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
  REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
  REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
  REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
  REACT_CACHE_TYPE = symbolFor('react.cache');
}

var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}

var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

function error(format) {
  {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    printWarning('error', format, args);
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();

    if (stack !== '') {
      format += '%s';
      args = args.concat([stack]);
    }

    var argsWithFormat = args.map(function (item) {
      return '' + item;
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);
  }
}

// Filter certain DOM attributes (e.g. src, href) if their values are empty strings.
var enableCache = false; // Only used in www builds.

var enableScopeAPI = false; // Experimental Create Event Handle API.

var REACT_MODULE_REFERENCE = 0;

if (typeof Symbol === 'function') {
  REACT_MODULE_REFERENCE = Symbol.for('react.module.reference');
}

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === exports.Fragment || type === REACT_PROFILER_TYPE || type === REACT_DEBUG_TRACING_MODE_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || type === REACT_OFFSCREEN_TYPE || enableScopeAPI  || enableCache ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
    // types supported by any Flight configuration anywhere since
    // we don't know which Flight build this will end up being used
    // with.
    type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== undefined) {
      return true;
    }
  }

  return false;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var displayName = outerType.displayName;

  if (displayName) {
    return displayName;
  }

  var functionName = innerType.displayName || innerType.name || '';
  return functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName;
} // Keep in sync with react-reconciler/getComponentNameFromFiber


function getContextName(type) {
  return type.displayName || 'Context';
} // Note that the reconciler package should generally prefer to use getComponentNameFromFiber() instead.


function getComponentNameFromType(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentNameFromType(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case exports.Fragment:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case REACT_PROFILER_TYPE:
      return 'Profiler';

    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';

    case REACT_SUSPENSE_TYPE:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';

    case REACT_CACHE_TYPE:
      return 'Cache';
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        var context = type;
        return getContextName(context) + '.Consumer';

      case REACT_PROVIDER_TYPE:
        var provider = type;
        return getContextName(provider._context) + '.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        var outerName = type.displayName || null;

        if (outerName !== null) {
          return outerName;
        }

        return getComponentNameFromType(type.type) || 'Memo';

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            return getComponentNameFromType(init(payload));
          } catch (x) {
            return null;
          }
        }
    }
  }

  return null;
}

// Helpers to patch console.logs to avoid logging during side-effect free
// replaying on render function. This currently only patches the object
// lazily which won't cover if the log function was extracted eagerly.
// We could also eagerly patch the method.
var disabledDepth = 0;
var prevLog;
var prevInfo;
var prevWarn;
var prevError;
var prevGroup;
var prevGroupCollapsed;
var prevGroupEnd;

function disabledLog() {}

disabledLog.__reactDisabledLog = true;
function disableLogs() {
  {
    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      prevLog = console.log;
      prevInfo = console.info;
      prevWarn = console.warn;
      prevError = console.error;
      prevGroup = console.group;
      prevGroupCollapsed = console.groupCollapsed;
      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

      var props = {
        configurable: true,
        enumerable: true,
        value: disabledLog,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        info: props,
        log: props,
        warn: props,
        error: props,
        group: props,
        groupCollapsed: props,
        groupEnd: props
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    disabledDepth++;
  }
}
function reenableLogs() {
  {
    disabledDepth--;

    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      var props = {
        configurable: true,
        enumerable: true,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        log: _assign({}, props, {
          value: prevLog
        }),
        info: _assign({}, props, {
          value: prevInfo
        }),
        warn: _assign({}, props, {
          value: prevWarn
        }),
        error: _assign({}, props, {
          value: prevError
        }),
        group: _assign({}, props, {
          value: prevGroup
        }),
        groupCollapsed: _assign({}, props, {
          value: prevGroupCollapsed
        }),
        groupEnd: _assign({}, props, {
          value: prevGroupEnd
        })
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    if (disabledDepth < 0) {
      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
    }
  }
}

var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
var prefix;
function describeBuiltInComponentFrame(name, source, ownerFn) {
  {
    if (prefix === undefined) {
      // Extract the VM specific prefix used by each line.
      try {
        throw Error();
      } catch (x) {
        var match = x.stack.trim().match(/\n( *(at )?)/);
        prefix = match && match[1] || '';
      }
    } // We use the prefix to ensure our stacks line up with native stack frames.


    return '\n' + prefix + name;
  }
}
var reentry = false;
var componentFrameCache;

{
  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
  componentFrameCache = new PossiblyWeakMap();
}

function describeNativeComponentFrame(fn, construct) {
  // If something asked for a stack inside a fake render, it should get ignored.
  if ( !fn || reentry) {
    return '';
  }

  {
    var frame = componentFrameCache.get(fn);

    if (frame !== undefined) {
      return frame;
    }
  }

  var control;
  reentry = true;
  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

  Error.prepareStackTrace = undefined;
  var previousDispatcher;

  {
    previousDispatcher = ReactCurrentDispatcher.current; // Set the dispatcher in DEV because this might be call in the render function
    // for warnings.

    ReactCurrentDispatcher.current = null;
    disableLogs();
  }

  try {
    // This should throw.
    if (construct) {
      // Something should be setting the props in the constructor.
      var Fake = function () {
        throw Error();
      }; // $FlowFixMe


      Object.defineProperty(Fake.prototype, 'props', {
        set: function () {
          // We use a throwing setter instead of frozen or non-writable props
          // because that won't throw in a non-strict mode function.
          throw Error();
        }
      });

      if (typeof Reflect === 'object' && Reflect.construct) {
        // We construct a different control for this case to include any extra
        // frames added by the construct call.
        try {
          Reflect.construct(Fake, []);
        } catch (x) {
          control = x;
        }

        Reflect.construct(fn, [], Fake);
      } else {
        try {
          Fake.call();
        } catch (x) {
          control = x;
        }

        fn.call(Fake.prototype);
      }
    } else {
      try {
        throw Error();
      } catch (x) {
        control = x;
      }

      fn();
    }
  } catch (sample) {
    // This is inlined manually because closure doesn't do it for us.
    if (sample && control && typeof sample.stack === 'string') {
      // This extracts the first frame from the sample that isn't also in the control.
      // Skipping one frame that we assume is the frame that calls the two.
      var sampleLines = sample.stack.split('\n');
      var controlLines = control.stack.split('\n');
      var s = sampleLines.length - 1;
      var c = controlLines.length - 1;

      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
        // We expect at least one stack frame to be shared.
        // Typically this will be the root most one. However, stack frames may be
        // cut off due to maximum stack limits. In this case, one maybe cut off
        // earlier than the other. We assume that the sample is longer or the same
        // and there for cut off earlier. So we should find the root most frame in
        // the sample somewhere in the control.
        c--;
      }

      for (; s >= 1 && c >= 0; s--, c--) {
        // Next we find the first one that isn't the same which should be the
        // frame that called our sample function and the control.
        if (sampleLines[s] !== controlLines[c]) {
          // In V8, the first line is describing the message but other VMs don't.
          // If we're about to return the first line, and the control is also on the same
          // line, that's a pretty good indicator that our sample threw at same line as
          // the control. I.e. before we entered the sample frame. So we ignore this result.
          // This can happen if you passed a class to function component, or non-function.
          if (s !== 1 || c !== 1) {
            do {
              s--;
              c--; // We may still have similar intermediate frames from the construct call.
              // The next one that isn't the same should be our match though.

              if (c < 0 || sampleLines[s] !== controlLines[c]) {
                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at ');

                {
                  if (typeof fn === 'function') {
                    componentFrameCache.set(fn, _frame);
                  }
                } // Return the line we found.


                return _frame;
              }
            } while (s >= 1 && c >= 0);
          }

          break;
        }
      }
    }
  } finally {
    reentry = false;

    {
      ReactCurrentDispatcher.current = previousDispatcher;
      reenableLogs();
    }

    Error.prepareStackTrace = previousPrepareStackTrace;
  } // Fallback to just using the name if we couldn't make it throw.


  var name = fn ? fn.displayName || fn.name : '';
  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

  {
    if (typeof fn === 'function') {
      componentFrameCache.set(fn, syntheticFrame);
    }
  }

  return syntheticFrame;
}
function describeFunctionComponentFrame(fn, source, ownerFn) {
  {
    return describeNativeComponentFrame(fn, false);
  }
}

function shouldConstruct(Component) {
  var prototype = Component.prototype;
  return !!(prototype && prototype.isReactComponent);
}

function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

  if (type == null) {
    return '';
  }

  if (typeof type === 'function') {
    {
      return describeNativeComponentFrame(type, shouldConstruct(type));
    }
  }

  if (typeof type === 'string') {
    return describeBuiltInComponentFrame(type);
  }

  switch (type) {
    case REACT_SUSPENSE_TYPE:
      return describeBuiltInComponentFrame('Suspense');

    case REACT_SUSPENSE_LIST_TYPE:
      return describeBuiltInComponentFrame('SuspenseList');
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_FORWARD_REF_TYPE:
        return describeFunctionComponentFrame(type.render);

      case REACT_MEMO_TYPE:
        // Memo may contain any component type so we recursively resolve it.
        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            // Lazy may contain any component type so we recursively resolve it.
            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
          } catch (x) {}
        }
    }
  }

  return '';
}

var hasOwnProperty = Object.prototype.hasOwnProperty;

var loggedTypeFailures = {};
var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame.setExtraStackFrame(null);
    }
  }
}

function checkPropTypes(typeSpecs, values, location, componentName, element) {
  {
    // $FlowFixMe This is okay but Flow doesn't know it.
    var has = Function.call.bind(hasOwnProperty);

    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
        } catch (ex) {
          error$1 = ex;
        }

        if (error$1 && !(error$1 instanceof Error)) {
          setCurrentlyValidatingElement(element);

          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

          setCurrentlyValidatingElement(null);
        }

        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error$1.message] = true;
          setCurrentlyValidatingElement(element);

          error('Failed %s type: %s', location, error$1.message);

          setCurrentlyValidatingElement(null);
        }
      }
    }
  }
}

var isArrayImpl = Array.isArray; // eslint-disable-next-line no-redeclare

function isArray(a) {
  return isArrayImpl(a);
}

var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
var specialPropKeyWarningShown;
var specialPropRefWarningShown;
var didWarnAboutStringRefs;

{
  didWarnAboutStringRefs = {};
}

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.key !== undefined;
}

function warnIfStringRefCannotBeAutoConverted(config, self) {
  {
    if (typeof config.ref === 'string' && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
      var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);

      if (!didWarnAboutStringRefs[componentName]) {
        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', getComponentNameFromType(ReactCurrentOwner.current.type), config.ref);

        didWarnAboutStringRefs[componentName] = true;
      }
    }
  }
}

function defineKeyPropWarningGetter(props, displayName) {
  {
    var warnAboutAccessingKey = function () {
      if (!specialPropKeyWarningShown) {
        specialPropKeyWarningShown = true;

        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    };

    warnAboutAccessingKey.isReactWarning = true;
    Object.defineProperty(props, 'key', {
      get: warnAboutAccessingKey,
      configurable: true
    });
  }
}

function defineRefPropWarningGetter(props, displayName) {
  {
    var warnAboutAccessingRef = function () {
      if (!specialPropRefWarningShown) {
        specialPropRefWarningShown = true;

        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    };

    warnAboutAccessingRef.isReactWarning = true;
    Object.defineProperty(props, 'ref', {
      get: warnAboutAccessingRef,
      configurable: true
    });
  }
}
/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */


var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.

    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    }); // self and source are DEV only properties.

    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    }); // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.

    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });

    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};
/**
 * https://github.com/reactjs/rfcs/pull/107
 * @param {*} type
 * @param {object} props
 * @param {string} key
 */

function jsxDEV(type, config, maybeKey, source, self) {
  {
    var propName; // Reserved names are extracted

    var props = {};
    var key = null;
    var ref = null; // Currently, key can be spread in as a prop. This causes a potential
    // issue if key is also explicitly declared (ie. <div {...props} key="Hi" />
    // or <div key="Hi" {...props} /> ). We want to deprecate key spread,
    // but as an intermediary step, we will use jsxDEV for everything except
    // <div {...props} key="Hi" />, because we aren't currently able to tell if
    // key is explicitly declared to be undefined or not.

    if (maybeKey !== undefined) {
      key = '' + maybeKey;
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    if (hasValidRef(config)) {
      ref = config.ref;
      warnIfStringRefCannotBeAutoConverted(config, self);
    } // Remaining properties are added to a new props object


    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    } // Resolve default props


    if (type && type.defaultProps) {
      var defaultProps = type.defaultProps;

      for (propName in defaultProps) {
        if (props[propName] === undefined) {
          props[propName] = defaultProps[propName];
        }
      }
    }

    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }

      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }

    return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
  }
}

var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement$1(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
    }
  }
}

var propTypesMisspellWarningShown;

{
  propTypesMisspellWarningShown = false;
}
/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */


function isValidElement(object) {
  {
    return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
  }
}

function getDeclarationErrorAddendum() {
  {
    if (ReactCurrentOwner$1.current) {
      var name = getComponentNameFromType(ReactCurrentOwner$1.current.type);

      if (name) {
        return '\n\nCheck the render method of `' + name + '`.';
      }
    }

    return '';
  }
}

function getSourceInfoErrorAddendum(source) {
  {
    if (source !== undefined) {
      var fileName = source.fileName.replace(/^.*[\\\/]/, '');
      var lineNumber = source.lineNumber;
      return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
    }

    return '';
  }
}
/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */


var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  {
    var info = getDeclarationErrorAddendum();

    if (!info) {
      var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

      if (parentName) {
        info = "\n\nCheck the top-level render call using <" + parentName + ">.";
      }
    }

    return info;
  }
}
/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */


function validateExplicitKey(element, parentType) {
  {
    if (!element._store || element._store.validated || element.key != null) {
      return;
    }

    element._store.validated = true;
    var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

    if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
      return;
    }

    ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
    // property, it may be the creator of the child that's responsible for
    // assigning it a key.

    var childOwner = '';

    if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
      // Give the component that originally created this child.
      childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
    }

    setCurrentlyValidatingElement$1(element);

    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

    setCurrentlyValidatingElement$1(null);
  }
}
/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */


function validateChildKeys(node, parentType) {
  {
    if (typeof node !== 'object') {
      return;
    }

    if (isArray(node)) {
      for (var i = 0; i < node.length; i++) {
        var child = node[i];

        if (isValidElement(child)) {
          validateExplicitKey(child, parentType);
        }
      }
    } else if (isValidElement(node)) {
      // This element was passed in a valid location.
      if (node._store) {
        node._store.validated = true;
      }
    } else if (node) {
      var iteratorFn = getIteratorFn(node);

      if (typeof iteratorFn === 'function') {
        // Entry iterators used to provide implicit keys,
        // but now we print a separate warning for them later.
        if (iteratorFn !== node.entries) {
          var iterator = iteratorFn.call(node);
          var step;

          while (!(step = iterator.next()).done) {
            if (isValidElement(step.value)) {
              validateExplicitKey(step.value, parentType);
            }
          }
        }
      }
    }
  }
}
/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */


function validatePropTypes(element) {
  {
    var type = element.type;

    if (type === null || type === undefined || typeof type === 'string') {
      return;
    }

    var propTypes;

    if (typeof type === 'function') {
      propTypes = type.propTypes;
    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
    // Inner props are checked in the reconciler.
    type.$$typeof === REACT_MEMO_TYPE)) {
      propTypes = type.propTypes;
    } else {
      return;
    }

    if (propTypes) {
      // Intentionally inside to avoid triggering lazy initializers:
      var name = getComponentNameFromType(type);
      checkPropTypes(propTypes, element.props, 'prop', name, element);
    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

      var _name = getComponentNameFromType(type);

      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
    }

    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
    }
  }
}
/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */


function validateFragmentProps(fragment) {
  {
    var keys = Object.keys(fragment.props);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (key !== 'children' && key !== 'key') {
        setCurrentlyValidatingElement$1(fragment);

        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

        setCurrentlyValidatingElement$1(null);
        break;
      }
    }

    if (fragment.ref !== null) {
      setCurrentlyValidatingElement$1(fragment);

      error('Invalid attribute `ref` supplied to `React.Fragment`.');

      setCurrentlyValidatingElement$1(null);
    }
  }
}

function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
  {
    var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
    // succeed and there will likely be errors in render.

    if (!validType) {
      var info = '';

      if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
        info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
      }

      var sourceInfo = getSourceInfoErrorAddendum(source);

      if (sourceInfo) {
        info += sourceInfo;
      } else {
        info += getDeclarationErrorAddendum();
      }

      var typeString;

      if (type === null) {
        typeString = 'null';
      } else if (isArray(type)) {
        typeString = 'array';
      } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
        typeString = "<" + (getComponentNameFromType(type.type) || 'Unknown') + " />";
        info = ' Did you accidentally export a JSX literal instead of a component?';
      } else {
        typeString = typeof type;
      }

      error('React.jsx: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
    }

    var element = jsxDEV(type, props, key, source, self); // The result can be nullish if a mock or a custom function is used.
    // TODO: Drop this when these are no longer allowed as the type argument.

    if (element == null) {
      return element;
    } // Skip key warning if the type isn't valid since our key validation logic
    // doesn't expect a non-string/function type and can throw confusing errors.
    // We don't want exception behavior to differ between dev and prod.
    // (Rendering will throw with a helpful message and as soon as the type is
    // fixed, the key warnings will appear.)


    if (validType) {
      var children = props.children;

      if (children !== undefined) {
        if (isStaticChildren) {
          if (isArray(children)) {
            for (var i = 0; i < children.length; i++) {
              validateChildKeys(children[i], type);
            }

            if (Object.freeze) {
              Object.freeze(children);
            }
          } else {
            error('React.jsx: Static children should always be an array. ' + 'You are likely explicitly calling React.jsxs or React.jsxDEV. ' + 'Use the Babel transform instead.');
          }
        } else {
          validateChildKeys(children, type);
        }
      }
    }

    if (type === exports.Fragment) {
      validateFragmentProps(element);
    } else {
      validatePropTypes(element);
    }

    return element;
  }
} // These two functions exist to still get child warnings in dev

var jsxDEV$1 =  jsxWithValidation ;

exports.jsxDEV = jsxDEV$1;
  })();
}


/***/ }),

/***/ "../../.yarn/cache/react-npm-18.0.0-alpha-e3b76a85c-20210802-f2b5a5619c-652df3e330.zip/node_modules/react/jsx-dev-runtime.js":
/*!***********************************************************************************************************************************!*\
  !*** ../../.yarn/cache/react-npm-18.0.0-alpha-e3b76a85c-20210802-f2b5a5619c-652df3e330.zip/node_modules/react/jsx-dev-runtime.js ***!
  \***********************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-jsx-dev-runtime.development.js */ "../../.yarn/cache/react-npm-18.0.0-alpha-e3b76a85c-20210802-f2b5a5619c-652df3e330.zip/node_modules/react/cjs/react-jsx-dev-runtime.development.js");
}


/***/ }),

/***/ "../../.yarn/cache/stylis-npm-4.0.10-4c0fa47ff8-0fecaf5c23.zip/node_modules/stylis/index.js":
/*!**************************************************************************************************!*\
  !*** ../../.yarn/cache/stylis-npm-4.0.10-4c0fa47ff8-0fecaf5c23.zip/node_modules/stylis/index.js ***!
  \**************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_Enum_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/Enum.js */ "../../.yarn/cache/stylis-npm-4.0.10-4c0fa47ff8-0fecaf5c23.zip/node_modules/stylis/src/Enum.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _src_Enum_js__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _src_Enum_js__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _src_Utility_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/Utility.js */ "../../.yarn/cache/stylis-npm-4.0.10-4c0fa47ff8-0fecaf5c23.zip/node_modules/stylis/src/Utility.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _src_Utility_js__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _src_Utility_js__WEBPACK_IMPORTED_MODULE_1__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _src_Parser_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/Parser.js */ "../../.yarn/cache/stylis-npm-4.0.10-4c0fa47ff8-0fecaf5c23.zip/node_modules/stylis/src/Parser.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _src_Parser_js__WEBPACK_IMPORTED_MODULE_2__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _src_Parser_js__WEBPACK_IMPORTED_MODULE_2__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _src_Prefixer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/Prefixer.js */ "../../.yarn/cache/stylis-npm-4.0.10-4c0fa47ff8-0fecaf5c23.zip/node_modules/stylis/src/Prefixer.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _src_Prefixer_js__WEBPACK_IMPORTED_MODULE_3__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _src_Prefixer_js__WEBPACK_IMPORTED_MODULE_3__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _src_Tokenizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/Tokenizer.js */ "../../.yarn/cache/stylis-npm-4.0.10-4c0fa47ff8-0fecaf5c23.zip/node_modules/stylis/src/Tokenizer.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _src_Tokenizer_js__WEBPACK_IMPORTED_MODULE_4__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _src_Tokenizer_js__WEBPACK_IMPORTED_MODULE_4__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _src_Serializer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/Serializer.js */ "../../.yarn/cache/stylis-npm-4.0.10-4c0fa47ff8-0fecaf5c23.zip/node_modules/stylis/src/Serializer.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _src_Serializer_js__WEBPACK_IMPORTED_MODULE_5__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _src_Serializer_js__WEBPACK_IMPORTED_MODULE_5__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _src_Middleware_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/Middleware.js */ "../../.yarn/cache/stylis-npm-4.0.10-4c0fa47ff8-0fecaf5c23.zip/node_modules/stylis/src/Middleware.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _src_Middleware_js__WEBPACK_IMPORTED_MODULE_6__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _src_Middleware_js__WEBPACK_IMPORTED_MODULE_6__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);









/***/ }),

/***/ "../../.yarn/cache/stylis-npm-4.0.10-4c0fa47ff8-0fecaf5c23.zip/node_modules/stylis/src/Enum.js":
/*!*****************************************************************************************************!*\
  !*** ../../.yarn/cache/stylis-npm-4.0.10-4c0fa47ff8-0fecaf5c23.zip/node_modules/stylis/src/Enum.js ***!
  \*****************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MS": function() { return /* binding */ MS; },
/* harmony export */   "MOZ": function() { return /* binding */ MOZ; },
/* harmony export */   "WEBKIT": function() { return /* binding */ WEBKIT; },
/* harmony export */   "COMMENT": function() { return /* binding */ COMMENT; },
/* harmony export */   "RULESET": function() { return /* binding */ RULESET; },
/* harmony export */   "DECLARATION": function() { return /* binding */ DECLARATION; },
/* harmony export */   "PAGE": function() { return /* binding */ PAGE; },
/* harmony export */   "MEDIA": function() { return /* binding */ MEDIA; },
/* harmony export */   "IMPORT": function() { return /* binding */ IMPORT; },
/* harmony export */   "CHARSET": function() { return /* binding */ CHARSET; },
/* harmony export */   "VIEWPORT": function() { return /* binding */ VIEWPORT; },
/* harmony export */   "SUPPORTS": function() { return /* binding */ SUPPORTS; },
/* harmony export */   "DOCUMENT": function() { return /* binding */ DOCUMENT; },
/* harmony export */   "NAMESPACE": function() { return /* binding */ NAMESPACE; },
/* harmony export */   "KEYFRAMES": function() { return /* binding */ KEYFRAMES; },
/* harmony export */   "FONT_FACE": function() { return /* binding */ FONT_FACE; },
/* harmony export */   "COUNTER_STYLE": function() { return /* binding */ COUNTER_STYLE; },
/* harmony export */   "FONT_FEATURE_VALUES": function() { return /* binding */ FONT_FEATURE_VALUES; }
/* harmony export */ });
var MS = '-ms-'
var MOZ = '-moz-'
var WEBKIT = '-webkit-'

var COMMENT = 'comm'
var RULESET = 'rule'
var DECLARATION = 'decl'

var PAGE = '@page'
var MEDIA = '@media'
var IMPORT = '@import'
var CHARSET = '@charset'
var VIEWPORT = '@viewport'
var SUPPORTS = '@supports'
var DOCUMENT = '@document'
var NAMESPACE = '@namespace'
var KEYFRAMES = '@keyframes'
var FONT_FACE = '@font-face'
var COUNTER_STYLE = '@counter-style'
var FONT_FEATURE_VALUES = '@font-feature-values'


/***/ }),

/***/ "../../.yarn/cache/stylis-npm-4.0.10-4c0fa47ff8-0fecaf5c23.zip/node_modules/stylis/src/Middleware.js":
/*!***********************************************************************************************************!*\
  !*** ../../.yarn/cache/stylis-npm-4.0.10-4c0fa47ff8-0fecaf5c23.zip/node_modules/stylis/src/Middleware.js ***!
  \***********************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "middleware": function() { return /* binding */ middleware; },
/* harmony export */   "rulesheet": function() { return /* binding */ rulesheet; },
/* harmony export */   "prefixer": function() { return /* binding */ prefixer; },
/* harmony export */   "namespace": function() { return /* binding */ namespace; }
/* harmony export */ });
/* harmony import */ var _Enum_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Enum.js */ "../../.yarn/cache/stylis-npm-4.0.10-4c0fa47ff8-0fecaf5c23.zip/node_modules/stylis/src/Enum.js");
/* harmony import */ var _Utility_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utility.js */ "../../.yarn/cache/stylis-npm-4.0.10-4c0fa47ff8-0fecaf5c23.zip/node_modules/stylis/src/Utility.js");
/* harmony import */ var _Tokenizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Tokenizer.js */ "../../.yarn/cache/stylis-npm-4.0.10-4c0fa47ff8-0fecaf5c23.zip/node_modules/stylis/src/Tokenizer.js");
/* harmony import */ var _Serializer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Serializer.js */ "../../.yarn/cache/stylis-npm-4.0.10-4c0fa47ff8-0fecaf5c23.zip/node_modules/stylis/src/Serializer.js");
/* harmony import */ var _Prefixer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Prefixer.js */ "../../.yarn/cache/stylis-npm-4.0.10-4c0fa47ff8-0fecaf5c23.zip/node_modules/stylis/src/Prefixer.js");






/**
 * @param {function[]} collection
 * @return {function}
 */
function middleware (collection) {
	var length = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.sizeof)(collection)

	return function (element, index, children, callback) {
		var output = ''

		for (var i = 0; i < length; i++)
			output += collection[i](element, index, children, callback) || ''

		return output
	}
}

/**
 * @param {function} callback
 * @return {function}
 */
function rulesheet (callback) {
	return function (element) {
		if (!element.root)
			if (element = element.return)
				callback(element)
	}
}

/**
 * @param {object} element
 * @param {number} index
 * @param {object[]} children
 * @param {function} callback
 */
function prefixer (element, index, children, callback) {
	if (!element.return)
		switch (element.type) {
			case _Enum_js__WEBPACK_IMPORTED_MODULE_1__.DECLARATION: element.return = (0,_Prefixer_js__WEBPACK_IMPORTED_MODULE_2__.prefix)(element.value, element.length)
				break
			case _Enum_js__WEBPACK_IMPORTED_MODULE_1__.KEYFRAMES:
				return (0,_Serializer_js__WEBPACK_IMPORTED_MODULE_3__.serialize)([(0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_4__.copy)((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(element.value, '@', '@' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT), element, '')], callback)
			case _Enum_js__WEBPACK_IMPORTED_MODULE_1__.RULESET:
				if (element.length)
					return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.combine)(element.props, function (value) {
						switch ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.match)(value, /(::plac\w+|:read-\w+)/)) {
							// :read-(only|write)
							case ':read-only': case ':read-write':
								return (0,_Serializer_js__WEBPACK_IMPORTED_MODULE_3__.serialize)([(0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_4__.copy)((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /:(read-\w+)/, ':' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MOZ + '$1'), element, '')], callback)
							// :placeholder
							case '::placeholder':
								return (0,_Serializer_js__WEBPACK_IMPORTED_MODULE_3__.serialize)([
									(0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_4__.copy)((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /:(plac\w+)/, ':' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + 'input-$1'), element, ''),
									(0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_4__.copy)((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /:(plac\w+)/, ':' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MOZ + '$1'), element, ''),
									(0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_4__.copy)((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /:(plac\w+)/, _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + 'input-$1'), element, '')
								], callback)
						}

						return ''
					})
		}
}

/**
 * @param {object} element
 * @param {number} index
 * @param {object[]} children
 */
function namespace (element) {
	switch (element.type) {
		case _Enum_js__WEBPACK_IMPORTED_MODULE_1__.RULESET:
			element.props = element.props.map(function (value) {
				return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.combine)((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_4__.tokenize)(value), function (value, index, children) {
					switch ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(value, 0)) {
						// \f
						case 12:
							return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.substr)(value, 1, (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.strlen)(value))
						// \0 ( + > ~
						case 0: case 40: case 43: case 62: case 126:
							return value
						// :
						case 58:
							if (children[++index] === 'global')
								children[index] = '', children[++index] = '\f' + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.substr)(children[index], index = 1, -1)
						// \s
						case 32:
							return index === 1 ? '' : value
						default:
							switch (index) {
								case 0: element = value
									return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.sizeof)(children) > 1 ? '' : value
								case index = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.sizeof)(children) - 1: case 2:
									return index === 2 ? value + element + element : value + element
								default:
									return value
							}
					}
				})
			})
	}
}


/***/ }),

/***/ "../../.yarn/cache/stylis-npm-4.0.10-4c0fa47ff8-0fecaf5c23.zip/node_modules/stylis/src/Parser.js":
/*!*******************************************************************************************************!*\
  !*** ../../.yarn/cache/stylis-npm-4.0.10-4c0fa47ff8-0fecaf5c23.zip/node_modules/stylis/src/Parser.js ***!
  \*******************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "compile": function() { return /* binding */ compile; },
/* harmony export */   "parse": function() { return /* binding */ parse; },
/* harmony export */   "ruleset": function() { return /* binding */ ruleset; },
/* harmony export */   "comment": function() { return /* binding */ comment; },
/* harmony export */   "declaration": function() { return /* binding */ declaration; }
/* harmony export */ });
/* harmony import */ var _Enum_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Enum.js */ "../../.yarn/cache/stylis-npm-4.0.10-4c0fa47ff8-0fecaf5c23.zip/node_modules/stylis/src/Enum.js");
/* harmony import */ var _Utility_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Utility.js */ "../../.yarn/cache/stylis-npm-4.0.10-4c0fa47ff8-0fecaf5c23.zip/node_modules/stylis/src/Utility.js");
/* harmony import */ var _Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tokenizer.js */ "../../.yarn/cache/stylis-npm-4.0.10-4c0fa47ff8-0fecaf5c23.zip/node_modules/stylis/src/Tokenizer.js");




/**
 * @param {string} value
 * @return {object[]}
 */
function compile (value) {
	return (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.dealloc)(parse('', null, null, null, [''], value = (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.alloc)(value), 0, [0], value))
}

/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {string[]} rule
 * @param {string[]} rules
 * @param {string[]} rulesets
 * @param {number[]} pseudo
 * @param {number[]} points
 * @param {string[]} declarations
 * @return {object}
 */
function parse (value, root, parent, rule, rules, rulesets, pseudo, points, declarations) {
	var index = 0
	var offset = 0
	var length = pseudo
	var atrule = 0
	var property = 0
	var previous = 0
	var variable = 1
	var scanning = 1
	var ampersand = 1
	var character = 0
	var type = ''
	var props = rules
	var children = rulesets
	var reference = rule
	var characters = type

	while (scanning)
		switch (previous = character, character = (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.next)()) {
			// " ' [ (
			case 34: case 39: case 91: case 40:
				characters += (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.delimit)(character)
				break
			// \t \n \r \s
			case 9: case 10: case 13: case 32:
				characters += (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.whitespace)(previous)
				break
			// \
			case 92:
				characters += (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.escaping)((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.caret)() - 1, 7)
				continue
			// /
			case 47:
				switch ((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.peek)()) {
					case 42: case 47:
						;(0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.append)(comment((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.commenter)((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.next)(), (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.caret)()), root, parent), declarations)
						break
					default:
						characters += '/'
				}
				break
			// {
			case 123 * variable:
				points[index++] = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.strlen)(characters) * ampersand
			// } ; \0
			case 125 * variable: case 59: case 0:
				switch (character) {
					// \0 }
					case 0: case 125: scanning = 0
					// ;
					case 59 + offset:
						if (property > 0 && ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.strlen)(characters) - length))
							(0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.append)(property > 32 ? declaration(characters + ';', rule, parent, length - 1) : declaration((0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.replace)(characters, ' ', '') + ';', rule, parent, length - 2), declarations)
						break
					// @ ;
					case 59: characters += ';'
					// { rule/at-rule
					default:
						;(0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.append)(reference = ruleset(characters, root, parent, index, offset, rules, points, type, props = [], children = [], length), rulesets)

						if (character === 123)
							if (offset === 0)
								parse(characters, root, reference, reference, props, rulesets, length, points, children)
							else
								switch (atrule) {
									// d m s
									case 100: case 109: case 115:
										parse(value, reference, reference, rule && (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.append)(ruleset(value, reference, reference, 0, 0, rules, points, type, rules, props = [], length), children), rules, children, length, points, rule ? props : children)
										break
									default:
										parse(characters, reference, reference, reference, [''], children, length, points, children)
								}
				}

				index = offset = property = 0, variable = ampersand = 1, type = characters = '', length = pseudo
				break
			// :
			case 58:
				length = 1 + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.strlen)(characters), property = previous
			default:
				if (variable < 1)
					if (character == 123)
						--variable
					else if (character == 125 && variable++ == 0 && (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.prev)() == 125)
						continue

				switch (characters += (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.from)(character), character * variable) {
					// &
					case 38:
						ampersand = offset > 0 ? 1 : (characters += '\f', -1)
						break
					// ,
					case 44:
						points[index++] = ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.strlen)(characters) - 1) * ampersand, ampersand = 1
						break
					// @
					case 64:
						// -
						if ((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.peek)() === 45)
							characters += (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.delimit)((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.next)())

						atrule = (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.peek)(), offset = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.strlen)(type = characters += (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.identifier)((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.caret)())), character++
						break
					// -
					case 45:
						if (previous === 45 && (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.strlen)(characters) == 2)
							variable = 0
				}
		}

	return rulesets
}

/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {number} index
 * @param {number} offset
 * @param {string[]} rules
 * @param {number[]} points
 * @param {string} type
 * @param {string[]} props
 * @param {string[]} children
 * @param {number} length
 * @return {object}
 */
function ruleset (value, root, parent, index, offset, rules, points, type, props, children, length) {
	var post = offset - 1
	var rule = offset === 0 ? rules : ['']
	var size = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.sizeof)(rule)

	for (var i = 0, j = 0, k = 0; i < index; ++i)
		for (var x = 0, y = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.substr)(value, post + 1, post = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.abs)(j = points[i])), z = value; x < size; ++x)
			if (z = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.trim)(j > 0 ? rule[x] + ' ' + y : (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.replace)(y, /&\f/g, rule[x])))
				props[k++] = z

	return (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.node)(value, root, parent, offset === 0 ? _Enum_js__WEBPACK_IMPORTED_MODULE_2__.RULESET : type, props, children, length)
}

/**
 * @param {number} value
 * @param {object} root
 * @param {object?} parent
 * @return {object}
 */
function comment (value, root, parent) {
	return (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.node)(value, root, parent, _Enum_js__WEBPACK_IMPORTED_MODULE_2__.COMMENT, (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.from)((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.char)()), (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.substr)(value, 2, -2), 0)
}

/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {number} length
 * @return {object}
 */
function declaration (value, root, parent, length) {
	return (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.node)(value, root, parent, _Enum_js__WEBPACK_IMPORTED_MODULE_2__.DECLARATION, (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.substr)(value, 0, length), (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.substr)(value, length + 1, -1), length)
}


/***/ }),

/***/ "../../.yarn/cache/stylis-npm-4.0.10-4c0fa47ff8-0fecaf5c23.zip/node_modules/stylis/src/Prefixer.js":
/*!*********************************************************************************************************!*\
  !*** ../../.yarn/cache/stylis-npm-4.0.10-4c0fa47ff8-0fecaf5c23.zip/node_modules/stylis/src/Prefixer.js ***!
  \*********************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "prefix": function() { return /* binding */ prefix; }
/* harmony export */ });
/* harmony import */ var _Enum_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Enum.js */ "../../.yarn/cache/stylis-npm-4.0.10-4c0fa47ff8-0fecaf5c23.zip/node_modules/stylis/src/Enum.js");
/* harmony import */ var _Utility_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utility.js */ "../../.yarn/cache/stylis-npm-4.0.10-4c0fa47ff8-0fecaf5c23.zip/node_modules/stylis/src/Utility.js");



/**
 * @param {string} value
 * @param {number} length
 * @return {string}
 */
function prefix (value, length) {
	switch ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.hash)(value, length)) {
		// color-adjust
		case 5103:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + 'print-' + value + value
		// animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)
		case 5737: case 4201: case 3177: case 3433: case 1641: case 4457: case 2921:
		// text-decoration, filter, clip-path, backface-visibility, column, box-decoration-break
		case 5572: case 6356: case 5844: case 3191: case 6645: case 3005:
		// mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position, mask-composite,
		case 6391: case 5879: case 5623: case 6135: case 4599: case 4855:
		// background-clip, columns, column-(count|fill|gap|rule|rule-color|rule-style|rule-width|span|width)
		case 4215: case 6389: case 5109: case 5365: case 5621: case 3829:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + value
		// appearance, user-select, transform, hyphens, text-size-adjust
		case 5349: case 4246: case 4810: case 6968: case 2756:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MOZ + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + value + value
		// flex, flex-direction
		case 6828: case 4268:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + value + value
		// order
		case 6165:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + 'flex-' + value + value
		// align-items
		case 5187:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /(\w+).+(:[^]+)/, _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + 'box-$1$2' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + 'flex-$1$2') + value
		// align-self
		case 5443:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + 'flex-item-' + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /flex-|-self/, '') + value
		// align-content
		case 4675:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + 'flex-line-pack' + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /align-content|flex-|-self/, '') + value
		// flex-shrink
		case 5548:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, 'shrink', 'negative') + value
		// flex-basis
		case 5292:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, 'basis', 'preferred-size') + value
		// flex-grow
		case 6060:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + 'box-' + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, '-grow', '') + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, 'grow', 'positive') + value
		// transition
		case 4554:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /([^-])(transform)/g, '$1' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + '$2') + value
		// cursor
		case 6187:
			return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /(zoom-|grab)/, _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + '$1'), /(image-set)/, _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + '$1'), value, '') + value
		// background, background-image
		case 5495: case 3959:
			return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /(image-set\([^]*)/, _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + '$1' + '$`$1')
		// justify-content
		case 4968:
			return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /(.+:)(flex-)?(.*)/, _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + 'box-pack:$3' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + 'flex-pack:$3'), /s.+-b[^;]+/, 'justify') + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + value
		// (margin|padding)-inline-(start|end)
		case 4095: case 3583: case 4068: case 2532:
			return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /(.+)-inline(.+)/, _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + '$1$2') + value
		// (min|max)?(width|height|inline-size|block-size)
		case 8116: case 7059: case 5753: case 5535:
		case 5445: case 5701: case 4933: case 4677:
		case 5533: case 5789: case 5021: case 4765:
			// stretch, max-content, min-content, fill-available
			if ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.strlen)(value) - 1 - length > 6)
				switch ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(value, length + 1)) {
					// (m)ax-content, (m)in-content
					case 109:
						// -
						if ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(value, length + 4) !== 45)
							break
					// (f)ill-available, (f)it-content
					case 102:
						return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /(.+:)(.+)-([^]+)/, '$1' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + '$2-$3' + '$1' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MOZ + ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(value, length + 3) == 108 ? '$3' : '$2-$3')) + value
					// (s)tretch
					case 115:
						return ~(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.indexof)(value, 'stretch') ? prefix((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, 'stretch', 'fill-available'), length) + value : value
				}
			break
		// position: sticky
		case 4949:
			// (s)ticky?
			if ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(value, length + 1) !== 115)
				break
		// display: (flex|inline-flex)
		case 6444:
			switch ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(value, (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.strlen)(value) - 3 - (~(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.indexof)(value, '!important') && 10))) {
				// stic(k)y
				case 107:
					return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, ':', ':' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT) + value
				// (inline-)?fl(e)x
				case 101:
					return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /(.+:)([^;!]+)(;|!.+)?/, '$1' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(value, 14) === 45 ? 'inline-' : '') + 'box$3' + '$1' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + '$2$3' + '$1' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + '$2box$3') + value
			}
			break
		// writing-mode
		case 5936:
			switch ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(value, length + 11)) {
				// vertical-l(r)
				case 114:
					return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /[svh]\w+-[tblr]{2}/, 'tb') + value
				// vertical-r(l)
				case 108:
					return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /[svh]\w+-[tblr]{2}/, 'tb-rl') + value
				// horizontal(-)tb
				case 45:
					return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /[svh]\w+-[tblr]{2}/, 'lr') + value
			}

			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + value + value
	}

	return value
}


/***/ }),

/***/ "../../.yarn/cache/stylis-npm-4.0.10-4c0fa47ff8-0fecaf5c23.zip/node_modules/stylis/src/Serializer.js":
/*!***********************************************************************************************************!*\
  !*** ../../.yarn/cache/stylis-npm-4.0.10-4c0fa47ff8-0fecaf5c23.zip/node_modules/stylis/src/Serializer.js ***!
  \***********************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "serialize": function() { return /* binding */ serialize; },
/* harmony export */   "stringify": function() { return /* binding */ stringify; }
/* harmony export */ });
/* harmony import */ var _Enum_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Enum.js */ "../../.yarn/cache/stylis-npm-4.0.10-4c0fa47ff8-0fecaf5c23.zip/node_modules/stylis/src/Enum.js");
/* harmony import */ var _Utility_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utility.js */ "../../.yarn/cache/stylis-npm-4.0.10-4c0fa47ff8-0fecaf5c23.zip/node_modules/stylis/src/Utility.js");



/**
 * @param {object[]} children
 * @param {function} callback
 * @return {string}
 */
function serialize (children, callback) {
	var output = ''
	var length = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.sizeof)(children)

	for (var i = 0; i < length; i++)
		output += callback(children[i], i, children, callback) || ''

	return output
}

/**
 * @param {object} element
 * @param {number} index
 * @param {object[]} children
 * @param {function} callback
 * @return {string}
 */
function stringify (element, index, children, callback) {
	switch (element.type) {
		case _Enum_js__WEBPACK_IMPORTED_MODULE_1__.IMPORT: case _Enum_js__WEBPACK_IMPORTED_MODULE_1__.DECLARATION: return element.return = element.return || element.value
		case _Enum_js__WEBPACK_IMPORTED_MODULE_1__.COMMENT: return ''
		case _Enum_js__WEBPACK_IMPORTED_MODULE_1__.RULESET: element.value = element.props.join(',')
	}

	return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.strlen)(children = serialize(element.children, callback)) ? element.return = element.value + '{' + children + '}' : ''
}


/***/ }),

/***/ "../../.yarn/cache/stylis-npm-4.0.10-4c0fa47ff8-0fecaf5c23.zip/node_modules/stylis/src/Tokenizer.js":
/*!**********************************************************************************************************!*\
  !*** ../../.yarn/cache/stylis-npm-4.0.10-4c0fa47ff8-0fecaf5c23.zip/node_modules/stylis/src/Tokenizer.js ***!
  \**********************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "line": function() { return /* binding */ line; },
/* harmony export */   "column": function() { return /* binding */ column; },
/* harmony export */   "length": function() { return /* binding */ length; },
/* harmony export */   "position": function() { return /* binding */ position; },
/* harmony export */   "character": function() { return /* binding */ character; },
/* harmony export */   "characters": function() { return /* binding */ characters; },
/* harmony export */   "node": function() { return /* binding */ node; },
/* harmony export */   "copy": function() { return /* binding */ copy; },
/* harmony export */   "char": function() { return /* binding */ char; },
/* harmony export */   "prev": function() { return /* binding */ prev; },
/* harmony export */   "next": function() { return /* binding */ next; },
/* harmony export */   "peek": function() { return /* binding */ peek; },
/* harmony export */   "caret": function() { return /* binding */ caret; },
/* harmony export */   "slice": function() { return /* binding */ slice; },
/* harmony export */   "token": function() { return /* binding */ token; },
/* harmony export */   "alloc": function() { return /* binding */ alloc; },
/* harmony export */   "dealloc": function() { return /* binding */ dealloc; },
/* harmony export */   "delimit": function() { return /* binding */ delimit; },
/* harmony export */   "tokenize": function() { return /* binding */ tokenize; },
/* harmony export */   "whitespace": function() { return /* binding */ whitespace; },
/* harmony export */   "tokenizer": function() { return /* binding */ tokenizer; },
/* harmony export */   "escaping": function() { return /* binding */ escaping; },
/* harmony export */   "delimiter": function() { return /* binding */ delimiter; },
/* harmony export */   "commenter": function() { return /* binding */ commenter; },
/* harmony export */   "identifier": function() { return /* binding */ identifier; }
/* harmony export */ });
/* harmony import */ var _Utility_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utility.js */ "../../.yarn/cache/stylis-npm-4.0.10-4c0fa47ff8-0fecaf5c23.zip/node_modules/stylis/src/Utility.js");


var line = 1
var column = 1
var length = 0
var position = 0
var character = 0
var characters = ''

/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {string} type
 * @param {string[]} props
 * @param {object[]} children
 * @param {number} length
 */
function node (value, root, parent, type, props, children, length) {
	return {value: value, root: root, parent: parent, type: type, props: props, children: children, line: line, column: column, length: length, return: ''}
}

/**
 * @param {string} value
 * @param {object} root
 * @param {string} type
 */
function copy (value, root, type) {
	return node(value, root.root, root.parent, type, root.props, root.children, 0)
}

/**
 * @return {number}
 */
function char () {
	return character
}

/**
 * @return {number}
 */
function prev () {
	character = position > 0 ? (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(characters, --position) : 0

	if (column--, character === 10)
		column = 1, line--

	return character
}

/**
 * @return {number}
 */
function next () {
	character = position < length ? (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(characters, position++) : 0

	if (column++, character === 10)
		column = 1, line++

	return character
}

/**
 * @return {number}
 */
function peek () {
	return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(characters, position)
}

/**
 * @return {number}
 */
function caret () {
	return position
}

/**
 * @param {number} begin
 * @param {number} end
 * @return {string}
 */
function slice (begin, end) {
	return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.substr)(characters, begin, end)
}

/**
 * @param {number} type
 * @return {number}
 */
function token (type) {
	switch (type) {
		// \0 \t \n \r \s whitespace token
		case 0: case 9: case 10: case 13: case 32:
			return 5
		// ! + , / > @ ~ isolate token
		case 33: case 43: case 44: case 47: case 62: case 64: case 126:
		// ; { } breakpoint token
		case 59: case 123: case 125:
			return 4
		// : accompanied token
		case 58:
			return 3
		// " ' ( [ opening delimit token
		case 34: case 39: case 40: case 91:
			return 2
		// ) ] closing delimit token
		case 41: case 93:
			return 1
	}

	return 0
}

/**
 * @param {string} value
 * @return {any[]}
 */
function alloc (value) {
	return line = column = 1, length = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.strlen)(characters = value), position = 0, []
}

/**
 * @param {any} value
 * @return {any}
 */
function dealloc (value) {
	return characters = '', value
}

/**
 * @param {number} type
 * @return {string}
 */
function delimit (type) {
	return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.trim)(slice(position - 1, delimiter(type === 91 ? type + 2 : type === 40 ? type + 1 : type)))
}

/**
 * @param {string} value
 * @return {string[]}
 */
function tokenize (value) {
	return dealloc(tokenizer(alloc(value)))
}

/**
 * @param {number} type
 * @return {string}
 */
function whitespace (type) {
	while (character = peek())
		if (character < 33)
			next()
		else
			break

	return token(type) > 2 || token(character) > 3 ? '' : ' '
}

/**
 * @param {string[]} children
 * @return {string[]}
 */
function tokenizer (children) {
	while (next())
		switch (token(character)) {
			case 0: (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.append)(identifier(position - 1), children)
				break
			case 2: ;(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.append)(delimit(character), children)
				break
			default: ;(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.append)((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.from)(character), children)
		}

	return children
}

/**
 * @param {number} index
 * @param {number} count
 * @return {string}
 */
function escaping (index, count) {
	while (--count && next())
		// not 0-9 A-F a-f
		if (character < 48 || character > 102 || (character > 57 && character < 65) || (character > 70 && character < 97))
			break

	return slice(index, caret() + (count < 6 && peek() == 32 && next() == 32))
}

/**
 * @param {number} type
 * @return {number}
 */
function delimiter (type) {
	while (next())
		switch (character) {
			// ] ) " '
			case type:
				return position
			// " '
			case 34: case 39:
				return delimiter(type === 34 || type === 39 ? type : character)
			// (
			case 40:
				if (type === 41)
					delimiter(type)
				break
			// \
			case 92:
				next()
				break
		}

	return position
}

/**
 * @param {number} type
 * @param {number} index
 * @return {number}
 */
function commenter (type, index) {
	while (next())
		// //
		if (type + character === 47 + 10)
			break
		// /*
		else if (type + character === 42 + 42 && peek() === 47)
			break

	return '/*' + slice(index, position - 1) + '*' + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.from)(type === 47 ? type : next())
}

/**
 * @param {number} index
 * @return {string}
 */
function identifier (index) {
	while (!token(peek()))
		next()

	return slice(index, position)
}


/***/ }),

/***/ "../../.yarn/cache/stylis-npm-4.0.10-4c0fa47ff8-0fecaf5c23.zip/node_modules/stylis/src/Utility.js":
/*!********************************************************************************************************!*\
  !*** ../../.yarn/cache/stylis-npm-4.0.10-4c0fa47ff8-0fecaf5c23.zip/node_modules/stylis/src/Utility.js ***!
  \********************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "abs": function() { return /* binding */ abs; },
/* harmony export */   "from": function() { return /* binding */ from; },
/* harmony export */   "hash": function() { return /* binding */ hash; },
/* harmony export */   "trim": function() { return /* binding */ trim; },
/* harmony export */   "match": function() { return /* binding */ match; },
/* harmony export */   "replace": function() { return /* binding */ replace; },
/* harmony export */   "indexof": function() { return /* binding */ indexof; },
/* harmony export */   "charat": function() { return /* binding */ charat; },
/* harmony export */   "substr": function() { return /* binding */ substr; },
/* harmony export */   "strlen": function() { return /* binding */ strlen; },
/* harmony export */   "sizeof": function() { return /* binding */ sizeof; },
/* harmony export */   "append": function() { return /* binding */ append; },
/* harmony export */   "combine": function() { return /* binding */ combine; }
/* harmony export */ });
/**
 * @param {number}
 * @return {number}
 */
var abs = Math.abs

/**
 * @param {number}
 * @return {string}
 */
var from = String.fromCharCode

/**
 * @param {string} value
 * @param {number} length
 * @return {number}
 */
function hash (value, length) {
	return (((((((length << 2) ^ charat(value, 0)) << 2) ^ charat(value, 1)) << 2) ^ charat(value, 2)) << 2) ^ charat(value, 3)
}

/**
 * @param {string} value
 * @return {string}
 */
function trim (value) {
	return value.trim()
}

/**
 * @param {string} value
 * @param {RegExp} pattern
 * @return {string?}
 */
function match (value, pattern) {
	return (value = pattern.exec(value)) ? value[0] : value
}

/**
 * @param {string} value
 * @param {(string|RegExp)} pattern
 * @param {string} replacement
 * @return {string}
 */
function replace (value, pattern, replacement) {
	return value.replace(pattern, replacement)
}

/**
 * @param {string} value
 * @param {string} value
 * @return {number}
 */
function indexof (value, search) {
	return value.indexOf(search)
}

/**
 * @param {string} value
 * @param {number} index
 * @return {number}
 */
function charat (value, index) {
	return value.charCodeAt(index) | 0
}

/**
 * @param {string} value
 * @param {number} begin
 * @param {number} end
 * @return {string}
 */
function substr (value, begin, end) {
	return value.slice(begin, end)
}

/**
 * @param {string} value
 * @return {number}
 */
function strlen (value) {
	return value.length
}

/**
 * @param {any[]} value
 * @return {number}
 */
function sizeof (value) {
	return value.length
}

/**
 * @param {any} value
 * @param {any[]} array
 * @return {any}
 */
function append (value, array) {
	return array.push(value), value
}

/**
 * @param {string[]} array
 * @param {function} callback
 * @return {string}
 */
function combine (array, callback) {
	return array.map(callback).join('')
}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ // runtime can't be in strict mode because a global variable is assign and maybe created.
/******/ 
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["main"], function() { return __webpack_exec__("../../.yarn/__virtual__/next-virtual-f84b51c559/0/cache/next-npm-11.0.1-c40bc7f380-c6b4747f1a.zip/node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.tsx!"), __webpack_exec__("../../.yarn/__virtual__/next-virtual-f84b51c559/0/cache/next-npm-11.0.1-c40bc7f380-c6b4747f1a.zip/node_modules/next/dist/client/router.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL0BlbW90aW9uLXJlYWN0LXZpcnR1YWwtYWEzMjJkMzc3Yi8wL2NhY2hlL0BlbW90aW9uLXJlYWN0LW5wbS0xMS40LjAtMTc0ZDc3NzUyOS1hZjJhYmFkYmFlLnppcC9ub2RlX21vZHVsZXMvQGVtb3Rpb24vcmVhY3QvZGlzdC9lbW90aW9uLWVsZW1lbnQtYTgzMDkwNzAuYnJvd3Nlci5lc20uanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy9AZW1vdGlvbi1yZWFjdC12aXJ0dWFsLWFhMzIyZDM3N2IvMC9jYWNoZS9AZW1vdGlvbi1yZWFjdC1ucG0tMTEuNC4wLTE3NGQ3Nzc1MjktYWYyYWJhZGJhZS56aXAvbm9kZV9tb2R1bGVzL0BlbW90aW9uL3JlYWN0L2Rpc3QvZW1vdGlvbi1yZWFjdC5icm93c2VyLmVzbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL0BlbW90aW9uLXJlYWN0LXZpcnR1YWwtYWEzMjJkMzc3Yi8wL2NhY2hlL0BlbW90aW9uLXJlYWN0LW5wbS0xMS40LjAtMTc0ZDc3NzUyOS1hZjJhYmFkYmFlLnppcC9ub2RlX21vZHVsZXMvQGVtb3Rpb24vcmVhY3QvaXNvbGF0ZWQtaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3MtZG8tbm90LXVzZS10aGlzLWluLXlvdXItY29kZS9kaXN0L2Vtb3Rpb24tcmVhY3QtaXNvbGF0ZWQtaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3MtZG8tbm90LXVzZS10aGlzLWluLXlvdXItY29kZS5icm93c2VyLmVzbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL0BlbW90aW9uLXJlYWN0LXZpcnR1YWwtYWEzMjJkMzc3Yi8wL2NhY2hlL0BlbW90aW9uLXJlYWN0LW5wbS0xMS40LjAtMTc0ZDc3NzUyOS1hZjJhYmFkYmFlLnppcC9ub2RlX21vZHVsZXMvQGVtb3Rpb24vcmVhY3QvanN4LWRldi1ydW50aW1lL2Rpc3QvZW1vdGlvbi1yZWFjdC1qc3gtZGV2LXJ1bnRpbWUuYnJvd3Nlci5lc20uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2xpYnMvcXVlcnlDbGllbnQudHMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL19hcHAudHN4Iiwid2VicGFjazovL19OX0UvLi9zdHlsZXMvY3NzTm9ybWFsaXplLnRzIiwid2VicGFjazovL19OX0UvLi9zdHlsZXMvc3R5bGVzLnRzeCIsIndlYnBhY2s6Ly9fTl9FLyIsIndlYnBhY2s6Ly9fTl9FLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL3JlYWN0LXF1ZXJ5LXZpcnR1YWwtZjZkNjU0YmU3OS8wL2NhY2hlL3JlYWN0LXF1ZXJ5LW5wbS0zLjE5LjEtYmU2NzBkYWE4ZC04ZTg2NWQ5YmE0LnppcC9ub2RlX21vZHVsZXMvcmVhY3QtcXVlcnkvZXMvY29yZS9mb2N1c01hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy9yZWFjdC1xdWVyeS12aXJ0dWFsLWY2ZDY1NGJlNzkvMC9jYWNoZS9yZWFjdC1xdWVyeS1ucG0tMy4xOS4xLWJlNjcwZGFhOGQtOGU4NjVkOWJhNC56aXAvbm9kZV9tb2R1bGVzL3JlYWN0LXF1ZXJ5L2VzL2NvcmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy9yZWFjdC1xdWVyeS12aXJ0dWFsLWY2ZDY1NGJlNzkvMC9jYWNoZS9yZWFjdC1xdWVyeS1ucG0tMy4xOS4xLWJlNjcwZGFhOGQtOGU4NjVkOWJhNC56aXAvbm9kZV9tb2R1bGVzL3JlYWN0LXF1ZXJ5L2VzL2NvcmUvaW5maW5pdGVRdWVyeUJlaGF2aW9yLmpzIiwid2VicGFjazovL19OX0UvLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vcmVhY3QtcXVlcnktdmlydHVhbC1mNmQ2NTRiZTc5LzAvY2FjaGUvcmVhY3QtcXVlcnktbnBtLTMuMTkuMS1iZTY3MGRhYThkLThlODY1ZDliYTQuemlwL25vZGVfbW9kdWxlcy9yZWFjdC1xdWVyeS9lcy9jb3JlL2luZmluaXRlUXVlcnlPYnNlcnZlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL3JlYWN0LXF1ZXJ5LXZpcnR1YWwtZjZkNjU0YmU3OS8wL2NhY2hlL3JlYWN0LXF1ZXJ5LW5wbS0zLjE5LjEtYmU2NzBkYWE4ZC04ZTg2NWQ5YmE0LnppcC9ub2RlX21vZHVsZXMvcmVhY3QtcXVlcnkvZXMvY29yZS9sb2dnZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy9yZWFjdC1xdWVyeS12aXJ0dWFsLWY2ZDY1NGJlNzkvMC9jYWNoZS9yZWFjdC1xdWVyeS1ucG0tMy4xOS4xLWJlNjcwZGFhOGQtOGU4NjVkOWJhNC56aXAvbm9kZV9tb2R1bGVzL3JlYWN0LXF1ZXJ5L2VzL2NvcmUvbXV0YXRpb24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy9yZWFjdC1xdWVyeS12aXJ0dWFsLWY2ZDY1NGJlNzkvMC9jYWNoZS9yZWFjdC1xdWVyeS1ucG0tMy4xOS4xLWJlNjcwZGFhOGQtOGU4NjVkOWJhNC56aXAvbm9kZV9tb2R1bGVzL3JlYWN0LXF1ZXJ5L2VzL2NvcmUvbXV0YXRpb25DYWNoZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL3JlYWN0LXF1ZXJ5LXZpcnR1YWwtZjZkNjU0YmU3OS8wL2NhY2hlL3JlYWN0LXF1ZXJ5LW5wbS0zLjE5LjEtYmU2NzBkYWE4ZC04ZTg2NWQ5YmE0LnppcC9ub2RlX21vZHVsZXMvcmVhY3QtcXVlcnkvZXMvY29yZS9tdXRhdGlvbk9ic2VydmVyLmpzIiwid2VicGFjazovL19OX0UvLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vcmVhY3QtcXVlcnktdmlydHVhbC1mNmQ2NTRiZTc5LzAvY2FjaGUvcmVhY3QtcXVlcnktbnBtLTMuMTkuMS1iZTY3MGRhYThkLThlODY1ZDliYTQuemlwL25vZGVfbW9kdWxlcy9yZWFjdC1xdWVyeS9lcy9jb3JlL25vdGlmeU1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy9yZWFjdC1xdWVyeS12aXJ0dWFsLWY2ZDY1NGJlNzkvMC9jYWNoZS9yZWFjdC1xdWVyeS1ucG0tMy4xOS4xLWJlNjcwZGFhOGQtOGU4NjVkOWJhNC56aXAvbm9kZV9tb2R1bGVzL3JlYWN0LXF1ZXJ5L2VzL2NvcmUvb25saW5lTWFuYWdlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL3JlYWN0LXF1ZXJ5LXZpcnR1YWwtZjZkNjU0YmU3OS8wL2NhY2hlL3JlYWN0LXF1ZXJ5LW5wbS0zLjE5LjEtYmU2NzBkYWE4ZC04ZTg2NWQ5YmE0LnppcC9ub2RlX21vZHVsZXMvcmVhY3QtcXVlcnkvZXMvY29yZS9xdWVyaWVzT2JzZXJ2ZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy9yZWFjdC1xdWVyeS12aXJ0dWFsLWY2ZDY1NGJlNzkvMC9jYWNoZS9yZWFjdC1xdWVyeS1ucG0tMy4xOS4xLWJlNjcwZGFhOGQtOGU4NjVkOWJhNC56aXAvbm9kZV9tb2R1bGVzL3JlYWN0LXF1ZXJ5L2VzL2NvcmUvcXVlcnkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy9yZWFjdC1xdWVyeS12aXJ0dWFsLWY2ZDY1NGJlNzkvMC9jYWNoZS9yZWFjdC1xdWVyeS1ucG0tMy4xOS4xLWJlNjcwZGFhOGQtOGU4NjVkOWJhNC56aXAvbm9kZV9tb2R1bGVzL3JlYWN0LXF1ZXJ5L2VzL2NvcmUvcXVlcnlDYWNoZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL3JlYWN0LXF1ZXJ5LXZpcnR1YWwtZjZkNjU0YmU3OS8wL2NhY2hlL3JlYWN0LXF1ZXJ5LW5wbS0zLjE5LjEtYmU2NzBkYWE4ZC04ZTg2NWQ5YmE0LnppcC9ub2RlX21vZHVsZXMvcmVhY3QtcXVlcnkvZXMvY29yZS9xdWVyeUNsaWVudC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL3JlYWN0LXF1ZXJ5LXZpcnR1YWwtZjZkNjU0YmU3OS8wL2NhY2hlL3JlYWN0LXF1ZXJ5LW5wbS0zLjE5LjEtYmU2NzBkYWE4ZC04ZTg2NWQ5YmE0LnppcC9ub2RlX21vZHVsZXMvcmVhY3QtcXVlcnkvZXMvY29yZS9xdWVyeU9ic2VydmVyLmpzIiwid2VicGFjazovL19OX0UvLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vcmVhY3QtcXVlcnktdmlydHVhbC1mNmQ2NTRiZTc5LzAvY2FjaGUvcmVhY3QtcXVlcnktbnBtLTMuMTkuMS1iZTY3MGRhYThkLThlODY1ZDliYTQuemlwL25vZGVfbW9kdWxlcy9yZWFjdC1xdWVyeS9lcy9jb3JlL3JldHJ5ZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy9yZWFjdC1xdWVyeS12aXJ0dWFsLWY2ZDY1NGJlNzkvMC9jYWNoZS9yZWFjdC1xdWVyeS1ucG0tMy4xOS4xLWJlNjcwZGFhOGQtOGU4NjVkOWJhNC56aXAvbm9kZV9tb2R1bGVzL3JlYWN0LXF1ZXJ5L2VzL2NvcmUvc3Vic2NyaWJhYmxlLmpzIiwid2VicGFjazovL19OX0UvLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vcmVhY3QtcXVlcnktdmlydHVhbC1mNmQ2NTRiZTc5LzAvY2FjaGUvcmVhY3QtcXVlcnktbnBtLTMuMTkuMS1iZTY3MGRhYThkLThlODY1ZDliYTQuemlwL25vZGVfbW9kdWxlcy9yZWFjdC1xdWVyeS9lcy9jb3JlL3V0aWxzLmpzIiwid2VicGFjazovL19OX0UvLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vcmVhY3QtcXVlcnktdmlydHVhbC1mNmQ2NTRiZTc5LzAvY2FjaGUvcmVhY3QtcXVlcnktbnBtLTMuMTkuMS1iZTY3MGRhYThkLThlODY1ZDliYTQuemlwL25vZGVfbW9kdWxlcy9yZWFjdC1xdWVyeS9lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL3JlYWN0LXF1ZXJ5LXZpcnR1YWwtZjZkNjU0YmU3OS8wL2NhY2hlL3JlYWN0LXF1ZXJ5LW5wbS0zLjE5LjEtYmU2NzBkYWE4ZC04ZTg2NWQ5YmE0LnppcC9ub2RlX21vZHVsZXMvcmVhY3QtcXVlcnkvZXMvcmVhY3QvUXVlcnlDbGllbnRQcm92aWRlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL3JlYWN0LXF1ZXJ5LXZpcnR1YWwtZjZkNjU0YmU3OS8wL2NhY2hlL3JlYWN0LXF1ZXJ5LW5wbS0zLjE5LjEtYmU2NzBkYWE4ZC04ZTg2NWQ5YmE0LnppcC9ub2RlX21vZHVsZXMvcmVhY3QtcXVlcnkvZXMvcmVhY3QvUXVlcnlFcnJvclJlc2V0Qm91bmRhcnkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy9yZWFjdC1xdWVyeS12aXJ0dWFsLWY2ZDY1NGJlNzkvMC9jYWNoZS9yZWFjdC1xdWVyeS1ucG0tMy4xOS4xLWJlNjcwZGFhOGQtOGU4NjVkOWJhNC56aXAvbm9kZV9tb2R1bGVzL3JlYWN0LXF1ZXJ5L2VzL3JlYWN0L2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vcmVhY3QtcXVlcnktdmlydHVhbC1mNmQ2NTRiZTc5LzAvY2FjaGUvcmVhY3QtcXVlcnktbnBtLTMuMTkuMS1iZTY3MGRhYThkLThlODY1ZDliYTQuemlwL25vZGVfbW9kdWxlcy9yZWFjdC1xdWVyeS9lcy9yZWFjdC9sb2dnZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy9yZWFjdC1xdWVyeS12aXJ0dWFsLWY2ZDY1NGJlNzkvMC9jYWNoZS9yZWFjdC1xdWVyeS1ucG0tMy4xOS4xLWJlNjcwZGFhOGQtOGU4NjVkOWJhNC56aXAvbm9kZV9tb2R1bGVzL3JlYWN0LXF1ZXJ5L2VzL3JlYWN0L3JlYWN0QmF0Y2hlZFVwZGF0ZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy9yZWFjdC1xdWVyeS12aXJ0dWFsLWY2ZDY1NGJlNzkvMC9jYWNoZS9yZWFjdC1xdWVyeS1ucG0tMy4xOS4xLWJlNjcwZGFhOGQtOGU4NjVkOWJhNC56aXAvbm9kZV9tb2R1bGVzL3JlYWN0LXF1ZXJ5L2VzL3JlYWN0L3NldEJhdGNoVXBkYXRlc0ZuLmpzIiwid2VicGFjazovL19OX0UvLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vcmVhY3QtcXVlcnktdmlydHVhbC1mNmQ2NTRiZTc5LzAvY2FjaGUvcmVhY3QtcXVlcnktbnBtLTMuMTkuMS1iZTY3MGRhYThkLThlODY1ZDliYTQuemlwL25vZGVfbW9kdWxlcy9yZWFjdC1xdWVyeS9lcy9yZWFjdC9zZXRMb2dnZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy9yZWFjdC1xdWVyeS12aXJ0dWFsLWY2ZDY1NGJlNzkvMC9jYWNoZS9yZWFjdC1xdWVyeS1ucG0tMy4xOS4xLWJlNjcwZGFhOGQtOGU4NjVkOWJhNC56aXAvbm9kZV9tb2R1bGVzL3JlYWN0LXF1ZXJ5L2VzL3JlYWN0L3VzZUJhc2VRdWVyeS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL3JlYWN0LXF1ZXJ5LXZpcnR1YWwtZjZkNjU0YmU3OS8wL2NhY2hlL3JlYWN0LXF1ZXJ5LW5wbS0zLjE5LjEtYmU2NzBkYWE4ZC04ZTg2NWQ5YmE0LnppcC9ub2RlX21vZHVsZXMvcmVhY3QtcXVlcnkvZXMvcmVhY3QvdXNlSW5maW5pdGVRdWVyeS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL3JlYWN0LXF1ZXJ5LXZpcnR1YWwtZjZkNjU0YmU3OS8wL2NhY2hlL3JlYWN0LXF1ZXJ5LW5wbS0zLjE5LjEtYmU2NzBkYWE4ZC04ZTg2NWQ5YmE0LnppcC9ub2RlX21vZHVsZXMvcmVhY3QtcXVlcnkvZXMvcmVhY3QvdXNlSXNGZXRjaGluZy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL3JlYWN0LXF1ZXJ5LXZpcnR1YWwtZjZkNjU0YmU3OS8wL2NhY2hlL3JlYWN0LXF1ZXJ5LW5wbS0zLjE5LjEtYmU2NzBkYWE4ZC04ZTg2NWQ5YmE0LnppcC9ub2RlX21vZHVsZXMvcmVhY3QtcXVlcnkvZXMvcmVhY3QvdXNlSXNNdXRhdGluZy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL3JlYWN0LXF1ZXJ5LXZpcnR1YWwtZjZkNjU0YmU3OS8wL2NhY2hlL3JlYWN0LXF1ZXJ5LW5wbS0zLjE5LjEtYmU2NzBkYWE4ZC04ZTg2NWQ5YmE0LnppcC9ub2RlX21vZHVsZXMvcmVhY3QtcXVlcnkvZXMvcmVhY3QvdXNlTXV0YXRpb24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy9yZWFjdC1xdWVyeS12aXJ0dWFsLWY2ZDY1NGJlNzkvMC9jYWNoZS9yZWFjdC1xdWVyeS1ucG0tMy4xOS4xLWJlNjcwZGFhOGQtOGU4NjVkOWJhNC56aXAvbm9kZV9tb2R1bGVzL3JlYWN0LXF1ZXJ5L2VzL3JlYWN0L3VzZVF1ZXJpZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy9yZWFjdC1xdWVyeS12aXJ0dWFsLWY2ZDY1NGJlNzkvMC9jYWNoZS9yZWFjdC1xdWVyeS1ucG0tMy4xOS4xLWJlNjcwZGFhOGQtOGU4NjVkOWJhNC56aXAvbm9kZV9tb2R1bGVzL3JlYWN0LXF1ZXJ5L2VzL3JlYWN0L3VzZVF1ZXJ5LmpzIiwid2VicGFjazovL19OX0UvLi4vLi4vLnlhcm4vY2FjaGUvQGJhYmVsLXJ1bnRpbWUtbnBtLTcuMTIuNS1iM2VkYjhlZThlLTY0OTY0YTBmZDEuemlwL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uLy4uLy55YXJuL2NhY2hlL0BiYWJlbC1ydW50aW1lLW5wbS03LjE0LjgtMTc3ZjdmNjg2Ni1kMmRkMGNlNTFkLnppcC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uLy4uLy55YXJuL2NhY2hlL0BiYWJlbC1ydW50aW1lLW5wbS03LjE0LjgtMTc3ZjdmNjg2Ni1kMmRkMGNlNTFkLnppcC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHNMb29zZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uLy4uLy55YXJuL2NhY2hlL0BiYWJlbC1ydW50aW1lLW5wbS03LjE0LjgtMTc3ZjdmNjg2Ni1kMmRkMGNlNTFkLnppcC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vc2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi8uLi8ueWFybi9jYWNoZS9AZW1vdGlvbi1jYWNoZS1ucG0tMTEuNC4wLTcwMWNmNDFhNjItYmRlZjRjMGNjYy56aXAvbm9kZV9tb2R1bGVzL0BlbW90aW9uL2NhY2hlL2Rpc3QvZW1vdGlvbi1jYWNoZS5icm93c2VyLmVzbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uLy4uLy55YXJuL2NhY2hlL0BlbW90aW9uLWhhc2gtbnBtLTAuOC4wLTAxMDRmNGJiZjMtNGIzNWQ4OGE5Ny56aXAvbm9kZV9tb2R1bGVzL0BlbW90aW9uL2hhc2gvZGlzdC9oYXNoLmJyb3dzZXIuZXNtLmpzIiwid2VicGFjazovL19OX0UvLi4vLi4vLnlhcm4vY2FjaGUvQGVtb3Rpb24tbWVtb2l6ZS1ucG0tMC43LjUtZTVlN2U5ZWVjYS04M2RhOGQ0YTc2LnppcC9ub2RlX21vZHVsZXMvQGVtb3Rpb24vbWVtb2l6ZS9kaXN0L2Vtb3Rpb24tbWVtb2l6ZS5icm93c2VyLmVzbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uLy4uLy55YXJuL2NhY2hlL0BlbW90aW9uLXNlcmlhbGl6ZS1ucG0tMS4wLjItYTY5MmFmZGI4Mi1mZjg0ZmJlMDllLnppcC9ub2RlX21vZHVsZXMvQGVtb3Rpb24vc2VyaWFsaXplL2Rpc3QvZW1vdGlvbi1zZXJpYWxpemUuYnJvd3Nlci5lc20uanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi8uLi8ueWFybi9jYWNoZS9AZW1vdGlvbi1zaGVldC1ucG0tMS4wLjEtZjkxN2JmN2VjOS02MjRlMmVkZTAzLnppcC9ub2RlX21vZHVsZXMvQGVtb3Rpb24vc2hlZXQvZGlzdC9lbW90aW9uLXNoZWV0LmJyb3dzZXIuZXNtLmpzIiwid2VicGFjazovL19OX0UvLi4vLi4vLnlhcm4vY2FjaGUvQGVtb3Rpb24tdW5pdGxlc3MtbnBtLTAuNy41LTE0ZTExNzE2NDAtZjk3NmU1MzQ1Yi56aXAvbm9kZV9tb2R1bGVzL0BlbW90aW9uL3VuaXRsZXNzL2Rpc3QvdW5pdGxlc3MuYnJvd3Nlci5lc20uanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi8uLi8ueWFybi9jYWNoZS9AZW1vdGlvbi11dGlscy1ucG0tMS4wLjAtN2Y5ODA5Mjg5Yy0zY2U4MDQ4NDQxLnppcC9ub2RlX21vZHVsZXMvQGVtb3Rpb24vdXRpbHMvZGlzdC9lbW90aW9uLXV0aWxzLmJyb3dzZXIuZXNtLmpzIiwid2VicGFjazovL19OX0UvLi4vLi4vLnlhcm4vY2FjaGUvQGVtb3Rpb24td2Vhay1tZW1vaXplLW5wbS0wLjIuNS05ZjJlNDllN2M4LTI3ZDQwMmIwYzYuemlwL25vZGVfbW9kdWxlcy9AZW1vdGlvbi93ZWFrLW1lbW9pemUvZGlzdC93ZWFrLW1lbW9pemUuYnJvd3Nlci5lc20uanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi8uLi8ueWFybi9jYWNoZS9ob2lzdC1ub24tcmVhY3Qtc3RhdGljcy1ucG0tMy4zLjItZTdiNzA5ZTZjMS1iMTUzODI3MDQyLnppcC9ub2RlX21vZHVsZXMvaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3MvZGlzdC9ob2lzdC1ub24tcmVhY3Qtc3RhdGljcy5janMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi8uLi8ueWFybi9jYWNoZS9yZWFjdC1pcy1ucG0tMTYuMTMuMS1hOWI5MzgyYjRmLWY3YTE5YWMzNDkuemlwL25vZGVfbW9kdWxlcy9yZWFjdC1pcy9janMvcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi8uLi8ueWFybi9jYWNoZS9yZWFjdC1pcy1ucG0tMTYuMTMuMS1hOWI5MzgyYjRmLWY3YTE5YWMzNDkuemlwL25vZGVfbW9kdWxlcy9yZWFjdC1pcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uLy4uLy55YXJuL2NhY2hlL3JlYWN0LW5wbS0xOC4wLjAtYWxwaGEtZTNiNzZhODVjLTIwMjEwODAyLWYyYjVhNTYxOWMtNjUyZGYzZTMzMC56aXAvbm9kZV9tb2R1bGVzL3JlYWN0L2Nqcy9yZWFjdC1qc3gtZGV2LXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi8uLi8ueWFybi9jYWNoZS9yZWFjdC1ucG0tMTguMC4wLWFscGhhLWUzYjc2YTg1Yy0yMDIxMDgwMi1mMmI1YTU2MTljLTY1MmRmM2UzMzAuemlwL25vZGVfbW9kdWxlcy9yZWFjdC9qc3gtZGV2LXJ1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi8uLi8ueWFybi9jYWNoZS9zdHlsaXMtbnBtLTQuMC4xMC00YzBmYTQ3ZmY4LTBmZWNhZjVjMjMuemlwL25vZGVfbW9kdWxlcy9zdHlsaXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi8uLi8ueWFybi9jYWNoZS9zdHlsaXMtbnBtLTQuMC4xMC00YzBmYTQ3ZmY4LTBmZWNhZjVjMjMuemlwL25vZGVfbW9kdWxlcy9zdHlsaXMvc3JjL0VudW0uanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi8uLi8ueWFybi9jYWNoZS9zdHlsaXMtbnBtLTQuMC4xMC00YzBmYTQ3ZmY4LTBmZWNhZjVjMjMuemlwL25vZGVfbW9kdWxlcy9zdHlsaXMvc3JjL01pZGRsZXdhcmUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi8uLi8ueWFybi9jYWNoZS9zdHlsaXMtbnBtLTQuMC4xMC00YzBmYTQ3ZmY4LTBmZWNhZjVjMjMuemlwL25vZGVfbW9kdWxlcy9zdHlsaXMvc3JjL1BhcnNlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uLy4uLy55YXJuL2NhY2hlL3N0eWxpcy1ucG0tNC4wLjEwLTRjMGZhNDdmZjgtMGZlY2FmNWMyMy56aXAvbm9kZV9tb2R1bGVzL3N0eWxpcy9zcmMvUHJlZml4ZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi8uLi8ueWFybi9jYWNoZS9zdHlsaXMtbnBtLTQuMC4xMC00YzBmYTQ3ZmY4LTBmZWNhZjVjMjMuemlwL25vZGVfbW9kdWxlcy9zdHlsaXMvc3JjL1NlcmlhbGl6ZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi8uLi8ueWFybi9jYWNoZS9zdHlsaXMtbnBtLTQuMC4xMC00YzBmYTQ3ZmY4LTBmZWNhZjVjMjMuemlwL25vZGVfbW9kdWxlcy9zdHlsaXMvc3JjL1Rva2VuaXplci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uLy4uLy55YXJuL2NhY2hlL3N0eWxpcy1ucG0tNC4wLjEwLTRjMGZhNDdmZjgtMGZlY2FmNWMyMy56aXAvbm9kZV9tb2R1bGVzL3N0eWxpcy9zcmMvVXRpbGl0eS5qcyJdLCJuYW1lcyI6WyJxdWVyeUNsaWVudCIsIlF1ZXJ5Q2xpZW50IiwiZGVmYXVsdE9wdGlvbnMiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImdsb2JhbFN0eWxlcyIsImNzc05vcm1hbGl6ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNkU7QUFDcEM7QUFDaUI7QUFDVjtBQUNvSjtBQUNqSTtBQUNkOztBQUVyRDs7QUFFQSx5Q0FBeUMsb0RBQWE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRCx1REFBVztBQUMvRDtBQUNBLENBQUM7QUFDRDs7QUFFQTtBQUNBO0FBQ0Esc0JBQXNCLGlEQUFVO0FBQ2hDO0FBQ0EsZ0JBQWdCLGlEQUFVO0FBQzFCO0FBQ0EsR0FBRztBQUNIOztB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QUFFeEIsMkJBQTJCOztBQUUzQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOzs7QUFHRDtBQUNBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDOztBQUV0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTs7QUFFUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7O0FBRVI7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQSxTQUFTO0FBQ1Qsd0JBQXdCO0FB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OztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFlBQVksUUFBUTtBQUNwQjtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxhQUFhO0FBQ3hCLFdBQVcsRUFBRTtBQUNiOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDREQUE0RDtBQUM1RDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsVUFBVTtBQUNyQixXQUFXLEVBQUU7QUFDYjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFCQUFx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Q087QUFDUDtBQUNBOztBQUVBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsZ0JBQWdCO0FBQzNCLFdBQVcsT0FBTztBQUNsQixZQUFZO0FBQ1o7QUFDTztBQUNQO0FBQ0E7O0FBRUE7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFlBQVk7QUFDWjtBQUNPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsWUFBWTtBQUNaO0FBQ087QUFDUDtBQUNBOztBQUVBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsWUFBWTtBQUNaO0FBQ087QUFDUDtBQUNBOztBQUVBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFlBQVk7QUFDWjtBQUNPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBLFdBQVcsTUFBTTtBQUNqQixZQUFZO0FBQ1o7QUFDTztBQUNQO0FBQ0E7O0FBRUE7QUFDQSxXQUFXLElBQUk7QUFDZixXQUFXLE1BQU07QUFDakIsWUFBWTtBQUNaO0FBQ087QUFDUDtBQUNBOztBQUVBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCLFdBQVcsU0FBUztBQUNwQixZQUFZO0FBQ1o7QUFDTztBQUNQO0FBQ0EiLCJmaWxlIjoic3RhdGljL2NodW5rcy9wYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgZm9yd2FyZFJlZiwgdXNlQ29udGV4dCwgY3JlYXRlRWxlbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjcmVhdGVDYWNoZSBmcm9tICdAZW1vdGlvbi9jYWNoZSc7XG5pbXBvcnQgX2V4dGVuZHMgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kcyc7XG5pbXBvcnQgd2Vha01lbW9pemUgZnJvbSAnQGVtb3Rpb24vd2Vhay1tZW1vaXplJztcbmltcG9ydCBob2lzdE5vblJlYWN0U3RhdGljcyBmcm9tICcuLi9pc29sYXRlZC1ob2lzdC1ub24tcmVhY3Qtc3RhdGljcy1kby1ub3QtdXNlLXRoaXMtaW4teW91ci1jb2RlL2Rpc3QvZW1vdGlvbi1yZWFjdC1pc29sYXRlZC1ob2lzdC1ub24tcmVhY3Qtc3RhdGljcy1kby1ub3QtdXNlLXRoaXMtaW4teW91ci1jb2RlLmJyb3dzZXIuZXNtLmpzJztcbmltcG9ydCB7IGdldFJlZ2lzdGVyZWRTdHlsZXMsIGluc2VydFN0eWxlcyB9IGZyb20gJ0BlbW90aW9uL3V0aWxzJztcbmltcG9ydCB7IHNlcmlhbGl6ZVN0eWxlcyB9IGZyb20gJ0BlbW90aW9uL3NlcmlhbGl6ZSc7XG5cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbnZhciBFbW90aW9uQ2FjaGVDb250ZXh0ID0gLyogI19fUFVSRV9fICovY3JlYXRlQ29udGV4dCggLy8gd2UncmUgZG9pbmcgdGhpcyB0byBhdm9pZCBwcmVjb25zdHJ1Y3QncyBkZWFkIGNvZGUgZWxpbWluYXRpb24gaW4gdGhpcyBvbmUgY2FzZVxuLy8gYmVjYXVzZSB0aGlzIG1vZHVsZSBpcyBwcmltYXJpbHkgaW50ZW5kZWQgZm9yIHRoZSBicm93c2VyIGFuZCBub2RlXG4vLyBidXQgaXQncyBhbHNvIHJlcXVpcmVkIGluIHJlYWN0IG5hdGl2ZSBhbmQgc2ltaWxhciBlbnZpcm9ubWVudHMgc29tZXRpbWVzXG4vLyBhbmQgd2UgY291bGQgaGF2ZSBhIHNwZWNpYWwgYnVpbGQganVzdCBmb3IgdGhhdFxuLy8gYnV0IHRoaXMgaXMgbXVjaCBlYXNpZXIgYW5kIHRoZSBuYXRpdmUgcGFja2FnZXNcbi8vIG1pZ2h0IHVzZSBhIGRpZmZlcmVudCB0aGVtZSBjb250ZXh0IGluIHRoZSBmdXR1cmUgYW55d2F5XG50eXBlb2YgSFRNTEVsZW1lbnQgIT09ICd1bmRlZmluZWQnID8gLyogI19fUFVSRV9fICovY3JlYXRlQ2FjaGUoe1xuICBrZXk6ICdjc3MnXG59KSA6IG51bGwpO1xudmFyIENhY2hlUHJvdmlkZXIgPSBFbW90aW9uQ2FjaGVDb250ZXh0LlByb3ZpZGVyO1xuXG52YXIgd2l0aEVtb3Rpb25DYWNoZSA9IGZ1bmN0aW9uIHdpdGhFbW90aW9uQ2FjaGUoZnVuYykge1xuICAvLyAkRmxvd0ZpeE1lXG4gIHJldHVybiAvKiNfX1BVUkVfXyovZm9yd2FyZFJlZihmdW5jdGlvbiAocHJvcHMsIHJlZikge1xuICAgIC8vIHRoZSBjYWNoZSB3aWxsIG5ldmVyIGJlIG51bGwgaW4gdGhlIGJyb3dzZXJcbiAgICB2YXIgY2FjaGUgPSB1c2VDb250ZXh0KEVtb3Rpb25DYWNoZUNvbnRleHQpO1xuICAgIHJldHVybiBmdW5jKHByb3BzLCBjYWNoZSwgcmVmKTtcbiAgfSk7XG59O1xuXG52YXIgVGhlbWVDb250ZXh0ID0gLyogI19fUFVSRV9fICovY3JlYXRlQ29udGV4dCh7fSk7XG52YXIgdXNlVGhlbWUgPSBmdW5jdGlvbiB1c2VUaGVtZSgpIHtcbiAgcmV0dXJuIHVzZUNvbnRleHQoVGhlbWVDb250ZXh0KTtcbn07XG5cbnZhciBnZXRUaGVtZSA9IGZ1bmN0aW9uIGdldFRoZW1lKG91dGVyVGhlbWUsIHRoZW1lKSB7XG4gIGlmICh0eXBlb2YgdGhlbWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgbWVyZ2VkVGhlbWUgPSB0aGVtZShvdXRlclRoZW1lKTtcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIChtZXJnZWRUaGVtZSA9PSBudWxsIHx8IHR5cGVvZiBtZXJnZWRUaGVtZSAhPT0gJ29iamVjdCcgfHwgQXJyYXkuaXNBcnJheShtZXJnZWRUaGVtZSkpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tUaGVtZVByb3ZpZGVyXSBQbGVhc2UgcmV0dXJuIGFuIG9iamVjdCBmcm9tIHlvdXIgdGhlbWUgZnVuY3Rpb24sIGkuZS4gdGhlbWU9eygpID0+ICh7fSl9IScpO1xuICAgIH1cblxuICAgIHJldHVybiBtZXJnZWRUaGVtZTtcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmICh0aGVtZSA9PSBudWxsIHx8IHR5cGVvZiB0aGVtZSAhPT0gJ29iamVjdCcgfHwgQXJyYXkuaXNBcnJheSh0aGVtZSkpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdbVGhlbWVQcm92aWRlcl0gUGxlYXNlIG1ha2UgeW91ciB0aGVtZSBwcm9wIGEgcGxhaW4gb2JqZWN0Jyk7XG4gIH1cblxuICByZXR1cm4gX2V4dGVuZHMoe30sIG91dGVyVGhlbWUsIHRoZW1lKTtcbn07XG5cbnZhciBjcmVhdGVDYWNoZVdpdGhUaGVtZSA9IC8qICNfX1BVUkVfXyAqL3dlYWtNZW1vaXplKGZ1bmN0aW9uIChvdXRlclRoZW1lKSB7XG4gIHJldHVybiB3ZWFrTWVtb2l6ZShmdW5jdGlvbiAodGhlbWUpIHtcbiAgICByZXR1cm4gZ2V0VGhlbWUob3V0ZXJUaGVtZSwgdGhlbWUpO1xuICB9KTtcbn0pO1xudmFyIFRoZW1lUHJvdmlkZXIgPSBmdW5jdGlvbiBUaGVtZVByb3ZpZGVyKHByb3BzKSB7XG4gIHZhciB0aGVtZSA9IHVzZUNvbnRleHQoVGhlbWVDb250ZXh0KTtcblxuICBpZiAocHJvcHMudGhlbWUgIT09IHRoZW1lKSB7XG4gICAgdGhlbWUgPSBjcmVhdGVDYWNoZVdpdGhUaGVtZSh0aGVtZSkocHJvcHMudGhlbWUpO1xuICB9XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9jcmVhdGVFbGVtZW50KFRoZW1lQ29udGV4dC5Qcm92aWRlciwge1xuICAgIHZhbHVlOiB0aGVtZVxuICB9LCBwcm9wcy5jaGlsZHJlbik7XG59O1xuZnVuY3Rpb24gd2l0aFRoZW1lKENvbXBvbmVudCkge1xuICB2YXIgY29tcG9uZW50TmFtZSA9IENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZSB8fCAnQ29tcG9uZW50JztcblxuICB2YXIgcmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKHByb3BzLCByZWYpIHtcbiAgICB2YXIgdGhlbWUgPSB1c2VDb250ZXh0KFRoZW1lQ29udGV4dCk7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9jcmVhdGVFbGVtZW50KENvbXBvbmVudCwgX2V4dGVuZHMoe1xuICAgICAgdGhlbWU6IHRoZW1lLFxuICAgICAgcmVmOiByZWZcbiAgICB9LCBwcm9wcykpO1xuICB9OyAvLyAkRmxvd0ZpeE1lXG5cblxuICB2YXIgV2l0aFRoZW1lID0gLyojX19QVVJFX18qL2ZvcndhcmRSZWYocmVuZGVyKTtcbiAgV2l0aFRoZW1lLmRpc3BsYXlOYW1lID0gXCJXaXRoVGhlbWUoXCIgKyBjb21wb25lbnROYW1lICsgXCIpXCI7XG4gIHJldHVybiBob2lzdE5vblJlYWN0U3RhdGljcyhXaXRoVGhlbWUsIENvbXBvbmVudCk7XG59XG5cbi8vIHRodXMgd2Ugb25seSBuZWVkIHRvIHJlcGxhY2Ugd2hhdCBpcyBhIHZhbGlkIGNoYXJhY3RlciBmb3IgSlMsIGJ1dCBub3QgZm9yIENTU1xuXG52YXIgc2FuaXRpemVJZGVudGlmaWVyID0gZnVuY3Rpb24gc2FuaXRpemVJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgcmV0dXJuIGlkZW50aWZpZXIucmVwbGFjZSgvXFwkL2csICctJyk7XG59O1xuXG52YXIgdHlwZVByb3BOYW1lID0gJ19fRU1PVElPTl9UWVBFX1BMRUFTRV9ET19OT1RfVVNFX18nO1xudmFyIGxhYmVsUHJvcE5hbWUgPSAnX19FTU9USU9OX0xBQkVMX1BMRUFTRV9ET19OT1RfVVNFX18nO1xudmFyIGNyZWF0ZUVtb3Rpb25Qcm9wcyA9IGZ1bmN0aW9uIGNyZWF0ZUVtb3Rpb25Qcm9wcyh0eXBlLCBwcm9wcykge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB0eXBlb2YgcHJvcHMuY3NzID09PSAnc3RyaW5nJyAmJiAvLyBjaGVjayBpZiB0aGVyZSBpcyBhIGNzcyBkZWNsYXJhdGlvblxuICBwcm9wcy5jc3MuaW5kZXhPZignOicpICE9PSAtMSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlN0cmluZ3MgYXJlIG5vdCBhbGxvd2VkIGFzIGNzcyBwcm9wIHZhbHVlcywgcGxlYXNlIHdyYXAgaXQgaW4gYSBjc3MgdGVtcGxhdGUgbGl0ZXJhbCBmcm9tICdAZW1vdGlvbi9yZWFjdCcgbGlrZSB0aGlzOiBjc3NgXCIgKyBwcm9wcy5jc3MgKyBcImBcIik7XG4gIH1cblxuICB2YXIgbmV3UHJvcHMgPSB7fTtcblxuICBmb3IgKHZhciBrZXkgaW4gcHJvcHMpIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChwcm9wcywga2V5KSkge1xuICAgICAgbmV3UHJvcHNba2V5XSA9IHByb3BzW2tleV07XG4gICAgfVxuICB9XG5cbiAgbmV3UHJvcHNbdHlwZVByb3BOYW1lXSA9IHR5cGU7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICB2YXIgZXJyb3IgPSBuZXcgRXJyb3IoKTtcblxuICAgIGlmIChlcnJvci5zdGFjaykge1xuICAgICAgLy8gY2hyb21lXG4gICAgICB2YXIgbWF0Y2ggPSBlcnJvci5zdGFjay5tYXRjaCgvYXQgKD86T2JqZWN0XFwufE1vZHVsZVxcLnwpKD86anN4fGNyZWF0ZUVtb3Rpb25Qcm9wcykuKlxcblxccythdCAoPzpPYmplY3RcXC58KShbQS1aXVtBLVphLXowLTkkXSspIC8pO1xuXG4gICAgICBpZiAoIW1hdGNoKSB7XG4gICAgICAgIC8vIHNhZmFyaSBhbmQgZmlyZWZveFxuICAgICAgICBtYXRjaCA9IGVycm9yLnN0YWNrLm1hdGNoKC8uKlxcbihbQS1aXVtBLVphLXowLTkkXSspQC8pO1xuICAgICAgfVxuXG4gICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgbmV3UHJvcHNbbGFiZWxQcm9wTmFtZV0gPSBzYW5pdGl6ZUlkZW50aWZpZXIobWF0Y2hbMV0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuZXdQcm9wcztcbn07XG52YXIgRW1vdGlvbiA9IC8qICNfX1BVUkVfXyAqL3dpdGhFbW90aW9uQ2FjaGUoZnVuY3Rpb24gKHByb3BzLCBjYWNoZSwgcmVmKSB7XG4gIHZhciBjc3NQcm9wID0gcHJvcHMuY3NzOyAvLyBzbyB0aGF0IHVzaW5nIGBjc3NgIGZyb20gYGVtb3Rpb25gIGFuZCBwYXNzaW5nIHRoZSByZXN1bHQgdG8gdGhlIGNzcyBwcm9wIHdvcmtzXG4gIC8vIG5vdCBwYXNzaW5nIHRoZSByZWdpc3RlcmVkIGNhY2hlIHRvIHNlcmlhbGl6ZVN0eWxlcyBiZWNhdXNlIGl0IHdvdWxkXG4gIC8vIG1ha2UgY2VydGFpbiBiYWJlbCBvcHRpbWlzYXRpb25zIG5vdCBwb3NzaWJsZVxuXG4gIGlmICh0eXBlb2YgY3NzUHJvcCA9PT0gJ3N0cmluZycgJiYgY2FjaGUucmVnaXN0ZXJlZFtjc3NQcm9wXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgY3NzUHJvcCA9IGNhY2hlLnJlZ2lzdGVyZWRbY3NzUHJvcF07XG4gIH1cblxuICB2YXIgdHlwZSA9IHByb3BzW3R5cGVQcm9wTmFtZV07XG4gIHZhciByZWdpc3RlcmVkU3R5bGVzID0gW2Nzc1Byb3BdO1xuICB2YXIgY2xhc3NOYW1lID0gJyc7XG5cbiAgaWYgKHR5cGVvZiBwcm9wcy5jbGFzc05hbWUgPT09ICdzdHJpbmcnKSB7XG4gICAgY2xhc3NOYW1lID0gZ2V0UmVnaXN0ZXJlZFN0eWxlcyhjYWNoZS5yZWdpc3RlcmVkLCByZWdpc3RlcmVkU3R5bGVzLCBwcm9wcy5jbGFzc05hbWUpO1xuICB9IGVsc2UgaWYgKHByb3BzLmNsYXNzTmFtZSAhPSBudWxsKSB7XG4gICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lICsgXCIgXCI7XG4gIH1cblxuICB2YXIgc2VyaWFsaXplZCA9IHNlcmlhbGl6ZVN0eWxlcyhyZWdpc3RlcmVkU3R5bGVzLCB1bmRlZmluZWQsIHR5cGVvZiBjc3NQcm9wID09PSAnZnVuY3Rpb24nIHx8IEFycmF5LmlzQXJyYXkoY3NzUHJvcCkgPyB1c2VDb250ZXh0KFRoZW1lQ29udGV4dCkgOiB1bmRlZmluZWQpO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHNlcmlhbGl6ZWQubmFtZS5pbmRleE9mKCctJykgPT09IC0xKSB7XG4gICAgdmFyIGxhYmVsRnJvbVN0YWNrID0gcHJvcHNbbGFiZWxQcm9wTmFtZV07XG5cbiAgICBpZiAobGFiZWxGcm9tU3RhY2spIHtcbiAgICAgIHNlcmlhbGl6ZWQgPSBzZXJpYWxpemVTdHlsZXMoW3NlcmlhbGl6ZWQsICdsYWJlbDonICsgbGFiZWxGcm9tU3RhY2sgKyAnOyddKTtcbiAgICB9XG4gIH1cblxuICB2YXIgcnVsZXMgPSBpbnNlcnRTdHlsZXMoY2FjaGUsIHNlcmlhbGl6ZWQsIHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyk7XG4gIGNsYXNzTmFtZSArPSBjYWNoZS5rZXkgKyBcIi1cIiArIHNlcmlhbGl6ZWQubmFtZTtcbiAgdmFyIG5ld1Byb3BzID0ge307XG5cbiAgZm9yICh2YXIga2V5IGluIHByb3BzKSB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwocHJvcHMsIGtleSkgJiYga2V5ICE9PSAnY3NzJyAmJiBrZXkgIT09IHR5cGVQcm9wTmFtZSAmJiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyB8fCBrZXkgIT09IGxhYmVsUHJvcE5hbWUpKSB7XG4gICAgICBuZXdQcm9wc1trZXldID0gcHJvcHNba2V5XTtcbiAgICB9XG4gIH1cblxuICBuZXdQcm9wcy5yZWYgPSByZWY7XG4gIG5ld1Byb3BzLmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcbiAgdmFyIGVsZSA9IC8qI19fUFVSRV9fKi9jcmVhdGVFbGVtZW50KHR5cGUsIG5ld1Byb3BzKTtcblxuICByZXR1cm4gZWxlO1xufSk7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIEVtb3Rpb24uZGlzcGxheU5hbWUgPSAnRW1vdGlvbkNzc1Byb3BJbnRlcm5hbCc7XG59XG5cbmV4cG9ydCB7IENhY2hlUHJvdmlkZXIgYXMgQywgRW1vdGlvbiBhcyBFLCBUaGVtZUNvbnRleHQgYXMgVCwgVGhlbWVQcm92aWRlciBhcyBhLCB3aXRoVGhlbWUgYXMgYiwgY3JlYXRlRW1vdGlvblByb3BzIGFzIGMsIGhhc093blByb3BlcnR5IGFzIGgsIHVzZVRoZW1lIGFzIHUsIHdpdGhFbW90aW9uQ2FjaGUgYXMgdyB9O1xuIiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCwgdXNlQ29udGV4dCwgdXNlUmVmLCB1c2VMYXlvdXRFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgJ0BlbW90aW9uL2NhY2hlJztcbmltcG9ydCB7IGggYXMgaGFzT3duUHJvcGVydHksIEUgYXMgRW1vdGlvbiwgYyBhcyBjcmVhdGVFbW90aW9uUHJvcHMsIHcgYXMgd2l0aEVtb3Rpb25DYWNoZSwgVCBhcyBUaGVtZUNvbnRleHQgfSBmcm9tICcuL2Vtb3Rpb24tZWxlbWVudC1hODMwOTA3MC5icm93c2VyLmVzbS5qcyc7XG5leHBvcnQgeyBDIGFzIENhY2hlUHJvdmlkZXIsIFQgYXMgVGhlbWVDb250ZXh0LCBhIGFzIFRoZW1lUHJvdmlkZXIsIHUgYXMgdXNlVGhlbWUsIHcgYXMgd2l0aEVtb3Rpb25DYWNoZSwgYiBhcyB3aXRoVGhlbWUgfSBmcm9tICcuL2Vtb3Rpb24tZWxlbWVudC1hODMwOTA3MC5icm93c2VyLmVzbS5qcyc7XG5pbXBvcnQgJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcyc7XG5pbXBvcnQgJ0BlbW90aW9uL3dlYWstbWVtb2l6ZSc7XG5pbXBvcnQgJ2hvaXN0LW5vbi1yZWFjdC1zdGF0aWNzJztcbmltcG9ydCAnLi4vaXNvbGF0ZWQtaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3MtZG8tbm90LXVzZS10aGlzLWluLXlvdXItY29kZS9kaXN0L2Vtb3Rpb24tcmVhY3QtaXNvbGF0ZWQtaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3MtZG8tbm90LXVzZS10aGlzLWluLXlvdXItY29kZS5icm93c2VyLmVzbS5qcyc7XG5pbXBvcnQgeyBpbnNlcnRTdHlsZXMsIGdldFJlZ2lzdGVyZWRTdHlsZXMgfSBmcm9tICdAZW1vdGlvbi91dGlscyc7XG5pbXBvcnQgeyBzZXJpYWxpemVTdHlsZXMgfSBmcm9tICdAZW1vdGlvbi9zZXJpYWxpemUnO1xuaW1wb3J0IHsgU3R5bGVTaGVldCB9IGZyb20gJ0BlbW90aW9uL3NoZWV0JztcblxudmFyIHBrZyA9IHtcblx0bmFtZTogXCJAZW1vdGlvbi9yZWFjdFwiLFxuXHR2ZXJzaW9uOiBcIjExLjQuMFwiLFxuXHRtYWluOiBcImRpc3QvZW1vdGlvbi1yZWFjdC5janMuanNcIixcblx0bW9kdWxlOiBcImRpc3QvZW1vdGlvbi1yZWFjdC5lc20uanNcIixcblx0YnJvd3Nlcjoge1xuXHRcdFwiLi9kaXN0L2Vtb3Rpb24tcmVhY3QuY2pzLmpzXCI6IFwiLi9kaXN0L2Vtb3Rpb24tcmVhY3QuYnJvd3Nlci5janMuanNcIixcblx0XHRcIi4vZGlzdC9lbW90aW9uLXJlYWN0LmVzbS5qc1wiOiBcIi4vZGlzdC9lbW90aW9uLXJlYWN0LmJyb3dzZXIuZXNtLmpzXCJcblx0fSxcblx0dHlwZXM6IFwidHlwZXMvaW5kZXguZC50c1wiLFxuXHRmaWxlczogW1xuXHRcdFwic3JjXCIsXG5cdFx0XCJkaXN0XCIsXG5cdFx0XCJqc3gtcnVudGltZVwiLFxuXHRcdFwianN4LWRldi1ydW50aW1lXCIsXG5cdFx0XCJpc29sYXRlZC1ob2lzdC1ub24tcmVhY3Qtc3RhdGljcy1kby1ub3QtdXNlLXRoaXMtaW4teW91ci1jb2RlXCIsXG5cdFx0XCJ0eXBlcy8qLmQudHNcIixcblx0XHRcIm1hY3JvLmpzXCIsXG5cdFx0XCJtYWNyby5kLnRzXCIsXG5cdFx0XCJtYWNyby5qcy5mbG93XCJcblx0XSxcblx0c2lkZUVmZmVjdHM6IGZhbHNlLFxuXHRhdXRob3I6IFwibWl0Y2hlbGxoYW1pbHRvbiA8bWl0Y2hlbGxAbWl0Y2hlbGxoYW1pbHRvbi5tZT5cIixcblx0bGljZW5zZTogXCJNSVRcIixcblx0c2NyaXB0czoge1xuXHRcdFwidGVzdDp0eXBlc2NyaXB0XCI6IFwiZHRzbGludCB0eXBlc1wiXG5cdH0sXG5cdGRlcGVuZGVuY2llczoge1xuXHRcdFwiQGJhYmVsL3J1bnRpbWVcIjogXCJeNy4xMy4xMFwiLFxuXHRcdFwiQGVtb3Rpb24vY2FjaGVcIjogXCJeMTEuNC4wXCIsXG5cdFx0XCJAZW1vdGlvbi9zZXJpYWxpemVcIjogXCJeMS4wLjJcIixcblx0XHRcIkBlbW90aW9uL3NoZWV0XCI6IFwiXjEuMC4xXCIsXG5cdFx0XCJAZW1vdGlvbi91dGlsc1wiOiBcIl4xLjAuMFwiLFxuXHRcdFwiQGVtb3Rpb24vd2Vhay1tZW1vaXplXCI6IFwiXjAuMi41XCIsXG5cdFx0XCJob2lzdC1ub24tcmVhY3Qtc3RhdGljc1wiOiBcIl4zLjMuMVwiXG5cdH0sXG5cdHBlZXJEZXBlbmRlbmNpZXM6IHtcblx0XHRcIkBiYWJlbC9jb3JlXCI6IFwiXjcuMC4wXCIsXG5cdFx0cmVhY3Q6IFwiPj0xNi44LjBcIlxuXHR9LFxuXHRwZWVyRGVwZW5kZW5jaWVzTWV0YToge1xuXHRcdFwiQGJhYmVsL2NvcmVcIjoge1xuXHRcdFx0b3B0aW9uYWw6IHRydWVcblx0XHR9LFxuXHRcdFwiQHR5cGVzL3JlYWN0XCI6IHtcblx0XHRcdG9wdGlvbmFsOiB0cnVlXG5cdFx0fVxuXHR9LFxuXHRkZXZEZXBlbmRlbmNpZXM6IHtcblx0XHRcIkBiYWJlbC9jb3JlXCI6IFwiXjcuMTMuMTBcIixcblx0XHRcIkBlbW90aW9uL2Nzc1wiOiBcIjExLjEuM1wiLFxuXHRcdFwiQGVtb3Rpb24vY3NzLXByZXR0aWZpZXJcIjogXCIxLjAuMFwiLFxuXHRcdFwiQGVtb3Rpb24vc2VydmVyXCI6IFwiMTEuNC4wXCIsXG5cdFx0XCJAZW1vdGlvbi9zdHlsZWRcIjogXCIxMS4zLjBcIixcblx0XHRcIkB0eXBlcy9yZWFjdFwiOiBcIl4xNi45LjExXCIsXG5cdFx0ZHRzbGludDogXCJeMC4zLjBcIixcblx0XHRcImh0bWwtdGFnLW5hbWVzXCI6IFwiXjEuMS4yXCIsXG5cdFx0cmVhY3Q6IFwiMTYuMTQuMFwiLFxuXHRcdFwic3ZnLXRhZy1uYW1lc1wiOiBcIl4xLjEuMVwiXG5cdH0sXG5cdHJlcG9zaXRvcnk6IFwiaHR0cHM6Ly9naXRodWIuY29tL2Vtb3Rpb24tanMvZW1vdGlvbi90cmVlL21haW4vcGFja2FnZXMvcmVhY3RcIixcblx0cHVibGlzaENvbmZpZzoge1xuXHRcdGFjY2VzczogXCJwdWJsaWNcIlxuXHR9LFxuXHRcInVtZDptYWluXCI6IFwiZGlzdC9lbW90aW9uLXJlYWN0LnVtZC5taW4uanNcIixcblx0cHJlY29uc3RydWN0OiB7XG5cdFx0ZW50cnlwb2ludHM6IFtcblx0XHRcdFwiLi9pbmRleC5qc1wiLFxuXHRcdFx0XCIuL2pzeC1ydW50aW1lLmpzXCIsXG5cdFx0XHRcIi4vanN4LWRldi1ydW50aW1lLmpzXCIsXG5cdFx0XHRcIi4vaXNvbGF0ZWQtaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3MtZG8tbm90LXVzZS10aGlzLWluLXlvdXItY29kZS5qc1wiXG5cdFx0XSxcblx0XHR1bWROYW1lOiBcImVtb3Rpb25SZWFjdFwiXG5cdH1cbn07XG5cbnZhciBqc3ggPSBmdW5jdGlvbiBqc3godHlwZSwgcHJvcHMpIHtcbiAgdmFyIGFyZ3MgPSBhcmd1bWVudHM7XG5cbiAgaWYgKHByb3BzID09IG51bGwgfHwgIWhhc093blByb3BlcnR5LmNhbGwocHJvcHMsICdjc3MnKSkge1xuICAgIC8vICRGbG93Rml4TWVcbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudC5hcHBseSh1bmRlZmluZWQsIGFyZ3MpO1xuICB9XG5cbiAgdmFyIGFyZ3NMZW5ndGggPSBhcmdzLmxlbmd0aDtcbiAgdmFyIGNyZWF0ZUVsZW1lbnRBcmdBcnJheSA9IG5ldyBBcnJheShhcmdzTGVuZ3RoKTtcbiAgY3JlYXRlRWxlbWVudEFyZ0FycmF5WzBdID0gRW1vdGlvbjtcbiAgY3JlYXRlRWxlbWVudEFyZ0FycmF5WzFdID0gY3JlYXRlRW1vdGlvblByb3BzKHR5cGUsIHByb3BzKTtcblxuICBmb3IgKHZhciBpID0gMjsgaSA8IGFyZ3NMZW5ndGg7IGkrKykge1xuICAgIGNyZWF0ZUVsZW1lbnRBcmdBcnJheVtpXSA9IGFyZ3NbaV07XG4gIH0gLy8gJEZsb3dGaXhNZVxuXG5cbiAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQuYXBwbHkobnVsbCwgY3JlYXRlRWxlbWVudEFyZ0FycmF5KTtcbn07XG5cbnZhciB3YXJuZWRBYm91dENzc1Byb3BGb3JHbG9iYWwgPSBmYWxzZTsgLy8gbWFpbnRhaW4gcGxhY2Ugb3ZlciByZXJlbmRlcnMuXG4vLyBpbml0aWFsIHJlbmRlciBmcm9tIGJyb3dzZXIsIGluc2VydEJlZm9yZSBjb250ZXh0LnNoZWV0LnRhZ3NbMF0gb3IgaWYgYSBzdHlsZSBoYXNuJ3QgYmVlbiBpbnNlcnRlZCB0aGVyZSB5ZXQsIGFwcGVuZENoaWxkXG4vLyBpbml0aWFsIGNsaWVudC1zaWRlIHJlbmRlciBmcm9tIFNTUiwgdXNlIHBsYWNlIG9mIGh5ZHJhdGluZyB0YWdcblxudmFyIEdsb2JhbCA9IC8qICNfX1BVUkVfXyAqL3dpdGhFbW90aW9uQ2FjaGUoZnVuY3Rpb24gKHByb3BzLCBjYWNoZSkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiAhd2FybmVkQWJvdXRDc3NQcm9wRm9yR2xvYmFsICYmICggLy8gY2hlY2sgZm9yIGNsYXNzTmFtZSBhcyB3ZWxsIHNpbmNlIHRoZSB1c2VyIGlzXG4gIC8vIHByb2JhYmx5IHVzaW5nIHRoZSBjdXN0b20gY3JlYXRlRWxlbWVudCB3aGljaFxuICAvLyBtZWFucyBpdCB3aWxsIGJlIHR1cm5lZCBpbnRvIGEgY2xhc3NOYW1lIHByb3BcbiAgLy8gJEZsb3dGaXhNZSBJIGRvbid0IHJlYWxseSB3YW50IHRvIGFkZCBpdCB0byB0aGUgdHlwZSBzaW5jZSBpdCBzaG91bGRuJ3QgYmUgdXNlZFxuICBwcm9wcy5jbGFzc05hbWUgfHwgcHJvcHMuY3NzKSkge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJJdCBsb29rcyBsaWtlIHlvdSdyZSB1c2luZyB0aGUgY3NzIHByb3Agb24gR2xvYmFsLCBkaWQgeW91IG1lYW4gdG8gdXNlIHRoZSBzdHlsZXMgcHJvcCBpbnN0ZWFkP1wiKTtcbiAgICB3YXJuZWRBYm91dENzc1Byb3BGb3JHbG9iYWwgPSB0cnVlO1xuICB9XG5cbiAgdmFyIHN0eWxlcyA9IHByb3BzLnN0eWxlcztcbiAgdmFyIHNlcmlhbGl6ZWQgPSBzZXJpYWxpemVTdHlsZXMoW3N0eWxlc10sIHVuZGVmaW5lZCwgdHlwZW9mIHN0eWxlcyA9PT0gJ2Z1bmN0aW9uJyB8fCBBcnJheS5pc0FycmF5KHN0eWxlcykgPyB1c2VDb250ZXh0KFRoZW1lQ29udGV4dCkgOiB1bmRlZmluZWQpO1xuICAvLyBidXQgaXQgaXMgYmFzZWQgb24gYSBjb25zdGFudCB0aGF0IHdpbGwgbmV2ZXIgY2hhbmdlIGF0IHJ1bnRpbWVcbiAgLy8gaXQncyBlZmZlY3RpdmVseSBsaWtlIGhhdmluZyB0d28gaW1wbGVtZW50YXRpb25zIGFuZCBzd2l0Y2hpbmcgdGhlbSBvdXRcbiAgLy8gc28gaXQncyBub3QgYWN0dWFsbHkgYnJlYWtpbmcgYW55dGhpbmdcblxuXG4gIHZhciBzaGVldFJlZiA9IHVzZVJlZigpO1xuICB1c2VMYXlvdXRFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIHZhciBrZXkgPSBjYWNoZS5rZXkgKyBcIi1nbG9iYWxcIjtcbiAgICB2YXIgc2hlZXQgPSBuZXcgU3R5bGVTaGVldCh7XG4gICAgICBrZXk6IGtleSxcbiAgICAgIG5vbmNlOiBjYWNoZS5zaGVldC5ub25jZSxcbiAgICAgIGNvbnRhaW5lcjogY2FjaGUuc2hlZXQuY29udGFpbmVyLFxuICAgICAgc3BlZWR5OiBjYWNoZS5zaGVldC5pc1NwZWVkeVxuICAgIH0pO1xuICAgIHZhciByZWh5ZHJhdGluZyA9IGZhbHNlOyAvLyAkRmxvd0ZpeE1lXG5cbiAgICB2YXIgbm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJzdHlsZVtkYXRhLWVtb3Rpb249XFxcIlwiICsga2V5ICsgXCIgXCIgKyBzZXJpYWxpemVkLm5hbWUgKyBcIlxcXCJdXCIpO1xuXG4gICAgaWYgKGNhY2hlLnNoZWV0LnRhZ3MubGVuZ3RoKSB7XG4gICAgICBzaGVldC5iZWZvcmUgPSBjYWNoZS5zaGVldC50YWdzWzBdO1xuICAgIH1cblxuICAgIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgICByZWh5ZHJhdGluZyA9IHRydWU7IC8vIGNsZWFyIHRoZSBoYXNoIHNvIHRoaXMgbm9kZSB3b24ndCBiZSByZWNvZ25pemFibGUgYXMgcmVoeWRyYXRhYmxlIGJ5IG90aGVyIDxHbG9iYWwvPnNcblxuICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtZW1vdGlvbicsIGtleSk7XG4gICAgICBzaGVldC5oeWRyYXRlKFtub2RlXSk7XG4gICAgfVxuXG4gICAgc2hlZXRSZWYuY3VycmVudCA9IFtzaGVldCwgcmVoeWRyYXRpbmddO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBzaGVldC5mbHVzaCgpO1xuICAgIH07XG4gIH0sIFtjYWNoZV0pO1xuICB1c2VMYXlvdXRFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIHZhciBzaGVldFJlZkN1cnJlbnQgPSBzaGVldFJlZi5jdXJyZW50O1xuICAgIHZhciBzaGVldCA9IHNoZWV0UmVmQ3VycmVudFswXSxcbiAgICAgICAgcmVoeWRyYXRpbmcgPSBzaGVldFJlZkN1cnJlbnRbMV07XG5cbiAgICBpZiAocmVoeWRyYXRpbmcpIHtcbiAgICAgIHNoZWV0UmVmQ3VycmVudFsxXSA9IGZhbHNlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChzZXJpYWxpemVkLm5leHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gaW5zZXJ0IGtleWZyYW1lc1xuICAgICAgaW5zZXJ0U3R5bGVzKGNhY2hlLCBzZXJpYWxpemVkLm5leHQsIHRydWUpO1xuICAgIH1cblxuICAgIGlmIChzaGVldC50YWdzLmxlbmd0aCkge1xuICAgICAgLy8gaWYgdGhpcyBkb2Vzbid0IGV4aXN0IHRoZW4gaXQgd2lsbCBiZSBudWxsIHNvIHRoZSBzdHlsZSBlbGVtZW50IHdpbGwgYmUgYXBwZW5kZWRcbiAgICAgIHZhciBlbGVtZW50ID0gc2hlZXQudGFnc1tzaGVldC50YWdzLmxlbmd0aCAtIDFdLm5leHRFbGVtZW50U2libGluZztcbiAgICAgIHNoZWV0LmJlZm9yZSA9IGVsZW1lbnQ7XG4gICAgICBzaGVldC5mbHVzaCgpO1xuICAgIH1cblxuICAgIGNhY2hlLmluc2VydChcIlwiLCBzZXJpYWxpemVkLCBzaGVldCwgZmFsc2UpO1xuICB9LCBbY2FjaGUsIHNlcmlhbGl6ZWQubmFtZV0pO1xuICByZXR1cm4gbnVsbDtcbn0pO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICBHbG9iYWwuZGlzcGxheU5hbWUgPSAnRW1vdGlvbkdsb2JhbCc7XG59XG5cbmZ1bmN0aW9uIGNzcygpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHJldHVybiBzZXJpYWxpemVTdHlsZXMoYXJncyk7XG59XG5cbnZhciBrZXlmcmFtZXMgPSBmdW5jdGlvbiBrZXlmcmFtZXMoKSB7XG4gIHZhciBpbnNlcnRhYmxlID0gY3NzLmFwcGx5KHZvaWQgMCwgYXJndW1lbnRzKTtcbiAgdmFyIG5hbWUgPSBcImFuaW1hdGlvbi1cIiArIGluc2VydGFibGUubmFtZTsgLy8gJEZsb3dGaXhNZVxuXG4gIHJldHVybiB7XG4gICAgbmFtZTogbmFtZSxcbiAgICBzdHlsZXM6IFwiQGtleWZyYW1lcyBcIiArIG5hbWUgKyBcIntcIiArIGluc2VydGFibGUuc3R5bGVzICsgXCJ9XCIsXG4gICAgYW5pbTogMSxcbiAgICB0b1N0cmluZzogZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgICByZXR1cm4gXCJfRU1PX1wiICsgdGhpcy5uYW1lICsgXCJfXCIgKyB0aGlzLnN0eWxlcyArIFwiX0VNT19cIjtcbiAgICB9XG4gIH07XG59O1xuXG52YXIgY2xhc3NuYW1lcyA9IGZ1bmN0aW9uIGNsYXNzbmFtZXMoYXJncykge1xuICB2YXIgbGVuID0gYXJncy5sZW5ndGg7XG4gIHZhciBpID0gMDtcbiAgdmFyIGNscyA9ICcnO1xuXG4gIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcbiAgICB2YXIgYXJnID0gYXJnc1tpXTtcbiAgICBpZiAoYXJnID09IG51bGwpIGNvbnRpbnVlO1xuICAgIHZhciB0b0FkZCA9IHZvaWQgMDtcblxuICAgIHN3aXRjaCAodHlwZW9mIGFyZykge1xuICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICB7XG4gICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoYXJnKSkge1xuICAgICAgICAgICAgdG9BZGQgPSBjbGFzc25hbWVzKGFyZyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIGFyZy5zdHlsZXMgIT09IHVuZGVmaW5lZCAmJiBhcmcubmFtZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1lvdSBoYXZlIHBhc3NlZCBzdHlsZXMgY3JlYXRlZCB3aXRoIGBjc3NgIGZyb20gYEBlbW90aW9uL3JlYWN0YCBwYWNrYWdlIHRvIHRoZSBgY3hgLlxcbicgKyAnYGN4YCBpcyBtZWFudCB0byBjb21wb3NlIGNsYXNzIG5hbWVzIChzdHJpbmdzKSBzbyB5b3Ugc2hvdWxkIGNvbnZlcnQgdGhvc2Ugc3R5bGVzIHRvIGEgY2xhc3MgbmFtZSBieSBwYXNzaW5nIHRoZW0gdG8gdGhlIGBjc3NgIHJlY2VpdmVkIGZyb20gPENsYXNzTmFtZXMvPiBjb21wb25lbnQuJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRvQWRkID0gJyc7XG5cbiAgICAgICAgICAgIGZvciAodmFyIGsgaW4gYXJnKSB7XG4gICAgICAgICAgICAgIGlmIChhcmdba10gJiYgaykge1xuICAgICAgICAgICAgICAgIHRvQWRkICYmICh0b0FkZCArPSAnICcpO1xuICAgICAgICAgICAgICAgIHRvQWRkICs9IGs7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB7XG4gICAgICAgICAgdG9BZGQgPSBhcmc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodG9BZGQpIHtcbiAgICAgIGNscyAmJiAoY2xzICs9ICcgJyk7XG4gICAgICBjbHMgKz0gdG9BZGQ7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNscztcbn07XG5cbmZ1bmN0aW9uIG1lcmdlKHJlZ2lzdGVyZWQsIGNzcywgY2xhc3NOYW1lKSB7XG4gIHZhciByZWdpc3RlcmVkU3R5bGVzID0gW107XG4gIHZhciByYXdDbGFzc05hbWUgPSBnZXRSZWdpc3RlcmVkU3R5bGVzKHJlZ2lzdGVyZWQsIHJlZ2lzdGVyZWRTdHlsZXMsIGNsYXNzTmFtZSk7XG5cbiAgaWYgKHJlZ2lzdGVyZWRTdHlsZXMubGVuZ3RoIDwgMikge1xuICAgIHJldHVybiBjbGFzc05hbWU7XG4gIH1cblxuICByZXR1cm4gcmF3Q2xhc3NOYW1lICsgY3NzKHJlZ2lzdGVyZWRTdHlsZXMpO1xufVxuXG52YXIgQ2xhc3NOYW1lcyA9IC8qICNfX1BVUkVfXyAqL3dpdGhFbW90aW9uQ2FjaGUoZnVuY3Rpb24gKHByb3BzLCBjYWNoZSkge1xuICB2YXIgaGFzUmVuZGVyZWQgPSBmYWxzZTtcblxuICB2YXIgY3NzID0gZnVuY3Rpb24gY3NzKCkge1xuICAgIGlmIChoYXNSZW5kZXJlZCAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NzcyBjYW4gb25seSBiZSB1c2VkIGR1cmluZyByZW5kZXInKTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgdmFyIHNlcmlhbGl6ZWQgPSBzZXJpYWxpemVTdHlsZXMoYXJncywgY2FjaGUucmVnaXN0ZXJlZCk7XG5cbiAgICB7XG4gICAgICBpbnNlcnRTdHlsZXMoY2FjaGUsIHNlcmlhbGl6ZWQsIGZhbHNlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY2FjaGUua2V5ICsgXCItXCIgKyBzZXJpYWxpemVkLm5hbWU7XG4gIH07XG5cbiAgdmFyIGN4ID0gZnVuY3Rpb24gY3goKSB7XG4gICAgaWYgKGhhc1JlbmRlcmVkICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY3ggY2FuIG9ubHkgYmUgdXNlZCBkdXJpbmcgcmVuZGVyJyk7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4yKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICBhcmdzW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lcmdlKGNhY2hlLnJlZ2lzdGVyZWQsIGNzcywgY2xhc3NuYW1lcyhhcmdzKSk7XG4gIH07XG5cbiAgdmFyIGNvbnRlbnQgPSB7XG4gICAgY3NzOiBjc3MsXG4gICAgY3g6IGN4LFxuICAgIHRoZW1lOiB1c2VDb250ZXh0KFRoZW1lQ29udGV4dClcbiAgfTtcbiAgdmFyIGVsZSA9IHByb3BzLmNoaWxkcmVuKGNvbnRlbnQpO1xuICBoYXNSZW5kZXJlZCA9IHRydWU7XG5cbiAgcmV0dXJuIGVsZTtcbn0pO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICBDbGFzc05hbWVzLmRpc3BsYXlOYW1lID0gJ0Vtb3Rpb25DbGFzc05hbWVzJztcbn1cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFyIGlzQnJvd3NlciA9IFwib2JqZWN0XCIgIT09ICd1bmRlZmluZWQnOyAvLyAjMTcyNyBmb3Igc29tZSByZWFzb24gSmVzdCBldmFsdWF0ZXMgbW9kdWxlcyB0d2ljZSBpZiBzb21lIGNvbnN1bWluZyBtb2R1bGUgZ2V0cyBtb2NrZWQgd2l0aCBqZXN0Lm1vY2tcblxuICB2YXIgaXNKZXN0ID0gdHlwZW9mIGplc3QgIT09ICd1bmRlZmluZWQnO1xuXG4gIGlmIChpc0Jyb3dzZXIgJiYgIWlzSmVzdCkge1xuICAgIHZhciBnbG9iYWxDb250ZXh0ID0gaXNCcm93c2VyID8gd2luZG93IDogZ2xvYmFsO1xuICAgIHZhciBnbG9iYWxLZXkgPSBcIl9fRU1PVElPTl9SRUFDVF9cIiArIHBrZy52ZXJzaW9uLnNwbGl0KCcuJylbMF0gKyBcIl9fXCI7XG5cbiAgICBpZiAoZ2xvYmFsQ29udGV4dFtnbG9iYWxLZXldKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ1lvdSBhcmUgbG9hZGluZyBAZW1vdGlvbi9yZWFjdCB3aGVuIGl0IGlzIGFscmVhZHkgbG9hZGVkLiBSdW5uaW5nICcgKyAnbXVsdGlwbGUgaW5zdGFuY2VzIG1heSBjYXVzZSBwcm9ibGVtcy4gVGhpcyBjYW4gaGFwcGVuIGlmIG11bHRpcGxlICcgKyAndmVyc2lvbnMgYXJlIHVzZWQsIG9yIGlmIG11bHRpcGxlIGJ1aWxkcyBvZiB0aGUgc2FtZSB2ZXJzaW9uIGFyZSAnICsgJ3VzZWQuJyk7XG4gICAgfVxuXG4gICAgZ2xvYmFsQ29udGV4dFtnbG9iYWxLZXldID0gdHJ1ZTtcbiAgfVxufVxuXG5leHBvcnQgeyBDbGFzc05hbWVzLCBHbG9iYWwsIGpzeCBhcyBjcmVhdGVFbGVtZW50LCBjc3MsIGpzeCwga2V5ZnJhbWVzIH07XG4iLCJpbXBvcnQgaG9pc3ROb25SZWFjdFN0YXRpY3MkMSBmcm9tICdob2lzdC1ub24tcmVhY3Qtc3RhdGljcyc7XG5cbi8vIHRoaXMgZmlsZSBpc29sYXRlcyB0aGlzIHBhY2thZ2UgdGhhdCBpcyBub3QgdHJlZS1zaGFrZWFibGVcbi8vIGFuZCBpZiB0aGlzIG1vZHVsZSBkb2Vzbid0IGFjdHVhbGx5IGNvbnRhaW4gYW55IGxvZ2ljIG9mIGl0cyBvd25cbi8vIHRoZW4gUm9sbHVwIGp1c3QgdXNlICdob2lzdC1ub24tcmVhY3Qtc3RhdGljcycgZGlyZWN0bHkgaW4gb3RoZXIgY2h1bmtzXG5cbnZhciBob2lzdE5vblJlYWN0U3RhdGljcyA9IChmdW5jdGlvbiAodGFyZ2V0Q29tcG9uZW50LCBzb3VyY2VDb21wb25lbnQpIHtcbiAgcmV0dXJuIGhvaXN0Tm9uUmVhY3RTdGF0aWNzJDEodGFyZ2V0Q29tcG9uZW50LCBzb3VyY2VDb21wb25lbnQpO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGhvaXN0Tm9uUmVhY3RTdGF0aWNzO1xuIiwiaW1wb3J0ICdyZWFjdCc7XG5pbXBvcnQgJ0BlbW90aW9uL2NhY2hlJztcbmltcG9ydCB7IGggYXMgaGFzT3duUHJvcGVydHksIEUgYXMgRW1vdGlvbiwgYyBhcyBjcmVhdGVFbW90aW9uUHJvcHMgfSBmcm9tICcuLi8uLi9kaXN0L2Vtb3Rpb24tZWxlbWVudC1hODMwOTA3MC5icm93c2VyLmVzbS5qcyc7XG5pbXBvcnQgJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcyc7XG5pbXBvcnQgJ0BlbW90aW9uL3dlYWstbWVtb2l6ZSc7XG5pbXBvcnQgJ2hvaXN0LW5vbi1yZWFjdC1zdGF0aWNzJztcbmltcG9ydCAnLi4vLi4vaXNvbGF0ZWQtaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3MtZG8tbm90LXVzZS10aGlzLWluLXlvdXItY29kZS9kaXN0L2Vtb3Rpb24tcmVhY3QtaXNvbGF0ZWQtaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3MtZG8tbm90LXVzZS10aGlzLWluLXlvdXItY29kZS5icm93c2VyLmVzbS5qcyc7XG5pbXBvcnQgJ0BlbW90aW9uL3V0aWxzJztcbmltcG9ydCAnQGVtb3Rpb24vc2VyaWFsaXplJztcbmltcG9ydCB7IEZyYWdtZW50IGFzIEZyYWdtZW50JDEsIGpzeERFViBhcyBqc3hERVYkMSB9IGZyb20gJ3JlYWN0L2pzeC1kZXYtcnVudGltZSc7XG5cbnZhciBGcmFnbWVudCA9IEZyYWdtZW50JDE7XG5mdW5jdGlvbiBqc3hERVYodHlwZSwgcHJvcHMsIGtleSwgaXNTdGF0aWNDaGlsZHJlbiwgc291cmNlLCBzZWxmKSB7XG4gIGlmICghaGFzT3duUHJvcGVydHkuY2FsbChwcm9wcywgJ2NzcycpKSB7XG4gICAgcmV0dXJuIGpzeERFViQxKHR5cGUsIHByb3BzLCBrZXksIGlzU3RhdGljQ2hpbGRyZW4sIHNvdXJjZSwgc2VsZik7XG4gIH1cblxuICByZXR1cm4ganN4REVWJDEoRW1vdGlvbiwgY3JlYXRlRW1vdGlvblByb3BzKHR5cGUsIHByb3BzKSwga2V5LCBpc1N0YXRpY0NoaWxkcmVuLCBzb3VyY2UsIHNlbGYpO1xufVxuXG5leHBvcnQgeyBGcmFnbWVudCwganN4REVWIH07XG4iLCJpbXBvcnQgeyBRdWVyeUNsaWVudCB9IGZyb20gXCJyZWFjdC1xdWVyeVwiO1xuXG5jb25zdCBxdWVyeUNsaWVudCA9IG5ldyBRdWVyeUNsaWVudCh7XG4gIGRlZmF1bHRPcHRpb25zOiB7fSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBxdWVyeUNsaWVudDtcbiIsImltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tIFwibmV4dC9hcHBcIjtcclxuaW1wb3J0IHsgUXVlcnlDbGllbnRQcm92aWRlciB9IGZyb20gXCJyZWFjdC1xdWVyeVwiO1xyXG5pbXBvcnQgcXVlcnlDbGllbnQgZnJvbSBcIi4uL2xpYnMvcXVlcnlDbGllbnRcIjtcclxuaW1wb3J0IGdsb2JhbFN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL3N0eWxlc1wiO1xyXG5cclxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7Z2xvYmFsU3R5bGVzfVxyXG4gICAgICA8UXVlcnlDbGllbnRQcm92aWRlciBjbGllbnQ9e3F1ZXJ5Q2xpZW50fT5cclxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgIDwvUXVlcnlDbGllbnRQcm92aWRlcj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XHJcbiIsImltcG9ydCB7IGNzcyB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xyXG5cclxuLyohIG5vcm1hbGl6ZS5jc3MgdjguMC4xIHwgTUlUIExpY2Vuc2UgfCBnaXRodWIuY29tL25lY29sYXMvbm9ybWFsaXplLmNzcyAqL1xyXG5cclxuLyogRG9jdW1lbnRcclxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbi8qKlxyXG4gKiAxLiBDb3JyZWN0IHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXHJcbiAqIDIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW4gaU9TLlxyXG4gKi9cclxuY29uc3QgY3NzTm9ybWFsaXplID0gY3NzYFxyXG4gIGh0bWwge1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cclxuICAgIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xyXG4gIH1cclxuXHJcbiAgLyogU2VjdGlvbnNcclxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbiAgLyoqXHJcbiAqIFJlbW92ZSB0aGUgbWFyZ2luIGluIGFsbCBicm93c2Vycy5cclxuICovXHJcblxyXG4gIGJvZHkge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAqIFJlbmRlciB0aGUgbWFpbiBlbGVtZW50IGNvbnNpc3RlbnRseSBpbiBJRS5cclxuICovXHJcblxyXG4gIG1haW4ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICogQ29ycmVjdCB0aGUgZm9udCBzaXplIGFuZCBtYXJnaW4gb24gaDEgZWxlbWVudHMgd2l0aGluIHNlY3Rpb24gYW5kXHJcbiAqIGFydGljbGUgY29udGV4dHMgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgU2FmYXJpLlxyXG4gKi9cclxuXHJcbiAgaDEge1xyXG4gICAgZm9udC1zaXplOiAyZW07XHJcbiAgICBtYXJnaW46IDAuNjdlbSAwO1xyXG4gIH1cclxuXHJcbiAgLyogR3JvdXBpbmcgY29udGVudFxyXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuICAvKipcclxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gRmlyZWZveC5cclxuICogMi4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZSBhbmQgSUUuXHJcbiAqL1xyXG5cclxuICBociB7XHJcbiAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDsgLyogMSAqL1xyXG4gICAgaGVpZ2h0OiAwOyAvKiAxICovXHJcbiAgICBvdmVyZmxvdzogdmlzaWJsZTsgLyogMiAqL1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXHJcbiAqIDIuIENvcnJlY3QgdGhlIG9kZCBlbSBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXHJcbiAqL1xyXG5cclxuICBwcmUge1xyXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXHJcbiAgICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xyXG4gIH1cclxuXHJcbiAgLyogVGV4dC1sZXZlbCBzZW1hbnRpY3NcclxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbiAgLyoqXHJcbiAqIFJlbW92ZSB0aGUgZ3JheSBiYWNrZ3JvdW5kIG9uIGFjdGl2ZSBsaW5rcyBpbiBJRSAxMC5cclxuICovXHJcblxyXG4gIGEge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICogMS4gUmVtb3ZlIHRoZSBib3R0b20gYm9yZGVyIGluIENocm9tZSA1Ny1cclxuICogMi4gQWRkIHRoZSBjb3JyZWN0IHRleHQgZGVjb3JhdGlvbiBpbiBDaHJvbWUsIEVkZ2UsIElFLCBPcGVyYSwgYW5kIFNhZmFyaS5cclxuICovXHJcblxyXG4gIGFiYnJbdGl0bGVdIHtcclxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7IC8qIDEgKi9cclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyAvKiAyICovXHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7IC8qIDIgKi9cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxyXG4gKi9cclxuXHJcbiAgYixcclxuICBzdHJvbmcge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxyXG4gKiAyLiBDb3JyZWN0IHRoZSBvZGQgZW0gZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxyXG4gKi9cclxuXHJcbiAgY29kZSxcclxuICBrYmQsXHJcbiAgc2FtcCB7XHJcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7IC8qIDEgKi9cclxuICAgIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXHJcbiAgfVxyXG5cclxuICAvKipcclxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXHJcbiAqL1xyXG5cclxuICBzbWFsbCB7XHJcbiAgICBmb250LXNpemU6IDgwJTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gKiBQcmV2ZW50IHN1YiBhbmQgc3VwIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIHRoZSBsaW5lIGhlaWdodCBpblxyXG4gKiBhbGwgYnJvd3NlcnMuXHJcbiAqL1xyXG5cclxuICBzdWIsXHJcbiAgc3VwIHtcclxuICAgIGZvbnQtc2l6ZTogNzUlO1xyXG4gICAgbGluZS1oZWlnaHQ6IDA7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XHJcbiAgfVxyXG5cclxuICBzdWIge1xyXG4gICAgYm90dG9tOiAtMC4yNWVtO1xyXG4gIH1cclxuXHJcbiAgc3VwIHtcclxuICAgIHRvcDogLTAuNWVtO1xyXG4gIH1cclxuXHJcbiAgLyogRW1iZWRkZWQgY29udGVudFxyXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuICAvKipcclxuICogUmVtb3ZlIHRoZSBib3JkZXIgb24gaW1hZ2VzIGluc2lkZSBsaW5rcyBpbiBJRSAxMC5cclxuICovXHJcblxyXG4gIGltZyB7XHJcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAvKiBGb3Jtc1xyXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuICAvKipcclxuICogMS4gQ2hhbmdlIHRoZSBmb250IHN0eWxlcyBpbiBhbGwgYnJvd3NlcnMuXHJcbiAqIDIuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cclxuICovXHJcblxyXG4gIGJ1dHRvbixcclxuICBpbnB1dCxcclxuICBvcHRncm91cCxcclxuICBzZWxlY3QsXHJcbiAgdGV4dGFyZWEge1xyXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7IC8qIDEgKi9cclxuICAgIGZvbnQtc2l6ZTogMTAwJTsgLyogMSAqL1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cclxuICAgIG1hcmdpbjogMDsgLyogMiAqL1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAqIFNob3cgdGhlIG92ZXJmbG93IGluIElFLlxyXG4gKiAxLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlLlxyXG4gKi9cclxuXHJcbiAgYnV0dG9uLFxyXG4gIGlucHV0IHtcclxuICAgIC8qIDEgKi9cclxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAqIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSwgRmlyZWZveCwgYW5kIElFLlxyXG4gKiAxLiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEZpcmVmb3guXHJcbiAqL1xyXG5cclxuICBidXR0b24sXHJcbiAgc2VsZWN0IHtcclxuICAgIC8qIDEgKi9cclxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAqIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXHJcbiAqL1xyXG5cclxuICBidXR0b24sXHJcbiAgW3R5cGU9XCJidXR0b25cIl0sXHJcbiAgW3R5cGU9XCJyZXNldFwiXSxcclxuICBbdHlwZT1cInN1Ym1pdFwiXSB7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gKiBSZW1vdmUgdGhlIGlubmVyIGJvcmRlciBhbmQgcGFkZGluZyBpbiBGaXJlZm94LlxyXG4gKi9cclxuXHJcbiAgYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxyXG4gIFt0eXBlPVwiYnV0dG9uXCJdOjotbW96LWZvY3VzLWlubmVyLFxyXG4gIFt0eXBlPVwicmVzZXRcIl06Oi1tb3otZm9jdXMtaW5uZXIsXHJcbiAgW3R5cGU9XCJzdWJtaXRcIl06Oi1tb3otZm9jdXMtaW5uZXIge1xyXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gKiBSZXN0b3JlIHRoZSBmb2N1cyBzdHlsZXMgdW5zZXQgYnkgdGhlIHByZXZpb3VzIHJ1bGUuXHJcbiAqL1xyXG5cclxuICBidXR0b246LW1vei1mb2N1c3JpbmcsXHJcbiAgW3R5cGU9XCJidXR0b25cIl06LW1vei1mb2N1c3JpbmcsXHJcbiAgW3R5cGU9XCJyZXNldFwiXTotbW96LWZvY3VzcmluZyxcclxuICBbdHlwZT1cInN1Ym1pdFwiXTotbW96LWZvY3VzcmluZyB7XHJcbiAgICBvdXRsaW5lOiAxcHggZG90dGVkIEJ1dHRvblRleHQ7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICogQ29ycmVjdCB0aGUgcGFkZGluZyBpbiBGaXJlZm94LlxyXG4gKi9cclxuXHJcbiAgZmllbGRzZXQge1xyXG4gICAgcGFkZGluZzogMC4zNWVtIDAuNzVlbSAwLjYyNWVtO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAqIDEuIENvcnJlY3QgdGhlIHRleHQgd3JhcHBpbmcgaW4gRWRnZSBhbmQgSUUuXHJcbiAqIDIuIENvcnJlY3QgdGhlIGNvbG9yIGluaGVyaXRhbmNlIGZyb20gZmllbGRzZXQgZWxlbWVudHMgaW4gSUUuXHJcbiAqIDMuIFJlbW92ZSB0aGUgcGFkZGluZyBzbyBkZXZlbG9wZXJzIGFyZSBub3QgY2F1Z2h0IG91dCB3aGVuIHRoZXkgemVybyBvdXRcclxuICogICAgZmllbGRzZXQgZWxlbWVudHMgaW4gYWxsIGJyb3dzZXJzLlxyXG4gKi9cclxuXHJcbiAgbGVnZW5kIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cclxuICAgIGNvbG9yOiBpbmhlcml0OyAvKiAyICovXHJcbiAgICBkaXNwbGF5OiB0YWJsZTsgLyogMSAqL1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlOyAvKiAxICovXHJcbiAgICBwYWRkaW5nOiAwOyAvKiAzICovXHJcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsOyAvKiAxICovXHJcbiAgfVxyXG5cclxuICAvKipcclxuICogQWRkIHRoZSBjb3JyZWN0IHZlcnRpY2FsIGFsaWdubWVudCBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBPcGVyYS5cclxuICovXHJcblxyXG4gIHByb2dyZXNzIHtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gKiBSZW1vdmUgdGhlIGRlZmF1bHQgdmVydGljYWwgc2Nyb2xsYmFyIGluIElFIDEwKy5cclxuICovXHJcblxyXG4gIHRleHRhcmVhIHtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIElFIDEwLlxyXG4gKiAyLiBSZW1vdmUgdGhlIHBhZGRpbmcgaW4gSUUgMTAuXHJcbiAqL1xyXG5cclxuICBbdHlwZT1cImNoZWNrYm94XCJdLFxyXG4gIFt0eXBlPVwicmFkaW9cIl0ge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xyXG4gICAgcGFkZGluZzogMDsgLyogMiAqL1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAqIENvcnJlY3QgdGhlIGN1cnNvciBzdHlsZSBvZiBpbmNyZW1lbnQgYW5kIGRlY3JlbWVudCBidXR0b25zIGluIENocm9tZS5cclxuICovXHJcblxyXG4gIFt0eXBlPVwibnVtYmVyXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxyXG4gIFt0eXBlPVwibnVtYmVyXCJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcclxuICAgIGhlaWdodDogYXV0bztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gKiAxLiBDb3JyZWN0IHRoZSBvZGQgYXBwZWFyYW5jZSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cclxuICogMi4gQ29ycmVjdCB0aGUgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkuXHJcbiAqL1xyXG5cclxuICBbdHlwZT1cInNlYXJjaFwiXSB7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDsgLyogMSAqL1xyXG4gICAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7IC8qIDIgKi9cclxuICB9XHJcblxyXG4gIC8qIFJlbW92ZSB0aGUgaW5uZXIgcGFkZGluZyBpbiBDaHJvbWUgYW5kIFNhZmFyaSBvbiBtYWNPUy4gKi9cclxuXHJcbiAgW3R5cGU9XCJzZWFyY2hcIl06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAqIDEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXHJcbiAqIDIuIENoYW5nZSBmb250IHByb3BlcnRpZXMgdG8gaW5oZXJpdCBpbiBTYWZhcmkuXHJcbiAqL1xyXG5cclxuICA6Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAxICovXHJcbiAgICBmb250OiBpbmhlcml0OyAvKiAyICovXHJcbiAgfVxyXG5cclxuICAvKiBJbnRlcmFjdGl2ZVxyXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuICAvKlxyXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBFZGdlLCBJRSAxMCssIGFuZCBGaXJlZm94LlxyXG4gKi9cclxuXHJcbiAgZGV0YWlscyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcblxyXG4gIC8qXHJcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIGFsbCBicm93c2Vycy5cclxuICovXHJcblxyXG4gIHN1bW1hcnkge1xyXG4gICAgZGlzcGxheTogbGlzdC1pdGVtO1xyXG4gIH1cclxuXHJcbiAgLyogTWlzY1xyXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuICAvKipcclxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTArLlxyXG4gKi9cclxuXHJcbiAgdGVtcGxhdGUge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMC5cclxuICovXHJcblxyXG4gIFtoaWRkZW5dIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3NzTm9ybWFsaXplO1xyXG4iLCJpbXBvcnQgeyBHbG9iYWwgfSBmcm9tIFwiQGVtb3Rpb24vcmVhY3RcIjtcclxuaW1wb3J0IGNzc05vcm1hbGl6ZSBmcm9tIFwiLi9jc3NOb3JtYWxpemVcIjtcclxuXHJcbmNvbnN0IGdsb2JhbFN0eWxlcyA9IDxHbG9iYWwgc3R5bGVzPXtjc3NOb3JtYWxpemV9IC8+O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2xvYmFsU3R5bGVzO1xyXG4iLCJcbiAgICAod2luZG93Ll9fTkVYVF9QID0gd2luZG93Ll9fTkVYVF9QIHx8IFtdKS5wdXNoKFtcbiAgICAgIFwiL19hcHBcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHJlcXVpcmUoXCJwcml2YXRlLW5leHQtcGFnZXMvX2FwcC50c3hcIik7XG4gICAgICB9XG4gICAgXSk7XG4gICIsImltcG9ydCBfaW5oZXJpdHNMb29zZSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHNMb29zZVwiO1xuaW1wb3J0IHsgU3Vic2NyaWJhYmxlIH0gZnJvbSAnLi9zdWJzY3JpYmFibGUnO1xuaW1wb3J0IHsgaXNTZXJ2ZXIgfSBmcm9tICcuL3V0aWxzJztcblxudmFyIEZvY3VzTWFuYWdlciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1N1YnNjcmliYWJsZSkge1xuICBfaW5oZXJpdHNMb29zZShGb2N1c01hbmFnZXIsIF9TdWJzY3JpYmFibGUpO1xuXG4gIGZ1bmN0aW9uIEZvY3VzTWFuYWdlcigpIHtcbiAgICByZXR1cm4gX1N1YnNjcmliYWJsZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gRm9jdXNNYW5hZ2VyLnByb3RvdHlwZTtcblxuICBfcHJvdG8ub25TdWJzY3JpYmUgPSBmdW5jdGlvbiBvblN1YnNjcmliZSgpIHtcbiAgICBpZiAoIXRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcikge1xuICAgICAgdGhpcy5zZXREZWZhdWx0RXZlbnRMaXN0ZW5lcigpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uc2V0RXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uIHNldEV2ZW50TGlzdGVuZXIoc2V0dXApIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgaWYgKHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcikge1xuICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKCk7XG4gICAgfVxuXG4gICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyID0gc2V0dXAoZnVuY3Rpb24gKGZvY3VzZWQpIHtcbiAgICAgIGlmICh0eXBlb2YgZm9jdXNlZCA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgIF90aGlzLnNldEZvY3VzZWQoZm9jdXNlZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBfdGhpcy5vbkZvY3VzKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLnNldEZvY3VzZWQgPSBmdW5jdGlvbiBzZXRGb2N1c2VkKGZvY3VzZWQpIHtcbiAgICB0aGlzLmZvY3VzZWQgPSBmb2N1c2VkO1xuXG4gICAgaWYgKGZvY3VzZWQpIHtcbiAgICAgIHRoaXMub25Gb2N1cygpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8ub25Gb2N1cyA9IGZ1bmN0aW9uIG9uRm9jdXMoKSB7XG4gICAgdGhpcy5saXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbiAobGlzdGVuZXIpIHtcbiAgICAgIGxpc3RlbmVyKCk7XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLmlzRm9jdXNlZCA9IGZ1bmN0aW9uIGlzRm9jdXNlZCgpIHtcbiAgICBpZiAodHlwZW9mIHRoaXMuZm9jdXNlZCA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICByZXR1cm4gdGhpcy5mb2N1c2VkO1xuICAgIH0gLy8gZG9jdW1lbnQgZ2xvYmFsIGNhbiBiZSB1bmF2YWlsYWJsZSBpbiByZWFjdCBuYXRpdmVcblxuXG4gICAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBbdW5kZWZpbmVkLCAndmlzaWJsZScsICdwcmVyZW5kZXInXS5pbmNsdWRlcyhkb2N1bWVudC52aXNpYmlsaXR5U3RhdGUpO1xuICB9O1xuXG4gIF9wcm90by5zZXREZWZhdWx0RXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uIHNldERlZmF1bHRFdmVudExpc3RlbmVyKCkge1xuICAgIHZhciBfd2luZG93O1xuXG4gICAgaWYgKCFpc1NlcnZlciAmJiAoKF93aW5kb3cgPSB3aW5kb3cpID09IG51bGwgPyB2b2lkIDAgOiBfd2luZG93LmFkZEV2ZW50TGlzdGVuZXIpKSB7XG4gICAgICB0aGlzLnNldEV2ZW50TGlzdGVuZXIoZnVuY3Rpb24gKG9uRm9jdXMpIHtcbiAgICAgICAgdmFyIGxpc3RlbmVyID0gZnVuY3Rpb24gbGlzdGVuZXIoKSB7XG4gICAgICAgICAgcmV0dXJuIG9uRm9jdXMoKTtcbiAgICAgICAgfTsgLy8gTGlzdGVuIHRvIHZpc2liaWxsaXR5Y2hhbmdlIGFuZCBmb2N1c1xuXG5cbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Zpc2liaWxpdHljaGFuZ2UnLCBsaXN0ZW5lciwgZmFsc2UpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBsaXN0ZW5lciwgZmFsc2UpO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIC8vIEJlIHN1cmUgdG8gdW5zdWJzY3JpYmUgaWYgYSBuZXcgaGFuZGxlciBpcyBzZXRcbiAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigndmlzaWJpbGl0eWNoYW5nZScsIGxpc3RlbmVyKTtcbiAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBsaXN0ZW5lcik7XG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIEZvY3VzTWFuYWdlcjtcbn0oU3Vic2NyaWJhYmxlKTtcblxuZXhwb3J0IHZhciBmb2N1c01hbmFnZXIgPSBuZXcgRm9jdXNNYW5hZ2VyKCk7IiwiZXhwb3J0IHsgQ2FuY2VsbGVkRXJyb3IgfSBmcm9tICcuL3JldHJ5ZXInO1xuZXhwb3J0IHsgUXVlcnlDYWNoZSB9IGZyb20gJy4vcXVlcnlDYWNoZSc7XG5leHBvcnQgeyBRdWVyeUNsaWVudCB9IGZyb20gJy4vcXVlcnlDbGllbnQnO1xuZXhwb3J0IHsgUXVlcnlPYnNlcnZlciB9IGZyb20gJy4vcXVlcnlPYnNlcnZlcic7XG5leHBvcnQgeyBRdWVyaWVzT2JzZXJ2ZXIgfSBmcm9tICcuL3F1ZXJpZXNPYnNlcnZlcic7XG5leHBvcnQgeyBJbmZpbml0ZVF1ZXJ5T2JzZXJ2ZXIgfSBmcm9tICcuL2luZmluaXRlUXVlcnlPYnNlcnZlcic7XG5leHBvcnQgeyBNdXRhdGlvbkNhY2hlIH0gZnJvbSAnLi9tdXRhdGlvbkNhY2hlJztcbmV4cG9ydCB7IE11dGF0aW9uT2JzZXJ2ZXIgfSBmcm9tICcuL211dGF0aW9uT2JzZXJ2ZXInO1xuZXhwb3J0IHsgc2V0TG9nZ2VyIH0gZnJvbSAnLi9sb2dnZXInO1xuZXhwb3J0IHsgbm90aWZ5TWFuYWdlciB9IGZyb20gJy4vbm90aWZ5TWFuYWdlcic7XG5leHBvcnQgeyBmb2N1c01hbmFnZXIgfSBmcm9tICcuL2ZvY3VzTWFuYWdlcic7XG5leHBvcnQgeyBvbmxpbmVNYW5hZ2VyIH0gZnJvbSAnLi9vbmxpbmVNYW5hZ2VyJztcbmV4cG9ydCB7IGhhc2hRdWVyeUtleSwgaXNFcnJvciB9IGZyb20gJy4vdXRpbHMnO1xuZXhwb3J0IHsgaXNDYW5jZWxsZWRFcnJvciB9IGZyb20gJy4vcmV0cnllcic7IC8vIFR5cGVzXG5cbmV4cG9ydCAqIGZyb20gJy4vdHlwZXMnOyIsImltcG9ydCB7IGlzQ2FuY2VsYWJsZSB9IGZyb20gJy4vcmV0cnllcic7XG5leHBvcnQgZnVuY3Rpb24gaW5maW5pdGVRdWVyeUJlaGF2aW9yKCkge1xuICByZXR1cm4ge1xuICAgIG9uRmV0Y2g6IGZ1bmN0aW9uIG9uRmV0Y2goY29udGV4dCkge1xuICAgICAgY29udGV4dC5mZXRjaEZuID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX2NvbnRleHQkZmV0Y2hPcHRpb25zLCBfY29udGV4dCRmZXRjaE9wdGlvbnMyLCBfY29udGV4dCRzdGF0ZSRkYXRhLCBfY29udGV4dCRzdGF0ZSRkYXRhMjtcblxuICAgICAgICB2YXIgZmV0Y2hNb3JlID0gKF9jb250ZXh0JGZldGNoT3B0aW9ucyA9IGNvbnRleHQuZmV0Y2hPcHRpb25zKSA9PSBudWxsID8gdm9pZCAwIDogKF9jb250ZXh0JGZldGNoT3B0aW9uczIgPSBfY29udGV4dCRmZXRjaE9wdGlvbnMubWV0YSkgPT0gbnVsbCA/IHZvaWQgMCA6IF9jb250ZXh0JGZldGNoT3B0aW9uczIuZmV0Y2hNb3JlO1xuICAgICAgICB2YXIgcGFnZVBhcmFtID0gZmV0Y2hNb3JlID09IG51bGwgPyB2b2lkIDAgOiBmZXRjaE1vcmUucGFnZVBhcmFtO1xuICAgICAgICB2YXIgaXNGZXRjaGluZ05leHRQYWdlID0gKGZldGNoTW9yZSA9PSBudWxsID8gdm9pZCAwIDogZmV0Y2hNb3JlLmRpcmVjdGlvbikgPT09ICdmb3J3YXJkJztcbiAgICAgICAgdmFyIGlzRmV0Y2hpbmdQcmV2aW91c1BhZ2UgPSAoZmV0Y2hNb3JlID09IG51bGwgPyB2b2lkIDAgOiBmZXRjaE1vcmUuZGlyZWN0aW9uKSA9PT0gJ2JhY2t3YXJkJztcbiAgICAgICAgdmFyIG9sZFBhZ2VzID0gKChfY29udGV4dCRzdGF0ZSRkYXRhID0gY29udGV4dC5zdGF0ZS5kYXRhKSA9PSBudWxsID8gdm9pZCAwIDogX2NvbnRleHQkc3RhdGUkZGF0YS5wYWdlcykgfHwgW107XG4gICAgICAgIHZhciBvbGRQYWdlUGFyYW1zID0gKChfY29udGV4dCRzdGF0ZSRkYXRhMiA9IGNvbnRleHQuc3RhdGUuZGF0YSkgPT0gbnVsbCA/IHZvaWQgMCA6IF9jb250ZXh0JHN0YXRlJGRhdGEyLnBhZ2VQYXJhbXMpIHx8IFtdO1xuICAgICAgICB2YXIgbmV3UGFnZVBhcmFtcyA9IG9sZFBhZ2VQYXJhbXM7XG4gICAgICAgIHZhciBjYW5jZWxsZWQgPSBmYWxzZTsgLy8gR2V0IHF1ZXJ5IGZ1bmN0aW9uXG5cbiAgICAgICAgdmFyIHF1ZXJ5Rm4gPSBjb250ZXh0Lm9wdGlvbnMucXVlcnlGbiB8fCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KCdNaXNzaW5nIHF1ZXJ5Rm4nKTtcbiAgICAgICAgfTsgLy8gQ3JlYXRlIGZ1bmN0aW9uIHRvIGZldGNoIGEgcGFnZVxuXG5cbiAgICAgICAgdmFyIGZldGNoUGFnZSA9IGZ1bmN0aW9uIGZldGNoUGFnZShwYWdlcywgbWFudWFsLCBwYXJhbSwgcHJldmlvdXMpIHtcbiAgICAgICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoJ0NhbmNlbGxlZCcpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh0eXBlb2YgcGFyYW0gPT09ICd1bmRlZmluZWQnICYmICFtYW51YWwgJiYgcGFnZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHBhZ2VzKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgcXVlcnlGbkNvbnRleHQgPSB7XG4gICAgICAgICAgICBxdWVyeUtleTogY29udGV4dC5xdWVyeUtleSxcbiAgICAgICAgICAgIHBhZ2VQYXJhbTogcGFyYW1cbiAgICAgICAgICB9O1xuICAgICAgICAgIHZhciBxdWVyeUZuUmVzdWx0ID0gcXVlcnlGbihxdWVyeUZuQ29udGV4dCk7XG4gICAgICAgICAgdmFyIHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUocXVlcnlGblJlc3VsdCkudGhlbihmdW5jdGlvbiAocGFnZSkge1xuICAgICAgICAgICAgbmV3UGFnZVBhcmFtcyA9IHByZXZpb3VzID8gW3BhcmFtXS5jb25jYXQobmV3UGFnZVBhcmFtcykgOiBbXS5jb25jYXQobmV3UGFnZVBhcmFtcywgW3BhcmFtXSk7XG4gICAgICAgICAgICByZXR1cm4gcHJldmlvdXMgPyBbcGFnZV0uY29uY2F0KHBhZ2VzKSA6IFtdLmNvbmNhdChwYWdlcywgW3BhZ2VdKTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGlmIChpc0NhbmNlbGFibGUocXVlcnlGblJlc3VsdCkpIHtcbiAgICAgICAgICAgIHZhciBwcm9taXNlQXNBbnkgPSBwcm9taXNlO1xuICAgICAgICAgICAgcHJvbWlzZUFzQW55LmNhbmNlbCA9IHF1ZXJ5Rm5SZXN1bHQuY2FuY2VsO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgICAgICB9O1xuXG4gICAgICAgIHZhciBwcm9taXNlOyAvLyBGZXRjaCBmaXJzdCBwYWdlP1xuXG4gICAgICAgIGlmICghb2xkUGFnZXMubGVuZ3RoKSB7XG4gICAgICAgICAgcHJvbWlzZSA9IGZldGNoUGFnZShbXSk7XG4gICAgICAgIH0gLy8gRmV0Y2ggbmV4dCBwYWdlP1xuICAgICAgICBlbHNlIGlmIChpc0ZldGNoaW5nTmV4dFBhZ2UpIHtcbiAgICAgICAgICAgIHZhciBtYW51YWwgPSB0eXBlb2YgcGFnZVBhcmFtICE9PSAndW5kZWZpbmVkJztcbiAgICAgICAgICAgIHZhciBwYXJhbSA9IG1hbnVhbCA/IHBhZ2VQYXJhbSA6IGdldE5leHRQYWdlUGFyYW0oY29udGV4dC5vcHRpb25zLCBvbGRQYWdlcyk7XG4gICAgICAgICAgICBwcm9taXNlID0gZmV0Y2hQYWdlKG9sZFBhZ2VzLCBtYW51YWwsIHBhcmFtKTtcbiAgICAgICAgICB9IC8vIEZldGNoIHByZXZpb3VzIHBhZ2U/XG4gICAgICAgICAgZWxzZSBpZiAoaXNGZXRjaGluZ1ByZXZpb3VzUGFnZSkge1xuICAgICAgICAgICAgICB2YXIgX21hbnVhbCA9IHR5cGVvZiBwYWdlUGFyYW0gIT09ICd1bmRlZmluZWQnO1xuXG4gICAgICAgICAgICAgIHZhciBfcGFyYW0gPSBfbWFudWFsID8gcGFnZVBhcmFtIDogZ2V0UHJldmlvdXNQYWdlUGFyYW0oY29udGV4dC5vcHRpb25zLCBvbGRQYWdlcyk7XG5cbiAgICAgICAgICAgICAgcHJvbWlzZSA9IGZldGNoUGFnZShvbGRQYWdlcywgX21hbnVhbCwgX3BhcmFtLCB0cnVlKTtcbiAgICAgICAgICAgIH0gLy8gUmVmZXRjaCBwYWdlc1xuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgIG5ld1BhZ2VQYXJhbXMgPSBbXTtcbiAgICAgICAgICAgICAgICAgIHZhciBtYW51YWwgPSB0eXBlb2YgY29udGV4dC5vcHRpb25zLmdldE5leHRQYWdlUGFyYW0gPT09ICd1bmRlZmluZWQnOyAvLyBGZXRjaCBmaXJzdCBwYWdlXG5cbiAgICAgICAgICAgICAgICAgIHByb21pc2UgPSBmZXRjaFBhZ2UoW10sIG1hbnVhbCwgb2xkUGFnZVBhcmFtc1swXSk7IC8vIEZldGNoIHJlbWFpbmluZyBwYWdlc1xuXG4gICAgICAgICAgICAgICAgICB2YXIgX2xvb3AgPSBmdW5jdGlvbiBfbG9vcChpKSB7XG4gICAgICAgICAgICAgICAgICAgIHByb21pc2UgPSBwcm9taXNlLnRoZW4oZnVuY3Rpb24gKHBhZ2VzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFyIHBhcmFtID0gbWFudWFsID8gb2xkUGFnZVBhcmFtc1tpXSA6IGdldE5leHRQYWdlUGFyYW0oY29udGV4dC5vcHRpb25zLCBwYWdlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZldGNoUGFnZShwYWdlcywgbWFudWFsLCBwYXJhbSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBvbGRQYWdlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBfbG9vcChpKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KSgpO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgdmFyIGZpbmFsUHJvbWlzZSA9IHByb21pc2UudGhlbihmdW5jdGlvbiAocGFnZXMpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcGFnZXM6IHBhZ2VzLFxuICAgICAgICAgICAgcGFnZVBhcmFtczogbmV3UGFnZVBhcmFtc1xuICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgZmluYWxQcm9taXNlQXNBbnkgPSBmaW5hbFByb21pc2U7XG5cbiAgICAgICAgZmluYWxQcm9taXNlQXNBbnkuY2FuY2VsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGNhbmNlbGxlZCA9IHRydWU7XG5cbiAgICAgICAgICBpZiAoaXNDYW5jZWxhYmxlKHByb21pc2UpKSB7XG4gICAgICAgICAgICBwcm9taXNlLmNhbmNlbCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gZmluYWxQcm9taXNlO1xuICAgICAgfTtcbiAgICB9XG4gIH07XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0TmV4dFBhZ2VQYXJhbShvcHRpb25zLCBwYWdlcykge1xuICByZXR1cm4gb3B0aW9ucy5nZXROZXh0UGFnZVBhcmFtID09IG51bGwgPyB2b2lkIDAgOiBvcHRpb25zLmdldE5leHRQYWdlUGFyYW0ocGFnZXNbcGFnZXMubGVuZ3RoIC0gMV0sIHBhZ2VzKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRQcmV2aW91c1BhZ2VQYXJhbShvcHRpb25zLCBwYWdlcykge1xuICByZXR1cm4gb3B0aW9ucy5nZXRQcmV2aW91c1BhZ2VQYXJhbSA9PSBudWxsID8gdm9pZCAwIDogb3B0aW9ucy5nZXRQcmV2aW91c1BhZ2VQYXJhbShwYWdlc1swXSwgcGFnZXMpO1xufVxuLyoqXG4gKiBDaGVja3MgaWYgdGhlcmUgaXMgYSBuZXh0IHBhZ2UuXG4gKiBSZXR1cm5zIGB1bmRlZmluZWRgIGlmIGl0IGNhbm5vdCBiZSBkZXRlcm1pbmVkLlxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBoYXNOZXh0UGFnZShvcHRpb25zLCBwYWdlcykge1xuICBpZiAob3B0aW9ucy5nZXROZXh0UGFnZVBhcmFtICYmIEFycmF5LmlzQXJyYXkocGFnZXMpKSB7XG4gICAgdmFyIG5leHRQYWdlUGFyYW0gPSBnZXROZXh0UGFnZVBhcmFtKG9wdGlvbnMsIHBhZ2VzKTtcbiAgICByZXR1cm4gdHlwZW9mIG5leHRQYWdlUGFyYW0gIT09ICd1bmRlZmluZWQnICYmIG5leHRQYWdlUGFyYW0gIT09IG51bGwgJiYgbmV4dFBhZ2VQYXJhbSAhPT0gZmFsc2U7XG4gIH1cbn1cbi8qKlxuICogQ2hlY2tzIGlmIHRoZXJlIGlzIGEgcHJldmlvdXMgcGFnZS5cbiAqIFJldHVybnMgYHVuZGVmaW5lZGAgaWYgaXQgY2Fubm90IGJlIGRldGVybWluZWQuXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGhhc1ByZXZpb3VzUGFnZShvcHRpb25zLCBwYWdlcykge1xuICBpZiAob3B0aW9ucy5nZXRQcmV2aW91c1BhZ2VQYXJhbSAmJiBBcnJheS5pc0FycmF5KHBhZ2VzKSkge1xuICAgIHZhciBwcmV2aW91c1BhZ2VQYXJhbSA9IGdldFByZXZpb3VzUGFnZVBhcmFtKG9wdGlvbnMsIHBhZ2VzKTtcbiAgICByZXR1cm4gdHlwZW9mIHByZXZpb3VzUGFnZVBhcmFtICE9PSAndW5kZWZpbmVkJyAmJiBwcmV2aW91c1BhZ2VQYXJhbSAhPT0gbnVsbCAmJiBwcmV2aW91c1BhZ2VQYXJhbSAhPT0gZmFsc2U7XG4gIH1cbn0iLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfaW5oZXJpdHNMb29zZSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHNMb29zZVwiO1xuaW1wb3J0IHsgUXVlcnlPYnNlcnZlciB9IGZyb20gJy4vcXVlcnlPYnNlcnZlcic7XG5pbXBvcnQgeyBoYXNOZXh0UGFnZSwgaGFzUHJldmlvdXNQYWdlLCBpbmZpbml0ZVF1ZXJ5QmVoYXZpb3IgfSBmcm9tICcuL2luZmluaXRlUXVlcnlCZWhhdmlvcic7XG5leHBvcnQgdmFyIEluZmluaXRlUXVlcnlPYnNlcnZlciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1F1ZXJ5T2JzZXJ2ZXIpIHtcbiAgX2luaGVyaXRzTG9vc2UoSW5maW5pdGVRdWVyeU9ic2VydmVyLCBfUXVlcnlPYnNlcnZlcik7XG5cbiAgLy8gVHlwZSBvdmVycmlkZVxuICAvLyBUeXBlIG92ZXJyaWRlXG4gIC8vIFR5cGUgb3ZlcnJpZGVcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11c2VsZXNzLWNvbnN0cnVjdG9yXG4gIGZ1bmN0aW9uIEluZmluaXRlUXVlcnlPYnNlcnZlcihjbGllbnQsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gX1F1ZXJ5T2JzZXJ2ZXIuY2FsbCh0aGlzLCBjbGllbnQsIG9wdGlvbnMpIHx8IHRoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gSW5maW5pdGVRdWVyeU9ic2VydmVyLnByb3RvdHlwZTtcblxuICBfcHJvdG8uYmluZE1ldGhvZHMgPSBmdW5jdGlvbiBiaW5kTWV0aG9kcygpIHtcbiAgICBfUXVlcnlPYnNlcnZlci5wcm90b3R5cGUuYmluZE1ldGhvZHMuY2FsbCh0aGlzKTtcblxuICAgIHRoaXMuZmV0Y2hOZXh0UGFnZSA9IHRoaXMuZmV0Y2hOZXh0UGFnZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZmV0Y2hQcmV2aW91c1BhZ2UgPSB0aGlzLmZldGNoUHJldmlvdXNQYWdlLmJpbmQodGhpcyk7XG4gIH07XG5cbiAgX3Byb3RvLnNldE9wdGlvbnMgPSBmdW5jdGlvbiBzZXRPcHRpb25zKG9wdGlvbnMpIHtcbiAgICBfUXVlcnlPYnNlcnZlci5wcm90b3R5cGUuc2V0T3B0aW9ucy5jYWxsKHRoaXMsIF9leHRlbmRzKHt9LCBvcHRpb25zLCB7XG4gICAgICBiZWhhdmlvcjogaW5maW5pdGVRdWVyeUJlaGF2aW9yKClcbiAgICB9KSk7XG4gIH07XG5cbiAgX3Byb3RvLmdldE9wdGltaXN0aWNSZXN1bHQgPSBmdW5jdGlvbiBnZXRPcHRpbWlzdGljUmVzdWx0KG9wdGlvbnMpIHtcbiAgICBvcHRpb25zLmJlaGF2aW9yID0gaW5maW5pdGVRdWVyeUJlaGF2aW9yKCk7XG4gICAgcmV0dXJuIF9RdWVyeU9ic2VydmVyLnByb3RvdHlwZS5nZXRPcHRpbWlzdGljUmVzdWx0LmNhbGwodGhpcywgb3B0aW9ucyk7XG4gIH07XG5cbiAgX3Byb3RvLmZldGNoTmV4dFBhZ2UgPSBmdW5jdGlvbiBmZXRjaE5leHRQYWdlKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdGhpcy5mZXRjaCh7XG4gICAgICBjYW5jZWxSZWZldGNoOiB0cnVlLFxuICAgICAgdGhyb3dPbkVycm9yOiBvcHRpb25zID09IG51bGwgPyB2b2lkIDAgOiBvcHRpb25zLnRocm93T25FcnJvcixcbiAgICAgIG1ldGE6IHtcbiAgICAgICAgZmV0Y2hNb3JlOiB7XG4gICAgICAgICAgZGlyZWN0aW9uOiAnZm9yd2FyZCcsXG4gICAgICAgICAgcGFnZVBhcmFtOiBvcHRpb25zID09IG51bGwgPyB2b2lkIDAgOiBvcHRpb25zLnBhZ2VQYXJhbVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLmZldGNoUHJldmlvdXNQYWdlID0gZnVuY3Rpb24gZmV0Y2hQcmV2aW91c1BhZ2Uob3B0aW9ucykge1xuICAgIHJldHVybiB0aGlzLmZldGNoKHtcbiAgICAgIGNhbmNlbFJlZmV0Y2g6IHRydWUsXG4gICAgICB0aHJvd09uRXJyb3I6IG9wdGlvbnMgPT0gbnVsbCA/IHZvaWQgMCA6IG9wdGlvbnMudGhyb3dPbkVycm9yLFxuICAgICAgbWV0YToge1xuICAgICAgICBmZXRjaE1vcmU6IHtcbiAgICAgICAgICBkaXJlY3Rpb246ICdiYWNrd2FyZCcsXG4gICAgICAgICAgcGFnZVBhcmFtOiBvcHRpb25zID09IG51bGwgPyB2b2lkIDAgOiBvcHRpb25zLnBhZ2VQYXJhbVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLmNyZWF0ZVJlc3VsdCA9IGZ1bmN0aW9uIGNyZWF0ZVJlc3VsdChxdWVyeSwgb3B0aW9ucykge1xuICAgIHZhciBfc3RhdGUkZGF0YSwgX3N0YXRlJGRhdGEyLCBfc3RhdGUkZmV0Y2hNZXRhLCBfc3RhdGUkZmV0Y2hNZXRhJGZldGMsIF9zdGF0ZSRmZXRjaE1ldGEyLCBfc3RhdGUkZmV0Y2hNZXRhMiRmZXQ7XG5cbiAgICB2YXIgc3RhdGUgPSBxdWVyeS5zdGF0ZTtcblxuICAgIHZhciByZXN1bHQgPSBfUXVlcnlPYnNlcnZlci5wcm90b3R5cGUuY3JlYXRlUmVzdWx0LmNhbGwodGhpcywgcXVlcnksIG9wdGlvbnMpO1xuXG4gICAgcmV0dXJuIF9leHRlbmRzKHt9LCByZXN1bHQsIHtcbiAgICAgIGZldGNoTmV4dFBhZ2U6IHRoaXMuZmV0Y2hOZXh0UGFnZSxcbiAgICAgIGZldGNoUHJldmlvdXNQYWdlOiB0aGlzLmZldGNoUHJldmlvdXNQYWdlLFxuICAgICAgaGFzTmV4dFBhZ2U6IGhhc05leHRQYWdlKG9wdGlvbnMsIChfc3RhdGUkZGF0YSA9IHN0YXRlLmRhdGEpID09IG51bGwgPyB2b2lkIDAgOiBfc3RhdGUkZGF0YS5wYWdlcyksXG4gICAgICBoYXNQcmV2aW91c1BhZ2U6IGhhc1ByZXZpb3VzUGFnZShvcHRpb25zLCAoX3N0YXRlJGRhdGEyID0gc3RhdGUuZGF0YSkgPT0gbnVsbCA/IHZvaWQgMCA6IF9zdGF0ZSRkYXRhMi5wYWdlcyksXG4gICAgICBpc0ZldGNoaW5nTmV4dFBhZ2U6IHN0YXRlLmlzRmV0Y2hpbmcgJiYgKChfc3RhdGUkZmV0Y2hNZXRhID0gc3RhdGUuZmV0Y2hNZXRhKSA9PSBudWxsID8gdm9pZCAwIDogKF9zdGF0ZSRmZXRjaE1ldGEkZmV0YyA9IF9zdGF0ZSRmZXRjaE1ldGEuZmV0Y2hNb3JlKSA9PSBudWxsID8gdm9pZCAwIDogX3N0YXRlJGZldGNoTWV0YSRmZXRjLmRpcmVjdGlvbikgPT09ICdmb3J3YXJkJyxcbiAgICAgIGlzRmV0Y2hpbmdQcmV2aW91c1BhZ2U6IHN0YXRlLmlzRmV0Y2hpbmcgJiYgKChfc3RhdGUkZmV0Y2hNZXRhMiA9IHN0YXRlLmZldGNoTWV0YSkgPT0gbnVsbCA/IHZvaWQgMCA6IChfc3RhdGUkZmV0Y2hNZXRhMiRmZXQgPSBfc3RhdGUkZmV0Y2hNZXRhMi5mZXRjaE1vcmUpID09IG51bGwgPyB2b2lkIDAgOiBfc3RhdGUkZmV0Y2hNZXRhMiRmZXQuZGlyZWN0aW9uKSA9PT0gJ2JhY2t3YXJkJ1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiBJbmZpbml0ZVF1ZXJ5T2JzZXJ2ZXI7XG59KFF1ZXJ5T2JzZXJ2ZXIpOyIsImltcG9ydCB7IG5vb3AgfSBmcm9tICcuL3V0aWxzJzsgLy8gVFlQRVNcblxuLy8gRlVOQ1RJT05TXG52YXIgbG9nZ2VyID0gY29uc29sZSB8fCB7XG4gIGVycm9yOiBub29wLFxuICB3YXJuOiBub29wLFxuICBsb2c6IG5vb3Bcbn07XG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9nZ2VyKCkge1xuICByZXR1cm4gbG9nZ2VyO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNldExvZ2dlcihuZXdMb2dnZXIpIHtcbiAgbG9nZ2VyID0gbmV3TG9nZ2VyO1xufSIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IHsgZ2V0TG9nZ2VyIH0gZnJvbSAnLi9sb2dnZXInO1xuaW1wb3J0IHsgbm90aWZ5TWFuYWdlciB9IGZyb20gJy4vbm90aWZ5TWFuYWdlcic7XG5pbXBvcnQgeyBSZXRyeWVyIH0gZnJvbSAnLi9yZXRyeWVyJztcbmltcG9ydCB7IG5vb3AgfSBmcm9tICcuL3V0aWxzJzsgLy8gVFlQRVNcblxuLy8gQ0xBU1NcbmV4cG9ydCB2YXIgTXV0YXRpb24gPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBNdXRhdGlvbihjb25maWcpIHtcbiAgICB0aGlzLm9wdGlvbnMgPSBfZXh0ZW5kcyh7fSwgY29uZmlnLmRlZmF1bHRPcHRpb25zLCBjb25maWcub3B0aW9ucyk7XG4gICAgdGhpcy5tdXRhdGlvbklkID0gY29uZmlnLm11dGF0aW9uSWQ7XG4gICAgdGhpcy5tdXRhdGlvbkNhY2hlID0gY29uZmlnLm11dGF0aW9uQ2FjaGU7XG4gICAgdGhpcy5vYnNlcnZlcnMgPSBbXTtcbiAgICB0aGlzLnN0YXRlID0gY29uZmlnLnN0YXRlIHx8IGdldERlZmF1bHRTdGF0ZSgpO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IE11dGF0aW9uLnByb3RvdHlwZTtcblxuICBfcHJvdG8uc2V0U3RhdGUgPSBmdW5jdGlvbiBzZXRTdGF0ZShzdGF0ZSkge1xuICAgIHRoaXMuZGlzcGF0Y2goe1xuICAgICAgdHlwZTogJ3NldFN0YXRlJyxcbiAgICAgIHN0YXRlOiBzdGF0ZVxuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5hZGRPYnNlcnZlciA9IGZ1bmN0aW9uIGFkZE9ic2VydmVyKG9ic2VydmVyKSB7XG4gICAgaWYgKHRoaXMub2JzZXJ2ZXJzLmluZGV4T2Yob2JzZXJ2ZXIpID09PSAtMSkge1xuICAgICAgdGhpcy5vYnNlcnZlcnMucHVzaChvYnNlcnZlcik7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5yZW1vdmVPYnNlcnZlciA9IGZ1bmN0aW9uIHJlbW92ZU9ic2VydmVyKG9ic2VydmVyKSB7XG4gICAgdGhpcy5vYnNlcnZlcnMgPSB0aGlzLm9ic2VydmVycy5maWx0ZXIoZnVuY3Rpb24gKHgpIHtcbiAgICAgIHJldHVybiB4ICE9PSBvYnNlcnZlcjtcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8uY2FuY2VsID0gZnVuY3Rpb24gY2FuY2VsKCkge1xuICAgIGlmICh0aGlzLnJldHJ5ZXIpIHtcbiAgICAgIHRoaXMucmV0cnllci5jYW5jZWwoKTtcbiAgICAgIHJldHVybiB0aGlzLnJldHJ5ZXIucHJvbWlzZS50aGVuKG5vb3ApLmNhdGNoKG5vb3ApO1xuICAgIH1cblxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgfTtcblxuICBfcHJvdG8uY29udGludWUgPSBmdW5jdGlvbiBfY29udGludWUoKSB7XG4gICAgaWYgKHRoaXMucmV0cnllcikge1xuICAgICAgdGhpcy5yZXRyeWVyLmNvbnRpbnVlKCk7XG4gICAgICByZXR1cm4gdGhpcy5yZXRyeWVyLnByb21pc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuZXhlY3V0ZSgpO1xuICB9O1xuXG4gIF9wcm90by5leGVjdXRlID0gZnVuY3Rpb24gZXhlY3V0ZSgpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgdmFyIGRhdGE7XG4gICAgdmFyIHJlc3RvcmVkID0gdGhpcy5zdGF0ZS5zdGF0dXMgPT09ICdsb2FkaW5nJztcbiAgICB2YXIgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSgpO1xuXG4gICAgaWYgKCFyZXN0b3JlZCkge1xuICAgICAgdGhpcy5kaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6ICdsb2FkaW5nJyxcbiAgICAgICAgdmFyaWFibGVzOiB0aGlzLm9wdGlvbnMudmFyaWFibGVzXG4gICAgICB9KTtcbiAgICAgIHByb21pc2UgPSBwcm9taXNlLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX3RoaXMub3B0aW9ucy5vbk11dGF0ZSA9PSBudWxsID8gdm9pZCAwIDogX3RoaXMub3B0aW9ucy5vbk11dGF0ZShfdGhpcy5zdGF0ZS52YXJpYWJsZXMpO1xuICAgICAgfSkudGhlbihmdW5jdGlvbiAoY29udGV4dCkge1xuICAgICAgICBpZiAoY29udGV4dCAhPT0gX3RoaXMuc3RhdGUuY29udGV4dCkge1xuICAgICAgICAgIF90aGlzLmRpc3BhdGNoKHtcbiAgICAgICAgICAgIHR5cGU6ICdsb2FkaW5nJyxcbiAgICAgICAgICAgIGNvbnRleHQ6IGNvbnRleHQsXG4gICAgICAgICAgICB2YXJpYWJsZXM6IF90aGlzLnN0YXRlLnZhcmlhYmxlc1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvbWlzZS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBfdGhpcy5leGVjdXRlTXV0YXRpb24oKTtcbiAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgIGRhdGEgPSByZXN1bHQ7IC8vIE5vdGlmeSBjYWNoZSBjYWxsYmFja1xuXG4gICAgICBfdGhpcy5tdXRhdGlvbkNhY2hlLmNvbmZpZy5vblN1Y2Nlc3MgPT0gbnVsbCA/IHZvaWQgMCA6IF90aGlzLm11dGF0aW9uQ2FjaGUuY29uZmlnLm9uU3VjY2VzcyhkYXRhLCBfdGhpcy5zdGF0ZS52YXJpYWJsZXMsIF90aGlzLnN0YXRlLmNvbnRleHQsIF90aGlzKTtcbiAgICB9KS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBfdGhpcy5vcHRpb25zLm9uU3VjY2VzcyA9PSBudWxsID8gdm9pZCAwIDogX3RoaXMub3B0aW9ucy5vblN1Y2Nlc3MoZGF0YSwgX3RoaXMuc3RhdGUudmFyaWFibGVzLCBfdGhpcy5zdGF0ZS5jb250ZXh0KTtcbiAgICB9KS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBfdGhpcy5vcHRpb25zLm9uU2V0dGxlZCA9PSBudWxsID8gdm9pZCAwIDogX3RoaXMub3B0aW9ucy5vblNldHRsZWQoZGF0YSwgbnVsbCwgX3RoaXMuc3RhdGUudmFyaWFibGVzLCBfdGhpcy5zdGF0ZS5jb250ZXh0KTtcbiAgICB9KS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzLmRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogJ3N1Y2Nlc3MnLFxuICAgICAgICBkYXRhOiBkYXRhXG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAvLyBOb3RpZnkgY2FjaGUgY2FsbGJhY2tcbiAgICAgIF90aGlzLm11dGF0aW9uQ2FjaGUuY29uZmlnLm9uRXJyb3IgPT0gbnVsbCA/IHZvaWQgMCA6IF90aGlzLm11dGF0aW9uQ2FjaGUuY29uZmlnLm9uRXJyb3IoZXJyb3IsIF90aGlzLnN0YXRlLnZhcmlhYmxlcywgX3RoaXMuc3RhdGUuY29udGV4dCwgX3RoaXMpOyAvLyBMb2cgZXJyb3JcblxuICAgICAgZ2V0TG9nZ2VyKCkuZXJyb3IoZXJyb3IpO1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX3RoaXMub3B0aW9ucy5vbkVycm9yID09IG51bGwgPyB2b2lkIDAgOiBfdGhpcy5vcHRpb25zLm9uRXJyb3IoZXJyb3IsIF90aGlzLnN0YXRlLnZhcmlhYmxlcywgX3RoaXMuc3RhdGUuY29udGV4dCk7XG4gICAgICB9KS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLm9wdGlvbnMub25TZXR0bGVkID09IG51bGwgPyB2b2lkIDAgOiBfdGhpcy5vcHRpb25zLm9uU2V0dGxlZCh1bmRlZmluZWQsIGVycm9yLCBfdGhpcy5zdGF0ZS52YXJpYWJsZXMsIF90aGlzLnN0YXRlLmNvbnRleHQpO1xuICAgICAgfSkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzLmRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiAnZXJyb3InLFxuICAgICAgICAgIGVycm9yOiBlcnJvclxuICAgICAgICB9KTtcblxuICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5leGVjdXRlTXV0YXRpb24gPSBmdW5jdGlvbiBleGVjdXRlTXV0YXRpb24oKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXMsXG4gICAgICAgIF90aGlzJG9wdGlvbnMkcmV0cnk7XG5cbiAgICB0aGlzLnJldHJ5ZXIgPSBuZXcgUmV0cnllcih7XG4gICAgICBmbjogZnVuY3Rpb24gZm4oKSB7XG4gICAgICAgIGlmICghX3RoaXMyLm9wdGlvbnMubXV0YXRpb25Gbikge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdCgnTm8gbXV0YXRpb25GbiBmb3VuZCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIF90aGlzMi5vcHRpb25zLm11dGF0aW9uRm4oX3RoaXMyLnN0YXRlLnZhcmlhYmxlcyk7XG4gICAgICB9LFxuICAgICAgb25GYWlsOiBmdW5jdGlvbiBvbkZhaWwoKSB7XG4gICAgICAgIF90aGlzMi5kaXNwYXRjaCh7XG4gICAgICAgICAgdHlwZTogJ2ZhaWxlZCdcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgb25QYXVzZTogZnVuY3Rpb24gb25QYXVzZSgpIHtcbiAgICAgICAgX3RoaXMyLmRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiAncGF1c2UnXG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIG9uQ29udGludWU6IGZ1bmN0aW9uIG9uQ29udGludWUoKSB7XG4gICAgICAgIF90aGlzMi5kaXNwYXRjaCh7XG4gICAgICAgICAgdHlwZTogJ2NvbnRpbnVlJ1xuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICByZXRyeTogKF90aGlzJG9wdGlvbnMkcmV0cnkgPSB0aGlzLm9wdGlvbnMucmV0cnkpICE9IG51bGwgPyBfdGhpcyRvcHRpb25zJHJldHJ5IDogMCxcbiAgICAgIHJldHJ5RGVsYXk6IHRoaXMub3B0aW9ucy5yZXRyeURlbGF5XG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXMucmV0cnllci5wcm9taXNlO1xuICB9O1xuXG4gIF9wcm90by5kaXNwYXRjaCA9IGZ1bmN0aW9uIGRpc3BhdGNoKGFjdGlvbikge1xuICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHJlZHVjZXIodGhpcy5zdGF0ZSwgYWN0aW9uKTtcbiAgICBub3RpZnlNYW5hZ2VyLmJhdGNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzMy5vYnNlcnZlcnMuZm9yRWFjaChmdW5jdGlvbiAob2JzZXJ2ZXIpIHtcbiAgICAgICAgb2JzZXJ2ZXIub25NdXRhdGlvblVwZGF0ZShhY3Rpb24pO1xuICAgICAgfSk7XG5cbiAgICAgIF90aGlzMy5tdXRhdGlvbkNhY2hlLm5vdGlmeShfdGhpczMpO1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiBNdXRhdGlvbjtcbn0oKTtcbmV4cG9ydCBmdW5jdGlvbiBnZXREZWZhdWx0U3RhdGUoKSB7XG4gIHJldHVybiB7XG4gICAgY29udGV4dDogdW5kZWZpbmVkLFxuICAgIGRhdGE6IHVuZGVmaW5lZCxcbiAgICBlcnJvcjogbnVsbCxcbiAgICBmYWlsdXJlQ291bnQ6IDAsXG4gICAgaXNQYXVzZWQ6IGZhbHNlLFxuICAgIHN0YXR1czogJ2lkbGUnLFxuICAgIHZhcmlhYmxlczogdW5kZWZpbmVkXG4gIH07XG59XG5cbmZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUsIGFjdGlvbikge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSAnZmFpbGVkJzpcbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgZmFpbHVyZUNvdW50OiBzdGF0ZS5mYWlsdXJlQ291bnQgKyAxXG4gICAgICB9KTtcblxuICAgIGNhc2UgJ3BhdXNlJzpcbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgaXNQYXVzZWQ6IHRydWVcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAnY29udGludWUnOlxuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgICBpc1BhdXNlZDogZmFsc2VcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAnbG9hZGluZyc6XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgICAgIGNvbnRleHQ6IGFjdGlvbi5jb250ZXh0LFxuICAgICAgICBkYXRhOiB1bmRlZmluZWQsXG4gICAgICAgIGVycm9yOiBudWxsLFxuICAgICAgICBpc1BhdXNlZDogZmFsc2UsXG4gICAgICAgIHN0YXR1czogJ2xvYWRpbmcnLFxuICAgICAgICB2YXJpYWJsZXM6IGFjdGlvbi52YXJpYWJsZXNcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAnc3VjY2Vzcyc6XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgICAgIGRhdGE6IGFjdGlvbi5kYXRhLFxuICAgICAgICBlcnJvcjogbnVsbCxcbiAgICAgICAgc3RhdHVzOiAnc3VjY2VzcycsXG4gICAgICAgIGlzUGF1c2VkOiBmYWxzZVxuICAgICAgfSk7XG5cbiAgICBjYXNlICdlcnJvcic6XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgICAgIGRhdGE6IHVuZGVmaW5lZCxcbiAgICAgICAgZXJyb3I6IGFjdGlvbi5lcnJvcixcbiAgICAgICAgZmFpbHVyZUNvdW50OiBzdGF0ZS5mYWlsdXJlQ291bnQgKyAxLFxuICAgICAgICBpc1BhdXNlZDogZmFsc2UsXG4gICAgICAgIHN0YXR1czogJ2Vycm9yJ1xuICAgICAgfSk7XG5cbiAgICBjYXNlICdzZXRTdGF0ZSc6XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCBhY3Rpb24uc3RhdGUpO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufSIsImltcG9ydCBfaW5oZXJpdHNMb29zZSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHNMb29zZVwiO1xuaW1wb3J0IHsgbm90aWZ5TWFuYWdlciB9IGZyb20gJy4vbm90aWZ5TWFuYWdlcic7XG5pbXBvcnQgeyBNdXRhdGlvbiB9IGZyb20gJy4vbXV0YXRpb24nO1xuaW1wb3J0IHsgbWF0Y2hNdXRhdGlvbiwgbm9vcCB9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHsgU3Vic2NyaWJhYmxlIH0gZnJvbSAnLi9zdWJzY3JpYmFibGUnOyAvLyBUWVBFU1xuXG4vLyBDTEFTU1xuZXhwb3J0IHZhciBNdXRhdGlvbkNhY2hlID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfU3Vic2NyaWJhYmxlKSB7XG4gIF9pbmhlcml0c0xvb3NlKE11dGF0aW9uQ2FjaGUsIF9TdWJzY3JpYmFibGUpO1xuXG4gIGZ1bmN0aW9uIE11dGF0aW9uQ2FjaGUoY29uZmlnKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX3RoaXMgPSBfU3Vic2NyaWJhYmxlLmNhbGwodGhpcykgfHwgdGhpcztcbiAgICBfdGhpcy5jb25maWcgPSBjb25maWcgfHwge307XG4gICAgX3RoaXMubXV0YXRpb25zID0gW107XG4gICAgX3RoaXMubXV0YXRpb25JZCA9IDA7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IE11dGF0aW9uQ2FjaGUucHJvdG90eXBlO1xuXG4gIF9wcm90by5idWlsZCA9IGZ1bmN0aW9uIGJ1aWxkKGNsaWVudCwgb3B0aW9ucywgc3RhdGUpIHtcbiAgICB2YXIgbXV0YXRpb24gPSBuZXcgTXV0YXRpb24oe1xuICAgICAgbXV0YXRpb25DYWNoZTogdGhpcyxcbiAgICAgIG11dGF0aW9uSWQ6ICsrdGhpcy5tdXRhdGlvbklkLFxuICAgICAgb3B0aW9uczogY2xpZW50LmRlZmF1bHRNdXRhdGlvbk9wdGlvbnMob3B0aW9ucyksXG4gICAgICBzdGF0ZTogc3RhdGUsXG4gICAgICBkZWZhdWx0T3B0aW9uczogb3B0aW9ucy5tdXRhdGlvbktleSA/IGNsaWVudC5nZXRNdXRhdGlvbkRlZmF1bHRzKG9wdGlvbnMubXV0YXRpb25LZXkpIDogdW5kZWZpbmVkXG4gICAgfSk7XG4gICAgdGhpcy5hZGQobXV0YXRpb24pO1xuICAgIHJldHVybiBtdXRhdGlvbjtcbiAgfTtcblxuICBfcHJvdG8uYWRkID0gZnVuY3Rpb24gYWRkKG11dGF0aW9uKSB7XG4gICAgdGhpcy5tdXRhdGlvbnMucHVzaChtdXRhdGlvbik7XG4gICAgdGhpcy5ub3RpZnkobXV0YXRpb24pO1xuICB9O1xuXG4gIF9wcm90by5yZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUobXV0YXRpb24pIHtcbiAgICB0aGlzLm11dGF0aW9ucyA9IHRoaXMubXV0YXRpb25zLmZpbHRlcihmdW5jdGlvbiAoeCkge1xuICAgICAgcmV0dXJuIHggIT09IG11dGF0aW9uO1xuICAgIH0pO1xuICAgIG11dGF0aW9uLmNhbmNlbCgpO1xuICAgIHRoaXMubm90aWZ5KG11dGF0aW9uKTtcbiAgfTtcblxuICBfcHJvdG8uY2xlYXIgPSBmdW5jdGlvbiBjbGVhcigpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIG5vdGlmeU1hbmFnZXIuYmF0Y2goZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMyLm11dGF0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChtdXRhdGlvbikge1xuICAgICAgICBfdGhpczIucmVtb3ZlKG11dGF0aW9uKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5nZXRBbGwgPSBmdW5jdGlvbiBnZXRBbGwoKSB7XG4gICAgcmV0dXJuIHRoaXMubXV0YXRpb25zO1xuICB9O1xuXG4gIF9wcm90by5maW5kID0gZnVuY3Rpb24gZmluZChmaWx0ZXJzKSB7XG4gICAgaWYgKHR5cGVvZiBmaWx0ZXJzLmV4YWN0ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgZmlsdGVycy5leGFjdCA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMubXV0YXRpb25zLmZpbmQoZnVuY3Rpb24gKG11dGF0aW9uKSB7XG4gICAgICByZXR1cm4gbWF0Y2hNdXRhdGlvbihmaWx0ZXJzLCBtdXRhdGlvbik7XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLmZpbmRBbGwgPSBmdW5jdGlvbiBmaW5kQWxsKGZpbHRlcnMpIHtcbiAgICByZXR1cm4gdGhpcy5tdXRhdGlvbnMuZmlsdGVyKGZ1bmN0aW9uIChtdXRhdGlvbikge1xuICAgICAgcmV0dXJuIG1hdGNoTXV0YXRpb24oZmlsdGVycywgbXV0YXRpb24pO1xuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5ub3RpZnkgPSBmdW5jdGlvbiBub3RpZnkobXV0YXRpb24pIHtcbiAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgIG5vdGlmeU1hbmFnZXIuYmF0Y2goZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMzLmxpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uIChsaXN0ZW5lcikge1xuICAgICAgICBsaXN0ZW5lcihtdXRhdGlvbik7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8ub25Gb2N1cyA9IGZ1bmN0aW9uIG9uRm9jdXMoKSB7XG4gICAgdGhpcy5yZXN1bWVQYXVzZWRNdXRhdGlvbnMoKTtcbiAgfTtcblxuICBfcHJvdG8ub25PbmxpbmUgPSBmdW5jdGlvbiBvbk9ubGluZSgpIHtcbiAgICB0aGlzLnJlc3VtZVBhdXNlZE11dGF0aW9ucygpO1xuICB9O1xuXG4gIF9wcm90by5yZXN1bWVQYXVzZWRNdXRhdGlvbnMgPSBmdW5jdGlvbiByZXN1bWVQYXVzZWRNdXRhdGlvbnMoKSB7XG4gICAgdmFyIHBhdXNlZE11dGF0aW9ucyA9IHRoaXMubXV0YXRpb25zLmZpbHRlcihmdW5jdGlvbiAoeCkge1xuICAgICAgcmV0dXJuIHguc3RhdGUuaXNQYXVzZWQ7XG4gICAgfSk7XG4gICAgcmV0dXJuIG5vdGlmeU1hbmFnZXIuYmF0Y2goZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHBhdXNlZE11dGF0aW9ucy5yZWR1Y2UoZnVuY3Rpb24gKHByb21pc2UsIG11dGF0aW9uKSB7XG4gICAgICAgIHJldHVybiBwcm9taXNlLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBtdXRhdGlvbi5jb250aW51ZSgpLmNhdGNoKG5vb3ApO1xuICAgICAgICB9KTtcbiAgICAgIH0sIFByb21pc2UucmVzb2x2ZSgpKTtcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gTXV0YXRpb25DYWNoZTtcbn0oU3Vic2NyaWJhYmxlKTsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfaW5oZXJpdHNMb29zZSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHNMb29zZVwiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdFN0YXRlIH0gZnJvbSAnLi9tdXRhdGlvbic7XG5pbXBvcnQgeyBub3RpZnlNYW5hZ2VyIH0gZnJvbSAnLi9ub3RpZnlNYW5hZ2VyJztcbmltcG9ydCB7IFN1YnNjcmliYWJsZSB9IGZyb20gJy4vc3Vic2NyaWJhYmxlJztcbi8vIENMQVNTXG5leHBvcnQgdmFyIE11dGF0aW9uT2JzZXJ2ZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9TdWJzY3JpYmFibGUpIHtcbiAgX2luaGVyaXRzTG9vc2UoTXV0YXRpb25PYnNlcnZlciwgX1N1YnNjcmliYWJsZSk7XG5cbiAgZnVuY3Rpb24gTXV0YXRpb25PYnNlcnZlcihjbGllbnQsIG9wdGlvbnMpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfdGhpcyA9IF9TdWJzY3JpYmFibGUuY2FsbCh0aGlzKSB8fCB0aGlzO1xuICAgIF90aGlzLmNsaWVudCA9IGNsaWVudDtcblxuICAgIF90aGlzLnNldE9wdGlvbnMob3B0aW9ucyk7XG5cbiAgICBfdGhpcy5iaW5kTWV0aG9kcygpO1xuXG4gICAgX3RoaXMudXBkYXRlUmVzdWx0KCk7XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gTXV0YXRpb25PYnNlcnZlci5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmJpbmRNZXRob2RzID0gZnVuY3Rpb24gYmluZE1ldGhvZHMoKSB7XG4gICAgdGhpcy5tdXRhdGUgPSB0aGlzLm11dGF0ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMucmVzZXQgPSB0aGlzLnJlc2V0LmJpbmQodGhpcyk7XG4gIH07XG5cbiAgX3Byb3RvLnNldE9wdGlvbnMgPSBmdW5jdGlvbiBzZXRPcHRpb25zKG9wdGlvbnMpIHtcbiAgICB0aGlzLm9wdGlvbnMgPSB0aGlzLmNsaWVudC5kZWZhdWx0TXV0YXRpb25PcHRpb25zKG9wdGlvbnMpO1xuICB9O1xuXG4gIF9wcm90by5vblVuc3Vic2NyaWJlID0gZnVuY3Rpb24gb25VbnN1YnNjcmliZSgpIHtcbiAgICBpZiAoIXRoaXMubGlzdGVuZXJzLmxlbmd0aCkge1xuICAgICAgdmFyIF90aGlzJGN1cnJlbnRNdXRhdGlvbjtcblxuICAgICAgKF90aGlzJGN1cnJlbnRNdXRhdGlvbiA9IHRoaXMuY3VycmVudE11dGF0aW9uKSA9PSBudWxsID8gdm9pZCAwIDogX3RoaXMkY3VycmVudE11dGF0aW9uLnJlbW92ZU9ic2VydmVyKHRoaXMpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8ub25NdXRhdGlvblVwZGF0ZSA9IGZ1bmN0aW9uIG9uTXV0YXRpb25VcGRhdGUoYWN0aW9uKSB7XG4gICAgdGhpcy51cGRhdGVSZXN1bHQoKTsgLy8gRGV0ZXJtaW5lIHdoaWNoIGNhbGxiYWNrcyB0byB0cmlnZ2VyXG5cbiAgICB2YXIgbm90aWZ5T3B0aW9ucyA9IHtcbiAgICAgIGxpc3RlbmVyczogdHJ1ZVxuICAgIH07XG5cbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09ICdzdWNjZXNzJykge1xuICAgICAgbm90aWZ5T3B0aW9ucy5vblN1Y2Nlc3MgPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAoYWN0aW9uLnR5cGUgPT09ICdlcnJvcicpIHtcbiAgICAgIG5vdGlmeU9wdGlvbnMub25FcnJvciA9IHRydWU7XG4gICAgfVxuXG4gICAgdGhpcy5ub3RpZnkobm90aWZ5T3B0aW9ucyk7XG4gIH07XG5cbiAgX3Byb3RvLmdldEN1cnJlbnRSZXN1bHQgPSBmdW5jdGlvbiBnZXRDdXJyZW50UmVzdWx0KCkge1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnRSZXN1bHQ7XG4gIH07XG5cbiAgX3Byb3RvLnJlc2V0ID0gZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgdGhpcy5jdXJyZW50TXV0YXRpb24gPSB1bmRlZmluZWQ7XG4gICAgdGhpcy51cGRhdGVSZXN1bHQoKTtcbiAgICB0aGlzLm5vdGlmeSh7XG4gICAgICBsaXN0ZW5lcnM6IHRydWVcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8ubXV0YXRlID0gZnVuY3Rpb24gbXV0YXRlKHZhcmlhYmxlcywgb3B0aW9ucykge1xuICAgIHRoaXMubXV0YXRlT3B0aW9ucyA9IG9wdGlvbnM7XG5cbiAgICBpZiAodGhpcy5jdXJyZW50TXV0YXRpb24pIHtcbiAgICAgIHRoaXMuY3VycmVudE11dGF0aW9uLnJlbW92ZU9ic2VydmVyKHRoaXMpO1xuICAgIH1cblxuICAgIHRoaXMuY3VycmVudE11dGF0aW9uID0gdGhpcy5jbGllbnQuZ2V0TXV0YXRpb25DYWNoZSgpLmJ1aWxkKHRoaXMuY2xpZW50LCBfZXh0ZW5kcyh7fSwgdGhpcy5vcHRpb25zLCB7XG4gICAgICB2YXJpYWJsZXM6IHR5cGVvZiB2YXJpYWJsZXMgIT09ICd1bmRlZmluZWQnID8gdmFyaWFibGVzIDogdGhpcy5vcHRpb25zLnZhcmlhYmxlc1xuICAgIH0pKTtcbiAgICB0aGlzLmN1cnJlbnRNdXRhdGlvbi5hZGRPYnNlcnZlcih0aGlzKTtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50TXV0YXRpb24uZXhlY3V0ZSgpO1xuICB9O1xuXG4gIF9wcm90by51cGRhdGVSZXN1bHQgPSBmdW5jdGlvbiB1cGRhdGVSZXN1bHQoKSB7XG4gICAgdmFyIHN0YXRlID0gdGhpcy5jdXJyZW50TXV0YXRpb24gPyB0aGlzLmN1cnJlbnRNdXRhdGlvbi5zdGF0ZSA6IGdldERlZmF1bHRTdGF0ZSgpO1xuICAgIHRoaXMuY3VycmVudFJlc3VsdCA9IF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgaXNMb2FkaW5nOiBzdGF0ZS5zdGF0dXMgPT09ICdsb2FkaW5nJyxcbiAgICAgIGlzU3VjY2Vzczogc3RhdGUuc3RhdHVzID09PSAnc3VjY2VzcycsXG4gICAgICBpc0Vycm9yOiBzdGF0ZS5zdGF0dXMgPT09ICdlcnJvcicsXG4gICAgICBpc0lkbGU6IHN0YXRlLnN0YXR1cyA9PT0gJ2lkbGUnLFxuICAgICAgbXV0YXRlOiB0aGlzLm11dGF0ZSxcbiAgICAgIHJlc2V0OiB0aGlzLnJlc2V0XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLm5vdGlmeSA9IGZ1bmN0aW9uIG5vdGlmeShvcHRpb25zKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICBub3RpZnlNYW5hZ2VyLmJhdGNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIEZpcnN0IHRyaWdnZXIgdGhlIG11dGF0ZSBjYWxsYmFja3NcbiAgICAgIGlmIChfdGhpczIubXV0YXRlT3B0aW9ucykge1xuICAgICAgICBpZiAob3B0aW9ucy5vblN1Y2Nlc3MpIHtcbiAgICAgICAgICBfdGhpczIubXV0YXRlT3B0aW9ucy5vblN1Y2Nlc3MgPT0gbnVsbCA/IHZvaWQgMCA6IF90aGlzMi5tdXRhdGVPcHRpb25zLm9uU3VjY2VzcyhfdGhpczIuY3VycmVudFJlc3VsdC5kYXRhLCBfdGhpczIuY3VycmVudFJlc3VsdC52YXJpYWJsZXMsIF90aGlzMi5jdXJyZW50UmVzdWx0LmNvbnRleHQpO1xuICAgICAgICAgIF90aGlzMi5tdXRhdGVPcHRpb25zLm9uU2V0dGxlZCA9PSBudWxsID8gdm9pZCAwIDogX3RoaXMyLm11dGF0ZU9wdGlvbnMub25TZXR0bGVkKF90aGlzMi5jdXJyZW50UmVzdWx0LmRhdGEsIG51bGwsIF90aGlzMi5jdXJyZW50UmVzdWx0LnZhcmlhYmxlcywgX3RoaXMyLmN1cnJlbnRSZXN1bHQuY29udGV4dCk7XG4gICAgICAgIH0gZWxzZSBpZiAob3B0aW9ucy5vbkVycm9yKSB7XG4gICAgICAgICAgX3RoaXMyLm11dGF0ZU9wdGlvbnMub25FcnJvciA9PSBudWxsID8gdm9pZCAwIDogX3RoaXMyLm11dGF0ZU9wdGlvbnMub25FcnJvcihfdGhpczIuY3VycmVudFJlc3VsdC5lcnJvciwgX3RoaXMyLmN1cnJlbnRSZXN1bHQudmFyaWFibGVzLCBfdGhpczIuY3VycmVudFJlc3VsdC5jb250ZXh0KTtcbiAgICAgICAgICBfdGhpczIubXV0YXRlT3B0aW9ucy5vblNldHRsZWQgPT0gbnVsbCA/IHZvaWQgMCA6IF90aGlzMi5tdXRhdGVPcHRpb25zLm9uU2V0dGxlZCh1bmRlZmluZWQsIF90aGlzMi5jdXJyZW50UmVzdWx0LmVycm9yLCBfdGhpczIuY3VycmVudFJlc3VsdC52YXJpYWJsZXMsIF90aGlzMi5jdXJyZW50UmVzdWx0LmNvbnRleHQpO1xuICAgICAgICB9XG4gICAgICB9IC8vIFRoZW4gdHJpZ2dlciB0aGUgbGlzdGVuZXJzXG5cblxuICAgICAgaWYgKG9wdGlvbnMubGlzdGVuZXJzKSB7XG4gICAgICAgIF90aGlzMi5saXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbiAobGlzdGVuZXIpIHtcbiAgICAgICAgICBsaXN0ZW5lcihfdGhpczIuY3VycmVudFJlc3VsdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiBNdXRhdGlvbk9ic2VydmVyO1xufShTdWJzY3JpYmFibGUpOyIsImltcG9ydCB7IHNjaGVkdWxlTWljcm90YXNrIH0gZnJvbSAnLi91dGlscyc7IC8vIFRZUEVTXG5cbi8vIENMQVNTXG52YXIgTm90aWZ5TWFuYWdlciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIE5vdGlmeU1hbmFnZXIoKSB7XG4gICAgdGhpcy5xdWV1ZSA9IFtdO1xuICAgIHRoaXMudHJhbnNhY3Rpb25zID0gMDtcblxuICAgIHRoaXMubm90aWZ5Rm4gPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgIGNhbGxiYWNrKCk7XG4gICAgfTtcblxuICAgIHRoaXMuYmF0Y2hOb3RpZnlGbiA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgY2FsbGJhY2soKTtcbiAgICB9O1xuICB9XG5cbiAgdmFyIF9wcm90byA9IE5vdGlmeU1hbmFnZXIucHJvdG90eXBlO1xuXG4gIF9wcm90by5iYXRjaCA9IGZ1bmN0aW9uIGJhdGNoKGNhbGxiYWNrKSB7XG4gICAgdGhpcy50cmFuc2FjdGlvbnMrKztcbiAgICB2YXIgcmVzdWx0ID0gY2FsbGJhY2soKTtcbiAgICB0aGlzLnRyYW5zYWN0aW9ucy0tO1xuXG4gICAgaWYgKCF0aGlzLnRyYW5zYWN0aW9ucykge1xuICAgICAgdGhpcy5mbHVzaCgpO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgX3Byb3RvLnNjaGVkdWxlID0gZnVuY3Rpb24gc2NoZWR1bGUoY2FsbGJhY2spIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgaWYgKHRoaXMudHJhbnNhY3Rpb25zKSB7XG4gICAgICB0aGlzLnF1ZXVlLnB1c2goY2FsbGJhY2spO1xuICAgIH0gZWxzZSB7XG4gICAgICBzY2hlZHVsZU1pY3JvdGFzayhmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzLm5vdGlmeUZuKGNhbGxiYWNrKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogQWxsIGNhbGxzIHRvIHRoZSB3cmFwcGVkIGZ1bmN0aW9uIHdpbGwgYmUgYmF0Y2hlZC5cbiAgICovXG4gIDtcblxuICBfcHJvdG8uYmF0Y2hDYWxscyA9IGZ1bmN0aW9uIGJhdGNoQ2FsbHMoY2FsbGJhY2spIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgIH1cblxuICAgICAgX3RoaXMyLnNjaGVkdWxlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2FsbGJhY2suYXBwbHkodm9pZCAwLCBhcmdzKTtcbiAgICAgIH0pO1xuICAgIH07XG4gIH07XG5cbiAgX3Byb3RvLmZsdXNoID0gZnVuY3Rpb24gZmx1c2goKSB7XG4gICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICB2YXIgcXVldWUgPSB0aGlzLnF1ZXVlO1xuICAgIHRoaXMucXVldWUgPSBbXTtcblxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgIHNjaGVkdWxlTWljcm90YXNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXMzLmJhdGNoTm90aWZ5Rm4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHF1ZXVlLmZvckVhY2goZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICBfdGhpczMubm90aWZ5Rm4oY2FsbGJhY2spO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogVXNlIHRoaXMgbWV0aG9kIHRvIHNldCBhIGN1c3RvbSBub3RpZnkgZnVuY3Rpb24uXG4gICAqIFRoaXMgY2FuIGJlIHVzZWQgdG8gZm9yIGV4YW1wbGUgd3JhcCBub3RpZmljYXRpb25zIHdpdGggYFJlYWN0LmFjdGAgd2hpbGUgcnVubmluZyB0ZXN0cy5cbiAgICovXG4gIDtcblxuICBfcHJvdG8uc2V0Tm90aWZ5RnVuY3Rpb24gPSBmdW5jdGlvbiBzZXROb3RpZnlGdW5jdGlvbihmbikge1xuICAgIHRoaXMubm90aWZ5Rm4gPSBmbjtcbiAgfVxuICAvKipcbiAgICogVXNlIHRoaXMgbWV0aG9kIHRvIHNldCBhIGN1c3RvbSBmdW5jdGlvbiB0byBiYXRjaCBub3RpZmljYXRpb25zIHRvZ2V0aGVyIGludG8gYSBzaW5nbGUgdGljay5cbiAgICogQnkgZGVmYXVsdCBSZWFjdCBRdWVyeSB3aWxsIHVzZSB0aGUgYmF0Y2ggZnVuY3Rpb24gcHJvdmlkZWQgYnkgUmVhY3RET00gb3IgUmVhY3QgTmF0aXZlLlxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5zZXRCYXRjaE5vdGlmeUZ1bmN0aW9uID0gZnVuY3Rpb24gc2V0QmF0Y2hOb3RpZnlGdW5jdGlvbihmbikge1xuICAgIHRoaXMuYmF0Y2hOb3RpZnlGbiA9IGZuO1xuICB9O1xuXG4gIHJldHVybiBOb3RpZnlNYW5hZ2VyO1xufSgpOyAvLyBTSU5HTEVUT05cblxuXG5leHBvcnQgdmFyIG5vdGlmeU1hbmFnZXIgPSBuZXcgTm90aWZ5TWFuYWdlcigpOyIsImltcG9ydCBfaW5oZXJpdHNMb29zZSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHNMb29zZVwiO1xuaW1wb3J0IHsgU3Vic2NyaWJhYmxlIH0gZnJvbSAnLi9zdWJzY3JpYmFibGUnO1xuaW1wb3J0IHsgaXNTZXJ2ZXIgfSBmcm9tICcuL3V0aWxzJztcblxudmFyIE9ubGluZU1hbmFnZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9TdWJzY3JpYmFibGUpIHtcbiAgX2luaGVyaXRzTG9vc2UoT25saW5lTWFuYWdlciwgX1N1YnNjcmliYWJsZSk7XG5cbiAgZnVuY3Rpb24gT25saW5lTWFuYWdlcigpIHtcbiAgICByZXR1cm4gX1N1YnNjcmliYWJsZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gT25saW5lTWFuYWdlci5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLm9uU3Vic2NyaWJlID0gZnVuY3Rpb24gb25TdWJzY3JpYmUoKSB7XG4gICAgaWYgKCF0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIpIHtcbiAgICAgIHRoaXMuc2V0RGVmYXVsdEV2ZW50TGlzdGVuZXIoKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLnNldEV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbiBzZXRFdmVudExpc3RlbmVyKHNldHVwKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIGlmICh0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIpIHtcbiAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcigpO1xuICAgIH1cblxuICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lciA9IHNldHVwKGZ1bmN0aW9uIChvbmxpbmUpIHtcbiAgICAgIGlmICh0eXBlb2Ygb25saW5lID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgX3RoaXMuc2V0T25saW5lKG9ubGluZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBfdGhpcy5vbk9ubGluZSgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5zZXRPbmxpbmUgPSBmdW5jdGlvbiBzZXRPbmxpbmUob25saW5lKSB7XG4gICAgdGhpcy5vbmxpbmUgPSBvbmxpbmU7XG5cbiAgICBpZiAob25saW5lKSB7XG4gICAgICB0aGlzLm9uT25saW5lKCk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5vbk9ubGluZSA9IGZ1bmN0aW9uIG9uT25saW5lKCkge1xuICAgIHRoaXMubGlzdGVuZXJzLmZvckVhY2goZnVuY3Rpb24gKGxpc3RlbmVyKSB7XG4gICAgICBsaXN0ZW5lcigpO1xuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5pc09ubGluZSA9IGZ1bmN0aW9uIGlzT25saW5lKCkge1xuICAgIGlmICh0eXBlb2YgdGhpcy5vbmxpbmUgPT09ICdib29sZWFuJykge1xuICAgICAgcmV0dXJuIHRoaXMub25saW5lO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgbmF2aWdhdG9yID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgbmF2aWdhdG9yLm9uTGluZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBuYXZpZ2F0b3Iub25MaW5lO1xuICB9O1xuXG4gIF9wcm90by5zZXREZWZhdWx0RXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uIHNldERlZmF1bHRFdmVudExpc3RlbmVyKCkge1xuICAgIHZhciBfd2luZG93O1xuXG4gICAgaWYgKCFpc1NlcnZlciAmJiAoKF93aW5kb3cgPSB3aW5kb3cpID09IG51bGwgPyB2b2lkIDAgOiBfd2luZG93LmFkZEV2ZW50TGlzdGVuZXIpKSB7XG4gICAgICB0aGlzLnNldEV2ZW50TGlzdGVuZXIoZnVuY3Rpb24gKG9uT25saW5lKSB7XG4gICAgICAgIHZhciBsaXN0ZW5lciA9IGZ1bmN0aW9uIGxpc3RlbmVyKCkge1xuICAgICAgICAgIHJldHVybiBvbk9ubGluZSgpO1xuICAgICAgICB9OyAvLyBMaXN0ZW4gdG8gb25saW5lXG5cblxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignb25saW5lJywgbGlzdGVuZXIsIGZhbHNlKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ29mZmxpbmUnLCBsaXN0ZW5lciwgZmFsc2UpO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIC8vIEJlIHN1cmUgdG8gdW5zdWJzY3JpYmUgaWYgYSBuZXcgaGFuZGxlciBpcyBzZXRcbiAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignb25saW5lJywgbGlzdGVuZXIpO1xuICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdvZmZsaW5lJywgbGlzdGVuZXIpO1xuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBPbmxpbmVNYW5hZ2VyO1xufShTdWJzY3JpYmFibGUpO1xuXG5leHBvcnQgdmFyIG9ubGluZU1hbmFnZXIgPSBuZXcgT25saW5lTWFuYWdlcigpOyIsImltcG9ydCBfaW5oZXJpdHNMb29zZSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHNMb29zZVwiO1xuaW1wb3J0IHsgZGlmZmVyZW5jZSwgcmVwbGFjZUF0IH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgeyBub3RpZnlNYW5hZ2VyIH0gZnJvbSAnLi9ub3RpZnlNYW5hZ2VyJztcbmltcG9ydCB7IFF1ZXJ5T2JzZXJ2ZXIgfSBmcm9tICcuL3F1ZXJ5T2JzZXJ2ZXInO1xuaW1wb3J0IHsgU3Vic2NyaWJhYmxlIH0gZnJvbSAnLi9zdWJzY3JpYmFibGUnO1xuZXhwb3J0IHZhciBRdWVyaWVzT2JzZXJ2ZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9TdWJzY3JpYmFibGUpIHtcbiAgX2luaGVyaXRzTG9vc2UoUXVlcmllc09ic2VydmVyLCBfU3Vic2NyaWJhYmxlKTtcblxuICBmdW5jdGlvbiBRdWVyaWVzT2JzZXJ2ZXIoY2xpZW50LCBxdWVyaWVzKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX3RoaXMgPSBfU3Vic2NyaWJhYmxlLmNhbGwodGhpcykgfHwgdGhpcztcbiAgICBfdGhpcy5jbGllbnQgPSBjbGllbnQ7XG4gICAgX3RoaXMucXVlcmllcyA9IFtdO1xuICAgIF90aGlzLnJlc3VsdCA9IFtdO1xuICAgIF90aGlzLm9ic2VydmVycyA9IFtdO1xuICAgIF90aGlzLm9ic2VydmVyc01hcCA9IHt9O1xuXG4gICAgaWYgKHF1ZXJpZXMpIHtcbiAgICAgIF90aGlzLnNldFF1ZXJpZXMocXVlcmllcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IFF1ZXJpZXNPYnNlcnZlci5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLm9uU3Vic2NyaWJlID0gZnVuY3Rpb24gb25TdWJzY3JpYmUoKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICBpZiAodGhpcy5saXN0ZW5lcnMubGVuZ3RoID09PSAxKSB7XG4gICAgICB0aGlzLm9ic2VydmVycy5mb3JFYWNoKGZ1bmN0aW9uIChvYnNlcnZlcikge1xuICAgICAgICBvYnNlcnZlci5zdWJzY3JpYmUoZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgIF90aGlzMi5vblVwZGF0ZShvYnNlcnZlciwgcmVzdWx0KTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLm9uVW5zdWJzY3JpYmUgPSBmdW5jdGlvbiBvblVuc3Vic2NyaWJlKCkge1xuICAgIGlmICghdGhpcy5saXN0ZW5lcnMubGVuZ3RoKSB7XG4gICAgICB0aGlzLmRlc3Ryb3koKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLmRlc3Ryb3kgPSBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgIHRoaXMubGlzdGVuZXJzID0gW107XG4gICAgdGhpcy5vYnNlcnZlcnMuZm9yRWFjaChmdW5jdGlvbiAob2JzZXJ2ZXIpIHtcbiAgICAgIG9ic2VydmVyLmRlc3Ryb3koKTtcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8uc2V0UXVlcmllcyA9IGZ1bmN0aW9uIHNldFF1ZXJpZXMocXVlcmllcywgbm90aWZ5T3B0aW9ucykge1xuICAgIHRoaXMucXVlcmllcyA9IHF1ZXJpZXM7XG4gICAgdGhpcy51cGRhdGVPYnNlcnZlcnMobm90aWZ5T3B0aW9ucyk7XG4gIH07XG5cbiAgX3Byb3RvLmdldEN1cnJlbnRSZXN1bHQgPSBmdW5jdGlvbiBnZXRDdXJyZW50UmVzdWx0KCkge1xuICAgIHJldHVybiB0aGlzLnJlc3VsdDtcbiAgfTtcblxuICBfcHJvdG8uZ2V0T3B0aW1pc3RpY1Jlc3VsdCA9IGZ1bmN0aW9uIGdldE9wdGltaXN0aWNSZXN1bHQocXVlcmllcykge1xuICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgcmV0dXJuIHF1ZXJpZXMubWFwKGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICB2YXIgZGVmYXVsdGVkT3B0aW9ucyA9IF90aGlzMy5jbGllbnQuZGVmYXVsdFF1ZXJ5T2JzZXJ2ZXJPcHRpb25zKG9wdGlvbnMpO1xuXG4gICAgICByZXR1cm4gX3RoaXMzLmdldE9ic2VydmVyKGRlZmF1bHRlZE9wdGlvbnMpLmdldE9wdGltaXN0aWNSZXN1bHQoZGVmYXVsdGVkT3B0aW9ucyk7XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLmdldE9ic2VydmVyID0gZnVuY3Rpb24gZ2V0T2JzZXJ2ZXIob3B0aW9ucykge1xuICAgIHZhciBkZWZhdWx0ZWRPcHRpb25zID0gdGhpcy5jbGllbnQuZGVmYXVsdFF1ZXJ5T2JzZXJ2ZXJPcHRpb25zKG9wdGlvbnMpO1xuICAgIHJldHVybiB0aGlzLm9ic2VydmVyc01hcFtkZWZhdWx0ZWRPcHRpb25zLnF1ZXJ5SGFzaF0gfHwgbmV3IFF1ZXJ5T2JzZXJ2ZXIodGhpcy5jbGllbnQsIGRlZmF1bHRlZE9wdGlvbnMpO1xuICB9O1xuXG4gIF9wcm90by51cGRhdGVPYnNlcnZlcnMgPSBmdW5jdGlvbiB1cGRhdGVPYnNlcnZlcnMobm90aWZ5T3B0aW9ucykge1xuICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgbm90aWZ5TWFuYWdlci5iYXRjaChmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgaGFzSW5kZXhDaGFuZ2UgPSBmYWxzZTtcbiAgICAgIHZhciBwcmV2T2JzZXJ2ZXJzID0gX3RoaXM0Lm9ic2VydmVycztcbiAgICAgIHZhciBwcmV2T2JlcnZlcnNNYXAgPSBfdGhpczQub2JzZXJ2ZXJzTWFwO1xuICAgICAgdmFyIG5ld1Jlc3VsdCA9IFtdO1xuICAgICAgdmFyIG5ld09ic2VydmVycyA9IFtdO1xuICAgICAgdmFyIG5ld09ic2VydmVyc01hcCA9IHt9O1xuXG4gICAgICBfdGhpczQucXVlcmllcy5mb3JFYWNoKGZ1bmN0aW9uIChvcHRpb25zLCBpKSB7XG4gICAgICAgIHZhciBkZWZhdWx0ZWRPcHRpb25zID0gX3RoaXM0LmNsaWVudC5kZWZhdWx0UXVlcnlPYnNlcnZlck9wdGlvbnMob3B0aW9ucyk7XG5cbiAgICAgICAgdmFyIHF1ZXJ5SGFzaCA9IGRlZmF1bHRlZE9wdGlvbnMucXVlcnlIYXNoO1xuXG4gICAgICAgIHZhciBvYnNlcnZlciA9IF90aGlzNC5nZXRPYnNlcnZlcihkZWZhdWx0ZWRPcHRpb25zKTtcblxuICAgICAgICBpZiAocHJldk9iZXJ2ZXJzTWFwW3F1ZXJ5SGFzaF0pIHtcbiAgICAgICAgICBvYnNlcnZlci5zZXRPcHRpb25zKGRlZmF1bHRlZE9wdGlvbnMsIG5vdGlmeU9wdGlvbnMpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9ic2VydmVyICE9PSBwcmV2T2JzZXJ2ZXJzW2ldKSB7XG4gICAgICAgICAgaGFzSW5kZXhDaGFuZ2UgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgbmV3T2JzZXJ2ZXJzLnB1c2gob2JzZXJ2ZXIpO1xuICAgICAgICBuZXdSZXN1bHQucHVzaChvYnNlcnZlci5nZXRDdXJyZW50UmVzdWx0KCkpO1xuICAgICAgICBuZXdPYnNlcnZlcnNNYXBbcXVlcnlIYXNoXSA9IG9ic2VydmVyO1xuICAgICAgfSk7XG5cbiAgICAgIGlmIChwcmV2T2JzZXJ2ZXJzLmxlbmd0aCA9PT0gbmV3T2JzZXJ2ZXJzLmxlbmd0aCAmJiAhaGFzSW5kZXhDaGFuZ2UpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBfdGhpczQub2JzZXJ2ZXJzID0gbmV3T2JzZXJ2ZXJzO1xuICAgICAgX3RoaXM0Lm9ic2VydmVyc01hcCA9IG5ld09ic2VydmVyc01hcDtcbiAgICAgIF90aGlzNC5yZXN1bHQgPSBuZXdSZXN1bHQ7XG5cbiAgICAgIGlmICghX3RoaXM0Lmhhc0xpc3RlbmVycygpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgZGlmZmVyZW5jZShwcmV2T2JzZXJ2ZXJzLCBuZXdPYnNlcnZlcnMpLmZvckVhY2goZnVuY3Rpb24gKG9ic2VydmVyKSB7XG4gICAgICAgIG9ic2VydmVyLmRlc3Ryb3koKTtcbiAgICAgIH0pO1xuICAgICAgZGlmZmVyZW5jZShuZXdPYnNlcnZlcnMsIHByZXZPYnNlcnZlcnMpLmZvckVhY2goZnVuY3Rpb24gKG9ic2VydmVyKSB7XG4gICAgICAgIG9ic2VydmVyLnN1YnNjcmliZShmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgX3RoaXM0Lm9uVXBkYXRlKG9ic2VydmVyLCByZXN1bHQpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgICBfdGhpczQubm90aWZ5KCk7XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLm9uVXBkYXRlID0gZnVuY3Rpb24gb25VcGRhdGUob2JzZXJ2ZXIsIHJlc3VsdCkge1xuICAgIHZhciBpbmRleCA9IHRoaXMub2JzZXJ2ZXJzLmluZGV4T2Yob2JzZXJ2ZXIpO1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgdGhpcy5yZXN1bHQgPSByZXBsYWNlQXQodGhpcy5yZXN1bHQsIGluZGV4LCByZXN1bHQpO1xuICAgICAgdGhpcy5ub3RpZnkoKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLm5vdGlmeSA9IGZ1bmN0aW9uIG5vdGlmeSgpIHtcbiAgICB2YXIgX3RoaXM1ID0gdGhpcztcblxuICAgIG5vdGlmeU1hbmFnZXIuYmF0Y2goZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXM1Lmxpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uIChsaXN0ZW5lcikge1xuICAgICAgICBsaXN0ZW5lcihfdGhpczUucmVzdWx0KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiBRdWVyaWVzT2JzZXJ2ZXI7XG59KFN1YnNjcmliYWJsZSk7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgeyBmdW5jdGlvbmFsVXBkYXRlLCBpc1ZhbGlkVGltZW91dCwgbm9vcCwgcmVwbGFjZUVxdWFsRGVlcCwgdGltZVVudGlsU3RhbGUsIGVuc3VyZVF1ZXJ5S2V5QXJyYXkgfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7IG5vdGlmeU1hbmFnZXIgfSBmcm9tICcuL25vdGlmeU1hbmFnZXInO1xuaW1wb3J0IHsgZ2V0TG9nZ2VyIH0gZnJvbSAnLi9sb2dnZXInO1xuaW1wb3J0IHsgUmV0cnllciwgaXNDYW5jZWxsZWRFcnJvciB9IGZyb20gJy4vcmV0cnllcic7IC8vIFRZUEVTXG5cbi8vIENMQVNTXG5leHBvcnQgdmFyIFF1ZXJ5ID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gUXVlcnkoY29uZmlnKSB7XG4gICAgdGhpcy5kZWZhdWx0T3B0aW9ucyA9IGNvbmZpZy5kZWZhdWx0T3B0aW9ucztcbiAgICB0aGlzLnNldE9wdGlvbnMoY29uZmlnLm9wdGlvbnMpO1xuICAgIHRoaXMub2JzZXJ2ZXJzID0gW107XG4gICAgdGhpcy5jYWNoZSA9IGNvbmZpZy5jYWNoZTtcbiAgICB0aGlzLnF1ZXJ5S2V5ID0gY29uZmlnLnF1ZXJ5S2V5O1xuICAgIHRoaXMucXVlcnlIYXNoID0gY29uZmlnLnF1ZXJ5SGFzaDtcbiAgICB0aGlzLmluaXRpYWxTdGF0ZSA9IGNvbmZpZy5zdGF0ZSB8fCB0aGlzLmdldERlZmF1bHRTdGF0ZSh0aGlzLm9wdGlvbnMpO1xuICAgIHRoaXMuc3RhdGUgPSB0aGlzLmluaXRpYWxTdGF0ZTtcbiAgICB0aGlzLnNjaGVkdWxlR2MoKTtcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBRdWVyeS5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLnNldE9wdGlvbnMgPSBmdW5jdGlvbiBzZXRPcHRpb25zKG9wdGlvbnMpIHtcbiAgICB2YXIgX3RoaXMkb3B0aW9ucyRjYWNoZVRpO1xuXG4gICAgdGhpcy5vcHRpb25zID0gX2V4dGVuZHMoe30sIHRoaXMuZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMpOyAvLyBEZWZhdWx0IHRvIDUgbWludXRlcyBpZiBub3QgY2FjaGUgdGltZSBpcyBzZXRcblxuICAgIHRoaXMuY2FjaGVUaW1lID0gTWF0aC5tYXgodGhpcy5jYWNoZVRpbWUgfHwgMCwgKF90aGlzJG9wdGlvbnMkY2FjaGVUaSA9IHRoaXMub3B0aW9ucy5jYWNoZVRpbWUpICE9IG51bGwgPyBfdGhpcyRvcHRpb25zJGNhY2hlVGkgOiA1ICogNjAgKiAxMDAwKTtcbiAgfTtcblxuICBfcHJvdG8uc2V0RGVmYXVsdE9wdGlvbnMgPSBmdW5jdGlvbiBzZXREZWZhdWx0T3B0aW9ucyhvcHRpb25zKSB7XG4gICAgdGhpcy5kZWZhdWx0T3B0aW9ucyA9IG9wdGlvbnM7XG4gIH07XG5cbiAgX3Byb3RvLnNjaGVkdWxlR2MgPSBmdW5jdGlvbiBzY2hlZHVsZUdjKCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICB0aGlzLmNsZWFyR2NUaW1lb3V0KCk7XG5cbiAgICBpZiAoaXNWYWxpZFRpbWVvdXQodGhpcy5jYWNoZVRpbWUpKSB7XG4gICAgICB0aGlzLmdjVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpcy5vcHRpb25hbFJlbW92ZSgpO1xuICAgICAgfSwgdGhpcy5jYWNoZVRpbWUpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uY2xlYXJHY1RpbWVvdXQgPSBmdW5jdGlvbiBjbGVhckdjVGltZW91dCgpIHtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5nY1RpbWVvdXQpO1xuICAgIHRoaXMuZ2NUaW1lb3V0ID0gdW5kZWZpbmVkO1xuICB9O1xuXG4gIF9wcm90by5vcHRpb25hbFJlbW92ZSA9IGZ1bmN0aW9uIG9wdGlvbmFsUmVtb3ZlKCkge1xuICAgIGlmICghdGhpcy5vYnNlcnZlcnMubGVuZ3RoICYmICF0aGlzLnN0YXRlLmlzRmV0Y2hpbmcpIHtcbiAgICAgIHRoaXMuY2FjaGUucmVtb3ZlKHRoaXMpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uc2V0RGF0YSA9IGZ1bmN0aW9uIHNldERhdGEodXBkYXRlciwgb3B0aW9ucykge1xuICAgIHZhciBfdGhpcyRvcHRpb25zJGlzRGF0YUUsIF90aGlzJG9wdGlvbnM7XG5cbiAgICB2YXIgcHJldkRhdGEgPSB0aGlzLnN0YXRlLmRhdGE7IC8vIEdldCB0aGUgbmV3IGRhdGFcblxuICAgIHZhciBkYXRhID0gZnVuY3Rpb25hbFVwZGF0ZSh1cGRhdGVyLCBwcmV2RGF0YSk7IC8vIFVzZSBwcmV2IGRhdGEgaWYgYW4gaXNEYXRhRXF1YWwgZnVuY3Rpb24gaXMgZGVmaW5lZCBhbmQgcmV0dXJucyBgdHJ1ZWBcblxuICAgIGlmICgoX3RoaXMkb3B0aW9ucyRpc0RhdGFFID0gKF90aGlzJG9wdGlvbnMgPSB0aGlzLm9wdGlvbnMpLmlzRGF0YUVxdWFsKSA9PSBudWxsID8gdm9pZCAwIDogX3RoaXMkb3B0aW9ucyRpc0RhdGFFLmNhbGwoX3RoaXMkb3B0aW9ucywgcHJldkRhdGEsIGRhdGEpKSB7XG4gICAgICBkYXRhID0gcHJldkRhdGE7XG4gICAgfSBlbHNlIGlmICh0aGlzLm9wdGlvbnMuc3RydWN0dXJhbFNoYXJpbmcgIT09IGZhbHNlKSB7XG4gICAgICAvLyBTdHJ1Y3R1cmFsbHkgc2hhcmUgZGF0YSBiZXR3ZWVuIHByZXYgYW5kIG5ldyBkYXRhIGlmIG5lZWRlZFxuICAgICAgZGF0YSA9IHJlcGxhY2VFcXVhbERlZXAocHJldkRhdGEsIGRhdGEpO1xuICAgIH0gLy8gU2V0IGRhdGEgYW5kIG1hcmsgaXQgYXMgY2FjaGVkXG5cblxuICAgIHRoaXMuZGlzcGF0Y2goe1xuICAgICAgZGF0YTogZGF0YSxcbiAgICAgIHR5cGU6ICdzdWNjZXNzJyxcbiAgICAgIGRhdGFVcGRhdGVkQXQ6IG9wdGlvbnMgPT0gbnVsbCA/IHZvaWQgMCA6IG9wdGlvbnMudXBkYXRlZEF0XG4gICAgfSk7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH07XG5cbiAgX3Byb3RvLnNldFN0YXRlID0gZnVuY3Rpb24gc2V0U3RhdGUoc3RhdGUsIHNldFN0YXRlT3B0aW9ucykge1xuICAgIHRoaXMuZGlzcGF0Y2goe1xuICAgICAgdHlwZTogJ3NldFN0YXRlJyxcbiAgICAgIHN0YXRlOiBzdGF0ZSxcbiAgICAgIHNldFN0YXRlT3B0aW9uczogc2V0U3RhdGVPcHRpb25zXG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLmNhbmNlbCA9IGZ1bmN0aW9uIGNhbmNlbChvcHRpb25zKSB7XG4gICAgdmFyIF90aGlzJHJldHJ5ZXI7XG5cbiAgICB2YXIgcHJvbWlzZSA9IHRoaXMucHJvbWlzZTtcbiAgICAoX3RoaXMkcmV0cnllciA9IHRoaXMucmV0cnllcikgPT0gbnVsbCA/IHZvaWQgMCA6IF90aGlzJHJldHJ5ZXIuY2FuY2VsKG9wdGlvbnMpO1xuICAgIHJldHVybiBwcm9taXNlID8gcHJvbWlzZS50aGVuKG5vb3ApLmNhdGNoKG5vb3ApIDogUHJvbWlzZS5yZXNvbHZlKCk7XG4gIH07XG5cbiAgX3Byb3RvLmRlc3Ryb3kgPSBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgIHRoaXMuY2xlYXJHY1RpbWVvdXQoKTtcbiAgICB0aGlzLmNhbmNlbCh7XG4gICAgICBzaWxlbnQ6IHRydWVcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8ucmVzZXQgPSBmdW5jdGlvbiByZXNldCgpIHtcbiAgICB0aGlzLmRlc3Ryb3koKTtcbiAgICB0aGlzLnNldFN0YXRlKHRoaXMuaW5pdGlhbFN0YXRlKTtcbiAgfTtcblxuICBfcHJvdG8uaXNBY3RpdmUgPSBmdW5jdGlvbiBpc0FjdGl2ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5vYnNlcnZlcnMuc29tZShmdW5jdGlvbiAob2JzZXJ2ZXIpIHtcbiAgICAgIHJldHVybiBvYnNlcnZlci5vcHRpb25zLmVuYWJsZWQgIT09IGZhbHNlO1xuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5pc0ZldGNoaW5nID0gZnVuY3Rpb24gaXNGZXRjaGluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5pc0ZldGNoaW5nO1xuICB9O1xuXG4gIF9wcm90by5pc1N0YWxlID0gZnVuY3Rpb24gaXNTdGFsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5pc0ludmFsaWRhdGVkIHx8ICF0aGlzLnN0YXRlLmRhdGFVcGRhdGVkQXQgfHwgdGhpcy5vYnNlcnZlcnMuc29tZShmdW5jdGlvbiAob2JzZXJ2ZXIpIHtcbiAgICAgIHJldHVybiBvYnNlcnZlci5nZXRDdXJyZW50UmVzdWx0KCkuaXNTdGFsZTtcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8uaXNTdGFsZUJ5VGltZSA9IGZ1bmN0aW9uIGlzU3RhbGVCeVRpbWUoc3RhbGVUaW1lKSB7XG4gICAgaWYgKHN0YWxlVGltZSA9PT0gdm9pZCAwKSB7XG4gICAgICBzdGFsZVRpbWUgPSAwO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnN0YXRlLmlzSW52YWxpZGF0ZWQgfHwgIXRoaXMuc3RhdGUuZGF0YVVwZGF0ZWRBdCB8fCAhdGltZVVudGlsU3RhbGUodGhpcy5zdGF0ZS5kYXRhVXBkYXRlZEF0LCBzdGFsZVRpbWUpO1xuICB9O1xuXG4gIF9wcm90by5vbkZvY3VzID0gZnVuY3Rpb24gb25Gb2N1cygpIHtcbiAgICB2YXIgX3RoaXMkcmV0cnllcjI7XG5cbiAgICB2YXIgb2JzZXJ2ZXIgPSB0aGlzLm9ic2VydmVycy5maW5kKGZ1bmN0aW9uICh4KSB7XG4gICAgICByZXR1cm4geC5zaG91bGRGZXRjaE9uV2luZG93Rm9jdXMoKTtcbiAgICB9KTtcblxuICAgIGlmIChvYnNlcnZlcikge1xuICAgICAgb2JzZXJ2ZXIucmVmZXRjaCgpO1xuICAgIH0gLy8gQ29udGludWUgZmV0Y2ggaWYgY3VycmVudGx5IHBhdXNlZFxuXG5cbiAgICAoX3RoaXMkcmV0cnllcjIgPSB0aGlzLnJldHJ5ZXIpID09IG51bGwgPyB2b2lkIDAgOiBfdGhpcyRyZXRyeWVyMi5jb250aW51ZSgpO1xuICB9O1xuXG4gIF9wcm90by5vbk9ubGluZSA9IGZ1bmN0aW9uIG9uT25saW5lKCkge1xuICAgIHZhciBfdGhpcyRyZXRyeWVyMztcblxuICAgIHZhciBvYnNlcnZlciA9IHRoaXMub2JzZXJ2ZXJzLmZpbmQoZnVuY3Rpb24gKHgpIHtcbiAgICAgIHJldHVybiB4LnNob3VsZEZldGNoT25SZWNvbm5lY3QoKTtcbiAgICB9KTtcblxuICAgIGlmIChvYnNlcnZlcikge1xuICAgICAgb2JzZXJ2ZXIucmVmZXRjaCgpO1xuICAgIH0gLy8gQ29udGludWUgZmV0Y2ggaWYgY3VycmVudGx5IHBhdXNlZFxuXG5cbiAgICAoX3RoaXMkcmV0cnllcjMgPSB0aGlzLnJldHJ5ZXIpID09IG51bGwgPyB2b2lkIDAgOiBfdGhpcyRyZXRyeWVyMy5jb250aW51ZSgpO1xuICB9O1xuXG4gIF9wcm90by5hZGRPYnNlcnZlciA9IGZ1bmN0aW9uIGFkZE9ic2VydmVyKG9ic2VydmVyKSB7XG4gICAgaWYgKHRoaXMub2JzZXJ2ZXJzLmluZGV4T2Yob2JzZXJ2ZXIpID09PSAtMSkge1xuICAgICAgdGhpcy5vYnNlcnZlcnMucHVzaChvYnNlcnZlcik7IC8vIFN0b3AgdGhlIHF1ZXJ5IGZyb20gYmVpbmcgZ2FyYmFnZSBjb2xsZWN0ZWRcblxuICAgICAgdGhpcy5jbGVhckdjVGltZW91dCgpO1xuICAgICAgdGhpcy5jYWNoZS5ub3RpZnkoe1xuICAgICAgICB0eXBlOiAnb2JzZXJ2ZXJBZGRlZCcsXG4gICAgICAgIHF1ZXJ5OiB0aGlzLFxuICAgICAgICBvYnNlcnZlcjogb2JzZXJ2ZXJcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8ucmVtb3ZlT2JzZXJ2ZXIgPSBmdW5jdGlvbiByZW1vdmVPYnNlcnZlcihvYnNlcnZlcikge1xuICAgIGlmICh0aGlzLm9ic2VydmVycy5pbmRleE9mKG9ic2VydmVyKSAhPT0gLTEpIHtcbiAgICAgIHRoaXMub2JzZXJ2ZXJzID0gdGhpcy5vYnNlcnZlcnMuZmlsdGVyKGZ1bmN0aW9uICh4KSB7XG4gICAgICAgIHJldHVybiB4ICE9PSBvYnNlcnZlcjtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoIXRoaXMub2JzZXJ2ZXJzLmxlbmd0aCkge1xuICAgICAgICAvLyBJZiB0aGUgdHJhbnNwb3J0IGxheWVyIGRvZXMgbm90IHN1cHBvcnQgY2FuY2VsbGF0aW9uXG4gICAgICAgIC8vIHdlJ2xsIGxldCB0aGUgcXVlcnkgY29udGludWUgc28gdGhlIHJlc3VsdCBjYW4gYmUgY2FjaGVkXG4gICAgICAgIGlmICh0aGlzLnJldHJ5ZXIpIHtcbiAgICAgICAgICBpZiAodGhpcy5yZXRyeWVyLmlzVHJhbnNwb3J0Q2FuY2VsYWJsZSkge1xuICAgICAgICAgICAgdGhpcy5yZXRyeWVyLmNhbmNlbCh7XG4gICAgICAgICAgICAgIHJldmVydDogdHJ1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucmV0cnllci5jYW5jZWxSZXRyeSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmNhY2hlVGltZSkge1xuICAgICAgICAgIHRoaXMuc2NoZWR1bGVHYygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuY2FjaGUucmVtb3ZlKHRoaXMpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuY2FjaGUubm90aWZ5KHtcbiAgICAgICAgdHlwZTogJ29ic2VydmVyUmVtb3ZlZCcsXG4gICAgICAgIHF1ZXJ5OiB0aGlzLFxuICAgICAgICBvYnNlcnZlcjogb2JzZXJ2ZXJcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uZ2V0T2JzZXJ2ZXJzQ291bnQgPSBmdW5jdGlvbiBnZXRPYnNlcnZlcnNDb3VudCgpIHtcbiAgICByZXR1cm4gdGhpcy5vYnNlcnZlcnMubGVuZ3RoO1xuICB9O1xuXG4gIF9wcm90by5pbnZhbGlkYXRlID0gZnVuY3Rpb24gaW52YWxpZGF0ZSgpIHtcbiAgICBpZiAoIXRoaXMuc3RhdGUuaXNJbnZhbGlkYXRlZCkge1xuICAgICAgdGhpcy5kaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6ICdpbnZhbGlkYXRlJ1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5mZXRjaCA9IGZ1bmN0aW9uIGZldGNoKG9wdGlvbnMsIGZldGNoT3B0aW9ucykge1xuICAgIHZhciBfdGhpczIgPSB0aGlzLFxuICAgICAgICBfdGhpcyRvcHRpb25zJGJlaGF2aW8sXG4gICAgICAgIF9jb250ZXh0JGZldGNoT3B0aW9ucztcblxuICAgIGlmICh0aGlzLnN0YXRlLmlzRmV0Y2hpbmcpIHtcbiAgICAgIGlmICh0aGlzLnN0YXRlLmRhdGFVcGRhdGVkQXQgJiYgKGZldGNoT3B0aW9ucyA9PSBudWxsID8gdm9pZCAwIDogZmV0Y2hPcHRpb25zLmNhbmNlbFJlZmV0Y2gpKSB7XG4gICAgICAgIC8vIFNpbGVudGx5IGNhbmNlbCBjdXJyZW50IGZldGNoIGlmIHRoZSB1c2VyIHdhbnRzIHRvIGNhbmNlbCByZWZldGNoZXNcbiAgICAgICAgdGhpcy5jYW5jZWwoe1xuICAgICAgICAgIHNpbGVudDogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5wcm9taXNlKSB7XG4gICAgICAgIC8vIFJldHVybiBjdXJyZW50IHByb21pc2UgaWYgd2UgYXJlIGFscmVhZHkgZmV0Y2hpbmdcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvbWlzZTtcbiAgICAgIH1cbiAgICB9IC8vIFVwZGF0ZSBjb25maWcgaWYgcGFzc2VkLCBvdGhlcndpc2UgdGhlIGNvbmZpZyBmcm9tIHRoZSBsYXN0IGV4ZWN1dGlvbiBpcyB1c2VkXG5cblxuICAgIGlmIChvcHRpb25zKSB7XG4gICAgICB0aGlzLnNldE9wdGlvbnMob3B0aW9ucyk7XG4gICAgfSAvLyBVc2UgdGhlIG9wdGlvbnMgZnJvbSB0aGUgZmlyc3Qgb2JzZXJ2ZXIgd2l0aCBhIHF1ZXJ5IGZ1bmN0aW9uIGlmIG5vIGZ1bmN0aW9uIGlzIGZvdW5kLlxuICAgIC8vIFRoaXMgY2FuIGhhcHBlbiB3aGVuIHRoZSBxdWVyeSBpcyBoeWRyYXRlZCBvciBjcmVhdGVkIHdpdGggc2V0UXVlcnlEYXRhLlxuXG5cbiAgICBpZiAoIXRoaXMub3B0aW9ucy5xdWVyeUZuKSB7XG4gICAgICB2YXIgb2JzZXJ2ZXIgPSB0aGlzLm9ic2VydmVycy5maW5kKGZ1bmN0aW9uICh4KSB7XG4gICAgICAgIHJldHVybiB4Lm9wdGlvbnMucXVlcnlGbjtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAob2JzZXJ2ZXIpIHtcbiAgICAgICAgdGhpcy5zZXRPcHRpb25zKG9ic2VydmVyLm9wdGlvbnMpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBxdWVyeUtleSA9IGVuc3VyZVF1ZXJ5S2V5QXJyYXkodGhpcy5xdWVyeUtleSk7IC8vIENyZWF0ZSBxdWVyeSBmdW5jdGlvbiBjb250ZXh0XG5cbiAgICB2YXIgcXVlcnlGbkNvbnRleHQgPSB7XG4gICAgICBxdWVyeUtleTogcXVlcnlLZXksXG4gICAgICBwYWdlUGFyYW06IHVuZGVmaW5lZFxuICAgIH07IC8vIENyZWF0ZSBmZXRjaCBmdW5jdGlvblxuXG4gICAgdmFyIGZldGNoRm4gPSBmdW5jdGlvbiBmZXRjaEZuKCkge1xuICAgICAgcmV0dXJuIF90aGlzMi5vcHRpb25zLnF1ZXJ5Rm4gPyBfdGhpczIub3B0aW9ucy5xdWVyeUZuKHF1ZXJ5Rm5Db250ZXh0KSA6IFByb21pc2UucmVqZWN0KCdNaXNzaW5nIHF1ZXJ5Rm4nKTtcbiAgICB9OyAvLyBUcmlnZ2VyIGJlaGF2aW9yIGhvb2tcblxuXG4gICAgdmFyIGNvbnRleHQgPSB7XG4gICAgICBmZXRjaE9wdGlvbnM6IGZldGNoT3B0aW9ucyxcbiAgICAgIG9wdGlvbnM6IHRoaXMub3B0aW9ucyxcbiAgICAgIHF1ZXJ5S2V5OiBxdWVyeUtleSxcbiAgICAgIHN0YXRlOiB0aGlzLnN0YXRlLFxuICAgICAgZmV0Y2hGbjogZmV0Y2hGblxuICAgIH07XG5cbiAgICBpZiAoKF90aGlzJG9wdGlvbnMkYmVoYXZpbyA9IHRoaXMub3B0aW9ucy5iZWhhdmlvcikgPT0gbnVsbCA/IHZvaWQgMCA6IF90aGlzJG9wdGlvbnMkYmVoYXZpby5vbkZldGNoKSB7XG4gICAgICB2YXIgX3RoaXMkb3B0aW9ucyRiZWhhdmlvMjtcblxuICAgICAgKF90aGlzJG9wdGlvbnMkYmVoYXZpbzIgPSB0aGlzLm9wdGlvbnMuYmVoYXZpb3IpID09IG51bGwgPyB2b2lkIDAgOiBfdGhpcyRvcHRpb25zJGJlaGF2aW8yLm9uRmV0Y2goY29udGV4dCk7XG4gICAgfSAvLyBTdG9yZSBzdGF0ZSBpbiBjYXNlIHRoZSBjdXJyZW50IGZldGNoIG5lZWRzIHRvIGJlIHJldmVydGVkXG5cblxuICAgIHRoaXMucmV2ZXJ0U3RhdGUgPSB0aGlzLnN0YXRlOyAvLyBTZXQgdG8gZmV0Y2hpbmcgc3RhdGUgaWYgbm90IGFscmVhZHkgaW4gaXRcblxuICAgIGlmICghdGhpcy5zdGF0ZS5pc0ZldGNoaW5nIHx8IHRoaXMuc3RhdGUuZmV0Y2hNZXRhICE9PSAoKF9jb250ZXh0JGZldGNoT3B0aW9ucyA9IGNvbnRleHQuZmV0Y2hPcHRpb25zKSA9PSBudWxsID8gdm9pZCAwIDogX2NvbnRleHQkZmV0Y2hPcHRpb25zLm1ldGEpKSB7XG4gICAgICB2YXIgX2NvbnRleHQkZmV0Y2hPcHRpb25zMjtcblxuICAgICAgdGhpcy5kaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6ICdmZXRjaCcsXG4gICAgICAgIG1ldGE6IChfY29udGV4dCRmZXRjaE9wdGlvbnMyID0gY29udGV4dC5mZXRjaE9wdGlvbnMpID09IG51bGwgPyB2b2lkIDAgOiBfY29udGV4dCRmZXRjaE9wdGlvbnMyLm1ldGFcbiAgICAgIH0pO1xuICAgIH0gLy8gVHJ5IHRvIGZldGNoIHRoZSBkYXRhXG5cblxuICAgIHRoaXMucmV0cnllciA9IG5ldyBSZXRyeWVyKHtcbiAgICAgIGZuOiBjb250ZXh0LmZldGNoRm4sXG4gICAgICBvblN1Y2Nlc3M6IGZ1bmN0aW9uIG9uU3VjY2VzcyhkYXRhKSB7XG4gICAgICAgIF90aGlzMi5zZXREYXRhKGRhdGEpOyAvLyBOb3RpZnkgY2FjaGUgY2FsbGJhY2tcblxuXG4gICAgICAgIF90aGlzMi5jYWNoZS5jb25maWcub25TdWNjZXNzID09IG51bGwgPyB2b2lkIDAgOiBfdGhpczIuY2FjaGUuY29uZmlnLm9uU3VjY2VzcyhkYXRhLCBfdGhpczIpOyAvLyBSZW1vdmUgcXVlcnkgYWZ0ZXIgZmV0Y2hpbmcgaWYgY2FjaGUgdGltZSBpcyAwXG5cbiAgICAgICAgaWYgKF90aGlzMi5jYWNoZVRpbWUgPT09IDApIHtcbiAgICAgICAgICBfdGhpczIub3B0aW9uYWxSZW1vdmUoKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG9uRXJyb3I6IGZ1bmN0aW9uIG9uRXJyb3IoZXJyb3IpIHtcbiAgICAgICAgLy8gT3B0aW1pc3RpY2FsbHkgdXBkYXRlIHN0YXRlIGlmIG5lZWRlZFxuICAgICAgICBpZiAoIShpc0NhbmNlbGxlZEVycm9yKGVycm9yKSAmJiBlcnJvci5zaWxlbnQpKSB7XG4gICAgICAgICAgX3RoaXMyLmRpc3BhdGNoKHtcbiAgICAgICAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICAgICAgICBlcnJvcjogZXJyb3JcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghaXNDYW5jZWxsZWRFcnJvcihlcnJvcikpIHtcbiAgICAgICAgICAvLyBOb3RpZnkgY2FjaGUgY2FsbGJhY2tcbiAgICAgICAgICBfdGhpczIuY2FjaGUuY29uZmlnLm9uRXJyb3IgPT0gbnVsbCA/IHZvaWQgMCA6IF90aGlzMi5jYWNoZS5jb25maWcub25FcnJvcihlcnJvciwgX3RoaXMyKTsgLy8gTG9nIGVycm9yXG5cbiAgICAgICAgICBnZXRMb2dnZXIoKS5lcnJvcihlcnJvcik7XG4gICAgICAgIH0gLy8gUmVtb3ZlIHF1ZXJ5IGFmdGVyIGZldGNoaW5nIGlmIGNhY2hlIHRpbWUgaXMgMFxuXG5cbiAgICAgICAgaWYgKF90aGlzMi5jYWNoZVRpbWUgPT09IDApIHtcbiAgICAgICAgICBfdGhpczIub3B0aW9uYWxSZW1vdmUoKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG9uRmFpbDogZnVuY3Rpb24gb25GYWlsKCkge1xuICAgICAgICBfdGhpczIuZGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6ICdmYWlsZWQnXG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIG9uUGF1c2U6IGZ1bmN0aW9uIG9uUGF1c2UoKSB7XG4gICAgICAgIF90aGlzMi5kaXNwYXRjaCh7XG4gICAgICAgICAgdHlwZTogJ3BhdXNlJ1xuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICBvbkNvbnRpbnVlOiBmdW5jdGlvbiBvbkNvbnRpbnVlKCkge1xuICAgICAgICBfdGhpczIuZGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6ICdjb250aW51ZSdcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgcmV0cnk6IGNvbnRleHQub3B0aW9ucy5yZXRyeSxcbiAgICAgIHJldHJ5RGVsYXk6IGNvbnRleHQub3B0aW9ucy5yZXRyeURlbGF5XG4gICAgfSk7XG4gICAgdGhpcy5wcm9taXNlID0gdGhpcy5yZXRyeWVyLnByb21pc2U7XG4gICAgcmV0dXJuIHRoaXMucHJvbWlzZTtcbiAgfTtcblxuICBfcHJvdG8uZGlzcGF0Y2ggPSBmdW5jdGlvbiBkaXNwYXRjaChhY3Rpb24pIHtcbiAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgIHRoaXMuc3RhdGUgPSB0aGlzLnJlZHVjZXIodGhpcy5zdGF0ZSwgYWN0aW9uKTtcbiAgICBub3RpZnlNYW5hZ2VyLmJhdGNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzMy5vYnNlcnZlcnMuZm9yRWFjaChmdW5jdGlvbiAob2JzZXJ2ZXIpIHtcbiAgICAgICAgb2JzZXJ2ZXIub25RdWVyeVVwZGF0ZShhY3Rpb24pO1xuICAgICAgfSk7XG5cbiAgICAgIF90aGlzMy5jYWNoZS5ub3RpZnkoe1xuICAgICAgICBxdWVyeTogX3RoaXMzLFxuICAgICAgICB0eXBlOiAncXVlcnlVcGRhdGVkJyxcbiAgICAgICAgYWN0aW9uOiBhY3Rpb25cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5nZXREZWZhdWx0U3RhdGUgPSBmdW5jdGlvbiBnZXREZWZhdWx0U3RhdGUob3B0aW9ucykge1xuICAgIHZhciBkYXRhID0gdHlwZW9mIG9wdGlvbnMuaW5pdGlhbERhdGEgPT09ICdmdW5jdGlvbicgPyBvcHRpb25zLmluaXRpYWxEYXRhKCkgOiBvcHRpb25zLmluaXRpYWxEYXRhO1xuICAgIHZhciBoYXNJbml0aWFsRGF0YSA9IHR5cGVvZiBvcHRpb25zLmluaXRpYWxEYXRhICE9PSAndW5kZWZpbmVkJztcbiAgICB2YXIgaW5pdGlhbERhdGFVcGRhdGVkQXQgPSBoYXNJbml0aWFsRGF0YSA/IHR5cGVvZiBvcHRpb25zLmluaXRpYWxEYXRhVXBkYXRlZEF0ID09PSAnZnVuY3Rpb24nID8gb3B0aW9ucy5pbml0aWFsRGF0YVVwZGF0ZWRBdCgpIDogb3B0aW9ucy5pbml0aWFsRGF0YVVwZGF0ZWRBdCA6IDA7XG4gICAgdmFyIGhhc0RhdGEgPSB0eXBlb2YgZGF0YSAhPT0gJ3VuZGVmaW5lZCc7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRhdGE6IGRhdGEsXG4gICAgICBkYXRhVXBkYXRlQ291bnQ6IDAsXG4gICAgICBkYXRhVXBkYXRlZEF0OiBoYXNEYXRhID8gaW5pdGlhbERhdGFVcGRhdGVkQXQgIT0gbnVsbCA/IGluaXRpYWxEYXRhVXBkYXRlZEF0IDogRGF0ZS5ub3coKSA6IDAsXG4gICAgICBlcnJvcjogbnVsbCxcbiAgICAgIGVycm9yVXBkYXRlQ291bnQ6IDAsXG4gICAgICBlcnJvclVwZGF0ZWRBdDogMCxcbiAgICAgIGZldGNoRmFpbHVyZUNvdW50OiAwLFxuICAgICAgZmV0Y2hNZXRhOiBudWxsLFxuICAgICAgaXNGZXRjaGluZzogZmFsc2UsXG4gICAgICBpc0ludmFsaWRhdGVkOiBmYWxzZSxcbiAgICAgIGlzUGF1c2VkOiBmYWxzZSxcbiAgICAgIHN0YXR1czogaGFzRGF0YSA/ICdzdWNjZXNzJyA6ICdpZGxlJ1xuICAgIH07XG4gIH07XG5cbiAgX3Byb3RvLnJlZHVjZXIgPSBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlLCBhY3Rpb24pIHtcbiAgICB2YXIgX2FjdGlvbiRtZXRhLCBfYWN0aW9uJGRhdGFVcGRhdGVkQXQ7XG5cbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICBjYXNlICdmYWlsZWQnOlxuICAgICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgICAgICAgZmV0Y2hGYWlsdXJlQ291bnQ6IHN0YXRlLmZldGNoRmFpbHVyZUNvdW50ICsgMVxuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAncGF1c2UnOlxuICAgICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgICAgICAgaXNQYXVzZWQ6IHRydWVcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ2NvbnRpbnVlJzpcbiAgICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgICAgIGlzUGF1c2VkOiBmYWxzZVxuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnZmV0Y2gnOlxuICAgICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgICAgICAgZmV0Y2hGYWlsdXJlQ291bnQ6IDAsXG4gICAgICAgICAgZmV0Y2hNZXRhOiAoX2FjdGlvbiRtZXRhID0gYWN0aW9uLm1ldGEpICE9IG51bGwgPyBfYWN0aW9uJG1ldGEgOiBudWxsLFxuICAgICAgICAgIGlzRmV0Y2hpbmc6IHRydWUsXG4gICAgICAgICAgaXNQYXVzZWQ6IGZhbHNlLFxuICAgICAgICAgIHN0YXR1czogIXN0YXRlLmRhdGFVcGRhdGVkQXQgPyAnbG9hZGluZycgOiBzdGF0ZS5zdGF0dXNcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ3N1Y2Nlc3MnOlxuICAgICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgICAgICAgZGF0YTogYWN0aW9uLmRhdGEsXG4gICAgICAgICAgZGF0YVVwZGF0ZUNvdW50OiBzdGF0ZS5kYXRhVXBkYXRlQ291bnQgKyAxLFxuICAgICAgICAgIGRhdGFVcGRhdGVkQXQ6IChfYWN0aW9uJGRhdGFVcGRhdGVkQXQgPSBhY3Rpb24uZGF0YVVwZGF0ZWRBdCkgIT0gbnVsbCA/IF9hY3Rpb24kZGF0YVVwZGF0ZWRBdCA6IERhdGUubm93KCksXG4gICAgICAgICAgZXJyb3I6IG51bGwsXG4gICAgICAgICAgZmV0Y2hGYWlsdXJlQ291bnQ6IDAsXG4gICAgICAgICAgaXNGZXRjaGluZzogZmFsc2UsXG4gICAgICAgICAgaXNJbnZhbGlkYXRlZDogZmFsc2UsXG4gICAgICAgICAgaXNQYXVzZWQ6IGZhbHNlLFxuICAgICAgICAgIHN0YXR1czogJ3N1Y2Nlc3MnXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdlcnJvcic6XG4gICAgICAgIHZhciBlcnJvciA9IGFjdGlvbi5lcnJvcjtcblxuICAgICAgICBpZiAoaXNDYW5jZWxsZWRFcnJvcihlcnJvcikgJiYgZXJyb3IucmV2ZXJ0ICYmIHRoaXMucmV2ZXJ0U3RhdGUpIHtcbiAgICAgICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHRoaXMucmV2ZXJ0U3RhdGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgICAgIGVycm9yOiBlcnJvcixcbiAgICAgICAgICBlcnJvclVwZGF0ZUNvdW50OiBzdGF0ZS5lcnJvclVwZGF0ZUNvdW50ICsgMSxcbiAgICAgICAgICBlcnJvclVwZGF0ZWRBdDogRGF0ZS5ub3coKSxcbiAgICAgICAgICBmZXRjaEZhaWx1cmVDb3VudDogc3RhdGUuZmV0Y2hGYWlsdXJlQ291bnQgKyAxLFxuICAgICAgICAgIGlzRmV0Y2hpbmc6IGZhbHNlLFxuICAgICAgICAgIGlzUGF1c2VkOiBmYWxzZSxcbiAgICAgICAgICBzdGF0dXM6ICdlcnJvcidcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ2ludmFsaWRhdGUnOlxuICAgICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgICAgICAgaXNJbnZhbGlkYXRlZDogdHJ1ZVxuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnc2V0U3RhdGUnOlxuICAgICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCBhY3Rpb24uc3RhdGUpO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBRdWVyeTtcbn0oKTsiLCJpbXBvcnQgX2luaGVyaXRzTG9vc2UgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2luaGVyaXRzTG9vc2VcIjtcbmltcG9ydCB7IGhhc2hRdWVyeUtleUJ5T3B0aW9ucywgbWF0Y2hRdWVyeSwgcGFyc2VGaWx0ZXJBcmdzIH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgeyBRdWVyeSB9IGZyb20gJy4vcXVlcnknO1xuaW1wb3J0IHsgbm90aWZ5TWFuYWdlciB9IGZyb20gJy4vbm90aWZ5TWFuYWdlcic7XG5pbXBvcnQgeyBTdWJzY3JpYmFibGUgfSBmcm9tICcuL3N1YnNjcmliYWJsZSc7XG4vLyBDTEFTU1xuZXhwb3J0IHZhciBRdWVyeUNhY2hlID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfU3Vic2NyaWJhYmxlKSB7XG4gIF9pbmhlcml0c0xvb3NlKFF1ZXJ5Q2FjaGUsIF9TdWJzY3JpYmFibGUpO1xuXG4gIGZ1bmN0aW9uIFF1ZXJ5Q2FjaGUoY29uZmlnKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX3RoaXMgPSBfU3Vic2NyaWJhYmxlLmNhbGwodGhpcykgfHwgdGhpcztcbiAgICBfdGhpcy5jb25maWcgPSBjb25maWcgfHwge307XG4gICAgX3RoaXMucXVlcmllcyA9IFtdO1xuICAgIF90aGlzLnF1ZXJpZXNNYXAgPSB7fTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gUXVlcnlDYWNoZS5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmJ1aWxkID0gZnVuY3Rpb24gYnVpbGQoY2xpZW50LCBvcHRpb25zLCBzdGF0ZSkge1xuICAgIHZhciBfb3B0aW9ucyRxdWVyeUhhc2g7XG5cbiAgICB2YXIgcXVlcnlLZXkgPSBvcHRpb25zLnF1ZXJ5S2V5O1xuICAgIHZhciBxdWVyeUhhc2ggPSAoX29wdGlvbnMkcXVlcnlIYXNoID0gb3B0aW9ucy5xdWVyeUhhc2gpICE9IG51bGwgPyBfb3B0aW9ucyRxdWVyeUhhc2ggOiBoYXNoUXVlcnlLZXlCeU9wdGlvbnMocXVlcnlLZXksIG9wdGlvbnMpO1xuICAgIHZhciBxdWVyeSA9IHRoaXMuZ2V0KHF1ZXJ5SGFzaCk7XG5cbiAgICBpZiAoIXF1ZXJ5KSB7XG4gICAgICBxdWVyeSA9IG5ldyBRdWVyeSh7XG4gICAgICAgIGNhY2hlOiB0aGlzLFxuICAgICAgICBxdWVyeUtleTogcXVlcnlLZXksXG4gICAgICAgIHF1ZXJ5SGFzaDogcXVlcnlIYXNoLFxuICAgICAgICBvcHRpb25zOiBjbGllbnQuZGVmYXVsdFF1ZXJ5T3B0aW9ucyhvcHRpb25zKSxcbiAgICAgICAgc3RhdGU6IHN0YXRlLFxuICAgICAgICBkZWZhdWx0T3B0aW9uczogY2xpZW50LmdldFF1ZXJ5RGVmYXVsdHMocXVlcnlLZXkpXG4gICAgICB9KTtcbiAgICAgIHRoaXMuYWRkKHF1ZXJ5KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcXVlcnk7XG4gIH07XG5cbiAgX3Byb3RvLmFkZCA9IGZ1bmN0aW9uIGFkZChxdWVyeSkge1xuICAgIGlmICghdGhpcy5xdWVyaWVzTWFwW3F1ZXJ5LnF1ZXJ5SGFzaF0pIHtcbiAgICAgIHRoaXMucXVlcmllc01hcFtxdWVyeS5xdWVyeUhhc2hdID0gcXVlcnk7XG4gICAgICB0aGlzLnF1ZXJpZXMucHVzaChxdWVyeSk7XG4gICAgICB0aGlzLm5vdGlmeSh7XG4gICAgICAgIHR5cGU6ICdxdWVyeUFkZGVkJyxcbiAgICAgICAgcXVlcnk6IHF1ZXJ5XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLnJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZShxdWVyeSkge1xuICAgIHZhciBxdWVyeUluTWFwID0gdGhpcy5xdWVyaWVzTWFwW3F1ZXJ5LnF1ZXJ5SGFzaF07XG5cbiAgICBpZiAocXVlcnlJbk1hcCkge1xuICAgICAgcXVlcnkuZGVzdHJveSgpO1xuICAgICAgdGhpcy5xdWVyaWVzID0gdGhpcy5xdWVyaWVzLmZpbHRlcihmdW5jdGlvbiAoeCkge1xuICAgICAgICByZXR1cm4geCAhPT0gcXVlcnk7XG4gICAgICB9KTtcblxuICAgICAgaWYgKHF1ZXJ5SW5NYXAgPT09IHF1ZXJ5KSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLnF1ZXJpZXNNYXBbcXVlcnkucXVlcnlIYXNoXTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5ub3RpZnkoe1xuICAgICAgICB0eXBlOiAncXVlcnlSZW1vdmVkJyxcbiAgICAgICAgcXVlcnk6IHF1ZXJ5XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLmNsZWFyID0gZnVuY3Rpb24gY2xlYXIoKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICBub3RpZnlNYW5hZ2VyLmJhdGNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzMi5xdWVyaWVzLmZvckVhY2goZnVuY3Rpb24gKHF1ZXJ5KSB7XG4gICAgICAgIF90aGlzMi5yZW1vdmUocXVlcnkpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLmdldCA9IGZ1bmN0aW9uIGdldChxdWVyeUhhc2gpIHtcbiAgICByZXR1cm4gdGhpcy5xdWVyaWVzTWFwW3F1ZXJ5SGFzaF07XG4gIH07XG5cbiAgX3Byb3RvLmdldEFsbCA9IGZ1bmN0aW9uIGdldEFsbCgpIHtcbiAgICByZXR1cm4gdGhpcy5xdWVyaWVzO1xuICB9O1xuXG4gIF9wcm90by5maW5kID0gZnVuY3Rpb24gZmluZChhcmcxLCBhcmcyKSB7XG4gICAgdmFyIF9wYXJzZUZpbHRlckFyZ3MgPSBwYXJzZUZpbHRlckFyZ3MoYXJnMSwgYXJnMiksXG4gICAgICAgIGZpbHRlcnMgPSBfcGFyc2VGaWx0ZXJBcmdzWzBdO1xuXG4gICAgaWYgKHR5cGVvZiBmaWx0ZXJzLmV4YWN0ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgZmlsdGVycy5leGFjdCA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMucXVlcmllcy5maW5kKGZ1bmN0aW9uIChxdWVyeSkge1xuICAgICAgcmV0dXJuIG1hdGNoUXVlcnkoZmlsdGVycywgcXVlcnkpO1xuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5maW5kQWxsID0gZnVuY3Rpb24gZmluZEFsbChhcmcxLCBhcmcyKSB7XG4gICAgdmFyIF9wYXJzZUZpbHRlckFyZ3MyID0gcGFyc2VGaWx0ZXJBcmdzKGFyZzEsIGFyZzIpLFxuICAgICAgICBmaWx0ZXJzID0gX3BhcnNlRmlsdGVyQXJnczJbMF07XG5cbiAgICByZXR1cm4gZmlsdGVycyA/IHRoaXMucXVlcmllcy5maWx0ZXIoZnVuY3Rpb24gKHF1ZXJ5KSB7XG4gICAgICByZXR1cm4gbWF0Y2hRdWVyeShmaWx0ZXJzLCBxdWVyeSk7XG4gICAgfSkgOiB0aGlzLnF1ZXJpZXM7XG4gIH07XG5cbiAgX3Byb3RvLm5vdGlmeSA9IGZ1bmN0aW9uIG5vdGlmeShldmVudCkge1xuICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgbm90aWZ5TWFuYWdlci5iYXRjaChmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpczMubGlzdGVuZXJzLmZvckVhY2goZnVuY3Rpb24gKGxpc3RlbmVyKSB7XG4gICAgICAgIGxpc3RlbmVyKGV2ZW50KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5vbkZvY3VzID0gZnVuY3Rpb24gb25Gb2N1cygpIHtcbiAgICB2YXIgX3RoaXM0ID0gdGhpcztcblxuICAgIG5vdGlmeU1hbmFnZXIuYmF0Y2goZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXM0LnF1ZXJpZXMuZm9yRWFjaChmdW5jdGlvbiAocXVlcnkpIHtcbiAgICAgICAgcXVlcnkub25Gb2N1cygpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLm9uT25saW5lID0gZnVuY3Rpb24gb25PbmxpbmUoKSB7XG4gICAgdmFyIF90aGlzNSA9IHRoaXM7XG5cbiAgICBub3RpZnlNYW5hZ2VyLmJhdGNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzNS5xdWVyaWVzLmZvckVhY2goZnVuY3Rpb24gKHF1ZXJ5KSB7XG4gICAgICAgIHF1ZXJ5Lm9uT25saW5lKCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gUXVlcnlDYWNoZTtcbn0oU3Vic2NyaWJhYmxlKTsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCB7IGhhc2hRdWVyeUtleSwgbm9vcCwgcGFyc2VGaWx0ZXJBcmdzLCBwYXJzZVF1ZXJ5QXJncywgcGFydGlhbE1hdGNoS2V5LCBoYXNoUXVlcnlLZXlCeU9wdGlvbnMgfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7IFF1ZXJ5Q2FjaGUgfSBmcm9tICcuL3F1ZXJ5Q2FjaGUnO1xuaW1wb3J0IHsgTXV0YXRpb25DYWNoZSB9IGZyb20gJy4vbXV0YXRpb25DYWNoZSc7XG5pbXBvcnQgeyBmb2N1c01hbmFnZXIgfSBmcm9tICcuL2ZvY3VzTWFuYWdlcic7XG5pbXBvcnQgeyBvbmxpbmVNYW5hZ2VyIH0gZnJvbSAnLi9vbmxpbmVNYW5hZ2VyJztcbmltcG9ydCB7IG5vdGlmeU1hbmFnZXIgfSBmcm9tICcuL25vdGlmeU1hbmFnZXInO1xuaW1wb3J0IHsgaW5maW5pdGVRdWVyeUJlaGF2aW9yIH0gZnJvbSAnLi9pbmZpbml0ZVF1ZXJ5QmVoYXZpb3InOyAvLyBUWVBFU1xuXG4vLyBDTEFTU1xuZXhwb3J0IHZhciBRdWVyeUNsaWVudCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFF1ZXJ5Q2xpZW50KGNvbmZpZykge1xuICAgIGlmIChjb25maWcgPT09IHZvaWQgMCkge1xuICAgICAgY29uZmlnID0ge307XG4gICAgfVxuXG4gICAgdGhpcy5xdWVyeUNhY2hlID0gY29uZmlnLnF1ZXJ5Q2FjaGUgfHwgbmV3IFF1ZXJ5Q2FjaGUoKTtcbiAgICB0aGlzLm11dGF0aW9uQ2FjaGUgPSBjb25maWcubXV0YXRpb25DYWNoZSB8fCBuZXcgTXV0YXRpb25DYWNoZSgpO1xuICAgIHRoaXMuZGVmYXVsdE9wdGlvbnMgPSBjb25maWcuZGVmYXVsdE9wdGlvbnMgfHwge307XG4gICAgdGhpcy5xdWVyeURlZmF1bHRzID0gW107XG4gICAgdGhpcy5tdXRhdGlvbkRlZmF1bHRzID0gW107XG4gIH1cblxuICB2YXIgX3Byb3RvID0gUXVlcnlDbGllbnQucHJvdG90eXBlO1xuXG4gIF9wcm90by5tb3VudCA9IGZ1bmN0aW9uIG1vdW50KCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICB0aGlzLnVuc3Vic2NyaWJlRm9jdXMgPSBmb2N1c01hbmFnZXIuc3Vic2NyaWJlKGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChmb2N1c01hbmFnZXIuaXNGb2N1c2VkKCkgJiYgb25saW5lTWFuYWdlci5pc09ubGluZSgpKSB7XG4gICAgICAgIF90aGlzLm11dGF0aW9uQ2FjaGUub25Gb2N1cygpO1xuXG4gICAgICAgIF90aGlzLnF1ZXJ5Q2FjaGUub25Gb2N1cygpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMudW5zdWJzY3JpYmVPbmxpbmUgPSBvbmxpbmVNYW5hZ2VyLnN1YnNjcmliZShmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoZm9jdXNNYW5hZ2VyLmlzRm9jdXNlZCgpICYmIG9ubGluZU1hbmFnZXIuaXNPbmxpbmUoKSkge1xuICAgICAgICBfdGhpcy5tdXRhdGlvbkNhY2hlLm9uT25saW5lKCk7XG5cbiAgICAgICAgX3RoaXMucXVlcnlDYWNoZS5vbk9ubGluZSgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by51bm1vdW50ID0gZnVuY3Rpb24gdW5tb3VudCgpIHtcbiAgICB2YXIgX3RoaXMkdW5zdWJzY3JpYmVGb2N1LCBfdGhpcyR1bnN1YnNjcmliZU9ubGk7XG5cbiAgICAoX3RoaXMkdW5zdWJzY3JpYmVGb2N1ID0gdGhpcy51bnN1YnNjcmliZUZvY3VzKSA9PSBudWxsID8gdm9pZCAwIDogX3RoaXMkdW5zdWJzY3JpYmVGb2N1LmNhbGwodGhpcyk7XG4gICAgKF90aGlzJHVuc3Vic2NyaWJlT25saSA9IHRoaXMudW5zdWJzY3JpYmVPbmxpbmUpID09IG51bGwgPyB2b2lkIDAgOiBfdGhpcyR1bnN1YnNjcmliZU9ubGkuY2FsbCh0aGlzKTtcbiAgfTtcblxuICBfcHJvdG8uaXNGZXRjaGluZyA9IGZ1bmN0aW9uIGlzRmV0Y2hpbmcoYXJnMSwgYXJnMikge1xuICAgIHZhciBfcGFyc2VGaWx0ZXJBcmdzID0gcGFyc2VGaWx0ZXJBcmdzKGFyZzEsIGFyZzIpLFxuICAgICAgICBmaWx0ZXJzID0gX3BhcnNlRmlsdGVyQXJnc1swXTtcblxuICAgIGZpbHRlcnMuZmV0Y2hpbmcgPSB0cnVlO1xuICAgIHJldHVybiB0aGlzLnF1ZXJ5Q2FjaGUuZmluZEFsbChmaWx0ZXJzKS5sZW5ndGg7XG4gIH07XG5cbiAgX3Byb3RvLmlzTXV0YXRpbmcgPSBmdW5jdGlvbiBpc011dGF0aW5nKGZpbHRlcnMpIHtcbiAgICByZXR1cm4gdGhpcy5tdXRhdGlvbkNhY2hlLmZpbmRBbGwoX2V4dGVuZHMoe30sIGZpbHRlcnMsIHtcbiAgICAgIGZldGNoaW5nOiB0cnVlXG4gICAgfSkpLmxlbmd0aDtcbiAgfTtcblxuICBfcHJvdG8uZ2V0UXVlcnlEYXRhID0gZnVuY3Rpb24gZ2V0UXVlcnlEYXRhKHF1ZXJ5S2V5LCBmaWx0ZXJzKSB7XG4gICAgdmFyIF90aGlzJHF1ZXJ5Q2FjaGUkZmluZDtcblxuICAgIHJldHVybiAoX3RoaXMkcXVlcnlDYWNoZSRmaW5kID0gdGhpcy5xdWVyeUNhY2hlLmZpbmQocXVlcnlLZXksIGZpbHRlcnMpKSA9PSBudWxsID8gdm9pZCAwIDogX3RoaXMkcXVlcnlDYWNoZSRmaW5kLnN0YXRlLmRhdGE7XG4gIH07XG5cbiAgX3Byb3RvLnNldFF1ZXJ5RGF0YSA9IGZ1bmN0aW9uIHNldFF1ZXJ5RGF0YShxdWVyeUtleSwgdXBkYXRlciwgb3B0aW9ucykge1xuICAgIHZhciBwYXJzZWRPcHRpb25zID0gcGFyc2VRdWVyeUFyZ3MocXVlcnlLZXkpO1xuICAgIHZhciBkZWZhdWx0ZWRPcHRpb25zID0gdGhpcy5kZWZhdWx0UXVlcnlPcHRpb25zKHBhcnNlZE9wdGlvbnMpO1xuICAgIHJldHVybiB0aGlzLnF1ZXJ5Q2FjaGUuYnVpbGQodGhpcywgZGVmYXVsdGVkT3B0aW9ucykuc2V0RGF0YSh1cGRhdGVyLCBvcHRpb25zKTtcbiAgfTtcblxuICBfcHJvdG8uc2V0UXVlcmllc0RhdGEgPSBmdW5jdGlvbiBzZXRRdWVyaWVzRGF0YShxdWVyeUtleU9yRmlsdGVycywgdXBkYXRlciwgb3B0aW9ucykge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgcmV0dXJuIG5vdGlmeU1hbmFnZXIuYmF0Y2goZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIF90aGlzMi5nZXRRdWVyeUNhY2hlKCkuZmluZEFsbChxdWVyeUtleU9yRmlsdGVycykubWFwKGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgICAgIHZhciBxdWVyeUtleSA9IF9yZWYucXVlcnlLZXk7XG4gICAgICAgIHJldHVybiBbcXVlcnlLZXksIF90aGlzMi5zZXRRdWVyeURhdGEocXVlcnlLZXksIHVwZGF0ZXIsIG9wdGlvbnMpXTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5nZXRRdWVyeVN0YXRlID0gZnVuY3Rpb24gZ2V0UXVlcnlTdGF0ZShxdWVyeUtleSwgZmlsdGVycykge1xuICAgIHZhciBfdGhpcyRxdWVyeUNhY2hlJGZpbmQyO1xuXG4gICAgcmV0dXJuIChfdGhpcyRxdWVyeUNhY2hlJGZpbmQyID0gdGhpcy5xdWVyeUNhY2hlLmZpbmQocXVlcnlLZXksIGZpbHRlcnMpKSA9PSBudWxsID8gdm9pZCAwIDogX3RoaXMkcXVlcnlDYWNoZSRmaW5kMi5zdGF0ZTtcbiAgfTtcblxuICBfcHJvdG8ucmVtb3ZlUXVlcmllcyA9IGZ1bmN0aW9uIHJlbW92ZVF1ZXJpZXMoYXJnMSwgYXJnMikge1xuICAgIHZhciBfcGFyc2VGaWx0ZXJBcmdzMiA9IHBhcnNlRmlsdGVyQXJncyhhcmcxLCBhcmcyKSxcbiAgICAgICAgZmlsdGVycyA9IF9wYXJzZUZpbHRlckFyZ3MyWzBdO1xuXG4gICAgdmFyIHF1ZXJ5Q2FjaGUgPSB0aGlzLnF1ZXJ5Q2FjaGU7XG4gICAgbm90aWZ5TWFuYWdlci5iYXRjaChmdW5jdGlvbiAoKSB7XG4gICAgICBxdWVyeUNhY2hlLmZpbmRBbGwoZmlsdGVycykuZm9yRWFjaChmdW5jdGlvbiAocXVlcnkpIHtcbiAgICAgICAgcXVlcnlDYWNoZS5yZW1vdmUocXVlcnkpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLnJlc2V0UXVlcmllcyA9IGZ1bmN0aW9uIHJlc2V0UXVlcmllcyhhcmcxLCBhcmcyLCBhcmczKSB7XG4gICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICB2YXIgX3BhcnNlRmlsdGVyQXJnczMgPSBwYXJzZUZpbHRlckFyZ3MoYXJnMSwgYXJnMiwgYXJnMyksXG4gICAgICAgIGZpbHRlcnMgPSBfcGFyc2VGaWx0ZXJBcmdzM1swXSxcbiAgICAgICAgb3B0aW9ucyA9IF9wYXJzZUZpbHRlckFyZ3MzWzFdO1xuXG4gICAgdmFyIHF1ZXJ5Q2FjaGUgPSB0aGlzLnF1ZXJ5Q2FjaGU7XG5cbiAgICB2YXIgcmVmZXRjaEZpbHRlcnMgPSBfZXh0ZW5kcyh7fSwgZmlsdGVycywge1xuICAgICAgYWN0aXZlOiB0cnVlXG4gICAgfSk7XG5cbiAgICByZXR1cm4gbm90aWZ5TWFuYWdlci5iYXRjaChmdW5jdGlvbiAoKSB7XG4gICAgICBxdWVyeUNhY2hlLmZpbmRBbGwoZmlsdGVycykuZm9yRWFjaChmdW5jdGlvbiAocXVlcnkpIHtcbiAgICAgICAgcXVlcnkucmVzZXQoKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIF90aGlzMy5yZWZldGNoUXVlcmllcyhyZWZldGNoRmlsdGVycywgb3B0aW9ucyk7XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLmNhbmNlbFF1ZXJpZXMgPSBmdW5jdGlvbiBjYW5jZWxRdWVyaWVzKGFyZzEsIGFyZzIsIGFyZzMpIHtcbiAgICB2YXIgX3RoaXM0ID0gdGhpcztcblxuICAgIHZhciBfcGFyc2VGaWx0ZXJBcmdzNCA9IHBhcnNlRmlsdGVyQXJncyhhcmcxLCBhcmcyLCBhcmczKSxcbiAgICAgICAgZmlsdGVycyA9IF9wYXJzZUZpbHRlckFyZ3M0WzBdLFxuICAgICAgICBfcGFyc2VGaWx0ZXJBcmdzNCQgPSBfcGFyc2VGaWx0ZXJBcmdzNFsxXSxcbiAgICAgICAgY2FuY2VsT3B0aW9ucyA9IF9wYXJzZUZpbHRlckFyZ3M0JCA9PT0gdm9pZCAwID8ge30gOiBfcGFyc2VGaWx0ZXJBcmdzNCQ7XG5cbiAgICBpZiAodHlwZW9mIGNhbmNlbE9wdGlvbnMucmV2ZXJ0ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgY2FuY2VsT3B0aW9ucy5yZXZlcnQgPSB0cnVlO1xuICAgIH1cblxuICAgIHZhciBwcm9taXNlcyA9IG5vdGlmeU1hbmFnZXIuYmF0Y2goZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIF90aGlzNC5xdWVyeUNhY2hlLmZpbmRBbGwoZmlsdGVycykubWFwKGZ1bmN0aW9uIChxdWVyeSkge1xuICAgICAgICByZXR1cm4gcXVlcnkuY2FuY2VsKGNhbmNlbE9wdGlvbnMpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKG5vb3ApLmNhdGNoKG5vb3ApO1xuICB9O1xuXG4gIF9wcm90by5pbnZhbGlkYXRlUXVlcmllcyA9IGZ1bmN0aW9uIGludmFsaWRhdGVRdWVyaWVzKGFyZzEsIGFyZzIsIGFyZzMpIHtcbiAgICB2YXIgX3JlZjIsXG4gICAgICAgIF9maWx0ZXJzJHJlZmV0Y2hBY3RpdixcbiAgICAgICAgX2ZpbHRlcnMkcmVmZXRjaEluYWN0LFxuICAgICAgICBfdGhpczUgPSB0aGlzO1xuXG4gICAgdmFyIF9wYXJzZUZpbHRlckFyZ3M1ID0gcGFyc2VGaWx0ZXJBcmdzKGFyZzEsIGFyZzIsIGFyZzMpLFxuICAgICAgICBmaWx0ZXJzID0gX3BhcnNlRmlsdGVyQXJnczVbMF0sXG4gICAgICAgIG9wdGlvbnMgPSBfcGFyc2VGaWx0ZXJBcmdzNVsxXTtcblxuICAgIHZhciByZWZldGNoRmlsdGVycyA9IF9leHRlbmRzKHt9LCBmaWx0ZXJzLCB7XG4gICAgICAvLyBpZiBmaWx0ZXJzLnJlZmV0Y2hBY3RpdmUgaXMgbm90IHByb3ZpZGVkIGFuZCBmaWx0ZXJzLmFjdGl2ZSBpcyBleHBsaWNpdGx5IGZhbHNlLFxuICAgICAgLy8gZS5nLiBpbnZhbGlkYXRlUXVlcmllcyh7IGFjdGl2ZTogZmFsc2UgfSksIHdlIGRvbid0IHdhbnQgdG8gcmVmZXRjaCBhY3RpdmUgcXVlcmllc1xuICAgICAgYWN0aXZlOiAoX3JlZjIgPSAoX2ZpbHRlcnMkcmVmZXRjaEFjdGl2ID0gZmlsdGVycy5yZWZldGNoQWN0aXZlKSAhPSBudWxsID8gX2ZpbHRlcnMkcmVmZXRjaEFjdGl2IDogZmlsdGVycy5hY3RpdmUpICE9IG51bGwgPyBfcmVmMiA6IHRydWUsXG4gICAgICBpbmFjdGl2ZTogKF9maWx0ZXJzJHJlZmV0Y2hJbmFjdCA9IGZpbHRlcnMucmVmZXRjaEluYWN0aXZlKSAhPSBudWxsID8gX2ZpbHRlcnMkcmVmZXRjaEluYWN0IDogZmFsc2VcbiAgICB9KTtcblxuICAgIHJldHVybiBub3RpZnlNYW5hZ2VyLmJhdGNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzNS5xdWVyeUNhY2hlLmZpbmRBbGwoZmlsdGVycykuZm9yRWFjaChmdW5jdGlvbiAocXVlcnkpIHtcbiAgICAgICAgcXVlcnkuaW52YWxpZGF0ZSgpO1xuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBfdGhpczUucmVmZXRjaFF1ZXJpZXMocmVmZXRjaEZpbHRlcnMsIG9wdGlvbnMpO1xuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5yZWZldGNoUXVlcmllcyA9IGZ1bmN0aW9uIHJlZmV0Y2hRdWVyaWVzKGFyZzEsIGFyZzIsIGFyZzMpIHtcbiAgICB2YXIgX3RoaXM2ID0gdGhpcztcblxuICAgIHZhciBfcGFyc2VGaWx0ZXJBcmdzNiA9IHBhcnNlRmlsdGVyQXJncyhhcmcxLCBhcmcyLCBhcmczKSxcbiAgICAgICAgZmlsdGVycyA9IF9wYXJzZUZpbHRlckFyZ3M2WzBdLFxuICAgICAgICBvcHRpb25zID0gX3BhcnNlRmlsdGVyQXJnczZbMV07XG5cbiAgICB2YXIgcHJvbWlzZXMgPSBub3RpZnlNYW5hZ2VyLmJhdGNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBfdGhpczYucXVlcnlDYWNoZS5maW5kQWxsKGZpbHRlcnMpLm1hcChmdW5jdGlvbiAocXVlcnkpIHtcbiAgICAgICAgcmV0dXJuIHF1ZXJ5LmZldGNoKCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICB2YXIgcHJvbWlzZSA9IFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKG5vb3ApO1xuXG4gICAgaWYgKCEob3B0aW9ucyA9PSBudWxsID8gdm9pZCAwIDogb3B0aW9ucy50aHJvd09uRXJyb3IpKSB7XG4gICAgICBwcm9taXNlID0gcHJvbWlzZS5jYXRjaChub29wKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvbWlzZTtcbiAgfTtcblxuICBfcHJvdG8uZmV0Y2hRdWVyeSA9IGZ1bmN0aW9uIGZldGNoUXVlcnkoYXJnMSwgYXJnMiwgYXJnMykge1xuICAgIHZhciBwYXJzZWRPcHRpb25zID0gcGFyc2VRdWVyeUFyZ3MoYXJnMSwgYXJnMiwgYXJnMyk7XG4gICAgdmFyIGRlZmF1bHRlZE9wdGlvbnMgPSB0aGlzLmRlZmF1bHRRdWVyeU9wdGlvbnMocGFyc2VkT3B0aW9ucyk7IC8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YW5uZXJsaW5zbGV5L3JlYWN0LXF1ZXJ5L2lzc3Vlcy82NTJcblxuICAgIGlmICh0eXBlb2YgZGVmYXVsdGVkT3B0aW9ucy5yZXRyeSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGRlZmF1bHRlZE9wdGlvbnMucmV0cnkgPSBmYWxzZTtcbiAgICB9XG5cbiAgICB2YXIgcXVlcnkgPSB0aGlzLnF1ZXJ5Q2FjaGUuYnVpbGQodGhpcywgZGVmYXVsdGVkT3B0aW9ucyk7XG4gICAgcmV0dXJuIHF1ZXJ5LmlzU3RhbGVCeVRpbWUoZGVmYXVsdGVkT3B0aW9ucy5zdGFsZVRpbWUpID8gcXVlcnkuZmV0Y2goZGVmYXVsdGVkT3B0aW9ucykgOiBQcm9taXNlLnJlc29sdmUocXVlcnkuc3RhdGUuZGF0YSk7XG4gIH07XG5cbiAgX3Byb3RvLnByZWZldGNoUXVlcnkgPSBmdW5jdGlvbiBwcmVmZXRjaFF1ZXJ5KGFyZzEsIGFyZzIsIGFyZzMpIHtcbiAgICByZXR1cm4gdGhpcy5mZXRjaFF1ZXJ5KGFyZzEsIGFyZzIsIGFyZzMpLnRoZW4obm9vcCkuY2F0Y2gobm9vcCk7XG4gIH07XG5cbiAgX3Byb3RvLmZldGNoSW5maW5pdGVRdWVyeSA9IGZ1bmN0aW9uIGZldGNoSW5maW5pdGVRdWVyeShhcmcxLCBhcmcyLCBhcmczKSB7XG4gICAgdmFyIHBhcnNlZE9wdGlvbnMgPSBwYXJzZVF1ZXJ5QXJncyhhcmcxLCBhcmcyLCBhcmczKTtcbiAgICBwYXJzZWRPcHRpb25zLmJlaGF2aW9yID0gaW5maW5pdGVRdWVyeUJlaGF2aW9yKCk7XG4gICAgcmV0dXJuIHRoaXMuZmV0Y2hRdWVyeShwYXJzZWRPcHRpb25zKTtcbiAgfTtcblxuICBfcHJvdG8ucHJlZmV0Y2hJbmZpbml0ZVF1ZXJ5ID0gZnVuY3Rpb24gcHJlZmV0Y2hJbmZpbml0ZVF1ZXJ5KGFyZzEsIGFyZzIsIGFyZzMpIHtcbiAgICByZXR1cm4gdGhpcy5mZXRjaEluZmluaXRlUXVlcnkoYXJnMSwgYXJnMiwgYXJnMykudGhlbihub29wKS5jYXRjaChub29wKTtcbiAgfTtcblxuICBfcHJvdG8uY2FuY2VsTXV0YXRpb25zID0gZnVuY3Rpb24gY2FuY2VsTXV0YXRpb25zKCkge1xuICAgIHZhciBfdGhpczcgPSB0aGlzO1xuXG4gICAgdmFyIHByb21pc2VzID0gbm90aWZ5TWFuYWdlci5iYXRjaChmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gX3RoaXM3Lm11dGF0aW9uQ2FjaGUuZ2V0QWxsKCkubWFwKGZ1bmN0aW9uIChtdXRhdGlvbikge1xuICAgICAgICByZXR1cm4gbXV0YXRpb24uY2FuY2VsKCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpLnRoZW4obm9vcCkuY2F0Y2gobm9vcCk7XG4gIH07XG5cbiAgX3Byb3RvLnJlc3VtZVBhdXNlZE11dGF0aW9ucyA9IGZ1bmN0aW9uIHJlc3VtZVBhdXNlZE11dGF0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRNdXRhdGlvbkNhY2hlKCkucmVzdW1lUGF1c2VkTXV0YXRpb25zKCk7XG4gIH07XG5cbiAgX3Byb3RvLmV4ZWN1dGVNdXRhdGlvbiA9IGZ1bmN0aW9uIGV4ZWN1dGVNdXRhdGlvbihvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRoaXMubXV0YXRpb25DYWNoZS5idWlsZCh0aGlzLCBvcHRpb25zKS5leGVjdXRlKCk7XG4gIH07XG5cbiAgX3Byb3RvLmdldFF1ZXJ5Q2FjaGUgPSBmdW5jdGlvbiBnZXRRdWVyeUNhY2hlKCkge1xuICAgIHJldHVybiB0aGlzLnF1ZXJ5Q2FjaGU7XG4gIH07XG5cbiAgX3Byb3RvLmdldE11dGF0aW9uQ2FjaGUgPSBmdW5jdGlvbiBnZXRNdXRhdGlvbkNhY2hlKCkge1xuICAgIHJldHVybiB0aGlzLm11dGF0aW9uQ2FjaGU7XG4gIH07XG5cbiAgX3Byb3RvLmdldERlZmF1bHRPcHRpb25zID0gZnVuY3Rpb24gZ2V0RGVmYXVsdE9wdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVmYXVsdE9wdGlvbnM7XG4gIH07XG5cbiAgX3Byb3RvLnNldERlZmF1bHRPcHRpb25zID0gZnVuY3Rpb24gc2V0RGVmYXVsdE9wdGlvbnMob3B0aW9ucykge1xuICAgIHRoaXMuZGVmYXVsdE9wdGlvbnMgPSBvcHRpb25zO1xuICB9O1xuXG4gIF9wcm90by5zZXRRdWVyeURlZmF1bHRzID0gZnVuY3Rpb24gc2V0UXVlcnlEZWZhdWx0cyhxdWVyeUtleSwgb3B0aW9ucykge1xuICAgIHZhciByZXN1bHQgPSB0aGlzLnF1ZXJ5RGVmYXVsdHMuZmluZChmdW5jdGlvbiAoeCkge1xuICAgICAgcmV0dXJuIGhhc2hRdWVyeUtleShxdWVyeUtleSkgPT09IGhhc2hRdWVyeUtleSh4LnF1ZXJ5S2V5KTtcbiAgICB9KTtcblxuICAgIGlmIChyZXN1bHQpIHtcbiAgICAgIHJlc3VsdC5kZWZhdWx0T3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucXVlcnlEZWZhdWx0cy5wdXNoKHtcbiAgICAgICAgcXVlcnlLZXk6IHF1ZXJ5S2V5LFxuICAgICAgICBkZWZhdWx0T3B0aW9uczogb3B0aW9uc1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5nZXRRdWVyeURlZmF1bHRzID0gZnVuY3Rpb24gZ2V0UXVlcnlEZWZhdWx0cyhxdWVyeUtleSkge1xuICAgIHZhciBfdGhpcyRxdWVyeURlZmF1bHRzJGY7XG5cbiAgICByZXR1cm4gcXVlcnlLZXkgPyAoX3RoaXMkcXVlcnlEZWZhdWx0cyRmID0gdGhpcy5xdWVyeURlZmF1bHRzLmZpbmQoZnVuY3Rpb24gKHgpIHtcbiAgICAgIHJldHVybiBwYXJ0aWFsTWF0Y2hLZXkocXVlcnlLZXksIHgucXVlcnlLZXkpO1xuICAgIH0pKSA9PSBudWxsID8gdm9pZCAwIDogX3RoaXMkcXVlcnlEZWZhdWx0cyRmLmRlZmF1bHRPcHRpb25zIDogdW5kZWZpbmVkO1xuICB9O1xuXG4gIF9wcm90by5zZXRNdXRhdGlvbkRlZmF1bHRzID0gZnVuY3Rpb24gc2V0TXV0YXRpb25EZWZhdWx0cyhtdXRhdGlvbktleSwgb3B0aW9ucykge1xuICAgIHZhciByZXN1bHQgPSB0aGlzLm11dGF0aW9uRGVmYXVsdHMuZmluZChmdW5jdGlvbiAoeCkge1xuICAgICAgcmV0dXJuIGhhc2hRdWVyeUtleShtdXRhdGlvbktleSkgPT09IGhhc2hRdWVyeUtleSh4Lm11dGF0aW9uS2V5KTtcbiAgICB9KTtcblxuICAgIGlmIChyZXN1bHQpIHtcbiAgICAgIHJlc3VsdC5kZWZhdWx0T3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubXV0YXRpb25EZWZhdWx0cy5wdXNoKHtcbiAgICAgICAgbXV0YXRpb25LZXk6IG11dGF0aW9uS2V5LFxuICAgICAgICBkZWZhdWx0T3B0aW9uczogb3B0aW9uc1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5nZXRNdXRhdGlvbkRlZmF1bHRzID0gZnVuY3Rpb24gZ2V0TXV0YXRpb25EZWZhdWx0cyhtdXRhdGlvbktleSkge1xuICAgIHZhciBfdGhpcyRtdXRhdGlvbkRlZmF1bHQ7XG5cbiAgICByZXR1cm4gbXV0YXRpb25LZXkgPyAoX3RoaXMkbXV0YXRpb25EZWZhdWx0ID0gdGhpcy5tdXRhdGlvbkRlZmF1bHRzLmZpbmQoZnVuY3Rpb24gKHgpIHtcbiAgICAgIHJldHVybiBwYXJ0aWFsTWF0Y2hLZXkobXV0YXRpb25LZXksIHgubXV0YXRpb25LZXkpO1xuICAgIH0pKSA9PSBudWxsID8gdm9pZCAwIDogX3RoaXMkbXV0YXRpb25EZWZhdWx0LmRlZmF1bHRPcHRpb25zIDogdW5kZWZpbmVkO1xuICB9O1xuXG4gIF9wcm90by5kZWZhdWx0UXVlcnlPcHRpb25zID0gZnVuY3Rpb24gZGVmYXVsdFF1ZXJ5T3B0aW9ucyhvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT0gbnVsbCA/IHZvaWQgMCA6IG9wdGlvbnMuX2RlZmF1bHRlZCkge1xuICAgICAgcmV0dXJuIG9wdGlvbnM7XG4gICAgfVxuXG4gICAgdmFyIGRlZmF1bHRlZE9wdGlvbnMgPSBfZXh0ZW5kcyh7fSwgdGhpcy5kZWZhdWx0T3B0aW9ucy5xdWVyaWVzLCB0aGlzLmdldFF1ZXJ5RGVmYXVsdHMob3B0aW9ucyA9PSBudWxsID8gdm9pZCAwIDogb3B0aW9ucy5xdWVyeUtleSksIG9wdGlvbnMsIHtcbiAgICAgIF9kZWZhdWx0ZWQ6IHRydWVcbiAgICB9KTtcblxuICAgIGlmICghZGVmYXVsdGVkT3B0aW9ucy5xdWVyeUhhc2ggJiYgZGVmYXVsdGVkT3B0aW9ucy5xdWVyeUtleSkge1xuICAgICAgZGVmYXVsdGVkT3B0aW9ucy5xdWVyeUhhc2ggPSBoYXNoUXVlcnlLZXlCeU9wdGlvbnMoZGVmYXVsdGVkT3B0aW9ucy5xdWVyeUtleSwgZGVmYXVsdGVkT3B0aW9ucyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRlZmF1bHRlZE9wdGlvbnM7XG4gIH07XG5cbiAgX3Byb3RvLmRlZmF1bHRRdWVyeU9ic2VydmVyT3B0aW9ucyA9IGZ1bmN0aW9uIGRlZmF1bHRRdWVyeU9ic2VydmVyT3B0aW9ucyhvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVmYXVsdFF1ZXJ5T3B0aW9ucyhvcHRpb25zKTtcbiAgfTtcblxuICBfcHJvdG8uZGVmYXVsdE11dGF0aW9uT3B0aW9ucyA9IGZ1bmN0aW9uIGRlZmF1bHRNdXRhdGlvbk9wdGlvbnMob3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09IG51bGwgPyB2b2lkIDAgOiBvcHRpb25zLl9kZWZhdWx0ZWQpIHtcbiAgICAgIHJldHVybiBvcHRpb25zO1xuICAgIH1cblxuICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgdGhpcy5kZWZhdWx0T3B0aW9ucy5tdXRhdGlvbnMsIHRoaXMuZ2V0TXV0YXRpb25EZWZhdWx0cyhvcHRpb25zID09IG51bGwgPyB2b2lkIDAgOiBvcHRpb25zLm11dGF0aW9uS2V5KSwgb3B0aW9ucywge1xuICAgICAgX2RlZmF1bHRlZDogdHJ1ZVxuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5jbGVhciA9IGZ1bmN0aW9uIGNsZWFyKCkge1xuICAgIHRoaXMucXVlcnlDYWNoZS5jbGVhcigpO1xuICAgIHRoaXMubXV0YXRpb25DYWNoZS5jbGVhcigpO1xuICB9O1xuXG4gIHJldHVybiBRdWVyeUNsaWVudDtcbn0oKTsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfaW5oZXJpdHNMb29zZSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHNMb29zZVwiO1xuaW1wb3J0IHsgaXNTZXJ2ZXIsIGlzVmFsaWRUaW1lb3V0LCBub29wLCByZXBsYWNlRXF1YWxEZWVwLCBzaGFsbG93RXF1YWxPYmplY3RzLCB0aW1lVW50aWxTdGFsZSB9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHsgbm90aWZ5TWFuYWdlciB9IGZyb20gJy4vbm90aWZ5TWFuYWdlcic7XG5pbXBvcnQgeyBmb2N1c01hbmFnZXIgfSBmcm9tICcuL2ZvY3VzTWFuYWdlcic7XG5pbXBvcnQgeyBTdWJzY3JpYmFibGUgfSBmcm9tICcuL3N1YnNjcmliYWJsZSc7XG5pbXBvcnQgeyBnZXRMb2dnZXIgfSBmcm9tICcuL2xvZ2dlcic7XG5pbXBvcnQgeyBpc0NhbmNlbGxlZEVycm9yIH0gZnJvbSAnLi9yZXRyeWVyJztcbmV4cG9ydCB2YXIgUXVlcnlPYnNlcnZlciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1N1YnNjcmliYWJsZSkge1xuICBfaW5oZXJpdHNMb29zZShRdWVyeU9ic2VydmVyLCBfU3Vic2NyaWJhYmxlKTtcblxuICBmdW5jdGlvbiBRdWVyeU9ic2VydmVyKGNsaWVudCwgb3B0aW9ucykge1xuICAgIHZhciBfdGhpcztcblxuICAgIF90aGlzID0gX1N1YnNjcmliYWJsZS5jYWxsKHRoaXMpIHx8IHRoaXM7XG4gICAgX3RoaXMuY2xpZW50ID0gY2xpZW50O1xuICAgIF90aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgIF90aGlzLnRyYWNrZWRQcm9wcyA9IFtdO1xuICAgIF90aGlzLnByZXZpb3VzU2VsZWN0RXJyb3IgPSBudWxsO1xuXG4gICAgX3RoaXMuYmluZE1ldGhvZHMoKTtcblxuICAgIF90aGlzLnNldE9wdGlvbnMob3B0aW9ucyk7XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gUXVlcnlPYnNlcnZlci5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmJpbmRNZXRob2RzID0gZnVuY3Rpb24gYmluZE1ldGhvZHMoKSB7XG4gICAgdGhpcy5yZW1vdmUgPSB0aGlzLnJlbW92ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMucmVmZXRjaCA9IHRoaXMucmVmZXRjaC5iaW5kKHRoaXMpO1xuICB9O1xuXG4gIF9wcm90by5vblN1YnNjcmliZSA9IGZ1bmN0aW9uIG9uU3Vic2NyaWJlKCkge1xuICAgIGlmICh0aGlzLmxpc3RlbmVycy5sZW5ndGggPT09IDEpIHtcbiAgICAgIHRoaXMuY3VycmVudFF1ZXJ5LmFkZE9ic2VydmVyKHRoaXMpO1xuXG4gICAgICBpZiAoc2hvdWxkRmV0Y2hPbk1vdW50KHRoaXMuY3VycmVudFF1ZXJ5LCB0aGlzLm9wdGlvbnMpKSB7XG4gICAgICAgIHRoaXMuZXhlY3V0ZUZldGNoKCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMudXBkYXRlVGltZXJzKCk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5vblVuc3Vic2NyaWJlID0gZnVuY3Rpb24gb25VbnN1YnNjcmliZSgpIHtcbiAgICBpZiAoIXRoaXMubGlzdGVuZXJzLmxlbmd0aCkge1xuICAgICAgdGhpcy5kZXN0cm95KCk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5zaG91bGRGZXRjaE9uUmVjb25uZWN0ID0gZnVuY3Rpb24gc2hvdWxkRmV0Y2hPblJlY29ubmVjdCgpIHtcbiAgICByZXR1cm4gX3Nob3VsZEZldGNoT25SZWNvbm5lY3QodGhpcy5jdXJyZW50UXVlcnksIHRoaXMub3B0aW9ucyk7XG4gIH07XG5cbiAgX3Byb3RvLnNob3VsZEZldGNoT25XaW5kb3dGb2N1cyA9IGZ1bmN0aW9uIHNob3VsZEZldGNoT25XaW5kb3dGb2N1cygpIHtcbiAgICByZXR1cm4gX3Nob3VsZEZldGNoT25XaW5kb3dGb2N1cyh0aGlzLmN1cnJlbnRRdWVyeSwgdGhpcy5vcHRpb25zKTtcbiAgfTtcblxuICBfcHJvdG8uZGVzdHJveSA9IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgdGhpcy5saXN0ZW5lcnMgPSBbXTtcbiAgICB0aGlzLmNsZWFyVGltZXJzKCk7XG4gICAgdGhpcy5jdXJyZW50UXVlcnkucmVtb3ZlT2JzZXJ2ZXIodGhpcyk7XG4gIH07XG5cbiAgX3Byb3RvLnNldE9wdGlvbnMgPSBmdW5jdGlvbiBzZXRPcHRpb25zKG9wdGlvbnMsIG5vdGlmeU9wdGlvbnMpIHtcbiAgICB2YXIgcHJldk9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG4gICAgdmFyIHByZXZRdWVyeSA9IHRoaXMuY3VycmVudFF1ZXJ5O1xuICAgIHRoaXMub3B0aW9ucyA9IHRoaXMuY2xpZW50LmRlZmF1bHRRdWVyeU9ic2VydmVyT3B0aW9ucyhvcHRpb25zKTtcblxuICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLmVuYWJsZWQgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiB0aGlzLm9wdGlvbnMuZW5hYmxlZCAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIGVuYWJsZWQgdG8gYmUgYSBib29sZWFuJyk7XG4gICAgfSAvLyBLZWVwIHByZXZpb3VzIHF1ZXJ5IGtleSBpZiB0aGUgdXNlciBkb2VzIG5vdCBzdXBwbHkgb25lXG5cblxuICAgIGlmICghdGhpcy5vcHRpb25zLnF1ZXJ5S2V5KSB7XG4gICAgICB0aGlzLm9wdGlvbnMucXVlcnlLZXkgPSBwcmV2T3B0aW9ucy5xdWVyeUtleTtcbiAgICB9XG5cbiAgICB0aGlzLnVwZGF0ZVF1ZXJ5KCk7XG4gICAgdmFyIG1vdW50ZWQgPSB0aGlzLmhhc0xpc3RlbmVycygpOyAvLyBGZXRjaCBpZiB0aGVyZSBhcmUgc3Vic2NyaWJlcnNcblxuICAgIGlmIChtb3VudGVkICYmIHNob3VsZEZldGNoT3B0aW9uYWxseSh0aGlzLmN1cnJlbnRRdWVyeSwgcHJldlF1ZXJ5LCB0aGlzLm9wdGlvbnMsIHByZXZPcHRpb25zKSkge1xuICAgICAgdGhpcy5leGVjdXRlRmV0Y2goKTtcbiAgICB9IC8vIFVwZGF0ZSByZXN1bHRcblxuXG4gICAgdGhpcy51cGRhdGVSZXN1bHQobm90aWZ5T3B0aW9ucyk7IC8vIFVwZGF0ZSBzdGFsZSBpbnRlcnZhbCBpZiBuZWVkZWRcblxuICAgIGlmIChtb3VudGVkICYmICh0aGlzLmN1cnJlbnRRdWVyeSAhPT0gcHJldlF1ZXJ5IHx8IHRoaXMub3B0aW9ucy5lbmFibGVkICE9PSBwcmV2T3B0aW9ucy5lbmFibGVkIHx8IHRoaXMub3B0aW9ucy5zdGFsZVRpbWUgIT09IHByZXZPcHRpb25zLnN0YWxlVGltZSkpIHtcbiAgICAgIHRoaXMudXBkYXRlU3RhbGVUaW1lb3V0KCk7XG4gICAgfSAvLyBVcGRhdGUgcmVmZXRjaCBpbnRlcnZhbCBpZiBuZWVkZWRcblxuXG4gICAgaWYgKG1vdW50ZWQgJiYgKHRoaXMuY3VycmVudFF1ZXJ5ICE9PSBwcmV2UXVlcnkgfHwgdGhpcy5vcHRpb25zLmVuYWJsZWQgIT09IHByZXZPcHRpb25zLmVuYWJsZWQgfHwgdGhpcy5vcHRpb25zLnJlZmV0Y2hJbnRlcnZhbCAhPT0gcHJldk9wdGlvbnMucmVmZXRjaEludGVydmFsKSkge1xuICAgICAgdGhpcy51cGRhdGVSZWZldGNoSW50ZXJ2YWwoKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLmdldE9wdGltaXN0aWNSZXN1bHQgPSBmdW5jdGlvbiBnZXRPcHRpbWlzdGljUmVzdWx0KG9wdGlvbnMpIHtcbiAgICB2YXIgZGVmYXVsdGVkT3B0aW9ucyA9IHRoaXMuY2xpZW50LmRlZmF1bHRRdWVyeU9ic2VydmVyT3B0aW9ucyhvcHRpb25zKTtcbiAgICB2YXIgcXVlcnkgPSB0aGlzLmNsaWVudC5nZXRRdWVyeUNhY2hlKCkuYnVpbGQodGhpcy5jbGllbnQsIGRlZmF1bHRlZE9wdGlvbnMpO1xuICAgIHJldHVybiB0aGlzLmNyZWF0ZVJlc3VsdChxdWVyeSwgZGVmYXVsdGVkT3B0aW9ucyk7XG4gIH07XG5cbiAgX3Byb3RvLmdldEN1cnJlbnRSZXN1bHQgPSBmdW5jdGlvbiBnZXRDdXJyZW50UmVzdWx0KCkge1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnRSZXN1bHQ7XG4gIH07XG5cbiAgX3Byb3RvLnRyYWNrUmVzdWx0ID0gZnVuY3Rpb24gdHJhY2tSZXN1bHQocmVzdWx0KSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICB2YXIgdHJhY2tlZFJlc3VsdCA9IHt9O1xuICAgIE9iamVjdC5rZXlzKHJlc3VsdCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodHJhY2tlZFJlc3VsdCwga2V5LCB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgIHZhciB0eXBlZEtleSA9IGtleTtcblxuICAgICAgICAgIGlmICghX3RoaXMyLnRyYWNrZWRQcm9wcy5pbmNsdWRlcyh0eXBlZEtleSkpIHtcbiAgICAgICAgICAgIF90aGlzMi50cmFja2VkUHJvcHMucHVzaCh0eXBlZEtleSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHJlc3VsdFt0eXBlZEtleV07XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiB0cmFja2VkUmVzdWx0O1xuICB9O1xuXG4gIF9wcm90by5nZXROZXh0UmVzdWx0ID0gZnVuY3Rpb24gZ2V0TmV4dFJlc3VsdChvcHRpb25zKSB7XG4gICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHVuc3Vic2NyaWJlID0gX3RoaXMzLnN1YnNjcmliZShmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgIGlmICghcmVzdWx0LmlzRmV0Y2hpbmcpIHtcbiAgICAgICAgICB1bnN1YnNjcmliZSgpO1xuXG4gICAgICAgICAgaWYgKHJlc3VsdC5pc0Vycm9yICYmIChvcHRpb25zID09IG51bGwgPyB2b2lkIDAgOiBvcHRpb25zLnRocm93T25FcnJvcikpIHtcbiAgICAgICAgICAgIHJlamVjdChyZXN1bHQuZXJyb3IpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8uZ2V0Q3VycmVudFF1ZXJ5ID0gZnVuY3Rpb24gZ2V0Q3VycmVudFF1ZXJ5KCkge1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnRRdWVyeTtcbiAgfTtcblxuICBfcHJvdG8ucmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgIHRoaXMuY2xpZW50LmdldFF1ZXJ5Q2FjaGUoKS5yZW1vdmUodGhpcy5jdXJyZW50UXVlcnkpO1xuICB9O1xuXG4gIF9wcm90by5yZWZldGNoID0gZnVuY3Rpb24gcmVmZXRjaChvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRoaXMuZmV0Y2gob3B0aW9ucyk7XG4gIH07XG5cbiAgX3Byb3RvLmZldGNoT3B0aW1pc3RpYyA9IGZ1bmN0aW9uIGZldGNoT3B0aW1pc3RpYyhvcHRpb25zKSB7XG4gICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICB2YXIgZGVmYXVsdGVkT3B0aW9ucyA9IHRoaXMuY2xpZW50LmRlZmF1bHRRdWVyeU9ic2VydmVyT3B0aW9ucyhvcHRpb25zKTtcbiAgICB2YXIgcXVlcnkgPSB0aGlzLmNsaWVudC5nZXRRdWVyeUNhY2hlKCkuYnVpbGQodGhpcy5jbGllbnQsIGRlZmF1bHRlZE9wdGlvbnMpO1xuICAgIHJldHVybiBxdWVyeS5mZXRjaCgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIF90aGlzNC5jcmVhdGVSZXN1bHQocXVlcnksIGRlZmF1bHRlZE9wdGlvbnMpO1xuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5mZXRjaCA9IGZ1bmN0aW9uIGZldGNoKGZldGNoT3B0aW9ucykge1xuICAgIHZhciBfdGhpczUgPSB0aGlzO1xuXG4gICAgcmV0dXJuIHRoaXMuZXhlY3V0ZUZldGNoKGZldGNoT3B0aW9ucykudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpczUudXBkYXRlUmVzdWx0KCk7XG5cbiAgICAgIHJldHVybiBfdGhpczUuY3VycmVudFJlc3VsdDtcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8uZXhlY3V0ZUZldGNoID0gZnVuY3Rpb24gZXhlY3V0ZUZldGNoKGZldGNoT3B0aW9ucykge1xuICAgIC8vIE1ha2Ugc3VyZSB3ZSByZWZlcmVuY2UgdGhlIGxhdGVzdCBxdWVyeSBhcyB0aGUgY3VycmVudCBvbmUgbWlnaHQgaGF2ZSBiZWVuIHJlbW92ZWRcbiAgICB0aGlzLnVwZGF0ZVF1ZXJ5KCk7IC8vIEZldGNoXG5cbiAgICB2YXIgcHJvbWlzZSA9IHRoaXMuY3VycmVudFF1ZXJ5LmZldGNoKHRoaXMub3B0aW9ucywgZmV0Y2hPcHRpb25zKTtcblxuICAgIGlmICghKGZldGNoT3B0aW9ucyA9PSBudWxsID8gdm9pZCAwIDogZmV0Y2hPcHRpb25zLnRocm93T25FcnJvcikpIHtcbiAgICAgIHByb21pc2UgPSBwcm9taXNlLmNhdGNoKG5vb3ApO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9taXNlO1xuICB9O1xuXG4gIF9wcm90by51cGRhdGVTdGFsZVRpbWVvdXQgPSBmdW5jdGlvbiB1cGRhdGVTdGFsZVRpbWVvdXQoKSB7XG4gICAgdmFyIF90aGlzNiA9IHRoaXM7XG5cbiAgICB0aGlzLmNsZWFyU3RhbGVUaW1lb3V0KCk7XG5cbiAgICBpZiAoaXNTZXJ2ZXIgfHwgdGhpcy5jdXJyZW50UmVzdWx0LmlzU3RhbGUgfHwgIWlzVmFsaWRUaW1lb3V0KHRoaXMub3B0aW9ucy5zdGFsZVRpbWUpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHRpbWUgPSB0aW1lVW50aWxTdGFsZSh0aGlzLmN1cnJlbnRSZXN1bHQuZGF0YVVwZGF0ZWRBdCwgdGhpcy5vcHRpb25zLnN0YWxlVGltZSk7IC8vIFRoZSB0aW1lb3V0IGlzIHNvbWV0aW1lcyB0cmlnZ2VyZWQgMSBtcyBiZWZvcmUgdGhlIHN0YWxlIHRpbWUgZXhwaXJhdGlvbi5cbiAgICAvLyBUbyBtaXRpZ2F0ZSB0aGlzIGlzc3VlIHdlIGFsd2F5cyBhZGQgMSBtcyB0byB0aGUgdGltZW91dC5cblxuICAgIHZhciB0aW1lb3V0ID0gdGltZSArIDE7XG4gICAgdGhpcy5zdGFsZVRpbWVvdXRJZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCFfdGhpczYuY3VycmVudFJlc3VsdC5pc1N0YWxlKSB7XG4gICAgICAgIF90aGlzNi51cGRhdGVSZXN1bHQoKTtcbiAgICAgIH1cbiAgICB9LCB0aW1lb3V0KTtcbiAgfTtcblxuICBfcHJvdG8udXBkYXRlUmVmZXRjaEludGVydmFsID0gZnVuY3Rpb24gdXBkYXRlUmVmZXRjaEludGVydmFsKCkge1xuICAgIHZhciBfdGhpczcgPSB0aGlzO1xuXG4gICAgdGhpcy5jbGVhclJlZmV0Y2hJbnRlcnZhbCgpO1xuXG4gICAgaWYgKGlzU2VydmVyIHx8IHRoaXMub3B0aW9ucy5lbmFibGVkID09PSBmYWxzZSB8fCAhaXNWYWxpZFRpbWVvdXQodGhpcy5vcHRpb25zLnJlZmV0Y2hJbnRlcnZhbCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnJlZmV0Y2hJbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKF90aGlzNy5vcHRpb25zLnJlZmV0Y2hJbnRlcnZhbEluQmFja2dyb3VuZCB8fCBmb2N1c01hbmFnZXIuaXNGb2N1c2VkKCkpIHtcbiAgICAgICAgX3RoaXM3LmV4ZWN1dGVGZXRjaCgpO1xuICAgICAgfVxuICAgIH0sIHRoaXMub3B0aW9ucy5yZWZldGNoSW50ZXJ2YWwpO1xuICB9O1xuXG4gIF9wcm90by51cGRhdGVUaW1lcnMgPSBmdW5jdGlvbiB1cGRhdGVUaW1lcnMoKSB7XG4gICAgdGhpcy51cGRhdGVTdGFsZVRpbWVvdXQoKTtcbiAgICB0aGlzLnVwZGF0ZVJlZmV0Y2hJbnRlcnZhbCgpO1xuICB9O1xuXG4gIF9wcm90by5jbGVhclRpbWVycyA9IGZ1bmN0aW9uIGNsZWFyVGltZXJzKCkge1xuICAgIHRoaXMuY2xlYXJTdGFsZVRpbWVvdXQoKTtcbiAgICB0aGlzLmNsZWFyUmVmZXRjaEludGVydmFsKCk7XG4gIH07XG5cbiAgX3Byb3RvLmNsZWFyU3RhbGVUaW1lb3V0ID0gZnVuY3Rpb24gY2xlYXJTdGFsZVRpbWVvdXQoKSB7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuc3RhbGVUaW1lb3V0SWQpO1xuICAgIHRoaXMuc3RhbGVUaW1lb3V0SWQgPSB1bmRlZmluZWQ7XG4gIH07XG5cbiAgX3Byb3RvLmNsZWFyUmVmZXRjaEludGVydmFsID0gZnVuY3Rpb24gY2xlYXJSZWZldGNoSW50ZXJ2YWwoKSB7XG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLnJlZmV0Y2hJbnRlcnZhbElkKTtcbiAgICB0aGlzLnJlZmV0Y2hJbnRlcnZhbElkID0gdW5kZWZpbmVkO1xuICB9O1xuXG4gIF9wcm90by5jcmVhdGVSZXN1bHQgPSBmdW5jdGlvbiBjcmVhdGVSZXN1bHQocXVlcnksIG9wdGlvbnMpIHtcbiAgICB2YXIgcHJldlF1ZXJ5ID0gdGhpcy5jdXJyZW50UXVlcnk7XG4gICAgdmFyIHByZXZPcHRpb25zID0gdGhpcy5vcHRpb25zO1xuICAgIHZhciBwcmV2UmVzdWx0ID0gdGhpcy5jdXJyZW50UmVzdWx0O1xuICAgIHZhciBwcmV2UmVzdWx0U3RhdGUgPSB0aGlzLmN1cnJlbnRSZXN1bHRTdGF0ZTtcbiAgICB2YXIgcHJldlJlc3VsdE9wdGlvbnMgPSB0aGlzLmN1cnJlbnRSZXN1bHRPcHRpb25zO1xuICAgIHZhciBxdWVyeUNoYW5nZSA9IHF1ZXJ5ICE9PSBwcmV2UXVlcnk7XG4gICAgdmFyIHF1ZXJ5SW5pdGlhbFN0YXRlID0gcXVlcnlDaGFuZ2UgPyBxdWVyeS5zdGF0ZSA6IHRoaXMuY3VycmVudFF1ZXJ5SW5pdGlhbFN0YXRlO1xuICAgIHZhciBwcmV2UXVlcnlSZXN1bHQgPSBxdWVyeUNoYW5nZSA/IHRoaXMuY3VycmVudFJlc3VsdCA6IHRoaXMucHJldmlvdXNRdWVyeVJlc3VsdDtcbiAgICB2YXIgc3RhdGUgPSBxdWVyeS5zdGF0ZTtcbiAgICB2YXIgZGF0YVVwZGF0ZWRBdCA9IHN0YXRlLmRhdGFVcGRhdGVkQXQsXG4gICAgICAgIGVycm9yID0gc3RhdGUuZXJyb3IsXG4gICAgICAgIGVycm9yVXBkYXRlZEF0ID0gc3RhdGUuZXJyb3JVcGRhdGVkQXQsXG4gICAgICAgIGlzRmV0Y2hpbmcgPSBzdGF0ZS5pc0ZldGNoaW5nLFxuICAgICAgICBzdGF0dXMgPSBzdGF0ZS5zdGF0dXM7XG4gICAgdmFyIGlzUHJldmlvdXNEYXRhID0gZmFsc2U7XG4gICAgdmFyIGlzUGxhY2Vob2xkZXJEYXRhID0gZmFsc2U7XG4gICAgdmFyIGRhdGE7IC8vIE9wdGltaXN0aWNhbGx5IHNldCByZXN1bHQgaW4gZmV0Y2hpbmcgc3RhdGUgaWYgbmVlZGVkXG5cbiAgICBpZiAob3B0aW9ucy5vcHRpbWlzdGljUmVzdWx0cykge1xuICAgICAgdmFyIG1vdW50ZWQgPSB0aGlzLmhhc0xpc3RlbmVycygpO1xuICAgICAgdmFyIGZldGNoT25Nb3VudCA9ICFtb3VudGVkICYmIHNob3VsZEZldGNoT25Nb3VudChxdWVyeSwgb3B0aW9ucyk7XG4gICAgICB2YXIgZmV0Y2hPcHRpb25hbGx5ID0gbW91bnRlZCAmJiBzaG91bGRGZXRjaE9wdGlvbmFsbHkocXVlcnksIHByZXZRdWVyeSwgb3B0aW9ucywgcHJldk9wdGlvbnMpO1xuXG4gICAgICBpZiAoZmV0Y2hPbk1vdW50IHx8IGZldGNoT3B0aW9uYWxseSkge1xuICAgICAgICBpc0ZldGNoaW5nID0gdHJ1ZTtcblxuICAgICAgICBpZiAoIWRhdGFVcGRhdGVkQXQpIHtcbiAgICAgICAgICBzdGF0dXMgPSAnbG9hZGluZyc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IC8vIEtlZXAgcHJldmlvdXMgZGF0YSBpZiBuZWVkZWRcblxuXG4gICAgaWYgKG9wdGlvbnMua2VlcFByZXZpb3VzRGF0YSAmJiAhc3RhdGUuZGF0YVVwZGF0ZUNvdW50ICYmIChwcmV2UXVlcnlSZXN1bHQgPT0gbnVsbCA/IHZvaWQgMCA6IHByZXZRdWVyeVJlc3VsdC5pc1N1Y2Nlc3MpICYmIHN0YXR1cyAhPT0gJ2Vycm9yJykge1xuICAgICAgZGF0YSA9IHByZXZRdWVyeVJlc3VsdC5kYXRhO1xuICAgICAgZGF0YVVwZGF0ZWRBdCA9IHByZXZRdWVyeVJlc3VsdC5kYXRhVXBkYXRlZEF0O1xuICAgICAgc3RhdHVzID0gcHJldlF1ZXJ5UmVzdWx0LnN0YXR1cztcbiAgICAgIGlzUHJldmlvdXNEYXRhID0gdHJ1ZTtcbiAgICB9IC8vIFNlbGVjdCBkYXRhIGlmIG5lZWRlZFxuICAgIGVsc2UgaWYgKG9wdGlvbnMuc2VsZWN0ICYmIHR5cGVvZiBzdGF0ZS5kYXRhICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAvLyBNZW1vaXplIHNlbGVjdCByZXN1bHRcbiAgICAgICAgaWYgKHByZXZSZXN1bHQgJiYgc3RhdGUuZGF0YSA9PT0gKHByZXZSZXN1bHRTdGF0ZSA9PSBudWxsID8gdm9pZCAwIDogcHJldlJlc3VsdFN0YXRlLmRhdGEpICYmIG9wdGlvbnMuc2VsZWN0ID09PSAocHJldlJlc3VsdE9wdGlvbnMgPT0gbnVsbCA/IHZvaWQgMCA6IHByZXZSZXN1bHRPcHRpb25zLnNlbGVjdCkgJiYgIXRoaXMucHJldmlvdXNTZWxlY3RFcnJvcikge1xuICAgICAgICAgIGRhdGEgPSBwcmV2UmVzdWx0LmRhdGE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGRhdGEgPSBvcHRpb25zLnNlbGVjdChzdGF0ZS5kYXRhKTtcblxuICAgICAgICAgICAgaWYgKG9wdGlvbnMuc3RydWN0dXJhbFNoYXJpbmcgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgIGRhdGEgPSByZXBsYWNlRXF1YWxEZWVwKHByZXZSZXN1bHQgPT0gbnVsbCA/IHZvaWQgMCA6IHByZXZSZXN1bHQuZGF0YSwgZGF0YSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMucHJldmlvdXNTZWxlY3RFcnJvciA9IG51bGw7XG4gICAgICAgICAgfSBjYXRjaCAoc2VsZWN0RXJyb3IpIHtcbiAgICAgICAgICAgIGdldExvZ2dlcigpLmVycm9yKHNlbGVjdEVycm9yKTtcbiAgICAgICAgICAgIGVycm9yID0gc2VsZWN0RXJyb3I7XG4gICAgICAgICAgICB0aGlzLnByZXZpb3VzU2VsZWN0RXJyb3IgPSBzZWxlY3RFcnJvcjtcbiAgICAgICAgICAgIGVycm9yVXBkYXRlZEF0ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgIHN0YXR1cyA9ICdlcnJvcic7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IC8vIFVzZSBxdWVyeSBkYXRhXG4gICAgICBlbHNlIHtcbiAgICAgICAgICBkYXRhID0gc3RhdGUuZGF0YTtcbiAgICAgICAgfSAvLyBTaG93IHBsYWNlaG9sZGVyIGRhdGEgaWYgbmVlZGVkXG5cblxuICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5wbGFjZWhvbGRlckRhdGEgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBkYXRhID09PSAndW5kZWZpbmVkJyAmJiBzdGF0dXMgPT09ICdsb2FkaW5nJykge1xuICAgICAgdmFyIHBsYWNlaG9sZGVyRGF0YTsgLy8gTWVtb2l6ZSBwbGFjZWhvbGRlciBkYXRhXG5cbiAgICAgIGlmICgocHJldlJlc3VsdCA9PSBudWxsID8gdm9pZCAwIDogcHJldlJlc3VsdC5pc1BsYWNlaG9sZGVyRGF0YSkgJiYgb3B0aW9ucy5wbGFjZWhvbGRlckRhdGEgPT09IChwcmV2UmVzdWx0T3B0aW9ucyA9PSBudWxsID8gdm9pZCAwIDogcHJldlJlc3VsdE9wdGlvbnMucGxhY2Vob2xkZXJEYXRhKSkge1xuICAgICAgICBwbGFjZWhvbGRlckRhdGEgPSBwcmV2UmVzdWx0LmRhdGE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwbGFjZWhvbGRlckRhdGEgPSB0eXBlb2Ygb3B0aW9ucy5wbGFjZWhvbGRlckRhdGEgPT09ICdmdW5jdGlvbicgPyBvcHRpb25zLnBsYWNlaG9sZGVyRGF0YSgpIDogb3B0aW9ucy5wbGFjZWhvbGRlckRhdGE7XG5cbiAgICAgICAgaWYgKG9wdGlvbnMuc2VsZWN0ICYmIHR5cGVvZiBwbGFjZWhvbGRlckRhdGEgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyRGF0YSA9IG9wdGlvbnMuc2VsZWN0KHBsYWNlaG9sZGVyRGF0YSk7XG5cbiAgICAgICAgICAgIGlmIChvcHRpb25zLnN0cnVjdHVyYWxTaGFyaW5nICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgICBwbGFjZWhvbGRlckRhdGEgPSByZXBsYWNlRXF1YWxEZWVwKHByZXZSZXN1bHQgPT0gbnVsbCA/IHZvaWQgMCA6IHByZXZSZXN1bHQuZGF0YSwgcGxhY2Vob2xkZXJEYXRhKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5wcmV2aW91c1NlbGVjdEVycm9yID0gbnVsbDtcbiAgICAgICAgICB9IGNhdGNoIChzZWxlY3RFcnJvcikge1xuICAgICAgICAgICAgZ2V0TG9nZ2VyKCkuZXJyb3Ioc2VsZWN0RXJyb3IpO1xuICAgICAgICAgICAgZXJyb3IgPSBzZWxlY3RFcnJvcjtcbiAgICAgICAgICAgIHRoaXMucHJldmlvdXNTZWxlY3RFcnJvciA9IHNlbGVjdEVycm9yO1xuICAgICAgICAgICAgZXJyb3JVcGRhdGVkQXQgPSBEYXRlLm5vdygpO1xuICAgICAgICAgICAgc3RhdHVzID0gJ2Vycm9yJztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBwbGFjZWhvbGRlckRhdGEgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHN0YXR1cyA9ICdzdWNjZXNzJztcbiAgICAgICAgZGF0YSA9IHBsYWNlaG9sZGVyRGF0YTtcbiAgICAgICAgaXNQbGFjZWhvbGRlckRhdGEgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciByZXN1bHQgPSB7XG4gICAgICBzdGF0dXM6IHN0YXR1cyxcbiAgICAgIGlzTG9hZGluZzogc3RhdHVzID09PSAnbG9hZGluZycsXG4gICAgICBpc1N1Y2Nlc3M6IHN0YXR1cyA9PT0gJ3N1Y2Nlc3MnLFxuICAgICAgaXNFcnJvcjogc3RhdHVzID09PSAnZXJyb3InLFxuICAgICAgaXNJZGxlOiBzdGF0dXMgPT09ICdpZGxlJyxcbiAgICAgIGRhdGE6IGRhdGEsXG4gICAgICBkYXRhVXBkYXRlZEF0OiBkYXRhVXBkYXRlZEF0LFxuICAgICAgZXJyb3I6IGVycm9yLFxuICAgICAgZXJyb3JVcGRhdGVkQXQ6IGVycm9yVXBkYXRlZEF0LFxuICAgICAgZmFpbHVyZUNvdW50OiBzdGF0ZS5mZXRjaEZhaWx1cmVDb3VudCxcbiAgICAgIGlzRmV0Y2hlZDogc3RhdGUuZGF0YVVwZGF0ZUNvdW50ID4gMCB8fCBzdGF0ZS5lcnJvclVwZGF0ZUNvdW50ID4gMCxcbiAgICAgIGlzRmV0Y2hlZEFmdGVyTW91bnQ6IHN0YXRlLmRhdGFVcGRhdGVDb3VudCA+IHF1ZXJ5SW5pdGlhbFN0YXRlLmRhdGFVcGRhdGVDb3VudCB8fCBzdGF0ZS5lcnJvclVwZGF0ZUNvdW50ID4gcXVlcnlJbml0aWFsU3RhdGUuZXJyb3JVcGRhdGVDb3VudCxcbiAgICAgIGlzRmV0Y2hpbmc6IGlzRmV0Y2hpbmcsXG4gICAgICBpc0xvYWRpbmdFcnJvcjogc3RhdHVzID09PSAnZXJyb3InICYmIHN0YXRlLmRhdGFVcGRhdGVkQXQgPT09IDAsXG4gICAgICBpc1BsYWNlaG9sZGVyRGF0YTogaXNQbGFjZWhvbGRlckRhdGEsXG4gICAgICBpc1ByZXZpb3VzRGF0YTogaXNQcmV2aW91c0RhdGEsXG4gICAgICBpc1JlZmV0Y2hFcnJvcjogc3RhdHVzID09PSAnZXJyb3InICYmIHN0YXRlLmRhdGFVcGRhdGVkQXQgIT09IDAsXG4gICAgICBpc1N0YWxlOiBpc1N0YWxlKHF1ZXJ5LCBvcHRpb25zKSxcbiAgICAgIHJlZmV0Y2g6IHRoaXMucmVmZXRjaCxcbiAgICAgIHJlbW92ZTogdGhpcy5yZW1vdmVcbiAgICB9O1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgX3Byb3RvLnNob3VsZE5vdGlmeUxpc3RlbmVycyA9IGZ1bmN0aW9uIHNob3VsZE5vdGlmeUxpc3RlbmVycyhyZXN1bHQsIHByZXZSZXN1bHQpIHtcbiAgICBpZiAoIXByZXZSZXN1bHQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGlmIChyZXN1bHQgPT09IHByZXZSZXN1bHQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICB2YXIgX3RoaXMkb3B0aW9ucyA9IHRoaXMub3B0aW9ucyxcbiAgICAgICAgbm90aWZ5T25DaGFuZ2VQcm9wcyA9IF90aGlzJG9wdGlvbnMubm90aWZ5T25DaGFuZ2VQcm9wcyxcbiAgICAgICAgbm90aWZ5T25DaGFuZ2VQcm9wc0V4Y2x1c2lvbnMgPSBfdGhpcyRvcHRpb25zLm5vdGlmeU9uQ2hhbmdlUHJvcHNFeGNsdXNpb25zO1xuXG4gICAgaWYgKCFub3RpZnlPbkNoYW5nZVByb3BzICYmICFub3RpZnlPbkNoYW5nZVByb3BzRXhjbHVzaW9ucykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaWYgKG5vdGlmeU9uQ2hhbmdlUHJvcHMgPT09ICd0cmFja2VkJyAmJiAhdGhpcy50cmFja2VkUHJvcHMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICB2YXIgaW5jbHVkZWRQcm9wcyA9IG5vdGlmeU9uQ2hhbmdlUHJvcHMgPT09ICd0cmFja2VkJyA/IHRoaXMudHJhY2tlZFByb3BzIDogbm90aWZ5T25DaGFuZ2VQcm9wcztcbiAgICByZXR1cm4gT2JqZWN0LmtleXMocmVzdWx0KS5zb21lKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHZhciB0eXBlZEtleSA9IGtleTtcbiAgICAgIHZhciBjaGFuZ2VkID0gcmVzdWx0W3R5cGVkS2V5XSAhPT0gcHJldlJlc3VsdFt0eXBlZEtleV07XG4gICAgICB2YXIgaXNJbmNsdWRlZCA9IGluY2x1ZGVkUHJvcHMgPT0gbnVsbCA/IHZvaWQgMCA6IGluY2x1ZGVkUHJvcHMuc29tZShmdW5jdGlvbiAoeCkge1xuICAgICAgICByZXR1cm4geCA9PT0ga2V5O1xuICAgICAgfSk7XG4gICAgICB2YXIgaXNFeGNsdWRlZCA9IG5vdGlmeU9uQ2hhbmdlUHJvcHNFeGNsdXNpb25zID09IG51bGwgPyB2b2lkIDAgOiBub3RpZnlPbkNoYW5nZVByb3BzRXhjbHVzaW9ucy5zb21lKGZ1bmN0aW9uICh4KSB7XG4gICAgICAgIHJldHVybiB4ID09PSBrZXk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBjaGFuZ2VkICYmICFpc0V4Y2x1ZGVkICYmICghaW5jbHVkZWRQcm9wcyB8fCBpc0luY2x1ZGVkKTtcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8udXBkYXRlUmVzdWx0ID0gZnVuY3Rpb24gdXBkYXRlUmVzdWx0KG5vdGlmeU9wdGlvbnMpIHtcbiAgICB2YXIgcHJldlJlc3VsdCA9IHRoaXMuY3VycmVudFJlc3VsdDtcbiAgICB0aGlzLmN1cnJlbnRSZXN1bHQgPSB0aGlzLmNyZWF0ZVJlc3VsdCh0aGlzLmN1cnJlbnRRdWVyeSwgdGhpcy5vcHRpb25zKTtcbiAgICB0aGlzLmN1cnJlbnRSZXN1bHRTdGF0ZSA9IHRoaXMuY3VycmVudFF1ZXJ5LnN0YXRlO1xuICAgIHRoaXMuY3VycmVudFJlc3VsdE9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7IC8vIE9ubHkgbm90aWZ5IGlmIHNvbWV0aGluZyBoYXMgY2hhbmdlZFxuXG4gICAgaWYgKHNoYWxsb3dFcXVhbE9iamVjdHModGhpcy5jdXJyZW50UmVzdWx0LCBwcmV2UmVzdWx0KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH0gLy8gRGV0ZXJtaW5lIHdoaWNoIGNhbGxiYWNrcyB0byB0cmlnZ2VyXG5cblxuICAgIHZhciBkZWZhdWx0Tm90aWZ5T3B0aW9ucyA9IHtcbiAgICAgIGNhY2hlOiB0cnVlXG4gICAgfTtcblxuICAgIGlmICgobm90aWZ5T3B0aW9ucyA9PSBudWxsID8gdm9pZCAwIDogbm90aWZ5T3B0aW9ucy5saXN0ZW5lcnMpICE9PSBmYWxzZSAmJiB0aGlzLnNob3VsZE5vdGlmeUxpc3RlbmVycyh0aGlzLmN1cnJlbnRSZXN1bHQsIHByZXZSZXN1bHQpKSB7XG4gICAgICBkZWZhdWx0Tm90aWZ5T3B0aW9ucy5saXN0ZW5lcnMgPSB0cnVlO1xuICAgIH1cblxuICAgIHRoaXMubm90aWZ5KF9leHRlbmRzKHt9LCBkZWZhdWx0Tm90aWZ5T3B0aW9ucywgbm90aWZ5T3B0aW9ucykpO1xuICB9O1xuXG4gIF9wcm90by51cGRhdGVRdWVyeSA9IGZ1bmN0aW9uIHVwZGF0ZVF1ZXJ5KCkge1xuICAgIHZhciBxdWVyeSA9IHRoaXMuY2xpZW50LmdldFF1ZXJ5Q2FjaGUoKS5idWlsZCh0aGlzLmNsaWVudCwgdGhpcy5vcHRpb25zKTtcblxuICAgIGlmIChxdWVyeSA9PT0gdGhpcy5jdXJyZW50UXVlcnkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgcHJldlF1ZXJ5ID0gdGhpcy5jdXJyZW50UXVlcnk7XG4gICAgdGhpcy5jdXJyZW50UXVlcnkgPSBxdWVyeTtcbiAgICB0aGlzLmN1cnJlbnRRdWVyeUluaXRpYWxTdGF0ZSA9IHF1ZXJ5LnN0YXRlO1xuICAgIHRoaXMucHJldmlvdXNRdWVyeVJlc3VsdCA9IHRoaXMuY3VycmVudFJlc3VsdDtcblxuICAgIGlmICh0aGlzLmhhc0xpc3RlbmVycygpKSB7XG4gICAgICBwcmV2UXVlcnkgPT0gbnVsbCA/IHZvaWQgMCA6IHByZXZRdWVyeS5yZW1vdmVPYnNlcnZlcih0aGlzKTtcbiAgICAgIHF1ZXJ5LmFkZE9ic2VydmVyKHRoaXMpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8ub25RdWVyeVVwZGF0ZSA9IGZ1bmN0aW9uIG9uUXVlcnlVcGRhdGUoYWN0aW9uKSB7XG4gICAgdmFyIG5vdGlmeU9wdGlvbnMgPSB7fTtcblxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICBub3RpZnlPcHRpb25zLm9uU3VjY2VzcyA9IHRydWU7XG4gICAgfSBlbHNlIGlmIChhY3Rpb24udHlwZSA9PT0gJ2Vycm9yJyAmJiAhaXNDYW5jZWxsZWRFcnJvcihhY3Rpb24uZXJyb3IpKSB7XG4gICAgICBub3RpZnlPcHRpb25zLm9uRXJyb3IgPSB0cnVlO1xuICAgIH1cblxuICAgIHRoaXMudXBkYXRlUmVzdWx0KG5vdGlmeU9wdGlvbnMpO1xuXG4gICAgaWYgKHRoaXMuaGFzTGlzdGVuZXJzKCkpIHtcbiAgICAgIHRoaXMudXBkYXRlVGltZXJzKCk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5ub3RpZnkgPSBmdW5jdGlvbiBub3RpZnkobm90aWZ5T3B0aW9ucykge1xuICAgIHZhciBfdGhpczggPSB0aGlzO1xuXG4gICAgbm90aWZ5TWFuYWdlci5iYXRjaChmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBGaXJzdCB0cmlnZ2VyIHRoZSBjb25maWd1cmF0aW9uIGNhbGxiYWNrc1xuICAgICAgaWYgKG5vdGlmeU9wdGlvbnMub25TdWNjZXNzKSB7XG4gICAgICAgIF90aGlzOC5vcHRpb25zLm9uU3VjY2VzcyA9PSBudWxsID8gdm9pZCAwIDogX3RoaXM4Lm9wdGlvbnMub25TdWNjZXNzKF90aGlzOC5jdXJyZW50UmVzdWx0LmRhdGEpO1xuICAgICAgICBfdGhpczgub3B0aW9ucy5vblNldHRsZWQgPT0gbnVsbCA/IHZvaWQgMCA6IF90aGlzOC5vcHRpb25zLm9uU2V0dGxlZChfdGhpczguY3VycmVudFJlc3VsdC5kYXRhLCBudWxsKTtcbiAgICAgIH0gZWxzZSBpZiAobm90aWZ5T3B0aW9ucy5vbkVycm9yKSB7XG4gICAgICAgIF90aGlzOC5vcHRpb25zLm9uRXJyb3IgPT0gbnVsbCA/IHZvaWQgMCA6IF90aGlzOC5vcHRpb25zLm9uRXJyb3IoX3RoaXM4LmN1cnJlbnRSZXN1bHQuZXJyb3IpO1xuICAgICAgICBfdGhpczgub3B0aW9ucy5vblNldHRsZWQgPT0gbnVsbCA/IHZvaWQgMCA6IF90aGlzOC5vcHRpb25zLm9uU2V0dGxlZCh1bmRlZmluZWQsIF90aGlzOC5jdXJyZW50UmVzdWx0LmVycm9yKTtcbiAgICAgIH0gLy8gVGhlbiB0cmlnZ2VyIHRoZSBsaXN0ZW5lcnNcblxuXG4gICAgICBpZiAobm90aWZ5T3B0aW9ucy5saXN0ZW5lcnMpIHtcbiAgICAgICAgX3RoaXM4Lmxpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uIChsaXN0ZW5lcikge1xuICAgICAgICAgIGxpc3RlbmVyKF90aGlzOC5jdXJyZW50UmVzdWx0KTtcbiAgICAgICAgfSk7XG4gICAgICB9IC8vIFRoZW4gdGhlIGNhY2hlIGxpc3RlbmVyc1xuXG5cbiAgICAgIGlmIChub3RpZnlPcHRpb25zLmNhY2hlKSB7XG4gICAgICAgIF90aGlzOC5jbGllbnQuZ2V0UXVlcnlDYWNoZSgpLm5vdGlmeSh7XG4gICAgICAgICAgcXVlcnk6IF90aGlzOC5jdXJyZW50UXVlcnksXG4gICAgICAgICAgdHlwZTogJ29ic2VydmVyUmVzdWx0c1VwZGF0ZWQnXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiBRdWVyeU9ic2VydmVyO1xufShTdWJzY3JpYmFibGUpO1xuXG5mdW5jdGlvbiBzaG91bGRMb2FkT25Nb3VudChxdWVyeSwgb3B0aW9ucykge1xuICByZXR1cm4gb3B0aW9ucy5lbmFibGVkICE9PSBmYWxzZSAmJiAhcXVlcnkuc3RhdGUuZGF0YVVwZGF0ZWRBdCAmJiAhKHF1ZXJ5LnN0YXRlLnN0YXR1cyA9PT0gJ2Vycm9yJyAmJiBvcHRpb25zLnJldHJ5T25Nb3VudCA9PT0gZmFsc2UpO1xufVxuXG5mdW5jdGlvbiBzaG91bGRSZWZldGNoT25Nb3VudChxdWVyeSwgb3B0aW9ucykge1xuICByZXR1cm4gb3B0aW9ucy5lbmFibGVkICE9PSBmYWxzZSAmJiBxdWVyeS5zdGF0ZS5kYXRhVXBkYXRlZEF0ID4gMCAmJiAob3B0aW9ucy5yZWZldGNoT25Nb3VudCA9PT0gJ2Fsd2F5cycgfHwgb3B0aW9ucy5yZWZldGNoT25Nb3VudCAhPT0gZmFsc2UgJiYgaXNTdGFsZShxdWVyeSwgb3B0aW9ucykpO1xufVxuXG5mdW5jdGlvbiBzaG91bGRGZXRjaE9uTW91bnQocXVlcnksIG9wdGlvbnMpIHtcbiAgcmV0dXJuIHNob3VsZExvYWRPbk1vdW50KHF1ZXJ5LCBvcHRpb25zKSB8fCBzaG91bGRSZWZldGNoT25Nb3VudChxdWVyeSwgb3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIF9zaG91bGRGZXRjaE9uUmVjb25uZWN0KHF1ZXJ5LCBvcHRpb25zKSB7XG4gIHJldHVybiBvcHRpb25zLmVuYWJsZWQgIT09IGZhbHNlICYmIChvcHRpb25zLnJlZmV0Y2hPblJlY29ubmVjdCA9PT0gJ2Fsd2F5cycgfHwgb3B0aW9ucy5yZWZldGNoT25SZWNvbm5lY3QgIT09IGZhbHNlICYmIGlzU3RhbGUocXVlcnksIG9wdGlvbnMpKTtcbn1cblxuZnVuY3Rpb24gX3Nob3VsZEZldGNoT25XaW5kb3dGb2N1cyhxdWVyeSwgb3B0aW9ucykge1xuICByZXR1cm4gb3B0aW9ucy5lbmFibGVkICE9PSBmYWxzZSAmJiAob3B0aW9ucy5yZWZldGNoT25XaW5kb3dGb2N1cyA9PT0gJ2Fsd2F5cycgfHwgb3B0aW9ucy5yZWZldGNoT25XaW5kb3dGb2N1cyAhPT0gZmFsc2UgJiYgaXNTdGFsZShxdWVyeSwgb3B0aW9ucykpO1xufVxuXG5mdW5jdGlvbiBzaG91bGRGZXRjaE9wdGlvbmFsbHkocXVlcnksIHByZXZRdWVyeSwgb3B0aW9ucywgcHJldk9wdGlvbnMpIHtcbiAgcmV0dXJuIG9wdGlvbnMuZW5hYmxlZCAhPT0gZmFsc2UgJiYgKHF1ZXJ5ICE9PSBwcmV2UXVlcnkgfHwgcHJldk9wdGlvbnMuZW5hYmxlZCA9PT0gZmFsc2UpICYmIGlzU3RhbGUocXVlcnksIG9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiBpc1N0YWxlKHF1ZXJ5LCBvcHRpb25zKSB7XG4gIHJldHVybiBxdWVyeS5pc1N0YWxlQnlUaW1lKG9wdGlvbnMuc3RhbGVUaW1lKTtcbn0iLCJpbXBvcnQgeyBmb2N1c01hbmFnZXIgfSBmcm9tICcuL2ZvY3VzTWFuYWdlcic7XG5pbXBvcnQgeyBvbmxpbmVNYW5hZ2VyIH0gZnJvbSAnLi9vbmxpbmVNYW5hZ2VyJztcbmltcG9ydCB7IHNsZWVwIH0gZnJvbSAnLi91dGlscyc7IC8vIFRZUEVTXG5cbmZ1bmN0aW9uIGRlZmF1bHRSZXRyeURlbGF5KGZhaWx1cmVDb3VudCkge1xuICByZXR1cm4gTWF0aC5taW4oMTAwMCAqIE1hdGgucG93KDIsIGZhaWx1cmVDb3VudCksIDMwMDAwKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzQ2FuY2VsYWJsZSh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mICh2YWx1ZSA9PSBudWxsID8gdm9pZCAwIDogdmFsdWUuY2FuY2VsKSA9PT0gJ2Z1bmN0aW9uJztcbn1cbmV4cG9ydCB2YXIgQ2FuY2VsbGVkRXJyb3IgPSBmdW5jdGlvbiBDYW5jZWxsZWRFcnJvcihvcHRpb25zKSB7XG4gIHRoaXMucmV2ZXJ0ID0gb3B0aW9ucyA9PSBudWxsID8gdm9pZCAwIDogb3B0aW9ucy5yZXZlcnQ7XG4gIHRoaXMuc2lsZW50ID0gb3B0aW9ucyA9PSBudWxsID8gdm9pZCAwIDogb3B0aW9ucy5zaWxlbnQ7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIGlzQ2FuY2VsbGVkRXJyb3IodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgQ2FuY2VsbGVkRXJyb3I7XG59IC8vIENMQVNTXG5cbmV4cG9ydCB2YXIgUmV0cnllciA9IGZ1bmN0aW9uIFJldHJ5ZXIoY29uZmlnKSB7XG4gIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgdmFyIGNhbmNlbFJldHJ5ID0gZmFsc2U7XG4gIHZhciBjYW5jZWxGbjtcbiAgdmFyIGNvbnRpbnVlRm47XG4gIHZhciBwcm9taXNlUmVzb2x2ZTtcbiAgdmFyIHByb21pc2VSZWplY3Q7XG5cbiAgdGhpcy5jYW5jZWwgPSBmdW5jdGlvbiAoY2FuY2VsT3B0aW9ucykge1xuICAgIHJldHVybiBjYW5jZWxGbiA9PSBudWxsID8gdm9pZCAwIDogY2FuY2VsRm4oY2FuY2VsT3B0aW9ucyk7XG4gIH07XG5cbiAgdGhpcy5jYW5jZWxSZXRyeSA9IGZ1bmN0aW9uICgpIHtcbiAgICBjYW5jZWxSZXRyeSA9IHRydWU7XG4gIH07XG5cbiAgdGhpcy5jb250aW51ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gY29udGludWVGbiA9PSBudWxsID8gdm9pZCAwIDogY29udGludWVGbigpO1xuICB9O1xuXG4gIHRoaXMuZmFpbHVyZUNvdW50ID0gMDtcbiAgdGhpcy5pc1BhdXNlZCA9IGZhbHNlO1xuICB0aGlzLmlzUmVzb2x2ZWQgPSBmYWxzZTtcbiAgdGhpcy5pc1RyYW5zcG9ydENhbmNlbGFibGUgPSBmYWxzZTtcbiAgdGhpcy5wcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKG91dGVyUmVzb2x2ZSwgb3V0ZXJSZWplY3QpIHtcbiAgICBwcm9taXNlUmVzb2x2ZSA9IG91dGVyUmVzb2x2ZTtcbiAgICBwcm9taXNlUmVqZWN0ID0gb3V0ZXJSZWplY3Q7XG4gIH0pO1xuXG4gIHZhciByZXNvbHZlID0gZnVuY3Rpb24gcmVzb2x2ZSh2YWx1ZSkge1xuICAgIGlmICghX3RoaXMuaXNSZXNvbHZlZCkge1xuICAgICAgX3RoaXMuaXNSZXNvbHZlZCA9IHRydWU7XG4gICAgICBjb25maWcub25TdWNjZXNzID09IG51bGwgPyB2b2lkIDAgOiBjb25maWcub25TdWNjZXNzKHZhbHVlKTtcbiAgICAgIGNvbnRpbnVlRm4gPT0gbnVsbCA/IHZvaWQgMCA6IGNvbnRpbnVlRm4oKTtcbiAgICAgIHByb21pc2VSZXNvbHZlKHZhbHVlKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIHJlamVjdCA9IGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkge1xuICAgIGlmICghX3RoaXMuaXNSZXNvbHZlZCkge1xuICAgICAgX3RoaXMuaXNSZXNvbHZlZCA9IHRydWU7XG4gICAgICBjb25maWcub25FcnJvciA9PSBudWxsID8gdm9pZCAwIDogY29uZmlnLm9uRXJyb3IodmFsdWUpO1xuICAgICAgY29udGludWVGbiA9PSBudWxsID8gdm9pZCAwIDogY29udGludWVGbigpO1xuICAgICAgcHJvbWlzZVJlamVjdCh2YWx1ZSk7XG4gICAgfVxuICB9O1xuXG4gIHZhciBwYXVzZSA9IGZ1bmN0aW9uIHBhdXNlKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoY29udGludWVSZXNvbHZlKSB7XG4gICAgICBjb250aW51ZUZuID0gY29udGludWVSZXNvbHZlO1xuICAgICAgX3RoaXMuaXNQYXVzZWQgPSB0cnVlO1xuICAgICAgY29uZmlnLm9uUGF1c2UgPT0gbnVsbCA/IHZvaWQgMCA6IGNvbmZpZy5vblBhdXNlKCk7XG4gICAgfSkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICBjb250aW51ZUZuID0gdW5kZWZpbmVkO1xuICAgICAgX3RoaXMuaXNQYXVzZWQgPSBmYWxzZTtcbiAgICAgIGNvbmZpZy5vbkNvbnRpbnVlID09IG51bGwgPyB2b2lkIDAgOiBjb25maWcub25Db250aW51ZSgpO1xuICAgIH0pO1xuICB9OyAvLyBDcmVhdGUgbG9vcCBmdW5jdGlvblxuXG5cbiAgdmFyIHJ1biA9IGZ1bmN0aW9uIHJ1bigpIHtcbiAgICAvLyBEbyBub3RoaW5nIGlmIGFscmVhZHkgcmVzb2x2ZWRcbiAgICBpZiAoX3RoaXMuaXNSZXNvbHZlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBwcm9taXNlT3JWYWx1ZTsgLy8gRXhlY3V0ZSBxdWVyeVxuXG4gICAgdHJ5IHtcbiAgICAgIHByb21pc2VPclZhbHVlID0gY29uZmlnLmZuKCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHByb21pc2VPclZhbHVlID0gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xuICAgIH0gLy8gQ3JlYXRlIGNhbGxiYWNrIHRvIGNhbmNlbCB0aGlzIGZldGNoXG5cblxuICAgIGNhbmNlbEZuID0gZnVuY3Rpb24gY2FuY2VsRm4oY2FuY2VsT3B0aW9ucykge1xuICAgICAgaWYgKCFfdGhpcy5pc1Jlc29sdmVkKSB7XG4gICAgICAgIHJlamVjdChuZXcgQ2FuY2VsbGVkRXJyb3IoY2FuY2VsT3B0aW9ucykpOyAvLyBDYW5jZWwgdHJhbnNwb3J0IGlmIHN1cHBvcnRlZFxuXG4gICAgICAgIGlmIChpc0NhbmNlbGFibGUocHJvbWlzZU9yVmFsdWUpKSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHByb21pc2VPclZhbHVlLmNhbmNlbCgpO1xuICAgICAgICAgIH0gY2F0Y2ggKF91bnVzZWQpIHt9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9OyAvLyBDaGVjayBpZiB0aGUgdHJhbnNwb3J0IGxheWVyIHN1cHBvcnQgY2FuY2VsbGF0aW9uXG5cblxuICAgIF90aGlzLmlzVHJhbnNwb3J0Q2FuY2VsYWJsZSA9IGlzQ2FuY2VsYWJsZShwcm9taXNlT3JWYWx1ZSk7XG4gICAgUHJvbWlzZS5yZXNvbHZlKHByb21pc2VPclZhbHVlKS50aGVuKHJlc29sdmUpLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgdmFyIF9jb25maWckcmV0cnksIF9jb25maWckcmV0cnlEZWxheTtcblxuICAgICAgLy8gU3RvcCBpZiB0aGUgZmV0Y2ggaXMgYWxyZWFkeSByZXNvbHZlZFxuICAgICAgaWYgKF90aGlzLmlzUmVzb2x2ZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSAvLyBEbyB3ZSBuZWVkIHRvIHJldHJ5IHRoZSByZXF1ZXN0P1xuXG5cbiAgICAgIHZhciByZXRyeSA9IChfY29uZmlnJHJldHJ5ID0gY29uZmlnLnJldHJ5KSAhPSBudWxsID8gX2NvbmZpZyRyZXRyeSA6IDM7XG4gICAgICB2YXIgcmV0cnlEZWxheSA9IChfY29uZmlnJHJldHJ5RGVsYXkgPSBjb25maWcucmV0cnlEZWxheSkgIT0gbnVsbCA/IF9jb25maWckcmV0cnlEZWxheSA6IGRlZmF1bHRSZXRyeURlbGF5O1xuICAgICAgdmFyIGRlbGF5ID0gdHlwZW9mIHJldHJ5RGVsYXkgPT09ICdmdW5jdGlvbicgPyByZXRyeURlbGF5KF90aGlzLmZhaWx1cmVDb3VudCwgZXJyb3IpIDogcmV0cnlEZWxheTtcbiAgICAgIHZhciBzaG91bGRSZXRyeSA9IHJldHJ5ID09PSB0cnVlIHx8IHR5cGVvZiByZXRyeSA9PT0gJ251bWJlcicgJiYgX3RoaXMuZmFpbHVyZUNvdW50IDwgcmV0cnkgfHwgdHlwZW9mIHJldHJ5ID09PSAnZnVuY3Rpb24nICYmIHJldHJ5KF90aGlzLmZhaWx1cmVDb3VudCwgZXJyb3IpO1xuXG4gICAgICBpZiAoY2FuY2VsUmV0cnkgfHwgIXNob3VsZFJldHJ5KSB7XG4gICAgICAgIC8vIFdlIGFyZSBkb25lIGlmIHRoZSBxdWVyeSBkb2VzIG5vdCBuZWVkIHRvIGJlIHJldHJpZWRcbiAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBfdGhpcy5mYWlsdXJlQ291bnQrKzsgLy8gTm90aWZ5IG9uIGZhaWxcblxuICAgICAgY29uZmlnLm9uRmFpbCA9PSBudWxsID8gdm9pZCAwIDogY29uZmlnLm9uRmFpbChfdGhpcy5mYWlsdXJlQ291bnQsIGVycm9yKTsgLy8gRGVsYXlcblxuICAgICAgc2xlZXAoZGVsYXkpIC8vIFBhdXNlIGlmIHRoZSBkb2N1bWVudCBpcyBub3QgdmlzaWJsZSBvciB3aGVuIHRoZSBkZXZpY2UgaXMgb2ZmbGluZVxuICAgICAgLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIWZvY3VzTWFuYWdlci5pc0ZvY3VzZWQoKSB8fCAhb25saW5lTWFuYWdlci5pc09ubGluZSgpKSB7XG4gICAgICAgICAgcmV0dXJuIHBhdXNlKCk7XG4gICAgICAgIH1cbiAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoY2FuY2VsUmV0cnkpIHtcbiAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJ1bigpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTsgLy8gU3RhcnQgbG9vcFxuXG5cbiAgcnVuKCk7XG59OyIsImV4cG9ydCB2YXIgU3Vic2NyaWJhYmxlID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gU3Vic2NyaWJhYmxlKCkge1xuICAgIHRoaXMubGlzdGVuZXJzID0gW107XG4gIH1cblxuICB2YXIgX3Byb3RvID0gU3Vic2NyaWJhYmxlLnByb3RvdHlwZTtcblxuICBfcHJvdG8uc3Vic2NyaWJlID0gZnVuY3Rpb24gc3Vic2NyaWJlKGxpc3RlbmVyKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIHZhciBjYWxsYmFjayA9IGxpc3RlbmVyIHx8IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfTtcblxuICAgIHRoaXMubGlzdGVuZXJzLnB1c2goY2FsbGJhY2spO1xuICAgIHRoaXMub25TdWJzY3JpYmUoKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMubGlzdGVuZXJzID0gX3RoaXMubGlzdGVuZXJzLmZpbHRlcihmdW5jdGlvbiAoeCkge1xuICAgICAgICByZXR1cm4geCAhPT0gY2FsbGJhY2s7XG4gICAgICB9KTtcblxuICAgICAgX3RoaXMub25VbnN1YnNjcmliZSgpO1xuICAgIH07XG4gIH07XG5cbiAgX3Byb3RvLmhhc0xpc3RlbmVycyA9IGZ1bmN0aW9uIGhhc0xpc3RlbmVycygpIHtcbiAgICByZXR1cm4gdGhpcy5saXN0ZW5lcnMubGVuZ3RoID4gMDtcbiAgfTtcblxuICBfcHJvdG8ub25TdWJzY3JpYmUgPSBmdW5jdGlvbiBvblN1YnNjcmliZSgpIHsvLyBEbyBub3RoaW5nXG4gIH07XG5cbiAgX3Byb3RvLm9uVW5zdWJzY3JpYmUgPSBmdW5jdGlvbiBvblVuc3Vic2NyaWJlKCkgey8vIERvIG5vdGhpbmdcbiAgfTtcblxuICByZXR1cm4gU3Vic2NyaWJhYmxlO1xufSgpOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuLy8gVFlQRVNcbi8vIFVUSUxTXG5leHBvcnQgdmFyIGlzU2VydmVyID0gdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCc7XG5leHBvcnQgZnVuY3Rpb24gbm9vcCgpIHtcbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBmdW5jdGlvbmFsVXBkYXRlKHVwZGF0ZXIsIGlucHV0KSB7XG4gIHJldHVybiB0eXBlb2YgdXBkYXRlciA9PT0gJ2Z1bmN0aW9uJyA/IHVwZGF0ZXIoaW5wdXQpIDogdXBkYXRlcjtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc1ZhbGlkVGltZW91dCh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyAmJiB2YWx1ZSA+PSAwICYmIHZhbHVlICE9PSBJbmZpbml0eTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBlbnN1cmVRdWVyeUtleUFycmF5KHZhbHVlKSB7XG4gIHJldHVybiBBcnJheS5pc0FycmF5KHZhbHVlKSA/IHZhbHVlIDogW3ZhbHVlXTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBkaWZmZXJlbmNlKGFycmF5MSwgYXJyYXkyKSB7XG4gIHJldHVybiBhcnJheTEuZmlsdGVyKGZ1bmN0aW9uICh4KSB7XG4gICAgcmV0dXJuIGFycmF5Mi5pbmRleE9mKHgpID09PSAtMTtcbiAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gcmVwbGFjZUF0KGFycmF5LCBpbmRleCwgdmFsdWUpIHtcbiAgdmFyIGNvcHkgPSBhcnJheS5zbGljZSgwKTtcbiAgY29weVtpbmRleF0gPSB2YWx1ZTtcbiAgcmV0dXJuIGNvcHk7XG59XG5leHBvcnQgZnVuY3Rpb24gdGltZVVudGlsU3RhbGUodXBkYXRlZEF0LCBzdGFsZVRpbWUpIHtcbiAgcmV0dXJuIE1hdGgubWF4KHVwZGF0ZWRBdCArIChzdGFsZVRpbWUgfHwgMCkgLSBEYXRlLm5vdygpLCAwKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVF1ZXJ5QXJncyhhcmcxLCBhcmcyLCBhcmczKSB7XG4gIGlmICghaXNRdWVyeUtleShhcmcxKSkge1xuICAgIHJldHVybiBhcmcxO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBhcmcyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIF9leHRlbmRzKHt9LCBhcmczLCB7XG4gICAgICBxdWVyeUtleTogYXJnMSxcbiAgICAgIHF1ZXJ5Rm46IGFyZzJcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBfZXh0ZW5kcyh7fSwgYXJnMiwge1xuICAgIHF1ZXJ5S2V5OiBhcmcxXG4gIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlTXV0YXRpb25BcmdzKGFyZzEsIGFyZzIsIGFyZzMpIHtcbiAgaWYgKGlzUXVlcnlLZXkoYXJnMSkpIHtcbiAgICBpZiAodHlwZW9mIGFyZzIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgYXJnMywge1xuICAgICAgICBtdXRhdGlvbktleTogYXJnMSxcbiAgICAgICAgbXV0YXRpb25GbjogYXJnMlxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIF9leHRlbmRzKHt9LCBhcmcyLCB7XG4gICAgICBtdXRhdGlvbktleTogYXJnMVxuICAgIH0pO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBhcmcxID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIF9leHRlbmRzKHt9LCBhcmcyLCB7XG4gICAgICBtdXRhdGlvbkZuOiBhcmcxXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gX2V4dGVuZHMoe30sIGFyZzEpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlRmlsdGVyQXJncyhhcmcxLCBhcmcyLCBhcmczKSB7XG4gIHJldHVybiBpc1F1ZXJ5S2V5KGFyZzEpID8gW19leHRlbmRzKHt9LCBhcmcyLCB7XG4gICAgcXVlcnlLZXk6IGFyZzFcbiAgfSksIGFyZzNdIDogW2FyZzEgfHwge30sIGFyZzJdO1xufVxuZXhwb3J0IGZ1bmN0aW9uIG1hcFF1ZXJ5U3RhdHVzRmlsdGVyKGFjdGl2ZSwgaW5hY3RpdmUpIHtcbiAgaWYgKGFjdGl2ZSA9PT0gdHJ1ZSAmJiBpbmFjdGl2ZSA9PT0gdHJ1ZSB8fCBhY3RpdmUgPT0gbnVsbCAmJiBpbmFjdGl2ZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuICdhbGwnO1xuICB9IGVsc2UgaWYgKGFjdGl2ZSA9PT0gZmFsc2UgJiYgaW5hY3RpdmUgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuICdub25lJztcbiAgfSBlbHNlIHtcbiAgICAvLyBBdCB0aGlzIHBvaW50LCBhY3RpdmV8aW5hY3RpdmUgY2FuIG9ubHkgYmUgdHJ1ZXxmYWxzZSBvciBmYWxzZXx0cnVlXG4gICAgLy8gc28sIHdoZW4gb25seSBvbmUgdmFsdWUgaXMgcHJvdmlkZWQsIHRoZSBtaXNzaW5nIG9uZSBoYXMgdG8gYmUgdGhlIG5lZ2F0ZWQgdmFsdWVcbiAgICB2YXIgaXNBY3RpdmUgPSBhY3RpdmUgIT0gbnVsbCA/IGFjdGl2ZSA6ICFpbmFjdGl2ZTtcbiAgICByZXR1cm4gaXNBY3RpdmUgPyAnYWN0aXZlJyA6ICdpbmFjdGl2ZSc7XG4gIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBtYXRjaFF1ZXJ5KGZpbHRlcnMsIHF1ZXJ5KSB7XG4gIHZhciBhY3RpdmUgPSBmaWx0ZXJzLmFjdGl2ZSxcbiAgICAgIGV4YWN0ID0gZmlsdGVycy5leGFjdCxcbiAgICAgIGZldGNoaW5nID0gZmlsdGVycy5mZXRjaGluZyxcbiAgICAgIGluYWN0aXZlID0gZmlsdGVycy5pbmFjdGl2ZSxcbiAgICAgIHByZWRpY2F0ZSA9IGZpbHRlcnMucHJlZGljYXRlLFxuICAgICAgcXVlcnlLZXkgPSBmaWx0ZXJzLnF1ZXJ5S2V5LFxuICAgICAgc3RhbGUgPSBmaWx0ZXJzLnN0YWxlO1xuXG4gIGlmIChpc1F1ZXJ5S2V5KHF1ZXJ5S2V5KSkge1xuICAgIGlmIChleGFjdCkge1xuICAgICAgaWYgKHF1ZXJ5LnF1ZXJ5SGFzaCAhPT0gaGFzaFF1ZXJ5S2V5QnlPcHRpb25zKHF1ZXJ5S2V5LCBxdWVyeS5vcHRpb25zKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICghcGFydGlhbE1hdGNoS2V5KHF1ZXJ5LnF1ZXJ5S2V5LCBxdWVyeUtleSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICB2YXIgcXVlcnlTdGF0dXNGaWx0ZXIgPSBtYXBRdWVyeVN0YXR1c0ZpbHRlcihhY3RpdmUsIGluYWN0aXZlKTtcblxuICBpZiAocXVlcnlTdGF0dXNGaWx0ZXIgPT09ICdub25lJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSBlbHNlIGlmIChxdWVyeVN0YXR1c0ZpbHRlciAhPT0gJ2FsbCcpIHtcbiAgICB2YXIgaXNBY3RpdmUgPSBxdWVyeS5pc0FjdGl2ZSgpO1xuXG4gICAgaWYgKHF1ZXJ5U3RhdHVzRmlsdGVyID09PSAnYWN0aXZlJyAmJiAhaXNBY3RpdmUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAocXVlcnlTdGF0dXNGaWx0ZXIgPT09ICdpbmFjdGl2ZScgJiYgaXNBY3RpdmUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBpZiAodHlwZW9mIHN0YWxlID09PSAnYm9vbGVhbicgJiYgcXVlcnkuaXNTdGFsZSgpICE9PSBzdGFsZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgZmV0Y2hpbmcgPT09ICdib29sZWFuJyAmJiBxdWVyeS5pc0ZldGNoaW5nKCkgIT09IGZldGNoaW5nKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKHByZWRpY2F0ZSAmJiAhcHJlZGljYXRlKHF1ZXJ5KSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuZXhwb3J0IGZ1bmN0aW9uIG1hdGNoTXV0YXRpb24oZmlsdGVycywgbXV0YXRpb24pIHtcbiAgdmFyIGV4YWN0ID0gZmlsdGVycy5leGFjdCxcbiAgICAgIGZldGNoaW5nID0gZmlsdGVycy5mZXRjaGluZyxcbiAgICAgIHByZWRpY2F0ZSA9IGZpbHRlcnMucHJlZGljYXRlLFxuICAgICAgbXV0YXRpb25LZXkgPSBmaWx0ZXJzLm11dGF0aW9uS2V5O1xuXG4gIGlmIChpc1F1ZXJ5S2V5KG11dGF0aW9uS2V5KSkge1xuICAgIGlmICghbXV0YXRpb24ub3B0aW9ucy5tdXRhdGlvbktleSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChleGFjdCkge1xuICAgICAgaWYgKGhhc2hRdWVyeUtleShtdXRhdGlvbi5vcHRpb25zLm11dGF0aW9uS2V5KSAhPT0gaGFzaFF1ZXJ5S2V5KG11dGF0aW9uS2V5KSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICghcGFydGlhbE1hdGNoS2V5KG11dGF0aW9uLm9wdGlvbnMubXV0YXRpb25LZXksIG11dGF0aW9uS2V5KSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlb2YgZmV0Y2hpbmcgPT09ICdib29sZWFuJyAmJiBtdXRhdGlvbi5zdGF0ZS5zdGF0dXMgPT09ICdsb2FkaW5nJyAhPT0gZmV0Y2hpbmcpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAocHJlZGljYXRlICYmICFwcmVkaWNhdGUobXV0YXRpb24pKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5leHBvcnQgZnVuY3Rpb24gaGFzaFF1ZXJ5S2V5QnlPcHRpb25zKHF1ZXJ5S2V5LCBvcHRpb25zKSB7XG4gIHZhciBoYXNoRm4gPSAob3B0aW9ucyA9PSBudWxsID8gdm9pZCAwIDogb3B0aW9ucy5xdWVyeUtleUhhc2hGbikgfHwgaGFzaFF1ZXJ5S2V5O1xuICByZXR1cm4gaGFzaEZuKHF1ZXJ5S2V5KTtcbn1cbi8qKlxuICogRGVmYXVsdCBxdWVyeSBrZXlzIGhhc2ggZnVuY3Rpb24uXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGhhc2hRdWVyeUtleShxdWVyeUtleSkge1xuICB2YXIgYXNBcnJheSA9IGVuc3VyZVF1ZXJ5S2V5QXJyYXkocXVlcnlLZXkpO1xuICByZXR1cm4gc3RhYmxlVmFsdWVIYXNoKGFzQXJyYXkpO1xufVxuLyoqXG4gKiBIYXNoZXMgdGhlIHZhbHVlIGludG8gYSBzdGFibGUgaGFzaC5cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gc3RhYmxlVmFsdWVIYXNoKHZhbHVlKSB7XG4gIHJldHVybiBKU09OLnN0cmluZ2lmeSh2YWx1ZSwgZnVuY3Rpb24gKF8sIHZhbCkge1xuICAgIHJldHVybiBpc1BsYWluT2JqZWN0KHZhbCkgPyBPYmplY3Qua2V5cyh2YWwpLnNvcnQoKS5yZWR1Y2UoZnVuY3Rpb24gKHJlc3VsdCwga2V5KSB7XG4gICAgICByZXN1bHRba2V5XSA9IHZhbFtrZXldO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9LCB7fSkgOiB2YWw7XG4gIH0pO1xufVxuLyoqXG4gKiBDaGVja3MgaWYga2V5IGBiYCBwYXJ0aWFsbHkgbWF0Y2hlcyB3aXRoIGtleSBgYWAuXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnRpYWxNYXRjaEtleShhLCBiKSB7XG4gIHJldHVybiBwYXJ0aWFsRGVlcEVxdWFsKGVuc3VyZVF1ZXJ5S2V5QXJyYXkoYSksIGVuc3VyZVF1ZXJ5S2V5QXJyYXkoYikpO1xufVxuLyoqXG4gKiBDaGVja3MgaWYgYGJgIHBhcnRpYWxseSBtYXRjaGVzIHdpdGggYGFgLlxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJ0aWFsRGVlcEVxdWFsKGEsIGIpIHtcbiAgaWYgKGEgPT09IGIpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYSAhPT0gdHlwZW9mIGIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoYSAmJiBiICYmIHR5cGVvZiBhID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgYiA9PT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gIU9iamVjdC5rZXlzKGIpLnNvbWUoZnVuY3Rpb24gKGtleSkge1xuICAgICAgcmV0dXJuICFwYXJ0aWFsRGVlcEVxdWFsKGFba2V5XSwgYltrZXldKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cbi8qKlxuICogVGhpcyBmdW5jdGlvbiByZXR1cm5zIGBhYCBpZiBgYmAgaXMgZGVlcGx5IGVxdWFsLlxuICogSWYgbm90LCBpdCB3aWxsIHJlcGxhY2UgYW55IGRlZXBseSBlcXVhbCBjaGlsZHJlbiBvZiBgYmAgd2l0aCB0aG9zZSBvZiBgYWAuXG4gKiBUaGlzIGNhbiBiZSB1c2VkIGZvciBzdHJ1Y3R1cmFsIHNoYXJpbmcgYmV0d2VlbiBKU09OIHZhbHVlcyBmb3IgZXhhbXBsZS5cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gcmVwbGFjZUVxdWFsRGVlcChhLCBiKSB7XG4gIGlmIChhID09PSBiKSB7XG4gICAgcmV0dXJuIGE7XG4gIH1cblxuICB2YXIgYXJyYXkgPSBBcnJheS5pc0FycmF5KGEpICYmIEFycmF5LmlzQXJyYXkoYik7XG5cbiAgaWYgKGFycmF5IHx8IGlzUGxhaW5PYmplY3QoYSkgJiYgaXNQbGFpbk9iamVjdChiKSkge1xuICAgIHZhciBhU2l6ZSA9IGFycmF5ID8gYS5sZW5ndGggOiBPYmplY3Qua2V5cyhhKS5sZW5ndGg7XG4gICAgdmFyIGJJdGVtcyA9IGFycmF5ID8gYiA6IE9iamVjdC5rZXlzKGIpO1xuICAgIHZhciBiU2l6ZSA9IGJJdGVtcy5sZW5ndGg7XG4gICAgdmFyIGNvcHkgPSBhcnJheSA/IFtdIDoge307XG4gICAgdmFyIGVxdWFsSXRlbXMgPSAwO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBiU2l6ZTsgaSsrKSB7XG4gICAgICB2YXIga2V5ID0gYXJyYXkgPyBpIDogYkl0ZW1zW2ldO1xuICAgICAgY29weVtrZXldID0gcmVwbGFjZUVxdWFsRGVlcChhW2tleV0sIGJba2V5XSk7XG5cbiAgICAgIGlmIChjb3B5W2tleV0gPT09IGFba2V5XSkge1xuICAgICAgICBlcXVhbEl0ZW1zKys7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGFTaXplID09PSBiU2l6ZSAmJiBlcXVhbEl0ZW1zID09PSBhU2l6ZSA/IGEgOiBjb3B5O1xuICB9XG5cbiAgcmV0dXJuIGI7XG59XG4vKipcbiAqIFNoYWxsb3cgY29tcGFyZSBvYmplY3RzLiBPbmx5IHdvcmtzIHdpdGggb2JqZWN0cyB0aGF0IGFsd2F5cyBoYXZlIHRoZSBzYW1lIHByb3BlcnRpZXMuXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHNoYWxsb3dFcXVhbE9iamVjdHMoYSwgYikge1xuICBpZiAoYSAmJiAhYiB8fCBiICYmICFhKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZm9yICh2YXIga2V5IGluIGEpIHtcbiAgICBpZiAoYVtrZXldICE9PSBiW2tleV0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn0gLy8gQ29waWVkIGZyb206IGh0dHBzOi8vZ2l0aHViLmNvbS9qb25zY2hsaW5rZXJ0L2lzLXBsYWluLW9iamVjdFxuXG5leHBvcnQgZnVuY3Rpb24gaXNQbGFpbk9iamVjdChvKSB7XG4gIGlmICghaGFzT2JqZWN0UHJvdG90eXBlKG8pKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9IC8vIElmIGhhcyBtb2RpZmllZCBjb25zdHJ1Y3RvclxuXG5cbiAgdmFyIGN0b3IgPSBvLmNvbnN0cnVjdG9yO1xuXG4gIGlmICh0eXBlb2YgY3RvciA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSAvLyBJZiBoYXMgbW9kaWZpZWQgcHJvdG90eXBlXG5cblxuICB2YXIgcHJvdCA9IGN0b3IucHJvdG90eXBlO1xuXG4gIGlmICghaGFzT2JqZWN0UHJvdG90eXBlKHByb3QpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9IC8vIElmIGNvbnN0cnVjdG9yIGRvZXMgbm90IGhhdmUgYW4gT2JqZWN0LXNwZWNpZmljIG1ldGhvZFxuXG5cbiAgaWYgKCFwcm90Lmhhc093blByb3BlcnR5KCdpc1Byb3RvdHlwZU9mJykpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0gLy8gTW9zdCBsaWtlbHkgYSBwbGFpbiBPYmplY3RcblxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBoYXNPYmplY3RQcm90b3R5cGUobykge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pID09PSAnW29iamVjdCBPYmplY3RdJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUXVlcnlLZXkodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgfHwgQXJyYXkuaXNBcnJheSh2YWx1ZSk7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNFcnJvcih2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBFcnJvcjtcbn1cbmV4cG9ydCBmdW5jdGlvbiBzbGVlcCh0aW1lb3V0KSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgIHNldFRpbWVvdXQocmVzb2x2ZSwgdGltZW91dCk7XG4gIH0pO1xufVxuLyoqXG4gKiBTY2hlZHVsZXMgYSBtaWNyb3Rhc2suXG4gKiBUaGlzIGNhbiBiZSB1c2VmdWwgdG8gc2NoZWR1bGUgc3RhdGUgdXBkYXRlcyBhZnRlciByZW5kZXJpbmcuXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHNjaGVkdWxlTWljcm90YXNrKGNhbGxiYWNrKSB7XG4gIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oY2FsbGJhY2spLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIHRocm93IGVycm9yO1xuICAgIH0pO1xuICB9KTtcbn0iLCJleHBvcnQgKiBmcm9tICcuL2NvcmUnO1xuZXhwb3J0ICogZnJvbSAnLi9yZWFjdCc7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbnZhciBkZWZhdWx0Q29udGV4dCA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVDb250ZXh0KHVuZGVmaW5lZCk7XG52YXIgUXVlcnlDbGllbnRTaGFyaW5nQ29udGV4dCA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVDb250ZXh0KGZhbHNlKTsgLy8gaWYgY29udGV4dFNoYXJpbmcgaXMgb24sIHdlIHNoYXJlIHRoZSBmaXJzdCBhbmQgYXQgbGVhc3Qgb25lXG4vLyBpbnN0YW5jZSBvZiB0aGUgY29udGV4dCBhY3Jvc3MgdGhlIHdpbmRvd1xuLy8gdG8gZW5zdXJlIHRoYXQgaWYgUmVhY3QgUXVlcnkgaXMgdXNlZCBhY3Jvc3Ncbi8vIGRpZmZlcmVudCBidW5kbGVzIG9yIG1pY3JvZnJvbnRlbmRzIHRoZXkgd2lsbFxuLy8gYWxsIHVzZSB0aGUgc2FtZSAqKmluc3RhbmNlKiogb2YgY29udGV4dCwgcmVnYXJkbGVzc1xuLy8gb2YgbW9kdWxlIHNjb3BpbmcuXG5cbmZ1bmN0aW9uIGdldFF1ZXJ5Q2xpZW50Q29udGV4dChjb250ZXh0U2hhcmluZykge1xuICBpZiAoY29udGV4dFNoYXJpbmcgJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBpZiAoIXdpbmRvdy5SZWFjdFF1ZXJ5Q2xpZW50Q29udGV4dCkge1xuICAgICAgd2luZG93LlJlYWN0UXVlcnlDbGllbnRDb250ZXh0ID0gZGVmYXVsdENvbnRleHQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHdpbmRvdy5SZWFjdFF1ZXJ5Q2xpZW50Q29udGV4dDtcbiAgfVxuXG4gIHJldHVybiBkZWZhdWx0Q29udGV4dDtcbn1cblxuZXhwb3J0IHZhciB1c2VRdWVyeUNsaWVudCA9IGZ1bmN0aW9uIHVzZVF1ZXJ5Q2xpZW50KCkge1xuICB2YXIgcXVlcnlDbGllbnQgPSBSZWFjdC51c2VDb250ZXh0KGdldFF1ZXJ5Q2xpZW50Q29udGV4dChSZWFjdC51c2VDb250ZXh0KFF1ZXJ5Q2xpZW50U2hhcmluZ0NvbnRleHQpKSk7XG5cbiAgaWYgKCFxdWVyeUNsaWVudCkge1xuICAgIHRocm93IG5ldyBFcnJvcignTm8gUXVlcnlDbGllbnQgc2V0LCB1c2UgUXVlcnlDbGllbnRQcm92aWRlciB0byBzZXQgb25lJyk7XG4gIH1cblxuICByZXR1cm4gcXVlcnlDbGllbnQ7XG59O1xuZXhwb3J0IHZhciBRdWVyeUNsaWVudFByb3ZpZGVyID0gZnVuY3Rpb24gUXVlcnlDbGllbnRQcm92aWRlcihfcmVmKSB7XG4gIHZhciBjbGllbnQgPSBfcmVmLmNsaWVudCxcbiAgICAgIF9yZWYkY29udGV4dFNoYXJpbmcgPSBfcmVmLmNvbnRleHRTaGFyaW5nLFxuICAgICAgY29udGV4dFNoYXJpbmcgPSBfcmVmJGNvbnRleHRTaGFyaW5nID09PSB2b2lkIDAgPyBmYWxzZSA6IF9yZWYkY29udGV4dFNoYXJpbmcsXG4gICAgICBjaGlsZHJlbiA9IF9yZWYuY2hpbGRyZW47XG4gIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgY2xpZW50Lm1vdW50KCk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGNsaWVudC51bm1vdW50KCk7XG4gICAgfTtcbiAgfSwgW2NsaWVudF0pO1xuICB2YXIgQ29udGV4dCA9IGdldFF1ZXJ5Q2xpZW50Q29udGV4dChjb250ZXh0U2hhcmluZyk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChRdWVyeUNsaWVudFNoYXJpbmdDb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgdmFsdWU6IGNvbnRleHRTaGFyaW5nXG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KENvbnRleHQuUHJvdmlkZXIsIHtcbiAgICB2YWx1ZTogY2xpZW50XG4gIH0sIGNoaWxkcmVuKSk7XG59OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7IC8vIENPTlRFWFRcblxuZnVuY3Rpb24gY3JlYXRlVmFsdWUoKSB7XG4gIHZhciBfaXNSZXNldCA9IGZhbHNlO1xuICByZXR1cm4ge1xuICAgIGNsZWFyUmVzZXQ6IGZ1bmN0aW9uIGNsZWFyUmVzZXQoKSB7XG4gICAgICBfaXNSZXNldCA9IGZhbHNlO1xuICAgIH0sXG4gICAgcmVzZXQ6IGZ1bmN0aW9uIHJlc2V0KCkge1xuICAgICAgX2lzUmVzZXQgPSB0cnVlO1xuICAgIH0sXG4gICAgaXNSZXNldDogZnVuY3Rpb24gaXNSZXNldCgpIHtcbiAgICAgIHJldHVybiBfaXNSZXNldDtcbiAgICB9XG4gIH07XG59XG5cbnZhciBRdWVyeUVycm9yUmVzZXRCb3VuZGFyeUNvbnRleHQgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlQ29udGV4dChjcmVhdGVWYWx1ZSgpKTsgLy8gSE9PS1xuXG5leHBvcnQgdmFyIHVzZVF1ZXJ5RXJyb3JSZXNldEJvdW5kYXJ5ID0gZnVuY3Rpb24gdXNlUXVlcnlFcnJvclJlc2V0Qm91bmRhcnkoKSB7XG4gIHJldHVybiBSZWFjdC51c2VDb250ZXh0KFF1ZXJ5RXJyb3JSZXNldEJvdW5kYXJ5Q29udGV4dCk7XG59OyAvLyBDT01QT05FTlRcblxuZXhwb3J0IHZhciBRdWVyeUVycm9yUmVzZXRCb3VuZGFyeSA9IGZ1bmN0aW9uIFF1ZXJ5RXJyb3JSZXNldEJvdW5kYXJ5KF9yZWYpIHtcbiAgdmFyIGNoaWxkcmVuID0gX3JlZi5jaGlsZHJlbjtcbiAgdmFyIHZhbHVlID0gUmVhY3QudXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGNyZWF0ZVZhbHVlKCk7XG4gIH0sIFtdKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFF1ZXJ5RXJyb3JSZXNldEJvdW5kYXJ5Q29udGV4dC5Qcm92aWRlciwge1xuICAgIHZhbHVlOiB2YWx1ZVxuICB9LCB0eXBlb2YgY2hpbGRyZW4gPT09ICdmdW5jdGlvbicgPyBjaGlsZHJlbih2YWx1ZSkgOiBjaGlsZHJlbik7XG59OyIsIi8vIFNpZGUgZWZmZWN0c1xuaW1wb3J0ICcuL3NldEJhdGNoVXBkYXRlc0ZuJztcbmltcG9ydCAnLi9zZXRMb2dnZXInO1xuZXhwb3J0IHsgUXVlcnlDbGllbnRQcm92aWRlciwgdXNlUXVlcnlDbGllbnQgfSBmcm9tICcuL1F1ZXJ5Q2xpZW50UHJvdmlkZXInO1xuZXhwb3J0IHsgUXVlcnlFcnJvclJlc2V0Qm91bmRhcnksIHVzZVF1ZXJ5RXJyb3JSZXNldEJvdW5kYXJ5IH0gZnJvbSAnLi9RdWVyeUVycm9yUmVzZXRCb3VuZGFyeSc7XG5leHBvcnQgeyB1c2VJc0ZldGNoaW5nIH0gZnJvbSAnLi91c2VJc0ZldGNoaW5nJztcbmV4cG9ydCB7IHVzZUlzTXV0YXRpbmcgfSBmcm9tICcuL3VzZUlzTXV0YXRpbmcnO1xuZXhwb3J0IHsgdXNlTXV0YXRpb24gfSBmcm9tICcuL3VzZU11dGF0aW9uJztcbmV4cG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAnLi91c2VRdWVyeSc7XG5leHBvcnQgeyB1c2VRdWVyaWVzIH0gZnJvbSAnLi91c2VRdWVyaWVzJztcbmV4cG9ydCB7IHVzZUluZmluaXRlUXVlcnkgfSBmcm9tICcuL3VzZUluZmluaXRlUXVlcnknOyAvLyBUeXBlc1xuXG5leHBvcnQgKiBmcm9tICcuL3R5cGVzJzsiLCJleHBvcnQgdmFyIGxvZ2dlciA9IGNvbnNvbGU7IiwiaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5leHBvcnQgdmFyIHVuc3RhYmxlX2JhdGNoZWRVcGRhdGVzID0gUmVhY3RET00udW5zdGFibGVfYmF0Y2hlZFVwZGF0ZXM7IiwiaW1wb3J0IHsgbm90aWZ5TWFuYWdlciB9IGZyb20gJy4uL2NvcmUnO1xuaW1wb3J0IHsgdW5zdGFibGVfYmF0Y2hlZFVwZGF0ZXMgfSBmcm9tICcuL3JlYWN0QmF0Y2hlZFVwZGF0ZXMnO1xubm90aWZ5TWFuYWdlci5zZXRCYXRjaE5vdGlmeUZ1bmN0aW9uKHVuc3RhYmxlX2JhdGNoZWRVcGRhdGVzKTsiLCJpbXBvcnQgeyBzZXRMb2dnZXIgfSBmcm9tICcuLi9jb3JlJztcbmltcG9ydCB7IGxvZ2dlciB9IGZyb20gJy4vbG9nZ2VyJztcblxuaWYgKGxvZ2dlcikge1xuICBzZXRMb2dnZXIobG9nZ2VyKTtcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbm90aWZ5TWFuYWdlciB9IGZyb20gJy4uL2NvcmUvbm90aWZ5TWFuYWdlcic7XG5pbXBvcnQgeyB1c2VRdWVyeUVycm9yUmVzZXRCb3VuZGFyeSB9IGZyb20gJy4vUXVlcnlFcnJvclJlc2V0Qm91bmRhcnknO1xuaW1wb3J0IHsgdXNlUXVlcnlDbGllbnQgfSBmcm9tICcuL1F1ZXJ5Q2xpZW50UHJvdmlkZXInO1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUJhc2VRdWVyeShvcHRpb25zLCBPYnNlcnZlcikge1xuICB2YXIgbW91bnRlZFJlZiA9IFJlYWN0LnVzZVJlZihmYWxzZSk7XG5cbiAgdmFyIF9SZWFjdCR1c2VTdGF0ZSA9IFJlYWN0LnVzZVN0YXRlKDApLFxuICAgICAgZm9yY2VVcGRhdGUgPSBfUmVhY3QkdXNlU3RhdGVbMV07XG5cbiAgdmFyIHF1ZXJ5Q2xpZW50ID0gdXNlUXVlcnlDbGllbnQoKTtcbiAgdmFyIGVycm9yUmVzZXRCb3VuZGFyeSA9IHVzZVF1ZXJ5RXJyb3JSZXNldEJvdW5kYXJ5KCk7XG4gIHZhciBkZWZhdWx0ZWRPcHRpb25zID0gcXVlcnlDbGllbnQuZGVmYXVsdFF1ZXJ5T2JzZXJ2ZXJPcHRpb25zKG9wdGlvbnMpOyAvLyBNYWtlIHN1cmUgcmVzdWx0cyBhcmUgb3B0aW1pc3RpY2FsbHkgc2V0IGluIGZldGNoaW5nIHN0YXRlIGJlZm9yZSBzdWJzY3JpYmluZyBvciB1cGRhdGluZyBvcHRpb25zXG5cbiAgZGVmYXVsdGVkT3B0aW9ucy5vcHRpbWlzdGljUmVzdWx0cyA9IHRydWU7IC8vIEluY2x1ZGUgY2FsbGJhY2tzIGluIGJhdGNoIHJlbmRlcnNcblxuICBpZiAoZGVmYXVsdGVkT3B0aW9ucy5vbkVycm9yKSB7XG4gICAgZGVmYXVsdGVkT3B0aW9ucy5vbkVycm9yID0gbm90aWZ5TWFuYWdlci5iYXRjaENhbGxzKGRlZmF1bHRlZE9wdGlvbnMub25FcnJvcik7XG4gIH1cblxuICBpZiAoZGVmYXVsdGVkT3B0aW9ucy5vblN1Y2Nlc3MpIHtcbiAgICBkZWZhdWx0ZWRPcHRpb25zLm9uU3VjY2VzcyA9IG5vdGlmeU1hbmFnZXIuYmF0Y2hDYWxscyhkZWZhdWx0ZWRPcHRpb25zLm9uU3VjY2Vzcyk7XG4gIH1cblxuICBpZiAoZGVmYXVsdGVkT3B0aW9ucy5vblNldHRsZWQpIHtcbiAgICBkZWZhdWx0ZWRPcHRpb25zLm9uU2V0dGxlZCA9IG5vdGlmeU1hbmFnZXIuYmF0Y2hDYWxscyhkZWZhdWx0ZWRPcHRpb25zLm9uU2V0dGxlZCk7XG4gIH1cblxuICBpZiAoZGVmYXVsdGVkT3B0aW9ucy5zdXNwZW5zZSkge1xuICAgIC8vIEFsd2F5cyBzZXQgc3RhbGUgdGltZSB3aGVuIHVzaW5nIHN1c3BlbnNlIHRvIHByZXZlbnRcbiAgICAvLyBmZXRjaGluZyBhZ2FpbiB3aGVuIGRpcmVjdGx5IG1vdW50aW5nIGFmdGVyIHN1c3BlbmRpbmdcbiAgICBpZiAodHlwZW9mIGRlZmF1bHRlZE9wdGlvbnMuc3RhbGVUaW1lICE9PSAnbnVtYmVyJykge1xuICAgICAgZGVmYXVsdGVkT3B0aW9ucy5zdGFsZVRpbWUgPSAxMDAwO1xuICAgIH1cbiAgfVxuXG4gIGlmIChkZWZhdWx0ZWRPcHRpb25zLnN1c3BlbnNlIHx8IGRlZmF1bHRlZE9wdGlvbnMudXNlRXJyb3JCb3VuZGFyeSkge1xuICAgIC8vIFByZXZlbnQgcmV0cnlpbmcgZmFpbGVkIHF1ZXJ5IGlmIHRoZSBlcnJvciBib3VuZGFyeSBoYXMgbm90IGJlZW4gcmVzZXQgeWV0XG4gICAgaWYgKCFlcnJvclJlc2V0Qm91bmRhcnkuaXNSZXNldCgpKSB7XG4gICAgICBkZWZhdWx0ZWRPcHRpb25zLnJldHJ5T25Nb3VudCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHZhciBfUmVhY3QkdXNlU3RhdGUyID0gUmVhY3QudXNlU3RhdGUoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBuZXcgT2JzZXJ2ZXIocXVlcnlDbGllbnQsIGRlZmF1bHRlZE9wdGlvbnMpO1xuICB9KSxcbiAgICAgIG9ic2VydmVyID0gX1JlYWN0JHVzZVN0YXRlMlswXTtcblxuICB2YXIgcmVzdWx0ID0gb2JzZXJ2ZXIuZ2V0T3B0aW1pc3RpY1Jlc3VsdChkZWZhdWx0ZWRPcHRpb25zKTtcbiAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBtb3VudGVkUmVmLmN1cnJlbnQgPSB0cnVlO1xuICAgIGVycm9yUmVzZXRCb3VuZGFyeS5jbGVhclJlc2V0KCk7XG4gICAgdmFyIHVuc3Vic2NyaWJlID0gb2JzZXJ2ZXIuc3Vic2NyaWJlKG5vdGlmeU1hbmFnZXIuYmF0Y2hDYWxscyhmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAobW91bnRlZFJlZi5jdXJyZW50KSB7XG4gICAgICAgIGZvcmNlVXBkYXRlKGZ1bmN0aW9uICh4KSB7XG4gICAgICAgICAgcmV0dXJuIHggKyAxO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KSk7IC8vIFVwZGF0ZSByZXN1bHQgdG8gbWFrZSBzdXJlIHdlIGRpZCBub3QgbWlzcyBhbnkgcXVlcnkgdXBkYXRlc1xuICAgIC8vIGJldHdlZW4gY3JlYXRpbmcgdGhlIG9ic2VydmVyIGFuZCBzdWJzY3JpYmluZyB0byBpdC5cblxuICAgIG9ic2VydmVyLnVwZGF0ZVJlc3VsdCgpO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBtb3VudGVkUmVmLmN1cnJlbnQgPSBmYWxzZTtcbiAgICAgIHVuc3Vic2NyaWJlKCk7XG4gICAgfTtcbiAgfSwgW2Vycm9yUmVzZXRCb3VuZGFyeSwgb2JzZXJ2ZXJdKTtcbiAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAvLyBEbyBub3Qgbm90aWZ5IG9uIHVwZGF0ZXMgYmVjYXVzZSBvZiBjaGFuZ2VzIGluIHRoZSBvcHRpb25zIGJlY2F1c2VcbiAgICAvLyB0aGVzZSBjaGFuZ2VzIHNob3VsZCBhbHJlYWR5IGJlIHJlZmxlY3RlZCBpbiB0aGUgb3B0aW1pc3RpYyByZXN1bHQuXG4gICAgb2JzZXJ2ZXIuc2V0T3B0aW9ucyhkZWZhdWx0ZWRPcHRpb25zLCB7XG4gICAgICBsaXN0ZW5lcnM6IGZhbHNlXG4gICAgfSk7XG4gIH0sIFtkZWZhdWx0ZWRPcHRpb25zLCBvYnNlcnZlcl0pOyAvLyBIYW5kbGUgc3VzcGVuc2VcblxuICBpZiAoZGVmYXVsdGVkT3B0aW9ucy5zdXNwZW5zZSAmJiByZXN1bHQuaXNMb2FkaW5nKSB7XG4gICAgdGhyb3cgb2JzZXJ2ZXIuZmV0Y2hPcHRpbWlzdGljKGRlZmF1bHRlZE9wdGlvbnMpLnRoZW4oZnVuY3Rpb24gKF9yZWYpIHtcbiAgICAgIHZhciBkYXRhID0gX3JlZi5kYXRhO1xuICAgICAgZGVmYXVsdGVkT3B0aW9ucy5vblN1Y2Nlc3MgPT0gbnVsbCA/IHZvaWQgMCA6IGRlZmF1bHRlZE9wdGlvbnMub25TdWNjZXNzKGRhdGEpO1xuICAgICAgZGVmYXVsdGVkT3B0aW9ucy5vblNldHRsZWQgPT0gbnVsbCA/IHZvaWQgMCA6IGRlZmF1bHRlZE9wdGlvbnMub25TZXR0bGVkKGRhdGEsIG51bGwpO1xuICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgZXJyb3JSZXNldEJvdW5kYXJ5LmNsZWFyUmVzZXQoKTtcbiAgICAgIGRlZmF1bHRlZE9wdGlvbnMub25FcnJvciA9PSBudWxsID8gdm9pZCAwIDogZGVmYXVsdGVkT3B0aW9ucy5vbkVycm9yKGVycm9yKTtcbiAgICAgIGRlZmF1bHRlZE9wdGlvbnMub25TZXR0bGVkID09IG51bGwgPyB2b2lkIDAgOiBkZWZhdWx0ZWRPcHRpb25zLm9uU2V0dGxlZCh1bmRlZmluZWQsIGVycm9yKTtcbiAgICB9KTtcbiAgfSAvLyBIYW5kbGUgZXJyb3IgYm91bmRhcnlcblxuXG4gIGlmICgoZGVmYXVsdGVkT3B0aW9ucy5zdXNwZW5zZSB8fCBkZWZhdWx0ZWRPcHRpb25zLnVzZUVycm9yQm91bmRhcnkpICYmIHJlc3VsdC5pc0Vycm9yICYmICFyZXN1bHQuaXNGZXRjaGluZykge1xuICAgIHRocm93IHJlc3VsdC5lcnJvcjtcbiAgfSAvLyBIYW5kbGUgcmVzdWx0IHByb3BlcnR5IHVzYWdlIHRyYWNraW5nXG5cblxuICBpZiAoZGVmYXVsdGVkT3B0aW9ucy5ub3RpZnlPbkNoYW5nZVByb3BzID09PSAndHJhY2tlZCcpIHtcbiAgICByZXN1bHQgPSBvYnNlcnZlci50cmFja1Jlc3VsdChyZXN1bHQpO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn0iLCJpbXBvcnQgeyBJbmZpbml0ZVF1ZXJ5T2JzZXJ2ZXIgfSBmcm9tICcuLi9jb3JlL2luZmluaXRlUXVlcnlPYnNlcnZlcic7XG5pbXBvcnQgeyBwYXJzZVF1ZXJ5QXJncyB9IGZyb20gJy4uL2NvcmUvdXRpbHMnO1xuaW1wb3J0IHsgdXNlQmFzZVF1ZXJ5IH0gZnJvbSAnLi91c2VCYXNlUXVlcnknOyAvLyBIT09LXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VJbmZpbml0ZVF1ZXJ5KGFyZzEsIGFyZzIsIGFyZzMpIHtcbiAgdmFyIG9wdGlvbnMgPSBwYXJzZVF1ZXJ5QXJncyhhcmcxLCBhcmcyLCBhcmczKTtcbiAgcmV0dXJuIHVzZUJhc2VRdWVyeShvcHRpb25zLCBJbmZpbml0ZVF1ZXJ5T2JzZXJ2ZXIpO1xufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBub3RpZnlNYW5hZ2VyIH0gZnJvbSAnLi4vY29yZS9ub3RpZnlNYW5hZ2VyJztcbmltcG9ydCB7IHBhcnNlRmlsdGVyQXJncyB9IGZyb20gJy4uL2NvcmUvdXRpbHMnO1xuaW1wb3J0IHsgdXNlUXVlcnlDbGllbnQgfSBmcm9tICcuL1F1ZXJ5Q2xpZW50UHJvdmlkZXInO1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUlzRmV0Y2hpbmcoYXJnMSwgYXJnMikge1xuICB2YXIgbW91bnRlZFJlZiA9IFJlYWN0LnVzZVJlZihmYWxzZSk7XG4gIHZhciBxdWVyeUNsaWVudCA9IHVzZVF1ZXJ5Q2xpZW50KCk7XG5cbiAgdmFyIF9wYXJzZUZpbHRlckFyZ3MgPSBwYXJzZUZpbHRlckFyZ3MoYXJnMSwgYXJnMiksXG4gICAgICBmaWx0ZXJzID0gX3BhcnNlRmlsdGVyQXJnc1swXTtcblxuICB2YXIgX1JlYWN0JHVzZVN0YXRlID0gUmVhY3QudXNlU3RhdGUocXVlcnlDbGllbnQuaXNGZXRjaGluZyhmaWx0ZXJzKSksXG4gICAgICBpc0ZldGNoaW5nID0gX1JlYWN0JHVzZVN0YXRlWzBdLFxuICAgICAgc2V0SXNGZXRjaGluZyA9IF9SZWFjdCR1c2VTdGF0ZVsxXTtcblxuICB2YXIgZmlsdGVyc1JlZiA9IFJlYWN0LnVzZVJlZihmaWx0ZXJzKTtcbiAgZmlsdGVyc1JlZi5jdXJyZW50ID0gZmlsdGVycztcbiAgdmFyIGlzRmV0Y2hpbmdSZWYgPSBSZWFjdC51c2VSZWYoaXNGZXRjaGluZyk7XG4gIGlzRmV0Y2hpbmdSZWYuY3VycmVudCA9IGlzRmV0Y2hpbmc7XG4gIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgbW91bnRlZFJlZi5jdXJyZW50ID0gdHJ1ZTtcbiAgICB2YXIgdW5zdWJzY3JpYmUgPSBxdWVyeUNsaWVudC5nZXRRdWVyeUNhY2hlKCkuc3Vic2NyaWJlKG5vdGlmeU1hbmFnZXIuYmF0Y2hDYWxscyhmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAobW91bnRlZFJlZi5jdXJyZW50KSB7XG4gICAgICAgIHZhciBuZXdJc0ZldGNoaW5nID0gcXVlcnlDbGllbnQuaXNGZXRjaGluZyhmaWx0ZXJzUmVmLmN1cnJlbnQpO1xuXG4gICAgICAgIGlmIChpc0ZldGNoaW5nUmVmLmN1cnJlbnQgIT09IG5ld0lzRmV0Y2hpbmcpIHtcbiAgICAgICAgICBzZXRJc0ZldGNoaW5nKG5ld0lzRmV0Y2hpbmcpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSkpO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBtb3VudGVkUmVmLmN1cnJlbnQgPSBmYWxzZTtcbiAgICAgIHVuc3Vic2NyaWJlKCk7XG4gICAgfTtcbiAgfSwgW3F1ZXJ5Q2xpZW50XSk7XG4gIHJldHVybiBpc0ZldGNoaW5nO1xufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBub3RpZnlNYW5hZ2VyIH0gZnJvbSAnLi4vY29yZS9ub3RpZnlNYW5hZ2VyJztcbmltcG9ydCB7IHVzZVF1ZXJ5Q2xpZW50IH0gZnJvbSAnLi9RdWVyeUNsaWVudFByb3ZpZGVyJztcbmV4cG9ydCBmdW5jdGlvbiB1c2VJc011dGF0aW5nKGZpbHRlcnMpIHtcbiAgdmFyIG1vdW50ZWRSZWYgPSBSZWFjdC51c2VSZWYoZmFsc2UpO1xuICB2YXIgcXVlcnlDbGllbnQgPSB1c2VRdWVyeUNsaWVudCgpO1xuXG4gIHZhciBfUmVhY3QkdXNlU3RhdGUgPSBSZWFjdC51c2VTdGF0ZShxdWVyeUNsaWVudC5pc011dGF0aW5nKGZpbHRlcnMpKSxcbiAgICAgIGlzTXV0YXRpbmcgPSBfUmVhY3QkdXNlU3RhdGVbMF0sXG4gICAgICBzZXRJc011dGF0aW5nID0gX1JlYWN0JHVzZVN0YXRlWzFdO1xuXG4gIHZhciBmaWx0ZXJzUmVmID0gUmVhY3QudXNlUmVmKGZpbHRlcnMpO1xuICBmaWx0ZXJzUmVmLmN1cnJlbnQgPSBmaWx0ZXJzO1xuICB2YXIgaXNNdXRhdGluZ1JlZiA9IFJlYWN0LnVzZVJlZihpc011dGF0aW5nKTtcbiAgaXNNdXRhdGluZ1JlZi5jdXJyZW50ID0gaXNNdXRhdGluZztcbiAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBtb3VudGVkUmVmLmN1cnJlbnQgPSB0cnVlO1xuICAgIHZhciB1bnN1YnNjcmliZSA9IHF1ZXJ5Q2xpZW50LmdldE11dGF0aW9uQ2FjaGUoKS5zdWJzY3JpYmUobm90aWZ5TWFuYWdlci5iYXRjaENhbGxzKGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChtb3VudGVkUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgdmFyIG5ld0lzTXV0YXRpbmcgPSBxdWVyeUNsaWVudC5pc011dGF0aW5nKGZpbHRlcnNSZWYuY3VycmVudCk7XG5cbiAgICAgICAgaWYgKGlzTXV0YXRpbmdSZWYuY3VycmVudCAhPT0gbmV3SXNNdXRhdGluZykge1xuICAgICAgICAgIHNldElzTXV0YXRpbmcobmV3SXNNdXRhdGluZyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIG1vdW50ZWRSZWYuY3VycmVudCA9IGZhbHNlO1xuICAgICAgdW5zdWJzY3JpYmUoKTtcbiAgICB9O1xuICB9LCBbcXVlcnlDbGllbnRdKTtcbiAgcmV0dXJuIGlzTXV0YXRpbmc7XG59IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbm90aWZ5TWFuYWdlciB9IGZyb20gJy4uL2NvcmUvbm90aWZ5TWFuYWdlcic7XG5pbXBvcnQgeyBub29wLCBwYXJzZU11dGF0aW9uQXJncyB9IGZyb20gJy4uL2NvcmUvdXRpbHMnO1xuaW1wb3J0IHsgTXV0YXRpb25PYnNlcnZlciB9IGZyb20gJy4uL2NvcmUvbXV0YXRpb25PYnNlcnZlcic7XG5pbXBvcnQgeyB1c2VRdWVyeUNsaWVudCB9IGZyb20gJy4vUXVlcnlDbGllbnRQcm92aWRlcic7XG5leHBvcnQgZnVuY3Rpb24gdXNlTXV0YXRpb24oYXJnMSwgYXJnMiwgYXJnMykge1xuICB2YXIgbW91bnRlZFJlZiA9IFJlYWN0LnVzZVJlZihmYWxzZSk7XG5cbiAgdmFyIF9SZWFjdCR1c2VTdGF0ZSA9IFJlYWN0LnVzZVN0YXRlKDApLFxuICAgICAgZm9yY2VVcGRhdGUgPSBfUmVhY3QkdXNlU3RhdGVbMV07XG5cbiAgdmFyIG9wdGlvbnMgPSBwYXJzZU11dGF0aW9uQXJncyhhcmcxLCBhcmcyLCBhcmczKTtcbiAgdmFyIHF1ZXJ5Q2xpZW50ID0gdXNlUXVlcnlDbGllbnQoKTtcbiAgdmFyIG9ic1JlZiA9IFJlYWN0LnVzZVJlZigpO1xuXG4gIGlmICghb2JzUmVmLmN1cnJlbnQpIHtcbiAgICBvYnNSZWYuY3VycmVudCA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKHF1ZXJ5Q2xpZW50LCBvcHRpb25zKTtcbiAgfSBlbHNlIHtcbiAgICBvYnNSZWYuY3VycmVudC5zZXRPcHRpb25zKG9wdGlvbnMpO1xuICB9XG5cbiAgdmFyIGN1cnJlbnRSZXN1bHQgPSBvYnNSZWYuY3VycmVudC5nZXRDdXJyZW50UmVzdWx0KCk7XG4gIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgbW91bnRlZFJlZi5jdXJyZW50ID0gdHJ1ZTtcbiAgICB2YXIgdW5zdWJzY3JpYmUgPSBvYnNSZWYuY3VycmVudC5zdWJzY3JpYmUobm90aWZ5TWFuYWdlci5iYXRjaENhbGxzKGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChtb3VudGVkUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgZm9yY2VVcGRhdGUoZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgICByZXR1cm4geCArIDE7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgbW91bnRlZFJlZi5jdXJyZW50ID0gZmFsc2U7XG4gICAgICB1bnN1YnNjcmliZSgpO1xuICAgIH07XG4gIH0sIFtdKTtcbiAgdmFyIG11dGF0ZSA9IFJlYWN0LnVzZUNhbGxiYWNrKGZ1bmN0aW9uICh2YXJpYWJsZXMsIG11dGF0ZU9wdGlvbnMpIHtcbiAgICBvYnNSZWYuY3VycmVudC5tdXRhdGUodmFyaWFibGVzLCBtdXRhdGVPcHRpb25zKS5jYXRjaChub29wKTtcbiAgfSwgW10pO1xuXG4gIGlmIChjdXJyZW50UmVzdWx0LmVycm9yICYmIG9ic1JlZi5jdXJyZW50Lm9wdGlvbnMudXNlRXJyb3JCb3VuZGFyeSkge1xuICAgIHRocm93IGN1cnJlbnRSZXN1bHQuZXJyb3I7XG4gIH1cblxuICByZXR1cm4gX2V4dGVuZHMoe30sIGN1cnJlbnRSZXN1bHQsIHtcbiAgICBtdXRhdGU6IG11dGF0ZSxcbiAgICBtdXRhdGVBc3luYzogY3VycmVudFJlc3VsdC5tdXRhdGVcbiAgfSk7XG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG5vdGlmeU1hbmFnZXIgfSBmcm9tICcuLi9jb3JlL25vdGlmeU1hbmFnZXInO1xuaW1wb3J0IHsgUXVlcmllc09ic2VydmVyIH0gZnJvbSAnLi4vY29yZS9xdWVyaWVzT2JzZXJ2ZXInO1xuaW1wb3J0IHsgdXNlUXVlcnlDbGllbnQgfSBmcm9tICcuL1F1ZXJ5Q2xpZW50UHJvdmlkZXInO1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVF1ZXJpZXMocXVlcmllcykge1xuICB2YXIgbW91bnRlZFJlZiA9IFJlYWN0LnVzZVJlZihmYWxzZSk7XG5cbiAgdmFyIF9SZWFjdCR1c2VTdGF0ZSA9IFJlYWN0LnVzZVN0YXRlKDApLFxuICAgICAgZm9yY2VVcGRhdGUgPSBfUmVhY3QkdXNlU3RhdGVbMV07XG5cbiAgdmFyIHF1ZXJ5Q2xpZW50ID0gdXNlUXVlcnlDbGllbnQoKTtcbiAgdmFyIGRlZmF1bHRlZFF1ZXJpZXMgPSBxdWVyaWVzLm1hcChmdW5jdGlvbiAob3B0aW9ucykge1xuICAgIHZhciBkZWZhdWx0ZWRPcHRpb25zID0gcXVlcnlDbGllbnQuZGVmYXVsdFF1ZXJ5T2JzZXJ2ZXJPcHRpb25zKG9wdGlvbnMpOyAvLyBNYWtlIHN1cmUgdGhlIHJlc3VsdHMgYXJlIGFscmVhZHkgaW4gZmV0Y2hpbmcgc3RhdGUgYmVmb3JlIHN1YnNjcmliaW5nIG9yIHVwZGF0aW5nIG9wdGlvbnNcblxuICAgIGRlZmF1bHRlZE9wdGlvbnMub3B0aW1pc3RpY1Jlc3VsdHMgPSB0cnVlO1xuICAgIHJldHVybiBkZWZhdWx0ZWRPcHRpb25zO1xuICB9KTtcblxuICB2YXIgX1JlYWN0JHVzZVN0YXRlMiA9IFJlYWN0LnVzZVN0YXRlKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gbmV3IFF1ZXJpZXNPYnNlcnZlcihxdWVyeUNsaWVudCwgZGVmYXVsdGVkUXVlcmllcyk7XG4gIH0pLFxuICAgICAgb2JzZXJ2ZXIgPSBfUmVhY3QkdXNlU3RhdGUyWzBdO1xuXG4gIHZhciByZXN1bHQgPSBvYnNlcnZlci5nZXRPcHRpbWlzdGljUmVzdWx0KGRlZmF1bHRlZFF1ZXJpZXMpO1xuICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIG1vdW50ZWRSZWYuY3VycmVudCA9IHRydWU7XG4gICAgdmFyIHVuc3Vic2NyaWJlID0gb2JzZXJ2ZXIuc3Vic2NyaWJlKG5vdGlmeU1hbmFnZXIuYmF0Y2hDYWxscyhmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAobW91bnRlZFJlZi5jdXJyZW50KSB7XG4gICAgICAgIGZvcmNlVXBkYXRlKGZ1bmN0aW9uICh4KSB7XG4gICAgICAgICAgcmV0dXJuIHggKyAxO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIG1vdW50ZWRSZWYuY3VycmVudCA9IGZhbHNlO1xuICAgICAgdW5zdWJzY3JpYmUoKTtcbiAgICB9O1xuICB9LCBbb2JzZXJ2ZXJdKTtcbiAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAvLyBEbyBub3Qgbm90aWZ5IG9uIHVwZGF0ZXMgYmVjYXVzZSBvZiBjaGFuZ2VzIGluIHRoZSBvcHRpb25zIGJlY2F1c2VcbiAgICAvLyB0aGVzZSBjaGFuZ2VzIHNob3VsZCBhbHJlYWR5IGJlIHJlZmxlY3RlZCBpbiB0aGUgb3B0aW1pc3RpYyByZXN1bHQuXG4gICAgb2JzZXJ2ZXIuc2V0UXVlcmllcyhkZWZhdWx0ZWRRdWVyaWVzLCB7XG4gICAgICBsaXN0ZW5lcnM6IGZhbHNlXG4gICAgfSk7XG4gIH0sIFtkZWZhdWx0ZWRRdWVyaWVzLCBvYnNlcnZlcl0pO1xuICByZXR1cm4gcmVzdWx0O1xufSIsImltcG9ydCB7IFF1ZXJ5T2JzZXJ2ZXIgfSBmcm9tICcuLi9jb3JlJztcbmltcG9ydCB7IHBhcnNlUXVlcnlBcmdzIH0gZnJvbSAnLi4vY29yZS91dGlscyc7XG5pbXBvcnQgeyB1c2VCYXNlUXVlcnkgfSBmcm9tICcuL3VzZUJhc2VRdWVyeSc7IC8vIEhPT0tcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVF1ZXJ5KGFyZzEsIGFyZzIsIGFyZzMpIHtcbiAgdmFyIHBhcnNlZE9wdGlvbnMgPSBwYXJzZVF1ZXJ5QXJncyhhcmcxLCBhcmcyLCBhcmczKTtcbiAgcmV0dXJuIHVzZUJhc2VRdWVyeShwYXJzZWRPcHRpb25zLCBRdWVyeU9ic2VydmVyKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufSIsImltcG9ydCBzZXRQcm90b3R5cGVPZiBmcm9tIFwiLi9zZXRQcm90b3R5cGVPZi5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2luaGVyaXRzTG9vc2Uoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzLnByb3RvdHlwZSk7XG4gIHN1YkNsYXNzLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IHN1YkNsYXNzO1xuICBzZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gICAgby5fX3Byb3RvX18gPSBwO1xuICAgIHJldHVybiBvO1xuICB9O1xuXG4gIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7XG59IiwiaW1wb3J0IHsgU3R5bGVTaGVldCB9IGZyb20gJ0BlbW90aW9uL3NoZWV0JztcbmltcG9ydCB7IGRlYWxsb2MsIGFsbG9jLCBuZXh0LCB0b2tlbiwgZnJvbSwgcGVlaywgZGVsaW1pdCwgaWRlbnRpZmllciwgcG9zaXRpb24sIHN0cmluZ2lmeSwgQ09NTUVOVCwgcnVsZXNoZWV0LCBtaWRkbGV3YXJlLCBwcmVmaXhlciwgc2VyaWFsaXplLCBjb21waWxlIH0gZnJvbSAnc3R5bGlzJztcbmltcG9ydCAnQGVtb3Rpb24vd2Vhay1tZW1vaXplJztcbmltcG9ydCAnQGVtb3Rpb24vbWVtb2l6ZSc7XG5cbnZhciBsYXN0ID0gZnVuY3Rpb24gbGFzdChhcnIpIHtcbiAgcmV0dXJuIGFyci5sZW5ndGggPyBhcnJbYXJyLmxlbmd0aCAtIDFdIDogbnVsbDtcbn07XG5cbnZhciB0b1J1bGVzID0gZnVuY3Rpb24gdG9SdWxlcyhwYXJzZWQsIHBvaW50cykge1xuICAvLyBwcmV0ZW5kIHdlJ3ZlIHN0YXJ0ZWQgd2l0aCBhIGNvbW1hXG4gIHZhciBpbmRleCA9IC0xO1xuICB2YXIgY2hhcmFjdGVyID0gNDQ7XG5cbiAgZG8ge1xuICAgIHN3aXRjaCAodG9rZW4oY2hhcmFjdGVyKSkge1xuICAgICAgY2FzZSAwOlxuICAgICAgICAvLyAmXFxmXG4gICAgICAgIGlmIChjaGFyYWN0ZXIgPT09IDM4ICYmIHBlZWsoKSA9PT0gMTIpIHtcbiAgICAgICAgICAvLyB0aGlzIGlzIG5vdCAxMDAlIGNvcnJlY3QsIHdlIGRvbid0IGFjY291bnQgZm9yIGxpdGVyYWwgc2VxdWVuY2VzIGhlcmUgLSBsaWtlIGZvciBleGFtcGxlIHF1b3RlZCBzdHJpbmdzXG4gICAgICAgICAgLy8gc3R5bGlzIGluc2VydHMgXFxmIGFmdGVyICYgdG8ga25vdyB3aGVuICYgd2hlcmUgaXQgc2hvdWxkIHJlcGxhY2UgdGhpcyBzZXF1ZW5jZSB3aXRoIHRoZSBjb250ZXh0IHNlbGVjdG9yXG4gICAgICAgICAgLy8gYW5kIHdoZW4gaXQgc2hvdWxkIGp1c3QgY29uY2F0ZW5hdGUgdGhlIG91dGVyIGFuZCBpbm5lciBzZWxlY3RvcnNcbiAgICAgICAgICAvLyBpdCdzIHZlcnkgdW5saWtlbHkgZm9yIHRoaXMgc2VxdWVuY2UgdG8gYWN0dWFsbHkgYXBwZWFyIGluIGEgZGlmZmVyZW50IGNvbnRleHQsIHNvIHdlIGp1c3QgbGV2ZXJhZ2UgdGhpcyBmYWN0IGhlcmVcbiAgICAgICAgICBwb2ludHNbaW5kZXhdID0gMTtcbiAgICAgICAgfVxuXG4gICAgICAgIHBhcnNlZFtpbmRleF0gKz0gaWRlbnRpZmllcihwb3NpdGlvbiAtIDEpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAyOlxuICAgICAgICBwYXJzZWRbaW5kZXhdICs9IGRlbGltaXQoY2hhcmFjdGVyKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgNDpcbiAgICAgICAgLy8gY29tbWFcbiAgICAgICAgaWYgKGNoYXJhY3RlciA9PT0gNDQpIHtcbiAgICAgICAgICAvLyBjb2xvblxuICAgICAgICAgIHBhcnNlZFsrK2luZGV4XSA9IHBlZWsoKSA9PT0gNTggPyAnJlxcZicgOiAnJztcbiAgICAgICAgICBwb2ludHNbaW5kZXhdID0gcGFyc2VkW2luZGV4XS5sZW5ndGg7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgLy8gZmFsbHRocm91Z2hcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcGFyc2VkW2luZGV4XSArPSBmcm9tKGNoYXJhY3Rlcik7XG4gICAgfVxuICB9IHdoaWxlIChjaGFyYWN0ZXIgPSBuZXh0KCkpO1xuXG4gIHJldHVybiBwYXJzZWQ7XG59O1xuXG52YXIgZ2V0UnVsZXMgPSBmdW5jdGlvbiBnZXRSdWxlcyh2YWx1ZSwgcG9pbnRzKSB7XG4gIHJldHVybiBkZWFsbG9jKHRvUnVsZXMoYWxsb2ModmFsdWUpLCBwb2ludHMpKTtcbn07IC8vIFdlYWtTZXQgd291bGQgYmUgbW9yZSBhcHByb3ByaWF0ZSwgYnV0IG9ubHkgV2Vha01hcCBpcyBzdXBwb3J0ZWQgaW4gSUUxMVxuXG5cbnZhciBmaXhlZEVsZW1lbnRzID0gLyogI19fUFVSRV9fICovbmV3IFdlYWtNYXAoKTtcbnZhciBjb21wYXQgPSBmdW5jdGlvbiBjb21wYXQoZWxlbWVudCkge1xuICBpZiAoZWxlbWVudC50eXBlICE9PSAncnVsZScgfHwgIWVsZW1lbnQucGFyZW50IHx8IC8vIC5sZW5ndGggaW5kaWNhdGVzIGlmIHRoaXMgcnVsZSBjb250YWlucyBwc2V1ZG8gb3Igbm90XG4gICFlbGVtZW50Lmxlbmd0aCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciB2YWx1ZSA9IGVsZW1lbnQudmFsdWUsXG4gICAgICBwYXJlbnQgPSBlbGVtZW50LnBhcmVudDtcbiAgdmFyIGlzSW1wbGljaXRSdWxlID0gZWxlbWVudC5jb2x1bW4gPT09IHBhcmVudC5jb2x1bW4gJiYgZWxlbWVudC5saW5lID09PSBwYXJlbnQubGluZTtcblxuICB3aGlsZSAocGFyZW50LnR5cGUgIT09ICdydWxlJykge1xuICAgIHBhcmVudCA9IHBhcmVudC5wYXJlbnQ7XG4gICAgaWYgKCFwYXJlbnQpIHJldHVybjtcbiAgfSAvLyBzaG9ydC1jaXJjdWl0IGZvciB0aGUgc2ltcGxlc3QgY2FzZVxuXG5cbiAgaWYgKGVsZW1lbnQucHJvcHMubGVuZ3RoID09PSAxICYmIHZhbHVlLmNoYXJDb2RlQXQoMCkgIT09IDU4XG4gIC8qIGNvbG9uICovXG4gICYmICFmaXhlZEVsZW1lbnRzLmdldChwYXJlbnQpKSB7XG4gICAgcmV0dXJuO1xuICB9IC8vIGlmIHRoaXMgaXMgYW4gaW1wbGljaXRseSBpbnNlcnRlZCBydWxlICh0aGUgb25lIGVhZ2VybHkgaW5zZXJ0ZWQgYXQgdGhlIGVhY2ggbmV3IG5lc3RlZCBsZXZlbClcbiAgLy8gdGhlbiB0aGUgcHJvcHMgaGFzIGFscmVhZHkgYmVlbiBtYW5pcHVsYXRlZCBiZWZvcmVoYW5kIGFzIHRoZXkgdGhhdCBhcnJheSBpcyBzaGFyZWQgYmV0d2VlbiBpdCBhbmQgaXRzIFwicnVsZSBwYXJlbnRcIlxuXG5cbiAgaWYgKGlzSW1wbGljaXRSdWxlKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgZml4ZWRFbGVtZW50cy5zZXQoZWxlbWVudCwgdHJ1ZSk7XG4gIHZhciBwb2ludHMgPSBbXTtcbiAgdmFyIHJ1bGVzID0gZ2V0UnVsZXModmFsdWUsIHBvaW50cyk7XG4gIHZhciBwYXJlbnRSdWxlcyA9IHBhcmVudC5wcm9wcztcblxuICBmb3IgKHZhciBpID0gMCwgayA9IDA7IGkgPCBydWxlcy5sZW5ndGg7IGkrKykge1xuICAgIGZvciAodmFyIGogPSAwOyBqIDwgcGFyZW50UnVsZXMubGVuZ3RoOyBqKyssIGsrKykge1xuICAgICAgZWxlbWVudC5wcm9wc1trXSA9IHBvaW50c1tpXSA/IHJ1bGVzW2ldLnJlcGxhY2UoLyZcXGYvZywgcGFyZW50UnVsZXNbal0pIDogcGFyZW50UnVsZXNbal0gKyBcIiBcIiArIHJ1bGVzW2ldO1xuICAgIH1cbiAgfVxufTtcbnZhciByZW1vdmVMYWJlbCA9IGZ1bmN0aW9uIHJlbW92ZUxhYmVsKGVsZW1lbnQpIHtcbiAgaWYgKGVsZW1lbnQudHlwZSA9PT0gJ2RlY2wnKSB7XG4gICAgdmFyIHZhbHVlID0gZWxlbWVudC52YWx1ZTtcblxuICAgIGlmICggLy8gY2hhcmNvZGUgZm9yIGxcbiAgICB2YWx1ZS5jaGFyQ29kZUF0KDApID09PSAxMDggJiYgLy8gY2hhcmNvZGUgZm9yIGJcbiAgICB2YWx1ZS5jaGFyQ29kZUF0KDIpID09PSA5OCkge1xuICAgICAgLy8gdGhpcyBpZ25vcmVzIGxhYmVsXG4gICAgICBlbGVtZW50W1wicmV0dXJuXCJdID0gJyc7XG4gICAgICBlbGVtZW50LnZhbHVlID0gJyc7XG4gICAgfVxuICB9XG59O1xudmFyIGlnbm9yZUZsYWcgPSAnZW1vdGlvbi1kaXNhYmxlLXNlcnZlci1yZW5kZXJpbmctdW5zYWZlLXNlbGVjdG9yLXdhcm5pbmctcGxlYXNlLWRvLW5vdC11c2UtdGhpcy10aGUtd2FybmluZy1leGlzdHMtZm9yLWEtcmVhc29uJztcblxudmFyIGlzSWdub3JpbmdDb21tZW50ID0gZnVuY3Rpb24gaXNJZ25vcmluZ0NvbW1lbnQoZWxlbWVudCkge1xuICByZXR1cm4gISFlbGVtZW50ICYmIGVsZW1lbnQudHlwZSA9PT0gJ2NvbW0nICYmIGVsZW1lbnQuY2hpbGRyZW4uaW5kZXhPZihpZ25vcmVGbGFnKSA+IC0xO1xufTtcblxudmFyIGNyZWF0ZVVuc2FmZVNlbGVjdG9yc0FsYXJtID0gZnVuY3Rpb24gY3JlYXRlVW5zYWZlU2VsZWN0b3JzQWxhcm0oY2FjaGUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChlbGVtZW50LCBpbmRleCwgY2hpbGRyZW4pIHtcbiAgICBpZiAoZWxlbWVudC50eXBlICE9PSAncnVsZScpIHJldHVybjtcbiAgICB2YXIgdW5zYWZlUHNldWRvQ2xhc3NlcyA9IGVsZW1lbnQudmFsdWUubWF0Y2goLyg6Zmlyc3R8Om50aHw6bnRoLWxhc3QpLWNoaWxkL2cpO1xuXG4gICAgaWYgKHVuc2FmZVBzZXVkb0NsYXNzZXMgJiYgY2FjaGUuY29tcGF0ICE9PSB0cnVlKSB7XG4gICAgICB2YXIgcHJldkVsZW1lbnQgPSBpbmRleCA+IDAgPyBjaGlsZHJlbltpbmRleCAtIDFdIDogbnVsbDtcblxuICAgICAgaWYgKHByZXZFbGVtZW50ICYmIGlzSWdub3JpbmdDb21tZW50KGxhc3QocHJldkVsZW1lbnQuY2hpbGRyZW4pKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVuc2FmZVBzZXVkb0NsYXNzZXMuZm9yRWFjaChmdW5jdGlvbiAodW5zYWZlUHNldWRvQ2xhc3MpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIlRoZSBwc2V1ZG8gY2xhc3MgXFxcIlwiICsgdW5zYWZlUHNldWRvQ2xhc3MgKyBcIlxcXCIgaXMgcG90ZW50aWFsbHkgdW5zYWZlIHdoZW4gZG9pbmcgc2VydmVyLXNpZGUgcmVuZGVyaW5nLiBUcnkgY2hhbmdpbmcgaXQgdG8gXFxcIlwiICsgdW5zYWZlUHNldWRvQ2xhc3Muc3BsaXQoJy1jaGlsZCcpWzBdICsgXCItb2YtdHlwZVxcXCIuXCIpO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xufTtcblxudmFyIGlzSW1wb3J0UnVsZSA9IGZ1bmN0aW9uIGlzSW1wb3J0UnVsZShlbGVtZW50KSB7XG4gIHJldHVybiBlbGVtZW50LnR5cGUuY2hhckNvZGVBdCgxKSA9PT0gMTA1ICYmIGVsZW1lbnQudHlwZS5jaGFyQ29kZUF0KDApID09PSA2NDtcbn07XG5cbnZhciBpc1ByZXBlbmRlZFdpdGhSZWd1bGFyUnVsZXMgPSBmdW5jdGlvbiBpc1ByZXBlbmRlZFdpdGhSZWd1bGFyUnVsZXMoaW5kZXgsIGNoaWxkcmVuKSB7XG4gIGZvciAodmFyIGkgPSBpbmRleCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgaWYgKCFpc0ltcG9ydFJ1bGUoY2hpbGRyZW5baV0pKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59OyAvLyB1c2UgdGhpcyB0byByZW1vdmUgaW5jb3JyZWN0IGVsZW1lbnRzIGZyb20gZnVydGhlciBwcm9jZXNzaW5nXG4vLyBzbyB0aGV5IGRvbid0IGdldCBoYW5kZWQgdG8gdGhlIGBzaGVldGAgKG9yIGFueXRoaW5nIGVsc2UpXG4vLyBhcyB0aGF0IGNvdWxkIHBvdGVudGlhbGx5IGxlYWQgdG8gYWRkaXRpb25hbCBsb2dzIHdoaWNoIGluIHR1cm4gY291bGQgYmUgb3ZlcmhlbG1pbmcgdG8gdGhlIHVzZXJcblxuXG52YXIgbnVsbGlmeUVsZW1lbnQgPSBmdW5jdGlvbiBudWxsaWZ5RWxlbWVudChlbGVtZW50KSB7XG4gIGVsZW1lbnQudHlwZSA9ICcnO1xuICBlbGVtZW50LnZhbHVlID0gJyc7XG4gIGVsZW1lbnRbXCJyZXR1cm5cIl0gPSAnJztcbiAgZWxlbWVudC5jaGlsZHJlbiA9ICcnO1xuICBlbGVtZW50LnByb3BzID0gJyc7XG59O1xuXG52YXIgaW5jb3JyZWN0SW1wb3J0QWxhcm0gPSBmdW5jdGlvbiBpbmNvcnJlY3RJbXBvcnRBbGFybShlbGVtZW50LCBpbmRleCwgY2hpbGRyZW4pIHtcbiAgaWYgKCFpc0ltcG9ydFJ1bGUoZWxlbWVudCkpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoZWxlbWVudC5wYXJlbnQpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiYEBpbXBvcnRgIHJ1bGVzIGNhbid0IGJlIG5lc3RlZCBpbnNpZGUgb3RoZXIgcnVsZXMuIFBsZWFzZSBtb3ZlIGl0IHRvIHRoZSB0b3AgbGV2ZWwgYW5kIHB1dCBpdCBiZWZvcmUgcmVndWxhciBydWxlcy4gS2VlcCBpbiBtaW5kIHRoYXQgdGhleSBjYW4gb25seSBiZSB1c2VkIHdpdGhpbiBnbG9iYWwgc3R5bGVzLlwiKTtcbiAgICBudWxsaWZ5RWxlbWVudChlbGVtZW50KTtcbiAgfSBlbHNlIGlmIChpc1ByZXBlbmRlZFdpdGhSZWd1bGFyUnVsZXMoaW5kZXgsIGNoaWxkcmVuKSkge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJgQGltcG9ydGAgcnVsZXMgY2FuJ3QgYmUgYWZ0ZXIgb3RoZXIgcnVsZXMuIFBsZWFzZSBwdXQgeW91ciBgQGltcG9ydGAgcnVsZXMgYmVmb3JlIHlvdXIgb3RoZXIgcnVsZXMuXCIpO1xuICAgIG51bGxpZnlFbGVtZW50KGVsZW1lbnQpO1xuICB9XG59O1xuXG52YXIgZGVmYXVsdFN0eWxpc1BsdWdpbnMgPSBbcHJlZml4ZXJdO1xuXG52YXIgY3JlYXRlQ2FjaGUgPSBmdW5jdGlvbiBjcmVhdGVDYWNoZShvcHRpb25zKSB7XG4gIHZhciBrZXkgPSBvcHRpb25zLmtleTtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiAha2V5KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiWW91IGhhdmUgdG8gY29uZmlndXJlIGBrZXlgIGZvciB5b3VyIGNhY2hlLiBQbGVhc2UgbWFrZSBzdXJlIGl0J3MgdW5pcXVlIChhbmQgbm90IGVxdWFsIHRvICdjc3MnKSBhcyBpdCdzIHVzZWQgZm9yIGxpbmtpbmcgc3R5bGVzIHRvIHlvdXIgY2FjaGUuXFxuXCIgKyBcIklmIG11bHRpcGxlIGNhY2hlcyBzaGFyZSB0aGUgc2FtZSBrZXkgdGhleSBtaWdodCBcXFwiZmlnaHRcXFwiIGZvciBlYWNoIG90aGVyJ3Mgc3R5bGUgZWxlbWVudHMuXCIpO1xuICB9XG5cbiAgaWYgKCBrZXkgPT09ICdjc3MnKSB7XG4gICAgdmFyIHNzclN0eWxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJzdHlsZVtkYXRhLWVtb3Rpb25dOm5vdChbZGF0YS1zXSlcIik7IC8vIGdldCBTU1JlZCBzdHlsZXMgb3V0IG9mIHRoZSB3YXkgb2YgUmVhY3QncyBoeWRyYXRpb25cbiAgICAvLyBkb2N1bWVudC5oZWFkIGlzIGEgc2FmZSBwbGFjZSB0byBtb3ZlIHRoZW0gdG8odGhvdWdoIG5vdGUgZG9jdW1lbnQuaGVhZCBpcyBub3QgbmVjZXNzYXJpbHkgdGhlIGxhc3QgcGxhY2UgdGhleSB3aWxsIGJlKVxuICAgIC8vIG5vdGUgdGhpcyB2ZXJ5IHZlcnkgaW50ZW50aW9uYWxseSB0YXJnZXRzIGFsbCBzdHlsZSBlbGVtZW50cyByZWdhcmRsZXNzIG9mIHRoZSBrZXkgdG8gZW5zdXJlXG4gICAgLy8gdGhhdCBjcmVhdGluZyBhIGNhY2hlIHdvcmtzIGluc2lkZSBvZiByZW5kZXIgb2YgYSBSZWFjdCBjb21wb25lbnRcblxuICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoc3NyU3R5bGVzLCBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgLy8gd2Ugd2FudCB0byBvbmx5IG1vdmUgZWxlbWVudHMgd2hpY2ggaGF2ZSBhIHNwYWNlIGluIHRoZSBkYXRhLWVtb3Rpb24gYXR0cmlidXRlIHZhbHVlXG4gICAgICAvLyBiZWNhdXNlIHRoYXQgaW5kaWNhdGVzIHRoYXQgaXQgaXMgYW4gRW1vdGlvbiAxMSBzZXJ2ZXItc2lkZSByZW5kZXJlZCBzdHlsZSBlbGVtZW50c1xuICAgICAgLy8gd2hpbGUgd2Ugd2lsbCBhbHJlYWR5IGlnbm9yZSBFbW90aW9uIDExIGNsaWVudC1zaWRlIGluc2VydGVkIHN0eWxlcyBiZWNhdXNlIG9mIHRoZSA6bm90KFtkYXRhLXNdKSBwYXJ0IGluIHRoZSBzZWxlY3RvclxuICAgICAgLy8gRW1vdGlvbiAxMCBjbGllbnQtc2lkZSBpbnNlcnRlZCBzdHlsZXMgZGlkIG5vdCBoYXZlIGRhdGEtcyAoYnV0IGltcG9ydGFudGx5IGRpZCBub3QgaGF2ZSBhIHNwYWNlIGluIHRoZWlyIGRhdGEtZW1vdGlvbiBhdHRyaWJ1dGVzKVxuICAgICAgLy8gc28gY2hlY2tpbmcgZm9yIHRoZSBzcGFjZSBlbnN1cmVzIHRoYXQgbG9hZGluZyBFbW90aW9uIDExIGFmdGVyIEVtb3Rpb24gMTAgaGFzIGluc2VydGVkIHNvbWUgc3R5bGVzXG4gICAgICAvLyB3aWxsIG5vdCByZXN1bHQgaW4gdGhlIEVtb3Rpb24gMTAgc3R5bGVzIGJlaW5nIGRlc3Ryb3llZFxuICAgICAgdmFyIGRhdGFFbW90aW9uQXR0cmlidXRlID0gbm9kZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtZW1vdGlvbicpO1xuXG4gICAgICBpZiAoZGF0YUVtb3Rpb25BdHRyaWJ1dGUuaW5kZXhPZignICcpID09PSAtMSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKG5vZGUpO1xuICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtcycsICcnKTtcbiAgICB9KTtcbiAgfVxuXG4gIHZhciBzdHlsaXNQbHVnaW5zID0gb3B0aW9ucy5zdHlsaXNQbHVnaW5zIHx8IGRlZmF1bHRTdHlsaXNQbHVnaW5zO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgLy8gJEZsb3dGaXhNZVxuICAgIGlmICgvW15hLXotXS8udGVzdChrZXkpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJFbW90aW9uIGtleSBtdXN0IG9ubHkgY29udGFpbiBsb3dlciBjYXNlIGFscGhhYmV0aWNhbCBjaGFyYWN0ZXJzIGFuZCAtIGJ1dCBcXFwiXCIgKyBrZXkgKyBcIlxcXCIgd2FzIHBhc3NlZFwiKTtcbiAgICB9XG4gIH1cblxuICB2YXIgaW5zZXJ0ZWQgPSB7fTsgLy8gJEZsb3dGaXhNZVxuXG4gIHZhciBjb250YWluZXI7XG4gIHZhciBub2Rlc1RvSHlkcmF0ZSA9IFtdO1xuXG4gIHtcbiAgICBjb250YWluZXIgPSBvcHRpb25zLmNvbnRhaW5lciB8fCBkb2N1bWVudC5oZWFkO1xuICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoIC8vIHRoaXMgbWVhbnMgd2Ugd2lsbCBpZ25vcmUgZWxlbWVudHMgd2hpY2ggZG9uJ3QgaGF2ZSBhIHNwYWNlIGluIHRoZW0gd2hpY2hcbiAgICAvLyBtZWFucyB0aGF0IHRoZSBzdHlsZSBlbGVtZW50cyB3ZSdyZSBsb29raW5nIGF0IGFyZSBvbmx5IEVtb3Rpb24gMTEgc2VydmVyLXJlbmRlcmVkIHN0eWxlIGVsZW1lbnRzXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInN0eWxlW2RhdGEtZW1vdGlvbl49XFxcIlwiICsga2V5ICsgXCIgXFxcIl1cIiksIGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICB2YXIgYXR0cmliID0gbm9kZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWVtb3Rpb25cIikuc3BsaXQoJyAnKTsgLy8gJEZsb3dGaXhNZVxuXG4gICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGF0dHJpYi5sZW5ndGg7IGkrKykge1xuICAgICAgICBpbnNlcnRlZFthdHRyaWJbaV1dID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgbm9kZXNUb0h5ZHJhdGUucHVzaChub2RlKTtcbiAgICB9KTtcbiAgfVxuXG4gIHZhciBfaW5zZXJ0O1xuXG4gIHZhciBvbW5pcHJlc2VudFBsdWdpbnMgPSBbY29tcGF0LCByZW1vdmVMYWJlbF07XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBvbW5pcHJlc2VudFBsdWdpbnMucHVzaChjcmVhdGVVbnNhZmVTZWxlY3RvcnNBbGFybSh7XG4gICAgICBnZXQgY29tcGF0KCkge1xuICAgICAgICByZXR1cm4gY2FjaGUuY29tcGF0O1xuICAgICAgfVxuXG4gICAgfSksIGluY29ycmVjdEltcG9ydEFsYXJtKTtcbiAgfVxuXG4gIHtcbiAgICB2YXIgY3VycmVudFNoZWV0O1xuICAgIHZhciBmaW5hbGl6aW5nUGx1Z2lucyA9IFtzdHJpbmdpZnksIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgaWYgKCFlbGVtZW50LnJvb3QpIHtcbiAgICAgICAgaWYgKGVsZW1lbnRbXCJyZXR1cm5cIl0pIHtcbiAgICAgICAgICBjdXJyZW50U2hlZXQuaW5zZXJ0KGVsZW1lbnRbXCJyZXR1cm5cIl0pO1xuICAgICAgICB9IGVsc2UgaWYgKGVsZW1lbnQudmFsdWUgJiYgZWxlbWVudC50eXBlICE9PSBDT01NRU5UKSB7XG4gICAgICAgICAgLy8gaW5zZXJ0IGVtcHR5IHJ1bGUgaW4gbm9uLXByb2R1Y3Rpb24gZW52aXJvbm1lbnRzXG4gICAgICAgICAgLy8gc28gQGVtb3Rpb24vamVzdCBjYW4gZ3JhYiBga2V5YCBmcm9tIHRoZSAoSlMpRE9NIGZvciBjYWNoZXMgd2l0aG91dCBhbnkgcnVsZXMgaW5zZXJ0ZWQgeWV0XG4gICAgICAgICAgY3VycmVudFNoZWV0Lmluc2VydChlbGVtZW50LnZhbHVlICsgXCJ7fVwiKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gOiBydWxlc2hlZXQoZnVuY3Rpb24gKHJ1bGUpIHtcbiAgICAgIGN1cnJlbnRTaGVldC5pbnNlcnQocnVsZSk7XG4gICAgfSldO1xuICAgIHZhciBzZXJpYWxpemVyID0gbWlkZGxld2FyZShvbW5pcHJlc2VudFBsdWdpbnMuY29uY2F0KHN0eWxpc1BsdWdpbnMsIGZpbmFsaXppbmdQbHVnaW5zKSk7XG5cbiAgICB2YXIgc3R5bGlzID0gZnVuY3Rpb24gc3R5bGlzKHN0eWxlcykge1xuICAgICAgcmV0dXJuIHNlcmlhbGl6ZShjb21waWxlKHN0eWxlcyksIHNlcmlhbGl6ZXIpO1xuICAgIH07XG5cbiAgICBfaW5zZXJ0ID0gZnVuY3Rpb24gaW5zZXJ0KHNlbGVjdG9yLCBzZXJpYWxpemVkLCBzaGVldCwgc2hvdWxkQ2FjaGUpIHtcbiAgICAgIGN1cnJlbnRTaGVldCA9IHNoZWV0O1xuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBzZXJpYWxpemVkLm1hcCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGN1cnJlbnRTaGVldCA9IHtcbiAgICAgICAgICBpbnNlcnQ6IGZ1bmN0aW9uIGluc2VydChydWxlKSB7XG4gICAgICAgICAgICBzaGVldC5pbnNlcnQocnVsZSArIHNlcmlhbGl6ZWQubWFwKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIHN0eWxpcyhzZWxlY3RvciA/IHNlbGVjdG9yICsgXCJ7XCIgKyBzZXJpYWxpemVkLnN0eWxlcyArIFwifVwiIDogc2VyaWFsaXplZC5zdHlsZXMpO1xuXG4gICAgICBpZiAoc2hvdWxkQ2FjaGUpIHtcbiAgICAgICAgY2FjaGUuaW5zZXJ0ZWRbc2VyaWFsaXplZC5uYW1lXSA9IHRydWU7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IHtcbiAgICBrZXk6IGtleSxcbiAgICBzaGVldDogbmV3IFN0eWxlU2hlZXQoe1xuICAgICAga2V5OiBrZXksXG4gICAgICBjb250YWluZXI6IGNvbnRhaW5lcixcbiAgICAgIG5vbmNlOiBvcHRpb25zLm5vbmNlLFxuICAgICAgc3BlZWR5OiBvcHRpb25zLnNwZWVkeSxcbiAgICAgIHByZXBlbmQ6IG9wdGlvbnMucHJlcGVuZFxuICAgIH0pLFxuICAgIG5vbmNlOiBvcHRpb25zLm5vbmNlLFxuICAgIGluc2VydGVkOiBpbnNlcnRlZCxcbiAgICByZWdpc3RlcmVkOiB7fSxcbiAgICBpbnNlcnQ6IF9pbnNlcnRcbiAgfTtcbiAgY2FjaGUuc2hlZXQuaHlkcmF0ZShub2Rlc1RvSHlkcmF0ZSk7XG4gIHJldHVybiBjYWNoZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNhY2hlO1xuIiwiLyogZXNsaW50LWRpc2FibGUgKi9cbi8vIEluc3BpcmVkIGJ5IGh0dHBzOi8vZ2l0aHViLmNvbS9nYXJ5Y291cnQvbXVybXVyaGFzaC1qc1xuLy8gUG9ydGVkIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2FhcHBsZWJ5L3NtaGFzaGVyL2Jsb2IvNjFhMDUzMGYyODI3N2YyZTg1MGJmYzM5NjAwY2U2MWQwMmI1MThkZS9zcmMvTXVybXVySGFzaDIuY3BwI0wzNy1MODZcbmZ1bmN0aW9uIG11cm11cjIoc3RyKSB7XG4gIC8vICdtJyBhbmQgJ3InIGFyZSBtaXhpbmcgY29uc3RhbnRzIGdlbmVyYXRlZCBvZmZsaW5lLlxuICAvLyBUaGV5J3JlIG5vdCByZWFsbHkgJ21hZ2ljJywgdGhleSBqdXN0IGhhcHBlbiB0byB3b3JrIHdlbGwuXG4gIC8vIGNvbnN0IG0gPSAweDViZDFlOTk1O1xuICAvLyBjb25zdCByID0gMjQ7XG4gIC8vIEluaXRpYWxpemUgdGhlIGhhc2hcbiAgdmFyIGggPSAwOyAvLyBNaXggNCBieXRlcyBhdCBhIHRpbWUgaW50byB0aGUgaGFzaFxuXG4gIHZhciBrLFxuICAgICAgaSA9IDAsXG4gICAgICBsZW4gPSBzdHIubGVuZ3RoO1xuXG4gIGZvciAoOyBsZW4gPj0gNDsgKytpLCBsZW4gLT0gNCkge1xuICAgIGsgPSBzdHIuY2hhckNvZGVBdChpKSAmIDB4ZmYgfCAoc3RyLmNoYXJDb2RlQXQoKytpKSAmIDB4ZmYpIDw8IDggfCAoc3RyLmNoYXJDb2RlQXQoKytpKSAmIDB4ZmYpIDw8IDE2IHwgKHN0ci5jaGFyQ29kZUF0KCsraSkgJiAweGZmKSA8PCAyNDtcbiAgICBrID1cbiAgICAvKiBNYXRoLmltdWwoaywgbSk6ICovXG4gICAgKGsgJiAweGZmZmYpICogMHg1YmQxZTk5NSArICgoayA+Pj4gMTYpICogMHhlOTk1IDw8IDE2KTtcbiAgICBrIF49XG4gICAgLyogayA+Pj4gcjogKi9cbiAgICBrID4+PiAyNDtcbiAgICBoID1cbiAgICAvKiBNYXRoLmltdWwoaywgbSk6ICovXG4gICAgKGsgJiAweGZmZmYpICogMHg1YmQxZTk5NSArICgoayA+Pj4gMTYpICogMHhlOTk1IDw8IDE2KSBeXG4gICAgLyogTWF0aC5pbXVsKGgsIG0pOiAqL1xuICAgIChoICYgMHhmZmZmKSAqIDB4NWJkMWU5OTUgKyAoKGggPj4+IDE2KSAqIDB4ZTk5NSA8PCAxNik7XG4gIH0gLy8gSGFuZGxlIHRoZSBsYXN0IGZldyBieXRlcyBvZiB0aGUgaW5wdXQgYXJyYXlcblxuXG4gIHN3aXRjaCAobGVuKSB7XG4gICAgY2FzZSAzOlxuICAgICAgaCBePSAoc3RyLmNoYXJDb2RlQXQoaSArIDIpICYgMHhmZikgPDwgMTY7XG5cbiAgICBjYXNlIDI6XG4gICAgICBoIF49IChzdHIuY2hhckNvZGVBdChpICsgMSkgJiAweGZmKSA8PCA4O1xuXG4gICAgY2FzZSAxOlxuICAgICAgaCBePSBzdHIuY2hhckNvZGVBdChpKSAmIDB4ZmY7XG4gICAgICBoID1cbiAgICAgIC8qIE1hdGguaW11bChoLCBtKTogKi9cbiAgICAgIChoICYgMHhmZmZmKSAqIDB4NWJkMWU5OTUgKyAoKGggPj4+IDE2KSAqIDB4ZTk5NSA8PCAxNik7XG4gIH0gLy8gRG8gYSBmZXcgZmluYWwgbWl4ZXMgb2YgdGhlIGhhc2ggdG8gZW5zdXJlIHRoZSBsYXN0IGZld1xuICAvLyBieXRlcyBhcmUgd2VsbC1pbmNvcnBvcmF0ZWQuXG5cblxuICBoIF49IGggPj4+IDEzO1xuICBoID1cbiAgLyogTWF0aC5pbXVsKGgsIG0pOiAqL1xuICAoaCAmIDB4ZmZmZikgKiAweDViZDFlOTk1ICsgKChoID4+PiAxNikgKiAweGU5OTUgPDwgMTYpO1xuICByZXR1cm4gKChoIF4gaCA+Pj4gMTUpID4+PiAwKS50b1N0cmluZygzNik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG11cm11cjI7XG4iLCJmdW5jdGlvbiBtZW1vaXplKGZuKSB7XG4gIHZhciBjYWNoZSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIHJldHVybiBmdW5jdGlvbiAoYXJnKSB7XG4gICAgaWYgKGNhY2hlW2FyZ10gPT09IHVuZGVmaW5lZCkgY2FjaGVbYXJnXSA9IGZuKGFyZyk7XG4gICAgcmV0dXJuIGNhY2hlW2FyZ107XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1lbW9pemU7XG4iLCJpbXBvcnQgaGFzaFN0cmluZyBmcm9tICdAZW1vdGlvbi9oYXNoJztcbmltcG9ydCB1bml0bGVzcyBmcm9tICdAZW1vdGlvbi91bml0bGVzcyc7XG5pbXBvcnQgbWVtb2l6ZSBmcm9tICdAZW1vdGlvbi9tZW1vaXplJztcblxudmFyIElMTEVHQUxfRVNDQVBFX1NFUVVFTkNFX0VSUk9SID0gXCJZb3UgaGF2ZSBpbGxlZ2FsIGVzY2FwZSBzZXF1ZW5jZSBpbiB5b3VyIHRlbXBsYXRlIGxpdGVyYWwsIG1vc3QgbGlrZWx5IGluc2lkZSBjb250ZW50J3MgcHJvcGVydHkgdmFsdWUuXFxuQmVjYXVzZSB5b3Ugd3JpdGUgeW91ciBDU1MgaW5zaWRlIGEgSmF2YVNjcmlwdCBzdHJpbmcgeW91IGFjdHVhbGx5IGhhdmUgdG8gZG8gZG91YmxlIGVzY2FwaW5nLCBzbyBmb3IgZXhhbXBsZSBcXFwiY29udGVudDogJ1xcXFwwMGQ3JztcXFwiIHNob3VsZCBiZWNvbWUgXFxcImNvbnRlbnQ6ICdcXFxcXFxcXDAwZDcnO1xcXCIuXFxuWW91IGNhbiByZWFkIG1vcmUgYWJvdXQgdGhpcyBoZXJlOlxcbmh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL1RlbXBsYXRlX2xpdGVyYWxzI0VTMjAxOF9yZXZpc2lvbl9vZl9pbGxlZ2FsX2VzY2FwZV9zZXF1ZW5jZXNcIjtcbnZhciBVTkRFRklORURfQVNfT0JKRUNUX0tFWV9FUlJPUiA9IFwiWW91IGhhdmUgcGFzc2VkIGluIGZhbHN5IHZhbHVlIGFzIHN0eWxlIG9iamVjdCdzIGtleSAoY2FuIGhhcHBlbiB3aGVuIGluIGV4YW1wbGUgeW91IHBhc3MgdW5leHBvcnRlZCBjb21wb25lbnQgYXMgY29tcHV0ZWQga2V5KS5cIjtcbnZhciBoeXBoZW5hdGVSZWdleCA9IC9bQS1aXXxebXMvZztcbnZhciBhbmltYXRpb25SZWdleCA9IC9fRU1PXyhbXl9dKz8pXyhbXl0qPylfRU1PXy9nO1xuXG52YXIgaXNDdXN0b21Qcm9wZXJ0eSA9IGZ1bmN0aW9uIGlzQ3VzdG9tUHJvcGVydHkocHJvcGVydHkpIHtcbiAgcmV0dXJuIHByb3BlcnR5LmNoYXJDb2RlQXQoMSkgPT09IDQ1O1xufTtcblxudmFyIGlzUHJvY2Vzc2FibGVWYWx1ZSA9IGZ1bmN0aW9uIGlzUHJvY2Vzc2FibGVWYWx1ZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgIT09ICdib29sZWFuJztcbn07XG5cbnZhciBwcm9jZXNzU3R5bGVOYW1lID0gLyogI19fUFVSRV9fICovbWVtb2l6ZShmdW5jdGlvbiAoc3R5bGVOYW1lKSB7XG4gIHJldHVybiBpc0N1c3RvbVByb3BlcnR5KHN0eWxlTmFtZSkgPyBzdHlsZU5hbWUgOiBzdHlsZU5hbWUucmVwbGFjZShoeXBoZW5hdGVSZWdleCwgJy0kJicpLnRvTG93ZXJDYXNlKCk7XG59KTtcblxudmFyIHByb2Nlc3NTdHlsZVZhbHVlID0gZnVuY3Rpb24gcHJvY2Vzc1N0eWxlVmFsdWUoa2V5LCB2YWx1ZSkge1xuICBzd2l0Y2ggKGtleSkge1xuICAgIGNhc2UgJ2FuaW1hdGlvbic6XG4gICAgY2FzZSAnYW5pbWF0aW9uTmFtZSc6XG4gICAgICB7XG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgcmV0dXJuIHZhbHVlLnJlcGxhY2UoYW5pbWF0aW9uUmVnZXgsIGZ1bmN0aW9uIChtYXRjaCwgcDEsIHAyKSB7XG4gICAgICAgICAgICBjdXJzb3IgPSB7XG4gICAgICAgICAgICAgIG5hbWU6IHAxLFxuICAgICAgICAgICAgICBzdHlsZXM6IHAyLFxuICAgICAgICAgICAgICBuZXh0OiBjdXJzb3JcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXR1cm4gcDE7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgfVxuXG4gIGlmICh1bml0bGVzc1trZXldICE9PSAxICYmICFpc0N1c3RvbVByb3BlcnR5KGtleSkgJiYgdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyAmJiB2YWx1ZSAhPT0gMCkge1xuICAgIHJldHVybiB2YWx1ZSArICdweCc7XG4gIH1cblxuICByZXR1cm4gdmFsdWU7XG59O1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YXIgY29udGVudFZhbHVlUGF0dGVybiA9IC8oYXR0cnxjb3VudGVycz98dXJsfCgoKHJlcGVhdGluZy0pPyhsaW5lYXJ8cmFkaWFsKSl8Y29uaWMpLWdyYWRpZW50KVxcKHwobm8tKT8ob3BlbnxjbG9zZSktcXVvdGUvO1xuICB2YXIgY29udGVudFZhbHVlcyA9IFsnbm9ybWFsJywgJ25vbmUnLCAnaW5pdGlhbCcsICdpbmhlcml0JywgJ3Vuc2V0J107XG4gIHZhciBvbGRQcm9jZXNzU3R5bGVWYWx1ZSA9IHByb2Nlc3NTdHlsZVZhbHVlO1xuICB2YXIgbXNQYXR0ZXJuID0gL14tbXMtLztcbiAgdmFyIGh5cGhlblBhdHRlcm4gPSAvLSguKS9nO1xuICB2YXIgaHlwaGVuYXRlZENhY2hlID0ge307XG5cbiAgcHJvY2Vzc1N0eWxlVmFsdWUgPSBmdW5jdGlvbiBwcm9jZXNzU3R5bGVWYWx1ZShrZXksIHZhbHVlKSB7XG4gICAgaWYgKGtleSA9PT0gJ2NvbnRlbnQnKSB7XG4gICAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAnc3RyaW5nJyB8fCBjb250ZW50VmFsdWVzLmluZGV4T2YodmFsdWUpID09PSAtMSAmJiAhY29udGVudFZhbHVlUGF0dGVybi50ZXN0KHZhbHVlKSAmJiAodmFsdWUuY2hhckF0KDApICE9PSB2YWx1ZS5jaGFyQXQodmFsdWUubGVuZ3RoIC0gMSkgfHwgdmFsdWUuY2hhckF0KDApICE9PSAnXCInICYmIHZhbHVlLmNoYXJBdCgwKSAhPT0gXCInXCIpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIllvdSBzZWVtIHRvIGJlIHVzaW5nIGEgdmFsdWUgZm9yICdjb250ZW50JyB3aXRob3V0IHF1b3RlcywgdHJ5IHJlcGxhY2luZyBpdCB3aXRoIGBjb250ZW50OiAnXFxcIlwiICsgdmFsdWUgKyBcIlxcXCInYFwiKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcHJvY2Vzc2VkID0gb2xkUHJvY2Vzc1N0eWxlVmFsdWUoa2V5LCB2YWx1ZSk7XG5cbiAgICBpZiAocHJvY2Vzc2VkICE9PSAnJyAmJiAhaXNDdXN0b21Qcm9wZXJ0eShrZXkpICYmIGtleS5pbmRleE9mKCctJykgIT09IC0xICYmIGh5cGhlbmF0ZWRDYWNoZVtrZXldID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGh5cGhlbmF0ZWRDYWNoZVtrZXldID0gdHJ1ZTtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJVc2luZyBrZWJhYi1jYXNlIGZvciBjc3MgcHJvcGVydGllcyBpbiBvYmplY3RzIGlzIG5vdCBzdXBwb3J0ZWQuIERpZCB5b3UgbWVhbiBcIiArIGtleS5yZXBsYWNlKG1zUGF0dGVybiwgJ21zLScpLnJlcGxhY2UoaHlwaGVuUGF0dGVybiwgZnVuY3Rpb24gKHN0ciwgX2NoYXIpIHtcbiAgICAgICAgcmV0dXJuIF9jaGFyLnRvVXBwZXJDYXNlKCk7XG4gICAgICB9KSArIFwiP1wiKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvY2Vzc2VkO1xuICB9O1xufVxuXG5mdW5jdGlvbiBoYW5kbGVJbnRlcnBvbGF0aW9uKG1lcmdlZFByb3BzLCByZWdpc3RlcmVkLCBpbnRlcnBvbGF0aW9uKSB7XG4gIGlmIChpbnRlcnBvbGF0aW9uID09IG51bGwpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBpZiAoaW50ZXJwb2xhdGlvbi5fX2Vtb3Rpb25fc3R5bGVzICE9PSB1bmRlZmluZWQpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBpbnRlcnBvbGF0aW9uLnRvU3RyaW5nKCkgPT09ICdOT19DT01QT05FTlRfU0VMRUNUT1InKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvbXBvbmVudCBzZWxlY3RvcnMgY2FuIG9ubHkgYmUgdXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIEBlbW90aW9uL2JhYmVsLXBsdWdpbi4nKTtcbiAgICB9XG5cbiAgICByZXR1cm4gaW50ZXJwb2xhdGlvbjtcbiAgfVxuXG4gIHN3aXRjaCAodHlwZW9mIGludGVycG9sYXRpb24pIHtcbiAgICBjYXNlICdib29sZWFuJzpcbiAgICAgIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgICAgfVxuXG4gICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgIHtcbiAgICAgICAgaWYgKGludGVycG9sYXRpb24uYW5pbSA9PT0gMSkge1xuICAgICAgICAgIGN1cnNvciA9IHtcbiAgICAgICAgICAgIG5hbWU6IGludGVycG9sYXRpb24ubmFtZSxcbiAgICAgICAgICAgIHN0eWxlczogaW50ZXJwb2xhdGlvbi5zdHlsZXMsXG4gICAgICAgICAgICBuZXh0OiBjdXJzb3JcbiAgICAgICAgICB9O1xuICAgICAgICAgIHJldHVybiBpbnRlcnBvbGF0aW9uLm5hbWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaW50ZXJwb2xhdGlvbi5zdHlsZXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHZhciBuZXh0ID0gaW50ZXJwb2xhdGlvbi5uZXh0O1xuXG4gICAgICAgICAgaWYgKG5leHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgLy8gbm90IHRoZSBtb3N0IGVmZmljaWVudCB0aGluZyBldmVyIGJ1dCB0aGlzIGlzIGEgcHJldHR5IHJhcmUgY2FzZVxuICAgICAgICAgICAgLy8gYW5kIHRoZXJlIHdpbGwgYmUgdmVyeSBmZXcgaXRlcmF0aW9ucyBvZiB0aGlzIGdlbmVyYWxseVxuICAgICAgICAgICAgd2hpbGUgKG5leHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICBjdXJzb3IgPSB7XG4gICAgICAgICAgICAgICAgbmFtZTogbmV4dC5uYW1lLFxuICAgICAgICAgICAgICAgIHN0eWxlczogbmV4dC5zdHlsZXMsXG4gICAgICAgICAgICAgICAgbmV4dDogY3Vyc29yXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgIG5leHQgPSBuZXh0Lm5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFyIHN0eWxlcyA9IGludGVycG9sYXRpb24uc3R5bGVzICsgXCI7XCI7XG5cbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBpbnRlcnBvbGF0aW9uLm1hcCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBzdHlsZXMgKz0gaW50ZXJwb2xhdGlvbi5tYXA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHN0eWxlcztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjcmVhdGVTdHJpbmdGcm9tT2JqZWN0KG1lcmdlZFByb3BzLCByZWdpc3RlcmVkLCBpbnRlcnBvbGF0aW9uKTtcbiAgICAgIH1cblxuICAgIGNhc2UgJ2Z1bmN0aW9uJzpcbiAgICAgIHtcbiAgICAgICAgaWYgKG1lcmdlZFByb3BzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB2YXIgcHJldmlvdXNDdXJzb3IgPSBjdXJzb3I7XG4gICAgICAgICAgdmFyIHJlc3VsdCA9IGludGVycG9sYXRpb24obWVyZ2VkUHJvcHMpO1xuICAgICAgICAgIGN1cnNvciA9IHByZXZpb3VzQ3Vyc29yO1xuICAgICAgICAgIHJldHVybiBoYW5kbGVJbnRlcnBvbGF0aW9uKG1lcmdlZFByb3BzLCByZWdpc3RlcmVkLCByZXN1bHQpO1xuICAgICAgICB9IGVsc2UgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdGdW5jdGlvbnMgdGhhdCBhcmUgaW50ZXJwb2xhdGVkIGluIGNzcyBjYWxscyB3aWxsIGJlIHN0cmluZ2lmaWVkLlxcbicgKyAnSWYgeW91IHdhbnQgdG8gaGF2ZSBhIGNzcyBjYWxsIGJhc2VkIG9uIHByb3BzLCBjcmVhdGUgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgYSBjc3MgY2FsbCBsaWtlIHRoaXNcXG4nICsgJ2xldCBkeW5hbWljU3R5bGUgPSAocHJvcHMpID0+IGNzc2Bjb2xvcjogJHtwcm9wcy5jb2xvcn1gXFxuJyArICdJdCBjYW4gYmUgY2FsbGVkIGRpcmVjdGx5IHdpdGggcHJvcHMgb3IgaW50ZXJwb2xhdGVkIGluIGEgc3R5bGVkIGNhbGwgbGlrZSB0aGlzXFxuJyArIFwibGV0IFNvbWVDb21wb25lbnQgPSBzdHlsZWQoJ2RpdicpYCR7ZHluYW1pY1N0eWxlfWBcIik7XG4gICAgICAgIH1cblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICB2YXIgbWF0Y2hlZCA9IFtdO1xuICAgICAgICB2YXIgcmVwbGFjZWQgPSBpbnRlcnBvbGF0aW9uLnJlcGxhY2UoYW5pbWF0aW9uUmVnZXgsIGZ1bmN0aW9uIChtYXRjaCwgcDEsIHAyKSB7XG4gICAgICAgICAgdmFyIGZha2VWYXJOYW1lID0gXCJhbmltYXRpb25cIiArIG1hdGNoZWQubGVuZ3RoO1xuICAgICAgICAgIG1hdGNoZWQucHVzaChcImNvbnN0IFwiICsgZmFrZVZhck5hbWUgKyBcIiA9IGtleWZyYW1lc2BcIiArIHAyLnJlcGxhY2UoL15Aa2V5ZnJhbWVzIGFuaW1hdGlvbi1cXHcrLywgJycpICsgXCJgXCIpO1xuICAgICAgICAgIHJldHVybiBcIiR7XCIgKyBmYWtlVmFyTmFtZSArIFwifVwiO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAobWF0Y2hlZC5sZW5ndGgpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdga2V5ZnJhbWVzYCBvdXRwdXQgZ290IGludGVycG9sYXRlZCBpbnRvIHBsYWluIHN0cmluZywgcGxlYXNlIHdyYXAgaXQgd2l0aCBgY3NzYC5cXG5cXG4nICsgJ0luc3RlYWQgb2YgZG9pbmcgdGhpczpcXG5cXG4nICsgW10uY29uY2F0KG1hdGNoZWQsIFtcImBcIiArIHJlcGxhY2VkICsgXCJgXCJdKS5qb2luKCdcXG4nKSArICdcXG5cXG5Zb3Ugc2hvdWxkIHdyYXAgaXQgd2l0aCBgY3NzYCBsaWtlIHRoaXM6XFxuXFxuJyArIChcImNzc2BcIiArIHJlcGxhY2VkICsgXCJgXCIpKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBicmVhaztcbiAgfSAvLyBmaW5hbGl6ZSBzdHJpbmcgdmFsdWVzIChyZWd1bGFyIHN0cmluZ3MgYW5kIGZ1bmN0aW9ucyBpbnRlcnBvbGF0ZWQgaW50byBjc3MgY2FsbHMpXG5cblxuICBpZiAocmVnaXN0ZXJlZCA9PSBudWxsKSB7XG4gICAgcmV0dXJuIGludGVycG9sYXRpb247XG4gIH1cblxuICB2YXIgY2FjaGVkID0gcmVnaXN0ZXJlZFtpbnRlcnBvbGF0aW9uXTtcbiAgcmV0dXJuIGNhY2hlZCAhPT0gdW5kZWZpbmVkID8gY2FjaGVkIDogaW50ZXJwb2xhdGlvbjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlU3RyaW5nRnJvbU9iamVjdChtZXJnZWRQcm9wcywgcmVnaXN0ZXJlZCwgb2JqKSB7XG4gIHZhciBzdHJpbmcgPSAnJztcblxuICBpZiAoQXJyYXkuaXNBcnJheShvYmopKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBvYmoubGVuZ3RoOyBpKyspIHtcbiAgICAgIHN0cmluZyArPSBoYW5kbGVJbnRlcnBvbGF0aW9uKG1lcmdlZFByb3BzLCByZWdpc3RlcmVkLCBvYmpbaV0pICsgXCI7XCI7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGZvciAodmFyIF9rZXkgaW4gb2JqKSB7XG4gICAgICB2YXIgdmFsdWUgPSBvYmpbX2tleV07XG5cbiAgICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGlmIChyZWdpc3RlcmVkICE9IG51bGwgJiYgcmVnaXN0ZXJlZFt2YWx1ZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHN0cmluZyArPSBfa2V5ICsgXCJ7XCIgKyByZWdpc3RlcmVkW3ZhbHVlXSArIFwifVwiO1xuICAgICAgICB9IGVsc2UgaWYgKGlzUHJvY2Vzc2FibGVWYWx1ZSh2YWx1ZSkpIHtcbiAgICAgICAgICBzdHJpbmcgKz0gcHJvY2Vzc1N0eWxlTmFtZShfa2V5KSArIFwiOlwiICsgcHJvY2Vzc1N0eWxlVmFsdWUoX2tleSwgdmFsdWUpICsgXCI7XCI7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChfa2V5ID09PSAnTk9fQ09NUE9ORU5UX1NFTEVDVE9SJyAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb21wb25lbnQgc2VsZWN0b3JzIGNhbiBvbmx5IGJlIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCBAZW1vdGlvbi9iYWJlbC1wbHVnaW4uJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkgJiYgdHlwZW9mIHZhbHVlWzBdID09PSAnc3RyaW5nJyAmJiAocmVnaXN0ZXJlZCA9PSBudWxsIHx8IHJlZ2lzdGVyZWRbdmFsdWVbMF1dID09PSB1bmRlZmluZWQpKSB7XG4gICAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IHZhbHVlLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgaWYgKGlzUHJvY2Vzc2FibGVWYWx1ZSh2YWx1ZVtfaV0pKSB7XG4gICAgICAgICAgICAgIHN0cmluZyArPSBwcm9jZXNzU3R5bGVOYW1lKF9rZXkpICsgXCI6XCIgKyBwcm9jZXNzU3R5bGVWYWx1ZShfa2V5LCB2YWx1ZVtfaV0pICsgXCI7XCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBpbnRlcnBvbGF0ZWQgPSBoYW5kbGVJbnRlcnBvbGF0aW9uKG1lcmdlZFByb3BzLCByZWdpc3RlcmVkLCB2YWx1ZSk7XG5cbiAgICAgICAgICBzd2l0Y2ggKF9rZXkpIHtcbiAgICAgICAgICAgIGNhc2UgJ2FuaW1hdGlvbic6XG4gICAgICAgICAgICBjYXNlICdhbmltYXRpb25OYW1lJzpcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0cmluZyArPSBwcm9jZXNzU3R5bGVOYW1lKF9rZXkpICsgXCI6XCIgKyBpbnRlcnBvbGF0ZWQgKyBcIjtcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgX2tleSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoVU5ERUZJTkVEX0FTX09CSkVDVF9LRVlfRVJST1IpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHN0cmluZyArPSBfa2V5ICsgXCJ7XCIgKyBpbnRlcnBvbGF0ZWQgKyBcIn1cIjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdHJpbmc7XG59XG5cbnZhciBsYWJlbFBhdHRlcm4gPSAvbGFiZWw6XFxzKihbXlxccztcXG57XSspXFxzKig7fCQpL2c7XG52YXIgc291cmNlTWFwUGF0dGVybjtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgc291cmNlTWFwUGF0dGVybiA9IC9cXC9cXCojXFxzc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uXFwvanNvbjtcXFMrXFxzK1xcKlxcLy9nO1xufSAvLyB0aGlzIGlzIHRoZSBjdXJzb3IgZm9yIGtleWZyYW1lc1xuLy8ga2V5ZnJhbWVzIGFyZSBzdG9yZWQgb24gdGhlIFNlcmlhbGl6ZWRTdHlsZXMgb2JqZWN0IGFzIGEgbGlua2VkIGxpc3RcblxuXG52YXIgY3Vyc29yO1xudmFyIHNlcmlhbGl6ZVN0eWxlcyA9IGZ1bmN0aW9uIHNlcmlhbGl6ZVN0eWxlcyhhcmdzLCByZWdpc3RlcmVkLCBtZXJnZWRQcm9wcykge1xuICBpZiAoYXJncy5sZW5ndGggPT09IDEgJiYgdHlwZW9mIGFyZ3NbMF0gPT09ICdvYmplY3QnICYmIGFyZ3NbMF0gIT09IG51bGwgJiYgYXJnc1swXS5zdHlsZXMgIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBhcmdzWzBdO1xuICB9XG5cbiAgdmFyIHN0cmluZ01vZGUgPSB0cnVlO1xuICB2YXIgc3R5bGVzID0gJyc7XG4gIGN1cnNvciA9IHVuZGVmaW5lZDtcbiAgdmFyIHN0cmluZ3MgPSBhcmdzWzBdO1xuXG4gIGlmIChzdHJpbmdzID09IG51bGwgfHwgc3RyaW5ncy5yYXcgPT09IHVuZGVmaW5lZCkge1xuICAgIHN0cmluZ01vZGUgPSBmYWxzZTtcbiAgICBzdHlsZXMgKz0gaGFuZGxlSW50ZXJwb2xhdGlvbihtZXJnZWRQcm9wcywgcmVnaXN0ZXJlZCwgc3RyaW5ncyk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgc3RyaW5nc1swXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25zb2xlLmVycm9yKElMTEVHQUxfRVNDQVBFX1NFUVVFTkNFX0VSUk9SKTtcbiAgICB9XG5cbiAgICBzdHlsZXMgKz0gc3RyaW5nc1swXTtcbiAgfSAvLyB3ZSBzdGFydCBhdCAxIHNpbmNlIHdlJ3ZlIGFscmVhZHkgaGFuZGxlZCB0aGUgZmlyc3QgYXJnXG5cblxuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICBzdHlsZXMgKz0gaGFuZGxlSW50ZXJwb2xhdGlvbihtZXJnZWRQcm9wcywgcmVnaXN0ZXJlZCwgYXJnc1tpXSk7XG5cbiAgICBpZiAoc3RyaW5nTW9kZSkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgc3RyaW5nc1tpXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoSUxMRUdBTF9FU0NBUEVfU0VRVUVOQ0VfRVJST1IpO1xuICAgICAgfVxuXG4gICAgICBzdHlsZXMgKz0gc3RyaW5nc1tpXTtcbiAgICB9XG4gIH1cblxuICB2YXIgc291cmNlTWFwO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgc3R5bGVzID0gc3R5bGVzLnJlcGxhY2Uoc291cmNlTWFwUGF0dGVybiwgZnVuY3Rpb24gKG1hdGNoKSB7XG4gICAgICBzb3VyY2VNYXAgPSBtYXRjaDtcbiAgICAgIHJldHVybiAnJztcbiAgICB9KTtcbiAgfSAvLyB1c2luZyBhIGdsb2JhbCByZWdleCB3aXRoIC5leGVjIGlzIHN0YXRlZnVsIHNvIGxhc3RJbmRleCBoYXMgdG8gYmUgcmVzZXQgZWFjaCB0aW1lXG5cblxuICBsYWJlbFBhdHRlcm4ubGFzdEluZGV4ID0gMDtcbiAgdmFyIGlkZW50aWZpZXJOYW1lID0gJyc7XG4gIHZhciBtYXRjaDsgLy8gaHR0cHM6Ly9lc2JlbmNoLmNvbS9iZW5jaC81YjgwOWMyY2YyOTQ5ODAwYTBmNjFmYjVcblxuICB3aGlsZSAoKG1hdGNoID0gbGFiZWxQYXR0ZXJuLmV4ZWMoc3R5bGVzKSkgIT09IG51bGwpIHtcbiAgICBpZGVudGlmaWVyTmFtZSArPSAnLScgKyAvLyAkRmxvd0ZpeE1lIHdlIGtub3cgaXQncyBub3QgbnVsbFxuICAgIG1hdGNoWzFdO1xuICB9XG5cbiAgdmFyIG5hbWUgPSBoYXNoU3RyaW5nKHN0eWxlcykgKyBpZGVudGlmaWVyTmFtZTtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIC8vICRGbG93Rml4TWUgU2VyaWFsaXplZFN0eWxlcyB0eXBlIGRvZXNuJ3QgaGF2ZSB0b1N0cmluZyBwcm9wZXJ0eSAoYW5kIHdlIGRvbid0IHdhbnQgdG8gYWRkIGl0KVxuICAgIHJldHVybiB7XG4gICAgICBuYW1lOiBuYW1lLFxuICAgICAgc3R5bGVzOiBzdHlsZXMsXG4gICAgICBtYXA6IHNvdXJjZU1hcCxcbiAgICAgIG5leHQ6IGN1cnNvcixcbiAgICAgIHRvU3RyaW5nOiBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICAgICAgcmV0dXJuIFwiWW91IGhhdmUgdHJpZWQgdG8gc3RyaW5naWZ5IG9iamVjdCByZXR1cm5lZCBmcm9tIGBjc3NgIGZ1bmN0aW9uLiBJdCBpc24ndCBzdXBwb3NlZCB0byBiZSB1c2VkIGRpcmVjdGx5IChlLmcuIGFzIHZhbHVlIG9mIHRoZSBgY2xhc3NOYW1lYCBwcm9wKSwgYnV0IHJhdGhlciBoYW5kZWQgdG8gZW1vdGlvbiBzbyBpdCBjYW4gaGFuZGxlIGl0IChlLmcuIGFzIHZhbHVlIG9mIGBjc3NgIHByb3ApLlwiO1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICByZXR1cm4ge1xuICAgIG5hbWU6IG5hbWUsXG4gICAgc3R5bGVzOiBzdHlsZXMsXG4gICAgbmV4dDogY3Vyc29yXG4gIH07XG59O1xuXG5leHBvcnQgeyBzZXJpYWxpemVTdHlsZXMgfTtcbiIsIi8qXG5cbkJhc2VkIG9mZiBnbGFtb3IncyBTdHlsZVNoZWV0LCB0aGFua3MgU3VuaWwg4p2k77iPXG5cbmhpZ2ggcGVyZm9ybWFuY2UgU3R5bGVTaGVldCBmb3IgY3NzLWluLWpzIHN5c3RlbXNcblxuLSB1c2VzIG11bHRpcGxlIHN0eWxlIHRhZ3MgYmVoaW5kIHRoZSBzY2VuZXMgZm9yIG1pbGxpb25zIG9mIHJ1bGVzXG4tIHVzZXMgYGluc2VydFJ1bGVgIGZvciBhcHBlbmRpbmcgaW4gcHJvZHVjdGlvbiBmb3IgKm11Y2gqIGZhc3RlciBwZXJmb3JtYW5jZVxuXG4vLyB1c2FnZVxuXG5pbXBvcnQgeyBTdHlsZVNoZWV0IH0gZnJvbSAnQGVtb3Rpb24vc2hlZXQnXG5cbmxldCBzdHlsZVNoZWV0ID0gbmV3IFN0eWxlU2hlZXQoeyBrZXk6ICcnLCBjb250YWluZXI6IGRvY3VtZW50LmhlYWQgfSlcblxuc3R5bGVTaGVldC5pbnNlcnQoJyNib3ggeyBib3JkZXI6IDFweCBzb2xpZCByZWQ7IH0nKVxuLSBhcHBlbmRzIGEgY3NzIHJ1bGUgaW50byB0aGUgc3R5bGVzaGVldFxuXG5zdHlsZVNoZWV0LmZsdXNoKClcbi0gZW1wdGllcyB0aGUgc3R5bGVzaGVldCBvZiBhbGwgaXRzIGNvbnRlbnRzXG5cbiovXG4vLyAkRmxvd0ZpeE1lXG5mdW5jdGlvbiBzaGVldEZvclRhZyh0YWcpIHtcbiAgaWYgKHRhZy5zaGVldCkge1xuICAgIC8vICRGbG93Rml4TWVcbiAgICByZXR1cm4gdGFnLnNoZWV0O1xuICB9IC8vIHRoaXMgd2VpcmRuZXNzIGJyb3VnaHQgdG8geW91IGJ5IGZpcmVmb3hcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBkb2N1bWVudC5zdHlsZVNoZWV0cy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChkb2N1bWVudC5zdHlsZVNoZWV0c1tpXS5vd25lck5vZGUgPT09IHRhZykge1xuICAgICAgLy8gJEZsb3dGaXhNZVxuICAgICAgcmV0dXJuIGRvY3VtZW50LnN0eWxlU2hlZXRzW2ldO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgdGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdGFnLnNldEF0dHJpYnV0ZSgnZGF0YS1lbW90aW9uJywgb3B0aW9ucy5rZXkpO1xuXG4gIGlmIChvcHRpb25zLm5vbmNlICE9PSB1bmRlZmluZWQpIHtcbiAgICB0YWcuc2V0QXR0cmlidXRlKCdub25jZScsIG9wdGlvbnMubm9uY2UpO1xuICB9XG5cbiAgdGFnLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKSk7XG4gIHRhZy5zZXRBdHRyaWJ1dGUoJ2RhdGEtcycsICcnKTtcbiAgcmV0dXJuIHRhZztcbn1cblxudmFyIFN0eWxlU2hlZXQgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBTdHlsZVNoZWV0KG9wdGlvbnMpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgdGhpcy5faW5zZXJ0VGFnID0gZnVuY3Rpb24gKHRhZykge1xuICAgICAgdmFyIGJlZm9yZTtcblxuICAgICAgaWYgKF90aGlzLnRhZ3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGJlZm9yZSA9IF90aGlzLnByZXBlbmQgPyBfdGhpcy5jb250YWluZXIuZmlyc3RDaGlsZCA6IF90aGlzLmJlZm9yZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJlZm9yZSA9IF90aGlzLnRhZ3NbX3RoaXMudGFncy5sZW5ndGggLSAxXS5uZXh0U2libGluZztcbiAgICAgIH1cblxuICAgICAgX3RoaXMuY29udGFpbmVyLmluc2VydEJlZm9yZSh0YWcsIGJlZm9yZSk7XG5cbiAgICAgIF90aGlzLnRhZ3MucHVzaCh0YWcpO1xuICAgIH07XG5cbiAgICB0aGlzLmlzU3BlZWR5ID0gb3B0aW9ucy5zcGVlZHkgPT09IHVuZGVmaW5lZCA/IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgOiBvcHRpb25zLnNwZWVkeTtcbiAgICB0aGlzLnRhZ3MgPSBbXTtcbiAgICB0aGlzLmN0ciA9IDA7XG4gICAgdGhpcy5ub25jZSA9IG9wdGlvbnMubm9uY2U7IC8vIGtleSBpcyB0aGUgdmFsdWUgb2YgdGhlIGRhdGEtZW1vdGlvbiBhdHRyaWJ1dGUsIGl0J3MgdXNlZCB0byBpZGVudGlmeSBkaWZmZXJlbnQgc2hlZXRzXG5cbiAgICB0aGlzLmtleSA9IG9wdGlvbnMua2V5O1xuICAgIHRoaXMuY29udGFpbmVyID0gb3B0aW9ucy5jb250YWluZXI7XG4gICAgdGhpcy5wcmVwZW5kID0gb3B0aW9ucy5wcmVwZW5kO1xuICAgIHRoaXMuYmVmb3JlID0gbnVsbDtcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBTdHlsZVNoZWV0LnByb3RvdHlwZTtcblxuICBfcHJvdG8uaHlkcmF0ZSA9IGZ1bmN0aW9uIGh5ZHJhdGUobm9kZXMpIHtcbiAgICBub2Rlcy5mb3JFYWNoKHRoaXMuX2luc2VydFRhZyk7XG4gIH07XG5cbiAgX3Byb3RvLmluc2VydCA9IGZ1bmN0aW9uIGluc2VydChydWxlKSB7XG4gICAgLy8gdGhlIG1heCBsZW5ndGggaXMgaG93IG1hbnkgcnVsZXMgd2UgaGF2ZSBwZXIgc3R5bGUgdGFnLCBpdCdzIDY1MDAwIGluIHNwZWVkeSBtb2RlXG4gICAgLy8gaXQncyAxIGluIGRldiBiZWNhdXNlIHdlIGluc2VydCBzb3VyY2UgbWFwcyB0aGF0IG1hcCBhIHNpbmdsZSBydWxlIHRvIGEgbG9jYXRpb25cbiAgICAvLyBhbmQgeW91IGNhbiBvbmx5IGhhdmUgb25lIHNvdXJjZSBtYXAgcGVyIHN0eWxlIHRhZ1xuICAgIGlmICh0aGlzLmN0ciAlICh0aGlzLmlzU3BlZWR5ID8gNjUwMDAgOiAxKSA9PT0gMCkge1xuICAgICAgdGhpcy5faW5zZXJ0VGFnKGNyZWF0ZVN0eWxlRWxlbWVudCh0aGlzKSk7XG4gICAgfVxuXG4gICAgdmFyIHRhZyA9IHRoaXMudGFnc1t0aGlzLnRhZ3MubGVuZ3RoIC0gMV07XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgdmFyIGlzSW1wb3J0UnVsZSA9IHJ1bGUuY2hhckNvZGVBdCgwKSA9PT0gNjQgJiYgcnVsZS5jaGFyQ29kZUF0KDEpID09PSAxMDU7XG5cbiAgICAgIGlmIChpc0ltcG9ydFJ1bGUgJiYgdGhpcy5fYWxyZWFkeUluc2VydGVkT3JkZXJJbnNlbnNpdGl2ZVJ1bGUpIHtcbiAgICAgICAgLy8gdGhpcyB3b3VsZCBvbmx5IGNhdXNlIHByb2JsZW0gaW4gc3BlZWR5IG1vZGVcbiAgICAgICAgLy8gYnV0IHdlIGRvbid0IHdhbnQgZW5hYmxpbmcgc3BlZWR5IHRvIGFmZmVjdCB0aGUgb2JzZXJ2YWJsZSBiZWhhdmlvclxuICAgICAgICAvLyBzbyB3ZSByZXBvcnQgdGhpcyBlcnJvciBhdCBhbGwgdGltZXNcbiAgICAgICAgY29uc29sZS5lcnJvcihcIllvdSdyZSBhdHRlbXB0aW5nIHRvIGluc2VydCB0aGUgZm9sbG93aW5nIHJ1bGU6XFxuXCIgKyBydWxlICsgJ1xcblxcbmBAaW1wb3J0YCBydWxlcyBtdXN0IGJlIGJlZm9yZSBhbGwgb3RoZXIgdHlwZXMgb2YgcnVsZXMgaW4gYSBzdHlsZXNoZWV0IGJ1dCBvdGhlciBydWxlcyBoYXZlIGFscmVhZHkgYmVlbiBpbnNlcnRlZC4gUGxlYXNlIGVuc3VyZSB0aGF0IGBAaW1wb3J0YCBydWxlcyBhcmUgYmVmb3JlIGFsbCBvdGhlciBydWxlcy4nKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2FscmVhZHlJbnNlcnRlZE9yZGVySW5zZW5zaXRpdmVSdWxlID0gdGhpcy5fYWxyZWFkeUluc2VydGVkT3JkZXJJbnNlbnNpdGl2ZVJ1bGUgfHwgIWlzSW1wb3J0UnVsZTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5pc1NwZWVkeSkge1xuICAgICAgdmFyIHNoZWV0ID0gc2hlZXRGb3JUYWcodGFnKTtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gdGhpcyBpcyB0aGUgdWx0cmFmYXN0IHZlcnNpb24sIHdvcmtzIGFjcm9zcyBicm93c2Vyc1xuICAgICAgICAvLyB0aGUgYmlnIGRyYXdiYWNrIGlzIHRoYXQgdGhlIGNzcyB3b24ndCBiZSBlZGl0YWJsZSBpbiBkZXZ0b29sc1xuICAgICAgICBzaGVldC5pbnNlcnRSdWxlKHJ1bGUsIHNoZWV0LmNzc1J1bGVzLmxlbmd0aCk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmICEvOigtbW96LXBsYWNlaG9sZGVyfC1tcy1pbnB1dC1wbGFjZWhvbGRlcnwtbW96LXJlYWQtd3JpdGV8LW1vei1yZWFkLW9ubHkpey8udGVzdChydWxlKSkge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJUaGVyZSB3YXMgYSBwcm9ibGVtIGluc2VydGluZyB0aGUgZm9sbG93aW5nIHJ1bGU6IFxcXCJcIiArIHJ1bGUgKyBcIlxcXCJcIiwgZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGFnLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHJ1bGUpKTtcbiAgICB9XG5cbiAgICB0aGlzLmN0cisrO1xuICB9O1xuXG4gIF9wcm90by5mbHVzaCA9IGZ1bmN0aW9uIGZsdXNoKCkge1xuICAgIC8vICRGbG93Rml4TWVcbiAgICB0aGlzLnRhZ3MuZm9yRWFjaChmdW5jdGlvbiAodGFnKSB7XG4gICAgICByZXR1cm4gdGFnLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGFnKTtcbiAgICB9KTtcbiAgICB0aGlzLnRhZ3MgPSBbXTtcbiAgICB0aGlzLmN0ciA9IDA7XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgdGhpcy5fYWxyZWFkeUluc2VydGVkT3JkZXJJbnNlbnNpdGl2ZVJ1bGUgPSBmYWxzZTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIFN0eWxlU2hlZXQ7XG59KCk7XG5cbmV4cG9ydCB7IFN0eWxlU2hlZXQgfTtcbiIsInZhciB1bml0bGVzc0tleXMgPSB7XG4gIGFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50OiAxLFxuICBib3JkZXJJbWFnZU91dHNldDogMSxcbiAgYm9yZGVySW1hZ2VTbGljZTogMSxcbiAgYm9yZGVySW1hZ2VXaWR0aDogMSxcbiAgYm94RmxleDogMSxcbiAgYm94RmxleEdyb3VwOiAxLFxuICBib3hPcmRpbmFsR3JvdXA6IDEsXG4gIGNvbHVtbkNvdW50OiAxLFxuICBjb2x1bW5zOiAxLFxuICBmbGV4OiAxLFxuICBmbGV4R3JvdzogMSxcbiAgZmxleFBvc2l0aXZlOiAxLFxuICBmbGV4U2hyaW5rOiAxLFxuICBmbGV4TmVnYXRpdmU6IDEsXG4gIGZsZXhPcmRlcjogMSxcbiAgZ3JpZFJvdzogMSxcbiAgZ3JpZFJvd0VuZDogMSxcbiAgZ3JpZFJvd1NwYW46IDEsXG4gIGdyaWRSb3dTdGFydDogMSxcbiAgZ3JpZENvbHVtbjogMSxcbiAgZ3JpZENvbHVtbkVuZDogMSxcbiAgZ3JpZENvbHVtblNwYW46IDEsXG4gIGdyaWRDb2x1bW5TdGFydDogMSxcbiAgbXNHcmlkUm93OiAxLFxuICBtc0dyaWRSb3dTcGFuOiAxLFxuICBtc0dyaWRDb2x1bW46IDEsXG4gIG1zR3JpZENvbHVtblNwYW46IDEsXG4gIGZvbnRXZWlnaHQ6IDEsXG4gIGxpbmVIZWlnaHQ6IDEsXG4gIG9wYWNpdHk6IDEsXG4gIG9yZGVyOiAxLFxuICBvcnBoYW5zOiAxLFxuICB0YWJTaXplOiAxLFxuICB3aWRvd3M6IDEsXG4gIHpJbmRleDogMSxcbiAgem9vbTogMSxcbiAgV2Via2l0TGluZUNsYW1wOiAxLFxuICAvLyBTVkctcmVsYXRlZCBwcm9wZXJ0aWVzXG4gIGZpbGxPcGFjaXR5OiAxLFxuICBmbG9vZE9wYWNpdHk6IDEsXG4gIHN0b3BPcGFjaXR5OiAxLFxuICBzdHJva2VEYXNoYXJyYXk6IDEsXG4gIHN0cm9rZURhc2hvZmZzZXQ6IDEsXG4gIHN0cm9rZU1pdGVybGltaXQ6IDEsXG4gIHN0cm9rZU9wYWNpdHk6IDEsXG4gIHN0cm9rZVdpZHRoOiAxXG59O1xuXG5leHBvcnQgZGVmYXVsdCB1bml0bGVzc0tleXM7XG4iLCJ2YXIgaXNCcm93c2VyID0gXCJvYmplY3RcIiAhPT0gJ3VuZGVmaW5lZCc7XG5mdW5jdGlvbiBnZXRSZWdpc3RlcmVkU3R5bGVzKHJlZ2lzdGVyZWQsIHJlZ2lzdGVyZWRTdHlsZXMsIGNsYXNzTmFtZXMpIHtcbiAgdmFyIHJhd0NsYXNzTmFtZSA9ICcnO1xuICBjbGFzc05hbWVzLnNwbGl0KCcgJykuZm9yRWFjaChmdW5jdGlvbiAoY2xhc3NOYW1lKSB7XG4gICAgaWYgKHJlZ2lzdGVyZWRbY2xhc3NOYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZWdpc3RlcmVkU3R5bGVzLnB1c2gocmVnaXN0ZXJlZFtjbGFzc05hbWVdICsgXCI7XCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICByYXdDbGFzc05hbWUgKz0gY2xhc3NOYW1lICsgXCIgXCI7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHJhd0NsYXNzTmFtZTtcbn1cbnZhciBpbnNlcnRTdHlsZXMgPSBmdW5jdGlvbiBpbnNlcnRTdHlsZXMoY2FjaGUsIHNlcmlhbGl6ZWQsIGlzU3RyaW5nVGFnKSB7XG4gIHZhciBjbGFzc05hbWUgPSBjYWNoZS5rZXkgKyBcIi1cIiArIHNlcmlhbGl6ZWQubmFtZTtcblxuICBpZiAoIC8vIHdlIG9ubHkgbmVlZCB0byBhZGQgdGhlIHN0eWxlcyB0byB0aGUgcmVnaXN0ZXJlZCBjYWNoZSBpZiB0aGVcbiAgLy8gY2xhc3MgbmFtZSBjb3VsZCBiZSB1c2VkIGZ1cnRoZXIgZG93blxuICAvLyB0aGUgdHJlZSBidXQgaWYgaXQncyBhIHN0cmluZyB0YWcsIHdlIGtub3cgaXQgd29uJ3RcbiAgLy8gc28gd2UgZG9uJ3QgaGF2ZSB0byBhZGQgaXQgdG8gcmVnaXN0ZXJlZCBjYWNoZS5cbiAgLy8gdGhpcyBpbXByb3ZlcyBtZW1vcnkgdXNhZ2Ugc2luY2Ugd2UgY2FuIGF2b2lkIHN0b3JpbmcgdGhlIHdob2xlIHN0eWxlIHN0cmluZ1xuICAoaXNTdHJpbmdUYWcgPT09IGZhbHNlIHx8IC8vIHdlIG5lZWQgdG8gYWx3YXlzIHN0b3JlIGl0IGlmIHdlJ3JlIGluIGNvbXBhdCBtb2RlIGFuZFxuICAvLyBpbiBub2RlIHNpbmNlIGVtb3Rpb24tc2VydmVyIHJlbGllcyBvbiB3aGV0aGVyIGEgc3R5bGUgaXMgaW5cbiAgLy8gdGhlIHJlZ2lzdGVyZWQgY2FjaGUgdG8ga25vdyB3aGV0aGVyIGEgc3R5bGUgaXMgZ2xvYmFsIG9yIG5vdFxuICAvLyBhbHNvLCBub3RlIHRoYXQgdGhpcyBjaGVjayB3aWxsIGJlIGRlYWQgY29kZSBlbGltaW5hdGVkIGluIHRoZSBicm93c2VyXG4gIGlzQnJvd3NlciA9PT0gZmFsc2UgKSAmJiBjYWNoZS5yZWdpc3RlcmVkW2NsYXNzTmFtZV0gPT09IHVuZGVmaW5lZCkge1xuICAgIGNhY2hlLnJlZ2lzdGVyZWRbY2xhc3NOYW1lXSA9IHNlcmlhbGl6ZWQuc3R5bGVzO1xuICB9XG5cbiAgaWYgKGNhY2hlLmluc2VydGVkW3NlcmlhbGl6ZWQubmFtZV0gPT09IHVuZGVmaW5lZCkge1xuICAgIHZhciBjdXJyZW50ID0gc2VyaWFsaXplZDtcblxuICAgIGRvIHtcbiAgICAgIHZhciBtYXliZVN0eWxlcyA9IGNhY2hlLmluc2VydChzZXJpYWxpemVkID09PSBjdXJyZW50ID8gXCIuXCIgKyBjbGFzc05hbWUgOiAnJywgY3VycmVudCwgY2FjaGUuc2hlZXQsIHRydWUpO1xuXG4gICAgICBjdXJyZW50ID0gY3VycmVudC5uZXh0O1xuICAgIH0gd2hpbGUgKGN1cnJlbnQgIT09IHVuZGVmaW5lZCk7XG4gIH1cbn07XG5cbmV4cG9ydCB7IGdldFJlZ2lzdGVyZWRTdHlsZXMsIGluc2VydFN0eWxlcyB9O1xuIiwidmFyIHdlYWtNZW1vaXplID0gZnVuY3Rpb24gd2Vha01lbW9pemUoZnVuYykge1xuICAvLyAkRmxvd0ZpeE1lIGZsb3cgZG9lc24ndCBpbmNsdWRlIGFsbCBub24tcHJpbWl0aXZlIHR5cGVzIGFzIGFsbG93ZWQgZm9yIHdlYWttYXBzXG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG4gIHJldHVybiBmdW5jdGlvbiAoYXJnKSB7XG4gICAgaWYgKGNhY2hlLmhhcyhhcmcpKSB7XG4gICAgICAvLyAkRmxvd0ZpeE1lXG4gICAgICByZXR1cm4gY2FjaGUuZ2V0KGFyZyk7XG4gICAgfVxuXG4gICAgdmFyIHJldCA9IGZ1bmMoYXJnKTtcbiAgICBjYWNoZS5zZXQoYXJnLCByZXQpO1xuICAgIHJldHVybiByZXQ7XG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3ZWFrTWVtb2l6ZTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHJlYWN0SXMgPSByZXF1aXJlKCdyZWFjdC1pcycpO1xuXG4vKipcbiAqIENvcHlyaWdodCAyMDE1LCBZYWhvbyEgSW5jLlxuICogQ29weXJpZ2h0cyBsaWNlbnNlZCB1bmRlciB0aGUgTmV3IEJTRCBMaWNlbnNlLiBTZWUgdGhlIGFjY29tcGFueWluZyBMSUNFTlNFIGZpbGUgZm9yIHRlcm1zLlxuICovXG52YXIgUkVBQ1RfU1RBVElDUyA9IHtcbiAgY2hpbGRDb250ZXh0VHlwZXM6IHRydWUsXG4gIGNvbnRleHRUeXBlOiB0cnVlLFxuICBjb250ZXh0VHlwZXM6IHRydWUsXG4gIGRlZmF1bHRQcm9wczogdHJ1ZSxcbiAgZGlzcGxheU5hbWU6IHRydWUsXG4gIGdldERlZmF1bHRQcm9wczogdHJ1ZSxcbiAgZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yOiB0cnVlLFxuICBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHM6IHRydWUsXG4gIG1peGluczogdHJ1ZSxcbiAgcHJvcFR5cGVzOiB0cnVlLFxuICB0eXBlOiB0cnVlXG59O1xudmFyIEtOT1dOX1NUQVRJQ1MgPSB7XG4gIG5hbWU6IHRydWUsXG4gIGxlbmd0aDogdHJ1ZSxcbiAgcHJvdG90eXBlOiB0cnVlLFxuICBjYWxsZXI6IHRydWUsXG4gIGNhbGxlZTogdHJ1ZSxcbiAgYXJndW1lbnRzOiB0cnVlLFxuICBhcml0eTogdHJ1ZVxufTtcbnZhciBGT1JXQVJEX1JFRl9TVEFUSUNTID0ge1xuICAnJCR0eXBlb2YnOiB0cnVlLFxuICByZW5kZXI6IHRydWUsXG4gIGRlZmF1bHRQcm9wczogdHJ1ZSxcbiAgZGlzcGxheU5hbWU6IHRydWUsXG4gIHByb3BUeXBlczogdHJ1ZVxufTtcbnZhciBNRU1PX1NUQVRJQ1MgPSB7XG4gICckJHR5cGVvZic6IHRydWUsXG4gIGNvbXBhcmU6IHRydWUsXG4gIGRlZmF1bHRQcm9wczogdHJ1ZSxcbiAgZGlzcGxheU5hbWU6IHRydWUsXG4gIHByb3BUeXBlczogdHJ1ZSxcbiAgdHlwZTogdHJ1ZVxufTtcbnZhciBUWVBFX1NUQVRJQ1MgPSB7fTtcblRZUEVfU1RBVElDU1tyZWFjdElzLkZvcndhcmRSZWZdID0gRk9SV0FSRF9SRUZfU1RBVElDUztcblRZUEVfU1RBVElDU1tyZWFjdElzLk1lbW9dID0gTUVNT19TVEFUSUNTO1xuXG5mdW5jdGlvbiBnZXRTdGF0aWNzKGNvbXBvbmVudCkge1xuICAvLyBSZWFjdCB2MTYuMTEgYW5kIGJlbG93XG4gIGlmIChyZWFjdElzLmlzTWVtbyhjb21wb25lbnQpKSB7XG4gICAgcmV0dXJuIE1FTU9fU1RBVElDUztcbiAgfSAvLyBSZWFjdCB2MTYuMTIgYW5kIGFib3ZlXG5cblxuICByZXR1cm4gVFlQRV9TVEFUSUNTW2NvbXBvbmVudFsnJCR0eXBlb2YnXV0gfHwgUkVBQ1RfU1RBVElDUztcbn1cblxudmFyIGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xudmFyIGdldE93blByb3BlcnR5TmFtZXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcztcbnZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG52YXIgZ2V0UHJvdG90eXBlT2YgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG52YXIgb2JqZWN0UHJvdG90eXBlID0gT2JqZWN0LnByb3RvdHlwZTtcbmZ1bmN0aW9uIGhvaXN0Tm9uUmVhY3RTdGF0aWNzKHRhcmdldENvbXBvbmVudCwgc291cmNlQ29tcG9uZW50LCBibGFja2xpc3QpIHtcbiAgaWYgKHR5cGVvZiBzb3VyY2VDb21wb25lbnQgIT09ICdzdHJpbmcnKSB7XG4gICAgLy8gZG9uJ3QgaG9pc3Qgb3ZlciBzdHJpbmcgKGh0bWwpIGNvbXBvbmVudHNcbiAgICBpZiAob2JqZWN0UHJvdG90eXBlKSB7XG4gICAgICB2YXIgaW5oZXJpdGVkQ29tcG9uZW50ID0gZ2V0UHJvdG90eXBlT2Yoc291cmNlQ29tcG9uZW50KTtcblxuICAgICAgaWYgKGluaGVyaXRlZENvbXBvbmVudCAmJiBpbmhlcml0ZWRDb21wb25lbnQgIT09IG9iamVjdFByb3RvdHlwZSkge1xuICAgICAgICBob2lzdE5vblJlYWN0U3RhdGljcyh0YXJnZXRDb21wb25lbnQsIGluaGVyaXRlZENvbXBvbmVudCwgYmxhY2tsaXN0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIga2V5cyA9IGdldE93blByb3BlcnR5TmFtZXMoc291cmNlQ29tcG9uZW50KTtcblxuICAgIGlmIChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICAgIGtleXMgPSBrZXlzLmNvbmNhdChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlQ29tcG9uZW50KSk7XG4gICAgfVxuXG4gICAgdmFyIHRhcmdldFN0YXRpY3MgPSBnZXRTdGF0aWNzKHRhcmdldENvbXBvbmVudCk7XG4gICAgdmFyIHNvdXJjZVN0YXRpY3MgPSBnZXRTdGF0aWNzKHNvdXJjZUNvbXBvbmVudCk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyArK2kpIHtcbiAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuXG4gICAgICBpZiAoIUtOT1dOX1NUQVRJQ1Nba2V5XSAmJiAhKGJsYWNrbGlzdCAmJiBibGFja2xpc3Rba2V5XSkgJiYgIShzb3VyY2VTdGF0aWNzICYmIHNvdXJjZVN0YXRpY3Nba2V5XSkgJiYgISh0YXJnZXRTdGF0aWNzICYmIHRhcmdldFN0YXRpY3Nba2V5XSkpIHtcbiAgICAgICAgdmFyIGRlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlQ29tcG9uZW50LCBrZXkpO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gQXZvaWQgZmFpbHVyZXMgZnJvbSByZWFkLW9ubHkgcHJvcGVydGllc1xuICAgICAgICAgIGRlZmluZVByb3BlcnR5KHRhcmdldENvbXBvbmVudCwga2V5LCBkZXNjcmlwdG9yKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge31cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0Q29tcG9uZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhvaXN0Tm9uUmVhY3RTdGF0aWNzO1xuIiwiLyoqIEBsaWNlbnNlIFJlYWN0IHYxNi4xMy4xXG4gKiByZWFjdC1pcy5kZXZlbG9wbWVudC5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgKGZ1bmN0aW9uKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG4vLyBUaGUgU3ltYm9sIHVzZWQgdG8gdGFnIHRoZSBSZWFjdEVsZW1lbnQtbGlrZSB0eXBlcy4gSWYgdGhlcmUgaXMgbm8gbmF0aXZlIFN5bWJvbFxuLy8gbm9yIHBvbHlmaWxsLCB0aGVuIGEgcGxhaW4gbnVtYmVyIGlzIHVzZWQgZm9yIHBlcmZvcm1hbmNlLlxudmFyIGhhc1N5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLmZvcjtcbnZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JykgOiAweGVhYzc7XG52YXIgUkVBQ1RfUE9SVEFMX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5wb3J0YWwnKSA6IDB4ZWFjYTtcbnZhciBSRUFDVF9GUkFHTUVOVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZnJhZ21lbnQnKSA6IDB4ZWFjYjtcbnZhciBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3RyaWN0X21vZGUnKSA6IDB4ZWFjYztcbnZhciBSRUFDVF9QUk9GSUxFUl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucHJvZmlsZXInKSA6IDB4ZWFkMjtcbnZhciBSRUFDVF9QUk9WSURFUl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucHJvdmlkZXInKSA6IDB4ZWFjZDtcbnZhciBSRUFDVF9DT05URVhUX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5jb250ZXh0JykgOiAweGVhY2U7IC8vIFRPRE86IFdlIGRvbid0IHVzZSBBc3luY01vZGUgb3IgQ29uY3VycmVudE1vZGUgYW55bW9yZS4gVGhleSB3ZXJlIHRlbXBvcmFyeVxuLy8gKHVuc3RhYmxlKSBBUElzIHRoYXQgaGF2ZSBiZWVuIHJlbW92ZWQuIENhbiB3ZSByZW1vdmUgdGhlIHN5bWJvbHM/XG5cbnZhciBSRUFDVF9BU1lOQ19NT0RFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5hc3luY19tb2RlJykgOiAweGVhY2Y7XG52YXIgUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5jb25jdXJyZW50X21vZGUnKSA6IDB4ZWFjZjtcbnZhciBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZm9yd2FyZF9yZWYnKSA6IDB4ZWFkMDtcbnZhciBSRUFDVF9TVVNQRU5TRV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3VzcGVuc2UnKSA6IDB4ZWFkMTtcbnZhciBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zdXNwZW5zZV9saXN0JykgOiAweGVhZDg7XG52YXIgUkVBQ1RfTUVNT19UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QubWVtbycpIDogMHhlYWQzO1xudmFyIFJFQUNUX0xBWllfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmxhenknKSA6IDB4ZWFkNDtcbnZhciBSRUFDVF9CTE9DS19UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuYmxvY2snKSA6IDB4ZWFkOTtcbnZhciBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZnVuZGFtZW50YWwnKSA6IDB4ZWFkNTtcbnZhciBSRUFDVF9SRVNQT05ERVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnJlc3BvbmRlcicpIDogMHhlYWQ2O1xudmFyIFJFQUNUX1NDT1BFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zY29wZScpIDogMHhlYWQ3O1xuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSkge1xuICByZXR1cm4gdHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nIHx8IC8vIE5vdGU6IGl0cyB0eXBlb2YgbWlnaHQgYmUgb3RoZXIgdGhhbiAnc3ltYm9sJyBvciAnbnVtYmVyJyBpZiBpdCdzIGEgcG9seWZpbGwuXG4gIHR5cGUgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFIHx8IHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsICYmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9MQVpZX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1BST1ZJREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9SRVNQT05ERVJfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9TQ09QRV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0JMT0NLX1RZUEUpO1xufVxuXG5mdW5jdGlvbiB0eXBlT2Yob2JqZWN0KSB7XG4gIGlmICh0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwpIHtcbiAgICB2YXIgJCR0eXBlb2YgPSBvYmplY3QuJCR0eXBlb2Y7XG5cbiAgICBzd2l0Y2ggKCQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0VMRU1FTlRfVFlQRTpcbiAgICAgICAgdmFyIHR5cGUgPSBvYmplY3QudHlwZTtcblxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICBjYXNlIFJFQUNUX0FTWU5DX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfRlJBR01FTlRfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1BST0ZJTEVSX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcbiAgICAgICAgICAgIHJldHVybiB0eXBlO1xuXG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHZhciAkJHR5cGVvZlR5cGUgPSB0eXBlICYmIHR5cGUuJCR0eXBlb2Y7XG5cbiAgICAgICAgICAgIHN3aXRjaCAoJCR0eXBlb2ZUeXBlKSB7XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfQ09OVEVYVF9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9QUk9WSURFUl9UWVBFOlxuICAgICAgICAgICAgICAgIHJldHVybiAkJHR5cGVvZlR5cGU7XG5cbiAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gJCR0eXBlb2Y7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICBjYXNlIFJFQUNUX1BPUlRBTF9UWVBFOlxuICAgICAgICByZXR1cm4gJCR0eXBlb2Y7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn0gLy8gQXN5bmNNb2RlIGlzIGRlcHJlY2F0ZWQgYWxvbmcgd2l0aCBpc0FzeW5jTW9kZVxuXG52YXIgQXN5bmNNb2RlID0gUkVBQ1RfQVNZTkNfTU9ERV9UWVBFO1xudmFyIENvbmN1cnJlbnRNb2RlID0gUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEU7XG52YXIgQ29udGV4dENvbnN1bWVyID0gUkVBQ1RfQ09OVEVYVF9UWVBFO1xudmFyIENvbnRleHRQcm92aWRlciA9IFJFQUNUX1BST1ZJREVSX1RZUEU7XG52YXIgRWxlbWVudCA9IFJFQUNUX0VMRU1FTlRfVFlQRTtcbnZhciBGb3J3YXJkUmVmID0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTtcbnZhciBGcmFnbWVudCA9IFJFQUNUX0ZSQUdNRU5UX1RZUEU7XG52YXIgTGF6eSA9IFJFQUNUX0xBWllfVFlQRTtcbnZhciBNZW1vID0gUkVBQ1RfTUVNT19UWVBFO1xudmFyIFBvcnRhbCA9IFJFQUNUX1BPUlRBTF9UWVBFO1xudmFyIFByb2ZpbGVyID0gUkVBQ1RfUFJPRklMRVJfVFlQRTtcbnZhciBTdHJpY3RNb2RlID0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRTtcbnZhciBTdXNwZW5zZSA9IFJFQUNUX1NVU1BFTlNFX1RZUEU7XG52YXIgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUgPSBmYWxzZTsgLy8gQXN5bmNNb2RlIHNob3VsZCBiZSBkZXByZWNhdGVkXG5cbmZ1bmN0aW9uIGlzQXN5bmNNb2RlKG9iamVjdCkge1xuICB7XG4gICAgaWYgKCFoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSkge1xuICAgICAgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUgPSB0cnVlOyAvLyBVc2luZyBjb25zb2xlWyd3YXJuJ10gdG8gZXZhZGUgQmFiZWwgYW5kIEVTTGludFxuXG4gICAgICBjb25zb2xlWyd3YXJuJ10oJ1RoZSBSZWFjdElzLmlzQXN5bmNNb2RlKCkgYWxpYXMgaGFzIGJlZW4gZGVwcmVjYXRlZCwgJyArICdhbmQgd2lsbCBiZSByZW1vdmVkIGluIFJlYWN0IDE3Ky4gVXBkYXRlIHlvdXIgY29kZSB0byB1c2UgJyArICdSZWFjdElzLmlzQ29uY3VycmVudE1vZGUoKSBpbnN0ZWFkLiBJdCBoYXMgdGhlIGV4YWN0IHNhbWUgQVBJLicpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBpc0NvbmN1cnJlbnRNb2RlKG9iamVjdCkgfHwgdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0FTWU5DX01PREVfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzQ29uY3VycmVudE1vZGUob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEU7XG59XG5mdW5jdGlvbiBpc0NvbnRleHRDb25zdW1lcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9DT05URVhUX1RZUEU7XG59XG5mdW5jdGlvbiBpc0NvbnRleHRQcm92aWRlcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QUk9WSURFUl9UWVBFO1xufVxuZnVuY3Rpb24gaXNFbGVtZW50KG9iamVjdCkge1xuICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsICYmIG9iamVjdC4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNGb3J3YXJkUmVmKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU7XG59XG5mdW5jdGlvbiBpc0ZyYWdtZW50KG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEU7XG59XG5mdW5jdGlvbiBpc0xhenkob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfTEFaWV9UWVBFO1xufVxuZnVuY3Rpb24gaXNNZW1vKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX01FTU9fVFlQRTtcbn1cbmZ1bmN0aW9uIGlzUG9ydGFsKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BPUlRBTF9UWVBFO1xufVxuZnVuY3Rpb24gaXNQcm9maWxlcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFO1xufVxuZnVuY3Rpb24gaXNTdHJpY3RNb2RlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEU7XG59XG5mdW5jdGlvbiBpc1N1c3BlbnNlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEU7XG59XG5cbmV4cG9ydHMuQXN5bmNNb2RlID0gQXN5bmNNb2RlO1xuZXhwb3J0cy5Db25jdXJyZW50TW9kZSA9IENvbmN1cnJlbnRNb2RlO1xuZXhwb3J0cy5Db250ZXh0Q29uc3VtZXIgPSBDb250ZXh0Q29uc3VtZXI7XG5leHBvcnRzLkNvbnRleHRQcm92aWRlciA9IENvbnRleHRQcm92aWRlcjtcbmV4cG9ydHMuRWxlbWVudCA9IEVsZW1lbnQ7XG5leHBvcnRzLkZvcndhcmRSZWYgPSBGb3J3YXJkUmVmO1xuZXhwb3J0cy5GcmFnbWVudCA9IEZyYWdtZW50O1xuZXhwb3J0cy5MYXp5ID0gTGF6eTtcbmV4cG9ydHMuTWVtbyA9IE1lbW87XG5leHBvcnRzLlBvcnRhbCA9IFBvcnRhbDtcbmV4cG9ydHMuUHJvZmlsZXIgPSBQcm9maWxlcjtcbmV4cG9ydHMuU3RyaWN0TW9kZSA9IFN0cmljdE1vZGU7XG5leHBvcnRzLlN1c3BlbnNlID0gU3VzcGVuc2U7XG5leHBvcnRzLmlzQXN5bmNNb2RlID0gaXNBc3luY01vZGU7XG5leHBvcnRzLmlzQ29uY3VycmVudE1vZGUgPSBpc0NvbmN1cnJlbnRNb2RlO1xuZXhwb3J0cy5pc0NvbnRleHRDb25zdW1lciA9IGlzQ29udGV4dENvbnN1bWVyO1xuZXhwb3J0cy5pc0NvbnRleHRQcm92aWRlciA9IGlzQ29udGV4dFByb3ZpZGVyO1xuZXhwb3J0cy5pc0VsZW1lbnQgPSBpc0VsZW1lbnQ7XG5leHBvcnRzLmlzRm9yd2FyZFJlZiA9IGlzRm9yd2FyZFJlZjtcbmV4cG9ydHMuaXNGcmFnbWVudCA9IGlzRnJhZ21lbnQ7XG5leHBvcnRzLmlzTGF6eSA9IGlzTGF6eTtcbmV4cG9ydHMuaXNNZW1vID0gaXNNZW1vO1xuZXhwb3J0cy5pc1BvcnRhbCA9IGlzUG9ydGFsO1xuZXhwb3J0cy5pc1Byb2ZpbGVyID0gaXNQcm9maWxlcjtcbmV4cG9ydHMuaXNTdHJpY3RNb2RlID0gaXNTdHJpY3RNb2RlO1xuZXhwb3J0cy5pc1N1c3BlbnNlID0gaXNTdXNwZW5zZTtcbmV4cG9ydHMuaXNWYWxpZEVsZW1lbnRUeXBlID0gaXNWYWxpZEVsZW1lbnRUeXBlO1xuZXhwb3J0cy50eXBlT2YgPSB0eXBlT2Y7XG4gIH0pKCk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtaXMucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsIi8qKiBAbGljZW5zZSBSZWFjdCB2dW5kZWZpbmVkXG4gKiByZWFjdC1qc3gtZGV2LXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgKGZ1bmN0aW9uKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIF9hc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG5cbi8vIEFUVEVOVElPTlxuLy8gV2hlbiBhZGRpbmcgbmV3IHN5bWJvbHMgdG8gdGhpcyBmaWxlLFxuLy8gUGxlYXNlIGNvbnNpZGVyIGFsc28gYWRkaW5nIHRvICdyZWFjdC1kZXZ0b29scy1zaGFyZWQvc3JjL2JhY2tlbmQvUmVhY3RTeW1ib2xzJ1xuLy8gVGhlIFN5bWJvbCB1c2VkIHRvIHRhZyB0aGUgUmVhY3RFbGVtZW50LWxpa2UgdHlwZXMuIElmIHRoZXJlIGlzIG5vIG5hdGl2ZSBTeW1ib2xcbi8vIG5vciBwb2x5ZmlsbCwgdGhlbiBhIHBsYWluIG51bWJlciBpcyB1c2VkIGZvciBwZXJmb3JtYW5jZS5cbnZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSAweGVhYzc7XG52YXIgUkVBQ1RfUE9SVEFMX1RZUEUgPSAweGVhY2E7XG5leHBvcnRzLkZyYWdtZW50ID0gMHhlYWNiO1xudmFyIFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgPSAweGVhY2M7XG52YXIgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IDB4ZWFkMjtcbnZhciBSRUFDVF9QUk9WSURFUl9UWVBFID0gMHhlYWNkO1xudmFyIFJFQUNUX0NPTlRFWFRfVFlQRSA9IDB4ZWFjZTtcbnZhciBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gMHhlYWQwO1xudmFyIFJFQUNUX1NVU1BFTlNFX1RZUEUgPSAweGVhZDE7XG52YXIgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gMHhlYWQ4O1xudmFyIFJFQUNUX01FTU9fVFlQRSA9IDB4ZWFkMztcbnZhciBSRUFDVF9MQVpZX1RZUEUgPSAweGVhZDQ7XG52YXIgUkVBQ1RfU0NPUEVfVFlQRSA9IDB4ZWFkNztcbnZhciBSRUFDVF9PUEFRVUVfSURfVFlQRSA9IDB4ZWFlMDtcbnZhciBSRUFDVF9ERUJVR19UUkFDSU5HX01PREVfVFlQRSA9IDB4ZWFlMTtcbnZhciBSRUFDVF9PRkZTQ1JFRU5fVFlQRSA9IDB4ZWFlMjtcbnZhciBSRUFDVF9MRUdBQ1lfSElEREVOX1RZUEUgPSAweGVhZTM7XG52YXIgUkVBQ1RfQ0FDSEVfVFlQRSA9IDB4ZWFlNDtcblxuaWYgKHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLmZvcikge1xuICB2YXIgc3ltYm9sRm9yID0gU3ltYm9sLmZvcjtcbiAgUkVBQ1RfRUxFTUVOVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5lbGVtZW50Jyk7XG4gIFJFQUNUX1BPUlRBTF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5wb3J0YWwnKTtcbiAgZXhwb3J0cy5GcmFnbWVudCA9IHN5bWJvbEZvcigncmVhY3QuZnJhZ21lbnQnKTtcbiAgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc3RyaWN0X21vZGUnKTtcbiAgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QucHJvZmlsZXInKTtcbiAgUkVBQ1RfUFJPVklERVJfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QucHJvdmlkZXInKTtcbiAgUkVBQ1RfQ09OVEVYVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5jb250ZXh0Jyk7XG4gIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmZvcndhcmRfcmVmJyk7XG4gIFJFQUNUX1NVU1BFTlNFX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnN1c3BlbnNlJyk7XG4gIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc3VzcGVuc2VfbGlzdCcpO1xuICBSRUFDVF9NRU1PX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0Lm1lbW8nKTtcbiAgUkVBQ1RfTEFaWV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5sYXp5Jyk7XG4gIFJFQUNUX1NDT1BFX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnNjb3BlJyk7XG4gIFJFQUNUX09QQVFVRV9JRF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5vcGFxdWUuaWQnKTtcbiAgUkVBQ1RfREVCVUdfVFJBQ0lOR19NT0RFX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmRlYnVnX3RyYWNlX21vZGUnKTtcbiAgUkVBQ1RfT0ZGU0NSRUVOX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0Lm9mZnNjcmVlbicpO1xuICBSRUFDVF9MRUdBQ1lfSElEREVOX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmxlZ2FjeV9oaWRkZW4nKTtcbiAgUkVBQ1RfQ0FDSEVfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuY2FjaGUnKTtcbn1cblxudmFyIE1BWUJFX0lURVJBVE9SX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLml0ZXJhdG9yO1xudmFyIEZBVVhfSVRFUkFUT1JfU1lNQk9MID0gJ0BAaXRlcmF0b3InO1xuZnVuY3Rpb24gZ2V0SXRlcmF0b3JGbihtYXliZUl0ZXJhYmxlKSB7XG4gIGlmIChtYXliZUl0ZXJhYmxlID09PSBudWxsIHx8IHR5cGVvZiBtYXliZUl0ZXJhYmxlICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdmFyIG1heWJlSXRlcmF0b3IgPSBNQVlCRV9JVEVSQVRPUl9TWU1CT0wgJiYgbWF5YmVJdGVyYWJsZVtNQVlCRV9JVEVSQVRPUl9TWU1CT0xdIHx8IG1heWJlSXRlcmFibGVbRkFVWF9JVEVSQVRPUl9TWU1CT0xdO1xuXG4gIGlmICh0eXBlb2YgbWF5YmVJdGVyYXRvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBtYXliZUl0ZXJhdG9yO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbnZhciBSZWFjdFNoYXJlZEludGVybmFscyA9IFJlYWN0Ll9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVEO1xuXG5mdW5jdGlvbiBlcnJvcihmb3JtYXQpIHtcbiAge1xuICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMiA+IDEgPyBfbGVuMiAtIDEgOiAwKSwgX2tleTIgPSAxOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICBhcmdzW19rZXkyIC0gMV0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgIH1cblxuICAgIHByaW50V2FybmluZygnZXJyb3InLCBmb3JtYXQsIGFyZ3MpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHByaW50V2FybmluZyhsZXZlbCwgZm9ybWF0LCBhcmdzKSB7XG4gIC8vIFdoZW4gY2hhbmdpbmcgdGhpcyBsb2dpYywgeW91IG1pZ2h0IHdhbnQgdG8gYWxzb1xuICAvLyB1cGRhdGUgY29uc29sZVdpdGhTdGFja0Rldi53d3cuanMgYXMgd2VsbC5cbiAge1xuICAgIHZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTtcbiAgICB2YXIgc3RhY2sgPSBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldFN0YWNrQWRkZW5kdW0oKTtcblxuICAgIGlmIChzdGFjayAhPT0gJycpIHtcbiAgICAgIGZvcm1hdCArPSAnJXMnO1xuICAgICAgYXJncyA9IGFyZ3MuY29uY2F0KFtzdGFja10pO1xuICAgIH1cblxuICAgIHZhciBhcmdzV2l0aEZvcm1hdCA9IGFyZ3MubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICByZXR1cm4gJycgKyBpdGVtO1xuICAgIH0pOyAvLyBDYXJlZnVsOiBSTiBjdXJyZW50bHkgZGVwZW5kcyBvbiB0aGlzIHByZWZpeFxuXG4gICAgYXJnc1dpdGhGb3JtYXQudW5zaGlmdCgnV2FybmluZzogJyArIGZvcm1hdCk7IC8vIFdlIGludGVudGlvbmFsbHkgZG9uJ3QgdXNlIHNwcmVhZCAob3IgLmFwcGx5KSBkaXJlY3RseSBiZWNhdXNlIGl0XG4gICAgLy8gYnJlYWtzIElFOTogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8xMzYxMFxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmdcblxuICAgIEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseS5jYWxsKGNvbnNvbGVbbGV2ZWxdLCBjb25zb2xlLCBhcmdzV2l0aEZvcm1hdCk7XG4gIH1cbn1cblxuLy8gRmlsdGVyIGNlcnRhaW4gRE9NIGF0dHJpYnV0ZXMgKGUuZy4gc3JjLCBocmVmKSBpZiB0aGVpciB2YWx1ZXMgYXJlIGVtcHR5IHN0cmluZ3MuXG52YXIgZW5hYmxlQ2FjaGUgPSBmYWxzZTsgLy8gT25seSB1c2VkIGluIHd3dyBidWlsZHMuXG5cbnZhciBlbmFibGVTY29wZUFQSSA9IGZhbHNlOyAvLyBFeHBlcmltZW50YWwgQ3JlYXRlIEV2ZW50IEhhbmRsZSBBUEkuXG5cbnZhciBSRUFDVF9NT0RVTEVfUkVGRVJFTkNFID0gMDtcblxuaWYgKHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicpIHtcbiAgUkVBQ1RfTU9EVUxFX1JFRkVSRU5DRSA9IFN5bWJvbC5mb3IoJ3JlYWN0Lm1vZHVsZS5yZWZlcmVuY2UnKTtcbn1cblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpIHtcbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9IC8vIE5vdGU6IHR5cGVvZiBtaWdodCBiZSBvdGhlciB0aGFuICdzeW1ib2wnIG9yICdudW1iZXInIChlLmcuIGlmIGl0J3MgYSBwb2x5ZmlsbCkuXG5cblxuICBpZiAodHlwZSA9PT0gZXhwb3J0cy5GcmFnbWVudCB8fCB0eXBlID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX0RFQlVHX1RSQUNJTkdfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfTEVHQUNZX0hJRERFTl9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX09GRlNDUkVFTl9UWVBFIHx8IGVuYWJsZVNjb3BlQVBJICB8fCBlbmFibGVDYWNoZSApIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCkge1xuICAgIGlmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9MQVpZX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1BST1ZJREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgLy8gVGhpcyBuZWVkcyB0byBpbmNsdWRlIGFsbCBwb3NzaWJsZSBtb2R1bGUgcmVmZXJlbmNlIG9iamVjdFxuICAgIC8vIHR5cGVzIHN1cHBvcnRlZCBieSBhbnkgRmxpZ2h0IGNvbmZpZ3VyYXRpb24gYW55d2hlcmUgc2luY2VcbiAgICAvLyB3ZSBkb24ndCBrbm93IHdoaWNoIEZsaWdodCBidWlsZCB0aGlzIHdpbGwgZW5kIHVwIGJlaW5nIHVzZWRcbiAgICAvLyB3aXRoLlxuICAgIHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01PRFVMRV9SRUZFUkVOQ0UgfHwgdHlwZS5nZXRNb2R1bGVJZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGdldFdyYXBwZWROYW1lKG91dGVyVHlwZSwgaW5uZXJUeXBlLCB3cmFwcGVyTmFtZSkge1xuICB2YXIgZGlzcGxheU5hbWUgPSBvdXRlclR5cGUuZGlzcGxheU5hbWU7XG5cbiAgaWYgKGRpc3BsYXlOYW1lKSB7XG4gICAgcmV0dXJuIGRpc3BsYXlOYW1lO1xuICB9XG5cbiAgdmFyIGZ1bmN0aW9uTmFtZSA9IGlubmVyVHlwZS5kaXNwbGF5TmFtZSB8fCBpbm5lclR5cGUubmFtZSB8fCAnJztcbiAgcmV0dXJuIGZ1bmN0aW9uTmFtZSAhPT0gJycgPyB3cmFwcGVyTmFtZSArIFwiKFwiICsgZnVuY3Rpb25OYW1lICsgXCIpXCIgOiB3cmFwcGVyTmFtZTtcbn0gLy8gS2VlcCBpbiBzeW5jIHdpdGggcmVhY3QtcmVjb25jaWxlci9nZXRDb21wb25lbnROYW1lRnJvbUZpYmVyXG5cblxuZnVuY3Rpb24gZ2V0Q29udGV4dE5hbWUodHlwZSkge1xuICByZXR1cm4gdHlwZS5kaXNwbGF5TmFtZSB8fCAnQ29udGV4dCc7XG59IC8vIE5vdGUgdGhhdCB0aGUgcmVjb25jaWxlciBwYWNrYWdlIHNob3VsZCBnZW5lcmFsbHkgcHJlZmVyIHRvIHVzZSBnZXRDb21wb25lbnROYW1lRnJvbUZpYmVyKCkgaW5zdGVhZC5cblxuXG5mdW5jdGlvbiBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUodHlwZSkge1xuICBpZiAodHlwZSA9PSBudWxsKSB7XG4gICAgLy8gSG9zdCByb290LCB0ZXh0IG5vZGUgb3IganVzdCBpbnZhbGlkIHR5cGUuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB7XG4gICAgaWYgKHR5cGVvZiB0eXBlLnRhZyA9PT0gJ251bWJlcicpIHtcbiAgICAgIGVycm9yKCdSZWNlaXZlZCBhbiB1bmV4cGVjdGVkIG9iamVjdCBpbiBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUoKS4gJyArICdUaGlzIGlzIGxpa2VseSBhIGJ1ZyBpbiBSZWFjdC4gUGxlYXNlIGZpbGUgYW4gaXNzdWUuJyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHR5cGUuZGlzcGxheU5hbWUgfHwgdHlwZS5uYW1lIHx8IG51bGw7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIGV4cG9ydHMuRnJhZ21lbnQ6XG4gICAgICByZXR1cm4gJ0ZyYWdtZW50JztcblxuICAgIGNhc2UgUkVBQ1RfUE9SVEFMX1RZUEU6XG4gICAgICByZXR1cm4gJ1BvcnRhbCc7XG5cbiAgICBjYXNlIFJFQUNUX1BST0ZJTEVSX1RZUEU6XG4gICAgICByZXR1cm4gJ1Byb2ZpbGVyJztcblxuICAgIGNhc2UgUkVBQ1RfU1RSSUNUX01PREVfVFlQRTpcbiAgICAgIHJldHVybiAnU3RyaWN0TW9kZSc7XG5cbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICByZXR1cm4gJ1N1c3BlbnNlJztcblxuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFOlxuICAgICAgcmV0dXJuICdTdXNwZW5zZUxpc3QnO1xuXG4gICAgY2FzZSBSRUFDVF9DQUNIRV9UWVBFOlxuICAgICAgcmV0dXJuICdDYWNoZSc7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgc3dpdGNoICh0eXBlLiQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0NPTlRFWFRfVFlQRTpcbiAgICAgICAgdmFyIGNvbnRleHQgPSB0eXBlO1xuICAgICAgICByZXR1cm4gZ2V0Q29udGV4dE5hbWUoY29udGV4dCkgKyAnLkNvbnN1bWVyJztcblxuICAgICAgY2FzZSBSRUFDVF9QUk9WSURFUl9UWVBFOlxuICAgICAgICB2YXIgcHJvdmlkZXIgPSB0eXBlO1xuICAgICAgICByZXR1cm4gZ2V0Q29udGV4dE5hbWUocHJvdmlkZXIuX2NvbnRleHQpICsgJy5Qcm92aWRlcic7XG5cbiAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgcmV0dXJuIGdldFdyYXBwZWROYW1lKHR5cGUsIHR5cGUucmVuZGVyLCAnRm9yd2FyZFJlZicpO1xuXG4gICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgdmFyIG91dGVyTmFtZSA9IHR5cGUuZGlzcGxheU5hbWUgfHwgbnVsbDtcblxuICAgICAgICBpZiAob3V0ZXJOYW1lICE9PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIG91dGVyTmFtZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUodHlwZS50eXBlKSB8fCAnTWVtbyc7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICB7XG4gICAgICAgICAgdmFyIGxhenlDb21wb25lbnQgPSB0eXBlO1xuICAgICAgICAgIHZhciBwYXlsb2FkID0gbGF6eUNvbXBvbmVudC5fcGF5bG9hZDtcbiAgICAgICAgICB2YXIgaW5pdCA9IGxhenlDb21wb25lbnQuX2luaXQ7XG5cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIGdldENvbXBvbmVudE5hbWVGcm9tVHlwZShpbml0KHBheWxvYWQpKTtcbiAgICAgICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxuLy8gSGVscGVycyB0byBwYXRjaCBjb25zb2xlLmxvZ3MgdG8gYXZvaWQgbG9nZ2luZyBkdXJpbmcgc2lkZS1lZmZlY3QgZnJlZVxuLy8gcmVwbGF5aW5nIG9uIHJlbmRlciBmdW5jdGlvbi4gVGhpcyBjdXJyZW50bHkgb25seSBwYXRjaGVzIHRoZSBvYmplY3Rcbi8vIGxhemlseSB3aGljaCB3b24ndCBjb3ZlciBpZiB0aGUgbG9nIGZ1bmN0aW9uIHdhcyBleHRyYWN0ZWQgZWFnZXJseS5cbi8vIFdlIGNvdWxkIGFsc28gZWFnZXJseSBwYXRjaCB0aGUgbWV0aG9kLlxudmFyIGRpc2FibGVkRGVwdGggPSAwO1xudmFyIHByZXZMb2c7XG52YXIgcHJldkluZm87XG52YXIgcHJldldhcm47XG52YXIgcHJldkVycm9yO1xudmFyIHByZXZHcm91cDtcbnZhciBwcmV2R3JvdXBDb2xsYXBzZWQ7XG52YXIgcHJldkdyb3VwRW5kO1xuXG5mdW5jdGlvbiBkaXNhYmxlZExvZygpIHt9XG5cbmRpc2FibGVkTG9nLl9fcmVhY3REaXNhYmxlZExvZyA9IHRydWU7XG5mdW5jdGlvbiBkaXNhYmxlTG9ncygpIHtcbiAge1xuICAgIGlmIChkaXNhYmxlZERlcHRoID09PSAwKSB7XG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICAgIHByZXZMb2cgPSBjb25zb2xlLmxvZztcbiAgICAgIHByZXZJbmZvID0gY29uc29sZS5pbmZvO1xuICAgICAgcHJldldhcm4gPSBjb25zb2xlLndhcm47XG4gICAgICBwcmV2RXJyb3IgPSBjb25zb2xlLmVycm9yO1xuICAgICAgcHJldkdyb3VwID0gY29uc29sZS5ncm91cDtcbiAgICAgIHByZXZHcm91cENvbGxhcHNlZCA9IGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQ7XG4gICAgICBwcmV2R3JvdXBFbmQgPSBjb25zb2xlLmdyb3VwRW5kOyAvLyBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzE5MDk5XG5cbiAgICAgIHZhciBwcm9wcyA9IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICB2YWx1ZTogZGlzYWJsZWRMb2csXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgICB9OyAvLyAkRmxvd0ZpeE1lIEZsb3cgdGhpbmtzIGNvbnNvbGUgaXMgaW1tdXRhYmxlLlxuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhjb25zb2xlLCB7XG4gICAgICAgIGluZm86IHByb3BzLFxuICAgICAgICBsb2c6IHByb3BzLFxuICAgICAgICB3YXJuOiBwcm9wcyxcbiAgICAgICAgZXJyb3I6IHByb3BzLFxuICAgICAgICBncm91cDogcHJvcHMsXG4gICAgICAgIGdyb3VwQ29sbGFwc2VkOiBwcm9wcyxcbiAgICAgICAgZ3JvdXBFbmQ6IHByb3BzXG4gICAgICB9KTtcbiAgICAgIC8qIGVzbGludC1lbmFibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgfVxuXG4gICAgZGlzYWJsZWREZXB0aCsrO1xuICB9XG59XG5mdW5jdGlvbiByZWVuYWJsZUxvZ3MoKSB7XG4gIHtcbiAgICBkaXNhYmxlZERlcHRoLS07XG5cbiAgICBpZiAoZGlzYWJsZWREZXB0aCA9PT0gMCkge1xuICAgICAgLyogZXNsaW50LWRpc2FibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgICB2YXIgcHJvcHMgPSB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgd3JpdGFibGU6IHRydWVcbiAgICAgIH07IC8vICRGbG93Rml4TWUgRmxvdyB0aGlua3MgY29uc29sZSBpcyBpbW11dGFibGUuXG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGNvbnNvbGUsIHtcbiAgICAgICAgbG9nOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2TG9nXG4gICAgICAgIH0pLFxuICAgICAgICBpbmZvOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2SW5mb1xuICAgICAgICB9KSxcbiAgICAgICAgd2FybjogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldldhcm5cbiAgICAgICAgfSksXG4gICAgICAgIGVycm9yOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2RXJyb3JcbiAgICAgICAgfSksXG4gICAgICAgIGdyb3VwOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2R3JvdXBcbiAgICAgICAgfSksXG4gICAgICAgIGdyb3VwQ29sbGFwc2VkOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2R3JvdXBDb2xsYXBzZWRcbiAgICAgICAgfSksXG4gICAgICAgIGdyb3VwRW5kOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2R3JvdXBFbmRcbiAgICAgICAgfSlcbiAgICAgIH0pO1xuICAgICAgLyogZXNsaW50LWVuYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICB9XG5cbiAgICBpZiAoZGlzYWJsZWREZXB0aCA8IDApIHtcbiAgICAgIGVycm9yKCdkaXNhYmxlZERlcHRoIGZlbGwgYmVsb3cgemVyby4gJyArICdUaGlzIGlzIGEgYnVnIGluIFJlYWN0LiBQbGVhc2UgZmlsZSBhbiBpc3N1ZS4nKTtcbiAgICB9XG4gIH1cbn1cblxudmFyIFJlYWN0Q3VycmVudERpc3BhdGNoZXIgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdEN1cnJlbnREaXNwYXRjaGVyO1xudmFyIHByZWZpeDtcbmZ1bmN0aW9uIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKG5hbWUsIHNvdXJjZSwgb3duZXJGbikge1xuICB7XG4gICAgaWYgKHByZWZpeCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBFeHRyYWN0IHRoZSBWTSBzcGVjaWZpYyBwcmVmaXggdXNlZCBieSBlYWNoIGxpbmUuXG4gICAgICB0cnkge1xuICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICB2YXIgbWF0Y2ggPSB4LnN0YWNrLnRyaW0oKS5tYXRjaCgvXFxuKCAqKGF0ICk/KS8pO1xuICAgICAgICBwcmVmaXggPSBtYXRjaCAmJiBtYXRjaFsxXSB8fCAnJztcbiAgICAgIH1cbiAgICB9IC8vIFdlIHVzZSB0aGUgcHJlZml4IHRvIGVuc3VyZSBvdXIgc3RhY2tzIGxpbmUgdXAgd2l0aCBuYXRpdmUgc3RhY2sgZnJhbWVzLlxuXG5cbiAgICByZXR1cm4gJ1xcbicgKyBwcmVmaXggKyBuYW1lO1xuICB9XG59XG52YXIgcmVlbnRyeSA9IGZhbHNlO1xudmFyIGNvbXBvbmVudEZyYW1lQ2FjaGU7XG5cbntcbiAgdmFyIFBvc3NpYmx5V2Vha01hcCA9IHR5cGVvZiBXZWFrTWFwID09PSAnZnVuY3Rpb24nID8gV2Vha01hcCA6IE1hcDtcbiAgY29tcG9uZW50RnJhbWVDYWNoZSA9IG5ldyBQb3NzaWJseVdlYWtNYXAoKTtcbn1cblxuZnVuY3Rpb24gZGVzY3JpYmVOYXRpdmVDb21wb25lbnRGcmFtZShmbiwgY29uc3RydWN0KSB7XG4gIC8vIElmIHNvbWV0aGluZyBhc2tlZCBmb3IgYSBzdGFjayBpbnNpZGUgYSBmYWtlIHJlbmRlciwgaXQgc2hvdWxkIGdldCBpZ25vcmVkLlxuICBpZiAoICFmbiB8fCByZWVudHJ5KSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAge1xuICAgIHZhciBmcmFtZSA9IGNvbXBvbmVudEZyYW1lQ2FjaGUuZ2V0KGZuKTtcblxuICAgIGlmIChmcmFtZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gZnJhbWU7XG4gICAgfVxuICB9XG5cbiAgdmFyIGNvbnRyb2w7XG4gIHJlZW50cnkgPSB0cnVlO1xuICB2YXIgcHJldmlvdXNQcmVwYXJlU3RhY2tUcmFjZSA9IEVycm9yLnByZXBhcmVTdGFja1RyYWNlOyAvLyAkRmxvd0ZpeE1lIEl0IGRvZXMgYWNjZXB0IHVuZGVmaW5lZC5cblxuICBFcnJvci5wcmVwYXJlU3RhY2tUcmFjZSA9IHVuZGVmaW5lZDtcbiAgdmFyIHByZXZpb3VzRGlzcGF0Y2hlcjtcblxuICB7XG4gICAgcHJldmlvdXNEaXNwYXRjaGVyID0gUmVhY3RDdXJyZW50RGlzcGF0Y2hlci5jdXJyZW50OyAvLyBTZXQgdGhlIGRpc3BhdGNoZXIgaW4gREVWIGJlY2F1c2UgdGhpcyBtaWdodCBiZSBjYWxsIGluIHRoZSByZW5kZXIgZnVuY3Rpb25cbiAgICAvLyBmb3Igd2FybmluZ3MuXG5cbiAgICBSZWFjdEN1cnJlbnREaXNwYXRjaGVyLmN1cnJlbnQgPSBudWxsO1xuICAgIGRpc2FibGVMb2dzKCk7XG4gIH1cblxuICB0cnkge1xuICAgIC8vIFRoaXMgc2hvdWxkIHRocm93LlxuICAgIGlmIChjb25zdHJ1Y3QpIHtcbiAgICAgIC8vIFNvbWV0aGluZyBzaG91bGQgYmUgc2V0dGluZyB0aGUgcHJvcHMgaW4gdGhlIGNvbnN0cnVjdG9yLlxuICAgICAgdmFyIEZha2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICB9OyAvLyAkRmxvd0ZpeE1lXG5cblxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZha2UucHJvdG90eXBlLCAncHJvcHMnLCB7XG4gICAgICAgIHNldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIC8vIFdlIHVzZSBhIHRocm93aW5nIHNldHRlciBpbnN0ZWFkIG9mIGZyb3plbiBvciBub24td3JpdGFibGUgcHJvcHNcbiAgICAgICAgICAvLyBiZWNhdXNlIHRoYXQgd29uJ3QgdGhyb3cgaW4gYSBub24tc3RyaWN0IG1vZGUgZnVuY3Rpb24uXG4gICAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gJ29iamVjdCcgJiYgUmVmbGVjdC5jb25zdHJ1Y3QpIHtcbiAgICAgICAgLy8gV2UgY29uc3RydWN0IGEgZGlmZmVyZW50IGNvbnRyb2wgZm9yIHRoaXMgY2FzZSB0byBpbmNsdWRlIGFueSBleHRyYVxuICAgICAgICAvLyBmcmFtZXMgYWRkZWQgYnkgdGhlIGNvbnN0cnVjdCBjYWxsLlxuICAgICAgICB0cnkge1xuICAgICAgICAgIFJlZmxlY3QuY29uc3RydWN0KEZha2UsIFtdKTtcbiAgICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICAgIGNvbnRyb2wgPSB4O1xuICAgICAgICB9XG5cbiAgICAgICAgUmVmbGVjdC5jb25zdHJ1Y3QoZm4sIFtdLCBGYWtlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgRmFrZS5jYWxsKCk7XG4gICAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgICBjb250cm9sID0geDtcbiAgICAgICAgfVxuXG4gICAgICAgIGZuLmNhbGwoRmFrZS5wcm90b3R5cGUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0cnkge1xuICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICBjb250cm9sID0geDtcbiAgICAgIH1cblxuICAgICAgZm4oKTtcbiAgICB9XG4gIH0gY2F0Y2ggKHNhbXBsZSkge1xuICAgIC8vIFRoaXMgaXMgaW5saW5lZCBtYW51YWxseSBiZWNhdXNlIGNsb3N1cmUgZG9lc24ndCBkbyBpdCBmb3IgdXMuXG4gICAgaWYgKHNhbXBsZSAmJiBjb250cm9sICYmIHR5cGVvZiBzYW1wbGUuc3RhY2sgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBUaGlzIGV4dHJhY3RzIHRoZSBmaXJzdCBmcmFtZSBmcm9tIHRoZSBzYW1wbGUgdGhhdCBpc24ndCBhbHNvIGluIHRoZSBjb250cm9sLlxuICAgICAgLy8gU2tpcHBpbmcgb25lIGZyYW1lIHRoYXQgd2UgYXNzdW1lIGlzIHRoZSBmcmFtZSB0aGF0IGNhbGxzIHRoZSB0d28uXG4gICAgICB2YXIgc2FtcGxlTGluZXMgPSBzYW1wbGUuc3RhY2suc3BsaXQoJ1xcbicpO1xuICAgICAgdmFyIGNvbnRyb2xMaW5lcyA9IGNvbnRyb2wuc3RhY2suc3BsaXQoJ1xcbicpO1xuICAgICAgdmFyIHMgPSBzYW1wbGVMaW5lcy5sZW5ndGggLSAxO1xuICAgICAgdmFyIGMgPSBjb250cm9sTGluZXMubGVuZ3RoIC0gMTtcblxuICAgICAgd2hpbGUgKHMgPj0gMSAmJiBjID49IDAgJiYgc2FtcGxlTGluZXNbc10gIT09IGNvbnRyb2xMaW5lc1tjXSkge1xuICAgICAgICAvLyBXZSBleHBlY3QgYXQgbGVhc3Qgb25lIHN0YWNrIGZyYW1lIHRvIGJlIHNoYXJlZC5cbiAgICAgICAgLy8gVHlwaWNhbGx5IHRoaXMgd2lsbCBiZSB0aGUgcm9vdCBtb3N0IG9uZS4gSG93ZXZlciwgc3RhY2sgZnJhbWVzIG1heSBiZVxuICAgICAgICAvLyBjdXQgb2ZmIGR1ZSB0byBtYXhpbXVtIHN0YWNrIGxpbWl0cy4gSW4gdGhpcyBjYXNlLCBvbmUgbWF5YmUgY3V0IG9mZlxuICAgICAgICAvLyBlYXJsaWVyIHRoYW4gdGhlIG90aGVyLiBXZSBhc3N1bWUgdGhhdCB0aGUgc2FtcGxlIGlzIGxvbmdlciBvciB0aGUgc2FtZVxuICAgICAgICAvLyBhbmQgdGhlcmUgZm9yIGN1dCBvZmYgZWFybGllci4gU28gd2Ugc2hvdWxkIGZpbmQgdGhlIHJvb3QgbW9zdCBmcmFtZSBpblxuICAgICAgICAvLyB0aGUgc2FtcGxlIHNvbWV3aGVyZSBpbiB0aGUgY29udHJvbC5cbiAgICAgICAgYy0tO1xuICAgICAgfVxuXG4gICAgICBmb3IgKDsgcyA+PSAxICYmIGMgPj0gMDsgcy0tLCBjLS0pIHtcbiAgICAgICAgLy8gTmV4dCB3ZSBmaW5kIHRoZSBmaXJzdCBvbmUgdGhhdCBpc24ndCB0aGUgc2FtZSB3aGljaCBzaG91bGQgYmUgdGhlXG4gICAgICAgIC8vIGZyYW1lIHRoYXQgY2FsbGVkIG91ciBzYW1wbGUgZnVuY3Rpb24gYW5kIHRoZSBjb250cm9sLlxuICAgICAgICBpZiAoc2FtcGxlTGluZXNbc10gIT09IGNvbnRyb2xMaW5lc1tjXSkge1xuICAgICAgICAgIC8vIEluIFY4LCB0aGUgZmlyc3QgbGluZSBpcyBkZXNjcmliaW5nIHRoZSBtZXNzYWdlIGJ1dCBvdGhlciBWTXMgZG9uJ3QuXG4gICAgICAgICAgLy8gSWYgd2UncmUgYWJvdXQgdG8gcmV0dXJuIHRoZSBmaXJzdCBsaW5lLCBhbmQgdGhlIGNvbnRyb2wgaXMgYWxzbyBvbiB0aGUgc2FtZVxuICAgICAgICAgIC8vIGxpbmUsIHRoYXQncyBhIHByZXR0eSBnb29kIGluZGljYXRvciB0aGF0IG91ciBzYW1wbGUgdGhyZXcgYXQgc2FtZSBsaW5lIGFzXG4gICAgICAgICAgLy8gdGhlIGNvbnRyb2wuIEkuZS4gYmVmb3JlIHdlIGVudGVyZWQgdGhlIHNhbXBsZSBmcmFtZS4gU28gd2UgaWdub3JlIHRoaXMgcmVzdWx0LlxuICAgICAgICAgIC8vIFRoaXMgY2FuIGhhcHBlbiBpZiB5b3UgcGFzc2VkIGEgY2xhc3MgdG8gZnVuY3Rpb24gY29tcG9uZW50LCBvciBub24tZnVuY3Rpb24uXG4gICAgICAgICAgaWYgKHMgIT09IDEgfHwgYyAhPT0gMSkge1xuICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICBzLS07XG4gICAgICAgICAgICAgIGMtLTsgLy8gV2UgbWF5IHN0aWxsIGhhdmUgc2ltaWxhciBpbnRlcm1lZGlhdGUgZnJhbWVzIGZyb20gdGhlIGNvbnN0cnVjdCBjYWxsLlxuICAgICAgICAgICAgICAvLyBUaGUgbmV4dCBvbmUgdGhhdCBpc24ndCB0aGUgc2FtZSBzaG91bGQgYmUgb3VyIG1hdGNoIHRob3VnaC5cblxuICAgICAgICAgICAgICBpZiAoYyA8IDAgfHwgc2FtcGxlTGluZXNbc10gIT09IGNvbnRyb2xMaW5lc1tjXSkge1xuICAgICAgICAgICAgICAgIC8vIFY4IGFkZHMgYSBcIm5ld1wiIHByZWZpeCBmb3IgbmF0aXZlIGNsYXNzZXMuIExldCdzIHJlbW92ZSBpdCB0byBtYWtlIGl0IHByZXR0aWVyLlxuICAgICAgICAgICAgICAgIHZhciBfZnJhbWUgPSAnXFxuJyArIHNhbXBsZUxpbmVzW3NdLnJlcGxhY2UoJyBhdCBuZXcgJywgJyBhdCAnKTtcblxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50RnJhbWVDYWNoZS5zZXQoZm4sIF9mcmFtZSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSAvLyBSZXR1cm4gdGhlIGxpbmUgd2UgZm91bmQuXG5cblxuICAgICAgICAgICAgICAgIHJldHVybiBfZnJhbWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gd2hpbGUgKHMgPj0gMSAmJiBjID49IDApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9IGZpbmFsbHkge1xuICAgIHJlZW50cnkgPSBmYWxzZTtcblxuICAgIHtcbiAgICAgIFJlYWN0Q3VycmVudERpc3BhdGNoZXIuY3VycmVudCA9IHByZXZpb3VzRGlzcGF0Y2hlcjtcbiAgICAgIHJlZW5hYmxlTG9ncygpO1xuICAgIH1cblxuICAgIEVycm9yLnByZXBhcmVTdGFja1RyYWNlID0gcHJldmlvdXNQcmVwYXJlU3RhY2tUcmFjZTtcbiAgfSAvLyBGYWxsYmFjayB0byBqdXN0IHVzaW5nIHRoZSBuYW1lIGlmIHdlIGNvdWxkbid0IG1ha2UgaXQgdGhyb3cuXG5cblxuICB2YXIgbmFtZSA9IGZuID8gZm4uZGlzcGxheU5hbWUgfHwgZm4ubmFtZSA6ICcnO1xuICB2YXIgc3ludGhldGljRnJhbWUgPSBuYW1lID8gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUobmFtZSkgOiAnJztcblxuICB7XG4gICAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29tcG9uZW50RnJhbWVDYWNoZS5zZXQoZm4sIHN5bnRoZXRpY0ZyYW1lKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3ludGhldGljRnJhbWU7XG59XG5mdW5jdGlvbiBkZXNjcmliZUZ1bmN0aW9uQ29tcG9uZW50RnJhbWUoZm4sIHNvdXJjZSwgb3duZXJGbikge1xuICB7XG4gICAgcmV0dXJuIGRlc2NyaWJlTmF0aXZlQ29tcG9uZW50RnJhbWUoZm4sIGZhbHNlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzaG91bGRDb25zdHJ1Y3QoQ29tcG9uZW50KSB7XG4gIHZhciBwcm90b3R5cGUgPSBDb21wb25lbnQucHJvdG90eXBlO1xuICByZXR1cm4gISEocHJvdG90eXBlICYmIHByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50KTtcbn1cblxuZnVuY3Rpb24gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKHR5cGUsIHNvdXJjZSwgb3duZXJGbikge1xuXG4gIGlmICh0eXBlID09IG51bGwpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICB7XG4gICAgICByZXR1cm4gZGVzY3JpYmVOYXRpdmVDb21wb25lbnRGcmFtZSh0eXBlLCBzaG91bGRDb25zdHJ1Y3QodHlwZSkpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUodHlwZSk7XG4gIH1cblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICByZXR1cm4gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUoJ1N1c3BlbnNlJyk7XG5cbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRTpcbiAgICAgIHJldHVybiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZSgnU3VzcGVuc2VMaXN0Jyk7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgc3dpdGNoICh0eXBlLiQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgIHJldHVybiBkZXNjcmliZUZ1bmN0aW9uQ29tcG9uZW50RnJhbWUodHlwZS5yZW5kZXIpO1xuXG4gICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgLy8gTWVtbyBtYXkgY29udGFpbiBhbnkgY29tcG9uZW50IHR5cGUgc28gd2UgcmVjdXJzaXZlbHkgcmVzb2x2ZSBpdC5cbiAgICAgICAgcmV0dXJuIGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVih0eXBlLnR5cGUsIHNvdXJjZSwgb3duZXJGbik7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICB7XG4gICAgICAgICAgdmFyIGxhenlDb21wb25lbnQgPSB0eXBlO1xuICAgICAgICAgIHZhciBwYXlsb2FkID0gbGF6eUNvbXBvbmVudC5fcGF5bG9hZDtcbiAgICAgICAgICB2YXIgaW5pdCA9IGxhenlDb21wb25lbnQuX2luaXQ7XG5cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gTGF6eSBtYXkgY29udGFpbiBhbnkgY29tcG9uZW50IHR5cGUgc28gd2UgcmVjdXJzaXZlbHkgcmVzb2x2ZSBpdC5cbiAgICAgICAgICAgIHJldHVybiBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYoaW5pdChwYXlsb2FkKSwgc291cmNlLCBvd25lckZuKTtcbiAgICAgICAgICB9IGNhdGNoICh4KSB7fVxuICAgICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuICcnO1xufVxuXG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG52YXIgbG9nZ2VkVHlwZUZhaWx1cmVzID0ge307XG52YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0RGVidWdDdXJyZW50RnJhbWU7XG5cbmZ1bmN0aW9uIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpIHtcbiAge1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICB2YXIgb3duZXIgPSBlbGVtZW50Ll9vd25lcjtcbiAgICAgIHZhciBzdGFjayA9IGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVihlbGVtZW50LnR5cGUsIGVsZW1lbnQuX3NvdXJjZSwgb3duZXIgPyBvd25lci50eXBlIDogbnVsbCk7XG4gICAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lLnNldEV4dHJhU3RhY2tGcmFtZShzdGFjayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIFJlYWN0RGVidWdDdXJyZW50RnJhbWUuc2V0RXh0cmFTdGFja0ZyYW1lKG51bGwpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjaGVja1Byb3BUeXBlcyh0eXBlU3BlY3MsIHZhbHVlcywgbG9jYXRpb24sIGNvbXBvbmVudE5hbWUsIGVsZW1lbnQpIHtcbiAge1xuICAgIC8vICRGbG93Rml4TWUgVGhpcyBpcyBva2F5IGJ1dCBGbG93IGRvZXNuJ3Qga25vdyBpdC5cbiAgICB2YXIgaGFzID0gRnVuY3Rpb24uY2FsbC5iaW5kKGhhc093blByb3BlcnR5KTtcblxuICAgIGZvciAodmFyIHR5cGVTcGVjTmFtZSBpbiB0eXBlU3BlY3MpIHtcbiAgICAgIGlmIChoYXModHlwZVNwZWNzLCB0eXBlU3BlY05hbWUpKSB7XG4gICAgICAgIHZhciBlcnJvciQxID0gdm9pZCAwOyAvLyBQcm9wIHR5cGUgdmFsaWRhdGlvbiBtYXkgdGhyb3cuIEluIGNhc2UgdGhleSBkbywgd2UgZG9uJ3Qgd2FudCB0b1xuICAgICAgICAvLyBmYWlsIHRoZSByZW5kZXIgcGhhc2Ugd2hlcmUgaXQgZGlkbid0IGZhaWwgYmVmb3JlLiBTbyB3ZSBsb2cgaXQuXG4gICAgICAgIC8vIEFmdGVyIHRoZXNlIGhhdmUgYmVlbiBjbGVhbmVkIHVwLCB3ZSdsbCBsZXQgdGhlbSB0aHJvdy5cblxuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgaXMgaW50ZW50aW9uYWxseSBhbiBpbnZhcmlhbnQgdGhhdCBnZXRzIGNhdWdodC4gSXQncyB0aGUgc2FtZVxuICAgICAgICAgIC8vIGJlaGF2aW9yIGFzIHdpdGhvdXQgdGhpcyBzdGF0ZW1lbnQgZXhjZXB0IHdpdGggYSBiZXR0ZXIgbWVzc2FnZS5cbiAgICAgICAgICBpZiAodHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB2YXIgZXJyID0gRXJyb3IoKGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJykgKyAnOiAnICsgbG9jYXRpb24gKyAnIHR5cGUgYCcgKyB0eXBlU3BlY05hbWUgKyAnYCBpcyBpbnZhbGlkOyAnICsgJ2l0IG11c3QgYmUgYSBmdW5jdGlvbiwgdXN1YWxseSBmcm9tIHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZSwgYnV0IHJlY2VpdmVkIGAnICsgdHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICsgJ2AuJyArICdUaGlzIG9mdGVuIGhhcHBlbnMgYmVjYXVzZSBvZiB0eXBvcyBzdWNoIGFzIGBQcm9wVHlwZXMuZnVuY3Rpb25gIGluc3RlYWQgb2YgYFByb3BUeXBlcy5mdW5jYC4nKTtcbiAgICAgICAgICAgIGVyci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGVycm9yJDEgPSB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSh2YWx1ZXMsIHR5cGVTcGVjTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIG51bGwsICdTRUNSRVRfRE9fTk9UX1BBU1NfVEhJU19PUl9ZT1VfV0lMTF9CRV9GSVJFRCcpO1xuICAgICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICAgIGVycm9yJDEgPSBleDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlcnJvciQxICYmICEoZXJyb3IkMSBpbnN0YW5jZW9mIEVycm9yKSkge1xuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpO1xuXG4gICAgICAgICAgZXJyb3IoJyVzOiB0eXBlIHNwZWNpZmljYXRpb24gb2YgJXMnICsgJyBgJXNgIGlzIGludmFsaWQ7IHRoZSB0eXBlIGNoZWNrZXIgJyArICdmdW5jdGlvbiBtdXN0IHJldHVybiBgbnVsbGAgb3IgYW4gYEVycm9yYCBidXQgcmV0dXJuZWQgYSAlcy4gJyArICdZb3UgbWF5IGhhdmUgZm9yZ290dGVuIHRvIHBhc3MgYW4gYXJndW1lbnQgdG8gdGhlIHR5cGUgY2hlY2tlciAnICsgJ2NyZWF0b3IgKGFycmF5T2YsIGluc3RhbmNlT2YsIG9iamVjdE9mLCBvbmVPZiwgb25lT2ZUeXBlLCBhbmQgJyArICdzaGFwZSBhbGwgcmVxdWlyZSBhbiBhcmd1bWVudCkuJywgY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnLCBsb2NhdGlvbiwgdHlwZVNwZWNOYW1lLCB0eXBlb2YgZXJyb3IkMSk7XG5cbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChudWxsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlcnJvciQxIGluc3RhbmNlb2YgRXJyb3IgJiYgIShlcnJvciQxLm1lc3NhZ2UgaW4gbG9nZ2VkVHlwZUZhaWx1cmVzKSkge1xuICAgICAgICAgIC8vIE9ubHkgbW9uaXRvciB0aGlzIGZhaWx1cmUgb25jZSBiZWNhdXNlIHRoZXJlIHRlbmRzIHRvIGJlIGEgbG90IG9mIHRoZVxuICAgICAgICAgIC8vIHNhbWUgZXJyb3IuXG4gICAgICAgICAgbG9nZ2VkVHlwZUZhaWx1cmVzW2Vycm9yJDEubWVzc2FnZV0gPSB0cnVlO1xuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpO1xuXG4gICAgICAgICAgZXJyb3IoJ0ZhaWxlZCAlcyB0eXBlOiAlcycsIGxvY2F0aW9uLCBlcnJvciQxLm1lc3NhZ2UpO1xuXG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQobnVsbCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxudmFyIGlzQXJyYXlJbXBsID0gQXJyYXkuaXNBcnJheTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlZGVjbGFyZVxuXG5mdW5jdGlvbiBpc0FycmF5KGEpIHtcbiAgcmV0dXJuIGlzQXJyYXlJbXBsKGEpO1xufVxuXG52YXIgUmVhY3RDdXJyZW50T3duZXIgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdEN1cnJlbnRPd25lcjtcbnZhciBSRVNFUlZFRF9QUk9QUyA9IHtcbiAga2V5OiB0cnVlLFxuICByZWY6IHRydWUsXG4gIF9fc2VsZjogdHJ1ZSxcbiAgX19zb3VyY2U6IHRydWVcbn07XG52YXIgc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd247XG52YXIgc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd247XG52YXIgZGlkV2FybkFib3V0U3RyaW5nUmVmcztcblxue1xuICBkaWRXYXJuQWJvdXRTdHJpbmdSZWZzID0ge307XG59XG5cbmZ1bmN0aW9uIGhhc1ZhbGlkUmVmKGNvbmZpZykge1xuICB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCAncmVmJykpIHtcbiAgICAgIHZhciBnZXR0ZXIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGNvbmZpZywgJ3JlZicpLmdldDtcblxuICAgICAgaWYgKGdldHRlciAmJiBnZXR0ZXIuaXNSZWFjdFdhcm5pbmcpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjb25maWcucmVmICE9PSB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGhhc1ZhbGlkS2V5KGNvbmZpZykge1xuICB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCAna2V5JykpIHtcbiAgICAgIHZhciBnZXR0ZXIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGNvbmZpZywgJ2tleScpLmdldDtcblxuICAgICAgaWYgKGdldHRlciAmJiBnZXR0ZXIuaXNSZWFjdFdhcm5pbmcpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjb25maWcua2V5ICE9PSB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIHdhcm5JZlN0cmluZ1JlZkNhbm5vdEJlQXV0b0NvbnZlcnRlZChjb25maWcsIHNlbGYpIHtcbiAge1xuICAgIGlmICh0eXBlb2YgY29uZmlnLnJlZiA9PT0gJ3N0cmluZycgJiYgUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCAmJiBzZWxmICYmIFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQuc3RhdGVOb2RlICE9PSBzZWxmKSB7XG4gICAgICB2YXIgY29tcG9uZW50TmFtZSA9IGdldENvbXBvbmVudE5hbWVGcm9tVHlwZShSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnR5cGUpO1xuXG4gICAgICBpZiAoIWRpZFdhcm5BYm91dFN0cmluZ1JlZnNbY29tcG9uZW50TmFtZV0pIHtcbiAgICAgICAgZXJyb3IoJ0NvbXBvbmVudCBcIiVzXCIgY29udGFpbnMgdGhlIHN0cmluZyByZWYgXCIlc1wiLiAnICsgJ1N1cHBvcnQgZm9yIHN0cmluZyByZWZzIHdpbGwgYmUgcmVtb3ZlZCBpbiBhIGZ1dHVyZSBtYWpvciByZWxlYXNlLiAnICsgJ1RoaXMgY2FzZSBjYW5ub3QgYmUgYXV0b21hdGljYWxseSBjb252ZXJ0ZWQgdG8gYW4gYXJyb3cgZnVuY3Rpb24uICcgKyAnV2UgYXNrIHlvdSB0byBtYW51YWxseSBmaXggdGhpcyBjYXNlIGJ5IHVzaW5nIHVzZVJlZigpIG9yIGNyZWF0ZVJlZigpIGluc3RlYWQuICcgKyAnTGVhcm4gbW9yZSBhYm91dCB1c2luZyByZWZzIHNhZmVseSBoZXJlOiAnICsgJ2h0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9zdHJpY3QtbW9kZS1zdHJpbmctcmVmJywgZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQudHlwZSksIGNvbmZpZy5yZWYpO1xuXG4gICAgICAgIGRpZFdhcm5BYm91dFN0cmluZ1JlZnNbY29tcG9uZW50TmFtZV0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBkZWZpbmVLZXlQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpIHtcbiAge1xuICAgIHZhciB3YXJuQWJvdXRBY2Nlc3NpbmdLZXkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoIXNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duKSB7XG4gICAgICAgIHNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duID0gdHJ1ZTtcblxuICAgICAgICBlcnJvcignJXM6IGBrZXlgIGlzIG5vdCBhIHByb3AuIFRyeWluZyB0byBhY2Nlc3MgaXQgd2lsbCByZXN1bHQgJyArICdpbiBgdW5kZWZpbmVkYCBiZWluZyByZXR1cm5lZC4gSWYgeW91IG5lZWQgdG8gYWNjZXNzIHRoZSBzYW1lICcgKyAndmFsdWUgd2l0aGluIHRoZSBjaGlsZCBjb21wb25lbnQsIHlvdSBzaG91bGQgcGFzcyBpdCBhcyBhIGRpZmZlcmVudCAnICsgJ3Byb3AuIChodHRwczovL3JlYWN0anMub3JnL2xpbmsvc3BlY2lhbC1wcm9wcyknLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHdhcm5BYm91dEFjY2Vzc2luZ0tleS5pc1JlYWN0V2FybmluZyA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3BzLCAna2V5Jywge1xuICAgICAgZ2V0OiB3YXJuQWJvdXRBY2Nlc3NpbmdLZXksXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkZWZpbmVSZWZQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpIHtcbiAge1xuICAgIHZhciB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoIXNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duKSB7XG4gICAgICAgIHNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duID0gdHJ1ZTtcblxuICAgICAgICBlcnJvcignJXM6IGByZWZgIGlzIG5vdCBhIHByb3AuIFRyeWluZyB0byBhY2Nlc3MgaXQgd2lsbCByZXN1bHQgJyArICdpbiBgdW5kZWZpbmVkYCBiZWluZyByZXR1cm5lZC4gSWYgeW91IG5lZWQgdG8gYWNjZXNzIHRoZSBzYW1lICcgKyAndmFsdWUgd2l0aGluIHRoZSBjaGlsZCBjb21wb25lbnQsIHlvdSBzaG91bGQgcGFzcyBpdCBhcyBhIGRpZmZlcmVudCAnICsgJ3Byb3AuIChodHRwczovL3JlYWN0anMub3JnL2xpbmsvc3BlY2lhbC1wcm9wcyknLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHdhcm5BYm91dEFjY2Vzc2luZ1JlZi5pc1JlYWN0V2FybmluZyA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3BzLCAncmVmJywge1xuICAgICAgZ2V0OiB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgfVxufVxuLyoqXG4gKiBGYWN0b3J5IG1ldGhvZCB0byBjcmVhdGUgYSBuZXcgUmVhY3QgZWxlbWVudC4gVGhpcyBubyBsb25nZXIgYWRoZXJlcyB0b1xuICogdGhlIGNsYXNzIHBhdHRlcm4sIHNvIGRvIG5vdCB1c2UgbmV3IHRvIGNhbGwgaXQuIEFsc28sIGluc3RhbmNlb2YgY2hlY2tcbiAqIHdpbGwgbm90IHdvcmsuIEluc3RlYWQgdGVzdCAkJHR5cGVvZiBmaWVsZCBhZ2FpbnN0IFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKSB0byBjaGVja1xuICogaWYgc29tZXRoaW5nIGlzIGEgUmVhY3QgRWxlbWVudC5cbiAqXG4gKiBAcGFyYW0geyp9IHR5cGVcbiAqIEBwYXJhbSB7Kn0gcHJvcHNcbiAqIEBwYXJhbSB7Kn0ga2V5XG4gKiBAcGFyYW0ge3N0cmluZ3xvYmplY3R9IHJlZlxuICogQHBhcmFtIHsqfSBvd25lclxuICogQHBhcmFtIHsqfSBzZWxmIEEgKnRlbXBvcmFyeSogaGVscGVyIHRvIGRldGVjdCBwbGFjZXMgd2hlcmUgYHRoaXNgIGlzXG4gKiBkaWZmZXJlbnQgZnJvbSB0aGUgYG93bmVyYCB3aGVuIFJlYWN0LmNyZWF0ZUVsZW1lbnQgaXMgY2FsbGVkLCBzbyB0aGF0IHdlXG4gKiBjYW4gd2Fybi4gV2Ugd2FudCB0byBnZXQgcmlkIG9mIG93bmVyIGFuZCByZXBsYWNlIHN0cmluZyBgcmVmYHMgd2l0aCBhcnJvd1xuICogZnVuY3Rpb25zLCBhbmQgYXMgbG9uZyBhcyBgdGhpc2AgYW5kIG93bmVyIGFyZSB0aGUgc2FtZSwgdGhlcmUgd2lsbCBiZSBub1xuICogY2hhbmdlIGluIGJlaGF2aW9yLlxuICogQHBhcmFtIHsqfSBzb3VyY2UgQW4gYW5ub3RhdGlvbiBvYmplY3QgKGFkZGVkIGJ5IGEgdHJhbnNwaWxlciBvciBvdGhlcndpc2UpXG4gKiBpbmRpY2F0aW5nIGZpbGVuYW1lLCBsaW5lIG51bWJlciwgYW5kL29yIG90aGVyIGluZm9ybWF0aW9uLlxuICogQGludGVybmFsXG4gKi9cblxuXG52YXIgUmVhY3RFbGVtZW50ID0gZnVuY3Rpb24gKHR5cGUsIGtleSwgcmVmLCBzZWxmLCBzb3VyY2UsIG93bmVyLCBwcm9wcykge1xuICB2YXIgZWxlbWVudCA9IHtcbiAgICAvLyBUaGlzIHRhZyBhbGxvd3MgdXMgdG8gdW5pcXVlbHkgaWRlbnRpZnkgdGhpcyBhcyBhIFJlYWN0IEVsZW1lbnRcbiAgICAkJHR5cGVvZjogUkVBQ1RfRUxFTUVOVF9UWVBFLFxuICAgIC8vIEJ1aWx0LWluIHByb3BlcnRpZXMgdGhhdCBiZWxvbmcgb24gdGhlIGVsZW1lbnRcbiAgICB0eXBlOiB0eXBlLFxuICAgIGtleToga2V5LFxuICAgIHJlZjogcmVmLFxuICAgIHByb3BzOiBwcm9wcyxcbiAgICAvLyBSZWNvcmQgdGhlIGNvbXBvbmVudCByZXNwb25zaWJsZSBmb3IgY3JlYXRpbmcgdGhpcyBlbGVtZW50LlxuICAgIF9vd25lcjogb3duZXJcbiAgfTtcblxuICB7XG4gICAgLy8gVGhlIHZhbGlkYXRpb24gZmxhZyBpcyBjdXJyZW50bHkgbXV0YXRpdmUuIFdlIHB1dCBpdCBvblxuICAgIC8vIGFuIGV4dGVybmFsIGJhY2tpbmcgc3RvcmUgc28gdGhhdCB3ZSBjYW4gZnJlZXplIHRoZSB3aG9sZSBvYmplY3QuXG4gICAgLy8gVGhpcyBjYW4gYmUgcmVwbGFjZWQgd2l0aCBhIFdlYWtNYXAgb25jZSB0aGV5IGFyZSBpbXBsZW1lbnRlZCBpblxuICAgIC8vIGNvbW1vbmx5IHVzZWQgZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnRzLlxuICAgIGVsZW1lbnQuX3N0b3JlID0ge307IC8vIFRvIG1ha2UgY29tcGFyaW5nIFJlYWN0RWxlbWVudHMgZWFzaWVyIGZvciB0ZXN0aW5nIHB1cnBvc2VzLCB3ZSBtYWtlXG4gICAgLy8gdGhlIHZhbGlkYXRpb24gZmxhZyBub24tZW51bWVyYWJsZSAod2hlcmUgcG9zc2libGUsIHdoaWNoIHNob3VsZFxuICAgIC8vIGluY2x1ZGUgZXZlcnkgZW52aXJvbm1lbnQgd2UgcnVuIHRlc3RzIGluKSwgc28gdGhlIHRlc3QgZnJhbWV3b3JrXG4gICAgLy8gaWdub3JlcyBpdC5cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50Ll9zdG9yZSwgJ3ZhbGlkYXRlZCcsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgdmFsdWU6IGZhbHNlXG4gICAgfSk7IC8vIHNlbGYgYW5kIHNvdXJjZSBhcmUgREVWIG9ubHkgcHJvcGVydGllcy5cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50LCAnX3NlbGYnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICB2YWx1ZTogc2VsZlxuICAgIH0pOyAvLyBUd28gZWxlbWVudHMgY3JlYXRlZCBpbiB0d28gZGlmZmVyZW50IHBsYWNlcyBzaG91bGQgYmUgY29uc2lkZXJlZFxuICAgIC8vIGVxdWFsIGZvciB0ZXN0aW5nIHB1cnBvc2VzIGFuZCB0aGVyZWZvcmUgd2UgaGlkZSBpdCBmcm9tIGVudW1lcmF0aW9uLlxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQsICdfc291cmNlJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgdmFsdWU6IHNvdXJjZVxuICAgIH0pO1xuXG4gICAgaWYgKE9iamVjdC5mcmVlemUpIHtcbiAgICAgIE9iamVjdC5mcmVlemUoZWxlbWVudC5wcm9wcyk7XG4gICAgICBPYmplY3QuZnJlZXplKGVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlbGVtZW50O1xufTtcbi8qKlxuICogaHR0cHM6Ly9naXRodWIuY29tL3JlYWN0anMvcmZjcy9wdWxsLzEwN1xuICogQHBhcmFtIHsqfSB0eXBlXG4gKiBAcGFyYW0ge29iamVjdH0gcHJvcHNcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAqL1xuXG5mdW5jdGlvbiBqc3hERVYodHlwZSwgY29uZmlnLCBtYXliZUtleSwgc291cmNlLCBzZWxmKSB7XG4gIHtcbiAgICB2YXIgcHJvcE5hbWU7IC8vIFJlc2VydmVkIG5hbWVzIGFyZSBleHRyYWN0ZWRcblxuICAgIHZhciBwcm9wcyA9IHt9O1xuICAgIHZhciBrZXkgPSBudWxsO1xuICAgIHZhciByZWYgPSBudWxsOyAvLyBDdXJyZW50bHksIGtleSBjYW4gYmUgc3ByZWFkIGluIGFzIGEgcHJvcC4gVGhpcyBjYXVzZXMgYSBwb3RlbnRpYWxcbiAgICAvLyBpc3N1ZSBpZiBrZXkgaXMgYWxzbyBleHBsaWNpdGx5IGRlY2xhcmVkIChpZS4gPGRpdiB7Li4ucHJvcHN9IGtleT1cIkhpXCIgLz5cbiAgICAvLyBvciA8ZGl2IGtleT1cIkhpXCIgey4uLnByb3BzfSAvPiApLiBXZSB3YW50IHRvIGRlcHJlY2F0ZSBrZXkgc3ByZWFkLFxuICAgIC8vIGJ1dCBhcyBhbiBpbnRlcm1lZGlhcnkgc3RlcCwgd2Ugd2lsbCB1c2UganN4REVWIGZvciBldmVyeXRoaW5nIGV4Y2VwdFxuICAgIC8vIDxkaXYgey4uLnByb3BzfSBrZXk9XCJIaVwiIC8+LCBiZWNhdXNlIHdlIGFyZW4ndCBjdXJyZW50bHkgYWJsZSB0byB0ZWxsIGlmXG4gICAgLy8ga2V5IGlzIGV4cGxpY2l0bHkgZGVjbGFyZWQgdG8gYmUgdW5kZWZpbmVkIG9yIG5vdC5cblxuICAgIGlmIChtYXliZUtleSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBrZXkgPSAnJyArIG1heWJlS2V5O1xuICAgIH1cblxuICAgIGlmIChoYXNWYWxpZEtleShjb25maWcpKSB7XG4gICAgICBrZXkgPSAnJyArIGNvbmZpZy5rZXk7XG4gICAgfVxuXG4gICAgaWYgKGhhc1ZhbGlkUmVmKGNvbmZpZykpIHtcbiAgICAgIHJlZiA9IGNvbmZpZy5yZWY7XG4gICAgICB3YXJuSWZTdHJpbmdSZWZDYW5ub3RCZUF1dG9Db252ZXJ0ZWQoY29uZmlnLCBzZWxmKTtcbiAgICB9IC8vIFJlbWFpbmluZyBwcm9wZXJ0aWVzIGFyZSBhZGRlZCB0byBhIG5ldyBwcm9wcyBvYmplY3RcblxuXG4gICAgZm9yIChwcm9wTmFtZSBpbiBjb25maWcpIHtcbiAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgcHJvcE5hbWUpICYmICFSRVNFUlZFRF9QUk9QUy5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkpIHtcbiAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gY29uZmlnW3Byb3BOYW1lXTtcbiAgICAgIH1cbiAgICB9IC8vIFJlc29sdmUgZGVmYXVsdCBwcm9wc1xuXG5cbiAgICBpZiAodHlwZSAmJiB0eXBlLmRlZmF1bHRQcm9wcykge1xuICAgICAgdmFyIGRlZmF1bHRQcm9wcyA9IHR5cGUuZGVmYXVsdFByb3BzO1xuXG4gICAgICBmb3IgKHByb3BOYW1lIGluIGRlZmF1bHRQcm9wcykge1xuICAgICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBkZWZhdWx0UHJvcHNbcHJvcE5hbWVdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGtleSB8fCByZWYpIHtcbiAgICAgIHZhciBkaXNwbGF5TmFtZSA9IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nID8gdHlwZS5kaXNwbGF5TmFtZSB8fCB0eXBlLm5hbWUgfHwgJ1Vua25vd24nIDogdHlwZTtcblxuICAgICAgaWYgKGtleSkge1xuICAgICAgICBkZWZpbmVLZXlQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVmKSB7XG4gICAgICAgIGRlZmluZVJlZlByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIFJlYWN0RWxlbWVudCh0eXBlLCBrZXksIHJlZiwgc2VsZiwgc291cmNlLCBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LCBwcm9wcyk7XG4gIH1cbn1cblxudmFyIFJlYWN0Q3VycmVudE93bmVyJDEgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdEN1cnJlbnRPd25lcjtcbnZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lJDEgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lO1xuXG5mdW5jdGlvbiBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGVsZW1lbnQpIHtcbiAge1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICB2YXIgb3duZXIgPSBlbGVtZW50Ll9vd25lcjtcbiAgICAgIHZhciBzdGFjayA9IGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVihlbGVtZW50LnR5cGUsIGVsZW1lbnQuX3NvdXJjZSwgb3duZXIgPyBvd25lci50eXBlIDogbnVsbCk7XG4gICAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lJDEuc2V0RXh0cmFTdGFja0ZyYW1lKHN0YWNrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQxLnNldEV4dHJhU3RhY2tGcmFtZShudWxsKTtcbiAgICB9XG4gIH1cbn1cblxudmFyIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duO1xuXG57XG4gIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duID0gZmFsc2U7XG59XG4vKipcbiAqIFZlcmlmaWVzIHRoZSBvYmplY3QgaXMgYSBSZWFjdEVsZW1lbnQuXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI2lzdmFsaWRlbGVtZW50XG4gKiBAcGFyYW0gez9vYmplY3R9IG9iamVjdFxuICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiBgb2JqZWN0YCBpcyBhIFJlYWN0RWxlbWVudC5cbiAqIEBmaW5hbFxuICovXG5cblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnQob2JqZWN0KSB7XG4gIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsICYmIG9iamVjdC4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpIHtcbiAge1xuICAgIGlmIChSZWFjdEN1cnJlbnRPd25lciQxLmN1cnJlbnQpIHtcbiAgICAgIHZhciBuYW1lID0gZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKFJlYWN0Q3VycmVudE93bmVyJDEuY3VycmVudC50eXBlKTtcblxuICAgICAgaWYgKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuICdcXG5cXG5DaGVjayB0aGUgcmVuZGVyIG1ldGhvZCBvZiBgJyArIG5hbWUgKyAnYC4nO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAnJztcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bShzb3VyY2UpIHtcbiAge1xuICAgIGlmIChzb3VyY2UgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdmFyIGZpbGVOYW1lID0gc291cmNlLmZpbGVOYW1lLnJlcGxhY2UoL14uKltcXFxcXFwvXS8sICcnKTtcbiAgICAgIHZhciBsaW5lTnVtYmVyID0gc291cmNlLmxpbmVOdW1iZXI7XG4gICAgICByZXR1cm4gJ1xcblxcbkNoZWNrIHlvdXIgY29kZSBhdCAnICsgZmlsZU5hbWUgKyAnOicgKyBsaW5lTnVtYmVyICsgJy4nO1xuICAgIH1cblxuICAgIHJldHVybiAnJztcbiAgfVxufVxuLyoqXG4gKiBXYXJuIGlmIHRoZXJlJ3Mgbm8ga2V5IGV4cGxpY2l0bHkgc2V0IG9uIGR5bmFtaWMgYXJyYXlzIG9mIGNoaWxkcmVuIG9yXG4gKiBvYmplY3Qga2V5cyBhcmUgbm90IHZhbGlkLiBUaGlzIGFsbG93cyB1cyB0byBrZWVwIHRyYWNrIG9mIGNoaWxkcmVuIGJldHdlZW5cbiAqIHVwZGF0ZXMuXG4gKi9cblxuXG52YXIgb3duZXJIYXNLZXlVc2VXYXJuaW5nID0ge307XG5cbmZ1bmN0aW9uIGdldEN1cnJlbnRDb21wb25lbnRFcnJvckluZm8ocGFyZW50VHlwZSkge1xuICB7XG4gICAgdmFyIGluZm8gPSBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKTtcblxuICAgIGlmICghaW5mbykge1xuICAgICAgdmFyIHBhcmVudE5hbWUgPSB0eXBlb2YgcGFyZW50VHlwZSA9PT0gJ3N0cmluZycgPyBwYXJlbnRUeXBlIDogcGFyZW50VHlwZS5kaXNwbGF5TmFtZSB8fCBwYXJlbnRUeXBlLm5hbWU7XG5cbiAgICAgIGlmIChwYXJlbnROYW1lKSB7XG4gICAgICAgIGluZm8gPSBcIlxcblxcbkNoZWNrIHRoZSB0b3AtbGV2ZWwgcmVuZGVyIGNhbGwgdXNpbmcgPFwiICsgcGFyZW50TmFtZSArIFwiPi5cIjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaW5mbztcbiAgfVxufVxuLyoqXG4gKiBXYXJuIGlmIHRoZSBlbGVtZW50IGRvZXNuJ3QgaGF2ZSBhbiBleHBsaWNpdCBrZXkgYXNzaWduZWQgdG8gaXQuXG4gKiBUaGlzIGVsZW1lbnQgaXMgaW4gYW4gYXJyYXkuIFRoZSBhcnJheSBjb3VsZCBncm93IGFuZCBzaHJpbmsgb3IgYmVcbiAqIHJlb3JkZXJlZC4gQWxsIGNoaWxkcmVuIHRoYXQgaGF2ZW4ndCBhbHJlYWR5IGJlZW4gdmFsaWRhdGVkIGFyZSByZXF1aXJlZCB0b1xuICogaGF2ZSBhIFwia2V5XCIgcHJvcGVydHkgYXNzaWduZWQgdG8gaXQuIEVycm9yIHN0YXR1c2VzIGFyZSBjYWNoZWQgc28gYSB3YXJuaW5nXG4gKiB3aWxsIG9ubHkgYmUgc2hvd24gb25jZS5cbiAqXG4gKiBAaW50ZXJuYWxcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBlbGVtZW50IEVsZW1lbnQgdGhhdCByZXF1aXJlcyBhIGtleS5cbiAqIEBwYXJhbSB7Kn0gcGFyZW50VHlwZSBlbGVtZW50J3MgcGFyZW50J3MgdHlwZS5cbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlRXhwbGljaXRLZXkoZWxlbWVudCwgcGFyZW50VHlwZSkge1xuICB7XG4gICAgaWYgKCFlbGVtZW50Ll9zdG9yZSB8fCBlbGVtZW50Ll9zdG9yZS52YWxpZGF0ZWQgfHwgZWxlbWVudC5rZXkgIT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGVsZW1lbnQuX3N0b3JlLnZhbGlkYXRlZCA9IHRydWU7XG4gICAgdmFyIGN1cnJlbnRDb21wb25lbnRFcnJvckluZm8gPSBnZXRDdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvKHBhcmVudFR5cGUpO1xuXG4gICAgaWYgKG93bmVySGFzS2V5VXNlV2FybmluZ1tjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvXSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIG93bmVySGFzS2V5VXNlV2FybmluZ1tjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvXSA9IHRydWU7IC8vIFVzdWFsbHkgdGhlIGN1cnJlbnQgb3duZXIgaXMgdGhlIG9mZmVuZGVyLCBidXQgaWYgaXQgYWNjZXB0cyBjaGlsZHJlbiBhcyBhXG4gICAgLy8gcHJvcGVydHksIGl0IG1heSBiZSB0aGUgY3JlYXRvciBvZiB0aGUgY2hpbGQgdGhhdCdzIHJlc3BvbnNpYmxlIGZvclxuICAgIC8vIGFzc2lnbmluZyBpdCBhIGtleS5cblxuICAgIHZhciBjaGlsZE93bmVyID0gJyc7XG5cbiAgICBpZiAoZWxlbWVudCAmJiBlbGVtZW50Ll9vd25lciAmJiBlbGVtZW50Ll9vd25lciAhPT0gUmVhY3RDdXJyZW50T3duZXIkMS5jdXJyZW50KSB7XG4gICAgICAvLyBHaXZlIHRoZSBjb21wb25lbnQgdGhhdCBvcmlnaW5hbGx5IGNyZWF0ZWQgdGhpcyBjaGlsZC5cbiAgICAgIGNoaWxkT3duZXIgPSBcIiBJdCB3YXMgcGFzc2VkIGEgY2hpbGQgZnJvbSBcIiArIGdldENvbXBvbmVudE5hbWVGcm9tVHlwZShlbGVtZW50Ll9vd25lci50eXBlKSArIFwiLlwiO1xuICAgIH1cblxuICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZWxlbWVudCk7XG5cbiAgICBlcnJvcignRWFjaCBjaGlsZCBpbiBhIGxpc3Qgc2hvdWxkIGhhdmUgYSB1bmlxdWUgXCJrZXlcIiBwcm9wLicgKyAnJXMlcyBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3dhcm5pbmcta2V5cyBmb3IgbW9yZSBpbmZvcm1hdGlvbi4nLCBjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvLCBjaGlsZE93bmVyKTtcblxuICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEobnVsbCk7XG4gIH1cbn1cbi8qKlxuICogRW5zdXJlIHRoYXQgZXZlcnkgZWxlbWVudCBlaXRoZXIgaXMgcGFzc2VkIGluIGEgc3RhdGljIGxvY2F0aW9uLCBpbiBhblxuICogYXJyYXkgd2l0aCBhbiBleHBsaWNpdCBrZXlzIHByb3BlcnR5IGRlZmluZWQsIG9yIGluIGFuIG9iamVjdCBsaXRlcmFsXG4gKiB3aXRoIHZhbGlkIGtleSBwcm9wZXJ0eS5cbiAqXG4gKiBAaW50ZXJuYWxcbiAqIEBwYXJhbSB7UmVhY3ROb2RlfSBub2RlIFN0YXRpY2FsbHkgcGFzc2VkIGNoaWxkIG9mIGFueSB0eXBlLlxuICogQHBhcmFtIHsqfSBwYXJlbnRUeXBlIG5vZGUncyBwYXJlbnQncyB0eXBlLlxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVDaGlsZEtleXMobm9kZSwgcGFyZW50VHlwZSkge1xuICB7XG4gICAgaWYgKHR5cGVvZiBub2RlICE9PSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChpc0FycmF5KG5vZGUpKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGNoaWxkID0gbm9kZVtpXTtcblxuICAgICAgICBpZiAoaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSB7XG4gICAgICAgICAgdmFsaWRhdGVFeHBsaWNpdEtleShjaGlsZCwgcGFyZW50VHlwZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGlzVmFsaWRFbGVtZW50KG5vZGUpKSB7XG4gICAgICAvLyBUaGlzIGVsZW1lbnQgd2FzIHBhc3NlZCBpbiBhIHZhbGlkIGxvY2F0aW9uLlxuICAgICAgaWYgKG5vZGUuX3N0b3JlKSB7XG4gICAgICAgIG5vZGUuX3N0b3JlLnZhbGlkYXRlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChub2RlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4obm9kZSk7XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlcmF0b3JGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAvLyBFbnRyeSBpdGVyYXRvcnMgdXNlZCB0byBwcm92aWRlIGltcGxpY2l0IGtleXMsXG4gICAgICAgIC8vIGJ1dCBub3cgd2UgcHJpbnQgYSBzZXBhcmF0ZSB3YXJuaW5nIGZvciB0aGVtIGxhdGVyLlxuICAgICAgICBpZiAoaXRlcmF0b3JGbiAhPT0gbm9kZS5lbnRyaWVzKSB7XG4gICAgICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKG5vZGUpO1xuICAgICAgICAgIHZhciBzdGVwO1xuXG4gICAgICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICAgICAgaWYgKGlzVmFsaWRFbGVtZW50KHN0ZXAudmFsdWUpKSB7XG4gICAgICAgICAgICAgIHZhbGlkYXRlRXhwbGljaXRLZXkoc3RlcC52YWx1ZSwgcGFyZW50VHlwZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4vKipcbiAqIEdpdmVuIGFuIGVsZW1lbnQsIHZhbGlkYXRlIHRoYXQgaXRzIHByb3BzIGZvbGxvdyB0aGUgcHJvcFR5cGVzIGRlZmluaXRpb24sXG4gKiBwcm92aWRlZCBieSB0aGUgdHlwZS5cbiAqXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZWxlbWVudFxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVQcm9wVHlwZXMoZWxlbWVudCkge1xuICB7XG4gICAgdmFyIHR5cGUgPSBlbGVtZW50LnR5cGU7XG5cbiAgICBpZiAodHlwZSA9PT0gbnVsbCB8fCB0eXBlID09PSB1bmRlZmluZWQgfHwgdHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHByb3BUeXBlcztcblxuICAgIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcHJvcFR5cGVzID0gdHlwZS5wcm9wVHlwZXM7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgLy8gTm90ZTogTWVtbyBvbmx5IGNoZWNrcyBvdXRlciBwcm9wcyBoZXJlLlxuICAgIC8vIElubmVyIHByb3BzIGFyZSBjaGVja2VkIGluIHRoZSByZWNvbmNpbGVyLlxuICAgIHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSkpIHtcbiAgICAgIHByb3BUeXBlcyA9IHR5cGUucHJvcFR5cGVzO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHByb3BUeXBlcykge1xuICAgICAgLy8gSW50ZW50aW9uYWxseSBpbnNpZGUgdG8gYXZvaWQgdHJpZ2dlcmluZyBsYXp5IGluaXRpYWxpemVyczpcbiAgICAgIHZhciBuYW1lID0gZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKHR5cGUpO1xuICAgICAgY2hlY2tQcm9wVHlwZXMocHJvcFR5cGVzLCBlbGVtZW50LnByb3BzLCAncHJvcCcsIG5hbWUsIGVsZW1lbnQpO1xuICAgIH0gZWxzZSBpZiAodHlwZS5Qcm9wVHlwZXMgIT09IHVuZGVmaW5lZCAmJiAhcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24pIHtcbiAgICAgIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duID0gdHJ1ZTsgLy8gSW50ZW50aW9uYWxseSBpbnNpZGUgdG8gYXZvaWQgdHJpZ2dlcmluZyBsYXp5IGluaXRpYWxpemVyczpcblxuICAgICAgdmFyIF9uYW1lID0gZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKHR5cGUpO1xuXG4gICAgICBlcnJvcignQ29tcG9uZW50ICVzIGRlY2xhcmVkIGBQcm9wVHlwZXNgIGluc3RlYWQgb2YgYHByb3BUeXBlc2AuIERpZCB5b3UgbWlzc3BlbGwgdGhlIHByb3BlcnR5IGFzc2lnbm1lbnQ/JywgX25hbWUgfHwgJ1Vua25vd24nKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHR5cGUuZ2V0RGVmYXVsdFByb3BzID09PSAnZnVuY3Rpb24nICYmICF0eXBlLmdldERlZmF1bHRQcm9wcy5pc1JlYWN0Q2xhc3NBcHByb3ZlZCkge1xuICAgICAgZXJyb3IoJ2dldERlZmF1bHRQcm9wcyBpcyBvbmx5IHVzZWQgb24gY2xhc3NpYyBSZWFjdC5jcmVhdGVDbGFzcyAnICsgJ2RlZmluaXRpb25zLiBVc2UgYSBzdGF0aWMgcHJvcGVydHkgbmFtZWQgYGRlZmF1bHRQcm9wc2AgaW5zdGVhZC4nKTtcbiAgICB9XG4gIH1cbn1cbi8qKlxuICogR2l2ZW4gYSBmcmFnbWVudCwgdmFsaWRhdGUgdGhhdCBpdCBjYW4gb25seSBiZSBwcm92aWRlZCB3aXRoIGZyYWdtZW50IHByb3BzXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZnJhZ21lbnRcbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlRnJhZ21lbnRQcm9wcyhmcmFnbWVudCkge1xuICB7XG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhmcmFnbWVudC5wcm9wcyk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuXG4gICAgICBpZiAoa2V5ICE9PSAnY2hpbGRyZW4nICYmIGtleSAhPT0gJ2tleScpIHtcbiAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShmcmFnbWVudCk7XG5cbiAgICAgICAgZXJyb3IoJ0ludmFsaWQgcHJvcCBgJXNgIHN1cHBsaWVkIHRvIGBSZWFjdC5GcmFnbWVudGAuICcgKyAnUmVhY3QuRnJhZ21lbnQgY2FuIG9ubHkgaGF2ZSBga2V5YCBhbmQgYGNoaWxkcmVuYCBwcm9wcy4nLCBrZXkpO1xuXG4gICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEobnVsbCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChmcmFnbWVudC5yZWYgIT09IG51bGwpIHtcbiAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZnJhZ21lbnQpO1xuXG4gICAgICBlcnJvcignSW52YWxpZCBhdHRyaWJ1dGUgYHJlZmAgc3VwcGxpZWQgdG8gYFJlYWN0LkZyYWdtZW50YC4nKTtcblxuICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShudWxsKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24ganN4V2l0aFZhbGlkYXRpb24odHlwZSwgcHJvcHMsIGtleSwgaXNTdGF0aWNDaGlsZHJlbiwgc291cmNlLCBzZWxmKSB7XG4gIHtcbiAgICB2YXIgdmFsaWRUeXBlID0gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpOyAvLyBXZSB3YXJuIGluIHRoaXMgY2FzZSBidXQgZG9uJ3QgdGhyb3cuIFdlIGV4cGVjdCB0aGUgZWxlbWVudCBjcmVhdGlvbiB0b1xuICAgIC8vIHN1Y2NlZWQgYW5kIHRoZXJlIHdpbGwgbGlrZWx5IGJlIGVycm9ycyBpbiByZW5kZXIuXG5cbiAgICBpZiAoIXZhbGlkVHlwZSkge1xuICAgICAgdmFyIGluZm8gPSAnJztcblxuICAgICAgaWYgKHR5cGUgPT09IHVuZGVmaW5lZCB8fCB0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCAmJiBPYmplY3Qua2V5cyh0eXBlKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgaW5mbyArPSAnIFlvdSBsaWtlbHkgZm9yZ290IHRvIGV4cG9ydCB5b3VyIGNvbXBvbmVudCBmcm9tIHRoZSBmaWxlICcgKyBcIml0J3MgZGVmaW5lZCBpbiwgb3IgeW91IG1pZ2h0IGhhdmUgbWl4ZWQgdXAgZGVmYXVsdCBhbmQgbmFtZWQgaW1wb3J0cy5cIjtcbiAgICAgIH1cblxuICAgICAgdmFyIHNvdXJjZUluZm8gPSBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bShzb3VyY2UpO1xuXG4gICAgICBpZiAoc291cmNlSW5mbykge1xuICAgICAgICBpbmZvICs9IHNvdXJjZUluZm87XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbmZvICs9IGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpO1xuICAgICAgfVxuXG4gICAgICB2YXIgdHlwZVN0cmluZztcblxuICAgICAgaWYgKHR5cGUgPT09IG51bGwpIHtcbiAgICAgICAgdHlwZVN0cmluZyA9ICdudWxsJztcbiAgICAgIH0gZWxzZSBpZiAoaXNBcnJheSh0eXBlKSkge1xuICAgICAgICB0eXBlU3RyaW5nID0gJ2FycmF5JztcbiAgICAgIH0gZWxzZSBpZiAodHlwZSAhPT0gdW5kZWZpbmVkICYmIHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRSkge1xuICAgICAgICB0eXBlU3RyaW5nID0gXCI8XCIgKyAoZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKHR5cGUudHlwZSkgfHwgJ1Vua25vd24nKSArIFwiIC8+XCI7XG4gICAgICAgIGluZm8gPSAnIERpZCB5b3UgYWNjaWRlbnRhbGx5IGV4cG9ydCBhIEpTWCBsaXRlcmFsIGluc3RlYWQgb2YgYSBjb21wb25lbnQ/JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHR5cGVTdHJpbmcgPSB0eXBlb2YgdHlwZTtcbiAgICAgIH1cblxuICAgICAgZXJyb3IoJ1JlYWN0LmpzeDogdHlwZSBpcyBpbnZhbGlkIC0tIGV4cGVjdGVkIGEgc3RyaW5nIChmb3IgJyArICdidWlsdC1pbiBjb21wb25lbnRzKSBvciBhIGNsYXNzL2Z1bmN0aW9uIChmb3IgY29tcG9zaXRlICcgKyAnY29tcG9uZW50cykgYnV0IGdvdDogJXMuJXMnLCB0eXBlU3RyaW5nLCBpbmZvKTtcbiAgICB9XG5cbiAgICB2YXIgZWxlbWVudCA9IGpzeERFVih0eXBlLCBwcm9wcywga2V5LCBzb3VyY2UsIHNlbGYpOyAvLyBUaGUgcmVzdWx0IGNhbiBiZSBudWxsaXNoIGlmIGEgbW9jayBvciBhIGN1c3RvbSBmdW5jdGlvbiBpcyB1c2VkLlxuICAgIC8vIFRPRE86IERyb3AgdGhpcyB3aGVuIHRoZXNlIGFyZSBubyBsb25nZXIgYWxsb3dlZCBhcyB0aGUgdHlwZSBhcmd1bWVudC5cblxuICAgIGlmIChlbGVtZW50ID09IG51bGwpIHtcbiAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH0gLy8gU2tpcCBrZXkgd2FybmluZyBpZiB0aGUgdHlwZSBpc24ndCB2YWxpZCBzaW5jZSBvdXIga2V5IHZhbGlkYXRpb24gbG9naWNcbiAgICAvLyBkb2Vzbid0IGV4cGVjdCBhIG5vbi1zdHJpbmcvZnVuY3Rpb24gdHlwZSBhbmQgY2FuIHRocm93IGNvbmZ1c2luZyBlcnJvcnMuXG4gICAgLy8gV2UgZG9uJ3Qgd2FudCBleGNlcHRpb24gYmVoYXZpb3IgdG8gZGlmZmVyIGJldHdlZW4gZGV2IGFuZCBwcm9kLlxuICAgIC8vIChSZW5kZXJpbmcgd2lsbCB0aHJvdyB3aXRoIGEgaGVscGZ1bCBtZXNzYWdlIGFuZCBhcyBzb29uIGFzIHRoZSB0eXBlIGlzXG4gICAgLy8gZml4ZWQsIHRoZSBrZXkgd2FybmluZ3Mgd2lsbCBhcHBlYXIuKVxuXG5cbiAgICBpZiAodmFsaWRUeXBlKSB7XG4gICAgICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbjtcblxuICAgICAgaWYgKGNoaWxkcmVuICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKGlzU3RhdGljQ2hpbGRyZW4pIHtcbiAgICAgICAgICBpZiAoaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgdmFsaWRhdGVDaGlsZEtleXMoY2hpbGRyZW5baV0sIHR5cGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoT2JqZWN0LmZyZWV6ZSkge1xuICAgICAgICAgICAgICBPYmplY3QuZnJlZXplKGNoaWxkcmVuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZXJyb3IoJ1JlYWN0LmpzeDogU3RhdGljIGNoaWxkcmVuIHNob3VsZCBhbHdheXMgYmUgYW4gYXJyYXkuICcgKyAnWW91IGFyZSBsaWtlbHkgZXhwbGljaXRseSBjYWxsaW5nIFJlYWN0LmpzeHMgb3IgUmVhY3QuanN4REVWLiAnICsgJ1VzZSB0aGUgQmFiZWwgdHJhbnNmb3JtIGluc3RlYWQuJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhbGlkYXRlQ2hpbGRLZXlzKGNoaWxkcmVuLCB0eXBlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0eXBlID09PSBleHBvcnRzLkZyYWdtZW50KSB7XG4gICAgICB2YWxpZGF0ZUZyYWdtZW50UHJvcHMoZWxlbWVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbGlkYXRlUHJvcFR5cGVzKGVsZW1lbnQpO1xuICAgIH1cblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG59IC8vIFRoZXNlIHR3byBmdW5jdGlvbnMgZXhpc3QgdG8gc3RpbGwgZ2V0IGNoaWxkIHdhcm5pbmdzIGluIGRldlxuXG52YXIganN4REVWJDEgPSAganN4V2l0aFZhbGlkYXRpb24gO1xuXG5leHBvcnRzLmpzeERFViA9IGpzeERFViQxO1xuICB9KSgpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWpzeC1kZXYtcnVudGltZS5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1qc3gtZGV2LXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsImV4cG9ydCAqIGZyb20gJy4vc3JjL0VudW0uanMnXG5leHBvcnQgKiBmcm9tICcuL3NyYy9VdGlsaXR5LmpzJ1xuZXhwb3J0ICogZnJvbSAnLi9zcmMvUGFyc2VyLmpzJ1xuZXhwb3J0ICogZnJvbSAnLi9zcmMvUHJlZml4ZXIuanMnXG5leHBvcnQgKiBmcm9tICcuL3NyYy9Ub2tlbml6ZXIuanMnXG5leHBvcnQgKiBmcm9tICcuL3NyYy9TZXJpYWxpemVyLmpzJ1xuZXhwb3J0ICogZnJvbSAnLi9zcmMvTWlkZGxld2FyZS5qcydcbiIsImV4cG9ydCB2YXIgTVMgPSAnLW1zLSdcbmV4cG9ydCB2YXIgTU9aID0gJy1tb3otJ1xuZXhwb3J0IHZhciBXRUJLSVQgPSAnLXdlYmtpdC0nXG5cbmV4cG9ydCB2YXIgQ09NTUVOVCA9ICdjb21tJ1xuZXhwb3J0IHZhciBSVUxFU0VUID0gJ3J1bGUnXG5leHBvcnQgdmFyIERFQ0xBUkFUSU9OID0gJ2RlY2wnXG5cbmV4cG9ydCB2YXIgUEFHRSA9ICdAcGFnZSdcbmV4cG9ydCB2YXIgTUVESUEgPSAnQG1lZGlhJ1xuZXhwb3J0IHZhciBJTVBPUlQgPSAnQGltcG9ydCdcbmV4cG9ydCB2YXIgQ0hBUlNFVCA9ICdAY2hhcnNldCdcbmV4cG9ydCB2YXIgVklFV1BPUlQgPSAnQHZpZXdwb3J0J1xuZXhwb3J0IHZhciBTVVBQT1JUUyA9ICdAc3VwcG9ydHMnXG5leHBvcnQgdmFyIERPQ1VNRU5UID0gJ0Bkb2N1bWVudCdcbmV4cG9ydCB2YXIgTkFNRVNQQUNFID0gJ0BuYW1lc3BhY2UnXG5leHBvcnQgdmFyIEtFWUZSQU1FUyA9ICdAa2V5ZnJhbWVzJ1xuZXhwb3J0IHZhciBGT05UX0ZBQ0UgPSAnQGZvbnQtZmFjZSdcbmV4cG9ydCB2YXIgQ09VTlRFUl9TVFlMRSA9ICdAY291bnRlci1zdHlsZSdcbmV4cG9ydCB2YXIgRk9OVF9GRUFUVVJFX1ZBTFVFUyA9ICdAZm9udC1mZWF0dXJlLXZhbHVlcydcbiIsImltcG9ydCB7TVMsIE1PWiwgV0VCS0lULCBSVUxFU0VULCBLRVlGUkFNRVMsIERFQ0xBUkFUSU9OfSBmcm9tICcuL0VudW0uanMnXG5pbXBvcnQge21hdGNoLCBjaGFyYXQsIHN1YnN0ciwgc3RybGVuLCBzaXplb2YsIHJlcGxhY2UsIGNvbWJpbmV9IGZyb20gJy4vVXRpbGl0eS5qcydcbmltcG9ydCB7Y29weSwgdG9rZW5pemV9IGZyb20gJy4vVG9rZW5pemVyLmpzJ1xuaW1wb3J0IHtzZXJpYWxpemV9IGZyb20gJy4vU2VyaWFsaXplci5qcydcbmltcG9ydCB7cHJlZml4fSBmcm9tICcuL1ByZWZpeGVyLmpzJ1xuXG4vKipcbiAqIEBwYXJhbSB7ZnVuY3Rpb25bXX0gY29sbGVjdGlvblxuICogQHJldHVybiB7ZnVuY3Rpb259XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtaWRkbGV3YXJlIChjb2xsZWN0aW9uKSB7XG5cdHZhciBsZW5ndGggPSBzaXplb2YoY29sbGVjdGlvbilcblxuXHRyZXR1cm4gZnVuY3Rpb24gKGVsZW1lbnQsIGluZGV4LCBjaGlsZHJlbiwgY2FsbGJhY2spIHtcblx0XHR2YXIgb3V0cHV0ID0gJydcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspXG5cdFx0XHRvdXRwdXQgKz0gY29sbGVjdGlvbltpXShlbGVtZW50LCBpbmRleCwgY2hpbGRyZW4sIGNhbGxiYWNrKSB8fCAnJ1xuXG5cdFx0cmV0dXJuIG91dHB1dFxuXHR9XG59XG5cbi8qKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2tcbiAqIEByZXR1cm4ge2Z1bmN0aW9ufVxuICovXG5leHBvcnQgZnVuY3Rpb24gcnVsZXNoZWV0IChjYWxsYmFjaykge1xuXHRyZXR1cm4gZnVuY3Rpb24gKGVsZW1lbnQpIHtcblx0XHRpZiAoIWVsZW1lbnQucm9vdClcblx0XHRcdGlmIChlbGVtZW50ID0gZWxlbWVudC5yZXR1cm4pXG5cdFx0XHRcdGNhbGxiYWNrKGVsZW1lbnQpXG5cdH1cbn1cblxuLyoqXG4gKiBAcGFyYW0ge29iamVjdH0gZWxlbWVudFxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XG4gKiBAcGFyYW0ge29iamVjdFtdfSBjaGlsZHJlblxuICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2tcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHByZWZpeGVyIChlbGVtZW50LCBpbmRleCwgY2hpbGRyZW4sIGNhbGxiYWNrKSB7XG5cdGlmICghZWxlbWVudC5yZXR1cm4pXG5cdFx0c3dpdGNoIChlbGVtZW50LnR5cGUpIHtcblx0XHRcdGNhc2UgREVDTEFSQVRJT046IGVsZW1lbnQucmV0dXJuID0gcHJlZml4KGVsZW1lbnQudmFsdWUsIGVsZW1lbnQubGVuZ3RoKVxuXHRcdFx0XHRicmVha1xuXHRcdFx0Y2FzZSBLRVlGUkFNRVM6XG5cdFx0XHRcdHJldHVybiBzZXJpYWxpemUoW2NvcHkocmVwbGFjZShlbGVtZW50LnZhbHVlLCAnQCcsICdAJyArIFdFQktJVCksIGVsZW1lbnQsICcnKV0sIGNhbGxiYWNrKVxuXHRcdFx0Y2FzZSBSVUxFU0VUOlxuXHRcdFx0XHRpZiAoZWxlbWVudC5sZW5ndGgpXG5cdFx0XHRcdFx0cmV0dXJuIGNvbWJpbmUoZWxlbWVudC5wcm9wcywgZnVuY3Rpb24gKHZhbHVlKSB7XG5cdFx0XHRcdFx0XHRzd2l0Y2ggKG1hdGNoKHZhbHVlLCAvKDo6cGxhY1xcdyt8OnJlYWQtXFx3KykvKSkge1xuXHRcdFx0XHRcdFx0XHQvLyA6cmVhZC0ob25seXx3cml0ZSlcblx0XHRcdFx0XHRcdFx0Y2FzZSAnOnJlYWQtb25seSc6IGNhc2UgJzpyZWFkLXdyaXRlJzpcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gc2VyaWFsaXplKFtjb3B5KHJlcGxhY2UodmFsdWUsIC86KHJlYWQtXFx3KykvLCAnOicgKyBNT1ogKyAnJDEnKSwgZWxlbWVudCwgJycpXSwgY2FsbGJhY2spXG5cdFx0XHRcdFx0XHRcdC8vIDpwbGFjZWhvbGRlclxuXHRcdFx0XHRcdFx0XHRjYXNlICc6OnBsYWNlaG9sZGVyJzpcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gc2VyaWFsaXplKFtcblx0XHRcdFx0XHRcdFx0XHRcdGNvcHkocmVwbGFjZSh2YWx1ZSwgLzoocGxhY1xcdyspLywgJzonICsgV0VCS0lUICsgJ2lucHV0LSQxJyksIGVsZW1lbnQsICcnKSxcblx0XHRcdFx0XHRcdFx0XHRcdGNvcHkocmVwbGFjZSh2YWx1ZSwgLzoocGxhY1xcdyspLywgJzonICsgTU9aICsgJyQxJyksIGVsZW1lbnQsICcnKSxcblx0XHRcdFx0XHRcdFx0XHRcdGNvcHkocmVwbGFjZSh2YWx1ZSwgLzoocGxhY1xcdyspLywgTVMgKyAnaW5wdXQtJDEnKSwgZWxlbWVudCwgJycpXG5cdFx0XHRcdFx0XHRcdFx0XSwgY2FsbGJhY2spXG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdHJldHVybiAnJ1xuXHRcdFx0XHRcdH0pXG5cdFx0fVxufVxuXG4vKipcbiAqIEBwYXJhbSB7b2JqZWN0fSBlbGVtZW50XG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcbiAqIEBwYXJhbSB7b2JqZWN0W119IGNoaWxkcmVuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBuYW1lc3BhY2UgKGVsZW1lbnQpIHtcblx0c3dpdGNoIChlbGVtZW50LnR5cGUpIHtcblx0XHRjYXNlIFJVTEVTRVQ6XG5cdFx0XHRlbGVtZW50LnByb3BzID0gZWxlbWVudC5wcm9wcy5tYXAoZnVuY3Rpb24gKHZhbHVlKSB7XG5cdFx0XHRcdHJldHVybiBjb21iaW5lKHRva2VuaXplKHZhbHVlKSwgZnVuY3Rpb24gKHZhbHVlLCBpbmRleCwgY2hpbGRyZW4pIHtcblx0XHRcdFx0XHRzd2l0Y2ggKGNoYXJhdCh2YWx1ZSwgMCkpIHtcblx0XHRcdFx0XHRcdC8vIFxcZlxuXHRcdFx0XHRcdFx0Y2FzZSAxMjpcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHN1YnN0cih2YWx1ZSwgMSwgc3RybGVuKHZhbHVlKSlcblx0XHRcdFx0XHRcdC8vIFxcMCAoICsgPiB+XG5cdFx0XHRcdFx0XHRjYXNlIDA6IGNhc2UgNDA6IGNhc2UgNDM6IGNhc2UgNjI6IGNhc2UgMTI2OlxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gdmFsdWVcblx0XHRcdFx0XHRcdC8vIDpcblx0XHRcdFx0XHRcdGNhc2UgNTg6XG5cdFx0XHRcdFx0XHRcdGlmIChjaGlsZHJlblsrK2luZGV4XSA9PT0gJ2dsb2JhbCcpXG5cdFx0XHRcdFx0XHRcdFx0Y2hpbGRyZW5baW5kZXhdID0gJycsIGNoaWxkcmVuWysraW5kZXhdID0gJ1xcZicgKyBzdWJzdHIoY2hpbGRyZW5baW5kZXhdLCBpbmRleCA9IDEsIC0xKVxuXHRcdFx0XHRcdFx0Ly8gXFxzXG5cdFx0XHRcdFx0XHRjYXNlIDMyOlxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gaW5kZXggPT09IDEgPyAnJyA6IHZhbHVlXG5cdFx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0XHRzd2l0Y2ggKGluZGV4KSB7XG5cdFx0XHRcdFx0XHRcdFx0Y2FzZSAwOiBlbGVtZW50ID0gdmFsdWVcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBzaXplb2YoY2hpbGRyZW4pID4gMSA/ICcnIDogdmFsdWVcblx0XHRcdFx0XHRcdFx0XHRjYXNlIGluZGV4ID0gc2l6ZW9mKGNoaWxkcmVuKSAtIDE6IGNhc2UgMjpcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBpbmRleCA9PT0gMiA/IHZhbHVlICsgZWxlbWVudCArIGVsZW1lbnQgOiB2YWx1ZSArIGVsZW1lbnRcblx0XHRcdFx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHZhbHVlXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pXG5cdFx0XHR9KVxuXHR9XG59XG4iLCJpbXBvcnQge0NPTU1FTlQsIFJVTEVTRVQsIERFQ0xBUkFUSU9OfSBmcm9tICcuL0VudW0uanMnXG5pbXBvcnQge2FicywgdHJpbSwgZnJvbSwgc2l6ZW9mLCBzdHJsZW4sIHN1YnN0ciwgYXBwZW5kLCByZXBsYWNlfSBmcm9tICcuL1V0aWxpdHkuanMnXG5pbXBvcnQge25vZGUsIGNoYXIsIHByZXYsIG5leHQsIHBlZWssIGNhcmV0LCBhbGxvYywgZGVhbGxvYywgZGVsaW1pdCwgd2hpdGVzcGFjZSwgZXNjYXBpbmcsIGlkZW50aWZpZXIsIGNvbW1lbnRlcn0gZnJvbSAnLi9Ub2tlbml6ZXIuanMnXG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKiBAcmV0dXJuIHtvYmplY3RbXX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbXBpbGUgKHZhbHVlKSB7XG5cdHJldHVybiBkZWFsbG9jKHBhcnNlKCcnLCBudWxsLCBudWxsLCBudWxsLCBbJyddLCB2YWx1ZSA9IGFsbG9jKHZhbHVlKSwgMCwgWzBdLCB2YWx1ZSkpXG59XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKiBAcGFyYW0ge29iamVjdH0gcm9vdFxuICogQHBhcmFtIHtvYmplY3Q/fSBwYXJlbnRcbiAqIEBwYXJhbSB7c3RyaW5nW119IHJ1bGVcbiAqIEBwYXJhbSB7c3RyaW5nW119IHJ1bGVzXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBydWxlc2V0c1xuICogQHBhcmFtIHtudW1iZXJbXX0gcHNldWRvXG4gKiBAcGFyYW0ge251bWJlcltdfSBwb2ludHNcbiAqIEBwYXJhbSB7c3RyaW5nW119IGRlY2xhcmF0aW9uc1xuICogQHJldHVybiB7b2JqZWN0fVxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2UgKHZhbHVlLCByb290LCBwYXJlbnQsIHJ1bGUsIHJ1bGVzLCBydWxlc2V0cywgcHNldWRvLCBwb2ludHMsIGRlY2xhcmF0aW9ucykge1xuXHR2YXIgaW5kZXggPSAwXG5cdHZhciBvZmZzZXQgPSAwXG5cdHZhciBsZW5ndGggPSBwc2V1ZG9cblx0dmFyIGF0cnVsZSA9IDBcblx0dmFyIHByb3BlcnR5ID0gMFxuXHR2YXIgcHJldmlvdXMgPSAwXG5cdHZhciB2YXJpYWJsZSA9IDFcblx0dmFyIHNjYW5uaW5nID0gMVxuXHR2YXIgYW1wZXJzYW5kID0gMVxuXHR2YXIgY2hhcmFjdGVyID0gMFxuXHR2YXIgdHlwZSA9ICcnXG5cdHZhciBwcm9wcyA9IHJ1bGVzXG5cdHZhciBjaGlsZHJlbiA9IHJ1bGVzZXRzXG5cdHZhciByZWZlcmVuY2UgPSBydWxlXG5cdHZhciBjaGFyYWN0ZXJzID0gdHlwZVxuXG5cdHdoaWxlIChzY2FubmluZylcblx0XHRzd2l0Y2ggKHByZXZpb3VzID0gY2hhcmFjdGVyLCBjaGFyYWN0ZXIgPSBuZXh0KCkpIHtcblx0XHRcdC8vIFwiICcgWyAoXG5cdFx0XHRjYXNlIDM0OiBjYXNlIDM5OiBjYXNlIDkxOiBjYXNlIDQwOlxuXHRcdFx0XHRjaGFyYWN0ZXJzICs9IGRlbGltaXQoY2hhcmFjdGVyKVxuXHRcdFx0XHRicmVha1xuXHRcdFx0Ly8gXFx0IFxcbiBcXHIgXFxzXG5cdFx0XHRjYXNlIDk6IGNhc2UgMTA6IGNhc2UgMTM6IGNhc2UgMzI6XG5cdFx0XHRcdGNoYXJhY3RlcnMgKz0gd2hpdGVzcGFjZShwcmV2aW91cylcblx0XHRcdFx0YnJlYWtcblx0XHRcdC8vIFxcXG5cdFx0XHRjYXNlIDkyOlxuXHRcdFx0XHRjaGFyYWN0ZXJzICs9IGVzY2FwaW5nKGNhcmV0KCkgLSAxLCA3KVxuXHRcdFx0XHRjb250aW51ZVxuXHRcdFx0Ly8gL1xuXHRcdFx0Y2FzZSA0Nzpcblx0XHRcdFx0c3dpdGNoIChwZWVrKCkpIHtcblx0XHRcdFx0XHRjYXNlIDQyOiBjYXNlIDQ3OlxuXHRcdFx0XHRcdFx0YXBwZW5kKGNvbW1lbnQoY29tbWVudGVyKG5leHQoKSwgY2FyZXQoKSksIHJvb3QsIHBhcmVudCksIGRlY2xhcmF0aW9ucylcblx0XHRcdFx0XHRcdGJyZWFrXG5cdFx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRcdGNoYXJhY3RlcnMgKz0gJy8nXG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWtcblx0XHRcdC8vIHtcblx0XHRcdGNhc2UgMTIzICogdmFyaWFibGU6XG5cdFx0XHRcdHBvaW50c1tpbmRleCsrXSA9IHN0cmxlbihjaGFyYWN0ZXJzKSAqIGFtcGVyc2FuZFxuXHRcdFx0Ly8gfSA7IFxcMFxuXHRcdFx0Y2FzZSAxMjUgKiB2YXJpYWJsZTogY2FzZSA1OTogY2FzZSAwOlxuXHRcdFx0XHRzd2l0Y2ggKGNoYXJhY3Rlcikge1xuXHRcdFx0XHRcdC8vIFxcMCB9XG5cdFx0XHRcdFx0Y2FzZSAwOiBjYXNlIDEyNTogc2Nhbm5pbmcgPSAwXG5cdFx0XHRcdFx0Ly8gO1xuXHRcdFx0XHRcdGNhc2UgNTkgKyBvZmZzZXQ6XG5cdFx0XHRcdFx0XHRpZiAocHJvcGVydHkgPiAwICYmIChzdHJsZW4oY2hhcmFjdGVycykgLSBsZW5ndGgpKVxuXHRcdFx0XHRcdFx0XHRhcHBlbmQocHJvcGVydHkgPiAzMiA/IGRlY2xhcmF0aW9uKGNoYXJhY3RlcnMgKyAnOycsIHJ1bGUsIHBhcmVudCwgbGVuZ3RoIC0gMSkgOiBkZWNsYXJhdGlvbihyZXBsYWNlKGNoYXJhY3RlcnMsICcgJywgJycpICsgJzsnLCBydWxlLCBwYXJlbnQsIGxlbmd0aCAtIDIpLCBkZWNsYXJhdGlvbnMpXG5cdFx0XHRcdFx0XHRicmVha1xuXHRcdFx0XHRcdC8vIEAgO1xuXHRcdFx0XHRcdGNhc2UgNTk6IGNoYXJhY3RlcnMgKz0gJzsnXG5cdFx0XHRcdFx0Ly8geyBydWxlL2F0LXJ1bGVcblx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0YXBwZW5kKHJlZmVyZW5jZSA9IHJ1bGVzZXQoY2hhcmFjdGVycywgcm9vdCwgcGFyZW50LCBpbmRleCwgb2Zmc2V0LCBydWxlcywgcG9pbnRzLCB0eXBlLCBwcm9wcyA9IFtdLCBjaGlsZHJlbiA9IFtdLCBsZW5ndGgpLCBydWxlc2V0cylcblxuXHRcdFx0XHRcdFx0aWYgKGNoYXJhY3RlciA9PT0gMTIzKVxuXHRcdFx0XHRcdFx0XHRpZiAob2Zmc2V0ID09PSAwKVxuXHRcdFx0XHRcdFx0XHRcdHBhcnNlKGNoYXJhY3RlcnMsIHJvb3QsIHJlZmVyZW5jZSwgcmVmZXJlbmNlLCBwcm9wcywgcnVsZXNldHMsIGxlbmd0aCwgcG9pbnRzLCBjaGlsZHJlbilcblx0XHRcdFx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdFx0XHRcdHN3aXRjaCAoYXRydWxlKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHQvLyBkIG0gc1xuXHRcdFx0XHRcdFx0XHRcdFx0Y2FzZSAxMDA6IGNhc2UgMTA5OiBjYXNlIDExNTpcblx0XHRcdFx0XHRcdFx0XHRcdFx0cGFyc2UodmFsdWUsIHJlZmVyZW5jZSwgcmVmZXJlbmNlLCBydWxlICYmIGFwcGVuZChydWxlc2V0KHZhbHVlLCByZWZlcmVuY2UsIHJlZmVyZW5jZSwgMCwgMCwgcnVsZXMsIHBvaW50cywgdHlwZSwgcnVsZXMsIHByb3BzID0gW10sIGxlbmd0aCksIGNoaWxkcmVuKSwgcnVsZXMsIGNoaWxkcmVuLCBsZW5ndGgsIHBvaW50cywgcnVsZSA/IHByb3BzIDogY2hpbGRyZW4pXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGJyZWFrXG5cdFx0XHRcdFx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwYXJzZShjaGFyYWN0ZXJzLCByZWZlcmVuY2UsIHJlZmVyZW5jZSwgcmVmZXJlbmNlLCBbJyddLCBjaGlsZHJlbiwgbGVuZ3RoLCBwb2ludHMsIGNoaWxkcmVuKVxuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGluZGV4ID0gb2Zmc2V0ID0gcHJvcGVydHkgPSAwLCB2YXJpYWJsZSA9IGFtcGVyc2FuZCA9IDEsIHR5cGUgPSBjaGFyYWN0ZXJzID0gJycsIGxlbmd0aCA9IHBzZXVkb1xuXHRcdFx0XHRicmVha1xuXHRcdFx0Ly8gOlxuXHRcdFx0Y2FzZSA1ODpcblx0XHRcdFx0bGVuZ3RoID0gMSArIHN0cmxlbihjaGFyYWN0ZXJzKSwgcHJvcGVydHkgPSBwcmV2aW91c1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0aWYgKHZhcmlhYmxlIDwgMSlcblx0XHRcdFx0XHRpZiAoY2hhcmFjdGVyID09IDEyMylcblx0XHRcdFx0XHRcdC0tdmFyaWFibGVcblx0XHRcdFx0XHRlbHNlIGlmIChjaGFyYWN0ZXIgPT0gMTI1ICYmIHZhcmlhYmxlKysgPT0gMCAmJiBwcmV2KCkgPT0gMTI1KVxuXHRcdFx0XHRcdFx0Y29udGludWVcblxuXHRcdFx0XHRzd2l0Y2ggKGNoYXJhY3RlcnMgKz0gZnJvbShjaGFyYWN0ZXIpLCBjaGFyYWN0ZXIgKiB2YXJpYWJsZSkge1xuXHRcdFx0XHRcdC8vICZcblx0XHRcdFx0XHRjYXNlIDM4OlxuXHRcdFx0XHRcdFx0YW1wZXJzYW5kID0gb2Zmc2V0ID4gMCA/IDEgOiAoY2hhcmFjdGVycyArPSAnXFxmJywgLTEpXG5cdFx0XHRcdFx0XHRicmVha1xuXHRcdFx0XHRcdC8vICxcblx0XHRcdFx0XHRjYXNlIDQ0OlxuXHRcdFx0XHRcdFx0cG9pbnRzW2luZGV4KytdID0gKHN0cmxlbihjaGFyYWN0ZXJzKSAtIDEpICogYW1wZXJzYW5kLCBhbXBlcnNhbmQgPSAxXG5cdFx0XHRcdFx0XHRicmVha1xuXHRcdFx0XHRcdC8vIEBcblx0XHRcdFx0XHRjYXNlIDY0OlxuXHRcdFx0XHRcdFx0Ly8gLVxuXHRcdFx0XHRcdFx0aWYgKHBlZWsoKSA9PT0gNDUpXG5cdFx0XHRcdFx0XHRcdGNoYXJhY3RlcnMgKz0gZGVsaW1pdChuZXh0KCkpXG5cblx0XHRcdFx0XHRcdGF0cnVsZSA9IHBlZWsoKSwgb2Zmc2V0ID0gc3RybGVuKHR5cGUgPSBjaGFyYWN0ZXJzICs9IGlkZW50aWZpZXIoY2FyZXQoKSkpLCBjaGFyYWN0ZXIrK1xuXHRcdFx0XHRcdFx0YnJlYWtcblx0XHRcdFx0XHQvLyAtXG5cdFx0XHRcdFx0Y2FzZSA0NTpcblx0XHRcdFx0XHRcdGlmIChwcmV2aW91cyA9PT0gNDUgJiYgc3RybGVuKGNoYXJhY3RlcnMpID09IDIpXG5cdFx0XHRcdFx0XHRcdHZhcmlhYmxlID0gMFxuXHRcdFx0XHR9XG5cdFx0fVxuXG5cdHJldHVybiBydWxlc2V0c1xufVxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICogQHBhcmFtIHtvYmplY3R9IHJvb3RcbiAqIEBwYXJhbSB7b2JqZWN0P30gcGFyZW50XG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcbiAqIEBwYXJhbSB7bnVtYmVyfSBvZmZzZXRcbiAqIEBwYXJhbSB7c3RyaW5nW119IHJ1bGVzXG4gKiBAcGFyYW0ge251bWJlcltdfSBwb2ludHNcbiAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBwcm9wc1xuICogQHBhcmFtIHtzdHJpbmdbXX0gY2hpbGRyZW5cbiAqIEBwYXJhbSB7bnVtYmVyfSBsZW5ndGhcbiAqIEByZXR1cm4ge29iamVjdH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJ1bGVzZXQgKHZhbHVlLCByb290LCBwYXJlbnQsIGluZGV4LCBvZmZzZXQsIHJ1bGVzLCBwb2ludHMsIHR5cGUsIHByb3BzLCBjaGlsZHJlbiwgbGVuZ3RoKSB7XG5cdHZhciBwb3N0ID0gb2Zmc2V0IC0gMVxuXHR2YXIgcnVsZSA9IG9mZnNldCA9PT0gMCA/IHJ1bGVzIDogWycnXVxuXHR2YXIgc2l6ZSA9IHNpemVvZihydWxlKVxuXG5cdGZvciAodmFyIGkgPSAwLCBqID0gMCwgayA9IDA7IGkgPCBpbmRleDsgKytpKVxuXHRcdGZvciAodmFyIHggPSAwLCB5ID0gc3Vic3RyKHZhbHVlLCBwb3N0ICsgMSwgcG9zdCA9IGFicyhqID0gcG9pbnRzW2ldKSksIHogPSB2YWx1ZTsgeCA8IHNpemU7ICsreClcblx0XHRcdGlmICh6ID0gdHJpbShqID4gMCA/IHJ1bGVbeF0gKyAnICcgKyB5IDogcmVwbGFjZSh5LCAvJlxcZi9nLCBydWxlW3hdKSkpXG5cdFx0XHRcdHByb3BzW2srK10gPSB6XG5cblx0cmV0dXJuIG5vZGUodmFsdWUsIHJvb3QsIHBhcmVudCwgb2Zmc2V0ID09PSAwID8gUlVMRVNFVCA6IHR5cGUsIHByb3BzLCBjaGlsZHJlbiwgbGVuZ3RoKVxufVxuXG4vKipcbiAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZVxuICogQHBhcmFtIHtvYmplY3R9IHJvb3RcbiAqIEBwYXJhbSB7b2JqZWN0P30gcGFyZW50XG4gKiBAcmV0dXJuIHtvYmplY3R9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb21tZW50ICh2YWx1ZSwgcm9vdCwgcGFyZW50KSB7XG5cdHJldHVybiBub2RlKHZhbHVlLCByb290LCBwYXJlbnQsIENPTU1FTlQsIGZyb20oY2hhcigpKSwgc3Vic3RyKHZhbHVlLCAyLCAtMiksIDApXG59XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKiBAcGFyYW0ge29iamVjdH0gcm9vdFxuICogQHBhcmFtIHtvYmplY3Q/fSBwYXJlbnRcbiAqIEBwYXJhbSB7bnVtYmVyfSBsZW5ndGhcbiAqIEByZXR1cm4ge29iamVjdH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlY2xhcmF0aW9uICh2YWx1ZSwgcm9vdCwgcGFyZW50LCBsZW5ndGgpIHtcblx0cmV0dXJuIG5vZGUodmFsdWUsIHJvb3QsIHBhcmVudCwgREVDTEFSQVRJT04sIHN1YnN0cih2YWx1ZSwgMCwgbGVuZ3RoKSwgc3Vic3RyKHZhbHVlLCBsZW5ndGggKyAxLCAtMSksIGxlbmd0aClcbn1cbiIsImltcG9ydCB7TVMsIE1PWiwgV0VCS0lUfSBmcm9tICcuL0VudW0uanMnXG5pbXBvcnQge2hhc2gsIGNoYXJhdCwgc3RybGVuLCBpbmRleG9mLCByZXBsYWNlfSBmcm9tICcuL1V0aWxpdHkuanMnXG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKiBAcGFyYW0ge251bWJlcn0gbGVuZ3RoXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwcmVmaXggKHZhbHVlLCBsZW5ndGgpIHtcblx0c3dpdGNoIChoYXNoKHZhbHVlLCBsZW5ndGgpKSB7XG5cdFx0Ly8gY29sb3ItYWRqdXN0XG5cdFx0Y2FzZSA1MTAzOlxuXHRcdFx0cmV0dXJuIFdFQktJVCArICdwcmludC0nICsgdmFsdWUgKyB2YWx1ZVxuXHRcdC8vIGFuaW1hdGlvbiwgYW5pbWF0aW9uLShkZWxheXxkaXJlY3Rpb258ZHVyYXRpb258ZmlsbC1tb2RlfGl0ZXJhdGlvbi1jb3VudHxuYW1lfHBsYXktc3RhdGV8dGltaW5nLWZ1bmN0aW9uKVxuXHRcdGNhc2UgNTczNzogY2FzZSA0MjAxOiBjYXNlIDMxNzc6IGNhc2UgMzQzMzogY2FzZSAxNjQxOiBjYXNlIDQ0NTc6IGNhc2UgMjkyMTpcblx0XHQvLyB0ZXh0LWRlY29yYXRpb24sIGZpbHRlciwgY2xpcC1wYXRoLCBiYWNrZmFjZS12aXNpYmlsaXR5LCBjb2x1bW4sIGJveC1kZWNvcmF0aW9uLWJyZWFrXG5cdFx0Y2FzZSA1NTcyOiBjYXNlIDYzNTY6IGNhc2UgNTg0NDogY2FzZSAzMTkxOiBjYXNlIDY2NDU6IGNhc2UgMzAwNTpcblx0XHQvLyBtYXNrLCBtYXNrLWltYWdlLCBtYXNrLShtb2RlfGNsaXB8c2l6ZSksIG1hc2stKHJlcGVhdHxvcmlnaW4pLCBtYXNrLXBvc2l0aW9uLCBtYXNrLWNvbXBvc2l0ZSxcblx0XHRjYXNlIDYzOTE6IGNhc2UgNTg3OTogY2FzZSA1NjIzOiBjYXNlIDYxMzU6IGNhc2UgNDU5OTogY2FzZSA0ODU1OlxuXHRcdC8vIGJhY2tncm91bmQtY2xpcCwgY29sdW1ucywgY29sdW1uLShjb3VudHxmaWxsfGdhcHxydWxlfHJ1bGUtY29sb3J8cnVsZS1zdHlsZXxydWxlLXdpZHRofHNwYW58d2lkdGgpXG5cdFx0Y2FzZSA0MjE1OiBjYXNlIDYzODk6IGNhc2UgNTEwOTogY2FzZSA1MzY1OiBjYXNlIDU2MjE6IGNhc2UgMzgyOTpcblx0XHRcdHJldHVybiBXRUJLSVQgKyB2YWx1ZSArIHZhbHVlXG5cdFx0Ly8gYXBwZWFyYW5jZSwgdXNlci1zZWxlY3QsIHRyYW5zZm9ybSwgaHlwaGVucywgdGV4dC1zaXplLWFkanVzdFxuXHRcdGNhc2UgNTM0OTogY2FzZSA0MjQ2OiBjYXNlIDQ4MTA6IGNhc2UgNjk2ODogY2FzZSAyNzU2OlxuXHRcdFx0cmV0dXJuIFdFQktJVCArIHZhbHVlICsgTU9aICsgdmFsdWUgKyBNUyArIHZhbHVlICsgdmFsdWVcblx0XHQvLyBmbGV4LCBmbGV4LWRpcmVjdGlvblxuXHRcdGNhc2UgNjgyODogY2FzZSA0MjY4OlxuXHRcdFx0cmV0dXJuIFdFQktJVCArIHZhbHVlICsgTVMgKyB2YWx1ZSArIHZhbHVlXG5cdFx0Ly8gb3JkZXJcblx0XHRjYXNlIDYxNjU6XG5cdFx0XHRyZXR1cm4gV0VCS0lUICsgdmFsdWUgKyBNUyArICdmbGV4LScgKyB2YWx1ZSArIHZhbHVlXG5cdFx0Ly8gYWxpZ24taXRlbXNcblx0XHRjYXNlIDUxODc6XG5cdFx0XHRyZXR1cm4gV0VCS0lUICsgdmFsdWUgKyByZXBsYWNlKHZhbHVlLCAvKFxcdyspLisoOlteXSspLywgV0VCS0lUICsgJ2JveC0kMSQyJyArIE1TICsgJ2ZsZXgtJDEkMicpICsgdmFsdWVcblx0XHQvLyBhbGlnbi1zZWxmXG5cdFx0Y2FzZSA1NDQzOlxuXHRcdFx0cmV0dXJuIFdFQktJVCArIHZhbHVlICsgTVMgKyAnZmxleC1pdGVtLScgKyByZXBsYWNlKHZhbHVlLCAvZmxleC18LXNlbGYvLCAnJykgKyB2YWx1ZVxuXHRcdC8vIGFsaWduLWNvbnRlbnRcblx0XHRjYXNlIDQ2NzU6XG5cdFx0XHRyZXR1cm4gV0VCS0lUICsgdmFsdWUgKyBNUyArICdmbGV4LWxpbmUtcGFjaycgKyByZXBsYWNlKHZhbHVlLCAvYWxpZ24tY29udGVudHxmbGV4LXwtc2VsZi8sICcnKSArIHZhbHVlXG5cdFx0Ly8gZmxleC1zaHJpbmtcblx0XHRjYXNlIDU1NDg6XG5cdFx0XHRyZXR1cm4gV0VCS0lUICsgdmFsdWUgKyBNUyArIHJlcGxhY2UodmFsdWUsICdzaHJpbmsnLCAnbmVnYXRpdmUnKSArIHZhbHVlXG5cdFx0Ly8gZmxleC1iYXNpc1xuXHRcdGNhc2UgNTI5Mjpcblx0XHRcdHJldHVybiBXRUJLSVQgKyB2YWx1ZSArIE1TICsgcmVwbGFjZSh2YWx1ZSwgJ2Jhc2lzJywgJ3ByZWZlcnJlZC1zaXplJykgKyB2YWx1ZVxuXHRcdC8vIGZsZXgtZ3Jvd1xuXHRcdGNhc2UgNjA2MDpcblx0XHRcdHJldHVybiBXRUJLSVQgKyAnYm94LScgKyByZXBsYWNlKHZhbHVlLCAnLWdyb3cnLCAnJykgKyBXRUJLSVQgKyB2YWx1ZSArIE1TICsgcmVwbGFjZSh2YWx1ZSwgJ2dyb3cnLCAncG9zaXRpdmUnKSArIHZhbHVlXG5cdFx0Ly8gdHJhbnNpdGlvblxuXHRcdGNhc2UgNDU1NDpcblx0XHRcdHJldHVybiBXRUJLSVQgKyByZXBsYWNlKHZhbHVlLCAvKFteLV0pKHRyYW5zZm9ybSkvZywgJyQxJyArIFdFQktJVCArICckMicpICsgdmFsdWVcblx0XHQvLyBjdXJzb3Jcblx0XHRjYXNlIDYxODc6XG5cdFx0XHRyZXR1cm4gcmVwbGFjZShyZXBsYWNlKHJlcGxhY2UodmFsdWUsIC8oem9vbS18Z3JhYikvLCBXRUJLSVQgKyAnJDEnKSwgLyhpbWFnZS1zZXQpLywgV0VCS0lUICsgJyQxJyksIHZhbHVlLCAnJykgKyB2YWx1ZVxuXHRcdC8vIGJhY2tncm91bmQsIGJhY2tncm91bmQtaW1hZ2Vcblx0XHRjYXNlIDU0OTU6IGNhc2UgMzk1OTpcblx0XHRcdHJldHVybiByZXBsYWNlKHZhbHVlLCAvKGltYWdlLXNldFxcKFteXSopLywgV0VCS0lUICsgJyQxJyArICckYCQxJylcblx0XHQvLyBqdXN0aWZ5LWNvbnRlbnRcblx0XHRjYXNlIDQ5Njg6XG5cdFx0XHRyZXR1cm4gcmVwbGFjZShyZXBsYWNlKHZhbHVlLCAvKC4rOikoZmxleC0pPyguKikvLCBXRUJLSVQgKyAnYm94LXBhY2s6JDMnICsgTVMgKyAnZmxleC1wYWNrOiQzJyksIC9zListYlteO10rLywgJ2p1c3RpZnknKSArIFdFQktJVCArIHZhbHVlICsgdmFsdWVcblx0XHQvLyAobWFyZ2lufHBhZGRpbmcpLWlubGluZS0oc3RhcnR8ZW5kKVxuXHRcdGNhc2UgNDA5NTogY2FzZSAzNTgzOiBjYXNlIDQwNjg6IGNhc2UgMjUzMjpcblx0XHRcdHJldHVybiByZXBsYWNlKHZhbHVlLCAvKC4rKS1pbmxpbmUoLispLywgV0VCS0lUICsgJyQxJDInKSArIHZhbHVlXG5cdFx0Ly8gKG1pbnxtYXgpPyh3aWR0aHxoZWlnaHR8aW5saW5lLXNpemV8YmxvY2stc2l6ZSlcblx0XHRjYXNlIDgxMTY6IGNhc2UgNzA1OTogY2FzZSA1NzUzOiBjYXNlIDU1MzU6XG5cdFx0Y2FzZSA1NDQ1OiBjYXNlIDU3MDE6IGNhc2UgNDkzMzogY2FzZSA0Njc3OlxuXHRcdGNhc2UgNTUzMzogY2FzZSA1Nzg5OiBjYXNlIDUwMjE6IGNhc2UgNDc2NTpcblx0XHRcdC8vIHN0cmV0Y2gsIG1heC1jb250ZW50LCBtaW4tY29udGVudCwgZmlsbC1hdmFpbGFibGVcblx0XHRcdGlmIChzdHJsZW4odmFsdWUpIC0gMSAtIGxlbmd0aCA+IDYpXG5cdFx0XHRcdHN3aXRjaCAoY2hhcmF0KHZhbHVlLCBsZW5ndGggKyAxKSkge1xuXHRcdFx0XHRcdC8vIChtKWF4LWNvbnRlbnQsIChtKWluLWNvbnRlbnRcblx0XHRcdFx0XHRjYXNlIDEwOTpcblx0XHRcdFx0XHRcdC8vIC1cblx0XHRcdFx0XHRcdGlmIChjaGFyYXQodmFsdWUsIGxlbmd0aCArIDQpICE9PSA0NSlcblx0XHRcdFx0XHRcdFx0YnJlYWtcblx0XHRcdFx0XHQvLyAoZilpbGwtYXZhaWxhYmxlLCAoZilpdC1jb250ZW50XG5cdFx0XHRcdFx0Y2FzZSAxMDI6XG5cdFx0XHRcdFx0XHRyZXR1cm4gcmVwbGFjZSh2YWx1ZSwgLyguKzopKC4rKS0oW15dKykvLCAnJDEnICsgV0VCS0lUICsgJyQyLSQzJyArICckMScgKyBNT1ogKyAoY2hhcmF0KHZhbHVlLCBsZW5ndGggKyAzKSA9PSAxMDggPyAnJDMnIDogJyQyLSQzJykpICsgdmFsdWVcblx0XHRcdFx0XHQvLyAocyl0cmV0Y2hcblx0XHRcdFx0XHRjYXNlIDExNTpcblx0XHRcdFx0XHRcdHJldHVybiB+aW5kZXhvZih2YWx1ZSwgJ3N0cmV0Y2gnKSA/IHByZWZpeChyZXBsYWNlKHZhbHVlLCAnc3RyZXRjaCcsICdmaWxsLWF2YWlsYWJsZScpLCBsZW5ndGgpICsgdmFsdWUgOiB2YWx1ZVxuXHRcdFx0XHR9XG5cdFx0XHRicmVha1xuXHRcdC8vIHBvc2l0aW9uOiBzdGlja3lcblx0XHRjYXNlIDQ5NDk6XG5cdFx0XHQvLyAocyl0aWNreT9cblx0XHRcdGlmIChjaGFyYXQodmFsdWUsIGxlbmd0aCArIDEpICE9PSAxMTUpXG5cdFx0XHRcdGJyZWFrXG5cdFx0Ly8gZGlzcGxheTogKGZsZXh8aW5saW5lLWZsZXgpXG5cdFx0Y2FzZSA2NDQ0OlxuXHRcdFx0c3dpdGNoIChjaGFyYXQodmFsdWUsIHN0cmxlbih2YWx1ZSkgLSAzIC0gKH5pbmRleG9mKHZhbHVlLCAnIWltcG9ydGFudCcpICYmIDEwKSkpIHtcblx0XHRcdFx0Ly8gc3RpYyhrKXlcblx0XHRcdFx0Y2FzZSAxMDc6XG5cdFx0XHRcdFx0cmV0dXJuIHJlcGxhY2UodmFsdWUsICc6JywgJzonICsgV0VCS0lUKSArIHZhbHVlXG5cdFx0XHRcdC8vIChpbmxpbmUtKT9mbChlKXhcblx0XHRcdFx0Y2FzZSAxMDE6XG5cdFx0XHRcdFx0cmV0dXJuIHJlcGxhY2UodmFsdWUsIC8oLis6KShbXjshXSspKDt8IS4rKT8vLCAnJDEnICsgV0VCS0lUICsgKGNoYXJhdCh2YWx1ZSwgMTQpID09PSA0NSA/ICdpbmxpbmUtJyA6ICcnKSArICdib3gkMycgKyAnJDEnICsgV0VCS0lUICsgJyQyJDMnICsgJyQxJyArIE1TICsgJyQyYm94JDMnKSArIHZhbHVlXG5cdFx0XHR9XG5cdFx0XHRicmVha1xuXHRcdC8vIHdyaXRpbmctbW9kZVxuXHRcdGNhc2UgNTkzNjpcblx0XHRcdHN3aXRjaCAoY2hhcmF0KHZhbHVlLCBsZW5ndGggKyAxMSkpIHtcblx0XHRcdFx0Ly8gdmVydGljYWwtbChyKVxuXHRcdFx0XHRjYXNlIDExNDpcblx0XHRcdFx0XHRyZXR1cm4gV0VCS0lUICsgdmFsdWUgKyBNUyArIHJlcGxhY2UodmFsdWUsIC9bc3ZoXVxcdystW3RibHJdezJ9LywgJ3RiJykgKyB2YWx1ZVxuXHRcdFx0XHQvLyB2ZXJ0aWNhbC1yKGwpXG5cdFx0XHRcdGNhc2UgMTA4OlxuXHRcdFx0XHRcdHJldHVybiBXRUJLSVQgKyB2YWx1ZSArIE1TICsgcmVwbGFjZSh2YWx1ZSwgL1tzdmhdXFx3Ky1bdGJscl17Mn0vLCAndGItcmwnKSArIHZhbHVlXG5cdFx0XHRcdC8vIGhvcml6b250YWwoLSl0YlxuXHRcdFx0XHRjYXNlIDQ1OlxuXHRcdFx0XHRcdHJldHVybiBXRUJLSVQgKyB2YWx1ZSArIE1TICsgcmVwbGFjZSh2YWx1ZSwgL1tzdmhdXFx3Ky1bdGJscl17Mn0vLCAnbHInKSArIHZhbHVlXG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBXRUJLSVQgKyB2YWx1ZSArIE1TICsgdmFsdWUgKyB2YWx1ZVxuXHR9XG5cblx0cmV0dXJuIHZhbHVlXG59XG4iLCJpbXBvcnQge0lNUE9SVCwgQ09NTUVOVCwgUlVMRVNFVCwgREVDTEFSQVRJT059IGZyb20gJy4vRW51bS5qcydcbmltcG9ydCB7c3RybGVuLCBzaXplb2Z9IGZyb20gJy4vVXRpbGl0eS5qcydcblxuLyoqXG4gKiBAcGFyYW0ge29iamVjdFtdfSBjaGlsZHJlblxuICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2tcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNlcmlhbGl6ZSAoY2hpbGRyZW4sIGNhbGxiYWNrKSB7XG5cdHZhciBvdXRwdXQgPSAnJ1xuXHR2YXIgbGVuZ3RoID0gc2l6ZW9mKGNoaWxkcmVuKVxuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspXG5cdFx0b3V0cHV0ICs9IGNhbGxiYWNrKGNoaWxkcmVuW2ldLCBpLCBjaGlsZHJlbiwgY2FsbGJhY2spIHx8ICcnXG5cblx0cmV0dXJuIG91dHB1dFxufVxuXG4vKipcbiAqIEBwYXJhbSB7b2JqZWN0fSBlbGVtZW50XG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcbiAqIEBwYXJhbSB7b2JqZWN0W119IGNoaWxkcmVuXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5leHBvcnQgZnVuY3Rpb24gc3RyaW5naWZ5IChlbGVtZW50LCBpbmRleCwgY2hpbGRyZW4sIGNhbGxiYWNrKSB7XG5cdHN3aXRjaCAoZWxlbWVudC50eXBlKSB7XG5cdFx0Y2FzZSBJTVBPUlQ6IGNhc2UgREVDTEFSQVRJT046IHJldHVybiBlbGVtZW50LnJldHVybiA9IGVsZW1lbnQucmV0dXJuIHx8IGVsZW1lbnQudmFsdWVcblx0XHRjYXNlIENPTU1FTlQ6IHJldHVybiAnJ1xuXHRcdGNhc2UgUlVMRVNFVDogZWxlbWVudC52YWx1ZSA9IGVsZW1lbnQucHJvcHMuam9pbignLCcpXG5cdH1cblxuXHRyZXR1cm4gc3RybGVuKGNoaWxkcmVuID0gc2VyaWFsaXplKGVsZW1lbnQuY2hpbGRyZW4sIGNhbGxiYWNrKSkgPyBlbGVtZW50LnJldHVybiA9IGVsZW1lbnQudmFsdWUgKyAneycgKyBjaGlsZHJlbiArICd9JyA6ICcnXG59XG4iLCJpbXBvcnQge2Zyb20sIHRyaW0sIGNoYXJhdCwgc3RybGVuLCBzdWJzdHIsIGFwcGVuZH0gZnJvbSAnLi9VdGlsaXR5LmpzJ1xuXG5leHBvcnQgdmFyIGxpbmUgPSAxXG5leHBvcnQgdmFyIGNvbHVtbiA9IDFcbmV4cG9ydCB2YXIgbGVuZ3RoID0gMFxuZXhwb3J0IHZhciBwb3NpdGlvbiA9IDBcbmV4cG9ydCB2YXIgY2hhcmFjdGVyID0gMFxuZXhwb3J0IHZhciBjaGFyYWN0ZXJzID0gJydcblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAqIEBwYXJhbSB7b2JqZWN0fSByb290XG4gKiBAcGFyYW0ge29iamVjdD99IHBhcmVudFxuICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcbiAqIEBwYXJhbSB7c3RyaW5nW119IHByb3BzXG4gKiBAcGFyYW0ge29iamVjdFtdfSBjaGlsZHJlblxuICogQHBhcmFtIHtudW1iZXJ9IGxlbmd0aFxuICovXG5leHBvcnQgZnVuY3Rpb24gbm9kZSAodmFsdWUsIHJvb3QsIHBhcmVudCwgdHlwZSwgcHJvcHMsIGNoaWxkcmVuLCBsZW5ndGgpIHtcblx0cmV0dXJuIHt2YWx1ZTogdmFsdWUsIHJvb3Q6IHJvb3QsIHBhcmVudDogcGFyZW50LCB0eXBlOiB0eXBlLCBwcm9wczogcHJvcHMsIGNoaWxkcmVuOiBjaGlsZHJlbiwgbGluZTogbGluZSwgY29sdW1uOiBjb2x1bW4sIGxlbmd0aDogbGVuZ3RoLCByZXR1cm46ICcnfVxufVxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICogQHBhcmFtIHtvYmplY3R9IHJvb3RcbiAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb3B5ICh2YWx1ZSwgcm9vdCwgdHlwZSkge1xuXHRyZXR1cm4gbm9kZSh2YWx1ZSwgcm9vdC5yb290LCByb290LnBhcmVudCwgdHlwZSwgcm9vdC5wcm9wcywgcm9vdC5jaGlsZHJlbiwgMClcbn1cblxuLyoqXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjaGFyICgpIHtcblx0cmV0dXJuIGNoYXJhY3RlclxufVxuXG4vKipcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHByZXYgKCkge1xuXHRjaGFyYWN0ZXIgPSBwb3NpdGlvbiA+IDAgPyBjaGFyYXQoY2hhcmFjdGVycywgLS1wb3NpdGlvbikgOiAwXG5cblx0aWYgKGNvbHVtbi0tLCBjaGFyYWN0ZXIgPT09IDEwKVxuXHRcdGNvbHVtbiA9IDEsIGxpbmUtLVxuXG5cdHJldHVybiBjaGFyYWN0ZXJcbn1cblxuLyoqXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBuZXh0ICgpIHtcblx0Y2hhcmFjdGVyID0gcG9zaXRpb24gPCBsZW5ndGggPyBjaGFyYXQoY2hhcmFjdGVycywgcG9zaXRpb24rKykgOiAwXG5cblx0aWYgKGNvbHVtbisrLCBjaGFyYWN0ZXIgPT09IDEwKVxuXHRcdGNvbHVtbiA9IDEsIGxpbmUrK1xuXG5cdHJldHVybiBjaGFyYWN0ZXJcbn1cblxuLyoqXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwZWVrICgpIHtcblx0cmV0dXJuIGNoYXJhdChjaGFyYWN0ZXJzLCBwb3NpdGlvbilcbn1cblxuLyoqXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjYXJldCAoKSB7XG5cdHJldHVybiBwb3NpdGlvblxufVxuXG4vKipcbiAqIEBwYXJhbSB7bnVtYmVyfSBiZWdpblxuICogQHBhcmFtIHtudW1iZXJ9IGVuZFxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2xpY2UgKGJlZ2luLCBlbmQpIHtcblx0cmV0dXJuIHN1YnN0cihjaGFyYWN0ZXJzLCBiZWdpbiwgZW5kKVxufVxuXG4vKipcbiAqIEBwYXJhbSB7bnVtYmVyfSB0eXBlXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b2tlbiAodHlwZSkge1xuXHRzd2l0Y2ggKHR5cGUpIHtcblx0XHQvLyBcXDAgXFx0IFxcbiBcXHIgXFxzIHdoaXRlc3BhY2UgdG9rZW5cblx0XHRjYXNlIDA6IGNhc2UgOTogY2FzZSAxMDogY2FzZSAxMzogY2FzZSAzMjpcblx0XHRcdHJldHVybiA1XG5cdFx0Ly8gISArICwgLyA+IEAgfiBpc29sYXRlIHRva2VuXG5cdFx0Y2FzZSAzMzogY2FzZSA0MzogY2FzZSA0NDogY2FzZSA0NzogY2FzZSA2MjogY2FzZSA2NDogY2FzZSAxMjY6XG5cdFx0Ly8gOyB7IH0gYnJlYWtwb2ludCB0b2tlblxuXHRcdGNhc2UgNTk6IGNhc2UgMTIzOiBjYXNlIDEyNTpcblx0XHRcdHJldHVybiA0XG5cdFx0Ly8gOiBhY2NvbXBhbmllZCB0b2tlblxuXHRcdGNhc2UgNTg6XG5cdFx0XHRyZXR1cm4gM1xuXHRcdC8vIFwiICcgKCBbIG9wZW5pbmcgZGVsaW1pdCB0b2tlblxuXHRcdGNhc2UgMzQ6IGNhc2UgMzk6IGNhc2UgNDA6IGNhc2UgOTE6XG5cdFx0XHRyZXR1cm4gMlxuXHRcdC8vICkgXSBjbG9zaW5nIGRlbGltaXQgdG9rZW5cblx0XHRjYXNlIDQxOiBjYXNlIDkzOlxuXHRcdFx0cmV0dXJuIDFcblx0fVxuXG5cdHJldHVybiAwXG59XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKiBAcmV0dXJuIHthbnlbXX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFsbG9jICh2YWx1ZSkge1xuXHRyZXR1cm4gbGluZSA9IGNvbHVtbiA9IDEsIGxlbmd0aCA9IHN0cmxlbihjaGFyYWN0ZXJzID0gdmFsdWUpLCBwb3NpdGlvbiA9IDAsIFtdXG59XG5cbi8qKlxuICogQHBhcmFtIHthbnl9IHZhbHVlXG4gKiBAcmV0dXJuIHthbnl9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZWFsbG9jICh2YWx1ZSkge1xuXHRyZXR1cm4gY2hhcmFjdGVycyA9ICcnLCB2YWx1ZVxufVxuXG4vKipcbiAqIEBwYXJhbSB7bnVtYmVyfSB0eXBlXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZWxpbWl0ICh0eXBlKSB7XG5cdHJldHVybiB0cmltKHNsaWNlKHBvc2l0aW9uIC0gMSwgZGVsaW1pdGVyKHR5cGUgPT09IDkxID8gdHlwZSArIDIgOiB0eXBlID09PSA0MCA/IHR5cGUgKyAxIDogdHlwZSkpKVxufVxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICogQHJldHVybiB7c3RyaW5nW119XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b2tlbml6ZSAodmFsdWUpIHtcblx0cmV0dXJuIGRlYWxsb2ModG9rZW5pemVyKGFsbG9jKHZhbHVlKSkpXG59XG5cbi8qKlxuICogQHBhcmFtIHtudW1iZXJ9IHR5cGVcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHdoaXRlc3BhY2UgKHR5cGUpIHtcblx0d2hpbGUgKGNoYXJhY3RlciA9IHBlZWsoKSlcblx0XHRpZiAoY2hhcmFjdGVyIDwgMzMpXG5cdFx0XHRuZXh0KClcblx0XHRlbHNlXG5cdFx0XHRicmVha1xuXG5cdHJldHVybiB0b2tlbih0eXBlKSA+IDIgfHwgdG9rZW4oY2hhcmFjdGVyKSA+IDMgPyAnJyA6ICcgJ1xufVxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nW119IGNoaWxkcmVuXG4gKiBAcmV0dXJuIHtzdHJpbmdbXX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRva2VuaXplciAoY2hpbGRyZW4pIHtcblx0d2hpbGUgKG5leHQoKSlcblx0XHRzd2l0Y2ggKHRva2VuKGNoYXJhY3RlcikpIHtcblx0XHRcdGNhc2UgMDogYXBwZW5kKGlkZW50aWZpZXIocG9zaXRpb24gLSAxKSwgY2hpbGRyZW4pXG5cdFx0XHRcdGJyZWFrXG5cdFx0XHRjYXNlIDI6IGFwcGVuZChkZWxpbWl0KGNoYXJhY3RlciksIGNoaWxkcmVuKVxuXHRcdFx0XHRicmVha1xuXHRcdFx0ZGVmYXVsdDogYXBwZW5kKGZyb20oY2hhcmFjdGVyKSwgY2hpbGRyZW4pXG5cdFx0fVxuXG5cdHJldHVybiBjaGlsZHJlblxufVxuXG4vKipcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxuICogQHBhcmFtIHtudW1iZXJ9IGNvdW50XG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlc2NhcGluZyAoaW5kZXgsIGNvdW50KSB7XG5cdHdoaWxlICgtLWNvdW50ICYmIG5leHQoKSlcblx0XHQvLyBub3QgMC05IEEtRiBhLWZcblx0XHRpZiAoY2hhcmFjdGVyIDwgNDggfHwgY2hhcmFjdGVyID4gMTAyIHx8IChjaGFyYWN0ZXIgPiA1NyAmJiBjaGFyYWN0ZXIgPCA2NSkgfHwgKGNoYXJhY3RlciA+IDcwICYmIGNoYXJhY3RlciA8IDk3KSlcblx0XHRcdGJyZWFrXG5cblx0cmV0dXJuIHNsaWNlKGluZGV4LCBjYXJldCgpICsgKGNvdW50IDwgNiAmJiBwZWVrKCkgPT0gMzIgJiYgbmV4dCgpID09IDMyKSlcbn1cblxuLyoqXG4gKiBAcGFyYW0ge251bWJlcn0gdHlwZVxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG5leHBvcnQgZnVuY3Rpb24gZGVsaW1pdGVyICh0eXBlKSB7XG5cdHdoaWxlIChuZXh0KCkpXG5cdFx0c3dpdGNoIChjaGFyYWN0ZXIpIHtcblx0XHRcdC8vIF0gKSBcIiAnXG5cdFx0XHRjYXNlIHR5cGU6XG5cdFx0XHRcdHJldHVybiBwb3NpdGlvblxuXHRcdFx0Ly8gXCIgJ1xuXHRcdFx0Y2FzZSAzNDogY2FzZSAzOTpcblx0XHRcdFx0cmV0dXJuIGRlbGltaXRlcih0eXBlID09PSAzNCB8fCB0eXBlID09PSAzOSA/IHR5cGUgOiBjaGFyYWN0ZXIpXG5cdFx0XHQvLyAoXG5cdFx0XHRjYXNlIDQwOlxuXHRcdFx0XHRpZiAodHlwZSA9PT0gNDEpXG5cdFx0XHRcdFx0ZGVsaW1pdGVyKHR5cGUpXG5cdFx0XHRcdGJyZWFrXG5cdFx0XHQvLyBcXFxuXHRcdFx0Y2FzZSA5Mjpcblx0XHRcdFx0bmV4dCgpXG5cdFx0XHRcdGJyZWFrXG5cdFx0fVxuXG5cdHJldHVybiBwb3NpdGlvblxufVxuXG4vKipcbiAqIEBwYXJhbSB7bnVtYmVyfSB0eXBlXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbW1lbnRlciAodHlwZSwgaW5kZXgpIHtcblx0d2hpbGUgKG5leHQoKSlcblx0XHQvLyAvL1xuXHRcdGlmICh0eXBlICsgY2hhcmFjdGVyID09PSA0NyArIDEwKVxuXHRcdFx0YnJlYWtcblx0XHQvLyAvKlxuXHRcdGVsc2UgaWYgKHR5cGUgKyBjaGFyYWN0ZXIgPT09IDQyICsgNDIgJiYgcGVlaygpID09PSA0Nylcblx0XHRcdGJyZWFrXG5cblx0cmV0dXJuICcvKicgKyBzbGljZShpbmRleCwgcG9zaXRpb24gLSAxKSArICcqJyArIGZyb20odHlwZSA9PT0gNDcgPyB0eXBlIDogbmV4dCgpKVxufVxuXG4vKipcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5leHBvcnQgZnVuY3Rpb24gaWRlbnRpZmllciAoaW5kZXgpIHtcblx0d2hpbGUgKCF0b2tlbihwZWVrKCkpKVxuXHRcdG5leHQoKVxuXG5cdHJldHVybiBzbGljZShpbmRleCwgcG9zaXRpb24pXG59XG4iLCIvKipcbiAqIEBwYXJhbSB7bnVtYmVyfVxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG5leHBvcnQgdmFyIGFicyA9IE1hdGguYWJzXG5cbi8qKlxuICogQHBhcmFtIHtudW1iZXJ9XG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCB2YXIgZnJvbSA9IFN0cmluZy5mcm9tQ2hhckNvZGVcblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAqIEBwYXJhbSB7bnVtYmVyfSBsZW5ndGhcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGhhc2ggKHZhbHVlLCBsZW5ndGgpIHtcblx0cmV0dXJuICgoKCgoKChsZW5ndGggPDwgMikgXiBjaGFyYXQodmFsdWUsIDApKSA8PCAyKSBeIGNoYXJhdCh2YWx1ZSwgMSkpIDw8IDIpIF4gY2hhcmF0KHZhbHVlLCAyKSkgPDwgMikgXiBjaGFyYXQodmFsdWUsIDMpXG59XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0cmltICh2YWx1ZSkge1xuXHRyZXR1cm4gdmFsdWUudHJpbSgpXG59XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKiBAcGFyYW0ge1JlZ0V4cH0gcGF0dGVyblxuICogQHJldHVybiB7c3RyaW5nP31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1hdGNoICh2YWx1ZSwgcGF0dGVybikge1xuXHRyZXR1cm4gKHZhbHVlID0gcGF0dGVybi5leGVjKHZhbHVlKSkgPyB2YWx1ZVswXSA6IHZhbHVlXG59XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKiBAcGFyYW0geyhzdHJpbmd8UmVnRXhwKX0gcGF0dGVyblxuICogQHBhcmFtIHtzdHJpbmd9IHJlcGxhY2VtZW50XG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXBsYWNlICh2YWx1ZSwgcGF0dGVybiwgcmVwbGFjZW1lbnQpIHtcblx0cmV0dXJuIHZhbHVlLnJlcGxhY2UocGF0dGVybiwgcmVwbGFjZW1lbnQpXG59XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGluZGV4b2YgKHZhbHVlLCBzZWFyY2gpIHtcblx0cmV0dXJuIHZhbHVlLmluZGV4T2Yoc2VhcmNoKVxufVxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjaGFyYXQgKHZhbHVlLCBpbmRleCkge1xuXHRyZXR1cm4gdmFsdWUuY2hhckNvZGVBdChpbmRleCkgfCAwXG59XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKiBAcGFyYW0ge251bWJlcn0gYmVnaW5cbiAqIEBwYXJhbSB7bnVtYmVyfSBlbmRcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN1YnN0ciAodmFsdWUsIGJlZ2luLCBlbmQpIHtcblx0cmV0dXJuIHZhbHVlLnNsaWNlKGJlZ2luLCBlbmQpXG59XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdHJsZW4gKHZhbHVlKSB7XG5cdHJldHVybiB2YWx1ZS5sZW5ndGhcbn1cblxuLyoqXG4gKiBAcGFyYW0ge2FueVtdfSB2YWx1ZVxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2l6ZW9mICh2YWx1ZSkge1xuXHRyZXR1cm4gdmFsdWUubGVuZ3RoXG59XG5cbi8qKlxuICogQHBhcmFtIHthbnl9IHZhbHVlXG4gKiBAcGFyYW0ge2FueVtdfSBhcnJheVxuICogQHJldHVybiB7YW55fVxuICovXG5leHBvcnQgZnVuY3Rpb24gYXBwZW5kICh2YWx1ZSwgYXJyYXkpIHtcblx0cmV0dXJuIGFycmF5LnB1c2godmFsdWUpLCB2YWx1ZVxufVxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nW119IGFycmF5XG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5leHBvcnQgZnVuY3Rpb24gY29tYmluZSAoYXJyYXksIGNhbGxiYWNrKSB7XG5cdHJldHVybiBhcnJheS5tYXAoY2FsbGJhY2spLmpvaW4oJycpXG59XG4iXSwic291cmNlUm9vdCI6IiJ9