(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/_app"],{

/***/ "../../.yarn/__virtual__/@emotion-react-virtual-a36cf338aa/0/cache/@emotion-react-npm-11.4.0-174d777529-af2abadbae.zip/node_modules/@emotion/react/dist/emotion-element-a8309070.browser.esm.js":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ../../.yarn/__virtual__/@emotion-react-virtual-a36cf338aa/0/cache/@emotion-react-npm-11.4.0-174d777529-af2abadbae.zip/node_modules/@emotion/react/dist/emotion-element-a8309070.browser.esm.js ***!
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../.yarn/cache/react-npm-18.0.0-alpha-19092ac8c-20210803-77246736aa-2509968fa4.zip/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/cache */ "../../.yarn/cache/@emotion-cache-npm-11.4.0-701cf41a62-bdef4c0ccc.zip/node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "../../.yarn/cache/@babel-runtime-npm-7.14.8-177f7f6866-d2dd0ce51d.zip/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _emotion_weak_memoize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/weak-memoize */ "../../.yarn/cache/@emotion-weak-memoize-npm-0.2.5-9f2e49e7c8-27d402b0c6.zip/node_modules/@emotion/weak-memoize/dist/weak-memoize.browser.esm.js");
/* harmony import */ var _isolated_hoist_non_react_statics_do_not_use_this_in_your_code_dist_emotion_react_isolated_hoist_non_react_statics_do_not_use_this_in_your_code_browser_esm_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../isolated-hoist-non-react-statics-do-not-use-this-in-your-code/dist/emotion-react-isolated-hoist-non-react-statics-do-not-use-this-in-your-code.browser.esm.js */ "../../.yarn/__virtual__/@emotion-react-virtual-a36cf338aa/0/cache/@emotion-react-npm-11.4.0-174d777529-af2abadbae.zip/node_modules/@emotion/react/isolated-hoist-non-react-statics-do-not-use-this-in-your-code/dist/emotion-react-isolated-hoist-non-react-statics-do-not-use-this-in-your-code.browser.esm.js");
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

/***/ "../../.yarn/__virtual__/@emotion-react-virtual-a36cf338aa/0/cache/@emotion-react-npm-11.4.0-174d777529-af2abadbae.zip/node_modules/@emotion/react/dist/emotion-react.browser.esm.js":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ../../.yarn/__virtual__/@emotion-react-virtual-a36cf338aa/0/cache/@emotion-react-npm-11.4.0-174d777529-af2abadbae.zip/node_modules/@emotion/react/dist/emotion-react.browser.esm.js ***!
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../.yarn/cache/react-npm-18.0.0-alpha-19092ac8c-20210803-77246736aa-2509968fa4.zip/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/cache */ "../../.yarn/cache/@emotion-cache-npm-11.4.0-701cf41a62-bdef4c0ccc.zip/node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js");
/* harmony import */ var _emotion_element_a8309070_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./emotion-element-a8309070.browser.esm.js */ "../../.yarn/__virtual__/@emotion-react-virtual-a36cf338aa/0/cache/@emotion-react-npm-11.4.0-174d777529-af2abadbae.zip/node_modules/@emotion/react/dist/emotion-element-a8309070.browser.esm.js");
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

/***/ "../../.yarn/__virtual__/@emotion-react-virtual-a36cf338aa/0/cache/@emotion-react-npm-11.4.0-174d777529-af2abadbae.zip/node_modules/@emotion/react/isolated-hoist-non-react-statics-do-not-use-this-in-your-code/dist/emotion-react-isolated-hoist-non-react-statics-do-not-use-this-in-your-code.browser.esm.js":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../.yarn/__virtual__/@emotion-react-virtual-a36cf338aa/0/cache/@emotion-react-npm-11.4.0-174d777529-af2abadbae.zip/node_modules/@emotion/react/isolated-hoist-non-react-statics-do-not-use-this-in-your-code/dist/emotion-react-isolated-hoist-non-react-statics-do-not-use-this-in-your-code.browser.esm.js ***!
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

/***/ "../../.yarn/__virtual__/@emotion-react-virtual-a36cf338aa/0/cache/@emotion-react-npm-11.4.0-174d777529-af2abadbae.zip/node_modules/@emotion/react/jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ../../.yarn/__virtual__/@emotion-react-virtual-a36cf338aa/0/cache/@emotion-react-npm-11.4.0-174d777529-af2abadbae.zip/node_modules/@emotion/react/jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Fragment": function() { return /* binding */ Fragment; },
/* harmony export */   "jsxDEV": function() { return /* binding */ jsxDEV; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../.yarn/cache/react-npm-18.0.0-alpha-19092ac8c-20210803-77246736aa-2509968fa4.zip/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/cache */ "../../.yarn/cache/@emotion-cache-npm-11.4.0-701cf41a62-bdef4c0ccc.zip/node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js");
/* harmony import */ var _dist_emotion_element_a8309070_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../dist/emotion-element-a8309070.browser.esm.js */ "../../.yarn/__virtual__/@emotion-react-virtual-a36cf338aa/0/cache/@emotion-react-npm-11.4.0-174d777529-af2abadbae.zip/node_modules/@emotion/react/dist/emotion-element-a8309070.browser.esm.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "../../.yarn/cache/@babel-runtime-npm-7.14.8-177f7f6866-d2dd0ce51d.zip/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _emotion_weak_memoize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/weak-memoize */ "../../.yarn/cache/@emotion-weak-memoize-npm-0.2.5-9f2e49e7c8-27d402b0c6.zip/node_modules/@emotion/weak-memoize/dist/weak-memoize.browser.esm.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hoist-non-react-statics */ "../../.yarn/cache/hoist-non-react-statics-npm-3.3.2-e7b709e6c1-b153827042.zip/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _emotion_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/utils */ "../../.yarn/cache/@emotion-utils-npm-1.0.0-7f9809289c-3ce8048441.zip/node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js");
/* harmony import */ var _emotion_serialize__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/serialize */ "../../.yarn/cache/@emotion-serialize-npm-1.0.2-a692afdb82-ff84fbe09e.zip/node_modules/@emotion/serialize/dist/emotion-serialize.browser.esm.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../.yarn/cache/react-npm-18.0.0-alpha-19092ac8c-20210803-77246736aa-2509968fa4.zip/node_modules/react/jsx-dev-runtime.js");
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
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-query */ "../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/index.js");
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
/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ "../../.yarn/__virtual__/@emotion-react-virtual-a36cf338aa/0/cache/@emotion-react-npm-11.4.0-174d777529-af2abadbae.zip/node_modules/@emotion/react/jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js");
/* harmony import */ var C_Users_jungy_Documents_GitHub_my_tutorial_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../.yarn/cache/@babel-runtime-npm-7.12.5-b3edb8ee8e-64964a0fd1.zip/node_modules/@babel/runtime/helpers/esm/defineProperty */ "../../.yarn/cache/@babel-runtime-npm-7.12.5-b3edb8ee8e-64964a0fd1.zip/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-query */ "../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/index.js");
/* harmony import */ var _libs_queryClient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../libs/queryClient */ "./libs/queryClient.ts");
/* harmony import */ var _styles_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/styles */ "./styles/styles.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\jungy\\Documents\\GitHub\\my-tutorial\\packages\\suspense\\pages\\_app.tsx";

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
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcanVuZ3lcXERvY3VtZW50c1xcR2l0SHViXFxteS10dXRvcmlhbFxccGFja2FnZXNcXHN1c3BlbnNlXFxzdHlsZXNcXGNzc05vcm1hbGl6ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFXd0IiLCJmaWxlIjoiQzpcXFVzZXJzXFxqdW5neVxcRG9jdW1lbnRzXFxHaXRIdWJcXG15LXR1dG9yaWFsXFxwYWNrYWdlc1xcc3VzcGVuc2VcXHN0eWxlc1xcY3NzTm9ybWFsaXplLnRzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3NzIH0gZnJvbSBcIkBlbW90aW9uL3JlYWN0XCI7XHJcblxyXG4vKiEgbm9ybWFsaXplLmNzcyB2OC4wLjEgfCBNSVQgTGljZW5zZSB8IGdpdGh1Yi5jb20vbmVjb2xhcy9ub3JtYWxpemUuY3NzICovXHJcblxyXG4vKiBEb2N1bWVudFxyXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuLyoqXHJcbiAqIDEuIENvcnJlY3QgdGhlIGxpbmUgaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cclxuICogMi4gUHJldmVudCBhZGp1c3RtZW50cyBvZiBmb250IHNpemUgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlcyBpbiBpT1MuXHJcbiAqL1xyXG5jb25zdCBjc3NOb3JtYWxpemUgPSBjc3NgXHJcbiAgaHRtbCB7XHJcbiAgICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xyXG4gICAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiAyICovXHJcbiAgfVxyXG5cclxuICAvKiBTZWN0aW9uc1xyXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuICAvKipcclxuICogUmVtb3ZlIHRoZSBtYXJnaW4gaW4gYWxsIGJyb3dzZXJzLlxyXG4gKi9cclxuXHJcbiAgYm9keSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICogUmVuZGVyIHRoZSBtYWluIGVsZW1lbnQgY29uc2lzdGVudGx5IGluIElFLlxyXG4gKi9cclxuXHJcbiAgbWFpbiB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gKiBDb3JyZWN0IHRoZSBmb250IHNpemUgYW5kIG1hcmdpbiBvbiBoMSBlbGVtZW50cyB3aXRoaW4gc2VjdGlvbiBhbmRcclxuICogYXJ0aWNsZSBjb250ZXh0cyBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBTYWZhcmkuXHJcbiAqL1xyXG5cclxuICBoMSB7XHJcbiAgICBmb250LXNpemU6IDJlbTtcclxuICAgIG1hcmdpbjogMC42N2VtIDA7XHJcbiAgfVxyXG5cclxuICAvKiBHcm91cGluZyBjb250ZW50XHJcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG4gIC8qKlxyXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBGaXJlZm94LlxyXG4gKiAyLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlIGFuZCBJRS5cclxuICovXHJcblxyXG4gIGhyIHtcclxuICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94OyAvKiAxICovXHJcbiAgICBoZWlnaHQ6IDA7IC8qIDEgKi9cclxuICAgIG92ZXJmbG93OiB2aXNpYmxlOyAvKiAyICovXHJcbiAgfVxyXG5cclxuICAvKipcclxuICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cclxuICogMi4gQ29ycmVjdCB0aGUgb2RkIGVtIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cclxuICovXHJcblxyXG4gIHByZSB7XHJcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7IC8qIDEgKi9cclxuICAgIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXHJcbiAgfVxyXG5cclxuICAvKiBUZXh0LWxldmVsIHNlbWFudGljc1xyXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuICAvKipcclxuICogUmVtb3ZlIHRoZSBncmF5IGJhY2tncm91bmQgb24gYWN0aXZlIGxpbmtzIGluIElFIDEwLlxyXG4gKi9cclxuXHJcbiAgYSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gKiAxLiBSZW1vdmUgdGhlIGJvdHRvbSBib3JkZXIgaW4gQ2hyb21lIDU3LVxyXG4gKiAyLiBBZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgSUUsIE9wZXJhLCBhbmQgU2FmYXJpLlxyXG4gKi9cclxuXHJcbiAgYWJiclt0aXRsZV0ge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTsgLyogMSAqL1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IC8qIDIgKi9cclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDsgLyogMiAqL1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAqIEFkZCB0aGUgY29ycmVjdCBmb250IHdlaWdodCBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXHJcbiAqL1xyXG5cclxuICBiLFxyXG4gIHN0cm9uZyB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXHJcbiAqIDIuIENvcnJlY3QgdGhlIG9kZCBlbSBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXHJcbiAqL1xyXG5cclxuICBjb2RlLFxyXG4gIGtiZCxcclxuICBzYW1wIHtcclxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xyXG4gICAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cclxuICovXHJcblxyXG4gIHNtYWxsIHtcclxuICAgIGZvbnQtc2l6ZTogODAlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAqIFByZXZlbnQgc3ViIGFuZCBzdXAgZWxlbWVudHMgZnJvbSBhZmZlY3RpbmcgdGhlIGxpbmUgaGVpZ2h0IGluXHJcbiAqIGFsbCBicm93c2Vycy5cclxuICovXHJcblxyXG4gIHN1YixcclxuICBzdXAge1xyXG4gICAgZm9udC1zaXplOiA3NSU7XHJcbiAgICBsaW5lLWhlaWdodDogMDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcclxuICB9XHJcblxyXG4gIHN1YiB7XHJcbiAgICBib3R0b206IC0wLjI1ZW07XHJcbiAgfVxyXG5cclxuICBzdXAge1xyXG4gICAgdG9wOiAtMC41ZW07XHJcbiAgfVxyXG5cclxuICAvKiBFbWJlZGRlZCBjb250ZW50XHJcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG4gIC8qKlxyXG4gKiBSZW1vdmUgdGhlIGJvcmRlciBvbiBpbWFnZXMgaW5zaWRlIGxpbmtzIGluIElFIDEwLlxyXG4gKi9cclxuXHJcbiAgaW1nIHtcclxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcclxuICB9XHJcblxyXG4gIC8qIEZvcm1zXHJcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG4gIC8qKlxyXG4gKiAxLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2Vycy5cclxuICogMi4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gRmlyZWZveCBhbmQgU2FmYXJpLlxyXG4gKi9cclxuXHJcbiAgYnV0dG9uLFxyXG4gIGlucHV0LFxyXG4gIG9wdGdyb3VwLFxyXG4gIHNlbGVjdCxcclxuICB0ZXh0YXJlYSB7XHJcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDsgLyogMSAqL1xyXG4gICAgZm9udC1zaXplOiAxMDAlOyAvKiAxICovXHJcbiAgICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xyXG4gICAgbWFyZ2luOiAwOyAvKiAyICovXHJcbiAgfVxyXG5cclxuICAvKipcclxuICogU2hvdyB0aGUgb3ZlcmZsb3cgaW4gSUUuXHJcbiAqIDEuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UuXHJcbiAqL1xyXG5cclxuICBidXR0b24sXHJcbiAgaW5wdXQge1xyXG4gICAgLyogMSAqL1xyXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICogUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBFZGdlLCBGaXJlZm94LCBhbmQgSUUuXHJcbiAqIDEuIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRmlyZWZveC5cclxuICovXHJcblxyXG4gIGJ1dHRvbixcclxuICBzZWxlY3Qge1xyXG4gICAgLyogMSAqL1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICogQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cclxuICovXHJcblxyXG4gIGJ1dHRvbixcclxuICBbdHlwZT1cImJ1dHRvblwiXSxcclxuICBbdHlwZT1cInJlc2V0XCJdLFxyXG4gIFt0eXBlPVwic3VibWl0XCJdIHtcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAqIFJlbW92ZSB0aGUgaW5uZXIgYm9yZGVyIGFuZCBwYWRkaW5nIGluIEZpcmVmb3guXHJcbiAqL1xyXG5cclxuICBidXR0b246Oi1tb3otZm9jdXMtaW5uZXIsXHJcbiAgW3R5cGU9XCJidXR0b25cIl06Oi1tb3otZm9jdXMtaW5uZXIsXHJcbiAgW3R5cGU9XCJyZXNldFwiXTo6LW1vei1mb2N1cy1pbm5lcixcclxuICBbdHlwZT1cInN1Ym1pdFwiXTo6LW1vei1mb2N1cy1pbm5lciB7XHJcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAqIFJlc3RvcmUgdGhlIGZvY3VzIHN0eWxlcyB1bnNldCBieSB0aGUgcHJldmlvdXMgcnVsZS5cclxuICovXHJcblxyXG4gIGJ1dHRvbjotbW96LWZvY3VzcmluZyxcclxuICBbdHlwZT1cImJ1dHRvblwiXTotbW96LWZvY3VzcmluZyxcclxuICBbdHlwZT1cInJlc2V0XCJdOi1tb3otZm9jdXNyaW5nLFxyXG4gIFt0eXBlPVwic3VibWl0XCJdOi1tb3otZm9jdXNyaW5nIHtcclxuICAgIG91dGxpbmU6IDFweCBkb3R0ZWQgQnV0dG9uVGV4dDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gKiBDb3JyZWN0IHRoZSBwYWRkaW5nIGluIEZpcmVmb3guXHJcbiAqL1xyXG5cclxuICBmaWVsZHNldCB7XHJcbiAgICBwYWRkaW5nOiAwLjM1ZW0gMC43NWVtIDAuNjI1ZW07XHJcbiAgfVxyXG5cclxuICAvKipcclxuICogMS4gQ29ycmVjdCB0aGUgdGV4dCB3cmFwcGluZyBpbiBFZGdlIGFuZCBJRS5cclxuICogMi4gQ29ycmVjdCB0aGUgY29sb3IgaW5oZXJpdGFuY2UgZnJvbSBmaWVsZHNldCBlbGVtZW50cyBpbiBJRS5cclxuICogMy4gUmVtb3ZlIHRoZSBwYWRkaW5nIHNvIGRldmVsb3BlcnMgYXJlIG5vdCBjYXVnaHQgb3V0IHdoZW4gdGhleSB6ZXJvIG91dFxyXG4gKiAgICBmaWVsZHNldCBlbGVtZW50cyBpbiBhbGwgYnJvd3NlcnMuXHJcbiAqL1xyXG5cclxuICBsZWdlbmQge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xyXG4gICAgY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cclxuICAgIGRpc3BsYXk6IHRhYmxlOyAvKiAxICovXHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7IC8qIDEgKi9cclxuICAgIHBhZGRpbmc6IDA7IC8qIDMgKi9cclxuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7IC8qIDEgKi9cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gKiBBZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSwgRmlyZWZveCwgYW5kIE9wZXJhLlxyXG4gKi9cclxuXHJcbiAgcHJvZ3Jlc3Mge1xyXG4gICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAqIFJlbW92ZSB0aGUgZGVmYXVsdCB2ZXJ0aWNhbCBzY3JvbGxiYXIgaW4gSUUgMTArLlxyXG4gKi9cclxuXHJcbiAgdGV4dGFyZWEge1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgfVxyXG5cclxuICAvKipcclxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gSUUgMTAuXHJcbiAqIDIuIFJlbW92ZSB0aGUgcGFkZGluZyBpbiBJRSAxMC5cclxuICovXHJcblxyXG4gIFt0eXBlPVwiY2hlY2tib3hcIl0sXHJcbiAgW3R5cGU9XCJyYWRpb1wiXSB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXHJcbiAgICBwYWRkaW5nOiAwOyAvKiAyICovXHJcbiAgfVxyXG5cclxuICAvKipcclxuICogQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gQ2hyb21lLlxyXG4gKi9cclxuXHJcbiAgW3R5cGU9XCJudW1iZXJcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXHJcbiAgW3R5cGU9XCJudW1iZXJcIl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAqIDEuIENvcnJlY3QgdGhlIG9kZCBhcHBlYXJhbmNlIGluIENocm9tZSBhbmQgU2FmYXJpLlxyXG4gKiAyLiBDb3JyZWN0IHRoZSBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaS5cclxuICovXHJcblxyXG4gIFt0eXBlPVwic2VhcmNoXCJdIHtcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkOyAvKiAxICovXHJcbiAgICBvdXRsaW5lLW9mZnNldDogLTJweDsgLyogMiAqL1xyXG4gIH1cclxuXHJcbiAgLyogUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIG1hY09TLiAqL1xyXG5cclxuICBbdHlwZT1cInNlYXJjaFwiXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICogMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cclxuICogMi4gQ2hhbmdlIGZvbnQgcHJvcGVydGllcyB0byBpbmhlcml0IGluIFNhZmFyaS5cclxuICovXHJcblxyXG4gIDo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDEgKi9cclxuICAgIGZvbnQ6IGluaGVyaXQ7IC8qIDIgKi9cclxuICB9XHJcblxyXG4gIC8qIEludGVyYWN0aXZlXHJcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG4gIC8qXHJcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIEVkZ2UsIElFIDEwKywgYW5kIEZpcmVmb3guXHJcbiAqL1xyXG5cclxuICBkZXRhaWxzIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuXHJcbiAgLypcclxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gYWxsIGJyb3dzZXJzLlxyXG4gKi9cclxuXHJcbiAgc3VtbWFyeSB7XHJcbiAgICBkaXNwbGF5OiBsaXN0LWl0ZW07XHJcbiAgfVxyXG5cclxuICAvKiBNaXNjXHJcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG4gIC8qKlxyXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMCsuXHJcbiAqL1xyXG5cclxuICB0ZW1wbGF0ZSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwLlxyXG4gKi9cclxuXHJcbiAgW2hpZGRlbl0ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjc3NOb3JtYWxpemU7XHJcbiJdfQ== */",
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
/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ "../../.yarn/__virtual__/@emotion-react-virtual-a36cf338aa/0/cache/@emotion-react-npm-11.4.0-174d777529-af2abadbae.zip/node_modules/@emotion/react/jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/react */ "../../.yarn/__virtual__/@emotion-react-virtual-a36cf338aa/0/cache/@emotion-react-npm-11.4.0-174d777529-af2abadbae.zip/node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
/* harmony import */ var _cssNormalize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cssNormalize */ "./styles/cssNormalize.ts");
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "C:\\Users\\jungy\\Documents\\GitHub\\my-tutorial\\packages\\suspense\\styles\\styles.tsx";



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

/***/ "../../.yarn/__virtual__/next-virtual-6f2a8444a0/0/cache/next-npm-11.0.1-c40bc7f380-c6b4747f1a.zip/node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.tsx!":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../.yarn/__virtual__/next-virtual-6f2a8444a0/0/cache/next-npm-11.0.1-c40bc7f380-c6b4747f1a.zip/node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.tsx! ***!
  \***********************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/_app",
      function () {
        return __webpack_require__(/*! private-next-pages/_app.tsx */ "./pages/_app.tsx");
      }
    ]);
  

/***/ }),

/***/ "../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/focusManager.js":
/*!************************************************************************************************************************************************************************!*\
  !*** ../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/focusManager.js ***!
  \************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "focusManager": function() { return /* binding */ focusManager; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "../../.yarn/cache/@babel-runtime-npm-7.14.8-177f7f6866-d2dd0ce51d.zip/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _subscribable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./subscribable */ "../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/subscribable.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/utils.js");




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

/***/ "../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/index.js":
/*!*****************************************************************************************************************************************************************!*\
  !*** ../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/index.js ***!
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
/* harmony import */ var _retryer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./retryer */ "../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/retryer.js");
/* harmony import */ var _queryCache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./queryCache */ "../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/queryCache.js");
/* harmony import */ var _queryClient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./queryClient */ "../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/queryClient.js");
/* harmony import */ var _queryObserver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./queryObserver */ "../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/queryObserver.js");
/* harmony import */ var _queriesObserver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./queriesObserver */ "../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/queriesObserver.js");
/* harmony import */ var _infiniteQueryObserver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./infiniteQueryObserver */ "../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/infiniteQueryObserver.js");
/* harmony import */ var _mutationCache__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mutationCache */ "../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/mutationCache.js");
/* harmony import */ var _mutationObserver__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mutationObserver */ "../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/mutationObserver.js");
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./logger */ "../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/logger.js");
/* harmony import */ var _notifyManager__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./notifyManager */ "../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/notifyManager.js");
/* harmony import */ var _focusManager__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./focusManager */ "../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/focusManager.js");
/* harmony import */ var _onlineManager__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./onlineManager */ "../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/onlineManager.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./utils */ "../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/utils.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./types */ "../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/types.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_types__WEBPACK_IMPORTED_MODULE_13__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _types__WEBPACK_IMPORTED_MODULE_13__) if(["default","CancelledError","QueryCache","QueryClient","QueryObserver","QueriesObserver","InfiniteQueryObserver","MutationCache","MutationObserver","setLogger","notifyManager","focusManager","onlineManager","hashQueryKey","isError","isCancelledError"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _types__WEBPACK_IMPORTED_MODULE_13__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);













 // Types



/***/ }),

/***/ "../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/infiniteQueryBehavior.js":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/infiniteQueryBehavior.js ***!
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
/* harmony import */ var _retryer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./retryer */ "../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/retryer.js");

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

/***/ "../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/infiniteQueryObserver.js":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/infiniteQueryObserver.js ***!
  \*********************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InfiniteQueryObserver": function() { return /* binding */ InfiniteQueryObserver; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "../../.yarn/cache/@babel-runtime-npm-7.14.8-177f7f6866-d2dd0ce51d.zip/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "../../.yarn/cache/@babel-runtime-npm-7.14.8-177f7f6866-d2dd0ce51d.zip/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _queryObserver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./queryObserver */ "../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/queryObserver.js");
/* harmony import */ var _infiniteQueryBehavior__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./infiniteQueryBehavior */ "../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/infiniteQueryBehavior.js");




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

/***/ "../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/logger.js":
/*!******************************************************************************************************************************************************************!*\
  !*** ../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/logger.js ***!
  \******************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getLogger": function() { return /* binding */ getLogger; },
/* harmony export */   "setLogger": function() { return /* binding */ setLogger; }
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/utils.js");
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

/***/ "../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/mutation.js":
/*!********************************************************************************************************************************************************************!*\
  !*** ../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/mutation.js ***!
  \********************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Mutation": function() { return /* binding */ Mutation; },
/* harmony export */   "getDefaultState": function() { return /* binding */ getDefaultState; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "../../.yarn/cache/@babel-runtime-npm-7.14.8-177f7f6866-d2dd0ce51d.zip/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logger */ "../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/logger.js");
/* harmony import */ var _notifyManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./notifyManager */ "../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/notifyManager.js");
/* harmony import */ var _retryer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./retryer */ "../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/retryer.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/utils.js");




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

/***/ "../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/mutationCache.js":
/*!*************************************************************************************************************************************************************************!*\
  !*** ../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/mutationCache.js ***!
  \*************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MutationCache": function() { return /* binding */ MutationCache; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "../../.yarn/cache/@babel-runtime-npm-7.14.8-177f7f6866-d2dd0ce51d.zip/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _notifyManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notifyManager */ "../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/notifyManager.js");
/* harmony import */ var _mutation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mutation */ "../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/mutation.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/utils.js");
/* harmony import */ var _subscribable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./subscribable */ "../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/subscribable.js");




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

/***/ "../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/mutationObserver.js":
/*!****************************************************************************************************************************************************************************!*\
  !*** ../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/mutationObserver.js ***!
  \****************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MutationObserver": function() { return /* binding */ MutationObserver; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "../../.yarn/cache/@babel-runtime-npm-7.14.8-177f7f6866-d2dd0ce51d.zip/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "../../.yarn/cache/@babel-runtime-npm-7.14.8-177f7f6866-d2dd0ce51d.zip/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _mutation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mutation */ "../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/mutation.js");
/* harmony import */ var _notifyManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notifyManager */ "../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/notifyManager.js");
/* harmony import */ var _subscribable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./subscribable */ "../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/subscribable.js");





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

/***/ "../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/notifyManager.js":
/*!*************************************************************************************************************************************************************************!*\
  !*** ../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/notifyManager.js ***!
  \*************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "notifyManager": function() { return /* binding */ notifyManager; }
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/utils.js");
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

/***/ "../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/onlineManager.js":
/*!*************************************************************************************************************************************************************************!*\
  !*** ../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/onlineManager.js ***!
  \*************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "onlineManager": function() { return /* binding */ onlineManager; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "../../.yarn/cache/@babel-runtime-npm-7.14.8-177f7f6866-d2dd0ce51d.zip/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _subscribable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./subscribable */ "../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/subscribable.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/utils.js");




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

/***/ "../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/queriesObserver.js":
/*!***************************************************************************************************************************************************************************!*\
  !*** ../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/queriesObserver.js ***!
  \***************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QueriesObserver": function() { return /* binding */ QueriesObserver; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "../../.yarn/cache/@babel-runtime-npm-7.14.8-177f7f6866-d2dd0ce51d.zip/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/utils.js");
/* harmony import */ var _notifyManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notifyManager */ "../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/notifyManager.js");
/* harmony import */ var _queryObserver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./queryObserver */ "../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/queryObserver.js");
/* harmony import */ var _subscribable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./subscribable */ "../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/subscribable.js");





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

/***/ "../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/query.js":
/*!*****************************************************************************************************************************************************************!*\
  !*** ../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/query.js ***!
  \*****************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Query": function() { return /* binding */ Query; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "../../.yarn/cache/@babel-runtime-npm-7.14.8-177f7f6866-d2dd0ce51d.zip/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/utils.js");
/* harmony import */ var _notifyManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./notifyManager */ "../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/notifyManager.js");
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logger */ "../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/logger.js");
/* harmony import */ var _retryer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./retryer */ "../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/retryer.js");




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

/***/ "../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/queryCache.js":
/*!**********************************************************************************************************************************************************************!*\
  !*** ../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/queryCache.js ***!
  \**********************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QueryCache": function() { return /* binding */ QueryCache; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "../../.yarn/cache/@babel-runtime-npm-7.14.8-177f7f6866-d2dd0ce51d.zip/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/utils.js");
/* harmony import */ var _query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./query */ "../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/query.js");
/* harmony import */ var _notifyManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notifyManager */ "../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/notifyManager.js");
/* harmony import */ var _subscribable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./subscribable */ "../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/subscribable.js");





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

/***/ "../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/queryClient.js":
/*!***********************************************************************************************************************************************************************!*\
  !*** ../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/queryClient.js ***!
  \***********************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QueryClient": function() { return /* binding */ QueryClient; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "../../.yarn/cache/@babel-runtime-npm-7.14.8-177f7f6866-d2dd0ce51d.zip/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils */ "../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/utils.js");
/* harmony import */ var _queryCache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./queryCache */ "../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/queryCache.js");
/* harmony import */ var _mutationCache__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mutationCache */ "../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/mutationCache.js");
/* harmony import */ var _focusManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./focusManager */ "../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/focusManager.js");
/* harmony import */ var _onlineManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./onlineManager */ "../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/onlineManager.js");
/* harmony import */ var _notifyManager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notifyManager */ "../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/notifyManager.js");
/* harmony import */ var _infiniteQueryBehavior__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./infiniteQueryBehavior */ "../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/infiniteQueryBehavior.js");







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

/***/ "../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/queryObserver.js":
/*!*************************************************************************************************************************************************************************!*\
  !*** ../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/queryObserver.js ***!
  \*************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QueryObserver": function() { return /* binding */ QueryObserver; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "../../.yarn/cache/@babel-runtime-npm-7.14.8-177f7f6866-d2dd0ce51d.zip/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "../../.yarn/cache/@babel-runtime-npm-7.14.8-177f7f6866-d2dd0ce51d.zip/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/utils.js");
/* harmony import */ var _notifyManager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notifyManager */ "../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/notifyManager.js");
/* harmony import */ var _focusManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./focusManager */ "../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/focusManager.js");
/* harmony import */ var _subscribable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./subscribable */ "../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/subscribable.js");
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./logger */ "../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/logger.js");
/* harmony import */ var _retryer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./retryer */ "../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/retryer.js");








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

/***/ "../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/retryer.js":
/*!*******************************************************************************************************************************************************************!*\
  !*** ../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/retryer.js ***!
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
/* harmony import */ var _focusManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./focusManager */ "../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/focusManager.js");
/* harmony import */ var _onlineManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./onlineManager */ "../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/onlineManager.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/utils.js");


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

/***/ "../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/subscribable.js":
/*!************************************************************************************************************************************************************************!*\
  !*** ../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/subscribable.js ***!
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

/***/ "../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/types.js":
/*!*****************************************************************************************************************************************************************!*\
  !*** ../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/types.js ***!
  \*****************************************************************************************************************************************************************/
/***/ (function() {



/***/ }),

/***/ "../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/utils.js":
/*!*****************************************************************************************************************************************************************!*\
  !*** ../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/utils.js ***!
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

/***/ "../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/index.js":
/*!************************************************************************************************************************************************************!*\
  !*** ../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/index.js ***!
  \************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ "../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/index.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _core__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _core__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./react */ "../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/react/index.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _react__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _react__WEBPACK_IMPORTED_MODULE_1__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);



/***/ }),

/***/ "../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/react/QueryClientProvider.js":
/*!********************************************************************************************************************************************************************************!*\
  !*** ../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/react/QueryClientProvider.js ***!
  \********************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useQueryClient": function() { return /* binding */ useQueryClient; },
/* harmony export */   "QueryClientProvider": function() { return /* binding */ QueryClientProvider; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../.yarn/cache/react-npm-18.0.0-alpha-19092ac8c-20210803-77246736aa-2509968fa4.zip/node_modules/react/index.js");
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

/***/ "../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/react/QueryErrorResetBoundary.js":
/*!************************************************************************************************************************************************************************************!*\
  !*** ../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/react/QueryErrorResetBoundary.js ***!
  \************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useQueryErrorResetBoundary": function() { return /* binding */ useQueryErrorResetBoundary; },
/* harmony export */   "QueryErrorResetBoundary": function() { return /* binding */ QueryErrorResetBoundary; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../.yarn/cache/react-npm-18.0.0-alpha-19092ac8c-20210803-77246736aa-2509968fa4.zip/node_modules/react/index.js");
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

/***/ "../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/react/index.js":
/*!******************************************************************************************************************************************************************!*\
  !*** ../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/react/index.js ***!
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
/* harmony import */ var _setBatchUpdatesFn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setBatchUpdatesFn */ "../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/react/setBatchUpdatesFn.js");
/* harmony import */ var _setLogger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setLogger */ "../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/react/setLogger.js");
/* harmony import */ var _QueryClientProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./QueryClientProvider */ "../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/react/QueryClientProvider.js");
/* harmony import */ var _QueryErrorResetBoundary__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./QueryErrorResetBoundary */ "../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/react/QueryErrorResetBoundary.js");
/* harmony import */ var _useIsFetching__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./useIsFetching */ "../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/react/useIsFetching.js");
/* harmony import */ var _useIsMutating__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./useIsMutating */ "../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/react/useIsMutating.js");
/* harmony import */ var _useMutation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./useMutation */ "../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/react/useMutation.js");
/* harmony import */ var _useQuery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./useQuery */ "../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/react/useQuery.js");
/* harmony import */ var _useQueries__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./useQueries */ "../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/react/useQueries.js");
/* harmony import */ var _useInfiniteQuery__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./useInfiniteQuery */ "../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/react/useInfiniteQuery.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./types */ "../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/react/types.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_types__WEBPACK_IMPORTED_MODULE_10__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _types__WEBPACK_IMPORTED_MODULE_10__) if(["default","QueryClientProvider","useQueryClient","QueryErrorResetBoundary","useQueryErrorResetBoundary","useIsFetching","useIsMutating","useMutation","useQuery","useQueries","useInfiniteQuery"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _types__WEBPACK_IMPORTED_MODULE_10__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
// Side effects









 // Types



/***/ }),

/***/ "../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/react/logger.js":
/*!*******************************************************************************************************************************************************************!*\
  !*** ../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/react/logger.js ***!
  \*******************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "logger": function() { return /* binding */ logger; }
/* harmony export */ });
var logger = console;

/***/ }),

/***/ "../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/react/reactBatchedUpdates.js":
/*!********************************************************************************************************************************************************************************!*\
  !*** ../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/react/reactBatchedUpdates.js ***!
  \********************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "unstable_batchedUpdates": function() { return /* binding */ unstable_batchedUpdates; }
/* harmony export */ });
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom */ "../../.yarn/__virtual__/react-dom-virtual-d35f0e982f/0/cache/react-dom-npm-18.0.0-alpha-19092ac8c-20210803-4e228ffd9a-e3348461b8.zip/node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_0__);

var unstable_batchedUpdates = (react_dom__WEBPACK_IMPORTED_MODULE_0___default().unstable_batchedUpdates);

/***/ }),

/***/ "../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/react/setBatchUpdatesFn.js":
/*!******************************************************************************************************************************************************************************!*\
  !*** ../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/react/setBatchUpdatesFn.js ***!
  \******************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/index.js");
/* harmony import */ var _reactBatchedUpdates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reactBatchedUpdates */ "../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/react/reactBatchedUpdates.js");


_core__WEBPACK_IMPORTED_MODULE_0__.notifyManager.setBatchNotifyFunction(_reactBatchedUpdates__WEBPACK_IMPORTED_MODULE_1__.unstable_batchedUpdates);

/***/ }),

/***/ "../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/react/setLogger.js":
/*!**********************************************************************************************************************************************************************!*\
  !*** ../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/react/setLogger.js ***!
  \**********************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core */ "../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/index.js");
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logger */ "../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/react/logger.js");



if (_logger__WEBPACK_IMPORTED_MODULE_0__.logger) {
  (0,_core__WEBPACK_IMPORTED_MODULE_1__.setLogger)(_logger__WEBPACK_IMPORTED_MODULE_0__.logger);
}

/***/ }),

/***/ "../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/react/types.js":
/*!******************************************************************************************************************************************************************!*\
  !*** ../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/react/types.js ***!
  \******************************************************************************************************************************************************************/
/***/ (function() {



/***/ }),

/***/ "../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/react/useBaseQuery.js":
/*!*************************************************************************************************************************************************************************!*\
  !*** ../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/react/useBaseQuery.js ***!
  \*************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useBaseQuery": function() { return /* binding */ useBaseQuery; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../.yarn/cache/react-npm-18.0.0-alpha-19092ac8c-20210803-77246736aa-2509968fa4.zip/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_notifyManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/notifyManager */ "../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/notifyManager.js");
/* harmony import */ var _QueryErrorResetBoundary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./QueryErrorResetBoundary */ "../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/react/QueryErrorResetBoundary.js");
/* harmony import */ var _QueryClientProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QueryClientProvider */ "../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/react/QueryClientProvider.js");




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

/***/ "../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/react/useInfiniteQuery.js":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/react/useInfiniteQuery.js ***!
  \*****************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useInfiniteQuery": function() { return /* binding */ useInfiniteQuery; }
/* harmony export */ });
/* harmony import */ var _core_infiniteQueryObserver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/infiniteQueryObserver */ "../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/infiniteQueryObserver.js");
/* harmony import */ var _core_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/utils */ "../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/utils.js");
/* harmony import */ var _useBaseQuery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useBaseQuery */ "../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/react/useBaseQuery.js");


 // HOOK

function useInfiniteQuery(arg1, arg2, arg3) {
  var options = (0,_core_utils__WEBPACK_IMPORTED_MODULE_0__.parseQueryArgs)(arg1, arg2, arg3);
  return (0,_useBaseQuery__WEBPACK_IMPORTED_MODULE_1__.useBaseQuery)(options, _core_infiniteQueryObserver__WEBPACK_IMPORTED_MODULE_2__.InfiniteQueryObserver);
}

/***/ }),

/***/ "../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/react/useIsFetching.js":
/*!**************************************************************************************************************************************************************************!*\
  !*** ../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/react/useIsFetching.js ***!
  \**************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useIsFetching": function() { return /* binding */ useIsFetching; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../.yarn/cache/react-npm-18.0.0-alpha-19092ac8c-20210803-77246736aa-2509968fa4.zip/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_notifyManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/notifyManager */ "../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/notifyManager.js");
/* harmony import */ var _core_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/utils */ "../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/utils.js");
/* harmony import */ var _QueryClientProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QueryClientProvider */ "../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/react/QueryClientProvider.js");




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

/***/ "../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/react/useIsMutating.js":
/*!**************************************************************************************************************************************************************************!*\
  !*** ../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/react/useIsMutating.js ***!
  \**************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useIsMutating": function() { return /* binding */ useIsMutating; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../.yarn/cache/react-npm-18.0.0-alpha-19092ac8c-20210803-77246736aa-2509968fa4.zip/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_notifyManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/notifyManager */ "../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/notifyManager.js");
/* harmony import */ var _QueryClientProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QueryClientProvider */ "../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/react/QueryClientProvider.js");



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

/***/ "../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/react/useMutation.js":
/*!************************************************************************************************************************************************************************!*\
  !*** ../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/react/useMutation.js ***!
  \************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useMutation": function() { return /* binding */ useMutation; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "../../.yarn/cache/@babel-runtime-npm-7.14.8-177f7f6866-d2dd0ce51d.zip/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../../.yarn/cache/react-npm-18.0.0-alpha-19092ac8c-20210803-77246736aa-2509968fa4.zip/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_notifyManager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/notifyManager */ "../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/notifyManager.js");
/* harmony import */ var _core_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/utils */ "../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/utils.js");
/* harmony import */ var _core_mutationObserver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/mutationObserver */ "../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/mutationObserver.js");
/* harmony import */ var _QueryClientProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./QueryClientProvider */ "../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/react/QueryClientProvider.js");






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

/***/ "../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/react/useQueries.js":
/*!***********************************************************************************************************************************************************************!*\
  !*** ../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/react/useQueries.js ***!
  \***********************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useQueries": function() { return /* binding */ useQueries; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../.yarn/cache/react-npm-18.0.0-alpha-19092ac8c-20210803-77246736aa-2509968fa4.zip/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_notifyManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/notifyManager */ "../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/notifyManager.js");
/* harmony import */ var _core_queriesObserver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/queriesObserver */ "../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/queriesObserver.js");
/* harmony import */ var _QueryClientProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QueryClientProvider */ "../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/react/QueryClientProvider.js");




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

/***/ "../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/react/useQuery.js":
/*!*********************************************************************************************************************************************************************!*\
  !*** ../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/react/useQuery.js ***!
  \*********************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useQuery": function() { return /* binding */ useQuery; }
/* harmony export */ });
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core */ "../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/index.js");
/* harmony import */ var _core_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/utils */ "../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/core/utils.js");
/* harmony import */ var _useBaseQuery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useBaseQuery */ "../../.yarn/__virtual__/react-query-virtual-1ea4853c90/0/cache/react-query-npm-3.19.1-be670daa8d-8e865d9ba4.zip/node_modules/react-query/es/react/useBaseQuery.js");


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

/***/ "../../.yarn/cache/react-npm-18.0.0-alpha-19092ac8c-20210803-77246736aa-2509968fa4.zip/node_modules/react/cjs/react-jsx-dev-runtime.development.js":
/*!*********************************************************************************************************************************************************!*\
  !*** ../../.yarn/cache/react-npm-18.0.0-alpha-19092ac8c-20210803-77246736aa-2509968fa4.zip/node_modules/react/cjs/react-jsx-dev-runtime.development.js ***!
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

var React = __webpack_require__(/*! react */ "../../.yarn/cache/react-npm-18.0.0-alpha-19092ac8c-20210803-77246736aa-2509968fa4.zip/node_modules/react/index.js");
var _assign = __webpack_require__(/*! object-assign */ "../../.yarn/__virtual__/next-virtual-6f2a8444a0/0/cache/next-npm-11.0.1-c40bc7f380-c6b4747f1a.zip/node_modules/next/dist/build/polyfills/object-assign.js");

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

/***/ "../../.yarn/cache/react-npm-18.0.0-alpha-19092ac8c-20210803-77246736aa-2509968fa4.zip/node_modules/react/jsx-dev-runtime.js":
/*!***********************************************************************************************************************************!*\
  !*** ../../.yarn/cache/react-npm-18.0.0-alpha-19092ac8c-20210803-77246736aa-2509968fa4.zip/node_modules/react/jsx-dev-runtime.js ***!
  \***********************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-jsx-dev-runtime.development.js */ "../../.yarn/cache/react-npm-18.0.0-alpha-19092ac8c-20210803-77246736aa-2509968fa4.zip/node_modules/react/cjs/react-jsx-dev-runtime.development.js");
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
/******/ __webpack_require__.O(0, ["main"], function() { return __webpack_exec__("../../.yarn/__virtual__/next-virtual-6f2a8444a0/0/cache/next-npm-11.0.1-c40bc7f380-c6b4747f1a.zip/node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.tsx!"), __webpack_exec__("../../.yarn/__virtual__/next-virtual-6f2a8444a0/0/cache/next-npm-11.0.1-c40bc7f380-c6b4747f1a.zip/node_modules/next/dist/client/router.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL0BlbW90aW9uLXJlYWN0LXZpcnR1YWwtYTM2Y2YzMzhhYS8wL2NhY2hlL0BlbW90aW9uLXJlYWN0LW5wbS0xMS40LjAtMTc0ZDc3NzUyOS1hZjJhYmFkYmFlLnppcC9ub2RlX21vZHVsZXMvQGVtb3Rpb24vcmVhY3QvZGlzdC9lbW90aW9uLWVsZW1lbnQtYTgzMDkwNzAuYnJvd3Nlci5lc20uanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy9AZW1vdGlvbi1yZWFjdC12aXJ0dWFsLWEzNmNmMzM4YWEvMC9jYWNoZS9AZW1vdGlvbi1yZWFjdC1ucG0tMTEuNC4wLTE3NGQ3Nzc1MjktYWYyYWJhZGJhZS56aXAvbm9kZV9tb2R1bGVzL0BlbW90aW9uL3JlYWN0L2Rpc3QvZW1vdGlvbi1yZWFjdC5icm93c2VyLmVzbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL0BlbW90aW9uLXJlYWN0LXZpcnR1YWwtYTM2Y2YzMzhhYS8wL2NhY2hlL0BlbW90aW9uLXJlYWN0LW5wbS0xMS40LjAtMTc0ZDc3NzUyOS1hZjJhYmFkYmFlLnppcC9ub2RlX21vZHVsZXMvQGVtb3Rpb24vcmVhY3QvaXNvbGF0ZWQtaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3MtZG8tbm90LXVzZS10aGlzLWluLXlvdXItY29kZS9kaXN0L2Vtb3Rpb24tcmVhY3QtaXNvbGF0ZWQtaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3MtZG8tbm90LXVzZS10aGlzLWluLXlvdXItY29kZS5icm93c2VyLmVzbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL0BlbW90aW9uLXJlYWN0LXZpcnR1YWwtYTM2Y2YzMzhhYS8wL2NhY2hlL0BlbW90aW9uLXJlYWN0LW5wbS0xMS40LjAtMTc0ZDc3NzUyOS1hZjJhYmFkYmFlLnppcC9ub2RlX21vZHVsZXMvQGVtb3Rpb24vcmVhY3QvanN4LWRldi1ydW50aW1lL2Rpc3QvZW1vdGlvbi1yZWFjdC1qc3gtZGV2LXJ1bnRpbWUuYnJvd3Nlci5lc20uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2xpYnMvcXVlcnlDbGllbnQudHMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL19hcHAudHN4Iiwid2VicGFjazovL19OX0UvLi9zdHlsZXMvY3NzTm9ybWFsaXplLnRzIiwid2VicGFjazovL19OX0UvLi9zdHlsZXMvc3R5bGVzLnRzeCIsIndlYnBhY2s6Ly9fTl9FLyIsIndlYnBhY2s6Ly9fTl9FLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL3JlYWN0LXF1ZXJ5LXZpcnR1YWwtMWVhNDg1M2M5MC8wL2NhY2hlL3JlYWN0LXF1ZXJ5LW5wbS0zLjE5LjEtYmU2NzBkYWE4ZC04ZTg2NWQ5YmE0LnppcC9ub2RlX21vZHVsZXMvcmVhY3QtcXVlcnkvZXMvY29yZS9mb2N1c01hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy9yZWFjdC1xdWVyeS12aXJ0dWFsLTFlYTQ4NTNjOTAvMC9jYWNoZS9yZWFjdC1xdWVyeS1ucG0tMy4xOS4xLWJlNjcwZGFhOGQtOGU4NjVkOWJhNC56aXAvbm9kZV9tb2R1bGVzL3JlYWN0LXF1ZXJ5L2VzL2NvcmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy9yZWFjdC1xdWVyeS12aXJ0dWFsLTFlYTQ4NTNjOTAvMC9jYWNoZS9yZWFjdC1xdWVyeS1ucG0tMy4xOS4xLWJlNjcwZGFhOGQtOGU4NjVkOWJhNC56aXAvbm9kZV9tb2R1bGVzL3JlYWN0LXF1ZXJ5L2VzL2NvcmUvaW5maW5pdGVRdWVyeUJlaGF2aW9yLmpzIiwid2VicGFjazovL19OX0UvLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vcmVhY3QtcXVlcnktdmlydHVhbC0xZWE0ODUzYzkwLzAvY2FjaGUvcmVhY3QtcXVlcnktbnBtLTMuMTkuMS1iZTY3MGRhYThkLThlODY1ZDliYTQuemlwL25vZGVfbW9kdWxlcy9yZWFjdC1xdWVyeS9lcy9jb3JlL2luZmluaXRlUXVlcnlPYnNlcnZlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL3JlYWN0LXF1ZXJ5LXZpcnR1YWwtMWVhNDg1M2M5MC8wL2NhY2hlL3JlYWN0LXF1ZXJ5LW5wbS0zLjE5LjEtYmU2NzBkYWE4ZC04ZTg2NWQ5YmE0LnppcC9ub2RlX21vZHVsZXMvcmVhY3QtcXVlcnkvZXMvY29yZS9sb2dnZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy9yZWFjdC1xdWVyeS12aXJ0dWFsLTFlYTQ4NTNjOTAvMC9jYWNoZS9yZWFjdC1xdWVyeS1ucG0tMy4xOS4xLWJlNjcwZGFhOGQtOGU4NjVkOWJhNC56aXAvbm9kZV9tb2R1bGVzL3JlYWN0LXF1ZXJ5L2VzL2NvcmUvbXV0YXRpb24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy9yZWFjdC1xdWVyeS12aXJ0dWFsLTFlYTQ4NTNjOTAvMC9jYWNoZS9yZWFjdC1xdWVyeS1ucG0tMy4xOS4xLWJlNjcwZGFhOGQtOGU4NjVkOWJhNC56aXAvbm9kZV9tb2R1bGVzL3JlYWN0LXF1ZXJ5L2VzL2NvcmUvbXV0YXRpb25DYWNoZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL3JlYWN0LXF1ZXJ5LXZpcnR1YWwtMWVhNDg1M2M5MC8wL2NhY2hlL3JlYWN0LXF1ZXJ5LW5wbS0zLjE5LjEtYmU2NzBkYWE4ZC04ZTg2NWQ5YmE0LnppcC9ub2RlX21vZHVsZXMvcmVhY3QtcXVlcnkvZXMvY29yZS9tdXRhdGlvbk9ic2VydmVyLmpzIiwid2VicGFjazovL19OX0UvLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vcmVhY3QtcXVlcnktdmlydHVhbC0xZWE0ODUzYzkwLzAvY2FjaGUvcmVhY3QtcXVlcnktbnBtLTMuMTkuMS1iZTY3MGRhYThkLThlODY1ZDliYTQuemlwL25vZGVfbW9kdWxlcy9yZWFjdC1xdWVyeS9lcy9jb3JlL25vdGlmeU1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy9yZWFjdC1xdWVyeS12aXJ0dWFsLTFlYTQ4NTNjOTAvMC9jYWNoZS9yZWFjdC1xdWVyeS1ucG0tMy4xOS4xLWJlNjcwZGFhOGQtOGU4NjVkOWJhNC56aXAvbm9kZV9tb2R1bGVzL3JlYWN0LXF1ZXJ5L2VzL2NvcmUvb25saW5lTWFuYWdlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL3JlYWN0LXF1ZXJ5LXZpcnR1YWwtMWVhNDg1M2M5MC8wL2NhY2hlL3JlYWN0LXF1ZXJ5LW5wbS0zLjE5LjEtYmU2NzBkYWE4ZC04ZTg2NWQ5YmE0LnppcC9ub2RlX21vZHVsZXMvcmVhY3QtcXVlcnkvZXMvY29yZS9xdWVyaWVzT2JzZXJ2ZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy9yZWFjdC1xdWVyeS12aXJ0dWFsLTFlYTQ4NTNjOTAvMC9jYWNoZS9yZWFjdC1xdWVyeS1ucG0tMy4xOS4xLWJlNjcwZGFhOGQtOGU4NjVkOWJhNC56aXAvbm9kZV9tb2R1bGVzL3JlYWN0LXF1ZXJ5L2VzL2NvcmUvcXVlcnkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy9yZWFjdC1xdWVyeS12aXJ0dWFsLTFlYTQ4NTNjOTAvMC9jYWNoZS9yZWFjdC1xdWVyeS1ucG0tMy4xOS4xLWJlNjcwZGFhOGQtOGU4NjVkOWJhNC56aXAvbm9kZV9tb2R1bGVzL3JlYWN0LXF1ZXJ5L2VzL2NvcmUvcXVlcnlDYWNoZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL3JlYWN0LXF1ZXJ5LXZpcnR1YWwtMWVhNDg1M2M5MC8wL2NhY2hlL3JlYWN0LXF1ZXJ5LW5wbS0zLjE5LjEtYmU2NzBkYWE4ZC04ZTg2NWQ5YmE0LnppcC9ub2RlX21vZHVsZXMvcmVhY3QtcXVlcnkvZXMvY29yZS9xdWVyeUNsaWVudC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL3JlYWN0LXF1ZXJ5LXZpcnR1YWwtMWVhNDg1M2M5MC8wL2NhY2hlL3JlYWN0LXF1ZXJ5LW5wbS0zLjE5LjEtYmU2NzBkYWE4ZC04ZTg2NWQ5YmE0LnppcC9ub2RlX21vZHVsZXMvcmVhY3QtcXVlcnkvZXMvY29yZS9xdWVyeU9ic2VydmVyLmpzIiwid2VicGFjazovL19OX0UvLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vcmVhY3QtcXVlcnktdmlydHVhbC0xZWE0ODUzYzkwLzAvY2FjaGUvcmVhY3QtcXVlcnktbnBtLTMuMTkuMS1iZTY3MGRhYThkLThlODY1ZDliYTQuemlwL25vZGVfbW9kdWxlcy9yZWFjdC1xdWVyeS9lcy9jb3JlL3JldHJ5ZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy9yZWFjdC1xdWVyeS12aXJ0dWFsLTFlYTQ4NTNjOTAvMC9jYWNoZS9yZWFjdC1xdWVyeS1ucG0tMy4xOS4xLWJlNjcwZGFhOGQtOGU4NjVkOWJhNC56aXAvbm9kZV9tb2R1bGVzL3JlYWN0LXF1ZXJ5L2VzL2NvcmUvc3Vic2NyaWJhYmxlLmpzIiwid2VicGFjazovL19OX0UvLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vcmVhY3QtcXVlcnktdmlydHVhbC0xZWE0ODUzYzkwLzAvY2FjaGUvcmVhY3QtcXVlcnktbnBtLTMuMTkuMS1iZTY3MGRhYThkLThlODY1ZDliYTQuemlwL25vZGVfbW9kdWxlcy9yZWFjdC1xdWVyeS9lcy9jb3JlL3V0aWxzLmpzIiwid2VicGFjazovL19OX0UvLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vcmVhY3QtcXVlcnktdmlydHVhbC0xZWE0ODUzYzkwLzAvY2FjaGUvcmVhY3QtcXVlcnktbnBtLTMuMTkuMS1iZTY3MGRhYThkLThlODY1ZDliYTQuemlwL25vZGVfbW9kdWxlcy9yZWFjdC1xdWVyeS9lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL3JlYWN0LXF1ZXJ5LXZpcnR1YWwtMWVhNDg1M2M5MC8wL2NhY2hlL3JlYWN0LXF1ZXJ5LW5wbS0zLjE5LjEtYmU2NzBkYWE4ZC04ZTg2NWQ5YmE0LnppcC9ub2RlX21vZHVsZXMvcmVhY3QtcXVlcnkvZXMvcmVhY3QvUXVlcnlDbGllbnRQcm92aWRlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL3JlYWN0LXF1ZXJ5LXZpcnR1YWwtMWVhNDg1M2M5MC8wL2NhY2hlL3JlYWN0LXF1ZXJ5LW5wbS0zLjE5LjEtYmU2NzBkYWE4ZC04ZTg2NWQ5YmE0LnppcC9ub2RlX21vZHVsZXMvcmVhY3QtcXVlcnkvZXMvcmVhY3QvUXVlcnlFcnJvclJlc2V0Qm91bmRhcnkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy9yZWFjdC1xdWVyeS12aXJ0dWFsLTFlYTQ4NTNjOTAvMC9jYWNoZS9yZWFjdC1xdWVyeS1ucG0tMy4xOS4xLWJlNjcwZGFhOGQtOGU4NjVkOWJhNC56aXAvbm9kZV9tb2R1bGVzL3JlYWN0LXF1ZXJ5L2VzL3JlYWN0L2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vcmVhY3QtcXVlcnktdmlydHVhbC0xZWE0ODUzYzkwLzAvY2FjaGUvcmVhY3QtcXVlcnktbnBtLTMuMTkuMS1iZTY3MGRhYThkLThlODY1ZDliYTQuemlwL25vZGVfbW9kdWxlcy9yZWFjdC1xdWVyeS9lcy9yZWFjdC9sb2dnZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy9yZWFjdC1xdWVyeS12aXJ0dWFsLTFlYTQ4NTNjOTAvMC9jYWNoZS9yZWFjdC1xdWVyeS1ucG0tMy4xOS4xLWJlNjcwZGFhOGQtOGU4NjVkOWJhNC56aXAvbm9kZV9tb2R1bGVzL3JlYWN0LXF1ZXJ5L2VzL3JlYWN0L3JlYWN0QmF0Y2hlZFVwZGF0ZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy9yZWFjdC1xdWVyeS12aXJ0dWFsLTFlYTQ4NTNjOTAvMC9jYWNoZS9yZWFjdC1xdWVyeS1ucG0tMy4xOS4xLWJlNjcwZGFhOGQtOGU4NjVkOWJhNC56aXAvbm9kZV9tb2R1bGVzL3JlYWN0LXF1ZXJ5L2VzL3JlYWN0L3NldEJhdGNoVXBkYXRlc0ZuLmpzIiwid2VicGFjazovL19OX0UvLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vcmVhY3QtcXVlcnktdmlydHVhbC0xZWE0ODUzYzkwLzAvY2FjaGUvcmVhY3QtcXVlcnktbnBtLTMuMTkuMS1iZTY3MGRhYThkLThlODY1ZDliYTQuemlwL25vZGVfbW9kdWxlcy9yZWFjdC1xdWVyeS9lcy9yZWFjdC9zZXRMb2dnZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy9yZWFjdC1xdWVyeS12aXJ0dWFsLTFlYTQ4NTNjOTAvMC9jYWNoZS9yZWFjdC1xdWVyeS1ucG0tMy4xOS4xLWJlNjcwZGFhOGQtOGU4NjVkOWJhNC56aXAvbm9kZV9tb2R1bGVzL3JlYWN0LXF1ZXJ5L2VzL3JlYWN0L3VzZUJhc2VRdWVyeS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL3JlYWN0LXF1ZXJ5LXZpcnR1YWwtMWVhNDg1M2M5MC8wL2NhY2hlL3JlYWN0LXF1ZXJ5LW5wbS0zLjE5LjEtYmU2NzBkYWE4ZC04ZTg2NWQ5YmE0LnppcC9ub2RlX21vZHVsZXMvcmVhY3QtcXVlcnkvZXMvcmVhY3QvdXNlSW5maW5pdGVRdWVyeS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL3JlYWN0LXF1ZXJ5LXZpcnR1YWwtMWVhNDg1M2M5MC8wL2NhY2hlL3JlYWN0LXF1ZXJ5LW5wbS0zLjE5LjEtYmU2NzBkYWE4ZC04ZTg2NWQ5YmE0LnppcC9ub2RlX21vZHVsZXMvcmVhY3QtcXVlcnkvZXMvcmVhY3QvdXNlSXNGZXRjaGluZy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL3JlYWN0LXF1ZXJ5LXZpcnR1YWwtMWVhNDg1M2M5MC8wL2NhY2hlL3JlYWN0LXF1ZXJ5LW5wbS0zLjE5LjEtYmU2NzBkYWE4ZC04ZTg2NWQ5YmE0LnppcC9ub2RlX21vZHVsZXMvcmVhY3QtcXVlcnkvZXMvcmVhY3QvdXNlSXNNdXRhdGluZy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL3JlYWN0LXF1ZXJ5LXZpcnR1YWwtMWVhNDg1M2M5MC8wL2NhY2hlL3JlYWN0LXF1ZXJ5LW5wbS0zLjE5LjEtYmU2NzBkYWE4ZC04ZTg2NWQ5YmE0LnppcC9ub2RlX21vZHVsZXMvcmVhY3QtcXVlcnkvZXMvcmVhY3QvdXNlTXV0YXRpb24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy9yZWFjdC1xdWVyeS12aXJ0dWFsLTFlYTQ4NTNjOTAvMC9jYWNoZS9yZWFjdC1xdWVyeS1ucG0tMy4xOS4xLWJlNjcwZGFhOGQtOGU4NjVkOWJhNC56aXAvbm9kZV9tb2R1bGVzL3JlYWN0LXF1ZXJ5L2VzL3JlYWN0L3VzZVF1ZXJpZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy9yZWFjdC1xdWVyeS12aXJ0dWFsLTFlYTQ4NTNjOTAvMC9jYWNoZS9yZWFjdC1xdWVyeS1ucG0tMy4xOS4xLWJlNjcwZGFhOGQtOGU4NjVkOWJhNC56aXAvbm9kZV9tb2R1bGVzL3JlYWN0LXF1ZXJ5L2VzL3JlYWN0L3VzZVF1ZXJ5LmpzIiwid2VicGFjazovL19OX0UvLi4vLi4vLnlhcm4vY2FjaGUvQGJhYmVsLXJ1bnRpbWUtbnBtLTcuMTIuNS1iM2VkYjhlZThlLTY0OTY0YTBmZDEuemlwL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uLy4uLy55YXJuL2NhY2hlL0BiYWJlbC1ydW50aW1lLW5wbS03LjE0LjgtMTc3ZjdmNjg2Ni1kMmRkMGNlNTFkLnppcC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uLy4uLy55YXJuL2NhY2hlL0BiYWJlbC1ydW50aW1lLW5wbS03LjE0LjgtMTc3ZjdmNjg2Ni1kMmRkMGNlNTFkLnppcC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHNMb29zZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uLy4uLy55YXJuL2NhY2hlL0BiYWJlbC1ydW50aW1lLW5wbS03LjE0LjgtMTc3ZjdmNjg2Ni1kMmRkMGNlNTFkLnppcC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vc2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi8uLi8ueWFybi9jYWNoZS9AZW1vdGlvbi1jYWNoZS1ucG0tMTEuNC4wLTcwMWNmNDFhNjItYmRlZjRjMGNjYy56aXAvbm9kZV9tb2R1bGVzL0BlbW90aW9uL2NhY2hlL2Rpc3QvZW1vdGlvbi1jYWNoZS5icm93c2VyLmVzbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uLy4uLy55YXJuL2NhY2hlL0BlbW90aW9uLWhhc2gtbnBtLTAuOC4wLTAxMDRmNGJiZjMtNGIzNWQ4OGE5Ny56aXAvbm9kZV9tb2R1bGVzL0BlbW90aW9uL2hhc2gvZGlzdC9oYXNoLmJyb3dzZXIuZXNtLmpzIiwid2VicGFjazovL19OX0UvLi4vLi4vLnlhcm4vY2FjaGUvQGVtb3Rpb24tbWVtb2l6ZS1ucG0tMC43LjUtZTVlN2U5ZWVjYS04M2RhOGQ0YTc2LnppcC9ub2RlX21vZHVsZXMvQGVtb3Rpb24vbWVtb2l6ZS9kaXN0L2Vtb3Rpb24tbWVtb2l6ZS5icm93c2VyLmVzbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uLy4uLy55YXJuL2NhY2hlL0BlbW90aW9uLXNlcmlhbGl6ZS1ucG0tMS4wLjItYTY5MmFmZGI4Mi1mZjg0ZmJlMDllLnppcC9ub2RlX21vZHVsZXMvQGVtb3Rpb24vc2VyaWFsaXplL2Rpc3QvZW1vdGlvbi1zZXJpYWxpemUuYnJvd3Nlci5lc20uanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi8uLi8ueWFybi9jYWNoZS9AZW1vdGlvbi1zaGVldC1ucG0tMS4wLjEtZjkxN2JmN2VjOS02MjRlMmVkZTAzLnppcC9ub2RlX21vZHVsZXMvQGVtb3Rpb24vc2hlZXQvZGlzdC9lbW90aW9uLXNoZWV0LmJyb3dzZXIuZXNtLmpzIiwid2VicGFjazovL19OX0UvLi4vLi4vLnlhcm4vY2FjaGUvQGVtb3Rpb24tdW5pdGxlc3MtbnBtLTAuNy41LTE0ZTExNzE2NDAtZjk3NmU1MzQ1Yi56aXAvbm9kZV9tb2R1bGVzL0BlbW90aW9uL3VuaXRsZXNzL2Rpc3QvdW5pdGxlc3MuYnJvd3Nlci5lc20uanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi8uLi8ueWFybi9jYWNoZS9AZW1vdGlvbi11dGlscy1ucG0tMS4wLjAtN2Y5ODA5Mjg5Yy0zY2U4MDQ4NDQxLnppcC9ub2RlX21vZHVsZXMvQGVtb3Rpb24vdXRpbHMvZGlzdC9lbW90aW9uLXV0aWxzLmJyb3dzZXIuZXNtLmpzIiwid2VicGFjazovL19OX0UvLi4vLi4vLnlhcm4vY2FjaGUvQGVtb3Rpb24td2Vhay1tZW1vaXplLW5wbS0wLjIuNS05ZjJlNDllN2M4LTI3ZDQwMmIwYzYuemlwL25vZGVfbW9kdWxlcy9AZW1vdGlvbi93ZWFrLW1lbW9pemUvZGlzdC93ZWFrLW1lbW9pemUuYnJvd3Nlci5lc20uanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi8uLi8ueWFybi9jYWNoZS9ob2lzdC1ub24tcmVhY3Qtc3RhdGljcy1ucG0tMy4zLjItZTdiNzA5ZTZjMS1iMTUzODI3MDQyLnppcC9ub2RlX21vZHVsZXMvaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3MvZGlzdC9ob2lzdC1ub24tcmVhY3Qtc3RhdGljcy5janMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi8uLi8ueWFybi9jYWNoZS9yZWFjdC1pcy1ucG0tMTYuMTMuMS1hOWI5MzgyYjRmLWY3YTE5YWMzNDkuemlwL25vZGVfbW9kdWxlcy9yZWFjdC1pcy9janMvcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi8uLi8ueWFybi9jYWNoZS9yZWFjdC1pcy1ucG0tMTYuMTMuMS1hOWI5MzgyYjRmLWY3YTE5YWMzNDkuemlwL25vZGVfbW9kdWxlcy9yZWFjdC1pcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uLy4uLy55YXJuL2NhY2hlL3JlYWN0LW5wbS0xOC4wLjAtYWxwaGEtMTkwOTJhYzhjLTIwMjEwODAzLTc3MjQ2NzM2YWEtMjUwOTk2OGZhNC56aXAvbm9kZV9tb2R1bGVzL3JlYWN0L2Nqcy9yZWFjdC1qc3gtZGV2LXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi8uLi8ueWFybi9jYWNoZS9yZWFjdC1ucG0tMTguMC4wLWFscGhhLTE5MDkyYWM4Yy0yMDIxMDgwMy03NzI0NjczNmFhLTI1MDk5NjhmYTQuemlwL25vZGVfbW9kdWxlcy9yZWFjdC9qc3gtZGV2LXJ1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi8uLi8ueWFybi9jYWNoZS9zdHlsaXMtbnBtLTQuMC4xMC00YzBmYTQ3ZmY4LTBmZWNhZjVjMjMuemlwL25vZGVfbW9kdWxlcy9zdHlsaXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi8uLi8ueWFybi9jYWNoZS9zdHlsaXMtbnBtLTQuMC4xMC00YzBmYTQ3ZmY4LTBmZWNhZjVjMjMuemlwL25vZGVfbW9kdWxlcy9zdHlsaXMvc3JjL0VudW0uanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi8uLi8ueWFybi9jYWNoZS9zdHlsaXMtbnBtLTQuMC4xMC00YzBmYTQ3ZmY4LTBmZWNhZjVjMjMuemlwL25vZGVfbW9kdWxlcy9zdHlsaXMvc3JjL01pZGRsZXdhcmUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi8uLi8ueWFybi9jYWNoZS9zdHlsaXMtbnBtLTQuMC4xMC00YzBmYTQ3ZmY4LTBmZWNhZjVjMjMuemlwL25vZGVfbW9kdWxlcy9zdHlsaXMvc3JjL1BhcnNlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uLy4uLy55YXJuL2NhY2hlL3N0eWxpcy1ucG0tNC4wLjEwLTRjMGZhNDdmZjgtMGZlY2FmNWMyMy56aXAvbm9kZV9tb2R1bGVzL3N0eWxpcy9zcmMvUHJlZml4ZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi8uLi8ueWFybi9jYWNoZS9zdHlsaXMtbnBtLTQuMC4xMC00YzBmYTQ3ZmY4LTBmZWNhZjVjMjMuemlwL25vZGVfbW9kdWxlcy9zdHlsaXMvc3JjL1NlcmlhbGl6ZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi8uLi8ueWFybi9jYWNoZS9zdHlsaXMtbnBtLTQuMC4xMC00YzBmYTQ3ZmY4LTBmZWNhZjVjMjMuemlwL25vZGVfbW9kdWxlcy9zdHlsaXMvc3JjL1Rva2VuaXplci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uLy4uLy55YXJuL2NhY2hlL3N0eWxpcy1ucG0tNC4wLjEwLTRjMGZhNDdmZjgtMGZlY2FmNWMyMy56aXAvbm9kZV9tb2R1bGVzL3N0eWxpcy9zcmMvVXRpbGl0eS5qcyJdLCJuYW1lcyI6WyJxdWVyeUNsaWVudCIsIlF1ZXJ5Q2xpZW50IiwiZGVmYXVsdE9wdGlvbnMiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImdsb2JhbFN0eWxlcyIsImNzc05vcm1hbGl6ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNkU7QUFDcEM7QUFDaUI7QUFDVjtBQUNvSjtBQUNqSTtBQUNkOztBQUVyRDs7QUFFQSx5Q0FBeUMsb0RBQWE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRCx1REFBVztBQUMvRDtBQUNBLENBQUM7QUFDRDs7QUFFQTtBQUNBO0FBQ0Esc0JBQXNCLGlEQUFVO0FBQ2hDO0FBQ0EsZ0JBQWdCLGlEQUFVO0FBQzFCO0FBQ0EsR0FBRztBQUNIOztB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QUFFeEIsMkJBQTJCOztBQUUzQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOzs7QUFHRDtBQUNBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDOztBQUV0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTs7QUFFUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7O0FBRVI7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQSxTQUFTO0FBQ1Qsd0JBQXdCO0FB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OztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFlBQVksUUFBUTtBQUNwQjtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxhQUFhO0FBQ3hCLFdBQVcsRUFBRTtBQUNiOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDREQUE0RDtBQUM1RDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsVUFBVTtBQUNyQixXQUFXLEVBQUU7QUFDYjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFCQUFx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Q087QUFDUDtBQUNBOztBQUVBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsZ0JBQWdCO0FBQzNCLFdBQVcsT0FBTztBQUNsQixZQUFZO0FBQ1o7QUFDTztBQUNQO0FBQ0E7O0FBRUE7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFlBQVk7QUFDWjtBQUNPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsWUFBWTtBQUNaO0FBQ087QUFDUDtBQUNBOztBQUVBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsWUFBWTtBQUNaO0FBQ087QUFDUDtBQUNBOztBQUVBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFlBQVk7QUFDWjtBQUNPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBLFdBQVcsTUFBTTtBQUNqQixZQUFZO0FBQ1o7QUFDTztBQUNQO0FBQ0E7O0FBRUE7QUFDQSxXQUFXLElBQUk7QUFDZixXQUFXLE1BQU07QUFDakIsWUFBWTtBQUNaO0FBQ087QUFDUDtBQUNBOztBQUVBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCLFdBQVcsU0FBUztBQUNwQixZQUFZO0FBQ1o7QUFDTztBQUNQO0FBQ0EiLCJmaWxlIjoic3RhdGljL2NodW5rcy9wYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgZm9yd2FyZFJlZiwgdXNlQ29udGV4dCwgY3JlYXRlRWxlbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjcmVhdGVDYWNoZSBmcm9tICdAZW1vdGlvbi9jYWNoZSc7XG5pbXBvcnQgX2V4dGVuZHMgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kcyc7XG5pbXBvcnQgd2Vha01lbW9pemUgZnJvbSAnQGVtb3Rpb24vd2Vhay1tZW1vaXplJztcbmltcG9ydCBob2lzdE5vblJlYWN0U3RhdGljcyBmcm9tICcuLi9pc29sYXRlZC1ob2lzdC1ub24tcmVhY3Qtc3RhdGljcy1kby1ub3QtdXNlLXRoaXMtaW4teW91ci1jb2RlL2Rpc3QvZW1vdGlvbi1yZWFjdC1pc29sYXRlZC1ob2lzdC1ub24tcmVhY3Qtc3RhdGljcy1kby1ub3QtdXNlLXRoaXMtaW4teW91ci1jb2RlLmJyb3dzZXIuZXNtLmpzJztcbmltcG9ydCB7IGdldFJlZ2lzdGVyZWRTdHlsZXMsIGluc2VydFN0eWxlcyB9IGZyb20gJ0BlbW90aW9uL3V0aWxzJztcbmltcG9ydCB7IHNlcmlhbGl6ZVN0eWxlcyB9IGZyb20gJ0BlbW90aW9uL3NlcmlhbGl6ZSc7XG5cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbnZhciBFbW90aW9uQ2FjaGVDb250ZXh0ID0gLyogI19fUFVSRV9fICovY3JlYXRlQ29udGV4dCggLy8gd2UncmUgZG9pbmcgdGhpcyB0byBhdm9pZCBwcmVjb25zdHJ1Y3QncyBkZWFkIGNvZGUgZWxpbWluYXRpb24gaW4gdGhpcyBvbmUgY2FzZVxuLy8gYmVjYXVzZSB0aGlzIG1vZHVsZSBpcyBwcmltYXJpbHkgaW50ZW5kZWQgZm9yIHRoZSBicm93c2VyIGFuZCBub2RlXG4vLyBidXQgaXQncyBhbHNvIHJlcXVpcmVkIGluIHJlYWN0IG5hdGl2ZSBhbmQgc2ltaWxhciBlbnZpcm9ubWVudHMgc29tZXRpbWVzXG4vLyBhbmQgd2UgY291bGQgaGF2ZSBhIHNwZWNpYWwgYnVpbGQganVzdCBmb3IgdGhhdFxuLy8gYnV0IHRoaXMgaXMgbXVjaCBlYXNpZXIgYW5kIHRoZSBuYXRpdmUgcGFja2FnZXNcbi8vIG1pZ2h0IHVzZSBhIGRpZmZlcmVudCB0aGVtZSBjb250ZXh0IGluIHRoZSBmdXR1cmUgYW55d2F5XG50eXBlb2YgSFRNTEVsZW1lbnQgIT09ICd1bmRlZmluZWQnID8gLyogI19fUFVSRV9fICovY3JlYXRlQ2FjaGUoe1xuICBrZXk6ICdjc3MnXG59KSA6IG51bGwpO1xudmFyIENhY2hlUHJvdmlkZXIgPSBFbW90aW9uQ2FjaGVDb250ZXh0LlByb3ZpZGVyO1xuXG52YXIgd2l0aEVtb3Rpb25DYWNoZSA9IGZ1bmN0aW9uIHdpdGhFbW90aW9uQ2FjaGUoZnVuYykge1xuICAvLyAkRmxvd0ZpeE1lXG4gIHJldHVybiAvKiNfX1BVUkVfXyovZm9yd2FyZFJlZihmdW5jdGlvbiAocHJvcHMsIHJlZikge1xuICAgIC8vIHRoZSBjYWNoZSB3aWxsIG5ldmVyIGJlIG51bGwgaW4gdGhlIGJyb3dzZXJcbiAgICB2YXIgY2FjaGUgPSB1c2VDb250ZXh0KEVtb3Rpb25DYWNoZUNvbnRleHQpO1xuICAgIHJldHVybiBmdW5jKHByb3BzLCBjYWNoZSwgcmVmKTtcbiAgfSk7XG59O1xuXG52YXIgVGhlbWVDb250ZXh0ID0gLyogI19fUFVSRV9fICovY3JlYXRlQ29udGV4dCh7fSk7XG52YXIgdXNlVGhlbWUgPSBmdW5jdGlvbiB1c2VUaGVtZSgpIHtcbiAgcmV0dXJuIHVzZUNvbnRleHQoVGhlbWVDb250ZXh0KTtcbn07XG5cbnZhciBnZXRUaGVtZSA9IGZ1bmN0aW9uIGdldFRoZW1lKG91dGVyVGhlbWUsIHRoZW1lKSB7XG4gIGlmICh0eXBlb2YgdGhlbWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgbWVyZ2VkVGhlbWUgPSB0aGVtZShvdXRlclRoZW1lKTtcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIChtZXJnZWRUaGVtZSA9PSBudWxsIHx8IHR5cGVvZiBtZXJnZWRUaGVtZSAhPT0gJ29iamVjdCcgfHwgQXJyYXkuaXNBcnJheShtZXJnZWRUaGVtZSkpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tUaGVtZVByb3ZpZGVyXSBQbGVhc2UgcmV0dXJuIGFuIG9iamVjdCBmcm9tIHlvdXIgdGhlbWUgZnVuY3Rpb24sIGkuZS4gdGhlbWU9eygpID0+ICh7fSl9IScpO1xuICAgIH1cblxuICAgIHJldHVybiBtZXJnZWRUaGVtZTtcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmICh0aGVtZSA9PSBudWxsIHx8IHR5cGVvZiB0aGVtZSAhPT0gJ29iamVjdCcgfHwgQXJyYXkuaXNBcnJheSh0aGVtZSkpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdbVGhlbWVQcm92aWRlcl0gUGxlYXNlIG1ha2UgeW91ciB0aGVtZSBwcm9wIGEgcGxhaW4gb2JqZWN0Jyk7XG4gIH1cblxuICByZXR1cm4gX2V4dGVuZHMoe30sIG91dGVyVGhlbWUsIHRoZW1lKTtcbn07XG5cbnZhciBjcmVhdGVDYWNoZVdpdGhUaGVtZSA9IC8qICNfX1BVUkVfXyAqL3dlYWtNZW1vaXplKGZ1bmN0aW9uIChvdXRlclRoZW1lKSB7XG4gIHJldHVybiB3ZWFrTWVtb2l6ZShmdW5jdGlvbiAodGhlbWUpIHtcbiAgICByZXR1cm4gZ2V0VGhlbWUob3V0ZXJUaGVtZSwgdGhlbWUpO1xuICB9KTtcbn0pO1xudmFyIFRoZW1lUHJvdmlkZXIgPSBmdW5jdGlvbiBUaGVtZVByb3ZpZGVyKHByb3BzKSB7XG4gIHZhciB0aGVtZSA9IHVzZUNvbnRleHQoVGhlbWVDb250ZXh0KTtcblxuICBpZiAocHJvcHMudGhlbWUgIT09IHRoZW1lKSB7XG4gICAgdGhlbWUgPSBjcmVhdGVDYWNoZVdpdGhUaGVtZSh0aGVtZSkocHJvcHMudGhlbWUpO1xuICB9XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9jcmVhdGVFbGVtZW50KFRoZW1lQ29udGV4dC5Qcm92aWRlciwge1xuICAgIHZhbHVlOiB0aGVtZVxuICB9LCBwcm9wcy5jaGlsZHJlbik7XG59O1xuZnVuY3Rpb24gd2l0aFRoZW1lKENvbXBvbmVudCkge1xuICB2YXIgY29tcG9uZW50TmFtZSA9IENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZSB8fCAnQ29tcG9uZW50JztcblxuICB2YXIgcmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKHByb3BzLCByZWYpIHtcbiAgICB2YXIgdGhlbWUgPSB1c2VDb250ZXh0KFRoZW1lQ29udGV4dCk7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9jcmVhdGVFbGVtZW50KENvbXBvbmVudCwgX2V4dGVuZHMoe1xuICAgICAgdGhlbWU6IHRoZW1lLFxuICAgICAgcmVmOiByZWZcbiAgICB9LCBwcm9wcykpO1xuICB9OyAvLyAkRmxvd0ZpeE1lXG5cblxuICB2YXIgV2l0aFRoZW1lID0gLyojX19QVVJFX18qL2ZvcndhcmRSZWYocmVuZGVyKTtcbiAgV2l0aFRoZW1lLmRpc3BsYXlOYW1lID0gXCJXaXRoVGhlbWUoXCIgKyBjb21wb25lbnROYW1lICsgXCIpXCI7XG4gIHJldHVybiBob2lzdE5vblJlYWN0U3RhdGljcyhXaXRoVGhlbWUsIENvbXBvbmVudCk7XG59XG5cbi8vIHRodXMgd2Ugb25seSBuZWVkIHRvIHJlcGxhY2Ugd2hhdCBpcyBhIHZhbGlkIGNoYXJhY3RlciBmb3IgSlMsIGJ1dCBub3QgZm9yIENTU1xuXG52YXIgc2FuaXRpemVJZGVudGlmaWVyID0gZnVuY3Rpb24gc2FuaXRpemVJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgcmV0dXJuIGlkZW50aWZpZXIucmVwbGFjZSgvXFwkL2csICctJyk7XG59O1xuXG52YXIgdHlwZVByb3BOYW1lID0gJ19fRU1PVElPTl9UWVBFX1BMRUFTRV9ET19OT1RfVVNFX18nO1xudmFyIGxhYmVsUHJvcE5hbWUgPSAnX19FTU9USU9OX0xBQkVMX1BMRUFTRV9ET19OT1RfVVNFX18nO1xudmFyIGNyZWF0ZUVtb3Rpb25Qcm9wcyA9IGZ1bmN0aW9uIGNyZWF0ZUVtb3Rpb25Qcm9wcyh0eXBlLCBwcm9wcykge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB0eXBlb2YgcHJvcHMuY3NzID09PSAnc3RyaW5nJyAmJiAvLyBjaGVjayBpZiB0aGVyZSBpcyBhIGNzcyBkZWNsYXJhdGlvblxuICBwcm9wcy5jc3MuaW5kZXhPZignOicpICE9PSAtMSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlN0cmluZ3MgYXJlIG5vdCBhbGxvd2VkIGFzIGNzcyBwcm9wIHZhbHVlcywgcGxlYXNlIHdyYXAgaXQgaW4gYSBjc3MgdGVtcGxhdGUgbGl0ZXJhbCBmcm9tICdAZW1vdGlvbi9yZWFjdCcgbGlrZSB0aGlzOiBjc3NgXCIgKyBwcm9wcy5jc3MgKyBcImBcIik7XG4gIH1cblxuICB2YXIgbmV3UHJvcHMgPSB7fTtcblxuICBmb3IgKHZhciBrZXkgaW4gcHJvcHMpIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChwcm9wcywga2V5KSkge1xuICAgICAgbmV3UHJvcHNba2V5XSA9IHByb3BzW2tleV07XG4gICAgfVxuICB9XG5cbiAgbmV3UHJvcHNbdHlwZVByb3BOYW1lXSA9IHR5cGU7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICB2YXIgZXJyb3IgPSBuZXcgRXJyb3IoKTtcblxuICAgIGlmIChlcnJvci5zdGFjaykge1xuICAgICAgLy8gY2hyb21lXG4gICAgICB2YXIgbWF0Y2ggPSBlcnJvci5zdGFjay5tYXRjaCgvYXQgKD86T2JqZWN0XFwufE1vZHVsZVxcLnwpKD86anN4fGNyZWF0ZUVtb3Rpb25Qcm9wcykuKlxcblxccythdCAoPzpPYmplY3RcXC58KShbQS1aXVtBLVphLXowLTkkXSspIC8pO1xuXG4gICAgICBpZiAoIW1hdGNoKSB7XG4gICAgICAgIC8vIHNhZmFyaSBhbmQgZmlyZWZveFxuICAgICAgICBtYXRjaCA9IGVycm9yLnN0YWNrLm1hdGNoKC8uKlxcbihbQS1aXVtBLVphLXowLTkkXSspQC8pO1xuICAgICAgfVxuXG4gICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgbmV3UHJvcHNbbGFiZWxQcm9wTmFtZV0gPSBzYW5pdGl6ZUlkZW50aWZpZXIobWF0Y2hbMV0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuZXdQcm9wcztcbn07XG52YXIgRW1vdGlvbiA9IC8qICNfX1BVUkVfXyAqL3dpdGhFbW90aW9uQ2FjaGUoZnVuY3Rpb24gKHByb3BzLCBjYWNoZSwgcmVmKSB7XG4gIHZhciBjc3NQcm9wID0gcHJvcHMuY3NzOyAvLyBzbyB0aGF0IHVzaW5nIGBjc3NgIGZyb20gYGVtb3Rpb25gIGFuZCBwYXNzaW5nIHRoZSByZXN1bHQgdG8gdGhlIGNzcyBwcm9wIHdvcmtzXG4gIC8vIG5vdCBwYXNzaW5nIHRoZSByZWdpc3RlcmVkIGNhY2hlIHRvIHNlcmlhbGl6ZVN0eWxlcyBiZWNhdXNlIGl0IHdvdWxkXG4gIC8vIG1ha2UgY2VydGFpbiBiYWJlbCBvcHRpbWlzYXRpb25zIG5vdCBwb3NzaWJsZVxuXG4gIGlmICh0eXBlb2YgY3NzUHJvcCA9PT0gJ3N0cmluZycgJiYgY2FjaGUucmVnaXN0ZXJlZFtjc3NQcm9wXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgY3NzUHJvcCA9IGNhY2hlLnJlZ2lzdGVyZWRbY3NzUHJvcF07XG4gIH1cblxuICB2YXIgdHlwZSA9IHByb3BzW3R5cGVQcm9wTmFtZV07XG4gIHZhciByZWdpc3RlcmVkU3R5bGVzID0gW2Nzc1Byb3BdO1xuICB2YXIgY2xhc3NOYW1lID0gJyc7XG5cbiAgaWYgKHR5cGVvZiBwcm9wcy5jbGFzc05hbWUgPT09ICdzdHJpbmcnKSB7XG4gICAgY2xhc3NOYW1lID0gZ2V0UmVnaXN0ZXJlZFN0eWxlcyhjYWNoZS5yZWdpc3RlcmVkLCByZWdpc3RlcmVkU3R5bGVzLCBwcm9wcy5jbGFzc05hbWUpO1xuICB9IGVsc2UgaWYgKHByb3BzLmNsYXNzTmFtZSAhPSBudWxsKSB7XG4gICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lICsgXCIgXCI7XG4gIH1cblxuICB2YXIgc2VyaWFsaXplZCA9IHNlcmlhbGl6ZVN0eWxlcyhyZWdpc3RlcmVkU3R5bGVzLCB1bmRlZmluZWQsIHR5cGVvZiBjc3NQcm9wID09PSAnZnVuY3Rpb24nIHx8IEFycmF5LmlzQXJyYXkoY3NzUHJvcCkgPyB1c2VDb250ZXh0KFRoZW1lQ29udGV4dCkgOiB1bmRlZmluZWQpO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHNlcmlhbGl6ZWQubmFtZS5pbmRleE9mKCctJykgPT09IC0xKSB7XG4gICAgdmFyIGxhYmVsRnJvbVN0YWNrID0gcHJvcHNbbGFiZWxQcm9wTmFtZV07XG5cbiAgICBpZiAobGFiZWxGcm9tU3RhY2spIHtcbiAgICAgIHNlcmlhbGl6ZWQgPSBzZXJpYWxpemVTdHlsZXMoW3NlcmlhbGl6ZWQsICdsYWJlbDonICsgbGFiZWxGcm9tU3RhY2sgKyAnOyddKTtcbiAgICB9XG4gIH1cblxuICB2YXIgcnVsZXMgPSBpbnNlcnRTdHlsZXMoY2FjaGUsIHNlcmlhbGl6ZWQsIHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyk7XG4gIGNsYXNzTmFtZSArPSBjYWNoZS5rZXkgKyBcIi1cIiArIHNlcmlhbGl6ZWQubmFtZTtcbiAgdmFyIG5ld1Byb3BzID0ge307XG5cbiAgZm9yICh2YXIga2V5IGluIHByb3BzKSB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwocHJvcHMsIGtleSkgJiYga2V5ICE9PSAnY3NzJyAmJiBrZXkgIT09IHR5cGVQcm9wTmFtZSAmJiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyB8fCBrZXkgIT09IGxhYmVsUHJvcE5hbWUpKSB7XG4gICAgICBuZXdQcm9wc1trZXldID0gcHJvcHNba2V5XTtcbiAgICB9XG4gIH1cblxuICBuZXdQcm9wcy5yZWYgPSByZWY7XG4gIG5ld1Byb3BzLmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcbiAgdmFyIGVsZSA9IC8qI19fUFVSRV9fKi9jcmVhdGVFbGVtZW50KHR5cGUsIG5ld1Byb3BzKTtcblxuICByZXR1cm4gZWxlO1xufSk7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIEVtb3Rpb24uZGlzcGxheU5hbWUgPSAnRW1vdGlvbkNzc1Byb3BJbnRlcm5hbCc7XG59XG5cbmV4cG9ydCB7IENhY2hlUHJvdmlkZXIgYXMgQywgRW1vdGlvbiBhcyBFLCBUaGVtZUNvbnRleHQgYXMgVCwgVGhlbWVQcm92aWRlciBhcyBhLCB3aXRoVGhlbWUgYXMgYiwgY3JlYXRlRW1vdGlvblByb3BzIGFzIGMsIGhhc093blByb3BlcnR5IGFzIGgsIHVzZVRoZW1lIGFzIHUsIHdpdGhFbW90aW9uQ2FjaGUgYXMgdyB9O1xuIiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCwgdXNlQ29udGV4dCwgdXNlUmVmLCB1c2VMYXlvdXRFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgJ0BlbW90aW9uL2NhY2hlJztcbmltcG9ydCB7IGggYXMgaGFzT3duUHJvcGVydHksIEUgYXMgRW1vdGlvbiwgYyBhcyBjcmVhdGVFbW90aW9uUHJvcHMsIHcgYXMgd2l0aEVtb3Rpb25DYWNoZSwgVCBhcyBUaGVtZUNvbnRleHQgfSBmcm9tICcuL2Vtb3Rpb24tZWxlbWVudC1hODMwOTA3MC5icm93c2VyLmVzbS5qcyc7XG5leHBvcnQgeyBDIGFzIENhY2hlUHJvdmlkZXIsIFQgYXMgVGhlbWVDb250ZXh0LCBhIGFzIFRoZW1lUHJvdmlkZXIsIHUgYXMgdXNlVGhlbWUsIHcgYXMgd2l0aEVtb3Rpb25DYWNoZSwgYiBhcyB3aXRoVGhlbWUgfSBmcm9tICcuL2Vtb3Rpb24tZWxlbWVudC1hODMwOTA3MC5icm93c2VyLmVzbS5qcyc7XG5pbXBvcnQgJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcyc7XG5pbXBvcnQgJ0BlbW90aW9uL3dlYWstbWVtb2l6ZSc7XG5pbXBvcnQgJ2hvaXN0LW5vbi1yZWFjdC1zdGF0aWNzJztcbmltcG9ydCAnLi4vaXNvbGF0ZWQtaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3MtZG8tbm90LXVzZS10aGlzLWluLXlvdXItY29kZS9kaXN0L2Vtb3Rpb24tcmVhY3QtaXNvbGF0ZWQtaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3MtZG8tbm90LXVzZS10aGlzLWluLXlvdXItY29kZS5icm93c2VyLmVzbS5qcyc7XG5pbXBvcnQgeyBpbnNlcnRTdHlsZXMsIGdldFJlZ2lzdGVyZWRTdHlsZXMgfSBmcm9tICdAZW1vdGlvbi91dGlscyc7XG5pbXBvcnQgeyBzZXJpYWxpemVTdHlsZXMgfSBmcm9tICdAZW1vdGlvbi9zZXJpYWxpemUnO1xuaW1wb3J0IHsgU3R5bGVTaGVldCB9IGZyb20gJ0BlbW90aW9uL3NoZWV0JztcblxudmFyIHBrZyA9IHtcblx0bmFtZTogXCJAZW1vdGlvbi9yZWFjdFwiLFxuXHR2ZXJzaW9uOiBcIjExLjQuMFwiLFxuXHRtYWluOiBcImRpc3QvZW1vdGlvbi1yZWFjdC5janMuanNcIixcblx0bW9kdWxlOiBcImRpc3QvZW1vdGlvbi1yZWFjdC5lc20uanNcIixcblx0YnJvd3Nlcjoge1xuXHRcdFwiLi9kaXN0L2Vtb3Rpb24tcmVhY3QuY2pzLmpzXCI6IFwiLi9kaXN0L2Vtb3Rpb24tcmVhY3QuYnJvd3Nlci5janMuanNcIixcblx0XHRcIi4vZGlzdC9lbW90aW9uLXJlYWN0LmVzbS5qc1wiOiBcIi4vZGlzdC9lbW90aW9uLXJlYWN0LmJyb3dzZXIuZXNtLmpzXCJcblx0fSxcblx0dHlwZXM6IFwidHlwZXMvaW5kZXguZC50c1wiLFxuXHRmaWxlczogW1xuXHRcdFwic3JjXCIsXG5cdFx0XCJkaXN0XCIsXG5cdFx0XCJqc3gtcnVudGltZVwiLFxuXHRcdFwianN4LWRldi1ydW50aW1lXCIsXG5cdFx0XCJpc29sYXRlZC1ob2lzdC1ub24tcmVhY3Qtc3RhdGljcy1kby1ub3QtdXNlLXRoaXMtaW4teW91ci1jb2RlXCIsXG5cdFx0XCJ0eXBlcy8qLmQudHNcIixcblx0XHRcIm1hY3JvLmpzXCIsXG5cdFx0XCJtYWNyby5kLnRzXCIsXG5cdFx0XCJtYWNyby5qcy5mbG93XCJcblx0XSxcblx0c2lkZUVmZmVjdHM6IGZhbHNlLFxuXHRhdXRob3I6IFwibWl0Y2hlbGxoYW1pbHRvbiA8bWl0Y2hlbGxAbWl0Y2hlbGxoYW1pbHRvbi5tZT5cIixcblx0bGljZW5zZTogXCJNSVRcIixcblx0c2NyaXB0czoge1xuXHRcdFwidGVzdDp0eXBlc2NyaXB0XCI6IFwiZHRzbGludCB0eXBlc1wiXG5cdH0sXG5cdGRlcGVuZGVuY2llczoge1xuXHRcdFwiQGJhYmVsL3J1bnRpbWVcIjogXCJeNy4xMy4xMFwiLFxuXHRcdFwiQGVtb3Rpb24vY2FjaGVcIjogXCJeMTEuNC4wXCIsXG5cdFx0XCJAZW1vdGlvbi9zZXJpYWxpemVcIjogXCJeMS4wLjJcIixcblx0XHRcIkBlbW90aW9uL3NoZWV0XCI6IFwiXjEuMC4xXCIsXG5cdFx0XCJAZW1vdGlvbi91dGlsc1wiOiBcIl4xLjAuMFwiLFxuXHRcdFwiQGVtb3Rpb24vd2Vhay1tZW1vaXplXCI6IFwiXjAuMi41XCIsXG5cdFx0XCJob2lzdC1ub24tcmVhY3Qtc3RhdGljc1wiOiBcIl4zLjMuMVwiXG5cdH0sXG5cdHBlZXJEZXBlbmRlbmNpZXM6IHtcblx0XHRcIkBiYWJlbC9jb3JlXCI6IFwiXjcuMC4wXCIsXG5cdFx0cmVhY3Q6IFwiPj0xNi44LjBcIlxuXHR9LFxuXHRwZWVyRGVwZW5kZW5jaWVzTWV0YToge1xuXHRcdFwiQGJhYmVsL2NvcmVcIjoge1xuXHRcdFx0b3B0aW9uYWw6IHRydWVcblx0XHR9LFxuXHRcdFwiQHR5cGVzL3JlYWN0XCI6IHtcblx0XHRcdG9wdGlvbmFsOiB0cnVlXG5cdFx0fVxuXHR9LFxuXHRkZXZEZXBlbmRlbmNpZXM6IHtcblx0XHRcIkBiYWJlbC9jb3JlXCI6IFwiXjcuMTMuMTBcIixcblx0XHRcIkBlbW90aW9uL2Nzc1wiOiBcIjExLjEuM1wiLFxuXHRcdFwiQGVtb3Rpb24vY3NzLXByZXR0aWZpZXJcIjogXCIxLjAuMFwiLFxuXHRcdFwiQGVtb3Rpb24vc2VydmVyXCI6IFwiMTEuNC4wXCIsXG5cdFx0XCJAZW1vdGlvbi9zdHlsZWRcIjogXCIxMS4zLjBcIixcblx0XHRcIkB0eXBlcy9yZWFjdFwiOiBcIl4xNi45LjExXCIsXG5cdFx0ZHRzbGludDogXCJeMC4zLjBcIixcblx0XHRcImh0bWwtdGFnLW5hbWVzXCI6IFwiXjEuMS4yXCIsXG5cdFx0cmVhY3Q6IFwiMTYuMTQuMFwiLFxuXHRcdFwic3ZnLXRhZy1uYW1lc1wiOiBcIl4xLjEuMVwiXG5cdH0sXG5cdHJlcG9zaXRvcnk6IFwiaHR0cHM6Ly9naXRodWIuY29tL2Vtb3Rpb24tanMvZW1vdGlvbi90cmVlL21haW4vcGFja2FnZXMvcmVhY3RcIixcblx0cHVibGlzaENvbmZpZzoge1xuXHRcdGFjY2VzczogXCJwdWJsaWNcIlxuXHR9LFxuXHRcInVtZDptYWluXCI6IFwiZGlzdC9lbW90aW9uLXJlYWN0LnVtZC5taW4uanNcIixcblx0cHJlY29uc3RydWN0OiB7XG5cdFx0ZW50cnlwb2ludHM6IFtcblx0XHRcdFwiLi9pbmRleC5qc1wiLFxuXHRcdFx0XCIuL2pzeC1ydW50aW1lLmpzXCIsXG5cdFx0XHRcIi4vanN4LWRldi1ydW50aW1lLmpzXCIsXG5cdFx0XHRcIi4vaXNvbGF0ZWQtaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3MtZG8tbm90LXVzZS10aGlzLWluLXlvdXItY29kZS5qc1wiXG5cdFx0XSxcblx0XHR1bWROYW1lOiBcImVtb3Rpb25SZWFjdFwiXG5cdH1cbn07XG5cbnZhciBqc3ggPSBmdW5jdGlvbiBqc3godHlwZSwgcHJvcHMpIHtcbiAgdmFyIGFyZ3MgPSBhcmd1bWVudHM7XG5cbiAgaWYgKHByb3BzID09IG51bGwgfHwgIWhhc093blByb3BlcnR5LmNhbGwocHJvcHMsICdjc3MnKSkge1xuICAgIC8vICRGbG93Rml4TWVcbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudC5hcHBseSh1bmRlZmluZWQsIGFyZ3MpO1xuICB9XG5cbiAgdmFyIGFyZ3NMZW5ndGggPSBhcmdzLmxlbmd0aDtcbiAgdmFyIGNyZWF0ZUVsZW1lbnRBcmdBcnJheSA9IG5ldyBBcnJheShhcmdzTGVuZ3RoKTtcbiAgY3JlYXRlRWxlbWVudEFyZ0FycmF5WzBdID0gRW1vdGlvbjtcbiAgY3JlYXRlRWxlbWVudEFyZ0FycmF5WzFdID0gY3JlYXRlRW1vdGlvblByb3BzKHR5cGUsIHByb3BzKTtcblxuICBmb3IgKHZhciBpID0gMjsgaSA8IGFyZ3NMZW5ndGg7IGkrKykge1xuICAgIGNyZWF0ZUVsZW1lbnRBcmdBcnJheVtpXSA9IGFyZ3NbaV07XG4gIH0gLy8gJEZsb3dGaXhNZVxuXG5cbiAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQuYXBwbHkobnVsbCwgY3JlYXRlRWxlbWVudEFyZ0FycmF5KTtcbn07XG5cbnZhciB3YXJuZWRBYm91dENzc1Byb3BGb3JHbG9iYWwgPSBmYWxzZTsgLy8gbWFpbnRhaW4gcGxhY2Ugb3ZlciByZXJlbmRlcnMuXG4vLyBpbml0aWFsIHJlbmRlciBmcm9tIGJyb3dzZXIsIGluc2VydEJlZm9yZSBjb250ZXh0LnNoZWV0LnRhZ3NbMF0gb3IgaWYgYSBzdHlsZSBoYXNuJ3QgYmVlbiBpbnNlcnRlZCB0aGVyZSB5ZXQsIGFwcGVuZENoaWxkXG4vLyBpbml0aWFsIGNsaWVudC1zaWRlIHJlbmRlciBmcm9tIFNTUiwgdXNlIHBsYWNlIG9mIGh5ZHJhdGluZyB0YWdcblxudmFyIEdsb2JhbCA9IC8qICNfX1BVUkVfXyAqL3dpdGhFbW90aW9uQ2FjaGUoZnVuY3Rpb24gKHByb3BzLCBjYWNoZSkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiAhd2FybmVkQWJvdXRDc3NQcm9wRm9yR2xvYmFsICYmICggLy8gY2hlY2sgZm9yIGNsYXNzTmFtZSBhcyB3ZWxsIHNpbmNlIHRoZSB1c2VyIGlzXG4gIC8vIHByb2JhYmx5IHVzaW5nIHRoZSBjdXN0b20gY3JlYXRlRWxlbWVudCB3aGljaFxuICAvLyBtZWFucyBpdCB3aWxsIGJlIHR1cm5lZCBpbnRvIGEgY2xhc3NOYW1lIHByb3BcbiAgLy8gJEZsb3dGaXhNZSBJIGRvbid0IHJlYWxseSB3YW50IHRvIGFkZCBpdCB0byB0aGUgdHlwZSBzaW5jZSBpdCBzaG91bGRuJ3QgYmUgdXNlZFxuICBwcm9wcy5jbGFzc05hbWUgfHwgcHJvcHMuY3NzKSkge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJJdCBsb29rcyBsaWtlIHlvdSdyZSB1c2luZyB0aGUgY3NzIHByb3Agb24gR2xvYmFsLCBkaWQgeW91IG1lYW4gdG8gdXNlIHRoZSBzdHlsZXMgcHJvcCBpbnN0ZWFkP1wiKTtcbiAgICB3YXJuZWRBYm91dENzc1Byb3BGb3JHbG9iYWwgPSB0cnVlO1xuICB9XG5cbiAgdmFyIHN0eWxlcyA9IHByb3BzLnN0eWxlcztcbiAgdmFyIHNlcmlhbGl6ZWQgPSBzZXJpYWxpemVTdHlsZXMoW3N0eWxlc10sIHVuZGVmaW5lZCwgdHlwZW9mIHN0eWxlcyA9PT0gJ2Z1bmN0aW9uJyB8fCBBcnJheS5pc0FycmF5KHN0eWxlcykgPyB1c2VDb250ZXh0KFRoZW1lQ29udGV4dCkgOiB1bmRlZmluZWQpO1xuICAvLyBidXQgaXQgaXMgYmFzZWQgb24gYSBjb25zdGFudCB0aGF0IHdpbGwgbmV2ZXIgY2hhbmdlIGF0IHJ1bnRpbWVcbiAgLy8gaXQncyBlZmZlY3RpdmVseSBsaWtlIGhhdmluZyB0d28gaW1wbGVtZW50YXRpb25zIGFuZCBzd2l0Y2hpbmcgdGhlbSBvdXRcbiAgLy8gc28gaXQncyBub3QgYWN0dWFsbHkgYnJlYWtpbmcgYW55dGhpbmdcblxuXG4gIHZhciBzaGVldFJlZiA9IHVzZVJlZigpO1xuICB1c2VMYXlvdXRFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIHZhciBrZXkgPSBjYWNoZS5rZXkgKyBcIi1nbG9iYWxcIjtcbiAgICB2YXIgc2hlZXQgPSBuZXcgU3R5bGVTaGVldCh7XG4gICAgICBrZXk6IGtleSxcbiAgICAgIG5vbmNlOiBjYWNoZS5zaGVldC5ub25jZSxcbiAgICAgIGNvbnRhaW5lcjogY2FjaGUuc2hlZXQuY29udGFpbmVyLFxuICAgICAgc3BlZWR5OiBjYWNoZS5zaGVldC5pc1NwZWVkeVxuICAgIH0pO1xuICAgIHZhciByZWh5ZHJhdGluZyA9IGZhbHNlOyAvLyAkRmxvd0ZpeE1lXG5cbiAgICB2YXIgbm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJzdHlsZVtkYXRhLWVtb3Rpb249XFxcIlwiICsga2V5ICsgXCIgXCIgKyBzZXJpYWxpemVkLm5hbWUgKyBcIlxcXCJdXCIpO1xuXG4gICAgaWYgKGNhY2hlLnNoZWV0LnRhZ3MubGVuZ3RoKSB7XG4gICAgICBzaGVldC5iZWZvcmUgPSBjYWNoZS5zaGVldC50YWdzWzBdO1xuICAgIH1cblxuICAgIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgICByZWh5ZHJhdGluZyA9IHRydWU7IC8vIGNsZWFyIHRoZSBoYXNoIHNvIHRoaXMgbm9kZSB3b24ndCBiZSByZWNvZ25pemFibGUgYXMgcmVoeWRyYXRhYmxlIGJ5IG90aGVyIDxHbG9iYWwvPnNcblxuICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtZW1vdGlvbicsIGtleSk7XG4gICAgICBzaGVldC5oeWRyYXRlKFtub2RlXSk7XG4gICAgfVxuXG4gICAgc2hlZXRSZWYuY3VycmVudCA9IFtzaGVldCwgcmVoeWRyYXRpbmddO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBzaGVldC5mbHVzaCgpO1xuICAgIH07XG4gIH0sIFtjYWNoZV0pO1xuICB1c2VMYXlvdXRFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIHZhciBzaGVldFJlZkN1cnJlbnQgPSBzaGVldFJlZi5jdXJyZW50O1xuICAgIHZhciBzaGVldCA9IHNoZWV0UmVmQ3VycmVudFswXSxcbiAgICAgICAgcmVoeWRyYXRpbmcgPSBzaGVldFJlZkN1cnJlbnRbMV07XG5cbiAgICBpZiAocmVoeWRyYXRpbmcpIHtcbiAgICAgIHNoZWV0UmVmQ3VycmVudFsxXSA9IGZhbHNlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChzZXJpYWxpemVkLm5leHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gaW5zZXJ0IGtleWZyYW1lc1xuICAgICAgaW5zZXJ0U3R5bGVzKGNhY2hlLCBzZXJpYWxpemVkLm5leHQsIHRydWUpO1xuICAgIH1cblxuICAgIGlmIChzaGVldC50YWdzLmxlbmd0aCkge1xuICAgICAgLy8gaWYgdGhpcyBkb2Vzbid0IGV4aXN0IHRoZW4gaXQgd2lsbCBiZSBudWxsIHNvIHRoZSBzdHlsZSBlbGVtZW50IHdpbGwgYmUgYXBwZW5kZWRcbiAgICAgIHZhciBlbGVtZW50ID0gc2hlZXQudGFnc1tzaGVldC50YWdzLmxlbmd0aCAtIDFdLm5leHRFbGVtZW50U2libGluZztcbiAgICAgIHNoZWV0LmJlZm9yZSA9IGVsZW1lbnQ7XG4gICAgICBzaGVldC5mbHVzaCgpO1xuICAgIH1cblxuICAgIGNhY2hlLmluc2VydChcIlwiLCBzZXJpYWxpemVkLCBzaGVldCwgZmFsc2UpO1xuICB9LCBbY2FjaGUsIHNlcmlhbGl6ZWQubmFtZV0pO1xuICByZXR1cm4gbnVsbDtcbn0pO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICBHbG9iYWwuZGlzcGxheU5hbWUgPSAnRW1vdGlvbkdsb2JhbCc7XG59XG5cbmZ1bmN0aW9uIGNzcygpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHJldHVybiBzZXJpYWxpemVTdHlsZXMoYXJncyk7XG59XG5cbnZhciBrZXlmcmFtZXMgPSBmdW5jdGlvbiBrZXlmcmFtZXMoKSB7XG4gIHZhciBpbnNlcnRhYmxlID0gY3NzLmFwcGx5KHZvaWQgMCwgYXJndW1lbnRzKTtcbiAgdmFyIG5hbWUgPSBcImFuaW1hdGlvbi1cIiArIGluc2VydGFibGUubmFtZTsgLy8gJEZsb3dGaXhNZVxuXG4gIHJldHVybiB7XG4gICAgbmFtZTogbmFtZSxcbiAgICBzdHlsZXM6IFwiQGtleWZyYW1lcyBcIiArIG5hbWUgKyBcIntcIiArIGluc2VydGFibGUuc3R5bGVzICsgXCJ9XCIsXG4gICAgYW5pbTogMSxcbiAgICB0b1N0cmluZzogZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgICByZXR1cm4gXCJfRU1PX1wiICsgdGhpcy5uYW1lICsgXCJfXCIgKyB0aGlzLnN0eWxlcyArIFwiX0VNT19cIjtcbiAgICB9XG4gIH07XG59O1xuXG52YXIgY2xhc3NuYW1lcyA9IGZ1bmN0aW9uIGNsYXNzbmFtZXMoYXJncykge1xuICB2YXIgbGVuID0gYXJncy5sZW5ndGg7XG4gIHZhciBpID0gMDtcbiAgdmFyIGNscyA9ICcnO1xuXG4gIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcbiAgICB2YXIgYXJnID0gYXJnc1tpXTtcbiAgICBpZiAoYXJnID09IG51bGwpIGNvbnRpbnVlO1xuICAgIHZhciB0b0FkZCA9IHZvaWQgMDtcblxuICAgIHN3aXRjaCAodHlwZW9mIGFyZykge1xuICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICB7XG4gICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoYXJnKSkge1xuICAgICAgICAgICAgdG9BZGQgPSBjbGFzc25hbWVzKGFyZyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIGFyZy5zdHlsZXMgIT09IHVuZGVmaW5lZCAmJiBhcmcubmFtZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1lvdSBoYXZlIHBhc3NlZCBzdHlsZXMgY3JlYXRlZCB3aXRoIGBjc3NgIGZyb20gYEBlbW90aW9uL3JlYWN0YCBwYWNrYWdlIHRvIHRoZSBgY3hgLlxcbicgKyAnYGN4YCBpcyBtZWFudCB0byBjb21wb3NlIGNsYXNzIG5hbWVzIChzdHJpbmdzKSBzbyB5b3Ugc2hvdWxkIGNvbnZlcnQgdGhvc2Ugc3R5bGVzIHRvIGEgY2xhc3MgbmFtZSBieSBwYXNzaW5nIHRoZW0gdG8gdGhlIGBjc3NgIHJlY2VpdmVkIGZyb20gPENsYXNzTmFtZXMvPiBjb21wb25lbnQuJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRvQWRkID0gJyc7XG5cbiAgICAgICAgICAgIGZvciAodmFyIGsgaW4gYXJnKSB7XG4gICAgICAgICAgICAgIGlmIChhcmdba10gJiYgaykge1xuICAgICAgICAgICAgICAgIHRvQWRkICYmICh0b0FkZCArPSAnICcpO1xuICAgICAgICAgICAgICAgIHRvQWRkICs9IGs7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB7XG4gICAgICAgICAgdG9BZGQgPSBhcmc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodG9BZGQpIHtcbiAgICAgIGNscyAmJiAoY2xzICs9ICcgJyk7XG4gICAgICBjbHMgKz0gdG9BZGQ7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNscztcbn07XG5cbmZ1bmN0aW9uIG1lcmdlKHJlZ2lzdGVyZWQsIGNzcywgY2xhc3NOYW1lKSB7XG4gIHZhciByZWdpc3RlcmVkU3R5bGVzID0gW107XG4gIHZhciByYXdDbGFzc05hbWUgPSBnZXRSZWdpc3RlcmVkU3R5bGVzKHJlZ2lzdGVyZWQsIHJlZ2lzdGVyZWRTdHlsZXMsIGNsYXNzTmFtZSk7XG5cbiAgaWYgKHJlZ2lzdGVyZWRTdHlsZXMubGVuZ3RoIDwgMikge1xuICAgIHJldHVybiBjbGFzc05hbWU7XG4gIH1cblxuICByZXR1cm4gcmF3Q2xhc3NOYW1lICsgY3NzKHJlZ2lzdGVyZWRTdHlsZXMpO1xufVxuXG52YXIgQ2xhc3NOYW1lcyA9IC8qICNfX1BVUkVfXyAqL3dpdGhFbW90aW9uQ2FjaGUoZnVuY3Rpb24gKHByb3BzLCBjYWNoZSkge1xuICB2YXIgaGFzUmVuZGVyZWQgPSBmYWxzZTtcblxuICB2YXIgY3NzID0gZnVuY3Rpb24gY3NzKCkge1xuICAgIGlmIChoYXNSZW5kZXJlZCAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NzcyBjYW4gb25seSBiZSB1c2VkIGR1cmluZyByZW5kZXInKTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgdmFyIHNlcmlhbGl6ZWQgPSBzZXJpYWxpemVTdHlsZXMoYXJncywgY2FjaGUucmVnaXN0ZXJlZCk7XG5cbiAgICB7XG4gICAgICBpbnNlcnRTdHlsZXMoY2FjaGUsIHNlcmlhbGl6ZWQsIGZhbHNlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY2FjaGUua2V5ICsgXCItXCIgKyBzZXJpYWxpemVkLm5hbWU7XG4gIH07XG5cbiAgdmFyIGN4ID0gZnVuY3Rpb24gY3goKSB7XG4gICAgaWYgKGhhc1JlbmRlcmVkICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY3ggY2FuIG9ubHkgYmUgdXNlZCBkdXJpbmcgcmVuZGVyJyk7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4yKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICBhcmdzW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lcmdlKGNhY2hlLnJlZ2lzdGVyZWQsIGNzcywgY2xhc3NuYW1lcyhhcmdzKSk7XG4gIH07XG5cbiAgdmFyIGNvbnRlbnQgPSB7XG4gICAgY3NzOiBjc3MsXG4gICAgY3g6IGN4LFxuICAgIHRoZW1lOiB1c2VDb250ZXh0KFRoZW1lQ29udGV4dClcbiAgfTtcbiAgdmFyIGVsZSA9IHByb3BzLmNoaWxkcmVuKGNvbnRlbnQpO1xuICBoYXNSZW5kZXJlZCA9IHRydWU7XG5cbiAgcmV0dXJuIGVsZTtcbn0pO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICBDbGFzc05hbWVzLmRpc3BsYXlOYW1lID0gJ0Vtb3Rpb25DbGFzc05hbWVzJztcbn1cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFyIGlzQnJvd3NlciA9IFwib2JqZWN0XCIgIT09ICd1bmRlZmluZWQnOyAvLyAjMTcyNyBmb3Igc29tZSByZWFzb24gSmVzdCBldmFsdWF0ZXMgbW9kdWxlcyB0d2ljZSBpZiBzb21lIGNvbnN1bWluZyBtb2R1bGUgZ2V0cyBtb2NrZWQgd2l0aCBqZXN0Lm1vY2tcblxuICB2YXIgaXNKZXN0ID0gdHlwZW9mIGplc3QgIT09ICd1bmRlZmluZWQnO1xuXG4gIGlmIChpc0Jyb3dzZXIgJiYgIWlzSmVzdCkge1xuICAgIHZhciBnbG9iYWxDb250ZXh0ID0gaXNCcm93c2VyID8gd2luZG93IDogZ2xvYmFsO1xuICAgIHZhciBnbG9iYWxLZXkgPSBcIl9fRU1PVElPTl9SRUFDVF9cIiArIHBrZy52ZXJzaW9uLnNwbGl0KCcuJylbMF0gKyBcIl9fXCI7XG5cbiAgICBpZiAoZ2xvYmFsQ29udGV4dFtnbG9iYWxLZXldKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ1lvdSBhcmUgbG9hZGluZyBAZW1vdGlvbi9yZWFjdCB3aGVuIGl0IGlzIGFscmVhZHkgbG9hZGVkLiBSdW5uaW5nICcgKyAnbXVsdGlwbGUgaW5zdGFuY2VzIG1heSBjYXVzZSBwcm9ibGVtcy4gVGhpcyBjYW4gaGFwcGVuIGlmIG11bHRpcGxlICcgKyAndmVyc2lvbnMgYXJlIHVzZWQsIG9yIGlmIG11bHRpcGxlIGJ1aWxkcyBvZiB0aGUgc2FtZSB2ZXJzaW9uIGFyZSAnICsgJ3VzZWQuJyk7XG4gICAgfVxuXG4gICAgZ2xvYmFsQ29udGV4dFtnbG9iYWxLZXldID0gdHJ1ZTtcbiAgfVxufVxuXG5leHBvcnQgeyBDbGFzc05hbWVzLCBHbG9iYWwsIGpzeCBhcyBjcmVhdGVFbGVtZW50LCBjc3MsIGpzeCwga2V5ZnJhbWVzIH07XG4iLCJpbXBvcnQgaG9pc3ROb25SZWFjdFN0YXRpY3MkMSBmcm9tICdob2lzdC1ub24tcmVhY3Qtc3RhdGljcyc7XG5cbi8vIHRoaXMgZmlsZSBpc29sYXRlcyB0aGlzIHBhY2thZ2UgdGhhdCBpcyBub3QgdHJlZS1zaGFrZWFibGVcbi8vIGFuZCBpZiB0aGlzIG1vZHVsZSBkb2Vzbid0IGFjdHVhbGx5IGNvbnRhaW4gYW55IGxvZ2ljIG9mIGl0cyBvd25cbi8vIHRoZW4gUm9sbHVwIGp1c3QgdXNlICdob2lzdC1ub24tcmVhY3Qtc3RhdGljcycgZGlyZWN0bHkgaW4gb3RoZXIgY2h1bmtzXG5cbnZhciBob2lzdE5vblJlYWN0U3RhdGljcyA9IChmdW5jdGlvbiAodGFyZ2V0Q29tcG9uZW50LCBzb3VyY2VDb21wb25lbnQpIHtcbiAgcmV0dXJuIGhvaXN0Tm9uUmVhY3RTdGF0aWNzJDEodGFyZ2V0Q29tcG9uZW50LCBzb3VyY2VDb21wb25lbnQpO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGhvaXN0Tm9uUmVhY3RTdGF0aWNzO1xuIiwiaW1wb3J0ICdyZWFjdCc7XG5pbXBvcnQgJ0BlbW90aW9uL2NhY2hlJztcbmltcG9ydCB7IGggYXMgaGFzT3duUHJvcGVydHksIEUgYXMgRW1vdGlvbiwgYyBhcyBjcmVhdGVFbW90aW9uUHJvcHMgfSBmcm9tICcuLi8uLi9kaXN0L2Vtb3Rpb24tZWxlbWVudC1hODMwOTA3MC5icm93c2VyLmVzbS5qcyc7XG5pbXBvcnQgJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcyc7XG5pbXBvcnQgJ0BlbW90aW9uL3dlYWstbWVtb2l6ZSc7XG5pbXBvcnQgJ2hvaXN0LW5vbi1yZWFjdC1zdGF0aWNzJztcbmltcG9ydCAnLi4vLi4vaXNvbGF0ZWQtaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3MtZG8tbm90LXVzZS10aGlzLWluLXlvdXItY29kZS9kaXN0L2Vtb3Rpb24tcmVhY3QtaXNvbGF0ZWQtaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3MtZG8tbm90LXVzZS10aGlzLWluLXlvdXItY29kZS5icm93c2VyLmVzbS5qcyc7XG5pbXBvcnQgJ0BlbW90aW9uL3V0aWxzJztcbmltcG9ydCAnQGVtb3Rpb24vc2VyaWFsaXplJztcbmltcG9ydCB7IEZyYWdtZW50IGFzIEZyYWdtZW50JDEsIGpzeERFViBhcyBqc3hERVYkMSB9IGZyb20gJ3JlYWN0L2pzeC1kZXYtcnVudGltZSc7XG5cbnZhciBGcmFnbWVudCA9IEZyYWdtZW50JDE7XG5mdW5jdGlvbiBqc3hERVYodHlwZSwgcHJvcHMsIGtleSwgaXNTdGF0aWNDaGlsZHJlbiwgc291cmNlLCBzZWxmKSB7XG4gIGlmICghaGFzT3duUHJvcGVydHkuY2FsbChwcm9wcywgJ2NzcycpKSB7XG4gICAgcmV0dXJuIGpzeERFViQxKHR5cGUsIHByb3BzLCBrZXksIGlzU3RhdGljQ2hpbGRyZW4sIHNvdXJjZSwgc2VsZik7XG4gIH1cblxuICByZXR1cm4ganN4REVWJDEoRW1vdGlvbiwgY3JlYXRlRW1vdGlvblByb3BzKHR5cGUsIHByb3BzKSwga2V5LCBpc1N0YXRpY0NoaWxkcmVuLCBzb3VyY2UsIHNlbGYpO1xufVxuXG5leHBvcnQgeyBGcmFnbWVudCwganN4REVWIH07XG4iLCJpbXBvcnQgeyBRdWVyeUNsaWVudCB9IGZyb20gXCJyZWFjdC1xdWVyeVwiO1xyXG5cclxuY29uc3QgcXVlcnlDbGllbnQgPSBuZXcgUXVlcnlDbGllbnQoe1xyXG4gIGRlZmF1bHRPcHRpb25zOiB7fSxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBxdWVyeUNsaWVudDtcclxuIiwiaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gXCJuZXh0L2FwcFwiO1xyXG5pbXBvcnQgeyBRdWVyeUNsaWVudFByb3ZpZGVyIH0gZnJvbSBcInJlYWN0LXF1ZXJ5XCI7XHJcbmltcG9ydCBxdWVyeUNsaWVudCBmcm9tIFwiLi4vbGlicy9xdWVyeUNsaWVudFwiO1xyXG5pbXBvcnQgZ2xvYmFsU3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvc3R5bGVzXCI7XHJcblxyXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHtnbG9iYWxTdHlsZXN9XHJcbiAgICAgIDxRdWVyeUNsaWVudFByb3ZpZGVyIGNsaWVudD17cXVlcnlDbGllbnR9PlxyXG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgPC9RdWVyeUNsaWVudFByb3ZpZGVyPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcclxuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSBcIkBlbW90aW9uL3JlYWN0XCI7XHJcblxyXG4vKiEgbm9ybWFsaXplLmNzcyB2OC4wLjEgfCBNSVQgTGljZW5zZSB8IGdpdGh1Yi5jb20vbmVjb2xhcy9ub3JtYWxpemUuY3NzICovXHJcblxyXG4vKiBEb2N1bWVudFxyXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuLyoqXHJcbiAqIDEuIENvcnJlY3QgdGhlIGxpbmUgaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cclxuICogMi4gUHJldmVudCBhZGp1c3RtZW50cyBvZiBmb250IHNpemUgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlcyBpbiBpT1MuXHJcbiAqL1xyXG5jb25zdCBjc3NOb3JtYWxpemUgPSBjc3NgXHJcbiAgaHRtbCB7XHJcbiAgICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xyXG4gICAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiAyICovXHJcbiAgfVxyXG5cclxuICAvKiBTZWN0aW9uc1xyXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuICAvKipcclxuICogUmVtb3ZlIHRoZSBtYXJnaW4gaW4gYWxsIGJyb3dzZXJzLlxyXG4gKi9cclxuXHJcbiAgYm9keSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICogUmVuZGVyIHRoZSBtYWluIGVsZW1lbnQgY29uc2lzdGVudGx5IGluIElFLlxyXG4gKi9cclxuXHJcbiAgbWFpbiB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gKiBDb3JyZWN0IHRoZSBmb250IHNpemUgYW5kIG1hcmdpbiBvbiBoMSBlbGVtZW50cyB3aXRoaW4gc2VjdGlvbiBhbmRcclxuICogYXJ0aWNsZSBjb250ZXh0cyBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBTYWZhcmkuXHJcbiAqL1xyXG5cclxuICBoMSB7XHJcbiAgICBmb250LXNpemU6IDJlbTtcclxuICAgIG1hcmdpbjogMC42N2VtIDA7XHJcbiAgfVxyXG5cclxuICAvKiBHcm91cGluZyBjb250ZW50XHJcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG4gIC8qKlxyXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBGaXJlZm94LlxyXG4gKiAyLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlIGFuZCBJRS5cclxuICovXHJcblxyXG4gIGhyIHtcclxuICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94OyAvKiAxICovXHJcbiAgICBoZWlnaHQ6IDA7IC8qIDEgKi9cclxuICAgIG92ZXJmbG93OiB2aXNpYmxlOyAvKiAyICovXHJcbiAgfVxyXG5cclxuICAvKipcclxuICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cclxuICogMi4gQ29ycmVjdCB0aGUgb2RkIGVtIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cclxuICovXHJcblxyXG4gIHByZSB7XHJcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7IC8qIDEgKi9cclxuICAgIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXHJcbiAgfVxyXG5cclxuICAvKiBUZXh0LWxldmVsIHNlbWFudGljc1xyXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuICAvKipcclxuICogUmVtb3ZlIHRoZSBncmF5IGJhY2tncm91bmQgb24gYWN0aXZlIGxpbmtzIGluIElFIDEwLlxyXG4gKi9cclxuXHJcbiAgYSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gKiAxLiBSZW1vdmUgdGhlIGJvdHRvbSBib3JkZXIgaW4gQ2hyb21lIDU3LVxyXG4gKiAyLiBBZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgSUUsIE9wZXJhLCBhbmQgU2FmYXJpLlxyXG4gKi9cclxuXHJcbiAgYWJiclt0aXRsZV0ge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTsgLyogMSAqL1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IC8qIDIgKi9cclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDsgLyogMiAqL1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAqIEFkZCB0aGUgY29ycmVjdCBmb250IHdlaWdodCBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXHJcbiAqL1xyXG5cclxuICBiLFxyXG4gIHN0cm9uZyB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXHJcbiAqIDIuIENvcnJlY3QgdGhlIG9kZCBlbSBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXHJcbiAqL1xyXG5cclxuICBjb2RlLFxyXG4gIGtiZCxcclxuICBzYW1wIHtcclxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xyXG4gICAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cclxuICovXHJcblxyXG4gIHNtYWxsIHtcclxuICAgIGZvbnQtc2l6ZTogODAlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAqIFByZXZlbnQgc3ViIGFuZCBzdXAgZWxlbWVudHMgZnJvbSBhZmZlY3RpbmcgdGhlIGxpbmUgaGVpZ2h0IGluXHJcbiAqIGFsbCBicm93c2Vycy5cclxuICovXHJcblxyXG4gIHN1YixcclxuICBzdXAge1xyXG4gICAgZm9udC1zaXplOiA3NSU7XHJcbiAgICBsaW5lLWhlaWdodDogMDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcclxuICB9XHJcblxyXG4gIHN1YiB7XHJcbiAgICBib3R0b206IC0wLjI1ZW07XHJcbiAgfVxyXG5cclxuICBzdXAge1xyXG4gICAgdG9wOiAtMC41ZW07XHJcbiAgfVxyXG5cclxuICAvKiBFbWJlZGRlZCBjb250ZW50XHJcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG4gIC8qKlxyXG4gKiBSZW1vdmUgdGhlIGJvcmRlciBvbiBpbWFnZXMgaW5zaWRlIGxpbmtzIGluIElFIDEwLlxyXG4gKi9cclxuXHJcbiAgaW1nIHtcclxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcclxuICB9XHJcblxyXG4gIC8qIEZvcm1zXHJcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG4gIC8qKlxyXG4gKiAxLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2Vycy5cclxuICogMi4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gRmlyZWZveCBhbmQgU2FmYXJpLlxyXG4gKi9cclxuXHJcbiAgYnV0dG9uLFxyXG4gIGlucHV0LFxyXG4gIG9wdGdyb3VwLFxyXG4gIHNlbGVjdCxcclxuICB0ZXh0YXJlYSB7XHJcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDsgLyogMSAqL1xyXG4gICAgZm9udC1zaXplOiAxMDAlOyAvKiAxICovXHJcbiAgICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xyXG4gICAgbWFyZ2luOiAwOyAvKiAyICovXHJcbiAgfVxyXG5cclxuICAvKipcclxuICogU2hvdyB0aGUgb3ZlcmZsb3cgaW4gSUUuXHJcbiAqIDEuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UuXHJcbiAqL1xyXG5cclxuICBidXR0b24sXHJcbiAgaW5wdXQge1xyXG4gICAgLyogMSAqL1xyXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICogUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBFZGdlLCBGaXJlZm94LCBhbmQgSUUuXHJcbiAqIDEuIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRmlyZWZveC5cclxuICovXHJcblxyXG4gIGJ1dHRvbixcclxuICBzZWxlY3Qge1xyXG4gICAgLyogMSAqL1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICogQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cclxuICovXHJcblxyXG4gIGJ1dHRvbixcclxuICBbdHlwZT1cImJ1dHRvblwiXSxcclxuICBbdHlwZT1cInJlc2V0XCJdLFxyXG4gIFt0eXBlPVwic3VibWl0XCJdIHtcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAqIFJlbW92ZSB0aGUgaW5uZXIgYm9yZGVyIGFuZCBwYWRkaW5nIGluIEZpcmVmb3guXHJcbiAqL1xyXG5cclxuICBidXR0b246Oi1tb3otZm9jdXMtaW5uZXIsXHJcbiAgW3R5cGU9XCJidXR0b25cIl06Oi1tb3otZm9jdXMtaW5uZXIsXHJcbiAgW3R5cGU9XCJyZXNldFwiXTo6LW1vei1mb2N1cy1pbm5lcixcclxuICBbdHlwZT1cInN1Ym1pdFwiXTo6LW1vei1mb2N1cy1pbm5lciB7XHJcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAqIFJlc3RvcmUgdGhlIGZvY3VzIHN0eWxlcyB1bnNldCBieSB0aGUgcHJldmlvdXMgcnVsZS5cclxuICovXHJcblxyXG4gIGJ1dHRvbjotbW96LWZvY3VzcmluZyxcclxuICBbdHlwZT1cImJ1dHRvblwiXTotbW96LWZvY3VzcmluZyxcclxuICBbdHlwZT1cInJlc2V0XCJdOi1tb3otZm9jdXNyaW5nLFxyXG4gIFt0eXBlPVwic3VibWl0XCJdOi1tb3otZm9jdXNyaW5nIHtcclxuICAgIG91dGxpbmU6IDFweCBkb3R0ZWQgQnV0dG9uVGV4dDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gKiBDb3JyZWN0IHRoZSBwYWRkaW5nIGluIEZpcmVmb3guXHJcbiAqL1xyXG5cclxuICBmaWVsZHNldCB7XHJcbiAgICBwYWRkaW5nOiAwLjM1ZW0gMC43NWVtIDAuNjI1ZW07XHJcbiAgfVxyXG5cclxuICAvKipcclxuICogMS4gQ29ycmVjdCB0aGUgdGV4dCB3cmFwcGluZyBpbiBFZGdlIGFuZCBJRS5cclxuICogMi4gQ29ycmVjdCB0aGUgY29sb3IgaW5oZXJpdGFuY2UgZnJvbSBmaWVsZHNldCBlbGVtZW50cyBpbiBJRS5cclxuICogMy4gUmVtb3ZlIHRoZSBwYWRkaW5nIHNvIGRldmVsb3BlcnMgYXJlIG5vdCBjYXVnaHQgb3V0IHdoZW4gdGhleSB6ZXJvIG91dFxyXG4gKiAgICBmaWVsZHNldCBlbGVtZW50cyBpbiBhbGwgYnJvd3NlcnMuXHJcbiAqL1xyXG5cclxuICBsZWdlbmQge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xyXG4gICAgY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cclxuICAgIGRpc3BsYXk6IHRhYmxlOyAvKiAxICovXHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7IC8qIDEgKi9cclxuICAgIHBhZGRpbmc6IDA7IC8qIDMgKi9cclxuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7IC8qIDEgKi9cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gKiBBZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSwgRmlyZWZveCwgYW5kIE9wZXJhLlxyXG4gKi9cclxuXHJcbiAgcHJvZ3Jlc3Mge1xyXG4gICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAqIFJlbW92ZSB0aGUgZGVmYXVsdCB2ZXJ0aWNhbCBzY3JvbGxiYXIgaW4gSUUgMTArLlxyXG4gKi9cclxuXHJcbiAgdGV4dGFyZWEge1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgfVxyXG5cclxuICAvKipcclxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gSUUgMTAuXHJcbiAqIDIuIFJlbW92ZSB0aGUgcGFkZGluZyBpbiBJRSAxMC5cclxuICovXHJcblxyXG4gIFt0eXBlPVwiY2hlY2tib3hcIl0sXHJcbiAgW3R5cGU9XCJyYWRpb1wiXSB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXHJcbiAgICBwYWRkaW5nOiAwOyAvKiAyICovXHJcbiAgfVxyXG5cclxuICAvKipcclxuICogQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gQ2hyb21lLlxyXG4gKi9cclxuXHJcbiAgW3R5cGU9XCJudW1iZXJcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXHJcbiAgW3R5cGU9XCJudW1iZXJcIl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAqIDEuIENvcnJlY3QgdGhlIG9kZCBhcHBlYXJhbmNlIGluIENocm9tZSBhbmQgU2FmYXJpLlxyXG4gKiAyLiBDb3JyZWN0IHRoZSBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaS5cclxuICovXHJcblxyXG4gIFt0eXBlPVwic2VhcmNoXCJdIHtcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkOyAvKiAxICovXHJcbiAgICBvdXRsaW5lLW9mZnNldDogLTJweDsgLyogMiAqL1xyXG4gIH1cclxuXHJcbiAgLyogUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIG1hY09TLiAqL1xyXG5cclxuICBbdHlwZT1cInNlYXJjaFwiXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICogMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cclxuICogMi4gQ2hhbmdlIGZvbnQgcHJvcGVydGllcyB0byBpbmhlcml0IGluIFNhZmFyaS5cclxuICovXHJcblxyXG4gIDo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDEgKi9cclxuICAgIGZvbnQ6IGluaGVyaXQ7IC8qIDIgKi9cclxuICB9XHJcblxyXG4gIC8qIEludGVyYWN0aXZlXHJcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG4gIC8qXHJcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIEVkZ2UsIElFIDEwKywgYW5kIEZpcmVmb3guXHJcbiAqL1xyXG5cclxuICBkZXRhaWxzIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuXHJcbiAgLypcclxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gYWxsIGJyb3dzZXJzLlxyXG4gKi9cclxuXHJcbiAgc3VtbWFyeSB7XHJcbiAgICBkaXNwbGF5OiBsaXN0LWl0ZW07XHJcbiAgfVxyXG5cclxuICAvKiBNaXNjXHJcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG4gIC8qKlxyXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMCsuXHJcbiAqL1xyXG5cclxuICB0ZW1wbGF0ZSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwLlxyXG4gKi9cclxuXHJcbiAgW2hpZGRlbl0ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjc3NOb3JtYWxpemU7XHJcbiIsImltcG9ydCB7IEdsb2JhbCB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xyXG5pbXBvcnQgY3NzTm9ybWFsaXplIGZyb20gXCIuL2Nzc05vcm1hbGl6ZVwiO1xyXG5cclxuY29uc3QgZ2xvYmFsU3R5bGVzID0gPEdsb2JhbCBzdHlsZXM9e2Nzc05vcm1hbGl6ZX0gLz47XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnbG9iYWxTdHlsZXM7XHJcbiIsIlxuICAgICh3aW5kb3cuX19ORVhUX1AgPSB3aW5kb3cuX19ORVhUX1AgfHwgW10pLnB1c2goW1xuICAgICAgXCIvX2FwcFwiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcmVxdWlyZShcInByaXZhdGUtbmV4dC1wYWdlcy9fYXBwLnRzeFwiKTtcbiAgICAgIH1cbiAgICBdKTtcbiAgIiwiaW1wb3J0IF9pbmhlcml0c0xvb3NlIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pbmhlcml0c0xvb3NlXCI7XG5pbXBvcnQgeyBTdWJzY3JpYmFibGUgfSBmcm9tICcuL3N1YnNjcmliYWJsZSc7XG5pbXBvcnQgeyBpc1NlcnZlciB9IGZyb20gJy4vdXRpbHMnO1xuXG52YXIgRm9jdXNNYW5hZ2VyID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfU3Vic2NyaWJhYmxlKSB7XG4gIF9pbmhlcml0c0xvb3NlKEZvY3VzTWFuYWdlciwgX1N1YnNjcmliYWJsZSk7XG5cbiAgZnVuY3Rpb24gRm9jdXNNYW5hZ2VyKCkge1xuICAgIHJldHVybiBfU3Vic2NyaWJhYmxlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBGb2N1c01hbmFnZXIucHJvdG90eXBlO1xuXG4gIF9wcm90by5vblN1YnNjcmliZSA9IGZ1bmN0aW9uIG9uU3Vic2NyaWJlKCkge1xuICAgIGlmICghdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKSB7XG4gICAgICB0aGlzLnNldERlZmF1bHRFdmVudExpc3RlbmVyKCk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5zZXRFdmVudExpc3RlbmVyID0gZnVuY3Rpb24gc2V0RXZlbnRMaXN0ZW5lcihzZXR1cCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICBpZiAodGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKSB7XG4gICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoKTtcbiAgICB9XG5cbiAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIgPSBzZXR1cChmdW5jdGlvbiAoZm9jdXNlZCkge1xuICAgICAgaWYgKHR5cGVvZiBmb2N1c2VkID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgX3RoaXMuc2V0Rm9jdXNlZChmb2N1c2VkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIF90aGlzLm9uRm9jdXMoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8uc2V0Rm9jdXNlZCA9IGZ1bmN0aW9uIHNldEZvY3VzZWQoZm9jdXNlZCkge1xuICAgIHRoaXMuZm9jdXNlZCA9IGZvY3VzZWQ7XG5cbiAgICBpZiAoZm9jdXNlZCkge1xuICAgICAgdGhpcy5vbkZvY3VzKCk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5vbkZvY3VzID0gZnVuY3Rpb24gb25Gb2N1cygpIHtcbiAgICB0aGlzLmxpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uIChsaXN0ZW5lcikge1xuICAgICAgbGlzdGVuZXIoKTtcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8uaXNGb2N1c2VkID0gZnVuY3Rpb24gaXNGb2N1c2VkKCkge1xuICAgIGlmICh0eXBlb2YgdGhpcy5mb2N1c2VkID09PSAnYm9vbGVhbicpIHtcbiAgICAgIHJldHVybiB0aGlzLmZvY3VzZWQ7XG4gICAgfSAvLyBkb2N1bWVudCBnbG9iYWwgY2FuIGJlIHVuYXZhaWxhYmxlIGluIHJlYWN0IG5hdGl2ZVxuXG5cbiAgICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIFt1bmRlZmluZWQsICd2aXNpYmxlJywgJ3ByZXJlbmRlciddLmluY2x1ZGVzKGRvY3VtZW50LnZpc2liaWxpdHlTdGF0ZSk7XG4gIH07XG5cbiAgX3Byb3RvLnNldERlZmF1bHRFdmVudExpc3RlbmVyID0gZnVuY3Rpb24gc2V0RGVmYXVsdEV2ZW50TGlzdGVuZXIoKSB7XG4gICAgdmFyIF93aW5kb3c7XG5cbiAgICBpZiAoIWlzU2VydmVyICYmICgoX3dpbmRvdyA9IHdpbmRvdykgPT0gbnVsbCA/IHZvaWQgMCA6IF93aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcikpIHtcbiAgICAgIHRoaXMuc2V0RXZlbnRMaXN0ZW5lcihmdW5jdGlvbiAob25Gb2N1cykge1xuICAgICAgICB2YXIgbGlzdGVuZXIgPSBmdW5jdGlvbiBsaXN0ZW5lcigpIHtcbiAgICAgICAgICByZXR1cm4gb25Gb2N1cygpO1xuICAgICAgICB9OyAvLyBMaXN0ZW4gdG8gdmlzaWJpbGxpdHljaGFuZ2UgYW5kIGZvY3VzXG5cblxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndmlzaWJpbGl0eWNoYW5nZScsIGxpc3RlbmVyLCBmYWxzZSk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIGxpc3RlbmVyLCBmYWxzZSk7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgLy8gQmUgc3VyZSB0byB1bnN1YnNjcmliZSBpZiBhIG5ldyBoYW5kbGVyIGlzIHNldFxuICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCd2aXNpYmlsaXR5Y2hhbmdlJywgbGlzdGVuZXIpO1xuICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdmb2N1cycsIGxpc3RlbmVyKTtcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gRm9jdXNNYW5hZ2VyO1xufShTdWJzY3JpYmFibGUpO1xuXG5leHBvcnQgdmFyIGZvY3VzTWFuYWdlciA9IG5ldyBGb2N1c01hbmFnZXIoKTsiLCJleHBvcnQgeyBDYW5jZWxsZWRFcnJvciB9IGZyb20gJy4vcmV0cnllcic7XG5leHBvcnQgeyBRdWVyeUNhY2hlIH0gZnJvbSAnLi9xdWVyeUNhY2hlJztcbmV4cG9ydCB7IFF1ZXJ5Q2xpZW50IH0gZnJvbSAnLi9xdWVyeUNsaWVudCc7XG5leHBvcnQgeyBRdWVyeU9ic2VydmVyIH0gZnJvbSAnLi9xdWVyeU9ic2VydmVyJztcbmV4cG9ydCB7IFF1ZXJpZXNPYnNlcnZlciB9IGZyb20gJy4vcXVlcmllc09ic2VydmVyJztcbmV4cG9ydCB7IEluZmluaXRlUXVlcnlPYnNlcnZlciB9IGZyb20gJy4vaW5maW5pdGVRdWVyeU9ic2VydmVyJztcbmV4cG9ydCB7IE11dGF0aW9uQ2FjaGUgfSBmcm9tICcuL211dGF0aW9uQ2FjaGUnO1xuZXhwb3J0IHsgTXV0YXRpb25PYnNlcnZlciB9IGZyb20gJy4vbXV0YXRpb25PYnNlcnZlcic7XG5leHBvcnQgeyBzZXRMb2dnZXIgfSBmcm9tICcuL2xvZ2dlcic7XG5leHBvcnQgeyBub3RpZnlNYW5hZ2VyIH0gZnJvbSAnLi9ub3RpZnlNYW5hZ2VyJztcbmV4cG9ydCB7IGZvY3VzTWFuYWdlciB9IGZyb20gJy4vZm9jdXNNYW5hZ2VyJztcbmV4cG9ydCB7IG9ubGluZU1hbmFnZXIgfSBmcm9tICcuL29ubGluZU1hbmFnZXInO1xuZXhwb3J0IHsgaGFzaFF1ZXJ5S2V5LCBpc0Vycm9yIH0gZnJvbSAnLi91dGlscyc7XG5leHBvcnQgeyBpc0NhbmNlbGxlZEVycm9yIH0gZnJvbSAnLi9yZXRyeWVyJzsgLy8gVHlwZXNcblxuZXhwb3J0ICogZnJvbSAnLi90eXBlcyc7IiwiaW1wb3J0IHsgaXNDYW5jZWxhYmxlIH0gZnJvbSAnLi9yZXRyeWVyJztcbmV4cG9ydCBmdW5jdGlvbiBpbmZpbml0ZVF1ZXJ5QmVoYXZpb3IoKSB7XG4gIHJldHVybiB7XG4gICAgb25GZXRjaDogZnVuY3Rpb24gb25GZXRjaChjb250ZXh0KSB7XG4gICAgICBjb250ZXh0LmZldGNoRm4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfY29udGV4dCRmZXRjaE9wdGlvbnMsIF9jb250ZXh0JGZldGNoT3B0aW9uczIsIF9jb250ZXh0JHN0YXRlJGRhdGEsIF9jb250ZXh0JHN0YXRlJGRhdGEyO1xuXG4gICAgICAgIHZhciBmZXRjaE1vcmUgPSAoX2NvbnRleHQkZmV0Y2hPcHRpb25zID0gY29udGV4dC5mZXRjaE9wdGlvbnMpID09IG51bGwgPyB2b2lkIDAgOiAoX2NvbnRleHQkZmV0Y2hPcHRpb25zMiA9IF9jb250ZXh0JGZldGNoT3B0aW9ucy5tZXRhKSA9PSBudWxsID8gdm9pZCAwIDogX2NvbnRleHQkZmV0Y2hPcHRpb25zMi5mZXRjaE1vcmU7XG4gICAgICAgIHZhciBwYWdlUGFyYW0gPSBmZXRjaE1vcmUgPT0gbnVsbCA/IHZvaWQgMCA6IGZldGNoTW9yZS5wYWdlUGFyYW07XG4gICAgICAgIHZhciBpc0ZldGNoaW5nTmV4dFBhZ2UgPSAoZmV0Y2hNb3JlID09IG51bGwgPyB2b2lkIDAgOiBmZXRjaE1vcmUuZGlyZWN0aW9uKSA9PT0gJ2ZvcndhcmQnO1xuICAgICAgICB2YXIgaXNGZXRjaGluZ1ByZXZpb3VzUGFnZSA9IChmZXRjaE1vcmUgPT0gbnVsbCA/IHZvaWQgMCA6IGZldGNoTW9yZS5kaXJlY3Rpb24pID09PSAnYmFja3dhcmQnO1xuICAgICAgICB2YXIgb2xkUGFnZXMgPSAoKF9jb250ZXh0JHN0YXRlJGRhdGEgPSBjb250ZXh0LnN0YXRlLmRhdGEpID09IG51bGwgPyB2b2lkIDAgOiBfY29udGV4dCRzdGF0ZSRkYXRhLnBhZ2VzKSB8fCBbXTtcbiAgICAgICAgdmFyIG9sZFBhZ2VQYXJhbXMgPSAoKF9jb250ZXh0JHN0YXRlJGRhdGEyID0gY29udGV4dC5zdGF0ZS5kYXRhKSA9PSBudWxsID8gdm9pZCAwIDogX2NvbnRleHQkc3RhdGUkZGF0YTIucGFnZVBhcmFtcykgfHwgW107XG4gICAgICAgIHZhciBuZXdQYWdlUGFyYW1zID0gb2xkUGFnZVBhcmFtcztcbiAgICAgICAgdmFyIGNhbmNlbGxlZCA9IGZhbHNlOyAvLyBHZXQgcXVlcnkgZnVuY3Rpb25cblxuICAgICAgICB2YXIgcXVlcnlGbiA9IGNvbnRleHQub3B0aW9ucy5xdWVyeUZuIHx8IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoJ01pc3NpbmcgcXVlcnlGbicpO1xuICAgICAgICB9OyAvLyBDcmVhdGUgZnVuY3Rpb24gdG8gZmV0Y2ggYSBwYWdlXG5cblxuICAgICAgICB2YXIgZmV0Y2hQYWdlID0gZnVuY3Rpb24gZmV0Y2hQYWdlKHBhZ2VzLCBtYW51YWwsIHBhcmFtLCBwcmV2aW91cykge1xuICAgICAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdCgnQ2FuY2VsbGVkJyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHR5cGVvZiBwYXJhbSA9PT0gJ3VuZGVmaW5lZCcgJiYgIW1hbnVhbCAmJiBwYWdlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUocGFnZXMpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciBxdWVyeUZuQ29udGV4dCA9IHtcbiAgICAgICAgICAgIHF1ZXJ5S2V5OiBjb250ZXh0LnF1ZXJ5S2V5LFxuICAgICAgICAgICAgcGFnZVBhcmFtOiBwYXJhbVxuICAgICAgICAgIH07XG4gICAgICAgICAgdmFyIHF1ZXJ5Rm5SZXN1bHQgPSBxdWVyeUZuKHF1ZXJ5Rm5Db250ZXh0KTtcbiAgICAgICAgICB2YXIgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZShxdWVyeUZuUmVzdWx0KS50aGVuKGZ1bmN0aW9uIChwYWdlKSB7XG4gICAgICAgICAgICBuZXdQYWdlUGFyYW1zID0gcHJldmlvdXMgPyBbcGFyYW1dLmNvbmNhdChuZXdQYWdlUGFyYW1zKSA6IFtdLmNvbmNhdChuZXdQYWdlUGFyYW1zLCBbcGFyYW1dKTtcbiAgICAgICAgICAgIHJldHVybiBwcmV2aW91cyA/IFtwYWdlXS5jb25jYXQocGFnZXMpIDogW10uY29uY2F0KHBhZ2VzLCBbcGFnZV0pO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgaWYgKGlzQ2FuY2VsYWJsZShxdWVyeUZuUmVzdWx0KSkge1xuICAgICAgICAgICAgdmFyIHByb21pc2VBc0FueSA9IHByb21pc2U7XG4gICAgICAgICAgICBwcm9taXNlQXNBbnkuY2FuY2VsID0gcXVlcnlGblJlc3VsdC5jYW5jZWw7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyIHByb21pc2U7IC8vIEZldGNoIGZpcnN0IHBhZ2U/XG5cbiAgICAgICAgaWYgKCFvbGRQYWdlcy5sZW5ndGgpIHtcbiAgICAgICAgICBwcm9taXNlID0gZmV0Y2hQYWdlKFtdKTtcbiAgICAgICAgfSAvLyBGZXRjaCBuZXh0IHBhZ2U/XG4gICAgICAgIGVsc2UgaWYgKGlzRmV0Y2hpbmdOZXh0UGFnZSkge1xuICAgICAgICAgICAgdmFyIG1hbnVhbCA9IHR5cGVvZiBwYWdlUGFyYW0gIT09ICd1bmRlZmluZWQnO1xuICAgICAgICAgICAgdmFyIHBhcmFtID0gbWFudWFsID8gcGFnZVBhcmFtIDogZ2V0TmV4dFBhZ2VQYXJhbShjb250ZXh0Lm9wdGlvbnMsIG9sZFBhZ2VzKTtcbiAgICAgICAgICAgIHByb21pc2UgPSBmZXRjaFBhZ2Uob2xkUGFnZXMsIG1hbnVhbCwgcGFyYW0pO1xuICAgICAgICAgIH0gLy8gRmV0Y2ggcHJldmlvdXMgcGFnZT9cbiAgICAgICAgICBlbHNlIGlmIChpc0ZldGNoaW5nUHJldmlvdXNQYWdlKSB7XG4gICAgICAgICAgICAgIHZhciBfbWFudWFsID0gdHlwZW9mIHBhZ2VQYXJhbSAhPT0gJ3VuZGVmaW5lZCc7XG5cbiAgICAgICAgICAgICAgdmFyIF9wYXJhbSA9IF9tYW51YWwgPyBwYWdlUGFyYW0gOiBnZXRQcmV2aW91c1BhZ2VQYXJhbShjb250ZXh0Lm9wdGlvbnMsIG9sZFBhZ2VzKTtcblxuICAgICAgICAgICAgICBwcm9taXNlID0gZmV0Y2hQYWdlKG9sZFBhZ2VzLCBfbWFudWFsLCBfcGFyYW0sIHRydWUpO1xuICAgICAgICAgICAgfSAvLyBSZWZldGNoIHBhZ2VzXG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgbmV3UGFnZVBhcmFtcyA9IFtdO1xuICAgICAgICAgICAgICAgICAgdmFyIG1hbnVhbCA9IHR5cGVvZiBjb250ZXh0Lm9wdGlvbnMuZ2V0TmV4dFBhZ2VQYXJhbSA9PT0gJ3VuZGVmaW5lZCc7IC8vIEZldGNoIGZpcnN0IHBhZ2VcblxuICAgICAgICAgICAgICAgICAgcHJvbWlzZSA9IGZldGNoUGFnZShbXSwgbWFudWFsLCBvbGRQYWdlUGFyYW1zWzBdKTsgLy8gRmV0Y2ggcmVtYWluaW5nIHBhZ2VzXG5cbiAgICAgICAgICAgICAgICAgIHZhciBfbG9vcCA9IGZ1bmN0aW9uIF9sb29wKGkpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvbWlzZSA9IHByb21pc2UudGhlbihmdW5jdGlvbiAocGFnZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgcGFyYW0gPSBtYW51YWwgPyBvbGRQYWdlUGFyYW1zW2ldIDogZ2V0TmV4dFBhZ2VQYXJhbShjb250ZXh0Lm9wdGlvbnMsIHBhZ2VzKTtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmV0Y2hQYWdlKHBhZ2VzLCBtYW51YWwsIHBhcmFtKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IG9sZFBhZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIF9sb29wKGkpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pKCk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICB2YXIgZmluYWxQcm9taXNlID0gcHJvbWlzZS50aGVuKGZ1bmN0aW9uIChwYWdlcykge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBwYWdlczogcGFnZXMsXG4gICAgICAgICAgICBwYWdlUGFyYW1zOiBuZXdQYWdlUGFyYW1zXG4gICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciBmaW5hbFByb21pc2VBc0FueSA9IGZpbmFsUHJvbWlzZTtcblxuICAgICAgICBmaW5hbFByb21pc2VBc0FueS5jYW5jZWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgY2FuY2VsbGVkID0gdHJ1ZTtcblxuICAgICAgICAgIGlmIChpc0NhbmNlbGFibGUocHJvbWlzZSkpIHtcbiAgICAgICAgICAgIHByb21pc2UuY2FuY2VsKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBmaW5hbFByb21pc2U7XG4gICAgICB9O1xuICAgIH1cbiAgfTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXROZXh0UGFnZVBhcmFtKG9wdGlvbnMsIHBhZ2VzKSB7XG4gIHJldHVybiBvcHRpb25zLmdldE5leHRQYWdlUGFyYW0gPT0gbnVsbCA/IHZvaWQgMCA6IG9wdGlvbnMuZ2V0TmV4dFBhZ2VQYXJhbShwYWdlc1twYWdlcy5sZW5ndGggLSAxXSwgcGFnZXMpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldFByZXZpb3VzUGFnZVBhcmFtKG9wdGlvbnMsIHBhZ2VzKSB7XG4gIHJldHVybiBvcHRpb25zLmdldFByZXZpb3VzUGFnZVBhcmFtID09IG51bGwgPyB2b2lkIDAgOiBvcHRpb25zLmdldFByZXZpb3VzUGFnZVBhcmFtKHBhZ2VzWzBdLCBwYWdlcyk7XG59XG4vKipcbiAqIENoZWNrcyBpZiB0aGVyZSBpcyBhIG5leHQgcGFnZS5cbiAqIFJldHVybnMgYHVuZGVmaW5lZGAgaWYgaXQgY2Fubm90IGJlIGRldGVybWluZWQuXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGhhc05leHRQYWdlKG9wdGlvbnMsIHBhZ2VzKSB7XG4gIGlmIChvcHRpb25zLmdldE5leHRQYWdlUGFyYW0gJiYgQXJyYXkuaXNBcnJheShwYWdlcykpIHtcbiAgICB2YXIgbmV4dFBhZ2VQYXJhbSA9IGdldE5leHRQYWdlUGFyYW0ob3B0aW9ucywgcGFnZXMpO1xuICAgIHJldHVybiB0eXBlb2YgbmV4dFBhZ2VQYXJhbSAhPT0gJ3VuZGVmaW5lZCcgJiYgbmV4dFBhZ2VQYXJhbSAhPT0gbnVsbCAmJiBuZXh0UGFnZVBhcmFtICE9PSBmYWxzZTtcbiAgfVxufVxuLyoqXG4gKiBDaGVja3MgaWYgdGhlcmUgaXMgYSBwcmV2aW91cyBwYWdlLlxuICogUmV0dXJucyBgdW5kZWZpbmVkYCBpZiBpdCBjYW5ub3QgYmUgZGV0ZXJtaW5lZC5cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gaGFzUHJldmlvdXNQYWdlKG9wdGlvbnMsIHBhZ2VzKSB7XG4gIGlmIChvcHRpb25zLmdldFByZXZpb3VzUGFnZVBhcmFtICYmIEFycmF5LmlzQXJyYXkocGFnZXMpKSB7XG4gICAgdmFyIHByZXZpb3VzUGFnZVBhcmFtID0gZ2V0UHJldmlvdXNQYWdlUGFyYW0ob3B0aW9ucywgcGFnZXMpO1xuICAgIHJldHVybiB0eXBlb2YgcHJldmlvdXNQYWdlUGFyYW0gIT09ICd1bmRlZmluZWQnICYmIHByZXZpb3VzUGFnZVBhcmFtICE9PSBudWxsICYmIHByZXZpb3VzUGFnZVBhcmFtICE9PSBmYWxzZTtcbiAgfVxufSIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9pbmhlcml0c0xvb3NlIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pbmhlcml0c0xvb3NlXCI7XG5pbXBvcnQgeyBRdWVyeU9ic2VydmVyIH0gZnJvbSAnLi9xdWVyeU9ic2VydmVyJztcbmltcG9ydCB7IGhhc05leHRQYWdlLCBoYXNQcmV2aW91c1BhZ2UsIGluZmluaXRlUXVlcnlCZWhhdmlvciB9IGZyb20gJy4vaW5maW5pdGVRdWVyeUJlaGF2aW9yJztcbmV4cG9ydCB2YXIgSW5maW5pdGVRdWVyeU9ic2VydmVyID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUXVlcnlPYnNlcnZlcikge1xuICBfaW5oZXJpdHNMb29zZShJbmZpbml0ZVF1ZXJ5T2JzZXJ2ZXIsIF9RdWVyeU9ic2VydmVyKTtcblxuICAvLyBUeXBlIG92ZXJyaWRlXG4gIC8vIFR5cGUgb3ZlcnJpZGVcbiAgLy8gVHlwZSBvdmVycmlkZVxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVzZWxlc3MtY29uc3RydWN0b3JcbiAgZnVuY3Rpb24gSW5maW5pdGVRdWVyeU9ic2VydmVyKGNsaWVudCwgb3B0aW9ucykge1xuICAgIHJldHVybiBfUXVlcnlPYnNlcnZlci5jYWxsKHRoaXMsIGNsaWVudCwgb3B0aW9ucykgfHwgdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBJbmZpbml0ZVF1ZXJ5T2JzZXJ2ZXIucHJvdG90eXBlO1xuXG4gIF9wcm90by5iaW5kTWV0aG9kcyA9IGZ1bmN0aW9uIGJpbmRNZXRob2RzKCkge1xuICAgIF9RdWVyeU9ic2VydmVyLnByb3RvdHlwZS5iaW5kTWV0aG9kcy5jYWxsKHRoaXMpO1xuXG4gICAgdGhpcy5mZXRjaE5leHRQYWdlID0gdGhpcy5mZXRjaE5leHRQYWdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5mZXRjaFByZXZpb3VzUGFnZSA9IHRoaXMuZmV0Y2hQcmV2aW91c1BhZ2UuYmluZCh0aGlzKTtcbiAgfTtcblxuICBfcHJvdG8uc2V0T3B0aW9ucyA9IGZ1bmN0aW9uIHNldE9wdGlvbnMob3B0aW9ucykge1xuICAgIF9RdWVyeU9ic2VydmVyLnByb3RvdHlwZS5zZXRPcHRpb25zLmNhbGwodGhpcywgX2V4dGVuZHMoe30sIG9wdGlvbnMsIHtcbiAgICAgIGJlaGF2aW9yOiBpbmZpbml0ZVF1ZXJ5QmVoYXZpb3IoKVxuICAgIH0pKTtcbiAgfTtcblxuICBfcHJvdG8uZ2V0T3B0aW1pc3RpY1Jlc3VsdCA9IGZ1bmN0aW9uIGdldE9wdGltaXN0aWNSZXN1bHQob3B0aW9ucykge1xuICAgIG9wdGlvbnMuYmVoYXZpb3IgPSBpbmZpbml0ZVF1ZXJ5QmVoYXZpb3IoKTtcbiAgICByZXR1cm4gX1F1ZXJ5T2JzZXJ2ZXIucHJvdG90eXBlLmdldE9wdGltaXN0aWNSZXN1bHQuY2FsbCh0aGlzLCBvcHRpb25zKTtcbiAgfTtcblxuICBfcHJvdG8uZmV0Y2hOZXh0UGFnZSA9IGZ1bmN0aW9uIGZldGNoTmV4dFBhZ2Uob3B0aW9ucykge1xuICAgIHJldHVybiB0aGlzLmZldGNoKHtcbiAgICAgIGNhbmNlbFJlZmV0Y2g6IHRydWUsXG4gICAgICB0aHJvd09uRXJyb3I6IG9wdGlvbnMgPT0gbnVsbCA/IHZvaWQgMCA6IG9wdGlvbnMudGhyb3dPbkVycm9yLFxuICAgICAgbWV0YToge1xuICAgICAgICBmZXRjaE1vcmU6IHtcbiAgICAgICAgICBkaXJlY3Rpb246ICdmb3J3YXJkJyxcbiAgICAgICAgICBwYWdlUGFyYW06IG9wdGlvbnMgPT0gbnVsbCA/IHZvaWQgMCA6IG9wdGlvbnMucGFnZVBhcmFtXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8uZmV0Y2hQcmV2aW91c1BhZ2UgPSBmdW5jdGlvbiBmZXRjaFByZXZpb3VzUGFnZShvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRoaXMuZmV0Y2goe1xuICAgICAgY2FuY2VsUmVmZXRjaDogdHJ1ZSxcbiAgICAgIHRocm93T25FcnJvcjogb3B0aW9ucyA9PSBudWxsID8gdm9pZCAwIDogb3B0aW9ucy50aHJvd09uRXJyb3IsXG4gICAgICBtZXRhOiB7XG4gICAgICAgIGZldGNoTW9yZToge1xuICAgICAgICAgIGRpcmVjdGlvbjogJ2JhY2t3YXJkJyxcbiAgICAgICAgICBwYWdlUGFyYW06IG9wdGlvbnMgPT0gbnVsbCA/IHZvaWQgMCA6IG9wdGlvbnMucGFnZVBhcmFtXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8uY3JlYXRlUmVzdWx0ID0gZnVuY3Rpb24gY3JlYXRlUmVzdWx0KHF1ZXJ5LCBvcHRpb25zKSB7XG4gICAgdmFyIF9zdGF0ZSRkYXRhLCBfc3RhdGUkZGF0YTIsIF9zdGF0ZSRmZXRjaE1ldGEsIF9zdGF0ZSRmZXRjaE1ldGEkZmV0YywgX3N0YXRlJGZldGNoTWV0YTIsIF9zdGF0ZSRmZXRjaE1ldGEyJGZldDtcblxuICAgIHZhciBzdGF0ZSA9IHF1ZXJ5LnN0YXRlO1xuXG4gICAgdmFyIHJlc3VsdCA9IF9RdWVyeU9ic2VydmVyLnByb3RvdHlwZS5jcmVhdGVSZXN1bHQuY2FsbCh0aGlzLCBxdWVyeSwgb3B0aW9ucyk7XG5cbiAgICByZXR1cm4gX2V4dGVuZHMoe30sIHJlc3VsdCwge1xuICAgICAgZmV0Y2hOZXh0UGFnZTogdGhpcy5mZXRjaE5leHRQYWdlLFxuICAgICAgZmV0Y2hQcmV2aW91c1BhZ2U6IHRoaXMuZmV0Y2hQcmV2aW91c1BhZ2UsXG4gICAgICBoYXNOZXh0UGFnZTogaGFzTmV4dFBhZ2Uob3B0aW9ucywgKF9zdGF0ZSRkYXRhID0gc3RhdGUuZGF0YSkgPT0gbnVsbCA/IHZvaWQgMCA6IF9zdGF0ZSRkYXRhLnBhZ2VzKSxcbiAgICAgIGhhc1ByZXZpb3VzUGFnZTogaGFzUHJldmlvdXNQYWdlKG9wdGlvbnMsIChfc3RhdGUkZGF0YTIgPSBzdGF0ZS5kYXRhKSA9PSBudWxsID8gdm9pZCAwIDogX3N0YXRlJGRhdGEyLnBhZ2VzKSxcbiAgICAgIGlzRmV0Y2hpbmdOZXh0UGFnZTogc3RhdGUuaXNGZXRjaGluZyAmJiAoKF9zdGF0ZSRmZXRjaE1ldGEgPSBzdGF0ZS5mZXRjaE1ldGEpID09IG51bGwgPyB2b2lkIDAgOiAoX3N0YXRlJGZldGNoTWV0YSRmZXRjID0gX3N0YXRlJGZldGNoTWV0YS5mZXRjaE1vcmUpID09IG51bGwgPyB2b2lkIDAgOiBfc3RhdGUkZmV0Y2hNZXRhJGZldGMuZGlyZWN0aW9uKSA9PT0gJ2ZvcndhcmQnLFxuICAgICAgaXNGZXRjaGluZ1ByZXZpb3VzUGFnZTogc3RhdGUuaXNGZXRjaGluZyAmJiAoKF9zdGF0ZSRmZXRjaE1ldGEyID0gc3RhdGUuZmV0Y2hNZXRhKSA9PSBudWxsID8gdm9pZCAwIDogKF9zdGF0ZSRmZXRjaE1ldGEyJGZldCA9IF9zdGF0ZSRmZXRjaE1ldGEyLmZldGNoTW9yZSkgPT0gbnVsbCA/IHZvaWQgMCA6IF9zdGF0ZSRmZXRjaE1ldGEyJGZldC5kaXJlY3Rpb24pID09PSAnYmFja3dhcmQnXG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIEluZmluaXRlUXVlcnlPYnNlcnZlcjtcbn0oUXVlcnlPYnNlcnZlcik7IiwiaW1wb3J0IHsgbm9vcCB9IGZyb20gJy4vdXRpbHMnOyAvLyBUWVBFU1xuXG4vLyBGVU5DVElPTlNcbnZhciBsb2dnZXIgPSBjb25zb2xlIHx8IHtcbiAgZXJyb3I6IG5vb3AsXG4gIHdhcm46IG5vb3AsXG4gIGxvZzogbm9vcFxufTtcbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2dnZXIoKSB7XG4gIHJldHVybiBsb2dnZXI7XG59XG5leHBvcnQgZnVuY3Rpb24gc2V0TG9nZ2VyKG5ld0xvZ2dlcikge1xuICBsb2dnZXIgPSBuZXdMb2dnZXI7XG59IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgeyBnZXRMb2dnZXIgfSBmcm9tICcuL2xvZ2dlcic7XG5pbXBvcnQgeyBub3RpZnlNYW5hZ2VyIH0gZnJvbSAnLi9ub3RpZnlNYW5hZ2VyJztcbmltcG9ydCB7IFJldHJ5ZXIgfSBmcm9tICcuL3JldHJ5ZXInO1xuaW1wb3J0IHsgbm9vcCB9IGZyb20gJy4vdXRpbHMnOyAvLyBUWVBFU1xuXG4vLyBDTEFTU1xuZXhwb3J0IHZhciBNdXRhdGlvbiA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIE11dGF0aW9uKGNvbmZpZykge1xuICAgIHRoaXMub3B0aW9ucyA9IF9leHRlbmRzKHt9LCBjb25maWcuZGVmYXVsdE9wdGlvbnMsIGNvbmZpZy5vcHRpb25zKTtcbiAgICB0aGlzLm11dGF0aW9uSWQgPSBjb25maWcubXV0YXRpb25JZDtcbiAgICB0aGlzLm11dGF0aW9uQ2FjaGUgPSBjb25maWcubXV0YXRpb25DYWNoZTtcbiAgICB0aGlzLm9ic2VydmVycyA9IFtdO1xuICAgIHRoaXMuc3RhdGUgPSBjb25maWcuc3RhdGUgfHwgZ2V0RGVmYXVsdFN0YXRlKCk7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gTXV0YXRpb24ucHJvdG90eXBlO1xuXG4gIF9wcm90by5zZXRTdGF0ZSA9IGZ1bmN0aW9uIHNldFN0YXRlKHN0YXRlKSB7XG4gICAgdGhpcy5kaXNwYXRjaCh7XG4gICAgICB0eXBlOiAnc2V0U3RhdGUnLFxuICAgICAgc3RhdGU6IHN0YXRlXG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLmFkZE9ic2VydmVyID0gZnVuY3Rpb24gYWRkT2JzZXJ2ZXIob2JzZXJ2ZXIpIHtcbiAgICBpZiAodGhpcy5vYnNlcnZlcnMuaW5kZXhPZihvYnNlcnZlcikgPT09IC0xKSB7XG4gICAgICB0aGlzLm9ic2VydmVycy5wdXNoKG9ic2VydmVyKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLnJlbW92ZU9ic2VydmVyID0gZnVuY3Rpb24gcmVtb3ZlT2JzZXJ2ZXIob2JzZXJ2ZXIpIHtcbiAgICB0aGlzLm9ic2VydmVycyA9IHRoaXMub2JzZXJ2ZXJzLmZpbHRlcihmdW5jdGlvbiAoeCkge1xuICAgICAgcmV0dXJuIHggIT09IG9ic2VydmVyO1xuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5jYW5jZWwgPSBmdW5jdGlvbiBjYW5jZWwoKSB7XG4gICAgaWYgKHRoaXMucmV0cnllcikge1xuICAgICAgdGhpcy5yZXRyeWVyLmNhbmNlbCgpO1xuICAgICAgcmV0dXJuIHRoaXMucmV0cnllci5wcm9taXNlLnRoZW4obm9vcCkuY2F0Y2gobm9vcCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICB9O1xuXG4gIF9wcm90by5jb250aW51ZSA9IGZ1bmN0aW9uIF9jb250aW51ZSgpIHtcbiAgICBpZiAodGhpcy5yZXRyeWVyKSB7XG4gICAgICB0aGlzLnJldHJ5ZXIuY29udGludWUoKTtcbiAgICAgIHJldHVybiB0aGlzLnJldHJ5ZXIucHJvbWlzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5leGVjdXRlKCk7XG4gIH07XG5cbiAgX3Byb3RvLmV4ZWN1dGUgPSBmdW5jdGlvbiBleGVjdXRlKCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICB2YXIgZGF0YTtcbiAgICB2YXIgcmVzdG9yZWQgPSB0aGlzLnN0YXRlLnN0YXR1cyA9PT0gJ2xvYWRpbmcnO1xuICAgIHZhciBwcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKCk7XG5cbiAgICBpZiAoIXJlc3RvcmVkKSB7XG4gICAgICB0aGlzLmRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogJ2xvYWRpbmcnLFxuICAgICAgICB2YXJpYWJsZXM6IHRoaXMub3B0aW9ucy52YXJpYWJsZXNcbiAgICAgIH0pO1xuICAgICAgcHJvbWlzZSA9IHByb21pc2UudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5vcHRpb25zLm9uTXV0YXRlID09IG51bGwgPyB2b2lkIDAgOiBfdGhpcy5vcHRpb25zLm9uTXV0YXRlKF90aGlzLnN0YXRlLnZhcmlhYmxlcyk7XG4gICAgICB9KS50aGVuKGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgICAgIGlmIChjb250ZXh0ICE9PSBfdGhpcy5zdGF0ZS5jb250ZXh0KSB7XG4gICAgICAgICAgX3RoaXMuZGlzcGF0Y2goe1xuICAgICAgICAgICAgdHlwZTogJ2xvYWRpbmcnLFxuICAgICAgICAgICAgY29udGV4dDogY29udGV4dCxcbiAgICAgICAgICAgIHZhcmlhYmxlczogX3RoaXMuc3RhdGUudmFyaWFibGVzXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9taXNlLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIF90aGlzLmV4ZWN1dGVNdXRhdGlvbigpO1xuICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgZGF0YSA9IHJlc3VsdDsgLy8gTm90aWZ5IGNhY2hlIGNhbGxiYWNrXG5cbiAgICAgIF90aGlzLm11dGF0aW9uQ2FjaGUuY29uZmlnLm9uU3VjY2VzcyA9PSBudWxsID8gdm9pZCAwIDogX3RoaXMubXV0YXRpb25DYWNoZS5jb25maWcub25TdWNjZXNzKGRhdGEsIF90aGlzLnN0YXRlLnZhcmlhYmxlcywgX3RoaXMuc3RhdGUuY29udGV4dCwgX3RoaXMpO1xuICAgIH0pLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIF90aGlzLm9wdGlvbnMub25TdWNjZXNzID09IG51bGwgPyB2b2lkIDAgOiBfdGhpcy5vcHRpb25zLm9uU3VjY2VzcyhkYXRhLCBfdGhpcy5zdGF0ZS52YXJpYWJsZXMsIF90aGlzLnN0YXRlLmNvbnRleHQpO1xuICAgIH0pLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIF90aGlzLm9wdGlvbnMub25TZXR0bGVkID09IG51bGwgPyB2b2lkIDAgOiBfdGhpcy5vcHRpb25zLm9uU2V0dGxlZChkYXRhLCBudWxsLCBfdGhpcy5zdGF0ZS52YXJpYWJsZXMsIF90aGlzLnN0YXRlLmNvbnRleHQpO1xuICAgIH0pLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMuZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiAnc3VjY2VzcycsXG4gICAgICAgIGRhdGE6IGRhdGFcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgIC8vIE5vdGlmeSBjYWNoZSBjYWxsYmFja1xuICAgICAgX3RoaXMubXV0YXRpb25DYWNoZS5jb25maWcub25FcnJvciA9PSBudWxsID8gdm9pZCAwIDogX3RoaXMubXV0YXRpb25DYWNoZS5jb25maWcub25FcnJvcihlcnJvciwgX3RoaXMuc3RhdGUudmFyaWFibGVzLCBfdGhpcy5zdGF0ZS5jb250ZXh0LCBfdGhpcyk7IC8vIExvZyBlcnJvclxuXG4gICAgICBnZXRMb2dnZXIoKS5lcnJvcihlcnJvcik7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5vcHRpb25zLm9uRXJyb3IgPT0gbnVsbCA/IHZvaWQgMCA6IF90aGlzLm9wdGlvbnMub25FcnJvcihlcnJvciwgX3RoaXMuc3RhdGUudmFyaWFibGVzLCBfdGhpcy5zdGF0ZS5jb250ZXh0KTtcbiAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX3RoaXMub3B0aW9ucy5vblNldHRsZWQgPT0gbnVsbCA/IHZvaWQgMCA6IF90aGlzLm9wdGlvbnMub25TZXR0bGVkKHVuZGVmaW5lZCwgZXJyb3IsIF90aGlzLnN0YXRlLnZhcmlhYmxlcywgX3RoaXMuc3RhdGUuY29udGV4dCk7XG4gICAgICB9KS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXMuZGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICAgICAgZXJyb3I6IGVycm9yXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRocm93IGVycm9yO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLmV4ZWN1dGVNdXRhdGlvbiA9IGZ1bmN0aW9uIGV4ZWN1dGVNdXRhdGlvbigpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcyxcbiAgICAgICAgX3RoaXMkb3B0aW9ucyRyZXRyeTtcblxuICAgIHRoaXMucmV0cnllciA9IG5ldyBSZXRyeWVyKHtcbiAgICAgIGZuOiBmdW5jdGlvbiBmbigpIHtcbiAgICAgICAgaWYgKCFfdGhpczIub3B0aW9ucy5tdXRhdGlvbkZuKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KCdObyBtdXRhdGlvbkZuIGZvdW5kJyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gX3RoaXMyLm9wdGlvbnMubXV0YXRpb25GbihfdGhpczIuc3RhdGUudmFyaWFibGVzKTtcbiAgICAgIH0sXG4gICAgICBvbkZhaWw6IGZ1bmN0aW9uIG9uRmFpbCgpIHtcbiAgICAgICAgX3RoaXMyLmRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiAnZmFpbGVkJ1xuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICBvblBhdXNlOiBmdW5jdGlvbiBvblBhdXNlKCkge1xuICAgICAgICBfdGhpczIuZGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6ICdwYXVzZSdcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgb25Db250aW51ZTogZnVuY3Rpb24gb25Db250aW51ZSgpIHtcbiAgICAgICAgX3RoaXMyLmRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiAnY29udGludWUnXG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIHJldHJ5OiAoX3RoaXMkb3B0aW9ucyRyZXRyeSA9IHRoaXMub3B0aW9ucy5yZXRyeSkgIT0gbnVsbCA/IF90aGlzJG9wdGlvbnMkcmV0cnkgOiAwLFxuICAgICAgcmV0cnlEZWxheTogdGhpcy5vcHRpb25zLnJldHJ5RGVsYXlcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcy5yZXRyeWVyLnByb21pc2U7XG4gIH07XG5cbiAgX3Byb3RvLmRpc3BhdGNoID0gZnVuY3Rpb24gZGlzcGF0Y2goYWN0aW9uKSB7XG4gICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICB0aGlzLnN0YXRlID0gcmVkdWNlcih0aGlzLnN0YXRlLCBhY3Rpb24pO1xuICAgIG5vdGlmeU1hbmFnZXIuYmF0Y2goZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMzLm9ic2VydmVycy5mb3JFYWNoKGZ1bmN0aW9uIChvYnNlcnZlcikge1xuICAgICAgICBvYnNlcnZlci5vbk11dGF0aW9uVXBkYXRlKGFjdGlvbik7XG4gICAgICB9KTtcblxuICAgICAgX3RoaXMzLm11dGF0aW9uQ2FjaGUubm90aWZ5KF90aGlzMyk7XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIE11dGF0aW9uO1xufSgpO1xuZXhwb3J0IGZ1bmN0aW9uIGdldERlZmF1bHRTdGF0ZSgpIHtcbiAgcmV0dXJuIHtcbiAgICBjb250ZXh0OiB1bmRlZmluZWQsXG4gICAgZGF0YTogdW5kZWZpbmVkLFxuICAgIGVycm9yOiBudWxsLFxuICAgIGZhaWx1cmVDb3VudDogMCxcbiAgICBpc1BhdXNlZDogZmFsc2UsXG4gICAgc3RhdHVzOiAnaWRsZScsXG4gICAgdmFyaWFibGVzOiB1bmRlZmluZWRcbiAgfTtcbn1cblxuZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSwgYWN0aW9uKSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlICdmYWlsZWQnOlxuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgICBmYWlsdXJlQ291bnQ6IHN0YXRlLmZhaWx1cmVDb3VudCArIDFcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAncGF1c2UnOlxuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgICBpc1BhdXNlZDogdHJ1ZVxuICAgICAgfSk7XG5cbiAgICBjYXNlICdjb250aW51ZSc6XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgICAgIGlzUGF1c2VkOiBmYWxzZVxuICAgICAgfSk7XG5cbiAgICBjYXNlICdsb2FkaW5nJzpcbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgY29udGV4dDogYWN0aW9uLmNvbnRleHQsXG4gICAgICAgIGRhdGE6IHVuZGVmaW5lZCxcbiAgICAgICAgZXJyb3I6IG51bGwsXG4gICAgICAgIGlzUGF1c2VkOiBmYWxzZSxcbiAgICAgICAgc3RhdHVzOiAnbG9hZGluZycsXG4gICAgICAgIHZhcmlhYmxlczogYWN0aW9uLnZhcmlhYmxlc1xuICAgICAgfSk7XG5cbiAgICBjYXNlICdzdWNjZXNzJzpcbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgZGF0YTogYWN0aW9uLmRhdGEsXG4gICAgICAgIGVycm9yOiBudWxsLFxuICAgICAgICBzdGF0dXM6ICdzdWNjZXNzJyxcbiAgICAgICAgaXNQYXVzZWQ6IGZhbHNlXG4gICAgICB9KTtcblxuICAgIGNhc2UgJ2Vycm9yJzpcbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgZGF0YTogdW5kZWZpbmVkLFxuICAgICAgICBlcnJvcjogYWN0aW9uLmVycm9yLFxuICAgICAgICBmYWlsdXJlQ291bnQ6IHN0YXRlLmZhaWx1cmVDb3VudCArIDEsXG4gICAgICAgIGlzUGF1c2VkOiBmYWxzZSxcbiAgICAgICAgc3RhdHVzOiAnZXJyb3InXG4gICAgICB9KTtcblxuICAgIGNhc2UgJ3NldFN0YXRlJzpcbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIGFjdGlvbi5zdGF0ZSk7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59IiwiaW1wb3J0IF9pbmhlcml0c0xvb3NlIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pbmhlcml0c0xvb3NlXCI7XG5pbXBvcnQgeyBub3RpZnlNYW5hZ2VyIH0gZnJvbSAnLi9ub3RpZnlNYW5hZ2VyJztcbmltcG9ydCB7IE11dGF0aW9uIH0gZnJvbSAnLi9tdXRhdGlvbic7XG5pbXBvcnQgeyBtYXRjaE11dGF0aW9uLCBub29wIH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgeyBTdWJzY3JpYmFibGUgfSBmcm9tICcuL3N1YnNjcmliYWJsZSc7IC8vIFRZUEVTXG5cbi8vIENMQVNTXG5leHBvcnQgdmFyIE11dGF0aW9uQ2FjaGUgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9TdWJzY3JpYmFibGUpIHtcbiAgX2luaGVyaXRzTG9vc2UoTXV0YXRpb25DYWNoZSwgX1N1YnNjcmliYWJsZSk7XG5cbiAgZnVuY3Rpb24gTXV0YXRpb25DYWNoZShjb25maWcpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfdGhpcyA9IF9TdWJzY3JpYmFibGUuY2FsbCh0aGlzKSB8fCB0aGlzO1xuICAgIF90aGlzLmNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcbiAgICBfdGhpcy5tdXRhdGlvbnMgPSBbXTtcbiAgICBfdGhpcy5tdXRhdGlvbklkID0gMDtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gTXV0YXRpb25DYWNoZS5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmJ1aWxkID0gZnVuY3Rpb24gYnVpbGQoY2xpZW50LCBvcHRpb25zLCBzdGF0ZSkge1xuICAgIHZhciBtdXRhdGlvbiA9IG5ldyBNdXRhdGlvbih7XG4gICAgICBtdXRhdGlvbkNhY2hlOiB0aGlzLFxuICAgICAgbXV0YXRpb25JZDogKyt0aGlzLm11dGF0aW9uSWQsXG4gICAgICBvcHRpb25zOiBjbGllbnQuZGVmYXVsdE11dGF0aW9uT3B0aW9ucyhvcHRpb25zKSxcbiAgICAgIHN0YXRlOiBzdGF0ZSxcbiAgICAgIGRlZmF1bHRPcHRpb25zOiBvcHRpb25zLm11dGF0aW9uS2V5ID8gY2xpZW50LmdldE11dGF0aW9uRGVmYXVsdHMob3B0aW9ucy5tdXRhdGlvbktleSkgOiB1bmRlZmluZWRcbiAgICB9KTtcbiAgICB0aGlzLmFkZChtdXRhdGlvbik7XG4gICAgcmV0dXJuIG11dGF0aW9uO1xuICB9O1xuXG4gIF9wcm90by5hZGQgPSBmdW5jdGlvbiBhZGQobXV0YXRpb24pIHtcbiAgICB0aGlzLm11dGF0aW9ucy5wdXNoKG11dGF0aW9uKTtcbiAgICB0aGlzLm5vdGlmeShtdXRhdGlvbik7XG4gIH07XG5cbiAgX3Byb3RvLnJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZShtdXRhdGlvbikge1xuICAgIHRoaXMubXV0YXRpb25zID0gdGhpcy5tdXRhdGlvbnMuZmlsdGVyKGZ1bmN0aW9uICh4KSB7XG4gICAgICByZXR1cm4geCAhPT0gbXV0YXRpb247XG4gICAgfSk7XG4gICAgbXV0YXRpb24uY2FuY2VsKCk7XG4gICAgdGhpcy5ub3RpZnkobXV0YXRpb24pO1xuICB9O1xuXG4gIF9wcm90by5jbGVhciA9IGZ1bmN0aW9uIGNsZWFyKCkge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgbm90aWZ5TWFuYWdlci5iYXRjaChmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpczIubXV0YXRpb25zLmZvckVhY2goZnVuY3Rpb24gKG11dGF0aW9uKSB7XG4gICAgICAgIF90aGlzMi5yZW1vdmUobXV0YXRpb24pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLmdldEFsbCA9IGZ1bmN0aW9uIGdldEFsbCgpIHtcbiAgICByZXR1cm4gdGhpcy5tdXRhdGlvbnM7XG4gIH07XG5cbiAgX3Byb3RvLmZpbmQgPSBmdW5jdGlvbiBmaW5kKGZpbHRlcnMpIHtcbiAgICBpZiAodHlwZW9mIGZpbHRlcnMuZXhhY3QgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBmaWx0ZXJzLmV4YWN0ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5tdXRhdGlvbnMuZmluZChmdW5jdGlvbiAobXV0YXRpb24pIHtcbiAgICAgIHJldHVybiBtYXRjaE11dGF0aW9uKGZpbHRlcnMsIG11dGF0aW9uKTtcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8uZmluZEFsbCA9IGZ1bmN0aW9uIGZpbmRBbGwoZmlsdGVycykge1xuICAgIHJldHVybiB0aGlzLm11dGF0aW9ucy5maWx0ZXIoZnVuY3Rpb24gKG11dGF0aW9uKSB7XG4gICAgICByZXR1cm4gbWF0Y2hNdXRhdGlvbihmaWx0ZXJzLCBtdXRhdGlvbik7XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLm5vdGlmeSA9IGZ1bmN0aW9uIG5vdGlmeShtdXRhdGlvbikge1xuICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgbm90aWZ5TWFuYWdlci5iYXRjaChmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpczMubGlzdGVuZXJzLmZvckVhY2goZnVuY3Rpb24gKGxpc3RlbmVyKSB7XG4gICAgICAgIGxpc3RlbmVyKG11dGF0aW9uKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5vbkZvY3VzID0gZnVuY3Rpb24gb25Gb2N1cygpIHtcbiAgICB0aGlzLnJlc3VtZVBhdXNlZE11dGF0aW9ucygpO1xuICB9O1xuXG4gIF9wcm90by5vbk9ubGluZSA9IGZ1bmN0aW9uIG9uT25saW5lKCkge1xuICAgIHRoaXMucmVzdW1lUGF1c2VkTXV0YXRpb25zKCk7XG4gIH07XG5cbiAgX3Byb3RvLnJlc3VtZVBhdXNlZE11dGF0aW9ucyA9IGZ1bmN0aW9uIHJlc3VtZVBhdXNlZE11dGF0aW9ucygpIHtcbiAgICB2YXIgcGF1c2VkTXV0YXRpb25zID0gdGhpcy5tdXRhdGlvbnMuZmlsdGVyKGZ1bmN0aW9uICh4KSB7XG4gICAgICByZXR1cm4geC5zdGF0ZS5pc1BhdXNlZDtcbiAgICB9KTtcbiAgICByZXR1cm4gbm90aWZ5TWFuYWdlci5iYXRjaChmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gcGF1c2VkTXV0YXRpb25zLnJlZHVjZShmdW5jdGlvbiAocHJvbWlzZSwgbXV0YXRpb24pIHtcbiAgICAgICAgcmV0dXJuIHByb21pc2UudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIG11dGF0aW9uLmNvbnRpbnVlKCkuY2F0Y2gobm9vcCk7XG4gICAgICAgIH0pO1xuICAgICAgfSwgUHJvbWlzZS5yZXNvbHZlKCkpO1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiBNdXRhdGlvbkNhY2hlO1xufShTdWJzY3JpYmFibGUpOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9pbmhlcml0c0xvb3NlIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pbmhlcml0c0xvb3NlXCI7XG5pbXBvcnQgeyBnZXREZWZhdWx0U3RhdGUgfSBmcm9tICcuL211dGF0aW9uJztcbmltcG9ydCB7IG5vdGlmeU1hbmFnZXIgfSBmcm9tICcuL25vdGlmeU1hbmFnZXInO1xuaW1wb3J0IHsgU3Vic2NyaWJhYmxlIH0gZnJvbSAnLi9zdWJzY3JpYmFibGUnO1xuLy8gQ0xBU1NcbmV4cG9ydCB2YXIgTXV0YXRpb25PYnNlcnZlciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1N1YnNjcmliYWJsZSkge1xuICBfaW5oZXJpdHNMb29zZShNdXRhdGlvbk9ic2VydmVyLCBfU3Vic2NyaWJhYmxlKTtcblxuICBmdW5jdGlvbiBNdXRhdGlvbk9ic2VydmVyKGNsaWVudCwgb3B0aW9ucykge1xuICAgIHZhciBfdGhpcztcblxuICAgIF90aGlzID0gX1N1YnNjcmliYWJsZS5jYWxsKHRoaXMpIHx8IHRoaXM7XG4gICAgX3RoaXMuY2xpZW50ID0gY2xpZW50O1xuXG4gICAgX3RoaXMuc2V0T3B0aW9ucyhvcHRpb25zKTtcblxuICAgIF90aGlzLmJpbmRNZXRob2RzKCk7XG5cbiAgICBfdGhpcy51cGRhdGVSZXN1bHQoKTtcblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBNdXRhdGlvbk9ic2VydmVyLnByb3RvdHlwZTtcblxuICBfcHJvdG8uYmluZE1ldGhvZHMgPSBmdW5jdGlvbiBiaW5kTWV0aG9kcygpIHtcbiAgICB0aGlzLm11dGF0ZSA9IHRoaXMubXV0YXRlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5yZXNldCA9IHRoaXMucmVzZXQuYmluZCh0aGlzKTtcbiAgfTtcblxuICBfcHJvdG8uc2V0T3B0aW9ucyA9IGZ1bmN0aW9uIHNldE9wdGlvbnMob3B0aW9ucykge1xuICAgIHRoaXMub3B0aW9ucyA9IHRoaXMuY2xpZW50LmRlZmF1bHRNdXRhdGlvbk9wdGlvbnMob3B0aW9ucyk7XG4gIH07XG5cbiAgX3Byb3RvLm9uVW5zdWJzY3JpYmUgPSBmdW5jdGlvbiBvblVuc3Vic2NyaWJlKCkge1xuICAgIGlmICghdGhpcy5saXN0ZW5lcnMubGVuZ3RoKSB7XG4gICAgICB2YXIgX3RoaXMkY3VycmVudE11dGF0aW9uO1xuXG4gICAgICAoX3RoaXMkY3VycmVudE11dGF0aW9uID0gdGhpcy5jdXJyZW50TXV0YXRpb24pID09IG51bGwgPyB2b2lkIDAgOiBfdGhpcyRjdXJyZW50TXV0YXRpb24ucmVtb3ZlT2JzZXJ2ZXIodGhpcyk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5vbk11dGF0aW9uVXBkYXRlID0gZnVuY3Rpb24gb25NdXRhdGlvblVwZGF0ZShhY3Rpb24pIHtcbiAgICB0aGlzLnVwZGF0ZVJlc3VsdCgpOyAvLyBEZXRlcm1pbmUgd2hpY2ggY2FsbGJhY2tzIHRvIHRyaWdnZXJcblxuICAgIHZhciBub3RpZnlPcHRpb25zID0ge1xuICAgICAgbGlzdGVuZXJzOiB0cnVlXG4gICAgfTtcblxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICBub3RpZnlPcHRpb25zLm9uU3VjY2VzcyA9IHRydWU7XG4gICAgfSBlbHNlIGlmIChhY3Rpb24udHlwZSA9PT0gJ2Vycm9yJykge1xuICAgICAgbm90aWZ5T3B0aW9ucy5vbkVycm9yID0gdHJ1ZTtcbiAgICB9XG5cbiAgICB0aGlzLm5vdGlmeShub3RpZnlPcHRpb25zKTtcbiAgfTtcblxuICBfcHJvdG8uZ2V0Q3VycmVudFJlc3VsdCA9IGZ1bmN0aW9uIGdldEN1cnJlbnRSZXN1bHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudFJlc3VsdDtcbiAgfTtcblxuICBfcHJvdG8ucmVzZXQgPSBmdW5jdGlvbiByZXNldCgpIHtcbiAgICB0aGlzLmN1cnJlbnRNdXRhdGlvbiA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnVwZGF0ZVJlc3VsdCgpO1xuICAgIHRoaXMubm90aWZ5KHtcbiAgICAgIGxpc3RlbmVyczogdHJ1ZVxuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5tdXRhdGUgPSBmdW5jdGlvbiBtdXRhdGUodmFyaWFibGVzLCBvcHRpb25zKSB7XG4gICAgdGhpcy5tdXRhdGVPcHRpb25zID0gb3B0aW9ucztcblxuICAgIGlmICh0aGlzLmN1cnJlbnRNdXRhdGlvbikge1xuICAgICAgdGhpcy5jdXJyZW50TXV0YXRpb24ucmVtb3ZlT2JzZXJ2ZXIodGhpcyk7XG4gICAgfVxuXG4gICAgdGhpcy5jdXJyZW50TXV0YXRpb24gPSB0aGlzLmNsaWVudC5nZXRNdXRhdGlvbkNhY2hlKCkuYnVpbGQodGhpcy5jbGllbnQsIF9leHRlbmRzKHt9LCB0aGlzLm9wdGlvbnMsIHtcbiAgICAgIHZhcmlhYmxlczogdHlwZW9mIHZhcmlhYmxlcyAhPT0gJ3VuZGVmaW5lZCcgPyB2YXJpYWJsZXMgOiB0aGlzLm9wdGlvbnMudmFyaWFibGVzXG4gICAgfSkpO1xuICAgIHRoaXMuY3VycmVudE11dGF0aW9uLmFkZE9ic2VydmVyKHRoaXMpO1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnRNdXRhdGlvbi5leGVjdXRlKCk7XG4gIH07XG5cbiAgX3Byb3RvLnVwZGF0ZVJlc3VsdCA9IGZ1bmN0aW9uIHVwZGF0ZVJlc3VsdCgpIHtcbiAgICB2YXIgc3RhdGUgPSB0aGlzLmN1cnJlbnRNdXRhdGlvbiA/IHRoaXMuY3VycmVudE11dGF0aW9uLnN0YXRlIDogZ2V0RGVmYXVsdFN0YXRlKCk7XG4gICAgdGhpcy5jdXJyZW50UmVzdWx0ID0gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgICBpc0xvYWRpbmc6IHN0YXRlLnN0YXR1cyA9PT0gJ2xvYWRpbmcnLFxuICAgICAgaXNTdWNjZXNzOiBzdGF0ZS5zdGF0dXMgPT09ICdzdWNjZXNzJyxcbiAgICAgIGlzRXJyb3I6IHN0YXRlLnN0YXR1cyA9PT0gJ2Vycm9yJyxcbiAgICAgIGlzSWRsZTogc3RhdGUuc3RhdHVzID09PSAnaWRsZScsXG4gICAgICBtdXRhdGU6IHRoaXMubXV0YXRlLFxuICAgICAgcmVzZXQ6IHRoaXMucmVzZXRcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8ubm90aWZ5ID0gZnVuY3Rpb24gbm90aWZ5KG9wdGlvbnMpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIG5vdGlmeU1hbmFnZXIuYmF0Y2goZnVuY3Rpb24gKCkge1xuICAgICAgLy8gRmlyc3QgdHJpZ2dlciB0aGUgbXV0YXRlIGNhbGxiYWNrc1xuICAgICAgaWYgKF90aGlzMi5tdXRhdGVPcHRpb25zKSB7XG4gICAgICAgIGlmIChvcHRpb25zLm9uU3VjY2Vzcykge1xuICAgICAgICAgIF90aGlzMi5tdXRhdGVPcHRpb25zLm9uU3VjY2VzcyA9PSBudWxsID8gdm9pZCAwIDogX3RoaXMyLm11dGF0ZU9wdGlvbnMub25TdWNjZXNzKF90aGlzMi5jdXJyZW50UmVzdWx0LmRhdGEsIF90aGlzMi5jdXJyZW50UmVzdWx0LnZhcmlhYmxlcywgX3RoaXMyLmN1cnJlbnRSZXN1bHQuY29udGV4dCk7XG4gICAgICAgICAgX3RoaXMyLm11dGF0ZU9wdGlvbnMub25TZXR0bGVkID09IG51bGwgPyB2b2lkIDAgOiBfdGhpczIubXV0YXRlT3B0aW9ucy5vblNldHRsZWQoX3RoaXMyLmN1cnJlbnRSZXN1bHQuZGF0YSwgbnVsbCwgX3RoaXMyLmN1cnJlbnRSZXN1bHQudmFyaWFibGVzLCBfdGhpczIuY3VycmVudFJlc3VsdC5jb250ZXh0KTtcbiAgICAgICAgfSBlbHNlIGlmIChvcHRpb25zLm9uRXJyb3IpIHtcbiAgICAgICAgICBfdGhpczIubXV0YXRlT3B0aW9ucy5vbkVycm9yID09IG51bGwgPyB2b2lkIDAgOiBfdGhpczIubXV0YXRlT3B0aW9ucy5vbkVycm9yKF90aGlzMi5jdXJyZW50UmVzdWx0LmVycm9yLCBfdGhpczIuY3VycmVudFJlc3VsdC52YXJpYWJsZXMsIF90aGlzMi5jdXJyZW50UmVzdWx0LmNvbnRleHQpO1xuICAgICAgICAgIF90aGlzMi5tdXRhdGVPcHRpb25zLm9uU2V0dGxlZCA9PSBudWxsID8gdm9pZCAwIDogX3RoaXMyLm11dGF0ZU9wdGlvbnMub25TZXR0bGVkKHVuZGVmaW5lZCwgX3RoaXMyLmN1cnJlbnRSZXN1bHQuZXJyb3IsIF90aGlzMi5jdXJyZW50UmVzdWx0LnZhcmlhYmxlcywgX3RoaXMyLmN1cnJlbnRSZXN1bHQuY29udGV4dCk7XG4gICAgICAgIH1cbiAgICAgIH0gLy8gVGhlbiB0cmlnZ2VyIHRoZSBsaXN0ZW5lcnNcblxuXG4gICAgICBpZiAob3B0aW9ucy5saXN0ZW5lcnMpIHtcbiAgICAgICAgX3RoaXMyLmxpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uIChsaXN0ZW5lcikge1xuICAgICAgICAgIGxpc3RlbmVyKF90aGlzMi5jdXJyZW50UmVzdWx0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIE11dGF0aW9uT2JzZXJ2ZXI7XG59KFN1YnNjcmliYWJsZSk7IiwiaW1wb3J0IHsgc2NoZWR1bGVNaWNyb3Rhc2sgfSBmcm9tICcuL3V0aWxzJzsgLy8gVFlQRVNcblxuLy8gQ0xBU1NcbnZhciBOb3RpZnlNYW5hZ2VyID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gTm90aWZ5TWFuYWdlcigpIHtcbiAgICB0aGlzLnF1ZXVlID0gW107XG4gICAgdGhpcy50cmFuc2FjdGlvbnMgPSAwO1xuXG4gICAgdGhpcy5ub3RpZnlGbiA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgY2FsbGJhY2soKTtcbiAgICB9O1xuXG4gICAgdGhpcy5iYXRjaE5vdGlmeUZuID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICBjYWxsYmFjaygpO1xuICAgIH07XG4gIH1cblxuICB2YXIgX3Byb3RvID0gTm90aWZ5TWFuYWdlci5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmJhdGNoID0gZnVuY3Rpb24gYmF0Y2goY2FsbGJhY2spIHtcbiAgICB0aGlzLnRyYW5zYWN0aW9ucysrO1xuICAgIHZhciByZXN1bHQgPSBjYWxsYmFjaygpO1xuICAgIHRoaXMudHJhbnNhY3Rpb25zLS07XG5cbiAgICBpZiAoIXRoaXMudHJhbnNhY3Rpb25zKSB7XG4gICAgICB0aGlzLmZsdXNoKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICBfcHJvdG8uc2NoZWR1bGUgPSBmdW5jdGlvbiBzY2hlZHVsZShjYWxsYmFjaykge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICBpZiAodGhpcy50cmFuc2FjdGlvbnMpIHtcbiAgICAgIHRoaXMucXVldWUucHVzaChjYWxsYmFjayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNjaGVkdWxlTWljcm90YXNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXMubm90aWZ5Rm4oY2FsbGJhY2spO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBBbGwgY2FsbHMgdG8gdGhlIHdyYXBwZWQgZnVuY3Rpb24gd2lsbCBiZSBiYXRjaGVkLlxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5iYXRjaENhbGxzID0gZnVuY3Rpb24gYmF0Y2hDYWxscyhjYWxsYmFjaykge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgfVxuXG4gICAgICBfdGhpczIuc2NoZWR1bGUoZnVuY3Rpb24gKCkge1xuICAgICAgICBjYWxsYmFjay5hcHBseSh2b2lkIDAsIGFyZ3MpO1xuICAgICAgfSk7XG4gICAgfTtcbiAgfTtcblxuICBfcHJvdG8uZmx1c2ggPSBmdW5jdGlvbiBmbHVzaCgpIHtcbiAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgIHZhciBxdWV1ZSA9IHRoaXMucXVldWU7XG4gICAgdGhpcy5xdWV1ZSA9IFtdO1xuXG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgc2NoZWR1bGVNaWNyb3Rhc2soZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpczMuYmF0Y2hOb3RpZnlGbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcXVldWUuZm9yRWFjaChmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgIF90aGlzMy5ub3RpZnlGbihjYWxsYmFjayk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBVc2UgdGhpcyBtZXRob2QgdG8gc2V0IGEgY3VzdG9tIG5vdGlmeSBmdW5jdGlvbi5cbiAgICogVGhpcyBjYW4gYmUgdXNlZCB0byBmb3IgZXhhbXBsZSB3cmFwIG5vdGlmaWNhdGlvbnMgd2l0aCBgUmVhY3QuYWN0YCB3aGlsZSBydW5uaW5nIHRlc3RzLlxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5zZXROb3RpZnlGdW5jdGlvbiA9IGZ1bmN0aW9uIHNldE5vdGlmeUZ1bmN0aW9uKGZuKSB7XG4gICAgdGhpcy5ub3RpZnlGbiA9IGZuO1xuICB9XG4gIC8qKlxuICAgKiBVc2UgdGhpcyBtZXRob2QgdG8gc2V0IGEgY3VzdG9tIGZ1bmN0aW9uIHRvIGJhdGNoIG5vdGlmaWNhdGlvbnMgdG9nZXRoZXIgaW50byBhIHNpbmdsZSB0aWNrLlxuICAgKiBCeSBkZWZhdWx0IFJlYWN0IFF1ZXJ5IHdpbGwgdXNlIHRoZSBiYXRjaCBmdW5jdGlvbiBwcm92aWRlZCBieSBSZWFjdERPTSBvciBSZWFjdCBOYXRpdmUuXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnNldEJhdGNoTm90aWZ5RnVuY3Rpb24gPSBmdW5jdGlvbiBzZXRCYXRjaE5vdGlmeUZ1bmN0aW9uKGZuKSB7XG4gICAgdGhpcy5iYXRjaE5vdGlmeUZuID0gZm47XG4gIH07XG5cbiAgcmV0dXJuIE5vdGlmeU1hbmFnZXI7XG59KCk7IC8vIFNJTkdMRVRPTlxuXG5cbmV4cG9ydCB2YXIgbm90aWZ5TWFuYWdlciA9IG5ldyBOb3RpZnlNYW5hZ2VyKCk7IiwiaW1wb3J0IF9pbmhlcml0c0xvb3NlIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pbmhlcml0c0xvb3NlXCI7XG5pbXBvcnQgeyBTdWJzY3JpYmFibGUgfSBmcm9tICcuL3N1YnNjcmliYWJsZSc7XG5pbXBvcnQgeyBpc1NlcnZlciB9IGZyb20gJy4vdXRpbHMnO1xuXG52YXIgT25saW5lTWFuYWdlciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1N1YnNjcmliYWJsZSkge1xuICBfaW5oZXJpdHNMb29zZShPbmxpbmVNYW5hZ2VyLCBfU3Vic2NyaWJhYmxlKTtcblxuICBmdW5jdGlvbiBPbmxpbmVNYW5hZ2VyKCkge1xuICAgIHJldHVybiBfU3Vic2NyaWJhYmxlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBPbmxpbmVNYW5hZ2VyLnByb3RvdHlwZTtcblxuICBfcHJvdG8ub25TdWJzY3JpYmUgPSBmdW5jdGlvbiBvblN1YnNjcmliZSgpIHtcbiAgICBpZiAoIXRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcikge1xuICAgICAgdGhpcy5zZXREZWZhdWx0RXZlbnRMaXN0ZW5lcigpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uc2V0RXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uIHNldEV2ZW50TGlzdGVuZXIoc2V0dXApIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgaWYgKHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcikge1xuICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKCk7XG4gICAgfVxuXG4gICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyID0gc2V0dXAoZnVuY3Rpb24gKG9ubGluZSkge1xuICAgICAgaWYgKHR5cGVvZiBvbmxpbmUgPT09ICdib29sZWFuJykge1xuICAgICAgICBfdGhpcy5zZXRPbmxpbmUob25saW5lKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIF90aGlzLm9uT25saW5lKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLnNldE9ubGluZSA9IGZ1bmN0aW9uIHNldE9ubGluZShvbmxpbmUpIHtcbiAgICB0aGlzLm9ubGluZSA9IG9ubGluZTtcblxuICAgIGlmIChvbmxpbmUpIHtcbiAgICAgIHRoaXMub25PbmxpbmUoKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLm9uT25saW5lID0gZnVuY3Rpb24gb25PbmxpbmUoKSB7XG4gICAgdGhpcy5saXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbiAobGlzdGVuZXIpIHtcbiAgICAgIGxpc3RlbmVyKCk7XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLmlzT25saW5lID0gZnVuY3Rpb24gaXNPbmxpbmUoKSB7XG4gICAgaWYgKHR5cGVvZiB0aGlzLm9ubGluZSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICByZXR1cm4gdGhpcy5vbmxpbmU7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBuYXZpZ2F0b3IgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBuYXZpZ2F0b3Iub25MaW5lID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5hdmlnYXRvci5vbkxpbmU7XG4gIH07XG5cbiAgX3Byb3RvLnNldERlZmF1bHRFdmVudExpc3RlbmVyID0gZnVuY3Rpb24gc2V0RGVmYXVsdEV2ZW50TGlzdGVuZXIoKSB7XG4gICAgdmFyIF93aW5kb3c7XG5cbiAgICBpZiAoIWlzU2VydmVyICYmICgoX3dpbmRvdyA9IHdpbmRvdykgPT0gbnVsbCA/IHZvaWQgMCA6IF93aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcikpIHtcbiAgICAgIHRoaXMuc2V0RXZlbnRMaXN0ZW5lcihmdW5jdGlvbiAob25PbmxpbmUpIHtcbiAgICAgICAgdmFyIGxpc3RlbmVyID0gZnVuY3Rpb24gbGlzdGVuZXIoKSB7XG4gICAgICAgICAgcmV0dXJuIG9uT25saW5lKCk7XG4gICAgICAgIH07IC8vIExpc3RlbiB0byBvbmxpbmVcblxuXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdvbmxpbmUnLCBsaXN0ZW5lciwgZmFsc2UpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignb2ZmbGluZScsIGxpc3RlbmVyLCBmYWxzZSk7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgLy8gQmUgc3VyZSB0byB1bnN1YnNjcmliZSBpZiBhIG5ldyBoYW5kbGVyIGlzIHNldFxuICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdvbmxpbmUnLCBsaXN0ZW5lcik7XG4gICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ29mZmxpbmUnLCBsaXN0ZW5lcik7XG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIE9ubGluZU1hbmFnZXI7XG59KFN1YnNjcmliYWJsZSk7XG5cbmV4cG9ydCB2YXIgb25saW5lTWFuYWdlciA9IG5ldyBPbmxpbmVNYW5hZ2VyKCk7IiwiaW1wb3J0IF9pbmhlcml0c0xvb3NlIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pbmhlcml0c0xvb3NlXCI7XG5pbXBvcnQgeyBkaWZmZXJlbmNlLCByZXBsYWNlQXQgfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7IG5vdGlmeU1hbmFnZXIgfSBmcm9tICcuL25vdGlmeU1hbmFnZXInO1xuaW1wb3J0IHsgUXVlcnlPYnNlcnZlciB9IGZyb20gJy4vcXVlcnlPYnNlcnZlcic7XG5pbXBvcnQgeyBTdWJzY3JpYmFibGUgfSBmcm9tICcuL3N1YnNjcmliYWJsZSc7XG5leHBvcnQgdmFyIFF1ZXJpZXNPYnNlcnZlciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1N1YnNjcmliYWJsZSkge1xuICBfaW5oZXJpdHNMb29zZShRdWVyaWVzT2JzZXJ2ZXIsIF9TdWJzY3JpYmFibGUpO1xuXG4gIGZ1bmN0aW9uIFF1ZXJpZXNPYnNlcnZlcihjbGllbnQsIHF1ZXJpZXMpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfdGhpcyA9IF9TdWJzY3JpYmFibGUuY2FsbCh0aGlzKSB8fCB0aGlzO1xuICAgIF90aGlzLmNsaWVudCA9IGNsaWVudDtcbiAgICBfdGhpcy5xdWVyaWVzID0gW107XG4gICAgX3RoaXMucmVzdWx0ID0gW107XG4gICAgX3RoaXMub2JzZXJ2ZXJzID0gW107XG4gICAgX3RoaXMub2JzZXJ2ZXJzTWFwID0ge307XG5cbiAgICBpZiAocXVlcmllcykge1xuICAgICAgX3RoaXMuc2V0UXVlcmllcyhxdWVyaWVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gUXVlcmllc09ic2VydmVyLnByb3RvdHlwZTtcblxuICBfcHJvdG8ub25TdWJzY3JpYmUgPSBmdW5jdGlvbiBvblN1YnNjcmliZSgpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIGlmICh0aGlzLmxpc3RlbmVycy5sZW5ndGggPT09IDEpIHtcbiAgICAgIHRoaXMub2JzZXJ2ZXJzLmZvckVhY2goZnVuY3Rpb24gKG9ic2VydmVyKSB7XG4gICAgICAgIG9ic2VydmVyLnN1YnNjcmliZShmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgX3RoaXMyLm9uVXBkYXRlKG9ic2VydmVyLCByZXN1bHQpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8ub25VbnN1YnNjcmliZSA9IGZ1bmN0aW9uIG9uVW5zdWJzY3JpYmUoKSB7XG4gICAgaWYgKCF0aGlzLmxpc3RlbmVycy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuZGVzdHJveSgpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uZGVzdHJveSA9IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgdGhpcy5saXN0ZW5lcnMgPSBbXTtcbiAgICB0aGlzLm9ic2VydmVycy5mb3JFYWNoKGZ1bmN0aW9uIChvYnNlcnZlcikge1xuICAgICAgb2JzZXJ2ZXIuZGVzdHJveSgpO1xuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5zZXRRdWVyaWVzID0gZnVuY3Rpb24gc2V0UXVlcmllcyhxdWVyaWVzLCBub3RpZnlPcHRpb25zKSB7XG4gICAgdGhpcy5xdWVyaWVzID0gcXVlcmllcztcbiAgICB0aGlzLnVwZGF0ZU9ic2VydmVycyhub3RpZnlPcHRpb25zKTtcbiAgfTtcblxuICBfcHJvdG8uZ2V0Q3VycmVudFJlc3VsdCA9IGZ1bmN0aW9uIGdldEN1cnJlbnRSZXN1bHQoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdWx0O1xuICB9O1xuXG4gIF9wcm90by5nZXRPcHRpbWlzdGljUmVzdWx0ID0gZnVuY3Rpb24gZ2V0T3B0aW1pc3RpY1Jlc3VsdChxdWVyaWVzKSB7XG4gICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICByZXR1cm4gcXVlcmllcy5tYXAoZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgIHZhciBkZWZhdWx0ZWRPcHRpb25zID0gX3RoaXMzLmNsaWVudC5kZWZhdWx0UXVlcnlPYnNlcnZlck9wdGlvbnMob3B0aW9ucyk7XG5cbiAgICAgIHJldHVybiBfdGhpczMuZ2V0T2JzZXJ2ZXIoZGVmYXVsdGVkT3B0aW9ucykuZ2V0T3B0aW1pc3RpY1Jlc3VsdChkZWZhdWx0ZWRPcHRpb25zKTtcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8uZ2V0T2JzZXJ2ZXIgPSBmdW5jdGlvbiBnZXRPYnNlcnZlcihvcHRpb25zKSB7XG4gICAgdmFyIGRlZmF1bHRlZE9wdGlvbnMgPSB0aGlzLmNsaWVudC5kZWZhdWx0UXVlcnlPYnNlcnZlck9wdGlvbnMob3B0aW9ucyk7XG4gICAgcmV0dXJuIHRoaXMub2JzZXJ2ZXJzTWFwW2RlZmF1bHRlZE9wdGlvbnMucXVlcnlIYXNoXSB8fCBuZXcgUXVlcnlPYnNlcnZlcih0aGlzLmNsaWVudCwgZGVmYXVsdGVkT3B0aW9ucyk7XG4gIH07XG5cbiAgX3Byb3RvLnVwZGF0ZU9ic2VydmVycyA9IGZ1bmN0aW9uIHVwZGF0ZU9ic2VydmVycyhub3RpZnlPcHRpb25zKSB7XG4gICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICBub3RpZnlNYW5hZ2VyLmJhdGNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBoYXNJbmRleENoYW5nZSA9IGZhbHNlO1xuICAgICAgdmFyIHByZXZPYnNlcnZlcnMgPSBfdGhpczQub2JzZXJ2ZXJzO1xuICAgICAgdmFyIHByZXZPYmVydmVyc01hcCA9IF90aGlzNC5vYnNlcnZlcnNNYXA7XG4gICAgICB2YXIgbmV3UmVzdWx0ID0gW107XG4gICAgICB2YXIgbmV3T2JzZXJ2ZXJzID0gW107XG4gICAgICB2YXIgbmV3T2JzZXJ2ZXJzTWFwID0ge307XG5cbiAgICAgIF90aGlzNC5xdWVyaWVzLmZvckVhY2goZnVuY3Rpb24gKG9wdGlvbnMsIGkpIHtcbiAgICAgICAgdmFyIGRlZmF1bHRlZE9wdGlvbnMgPSBfdGhpczQuY2xpZW50LmRlZmF1bHRRdWVyeU9ic2VydmVyT3B0aW9ucyhvcHRpb25zKTtcblxuICAgICAgICB2YXIgcXVlcnlIYXNoID0gZGVmYXVsdGVkT3B0aW9ucy5xdWVyeUhhc2g7XG5cbiAgICAgICAgdmFyIG9ic2VydmVyID0gX3RoaXM0LmdldE9ic2VydmVyKGRlZmF1bHRlZE9wdGlvbnMpO1xuXG4gICAgICAgIGlmIChwcmV2T2JlcnZlcnNNYXBbcXVlcnlIYXNoXSkge1xuICAgICAgICAgIG9ic2VydmVyLnNldE9wdGlvbnMoZGVmYXVsdGVkT3B0aW9ucywgbm90aWZ5T3B0aW9ucyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob2JzZXJ2ZXIgIT09IHByZXZPYnNlcnZlcnNbaV0pIHtcbiAgICAgICAgICBoYXNJbmRleENoYW5nZSA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBuZXdPYnNlcnZlcnMucHVzaChvYnNlcnZlcik7XG4gICAgICAgIG5ld1Jlc3VsdC5wdXNoKG9ic2VydmVyLmdldEN1cnJlbnRSZXN1bHQoKSk7XG4gICAgICAgIG5ld09ic2VydmVyc01hcFtxdWVyeUhhc2hdID0gb2JzZXJ2ZXI7XG4gICAgICB9KTtcblxuICAgICAgaWYgKHByZXZPYnNlcnZlcnMubGVuZ3RoID09PSBuZXdPYnNlcnZlcnMubGVuZ3RoICYmICFoYXNJbmRleENoYW5nZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIF90aGlzNC5vYnNlcnZlcnMgPSBuZXdPYnNlcnZlcnM7XG4gICAgICBfdGhpczQub2JzZXJ2ZXJzTWFwID0gbmV3T2JzZXJ2ZXJzTWFwO1xuICAgICAgX3RoaXM0LnJlc3VsdCA9IG5ld1Jlc3VsdDtcblxuICAgICAgaWYgKCFfdGhpczQuaGFzTGlzdGVuZXJzKCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBkaWZmZXJlbmNlKHByZXZPYnNlcnZlcnMsIG5ld09ic2VydmVycykuZm9yRWFjaChmdW5jdGlvbiAob2JzZXJ2ZXIpIHtcbiAgICAgICAgb2JzZXJ2ZXIuZGVzdHJveSgpO1xuICAgICAgfSk7XG4gICAgICBkaWZmZXJlbmNlKG5ld09ic2VydmVycywgcHJldk9ic2VydmVycykuZm9yRWFjaChmdW5jdGlvbiAob2JzZXJ2ZXIpIHtcbiAgICAgICAgb2JzZXJ2ZXIuc3Vic2NyaWJlKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICBfdGhpczQub25VcGRhdGUob2JzZXJ2ZXIsIHJlc3VsdCk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIF90aGlzNC5ub3RpZnkoKTtcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8ub25VcGRhdGUgPSBmdW5jdGlvbiBvblVwZGF0ZShvYnNlcnZlciwgcmVzdWx0KSB7XG4gICAgdmFyIGluZGV4ID0gdGhpcy5vYnNlcnZlcnMuaW5kZXhPZihvYnNlcnZlcik7XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICB0aGlzLnJlc3VsdCA9IHJlcGxhY2VBdCh0aGlzLnJlc3VsdCwgaW5kZXgsIHJlc3VsdCk7XG4gICAgICB0aGlzLm5vdGlmeSgpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8ubm90aWZ5ID0gZnVuY3Rpb24gbm90aWZ5KCkge1xuICAgIHZhciBfdGhpczUgPSB0aGlzO1xuXG4gICAgbm90aWZ5TWFuYWdlci5iYXRjaChmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpczUubGlzdGVuZXJzLmZvckVhY2goZnVuY3Rpb24gKGxpc3RlbmVyKSB7XG4gICAgICAgIGxpc3RlbmVyKF90aGlzNS5yZXN1bHQpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIFF1ZXJpZXNPYnNlcnZlcjtcbn0oU3Vic2NyaWJhYmxlKTsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCB7IGZ1bmN0aW9uYWxVcGRhdGUsIGlzVmFsaWRUaW1lb3V0LCBub29wLCByZXBsYWNlRXF1YWxEZWVwLCB0aW1lVW50aWxTdGFsZSwgZW5zdXJlUXVlcnlLZXlBcnJheSB9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHsgbm90aWZ5TWFuYWdlciB9IGZyb20gJy4vbm90aWZ5TWFuYWdlcic7XG5pbXBvcnQgeyBnZXRMb2dnZXIgfSBmcm9tICcuL2xvZ2dlcic7XG5pbXBvcnQgeyBSZXRyeWVyLCBpc0NhbmNlbGxlZEVycm9yIH0gZnJvbSAnLi9yZXRyeWVyJzsgLy8gVFlQRVNcblxuLy8gQ0xBU1NcbmV4cG9ydCB2YXIgUXVlcnkgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBRdWVyeShjb25maWcpIHtcbiAgICB0aGlzLmRlZmF1bHRPcHRpb25zID0gY29uZmlnLmRlZmF1bHRPcHRpb25zO1xuICAgIHRoaXMuc2V0T3B0aW9ucyhjb25maWcub3B0aW9ucyk7XG4gICAgdGhpcy5vYnNlcnZlcnMgPSBbXTtcbiAgICB0aGlzLmNhY2hlID0gY29uZmlnLmNhY2hlO1xuICAgIHRoaXMucXVlcnlLZXkgPSBjb25maWcucXVlcnlLZXk7XG4gICAgdGhpcy5xdWVyeUhhc2ggPSBjb25maWcucXVlcnlIYXNoO1xuICAgIHRoaXMuaW5pdGlhbFN0YXRlID0gY29uZmlnLnN0YXRlIHx8IHRoaXMuZ2V0RGVmYXVsdFN0YXRlKHRoaXMub3B0aW9ucyk7XG4gICAgdGhpcy5zdGF0ZSA9IHRoaXMuaW5pdGlhbFN0YXRlO1xuICAgIHRoaXMuc2NoZWR1bGVHYygpO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IFF1ZXJ5LnByb3RvdHlwZTtcblxuICBfcHJvdG8uc2V0T3B0aW9ucyA9IGZ1bmN0aW9uIHNldE9wdGlvbnMob3B0aW9ucykge1xuICAgIHZhciBfdGhpcyRvcHRpb25zJGNhY2hlVGk7XG5cbiAgICB0aGlzLm9wdGlvbnMgPSBfZXh0ZW5kcyh7fSwgdGhpcy5kZWZhdWx0T3B0aW9ucywgb3B0aW9ucyk7IC8vIERlZmF1bHQgdG8gNSBtaW51dGVzIGlmIG5vdCBjYWNoZSB0aW1lIGlzIHNldFxuXG4gICAgdGhpcy5jYWNoZVRpbWUgPSBNYXRoLm1heCh0aGlzLmNhY2hlVGltZSB8fCAwLCAoX3RoaXMkb3B0aW9ucyRjYWNoZVRpID0gdGhpcy5vcHRpb25zLmNhY2hlVGltZSkgIT0gbnVsbCA/IF90aGlzJG9wdGlvbnMkY2FjaGVUaSA6IDUgKiA2MCAqIDEwMDApO1xuICB9O1xuXG4gIF9wcm90by5zZXREZWZhdWx0T3B0aW9ucyA9IGZ1bmN0aW9uIHNldERlZmF1bHRPcHRpb25zKG9wdGlvbnMpIHtcbiAgICB0aGlzLmRlZmF1bHRPcHRpb25zID0gb3B0aW9ucztcbiAgfTtcblxuICBfcHJvdG8uc2NoZWR1bGVHYyA9IGZ1bmN0aW9uIHNjaGVkdWxlR2MoKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIHRoaXMuY2xlYXJHY1RpbWVvdXQoKTtcblxuICAgIGlmIChpc1ZhbGlkVGltZW91dCh0aGlzLmNhY2hlVGltZSkpIHtcbiAgICAgIHRoaXMuZ2NUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzLm9wdGlvbmFsUmVtb3ZlKCk7XG4gICAgICB9LCB0aGlzLmNhY2hlVGltZSk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5jbGVhckdjVGltZW91dCA9IGZ1bmN0aW9uIGNsZWFyR2NUaW1lb3V0KCkge1xuICAgIGNsZWFyVGltZW91dCh0aGlzLmdjVGltZW91dCk7XG4gICAgdGhpcy5nY1RpbWVvdXQgPSB1bmRlZmluZWQ7XG4gIH07XG5cbiAgX3Byb3RvLm9wdGlvbmFsUmVtb3ZlID0gZnVuY3Rpb24gb3B0aW9uYWxSZW1vdmUoKSB7XG4gICAgaWYgKCF0aGlzLm9ic2VydmVycy5sZW5ndGggJiYgIXRoaXMuc3RhdGUuaXNGZXRjaGluZykge1xuICAgICAgdGhpcy5jYWNoZS5yZW1vdmUodGhpcyk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5zZXREYXRhID0gZnVuY3Rpb24gc2V0RGF0YSh1cGRhdGVyLCBvcHRpb25zKSB7XG4gICAgdmFyIF90aGlzJG9wdGlvbnMkaXNEYXRhRSwgX3RoaXMkb3B0aW9ucztcblxuICAgIHZhciBwcmV2RGF0YSA9IHRoaXMuc3RhdGUuZGF0YTsgLy8gR2V0IHRoZSBuZXcgZGF0YVxuXG4gICAgdmFyIGRhdGEgPSBmdW5jdGlvbmFsVXBkYXRlKHVwZGF0ZXIsIHByZXZEYXRhKTsgLy8gVXNlIHByZXYgZGF0YSBpZiBhbiBpc0RhdGFFcXVhbCBmdW5jdGlvbiBpcyBkZWZpbmVkIGFuZCByZXR1cm5zIGB0cnVlYFxuXG4gICAgaWYgKChfdGhpcyRvcHRpb25zJGlzRGF0YUUgPSAoX3RoaXMkb3B0aW9ucyA9IHRoaXMub3B0aW9ucykuaXNEYXRhRXF1YWwpID09IG51bGwgPyB2b2lkIDAgOiBfdGhpcyRvcHRpb25zJGlzRGF0YUUuY2FsbChfdGhpcyRvcHRpb25zLCBwcmV2RGF0YSwgZGF0YSkpIHtcbiAgICAgIGRhdGEgPSBwcmV2RGF0YTtcbiAgICB9IGVsc2UgaWYgKHRoaXMub3B0aW9ucy5zdHJ1Y3R1cmFsU2hhcmluZyAhPT0gZmFsc2UpIHtcbiAgICAgIC8vIFN0cnVjdHVyYWxseSBzaGFyZSBkYXRhIGJldHdlZW4gcHJldiBhbmQgbmV3IGRhdGEgaWYgbmVlZGVkXG4gICAgICBkYXRhID0gcmVwbGFjZUVxdWFsRGVlcChwcmV2RGF0YSwgZGF0YSk7XG4gICAgfSAvLyBTZXQgZGF0YSBhbmQgbWFyayBpdCBhcyBjYWNoZWRcblxuXG4gICAgdGhpcy5kaXNwYXRjaCh7XG4gICAgICBkYXRhOiBkYXRhLFxuICAgICAgdHlwZTogJ3N1Y2Nlc3MnLFxuICAgICAgZGF0YVVwZGF0ZWRBdDogb3B0aW9ucyA9PSBudWxsID8gdm9pZCAwIDogb3B0aW9ucy51cGRhdGVkQXRcbiAgICB9KTtcbiAgICByZXR1cm4gZGF0YTtcbiAgfTtcblxuICBfcHJvdG8uc2V0U3RhdGUgPSBmdW5jdGlvbiBzZXRTdGF0ZShzdGF0ZSwgc2V0U3RhdGVPcHRpb25zKSB7XG4gICAgdGhpcy5kaXNwYXRjaCh7XG4gICAgICB0eXBlOiAnc2V0U3RhdGUnLFxuICAgICAgc3RhdGU6IHN0YXRlLFxuICAgICAgc2V0U3RhdGVPcHRpb25zOiBzZXRTdGF0ZU9wdGlvbnNcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8uY2FuY2VsID0gZnVuY3Rpb24gY2FuY2VsKG9wdGlvbnMpIHtcbiAgICB2YXIgX3RoaXMkcmV0cnllcjtcblxuICAgIHZhciBwcm9taXNlID0gdGhpcy5wcm9taXNlO1xuICAgIChfdGhpcyRyZXRyeWVyID0gdGhpcy5yZXRyeWVyKSA9PSBudWxsID8gdm9pZCAwIDogX3RoaXMkcmV0cnllci5jYW5jZWwob3B0aW9ucyk7XG4gICAgcmV0dXJuIHByb21pc2UgPyBwcm9taXNlLnRoZW4obm9vcCkuY2F0Y2gobm9vcCkgOiBQcm9taXNlLnJlc29sdmUoKTtcbiAgfTtcblxuICBfcHJvdG8uZGVzdHJveSA9IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgdGhpcy5jbGVhckdjVGltZW91dCgpO1xuICAgIHRoaXMuY2FuY2VsKHtcbiAgICAgIHNpbGVudDogdHJ1ZVxuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5yZXNldCA9IGZ1bmN0aW9uIHJlc2V0KCkge1xuICAgIHRoaXMuZGVzdHJveSgpO1xuICAgIHRoaXMuc2V0U3RhdGUodGhpcy5pbml0aWFsU3RhdGUpO1xuICB9O1xuXG4gIF9wcm90by5pc0FjdGl2ZSA9IGZ1bmN0aW9uIGlzQWN0aXZlKCkge1xuICAgIHJldHVybiB0aGlzLm9ic2VydmVycy5zb21lKGZ1bmN0aW9uIChvYnNlcnZlcikge1xuICAgICAgcmV0dXJuIG9ic2VydmVyLm9wdGlvbnMuZW5hYmxlZCAhPT0gZmFsc2U7XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLmlzRmV0Y2hpbmcgPSBmdW5jdGlvbiBpc0ZldGNoaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlLmlzRmV0Y2hpbmc7XG4gIH07XG5cbiAgX3Byb3RvLmlzU3RhbGUgPSBmdW5jdGlvbiBpc1N0YWxlKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlLmlzSW52YWxpZGF0ZWQgfHwgIXRoaXMuc3RhdGUuZGF0YVVwZGF0ZWRBdCB8fCB0aGlzLm9ic2VydmVycy5zb21lKGZ1bmN0aW9uIChvYnNlcnZlcikge1xuICAgICAgcmV0dXJuIG9ic2VydmVyLmdldEN1cnJlbnRSZXN1bHQoKS5pc1N0YWxlO1xuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5pc1N0YWxlQnlUaW1lID0gZnVuY3Rpb24gaXNTdGFsZUJ5VGltZShzdGFsZVRpbWUpIHtcbiAgICBpZiAoc3RhbGVUaW1lID09PSB2b2lkIDApIHtcbiAgICAgIHN0YWxlVGltZSA9IDA7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuc3RhdGUuaXNJbnZhbGlkYXRlZCB8fCAhdGhpcy5zdGF0ZS5kYXRhVXBkYXRlZEF0IHx8ICF0aW1lVW50aWxTdGFsZSh0aGlzLnN0YXRlLmRhdGFVcGRhdGVkQXQsIHN0YWxlVGltZSk7XG4gIH07XG5cbiAgX3Byb3RvLm9uRm9jdXMgPSBmdW5jdGlvbiBvbkZvY3VzKCkge1xuICAgIHZhciBfdGhpcyRyZXRyeWVyMjtcblxuICAgIHZhciBvYnNlcnZlciA9IHRoaXMub2JzZXJ2ZXJzLmZpbmQoZnVuY3Rpb24gKHgpIHtcbiAgICAgIHJldHVybiB4LnNob3VsZEZldGNoT25XaW5kb3dGb2N1cygpO1xuICAgIH0pO1xuXG4gICAgaWYgKG9ic2VydmVyKSB7XG4gICAgICBvYnNlcnZlci5yZWZldGNoKCk7XG4gICAgfSAvLyBDb250aW51ZSBmZXRjaCBpZiBjdXJyZW50bHkgcGF1c2VkXG5cblxuICAgIChfdGhpcyRyZXRyeWVyMiA9IHRoaXMucmV0cnllcikgPT0gbnVsbCA/IHZvaWQgMCA6IF90aGlzJHJldHJ5ZXIyLmNvbnRpbnVlKCk7XG4gIH07XG5cbiAgX3Byb3RvLm9uT25saW5lID0gZnVuY3Rpb24gb25PbmxpbmUoKSB7XG4gICAgdmFyIF90aGlzJHJldHJ5ZXIzO1xuXG4gICAgdmFyIG9ic2VydmVyID0gdGhpcy5vYnNlcnZlcnMuZmluZChmdW5jdGlvbiAoeCkge1xuICAgICAgcmV0dXJuIHguc2hvdWxkRmV0Y2hPblJlY29ubmVjdCgpO1xuICAgIH0pO1xuXG4gICAgaWYgKG9ic2VydmVyKSB7XG4gICAgICBvYnNlcnZlci5yZWZldGNoKCk7XG4gICAgfSAvLyBDb250aW51ZSBmZXRjaCBpZiBjdXJyZW50bHkgcGF1c2VkXG5cblxuICAgIChfdGhpcyRyZXRyeWVyMyA9IHRoaXMucmV0cnllcikgPT0gbnVsbCA/IHZvaWQgMCA6IF90aGlzJHJldHJ5ZXIzLmNvbnRpbnVlKCk7XG4gIH07XG5cbiAgX3Byb3RvLmFkZE9ic2VydmVyID0gZnVuY3Rpb24gYWRkT2JzZXJ2ZXIob2JzZXJ2ZXIpIHtcbiAgICBpZiAodGhpcy5vYnNlcnZlcnMuaW5kZXhPZihvYnNlcnZlcikgPT09IC0xKSB7XG4gICAgICB0aGlzLm9ic2VydmVycy5wdXNoKG9ic2VydmVyKTsgLy8gU3RvcCB0aGUgcXVlcnkgZnJvbSBiZWluZyBnYXJiYWdlIGNvbGxlY3RlZFxuXG4gICAgICB0aGlzLmNsZWFyR2NUaW1lb3V0KCk7XG4gICAgICB0aGlzLmNhY2hlLm5vdGlmeSh7XG4gICAgICAgIHR5cGU6ICdvYnNlcnZlckFkZGVkJyxcbiAgICAgICAgcXVlcnk6IHRoaXMsXG4gICAgICAgIG9ic2VydmVyOiBvYnNlcnZlclxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5yZW1vdmVPYnNlcnZlciA9IGZ1bmN0aW9uIHJlbW92ZU9ic2VydmVyKG9ic2VydmVyKSB7XG4gICAgaWYgKHRoaXMub2JzZXJ2ZXJzLmluZGV4T2Yob2JzZXJ2ZXIpICE9PSAtMSkge1xuICAgICAgdGhpcy5vYnNlcnZlcnMgPSB0aGlzLm9ic2VydmVycy5maWx0ZXIoZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgcmV0dXJuIHggIT09IG9ic2VydmVyO1xuICAgICAgfSk7XG5cbiAgICAgIGlmICghdGhpcy5vYnNlcnZlcnMubGVuZ3RoKSB7XG4gICAgICAgIC8vIElmIHRoZSB0cmFuc3BvcnQgbGF5ZXIgZG9lcyBub3Qgc3VwcG9ydCBjYW5jZWxsYXRpb25cbiAgICAgICAgLy8gd2UnbGwgbGV0IHRoZSBxdWVyeSBjb250aW51ZSBzbyB0aGUgcmVzdWx0IGNhbiBiZSBjYWNoZWRcbiAgICAgICAgaWYgKHRoaXMucmV0cnllcikge1xuICAgICAgICAgIGlmICh0aGlzLnJldHJ5ZXIuaXNUcmFuc3BvcnRDYW5jZWxhYmxlKSB7XG4gICAgICAgICAgICB0aGlzLnJldHJ5ZXIuY2FuY2VsKHtcbiAgICAgICAgICAgICAgcmV2ZXJ0OiB0cnVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5yZXRyeWVyLmNhbmNlbFJldHJ5KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuY2FjaGVUaW1lKSB7XG4gICAgICAgICAgdGhpcy5zY2hlZHVsZUdjKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5jYWNoZS5yZW1vdmUodGhpcyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5jYWNoZS5ub3RpZnkoe1xuICAgICAgICB0eXBlOiAnb2JzZXJ2ZXJSZW1vdmVkJyxcbiAgICAgICAgcXVlcnk6IHRoaXMsXG4gICAgICAgIG9ic2VydmVyOiBvYnNlcnZlclxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5nZXRPYnNlcnZlcnNDb3VudCA9IGZ1bmN0aW9uIGdldE9ic2VydmVyc0NvdW50KCkge1xuICAgIHJldHVybiB0aGlzLm9ic2VydmVycy5sZW5ndGg7XG4gIH07XG5cbiAgX3Byb3RvLmludmFsaWRhdGUgPSBmdW5jdGlvbiBpbnZhbGlkYXRlKCkge1xuICAgIGlmICghdGhpcy5zdGF0ZS5pc0ludmFsaWRhdGVkKSB7XG4gICAgICB0aGlzLmRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogJ2ludmFsaWRhdGUnXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLmZldGNoID0gZnVuY3Rpb24gZmV0Y2gob3B0aW9ucywgZmV0Y2hPcHRpb25zKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXMsXG4gICAgICAgIF90aGlzJG9wdGlvbnMkYmVoYXZpbyxcbiAgICAgICAgX2NvbnRleHQkZmV0Y2hPcHRpb25zO1xuXG4gICAgaWYgKHRoaXMuc3RhdGUuaXNGZXRjaGluZykge1xuICAgICAgaWYgKHRoaXMuc3RhdGUuZGF0YVVwZGF0ZWRBdCAmJiAoZmV0Y2hPcHRpb25zID09IG51bGwgPyB2b2lkIDAgOiBmZXRjaE9wdGlvbnMuY2FuY2VsUmVmZXRjaCkpIHtcbiAgICAgICAgLy8gU2lsZW50bHkgY2FuY2VsIGN1cnJlbnQgZmV0Y2ggaWYgdGhlIHVzZXIgd2FudHMgdG8gY2FuY2VsIHJlZmV0Y2hlc1xuICAgICAgICB0aGlzLmNhbmNlbCh7XG4gICAgICAgICAgc2lsZW50OiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnByb21pc2UpIHtcbiAgICAgICAgLy8gUmV0dXJuIGN1cnJlbnQgcHJvbWlzZSBpZiB3ZSBhcmUgYWxyZWFkeSBmZXRjaGluZ1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9taXNlO1xuICAgICAgfVxuICAgIH0gLy8gVXBkYXRlIGNvbmZpZyBpZiBwYXNzZWQsIG90aGVyd2lzZSB0aGUgY29uZmlnIGZyb20gdGhlIGxhc3QgZXhlY3V0aW9uIGlzIHVzZWRcblxuXG4gICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgIHRoaXMuc2V0T3B0aW9ucyhvcHRpb25zKTtcbiAgICB9IC8vIFVzZSB0aGUgb3B0aW9ucyBmcm9tIHRoZSBmaXJzdCBvYnNlcnZlciB3aXRoIGEgcXVlcnkgZnVuY3Rpb24gaWYgbm8gZnVuY3Rpb24gaXMgZm91bmQuXG4gICAgLy8gVGhpcyBjYW4gaGFwcGVuIHdoZW4gdGhlIHF1ZXJ5IGlzIGh5ZHJhdGVkIG9yIGNyZWF0ZWQgd2l0aCBzZXRRdWVyeURhdGEuXG5cblxuICAgIGlmICghdGhpcy5vcHRpb25zLnF1ZXJ5Rm4pIHtcbiAgICAgIHZhciBvYnNlcnZlciA9IHRoaXMub2JzZXJ2ZXJzLmZpbmQoZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgcmV0dXJuIHgub3B0aW9ucy5xdWVyeUZuO1xuICAgICAgfSk7XG5cbiAgICAgIGlmIChvYnNlcnZlcikge1xuICAgICAgICB0aGlzLnNldE9wdGlvbnMob2JzZXJ2ZXIub3B0aW9ucyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHF1ZXJ5S2V5ID0gZW5zdXJlUXVlcnlLZXlBcnJheSh0aGlzLnF1ZXJ5S2V5KTsgLy8gQ3JlYXRlIHF1ZXJ5IGZ1bmN0aW9uIGNvbnRleHRcblxuICAgIHZhciBxdWVyeUZuQ29udGV4dCA9IHtcbiAgICAgIHF1ZXJ5S2V5OiBxdWVyeUtleSxcbiAgICAgIHBhZ2VQYXJhbTogdW5kZWZpbmVkXG4gICAgfTsgLy8gQ3JlYXRlIGZldGNoIGZ1bmN0aW9uXG5cbiAgICB2YXIgZmV0Y2hGbiA9IGZ1bmN0aW9uIGZldGNoRm4oKSB7XG4gICAgICByZXR1cm4gX3RoaXMyLm9wdGlvbnMucXVlcnlGbiA/IF90aGlzMi5vcHRpb25zLnF1ZXJ5Rm4ocXVlcnlGbkNvbnRleHQpIDogUHJvbWlzZS5yZWplY3QoJ01pc3NpbmcgcXVlcnlGbicpO1xuICAgIH07IC8vIFRyaWdnZXIgYmVoYXZpb3IgaG9va1xuXG5cbiAgICB2YXIgY29udGV4dCA9IHtcbiAgICAgIGZldGNoT3B0aW9uczogZmV0Y2hPcHRpb25zLFxuICAgICAgb3B0aW9uczogdGhpcy5vcHRpb25zLFxuICAgICAgcXVlcnlLZXk6IHF1ZXJ5S2V5LFxuICAgICAgc3RhdGU6IHRoaXMuc3RhdGUsXG4gICAgICBmZXRjaEZuOiBmZXRjaEZuXG4gICAgfTtcblxuICAgIGlmICgoX3RoaXMkb3B0aW9ucyRiZWhhdmlvID0gdGhpcy5vcHRpb25zLmJlaGF2aW9yKSA9PSBudWxsID8gdm9pZCAwIDogX3RoaXMkb3B0aW9ucyRiZWhhdmlvLm9uRmV0Y2gpIHtcbiAgICAgIHZhciBfdGhpcyRvcHRpb25zJGJlaGF2aW8yO1xuXG4gICAgICAoX3RoaXMkb3B0aW9ucyRiZWhhdmlvMiA9IHRoaXMub3B0aW9ucy5iZWhhdmlvcikgPT0gbnVsbCA/IHZvaWQgMCA6IF90aGlzJG9wdGlvbnMkYmVoYXZpbzIub25GZXRjaChjb250ZXh0KTtcbiAgICB9IC8vIFN0b3JlIHN0YXRlIGluIGNhc2UgdGhlIGN1cnJlbnQgZmV0Y2ggbmVlZHMgdG8gYmUgcmV2ZXJ0ZWRcblxuXG4gICAgdGhpcy5yZXZlcnRTdGF0ZSA9IHRoaXMuc3RhdGU7IC8vIFNldCB0byBmZXRjaGluZyBzdGF0ZSBpZiBub3QgYWxyZWFkeSBpbiBpdFxuXG4gICAgaWYgKCF0aGlzLnN0YXRlLmlzRmV0Y2hpbmcgfHwgdGhpcy5zdGF0ZS5mZXRjaE1ldGEgIT09ICgoX2NvbnRleHQkZmV0Y2hPcHRpb25zID0gY29udGV4dC5mZXRjaE9wdGlvbnMpID09IG51bGwgPyB2b2lkIDAgOiBfY29udGV4dCRmZXRjaE9wdGlvbnMubWV0YSkpIHtcbiAgICAgIHZhciBfY29udGV4dCRmZXRjaE9wdGlvbnMyO1xuXG4gICAgICB0aGlzLmRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogJ2ZldGNoJyxcbiAgICAgICAgbWV0YTogKF9jb250ZXh0JGZldGNoT3B0aW9uczIgPSBjb250ZXh0LmZldGNoT3B0aW9ucykgPT0gbnVsbCA/IHZvaWQgMCA6IF9jb250ZXh0JGZldGNoT3B0aW9uczIubWV0YVxuICAgICAgfSk7XG4gICAgfSAvLyBUcnkgdG8gZmV0Y2ggdGhlIGRhdGFcblxuXG4gICAgdGhpcy5yZXRyeWVyID0gbmV3IFJldHJ5ZXIoe1xuICAgICAgZm46IGNvbnRleHQuZmV0Y2hGbixcbiAgICAgIG9uU3VjY2VzczogZnVuY3Rpb24gb25TdWNjZXNzKGRhdGEpIHtcbiAgICAgICAgX3RoaXMyLnNldERhdGEoZGF0YSk7IC8vIE5vdGlmeSBjYWNoZSBjYWxsYmFja1xuXG5cbiAgICAgICAgX3RoaXMyLmNhY2hlLmNvbmZpZy5vblN1Y2Nlc3MgPT0gbnVsbCA/IHZvaWQgMCA6IF90aGlzMi5jYWNoZS5jb25maWcub25TdWNjZXNzKGRhdGEsIF90aGlzMik7IC8vIFJlbW92ZSBxdWVyeSBhZnRlciBmZXRjaGluZyBpZiBjYWNoZSB0aW1lIGlzIDBcblxuICAgICAgICBpZiAoX3RoaXMyLmNhY2hlVGltZSA9PT0gMCkge1xuICAgICAgICAgIF90aGlzMi5vcHRpb25hbFJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgb25FcnJvcjogZnVuY3Rpb24gb25FcnJvcihlcnJvcikge1xuICAgICAgICAvLyBPcHRpbWlzdGljYWxseSB1cGRhdGUgc3RhdGUgaWYgbmVlZGVkXG4gICAgICAgIGlmICghKGlzQ2FuY2VsbGVkRXJyb3IoZXJyb3IpICYmIGVycm9yLnNpbGVudCkpIHtcbiAgICAgICAgICBfdGhpczIuZGlzcGF0Y2goe1xuICAgICAgICAgICAgdHlwZTogJ2Vycm9yJyxcbiAgICAgICAgICAgIGVycm9yOiBlcnJvclxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFpc0NhbmNlbGxlZEVycm9yKGVycm9yKSkge1xuICAgICAgICAgIC8vIE5vdGlmeSBjYWNoZSBjYWxsYmFja1xuICAgICAgICAgIF90aGlzMi5jYWNoZS5jb25maWcub25FcnJvciA9PSBudWxsID8gdm9pZCAwIDogX3RoaXMyLmNhY2hlLmNvbmZpZy5vbkVycm9yKGVycm9yLCBfdGhpczIpOyAvLyBMb2cgZXJyb3JcblxuICAgICAgICAgIGdldExvZ2dlcigpLmVycm9yKGVycm9yKTtcbiAgICAgICAgfSAvLyBSZW1vdmUgcXVlcnkgYWZ0ZXIgZmV0Y2hpbmcgaWYgY2FjaGUgdGltZSBpcyAwXG5cblxuICAgICAgICBpZiAoX3RoaXMyLmNhY2hlVGltZSA9PT0gMCkge1xuICAgICAgICAgIF90aGlzMi5vcHRpb25hbFJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgb25GYWlsOiBmdW5jdGlvbiBvbkZhaWwoKSB7XG4gICAgICAgIF90aGlzMi5kaXNwYXRjaCh7XG4gICAgICAgICAgdHlwZTogJ2ZhaWxlZCdcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgb25QYXVzZTogZnVuY3Rpb24gb25QYXVzZSgpIHtcbiAgICAgICAgX3RoaXMyLmRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiAncGF1c2UnXG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIG9uQ29udGludWU6IGZ1bmN0aW9uIG9uQ29udGludWUoKSB7XG4gICAgICAgIF90aGlzMi5kaXNwYXRjaCh7XG4gICAgICAgICAgdHlwZTogJ2NvbnRpbnVlJ1xuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICByZXRyeTogY29udGV4dC5vcHRpb25zLnJldHJ5LFxuICAgICAgcmV0cnlEZWxheTogY29udGV4dC5vcHRpb25zLnJldHJ5RGVsYXlcbiAgICB9KTtcbiAgICB0aGlzLnByb21pc2UgPSB0aGlzLnJldHJ5ZXIucHJvbWlzZTtcbiAgICByZXR1cm4gdGhpcy5wcm9taXNlO1xuICB9O1xuXG4gIF9wcm90by5kaXNwYXRjaCA9IGZ1bmN0aW9uIGRpc3BhdGNoKGFjdGlvbikge1xuICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHRoaXMucmVkdWNlcih0aGlzLnN0YXRlLCBhY3Rpb24pO1xuICAgIG5vdGlmeU1hbmFnZXIuYmF0Y2goZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMzLm9ic2VydmVycy5mb3JFYWNoKGZ1bmN0aW9uIChvYnNlcnZlcikge1xuICAgICAgICBvYnNlcnZlci5vblF1ZXJ5VXBkYXRlKGFjdGlvbik7XG4gICAgICB9KTtcblxuICAgICAgX3RoaXMzLmNhY2hlLm5vdGlmeSh7XG4gICAgICAgIHF1ZXJ5OiBfdGhpczMsXG4gICAgICAgIHR5cGU6ICdxdWVyeVVwZGF0ZWQnLFxuICAgICAgICBhY3Rpb246IGFjdGlvblxuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLmdldERlZmF1bHRTdGF0ZSA9IGZ1bmN0aW9uIGdldERlZmF1bHRTdGF0ZShvcHRpb25zKSB7XG4gICAgdmFyIGRhdGEgPSB0eXBlb2Ygb3B0aW9ucy5pbml0aWFsRGF0YSA9PT0gJ2Z1bmN0aW9uJyA/IG9wdGlvbnMuaW5pdGlhbERhdGEoKSA6IG9wdGlvbnMuaW5pdGlhbERhdGE7XG4gICAgdmFyIGhhc0luaXRpYWxEYXRhID0gdHlwZW9mIG9wdGlvbnMuaW5pdGlhbERhdGEgIT09ICd1bmRlZmluZWQnO1xuICAgIHZhciBpbml0aWFsRGF0YVVwZGF0ZWRBdCA9IGhhc0luaXRpYWxEYXRhID8gdHlwZW9mIG9wdGlvbnMuaW5pdGlhbERhdGFVcGRhdGVkQXQgPT09ICdmdW5jdGlvbicgPyBvcHRpb25zLmluaXRpYWxEYXRhVXBkYXRlZEF0KCkgOiBvcHRpb25zLmluaXRpYWxEYXRhVXBkYXRlZEF0IDogMDtcbiAgICB2YXIgaGFzRGF0YSA9IHR5cGVvZiBkYXRhICE9PSAndW5kZWZpbmVkJztcbiAgICByZXR1cm4ge1xuICAgICAgZGF0YTogZGF0YSxcbiAgICAgIGRhdGFVcGRhdGVDb3VudDogMCxcbiAgICAgIGRhdGFVcGRhdGVkQXQ6IGhhc0RhdGEgPyBpbml0aWFsRGF0YVVwZGF0ZWRBdCAhPSBudWxsID8gaW5pdGlhbERhdGFVcGRhdGVkQXQgOiBEYXRlLm5vdygpIDogMCxcbiAgICAgIGVycm9yOiBudWxsLFxuICAgICAgZXJyb3JVcGRhdGVDb3VudDogMCxcbiAgICAgIGVycm9yVXBkYXRlZEF0OiAwLFxuICAgICAgZmV0Y2hGYWlsdXJlQ291bnQ6IDAsXG4gICAgICBmZXRjaE1ldGE6IG51bGwsXG4gICAgICBpc0ZldGNoaW5nOiBmYWxzZSxcbiAgICAgIGlzSW52YWxpZGF0ZWQ6IGZhbHNlLFxuICAgICAgaXNQYXVzZWQ6IGZhbHNlLFxuICAgICAgc3RhdHVzOiBoYXNEYXRhID8gJ3N1Y2Nlc3MnIDogJ2lkbGUnXG4gICAgfTtcbiAgfTtcblxuICBfcHJvdG8ucmVkdWNlciA9IGZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUsIGFjdGlvbikge1xuICAgIHZhciBfYWN0aW9uJG1ldGEsIF9hY3Rpb24kZGF0YVVwZGF0ZWRBdDtcblxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgIGNhc2UgJ2ZhaWxlZCc6XG4gICAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgICBmZXRjaEZhaWx1cmVDb3VudDogc3RhdGUuZmV0Y2hGYWlsdXJlQ291bnQgKyAxXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdwYXVzZSc6XG4gICAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgICBpc1BhdXNlZDogdHJ1ZVxuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnY29udGludWUnOlxuICAgICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgICAgICAgaXNQYXVzZWQ6IGZhbHNlXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdmZXRjaCc6XG4gICAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgICBmZXRjaEZhaWx1cmVDb3VudDogMCxcbiAgICAgICAgICBmZXRjaE1ldGE6IChfYWN0aW9uJG1ldGEgPSBhY3Rpb24ubWV0YSkgIT0gbnVsbCA/IF9hY3Rpb24kbWV0YSA6IG51bGwsXG4gICAgICAgICAgaXNGZXRjaGluZzogdHJ1ZSxcbiAgICAgICAgICBpc1BhdXNlZDogZmFsc2UsXG4gICAgICAgICAgc3RhdHVzOiAhc3RhdGUuZGF0YVVwZGF0ZWRBdCA/ICdsb2FkaW5nJyA6IHN0YXRlLnN0YXR1c1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnc3VjY2Vzcyc6XG4gICAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgICBkYXRhOiBhY3Rpb24uZGF0YSxcbiAgICAgICAgICBkYXRhVXBkYXRlQ291bnQ6IHN0YXRlLmRhdGFVcGRhdGVDb3VudCArIDEsXG4gICAgICAgICAgZGF0YVVwZGF0ZWRBdDogKF9hY3Rpb24kZGF0YVVwZGF0ZWRBdCA9IGFjdGlvbi5kYXRhVXBkYXRlZEF0KSAhPSBudWxsID8gX2FjdGlvbiRkYXRhVXBkYXRlZEF0IDogRGF0ZS5ub3coKSxcbiAgICAgICAgICBlcnJvcjogbnVsbCxcbiAgICAgICAgICBmZXRjaEZhaWx1cmVDb3VudDogMCxcbiAgICAgICAgICBpc0ZldGNoaW5nOiBmYWxzZSxcbiAgICAgICAgICBpc0ludmFsaWRhdGVkOiBmYWxzZSxcbiAgICAgICAgICBpc1BhdXNlZDogZmFsc2UsXG4gICAgICAgICAgc3RhdHVzOiAnc3VjY2VzcydcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ2Vycm9yJzpcbiAgICAgICAgdmFyIGVycm9yID0gYWN0aW9uLmVycm9yO1xuXG4gICAgICAgIGlmIChpc0NhbmNlbGxlZEVycm9yKGVycm9yKSAmJiBlcnJvci5yZXZlcnQgJiYgdGhpcy5yZXZlcnRTdGF0ZSkge1xuICAgICAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgdGhpcy5yZXZlcnRTdGF0ZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgICAgICAgZXJyb3I6IGVycm9yLFxuICAgICAgICAgIGVycm9yVXBkYXRlQ291bnQ6IHN0YXRlLmVycm9yVXBkYXRlQ291bnQgKyAxLFxuICAgICAgICAgIGVycm9yVXBkYXRlZEF0OiBEYXRlLm5vdygpLFxuICAgICAgICAgIGZldGNoRmFpbHVyZUNvdW50OiBzdGF0ZS5mZXRjaEZhaWx1cmVDb3VudCArIDEsXG4gICAgICAgICAgaXNGZXRjaGluZzogZmFsc2UsXG4gICAgICAgICAgaXNQYXVzZWQ6IGZhbHNlLFxuICAgICAgICAgIHN0YXR1czogJ2Vycm9yJ1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnaW52YWxpZGF0ZSc6XG4gICAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgICBpc0ludmFsaWRhdGVkOiB0cnVlXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdzZXRTdGF0ZSc6XG4gICAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIGFjdGlvbi5zdGF0ZSk7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIFF1ZXJ5O1xufSgpOyIsImltcG9ydCBfaW5oZXJpdHNMb29zZSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHNMb29zZVwiO1xuaW1wb3J0IHsgaGFzaFF1ZXJ5S2V5QnlPcHRpb25zLCBtYXRjaFF1ZXJ5LCBwYXJzZUZpbHRlckFyZ3MgfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7IFF1ZXJ5IH0gZnJvbSAnLi9xdWVyeSc7XG5pbXBvcnQgeyBub3RpZnlNYW5hZ2VyIH0gZnJvbSAnLi9ub3RpZnlNYW5hZ2VyJztcbmltcG9ydCB7IFN1YnNjcmliYWJsZSB9IGZyb20gJy4vc3Vic2NyaWJhYmxlJztcbi8vIENMQVNTXG5leHBvcnQgdmFyIFF1ZXJ5Q2FjaGUgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9TdWJzY3JpYmFibGUpIHtcbiAgX2luaGVyaXRzTG9vc2UoUXVlcnlDYWNoZSwgX1N1YnNjcmliYWJsZSk7XG5cbiAgZnVuY3Rpb24gUXVlcnlDYWNoZShjb25maWcpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfdGhpcyA9IF9TdWJzY3JpYmFibGUuY2FsbCh0aGlzKSB8fCB0aGlzO1xuICAgIF90aGlzLmNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcbiAgICBfdGhpcy5xdWVyaWVzID0gW107XG4gICAgX3RoaXMucXVlcmllc01hcCA9IHt9O1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBRdWVyeUNhY2hlLnByb3RvdHlwZTtcblxuICBfcHJvdG8uYnVpbGQgPSBmdW5jdGlvbiBidWlsZChjbGllbnQsIG9wdGlvbnMsIHN0YXRlKSB7XG4gICAgdmFyIF9vcHRpb25zJHF1ZXJ5SGFzaDtcblxuICAgIHZhciBxdWVyeUtleSA9IG9wdGlvbnMucXVlcnlLZXk7XG4gICAgdmFyIHF1ZXJ5SGFzaCA9IChfb3B0aW9ucyRxdWVyeUhhc2ggPSBvcHRpb25zLnF1ZXJ5SGFzaCkgIT0gbnVsbCA/IF9vcHRpb25zJHF1ZXJ5SGFzaCA6IGhhc2hRdWVyeUtleUJ5T3B0aW9ucyhxdWVyeUtleSwgb3B0aW9ucyk7XG4gICAgdmFyIHF1ZXJ5ID0gdGhpcy5nZXQocXVlcnlIYXNoKTtcblxuICAgIGlmICghcXVlcnkpIHtcbiAgICAgIHF1ZXJ5ID0gbmV3IFF1ZXJ5KHtcbiAgICAgICAgY2FjaGU6IHRoaXMsXG4gICAgICAgIHF1ZXJ5S2V5OiBxdWVyeUtleSxcbiAgICAgICAgcXVlcnlIYXNoOiBxdWVyeUhhc2gsXG4gICAgICAgIG9wdGlvbnM6IGNsaWVudC5kZWZhdWx0UXVlcnlPcHRpb25zKG9wdGlvbnMpLFxuICAgICAgICBzdGF0ZTogc3RhdGUsXG4gICAgICAgIGRlZmF1bHRPcHRpb25zOiBjbGllbnQuZ2V0UXVlcnlEZWZhdWx0cyhxdWVyeUtleSlcbiAgICAgIH0pO1xuICAgICAgdGhpcy5hZGQocXVlcnkpO1xuICAgIH1cblxuICAgIHJldHVybiBxdWVyeTtcbiAgfTtcblxuICBfcHJvdG8uYWRkID0gZnVuY3Rpb24gYWRkKHF1ZXJ5KSB7XG4gICAgaWYgKCF0aGlzLnF1ZXJpZXNNYXBbcXVlcnkucXVlcnlIYXNoXSkge1xuICAgICAgdGhpcy5xdWVyaWVzTWFwW3F1ZXJ5LnF1ZXJ5SGFzaF0gPSBxdWVyeTtcbiAgICAgIHRoaXMucXVlcmllcy5wdXNoKHF1ZXJ5KTtcbiAgICAgIHRoaXMubm90aWZ5KHtcbiAgICAgICAgdHlwZTogJ3F1ZXJ5QWRkZWQnLFxuICAgICAgICBxdWVyeTogcXVlcnlcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8ucmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKHF1ZXJ5KSB7XG4gICAgdmFyIHF1ZXJ5SW5NYXAgPSB0aGlzLnF1ZXJpZXNNYXBbcXVlcnkucXVlcnlIYXNoXTtcblxuICAgIGlmIChxdWVyeUluTWFwKSB7XG4gICAgICBxdWVyeS5kZXN0cm95KCk7XG4gICAgICB0aGlzLnF1ZXJpZXMgPSB0aGlzLnF1ZXJpZXMuZmlsdGVyKGZ1bmN0aW9uICh4KSB7XG4gICAgICAgIHJldHVybiB4ICE9PSBxdWVyeTtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAocXVlcnlJbk1hcCA9PT0gcXVlcnkpIHtcbiAgICAgICAgZGVsZXRlIHRoaXMucXVlcmllc01hcFtxdWVyeS5xdWVyeUhhc2hdO1xuICAgICAgfVxuXG4gICAgICB0aGlzLm5vdGlmeSh7XG4gICAgICAgIHR5cGU6ICdxdWVyeVJlbW92ZWQnLFxuICAgICAgICBxdWVyeTogcXVlcnlcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uY2xlYXIgPSBmdW5jdGlvbiBjbGVhcigpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIG5vdGlmeU1hbmFnZXIuYmF0Y2goZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMyLnF1ZXJpZXMuZm9yRWFjaChmdW5jdGlvbiAocXVlcnkpIHtcbiAgICAgICAgX3RoaXMyLnJlbW92ZShxdWVyeSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8uZ2V0ID0gZnVuY3Rpb24gZ2V0KHF1ZXJ5SGFzaCkge1xuICAgIHJldHVybiB0aGlzLnF1ZXJpZXNNYXBbcXVlcnlIYXNoXTtcbiAgfTtcblxuICBfcHJvdG8uZ2V0QWxsID0gZnVuY3Rpb24gZ2V0QWxsKCkge1xuICAgIHJldHVybiB0aGlzLnF1ZXJpZXM7XG4gIH07XG5cbiAgX3Byb3RvLmZpbmQgPSBmdW5jdGlvbiBmaW5kKGFyZzEsIGFyZzIpIHtcbiAgICB2YXIgX3BhcnNlRmlsdGVyQXJncyA9IHBhcnNlRmlsdGVyQXJncyhhcmcxLCBhcmcyKSxcbiAgICAgICAgZmlsdGVycyA9IF9wYXJzZUZpbHRlckFyZ3NbMF07XG5cbiAgICBpZiAodHlwZW9mIGZpbHRlcnMuZXhhY3QgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBmaWx0ZXJzLmV4YWN0ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5xdWVyaWVzLmZpbmQoZnVuY3Rpb24gKHF1ZXJ5KSB7XG4gICAgICByZXR1cm4gbWF0Y2hRdWVyeShmaWx0ZXJzLCBxdWVyeSk7XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLmZpbmRBbGwgPSBmdW5jdGlvbiBmaW5kQWxsKGFyZzEsIGFyZzIpIHtcbiAgICB2YXIgX3BhcnNlRmlsdGVyQXJnczIgPSBwYXJzZUZpbHRlckFyZ3MoYXJnMSwgYXJnMiksXG4gICAgICAgIGZpbHRlcnMgPSBfcGFyc2VGaWx0ZXJBcmdzMlswXTtcblxuICAgIHJldHVybiBmaWx0ZXJzID8gdGhpcy5xdWVyaWVzLmZpbHRlcihmdW5jdGlvbiAocXVlcnkpIHtcbiAgICAgIHJldHVybiBtYXRjaFF1ZXJ5KGZpbHRlcnMsIHF1ZXJ5KTtcbiAgICB9KSA6IHRoaXMucXVlcmllcztcbiAgfTtcblxuICBfcHJvdG8ubm90aWZ5ID0gZnVuY3Rpb24gbm90aWZ5KGV2ZW50KSB7XG4gICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICBub3RpZnlNYW5hZ2VyLmJhdGNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzMy5saXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbiAobGlzdGVuZXIpIHtcbiAgICAgICAgbGlzdGVuZXIoZXZlbnQpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLm9uRm9jdXMgPSBmdW5jdGlvbiBvbkZvY3VzKCkge1xuICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgbm90aWZ5TWFuYWdlci5iYXRjaChmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpczQucXVlcmllcy5mb3JFYWNoKGZ1bmN0aW9uIChxdWVyeSkge1xuICAgICAgICBxdWVyeS5vbkZvY3VzKCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8ub25PbmxpbmUgPSBmdW5jdGlvbiBvbk9ubGluZSgpIHtcbiAgICB2YXIgX3RoaXM1ID0gdGhpcztcblxuICAgIG5vdGlmeU1hbmFnZXIuYmF0Y2goZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXM1LnF1ZXJpZXMuZm9yRWFjaChmdW5jdGlvbiAocXVlcnkpIHtcbiAgICAgICAgcXVlcnkub25PbmxpbmUoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiBRdWVyeUNhY2hlO1xufShTdWJzY3JpYmFibGUpOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IHsgaGFzaFF1ZXJ5S2V5LCBub29wLCBwYXJzZUZpbHRlckFyZ3MsIHBhcnNlUXVlcnlBcmdzLCBwYXJ0aWFsTWF0Y2hLZXksIGhhc2hRdWVyeUtleUJ5T3B0aW9ucyB9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHsgUXVlcnlDYWNoZSB9IGZyb20gJy4vcXVlcnlDYWNoZSc7XG5pbXBvcnQgeyBNdXRhdGlvbkNhY2hlIH0gZnJvbSAnLi9tdXRhdGlvbkNhY2hlJztcbmltcG9ydCB7IGZvY3VzTWFuYWdlciB9IGZyb20gJy4vZm9jdXNNYW5hZ2VyJztcbmltcG9ydCB7IG9ubGluZU1hbmFnZXIgfSBmcm9tICcuL29ubGluZU1hbmFnZXInO1xuaW1wb3J0IHsgbm90aWZ5TWFuYWdlciB9IGZyb20gJy4vbm90aWZ5TWFuYWdlcic7XG5pbXBvcnQgeyBpbmZpbml0ZVF1ZXJ5QmVoYXZpb3IgfSBmcm9tICcuL2luZmluaXRlUXVlcnlCZWhhdmlvcic7IC8vIFRZUEVTXG5cbi8vIENMQVNTXG5leHBvcnQgdmFyIFF1ZXJ5Q2xpZW50ID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gUXVlcnlDbGllbnQoY29uZmlnKSB7XG4gICAgaWYgKGNvbmZpZyA9PT0gdm9pZCAwKSB7XG4gICAgICBjb25maWcgPSB7fTtcbiAgICB9XG5cbiAgICB0aGlzLnF1ZXJ5Q2FjaGUgPSBjb25maWcucXVlcnlDYWNoZSB8fCBuZXcgUXVlcnlDYWNoZSgpO1xuICAgIHRoaXMubXV0YXRpb25DYWNoZSA9IGNvbmZpZy5tdXRhdGlvbkNhY2hlIHx8IG5ldyBNdXRhdGlvbkNhY2hlKCk7XG4gICAgdGhpcy5kZWZhdWx0T3B0aW9ucyA9IGNvbmZpZy5kZWZhdWx0T3B0aW9ucyB8fCB7fTtcbiAgICB0aGlzLnF1ZXJ5RGVmYXVsdHMgPSBbXTtcbiAgICB0aGlzLm11dGF0aW9uRGVmYXVsdHMgPSBbXTtcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBRdWVyeUNsaWVudC5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLm1vdW50ID0gZnVuY3Rpb24gbW91bnQoKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIHRoaXMudW5zdWJzY3JpYmVGb2N1cyA9IGZvY3VzTWFuYWdlci5zdWJzY3JpYmUoZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKGZvY3VzTWFuYWdlci5pc0ZvY3VzZWQoKSAmJiBvbmxpbmVNYW5hZ2VyLmlzT25saW5lKCkpIHtcbiAgICAgICAgX3RoaXMubXV0YXRpb25DYWNoZS5vbkZvY3VzKCk7XG5cbiAgICAgICAgX3RoaXMucXVlcnlDYWNoZS5vbkZvY3VzKCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy51bnN1YnNjcmliZU9ubGluZSA9IG9ubGluZU1hbmFnZXIuc3Vic2NyaWJlKGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChmb2N1c01hbmFnZXIuaXNGb2N1c2VkKCkgJiYgb25saW5lTWFuYWdlci5pc09ubGluZSgpKSB7XG4gICAgICAgIF90aGlzLm11dGF0aW9uQ2FjaGUub25PbmxpbmUoKTtcblxuICAgICAgICBfdGhpcy5xdWVyeUNhY2hlLm9uT25saW5lKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLnVubW91bnQgPSBmdW5jdGlvbiB1bm1vdW50KCkge1xuICAgIHZhciBfdGhpcyR1bnN1YnNjcmliZUZvY3UsIF90aGlzJHVuc3Vic2NyaWJlT25saTtcblxuICAgIChfdGhpcyR1bnN1YnNjcmliZUZvY3UgPSB0aGlzLnVuc3Vic2NyaWJlRm9jdXMpID09IG51bGwgPyB2b2lkIDAgOiBfdGhpcyR1bnN1YnNjcmliZUZvY3UuY2FsbCh0aGlzKTtcbiAgICAoX3RoaXMkdW5zdWJzY3JpYmVPbmxpID0gdGhpcy51bnN1YnNjcmliZU9ubGluZSkgPT0gbnVsbCA/IHZvaWQgMCA6IF90aGlzJHVuc3Vic2NyaWJlT25saS5jYWxsKHRoaXMpO1xuICB9O1xuXG4gIF9wcm90by5pc0ZldGNoaW5nID0gZnVuY3Rpb24gaXNGZXRjaGluZyhhcmcxLCBhcmcyKSB7XG4gICAgdmFyIF9wYXJzZUZpbHRlckFyZ3MgPSBwYXJzZUZpbHRlckFyZ3MoYXJnMSwgYXJnMiksXG4gICAgICAgIGZpbHRlcnMgPSBfcGFyc2VGaWx0ZXJBcmdzWzBdO1xuXG4gICAgZmlsdGVycy5mZXRjaGluZyA9IHRydWU7XG4gICAgcmV0dXJuIHRoaXMucXVlcnlDYWNoZS5maW5kQWxsKGZpbHRlcnMpLmxlbmd0aDtcbiAgfTtcblxuICBfcHJvdG8uaXNNdXRhdGluZyA9IGZ1bmN0aW9uIGlzTXV0YXRpbmcoZmlsdGVycykge1xuICAgIHJldHVybiB0aGlzLm11dGF0aW9uQ2FjaGUuZmluZEFsbChfZXh0ZW5kcyh7fSwgZmlsdGVycywge1xuICAgICAgZmV0Y2hpbmc6IHRydWVcbiAgICB9KSkubGVuZ3RoO1xuICB9O1xuXG4gIF9wcm90by5nZXRRdWVyeURhdGEgPSBmdW5jdGlvbiBnZXRRdWVyeURhdGEocXVlcnlLZXksIGZpbHRlcnMpIHtcbiAgICB2YXIgX3RoaXMkcXVlcnlDYWNoZSRmaW5kO1xuXG4gICAgcmV0dXJuIChfdGhpcyRxdWVyeUNhY2hlJGZpbmQgPSB0aGlzLnF1ZXJ5Q2FjaGUuZmluZChxdWVyeUtleSwgZmlsdGVycykpID09IG51bGwgPyB2b2lkIDAgOiBfdGhpcyRxdWVyeUNhY2hlJGZpbmQuc3RhdGUuZGF0YTtcbiAgfTtcblxuICBfcHJvdG8uc2V0UXVlcnlEYXRhID0gZnVuY3Rpb24gc2V0UXVlcnlEYXRhKHF1ZXJ5S2V5LCB1cGRhdGVyLCBvcHRpb25zKSB7XG4gICAgdmFyIHBhcnNlZE9wdGlvbnMgPSBwYXJzZVF1ZXJ5QXJncyhxdWVyeUtleSk7XG4gICAgdmFyIGRlZmF1bHRlZE9wdGlvbnMgPSB0aGlzLmRlZmF1bHRRdWVyeU9wdGlvbnMocGFyc2VkT3B0aW9ucyk7XG4gICAgcmV0dXJuIHRoaXMucXVlcnlDYWNoZS5idWlsZCh0aGlzLCBkZWZhdWx0ZWRPcHRpb25zKS5zZXREYXRhKHVwZGF0ZXIsIG9wdGlvbnMpO1xuICB9O1xuXG4gIF9wcm90by5zZXRRdWVyaWVzRGF0YSA9IGZ1bmN0aW9uIHNldFF1ZXJpZXNEYXRhKHF1ZXJ5S2V5T3JGaWx0ZXJzLCB1cGRhdGVyLCBvcHRpb25zKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICByZXR1cm4gbm90aWZ5TWFuYWdlci5iYXRjaChmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gX3RoaXMyLmdldFF1ZXJ5Q2FjaGUoKS5maW5kQWxsKHF1ZXJ5S2V5T3JGaWx0ZXJzKS5tYXAoZnVuY3Rpb24gKF9yZWYpIHtcbiAgICAgICAgdmFyIHF1ZXJ5S2V5ID0gX3JlZi5xdWVyeUtleTtcbiAgICAgICAgcmV0dXJuIFtxdWVyeUtleSwgX3RoaXMyLnNldFF1ZXJ5RGF0YShxdWVyeUtleSwgdXBkYXRlciwgb3B0aW9ucyldO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLmdldFF1ZXJ5U3RhdGUgPSBmdW5jdGlvbiBnZXRRdWVyeVN0YXRlKHF1ZXJ5S2V5LCBmaWx0ZXJzKSB7XG4gICAgdmFyIF90aGlzJHF1ZXJ5Q2FjaGUkZmluZDI7XG5cbiAgICByZXR1cm4gKF90aGlzJHF1ZXJ5Q2FjaGUkZmluZDIgPSB0aGlzLnF1ZXJ5Q2FjaGUuZmluZChxdWVyeUtleSwgZmlsdGVycykpID09IG51bGwgPyB2b2lkIDAgOiBfdGhpcyRxdWVyeUNhY2hlJGZpbmQyLnN0YXRlO1xuICB9O1xuXG4gIF9wcm90by5yZW1vdmVRdWVyaWVzID0gZnVuY3Rpb24gcmVtb3ZlUXVlcmllcyhhcmcxLCBhcmcyKSB7XG4gICAgdmFyIF9wYXJzZUZpbHRlckFyZ3MyID0gcGFyc2VGaWx0ZXJBcmdzKGFyZzEsIGFyZzIpLFxuICAgICAgICBmaWx0ZXJzID0gX3BhcnNlRmlsdGVyQXJnczJbMF07XG5cbiAgICB2YXIgcXVlcnlDYWNoZSA9IHRoaXMucXVlcnlDYWNoZTtcbiAgICBub3RpZnlNYW5hZ2VyLmJhdGNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIHF1ZXJ5Q2FjaGUuZmluZEFsbChmaWx0ZXJzKS5mb3JFYWNoKGZ1bmN0aW9uIChxdWVyeSkge1xuICAgICAgICBxdWVyeUNhY2hlLnJlbW92ZShxdWVyeSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8ucmVzZXRRdWVyaWVzID0gZnVuY3Rpb24gcmVzZXRRdWVyaWVzKGFyZzEsIGFyZzIsIGFyZzMpIHtcbiAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgIHZhciBfcGFyc2VGaWx0ZXJBcmdzMyA9IHBhcnNlRmlsdGVyQXJncyhhcmcxLCBhcmcyLCBhcmczKSxcbiAgICAgICAgZmlsdGVycyA9IF9wYXJzZUZpbHRlckFyZ3MzWzBdLFxuICAgICAgICBvcHRpb25zID0gX3BhcnNlRmlsdGVyQXJnczNbMV07XG5cbiAgICB2YXIgcXVlcnlDYWNoZSA9IHRoaXMucXVlcnlDYWNoZTtcblxuICAgIHZhciByZWZldGNoRmlsdGVycyA9IF9leHRlbmRzKHt9LCBmaWx0ZXJzLCB7XG4gICAgICBhY3RpdmU6IHRydWVcbiAgICB9KTtcblxuICAgIHJldHVybiBub3RpZnlNYW5hZ2VyLmJhdGNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIHF1ZXJ5Q2FjaGUuZmluZEFsbChmaWx0ZXJzKS5mb3JFYWNoKGZ1bmN0aW9uIChxdWVyeSkge1xuICAgICAgICBxdWVyeS5yZXNldCgpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gX3RoaXMzLnJlZmV0Y2hRdWVyaWVzKHJlZmV0Y2hGaWx0ZXJzLCBvcHRpb25zKTtcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8uY2FuY2VsUXVlcmllcyA9IGZ1bmN0aW9uIGNhbmNlbFF1ZXJpZXMoYXJnMSwgYXJnMiwgYXJnMykge1xuICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgdmFyIF9wYXJzZUZpbHRlckFyZ3M0ID0gcGFyc2VGaWx0ZXJBcmdzKGFyZzEsIGFyZzIsIGFyZzMpLFxuICAgICAgICBmaWx0ZXJzID0gX3BhcnNlRmlsdGVyQXJnczRbMF0sXG4gICAgICAgIF9wYXJzZUZpbHRlckFyZ3M0JCA9IF9wYXJzZUZpbHRlckFyZ3M0WzFdLFxuICAgICAgICBjYW5jZWxPcHRpb25zID0gX3BhcnNlRmlsdGVyQXJnczQkID09PSB2b2lkIDAgPyB7fSA6IF9wYXJzZUZpbHRlckFyZ3M0JDtcblxuICAgIGlmICh0eXBlb2YgY2FuY2VsT3B0aW9ucy5yZXZlcnQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjYW5jZWxPcHRpb25zLnJldmVydCA9IHRydWU7XG4gICAgfVxuXG4gICAgdmFyIHByb21pc2VzID0gbm90aWZ5TWFuYWdlci5iYXRjaChmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gX3RoaXM0LnF1ZXJ5Q2FjaGUuZmluZEFsbChmaWx0ZXJzKS5tYXAoZnVuY3Rpb24gKHF1ZXJ5KSB7XG4gICAgICAgIHJldHVybiBxdWVyeS5jYW5jZWwoY2FuY2VsT3B0aW9ucyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpLnRoZW4obm9vcCkuY2F0Y2gobm9vcCk7XG4gIH07XG5cbiAgX3Byb3RvLmludmFsaWRhdGVRdWVyaWVzID0gZnVuY3Rpb24gaW52YWxpZGF0ZVF1ZXJpZXMoYXJnMSwgYXJnMiwgYXJnMykge1xuICAgIHZhciBfcmVmMixcbiAgICAgICAgX2ZpbHRlcnMkcmVmZXRjaEFjdGl2LFxuICAgICAgICBfZmlsdGVycyRyZWZldGNoSW5hY3QsXG4gICAgICAgIF90aGlzNSA9IHRoaXM7XG5cbiAgICB2YXIgX3BhcnNlRmlsdGVyQXJnczUgPSBwYXJzZUZpbHRlckFyZ3MoYXJnMSwgYXJnMiwgYXJnMyksXG4gICAgICAgIGZpbHRlcnMgPSBfcGFyc2VGaWx0ZXJBcmdzNVswXSxcbiAgICAgICAgb3B0aW9ucyA9IF9wYXJzZUZpbHRlckFyZ3M1WzFdO1xuXG4gICAgdmFyIHJlZmV0Y2hGaWx0ZXJzID0gX2V4dGVuZHMoe30sIGZpbHRlcnMsIHtcbiAgICAgIC8vIGlmIGZpbHRlcnMucmVmZXRjaEFjdGl2ZSBpcyBub3QgcHJvdmlkZWQgYW5kIGZpbHRlcnMuYWN0aXZlIGlzIGV4cGxpY2l0bHkgZmFsc2UsXG4gICAgICAvLyBlLmcuIGludmFsaWRhdGVRdWVyaWVzKHsgYWN0aXZlOiBmYWxzZSB9KSwgd2UgZG9uJ3Qgd2FudCB0byByZWZldGNoIGFjdGl2ZSBxdWVyaWVzXG4gICAgICBhY3RpdmU6IChfcmVmMiA9IChfZmlsdGVycyRyZWZldGNoQWN0aXYgPSBmaWx0ZXJzLnJlZmV0Y2hBY3RpdmUpICE9IG51bGwgPyBfZmlsdGVycyRyZWZldGNoQWN0aXYgOiBmaWx0ZXJzLmFjdGl2ZSkgIT0gbnVsbCA/IF9yZWYyIDogdHJ1ZSxcbiAgICAgIGluYWN0aXZlOiAoX2ZpbHRlcnMkcmVmZXRjaEluYWN0ID0gZmlsdGVycy5yZWZldGNoSW5hY3RpdmUpICE9IG51bGwgPyBfZmlsdGVycyRyZWZldGNoSW5hY3QgOiBmYWxzZVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIG5vdGlmeU1hbmFnZXIuYmF0Y2goZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXM1LnF1ZXJ5Q2FjaGUuZmluZEFsbChmaWx0ZXJzKS5mb3JFYWNoKGZ1bmN0aW9uIChxdWVyeSkge1xuICAgICAgICBxdWVyeS5pbnZhbGlkYXRlKCk7XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIF90aGlzNS5yZWZldGNoUXVlcmllcyhyZWZldGNoRmlsdGVycywgb3B0aW9ucyk7XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLnJlZmV0Y2hRdWVyaWVzID0gZnVuY3Rpb24gcmVmZXRjaFF1ZXJpZXMoYXJnMSwgYXJnMiwgYXJnMykge1xuICAgIHZhciBfdGhpczYgPSB0aGlzO1xuXG4gICAgdmFyIF9wYXJzZUZpbHRlckFyZ3M2ID0gcGFyc2VGaWx0ZXJBcmdzKGFyZzEsIGFyZzIsIGFyZzMpLFxuICAgICAgICBmaWx0ZXJzID0gX3BhcnNlRmlsdGVyQXJnczZbMF0sXG4gICAgICAgIG9wdGlvbnMgPSBfcGFyc2VGaWx0ZXJBcmdzNlsxXTtcblxuICAgIHZhciBwcm9taXNlcyA9IG5vdGlmeU1hbmFnZXIuYmF0Y2goZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIF90aGlzNi5xdWVyeUNhY2hlLmZpbmRBbGwoZmlsdGVycykubWFwKGZ1bmN0aW9uIChxdWVyeSkge1xuICAgICAgICByZXR1cm4gcXVlcnkuZmV0Y2goKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHZhciBwcm9taXNlID0gUHJvbWlzZS5hbGwocHJvbWlzZXMpLnRoZW4obm9vcCk7XG5cbiAgICBpZiAoIShvcHRpb25zID09IG51bGwgPyB2b2lkIDAgOiBvcHRpb25zLnRocm93T25FcnJvcikpIHtcbiAgICAgIHByb21pc2UgPSBwcm9taXNlLmNhdGNoKG5vb3ApO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9taXNlO1xuICB9O1xuXG4gIF9wcm90by5mZXRjaFF1ZXJ5ID0gZnVuY3Rpb24gZmV0Y2hRdWVyeShhcmcxLCBhcmcyLCBhcmczKSB7XG4gICAgdmFyIHBhcnNlZE9wdGlvbnMgPSBwYXJzZVF1ZXJ5QXJncyhhcmcxLCBhcmcyLCBhcmczKTtcbiAgICB2YXIgZGVmYXVsdGVkT3B0aW9ucyA9IHRoaXMuZGVmYXVsdFF1ZXJ5T3B0aW9ucyhwYXJzZWRPcHRpb25zKTsgLy8gaHR0cHM6Ly9naXRodWIuY29tL3Rhbm5lcmxpbnNsZXkvcmVhY3QtcXVlcnkvaXNzdWVzLzY1MlxuXG4gICAgaWYgKHR5cGVvZiBkZWZhdWx0ZWRPcHRpb25zLnJldHJ5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgZGVmYXVsdGVkT3B0aW9ucy5yZXRyeSA9IGZhbHNlO1xuICAgIH1cblxuICAgIHZhciBxdWVyeSA9IHRoaXMucXVlcnlDYWNoZS5idWlsZCh0aGlzLCBkZWZhdWx0ZWRPcHRpb25zKTtcbiAgICByZXR1cm4gcXVlcnkuaXNTdGFsZUJ5VGltZShkZWZhdWx0ZWRPcHRpb25zLnN0YWxlVGltZSkgPyBxdWVyeS5mZXRjaChkZWZhdWx0ZWRPcHRpb25zKSA6IFByb21pc2UucmVzb2x2ZShxdWVyeS5zdGF0ZS5kYXRhKTtcbiAgfTtcblxuICBfcHJvdG8ucHJlZmV0Y2hRdWVyeSA9IGZ1bmN0aW9uIHByZWZldGNoUXVlcnkoYXJnMSwgYXJnMiwgYXJnMykge1xuICAgIHJldHVybiB0aGlzLmZldGNoUXVlcnkoYXJnMSwgYXJnMiwgYXJnMykudGhlbihub29wKS5jYXRjaChub29wKTtcbiAgfTtcblxuICBfcHJvdG8uZmV0Y2hJbmZpbml0ZVF1ZXJ5ID0gZnVuY3Rpb24gZmV0Y2hJbmZpbml0ZVF1ZXJ5KGFyZzEsIGFyZzIsIGFyZzMpIHtcbiAgICB2YXIgcGFyc2VkT3B0aW9ucyA9IHBhcnNlUXVlcnlBcmdzKGFyZzEsIGFyZzIsIGFyZzMpO1xuICAgIHBhcnNlZE9wdGlvbnMuYmVoYXZpb3IgPSBpbmZpbml0ZVF1ZXJ5QmVoYXZpb3IoKTtcbiAgICByZXR1cm4gdGhpcy5mZXRjaFF1ZXJ5KHBhcnNlZE9wdGlvbnMpO1xuICB9O1xuXG4gIF9wcm90by5wcmVmZXRjaEluZmluaXRlUXVlcnkgPSBmdW5jdGlvbiBwcmVmZXRjaEluZmluaXRlUXVlcnkoYXJnMSwgYXJnMiwgYXJnMykge1xuICAgIHJldHVybiB0aGlzLmZldGNoSW5maW5pdGVRdWVyeShhcmcxLCBhcmcyLCBhcmczKS50aGVuKG5vb3ApLmNhdGNoKG5vb3ApO1xuICB9O1xuXG4gIF9wcm90by5jYW5jZWxNdXRhdGlvbnMgPSBmdW5jdGlvbiBjYW5jZWxNdXRhdGlvbnMoKSB7XG4gICAgdmFyIF90aGlzNyA9IHRoaXM7XG5cbiAgICB2YXIgcHJvbWlzZXMgPSBub3RpZnlNYW5hZ2VyLmJhdGNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBfdGhpczcubXV0YXRpb25DYWNoZS5nZXRBbGwoKS5tYXAoZnVuY3Rpb24gKG11dGF0aW9uKSB7XG4gICAgICAgIHJldHVybiBtdXRhdGlvbi5jYW5jZWwoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbihub29wKS5jYXRjaChub29wKTtcbiAgfTtcblxuICBfcHJvdG8ucmVzdW1lUGF1c2VkTXV0YXRpb25zID0gZnVuY3Rpb24gcmVzdW1lUGF1c2VkTXV0YXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmdldE11dGF0aW9uQ2FjaGUoKS5yZXN1bWVQYXVzZWRNdXRhdGlvbnMoKTtcbiAgfTtcblxuICBfcHJvdG8uZXhlY3V0ZU11dGF0aW9uID0gZnVuY3Rpb24gZXhlY3V0ZU11dGF0aW9uKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdGhpcy5tdXRhdGlvbkNhY2hlLmJ1aWxkKHRoaXMsIG9wdGlvbnMpLmV4ZWN1dGUoKTtcbiAgfTtcblxuICBfcHJvdG8uZ2V0UXVlcnlDYWNoZSA9IGZ1bmN0aW9uIGdldFF1ZXJ5Q2FjaGUoKSB7XG4gICAgcmV0dXJuIHRoaXMucXVlcnlDYWNoZTtcbiAgfTtcblxuICBfcHJvdG8uZ2V0TXV0YXRpb25DYWNoZSA9IGZ1bmN0aW9uIGdldE11dGF0aW9uQ2FjaGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubXV0YXRpb25DYWNoZTtcbiAgfTtcblxuICBfcHJvdG8uZ2V0RGVmYXVsdE9wdGlvbnMgPSBmdW5jdGlvbiBnZXREZWZhdWx0T3B0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5kZWZhdWx0T3B0aW9ucztcbiAgfTtcblxuICBfcHJvdG8uc2V0RGVmYXVsdE9wdGlvbnMgPSBmdW5jdGlvbiBzZXREZWZhdWx0T3B0aW9ucyhvcHRpb25zKSB7XG4gICAgdGhpcy5kZWZhdWx0T3B0aW9ucyA9IG9wdGlvbnM7XG4gIH07XG5cbiAgX3Byb3RvLnNldFF1ZXJ5RGVmYXVsdHMgPSBmdW5jdGlvbiBzZXRRdWVyeURlZmF1bHRzKHF1ZXJ5S2V5LCBvcHRpb25zKSB7XG4gICAgdmFyIHJlc3VsdCA9IHRoaXMucXVlcnlEZWZhdWx0cy5maW5kKGZ1bmN0aW9uICh4KSB7XG4gICAgICByZXR1cm4gaGFzaFF1ZXJ5S2V5KHF1ZXJ5S2V5KSA9PT0gaGFzaFF1ZXJ5S2V5KHgucXVlcnlLZXkpO1xuICAgIH0pO1xuXG4gICAgaWYgKHJlc3VsdCkge1xuICAgICAgcmVzdWx0LmRlZmF1bHRPcHRpb25zID0gb3B0aW9ucztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5xdWVyeURlZmF1bHRzLnB1c2goe1xuICAgICAgICBxdWVyeUtleTogcXVlcnlLZXksXG4gICAgICAgIGRlZmF1bHRPcHRpb25zOiBvcHRpb25zXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLmdldFF1ZXJ5RGVmYXVsdHMgPSBmdW5jdGlvbiBnZXRRdWVyeURlZmF1bHRzKHF1ZXJ5S2V5KSB7XG4gICAgdmFyIF90aGlzJHF1ZXJ5RGVmYXVsdHMkZjtcblxuICAgIHJldHVybiBxdWVyeUtleSA/IChfdGhpcyRxdWVyeURlZmF1bHRzJGYgPSB0aGlzLnF1ZXJ5RGVmYXVsdHMuZmluZChmdW5jdGlvbiAoeCkge1xuICAgICAgcmV0dXJuIHBhcnRpYWxNYXRjaEtleShxdWVyeUtleSwgeC5xdWVyeUtleSk7XG4gICAgfSkpID09IG51bGwgPyB2b2lkIDAgOiBfdGhpcyRxdWVyeURlZmF1bHRzJGYuZGVmYXVsdE9wdGlvbnMgOiB1bmRlZmluZWQ7XG4gIH07XG5cbiAgX3Byb3RvLnNldE11dGF0aW9uRGVmYXVsdHMgPSBmdW5jdGlvbiBzZXRNdXRhdGlvbkRlZmF1bHRzKG11dGF0aW9uS2V5LCBvcHRpb25zKSB7XG4gICAgdmFyIHJlc3VsdCA9IHRoaXMubXV0YXRpb25EZWZhdWx0cy5maW5kKGZ1bmN0aW9uICh4KSB7XG4gICAgICByZXR1cm4gaGFzaFF1ZXJ5S2V5KG11dGF0aW9uS2V5KSA9PT0gaGFzaFF1ZXJ5S2V5KHgubXV0YXRpb25LZXkpO1xuICAgIH0pO1xuXG4gICAgaWYgKHJlc3VsdCkge1xuICAgICAgcmVzdWx0LmRlZmF1bHRPcHRpb25zID0gb3B0aW9ucztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5tdXRhdGlvbkRlZmF1bHRzLnB1c2goe1xuICAgICAgICBtdXRhdGlvbktleTogbXV0YXRpb25LZXksXG4gICAgICAgIGRlZmF1bHRPcHRpb25zOiBvcHRpb25zXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLmdldE11dGF0aW9uRGVmYXVsdHMgPSBmdW5jdGlvbiBnZXRNdXRhdGlvbkRlZmF1bHRzKG11dGF0aW9uS2V5KSB7XG4gICAgdmFyIF90aGlzJG11dGF0aW9uRGVmYXVsdDtcblxuICAgIHJldHVybiBtdXRhdGlvbktleSA/IChfdGhpcyRtdXRhdGlvbkRlZmF1bHQgPSB0aGlzLm11dGF0aW9uRGVmYXVsdHMuZmluZChmdW5jdGlvbiAoeCkge1xuICAgICAgcmV0dXJuIHBhcnRpYWxNYXRjaEtleShtdXRhdGlvbktleSwgeC5tdXRhdGlvbktleSk7XG4gICAgfSkpID09IG51bGwgPyB2b2lkIDAgOiBfdGhpcyRtdXRhdGlvbkRlZmF1bHQuZGVmYXVsdE9wdGlvbnMgOiB1bmRlZmluZWQ7XG4gIH07XG5cbiAgX3Byb3RvLmRlZmF1bHRRdWVyeU9wdGlvbnMgPSBmdW5jdGlvbiBkZWZhdWx0UXVlcnlPcHRpb25zKG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PSBudWxsID8gdm9pZCAwIDogb3B0aW9ucy5fZGVmYXVsdGVkKSB7XG4gICAgICByZXR1cm4gb3B0aW9ucztcbiAgICB9XG5cbiAgICB2YXIgZGVmYXVsdGVkT3B0aW9ucyA9IF9leHRlbmRzKHt9LCB0aGlzLmRlZmF1bHRPcHRpb25zLnF1ZXJpZXMsIHRoaXMuZ2V0UXVlcnlEZWZhdWx0cyhvcHRpb25zID09IG51bGwgPyB2b2lkIDAgOiBvcHRpb25zLnF1ZXJ5S2V5KSwgb3B0aW9ucywge1xuICAgICAgX2RlZmF1bHRlZDogdHJ1ZVxuICAgIH0pO1xuXG4gICAgaWYgKCFkZWZhdWx0ZWRPcHRpb25zLnF1ZXJ5SGFzaCAmJiBkZWZhdWx0ZWRPcHRpb25zLnF1ZXJ5S2V5KSB7XG4gICAgICBkZWZhdWx0ZWRPcHRpb25zLnF1ZXJ5SGFzaCA9IGhhc2hRdWVyeUtleUJ5T3B0aW9ucyhkZWZhdWx0ZWRPcHRpb25zLnF1ZXJ5S2V5LCBkZWZhdWx0ZWRPcHRpb25zKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGVmYXVsdGVkT3B0aW9ucztcbiAgfTtcblxuICBfcHJvdG8uZGVmYXVsdFF1ZXJ5T2JzZXJ2ZXJPcHRpb25zID0gZnVuY3Rpb24gZGVmYXVsdFF1ZXJ5T2JzZXJ2ZXJPcHRpb25zKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdGhpcy5kZWZhdWx0UXVlcnlPcHRpb25zKG9wdGlvbnMpO1xuICB9O1xuXG4gIF9wcm90by5kZWZhdWx0TXV0YXRpb25PcHRpb25zID0gZnVuY3Rpb24gZGVmYXVsdE11dGF0aW9uT3B0aW9ucyhvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT0gbnVsbCA/IHZvaWQgMCA6IG9wdGlvbnMuX2RlZmF1bHRlZCkge1xuICAgICAgcmV0dXJuIG9wdGlvbnM7XG4gICAgfVxuXG4gICAgcmV0dXJuIF9leHRlbmRzKHt9LCB0aGlzLmRlZmF1bHRPcHRpb25zLm11dGF0aW9ucywgdGhpcy5nZXRNdXRhdGlvbkRlZmF1bHRzKG9wdGlvbnMgPT0gbnVsbCA/IHZvaWQgMCA6IG9wdGlvbnMubXV0YXRpb25LZXkpLCBvcHRpb25zLCB7XG4gICAgICBfZGVmYXVsdGVkOiB0cnVlXG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLmNsZWFyID0gZnVuY3Rpb24gY2xlYXIoKSB7XG4gICAgdGhpcy5xdWVyeUNhY2hlLmNsZWFyKCk7XG4gICAgdGhpcy5tdXRhdGlvbkNhY2hlLmNsZWFyKCk7XG4gIH07XG5cbiAgcmV0dXJuIFF1ZXJ5Q2xpZW50O1xufSgpOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9pbmhlcml0c0xvb3NlIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pbmhlcml0c0xvb3NlXCI7XG5pbXBvcnQgeyBpc1NlcnZlciwgaXNWYWxpZFRpbWVvdXQsIG5vb3AsIHJlcGxhY2VFcXVhbERlZXAsIHNoYWxsb3dFcXVhbE9iamVjdHMsIHRpbWVVbnRpbFN0YWxlIH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgeyBub3RpZnlNYW5hZ2VyIH0gZnJvbSAnLi9ub3RpZnlNYW5hZ2VyJztcbmltcG9ydCB7IGZvY3VzTWFuYWdlciB9IGZyb20gJy4vZm9jdXNNYW5hZ2VyJztcbmltcG9ydCB7IFN1YnNjcmliYWJsZSB9IGZyb20gJy4vc3Vic2NyaWJhYmxlJztcbmltcG9ydCB7IGdldExvZ2dlciB9IGZyb20gJy4vbG9nZ2VyJztcbmltcG9ydCB7IGlzQ2FuY2VsbGVkRXJyb3IgfSBmcm9tICcuL3JldHJ5ZXInO1xuZXhwb3J0IHZhciBRdWVyeU9ic2VydmVyID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfU3Vic2NyaWJhYmxlKSB7XG4gIF9pbmhlcml0c0xvb3NlKFF1ZXJ5T2JzZXJ2ZXIsIF9TdWJzY3JpYmFibGUpO1xuXG4gIGZ1bmN0aW9uIFF1ZXJ5T2JzZXJ2ZXIoY2xpZW50LCBvcHRpb25zKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX3RoaXMgPSBfU3Vic2NyaWJhYmxlLmNhbGwodGhpcykgfHwgdGhpcztcbiAgICBfdGhpcy5jbGllbnQgPSBjbGllbnQ7XG4gICAgX3RoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgX3RoaXMudHJhY2tlZFByb3BzID0gW107XG4gICAgX3RoaXMucHJldmlvdXNTZWxlY3RFcnJvciA9IG51bGw7XG5cbiAgICBfdGhpcy5iaW5kTWV0aG9kcygpO1xuXG4gICAgX3RoaXMuc2V0T3B0aW9ucyhvcHRpb25zKTtcblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBRdWVyeU9ic2VydmVyLnByb3RvdHlwZTtcblxuICBfcHJvdG8uYmluZE1ldGhvZHMgPSBmdW5jdGlvbiBiaW5kTWV0aG9kcygpIHtcbiAgICB0aGlzLnJlbW92ZSA9IHRoaXMucmVtb3ZlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5yZWZldGNoID0gdGhpcy5yZWZldGNoLmJpbmQodGhpcyk7XG4gIH07XG5cbiAgX3Byb3RvLm9uU3Vic2NyaWJlID0gZnVuY3Rpb24gb25TdWJzY3JpYmUoKSB7XG4gICAgaWYgKHRoaXMubGlzdGVuZXJzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgdGhpcy5jdXJyZW50UXVlcnkuYWRkT2JzZXJ2ZXIodGhpcyk7XG5cbiAgICAgIGlmIChzaG91bGRGZXRjaE9uTW91bnQodGhpcy5jdXJyZW50UXVlcnksIHRoaXMub3B0aW9ucykpIHtcbiAgICAgICAgdGhpcy5leGVjdXRlRmV0Y2goKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy51cGRhdGVUaW1lcnMoKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLm9uVW5zdWJzY3JpYmUgPSBmdW5jdGlvbiBvblVuc3Vic2NyaWJlKCkge1xuICAgIGlmICghdGhpcy5saXN0ZW5lcnMubGVuZ3RoKSB7XG4gICAgICB0aGlzLmRlc3Ryb3koKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLnNob3VsZEZldGNoT25SZWNvbm5lY3QgPSBmdW5jdGlvbiBzaG91bGRGZXRjaE9uUmVjb25uZWN0KCkge1xuICAgIHJldHVybiBfc2hvdWxkRmV0Y2hPblJlY29ubmVjdCh0aGlzLmN1cnJlbnRRdWVyeSwgdGhpcy5vcHRpb25zKTtcbiAgfTtcblxuICBfcHJvdG8uc2hvdWxkRmV0Y2hPbldpbmRvd0ZvY3VzID0gZnVuY3Rpb24gc2hvdWxkRmV0Y2hPbldpbmRvd0ZvY3VzKCkge1xuICAgIHJldHVybiBfc2hvdWxkRmV0Y2hPbldpbmRvd0ZvY3VzKHRoaXMuY3VycmVudFF1ZXJ5LCB0aGlzLm9wdGlvbnMpO1xuICB9O1xuXG4gIF9wcm90by5kZXN0cm95ID0gZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICB0aGlzLmxpc3RlbmVycyA9IFtdO1xuICAgIHRoaXMuY2xlYXJUaW1lcnMoKTtcbiAgICB0aGlzLmN1cnJlbnRRdWVyeS5yZW1vdmVPYnNlcnZlcih0aGlzKTtcbiAgfTtcblxuICBfcHJvdG8uc2V0T3B0aW9ucyA9IGZ1bmN0aW9uIHNldE9wdGlvbnMob3B0aW9ucywgbm90aWZ5T3B0aW9ucykge1xuICAgIHZhciBwcmV2T3B0aW9ucyA9IHRoaXMub3B0aW9ucztcbiAgICB2YXIgcHJldlF1ZXJ5ID0gdGhpcy5jdXJyZW50UXVlcnk7XG4gICAgdGhpcy5vcHRpb25zID0gdGhpcy5jbGllbnQuZGVmYXVsdFF1ZXJ5T2JzZXJ2ZXJPcHRpb25zKG9wdGlvbnMpO1xuXG4gICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMuZW5hYmxlZCAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHRoaXMub3B0aW9ucy5lbmFibGVkICE9PSAnYm9vbGVhbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgZW5hYmxlZCB0byBiZSBhIGJvb2xlYW4nKTtcbiAgICB9IC8vIEtlZXAgcHJldmlvdXMgcXVlcnkga2V5IGlmIHRoZSB1c2VyIGRvZXMgbm90IHN1cHBseSBvbmVcblxuXG4gICAgaWYgKCF0aGlzLm9wdGlvbnMucXVlcnlLZXkpIHtcbiAgICAgIHRoaXMub3B0aW9ucy5xdWVyeUtleSA9IHByZXZPcHRpb25zLnF1ZXJ5S2V5O1xuICAgIH1cblxuICAgIHRoaXMudXBkYXRlUXVlcnkoKTtcbiAgICB2YXIgbW91bnRlZCA9IHRoaXMuaGFzTGlzdGVuZXJzKCk7IC8vIEZldGNoIGlmIHRoZXJlIGFyZSBzdWJzY3JpYmVyc1xuXG4gICAgaWYgKG1vdW50ZWQgJiYgc2hvdWxkRmV0Y2hPcHRpb25hbGx5KHRoaXMuY3VycmVudFF1ZXJ5LCBwcmV2UXVlcnksIHRoaXMub3B0aW9ucywgcHJldk9wdGlvbnMpKSB7XG4gICAgICB0aGlzLmV4ZWN1dGVGZXRjaCgpO1xuICAgIH0gLy8gVXBkYXRlIHJlc3VsdFxuXG5cbiAgICB0aGlzLnVwZGF0ZVJlc3VsdChub3RpZnlPcHRpb25zKTsgLy8gVXBkYXRlIHN0YWxlIGludGVydmFsIGlmIG5lZWRlZFxuXG4gICAgaWYgKG1vdW50ZWQgJiYgKHRoaXMuY3VycmVudFF1ZXJ5ICE9PSBwcmV2UXVlcnkgfHwgdGhpcy5vcHRpb25zLmVuYWJsZWQgIT09IHByZXZPcHRpb25zLmVuYWJsZWQgfHwgdGhpcy5vcHRpb25zLnN0YWxlVGltZSAhPT0gcHJldk9wdGlvbnMuc3RhbGVUaW1lKSkge1xuICAgICAgdGhpcy51cGRhdGVTdGFsZVRpbWVvdXQoKTtcbiAgICB9IC8vIFVwZGF0ZSByZWZldGNoIGludGVydmFsIGlmIG5lZWRlZFxuXG5cbiAgICBpZiAobW91bnRlZCAmJiAodGhpcy5jdXJyZW50UXVlcnkgIT09IHByZXZRdWVyeSB8fCB0aGlzLm9wdGlvbnMuZW5hYmxlZCAhPT0gcHJldk9wdGlvbnMuZW5hYmxlZCB8fCB0aGlzLm9wdGlvbnMucmVmZXRjaEludGVydmFsICE9PSBwcmV2T3B0aW9ucy5yZWZldGNoSW50ZXJ2YWwpKSB7XG4gICAgICB0aGlzLnVwZGF0ZVJlZmV0Y2hJbnRlcnZhbCgpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uZ2V0T3B0aW1pc3RpY1Jlc3VsdCA9IGZ1bmN0aW9uIGdldE9wdGltaXN0aWNSZXN1bHQob3B0aW9ucykge1xuICAgIHZhciBkZWZhdWx0ZWRPcHRpb25zID0gdGhpcy5jbGllbnQuZGVmYXVsdFF1ZXJ5T2JzZXJ2ZXJPcHRpb25zKG9wdGlvbnMpO1xuICAgIHZhciBxdWVyeSA9IHRoaXMuY2xpZW50LmdldFF1ZXJ5Q2FjaGUoKS5idWlsZCh0aGlzLmNsaWVudCwgZGVmYXVsdGVkT3B0aW9ucyk7XG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlUmVzdWx0KHF1ZXJ5LCBkZWZhdWx0ZWRPcHRpb25zKTtcbiAgfTtcblxuICBfcHJvdG8uZ2V0Q3VycmVudFJlc3VsdCA9IGZ1bmN0aW9uIGdldEN1cnJlbnRSZXN1bHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudFJlc3VsdDtcbiAgfTtcblxuICBfcHJvdG8udHJhY2tSZXN1bHQgPSBmdW5jdGlvbiB0cmFja1Jlc3VsdChyZXN1bHQpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIHZhciB0cmFja2VkUmVzdWx0ID0ge307XG4gICAgT2JqZWN0LmtleXMocmVzdWx0KS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0cmFja2VkUmVzdWx0LCBrZXksIHtcbiAgICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgdmFyIHR5cGVkS2V5ID0ga2V5O1xuXG4gICAgICAgICAgaWYgKCFfdGhpczIudHJhY2tlZFByb3BzLmluY2x1ZGVzKHR5cGVkS2V5KSkge1xuICAgICAgICAgICAgX3RoaXMyLnRyYWNrZWRQcm9wcy5wdXNoKHR5cGVkS2V5KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gcmVzdWx0W3R5cGVkS2V5XTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRyYWNrZWRSZXN1bHQ7XG4gIH07XG5cbiAgX3Byb3RvLmdldE5leHRSZXN1bHQgPSBmdW5jdGlvbiBnZXROZXh0UmVzdWx0KG9wdGlvbnMpIHtcbiAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgdW5zdWJzY3JpYmUgPSBfdGhpczMuc3Vic2NyaWJlKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgaWYgKCFyZXN1bHQuaXNGZXRjaGluZykge1xuICAgICAgICAgIHVuc3Vic2NyaWJlKCk7XG5cbiAgICAgICAgICBpZiAocmVzdWx0LmlzRXJyb3IgJiYgKG9wdGlvbnMgPT0gbnVsbCA/IHZvaWQgMCA6IG9wdGlvbnMudGhyb3dPbkVycm9yKSkge1xuICAgICAgICAgICAgcmVqZWN0KHJlc3VsdC5lcnJvcik7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5nZXRDdXJyZW50UXVlcnkgPSBmdW5jdGlvbiBnZXRDdXJyZW50UXVlcnkoKSB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudFF1ZXJ5O1xuICB9O1xuXG4gIF9wcm90by5yZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgdGhpcy5jbGllbnQuZ2V0UXVlcnlDYWNoZSgpLnJlbW92ZSh0aGlzLmN1cnJlbnRRdWVyeSk7XG4gIH07XG5cbiAgX3Byb3RvLnJlZmV0Y2ggPSBmdW5jdGlvbiByZWZldGNoKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdGhpcy5mZXRjaChvcHRpb25zKTtcbiAgfTtcblxuICBfcHJvdG8uZmV0Y2hPcHRpbWlzdGljID0gZnVuY3Rpb24gZmV0Y2hPcHRpbWlzdGljKG9wdGlvbnMpIHtcbiAgICB2YXIgX3RoaXM0ID0gdGhpcztcblxuICAgIHZhciBkZWZhdWx0ZWRPcHRpb25zID0gdGhpcy5jbGllbnQuZGVmYXVsdFF1ZXJ5T2JzZXJ2ZXJPcHRpb25zKG9wdGlvbnMpO1xuICAgIHZhciBxdWVyeSA9IHRoaXMuY2xpZW50LmdldFF1ZXJ5Q2FjaGUoKS5idWlsZCh0aGlzLmNsaWVudCwgZGVmYXVsdGVkT3B0aW9ucyk7XG4gICAgcmV0dXJuIHF1ZXJ5LmZldGNoKCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gX3RoaXM0LmNyZWF0ZVJlc3VsdChxdWVyeSwgZGVmYXVsdGVkT3B0aW9ucyk7XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLmZldGNoID0gZnVuY3Rpb24gZmV0Y2goZmV0Y2hPcHRpb25zKSB7XG4gICAgdmFyIF90aGlzNSA9IHRoaXM7XG5cbiAgICByZXR1cm4gdGhpcy5leGVjdXRlRmV0Y2goZmV0Y2hPcHRpb25zKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzNS51cGRhdGVSZXN1bHQoKTtcblxuICAgICAgcmV0dXJuIF90aGlzNS5jdXJyZW50UmVzdWx0O1xuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5leGVjdXRlRmV0Y2ggPSBmdW5jdGlvbiBleGVjdXRlRmV0Y2goZmV0Y2hPcHRpb25zKSB7XG4gICAgLy8gTWFrZSBzdXJlIHdlIHJlZmVyZW5jZSB0aGUgbGF0ZXN0IHF1ZXJ5IGFzIHRoZSBjdXJyZW50IG9uZSBtaWdodCBoYXZlIGJlZW4gcmVtb3ZlZFxuICAgIHRoaXMudXBkYXRlUXVlcnkoKTsgLy8gRmV0Y2hcblxuICAgIHZhciBwcm9taXNlID0gdGhpcy5jdXJyZW50UXVlcnkuZmV0Y2godGhpcy5vcHRpb25zLCBmZXRjaE9wdGlvbnMpO1xuXG4gICAgaWYgKCEoZmV0Y2hPcHRpb25zID09IG51bGwgPyB2b2lkIDAgOiBmZXRjaE9wdGlvbnMudGhyb3dPbkVycm9yKSkge1xuICAgICAgcHJvbWlzZSA9IHByb21pc2UuY2F0Y2gobm9vcCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb21pc2U7XG4gIH07XG5cbiAgX3Byb3RvLnVwZGF0ZVN0YWxlVGltZW91dCA9IGZ1bmN0aW9uIHVwZGF0ZVN0YWxlVGltZW91dCgpIHtcbiAgICB2YXIgX3RoaXM2ID0gdGhpcztcblxuICAgIHRoaXMuY2xlYXJTdGFsZVRpbWVvdXQoKTtcblxuICAgIGlmIChpc1NlcnZlciB8fCB0aGlzLmN1cnJlbnRSZXN1bHQuaXNTdGFsZSB8fCAhaXNWYWxpZFRpbWVvdXQodGhpcy5vcHRpb25zLnN0YWxlVGltZSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgdGltZSA9IHRpbWVVbnRpbFN0YWxlKHRoaXMuY3VycmVudFJlc3VsdC5kYXRhVXBkYXRlZEF0LCB0aGlzLm9wdGlvbnMuc3RhbGVUaW1lKTsgLy8gVGhlIHRpbWVvdXQgaXMgc29tZXRpbWVzIHRyaWdnZXJlZCAxIG1zIGJlZm9yZSB0aGUgc3RhbGUgdGltZSBleHBpcmF0aW9uLlxuICAgIC8vIFRvIG1pdGlnYXRlIHRoaXMgaXNzdWUgd2UgYWx3YXlzIGFkZCAxIG1zIHRvIHRoZSB0aW1lb3V0LlxuXG4gICAgdmFyIHRpbWVvdXQgPSB0aW1lICsgMTtcbiAgICB0aGlzLnN0YWxlVGltZW91dElkID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoIV90aGlzNi5jdXJyZW50UmVzdWx0LmlzU3RhbGUpIHtcbiAgICAgICAgX3RoaXM2LnVwZGF0ZVJlc3VsdCgpO1xuICAgICAgfVxuICAgIH0sIHRpbWVvdXQpO1xuICB9O1xuXG4gIF9wcm90by51cGRhdGVSZWZldGNoSW50ZXJ2YWwgPSBmdW5jdGlvbiB1cGRhdGVSZWZldGNoSW50ZXJ2YWwoKSB7XG4gICAgdmFyIF90aGlzNyA9IHRoaXM7XG5cbiAgICB0aGlzLmNsZWFyUmVmZXRjaEludGVydmFsKCk7XG5cbiAgICBpZiAoaXNTZXJ2ZXIgfHwgdGhpcy5vcHRpb25zLmVuYWJsZWQgPT09IGZhbHNlIHx8ICFpc1ZhbGlkVGltZW91dCh0aGlzLm9wdGlvbnMucmVmZXRjaEludGVydmFsKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMucmVmZXRjaEludGVydmFsSWQgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoX3RoaXM3Lm9wdGlvbnMucmVmZXRjaEludGVydmFsSW5CYWNrZ3JvdW5kIHx8IGZvY3VzTWFuYWdlci5pc0ZvY3VzZWQoKSkge1xuICAgICAgICBfdGhpczcuZXhlY3V0ZUZldGNoKCk7XG4gICAgICB9XG4gICAgfSwgdGhpcy5vcHRpb25zLnJlZmV0Y2hJbnRlcnZhbCk7XG4gIH07XG5cbiAgX3Byb3RvLnVwZGF0ZVRpbWVycyA9IGZ1bmN0aW9uIHVwZGF0ZVRpbWVycygpIHtcbiAgICB0aGlzLnVwZGF0ZVN0YWxlVGltZW91dCgpO1xuICAgIHRoaXMudXBkYXRlUmVmZXRjaEludGVydmFsKCk7XG4gIH07XG5cbiAgX3Byb3RvLmNsZWFyVGltZXJzID0gZnVuY3Rpb24gY2xlYXJUaW1lcnMoKSB7XG4gICAgdGhpcy5jbGVhclN0YWxlVGltZW91dCgpO1xuICAgIHRoaXMuY2xlYXJSZWZldGNoSW50ZXJ2YWwoKTtcbiAgfTtcblxuICBfcHJvdG8uY2xlYXJTdGFsZVRpbWVvdXQgPSBmdW5jdGlvbiBjbGVhclN0YWxlVGltZW91dCgpIHtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5zdGFsZVRpbWVvdXRJZCk7XG4gICAgdGhpcy5zdGFsZVRpbWVvdXRJZCA9IHVuZGVmaW5lZDtcbiAgfTtcblxuICBfcHJvdG8uY2xlYXJSZWZldGNoSW50ZXJ2YWwgPSBmdW5jdGlvbiBjbGVhclJlZmV0Y2hJbnRlcnZhbCgpIHtcbiAgICBjbGVhckludGVydmFsKHRoaXMucmVmZXRjaEludGVydmFsSWQpO1xuICAgIHRoaXMucmVmZXRjaEludGVydmFsSWQgPSB1bmRlZmluZWQ7XG4gIH07XG5cbiAgX3Byb3RvLmNyZWF0ZVJlc3VsdCA9IGZ1bmN0aW9uIGNyZWF0ZVJlc3VsdChxdWVyeSwgb3B0aW9ucykge1xuICAgIHZhciBwcmV2UXVlcnkgPSB0aGlzLmN1cnJlbnRRdWVyeTtcbiAgICB2YXIgcHJldk9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG4gICAgdmFyIHByZXZSZXN1bHQgPSB0aGlzLmN1cnJlbnRSZXN1bHQ7XG4gICAgdmFyIHByZXZSZXN1bHRTdGF0ZSA9IHRoaXMuY3VycmVudFJlc3VsdFN0YXRlO1xuICAgIHZhciBwcmV2UmVzdWx0T3B0aW9ucyA9IHRoaXMuY3VycmVudFJlc3VsdE9wdGlvbnM7XG4gICAgdmFyIHF1ZXJ5Q2hhbmdlID0gcXVlcnkgIT09IHByZXZRdWVyeTtcbiAgICB2YXIgcXVlcnlJbml0aWFsU3RhdGUgPSBxdWVyeUNoYW5nZSA/IHF1ZXJ5LnN0YXRlIDogdGhpcy5jdXJyZW50UXVlcnlJbml0aWFsU3RhdGU7XG4gICAgdmFyIHByZXZRdWVyeVJlc3VsdCA9IHF1ZXJ5Q2hhbmdlID8gdGhpcy5jdXJyZW50UmVzdWx0IDogdGhpcy5wcmV2aW91c1F1ZXJ5UmVzdWx0O1xuICAgIHZhciBzdGF0ZSA9IHF1ZXJ5LnN0YXRlO1xuICAgIHZhciBkYXRhVXBkYXRlZEF0ID0gc3RhdGUuZGF0YVVwZGF0ZWRBdCxcbiAgICAgICAgZXJyb3IgPSBzdGF0ZS5lcnJvcixcbiAgICAgICAgZXJyb3JVcGRhdGVkQXQgPSBzdGF0ZS5lcnJvclVwZGF0ZWRBdCxcbiAgICAgICAgaXNGZXRjaGluZyA9IHN0YXRlLmlzRmV0Y2hpbmcsXG4gICAgICAgIHN0YXR1cyA9IHN0YXRlLnN0YXR1cztcbiAgICB2YXIgaXNQcmV2aW91c0RhdGEgPSBmYWxzZTtcbiAgICB2YXIgaXNQbGFjZWhvbGRlckRhdGEgPSBmYWxzZTtcbiAgICB2YXIgZGF0YTsgLy8gT3B0aW1pc3RpY2FsbHkgc2V0IHJlc3VsdCBpbiBmZXRjaGluZyBzdGF0ZSBpZiBuZWVkZWRcblxuICAgIGlmIChvcHRpb25zLm9wdGltaXN0aWNSZXN1bHRzKSB7XG4gICAgICB2YXIgbW91bnRlZCA9IHRoaXMuaGFzTGlzdGVuZXJzKCk7XG4gICAgICB2YXIgZmV0Y2hPbk1vdW50ID0gIW1vdW50ZWQgJiYgc2hvdWxkRmV0Y2hPbk1vdW50KHF1ZXJ5LCBvcHRpb25zKTtcbiAgICAgIHZhciBmZXRjaE9wdGlvbmFsbHkgPSBtb3VudGVkICYmIHNob3VsZEZldGNoT3B0aW9uYWxseShxdWVyeSwgcHJldlF1ZXJ5LCBvcHRpb25zLCBwcmV2T3B0aW9ucyk7XG5cbiAgICAgIGlmIChmZXRjaE9uTW91bnQgfHwgZmV0Y2hPcHRpb25hbGx5KSB7XG4gICAgICAgIGlzRmV0Y2hpbmcgPSB0cnVlO1xuXG4gICAgICAgIGlmICghZGF0YVVwZGF0ZWRBdCkge1xuICAgICAgICAgIHN0YXR1cyA9ICdsb2FkaW5nJztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gLy8gS2VlcCBwcmV2aW91cyBkYXRhIGlmIG5lZWRlZFxuXG5cbiAgICBpZiAob3B0aW9ucy5rZWVwUHJldmlvdXNEYXRhICYmICFzdGF0ZS5kYXRhVXBkYXRlQ291bnQgJiYgKHByZXZRdWVyeVJlc3VsdCA9PSBudWxsID8gdm9pZCAwIDogcHJldlF1ZXJ5UmVzdWx0LmlzU3VjY2VzcykgJiYgc3RhdHVzICE9PSAnZXJyb3InKSB7XG4gICAgICBkYXRhID0gcHJldlF1ZXJ5UmVzdWx0LmRhdGE7XG4gICAgICBkYXRhVXBkYXRlZEF0ID0gcHJldlF1ZXJ5UmVzdWx0LmRhdGFVcGRhdGVkQXQ7XG4gICAgICBzdGF0dXMgPSBwcmV2UXVlcnlSZXN1bHQuc3RhdHVzO1xuICAgICAgaXNQcmV2aW91c0RhdGEgPSB0cnVlO1xuICAgIH0gLy8gU2VsZWN0IGRhdGEgaWYgbmVlZGVkXG4gICAgZWxzZSBpZiAob3B0aW9ucy5zZWxlY3QgJiYgdHlwZW9mIHN0YXRlLmRhdGEgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIC8vIE1lbW9pemUgc2VsZWN0IHJlc3VsdFxuICAgICAgICBpZiAocHJldlJlc3VsdCAmJiBzdGF0ZS5kYXRhID09PSAocHJldlJlc3VsdFN0YXRlID09IG51bGwgPyB2b2lkIDAgOiBwcmV2UmVzdWx0U3RhdGUuZGF0YSkgJiYgb3B0aW9ucy5zZWxlY3QgPT09IChwcmV2UmVzdWx0T3B0aW9ucyA9PSBudWxsID8gdm9pZCAwIDogcHJldlJlc3VsdE9wdGlvbnMuc2VsZWN0KSAmJiAhdGhpcy5wcmV2aW91c1NlbGVjdEVycm9yKSB7XG4gICAgICAgICAgZGF0YSA9IHByZXZSZXN1bHQuZGF0YTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgZGF0YSA9IG9wdGlvbnMuc2VsZWN0KHN0YXRlLmRhdGEpO1xuXG4gICAgICAgICAgICBpZiAob3B0aW9ucy5zdHJ1Y3R1cmFsU2hhcmluZyAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgZGF0YSA9IHJlcGxhY2VFcXVhbERlZXAocHJldlJlc3VsdCA9PSBudWxsID8gdm9pZCAwIDogcHJldlJlc3VsdC5kYXRhLCBkYXRhKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5wcmV2aW91c1NlbGVjdEVycm9yID0gbnVsbDtcbiAgICAgICAgICB9IGNhdGNoIChzZWxlY3RFcnJvcikge1xuICAgICAgICAgICAgZ2V0TG9nZ2VyKCkuZXJyb3Ioc2VsZWN0RXJyb3IpO1xuICAgICAgICAgICAgZXJyb3IgPSBzZWxlY3RFcnJvcjtcbiAgICAgICAgICAgIHRoaXMucHJldmlvdXNTZWxlY3RFcnJvciA9IHNlbGVjdEVycm9yO1xuICAgICAgICAgICAgZXJyb3JVcGRhdGVkQXQgPSBEYXRlLm5vdygpO1xuICAgICAgICAgICAgc3RhdHVzID0gJ2Vycm9yJztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gLy8gVXNlIHF1ZXJ5IGRhdGFcbiAgICAgIGVsc2Uge1xuICAgICAgICAgIGRhdGEgPSBzdGF0ZS5kYXRhO1xuICAgICAgICB9IC8vIFNob3cgcGxhY2Vob2xkZXIgZGF0YSBpZiBuZWVkZWRcblxuXG4gICAgaWYgKHR5cGVvZiBvcHRpb25zLnBsYWNlaG9sZGVyRGF0YSAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGRhdGEgPT09ICd1bmRlZmluZWQnICYmIHN0YXR1cyA9PT0gJ2xvYWRpbmcnKSB7XG4gICAgICB2YXIgcGxhY2Vob2xkZXJEYXRhOyAvLyBNZW1vaXplIHBsYWNlaG9sZGVyIGRhdGFcblxuICAgICAgaWYgKChwcmV2UmVzdWx0ID09IG51bGwgPyB2b2lkIDAgOiBwcmV2UmVzdWx0LmlzUGxhY2Vob2xkZXJEYXRhKSAmJiBvcHRpb25zLnBsYWNlaG9sZGVyRGF0YSA9PT0gKHByZXZSZXN1bHRPcHRpb25zID09IG51bGwgPyB2b2lkIDAgOiBwcmV2UmVzdWx0T3B0aW9ucy5wbGFjZWhvbGRlckRhdGEpKSB7XG4gICAgICAgIHBsYWNlaG9sZGVyRGF0YSA9IHByZXZSZXN1bHQuZGF0YTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBsYWNlaG9sZGVyRGF0YSA9IHR5cGVvZiBvcHRpb25zLnBsYWNlaG9sZGVyRGF0YSA9PT0gJ2Z1bmN0aW9uJyA/IG9wdGlvbnMucGxhY2Vob2xkZXJEYXRhKCkgOiBvcHRpb25zLnBsYWNlaG9sZGVyRGF0YTtcblxuICAgICAgICBpZiAob3B0aW9ucy5zZWxlY3QgJiYgdHlwZW9mIHBsYWNlaG9sZGVyRGF0YSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgcGxhY2Vob2xkZXJEYXRhID0gb3B0aW9ucy5zZWxlY3QocGxhY2Vob2xkZXJEYXRhKTtcblxuICAgICAgICAgICAgaWYgKG9wdGlvbnMuc3RydWN0dXJhbFNoYXJpbmcgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyRGF0YSA9IHJlcGxhY2VFcXVhbERlZXAocHJldlJlc3VsdCA9PSBudWxsID8gdm9pZCAwIDogcHJldlJlc3VsdC5kYXRhLCBwbGFjZWhvbGRlckRhdGEpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnByZXZpb3VzU2VsZWN0RXJyb3IgPSBudWxsO1xuICAgICAgICAgIH0gY2F0Y2ggKHNlbGVjdEVycm9yKSB7XG4gICAgICAgICAgICBnZXRMb2dnZXIoKS5lcnJvcihzZWxlY3RFcnJvcik7XG4gICAgICAgICAgICBlcnJvciA9IHNlbGVjdEVycm9yO1xuICAgICAgICAgICAgdGhpcy5wcmV2aW91c1NlbGVjdEVycm9yID0gc2VsZWN0RXJyb3I7XG4gICAgICAgICAgICBlcnJvclVwZGF0ZWRBdCA9IERhdGUubm93KCk7XG4gICAgICAgICAgICBzdGF0dXMgPSAnZXJyb3InO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHBsYWNlaG9sZGVyRGF0YSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgc3RhdHVzID0gJ3N1Y2Nlc3MnO1xuICAgICAgICBkYXRhID0gcGxhY2Vob2xkZXJEYXRhO1xuICAgICAgICBpc1BsYWNlaG9sZGVyRGF0YSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHJlc3VsdCA9IHtcbiAgICAgIHN0YXR1czogc3RhdHVzLFxuICAgICAgaXNMb2FkaW5nOiBzdGF0dXMgPT09ICdsb2FkaW5nJyxcbiAgICAgIGlzU3VjY2Vzczogc3RhdHVzID09PSAnc3VjY2VzcycsXG4gICAgICBpc0Vycm9yOiBzdGF0dXMgPT09ICdlcnJvcicsXG4gICAgICBpc0lkbGU6IHN0YXR1cyA9PT0gJ2lkbGUnLFxuICAgICAgZGF0YTogZGF0YSxcbiAgICAgIGRhdGFVcGRhdGVkQXQ6IGRhdGFVcGRhdGVkQXQsXG4gICAgICBlcnJvcjogZXJyb3IsXG4gICAgICBlcnJvclVwZGF0ZWRBdDogZXJyb3JVcGRhdGVkQXQsXG4gICAgICBmYWlsdXJlQ291bnQ6IHN0YXRlLmZldGNoRmFpbHVyZUNvdW50LFxuICAgICAgaXNGZXRjaGVkOiBzdGF0ZS5kYXRhVXBkYXRlQ291bnQgPiAwIHx8IHN0YXRlLmVycm9yVXBkYXRlQ291bnQgPiAwLFxuICAgICAgaXNGZXRjaGVkQWZ0ZXJNb3VudDogc3RhdGUuZGF0YVVwZGF0ZUNvdW50ID4gcXVlcnlJbml0aWFsU3RhdGUuZGF0YVVwZGF0ZUNvdW50IHx8IHN0YXRlLmVycm9yVXBkYXRlQ291bnQgPiBxdWVyeUluaXRpYWxTdGF0ZS5lcnJvclVwZGF0ZUNvdW50LFxuICAgICAgaXNGZXRjaGluZzogaXNGZXRjaGluZyxcbiAgICAgIGlzTG9hZGluZ0Vycm9yOiBzdGF0dXMgPT09ICdlcnJvcicgJiYgc3RhdGUuZGF0YVVwZGF0ZWRBdCA9PT0gMCxcbiAgICAgIGlzUGxhY2Vob2xkZXJEYXRhOiBpc1BsYWNlaG9sZGVyRGF0YSxcbiAgICAgIGlzUHJldmlvdXNEYXRhOiBpc1ByZXZpb3VzRGF0YSxcbiAgICAgIGlzUmVmZXRjaEVycm9yOiBzdGF0dXMgPT09ICdlcnJvcicgJiYgc3RhdGUuZGF0YVVwZGF0ZWRBdCAhPT0gMCxcbiAgICAgIGlzU3RhbGU6IGlzU3RhbGUocXVlcnksIG9wdGlvbnMpLFxuICAgICAgcmVmZXRjaDogdGhpcy5yZWZldGNoLFxuICAgICAgcmVtb3ZlOiB0aGlzLnJlbW92ZVxuICAgIH07XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICBfcHJvdG8uc2hvdWxkTm90aWZ5TGlzdGVuZXJzID0gZnVuY3Rpb24gc2hvdWxkTm90aWZ5TGlzdGVuZXJzKHJlc3VsdCwgcHJldlJlc3VsdCkge1xuICAgIGlmICghcHJldlJlc3VsdCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHJlc3VsdCA9PT0gcHJldlJlc3VsdCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHZhciBfdGhpcyRvcHRpb25zID0gdGhpcy5vcHRpb25zLFxuICAgICAgICBub3RpZnlPbkNoYW5nZVByb3BzID0gX3RoaXMkb3B0aW9ucy5ub3RpZnlPbkNoYW5nZVByb3BzLFxuICAgICAgICBub3RpZnlPbkNoYW5nZVByb3BzRXhjbHVzaW9ucyA9IF90aGlzJG9wdGlvbnMubm90aWZ5T25DaGFuZ2VQcm9wc0V4Y2x1c2lvbnM7XG5cbiAgICBpZiAoIW5vdGlmeU9uQ2hhbmdlUHJvcHMgJiYgIW5vdGlmeU9uQ2hhbmdlUHJvcHNFeGNsdXNpb25zKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAobm90aWZ5T25DaGFuZ2VQcm9wcyA9PT0gJ3RyYWNrZWQnICYmICF0aGlzLnRyYWNrZWRQcm9wcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHZhciBpbmNsdWRlZFByb3BzID0gbm90aWZ5T25DaGFuZ2VQcm9wcyA9PT0gJ3RyYWNrZWQnID8gdGhpcy50cmFja2VkUHJvcHMgOiBub3RpZnlPbkNoYW5nZVByb3BzO1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhyZXN1bHQpLnNvbWUoZnVuY3Rpb24gKGtleSkge1xuICAgICAgdmFyIHR5cGVkS2V5ID0ga2V5O1xuICAgICAgdmFyIGNoYW5nZWQgPSByZXN1bHRbdHlwZWRLZXldICE9PSBwcmV2UmVzdWx0W3R5cGVkS2V5XTtcbiAgICAgIHZhciBpc0luY2x1ZGVkID0gaW5jbHVkZWRQcm9wcyA9PSBudWxsID8gdm9pZCAwIDogaW5jbHVkZWRQcm9wcy5zb21lKGZ1bmN0aW9uICh4KSB7XG4gICAgICAgIHJldHVybiB4ID09PSBrZXk7XG4gICAgICB9KTtcbiAgICAgIHZhciBpc0V4Y2x1ZGVkID0gbm90aWZ5T25DaGFuZ2VQcm9wc0V4Y2x1c2lvbnMgPT0gbnVsbCA/IHZvaWQgMCA6IG5vdGlmeU9uQ2hhbmdlUHJvcHNFeGNsdXNpb25zLnNvbWUoZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgcmV0dXJuIHggPT09IGtleTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGNoYW5nZWQgJiYgIWlzRXhjbHVkZWQgJiYgKCFpbmNsdWRlZFByb3BzIHx8IGlzSW5jbHVkZWQpO1xuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by51cGRhdGVSZXN1bHQgPSBmdW5jdGlvbiB1cGRhdGVSZXN1bHQobm90aWZ5T3B0aW9ucykge1xuICAgIHZhciBwcmV2UmVzdWx0ID0gdGhpcy5jdXJyZW50UmVzdWx0O1xuICAgIHRoaXMuY3VycmVudFJlc3VsdCA9IHRoaXMuY3JlYXRlUmVzdWx0KHRoaXMuY3VycmVudFF1ZXJ5LCB0aGlzLm9wdGlvbnMpO1xuICAgIHRoaXMuY3VycmVudFJlc3VsdFN0YXRlID0gdGhpcy5jdXJyZW50UXVlcnkuc3RhdGU7XG4gICAgdGhpcy5jdXJyZW50UmVzdWx0T3B0aW9ucyA9IHRoaXMub3B0aW9uczsgLy8gT25seSBub3RpZnkgaWYgc29tZXRoaW5nIGhhcyBjaGFuZ2VkXG5cbiAgICBpZiAoc2hhbGxvd0VxdWFsT2JqZWN0cyh0aGlzLmN1cnJlbnRSZXN1bHQsIHByZXZSZXN1bHQpKSB7XG4gICAgICByZXR1cm47XG4gICAgfSAvLyBEZXRlcm1pbmUgd2hpY2ggY2FsbGJhY2tzIHRvIHRyaWdnZXJcblxuXG4gICAgdmFyIGRlZmF1bHROb3RpZnlPcHRpb25zID0ge1xuICAgICAgY2FjaGU6IHRydWVcbiAgICB9O1xuXG4gICAgaWYgKChub3RpZnlPcHRpb25zID09IG51bGwgPyB2b2lkIDAgOiBub3RpZnlPcHRpb25zLmxpc3RlbmVycykgIT09IGZhbHNlICYmIHRoaXMuc2hvdWxkTm90aWZ5TGlzdGVuZXJzKHRoaXMuY3VycmVudFJlc3VsdCwgcHJldlJlc3VsdCkpIHtcbiAgICAgIGRlZmF1bHROb3RpZnlPcHRpb25zLmxpc3RlbmVycyA9IHRydWU7XG4gICAgfVxuXG4gICAgdGhpcy5ub3RpZnkoX2V4dGVuZHMoe30sIGRlZmF1bHROb3RpZnlPcHRpb25zLCBub3RpZnlPcHRpb25zKSk7XG4gIH07XG5cbiAgX3Byb3RvLnVwZGF0ZVF1ZXJ5ID0gZnVuY3Rpb24gdXBkYXRlUXVlcnkoKSB7XG4gICAgdmFyIHF1ZXJ5ID0gdGhpcy5jbGllbnQuZ2V0UXVlcnlDYWNoZSgpLmJ1aWxkKHRoaXMuY2xpZW50LCB0aGlzLm9wdGlvbnMpO1xuXG4gICAgaWYgKHF1ZXJ5ID09PSB0aGlzLmN1cnJlbnRRdWVyeSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBwcmV2UXVlcnkgPSB0aGlzLmN1cnJlbnRRdWVyeTtcbiAgICB0aGlzLmN1cnJlbnRRdWVyeSA9IHF1ZXJ5O1xuICAgIHRoaXMuY3VycmVudFF1ZXJ5SW5pdGlhbFN0YXRlID0gcXVlcnkuc3RhdGU7XG4gICAgdGhpcy5wcmV2aW91c1F1ZXJ5UmVzdWx0ID0gdGhpcy5jdXJyZW50UmVzdWx0O1xuXG4gICAgaWYgKHRoaXMuaGFzTGlzdGVuZXJzKCkpIHtcbiAgICAgIHByZXZRdWVyeSA9PSBudWxsID8gdm9pZCAwIDogcHJldlF1ZXJ5LnJlbW92ZU9ic2VydmVyKHRoaXMpO1xuICAgICAgcXVlcnkuYWRkT2JzZXJ2ZXIodGhpcyk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5vblF1ZXJ5VXBkYXRlID0gZnVuY3Rpb24gb25RdWVyeVVwZGF0ZShhY3Rpb24pIHtcbiAgICB2YXIgbm90aWZ5T3B0aW9ucyA9IHt9O1xuXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSAnc3VjY2VzcycpIHtcbiAgICAgIG5vdGlmeU9wdGlvbnMub25TdWNjZXNzID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKGFjdGlvbi50eXBlID09PSAnZXJyb3InICYmICFpc0NhbmNlbGxlZEVycm9yKGFjdGlvbi5lcnJvcikpIHtcbiAgICAgIG5vdGlmeU9wdGlvbnMub25FcnJvciA9IHRydWU7XG4gICAgfVxuXG4gICAgdGhpcy51cGRhdGVSZXN1bHQobm90aWZ5T3B0aW9ucyk7XG5cbiAgICBpZiAodGhpcy5oYXNMaXN0ZW5lcnMoKSkge1xuICAgICAgdGhpcy51cGRhdGVUaW1lcnMoKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLm5vdGlmeSA9IGZ1bmN0aW9uIG5vdGlmeShub3RpZnlPcHRpb25zKSB7XG4gICAgdmFyIF90aGlzOCA9IHRoaXM7XG5cbiAgICBub3RpZnlNYW5hZ2VyLmJhdGNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIEZpcnN0IHRyaWdnZXIgdGhlIGNvbmZpZ3VyYXRpb24gY2FsbGJhY2tzXG4gICAgICBpZiAobm90aWZ5T3B0aW9ucy5vblN1Y2Nlc3MpIHtcbiAgICAgICAgX3RoaXM4Lm9wdGlvbnMub25TdWNjZXNzID09IG51bGwgPyB2b2lkIDAgOiBfdGhpczgub3B0aW9ucy5vblN1Y2Nlc3MoX3RoaXM4LmN1cnJlbnRSZXN1bHQuZGF0YSk7XG4gICAgICAgIF90aGlzOC5vcHRpb25zLm9uU2V0dGxlZCA9PSBudWxsID8gdm9pZCAwIDogX3RoaXM4Lm9wdGlvbnMub25TZXR0bGVkKF90aGlzOC5jdXJyZW50UmVzdWx0LmRhdGEsIG51bGwpO1xuICAgICAgfSBlbHNlIGlmIChub3RpZnlPcHRpb25zLm9uRXJyb3IpIHtcbiAgICAgICAgX3RoaXM4Lm9wdGlvbnMub25FcnJvciA9PSBudWxsID8gdm9pZCAwIDogX3RoaXM4Lm9wdGlvbnMub25FcnJvcihfdGhpczguY3VycmVudFJlc3VsdC5lcnJvcik7XG4gICAgICAgIF90aGlzOC5vcHRpb25zLm9uU2V0dGxlZCA9PSBudWxsID8gdm9pZCAwIDogX3RoaXM4Lm9wdGlvbnMub25TZXR0bGVkKHVuZGVmaW5lZCwgX3RoaXM4LmN1cnJlbnRSZXN1bHQuZXJyb3IpO1xuICAgICAgfSAvLyBUaGVuIHRyaWdnZXIgdGhlIGxpc3RlbmVyc1xuXG5cbiAgICAgIGlmIChub3RpZnlPcHRpb25zLmxpc3RlbmVycykge1xuICAgICAgICBfdGhpczgubGlzdGVuZXJzLmZvckVhY2goZnVuY3Rpb24gKGxpc3RlbmVyKSB7XG4gICAgICAgICAgbGlzdGVuZXIoX3RoaXM4LmN1cnJlbnRSZXN1bHQpO1xuICAgICAgICB9KTtcbiAgICAgIH0gLy8gVGhlbiB0aGUgY2FjaGUgbGlzdGVuZXJzXG5cblxuICAgICAgaWYgKG5vdGlmeU9wdGlvbnMuY2FjaGUpIHtcbiAgICAgICAgX3RoaXM4LmNsaWVudC5nZXRRdWVyeUNhY2hlKCkubm90aWZ5KHtcbiAgICAgICAgICBxdWVyeTogX3RoaXM4LmN1cnJlbnRRdWVyeSxcbiAgICAgICAgICB0eXBlOiAnb2JzZXJ2ZXJSZXN1bHRzVXBkYXRlZCdcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIFF1ZXJ5T2JzZXJ2ZXI7XG59KFN1YnNjcmliYWJsZSk7XG5cbmZ1bmN0aW9uIHNob3VsZExvYWRPbk1vdW50KHF1ZXJ5LCBvcHRpb25zKSB7XG4gIHJldHVybiBvcHRpb25zLmVuYWJsZWQgIT09IGZhbHNlICYmICFxdWVyeS5zdGF0ZS5kYXRhVXBkYXRlZEF0ICYmICEocXVlcnkuc3RhdGUuc3RhdHVzID09PSAnZXJyb3InICYmIG9wdGlvbnMucmV0cnlPbk1vdW50ID09PSBmYWxzZSk7XG59XG5cbmZ1bmN0aW9uIHNob3VsZFJlZmV0Y2hPbk1vdW50KHF1ZXJ5LCBvcHRpb25zKSB7XG4gIHJldHVybiBvcHRpb25zLmVuYWJsZWQgIT09IGZhbHNlICYmIHF1ZXJ5LnN0YXRlLmRhdGFVcGRhdGVkQXQgPiAwICYmIChvcHRpb25zLnJlZmV0Y2hPbk1vdW50ID09PSAnYWx3YXlzJyB8fCBvcHRpb25zLnJlZmV0Y2hPbk1vdW50ICE9PSBmYWxzZSAmJiBpc1N0YWxlKHF1ZXJ5LCBvcHRpb25zKSk7XG59XG5cbmZ1bmN0aW9uIHNob3VsZEZldGNoT25Nb3VudChxdWVyeSwgb3B0aW9ucykge1xuICByZXR1cm4gc2hvdWxkTG9hZE9uTW91bnQocXVlcnksIG9wdGlvbnMpIHx8IHNob3VsZFJlZmV0Y2hPbk1vdW50KHF1ZXJ5LCBvcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gX3Nob3VsZEZldGNoT25SZWNvbm5lY3QocXVlcnksIG9wdGlvbnMpIHtcbiAgcmV0dXJuIG9wdGlvbnMuZW5hYmxlZCAhPT0gZmFsc2UgJiYgKG9wdGlvbnMucmVmZXRjaE9uUmVjb25uZWN0ID09PSAnYWx3YXlzJyB8fCBvcHRpb25zLnJlZmV0Y2hPblJlY29ubmVjdCAhPT0gZmFsc2UgJiYgaXNTdGFsZShxdWVyeSwgb3B0aW9ucykpO1xufVxuXG5mdW5jdGlvbiBfc2hvdWxkRmV0Y2hPbldpbmRvd0ZvY3VzKHF1ZXJ5LCBvcHRpb25zKSB7XG4gIHJldHVybiBvcHRpb25zLmVuYWJsZWQgIT09IGZhbHNlICYmIChvcHRpb25zLnJlZmV0Y2hPbldpbmRvd0ZvY3VzID09PSAnYWx3YXlzJyB8fCBvcHRpb25zLnJlZmV0Y2hPbldpbmRvd0ZvY3VzICE9PSBmYWxzZSAmJiBpc1N0YWxlKHF1ZXJ5LCBvcHRpb25zKSk7XG59XG5cbmZ1bmN0aW9uIHNob3VsZEZldGNoT3B0aW9uYWxseShxdWVyeSwgcHJldlF1ZXJ5LCBvcHRpb25zLCBwcmV2T3B0aW9ucykge1xuICByZXR1cm4gb3B0aW9ucy5lbmFibGVkICE9PSBmYWxzZSAmJiAocXVlcnkgIT09IHByZXZRdWVyeSB8fCBwcmV2T3B0aW9ucy5lbmFibGVkID09PSBmYWxzZSkgJiYgaXNTdGFsZShxdWVyeSwgb3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIGlzU3RhbGUocXVlcnksIG9wdGlvbnMpIHtcbiAgcmV0dXJuIHF1ZXJ5LmlzU3RhbGVCeVRpbWUob3B0aW9ucy5zdGFsZVRpbWUpO1xufSIsImltcG9ydCB7IGZvY3VzTWFuYWdlciB9IGZyb20gJy4vZm9jdXNNYW5hZ2VyJztcbmltcG9ydCB7IG9ubGluZU1hbmFnZXIgfSBmcm9tICcuL29ubGluZU1hbmFnZXInO1xuaW1wb3J0IHsgc2xlZXAgfSBmcm9tICcuL3V0aWxzJzsgLy8gVFlQRVNcblxuZnVuY3Rpb24gZGVmYXVsdFJldHJ5RGVsYXkoZmFpbHVyZUNvdW50KSB7XG4gIHJldHVybiBNYXRoLm1pbigxMDAwICogTWF0aC5wb3coMiwgZmFpbHVyZUNvdW50KSwgMzAwMDApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNDYW5jZWxhYmxlKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgKHZhbHVlID09IG51bGwgPyB2b2lkIDAgOiB2YWx1ZS5jYW5jZWwpID09PSAnZnVuY3Rpb24nO1xufVxuZXhwb3J0IHZhciBDYW5jZWxsZWRFcnJvciA9IGZ1bmN0aW9uIENhbmNlbGxlZEVycm9yKG9wdGlvbnMpIHtcbiAgdGhpcy5yZXZlcnQgPSBvcHRpb25zID09IG51bGwgPyB2b2lkIDAgOiBvcHRpb25zLnJldmVydDtcbiAgdGhpcy5zaWxlbnQgPSBvcHRpb25zID09IG51bGwgPyB2b2lkIDAgOiBvcHRpb25zLnNpbGVudDtcbn07XG5leHBvcnQgZnVuY3Rpb24gaXNDYW5jZWxsZWRFcnJvcih2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBDYW5jZWxsZWRFcnJvcjtcbn0gLy8gQ0xBU1NcblxuZXhwb3J0IHZhciBSZXRyeWVyID0gZnVuY3Rpb24gUmV0cnllcihjb25maWcpIHtcbiAgdmFyIF90aGlzID0gdGhpcztcblxuICB2YXIgY2FuY2VsUmV0cnkgPSBmYWxzZTtcbiAgdmFyIGNhbmNlbEZuO1xuICB2YXIgY29udGludWVGbjtcbiAgdmFyIHByb21pc2VSZXNvbHZlO1xuICB2YXIgcHJvbWlzZVJlamVjdDtcblxuICB0aGlzLmNhbmNlbCA9IGZ1bmN0aW9uIChjYW5jZWxPcHRpb25zKSB7XG4gICAgcmV0dXJuIGNhbmNlbEZuID09IG51bGwgPyB2b2lkIDAgOiBjYW5jZWxGbihjYW5jZWxPcHRpb25zKTtcbiAgfTtcblxuICB0aGlzLmNhbmNlbFJldHJ5ID0gZnVuY3Rpb24gKCkge1xuICAgIGNhbmNlbFJldHJ5ID0gdHJ1ZTtcbiAgfTtcblxuICB0aGlzLmNvbnRpbnVlID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBjb250aW51ZUZuID09IG51bGwgPyB2b2lkIDAgOiBjb250aW51ZUZuKCk7XG4gIH07XG5cbiAgdGhpcy5mYWlsdXJlQ291bnQgPSAwO1xuICB0aGlzLmlzUGF1c2VkID0gZmFsc2U7XG4gIHRoaXMuaXNSZXNvbHZlZCA9IGZhbHNlO1xuICB0aGlzLmlzVHJhbnNwb3J0Q2FuY2VsYWJsZSA9IGZhbHNlO1xuICB0aGlzLnByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAob3V0ZXJSZXNvbHZlLCBvdXRlclJlamVjdCkge1xuICAgIHByb21pc2VSZXNvbHZlID0gb3V0ZXJSZXNvbHZlO1xuICAgIHByb21pc2VSZWplY3QgPSBvdXRlclJlamVjdDtcbiAgfSk7XG5cbiAgdmFyIHJlc29sdmUgPSBmdW5jdGlvbiByZXNvbHZlKHZhbHVlKSB7XG4gICAgaWYgKCFfdGhpcy5pc1Jlc29sdmVkKSB7XG4gICAgICBfdGhpcy5pc1Jlc29sdmVkID0gdHJ1ZTtcbiAgICAgIGNvbmZpZy5vblN1Y2Nlc3MgPT0gbnVsbCA/IHZvaWQgMCA6IGNvbmZpZy5vblN1Y2Nlc3ModmFsdWUpO1xuICAgICAgY29udGludWVGbiA9PSBudWxsID8gdm9pZCAwIDogY29udGludWVGbigpO1xuICAgICAgcHJvbWlzZVJlc29sdmUodmFsdWUpO1xuICAgIH1cbiAgfTtcblxuICB2YXIgcmVqZWN0ID0gZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7XG4gICAgaWYgKCFfdGhpcy5pc1Jlc29sdmVkKSB7XG4gICAgICBfdGhpcy5pc1Jlc29sdmVkID0gdHJ1ZTtcbiAgICAgIGNvbmZpZy5vbkVycm9yID09IG51bGwgPyB2b2lkIDAgOiBjb25maWcub25FcnJvcih2YWx1ZSk7XG4gICAgICBjb250aW51ZUZuID09IG51bGwgPyB2b2lkIDAgOiBjb250aW51ZUZuKCk7XG4gICAgICBwcm9taXNlUmVqZWN0KHZhbHVlKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIHBhdXNlID0gZnVuY3Rpb24gcGF1c2UoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChjb250aW51ZVJlc29sdmUpIHtcbiAgICAgIGNvbnRpbnVlRm4gPSBjb250aW51ZVJlc29sdmU7XG4gICAgICBfdGhpcy5pc1BhdXNlZCA9IHRydWU7XG4gICAgICBjb25maWcub25QYXVzZSA9PSBudWxsID8gdm9pZCAwIDogY29uZmlnLm9uUGF1c2UoKTtcbiAgICB9KS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnRpbnVlRm4gPSB1bmRlZmluZWQ7XG4gICAgICBfdGhpcy5pc1BhdXNlZCA9IGZhbHNlO1xuICAgICAgY29uZmlnLm9uQ29udGludWUgPT0gbnVsbCA/IHZvaWQgMCA6IGNvbmZpZy5vbkNvbnRpbnVlKCk7XG4gICAgfSk7XG4gIH07IC8vIENyZWF0ZSBsb29wIGZ1bmN0aW9uXG5cblxuICB2YXIgcnVuID0gZnVuY3Rpb24gcnVuKCkge1xuICAgIC8vIERvIG5vdGhpbmcgaWYgYWxyZWFkeSByZXNvbHZlZFxuICAgIGlmIChfdGhpcy5pc1Jlc29sdmVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHByb21pc2VPclZhbHVlOyAvLyBFeGVjdXRlIHF1ZXJ5XG5cbiAgICB0cnkge1xuICAgICAgcHJvbWlzZU9yVmFsdWUgPSBjb25maWcuZm4oKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgcHJvbWlzZU9yVmFsdWUgPSBQcm9taXNlLnJlamVjdChlcnJvcik7XG4gICAgfSAvLyBDcmVhdGUgY2FsbGJhY2sgdG8gY2FuY2VsIHRoaXMgZmV0Y2hcblxuXG4gICAgY2FuY2VsRm4gPSBmdW5jdGlvbiBjYW5jZWxGbihjYW5jZWxPcHRpb25zKSB7XG4gICAgICBpZiAoIV90aGlzLmlzUmVzb2x2ZWQpIHtcbiAgICAgICAgcmVqZWN0KG5ldyBDYW5jZWxsZWRFcnJvcihjYW5jZWxPcHRpb25zKSk7IC8vIENhbmNlbCB0cmFuc3BvcnQgaWYgc3VwcG9ydGVkXG5cbiAgICAgICAgaWYgKGlzQ2FuY2VsYWJsZShwcm9taXNlT3JWYWx1ZSkpIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgcHJvbWlzZU9yVmFsdWUuY2FuY2VsKCk7XG4gICAgICAgICAgfSBjYXRjaCAoX3VudXNlZCkge31cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07IC8vIENoZWNrIGlmIHRoZSB0cmFuc3BvcnQgbGF5ZXIgc3VwcG9ydCBjYW5jZWxsYXRpb25cblxuXG4gICAgX3RoaXMuaXNUcmFuc3BvcnRDYW5jZWxhYmxlID0gaXNDYW5jZWxhYmxlKHByb21pc2VPclZhbHVlKTtcbiAgICBQcm9taXNlLnJlc29sdmUocHJvbWlzZU9yVmFsdWUpLnRoZW4ocmVzb2x2ZSkuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICB2YXIgX2NvbmZpZyRyZXRyeSwgX2NvbmZpZyRyZXRyeURlbGF5O1xuXG4gICAgICAvLyBTdG9wIGlmIHRoZSBmZXRjaCBpcyBhbHJlYWR5IHJlc29sdmVkXG4gICAgICBpZiAoX3RoaXMuaXNSZXNvbHZlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9IC8vIERvIHdlIG5lZWQgdG8gcmV0cnkgdGhlIHJlcXVlc3Q/XG5cblxuICAgICAgdmFyIHJldHJ5ID0gKF9jb25maWckcmV0cnkgPSBjb25maWcucmV0cnkpICE9IG51bGwgPyBfY29uZmlnJHJldHJ5IDogMztcbiAgICAgIHZhciByZXRyeURlbGF5ID0gKF9jb25maWckcmV0cnlEZWxheSA9IGNvbmZpZy5yZXRyeURlbGF5KSAhPSBudWxsID8gX2NvbmZpZyRyZXRyeURlbGF5IDogZGVmYXVsdFJldHJ5RGVsYXk7XG4gICAgICB2YXIgZGVsYXkgPSB0eXBlb2YgcmV0cnlEZWxheSA9PT0gJ2Z1bmN0aW9uJyA/IHJldHJ5RGVsYXkoX3RoaXMuZmFpbHVyZUNvdW50LCBlcnJvcikgOiByZXRyeURlbGF5O1xuICAgICAgdmFyIHNob3VsZFJldHJ5ID0gcmV0cnkgPT09IHRydWUgfHwgdHlwZW9mIHJldHJ5ID09PSAnbnVtYmVyJyAmJiBfdGhpcy5mYWlsdXJlQ291bnQgPCByZXRyeSB8fCB0eXBlb2YgcmV0cnkgPT09ICdmdW5jdGlvbicgJiYgcmV0cnkoX3RoaXMuZmFpbHVyZUNvdW50LCBlcnJvcik7XG5cbiAgICAgIGlmIChjYW5jZWxSZXRyeSB8fCAhc2hvdWxkUmV0cnkpIHtcbiAgICAgICAgLy8gV2UgYXJlIGRvbmUgaWYgdGhlIHF1ZXJ5IGRvZXMgbm90IG5lZWQgdG8gYmUgcmV0cmllZFxuICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIF90aGlzLmZhaWx1cmVDb3VudCsrOyAvLyBOb3RpZnkgb24gZmFpbFxuXG4gICAgICBjb25maWcub25GYWlsID09IG51bGwgPyB2b2lkIDAgOiBjb25maWcub25GYWlsKF90aGlzLmZhaWx1cmVDb3VudCwgZXJyb3IpOyAvLyBEZWxheVxuXG4gICAgICBzbGVlcChkZWxheSkgLy8gUGF1c2UgaWYgdGhlIGRvY3VtZW50IGlzIG5vdCB2aXNpYmxlIG9yIHdoZW4gdGhlIGRldmljZSBpcyBvZmZsaW5lXG4gICAgICAudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghZm9jdXNNYW5hZ2VyLmlzRm9jdXNlZCgpIHx8ICFvbmxpbmVNYW5hZ2VyLmlzT25saW5lKCkpIHtcbiAgICAgICAgICByZXR1cm4gcGF1c2UoKTtcbiAgICAgICAgfVxuICAgICAgfSkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChjYW5jZWxSZXRyeSkge1xuICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcnVuKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9OyAvLyBTdGFydCBsb29wXG5cblxuICBydW4oKTtcbn07IiwiZXhwb3J0IHZhciBTdWJzY3JpYmFibGUgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBTdWJzY3JpYmFibGUoKSB7XG4gICAgdGhpcy5saXN0ZW5lcnMgPSBbXTtcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBTdWJzY3JpYmFibGUucHJvdG90eXBlO1xuXG4gIF9wcm90by5zdWJzY3JpYmUgPSBmdW5jdGlvbiBzdWJzY3JpYmUobGlzdGVuZXIpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgdmFyIGNhbGxiYWNrID0gbGlzdGVuZXIgfHwgZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9O1xuXG4gICAgdGhpcy5saXN0ZW5lcnMucHVzaChjYWxsYmFjayk7XG4gICAgdGhpcy5vblN1YnNjcmliZSgpO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpcy5saXN0ZW5lcnMgPSBfdGhpcy5saXN0ZW5lcnMuZmlsdGVyKGZ1bmN0aW9uICh4KSB7XG4gICAgICAgIHJldHVybiB4ICE9PSBjYWxsYmFjaztcbiAgICAgIH0pO1xuXG4gICAgICBfdGhpcy5vblVuc3Vic2NyaWJlKCk7XG4gICAgfTtcbiAgfTtcblxuICBfcHJvdG8uaGFzTGlzdGVuZXJzID0gZnVuY3Rpb24gaGFzTGlzdGVuZXJzKCkge1xuICAgIHJldHVybiB0aGlzLmxpc3RlbmVycy5sZW5ndGggPiAwO1xuICB9O1xuXG4gIF9wcm90by5vblN1YnNjcmliZSA9IGZ1bmN0aW9uIG9uU3Vic2NyaWJlKCkgey8vIERvIG5vdGhpbmdcbiAgfTtcblxuICBfcHJvdG8ub25VbnN1YnNjcmliZSA9IGZ1bmN0aW9uIG9uVW5zdWJzY3JpYmUoKSB7Ly8gRG8gbm90aGluZ1xuICB9O1xuXG4gIHJldHVybiBTdWJzY3JpYmFibGU7XG59KCk7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG4vLyBUWVBFU1xuLy8gVVRJTFNcbmV4cG9ydCB2YXIgaXNTZXJ2ZXIgPSB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJztcbmV4cG9ydCBmdW5jdGlvbiBub29wKCkge1xuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGZ1bmN0aW9uYWxVcGRhdGUodXBkYXRlciwgaW5wdXQpIHtcbiAgcmV0dXJuIHR5cGVvZiB1cGRhdGVyID09PSAnZnVuY3Rpb24nID8gdXBkYXRlcihpbnB1dCkgOiB1cGRhdGVyO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzVmFsaWRUaW1lb3V0KHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInICYmIHZhbHVlID49IDAgJiYgdmFsdWUgIT09IEluZmluaXR5O1xufVxuZXhwb3J0IGZ1bmN0aW9uIGVuc3VyZVF1ZXJ5S2V5QXJyYXkodmFsdWUpIHtcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkodmFsdWUpID8gdmFsdWUgOiBbdmFsdWVdO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGRpZmZlcmVuY2UoYXJyYXkxLCBhcnJheTIpIHtcbiAgcmV0dXJuIGFycmF5MS5maWx0ZXIoZnVuY3Rpb24gKHgpIHtcbiAgICByZXR1cm4gYXJyYXkyLmluZGV4T2YoeCkgPT09IC0xO1xuICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiByZXBsYWNlQXQoYXJyYXksIGluZGV4LCB2YWx1ZSkge1xuICB2YXIgY29weSA9IGFycmF5LnNsaWNlKDApO1xuICBjb3B5W2luZGV4XSA9IHZhbHVlO1xuICByZXR1cm4gY29weTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB0aW1lVW50aWxTdGFsZSh1cGRhdGVkQXQsIHN0YWxlVGltZSkge1xuICByZXR1cm4gTWF0aC5tYXgodXBkYXRlZEF0ICsgKHN0YWxlVGltZSB8fCAwKSAtIERhdGUubm93KCksIDApO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUXVlcnlBcmdzKGFyZzEsIGFyZzIsIGFyZzMpIHtcbiAgaWYgKCFpc1F1ZXJ5S2V5KGFyZzEpKSB7XG4gICAgcmV0dXJuIGFyZzE7XG4gIH1cblxuICBpZiAodHlwZW9mIGFyZzIgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gX2V4dGVuZHMoe30sIGFyZzMsIHtcbiAgICAgIHF1ZXJ5S2V5OiBhcmcxLFxuICAgICAgcXVlcnlGbjogYXJnMlxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIF9leHRlbmRzKHt9LCBhcmcyLCB7XG4gICAgcXVlcnlLZXk6IGFyZzFcbiAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gcGFyc2VNdXRhdGlvbkFyZ3MoYXJnMSwgYXJnMiwgYXJnMykge1xuICBpZiAoaXNRdWVyeUtleShhcmcxKSkge1xuICAgIGlmICh0eXBlb2YgYXJnMiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBhcmczLCB7XG4gICAgICAgIG11dGF0aW9uS2V5OiBhcmcxLFxuICAgICAgICBtdXRhdGlvbkZuOiBhcmcyXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gX2V4dGVuZHMoe30sIGFyZzIsIHtcbiAgICAgIG11dGF0aW9uS2V5OiBhcmcxXG4gICAgfSk7XG4gIH1cblxuICBpZiAodHlwZW9mIGFyZzEgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gX2V4dGVuZHMoe30sIGFyZzIsIHtcbiAgICAgIG11dGF0aW9uRm46IGFyZzFcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBfZXh0ZW5kcyh7fSwgYXJnMSk7XG59XG5leHBvcnQgZnVuY3Rpb24gcGFyc2VGaWx0ZXJBcmdzKGFyZzEsIGFyZzIsIGFyZzMpIHtcbiAgcmV0dXJuIGlzUXVlcnlLZXkoYXJnMSkgPyBbX2V4dGVuZHMoe30sIGFyZzIsIHtcbiAgICBxdWVyeUtleTogYXJnMVxuICB9KSwgYXJnM10gOiBbYXJnMSB8fCB7fSwgYXJnMl07XG59XG5leHBvcnQgZnVuY3Rpb24gbWFwUXVlcnlTdGF0dXNGaWx0ZXIoYWN0aXZlLCBpbmFjdGl2ZSkge1xuICBpZiAoYWN0aXZlID09PSB0cnVlICYmIGluYWN0aXZlID09PSB0cnVlIHx8IGFjdGl2ZSA9PSBudWxsICYmIGluYWN0aXZlID09IG51bGwpIHtcbiAgICByZXR1cm4gJ2FsbCc7XG4gIH0gZWxzZSBpZiAoYWN0aXZlID09PSBmYWxzZSAmJiBpbmFjdGl2ZSA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gJ25vbmUnO1xuICB9IGVsc2Uge1xuICAgIC8vIEF0IHRoaXMgcG9pbnQsIGFjdGl2ZXxpbmFjdGl2ZSBjYW4gb25seSBiZSB0cnVlfGZhbHNlIG9yIGZhbHNlfHRydWVcbiAgICAvLyBzbywgd2hlbiBvbmx5IG9uZSB2YWx1ZSBpcyBwcm92aWRlZCwgdGhlIG1pc3Npbmcgb25lIGhhcyB0byBiZSB0aGUgbmVnYXRlZCB2YWx1ZVxuICAgIHZhciBpc0FjdGl2ZSA9IGFjdGl2ZSAhPSBudWxsID8gYWN0aXZlIDogIWluYWN0aXZlO1xuICAgIHJldHVybiBpc0FjdGl2ZSA/ICdhY3RpdmUnIDogJ2luYWN0aXZlJztcbiAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIG1hdGNoUXVlcnkoZmlsdGVycywgcXVlcnkpIHtcbiAgdmFyIGFjdGl2ZSA9IGZpbHRlcnMuYWN0aXZlLFxuICAgICAgZXhhY3QgPSBmaWx0ZXJzLmV4YWN0LFxuICAgICAgZmV0Y2hpbmcgPSBmaWx0ZXJzLmZldGNoaW5nLFxuICAgICAgaW5hY3RpdmUgPSBmaWx0ZXJzLmluYWN0aXZlLFxuICAgICAgcHJlZGljYXRlID0gZmlsdGVycy5wcmVkaWNhdGUsXG4gICAgICBxdWVyeUtleSA9IGZpbHRlcnMucXVlcnlLZXksXG4gICAgICBzdGFsZSA9IGZpbHRlcnMuc3RhbGU7XG5cbiAgaWYgKGlzUXVlcnlLZXkocXVlcnlLZXkpKSB7XG4gICAgaWYgKGV4YWN0KSB7XG4gICAgICBpZiAocXVlcnkucXVlcnlIYXNoICE9PSBoYXNoUXVlcnlLZXlCeU9wdGlvbnMocXVlcnlLZXksIHF1ZXJ5Lm9wdGlvbnMpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKCFwYXJ0aWFsTWF0Y2hLZXkocXVlcnkucXVlcnlLZXksIHF1ZXJ5S2V5KSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHZhciBxdWVyeVN0YXR1c0ZpbHRlciA9IG1hcFF1ZXJ5U3RhdHVzRmlsdGVyKGFjdGl2ZSwgaW5hY3RpdmUpO1xuXG4gIGlmIChxdWVyeVN0YXR1c0ZpbHRlciA9PT0gJ25vbmUnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9IGVsc2UgaWYgKHF1ZXJ5U3RhdHVzRmlsdGVyICE9PSAnYWxsJykge1xuICAgIHZhciBpc0FjdGl2ZSA9IHF1ZXJ5LmlzQWN0aXZlKCk7XG5cbiAgICBpZiAocXVlcnlTdGF0dXNGaWx0ZXIgPT09ICdhY3RpdmUnICYmICFpc0FjdGl2ZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChxdWVyeVN0YXR1c0ZpbHRlciA9PT0gJ2luYWN0aXZlJyAmJiBpc0FjdGl2ZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlb2Ygc3RhbGUgPT09ICdib29sZWFuJyAmJiBxdWVyeS5pc1N0YWxlKCkgIT09IHN0YWxlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBmZXRjaGluZyA9PT0gJ2Jvb2xlYW4nICYmIHF1ZXJ5LmlzRmV0Y2hpbmcoKSAhPT0gZmV0Y2hpbmcpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAocHJlZGljYXRlICYmICFwcmVkaWNhdGUocXVlcnkpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5leHBvcnQgZnVuY3Rpb24gbWF0Y2hNdXRhdGlvbihmaWx0ZXJzLCBtdXRhdGlvbikge1xuICB2YXIgZXhhY3QgPSBmaWx0ZXJzLmV4YWN0LFxuICAgICAgZmV0Y2hpbmcgPSBmaWx0ZXJzLmZldGNoaW5nLFxuICAgICAgcHJlZGljYXRlID0gZmlsdGVycy5wcmVkaWNhdGUsXG4gICAgICBtdXRhdGlvbktleSA9IGZpbHRlcnMubXV0YXRpb25LZXk7XG5cbiAgaWYgKGlzUXVlcnlLZXkobXV0YXRpb25LZXkpKSB7XG4gICAgaWYgKCFtdXRhdGlvbi5vcHRpb25zLm11dGF0aW9uS2V5KSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKGV4YWN0KSB7XG4gICAgICBpZiAoaGFzaFF1ZXJ5S2V5KG11dGF0aW9uLm9wdGlvbnMubXV0YXRpb25LZXkpICE9PSBoYXNoUXVlcnlLZXkobXV0YXRpb25LZXkpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKCFwYXJ0aWFsTWF0Y2hLZXkobXV0YXRpb24ub3B0aW9ucy5tdXRhdGlvbktleSwgbXV0YXRpb25LZXkpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVvZiBmZXRjaGluZyA9PT0gJ2Jvb2xlYW4nICYmIG11dGF0aW9uLnN0YXRlLnN0YXR1cyA9PT0gJ2xvYWRpbmcnICE9PSBmZXRjaGluZykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChwcmVkaWNhdGUgJiYgIXByZWRpY2F0ZShtdXRhdGlvbikpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBoYXNoUXVlcnlLZXlCeU9wdGlvbnMocXVlcnlLZXksIG9wdGlvbnMpIHtcbiAgdmFyIGhhc2hGbiA9IChvcHRpb25zID09IG51bGwgPyB2b2lkIDAgOiBvcHRpb25zLnF1ZXJ5S2V5SGFzaEZuKSB8fCBoYXNoUXVlcnlLZXk7XG4gIHJldHVybiBoYXNoRm4ocXVlcnlLZXkpO1xufVxuLyoqXG4gKiBEZWZhdWx0IHF1ZXJ5IGtleXMgaGFzaCBmdW5jdGlvbi5cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gaGFzaFF1ZXJ5S2V5KHF1ZXJ5S2V5KSB7XG4gIHZhciBhc0FycmF5ID0gZW5zdXJlUXVlcnlLZXlBcnJheShxdWVyeUtleSk7XG4gIHJldHVybiBzdGFibGVWYWx1ZUhhc2goYXNBcnJheSk7XG59XG4vKipcbiAqIEhhc2hlcyB0aGUgdmFsdWUgaW50byBhIHN0YWJsZSBoYXNoLlxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBzdGFibGVWYWx1ZUhhc2godmFsdWUpIHtcbiAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHZhbHVlLCBmdW5jdGlvbiAoXywgdmFsKSB7XG4gICAgcmV0dXJuIGlzUGxhaW5PYmplY3QodmFsKSA/IE9iamVjdC5rZXlzKHZhbCkuc29ydCgpLnJlZHVjZShmdW5jdGlvbiAocmVzdWx0LCBrZXkpIHtcbiAgICAgIHJlc3VsdFtrZXldID0gdmFsW2tleV07XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0sIHt9KSA6IHZhbDtcbiAgfSk7XG59XG4vKipcbiAqIENoZWNrcyBpZiBrZXkgYGJgIHBhcnRpYWxseSBtYXRjaGVzIHdpdGgga2V5IGBhYC5cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gcGFydGlhbE1hdGNoS2V5KGEsIGIpIHtcbiAgcmV0dXJuIHBhcnRpYWxEZWVwRXF1YWwoZW5zdXJlUXVlcnlLZXlBcnJheShhKSwgZW5zdXJlUXVlcnlLZXlBcnJheShiKSk7XG59XG4vKipcbiAqIENoZWNrcyBpZiBgYmAgcGFydGlhbGx5IG1hdGNoZXMgd2l0aCBgYWAuXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnRpYWxEZWVwRXF1YWwoYSwgYikge1xuICBpZiAoYSA9PT0gYikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBhICE9PSB0eXBlb2YgYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChhICYmIGIgJiYgdHlwZW9mIGEgPT09ICdvYmplY3QnICYmIHR5cGVvZiBiID09PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiAhT2JqZWN0LmtleXMoYikuc29tZShmdW5jdGlvbiAoa2V5KSB7XG4gICAgICByZXR1cm4gIXBhcnRpYWxEZWVwRXF1YWwoYVtrZXldLCBiW2tleV0pO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIHJldHVybnMgYGFgIGlmIGBiYCBpcyBkZWVwbHkgZXF1YWwuXG4gKiBJZiBub3QsIGl0IHdpbGwgcmVwbGFjZSBhbnkgZGVlcGx5IGVxdWFsIGNoaWxkcmVuIG9mIGBiYCB3aXRoIHRob3NlIG9mIGBhYC5cbiAqIFRoaXMgY2FuIGJlIHVzZWQgZm9yIHN0cnVjdHVyYWwgc2hhcmluZyBiZXR3ZWVuIEpTT04gdmFsdWVzIGZvciBleGFtcGxlLlxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiByZXBsYWNlRXF1YWxEZWVwKGEsIGIpIHtcbiAgaWYgKGEgPT09IGIpIHtcbiAgICByZXR1cm4gYTtcbiAgfVxuXG4gIHZhciBhcnJheSA9IEFycmF5LmlzQXJyYXkoYSkgJiYgQXJyYXkuaXNBcnJheShiKTtcblxuICBpZiAoYXJyYXkgfHwgaXNQbGFpbk9iamVjdChhKSAmJiBpc1BsYWluT2JqZWN0KGIpKSB7XG4gICAgdmFyIGFTaXplID0gYXJyYXkgPyBhLmxlbmd0aCA6IE9iamVjdC5rZXlzKGEpLmxlbmd0aDtcbiAgICB2YXIgYkl0ZW1zID0gYXJyYXkgPyBiIDogT2JqZWN0LmtleXMoYik7XG4gICAgdmFyIGJTaXplID0gYkl0ZW1zLmxlbmd0aDtcbiAgICB2YXIgY29weSA9IGFycmF5ID8gW10gOiB7fTtcbiAgICB2YXIgZXF1YWxJdGVtcyA9IDA7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJTaXplOyBpKyspIHtcbiAgICAgIHZhciBrZXkgPSBhcnJheSA/IGkgOiBiSXRlbXNbaV07XG4gICAgICBjb3B5W2tleV0gPSByZXBsYWNlRXF1YWxEZWVwKGFba2V5XSwgYltrZXldKTtcblxuICAgICAgaWYgKGNvcHlba2V5XSA9PT0gYVtrZXldKSB7XG4gICAgICAgIGVxdWFsSXRlbXMrKztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYVNpemUgPT09IGJTaXplICYmIGVxdWFsSXRlbXMgPT09IGFTaXplID8gYSA6IGNvcHk7XG4gIH1cblxuICByZXR1cm4gYjtcbn1cbi8qKlxuICogU2hhbGxvdyBjb21wYXJlIG9iamVjdHMuIE9ubHkgd29ya3Mgd2l0aCBvYmplY3RzIHRoYXQgYWx3YXlzIGhhdmUgdGhlIHNhbWUgcHJvcGVydGllcy5cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gc2hhbGxvd0VxdWFsT2JqZWN0cyhhLCBiKSB7XG4gIGlmIChhICYmICFiIHx8IGIgJiYgIWEpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBmb3IgKHZhciBrZXkgaW4gYSkge1xuICAgIGlmIChhW2tleV0gIT09IGJba2V5XSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufSAvLyBDb3BpZWQgZnJvbTogaHR0cHM6Ly9naXRodWIuY29tL2pvbnNjaGxpbmtlcnQvaXMtcGxhaW4tb2JqZWN0XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1BsYWluT2JqZWN0KG8pIHtcbiAgaWYgKCFoYXNPYmplY3RQcm90b3R5cGUobykpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0gLy8gSWYgaGFzIG1vZGlmaWVkIGNvbnN0cnVjdG9yXG5cblxuICB2YXIgY3RvciA9IG8uY29uc3RydWN0b3I7XG5cbiAgaWYgKHR5cGVvZiBjdG9yID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9IC8vIElmIGhhcyBtb2RpZmllZCBwcm90b3R5cGVcblxuXG4gIHZhciBwcm90ID0gY3Rvci5wcm90b3R5cGU7XG5cbiAgaWYgKCFoYXNPYmplY3RQcm90b3R5cGUocHJvdCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0gLy8gSWYgY29uc3RydWN0b3IgZG9lcyBub3QgaGF2ZSBhbiBPYmplY3Qtc3BlY2lmaWMgbWV0aG9kXG5cblxuICBpZiAoIXByb3QuaGFzT3duUHJvcGVydHkoJ2lzUHJvdG90eXBlT2YnKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSAvLyBNb3N0IGxpa2VseSBhIHBsYWluIE9iamVjdFxuXG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIGhhc09iamVjdFByb3RvdHlwZShvKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykgPT09ICdbb2JqZWN0IE9iamVjdF0nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNRdWVyeUtleSh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyB8fCBBcnJheS5pc0FycmF5KHZhbHVlKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc0Vycm9yKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIEVycm9yO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNsZWVwKHRpbWVvdXQpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgc2V0VGltZW91dChyZXNvbHZlLCB0aW1lb3V0KTtcbiAgfSk7XG59XG4vKipcbiAqIFNjaGVkdWxlcyBhIG1pY3JvdGFzay5cbiAqIFRoaXMgY2FuIGJlIHVzZWZ1bCB0byBzY2hlZHVsZSBzdGF0ZSB1cGRhdGVzIGFmdGVyIHJlbmRlcmluZy5cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gc2NoZWR1bGVNaWNyb3Rhc2soY2FsbGJhY2spIHtcbiAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbihjYWxsYmFjaykuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfSk7XG4gIH0pO1xufSIsImV4cG9ydCAqIGZyb20gJy4vY29yZSc7XG5leHBvcnQgKiBmcm9tICcuL3JlYWN0JzsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xudmFyIGRlZmF1bHRDb250ZXh0ID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUNvbnRleHQodW5kZWZpbmVkKTtcbnZhciBRdWVyeUNsaWVudFNoYXJpbmdDb250ZXh0ID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUNvbnRleHQoZmFsc2UpOyAvLyBpZiBjb250ZXh0U2hhcmluZyBpcyBvbiwgd2Ugc2hhcmUgdGhlIGZpcnN0IGFuZCBhdCBsZWFzdCBvbmVcbi8vIGluc3RhbmNlIG9mIHRoZSBjb250ZXh0IGFjcm9zcyB0aGUgd2luZG93XG4vLyB0byBlbnN1cmUgdGhhdCBpZiBSZWFjdCBRdWVyeSBpcyB1c2VkIGFjcm9zc1xuLy8gZGlmZmVyZW50IGJ1bmRsZXMgb3IgbWljcm9mcm9udGVuZHMgdGhleSB3aWxsXG4vLyBhbGwgdXNlIHRoZSBzYW1lICoqaW5zdGFuY2UqKiBvZiBjb250ZXh0LCByZWdhcmRsZXNzXG4vLyBvZiBtb2R1bGUgc2NvcGluZy5cblxuZnVuY3Rpb24gZ2V0UXVlcnlDbGllbnRDb250ZXh0KGNvbnRleHRTaGFyaW5nKSB7XG4gIGlmIChjb250ZXh0U2hhcmluZyAmJiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgIGlmICghd2luZG93LlJlYWN0UXVlcnlDbGllbnRDb250ZXh0KSB7XG4gICAgICB3aW5kb3cuUmVhY3RRdWVyeUNsaWVudENvbnRleHQgPSBkZWZhdWx0Q29udGV4dDtcbiAgICB9XG5cbiAgICByZXR1cm4gd2luZG93LlJlYWN0UXVlcnlDbGllbnRDb250ZXh0O1xuICB9XG5cbiAgcmV0dXJuIGRlZmF1bHRDb250ZXh0O1xufVxuXG5leHBvcnQgdmFyIHVzZVF1ZXJ5Q2xpZW50ID0gZnVuY3Rpb24gdXNlUXVlcnlDbGllbnQoKSB7XG4gIHZhciBxdWVyeUNsaWVudCA9IFJlYWN0LnVzZUNvbnRleHQoZ2V0UXVlcnlDbGllbnRDb250ZXh0KFJlYWN0LnVzZUNvbnRleHQoUXVlcnlDbGllbnRTaGFyaW5nQ29udGV4dCkpKTtcblxuICBpZiAoIXF1ZXJ5Q2xpZW50KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdObyBRdWVyeUNsaWVudCBzZXQsIHVzZSBRdWVyeUNsaWVudFByb3ZpZGVyIHRvIHNldCBvbmUnKTtcbiAgfVxuXG4gIHJldHVybiBxdWVyeUNsaWVudDtcbn07XG5leHBvcnQgdmFyIFF1ZXJ5Q2xpZW50UHJvdmlkZXIgPSBmdW5jdGlvbiBRdWVyeUNsaWVudFByb3ZpZGVyKF9yZWYpIHtcbiAgdmFyIGNsaWVudCA9IF9yZWYuY2xpZW50LFxuICAgICAgX3JlZiRjb250ZXh0U2hhcmluZyA9IF9yZWYuY29udGV4dFNoYXJpbmcsXG4gICAgICBjb250ZXh0U2hhcmluZyA9IF9yZWYkY29udGV4dFNoYXJpbmcgPT09IHZvaWQgMCA/IGZhbHNlIDogX3JlZiRjb250ZXh0U2hhcmluZyxcbiAgICAgIGNoaWxkcmVuID0gX3JlZi5jaGlsZHJlbjtcbiAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBjbGllbnQubW91bnQoKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgY2xpZW50LnVubW91bnQoKTtcbiAgICB9O1xuICB9LCBbY2xpZW50XSk7XG4gIHZhciBDb250ZXh0ID0gZ2V0UXVlcnlDbGllbnRDb250ZXh0KGNvbnRleHRTaGFyaW5nKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFF1ZXJ5Q2xpZW50U2hhcmluZ0NvbnRleHQuUHJvdmlkZXIsIHtcbiAgICB2YWx1ZTogY29udGV4dFNoYXJpbmdcbiAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQ29udGV4dC5Qcm92aWRlciwge1xuICAgIHZhbHVlOiBjbGllbnRcbiAgfSwgY2hpbGRyZW4pKTtcbn07IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JzsgLy8gQ09OVEVYVFxuXG5mdW5jdGlvbiBjcmVhdGVWYWx1ZSgpIHtcbiAgdmFyIF9pc1Jlc2V0ID0gZmFsc2U7XG4gIHJldHVybiB7XG4gICAgY2xlYXJSZXNldDogZnVuY3Rpb24gY2xlYXJSZXNldCgpIHtcbiAgICAgIF9pc1Jlc2V0ID0gZmFsc2U7XG4gICAgfSxcbiAgICByZXNldDogZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgICBfaXNSZXNldCA9IHRydWU7XG4gICAgfSxcbiAgICBpc1Jlc2V0OiBmdW5jdGlvbiBpc1Jlc2V0KCkge1xuICAgICAgcmV0dXJuIF9pc1Jlc2V0O1xuICAgIH1cbiAgfTtcbn1cblxudmFyIFF1ZXJ5RXJyb3JSZXNldEJvdW5kYXJ5Q29udGV4dCA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVDb250ZXh0KGNyZWF0ZVZhbHVlKCkpOyAvLyBIT09LXG5cbmV4cG9ydCB2YXIgdXNlUXVlcnlFcnJvclJlc2V0Qm91bmRhcnkgPSBmdW5jdGlvbiB1c2VRdWVyeUVycm9yUmVzZXRCb3VuZGFyeSgpIHtcbiAgcmV0dXJuIFJlYWN0LnVzZUNvbnRleHQoUXVlcnlFcnJvclJlc2V0Qm91bmRhcnlDb250ZXh0KTtcbn07IC8vIENPTVBPTkVOVFxuXG5leHBvcnQgdmFyIFF1ZXJ5RXJyb3JSZXNldEJvdW5kYXJ5ID0gZnVuY3Rpb24gUXVlcnlFcnJvclJlc2V0Qm91bmRhcnkoX3JlZikge1xuICB2YXIgY2hpbGRyZW4gPSBfcmVmLmNoaWxkcmVuO1xuICB2YXIgdmFsdWUgPSBSZWFjdC51c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gY3JlYXRlVmFsdWUoKTtcbiAgfSwgW10pO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUXVlcnlFcnJvclJlc2V0Qm91bmRhcnlDb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgdmFsdWU6IHZhbHVlXG4gIH0sIHR5cGVvZiBjaGlsZHJlbiA9PT0gJ2Z1bmN0aW9uJyA/IGNoaWxkcmVuKHZhbHVlKSA6IGNoaWxkcmVuKTtcbn07IiwiLy8gU2lkZSBlZmZlY3RzXG5pbXBvcnQgJy4vc2V0QmF0Y2hVcGRhdGVzRm4nO1xuaW1wb3J0ICcuL3NldExvZ2dlcic7XG5leHBvcnQgeyBRdWVyeUNsaWVudFByb3ZpZGVyLCB1c2VRdWVyeUNsaWVudCB9IGZyb20gJy4vUXVlcnlDbGllbnRQcm92aWRlcic7XG5leHBvcnQgeyBRdWVyeUVycm9yUmVzZXRCb3VuZGFyeSwgdXNlUXVlcnlFcnJvclJlc2V0Qm91bmRhcnkgfSBmcm9tICcuL1F1ZXJ5RXJyb3JSZXNldEJvdW5kYXJ5JztcbmV4cG9ydCB7IHVzZUlzRmV0Y2hpbmcgfSBmcm9tICcuL3VzZUlzRmV0Y2hpbmcnO1xuZXhwb3J0IHsgdXNlSXNNdXRhdGluZyB9IGZyb20gJy4vdXNlSXNNdXRhdGluZyc7XG5leHBvcnQgeyB1c2VNdXRhdGlvbiB9IGZyb20gJy4vdXNlTXV0YXRpb24nO1xuZXhwb3J0IHsgdXNlUXVlcnkgfSBmcm9tICcuL3VzZVF1ZXJ5JztcbmV4cG9ydCB7IHVzZVF1ZXJpZXMgfSBmcm9tICcuL3VzZVF1ZXJpZXMnO1xuZXhwb3J0IHsgdXNlSW5maW5pdGVRdWVyeSB9IGZyb20gJy4vdXNlSW5maW5pdGVRdWVyeSc7IC8vIFR5cGVzXG5cbmV4cG9ydCAqIGZyb20gJy4vdHlwZXMnOyIsImV4cG9ydCB2YXIgbG9nZ2VyID0gY29uc29sZTsiLCJpbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmV4cG9ydCB2YXIgdW5zdGFibGVfYmF0Y2hlZFVwZGF0ZXMgPSBSZWFjdERPTS51bnN0YWJsZV9iYXRjaGVkVXBkYXRlczsiLCJpbXBvcnQgeyBub3RpZnlNYW5hZ2VyIH0gZnJvbSAnLi4vY29yZSc7XG5pbXBvcnQgeyB1bnN0YWJsZV9iYXRjaGVkVXBkYXRlcyB9IGZyb20gJy4vcmVhY3RCYXRjaGVkVXBkYXRlcyc7XG5ub3RpZnlNYW5hZ2VyLnNldEJhdGNoTm90aWZ5RnVuY3Rpb24odW5zdGFibGVfYmF0Y2hlZFVwZGF0ZXMpOyIsImltcG9ydCB7IHNldExvZ2dlciB9IGZyb20gJy4uL2NvcmUnO1xuaW1wb3J0IHsgbG9nZ2VyIH0gZnJvbSAnLi9sb2dnZXInO1xuXG5pZiAobG9nZ2VyKSB7XG4gIHNldExvZ2dlcihsb2dnZXIpO1xufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBub3RpZnlNYW5hZ2VyIH0gZnJvbSAnLi4vY29yZS9ub3RpZnlNYW5hZ2VyJztcbmltcG9ydCB7IHVzZVF1ZXJ5RXJyb3JSZXNldEJvdW5kYXJ5IH0gZnJvbSAnLi9RdWVyeUVycm9yUmVzZXRCb3VuZGFyeSc7XG5pbXBvcnQgeyB1c2VRdWVyeUNsaWVudCB9IGZyb20gJy4vUXVlcnlDbGllbnRQcm92aWRlcic7XG5leHBvcnQgZnVuY3Rpb24gdXNlQmFzZVF1ZXJ5KG9wdGlvbnMsIE9ic2VydmVyKSB7XG4gIHZhciBtb3VudGVkUmVmID0gUmVhY3QudXNlUmVmKGZhbHNlKTtcblxuICB2YXIgX1JlYWN0JHVzZVN0YXRlID0gUmVhY3QudXNlU3RhdGUoMCksXG4gICAgICBmb3JjZVVwZGF0ZSA9IF9SZWFjdCR1c2VTdGF0ZVsxXTtcblxuICB2YXIgcXVlcnlDbGllbnQgPSB1c2VRdWVyeUNsaWVudCgpO1xuICB2YXIgZXJyb3JSZXNldEJvdW5kYXJ5ID0gdXNlUXVlcnlFcnJvclJlc2V0Qm91bmRhcnkoKTtcbiAgdmFyIGRlZmF1bHRlZE9wdGlvbnMgPSBxdWVyeUNsaWVudC5kZWZhdWx0UXVlcnlPYnNlcnZlck9wdGlvbnMob3B0aW9ucyk7IC8vIE1ha2Ugc3VyZSByZXN1bHRzIGFyZSBvcHRpbWlzdGljYWxseSBzZXQgaW4gZmV0Y2hpbmcgc3RhdGUgYmVmb3JlIHN1YnNjcmliaW5nIG9yIHVwZGF0aW5nIG9wdGlvbnNcblxuICBkZWZhdWx0ZWRPcHRpb25zLm9wdGltaXN0aWNSZXN1bHRzID0gdHJ1ZTsgLy8gSW5jbHVkZSBjYWxsYmFja3MgaW4gYmF0Y2ggcmVuZGVyc1xuXG4gIGlmIChkZWZhdWx0ZWRPcHRpb25zLm9uRXJyb3IpIHtcbiAgICBkZWZhdWx0ZWRPcHRpb25zLm9uRXJyb3IgPSBub3RpZnlNYW5hZ2VyLmJhdGNoQ2FsbHMoZGVmYXVsdGVkT3B0aW9ucy5vbkVycm9yKTtcbiAgfVxuXG4gIGlmIChkZWZhdWx0ZWRPcHRpb25zLm9uU3VjY2Vzcykge1xuICAgIGRlZmF1bHRlZE9wdGlvbnMub25TdWNjZXNzID0gbm90aWZ5TWFuYWdlci5iYXRjaENhbGxzKGRlZmF1bHRlZE9wdGlvbnMub25TdWNjZXNzKTtcbiAgfVxuXG4gIGlmIChkZWZhdWx0ZWRPcHRpb25zLm9uU2V0dGxlZCkge1xuICAgIGRlZmF1bHRlZE9wdGlvbnMub25TZXR0bGVkID0gbm90aWZ5TWFuYWdlci5iYXRjaENhbGxzKGRlZmF1bHRlZE9wdGlvbnMub25TZXR0bGVkKTtcbiAgfVxuXG4gIGlmIChkZWZhdWx0ZWRPcHRpb25zLnN1c3BlbnNlKSB7XG4gICAgLy8gQWx3YXlzIHNldCBzdGFsZSB0aW1lIHdoZW4gdXNpbmcgc3VzcGVuc2UgdG8gcHJldmVudFxuICAgIC8vIGZldGNoaW5nIGFnYWluIHdoZW4gZGlyZWN0bHkgbW91bnRpbmcgYWZ0ZXIgc3VzcGVuZGluZ1xuICAgIGlmICh0eXBlb2YgZGVmYXVsdGVkT3B0aW9ucy5zdGFsZVRpbWUgIT09ICdudW1iZXInKSB7XG4gICAgICBkZWZhdWx0ZWRPcHRpb25zLnN0YWxlVGltZSA9IDEwMDA7XG4gICAgfVxuICB9XG5cbiAgaWYgKGRlZmF1bHRlZE9wdGlvbnMuc3VzcGVuc2UgfHwgZGVmYXVsdGVkT3B0aW9ucy51c2VFcnJvckJvdW5kYXJ5KSB7XG4gICAgLy8gUHJldmVudCByZXRyeWluZyBmYWlsZWQgcXVlcnkgaWYgdGhlIGVycm9yIGJvdW5kYXJ5IGhhcyBub3QgYmVlbiByZXNldCB5ZXRcbiAgICBpZiAoIWVycm9yUmVzZXRCb3VuZGFyeS5pc1Jlc2V0KCkpIHtcbiAgICAgIGRlZmF1bHRlZE9wdGlvbnMucmV0cnlPbk1vdW50ID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgdmFyIF9SZWFjdCR1c2VTdGF0ZTIgPSBSZWFjdC51c2VTdGF0ZShmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZlcihxdWVyeUNsaWVudCwgZGVmYXVsdGVkT3B0aW9ucyk7XG4gIH0pLFxuICAgICAgb2JzZXJ2ZXIgPSBfUmVhY3QkdXNlU3RhdGUyWzBdO1xuXG4gIHZhciByZXN1bHQgPSBvYnNlcnZlci5nZXRPcHRpbWlzdGljUmVzdWx0KGRlZmF1bHRlZE9wdGlvbnMpO1xuICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIG1vdW50ZWRSZWYuY3VycmVudCA9IHRydWU7XG4gICAgZXJyb3JSZXNldEJvdW5kYXJ5LmNsZWFyUmVzZXQoKTtcbiAgICB2YXIgdW5zdWJzY3JpYmUgPSBvYnNlcnZlci5zdWJzY3JpYmUobm90aWZ5TWFuYWdlci5iYXRjaENhbGxzKGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChtb3VudGVkUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgZm9yY2VVcGRhdGUoZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgICByZXR1cm4geCArIDE7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pKTsgLy8gVXBkYXRlIHJlc3VsdCB0byBtYWtlIHN1cmUgd2UgZGlkIG5vdCBtaXNzIGFueSBxdWVyeSB1cGRhdGVzXG4gICAgLy8gYmV0d2VlbiBjcmVhdGluZyB0aGUgb2JzZXJ2ZXIgYW5kIHN1YnNjcmliaW5nIHRvIGl0LlxuXG4gICAgb2JzZXJ2ZXIudXBkYXRlUmVzdWx0KCk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIG1vdW50ZWRSZWYuY3VycmVudCA9IGZhbHNlO1xuICAgICAgdW5zdWJzY3JpYmUoKTtcbiAgICB9O1xuICB9LCBbZXJyb3JSZXNldEJvdW5kYXJ5LCBvYnNlcnZlcl0pO1xuICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIC8vIERvIG5vdCBub3RpZnkgb24gdXBkYXRlcyBiZWNhdXNlIG9mIGNoYW5nZXMgaW4gdGhlIG9wdGlvbnMgYmVjYXVzZVxuICAgIC8vIHRoZXNlIGNoYW5nZXMgc2hvdWxkIGFscmVhZHkgYmUgcmVmbGVjdGVkIGluIHRoZSBvcHRpbWlzdGljIHJlc3VsdC5cbiAgICBvYnNlcnZlci5zZXRPcHRpb25zKGRlZmF1bHRlZE9wdGlvbnMsIHtcbiAgICAgIGxpc3RlbmVyczogZmFsc2VcbiAgICB9KTtcbiAgfSwgW2RlZmF1bHRlZE9wdGlvbnMsIG9ic2VydmVyXSk7IC8vIEhhbmRsZSBzdXNwZW5zZVxuXG4gIGlmIChkZWZhdWx0ZWRPcHRpb25zLnN1c3BlbnNlICYmIHJlc3VsdC5pc0xvYWRpbmcpIHtcbiAgICB0aHJvdyBvYnNlcnZlci5mZXRjaE9wdGltaXN0aWMoZGVmYXVsdGVkT3B0aW9ucykudGhlbihmdW5jdGlvbiAoX3JlZikge1xuICAgICAgdmFyIGRhdGEgPSBfcmVmLmRhdGE7XG4gICAgICBkZWZhdWx0ZWRPcHRpb25zLm9uU3VjY2VzcyA9PSBudWxsID8gdm9pZCAwIDogZGVmYXVsdGVkT3B0aW9ucy5vblN1Y2Nlc3MoZGF0YSk7XG4gICAgICBkZWZhdWx0ZWRPcHRpb25zLm9uU2V0dGxlZCA9PSBudWxsID8gdm9pZCAwIDogZGVmYXVsdGVkT3B0aW9ucy5vblNldHRsZWQoZGF0YSwgbnVsbCk7XG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICBlcnJvclJlc2V0Qm91bmRhcnkuY2xlYXJSZXNldCgpO1xuICAgICAgZGVmYXVsdGVkT3B0aW9ucy5vbkVycm9yID09IG51bGwgPyB2b2lkIDAgOiBkZWZhdWx0ZWRPcHRpb25zLm9uRXJyb3IoZXJyb3IpO1xuICAgICAgZGVmYXVsdGVkT3B0aW9ucy5vblNldHRsZWQgPT0gbnVsbCA/IHZvaWQgMCA6IGRlZmF1bHRlZE9wdGlvbnMub25TZXR0bGVkKHVuZGVmaW5lZCwgZXJyb3IpO1xuICAgIH0pO1xuICB9IC8vIEhhbmRsZSBlcnJvciBib3VuZGFyeVxuXG5cbiAgaWYgKChkZWZhdWx0ZWRPcHRpb25zLnN1c3BlbnNlIHx8IGRlZmF1bHRlZE9wdGlvbnMudXNlRXJyb3JCb3VuZGFyeSkgJiYgcmVzdWx0LmlzRXJyb3IgJiYgIXJlc3VsdC5pc0ZldGNoaW5nKSB7XG4gICAgdGhyb3cgcmVzdWx0LmVycm9yO1xuICB9IC8vIEhhbmRsZSByZXN1bHQgcHJvcGVydHkgdXNhZ2UgdHJhY2tpbmdcblxuXG4gIGlmIChkZWZhdWx0ZWRPcHRpb25zLm5vdGlmeU9uQ2hhbmdlUHJvcHMgPT09ICd0cmFja2VkJykge1xuICAgIHJlc3VsdCA9IG9ic2VydmVyLnRyYWNrUmVzdWx0KHJlc3VsdCk7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufSIsImltcG9ydCB7IEluZmluaXRlUXVlcnlPYnNlcnZlciB9IGZyb20gJy4uL2NvcmUvaW5maW5pdGVRdWVyeU9ic2VydmVyJztcbmltcG9ydCB7IHBhcnNlUXVlcnlBcmdzIH0gZnJvbSAnLi4vY29yZS91dGlscyc7XG5pbXBvcnQgeyB1c2VCYXNlUXVlcnkgfSBmcm9tICcuL3VzZUJhc2VRdWVyeSc7IC8vIEhPT0tcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUluZmluaXRlUXVlcnkoYXJnMSwgYXJnMiwgYXJnMykge1xuICB2YXIgb3B0aW9ucyA9IHBhcnNlUXVlcnlBcmdzKGFyZzEsIGFyZzIsIGFyZzMpO1xuICByZXR1cm4gdXNlQmFzZVF1ZXJ5KG9wdGlvbnMsIEluZmluaXRlUXVlcnlPYnNlcnZlcik7XG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG5vdGlmeU1hbmFnZXIgfSBmcm9tICcuLi9jb3JlL25vdGlmeU1hbmFnZXInO1xuaW1wb3J0IHsgcGFyc2VGaWx0ZXJBcmdzIH0gZnJvbSAnLi4vY29yZS91dGlscyc7XG5pbXBvcnQgeyB1c2VRdWVyeUNsaWVudCB9IGZyb20gJy4vUXVlcnlDbGllbnRQcm92aWRlcic7XG5leHBvcnQgZnVuY3Rpb24gdXNlSXNGZXRjaGluZyhhcmcxLCBhcmcyKSB7XG4gIHZhciBtb3VudGVkUmVmID0gUmVhY3QudXNlUmVmKGZhbHNlKTtcbiAgdmFyIHF1ZXJ5Q2xpZW50ID0gdXNlUXVlcnlDbGllbnQoKTtcblxuICB2YXIgX3BhcnNlRmlsdGVyQXJncyA9IHBhcnNlRmlsdGVyQXJncyhhcmcxLCBhcmcyKSxcbiAgICAgIGZpbHRlcnMgPSBfcGFyc2VGaWx0ZXJBcmdzWzBdO1xuXG4gIHZhciBfUmVhY3QkdXNlU3RhdGUgPSBSZWFjdC51c2VTdGF0ZShxdWVyeUNsaWVudC5pc0ZldGNoaW5nKGZpbHRlcnMpKSxcbiAgICAgIGlzRmV0Y2hpbmcgPSBfUmVhY3QkdXNlU3RhdGVbMF0sXG4gICAgICBzZXRJc0ZldGNoaW5nID0gX1JlYWN0JHVzZVN0YXRlWzFdO1xuXG4gIHZhciBmaWx0ZXJzUmVmID0gUmVhY3QudXNlUmVmKGZpbHRlcnMpO1xuICBmaWx0ZXJzUmVmLmN1cnJlbnQgPSBmaWx0ZXJzO1xuICB2YXIgaXNGZXRjaGluZ1JlZiA9IFJlYWN0LnVzZVJlZihpc0ZldGNoaW5nKTtcbiAgaXNGZXRjaGluZ1JlZi5jdXJyZW50ID0gaXNGZXRjaGluZztcbiAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBtb3VudGVkUmVmLmN1cnJlbnQgPSB0cnVlO1xuICAgIHZhciB1bnN1YnNjcmliZSA9IHF1ZXJ5Q2xpZW50LmdldFF1ZXJ5Q2FjaGUoKS5zdWJzY3JpYmUobm90aWZ5TWFuYWdlci5iYXRjaENhbGxzKGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChtb3VudGVkUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgdmFyIG5ld0lzRmV0Y2hpbmcgPSBxdWVyeUNsaWVudC5pc0ZldGNoaW5nKGZpbHRlcnNSZWYuY3VycmVudCk7XG5cbiAgICAgICAgaWYgKGlzRmV0Y2hpbmdSZWYuY3VycmVudCAhPT0gbmV3SXNGZXRjaGluZykge1xuICAgICAgICAgIHNldElzRmV0Y2hpbmcobmV3SXNGZXRjaGluZyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIG1vdW50ZWRSZWYuY3VycmVudCA9IGZhbHNlO1xuICAgICAgdW5zdWJzY3JpYmUoKTtcbiAgICB9O1xuICB9LCBbcXVlcnlDbGllbnRdKTtcbiAgcmV0dXJuIGlzRmV0Y2hpbmc7XG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG5vdGlmeU1hbmFnZXIgfSBmcm9tICcuLi9jb3JlL25vdGlmeU1hbmFnZXInO1xuaW1wb3J0IHsgdXNlUXVlcnlDbGllbnQgfSBmcm9tICcuL1F1ZXJ5Q2xpZW50UHJvdmlkZXInO1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUlzTXV0YXRpbmcoZmlsdGVycykge1xuICB2YXIgbW91bnRlZFJlZiA9IFJlYWN0LnVzZVJlZihmYWxzZSk7XG4gIHZhciBxdWVyeUNsaWVudCA9IHVzZVF1ZXJ5Q2xpZW50KCk7XG5cbiAgdmFyIF9SZWFjdCR1c2VTdGF0ZSA9IFJlYWN0LnVzZVN0YXRlKHF1ZXJ5Q2xpZW50LmlzTXV0YXRpbmcoZmlsdGVycykpLFxuICAgICAgaXNNdXRhdGluZyA9IF9SZWFjdCR1c2VTdGF0ZVswXSxcbiAgICAgIHNldElzTXV0YXRpbmcgPSBfUmVhY3QkdXNlU3RhdGVbMV07XG5cbiAgdmFyIGZpbHRlcnNSZWYgPSBSZWFjdC51c2VSZWYoZmlsdGVycyk7XG4gIGZpbHRlcnNSZWYuY3VycmVudCA9IGZpbHRlcnM7XG4gIHZhciBpc011dGF0aW5nUmVmID0gUmVhY3QudXNlUmVmKGlzTXV0YXRpbmcpO1xuICBpc011dGF0aW5nUmVmLmN1cnJlbnQgPSBpc011dGF0aW5nO1xuICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIG1vdW50ZWRSZWYuY3VycmVudCA9IHRydWU7XG4gICAgdmFyIHVuc3Vic2NyaWJlID0gcXVlcnlDbGllbnQuZ2V0TXV0YXRpb25DYWNoZSgpLnN1YnNjcmliZShub3RpZnlNYW5hZ2VyLmJhdGNoQ2FsbHMoZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKG1vdW50ZWRSZWYuY3VycmVudCkge1xuICAgICAgICB2YXIgbmV3SXNNdXRhdGluZyA9IHF1ZXJ5Q2xpZW50LmlzTXV0YXRpbmcoZmlsdGVyc1JlZi5jdXJyZW50KTtcblxuICAgICAgICBpZiAoaXNNdXRhdGluZ1JlZi5jdXJyZW50ICE9PSBuZXdJc011dGF0aW5nKSB7XG4gICAgICAgICAgc2V0SXNNdXRhdGluZyhuZXdJc011dGF0aW5nKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgbW91bnRlZFJlZi5jdXJyZW50ID0gZmFsc2U7XG4gICAgICB1bnN1YnNjcmliZSgpO1xuICAgIH07XG4gIH0sIFtxdWVyeUNsaWVudF0pO1xuICByZXR1cm4gaXNNdXRhdGluZztcbn0iLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBub3RpZnlNYW5hZ2VyIH0gZnJvbSAnLi4vY29yZS9ub3RpZnlNYW5hZ2VyJztcbmltcG9ydCB7IG5vb3AsIHBhcnNlTXV0YXRpb25BcmdzIH0gZnJvbSAnLi4vY29yZS91dGlscyc7XG5pbXBvcnQgeyBNdXRhdGlvbk9ic2VydmVyIH0gZnJvbSAnLi4vY29yZS9tdXRhdGlvbk9ic2VydmVyJztcbmltcG9ydCB7IHVzZVF1ZXJ5Q2xpZW50IH0gZnJvbSAnLi9RdWVyeUNsaWVudFByb3ZpZGVyJztcbmV4cG9ydCBmdW5jdGlvbiB1c2VNdXRhdGlvbihhcmcxLCBhcmcyLCBhcmczKSB7XG4gIHZhciBtb3VudGVkUmVmID0gUmVhY3QudXNlUmVmKGZhbHNlKTtcblxuICB2YXIgX1JlYWN0JHVzZVN0YXRlID0gUmVhY3QudXNlU3RhdGUoMCksXG4gICAgICBmb3JjZVVwZGF0ZSA9IF9SZWFjdCR1c2VTdGF0ZVsxXTtcblxuICB2YXIgb3B0aW9ucyA9IHBhcnNlTXV0YXRpb25BcmdzKGFyZzEsIGFyZzIsIGFyZzMpO1xuICB2YXIgcXVlcnlDbGllbnQgPSB1c2VRdWVyeUNsaWVudCgpO1xuICB2YXIgb2JzUmVmID0gUmVhY3QudXNlUmVmKCk7XG5cbiAgaWYgKCFvYnNSZWYuY3VycmVudCkge1xuICAgIG9ic1JlZi5jdXJyZW50ID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIocXVlcnlDbGllbnQsIG9wdGlvbnMpO1xuICB9IGVsc2Uge1xuICAgIG9ic1JlZi5jdXJyZW50LnNldE9wdGlvbnMob3B0aW9ucyk7XG4gIH1cblxuICB2YXIgY3VycmVudFJlc3VsdCA9IG9ic1JlZi5jdXJyZW50LmdldEN1cnJlbnRSZXN1bHQoKTtcbiAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBtb3VudGVkUmVmLmN1cnJlbnQgPSB0cnVlO1xuICAgIHZhciB1bnN1YnNjcmliZSA9IG9ic1JlZi5jdXJyZW50LnN1YnNjcmliZShub3RpZnlNYW5hZ2VyLmJhdGNoQ2FsbHMoZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKG1vdW50ZWRSZWYuY3VycmVudCkge1xuICAgICAgICBmb3JjZVVwZGF0ZShmdW5jdGlvbiAoeCkge1xuICAgICAgICAgIHJldHVybiB4ICsgMTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSkpO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBtb3VudGVkUmVmLmN1cnJlbnQgPSBmYWxzZTtcbiAgICAgIHVuc3Vic2NyaWJlKCk7XG4gICAgfTtcbiAgfSwgW10pO1xuICB2YXIgbXV0YXRlID0gUmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gKHZhcmlhYmxlcywgbXV0YXRlT3B0aW9ucykge1xuICAgIG9ic1JlZi5jdXJyZW50Lm11dGF0ZSh2YXJpYWJsZXMsIG11dGF0ZU9wdGlvbnMpLmNhdGNoKG5vb3ApO1xuICB9LCBbXSk7XG5cbiAgaWYgKGN1cnJlbnRSZXN1bHQuZXJyb3IgJiYgb2JzUmVmLmN1cnJlbnQub3B0aW9ucy51c2VFcnJvckJvdW5kYXJ5KSB7XG4gICAgdGhyb3cgY3VycmVudFJlc3VsdC5lcnJvcjtcbiAgfVxuXG4gIHJldHVybiBfZXh0ZW5kcyh7fSwgY3VycmVudFJlc3VsdCwge1xuICAgIG11dGF0ZTogbXV0YXRlLFxuICAgIG11dGF0ZUFzeW5jOiBjdXJyZW50UmVzdWx0Lm11dGF0ZVxuICB9KTtcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbm90aWZ5TWFuYWdlciB9IGZyb20gJy4uL2NvcmUvbm90aWZ5TWFuYWdlcic7XG5pbXBvcnQgeyBRdWVyaWVzT2JzZXJ2ZXIgfSBmcm9tICcuLi9jb3JlL3F1ZXJpZXNPYnNlcnZlcic7XG5pbXBvcnQgeyB1c2VRdWVyeUNsaWVudCB9IGZyb20gJy4vUXVlcnlDbGllbnRQcm92aWRlcic7XG5leHBvcnQgZnVuY3Rpb24gdXNlUXVlcmllcyhxdWVyaWVzKSB7XG4gIHZhciBtb3VudGVkUmVmID0gUmVhY3QudXNlUmVmKGZhbHNlKTtcblxuICB2YXIgX1JlYWN0JHVzZVN0YXRlID0gUmVhY3QudXNlU3RhdGUoMCksXG4gICAgICBmb3JjZVVwZGF0ZSA9IF9SZWFjdCR1c2VTdGF0ZVsxXTtcblxuICB2YXIgcXVlcnlDbGllbnQgPSB1c2VRdWVyeUNsaWVudCgpO1xuICB2YXIgZGVmYXVsdGVkUXVlcmllcyA9IHF1ZXJpZXMubWFwKGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgdmFyIGRlZmF1bHRlZE9wdGlvbnMgPSBxdWVyeUNsaWVudC5kZWZhdWx0UXVlcnlPYnNlcnZlck9wdGlvbnMob3B0aW9ucyk7IC8vIE1ha2Ugc3VyZSB0aGUgcmVzdWx0cyBhcmUgYWxyZWFkeSBpbiBmZXRjaGluZyBzdGF0ZSBiZWZvcmUgc3Vic2NyaWJpbmcgb3IgdXBkYXRpbmcgb3B0aW9uc1xuXG4gICAgZGVmYXVsdGVkT3B0aW9ucy5vcHRpbWlzdGljUmVzdWx0cyA9IHRydWU7XG4gICAgcmV0dXJuIGRlZmF1bHRlZE9wdGlvbnM7XG4gIH0pO1xuXG4gIHZhciBfUmVhY3QkdXNlU3RhdGUyID0gUmVhY3QudXNlU3RhdGUoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBuZXcgUXVlcmllc09ic2VydmVyKHF1ZXJ5Q2xpZW50LCBkZWZhdWx0ZWRRdWVyaWVzKTtcbiAgfSksXG4gICAgICBvYnNlcnZlciA9IF9SZWFjdCR1c2VTdGF0ZTJbMF07XG5cbiAgdmFyIHJlc3VsdCA9IG9ic2VydmVyLmdldE9wdGltaXN0aWNSZXN1bHQoZGVmYXVsdGVkUXVlcmllcyk7XG4gIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgbW91bnRlZFJlZi5jdXJyZW50ID0gdHJ1ZTtcbiAgICB2YXIgdW5zdWJzY3JpYmUgPSBvYnNlcnZlci5zdWJzY3JpYmUobm90aWZ5TWFuYWdlci5iYXRjaENhbGxzKGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChtb3VudGVkUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgZm9yY2VVcGRhdGUoZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgICByZXR1cm4geCArIDE7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgbW91bnRlZFJlZi5jdXJyZW50ID0gZmFsc2U7XG4gICAgICB1bnN1YnNjcmliZSgpO1xuICAgIH07XG4gIH0sIFtvYnNlcnZlcl0pO1xuICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIC8vIERvIG5vdCBub3RpZnkgb24gdXBkYXRlcyBiZWNhdXNlIG9mIGNoYW5nZXMgaW4gdGhlIG9wdGlvbnMgYmVjYXVzZVxuICAgIC8vIHRoZXNlIGNoYW5nZXMgc2hvdWxkIGFscmVhZHkgYmUgcmVmbGVjdGVkIGluIHRoZSBvcHRpbWlzdGljIHJlc3VsdC5cbiAgICBvYnNlcnZlci5zZXRRdWVyaWVzKGRlZmF1bHRlZFF1ZXJpZXMsIHtcbiAgICAgIGxpc3RlbmVyczogZmFsc2VcbiAgICB9KTtcbiAgfSwgW2RlZmF1bHRlZFF1ZXJpZXMsIG9ic2VydmVyXSk7XG4gIHJldHVybiByZXN1bHQ7XG59IiwiaW1wb3J0IHsgUXVlcnlPYnNlcnZlciB9IGZyb20gJy4uL2NvcmUnO1xuaW1wb3J0IHsgcGFyc2VRdWVyeUFyZ3MgfSBmcm9tICcuLi9jb3JlL3V0aWxzJztcbmltcG9ydCB7IHVzZUJhc2VRdWVyeSB9IGZyb20gJy4vdXNlQmFzZVF1ZXJ5JzsgLy8gSE9PS1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlUXVlcnkoYXJnMSwgYXJnMiwgYXJnMykge1xuICB2YXIgcGFyc2VkT3B0aW9ucyA9IHBhcnNlUXVlcnlBcmdzKGFyZzEsIGFyZzIsIGFyZzMpO1xuICByZXR1cm4gdXNlQmFzZVF1ZXJ5KHBhcnNlZE9wdGlvbnMsIFF1ZXJ5T2JzZXJ2ZXIpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG5cbiAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59IiwiaW1wb3J0IHNldFByb3RvdHlwZU9mIGZyb20gXCIuL3NldFByb3RvdHlwZU9mLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfaW5oZXJpdHNMb29zZShzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MucHJvdG90eXBlKTtcbiAgc3ViQ2xhc3MucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gc3ViQ2xhc3M7XG4gIHNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgICBvLl9fcHJvdG9fXyA9IHA7XG4gICAgcmV0dXJuIG87XG4gIH07XG5cbiAgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTtcbn0iLCJpbXBvcnQgeyBTdHlsZVNoZWV0IH0gZnJvbSAnQGVtb3Rpb24vc2hlZXQnO1xuaW1wb3J0IHsgZGVhbGxvYywgYWxsb2MsIG5leHQsIHRva2VuLCBmcm9tLCBwZWVrLCBkZWxpbWl0LCBpZGVudGlmaWVyLCBwb3NpdGlvbiwgc3RyaW5naWZ5LCBDT01NRU5ULCBydWxlc2hlZXQsIG1pZGRsZXdhcmUsIHByZWZpeGVyLCBzZXJpYWxpemUsIGNvbXBpbGUgfSBmcm9tICdzdHlsaXMnO1xuaW1wb3J0ICdAZW1vdGlvbi93ZWFrLW1lbW9pemUnO1xuaW1wb3J0ICdAZW1vdGlvbi9tZW1vaXplJztcblxudmFyIGxhc3QgPSBmdW5jdGlvbiBsYXN0KGFycikge1xuICByZXR1cm4gYXJyLmxlbmd0aCA/IGFyclthcnIubGVuZ3RoIC0gMV0gOiBudWxsO1xufTtcblxudmFyIHRvUnVsZXMgPSBmdW5jdGlvbiB0b1J1bGVzKHBhcnNlZCwgcG9pbnRzKSB7XG4gIC8vIHByZXRlbmQgd2UndmUgc3RhcnRlZCB3aXRoIGEgY29tbWFcbiAgdmFyIGluZGV4ID0gLTE7XG4gIHZhciBjaGFyYWN0ZXIgPSA0NDtcblxuICBkbyB7XG4gICAgc3dpdGNoICh0b2tlbihjaGFyYWN0ZXIpKSB7XG4gICAgICBjYXNlIDA6XG4gICAgICAgIC8vICZcXGZcbiAgICAgICAgaWYgKGNoYXJhY3RlciA9PT0gMzggJiYgcGVlaygpID09PSAxMikge1xuICAgICAgICAgIC8vIHRoaXMgaXMgbm90IDEwMCUgY29ycmVjdCwgd2UgZG9uJ3QgYWNjb3VudCBmb3IgbGl0ZXJhbCBzZXF1ZW5jZXMgaGVyZSAtIGxpa2UgZm9yIGV4YW1wbGUgcXVvdGVkIHN0cmluZ3NcbiAgICAgICAgICAvLyBzdHlsaXMgaW5zZXJ0cyBcXGYgYWZ0ZXIgJiB0byBrbm93IHdoZW4gJiB3aGVyZSBpdCBzaG91bGQgcmVwbGFjZSB0aGlzIHNlcXVlbmNlIHdpdGggdGhlIGNvbnRleHQgc2VsZWN0b3JcbiAgICAgICAgICAvLyBhbmQgd2hlbiBpdCBzaG91bGQganVzdCBjb25jYXRlbmF0ZSB0aGUgb3V0ZXIgYW5kIGlubmVyIHNlbGVjdG9yc1xuICAgICAgICAgIC8vIGl0J3MgdmVyeSB1bmxpa2VseSBmb3IgdGhpcyBzZXF1ZW5jZSB0byBhY3R1YWxseSBhcHBlYXIgaW4gYSBkaWZmZXJlbnQgY29udGV4dCwgc28gd2UganVzdCBsZXZlcmFnZSB0aGlzIGZhY3QgaGVyZVxuICAgICAgICAgIHBvaW50c1tpbmRleF0gPSAxO1xuICAgICAgICB9XG5cbiAgICAgICAgcGFyc2VkW2luZGV4XSArPSBpZGVudGlmaWVyKHBvc2l0aW9uIC0gMSk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIDI6XG4gICAgICAgIHBhcnNlZFtpbmRleF0gKz0gZGVsaW1pdChjaGFyYWN0ZXIpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSA0OlxuICAgICAgICAvLyBjb21tYVxuICAgICAgICBpZiAoY2hhcmFjdGVyID09PSA0NCkge1xuICAgICAgICAgIC8vIGNvbG9uXG4gICAgICAgICAgcGFyc2VkWysraW5kZXhdID0gcGVlaygpID09PSA1OCA/ICcmXFxmJyA6ICcnO1xuICAgICAgICAgIHBvaW50c1tpbmRleF0gPSBwYXJzZWRbaW5kZXhdLmxlbmd0aDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAvLyBmYWxsdGhyb3VnaFxuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBwYXJzZWRbaW5kZXhdICs9IGZyb20oY2hhcmFjdGVyKTtcbiAgICB9XG4gIH0gd2hpbGUgKGNoYXJhY3RlciA9IG5leHQoKSk7XG5cbiAgcmV0dXJuIHBhcnNlZDtcbn07XG5cbnZhciBnZXRSdWxlcyA9IGZ1bmN0aW9uIGdldFJ1bGVzKHZhbHVlLCBwb2ludHMpIHtcbiAgcmV0dXJuIGRlYWxsb2ModG9SdWxlcyhhbGxvYyh2YWx1ZSksIHBvaW50cykpO1xufTsgLy8gV2Vha1NldCB3b3VsZCBiZSBtb3JlIGFwcHJvcHJpYXRlLCBidXQgb25seSBXZWFrTWFwIGlzIHN1cHBvcnRlZCBpbiBJRTExXG5cblxudmFyIGZpeGVkRWxlbWVudHMgPSAvKiAjX19QVVJFX18gKi9uZXcgV2Vha01hcCgpO1xudmFyIGNvbXBhdCA9IGZ1bmN0aW9uIGNvbXBhdChlbGVtZW50KSB7XG4gIGlmIChlbGVtZW50LnR5cGUgIT09ICdydWxlJyB8fCAhZWxlbWVudC5wYXJlbnQgfHwgLy8gLmxlbmd0aCBpbmRpY2F0ZXMgaWYgdGhpcyBydWxlIGNvbnRhaW5zIHBzZXVkbyBvciBub3RcbiAgIWVsZW1lbnQubGVuZ3RoKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIHZhbHVlID0gZWxlbWVudC52YWx1ZSxcbiAgICAgIHBhcmVudCA9IGVsZW1lbnQucGFyZW50O1xuICB2YXIgaXNJbXBsaWNpdFJ1bGUgPSBlbGVtZW50LmNvbHVtbiA9PT0gcGFyZW50LmNvbHVtbiAmJiBlbGVtZW50LmxpbmUgPT09IHBhcmVudC5saW5lO1xuXG4gIHdoaWxlIChwYXJlbnQudHlwZSAhPT0gJ3J1bGUnKSB7XG4gICAgcGFyZW50ID0gcGFyZW50LnBhcmVudDtcbiAgICBpZiAoIXBhcmVudCkgcmV0dXJuO1xuICB9IC8vIHNob3J0LWNpcmN1aXQgZm9yIHRoZSBzaW1wbGVzdCBjYXNlXG5cblxuICBpZiAoZWxlbWVudC5wcm9wcy5sZW5ndGggPT09IDEgJiYgdmFsdWUuY2hhckNvZGVBdCgwKSAhPT0gNThcbiAgLyogY29sb24gKi9cbiAgJiYgIWZpeGVkRWxlbWVudHMuZ2V0KHBhcmVudCkpIHtcbiAgICByZXR1cm47XG4gIH0gLy8gaWYgdGhpcyBpcyBhbiBpbXBsaWNpdGx5IGluc2VydGVkIHJ1bGUgKHRoZSBvbmUgZWFnZXJseSBpbnNlcnRlZCBhdCB0aGUgZWFjaCBuZXcgbmVzdGVkIGxldmVsKVxuICAvLyB0aGVuIHRoZSBwcm9wcyBoYXMgYWxyZWFkeSBiZWVuIG1hbmlwdWxhdGVkIGJlZm9yZWhhbmQgYXMgdGhleSB0aGF0IGFycmF5IGlzIHNoYXJlZCBiZXR3ZWVuIGl0IGFuZCBpdHMgXCJydWxlIHBhcmVudFwiXG5cblxuICBpZiAoaXNJbXBsaWNpdFJ1bGUpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBmaXhlZEVsZW1lbnRzLnNldChlbGVtZW50LCB0cnVlKTtcbiAgdmFyIHBvaW50cyA9IFtdO1xuICB2YXIgcnVsZXMgPSBnZXRSdWxlcyh2YWx1ZSwgcG9pbnRzKTtcbiAgdmFyIHBhcmVudFJ1bGVzID0gcGFyZW50LnByb3BzO1xuXG4gIGZvciAodmFyIGkgPSAwLCBrID0gMDsgaSA8IHJ1bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgZm9yICh2YXIgaiA9IDA7IGogPCBwYXJlbnRSdWxlcy5sZW5ndGg7IGorKywgaysrKSB7XG4gICAgICBlbGVtZW50LnByb3BzW2tdID0gcG9pbnRzW2ldID8gcnVsZXNbaV0ucmVwbGFjZSgvJlxcZi9nLCBwYXJlbnRSdWxlc1tqXSkgOiBwYXJlbnRSdWxlc1tqXSArIFwiIFwiICsgcnVsZXNbaV07XG4gICAgfVxuICB9XG59O1xudmFyIHJlbW92ZUxhYmVsID0gZnVuY3Rpb24gcmVtb3ZlTGFiZWwoZWxlbWVudCkge1xuICBpZiAoZWxlbWVudC50eXBlID09PSAnZGVjbCcpIHtcbiAgICB2YXIgdmFsdWUgPSBlbGVtZW50LnZhbHVlO1xuXG4gICAgaWYgKCAvLyBjaGFyY29kZSBmb3IgbFxuICAgIHZhbHVlLmNoYXJDb2RlQXQoMCkgPT09IDEwOCAmJiAvLyBjaGFyY29kZSBmb3IgYlxuICAgIHZhbHVlLmNoYXJDb2RlQXQoMikgPT09IDk4KSB7XG4gICAgICAvLyB0aGlzIGlnbm9yZXMgbGFiZWxcbiAgICAgIGVsZW1lbnRbXCJyZXR1cm5cIl0gPSAnJztcbiAgICAgIGVsZW1lbnQudmFsdWUgPSAnJztcbiAgICB9XG4gIH1cbn07XG52YXIgaWdub3JlRmxhZyA9ICdlbW90aW9uLWRpc2FibGUtc2VydmVyLXJlbmRlcmluZy11bnNhZmUtc2VsZWN0b3Itd2FybmluZy1wbGVhc2UtZG8tbm90LXVzZS10aGlzLXRoZS13YXJuaW5nLWV4aXN0cy1mb3ItYS1yZWFzb24nO1xuXG52YXIgaXNJZ25vcmluZ0NvbW1lbnQgPSBmdW5jdGlvbiBpc0lnbm9yaW5nQ29tbWVudChlbGVtZW50KSB7XG4gIHJldHVybiAhIWVsZW1lbnQgJiYgZWxlbWVudC50eXBlID09PSAnY29tbScgJiYgZWxlbWVudC5jaGlsZHJlbi5pbmRleE9mKGlnbm9yZUZsYWcpID4gLTE7XG59O1xuXG52YXIgY3JlYXRlVW5zYWZlU2VsZWN0b3JzQWxhcm0gPSBmdW5jdGlvbiBjcmVhdGVVbnNhZmVTZWxlY3RvcnNBbGFybShjYWNoZSkge1xuICByZXR1cm4gZnVuY3Rpb24gKGVsZW1lbnQsIGluZGV4LCBjaGlsZHJlbikge1xuICAgIGlmIChlbGVtZW50LnR5cGUgIT09ICdydWxlJykgcmV0dXJuO1xuICAgIHZhciB1bnNhZmVQc2V1ZG9DbGFzc2VzID0gZWxlbWVudC52YWx1ZS5tYXRjaCgvKDpmaXJzdHw6bnRofDpudGgtbGFzdCktY2hpbGQvZyk7XG5cbiAgICBpZiAodW5zYWZlUHNldWRvQ2xhc3NlcyAmJiBjYWNoZS5jb21wYXQgIT09IHRydWUpIHtcbiAgICAgIHZhciBwcmV2RWxlbWVudCA9IGluZGV4ID4gMCA/IGNoaWxkcmVuW2luZGV4IC0gMV0gOiBudWxsO1xuXG4gICAgICBpZiAocHJldkVsZW1lbnQgJiYgaXNJZ25vcmluZ0NvbW1lbnQobGFzdChwcmV2RWxlbWVudC5jaGlsZHJlbikpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdW5zYWZlUHNldWRvQ2xhc3Nlcy5mb3JFYWNoKGZ1bmN0aW9uICh1bnNhZmVQc2V1ZG9DbGFzcykge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiVGhlIHBzZXVkbyBjbGFzcyBcXFwiXCIgKyB1bnNhZmVQc2V1ZG9DbGFzcyArIFwiXFxcIiBpcyBwb3RlbnRpYWxseSB1bnNhZmUgd2hlbiBkb2luZyBzZXJ2ZXItc2lkZSByZW5kZXJpbmcuIFRyeSBjaGFuZ2luZyBpdCB0byBcXFwiXCIgKyB1bnNhZmVQc2V1ZG9DbGFzcy5zcGxpdCgnLWNoaWxkJylbMF0gKyBcIi1vZi10eXBlXFxcIi5cIik7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG59O1xuXG52YXIgaXNJbXBvcnRSdWxlID0gZnVuY3Rpb24gaXNJbXBvcnRSdWxlKGVsZW1lbnQpIHtcbiAgcmV0dXJuIGVsZW1lbnQudHlwZS5jaGFyQ29kZUF0KDEpID09PSAxMDUgJiYgZWxlbWVudC50eXBlLmNoYXJDb2RlQXQoMCkgPT09IDY0O1xufTtcblxudmFyIGlzUHJlcGVuZGVkV2l0aFJlZ3VsYXJSdWxlcyA9IGZ1bmN0aW9uIGlzUHJlcGVuZGVkV2l0aFJlZ3VsYXJSdWxlcyhpbmRleCwgY2hpbGRyZW4pIHtcbiAgZm9yICh2YXIgaSA9IGluZGV4IC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICBpZiAoIWlzSW1wb3J0UnVsZShjaGlsZHJlbltpXSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn07IC8vIHVzZSB0aGlzIHRvIHJlbW92ZSBpbmNvcnJlY3QgZWxlbWVudHMgZnJvbSBmdXJ0aGVyIHByb2Nlc3Npbmdcbi8vIHNvIHRoZXkgZG9uJ3QgZ2V0IGhhbmRlZCB0byB0aGUgYHNoZWV0YCAob3IgYW55dGhpbmcgZWxzZSlcbi8vIGFzIHRoYXQgY291bGQgcG90ZW50aWFsbHkgbGVhZCB0byBhZGRpdGlvbmFsIGxvZ3Mgd2hpY2ggaW4gdHVybiBjb3VsZCBiZSBvdmVyaGVsbWluZyB0byB0aGUgdXNlclxuXG5cbnZhciBudWxsaWZ5RWxlbWVudCA9IGZ1bmN0aW9uIG51bGxpZnlFbGVtZW50KGVsZW1lbnQpIHtcbiAgZWxlbWVudC50eXBlID0gJyc7XG4gIGVsZW1lbnQudmFsdWUgPSAnJztcbiAgZWxlbWVudFtcInJldHVyblwiXSA9ICcnO1xuICBlbGVtZW50LmNoaWxkcmVuID0gJyc7XG4gIGVsZW1lbnQucHJvcHMgPSAnJztcbn07XG5cbnZhciBpbmNvcnJlY3RJbXBvcnRBbGFybSA9IGZ1bmN0aW9uIGluY29ycmVjdEltcG9ydEFsYXJtKGVsZW1lbnQsIGluZGV4LCBjaGlsZHJlbikge1xuICBpZiAoIWlzSW1wb3J0UnVsZShlbGVtZW50KSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChlbGVtZW50LnBhcmVudCkge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJgQGltcG9ydGAgcnVsZXMgY2FuJ3QgYmUgbmVzdGVkIGluc2lkZSBvdGhlciBydWxlcy4gUGxlYXNlIG1vdmUgaXQgdG8gdGhlIHRvcCBsZXZlbCBhbmQgcHV0IGl0IGJlZm9yZSByZWd1bGFyIHJ1bGVzLiBLZWVwIGluIG1pbmQgdGhhdCB0aGV5IGNhbiBvbmx5IGJlIHVzZWQgd2l0aGluIGdsb2JhbCBzdHlsZXMuXCIpO1xuICAgIG51bGxpZnlFbGVtZW50KGVsZW1lbnQpO1xuICB9IGVsc2UgaWYgKGlzUHJlcGVuZGVkV2l0aFJlZ3VsYXJSdWxlcyhpbmRleCwgY2hpbGRyZW4pKSB7XG4gICAgY29uc29sZS5lcnJvcihcImBAaW1wb3J0YCBydWxlcyBjYW4ndCBiZSBhZnRlciBvdGhlciBydWxlcy4gUGxlYXNlIHB1dCB5b3VyIGBAaW1wb3J0YCBydWxlcyBiZWZvcmUgeW91ciBvdGhlciBydWxlcy5cIik7XG4gICAgbnVsbGlmeUVsZW1lbnQoZWxlbWVudCk7XG4gIH1cbn07XG5cbnZhciBkZWZhdWx0U3R5bGlzUGx1Z2lucyA9IFtwcmVmaXhlcl07XG5cbnZhciBjcmVhdGVDYWNoZSA9IGZ1bmN0aW9uIGNyZWF0ZUNhY2hlKG9wdGlvbnMpIHtcbiAgdmFyIGtleSA9IG9wdGlvbnMua2V5O1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmICFrZXkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJZb3UgaGF2ZSB0byBjb25maWd1cmUgYGtleWAgZm9yIHlvdXIgY2FjaGUuIFBsZWFzZSBtYWtlIHN1cmUgaXQncyB1bmlxdWUgKGFuZCBub3QgZXF1YWwgdG8gJ2NzcycpIGFzIGl0J3MgdXNlZCBmb3IgbGlua2luZyBzdHlsZXMgdG8geW91ciBjYWNoZS5cXG5cIiArIFwiSWYgbXVsdGlwbGUgY2FjaGVzIHNoYXJlIHRoZSBzYW1lIGtleSB0aGV5IG1pZ2h0IFxcXCJmaWdodFxcXCIgZm9yIGVhY2ggb3RoZXIncyBzdHlsZSBlbGVtZW50cy5cIik7XG4gIH1cblxuICBpZiAoIGtleSA9PT0gJ2NzcycpIHtcbiAgICB2YXIgc3NyU3R5bGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInN0eWxlW2RhdGEtZW1vdGlvbl06bm90KFtkYXRhLXNdKVwiKTsgLy8gZ2V0IFNTUmVkIHN0eWxlcyBvdXQgb2YgdGhlIHdheSBvZiBSZWFjdCdzIGh5ZHJhdGlvblxuICAgIC8vIGRvY3VtZW50LmhlYWQgaXMgYSBzYWZlIHBsYWNlIHRvIG1vdmUgdGhlbSB0byh0aG91Z2ggbm90ZSBkb2N1bWVudC5oZWFkIGlzIG5vdCBuZWNlc3NhcmlseSB0aGUgbGFzdCBwbGFjZSB0aGV5IHdpbGwgYmUpXG4gICAgLy8gbm90ZSB0aGlzIHZlcnkgdmVyeSBpbnRlbnRpb25hbGx5IHRhcmdldHMgYWxsIHN0eWxlIGVsZW1lbnRzIHJlZ2FyZGxlc3Mgb2YgdGhlIGtleSB0byBlbnN1cmVcbiAgICAvLyB0aGF0IGNyZWF0aW5nIGEgY2FjaGUgd29ya3MgaW5zaWRlIG9mIHJlbmRlciBvZiBhIFJlYWN0IGNvbXBvbmVudFxuXG4gICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChzc3JTdHlsZXMsIGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAvLyB3ZSB3YW50IHRvIG9ubHkgbW92ZSBlbGVtZW50cyB3aGljaCBoYXZlIGEgc3BhY2UgaW4gdGhlIGRhdGEtZW1vdGlvbiBhdHRyaWJ1dGUgdmFsdWVcbiAgICAgIC8vIGJlY2F1c2UgdGhhdCBpbmRpY2F0ZXMgdGhhdCBpdCBpcyBhbiBFbW90aW9uIDExIHNlcnZlci1zaWRlIHJlbmRlcmVkIHN0eWxlIGVsZW1lbnRzXG4gICAgICAvLyB3aGlsZSB3ZSB3aWxsIGFscmVhZHkgaWdub3JlIEVtb3Rpb24gMTEgY2xpZW50LXNpZGUgaW5zZXJ0ZWQgc3R5bGVzIGJlY2F1c2Ugb2YgdGhlIDpub3QoW2RhdGEtc10pIHBhcnQgaW4gdGhlIHNlbGVjdG9yXG4gICAgICAvLyBFbW90aW9uIDEwIGNsaWVudC1zaWRlIGluc2VydGVkIHN0eWxlcyBkaWQgbm90IGhhdmUgZGF0YS1zIChidXQgaW1wb3J0YW50bHkgZGlkIG5vdCBoYXZlIGEgc3BhY2UgaW4gdGhlaXIgZGF0YS1lbW90aW9uIGF0dHJpYnV0ZXMpXG4gICAgICAvLyBzbyBjaGVja2luZyBmb3IgdGhlIHNwYWNlIGVuc3VyZXMgdGhhdCBsb2FkaW5nIEVtb3Rpb24gMTEgYWZ0ZXIgRW1vdGlvbiAxMCBoYXMgaW5zZXJ0ZWQgc29tZSBzdHlsZXNcbiAgICAgIC8vIHdpbGwgbm90IHJlc3VsdCBpbiB0aGUgRW1vdGlvbiAxMCBzdHlsZXMgYmVpbmcgZGVzdHJveWVkXG4gICAgICB2YXIgZGF0YUVtb3Rpb25BdHRyaWJ1dGUgPSBub2RlLmdldEF0dHJpYnV0ZSgnZGF0YS1lbW90aW9uJyk7XG5cbiAgICAgIGlmIChkYXRhRW1vdGlvbkF0dHJpYnV0ZS5pbmRleE9mKCcgJykgPT09IC0xKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgICBub2RlLnNldEF0dHJpYnV0ZSgnZGF0YS1zJywgJycpO1xuICAgIH0pO1xuICB9XG5cbiAgdmFyIHN0eWxpc1BsdWdpbnMgPSBvcHRpb25zLnN0eWxpc1BsdWdpbnMgfHwgZGVmYXVsdFN0eWxpc1BsdWdpbnM7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAvLyAkRmxvd0ZpeE1lXG4gICAgaWYgKC9bXmEtei1dLy50ZXN0KGtleSkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkVtb3Rpb24ga2V5IG11c3Qgb25seSBjb250YWluIGxvd2VyIGNhc2UgYWxwaGFiZXRpY2FsIGNoYXJhY3RlcnMgYW5kIC0gYnV0IFxcXCJcIiArIGtleSArIFwiXFxcIiB3YXMgcGFzc2VkXCIpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBpbnNlcnRlZCA9IHt9OyAvLyAkRmxvd0ZpeE1lXG5cbiAgdmFyIGNvbnRhaW5lcjtcbiAgdmFyIG5vZGVzVG9IeWRyYXRlID0gW107XG5cbiAge1xuICAgIGNvbnRhaW5lciA9IG9wdGlvbnMuY29udGFpbmVyIHx8IGRvY3VtZW50LmhlYWQ7XG4gICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbCggLy8gdGhpcyBtZWFucyB3ZSB3aWxsIGlnbm9yZSBlbGVtZW50cyB3aGljaCBkb24ndCBoYXZlIGEgc3BhY2UgaW4gdGhlbSB3aGljaFxuICAgIC8vIG1lYW5zIHRoYXQgdGhlIHN0eWxlIGVsZW1lbnRzIHdlJ3JlIGxvb2tpbmcgYXQgYXJlIG9ubHkgRW1vdGlvbiAxMSBzZXJ2ZXItcmVuZGVyZWQgc3R5bGUgZWxlbWVudHNcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwic3R5bGVbZGF0YS1lbW90aW9uXj1cXFwiXCIgKyBrZXkgKyBcIiBcXFwiXVwiKSwgZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgIHZhciBhdHRyaWIgPSBub2RlLmdldEF0dHJpYnV0ZShcImRhdGEtZW1vdGlvblwiKS5zcGxpdCgnICcpOyAvLyAkRmxvd0ZpeE1lXG5cbiAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXR0cmliLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGluc2VydGVkW2F0dHJpYltpXV0gPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBub2Rlc1RvSHlkcmF0ZS5wdXNoKG5vZGUpO1xuICAgIH0pO1xuICB9XG5cbiAgdmFyIF9pbnNlcnQ7XG5cbiAgdmFyIG9tbmlwcmVzZW50UGx1Z2lucyA9IFtjb21wYXQsIHJlbW92ZUxhYmVsXTtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIG9tbmlwcmVzZW50UGx1Z2lucy5wdXNoKGNyZWF0ZVVuc2FmZVNlbGVjdG9yc0FsYXJtKHtcbiAgICAgIGdldCBjb21wYXQoKSB7XG4gICAgICAgIHJldHVybiBjYWNoZS5jb21wYXQ7XG4gICAgICB9XG5cbiAgICB9KSwgaW5jb3JyZWN0SW1wb3J0QWxhcm0pO1xuICB9XG5cbiAge1xuICAgIHZhciBjdXJyZW50U2hlZXQ7XG4gICAgdmFyIGZpbmFsaXppbmdQbHVnaW5zID0gW3N0cmluZ2lmeSwgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICBpZiAoIWVsZW1lbnQucm9vdCkge1xuICAgICAgICBpZiAoZWxlbWVudFtcInJldHVyblwiXSkge1xuICAgICAgICAgIGN1cnJlbnRTaGVldC5pbnNlcnQoZWxlbWVudFtcInJldHVyblwiXSk7XG4gICAgICAgIH0gZWxzZSBpZiAoZWxlbWVudC52YWx1ZSAmJiBlbGVtZW50LnR5cGUgIT09IENPTU1FTlQpIHtcbiAgICAgICAgICAvLyBpbnNlcnQgZW1wdHkgcnVsZSBpbiBub24tcHJvZHVjdGlvbiBlbnZpcm9ubWVudHNcbiAgICAgICAgICAvLyBzbyBAZW1vdGlvbi9qZXN0IGNhbiBncmFiIGBrZXlgIGZyb20gdGhlIChKUylET00gZm9yIGNhY2hlcyB3aXRob3V0IGFueSBydWxlcyBpbnNlcnRlZCB5ZXRcbiAgICAgICAgICBjdXJyZW50U2hlZXQuaW5zZXJ0KGVsZW1lbnQudmFsdWUgKyBcInt9XCIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSA6IHJ1bGVzaGVldChmdW5jdGlvbiAocnVsZSkge1xuICAgICAgY3VycmVudFNoZWV0Lmluc2VydChydWxlKTtcbiAgICB9KV07XG4gICAgdmFyIHNlcmlhbGl6ZXIgPSBtaWRkbGV3YXJlKG9tbmlwcmVzZW50UGx1Z2lucy5jb25jYXQoc3R5bGlzUGx1Z2lucywgZmluYWxpemluZ1BsdWdpbnMpKTtcblxuICAgIHZhciBzdHlsaXMgPSBmdW5jdGlvbiBzdHlsaXMoc3R5bGVzKSB7XG4gICAgICByZXR1cm4gc2VyaWFsaXplKGNvbXBpbGUoc3R5bGVzKSwgc2VyaWFsaXplcik7XG4gICAgfTtcblxuICAgIF9pbnNlcnQgPSBmdW5jdGlvbiBpbnNlcnQoc2VsZWN0b3IsIHNlcmlhbGl6ZWQsIHNoZWV0LCBzaG91bGRDYWNoZSkge1xuICAgICAgY3VycmVudFNoZWV0ID0gc2hlZXQ7XG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHNlcmlhbGl6ZWQubWFwICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY3VycmVudFNoZWV0ID0ge1xuICAgICAgICAgIGluc2VydDogZnVuY3Rpb24gaW5zZXJ0KHJ1bGUpIHtcbiAgICAgICAgICAgIHNoZWV0Lmluc2VydChydWxlICsgc2VyaWFsaXplZC5tYXApO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgc3R5bGlzKHNlbGVjdG9yID8gc2VsZWN0b3IgKyBcIntcIiArIHNlcmlhbGl6ZWQuc3R5bGVzICsgXCJ9XCIgOiBzZXJpYWxpemVkLnN0eWxlcyk7XG5cbiAgICAgIGlmIChzaG91bGRDYWNoZSkge1xuICAgICAgICBjYWNoZS5pbnNlcnRlZFtzZXJpYWxpemVkLm5hbWVdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgdmFyIGNhY2hlID0ge1xuICAgIGtleToga2V5LFxuICAgIHNoZWV0OiBuZXcgU3R5bGVTaGVldCh7XG4gICAgICBrZXk6IGtleSxcbiAgICAgIGNvbnRhaW5lcjogY29udGFpbmVyLFxuICAgICAgbm9uY2U6IG9wdGlvbnMubm9uY2UsXG4gICAgICBzcGVlZHk6IG9wdGlvbnMuc3BlZWR5LFxuICAgICAgcHJlcGVuZDogb3B0aW9ucy5wcmVwZW5kXG4gICAgfSksXG4gICAgbm9uY2U6IG9wdGlvbnMubm9uY2UsXG4gICAgaW5zZXJ0ZWQ6IGluc2VydGVkLFxuICAgIHJlZ2lzdGVyZWQ6IHt9LFxuICAgIGluc2VydDogX2luc2VydFxuICB9O1xuICBjYWNoZS5zaGVldC5oeWRyYXRlKG5vZGVzVG9IeWRyYXRlKTtcbiAgcmV0dXJuIGNhY2hlO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ2FjaGU7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSAqL1xuLy8gSW5zcGlyZWQgYnkgaHR0cHM6Ly9naXRodWIuY29tL2dhcnljb3VydC9tdXJtdXJoYXNoLWpzXG4vLyBQb3J0ZWQgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vYWFwcGxlYnkvc21oYXNoZXIvYmxvYi82MWEwNTMwZjI4Mjc3ZjJlODUwYmZjMzk2MDBjZTYxZDAyYjUxOGRlL3NyYy9NdXJtdXJIYXNoMi5jcHAjTDM3LUw4NlxuZnVuY3Rpb24gbXVybXVyMihzdHIpIHtcbiAgLy8gJ20nIGFuZCAncicgYXJlIG1peGluZyBjb25zdGFudHMgZ2VuZXJhdGVkIG9mZmxpbmUuXG4gIC8vIFRoZXkncmUgbm90IHJlYWxseSAnbWFnaWMnLCB0aGV5IGp1c3QgaGFwcGVuIHRvIHdvcmsgd2VsbC5cbiAgLy8gY29uc3QgbSA9IDB4NWJkMWU5OTU7XG4gIC8vIGNvbnN0IHIgPSAyNDtcbiAgLy8gSW5pdGlhbGl6ZSB0aGUgaGFzaFxuICB2YXIgaCA9IDA7IC8vIE1peCA0IGJ5dGVzIGF0IGEgdGltZSBpbnRvIHRoZSBoYXNoXG5cbiAgdmFyIGssXG4gICAgICBpID0gMCxcbiAgICAgIGxlbiA9IHN0ci5sZW5ndGg7XG5cbiAgZm9yICg7IGxlbiA+PSA0OyArK2ksIGxlbiAtPSA0KSB7XG4gICAgayA9IHN0ci5jaGFyQ29kZUF0KGkpICYgMHhmZiB8IChzdHIuY2hhckNvZGVBdCgrK2kpICYgMHhmZikgPDwgOCB8IChzdHIuY2hhckNvZGVBdCgrK2kpICYgMHhmZikgPDwgMTYgfCAoc3RyLmNoYXJDb2RlQXQoKytpKSAmIDB4ZmYpIDw8IDI0O1xuICAgIGsgPVxuICAgIC8qIE1hdGguaW11bChrLCBtKTogKi9cbiAgICAoayAmIDB4ZmZmZikgKiAweDViZDFlOTk1ICsgKChrID4+PiAxNikgKiAweGU5OTUgPDwgMTYpO1xuICAgIGsgXj1cbiAgICAvKiBrID4+PiByOiAqL1xuICAgIGsgPj4+IDI0O1xuICAgIGggPVxuICAgIC8qIE1hdGguaW11bChrLCBtKTogKi9cbiAgICAoayAmIDB4ZmZmZikgKiAweDViZDFlOTk1ICsgKChrID4+PiAxNikgKiAweGU5OTUgPDwgMTYpIF5cbiAgICAvKiBNYXRoLmltdWwoaCwgbSk6ICovXG4gICAgKGggJiAweGZmZmYpICogMHg1YmQxZTk5NSArICgoaCA+Pj4gMTYpICogMHhlOTk1IDw8IDE2KTtcbiAgfSAvLyBIYW5kbGUgdGhlIGxhc3QgZmV3IGJ5dGVzIG9mIHRoZSBpbnB1dCBhcnJheVxuXG5cbiAgc3dpdGNoIChsZW4pIHtcbiAgICBjYXNlIDM6XG4gICAgICBoIF49IChzdHIuY2hhckNvZGVBdChpICsgMikgJiAweGZmKSA8PCAxNjtcblxuICAgIGNhc2UgMjpcbiAgICAgIGggXj0gKHN0ci5jaGFyQ29kZUF0KGkgKyAxKSAmIDB4ZmYpIDw8IDg7XG5cbiAgICBjYXNlIDE6XG4gICAgICBoIF49IHN0ci5jaGFyQ29kZUF0KGkpICYgMHhmZjtcbiAgICAgIGggPVxuICAgICAgLyogTWF0aC5pbXVsKGgsIG0pOiAqL1xuICAgICAgKGggJiAweGZmZmYpICogMHg1YmQxZTk5NSArICgoaCA+Pj4gMTYpICogMHhlOTk1IDw8IDE2KTtcbiAgfSAvLyBEbyBhIGZldyBmaW5hbCBtaXhlcyBvZiB0aGUgaGFzaCB0byBlbnN1cmUgdGhlIGxhc3QgZmV3XG4gIC8vIGJ5dGVzIGFyZSB3ZWxsLWluY29ycG9yYXRlZC5cblxuXG4gIGggXj0gaCA+Pj4gMTM7XG4gIGggPVxuICAvKiBNYXRoLmltdWwoaCwgbSk6ICovXG4gIChoICYgMHhmZmZmKSAqIDB4NWJkMWU5OTUgKyAoKGggPj4+IDE2KSAqIDB4ZTk5NSA8PCAxNik7XG4gIHJldHVybiAoKGggXiBoID4+PiAxNSkgPj4+IDApLnRvU3RyaW5nKDM2KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbXVybXVyMjtcbiIsImZ1bmN0aW9uIG1lbW9pemUoZm4pIHtcbiAgdmFyIGNhY2hlID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIChhcmcpIHtcbiAgICBpZiAoY2FjaGVbYXJnXSA9PT0gdW5kZWZpbmVkKSBjYWNoZVthcmddID0gZm4oYXJnKTtcbiAgICByZXR1cm4gY2FjaGVbYXJnXTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWVtb2l6ZTtcbiIsImltcG9ydCBoYXNoU3RyaW5nIGZyb20gJ0BlbW90aW9uL2hhc2gnO1xuaW1wb3J0IHVuaXRsZXNzIGZyb20gJ0BlbW90aW9uL3VuaXRsZXNzJztcbmltcG9ydCBtZW1vaXplIGZyb20gJ0BlbW90aW9uL21lbW9pemUnO1xuXG52YXIgSUxMRUdBTF9FU0NBUEVfU0VRVUVOQ0VfRVJST1IgPSBcIllvdSBoYXZlIGlsbGVnYWwgZXNjYXBlIHNlcXVlbmNlIGluIHlvdXIgdGVtcGxhdGUgbGl0ZXJhbCwgbW9zdCBsaWtlbHkgaW5zaWRlIGNvbnRlbnQncyBwcm9wZXJ0eSB2YWx1ZS5cXG5CZWNhdXNlIHlvdSB3cml0ZSB5b3VyIENTUyBpbnNpZGUgYSBKYXZhU2NyaXB0IHN0cmluZyB5b3UgYWN0dWFsbHkgaGF2ZSB0byBkbyBkb3VibGUgZXNjYXBpbmcsIHNvIGZvciBleGFtcGxlIFxcXCJjb250ZW50OiAnXFxcXDAwZDcnO1xcXCIgc2hvdWxkIGJlY29tZSBcXFwiY29udGVudDogJ1xcXFxcXFxcMDBkNyc7XFxcIi5cXG5Zb3UgY2FuIHJlYWQgbW9yZSBhYm91dCB0aGlzIGhlcmU6XFxuaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvVGVtcGxhdGVfbGl0ZXJhbHMjRVMyMDE4X3JldmlzaW9uX29mX2lsbGVnYWxfZXNjYXBlX3NlcXVlbmNlc1wiO1xudmFyIFVOREVGSU5FRF9BU19PQkpFQ1RfS0VZX0VSUk9SID0gXCJZb3UgaGF2ZSBwYXNzZWQgaW4gZmFsc3kgdmFsdWUgYXMgc3R5bGUgb2JqZWN0J3Mga2V5IChjYW4gaGFwcGVuIHdoZW4gaW4gZXhhbXBsZSB5b3UgcGFzcyB1bmV4cG9ydGVkIGNvbXBvbmVudCBhcyBjb21wdXRlZCBrZXkpLlwiO1xudmFyIGh5cGhlbmF0ZVJlZ2V4ID0gL1tBLVpdfF5tcy9nO1xudmFyIGFuaW1hdGlvblJlZ2V4ID0gL19FTU9fKFteX10rPylfKFteXSo/KV9FTU9fL2c7XG5cbnZhciBpc0N1c3RvbVByb3BlcnR5ID0gZnVuY3Rpb24gaXNDdXN0b21Qcm9wZXJ0eShwcm9wZXJ0eSkge1xuICByZXR1cm4gcHJvcGVydHkuY2hhckNvZGVBdCgxKSA9PT0gNDU7XG59O1xuXG52YXIgaXNQcm9jZXNzYWJsZVZhbHVlID0gZnVuY3Rpb24gaXNQcm9jZXNzYWJsZVZhbHVlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmIHR5cGVvZiB2YWx1ZSAhPT0gJ2Jvb2xlYW4nO1xufTtcblxudmFyIHByb2Nlc3NTdHlsZU5hbWUgPSAvKiAjX19QVVJFX18gKi9tZW1vaXplKGZ1bmN0aW9uIChzdHlsZU5hbWUpIHtcbiAgcmV0dXJuIGlzQ3VzdG9tUHJvcGVydHkoc3R5bGVOYW1lKSA/IHN0eWxlTmFtZSA6IHN0eWxlTmFtZS5yZXBsYWNlKGh5cGhlbmF0ZVJlZ2V4LCAnLSQmJykudG9Mb3dlckNhc2UoKTtcbn0pO1xuXG52YXIgcHJvY2Vzc1N0eWxlVmFsdWUgPSBmdW5jdGlvbiBwcm9jZXNzU3R5bGVWYWx1ZShrZXksIHZhbHVlKSB7XG4gIHN3aXRjaCAoa2V5KSB7XG4gICAgY2FzZSAnYW5pbWF0aW9uJzpcbiAgICBjYXNlICdhbmltYXRpb25OYW1lJzpcbiAgICAgIHtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICByZXR1cm4gdmFsdWUucmVwbGFjZShhbmltYXRpb25SZWdleCwgZnVuY3Rpb24gKG1hdGNoLCBwMSwgcDIpIHtcbiAgICAgICAgICAgIGN1cnNvciA9IHtcbiAgICAgICAgICAgICAgbmFtZTogcDEsXG4gICAgICAgICAgICAgIHN0eWxlczogcDIsXG4gICAgICAgICAgICAgIG5leHQ6IGN1cnNvclxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJldHVybiBwMTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICB9XG5cbiAgaWYgKHVuaXRsZXNzW2tleV0gIT09IDEgJiYgIWlzQ3VzdG9tUHJvcGVydHkoa2V5KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInICYmIHZhbHVlICE9PSAwKSB7XG4gICAgcmV0dXJuIHZhbHVlICsgJ3B4JztcbiAgfVxuXG4gIHJldHVybiB2YWx1ZTtcbn07XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhciBjb250ZW50VmFsdWVQYXR0ZXJuID0gLyhhdHRyfGNvdW50ZXJzP3x1cmx8KCgocmVwZWF0aW5nLSk/KGxpbmVhcnxyYWRpYWwpKXxjb25pYyktZ3JhZGllbnQpXFwofChuby0pPyhvcGVufGNsb3NlKS1xdW90ZS87XG4gIHZhciBjb250ZW50VmFsdWVzID0gWydub3JtYWwnLCAnbm9uZScsICdpbml0aWFsJywgJ2luaGVyaXQnLCAndW5zZXQnXTtcbiAgdmFyIG9sZFByb2Nlc3NTdHlsZVZhbHVlID0gcHJvY2Vzc1N0eWxlVmFsdWU7XG4gIHZhciBtc1BhdHRlcm4gPSAvXi1tcy0vO1xuICB2YXIgaHlwaGVuUGF0dGVybiA9IC8tKC4pL2c7XG4gIHZhciBoeXBoZW5hdGVkQ2FjaGUgPSB7fTtcblxuICBwcm9jZXNzU3R5bGVWYWx1ZSA9IGZ1bmN0aW9uIHByb2Nlc3NTdHlsZVZhbHVlKGtleSwgdmFsdWUpIHtcbiAgICBpZiAoa2V5ID09PSAnY29udGVudCcpIHtcbiAgICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnIHx8IGNvbnRlbnRWYWx1ZXMuaW5kZXhPZih2YWx1ZSkgPT09IC0xICYmICFjb250ZW50VmFsdWVQYXR0ZXJuLnRlc3QodmFsdWUpICYmICh2YWx1ZS5jaGFyQXQoMCkgIT09IHZhbHVlLmNoYXJBdCh2YWx1ZS5sZW5ndGggLSAxKSB8fCB2YWx1ZS5jaGFyQXQoMCkgIT09ICdcIicgJiYgdmFsdWUuY2hhckF0KDApICE9PSBcIidcIikpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiWW91IHNlZW0gdG8gYmUgdXNpbmcgYSB2YWx1ZSBmb3IgJ2NvbnRlbnQnIHdpdGhvdXQgcXVvdGVzLCB0cnkgcmVwbGFjaW5nIGl0IHdpdGggYGNvbnRlbnQ6ICdcXFwiXCIgKyB2YWx1ZSArIFwiXFxcIidgXCIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBwcm9jZXNzZWQgPSBvbGRQcm9jZXNzU3R5bGVWYWx1ZShrZXksIHZhbHVlKTtcblxuICAgIGlmIChwcm9jZXNzZWQgIT09ICcnICYmICFpc0N1c3RvbVByb3BlcnR5KGtleSkgJiYga2V5LmluZGV4T2YoJy0nKSAhPT0gLTEgJiYgaHlwaGVuYXRlZENhY2hlW2tleV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgaHlwaGVuYXRlZENhY2hlW2tleV0gPSB0cnVlO1xuICAgICAgY29uc29sZS5lcnJvcihcIlVzaW5nIGtlYmFiLWNhc2UgZm9yIGNzcyBwcm9wZXJ0aWVzIGluIG9iamVjdHMgaXMgbm90IHN1cHBvcnRlZC4gRGlkIHlvdSBtZWFuIFwiICsga2V5LnJlcGxhY2UobXNQYXR0ZXJuLCAnbXMtJykucmVwbGFjZShoeXBoZW5QYXR0ZXJuLCBmdW5jdGlvbiAoc3RyLCBfY2hhcikge1xuICAgICAgICByZXR1cm4gX2NoYXIudG9VcHBlckNhc2UoKTtcbiAgICAgIH0pICsgXCI/XCIpO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9jZXNzZWQ7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGhhbmRsZUludGVycG9sYXRpb24obWVyZ2VkUHJvcHMsIHJlZ2lzdGVyZWQsIGludGVycG9sYXRpb24pIHtcbiAgaWYgKGludGVycG9sYXRpb24gPT0gbnVsbCkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGlmIChpbnRlcnBvbGF0aW9uLl9fZW1vdGlvbl9zdHlsZXMgIT09IHVuZGVmaW5lZCkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIGludGVycG9sYXRpb24udG9TdHJpbmcoKSA9PT0gJ05PX0NPTVBPTkVOVF9TRUxFQ1RPUicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ29tcG9uZW50IHNlbGVjdG9ycyBjYW4gb25seSBiZSB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggQGVtb3Rpb24vYmFiZWwtcGx1Z2luLicpO1xuICAgIH1cblxuICAgIHJldHVybiBpbnRlcnBvbGF0aW9uO1xuICB9XG5cbiAgc3dpdGNoICh0eXBlb2YgaW50ZXJwb2xhdGlvbikge1xuICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgICB9XG5cbiAgICBjYXNlICdvYmplY3QnOlxuICAgICAge1xuICAgICAgICBpZiAoaW50ZXJwb2xhdGlvbi5hbmltID09PSAxKSB7XG4gICAgICAgICAgY3Vyc29yID0ge1xuICAgICAgICAgICAgbmFtZTogaW50ZXJwb2xhdGlvbi5uYW1lLFxuICAgICAgICAgICAgc3R5bGVzOiBpbnRlcnBvbGF0aW9uLnN0eWxlcyxcbiAgICAgICAgICAgIG5leHQ6IGN1cnNvclxuICAgICAgICAgIH07XG4gICAgICAgICAgcmV0dXJuIGludGVycG9sYXRpb24ubmFtZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpbnRlcnBvbGF0aW9uLnN0eWxlcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdmFyIG5leHQgPSBpbnRlcnBvbGF0aW9uLm5leHQ7XG5cbiAgICAgICAgICBpZiAobmV4dCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAvLyBub3QgdGhlIG1vc3QgZWZmaWNpZW50IHRoaW5nIGV2ZXIgYnV0IHRoaXMgaXMgYSBwcmV0dHkgcmFyZSBjYXNlXG4gICAgICAgICAgICAvLyBhbmQgdGhlcmUgd2lsbCBiZSB2ZXJ5IGZldyBpdGVyYXRpb25zIG9mIHRoaXMgZ2VuZXJhbGx5XG4gICAgICAgICAgICB3aGlsZSAobmV4dCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIGN1cnNvciA9IHtcbiAgICAgICAgICAgICAgICBuYW1lOiBuZXh0Lm5hbWUsXG4gICAgICAgICAgICAgICAgc3R5bGVzOiBuZXh0LnN0eWxlcyxcbiAgICAgICAgICAgICAgICBuZXh0OiBjdXJzb3JcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgbmV4dCA9IG5leHQubmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgc3R5bGVzID0gaW50ZXJwb2xhdGlvbi5zdHlsZXMgKyBcIjtcIjtcblxuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIGludGVycG9sYXRpb24ubWFwICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHN0eWxlcyArPSBpbnRlcnBvbGF0aW9uLm1hcDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gc3R5bGVzO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNyZWF0ZVN0cmluZ0Zyb21PYmplY3QobWVyZ2VkUHJvcHMsIHJlZ2lzdGVyZWQsIGludGVycG9sYXRpb24pO1xuICAgICAgfVxuXG4gICAgY2FzZSAnZnVuY3Rpb24nOlxuICAgICAge1xuICAgICAgICBpZiAobWVyZ2VkUHJvcHMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHZhciBwcmV2aW91c0N1cnNvciA9IGN1cnNvcjtcbiAgICAgICAgICB2YXIgcmVzdWx0ID0gaW50ZXJwb2xhdGlvbihtZXJnZWRQcm9wcyk7XG4gICAgICAgICAgY3Vyc29yID0gcHJldmlvdXNDdXJzb3I7XG4gICAgICAgICAgcmV0dXJuIGhhbmRsZUludGVycG9sYXRpb24obWVyZ2VkUHJvcHMsIHJlZ2lzdGVyZWQsIHJlc3VsdCk7XG4gICAgICAgIH0gZWxzZSBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Z1bmN0aW9ucyB0aGF0IGFyZSBpbnRlcnBvbGF0ZWQgaW4gY3NzIGNhbGxzIHdpbGwgYmUgc3RyaW5naWZpZWQuXFxuJyArICdJZiB5b3Ugd2FudCB0byBoYXZlIGEgY3NzIGNhbGwgYmFzZWQgb24gcHJvcHMsIGNyZWF0ZSBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhIGNzcyBjYWxsIGxpa2UgdGhpc1xcbicgKyAnbGV0IGR5bmFtaWNTdHlsZSA9IChwcm9wcykgPT4gY3NzYGNvbG9yOiAke3Byb3BzLmNvbG9yfWBcXG4nICsgJ0l0IGNhbiBiZSBjYWxsZWQgZGlyZWN0bHkgd2l0aCBwcm9wcyBvciBpbnRlcnBvbGF0ZWQgaW4gYSBzdHlsZWQgY2FsbCBsaWtlIHRoaXNcXG4nICsgXCJsZXQgU29tZUNvbXBvbmVudCA9IHN0eWxlZCgnZGl2JylgJHtkeW5hbWljU3R5bGV9YFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIHZhciBtYXRjaGVkID0gW107XG4gICAgICAgIHZhciByZXBsYWNlZCA9IGludGVycG9sYXRpb24ucmVwbGFjZShhbmltYXRpb25SZWdleCwgZnVuY3Rpb24gKG1hdGNoLCBwMSwgcDIpIHtcbiAgICAgICAgICB2YXIgZmFrZVZhck5hbWUgPSBcImFuaW1hdGlvblwiICsgbWF0Y2hlZC5sZW5ndGg7XG4gICAgICAgICAgbWF0Y2hlZC5wdXNoKFwiY29uc3QgXCIgKyBmYWtlVmFyTmFtZSArIFwiID0ga2V5ZnJhbWVzYFwiICsgcDIucmVwbGFjZSgvXkBrZXlmcmFtZXMgYW5pbWF0aW9uLVxcdysvLCAnJykgKyBcImBcIik7XG4gICAgICAgICAgcmV0dXJuIFwiJHtcIiArIGZha2VWYXJOYW1lICsgXCJ9XCI7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChtYXRjaGVkLmxlbmd0aCkge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ2BrZXlmcmFtZXNgIG91dHB1dCBnb3QgaW50ZXJwb2xhdGVkIGludG8gcGxhaW4gc3RyaW5nLCBwbGVhc2Ugd3JhcCBpdCB3aXRoIGBjc3NgLlxcblxcbicgKyAnSW5zdGVhZCBvZiBkb2luZyB0aGlzOlxcblxcbicgKyBbXS5jb25jYXQobWF0Y2hlZCwgW1wiYFwiICsgcmVwbGFjZWQgKyBcImBcIl0pLmpvaW4oJ1xcbicpICsgJ1xcblxcbllvdSBzaG91bGQgd3JhcCBpdCB3aXRoIGBjc3NgIGxpa2UgdGhpczpcXG5cXG4nICsgKFwiY3NzYFwiICsgcmVwbGFjZWQgKyBcImBcIikpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGJyZWFrO1xuICB9IC8vIGZpbmFsaXplIHN0cmluZyB2YWx1ZXMgKHJlZ3VsYXIgc3RyaW5ncyBhbmQgZnVuY3Rpb25zIGludGVycG9sYXRlZCBpbnRvIGNzcyBjYWxscylcblxuXG4gIGlmIChyZWdpc3RlcmVkID09IG51bGwpIHtcbiAgICByZXR1cm4gaW50ZXJwb2xhdGlvbjtcbiAgfVxuXG4gIHZhciBjYWNoZWQgPSByZWdpc3RlcmVkW2ludGVycG9sYXRpb25dO1xuICByZXR1cm4gY2FjaGVkICE9PSB1bmRlZmluZWQgPyBjYWNoZWQgOiBpbnRlcnBvbGF0aW9uO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHJpbmdGcm9tT2JqZWN0KG1lcmdlZFByb3BzLCByZWdpc3RlcmVkLCBvYmopIHtcbiAgdmFyIHN0cmluZyA9ICcnO1xuXG4gIGlmIChBcnJheS5pc0FycmF5KG9iaikpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG9iai5sZW5ndGg7IGkrKykge1xuICAgICAgc3RyaW5nICs9IGhhbmRsZUludGVycG9sYXRpb24obWVyZ2VkUHJvcHMsIHJlZ2lzdGVyZWQsIG9ialtpXSkgKyBcIjtcIjtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZm9yICh2YXIgX2tleSBpbiBvYmopIHtcbiAgICAgIHZhciB2YWx1ZSA9IG9ialtfa2V5XTtcblxuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgaWYgKHJlZ2lzdGVyZWQgIT0gbnVsbCAmJiByZWdpc3RlcmVkW3ZhbHVlXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgc3RyaW5nICs9IF9rZXkgKyBcIntcIiArIHJlZ2lzdGVyZWRbdmFsdWVdICsgXCJ9XCI7XG4gICAgICAgIH0gZWxzZSBpZiAoaXNQcm9jZXNzYWJsZVZhbHVlKHZhbHVlKSkge1xuICAgICAgICAgIHN0cmluZyArPSBwcm9jZXNzU3R5bGVOYW1lKF9rZXkpICsgXCI6XCIgKyBwcm9jZXNzU3R5bGVWYWx1ZShfa2V5LCB2YWx1ZSkgKyBcIjtcIjtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKF9rZXkgPT09ICdOT19DT01QT05FTlRfU0VMRUNUT1InICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvbXBvbmVudCBzZWxlY3RvcnMgY2FuIG9ubHkgYmUgdXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIEBlbW90aW9uL2JhYmVsLXBsdWdpbi4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSAmJiB0eXBlb2YgdmFsdWVbMF0gPT09ICdzdHJpbmcnICYmIChyZWdpc3RlcmVkID09IG51bGwgfHwgcmVnaXN0ZXJlZFt2YWx1ZVswXV0gPT09IHVuZGVmaW5lZCkpIHtcbiAgICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgdmFsdWUubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICBpZiAoaXNQcm9jZXNzYWJsZVZhbHVlKHZhbHVlW19pXSkpIHtcbiAgICAgICAgICAgICAgc3RyaW5nICs9IHByb2Nlc3NTdHlsZU5hbWUoX2tleSkgKyBcIjpcIiArIHByb2Nlc3NTdHlsZVZhbHVlKF9rZXksIHZhbHVlW19pXSkgKyBcIjtcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIGludGVycG9sYXRlZCA9IGhhbmRsZUludGVycG9sYXRpb24obWVyZ2VkUHJvcHMsIHJlZ2lzdGVyZWQsIHZhbHVlKTtcblxuICAgICAgICAgIHN3aXRjaCAoX2tleSkge1xuICAgICAgICAgICAgY2FzZSAnYW5pbWF0aW9uJzpcbiAgICAgICAgICAgIGNhc2UgJ2FuaW1hdGlvbk5hbWUnOlxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RyaW5nICs9IHByb2Nlc3NTdHlsZU5hbWUoX2tleSkgKyBcIjpcIiArIGludGVycG9sYXRlZCArIFwiO1wiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBfa2V5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihVTkRFRklORURfQVNfT0JKRUNUX0tFWV9FUlJPUik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgc3RyaW5nICs9IF9rZXkgKyBcIntcIiArIGludGVycG9sYXRlZCArIFwifVwiO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cblxudmFyIGxhYmVsUGF0dGVybiA9IC9sYWJlbDpcXHMqKFteXFxzO1xcbntdKylcXHMqKDt8JCkvZztcbnZhciBzb3VyY2VNYXBQYXR0ZXJuO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICBzb3VyY2VNYXBQYXR0ZXJuID0gL1xcL1xcKiNcXHNzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb25cXC9qc29uO1xcUytcXHMrXFwqXFwvL2c7XG59IC8vIHRoaXMgaXMgdGhlIGN1cnNvciBmb3Iga2V5ZnJhbWVzXG4vLyBrZXlmcmFtZXMgYXJlIHN0b3JlZCBvbiB0aGUgU2VyaWFsaXplZFN0eWxlcyBvYmplY3QgYXMgYSBsaW5rZWQgbGlzdFxuXG5cbnZhciBjdXJzb3I7XG52YXIgc2VyaWFsaXplU3R5bGVzID0gZnVuY3Rpb24gc2VyaWFsaXplU3R5bGVzKGFyZ3MsIHJlZ2lzdGVyZWQsIG1lcmdlZFByb3BzKSB7XG4gIGlmIChhcmdzLmxlbmd0aCA9PT0gMSAmJiB0eXBlb2YgYXJnc1swXSA9PT0gJ29iamVjdCcgJiYgYXJnc1swXSAhPT0gbnVsbCAmJiBhcmdzWzBdLnN0eWxlcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGFyZ3NbMF07XG4gIH1cblxuICB2YXIgc3RyaW5nTW9kZSA9IHRydWU7XG4gIHZhciBzdHlsZXMgPSAnJztcbiAgY3Vyc29yID0gdW5kZWZpbmVkO1xuICB2YXIgc3RyaW5ncyA9IGFyZ3NbMF07XG5cbiAgaWYgKHN0cmluZ3MgPT0gbnVsbCB8fCBzdHJpbmdzLnJhdyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgc3RyaW5nTW9kZSA9IGZhbHNlO1xuICAgIHN0eWxlcyArPSBoYW5kbGVJbnRlcnBvbGF0aW9uKG1lcmdlZFByb3BzLCByZWdpc3RlcmVkLCBzdHJpbmdzKTtcbiAgfSBlbHNlIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBzdHJpbmdzWzBdID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoSUxMRUdBTF9FU0NBUEVfU0VRVUVOQ0VfRVJST1IpO1xuICAgIH1cblxuICAgIHN0eWxlcyArPSBzdHJpbmdzWzBdO1xuICB9IC8vIHdlIHN0YXJ0IGF0IDEgc2luY2Ugd2UndmUgYWxyZWFkeSBoYW5kbGVkIHRoZSBmaXJzdCBhcmdcblxuXG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuICAgIHN0eWxlcyArPSBoYW5kbGVJbnRlcnBvbGF0aW9uKG1lcmdlZFByb3BzLCByZWdpc3RlcmVkLCBhcmdzW2ldKTtcblxuICAgIGlmIChzdHJpbmdNb2RlKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBzdHJpbmdzW2ldID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihJTExFR0FMX0VTQ0FQRV9TRVFVRU5DRV9FUlJPUik7XG4gICAgICB9XG5cbiAgICAgIHN0eWxlcyArPSBzdHJpbmdzW2ldO1xuICAgIH1cbiAgfVxuXG4gIHZhciBzb3VyY2VNYXA7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBzdHlsZXMgPSBzdHlsZXMucmVwbGFjZShzb3VyY2VNYXBQYXR0ZXJuLCBmdW5jdGlvbiAobWF0Y2gpIHtcbiAgICAgIHNvdXJjZU1hcCA9IG1hdGNoO1xuICAgICAgcmV0dXJuICcnO1xuICAgIH0pO1xuICB9IC8vIHVzaW5nIGEgZ2xvYmFsIHJlZ2V4IHdpdGggLmV4ZWMgaXMgc3RhdGVmdWwgc28gbGFzdEluZGV4IGhhcyB0byBiZSByZXNldCBlYWNoIHRpbWVcblxuXG4gIGxhYmVsUGF0dGVybi5sYXN0SW5kZXggPSAwO1xuICB2YXIgaWRlbnRpZmllck5hbWUgPSAnJztcbiAgdmFyIG1hdGNoOyAvLyBodHRwczovL2VzYmVuY2guY29tL2JlbmNoLzViODA5YzJjZjI5NDk4MDBhMGY2MWZiNVxuXG4gIHdoaWxlICgobWF0Y2ggPSBsYWJlbFBhdHRlcm4uZXhlYyhzdHlsZXMpKSAhPT0gbnVsbCkge1xuICAgIGlkZW50aWZpZXJOYW1lICs9ICctJyArIC8vICRGbG93Rml4TWUgd2Uga25vdyBpdCdzIG5vdCBudWxsXG4gICAgbWF0Y2hbMV07XG4gIH1cblxuICB2YXIgbmFtZSA9IGhhc2hTdHJpbmcoc3R5bGVzKSArIGlkZW50aWZpZXJOYW1lO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgLy8gJEZsb3dGaXhNZSBTZXJpYWxpemVkU3R5bGVzIHR5cGUgZG9lc24ndCBoYXZlIHRvU3RyaW5nIHByb3BlcnR5IChhbmQgd2UgZG9uJ3Qgd2FudCB0byBhZGQgaXQpXG4gICAgcmV0dXJuIHtcbiAgICAgIG5hbWU6IG5hbWUsXG4gICAgICBzdHlsZXM6IHN0eWxlcyxcbiAgICAgIG1hcDogc291cmNlTWFwLFxuICAgICAgbmV4dDogY3Vyc29yLFxuICAgICAgdG9TdHJpbmc6IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gXCJZb3UgaGF2ZSB0cmllZCB0byBzdHJpbmdpZnkgb2JqZWN0IHJldHVybmVkIGZyb20gYGNzc2AgZnVuY3Rpb24uIEl0IGlzbid0IHN1cHBvc2VkIHRvIGJlIHVzZWQgZGlyZWN0bHkgKGUuZy4gYXMgdmFsdWUgb2YgdGhlIGBjbGFzc05hbWVgIHByb3ApLCBidXQgcmF0aGVyIGhhbmRlZCB0byBlbW90aW9uIHNvIGl0IGNhbiBoYW5kbGUgaXQgKGUuZy4gYXMgdmFsdWUgb2YgYGNzc2AgcHJvcCkuXCI7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbmFtZTogbmFtZSxcbiAgICBzdHlsZXM6IHN0eWxlcyxcbiAgICBuZXh0OiBjdXJzb3JcbiAgfTtcbn07XG5cbmV4cG9ydCB7IHNlcmlhbGl6ZVN0eWxlcyB9O1xuIiwiLypcblxuQmFzZWQgb2ZmIGdsYW1vcidzIFN0eWxlU2hlZXQsIHRoYW5rcyBTdW5pbCDinaTvuI9cblxuaGlnaCBwZXJmb3JtYW5jZSBTdHlsZVNoZWV0IGZvciBjc3MtaW4tanMgc3lzdGVtc1xuXG4tIHVzZXMgbXVsdGlwbGUgc3R5bGUgdGFncyBiZWhpbmQgdGhlIHNjZW5lcyBmb3IgbWlsbGlvbnMgb2YgcnVsZXNcbi0gdXNlcyBgaW5zZXJ0UnVsZWAgZm9yIGFwcGVuZGluZyBpbiBwcm9kdWN0aW9uIGZvciAqbXVjaCogZmFzdGVyIHBlcmZvcm1hbmNlXG5cbi8vIHVzYWdlXG5cbmltcG9ydCB7IFN0eWxlU2hlZXQgfSBmcm9tICdAZW1vdGlvbi9zaGVldCdcblxubGV0IHN0eWxlU2hlZXQgPSBuZXcgU3R5bGVTaGVldCh7IGtleTogJycsIGNvbnRhaW5lcjogZG9jdW1lbnQuaGVhZCB9KVxuXG5zdHlsZVNoZWV0Lmluc2VydCgnI2JveCB7IGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgfScpXG4tIGFwcGVuZHMgYSBjc3MgcnVsZSBpbnRvIHRoZSBzdHlsZXNoZWV0XG5cbnN0eWxlU2hlZXQuZmx1c2goKVxuLSBlbXB0aWVzIHRoZSBzdHlsZXNoZWV0IG9mIGFsbCBpdHMgY29udGVudHNcblxuKi9cbi8vICRGbG93Rml4TWVcbmZ1bmN0aW9uIHNoZWV0Rm9yVGFnKHRhZykge1xuICBpZiAodGFnLnNoZWV0KSB7XG4gICAgLy8gJEZsb3dGaXhNZVxuICAgIHJldHVybiB0YWcuc2hlZXQ7XG4gIH0gLy8gdGhpcyB3ZWlyZG5lc3MgYnJvdWdodCB0byB5b3UgYnkgZmlyZWZveFxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGRvY3VtZW50LnN0eWxlU2hlZXRzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGRvY3VtZW50LnN0eWxlU2hlZXRzW2ldLm93bmVyTm9kZSA9PT0gdGFnKSB7XG4gICAgICAvLyAkRmxvd0ZpeE1lXG4gICAgICByZXR1cm4gZG9jdW1lbnQuc3R5bGVTaGVldHNbaV07XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciB0YWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB0YWcuc2V0QXR0cmlidXRlKCdkYXRhLWVtb3Rpb24nLCBvcHRpb25zLmtleSk7XG5cbiAgaWYgKG9wdGlvbnMubm9uY2UgIT09IHVuZGVmaW5lZCkge1xuICAgIHRhZy5zZXRBdHRyaWJ1dGUoJ25vbmNlJywgb3B0aW9ucy5ub25jZSk7XG4gIH1cblxuICB0YWcuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJycpKTtcbiAgdGFnLnNldEF0dHJpYnV0ZSgnZGF0YS1zJywgJycpO1xuICByZXR1cm4gdGFnO1xufVxuXG52YXIgU3R5bGVTaGVldCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFN0eWxlU2hlZXQob3B0aW9ucykge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICB0aGlzLl9pbnNlcnRUYWcgPSBmdW5jdGlvbiAodGFnKSB7XG4gICAgICB2YXIgYmVmb3JlO1xuXG4gICAgICBpZiAoX3RoaXMudGFncy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgYmVmb3JlID0gX3RoaXMucHJlcGVuZCA/IF90aGlzLmNvbnRhaW5lci5maXJzdENoaWxkIDogX3RoaXMuYmVmb3JlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYmVmb3JlID0gX3RoaXMudGFnc1tfdGhpcy50YWdzLmxlbmd0aCAtIDFdLm5leHRTaWJsaW5nO1xuICAgICAgfVxuXG4gICAgICBfdGhpcy5jb250YWluZXIuaW5zZXJ0QmVmb3JlKHRhZywgYmVmb3JlKTtcblxuICAgICAgX3RoaXMudGFncy5wdXNoKHRhZyk7XG4gICAgfTtcblxuICAgIHRoaXMuaXNTcGVlZHkgPSBvcHRpb25zLnNwZWVkeSA9PT0gdW5kZWZpbmVkID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyA6IG9wdGlvbnMuc3BlZWR5O1xuICAgIHRoaXMudGFncyA9IFtdO1xuICAgIHRoaXMuY3RyID0gMDtcbiAgICB0aGlzLm5vbmNlID0gb3B0aW9ucy5ub25jZTsgLy8ga2V5IGlzIHRoZSB2YWx1ZSBvZiB0aGUgZGF0YS1lbW90aW9uIGF0dHJpYnV0ZSwgaXQncyB1c2VkIHRvIGlkZW50aWZ5IGRpZmZlcmVudCBzaGVldHNcblxuICAgIHRoaXMua2V5ID0gb3B0aW9ucy5rZXk7XG4gICAgdGhpcy5jb250YWluZXIgPSBvcHRpb25zLmNvbnRhaW5lcjtcbiAgICB0aGlzLnByZXBlbmQgPSBvcHRpb25zLnByZXBlbmQ7XG4gICAgdGhpcy5iZWZvcmUgPSBudWxsO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IFN0eWxlU2hlZXQucHJvdG90eXBlO1xuXG4gIF9wcm90by5oeWRyYXRlID0gZnVuY3Rpb24gaHlkcmF0ZShub2Rlcykge1xuICAgIG5vZGVzLmZvckVhY2godGhpcy5faW5zZXJ0VGFnKTtcbiAgfTtcblxuICBfcHJvdG8uaW5zZXJ0ID0gZnVuY3Rpb24gaW5zZXJ0KHJ1bGUpIHtcbiAgICAvLyB0aGUgbWF4IGxlbmd0aCBpcyBob3cgbWFueSBydWxlcyB3ZSBoYXZlIHBlciBzdHlsZSB0YWcsIGl0J3MgNjUwMDAgaW4gc3BlZWR5IG1vZGVcbiAgICAvLyBpdCdzIDEgaW4gZGV2IGJlY2F1c2Ugd2UgaW5zZXJ0IHNvdXJjZSBtYXBzIHRoYXQgbWFwIGEgc2luZ2xlIHJ1bGUgdG8gYSBsb2NhdGlvblxuICAgIC8vIGFuZCB5b3UgY2FuIG9ubHkgaGF2ZSBvbmUgc291cmNlIG1hcCBwZXIgc3R5bGUgdGFnXG4gICAgaWYgKHRoaXMuY3RyICUgKHRoaXMuaXNTcGVlZHkgPyA2NTAwMCA6IDEpID09PSAwKSB7XG4gICAgICB0aGlzLl9pbnNlcnRUYWcoY3JlYXRlU3R5bGVFbGVtZW50KHRoaXMpKTtcbiAgICB9XG5cbiAgICB2YXIgdGFnID0gdGhpcy50YWdzW3RoaXMudGFncy5sZW5ndGggLSAxXTtcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICB2YXIgaXNJbXBvcnRSdWxlID0gcnVsZS5jaGFyQ29kZUF0KDApID09PSA2NCAmJiBydWxlLmNoYXJDb2RlQXQoMSkgPT09IDEwNTtcblxuICAgICAgaWYgKGlzSW1wb3J0UnVsZSAmJiB0aGlzLl9hbHJlYWR5SW5zZXJ0ZWRPcmRlckluc2Vuc2l0aXZlUnVsZSkge1xuICAgICAgICAvLyB0aGlzIHdvdWxkIG9ubHkgY2F1c2UgcHJvYmxlbSBpbiBzcGVlZHkgbW9kZVxuICAgICAgICAvLyBidXQgd2UgZG9uJ3Qgd2FudCBlbmFibGluZyBzcGVlZHkgdG8gYWZmZWN0IHRoZSBvYnNlcnZhYmxlIGJlaGF2aW9yXG4gICAgICAgIC8vIHNvIHdlIHJlcG9ydCB0aGlzIGVycm9yIGF0IGFsbCB0aW1lc1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiWW91J3JlIGF0dGVtcHRpbmcgdG8gaW5zZXJ0IHRoZSBmb2xsb3dpbmcgcnVsZTpcXG5cIiArIHJ1bGUgKyAnXFxuXFxuYEBpbXBvcnRgIHJ1bGVzIG11c3QgYmUgYmVmb3JlIGFsbCBvdGhlciB0eXBlcyBvZiBydWxlcyBpbiBhIHN0eWxlc2hlZXQgYnV0IG90aGVyIHJ1bGVzIGhhdmUgYWxyZWFkeSBiZWVuIGluc2VydGVkLiBQbGVhc2UgZW5zdXJlIHRoYXQgYEBpbXBvcnRgIHJ1bGVzIGFyZSBiZWZvcmUgYWxsIG90aGVyIHJ1bGVzLicpO1xuICAgICAgfVxuICAgICAgdGhpcy5fYWxyZWFkeUluc2VydGVkT3JkZXJJbnNlbnNpdGl2ZVJ1bGUgPSB0aGlzLl9hbHJlYWR5SW5zZXJ0ZWRPcmRlckluc2Vuc2l0aXZlUnVsZSB8fCAhaXNJbXBvcnRSdWxlO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmlzU3BlZWR5KSB7XG4gICAgICB2YXIgc2hlZXQgPSBzaGVldEZvclRhZyh0YWcpO1xuXG4gICAgICB0cnkge1xuICAgICAgICAvLyB0aGlzIGlzIHRoZSB1bHRyYWZhc3QgdmVyc2lvbiwgd29ya3MgYWNyb3NzIGJyb3dzZXJzXG4gICAgICAgIC8vIHRoZSBiaWcgZHJhd2JhY2sgaXMgdGhhdCB0aGUgY3NzIHdvbid0IGJlIGVkaXRhYmxlIGluIGRldnRvb2xzXG4gICAgICAgIHNoZWV0Lmluc2VydFJ1bGUocnVsZSwgc2hlZXQuY3NzUnVsZXMubGVuZ3RoKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgIS86KC1tb3otcGxhY2Vob2xkZXJ8LW1zLWlucHV0LXBsYWNlaG9sZGVyfC1tb3otcmVhZC13cml0ZXwtbW96LXJlYWQtb25seSl7Ly50ZXN0KHJ1bGUpKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihcIlRoZXJlIHdhcyBhIHByb2JsZW0gaW5zZXJ0aW5nIHRoZSBmb2xsb3dpbmcgcnVsZTogXFxcIlwiICsgcnVsZSArIFwiXFxcIlwiLCBlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0YWcuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUocnVsZSkpO1xuICAgIH1cblxuICAgIHRoaXMuY3RyKys7XG4gIH07XG5cbiAgX3Byb3RvLmZsdXNoID0gZnVuY3Rpb24gZmx1c2goKSB7XG4gICAgLy8gJEZsb3dGaXhNZVxuICAgIHRoaXMudGFncy5mb3JFYWNoKGZ1bmN0aW9uICh0YWcpIHtcbiAgICAgIHJldHVybiB0YWcucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0YWcpO1xuICAgIH0pO1xuICAgIHRoaXMudGFncyA9IFtdO1xuICAgIHRoaXMuY3RyID0gMDtcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICB0aGlzLl9hbHJlYWR5SW5zZXJ0ZWRPcmRlckluc2Vuc2l0aXZlUnVsZSA9IGZhbHNlO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gU3R5bGVTaGVldDtcbn0oKTtcblxuZXhwb3J0IHsgU3R5bGVTaGVldCB9O1xuIiwidmFyIHVuaXRsZXNzS2V5cyA9IHtcbiAgYW5pbWF0aW9uSXRlcmF0aW9uQ291bnQ6IDEsXG4gIGJvcmRlckltYWdlT3V0c2V0OiAxLFxuICBib3JkZXJJbWFnZVNsaWNlOiAxLFxuICBib3JkZXJJbWFnZVdpZHRoOiAxLFxuICBib3hGbGV4OiAxLFxuICBib3hGbGV4R3JvdXA6IDEsXG4gIGJveE9yZGluYWxHcm91cDogMSxcbiAgY29sdW1uQ291bnQ6IDEsXG4gIGNvbHVtbnM6IDEsXG4gIGZsZXg6IDEsXG4gIGZsZXhHcm93OiAxLFxuICBmbGV4UG9zaXRpdmU6IDEsXG4gIGZsZXhTaHJpbms6IDEsXG4gIGZsZXhOZWdhdGl2ZTogMSxcbiAgZmxleE9yZGVyOiAxLFxuICBncmlkUm93OiAxLFxuICBncmlkUm93RW5kOiAxLFxuICBncmlkUm93U3BhbjogMSxcbiAgZ3JpZFJvd1N0YXJ0OiAxLFxuICBncmlkQ29sdW1uOiAxLFxuICBncmlkQ29sdW1uRW5kOiAxLFxuICBncmlkQ29sdW1uU3BhbjogMSxcbiAgZ3JpZENvbHVtblN0YXJ0OiAxLFxuICBtc0dyaWRSb3c6IDEsXG4gIG1zR3JpZFJvd1NwYW46IDEsXG4gIG1zR3JpZENvbHVtbjogMSxcbiAgbXNHcmlkQ29sdW1uU3BhbjogMSxcbiAgZm9udFdlaWdodDogMSxcbiAgbGluZUhlaWdodDogMSxcbiAgb3BhY2l0eTogMSxcbiAgb3JkZXI6IDEsXG4gIG9ycGhhbnM6IDEsXG4gIHRhYlNpemU6IDEsXG4gIHdpZG93czogMSxcbiAgekluZGV4OiAxLFxuICB6b29tOiAxLFxuICBXZWJraXRMaW5lQ2xhbXA6IDEsXG4gIC8vIFNWRy1yZWxhdGVkIHByb3BlcnRpZXNcbiAgZmlsbE9wYWNpdHk6IDEsXG4gIGZsb29kT3BhY2l0eTogMSxcbiAgc3RvcE9wYWNpdHk6IDEsXG4gIHN0cm9rZURhc2hhcnJheTogMSxcbiAgc3Ryb2tlRGFzaG9mZnNldDogMSxcbiAgc3Ryb2tlTWl0ZXJsaW1pdDogMSxcbiAgc3Ryb2tlT3BhY2l0eTogMSxcbiAgc3Ryb2tlV2lkdGg6IDFcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVuaXRsZXNzS2V5cztcbiIsInZhciBpc0Jyb3dzZXIgPSBcIm9iamVjdFwiICE9PSAndW5kZWZpbmVkJztcbmZ1bmN0aW9uIGdldFJlZ2lzdGVyZWRTdHlsZXMocmVnaXN0ZXJlZCwgcmVnaXN0ZXJlZFN0eWxlcywgY2xhc3NOYW1lcykge1xuICB2YXIgcmF3Q2xhc3NOYW1lID0gJyc7XG4gIGNsYXNzTmFtZXMuc3BsaXQoJyAnKS5mb3JFYWNoKGZ1bmN0aW9uIChjbGFzc05hbWUpIHtcbiAgICBpZiAocmVnaXN0ZXJlZFtjbGFzc05hbWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJlZ2lzdGVyZWRTdHlsZXMucHVzaChyZWdpc3RlcmVkW2NsYXNzTmFtZV0gKyBcIjtcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJhd0NsYXNzTmFtZSArPSBjbGFzc05hbWUgKyBcIiBcIjtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gcmF3Q2xhc3NOYW1lO1xufVxudmFyIGluc2VydFN0eWxlcyA9IGZ1bmN0aW9uIGluc2VydFN0eWxlcyhjYWNoZSwgc2VyaWFsaXplZCwgaXNTdHJpbmdUYWcpIHtcbiAgdmFyIGNsYXNzTmFtZSA9IGNhY2hlLmtleSArIFwiLVwiICsgc2VyaWFsaXplZC5uYW1lO1xuXG4gIGlmICggLy8gd2Ugb25seSBuZWVkIHRvIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSByZWdpc3RlcmVkIGNhY2hlIGlmIHRoZVxuICAvLyBjbGFzcyBuYW1lIGNvdWxkIGJlIHVzZWQgZnVydGhlciBkb3duXG4gIC8vIHRoZSB0cmVlIGJ1dCBpZiBpdCdzIGEgc3RyaW5nIHRhZywgd2Uga25vdyBpdCB3b24ndFxuICAvLyBzbyB3ZSBkb24ndCBoYXZlIHRvIGFkZCBpdCB0byByZWdpc3RlcmVkIGNhY2hlLlxuICAvLyB0aGlzIGltcHJvdmVzIG1lbW9yeSB1c2FnZSBzaW5jZSB3ZSBjYW4gYXZvaWQgc3RvcmluZyB0aGUgd2hvbGUgc3R5bGUgc3RyaW5nXG4gIChpc1N0cmluZ1RhZyA9PT0gZmFsc2UgfHwgLy8gd2UgbmVlZCB0byBhbHdheXMgc3RvcmUgaXQgaWYgd2UncmUgaW4gY29tcGF0IG1vZGUgYW5kXG4gIC8vIGluIG5vZGUgc2luY2UgZW1vdGlvbi1zZXJ2ZXIgcmVsaWVzIG9uIHdoZXRoZXIgYSBzdHlsZSBpcyBpblxuICAvLyB0aGUgcmVnaXN0ZXJlZCBjYWNoZSB0byBrbm93IHdoZXRoZXIgYSBzdHlsZSBpcyBnbG9iYWwgb3Igbm90XG4gIC8vIGFsc28sIG5vdGUgdGhhdCB0aGlzIGNoZWNrIHdpbGwgYmUgZGVhZCBjb2RlIGVsaW1pbmF0ZWQgaW4gdGhlIGJyb3dzZXJcbiAgaXNCcm93c2VyID09PSBmYWxzZSApICYmIGNhY2hlLnJlZ2lzdGVyZWRbY2xhc3NOYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgY2FjaGUucmVnaXN0ZXJlZFtjbGFzc05hbWVdID0gc2VyaWFsaXplZC5zdHlsZXM7XG4gIH1cblxuICBpZiAoY2FjaGUuaW5zZXJ0ZWRbc2VyaWFsaXplZC5uYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIGN1cnJlbnQgPSBzZXJpYWxpemVkO1xuXG4gICAgZG8ge1xuICAgICAgdmFyIG1heWJlU3R5bGVzID0gY2FjaGUuaW5zZXJ0KHNlcmlhbGl6ZWQgPT09IGN1cnJlbnQgPyBcIi5cIiArIGNsYXNzTmFtZSA6ICcnLCBjdXJyZW50LCBjYWNoZS5zaGVldCwgdHJ1ZSk7XG5cbiAgICAgIGN1cnJlbnQgPSBjdXJyZW50Lm5leHQ7XG4gICAgfSB3aGlsZSAoY3VycmVudCAhPT0gdW5kZWZpbmVkKTtcbiAgfVxufTtcblxuZXhwb3J0IHsgZ2V0UmVnaXN0ZXJlZFN0eWxlcywgaW5zZXJ0U3R5bGVzIH07XG4iLCJ2YXIgd2Vha01lbW9pemUgPSBmdW5jdGlvbiB3ZWFrTWVtb2l6ZShmdW5jKSB7XG4gIC8vICRGbG93Rml4TWUgZmxvdyBkb2Vzbid0IGluY2x1ZGUgYWxsIG5vbi1wcmltaXRpdmUgdHlwZXMgYXMgYWxsb3dlZCBmb3Igd2Vha21hcHNcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIChhcmcpIHtcbiAgICBpZiAoY2FjaGUuaGFzKGFyZykpIHtcbiAgICAgIC8vICRGbG93Rml4TWVcbiAgICAgIHJldHVybiBjYWNoZS5nZXQoYXJnKTtcbiAgICB9XG5cbiAgICB2YXIgcmV0ID0gZnVuYyhhcmcpO1xuICAgIGNhY2hlLnNldChhcmcsIHJldCk7XG4gICAgcmV0dXJuIHJldDtcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdlYWtNZW1vaXplO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgcmVhY3RJcyA9IHJlcXVpcmUoJ3JlYWN0LWlzJyk7XG5cbi8qKlxuICogQ29weXJpZ2h0IDIwMTUsIFlhaG9vISBJbmMuXG4gKiBDb3B5cmlnaHRzIGxpY2Vuc2VkIHVuZGVyIHRoZSBOZXcgQlNEIExpY2Vuc2UuIFNlZSB0aGUgYWNjb21wYW55aW5nIExJQ0VOU0UgZmlsZSBmb3IgdGVybXMuXG4gKi9cbnZhciBSRUFDVF9TVEFUSUNTID0ge1xuICBjaGlsZENvbnRleHRUeXBlczogdHJ1ZSxcbiAgY29udGV4dFR5cGU6IHRydWUsXG4gIGNvbnRleHRUeXBlczogdHJ1ZSxcbiAgZGVmYXVsdFByb3BzOiB0cnVlLFxuICBkaXNwbGF5TmFtZTogdHJ1ZSxcbiAgZ2V0RGVmYXVsdFByb3BzOiB0cnVlLFxuICBnZXREZXJpdmVkU3RhdGVGcm9tRXJyb3I6IHRydWUsXG4gIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wczogdHJ1ZSxcbiAgbWl4aW5zOiB0cnVlLFxuICBwcm9wVHlwZXM6IHRydWUsXG4gIHR5cGU6IHRydWVcbn07XG52YXIgS05PV05fU1RBVElDUyA9IHtcbiAgbmFtZTogdHJ1ZSxcbiAgbGVuZ3RoOiB0cnVlLFxuICBwcm90b3R5cGU6IHRydWUsXG4gIGNhbGxlcjogdHJ1ZSxcbiAgY2FsbGVlOiB0cnVlLFxuICBhcmd1bWVudHM6IHRydWUsXG4gIGFyaXR5OiB0cnVlXG59O1xudmFyIEZPUldBUkRfUkVGX1NUQVRJQ1MgPSB7XG4gICckJHR5cGVvZic6IHRydWUsXG4gIHJlbmRlcjogdHJ1ZSxcbiAgZGVmYXVsdFByb3BzOiB0cnVlLFxuICBkaXNwbGF5TmFtZTogdHJ1ZSxcbiAgcHJvcFR5cGVzOiB0cnVlXG59O1xudmFyIE1FTU9fU1RBVElDUyA9IHtcbiAgJyQkdHlwZW9mJzogdHJ1ZSxcbiAgY29tcGFyZTogdHJ1ZSxcbiAgZGVmYXVsdFByb3BzOiB0cnVlLFxuICBkaXNwbGF5TmFtZTogdHJ1ZSxcbiAgcHJvcFR5cGVzOiB0cnVlLFxuICB0eXBlOiB0cnVlXG59O1xudmFyIFRZUEVfU1RBVElDUyA9IHt9O1xuVFlQRV9TVEFUSUNTW3JlYWN0SXMuRm9yd2FyZFJlZl0gPSBGT1JXQVJEX1JFRl9TVEFUSUNTO1xuVFlQRV9TVEFUSUNTW3JlYWN0SXMuTWVtb10gPSBNRU1PX1NUQVRJQ1M7XG5cbmZ1bmN0aW9uIGdldFN0YXRpY3MoY29tcG9uZW50KSB7XG4gIC8vIFJlYWN0IHYxNi4xMSBhbmQgYmVsb3dcbiAgaWYgKHJlYWN0SXMuaXNNZW1vKGNvbXBvbmVudCkpIHtcbiAgICByZXR1cm4gTUVNT19TVEFUSUNTO1xuICB9IC8vIFJlYWN0IHYxNi4xMiBhbmQgYWJvdmVcblxuXG4gIHJldHVybiBUWVBFX1NUQVRJQ1NbY29tcG9uZW50WyckJHR5cGVvZiddXSB8fCBSRUFDVF9TVEFUSUNTO1xufVxuXG52YXIgZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG52YXIgZ2V0T3duUHJvcGVydHlOYW1lcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO1xudmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbnZhciBnZXRQcm90b3R5cGVPZiA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbnZhciBvYmplY3RQcm90b3R5cGUgPSBPYmplY3QucHJvdG90eXBlO1xuZnVuY3Rpb24gaG9pc3ROb25SZWFjdFN0YXRpY3ModGFyZ2V0Q29tcG9uZW50LCBzb3VyY2VDb21wb25lbnQsIGJsYWNrbGlzdCkge1xuICBpZiAodHlwZW9mIHNvdXJjZUNvbXBvbmVudCAhPT0gJ3N0cmluZycpIHtcbiAgICAvLyBkb24ndCBob2lzdCBvdmVyIHN0cmluZyAoaHRtbCkgY29tcG9uZW50c1xuICAgIGlmIChvYmplY3RQcm90b3R5cGUpIHtcbiAgICAgIHZhciBpbmhlcml0ZWRDb21wb25lbnQgPSBnZXRQcm90b3R5cGVPZihzb3VyY2VDb21wb25lbnQpO1xuXG4gICAgICBpZiAoaW5oZXJpdGVkQ29tcG9uZW50ICYmIGluaGVyaXRlZENvbXBvbmVudCAhPT0gb2JqZWN0UHJvdG90eXBlKSB7XG4gICAgICAgIGhvaXN0Tm9uUmVhY3RTdGF0aWNzKHRhcmdldENvbXBvbmVudCwgaW5oZXJpdGVkQ29tcG9uZW50LCBibGFja2xpc3QpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBrZXlzID0gZ2V0T3duUHJvcGVydHlOYW1lcyhzb3VyY2VDb21wb25lbnQpO1xuXG4gICAgaWYgKGdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgICAga2V5cyA9IGtleXMuY29uY2F0KGdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2VDb21wb25lbnQpKTtcbiAgICB9XG5cbiAgICB2YXIgdGFyZ2V0U3RhdGljcyA9IGdldFN0YXRpY3ModGFyZ2V0Q29tcG9uZW50KTtcbiAgICB2YXIgc291cmNlU3RhdGljcyA9IGdldFN0YXRpY3Moc291cmNlQ29tcG9uZW50KTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7ICsraSkge1xuICAgICAgdmFyIGtleSA9IGtleXNbaV07XG5cbiAgICAgIGlmICghS05PV05fU1RBVElDU1trZXldICYmICEoYmxhY2tsaXN0ICYmIGJsYWNrbGlzdFtrZXldKSAmJiAhKHNvdXJjZVN0YXRpY3MgJiYgc291cmNlU3RhdGljc1trZXldKSAmJiAhKHRhcmdldFN0YXRpY3MgJiYgdGFyZ2V0U3RhdGljc1trZXldKSkge1xuICAgICAgICB2YXIgZGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2VDb21wb25lbnQsIGtleSk7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBBdm9pZCBmYWlsdXJlcyBmcm9tIHJlYWQtb25seSBwcm9wZXJ0aWVzXG4gICAgICAgICAgZGVmaW5lUHJvcGVydHkodGFyZ2V0Q29tcG9uZW50LCBrZXksIGRlc2NyaXB0b3IpO1xuICAgICAgICB9IGNhdGNoIChlKSB7fVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXRDb21wb25lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaG9pc3ROb25SZWFjdFN0YXRpY3M7XG4iLCIvKiogQGxpY2Vuc2UgUmVhY3QgdjE2LjEzLjFcbiAqIHJlYWN0LWlzLmRldmVsb3BtZW50LmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAoZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbi8vIFRoZSBTeW1ib2wgdXNlZCB0byB0YWcgdGhlIFJlYWN0RWxlbWVudC1saWtlIHR5cGVzLiBJZiB0aGVyZSBpcyBubyBuYXRpdmUgU3ltYm9sXG4vLyBub3IgcG9seWZpbGwsIHRoZW4gYSBwbGFpbiBudW1iZXIgaXMgdXNlZCBmb3IgcGVyZm9ybWFuY2UuXG52YXIgaGFzU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuZm9yO1xudmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKSA6IDB4ZWFjNztcbnZhciBSRUFDVF9QT1JUQUxfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnBvcnRhbCcpIDogMHhlYWNhO1xudmFyIFJFQUNUX0ZSQUdNRU5UX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5mcmFnbWVudCcpIDogMHhlYWNiO1xudmFyIFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zdHJpY3RfbW9kZScpIDogMHhlYWNjO1xudmFyIFJFQUNUX1BST0ZJTEVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5wcm9maWxlcicpIDogMHhlYWQyO1xudmFyIFJFQUNUX1BST1ZJREVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5wcm92aWRlcicpIDogMHhlYWNkO1xudmFyIFJFQUNUX0NPTlRFWFRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmNvbnRleHQnKSA6IDB4ZWFjZTsgLy8gVE9ETzogV2UgZG9uJ3QgdXNlIEFzeW5jTW9kZSBvciBDb25jdXJyZW50TW9kZSBhbnltb3JlLiBUaGV5IHdlcmUgdGVtcG9yYXJ5XG4vLyAodW5zdGFibGUpIEFQSXMgdGhhdCBoYXZlIGJlZW4gcmVtb3ZlZC4gQ2FuIHdlIHJlbW92ZSB0aGUgc3ltYm9scz9cblxudmFyIFJFQUNUX0FTWU5DX01PREVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmFzeW5jX21vZGUnKSA6IDB4ZWFjZjtcbnZhciBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmNvbmN1cnJlbnRfbW9kZScpIDogMHhlYWNmO1xudmFyIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5mb3J3YXJkX3JlZicpIDogMHhlYWQwO1xudmFyIFJFQUNUX1NVU1BFTlNFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zdXNwZW5zZScpIDogMHhlYWQxO1xudmFyIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN1c3BlbnNlX2xpc3QnKSA6IDB4ZWFkODtcbnZhciBSRUFDVF9NRU1PX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5tZW1vJykgOiAweGVhZDM7XG52YXIgUkVBQ1RfTEFaWV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QubGF6eScpIDogMHhlYWQ0O1xudmFyIFJFQUNUX0JMT0NLX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5ibG9jaycpIDogMHhlYWQ5O1xudmFyIFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5mdW5kYW1lbnRhbCcpIDogMHhlYWQ1O1xudmFyIFJFQUNUX1JFU1BPTkRFUl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucmVzcG9uZGVyJykgOiAweGVhZDY7XG52YXIgUkVBQ1RfU0NPUEVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnNjb3BlJykgOiAweGVhZDc7XG5cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKSB7XG4gIHJldHVybiB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicgfHwgLy8gTm90ZTogaXRzIHR5cGVvZiBtaWdodCBiZSBvdGhlciB0aGFuICdzeW1ib2wnIG9yICdudW1iZXInIGlmIGl0J3MgYSBwb2x5ZmlsbC5cbiAgdHlwZSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgfHwgdHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwgJiYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0xBWllfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9DT05URVhUX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1JFU1BPTkRFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1NDT1BFX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQkxPQ0tfVFlQRSk7XG59XG5cbmZ1bmN0aW9uIHR5cGVPZihvYmplY3QpIHtcbiAgaWYgKHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCkge1xuICAgIHZhciAkJHR5cGVvZiA9IG9iamVjdC4kJHR5cGVvZjtcblxuICAgIHN3aXRjaCAoJCR0eXBlb2YpIHtcbiAgICAgIGNhc2UgUkVBQ1RfRUxFTUVOVF9UWVBFOlxuICAgICAgICB2YXIgdHlwZSA9IG9iamVjdC50eXBlO1xuXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgIGNhc2UgUkVBQ1RfQVNZTkNfTU9ERV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9GUkFHTUVOVF9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfUFJPRklMRVJfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1NUUklDVF9NT0RFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9UWVBFOlxuICAgICAgICAgICAgcmV0dXJuIHR5cGU7XG5cbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdmFyICQkdHlwZW9mVHlwZSA9IHR5cGUgJiYgdHlwZS4kJHR5cGVvZjtcblxuICAgICAgICAgICAgc3dpdGNoICgkJHR5cGVvZlR5cGUpIHtcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9DT05URVhUX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX1BST1ZJREVSX1RZUEU6XG4gICAgICAgICAgICAgICAgcmV0dXJuICQkdHlwZW9mVHlwZTtcblxuICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiAkJHR5cGVvZjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgIGNhc2UgUkVBQ1RfUE9SVEFMX1RZUEU6XG4gICAgICAgIHJldHVybiAkJHR5cGVvZjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkO1xufSAvLyBBc3luY01vZGUgaXMgZGVwcmVjYXRlZCBhbG9uZyB3aXRoIGlzQXN5bmNNb2RlXG5cbnZhciBBc3luY01vZGUgPSBSRUFDVF9BU1lOQ19NT0RFX1RZUEU7XG52YXIgQ29uY3VycmVudE1vZGUgPSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRTtcbnZhciBDb250ZXh0Q29uc3VtZXIgPSBSRUFDVF9DT05URVhUX1RZUEU7XG52YXIgQ29udGV4dFByb3ZpZGVyID0gUkVBQ1RfUFJPVklERVJfVFlQRTtcbnZhciBFbGVtZW50ID0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xudmFyIEZvcndhcmRSZWYgPSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFO1xudmFyIEZyYWdtZW50ID0gUkVBQ1RfRlJBR01FTlRfVFlQRTtcbnZhciBMYXp5ID0gUkVBQ1RfTEFaWV9UWVBFO1xudmFyIE1lbW8gPSBSRUFDVF9NRU1PX1RZUEU7XG52YXIgUG9ydGFsID0gUkVBQ1RfUE9SVEFMX1RZUEU7XG52YXIgUHJvZmlsZXIgPSBSRUFDVF9QUk9GSUxFUl9UWVBFO1xudmFyIFN0cmljdE1vZGUgPSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFO1xudmFyIFN1c3BlbnNlID0gUkVBQ1RfU1VTUEVOU0VfVFlQRTtcbnZhciBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSA9IGZhbHNlOyAvLyBBc3luY01vZGUgc2hvdWxkIGJlIGRlcHJlY2F0ZWRcblxuZnVuY3Rpb24gaXNBc3luY01vZGUob2JqZWN0KSB7XG4gIHtcbiAgICBpZiAoIWhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlKSB7XG4gICAgICBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSA9IHRydWU7IC8vIFVzaW5nIGNvbnNvbGVbJ3dhcm4nXSB0byBldmFkZSBCYWJlbCBhbmQgRVNMaW50XG5cbiAgICAgIGNvbnNvbGVbJ3dhcm4nXSgnVGhlIFJlYWN0SXMuaXNBc3luY01vZGUoKSBhbGlhcyBoYXMgYmVlbiBkZXByZWNhdGVkLCAnICsgJ2FuZCB3aWxsIGJlIHJlbW92ZWQgaW4gUmVhY3QgMTcrLiBVcGRhdGUgeW91ciBjb2RlIHRvIHVzZSAnICsgJ1JlYWN0SXMuaXNDb25jdXJyZW50TW9kZSgpIGluc3RlYWQuIEl0IGhhcyB0aGUgZXhhY3Qgc2FtZSBBUEkuJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGlzQ29uY3VycmVudE1vZGUob2JqZWN0KSB8fCB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQVNZTkNfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb25jdXJyZW50TW9kZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzQ29udGV4dENvbnN1bWVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0NPTlRFWFRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzQ29udGV4dFByb3ZpZGVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BST1ZJREVSX1RZUEU7XG59XG5mdW5jdGlvbiBpc0VsZW1lbnQob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwgJiYgb2JqZWN0LiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEU7XG59XG5mdW5jdGlvbiBpc0ZvcndhcmRSZWYob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRnJhZ21lbnQob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzTGF6eShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9MQVpZX1RZUEU7XG59XG5mdW5jdGlvbiBpc01lbW8ob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfTUVNT19UWVBFO1xufVxuZnVuY3Rpb24gaXNQb3J0YWwob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUE9SVEFMX1RZUEU7XG59XG5mdW5jdGlvbiBpc1Byb2ZpbGVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEU7XG59XG5mdW5jdGlvbiBpc1N0cmljdE1vZGUob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzU3VzcGVuc2Uob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRTtcbn1cblxuZXhwb3J0cy5Bc3luY01vZGUgPSBBc3luY01vZGU7XG5leHBvcnRzLkNvbmN1cnJlbnRNb2RlID0gQ29uY3VycmVudE1vZGU7XG5leHBvcnRzLkNvbnRleHRDb25zdW1lciA9IENvbnRleHRDb25zdW1lcjtcbmV4cG9ydHMuQ29udGV4dFByb3ZpZGVyID0gQ29udGV4dFByb3ZpZGVyO1xuZXhwb3J0cy5FbGVtZW50ID0gRWxlbWVudDtcbmV4cG9ydHMuRm9yd2FyZFJlZiA9IEZvcndhcmRSZWY7XG5leHBvcnRzLkZyYWdtZW50ID0gRnJhZ21lbnQ7XG5leHBvcnRzLkxhenkgPSBMYXp5O1xuZXhwb3J0cy5NZW1vID0gTWVtbztcbmV4cG9ydHMuUG9ydGFsID0gUG9ydGFsO1xuZXhwb3J0cy5Qcm9maWxlciA9IFByb2ZpbGVyO1xuZXhwb3J0cy5TdHJpY3RNb2RlID0gU3RyaWN0TW9kZTtcbmV4cG9ydHMuU3VzcGVuc2UgPSBTdXNwZW5zZTtcbmV4cG9ydHMuaXNBc3luY01vZGUgPSBpc0FzeW5jTW9kZTtcbmV4cG9ydHMuaXNDb25jdXJyZW50TW9kZSA9IGlzQ29uY3VycmVudE1vZGU7XG5leHBvcnRzLmlzQ29udGV4dENvbnN1bWVyID0gaXNDb250ZXh0Q29uc3VtZXI7XG5leHBvcnRzLmlzQ29udGV4dFByb3ZpZGVyID0gaXNDb250ZXh0UHJvdmlkZXI7XG5leHBvcnRzLmlzRWxlbWVudCA9IGlzRWxlbWVudDtcbmV4cG9ydHMuaXNGb3J3YXJkUmVmID0gaXNGb3J3YXJkUmVmO1xuZXhwb3J0cy5pc0ZyYWdtZW50ID0gaXNGcmFnbWVudDtcbmV4cG9ydHMuaXNMYXp5ID0gaXNMYXp5O1xuZXhwb3J0cy5pc01lbW8gPSBpc01lbW87XG5leHBvcnRzLmlzUG9ydGFsID0gaXNQb3J0YWw7XG5leHBvcnRzLmlzUHJvZmlsZXIgPSBpc1Byb2ZpbGVyO1xuZXhwb3J0cy5pc1N0cmljdE1vZGUgPSBpc1N0cmljdE1vZGU7XG5leHBvcnRzLmlzU3VzcGVuc2UgPSBpc1N1c3BlbnNlO1xuZXhwb3J0cy5pc1ZhbGlkRWxlbWVudFR5cGUgPSBpc1ZhbGlkRWxlbWVudFR5cGU7XG5leHBvcnRzLnR5cGVPZiA9IHR5cGVPZjtcbiAgfSkoKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1pcy5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1pcy5kZXZlbG9wbWVudC5qcycpO1xufVxuIiwiLyoqIEBsaWNlbnNlIFJlYWN0IHZ1bmRlZmluZWRcbiAqIHJlYWN0LWpzeC1kZXYtcnVudGltZS5kZXZlbG9wbWVudC5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAoZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgX2Fzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcblxuLy8gQVRURU5USU9OXG4vLyBXaGVuIGFkZGluZyBuZXcgc3ltYm9scyB0byB0aGlzIGZpbGUsXG4vLyBQbGVhc2UgY29uc2lkZXIgYWxzbyBhZGRpbmcgdG8gJ3JlYWN0LWRldnRvb2xzLXNoYXJlZC9zcmMvYmFja2VuZC9SZWFjdFN5bWJvbHMnXG4vLyBUaGUgU3ltYm9sIHVzZWQgdG8gdGFnIHRoZSBSZWFjdEVsZW1lbnQtbGlrZSB0eXBlcy4gSWYgdGhlcmUgaXMgbm8gbmF0aXZlIFN5bWJvbFxuLy8gbm9yIHBvbHlmaWxsLCB0aGVuIGEgcGxhaW4gbnVtYmVyIGlzIHVzZWQgZm9yIHBlcmZvcm1hbmNlLlxudmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9IDB4ZWFjNztcbnZhciBSRUFDVF9QT1JUQUxfVFlQRSA9IDB4ZWFjYTtcbmV4cG9ydHMuRnJhZ21lbnQgPSAweGVhY2I7XG52YXIgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IDB4ZWFjYztcbnZhciBSRUFDVF9QUk9GSUxFUl9UWVBFID0gMHhlYWQyO1xudmFyIFJFQUNUX1BST1ZJREVSX1RZUEUgPSAweGVhY2Q7XG52YXIgUkVBQ1RfQ09OVEVYVF9UWVBFID0gMHhlYWNlO1xudmFyIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSAweGVhZDA7XG52YXIgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IDB4ZWFkMTtcbnZhciBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgPSAweGVhZDg7XG52YXIgUkVBQ1RfTUVNT19UWVBFID0gMHhlYWQzO1xudmFyIFJFQUNUX0xBWllfVFlQRSA9IDB4ZWFkNDtcbnZhciBSRUFDVF9TQ09QRV9UWVBFID0gMHhlYWQ3O1xudmFyIFJFQUNUX09QQVFVRV9JRF9UWVBFID0gMHhlYWUwO1xudmFyIFJFQUNUX0RFQlVHX1RSQUNJTkdfTU9ERV9UWVBFID0gMHhlYWUxO1xudmFyIFJFQUNUX09GRlNDUkVFTl9UWVBFID0gMHhlYWUyO1xudmFyIFJFQUNUX0xFR0FDWV9ISURERU5fVFlQRSA9IDB4ZWFlMztcbnZhciBSRUFDVF9DQUNIRV9UWVBFID0gMHhlYWU0O1xuXG5pZiAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuZm9yKSB7XG4gIHZhciBzeW1ib2xGb3IgPSBTeW1ib2wuZm9yO1xuICBSRUFDVF9FTEVNRU5UX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmVsZW1lbnQnKTtcbiAgUkVBQ1RfUE9SVEFMX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnBvcnRhbCcpO1xuICBleHBvcnRzLkZyYWdtZW50ID0gc3ltYm9sRm9yKCdyZWFjdC5mcmFnbWVudCcpO1xuICBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zdHJpY3RfbW9kZScpO1xuICBSRUFDVF9QUk9GSUxFUl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5wcm9maWxlcicpO1xuICBSRUFDVF9QUk9WSURFUl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5wcm92aWRlcicpO1xuICBSRUFDVF9DT05URVhUX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmNvbnRleHQnKTtcbiAgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZm9yd2FyZF9yZWYnKTtcbiAgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc3VzcGVuc2UnKTtcbiAgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zdXNwZW5zZV9saXN0Jyk7XG4gIFJFQUNUX01FTU9fVFlQRSA9IHN5bWJvbEZvcigncmVhY3QubWVtbycpO1xuICBSRUFDVF9MQVpZX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmxhenknKTtcbiAgUkVBQ1RfU0NPUEVfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc2NvcGUnKTtcbiAgUkVBQ1RfT1BBUVVFX0lEX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0Lm9wYXF1ZS5pZCcpO1xuICBSRUFDVF9ERUJVR19UUkFDSU5HX01PREVfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZGVidWdfdHJhY2VfbW9kZScpO1xuICBSRUFDVF9PRkZTQ1JFRU5fVFlQRSA9IHN5bWJvbEZvcigncmVhY3Qub2Zmc2NyZWVuJyk7XG4gIFJFQUNUX0xFR0FDWV9ISURERU5fVFlQRSA9IHN5bWJvbEZvcigncmVhY3QubGVnYWN5X2hpZGRlbicpO1xuICBSRUFDVF9DQUNIRV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5jYWNoZScpO1xufVxuXG52YXIgTUFZQkVfSVRFUkFUT1JfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuaXRlcmF0b3I7XG52YXIgRkFVWF9JVEVSQVRPUl9TWU1CT0wgPSAnQEBpdGVyYXRvcic7XG5mdW5jdGlvbiBnZXRJdGVyYXRvckZuKG1heWJlSXRlcmFibGUpIHtcbiAgaWYgKG1heWJlSXRlcmFibGUgPT09IG51bGwgfHwgdHlwZW9mIG1heWJlSXRlcmFibGUgIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB2YXIgbWF5YmVJdGVyYXRvciA9IE1BWUJFX0lURVJBVE9SX1NZTUJPTCAmJiBtYXliZUl0ZXJhYmxlW01BWUJFX0lURVJBVE9SX1NZTUJPTF0gfHwgbWF5YmVJdGVyYWJsZVtGQVVYX0lURVJBVE9SX1NZTUJPTF07XG5cbiAgaWYgKHR5cGVvZiBtYXliZUl0ZXJhdG9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIG1heWJlSXRlcmF0b3I7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxudmFyIFJlYWN0U2hhcmVkSW50ZXJuYWxzID0gUmVhY3QuX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQ7XG5cbmZ1bmN0aW9uIGVycm9yKGZvcm1hdCkge1xuICB7XG4gICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4yID4gMSA/IF9sZW4yIC0gMSA6IDApLCBfa2V5MiA9IDE7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgIGFyZ3NbX2tleTIgLSAxXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgfVxuXG4gICAgcHJpbnRXYXJuaW5nKCdlcnJvcicsIGZvcm1hdCwgYXJncyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcHJpbnRXYXJuaW5nKGxldmVsLCBmb3JtYXQsIGFyZ3MpIHtcbiAgLy8gV2hlbiBjaGFuZ2luZyB0aGlzIGxvZ2ljLCB5b3UgbWlnaHQgd2FudCB0byBhbHNvXG4gIC8vIHVwZGF0ZSBjb25zb2xlV2l0aFN0YWNrRGV2Lnd3dy5qcyBhcyB3ZWxsLlxuICB7XG4gICAgdmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lO1xuICAgIHZhciBzdGFjayA9IFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0U3RhY2tBZGRlbmR1bSgpO1xuXG4gICAgaWYgKHN0YWNrICE9PSAnJykge1xuICAgICAgZm9ybWF0ICs9ICclcyc7XG4gICAgICBhcmdzID0gYXJncy5jb25jYXQoW3N0YWNrXSk7XG4gICAgfVxuXG4gICAgdmFyIGFyZ3NXaXRoRm9ybWF0ID0gYXJncy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHJldHVybiAnJyArIGl0ZW07XG4gICAgfSk7IC8vIENhcmVmdWw6IFJOIGN1cnJlbnRseSBkZXBlbmRzIG9uIHRoaXMgcHJlZml4XG5cbiAgICBhcmdzV2l0aEZvcm1hdC51bnNoaWZ0KCdXYXJuaW5nOiAnICsgZm9ybWF0KTsgLy8gV2UgaW50ZW50aW9uYWxseSBkb24ndCB1c2Ugc3ByZWFkIChvciAuYXBwbHkpIGRpcmVjdGx5IGJlY2F1c2UgaXRcbiAgICAvLyBicmVha3MgSUU5OiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzEzNjEwXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZ1xuXG4gICAgRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5LmNhbGwoY29uc29sZVtsZXZlbF0sIGNvbnNvbGUsIGFyZ3NXaXRoRm9ybWF0KTtcbiAgfVxufVxuXG4vLyBGaWx0ZXIgY2VydGFpbiBET00gYXR0cmlidXRlcyAoZS5nLiBzcmMsIGhyZWYpIGlmIHRoZWlyIHZhbHVlcyBhcmUgZW1wdHkgc3RyaW5ncy5cbnZhciBlbmFibGVDYWNoZSA9IGZhbHNlOyAvLyBPbmx5IHVzZWQgaW4gd3d3IGJ1aWxkcy5cblxudmFyIGVuYWJsZVNjb3BlQVBJID0gZmFsc2U7IC8vIEV4cGVyaW1lbnRhbCBDcmVhdGUgRXZlbnQgSGFuZGxlIEFQSS5cblxudmFyIFJFQUNUX01PRFVMRV9SRUZFUkVOQ0UgPSAwO1xuXG5pZiAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJykge1xuICBSRUFDVF9NT0RVTEVfUkVGRVJFTkNFID0gU3ltYm9sLmZvcigncmVhY3QubW9kdWxlLnJlZmVyZW5jZScpO1xufVxuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSkge1xuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gLy8gTm90ZTogdHlwZW9mIG1pZ2h0IGJlIG90aGVyIHRoYW4gJ3N5bWJvbCcgb3IgJ251bWJlcicgKGUuZy4gaWYgaXQncyBhIHBvbHlmaWxsKS5cblxuXG4gIGlmICh0eXBlID09PSBleHBvcnRzLkZyYWdtZW50IHx8IHR5cGUgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfREVCVUdfVFJBQ0lOR19NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9MRUdBQ1lfSElEREVOX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfT0ZGU0NSRUVOX1RZUEUgfHwgZW5hYmxlU2NvcGVBUEkgIHx8IGVuYWJsZUNhY2hlICkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsKSB7XG4gICAgaWYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0xBWllfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9DT05URVhUX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSB8fCAvLyBUaGlzIG5lZWRzIHRvIGluY2x1ZGUgYWxsIHBvc3NpYmxlIG1vZHVsZSByZWZlcmVuY2Ugb2JqZWN0XG4gICAgLy8gdHlwZXMgc3VwcG9ydGVkIGJ5IGFueSBGbGlnaHQgY29uZmlndXJhdGlvbiBhbnl3aGVyZSBzaW5jZVxuICAgIC8vIHdlIGRvbid0IGtub3cgd2hpY2ggRmxpZ2h0IGJ1aWxkIHRoaXMgd2lsbCBlbmQgdXAgYmVpbmcgdXNlZFxuICAgIC8vIHdpdGguXG4gICAgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTU9EVUxFX1JFRkVSRU5DRSB8fCB0eXBlLmdldE1vZHVsZUlkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gZ2V0V3JhcHBlZE5hbWUob3V0ZXJUeXBlLCBpbm5lclR5cGUsIHdyYXBwZXJOYW1lKSB7XG4gIHZhciBkaXNwbGF5TmFtZSA9IG91dGVyVHlwZS5kaXNwbGF5TmFtZTtcblxuICBpZiAoZGlzcGxheU5hbWUpIHtcbiAgICByZXR1cm4gZGlzcGxheU5hbWU7XG4gIH1cblxuICB2YXIgZnVuY3Rpb25OYW1lID0gaW5uZXJUeXBlLmRpc3BsYXlOYW1lIHx8IGlubmVyVHlwZS5uYW1lIHx8ICcnO1xuICByZXR1cm4gZnVuY3Rpb25OYW1lICE9PSAnJyA/IHdyYXBwZXJOYW1lICsgXCIoXCIgKyBmdW5jdGlvbk5hbWUgKyBcIilcIiA6IHdyYXBwZXJOYW1lO1xufSAvLyBLZWVwIGluIHN5bmMgd2l0aCByZWFjdC1yZWNvbmNpbGVyL2dldENvbXBvbmVudE5hbWVGcm9tRmliZXJcblxuXG5mdW5jdGlvbiBnZXRDb250ZXh0TmFtZSh0eXBlKSB7XG4gIHJldHVybiB0eXBlLmRpc3BsYXlOYW1lIHx8ICdDb250ZXh0Jztcbn0gLy8gTm90ZSB0aGF0IHRoZSByZWNvbmNpbGVyIHBhY2thZ2Ugc2hvdWxkIGdlbmVyYWxseSBwcmVmZXIgdG8gdXNlIGdldENvbXBvbmVudE5hbWVGcm9tRmliZXIoKSBpbnN0ZWFkLlxuXG5cbmZ1bmN0aW9uIGdldENvbXBvbmVudE5hbWVGcm9tVHlwZSh0eXBlKSB7XG4gIGlmICh0eXBlID09IG51bGwpIHtcbiAgICAvLyBIb3N0IHJvb3QsIHRleHQgbm9kZSBvciBqdXN0IGludmFsaWQgdHlwZS5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHtcbiAgICBpZiAodHlwZW9mIHR5cGUudGFnID09PSAnbnVtYmVyJykge1xuICAgICAgZXJyb3IoJ1JlY2VpdmVkIGFuIHVuZXhwZWN0ZWQgb2JqZWN0IGluIGdldENvbXBvbmVudE5hbWVGcm9tVHlwZSgpLiAnICsgJ1RoaXMgaXMgbGlrZWx5IGEgYnVnIGluIFJlYWN0LiBQbGVhc2UgZmlsZSBhbiBpc3N1ZS4nKTtcbiAgICB9XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gdHlwZS5kaXNwbGF5TmFtZSB8fCB0eXBlLm5hbWUgfHwgbnVsbDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgZXhwb3J0cy5GcmFnbWVudDpcbiAgICAgIHJldHVybiAnRnJhZ21lbnQnO1xuXG4gICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgIHJldHVybiAnUG9ydGFsJztcblxuICAgIGNhc2UgUkVBQ1RfUFJPRklMRVJfVFlQRTpcbiAgICAgIHJldHVybiAnUHJvZmlsZXInO1xuXG4gICAgY2FzZSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFOlxuICAgICAgcmV0dXJuICdTdHJpY3RNb2RlJztcblxuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcbiAgICAgIHJldHVybiAnU3VzcGVuc2UnO1xuXG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEU6XG4gICAgICByZXR1cm4gJ1N1c3BlbnNlTGlzdCc7XG5cbiAgICBjYXNlIFJFQUNUX0NBQ0hFX1RZUEU6XG4gICAgICByZXR1cm4gJ0NhY2hlJztcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICBzd2l0Y2ggKHR5cGUuJCR0eXBlb2YpIHtcbiAgICAgIGNhc2UgUkVBQ1RfQ09OVEVYVF9UWVBFOlxuICAgICAgICB2YXIgY29udGV4dCA9IHR5cGU7XG4gICAgICAgIHJldHVybiBnZXRDb250ZXh0TmFtZShjb250ZXh0KSArICcuQ29uc3VtZXInO1xuXG4gICAgICBjYXNlIFJFQUNUX1BST1ZJREVSX1RZUEU6XG4gICAgICAgIHZhciBwcm92aWRlciA9IHR5cGU7XG4gICAgICAgIHJldHVybiBnZXRDb250ZXh0TmFtZShwcm92aWRlci5fY29udGV4dCkgKyAnLlByb3ZpZGVyJztcblxuICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICByZXR1cm4gZ2V0V3JhcHBlZE5hbWUodHlwZSwgdHlwZS5yZW5kZXIsICdGb3J3YXJkUmVmJyk7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICB2YXIgb3V0ZXJOYW1lID0gdHlwZS5kaXNwbGF5TmFtZSB8fCBudWxsO1xuXG4gICAgICAgIGlmIChvdXRlck5hbWUgIT09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gb3V0ZXJOYW1lO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGdldENvbXBvbmVudE5hbWVGcm9tVHlwZSh0eXBlLnR5cGUpIHx8ICdNZW1vJztcblxuICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XG4gICAgICAgIHtcbiAgICAgICAgICB2YXIgbGF6eUNvbXBvbmVudCA9IHR5cGU7XG4gICAgICAgICAgdmFyIHBheWxvYWQgPSBsYXp5Q29tcG9uZW50Ll9wYXlsb2FkO1xuICAgICAgICAgIHZhciBpbml0ID0gbGF6eUNvbXBvbmVudC5faW5pdDtcblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKGluaXQocGF5bG9hZCkpO1xuICAgICAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG4vLyBIZWxwZXJzIHRvIHBhdGNoIGNvbnNvbGUubG9ncyB0byBhdm9pZCBsb2dnaW5nIGR1cmluZyBzaWRlLWVmZmVjdCBmcmVlXG4vLyByZXBsYXlpbmcgb24gcmVuZGVyIGZ1bmN0aW9uLiBUaGlzIGN1cnJlbnRseSBvbmx5IHBhdGNoZXMgdGhlIG9iamVjdFxuLy8gbGF6aWx5IHdoaWNoIHdvbid0IGNvdmVyIGlmIHRoZSBsb2cgZnVuY3Rpb24gd2FzIGV4dHJhY3RlZCBlYWdlcmx5LlxuLy8gV2UgY291bGQgYWxzbyBlYWdlcmx5IHBhdGNoIHRoZSBtZXRob2QuXG52YXIgZGlzYWJsZWREZXB0aCA9IDA7XG52YXIgcHJldkxvZztcbnZhciBwcmV2SW5mbztcbnZhciBwcmV2V2FybjtcbnZhciBwcmV2RXJyb3I7XG52YXIgcHJldkdyb3VwO1xudmFyIHByZXZHcm91cENvbGxhcHNlZDtcbnZhciBwcmV2R3JvdXBFbmQ7XG5cbmZ1bmN0aW9uIGRpc2FibGVkTG9nKCkge31cblxuZGlzYWJsZWRMb2cuX19yZWFjdERpc2FibGVkTG9nID0gdHJ1ZTtcbmZ1bmN0aW9uIGRpc2FibGVMb2dzKCkge1xuICB7XG4gICAgaWYgKGRpc2FibGVkRGVwdGggPT09IDApIHtcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgICAgcHJldkxvZyA9IGNvbnNvbGUubG9nO1xuICAgICAgcHJldkluZm8gPSBjb25zb2xlLmluZm87XG4gICAgICBwcmV2V2FybiA9IGNvbnNvbGUud2FybjtcbiAgICAgIHByZXZFcnJvciA9IGNvbnNvbGUuZXJyb3I7XG4gICAgICBwcmV2R3JvdXAgPSBjb25zb2xlLmdyb3VwO1xuICAgICAgcHJldkdyb3VwQ29sbGFwc2VkID0gY29uc29sZS5ncm91cENvbGxhcHNlZDtcbiAgICAgIHByZXZHcm91cEVuZCA9IGNvbnNvbGUuZ3JvdXBFbmQ7IC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMTkwOTlcblxuICAgICAgdmFyIHByb3BzID0ge1xuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIHZhbHVlOiBkaXNhYmxlZExvZyxcbiAgICAgICAgd3JpdGFibGU6IHRydWVcbiAgICAgIH07IC8vICRGbG93Rml4TWUgRmxvdyB0aGlua3MgY29uc29sZSBpcyBpbW11dGFibGUuXG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGNvbnNvbGUsIHtcbiAgICAgICAgaW5mbzogcHJvcHMsXG4gICAgICAgIGxvZzogcHJvcHMsXG4gICAgICAgIHdhcm46IHByb3BzLFxuICAgICAgICBlcnJvcjogcHJvcHMsXG4gICAgICAgIGdyb3VwOiBwcm9wcyxcbiAgICAgICAgZ3JvdXBDb2xsYXBzZWQ6IHByb3BzLFxuICAgICAgICBncm91cEVuZDogcHJvcHNcbiAgICAgIH0pO1xuICAgICAgLyogZXNsaW50LWVuYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICB9XG5cbiAgICBkaXNhYmxlZERlcHRoKys7XG4gIH1cbn1cbmZ1bmN0aW9uIHJlZW5hYmxlTG9ncygpIHtcbiAge1xuICAgIGRpc2FibGVkRGVwdGgtLTtcblxuICAgIGlmIChkaXNhYmxlZERlcHRoID09PSAwKSB7XG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICAgIHZhciBwcm9wcyA9IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZVxuICAgICAgfTsgLy8gJEZsb3dGaXhNZSBGbG93IHRoaW5rcyBjb25zb2xlIGlzIGltbXV0YWJsZS5cblxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoY29uc29sZSwge1xuICAgICAgICBsb2c6IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZMb2dcbiAgICAgICAgfSksXG4gICAgICAgIGluZm86IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZJbmZvXG4gICAgICAgIH0pLFxuICAgICAgICB3YXJuOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2V2FyblxuICAgICAgICB9KSxcbiAgICAgICAgZXJyb3I6IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZFcnJvclxuICAgICAgICB9KSxcbiAgICAgICAgZ3JvdXA6IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZHcm91cFxuICAgICAgICB9KSxcbiAgICAgICAgZ3JvdXBDb2xsYXBzZWQ6IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZHcm91cENvbGxhcHNlZFxuICAgICAgICB9KSxcbiAgICAgICAgZ3JvdXBFbmQ6IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZHcm91cEVuZFxuICAgICAgICB9KVxuICAgICAgfSk7XG4gICAgICAvKiBlc2xpbnQtZW5hYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgIH1cblxuICAgIGlmIChkaXNhYmxlZERlcHRoIDwgMCkge1xuICAgICAgZXJyb3IoJ2Rpc2FibGVkRGVwdGggZmVsbCBiZWxvdyB6ZXJvLiAnICsgJ1RoaXMgaXMgYSBidWcgaW4gUmVhY3QuIFBsZWFzZSBmaWxlIGFuIGlzc3VlLicpO1xuICAgIH1cbiAgfVxufVxuXG52YXIgUmVhY3RDdXJyZW50RGlzcGF0Y2hlciA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0Q3VycmVudERpc3BhdGNoZXI7XG52YXIgcHJlZml4O1xuZnVuY3Rpb24gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUobmFtZSwgc291cmNlLCBvd25lckZuKSB7XG4gIHtcbiAgICBpZiAocHJlZml4ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEV4dHJhY3QgdGhlIFZNIHNwZWNpZmljIHByZWZpeCB1c2VkIGJ5IGVhY2ggbGluZS5cbiAgICAgIHRyeSB7XG4gICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgIHZhciBtYXRjaCA9IHguc3RhY2sudHJpbSgpLm1hdGNoKC9cXG4oICooYXQgKT8pLyk7XG4gICAgICAgIHByZWZpeCA9IG1hdGNoICYmIG1hdGNoWzFdIHx8ICcnO1xuICAgICAgfVxuICAgIH0gLy8gV2UgdXNlIHRoZSBwcmVmaXggdG8gZW5zdXJlIG91ciBzdGFja3MgbGluZSB1cCB3aXRoIG5hdGl2ZSBzdGFjayBmcmFtZXMuXG5cblxuICAgIHJldHVybiAnXFxuJyArIHByZWZpeCArIG5hbWU7XG4gIH1cbn1cbnZhciByZWVudHJ5ID0gZmFsc2U7XG52YXIgY29tcG9uZW50RnJhbWVDYWNoZTtcblxue1xuICB2YXIgUG9zc2libHlXZWFrTWFwID0gdHlwZW9mIFdlYWtNYXAgPT09ICdmdW5jdGlvbicgPyBXZWFrTWFwIDogTWFwO1xuICBjb21wb25lbnRGcmFtZUNhY2hlID0gbmV3IFBvc3NpYmx5V2Vha01hcCgpO1xufVxuXG5mdW5jdGlvbiBkZXNjcmliZU5hdGl2ZUNvbXBvbmVudEZyYW1lKGZuLCBjb25zdHJ1Y3QpIHtcbiAgLy8gSWYgc29tZXRoaW5nIGFza2VkIGZvciBhIHN0YWNrIGluc2lkZSBhIGZha2UgcmVuZGVyLCBpdCBzaG91bGQgZ2V0IGlnbm9yZWQuXG4gIGlmICggIWZuIHx8IHJlZW50cnkpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICB7XG4gICAgdmFyIGZyYW1lID0gY29tcG9uZW50RnJhbWVDYWNoZS5nZXQoZm4pO1xuXG4gICAgaWYgKGZyYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBmcmFtZTtcbiAgICB9XG4gIH1cblxuICB2YXIgY29udHJvbDtcbiAgcmVlbnRyeSA9IHRydWU7XG4gIHZhciBwcmV2aW91c1ByZXBhcmVTdGFja1RyYWNlID0gRXJyb3IucHJlcGFyZVN0YWNrVHJhY2U7IC8vICRGbG93Rml4TWUgSXQgZG9lcyBhY2NlcHQgdW5kZWZpbmVkLlxuXG4gIEVycm9yLnByZXBhcmVTdGFja1RyYWNlID0gdW5kZWZpbmVkO1xuICB2YXIgcHJldmlvdXNEaXNwYXRjaGVyO1xuXG4gIHtcbiAgICBwcmV2aW91c0Rpc3BhdGNoZXIgPSBSZWFjdEN1cnJlbnREaXNwYXRjaGVyLmN1cnJlbnQ7IC8vIFNldCB0aGUgZGlzcGF0Y2hlciBpbiBERVYgYmVjYXVzZSB0aGlzIG1pZ2h0IGJlIGNhbGwgaW4gdGhlIHJlbmRlciBmdW5jdGlvblxuICAgIC8vIGZvciB3YXJuaW5ncy5cblxuICAgIFJlYWN0Q3VycmVudERpc3BhdGNoZXIuY3VycmVudCA9IG51bGw7XG4gICAgZGlzYWJsZUxvZ3MoKTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgLy8gVGhpcyBzaG91bGQgdGhyb3cuXG4gICAgaWYgKGNvbnN0cnVjdCkge1xuICAgICAgLy8gU29tZXRoaW5nIHNob3VsZCBiZSBzZXR0aW5nIHRoZSBwcm9wcyBpbiB0aGUgY29uc3RydWN0b3IuXG4gICAgICB2YXIgRmFrZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgIH07IC8vICRGbG93Rml4TWVcblxuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRmFrZS5wcm90b3R5cGUsICdwcm9wcycsIHtcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgLy8gV2UgdXNlIGEgdGhyb3dpbmcgc2V0dGVyIGluc3RlYWQgb2YgZnJvemVuIG9yIG5vbi13cml0YWJsZSBwcm9wc1xuICAgICAgICAgIC8vIGJlY2F1c2UgdGhhdCB3b24ndCB0aHJvdyBpbiBhIG5vbi1zdHJpY3QgbW9kZSBmdW5jdGlvbi5cbiAgICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSAnb2JqZWN0JyAmJiBSZWZsZWN0LmNvbnN0cnVjdCkge1xuICAgICAgICAvLyBXZSBjb25zdHJ1Y3QgYSBkaWZmZXJlbnQgY29udHJvbCBmb3IgdGhpcyBjYXNlIHRvIGluY2x1ZGUgYW55IGV4dHJhXG4gICAgICAgIC8vIGZyYW1lcyBhZGRlZCBieSB0aGUgY29uc3RydWN0IGNhbGwuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgUmVmbGVjdC5jb25zdHJ1Y3QoRmFrZSwgW10pO1xuICAgICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgICAgY29udHJvbCA9IHg7XG4gICAgICAgIH1cblxuICAgICAgICBSZWZsZWN0LmNvbnN0cnVjdChmbiwgW10sIEZha2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBGYWtlLmNhbGwoKTtcbiAgICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICAgIGNvbnRyb2wgPSB4O1xuICAgICAgICB9XG5cbiAgICAgICAgZm4uY2FsbChGYWtlLnByb3RvdHlwZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgIGNvbnRyb2wgPSB4O1xuICAgICAgfVxuXG4gICAgICBmbigpO1xuICAgIH1cbiAgfSBjYXRjaCAoc2FtcGxlKSB7XG4gICAgLy8gVGhpcyBpcyBpbmxpbmVkIG1hbnVhbGx5IGJlY2F1c2UgY2xvc3VyZSBkb2Vzbid0IGRvIGl0IGZvciB1cy5cbiAgICBpZiAoc2FtcGxlICYmIGNvbnRyb2wgJiYgdHlwZW9mIHNhbXBsZS5zdGFjayA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIFRoaXMgZXh0cmFjdHMgdGhlIGZpcnN0IGZyYW1lIGZyb20gdGhlIHNhbXBsZSB0aGF0IGlzbid0IGFsc28gaW4gdGhlIGNvbnRyb2wuXG4gICAgICAvLyBTa2lwcGluZyBvbmUgZnJhbWUgdGhhdCB3ZSBhc3N1bWUgaXMgdGhlIGZyYW1lIHRoYXQgY2FsbHMgdGhlIHR3by5cbiAgICAgIHZhciBzYW1wbGVMaW5lcyA9IHNhbXBsZS5zdGFjay5zcGxpdCgnXFxuJyk7XG4gICAgICB2YXIgY29udHJvbExpbmVzID0gY29udHJvbC5zdGFjay5zcGxpdCgnXFxuJyk7XG4gICAgICB2YXIgcyA9IHNhbXBsZUxpbmVzLmxlbmd0aCAtIDE7XG4gICAgICB2YXIgYyA9IGNvbnRyb2xMaW5lcy5sZW5ndGggLSAxO1xuXG4gICAgICB3aGlsZSAocyA+PSAxICYmIGMgPj0gMCAmJiBzYW1wbGVMaW5lc1tzXSAhPT0gY29udHJvbExpbmVzW2NdKSB7XG4gICAgICAgIC8vIFdlIGV4cGVjdCBhdCBsZWFzdCBvbmUgc3RhY2sgZnJhbWUgdG8gYmUgc2hhcmVkLlxuICAgICAgICAvLyBUeXBpY2FsbHkgdGhpcyB3aWxsIGJlIHRoZSByb290IG1vc3Qgb25lLiBIb3dldmVyLCBzdGFjayBmcmFtZXMgbWF5IGJlXG4gICAgICAgIC8vIGN1dCBvZmYgZHVlIHRvIG1heGltdW0gc3RhY2sgbGltaXRzLiBJbiB0aGlzIGNhc2UsIG9uZSBtYXliZSBjdXQgb2ZmXG4gICAgICAgIC8vIGVhcmxpZXIgdGhhbiB0aGUgb3RoZXIuIFdlIGFzc3VtZSB0aGF0IHRoZSBzYW1wbGUgaXMgbG9uZ2VyIG9yIHRoZSBzYW1lXG4gICAgICAgIC8vIGFuZCB0aGVyZSBmb3IgY3V0IG9mZiBlYXJsaWVyLiBTbyB3ZSBzaG91bGQgZmluZCB0aGUgcm9vdCBtb3N0IGZyYW1lIGluXG4gICAgICAgIC8vIHRoZSBzYW1wbGUgc29tZXdoZXJlIGluIHRoZSBjb250cm9sLlxuICAgICAgICBjLS07XG4gICAgICB9XG5cbiAgICAgIGZvciAoOyBzID49IDEgJiYgYyA+PSAwOyBzLS0sIGMtLSkge1xuICAgICAgICAvLyBOZXh0IHdlIGZpbmQgdGhlIGZpcnN0IG9uZSB0aGF0IGlzbid0IHRoZSBzYW1lIHdoaWNoIHNob3VsZCBiZSB0aGVcbiAgICAgICAgLy8gZnJhbWUgdGhhdCBjYWxsZWQgb3VyIHNhbXBsZSBmdW5jdGlvbiBhbmQgdGhlIGNvbnRyb2wuXG4gICAgICAgIGlmIChzYW1wbGVMaW5lc1tzXSAhPT0gY29udHJvbExpbmVzW2NdKSB7XG4gICAgICAgICAgLy8gSW4gVjgsIHRoZSBmaXJzdCBsaW5lIGlzIGRlc2NyaWJpbmcgdGhlIG1lc3NhZ2UgYnV0IG90aGVyIFZNcyBkb24ndC5cbiAgICAgICAgICAvLyBJZiB3ZSdyZSBhYm91dCB0byByZXR1cm4gdGhlIGZpcnN0IGxpbmUsIGFuZCB0aGUgY29udHJvbCBpcyBhbHNvIG9uIHRoZSBzYW1lXG4gICAgICAgICAgLy8gbGluZSwgdGhhdCdzIGEgcHJldHR5IGdvb2QgaW5kaWNhdG9yIHRoYXQgb3VyIHNhbXBsZSB0aHJldyBhdCBzYW1lIGxpbmUgYXNcbiAgICAgICAgICAvLyB0aGUgY29udHJvbC4gSS5lLiBiZWZvcmUgd2UgZW50ZXJlZCB0aGUgc2FtcGxlIGZyYW1lLiBTbyB3ZSBpZ25vcmUgdGhpcyByZXN1bHQuXG4gICAgICAgICAgLy8gVGhpcyBjYW4gaGFwcGVuIGlmIHlvdSBwYXNzZWQgYSBjbGFzcyB0byBmdW5jdGlvbiBjb21wb25lbnQsIG9yIG5vbi1mdW5jdGlvbi5cbiAgICAgICAgICBpZiAocyAhPT0gMSB8fCBjICE9PSAxKSB7XG4gICAgICAgICAgICBkbyB7XG4gICAgICAgICAgICAgIHMtLTtcbiAgICAgICAgICAgICAgYy0tOyAvLyBXZSBtYXkgc3RpbGwgaGF2ZSBzaW1pbGFyIGludGVybWVkaWF0ZSBmcmFtZXMgZnJvbSB0aGUgY29uc3RydWN0IGNhbGwuXG4gICAgICAgICAgICAgIC8vIFRoZSBuZXh0IG9uZSB0aGF0IGlzbid0IHRoZSBzYW1lIHNob3VsZCBiZSBvdXIgbWF0Y2ggdGhvdWdoLlxuXG4gICAgICAgICAgICAgIGlmIChjIDwgMCB8fCBzYW1wbGVMaW5lc1tzXSAhPT0gY29udHJvbExpbmVzW2NdKSB7XG4gICAgICAgICAgICAgICAgLy8gVjggYWRkcyBhIFwibmV3XCIgcHJlZml4IGZvciBuYXRpdmUgY2xhc3Nlcy4gTGV0J3MgcmVtb3ZlIGl0IHRvIG1ha2UgaXQgcHJldHRpZXIuXG4gICAgICAgICAgICAgICAgdmFyIF9mcmFtZSA9ICdcXG4nICsgc2FtcGxlTGluZXNbc10ucmVwbGFjZSgnIGF0IG5ldyAnLCAnIGF0ICcpO1xuXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRGcmFtZUNhY2hlLnNldChmbiwgX2ZyYW1lKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IC8vIFJldHVybiB0aGUgbGluZSB3ZSBmb3VuZC5cblxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIF9mcmFtZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSB3aGlsZSAocyA+PSAxICYmIGMgPj0gMCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0gZmluYWxseSB7XG4gICAgcmVlbnRyeSA9IGZhbHNlO1xuXG4gICAge1xuICAgICAgUmVhY3RDdXJyZW50RGlzcGF0Y2hlci5jdXJyZW50ID0gcHJldmlvdXNEaXNwYXRjaGVyO1xuICAgICAgcmVlbmFibGVMb2dzKCk7XG4gICAgfVxuXG4gICAgRXJyb3IucHJlcGFyZVN0YWNrVHJhY2UgPSBwcmV2aW91c1ByZXBhcmVTdGFja1RyYWNlO1xuICB9IC8vIEZhbGxiYWNrIHRvIGp1c3QgdXNpbmcgdGhlIG5hbWUgaWYgd2UgY291bGRuJ3QgbWFrZSBpdCB0aHJvdy5cblxuXG4gIHZhciBuYW1lID0gZm4gPyBmbi5kaXNwbGF5TmFtZSB8fCBmbi5uYW1lIDogJyc7XG4gIHZhciBzeW50aGV0aWNGcmFtZSA9IG5hbWUgPyBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZShuYW1lKSA6ICcnO1xuXG4gIHtcbiAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb21wb25lbnRGcmFtZUNhY2hlLnNldChmbiwgc3ludGhldGljRnJhbWUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzeW50aGV0aWNGcmFtZTtcbn1cbmZ1bmN0aW9uIGRlc2NyaWJlRnVuY3Rpb25Db21wb25lbnRGcmFtZShmbiwgc291cmNlLCBvd25lckZuKSB7XG4gIHtcbiAgICByZXR1cm4gZGVzY3JpYmVOYXRpdmVDb21wb25lbnRGcmFtZShmbiwgZmFsc2UpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNob3VsZENvbnN0cnVjdChDb21wb25lbnQpIHtcbiAgdmFyIHByb3RvdHlwZSA9IENvbXBvbmVudC5wcm90b3R5cGU7XG4gIHJldHVybiAhIShwcm90b3R5cGUgJiYgcHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQpO1xufVxuXG5mdW5jdGlvbiBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYodHlwZSwgc291cmNlLCBvd25lckZuKSB7XG5cbiAgaWYgKHR5cGUgPT0gbnVsbCkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHtcbiAgICAgIHJldHVybiBkZXNjcmliZU5hdGl2ZUNvbXBvbmVudEZyYW1lKHR5cGUsIHNob3VsZENvbnN0cnVjdCh0eXBlKSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZSh0eXBlKTtcbiAgfVxuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcbiAgICAgIHJldHVybiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZSgnU3VzcGVuc2UnKTtcblxuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFOlxuICAgICAgcmV0dXJuIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKCdTdXNwZW5zZUxpc3QnKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICBzd2l0Y2ggKHR5cGUuJCR0eXBlb2YpIHtcbiAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgcmV0dXJuIGRlc2NyaWJlRnVuY3Rpb25Db21wb25lbnRGcmFtZSh0eXBlLnJlbmRlcik7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICAvLyBNZW1vIG1heSBjb250YWluIGFueSBjb21wb25lbnQgdHlwZSBzbyB3ZSByZWN1cnNpdmVseSByZXNvbHZlIGl0LlxuICAgICAgICByZXR1cm4gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKHR5cGUudHlwZSwgc291cmNlLCBvd25lckZuKTtcblxuICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XG4gICAgICAgIHtcbiAgICAgICAgICB2YXIgbGF6eUNvbXBvbmVudCA9IHR5cGU7XG4gICAgICAgICAgdmFyIHBheWxvYWQgPSBsYXp5Q29tcG9uZW50Ll9wYXlsb2FkO1xuICAgICAgICAgIHZhciBpbml0ID0gbGF6eUNvbXBvbmVudC5faW5pdDtcblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBMYXp5IG1heSBjb250YWluIGFueSBjb21wb25lbnQgdHlwZSBzbyB3ZSByZWN1cnNpdmVseSByZXNvbHZlIGl0LlxuICAgICAgICAgICAgcmV0dXJuIGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVihpbml0KHBheWxvYWQpLCBzb3VyY2UsIG93bmVyRm4pO1xuICAgICAgICAgIH0gY2F0Y2ggKHgpIHt9XG4gICAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gJyc7XG59XG5cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbnZhciBsb2dnZWRUeXBlRmFpbHVyZXMgPSB7fTtcbnZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTtcblxuZnVuY3Rpb24gc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCkge1xuICB7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIHZhciBvd25lciA9IGVsZW1lbnQuX293bmVyO1xuICAgICAgdmFyIHN0YWNrID0gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKGVsZW1lbnQudHlwZSwgZWxlbWVudC5fc291cmNlLCBvd25lciA/IG93bmVyLnR5cGUgOiBudWxsKTtcbiAgICAgIFJlYWN0RGVidWdDdXJyZW50RnJhbWUuc2V0RXh0cmFTdGFja0ZyYW1lKHN0YWNrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5zZXRFeHRyYVN0YWNrRnJhbWUobnVsbCk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNoZWNrUHJvcFR5cGVzKHR5cGVTcGVjcywgdmFsdWVzLCBsb2NhdGlvbiwgY29tcG9uZW50TmFtZSwgZWxlbWVudCkge1xuICB7XG4gICAgLy8gJEZsb3dGaXhNZSBUaGlzIGlzIG9rYXkgYnV0IEZsb3cgZG9lc24ndCBrbm93IGl0LlxuICAgIHZhciBoYXMgPSBGdW5jdGlvbi5jYWxsLmJpbmQoaGFzT3duUHJvcGVydHkpO1xuXG4gICAgZm9yICh2YXIgdHlwZVNwZWNOYW1lIGluIHR5cGVTcGVjcykge1xuICAgICAgaWYgKGhhcyh0eXBlU3BlY3MsIHR5cGVTcGVjTmFtZSkpIHtcbiAgICAgICAgdmFyIGVycm9yJDEgPSB2b2lkIDA7IC8vIFByb3AgdHlwZSB2YWxpZGF0aW9uIG1heSB0aHJvdy4gSW4gY2FzZSB0aGV5IGRvLCB3ZSBkb24ndCB3YW50IHRvXG4gICAgICAgIC8vIGZhaWwgdGhlIHJlbmRlciBwaGFzZSB3aGVyZSBpdCBkaWRuJ3QgZmFpbCBiZWZvcmUuIFNvIHdlIGxvZyBpdC5cbiAgICAgICAgLy8gQWZ0ZXIgdGhlc2UgaGF2ZSBiZWVuIGNsZWFuZWQgdXAsIHdlJ2xsIGxldCB0aGVtIHRocm93LlxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyBpcyBpbnRlbnRpb25hbGx5IGFuIGludmFyaWFudCB0aGF0IGdldHMgY2F1Z2h0LiBJdCdzIHRoZSBzYW1lXG4gICAgICAgICAgLy8gYmVoYXZpb3IgYXMgd2l0aG91dCB0aGlzIHN0YXRlbWVudCBleGNlcHQgd2l0aCBhIGJldHRlciBtZXNzYWdlLlxuICAgICAgICAgIGlmICh0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHZhciBlcnIgPSBFcnJvcigoY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnKSArICc6ICcgKyBsb2NhdGlvbiArICcgdHlwZSBgJyArIHR5cGVTcGVjTmFtZSArICdgIGlzIGludmFsaWQ7ICcgKyAnaXQgbXVzdCBiZSBhIGZ1bmN0aW9uLCB1c3VhbGx5IGZyb20gdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLCBidXQgcmVjZWl2ZWQgYCcgKyB0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gKyAnYC4nICsgJ1RoaXMgb2Z0ZW4gaGFwcGVucyBiZWNhdXNlIG9mIHR5cG9zIHN1Y2ggYXMgYFByb3BUeXBlcy5mdW5jdGlvbmAgaW5zdGVhZCBvZiBgUHJvcFR5cGVzLmZ1bmNgLicpO1xuICAgICAgICAgICAgZXJyLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZXJyb3IkMSA9IHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdKHZhbHVlcywgdHlwZVNwZWNOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgbnVsbCwgJ1NFQ1JFVF9ET19OT1RfUEFTU19USElTX09SX1lPVV9XSUxMX0JFX0ZJUkVEJyk7XG4gICAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgZXJyb3IkMSA9IGV4O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVycm9yJDEgJiYgIShlcnJvciQxIGluc3RhbmNlb2YgRXJyb3IpKSB7XG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCk7XG5cbiAgICAgICAgICBlcnJvcignJXM6IHR5cGUgc3BlY2lmaWNhdGlvbiBvZiAlcycgKyAnIGAlc2AgaXMgaW52YWxpZDsgdGhlIHR5cGUgY2hlY2tlciAnICsgJ2Z1bmN0aW9uIG11c3QgcmV0dXJuIGBudWxsYCBvciBhbiBgRXJyb3JgIGJ1dCByZXR1cm5lZCBhICVzLiAnICsgJ1lvdSBtYXkgaGF2ZSBmb3Jnb3R0ZW4gdG8gcGFzcyBhbiBhcmd1bWVudCB0byB0aGUgdHlwZSBjaGVja2VyICcgKyAnY3JlYXRvciAoYXJyYXlPZiwgaW5zdGFuY2VPZiwgb2JqZWN0T2YsIG9uZU9mLCBvbmVPZlR5cGUsIGFuZCAnICsgJ3NoYXBlIGFsbCByZXF1aXJlIGFuIGFyZ3VtZW50KS4nLCBjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycsIGxvY2F0aW9uLCB0eXBlU3BlY05hbWUsIHR5cGVvZiBlcnJvciQxKTtcblxuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KG51bGwpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVycm9yJDEgaW5zdGFuY2VvZiBFcnJvciAmJiAhKGVycm9yJDEubWVzc2FnZSBpbiBsb2dnZWRUeXBlRmFpbHVyZXMpKSB7XG4gICAgICAgICAgLy8gT25seSBtb25pdG9yIHRoaXMgZmFpbHVyZSBvbmNlIGJlY2F1c2UgdGhlcmUgdGVuZHMgdG8gYmUgYSBsb3Qgb2YgdGhlXG4gICAgICAgICAgLy8gc2FtZSBlcnJvci5cbiAgICAgICAgICBsb2dnZWRUeXBlRmFpbHVyZXNbZXJyb3IkMS5tZXNzYWdlXSA9IHRydWU7XG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCk7XG5cbiAgICAgICAgICBlcnJvcignRmFpbGVkICVzIHR5cGU6ICVzJywgbG9jYXRpb24sIGVycm9yJDEubWVzc2FnZSk7XG5cbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChudWxsKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG52YXIgaXNBcnJheUltcGwgPSBBcnJheS5pc0FycmF5OyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVkZWNsYXJlXG5cbmZ1bmN0aW9uIGlzQXJyYXkoYSkge1xuICByZXR1cm4gaXNBcnJheUltcGwoYSk7XG59XG5cbnZhciBSZWFjdEN1cnJlbnRPd25lciA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0Q3VycmVudE93bmVyO1xudmFyIFJFU0VSVkVEX1BST1BTID0ge1xuICBrZXk6IHRydWUsXG4gIHJlZjogdHJ1ZSxcbiAgX19zZWxmOiB0cnVlLFxuICBfX3NvdXJjZTogdHJ1ZVxufTtcbnZhciBzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93bjtcbnZhciBzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93bjtcbnZhciBkaWRXYXJuQWJvdXRTdHJpbmdSZWZzO1xuXG57XG4gIGRpZFdhcm5BYm91dFN0cmluZ1JlZnMgPSB7fTtcbn1cblxuZnVuY3Rpb24gaGFzVmFsaWRSZWYoY29uZmlnKSB7XG4gIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsICdyZWYnKSkge1xuICAgICAgdmFyIGdldHRlciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoY29uZmlnLCAncmVmJykuZ2V0O1xuXG4gICAgICBpZiAoZ2V0dGVyICYmIGdldHRlci5pc1JlYWN0V2FybmluZykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNvbmZpZy5yZWYgIT09IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gaGFzVmFsaWRLZXkoY29uZmlnKSB7XG4gIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsICdrZXknKSkge1xuICAgICAgdmFyIGdldHRlciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoY29uZmlnLCAna2V5JykuZ2V0O1xuXG4gICAgICBpZiAoZ2V0dGVyICYmIGdldHRlci5pc1JlYWN0V2FybmluZykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNvbmZpZy5rZXkgIT09IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gd2FybklmU3RyaW5nUmVmQ2Fubm90QmVBdXRvQ29udmVydGVkKGNvbmZpZywgc2VsZikge1xuICB7XG4gICAgaWYgKHR5cGVvZiBjb25maWcucmVmID09PSAnc3RyaW5nJyAmJiBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50ICYmIHNlbGYgJiYgUmVhY3RDdXJyZW50T3duZXIuY3VycmVudC5zdGF0ZU5vZGUgIT09IHNlbGYpIHtcbiAgICAgIHZhciBjb21wb25lbnROYW1lID0gZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQudHlwZSk7XG5cbiAgICAgIGlmICghZGlkV2FybkFib3V0U3RyaW5nUmVmc1tjb21wb25lbnROYW1lXSkge1xuICAgICAgICBlcnJvcignQ29tcG9uZW50IFwiJXNcIiBjb250YWlucyB0aGUgc3RyaW5nIHJlZiBcIiVzXCIuICcgKyAnU3VwcG9ydCBmb3Igc3RyaW5nIHJlZnMgd2lsbCBiZSByZW1vdmVkIGluIGEgZnV0dXJlIG1ham9yIHJlbGVhc2UuICcgKyAnVGhpcyBjYXNlIGNhbm5vdCBiZSBhdXRvbWF0aWNhbGx5IGNvbnZlcnRlZCB0byBhbiBhcnJvdyBmdW5jdGlvbi4gJyArICdXZSBhc2sgeW91IHRvIG1hbnVhbGx5IGZpeCB0aGlzIGNhc2UgYnkgdXNpbmcgdXNlUmVmKCkgb3IgY3JlYXRlUmVmKCkgaW5zdGVhZC4gJyArICdMZWFybiBtb3JlIGFib3V0IHVzaW5nIHJlZnMgc2FmZWx5IGhlcmU6ICcgKyAnaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3N0cmljdC1tb2RlLXN0cmluZy1yZWYnLCBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUoUmVhY3RDdXJyZW50T3duZXIuY3VycmVudC50eXBlKSwgY29uZmlnLnJlZik7XG5cbiAgICAgICAgZGlkV2FybkFib3V0U3RyaW5nUmVmc1tjb21wb25lbnROYW1lXSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGRlZmluZUtleVByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSkge1xuICB7XG4gICAgdmFyIHdhcm5BYm91dEFjY2Vzc2luZ0tleSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd24pIHtcbiAgICAgICAgc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd24gPSB0cnVlO1xuXG4gICAgICAgIGVycm9yKCclczogYGtleWAgaXMgbm90IGEgcHJvcC4gVHJ5aW5nIHRvIGFjY2VzcyBpdCB3aWxsIHJlc3VsdCAnICsgJ2luIGB1bmRlZmluZWRgIGJlaW5nIHJldHVybmVkLiBJZiB5b3UgbmVlZCB0byBhY2Nlc3MgdGhlIHNhbWUgJyArICd2YWx1ZSB3aXRoaW4gdGhlIGNoaWxkIGNvbXBvbmVudCwgeW91IHNob3VsZCBwYXNzIGl0IGFzIGEgZGlmZmVyZW50ICcgKyAncHJvcC4gKGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9zcGVjaWFsLXByb3BzKScsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgd2FybkFib3V0QWNjZXNzaW5nS2V5LmlzUmVhY3RXYXJuaW5nID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvcHMsICdrZXknLCB7XG4gICAgICBnZXQ6IHdhcm5BYm91dEFjY2Vzc2luZ0tleSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRlZmluZVJlZlByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSkge1xuICB7XG4gICAgdmFyIHdhcm5BYm91dEFjY2Vzc2luZ1JlZiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd24pIHtcbiAgICAgICAgc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd24gPSB0cnVlO1xuXG4gICAgICAgIGVycm9yKCclczogYHJlZmAgaXMgbm90IGEgcHJvcC4gVHJ5aW5nIHRvIGFjY2VzcyBpdCB3aWxsIHJlc3VsdCAnICsgJ2luIGB1bmRlZmluZWRgIGJlaW5nIHJldHVybmVkLiBJZiB5b3UgbmVlZCB0byBhY2Nlc3MgdGhlIHNhbWUgJyArICd2YWx1ZSB3aXRoaW4gdGhlIGNoaWxkIGNvbXBvbmVudCwgeW91IHNob3VsZCBwYXNzIGl0IGFzIGEgZGlmZmVyZW50ICcgKyAncHJvcC4gKGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9zcGVjaWFsLXByb3BzKScsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgd2FybkFib3V0QWNjZXNzaW5nUmVmLmlzUmVhY3RXYXJuaW5nID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvcHMsICdyZWYnLCB7XG4gICAgICBnZXQ6IHdhcm5BYm91dEFjY2Vzc2luZ1JlZixcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9XG59XG4vKipcbiAqIEZhY3RvcnkgbWV0aG9kIHRvIGNyZWF0ZSBhIG5ldyBSZWFjdCBlbGVtZW50LiBUaGlzIG5vIGxvbmdlciBhZGhlcmVzIHRvXG4gKiB0aGUgY2xhc3MgcGF0dGVybiwgc28gZG8gbm90IHVzZSBuZXcgdG8gY2FsbCBpdC4gQWxzbywgaW5zdGFuY2VvZiBjaGVja1xuICogd2lsbCBub3Qgd29yay4gSW5zdGVhZCB0ZXN0ICQkdHlwZW9mIGZpZWxkIGFnYWluc3QgU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpIHRvIGNoZWNrXG4gKiBpZiBzb21ldGhpbmcgaXMgYSBSZWFjdCBFbGVtZW50LlxuICpcbiAqIEBwYXJhbSB7Kn0gdHlwZVxuICogQHBhcmFtIHsqfSBwcm9wc1xuICogQHBhcmFtIHsqfSBrZXlcbiAqIEBwYXJhbSB7c3RyaW5nfG9iamVjdH0gcmVmXG4gKiBAcGFyYW0geyp9IG93bmVyXG4gKiBAcGFyYW0geyp9IHNlbGYgQSAqdGVtcG9yYXJ5KiBoZWxwZXIgdG8gZGV0ZWN0IHBsYWNlcyB3aGVyZSBgdGhpc2AgaXNcbiAqIGRpZmZlcmVudCBmcm9tIHRoZSBgb3duZXJgIHdoZW4gUmVhY3QuY3JlYXRlRWxlbWVudCBpcyBjYWxsZWQsIHNvIHRoYXQgd2VcbiAqIGNhbiB3YXJuLiBXZSB3YW50IHRvIGdldCByaWQgb2Ygb3duZXIgYW5kIHJlcGxhY2Ugc3RyaW5nIGByZWZgcyB3aXRoIGFycm93XG4gKiBmdW5jdGlvbnMsIGFuZCBhcyBsb25nIGFzIGB0aGlzYCBhbmQgb3duZXIgYXJlIHRoZSBzYW1lLCB0aGVyZSB3aWxsIGJlIG5vXG4gKiBjaGFuZ2UgaW4gYmVoYXZpb3IuXG4gKiBAcGFyYW0geyp9IHNvdXJjZSBBbiBhbm5vdGF0aW9uIG9iamVjdCAoYWRkZWQgYnkgYSB0cmFuc3BpbGVyIG9yIG90aGVyd2lzZSlcbiAqIGluZGljYXRpbmcgZmlsZW5hbWUsIGxpbmUgbnVtYmVyLCBhbmQvb3Igb3RoZXIgaW5mb3JtYXRpb24uXG4gKiBAaW50ZXJuYWxcbiAqL1xuXG5cbnZhciBSZWFjdEVsZW1lbnQgPSBmdW5jdGlvbiAodHlwZSwga2V5LCByZWYsIHNlbGYsIHNvdXJjZSwgb3duZXIsIHByb3BzKSB7XG4gIHZhciBlbGVtZW50ID0ge1xuICAgIC8vIFRoaXMgdGFnIGFsbG93cyB1cyB0byB1bmlxdWVseSBpZGVudGlmeSB0aGlzIGFzIGEgUmVhY3QgRWxlbWVudFxuICAgICQkdHlwZW9mOiBSRUFDVF9FTEVNRU5UX1RZUEUsXG4gICAgLy8gQnVpbHQtaW4gcHJvcGVydGllcyB0aGF0IGJlbG9uZyBvbiB0aGUgZWxlbWVudFxuICAgIHR5cGU6IHR5cGUsXG4gICAga2V5OiBrZXksXG4gICAgcmVmOiByZWYsXG4gICAgcHJvcHM6IHByb3BzLFxuICAgIC8vIFJlY29yZCB0aGUgY29tcG9uZW50IHJlc3BvbnNpYmxlIGZvciBjcmVhdGluZyB0aGlzIGVsZW1lbnQuXG4gICAgX293bmVyOiBvd25lclxuICB9O1xuXG4gIHtcbiAgICAvLyBUaGUgdmFsaWRhdGlvbiBmbGFnIGlzIGN1cnJlbnRseSBtdXRhdGl2ZS4gV2UgcHV0IGl0IG9uXG4gICAgLy8gYW4gZXh0ZXJuYWwgYmFja2luZyBzdG9yZSBzbyB0aGF0IHdlIGNhbiBmcmVlemUgdGhlIHdob2xlIG9iamVjdC5cbiAgICAvLyBUaGlzIGNhbiBiZSByZXBsYWNlZCB3aXRoIGEgV2Vha01hcCBvbmNlIHRoZXkgYXJlIGltcGxlbWVudGVkIGluXG4gICAgLy8gY29tbW9ubHkgdXNlZCBkZXZlbG9wbWVudCBlbnZpcm9ubWVudHMuXG4gICAgZWxlbWVudC5fc3RvcmUgPSB7fTsgLy8gVG8gbWFrZSBjb21wYXJpbmcgUmVhY3RFbGVtZW50cyBlYXNpZXIgZm9yIHRlc3RpbmcgcHVycG9zZXMsIHdlIG1ha2VcbiAgICAvLyB0aGUgdmFsaWRhdGlvbiBmbGFnIG5vbi1lbnVtZXJhYmxlICh3aGVyZSBwb3NzaWJsZSwgd2hpY2ggc2hvdWxkXG4gICAgLy8gaW5jbHVkZSBldmVyeSBlbnZpcm9ubWVudCB3ZSBydW4gdGVzdHMgaW4pLCBzbyB0aGUgdGVzdCBmcmFtZXdvcmtcbiAgICAvLyBpZ25vcmVzIGl0LlxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQuX3N0b3JlLCAndmFsaWRhdGVkJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICB2YWx1ZTogZmFsc2VcbiAgICB9KTsgLy8gc2VsZiBhbmQgc291cmNlIGFyZSBERVYgb25seSBwcm9wZXJ0aWVzLlxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQsICdfc2VsZicsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBzZWxmXG4gICAgfSk7IC8vIFR3byBlbGVtZW50cyBjcmVhdGVkIGluIHR3byBkaWZmZXJlbnQgcGxhY2VzIHNob3VsZCBiZSBjb25zaWRlcmVkXG4gICAgLy8gZXF1YWwgZm9yIHRlc3RpbmcgcHVycG9zZXMgYW5kIHRoZXJlZm9yZSB3ZSBoaWRlIGl0IGZyb20gZW51bWVyYXRpb24uXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudCwgJ19zb3VyY2UnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICB2YWx1ZTogc291cmNlXG4gICAgfSk7XG5cbiAgICBpZiAoT2JqZWN0LmZyZWV6ZSkge1xuICAgICAgT2JqZWN0LmZyZWV6ZShlbGVtZW50LnByb3BzKTtcbiAgICAgIE9iamVjdC5mcmVlemUoZWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuLyoqXG4gKiBodHRwczovL2dpdGh1Yi5jb20vcmVhY3Rqcy9yZmNzL3B1bGwvMTA3XG4gKiBAcGFyYW0geyp9IHR5cGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wc1xuICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICovXG5cbmZ1bmN0aW9uIGpzeERFVih0eXBlLCBjb25maWcsIG1heWJlS2V5LCBzb3VyY2UsIHNlbGYpIHtcbiAge1xuICAgIHZhciBwcm9wTmFtZTsgLy8gUmVzZXJ2ZWQgbmFtZXMgYXJlIGV4dHJhY3RlZFxuXG4gICAgdmFyIHByb3BzID0ge307XG4gICAgdmFyIGtleSA9IG51bGw7XG4gICAgdmFyIHJlZiA9IG51bGw7IC8vIEN1cnJlbnRseSwga2V5IGNhbiBiZSBzcHJlYWQgaW4gYXMgYSBwcm9wLiBUaGlzIGNhdXNlcyBhIHBvdGVudGlhbFxuICAgIC8vIGlzc3VlIGlmIGtleSBpcyBhbHNvIGV4cGxpY2l0bHkgZGVjbGFyZWQgKGllLiA8ZGl2IHsuLi5wcm9wc30ga2V5PVwiSGlcIiAvPlxuICAgIC8vIG9yIDxkaXYga2V5PVwiSGlcIiB7Li4ucHJvcHN9IC8+ICkuIFdlIHdhbnQgdG8gZGVwcmVjYXRlIGtleSBzcHJlYWQsXG4gICAgLy8gYnV0IGFzIGFuIGludGVybWVkaWFyeSBzdGVwLCB3ZSB3aWxsIHVzZSBqc3hERVYgZm9yIGV2ZXJ5dGhpbmcgZXhjZXB0XG4gICAgLy8gPGRpdiB7Li4ucHJvcHN9IGtleT1cIkhpXCIgLz4sIGJlY2F1c2Ugd2UgYXJlbid0IGN1cnJlbnRseSBhYmxlIHRvIHRlbGwgaWZcbiAgICAvLyBrZXkgaXMgZXhwbGljaXRseSBkZWNsYXJlZCB0byBiZSB1bmRlZmluZWQgb3Igbm90LlxuXG4gICAgaWYgKG1heWJlS2V5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGtleSA9ICcnICsgbWF5YmVLZXk7XG4gICAgfVxuXG4gICAgaWYgKGhhc1ZhbGlkS2V5KGNvbmZpZykpIHtcbiAgICAgIGtleSA9ICcnICsgY29uZmlnLmtleTtcbiAgICB9XG5cbiAgICBpZiAoaGFzVmFsaWRSZWYoY29uZmlnKSkge1xuICAgICAgcmVmID0gY29uZmlnLnJlZjtcbiAgICAgIHdhcm5JZlN0cmluZ1JlZkNhbm5vdEJlQXV0b0NvbnZlcnRlZChjb25maWcsIHNlbGYpO1xuICAgIH0gLy8gUmVtYWluaW5nIHByb3BlcnRpZXMgYXJlIGFkZGVkIHRvIGEgbmV3IHByb3BzIG9iamVjdFxuXG5cbiAgICBmb3IgKHByb3BOYW1lIGluIGNvbmZpZykge1xuICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCBwcm9wTmFtZSkgJiYgIVJFU0VSVkVEX1BST1BTLmhhc093blByb3BlcnR5KHByb3BOYW1lKSkge1xuICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBjb25maWdbcHJvcE5hbWVdO1xuICAgICAgfVxuICAgIH0gLy8gUmVzb2x2ZSBkZWZhdWx0IHByb3BzXG5cblxuICAgIGlmICh0eXBlICYmIHR5cGUuZGVmYXVsdFByb3BzKSB7XG4gICAgICB2YXIgZGVmYXVsdFByb3BzID0gdHlwZS5kZWZhdWx0UHJvcHM7XG5cbiAgICAgIGZvciAocHJvcE5hbWUgaW4gZGVmYXVsdFByb3BzKSB7XG4gICAgICAgIGlmIChwcm9wc1twcm9wTmFtZV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGRlZmF1bHRQcm9wc1twcm9wTmFtZV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoa2V5IHx8IHJlZikge1xuICAgICAgdmFyIGRpc3BsYXlOYW1lID0gdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicgPyB0eXBlLmRpc3BsYXlOYW1lIHx8IHR5cGUubmFtZSB8fCAnVW5rbm93bicgOiB0eXBlO1xuXG4gICAgICBpZiAoa2V5KSB7XG4gICAgICAgIGRlZmluZUtleVByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWYpIHtcbiAgICAgICAgZGVmaW5lUmVmUHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gUmVhY3RFbGVtZW50KHR5cGUsIGtleSwgcmVmLCBzZWxmLCBzb3VyY2UsIFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQsIHByb3BzKTtcbiAgfVxufVxuXG52YXIgUmVhY3RDdXJyZW50T3duZXIkMSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0Q3VycmVudE93bmVyO1xudmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUkMSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0RGVidWdDdXJyZW50RnJhbWU7XG5cbmZ1bmN0aW9uIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZWxlbWVudCkge1xuICB7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIHZhciBvd25lciA9IGVsZW1lbnQuX293bmVyO1xuICAgICAgdmFyIHN0YWNrID0gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKGVsZW1lbnQudHlwZSwgZWxlbWVudC5fc291cmNlLCBvd25lciA/IG93bmVyLnR5cGUgOiBudWxsKTtcbiAgICAgIFJlYWN0RGVidWdDdXJyZW50RnJhbWUkMS5zZXRFeHRyYVN0YWNrRnJhbWUoc3RhY2spO1xuICAgIH0gZWxzZSB7XG4gICAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lJDEuc2V0RXh0cmFTdGFja0ZyYW1lKG51bGwpO1xuICAgIH1cbiAgfVxufVxuXG52YXIgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd247XG5cbntcbiAgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24gPSBmYWxzZTtcbn1cbi8qKlxuICogVmVyaWZpZXMgdGhlIG9iamVjdCBpcyBhIFJlYWN0RWxlbWVudC5cbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjaXN2YWxpZGVsZW1lbnRcbiAqIEBwYXJhbSB7P29iamVjdH0gb2JqZWN0XG4gKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIGBvYmplY3RgIGlzIGEgUmVhY3RFbGVtZW50LlxuICogQGZpbmFsXG4gKi9cblxuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudChvYmplY3QpIHtcbiAge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwgJiYgb2JqZWN0LiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEU7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCkge1xuICB7XG4gICAgaWYgKFJlYWN0Q3VycmVudE93bmVyJDEuY3VycmVudCkge1xuICAgICAgdmFyIG5hbWUgPSBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUoUmVhY3RDdXJyZW50T3duZXIkMS5jdXJyZW50LnR5cGUpO1xuXG4gICAgICBpZiAobmFtZSkge1xuICAgICAgICByZXR1cm4gJ1xcblxcbkNoZWNrIHRoZSByZW5kZXIgbWV0aG9kIG9mIGAnICsgbmFtZSArICdgLic7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuICcnO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldFNvdXJjZUluZm9FcnJvckFkZGVuZHVtKHNvdXJjZSkge1xuICB7XG4gICAgaWYgKHNvdXJjZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB2YXIgZmlsZU5hbWUgPSBzb3VyY2UuZmlsZU5hbWUucmVwbGFjZSgvXi4qW1xcXFxcXC9dLywgJycpO1xuICAgICAgdmFyIGxpbmVOdW1iZXIgPSBzb3VyY2UubGluZU51bWJlcjtcbiAgICAgIHJldHVybiAnXFxuXFxuQ2hlY2sgeW91ciBjb2RlIGF0ICcgKyBmaWxlTmFtZSArICc6JyArIGxpbmVOdW1iZXIgKyAnLic7XG4gICAgfVxuXG4gICAgcmV0dXJuICcnO1xuICB9XG59XG4vKipcbiAqIFdhcm4gaWYgdGhlcmUncyBubyBrZXkgZXhwbGljaXRseSBzZXQgb24gZHluYW1pYyBhcnJheXMgb2YgY2hpbGRyZW4gb3JcbiAqIG9iamVjdCBrZXlzIGFyZSBub3QgdmFsaWQuIFRoaXMgYWxsb3dzIHVzIHRvIGtlZXAgdHJhY2sgb2YgY2hpbGRyZW4gYmV0d2VlblxuICogdXBkYXRlcy5cbiAqL1xuXG5cbnZhciBvd25lckhhc0tleVVzZVdhcm5pbmcgPSB7fTtcblxuZnVuY3Rpb24gZ2V0Q3VycmVudENvbXBvbmVudEVycm9ySW5mbyhwYXJlbnRUeXBlKSB7XG4gIHtcbiAgICB2YXIgaW5mbyA9IGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpO1xuXG4gICAgaWYgKCFpbmZvKSB7XG4gICAgICB2YXIgcGFyZW50TmFtZSA9IHR5cGVvZiBwYXJlbnRUeXBlID09PSAnc3RyaW5nJyA/IHBhcmVudFR5cGUgOiBwYXJlbnRUeXBlLmRpc3BsYXlOYW1lIHx8IHBhcmVudFR5cGUubmFtZTtcblxuICAgICAgaWYgKHBhcmVudE5hbWUpIHtcbiAgICAgICAgaW5mbyA9IFwiXFxuXFxuQ2hlY2sgdGhlIHRvcC1sZXZlbCByZW5kZXIgY2FsbCB1c2luZyA8XCIgKyBwYXJlbnROYW1lICsgXCI+LlwiO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBpbmZvO1xuICB9XG59XG4vKipcbiAqIFdhcm4gaWYgdGhlIGVsZW1lbnQgZG9lc24ndCBoYXZlIGFuIGV4cGxpY2l0IGtleSBhc3NpZ25lZCB0byBpdC5cbiAqIFRoaXMgZWxlbWVudCBpcyBpbiBhbiBhcnJheS4gVGhlIGFycmF5IGNvdWxkIGdyb3cgYW5kIHNocmluayBvciBiZVxuICogcmVvcmRlcmVkLiBBbGwgY2hpbGRyZW4gdGhhdCBoYXZlbid0IGFscmVhZHkgYmVlbiB2YWxpZGF0ZWQgYXJlIHJlcXVpcmVkIHRvXG4gKiBoYXZlIGEgXCJrZXlcIiBwcm9wZXJ0eSBhc3NpZ25lZCB0byBpdC4gRXJyb3Igc3RhdHVzZXMgYXJlIGNhY2hlZCBzbyBhIHdhcm5pbmdcbiAqIHdpbGwgb25seSBiZSBzaG93biBvbmNlLlxuICpcbiAqIEBpbnRlcm5hbFxuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGVsZW1lbnQgRWxlbWVudCB0aGF0IHJlcXVpcmVzIGEga2V5LlxuICogQHBhcmFtIHsqfSBwYXJlbnRUeXBlIGVsZW1lbnQncyBwYXJlbnQncyB0eXBlLlxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVFeHBsaWNpdEtleShlbGVtZW50LCBwYXJlbnRUeXBlKSB7XG4gIHtcbiAgICBpZiAoIWVsZW1lbnQuX3N0b3JlIHx8IGVsZW1lbnQuX3N0b3JlLnZhbGlkYXRlZCB8fCBlbGVtZW50LmtleSAhPSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZWxlbWVudC5fc3RvcmUudmFsaWRhdGVkID0gdHJ1ZTtcbiAgICB2YXIgY3VycmVudENvbXBvbmVudEVycm9ySW5mbyA9IGdldEN1cnJlbnRDb21wb25lbnRFcnJvckluZm8ocGFyZW50VHlwZSk7XG5cbiAgICBpZiAob3duZXJIYXNLZXlVc2VXYXJuaW5nW2N1cnJlbnRDb21wb25lbnRFcnJvckluZm9dKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgb3duZXJIYXNLZXlVc2VXYXJuaW5nW2N1cnJlbnRDb21wb25lbnRFcnJvckluZm9dID0gdHJ1ZTsgLy8gVXN1YWxseSB0aGUgY3VycmVudCBvd25lciBpcyB0aGUgb2ZmZW5kZXIsIGJ1dCBpZiBpdCBhY2NlcHRzIGNoaWxkcmVuIGFzIGFcbiAgICAvLyBwcm9wZXJ0eSwgaXQgbWF5IGJlIHRoZSBjcmVhdG9yIG9mIHRoZSBjaGlsZCB0aGF0J3MgcmVzcG9uc2libGUgZm9yXG4gICAgLy8gYXNzaWduaW5nIGl0IGEga2V5LlxuXG4gICAgdmFyIGNoaWxkT3duZXIgPSAnJztcblxuICAgIGlmIChlbGVtZW50ICYmIGVsZW1lbnQuX293bmVyICYmIGVsZW1lbnQuX293bmVyICE9PSBSZWFjdEN1cnJlbnRPd25lciQxLmN1cnJlbnQpIHtcbiAgICAgIC8vIEdpdmUgdGhlIGNvbXBvbmVudCB0aGF0IG9yaWdpbmFsbHkgY3JlYXRlZCB0aGlzIGNoaWxkLlxuICAgICAgY2hpbGRPd25lciA9IFwiIEl0IHdhcyBwYXNzZWQgYSBjaGlsZCBmcm9tIFwiICsgZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKGVsZW1lbnQuX293bmVyLnR5cGUpICsgXCIuXCI7XG4gICAgfVxuXG4gICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShlbGVtZW50KTtcblxuICAgIGVycm9yKCdFYWNoIGNoaWxkIGluIGEgbGlzdCBzaG91bGQgaGF2ZSBhIHVuaXF1ZSBcImtleVwiIHByb3AuJyArICclcyVzIFNlZSBodHRwczovL3JlYWN0anMub3JnL2xpbmsvd2FybmluZy1rZXlzIGZvciBtb3JlIGluZm9ybWF0aW9uLicsIGN1cnJlbnRDb21wb25lbnRFcnJvckluZm8sIGNoaWxkT3duZXIpO1xuXG4gICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShudWxsKTtcbiAgfVxufVxuLyoqXG4gKiBFbnN1cmUgdGhhdCBldmVyeSBlbGVtZW50IGVpdGhlciBpcyBwYXNzZWQgaW4gYSBzdGF0aWMgbG9jYXRpb24sIGluIGFuXG4gKiBhcnJheSB3aXRoIGFuIGV4cGxpY2l0IGtleXMgcHJvcGVydHkgZGVmaW5lZCwgb3IgaW4gYW4gb2JqZWN0IGxpdGVyYWxcbiAqIHdpdGggdmFsaWQga2V5IHByb3BlcnR5LlxuICpcbiAqIEBpbnRlcm5hbFxuICogQHBhcmFtIHtSZWFjdE5vZGV9IG5vZGUgU3RhdGljYWxseSBwYXNzZWQgY2hpbGQgb2YgYW55IHR5cGUuXG4gKiBAcGFyYW0geyp9IHBhcmVudFR5cGUgbm9kZSdzIHBhcmVudCdzIHR5cGUuXG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZUNoaWxkS2V5cyhub2RlLCBwYXJlbnRUeXBlKSB7XG4gIHtcbiAgICBpZiAodHlwZW9mIG5vZGUgIT09ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGlzQXJyYXkobm9kZSkpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZS5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgY2hpbGQgPSBub2RlW2ldO1xuXG4gICAgICAgIGlmIChpc1ZhbGlkRWxlbWVudChjaGlsZCkpIHtcbiAgICAgICAgICB2YWxpZGF0ZUV4cGxpY2l0S2V5KGNoaWxkLCBwYXJlbnRUeXBlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoaXNWYWxpZEVsZW1lbnQobm9kZSkpIHtcbiAgICAgIC8vIFRoaXMgZWxlbWVudCB3YXMgcGFzc2VkIGluIGEgdmFsaWQgbG9jYXRpb24uXG4gICAgICBpZiAobm9kZS5fc3RvcmUpIHtcbiAgICAgICAgbm9kZS5fc3RvcmUudmFsaWRhdGVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKG5vZGUpIHtcbiAgICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihub2RlKTtcblxuICAgICAgaWYgKHR5cGVvZiBpdGVyYXRvckZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIC8vIEVudHJ5IGl0ZXJhdG9ycyB1c2VkIHRvIHByb3ZpZGUgaW1wbGljaXQga2V5cyxcbiAgICAgICAgLy8gYnV0IG5vdyB3ZSBwcmludCBhIHNlcGFyYXRlIHdhcm5pbmcgZm9yIHRoZW0gbGF0ZXIuXG4gICAgICAgIGlmIChpdGVyYXRvckZuICE9PSBub2RlLmVudHJpZXMpIHtcbiAgICAgICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwobm9kZSk7XG4gICAgICAgICAgdmFyIHN0ZXA7XG5cbiAgICAgICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgICAgICBpZiAoaXNWYWxpZEVsZW1lbnQoc3RlcC52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgdmFsaWRhdGVFeHBsaWNpdEtleShzdGVwLnZhbHVlLCBwYXJlbnRUeXBlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi8qKlxuICogR2l2ZW4gYW4gZWxlbWVudCwgdmFsaWRhdGUgdGhhdCBpdHMgcHJvcHMgZm9sbG93IHRoZSBwcm9wVHlwZXMgZGVmaW5pdGlvbixcbiAqIHByb3ZpZGVkIGJ5IHRoZSB0eXBlLlxuICpcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBlbGVtZW50XG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZVByb3BUeXBlcyhlbGVtZW50KSB7XG4gIHtcbiAgICB2YXIgdHlwZSA9IGVsZW1lbnQudHlwZTtcblxuICAgIGlmICh0eXBlID09PSBudWxsIHx8IHR5cGUgPT09IHVuZGVmaW5lZCB8fCB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgcHJvcFR5cGVzO1xuXG4gICAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBwcm9wVHlwZXMgPSB0eXBlLnByb3BUeXBlcztcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSB8fCAvLyBOb3RlOiBNZW1vIG9ubHkgY2hlY2tzIG91dGVyIHByb3BzIGhlcmUuXG4gICAgLy8gSW5uZXIgcHJvcHMgYXJlIGNoZWNrZWQgaW4gdGhlIHJlY29uY2lsZXIuXG4gICAgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFKSkge1xuICAgICAgcHJvcFR5cGVzID0gdHlwZS5wcm9wVHlwZXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAocHJvcFR5cGVzKSB7XG4gICAgICAvLyBJbnRlbnRpb25hbGx5IGluc2lkZSB0byBhdm9pZCB0cmlnZ2VyaW5nIGxhenkgaW5pdGlhbGl6ZXJzOlxuICAgICAgdmFyIG5hbWUgPSBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUodHlwZSk7XG4gICAgICBjaGVja1Byb3BUeXBlcyhwcm9wVHlwZXMsIGVsZW1lbnQucHJvcHMsICdwcm9wJywgbmFtZSwgZWxlbWVudCk7XG4gICAgfSBlbHNlIGlmICh0eXBlLlByb3BUeXBlcyAhPT0gdW5kZWZpbmVkICYmICFwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93bikge1xuICAgICAgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24gPSB0cnVlOyAvLyBJbnRlbnRpb25hbGx5IGluc2lkZSB0byBhdm9pZCB0cmlnZ2VyaW5nIGxhenkgaW5pdGlhbGl6ZXJzOlxuXG4gICAgICB2YXIgX25hbWUgPSBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUodHlwZSk7XG5cbiAgICAgIGVycm9yKCdDb21wb25lbnQgJXMgZGVjbGFyZWQgYFByb3BUeXBlc2AgaW5zdGVhZCBvZiBgcHJvcFR5cGVzYC4gRGlkIHlvdSBtaXNzcGVsbCB0aGUgcHJvcGVydHkgYXNzaWdubWVudD8nLCBfbmFtZSB8fCAnVW5rbm93bicpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdHlwZS5nZXREZWZhdWx0UHJvcHMgPT09ICdmdW5jdGlvbicgJiYgIXR5cGUuZ2V0RGVmYXVsdFByb3BzLmlzUmVhY3RDbGFzc0FwcHJvdmVkKSB7XG4gICAgICBlcnJvcignZ2V0RGVmYXVsdFByb3BzIGlzIG9ubHkgdXNlZCBvbiBjbGFzc2ljIFJlYWN0LmNyZWF0ZUNsYXNzICcgKyAnZGVmaW5pdGlvbnMuIFVzZSBhIHN0YXRpYyBwcm9wZXJ0eSBuYW1lZCBgZGVmYXVsdFByb3BzYCBpbnN0ZWFkLicpO1xuICAgIH1cbiAgfVxufVxuLyoqXG4gKiBHaXZlbiBhIGZyYWdtZW50LCB2YWxpZGF0ZSB0aGF0IGl0IGNhbiBvbmx5IGJlIHByb3ZpZGVkIHdpdGggZnJhZ21lbnQgcHJvcHNcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBmcmFnbWVudFxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVGcmFnbWVudFByb3BzKGZyYWdtZW50KSB7XG4gIHtcbiAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGZyYWdtZW50LnByb3BzKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGtleSA9IGtleXNbaV07XG5cbiAgICAgIGlmIChrZXkgIT09ICdjaGlsZHJlbicgJiYga2V5ICE9PSAna2V5Jykge1xuICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGZyYWdtZW50KTtcblxuICAgICAgICBlcnJvcignSW52YWxpZCBwcm9wIGAlc2Agc3VwcGxpZWQgdG8gYFJlYWN0LkZyYWdtZW50YC4gJyArICdSZWFjdC5GcmFnbWVudCBjYW4gb25seSBoYXZlIGBrZXlgIGFuZCBgY2hpbGRyZW5gIHByb3BzLicsIGtleSk7XG5cbiAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShudWxsKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGZyYWdtZW50LnJlZiAhPT0gbnVsbCkge1xuICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShmcmFnbWVudCk7XG5cbiAgICAgIGVycm9yKCdJbnZhbGlkIGF0dHJpYnV0ZSBgcmVmYCBzdXBwbGllZCB0byBgUmVhY3QuRnJhZ21lbnRgLicpO1xuXG4gICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKG51bGwpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBqc3hXaXRoVmFsaWRhdGlvbih0eXBlLCBwcm9wcywga2V5LCBpc1N0YXRpY0NoaWxkcmVuLCBzb3VyY2UsIHNlbGYpIHtcbiAge1xuICAgIHZhciB2YWxpZFR5cGUgPSBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSk7IC8vIFdlIHdhcm4gaW4gdGhpcyBjYXNlIGJ1dCBkb24ndCB0aHJvdy4gV2UgZXhwZWN0IHRoZSBlbGVtZW50IGNyZWF0aW9uIHRvXG4gICAgLy8gc3VjY2VlZCBhbmQgdGhlcmUgd2lsbCBsaWtlbHkgYmUgZXJyb3JzIGluIHJlbmRlci5cblxuICAgIGlmICghdmFsaWRUeXBlKSB7XG4gICAgICB2YXIgaW5mbyA9ICcnO1xuXG4gICAgICBpZiAodHlwZSA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsICYmIE9iamVjdC5rZXlzKHR5cGUpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBpbmZvICs9ICcgWW91IGxpa2VseSBmb3Jnb3QgdG8gZXhwb3J0IHlvdXIgY29tcG9uZW50IGZyb20gdGhlIGZpbGUgJyArIFwiaXQncyBkZWZpbmVkIGluLCBvciB5b3UgbWlnaHQgaGF2ZSBtaXhlZCB1cCBkZWZhdWx0IGFuZCBuYW1lZCBpbXBvcnRzLlwiO1xuICAgICAgfVxuXG4gICAgICB2YXIgc291cmNlSW5mbyA9IGdldFNvdXJjZUluZm9FcnJvckFkZGVuZHVtKHNvdXJjZSk7XG5cbiAgICAgIGlmIChzb3VyY2VJbmZvKSB7XG4gICAgICAgIGluZm8gKz0gc291cmNlSW5mbztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGluZm8gKz0gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCk7XG4gICAgICB9XG5cbiAgICAgIHZhciB0eXBlU3RyaW5nO1xuXG4gICAgICBpZiAodHlwZSA9PT0gbnVsbCkge1xuICAgICAgICB0eXBlU3RyaW5nID0gJ251bGwnO1xuICAgICAgfSBlbHNlIGlmIChpc0FycmF5KHR5cGUpKSB7XG4gICAgICAgIHR5cGVTdHJpbmcgPSAnYXJyYXknO1xuICAgICAgfSBlbHNlIGlmICh0eXBlICE9PSB1bmRlZmluZWQgJiYgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFKSB7XG4gICAgICAgIHR5cGVTdHJpbmcgPSBcIjxcIiArIChnZXRDb21wb25lbnROYW1lRnJvbVR5cGUodHlwZS50eXBlKSB8fCAnVW5rbm93bicpICsgXCIgLz5cIjtcbiAgICAgICAgaW5mbyA9ICcgRGlkIHlvdSBhY2NpZGVudGFsbHkgZXhwb3J0IGEgSlNYIGxpdGVyYWwgaW5zdGVhZCBvZiBhIGNvbXBvbmVudD8nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHlwZVN0cmluZyA9IHR5cGVvZiB0eXBlO1xuICAgICAgfVxuXG4gICAgICBlcnJvcignUmVhY3QuanN4OiB0eXBlIGlzIGludmFsaWQgLS0gZXhwZWN0ZWQgYSBzdHJpbmcgKGZvciAnICsgJ2J1aWx0LWluIGNvbXBvbmVudHMpIG9yIGEgY2xhc3MvZnVuY3Rpb24gKGZvciBjb21wb3NpdGUgJyArICdjb21wb25lbnRzKSBidXQgZ290OiAlcy4lcycsIHR5cGVTdHJpbmcsIGluZm8pO1xuICAgIH1cblxuICAgIHZhciBlbGVtZW50ID0ganN4REVWKHR5cGUsIHByb3BzLCBrZXksIHNvdXJjZSwgc2VsZik7IC8vIFRoZSByZXN1bHQgY2FuIGJlIG51bGxpc2ggaWYgYSBtb2NrIG9yIGEgY3VzdG9tIGZ1bmN0aW9uIGlzIHVzZWQuXG4gICAgLy8gVE9ETzogRHJvcCB0aGlzIHdoZW4gdGhlc2UgYXJlIG5vIGxvbmdlciBhbGxvd2VkIGFzIHRoZSB0eXBlIGFyZ3VtZW50LlxuXG4gICAgaWYgKGVsZW1lbnQgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfSAvLyBTa2lwIGtleSB3YXJuaW5nIGlmIHRoZSB0eXBlIGlzbid0IHZhbGlkIHNpbmNlIG91ciBrZXkgdmFsaWRhdGlvbiBsb2dpY1xuICAgIC8vIGRvZXNuJ3QgZXhwZWN0IGEgbm9uLXN0cmluZy9mdW5jdGlvbiB0eXBlIGFuZCBjYW4gdGhyb3cgY29uZnVzaW5nIGVycm9ycy5cbiAgICAvLyBXZSBkb24ndCB3YW50IGV4Y2VwdGlvbiBiZWhhdmlvciB0byBkaWZmZXIgYmV0d2VlbiBkZXYgYW5kIHByb2QuXG4gICAgLy8gKFJlbmRlcmluZyB3aWxsIHRocm93IHdpdGggYSBoZWxwZnVsIG1lc3NhZ2UgYW5kIGFzIHNvb24gYXMgdGhlIHR5cGUgaXNcbiAgICAvLyBmaXhlZCwgdGhlIGtleSB3YXJuaW5ncyB3aWxsIGFwcGVhci4pXG5cblxuICAgIGlmICh2YWxpZFR5cGUpIHtcbiAgICAgIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuO1xuXG4gICAgICBpZiAoY2hpbGRyZW4gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAoaXNTdGF0aWNDaGlsZHJlbikge1xuICAgICAgICAgIGlmIChpc0FycmF5KGNoaWxkcmVuKSkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICB2YWxpZGF0ZUNoaWxkS2V5cyhjaGlsZHJlbltpXSwgdHlwZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChPYmplY3QuZnJlZXplKSB7XG4gICAgICAgICAgICAgIE9iamVjdC5mcmVlemUoY2hpbGRyZW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlcnJvcignUmVhY3QuanN4OiBTdGF0aWMgY2hpbGRyZW4gc2hvdWxkIGFsd2F5cyBiZSBhbiBhcnJheS4gJyArICdZb3UgYXJlIGxpa2VseSBleHBsaWNpdGx5IGNhbGxpbmcgUmVhY3QuanN4cyBvciBSZWFjdC5qc3hERVYuICcgKyAnVXNlIHRoZSBCYWJlbCB0cmFuc2Zvcm0gaW5zdGVhZC4nKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFsaWRhdGVDaGlsZEtleXMoY2hpbGRyZW4sIHR5cGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHR5cGUgPT09IGV4cG9ydHMuRnJhZ21lbnQpIHtcbiAgICAgIHZhbGlkYXRlRnJhZ21lbnRQcm9wcyhlbGVtZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsaWRhdGVQcm9wVHlwZXMoZWxlbWVudCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cbn0gLy8gVGhlc2UgdHdvIGZ1bmN0aW9ucyBleGlzdCB0byBzdGlsbCBnZXQgY2hpbGQgd2FybmluZ3MgaW4gZGV2XG5cbnZhciBqc3hERVYkMSA9ICBqc3hXaXRoVmFsaWRhdGlvbiA7XG5cbmV4cG9ydHMuanN4REVWID0ganN4REVWJDE7XG4gIH0pKCk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtanN4LWRldi1ydW50aW1lLnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWpzeC1kZXYtcnVudGltZS5kZXZlbG9wbWVudC5qcycpO1xufVxuIiwiZXhwb3J0ICogZnJvbSAnLi9zcmMvRW51bS5qcydcbmV4cG9ydCAqIGZyb20gJy4vc3JjL1V0aWxpdHkuanMnXG5leHBvcnQgKiBmcm9tICcuL3NyYy9QYXJzZXIuanMnXG5leHBvcnQgKiBmcm9tICcuL3NyYy9QcmVmaXhlci5qcydcbmV4cG9ydCAqIGZyb20gJy4vc3JjL1Rva2VuaXplci5qcydcbmV4cG9ydCAqIGZyb20gJy4vc3JjL1NlcmlhbGl6ZXIuanMnXG5leHBvcnQgKiBmcm9tICcuL3NyYy9NaWRkbGV3YXJlLmpzJ1xuIiwiZXhwb3J0IHZhciBNUyA9ICctbXMtJ1xuZXhwb3J0IHZhciBNT1ogPSAnLW1vei0nXG5leHBvcnQgdmFyIFdFQktJVCA9ICctd2Via2l0LSdcblxuZXhwb3J0IHZhciBDT01NRU5UID0gJ2NvbW0nXG5leHBvcnQgdmFyIFJVTEVTRVQgPSAncnVsZSdcbmV4cG9ydCB2YXIgREVDTEFSQVRJT04gPSAnZGVjbCdcblxuZXhwb3J0IHZhciBQQUdFID0gJ0BwYWdlJ1xuZXhwb3J0IHZhciBNRURJQSA9ICdAbWVkaWEnXG5leHBvcnQgdmFyIElNUE9SVCA9ICdAaW1wb3J0J1xuZXhwb3J0IHZhciBDSEFSU0VUID0gJ0BjaGFyc2V0J1xuZXhwb3J0IHZhciBWSUVXUE9SVCA9ICdAdmlld3BvcnQnXG5leHBvcnQgdmFyIFNVUFBPUlRTID0gJ0BzdXBwb3J0cydcbmV4cG9ydCB2YXIgRE9DVU1FTlQgPSAnQGRvY3VtZW50J1xuZXhwb3J0IHZhciBOQU1FU1BBQ0UgPSAnQG5hbWVzcGFjZSdcbmV4cG9ydCB2YXIgS0VZRlJBTUVTID0gJ0BrZXlmcmFtZXMnXG5leHBvcnQgdmFyIEZPTlRfRkFDRSA9ICdAZm9udC1mYWNlJ1xuZXhwb3J0IHZhciBDT1VOVEVSX1NUWUxFID0gJ0Bjb3VudGVyLXN0eWxlJ1xuZXhwb3J0IHZhciBGT05UX0ZFQVRVUkVfVkFMVUVTID0gJ0Bmb250LWZlYXR1cmUtdmFsdWVzJ1xuIiwiaW1wb3J0IHtNUywgTU9aLCBXRUJLSVQsIFJVTEVTRVQsIEtFWUZSQU1FUywgREVDTEFSQVRJT059IGZyb20gJy4vRW51bS5qcydcbmltcG9ydCB7bWF0Y2gsIGNoYXJhdCwgc3Vic3RyLCBzdHJsZW4sIHNpemVvZiwgcmVwbGFjZSwgY29tYmluZX0gZnJvbSAnLi9VdGlsaXR5LmpzJ1xuaW1wb3J0IHtjb3B5LCB0b2tlbml6ZX0gZnJvbSAnLi9Ub2tlbml6ZXIuanMnXG5pbXBvcnQge3NlcmlhbGl6ZX0gZnJvbSAnLi9TZXJpYWxpemVyLmpzJ1xuaW1wb3J0IHtwcmVmaXh9IGZyb20gJy4vUHJlZml4ZXIuanMnXG5cbi8qKlxuICogQHBhcmFtIHtmdW5jdGlvbltdfSBjb2xsZWN0aW9uXG4gKiBAcmV0dXJuIHtmdW5jdGlvbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1pZGRsZXdhcmUgKGNvbGxlY3Rpb24pIHtcblx0dmFyIGxlbmd0aCA9IHNpemVvZihjb2xsZWN0aW9uKVxuXG5cdHJldHVybiBmdW5jdGlvbiAoZWxlbWVudCwgaW5kZXgsIGNoaWxkcmVuLCBjYWxsYmFjaykge1xuXHRcdHZhciBvdXRwdXQgPSAnJ1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKylcblx0XHRcdG91dHB1dCArPSBjb2xsZWN0aW9uW2ldKGVsZW1lbnQsIGluZGV4LCBjaGlsZHJlbiwgY2FsbGJhY2spIHx8ICcnXG5cblx0XHRyZXR1cm4gb3V0cHV0XG5cdH1cbn1cblxuLyoqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHJldHVybiB7ZnVuY3Rpb259XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBydWxlc2hlZXQgKGNhbGxiYWNrKSB7XG5cdHJldHVybiBmdW5jdGlvbiAoZWxlbWVudCkge1xuXHRcdGlmICghZWxlbWVudC5yb290KVxuXHRcdFx0aWYgKGVsZW1lbnQgPSBlbGVtZW50LnJldHVybilcblx0XHRcdFx0Y2FsbGJhY2soZWxlbWVudClcblx0fVxufVxuXG4vKipcbiAqIEBwYXJhbSB7b2JqZWN0fSBlbGVtZW50XG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcbiAqIEBwYXJhbSB7b2JqZWN0W119IGNoaWxkcmVuXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFja1xuICovXG5leHBvcnQgZnVuY3Rpb24gcHJlZml4ZXIgKGVsZW1lbnQsIGluZGV4LCBjaGlsZHJlbiwgY2FsbGJhY2spIHtcblx0aWYgKCFlbGVtZW50LnJldHVybilcblx0XHRzd2l0Y2ggKGVsZW1lbnQudHlwZSkge1xuXHRcdFx0Y2FzZSBERUNMQVJBVElPTjogZWxlbWVudC5yZXR1cm4gPSBwcmVmaXgoZWxlbWVudC52YWx1ZSwgZWxlbWVudC5sZW5ndGgpXG5cdFx0XHRcdGJyZWFrXG5cdFx0XHRjYXNlIEtFWUZSQU1FUzpcblx0XHRcdFx0cmV0dXJuIHNlcmlhbGl6ZShbY29weShyZXBsYWNlKGVsZW1lbnQudmFsdWUsICdAJywgJ0AnICsgV0VCS0lUKSwgZWxlbWVudCwgJycpXSwgY2FsbGJhY2spXG5cdFx0XHRjYXNlIFJVTEVTRVQ6XG5cdFx0XHRcdGlmIChlbGVtZW50Lmxlbmd0aClcblx0XHRcdFx0XHRyZXR1cm4gY29tYmluZShlbGVtZW50LnByb3BzLCBmdW5jdGlvbiAodmFsdWUpIHtcblx0XHRcdFx0XHRcdHN3aXRjaCAobWF0Y2godmFsdWUsIC8oOjpwbGFjXFx3K3w6cmVhZC1cXHcrKS8pKSB7XG5cdFx0XHRcdFx0XHRcdC8vIDpyZWFkLShvbmx5fHdyaXRlKVxuXHRcdFx0XHRcdFx0XHRjYXNlICc6cmVhZC1vbmx5JzogY2FzZSAnOnJlYWQtd3JpdGUnOlxuXHRcdFx0XHRcdFx0XHRcdHJldHVybiBzZXJpYWxpemUoW2NvcHkocmVwbGFjZSh2YWx1ZSwgLzoocmVhZC1cXHcrKS8sICc6JyArIE1PWiArICckMScpLCBlbGVtZW50LCAnJyldLCBjYWxsYmFjaylcblx0XHRcdFx0XHRcdFx0Ly8gOnBsYWNlaG9sZGVyXG5cdFx0XHRcdFx0XHRcdGNhc2UgJzo6cGxhY2Vob2xkZXInOlxuXHRcdFx0XHRcdFx0XHRcdHJldHVybiBzZXJpYWxpemUoW1xuXHRcdFx0XHRcdFx0XHRcdFx0Y29weShyZXBsYWNlKHZhbHVlLCAvOihwbGFjXFx3KykvLCAnOicgKyBXRUJLSVQgKyAnaW5wdXQtJDEnKSwgZWxlbWVudCwgJycpLFxuXHRcdFx0XHRcdFx0XHRcdFx0Y29weShyZXBsYWNlKHZhbHVlLCAvOihwbGFjXFx3KykvLCAnOicgKyBNT1ogKyAnJDEnKSwgZWxlbWVudCwgJycpLFxuXHRcdFx0XHRcdFx0XHRcdFx0Y29weShyZXBsYWNlKHZhbHVlLCAvOihwbGFjXFx3KykvLCBNUyArICdpbnB1dC0kMScpLCBlbGVtZW50LCAnJylcblx0XHRcdFx0XHRcdFx0XHRdLCBjYWxsYmFjaylcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0cmV0dXJuICcnXG5cdFx0XHRcdFx0fSlcblx0XHR9XG59XG5cbi8qKlxuICogQHBhcmFtIHtvYmplY3R9IGVsZW1lbnRcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxuICogQHBhcmFtIHtvYmplY3RbXX0gY2hpbGRyZW5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5hbWVzcGFjZSAoZWxlbWVudCkge1xuXHRzd2l0Y2ggKGVsZW1lbnQudHlwZSkge1xuXHRcdGNhc2UgUlVMRVNFVDpcblx0XHRcdGVsZW1lbnQucHJvcHMgPSBlbGVtZW50LnByb3BzLm1hcChmdW5jdGlvbiAodmFsdWUpIHtcblx0XHRcdFx0cmV0dXJuIGNvbWJpbmUodG9rZW5pemUodmFsdWUpLCBmdW5jdGlvbiAodmFsdWUsIGluZGV4LCBjaGlsZHJlbikge1xuXHRcdFx0XHRcdHN3aXRjaCAoY2hhcmF0KHZhbHVlLCAwKSkge1xuXHRcdFx0XHRcdFx0Ly8gXFxmXG5cdFx0XHRcdFx0XHRjYXNlIDEyOlxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gc3Vic3RyKHZhbHVlLCAxLCBzdHJsZW4odmFsdWUpKVxuXHRcdFx0XHRcdFx0Ly8gXFwwICggKyA+IH5cblx0XHRcdFx0XHRcdGNhc2UgMDogY2FzZSA0MDogY2FzZSA0MzogY2FzZSA2MjogY2FzZSAxMjY6XG5cdFx0XHRcdFx0XHRcdHJldHVybiB2YWx1ZVxuXHRcdFx0XHRcdFx0Ly8gOlxuXHRcdFx0XHRcdFx0Y2FzZSA1ODpcblx0XHRcdFx0XHRcdFx0aWYgKGNoaWxkcmVuWysraW5kZXhdID09PSAnZ2xvYmFsJylcblx0XHRcdFx0XHRcdFx0XHRjaGlsZHJlbltpbmRleF0gPSAnJywgY2hpbGRyZW5bKytpbmRleF0gPSAnXFxmJyArIHN1YnN0cihjaGlsZHJlbltpbmRleF0sIGluZGV4ID0gMSwgLTEpXG5cdFx0XHRcdFx0XHQvLyBcXHNcblx0XHRcdFx0XHRcdGNhc2UgMzI6XG5cdFx0XHRcdFx0XHRcdHJldHVybiBpbmRleCA9PT0gMSA/ICcnIDogdmFsdWVcblx0XHRcdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0XHRcdHN3aXRjaCAoaW5kZXgpIHtcblx0XHRcdFx0XHRcdFx0XHRjYXNlIDA6IGVsZW1lbnQgPSB2YWx1ZVxuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHNpemVvZihjaGlsZHJlbikgPiAxID8gJycgOiB2YWx1ZVxuXHRcdFx0XHRcdFx0XHRcdGNhc2UgaW5kZXggPSBzaXplb2YoY2hpbGRyZW4pIC0gMTogY2FzZSAyOlxuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIGluZGV4ID09PSAyID8gdmFsdWUgKyBlbGVtZW50ICsgZWxlbWVudCA6IHZhbHVlICsgZWxlbWVudFxuXHRcdFx0XHRcdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gdmFsdWVcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSlcblx0XHRcdH0pXG5cdH1cbn1cbiIsImltcG9ydCB7Q09NTUVOVCwgUlVMRVNFVCwgREVDTEFSQVRJT059IGZyb20gJy4vRW51bS5qcydcbmltcG9ydCB7YWJzLCB0cmltLCBmcm9tLCBzaXplb2YsIHN0cmxlbiwgc3Vic3RyLCBhcHBlbmQsIHJlcGxhY2V9IGZyb20gJy4vVXRpbGl0eS5qcydcbmltcG9ydCB7bm9kZSwgY2hhciwgcHJldiwgbmV4dCwgcGVlaywgY2FyZXQsIGFsbG9jLCBkZWFsbG9jLCBkZWxpbWl0LCB3aGl0ZXNwYWNlLCBlc2NhcGluZywgaWRlbnRpZmllciwgY29tbWVudGVyfSBmcm9tICcuL1Rva2VuaXplci5qcydcblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAqIEByZXR1cm4ge29iamVjdFtdfVxuICovXG5leHBvcnQgZnVuY3Rpb24gY29tcGlsZSAodmFsdWUpIHtcblx0cmV0dXJuIGRlYWxsb2MocGFyc2UoJycsIG51bGwsIG51bGwsIG51bGwsIFsnJ10sIHZhbHVlID0gYWxsb2ModmFsdWUpLCAwLCBbMF0sIHZhbHVlKSlcbn1cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAqIEBwYXJhbSB7b2JqZWN0fSByb290XG4gKiBAcGFyYW0ge29iamVjdD99IHBhcmVudFxuICogQHBhcmFtIHtzdHJpbmdbXX0gcnVsZVxuICogQHBhcmFtIHtzdHJpbmdbXX0gcnVsZXNcbiAqIEBwYXJhbSB7c3RyaW5nW119IHJ1bGVzZXRzXG4gKiBAcGFyYW0ge251bWJlcltdfSBwc2V1ZG9cbiAqIEBwYXJhbSB7bnVtYmVyW119IHBvaW50c1xuICogQHBhcmFtIHtzdHJpbmdbXX0gZGVjbGFyYXRpb25zXG4gKiBAcmV0dXJuIHtvYmplY3R9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZSAodmFsdWUsIHJvb3QsIHBhcmVudCwgcnVsZSwgcnVsZXMsIHJ1bGVzZXRzLCBwc2V1ZG8sIHBvaW50cywgZGVjbGFyYXRpb25zKSB7XG5cdHZhciBpbmRleCA9IDBcblx0dmFyIG9mZnNldCA9IDBcblx0dmFyIGxlbmd0aCA9IHBzZXVkb1xuXHR2YXIgYXRydWxlID0gMFxuXHR2YXIgcHJvcGVydHkgPSAwXG5cdHZhciBwcmV2aW91cyA9IDBcblx0dmFyIHZhcmlhYmxlID0gMVxuXHR2YXIgc2Nhbm5pbmcgPSAxXG5cdHZhciBhbXBlcnNhbmQgPSAxXG5cdHZhciBjaGFyYWN0ZXIgPSAwXG5cdHZhciB0eXBlID0gJydcblx0dmFyIHByb3BzID0gcnVsZXNcblx0dmFyIGNoaWxkcmVuID0gcnVsZXNldHNcblx0dmFyIHJlZmVyZW5jZSA9IHJ1bGVcblx0dmFyIGNoYXJhY3RlcnMgPSB0eXBlXG5cblx0d2hpbGUgKHNjYW5uaW5nKVxuXHRcdHN3aXRjaCAocHJldmlvdXMgPSBjaGFyYWN0ZXIsIGNoYXJhY3RlciA9IG5leHQoKSkge1xuXHRcdFx0Ly8gXCIgJyBbIChcblx0XHRcdGNhc2UgMzQ6IGNhc2UgMzk6IGNhc2UgOTE6IGNhc2UgNDA6XG5cdFx0XHRcdGNoYXJhY3RlcnMgKz0gZGVsaW1pdChjaGFyYWN0ZXIpXG5cdFx0XHRcdGJyZWFrXG5cdFx0XHQvLyBcXHQgXFxuIFxcciBcXHNcblx0XHRcdGNhc2UgOTogY2FzZSAxMDogY2FzZSAxMzogY2FzZSAzMjpcblx0XHRcdFx0Y2hhcmFjdGVycyArPSB3aGl0ZXNwYWNlKHByZXZpb3VzKVxuXHRcdFx0XHRicmVha1xuXHRcdFx0Ly8gXFxcblx0XHRcdGNhc2UgOTI6XG5cdFx0XHRcdGNoYXJhY3RlcnMgKz0gZXNjYXBpbmcoY2FyZXQoKSAtIDEsIDcpXG5cdFx0XHRcdGNvbnRpbnVlXG5cdFx0XHQvLyAvXG5cdFx0XHRjYXNlIDQ3OlxuXHRcdFx0XHRzd2l0Y2ggKHBlZWsoKSkge1xuXHRcdFx0XHRcdGNhc2UgNDI6IGNhc2UgNDc6XG5cdFx0XHRcdFx0XHRhcHBlbmQoY29tbWVudChjb21tZW50ZXIobmV4dCgpLCBjYXJldCgpKSwgcm9vdCwgcGFyZW50KSwgZGVjbGFyYXRpb25zKVxuXHRcdFx0XHRcdFx0YnJlYWtcblx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0Y2hhcmFjdGVycyArPSAnLydcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVha1xuXHRcdFx0Ly8ge1xuXHRcdFx0Y2FzZSAxMjMgKiB2YXJpYWJsZTpcblx0XHRcdFx0cG9pbnRzW2luZGV4KytdID0gc3RybGVuKGNoYXJhY3RlcnMpICogYW1wZXJzYW5kXG5cdFx0XHQvLyB9IDsgXFwwXG5cdFx0XHRjYXNlIDEyNSAqIHZhcmlhYmxlOiBjYXNlIDU5OiBjYXNlIDA6XG5cdFx0XHRcdHN3aXRjaCAoY2hhcmFjdGVyKSB7XG5cdFx0XHRcdFx0Ly8gXFwwIH1cblx0XHRcdFx0XHRjYXNlIDA6IGNhc2UgMTI1OiBzY2FubmluZyA9IDBcblx0XHRcdFx0XHQvLyA7XG5cdFx0XHRcdFx0Y2FzZSA1OSArIG9mZnNldDpcblx0XHRcdFx0XHRcdGlmIChwcm9wZXJ0eSA+IDAgJiYgKHN0cmxlbihjaGFyYWN0ZXJzKSAtIGxlbmd0aCkpXG5cdFx0XHRcdFx0XHRcdGFwcGVuZChwcm9wZXJ0eSA+IDMyID8gZGVjbGFyYXRpb24oY2hhcmFjdGVycyArICc7JywgcnVsZSwgcGFyZW50LCBsZW5ndGggLSAxKSA6IGRlY2xhcmF0aW9uKHJlcGxhY2UoY2hhcmFjdGVycywgJyAnLCAnJykgKyAnOycsIHJ1bGUsIHBhcmVudCwgbGVuZ3RoIC0gMiksIGRlY2xhcmF0aW9ucylcblx0XHRcdFx0XHRcdGJyZWFrXG5cdFx0XHRcdFx0Ly8gQCA7XG5cdFx0XHRcdFx0Y2FzZSA1OTogY2hhcmFjdGVycyArPSAnOydcblx0XHRcdFx0XHQvLyB7IHJ1bGUvYXQtcnVsZVxuXHRcdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0XHRhcHBlbmQocmVmZXJlbmNlID0gcnVsZXNldChjaGFyYWN0ZXJzLCByb290LCBwYXJlbnQsIGluZGV4LCBvZmZzZXQsIHJ1bGVzLCBwb2ludHMsIHR5cGUsIHByb3BzID0gW10sIGNoaWxkcmVuID0gW10sIGxlbmd0aCksIHJ1bGVzZXRzKVxuXG5cdFx0XHRcdFx0XHRpZiAoY2hhcmFjdGVyID09PSAxMjMpXG5cdFx0XHRcdFx0XHRcdGlmIChvZmZzZXQgPT09IDApXG5cdFx0XHRcdFx0XHRcdFx0cGFyc2UoY2hhcmFjdGVycywgcm9vdCwgcmVmZXJlbmNlLCByZWZlcmVuY2UsIHByb3BzLCBydWxlc2V0cywgbGVuZ3RoLCBwb2ludHMsIGNoaWxkcmVuKVxuXHRcdFx0XHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0XHRcdFx0c3dpdGNoIChhdHJ1bGUpIHtcblx0XHRcdFx0XHRcdFx0XHRcdC8vIGQgbSBzXG5cdFx0XHRcdFx0XHRcdFx0XHRjYXNlIDEwMDogY2FzZSAxMDk6IGNhc2UgMTE1OlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwYXJzZSh2YWx1ZSwgcmVmZXJlbmNlLCByZWZlcmVuY2UsIHJ1bGUgJiYgYXBwZW5kKHJ1bGVzZXQodmFsdWUsIHJlZmVyZW5jZSwgcmVmZXJlbmNlLCAwLCAwLCBydWxlcywgcG9pbnRzLCB0eXBlLCBydWxlcywgcHJvcHMgPSBbXSwgbGVuZ3RoKSwgY2hpbGRyZW4pLCBydWxlcywgY2hpbGRyZW4sIGxlbmd0aCwgcG9pbnRzLCBydWxlID8gcHJvcHMgOiBjaGlsZHJlbilcblx0XHRcdFx0XHRcdFx0XHRcdFx0YnJlYWtcblx0XHRcdFx0XHRcdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHBhcnNlKGNoYXJhY3RlcnMsIHJlZmVyZW5jZSwgcmVmZXJlbmNlLCByZWZlcmVuY2UsIFsnJ10sIGNoaWxkcmVuLCBsZW5ndGgsIHBvaW50cywgY2hpbGRyZW4pXG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0aW5kZXggPSBvZmZzZXQgPSBwcm9wZXJ0eSA9IDAsIHZhcmlhYmxlID0gYW1wZXJzYW5kID0gMSwgdHlwZSA9IGNoYXJhY3RlcnMgPSAnJywgbGVuZ3RoID0gcHNldWRvXG5cdFx0XHRcdGJyZWFrXG5cdFx0XHQvLyA6XG5cdFx0XHRjYXNlIDU4OlxuXHRcdFx0XHRsZW5ndGggPSAxICsgc3RybGVuKGNoYXJhY3RlcnMpLCBwcm9wZXJ0eSA9IHByZXZpb3VzXG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRpZiAodmFyaWFibGUgPCAxKVxuXHRcdFx0XHRcdGlmIChjaGFyYWN0ZXIgPT0gMTIzKVxuXHRcdFx0XHRcdFx0LS12YXJpYWJsZVxuXHRcdFx0XHRcdGVsc2UgaWYgKGNoYXJhY3RlciA9PSAxMjUgJiYgdmFyaWFibGUrKyA9PSAwICYmIHByZXYoKSA9PSAxMjUpXG5cdFx0XHRcdFx0XHRjb250aW51ZVxuXG5cdFx0XHRcdHN3aXRjaCAoY2hhcmFjdGVycyArPSBmcm9tKGNoYXJhY3RlciksIGNoYXJhY3RlciAqIHZhcmlhYmxlKSB7XG5cdFx0XHRcdFx0Ly8gJlxuXHRcdFx0XHRcdGNhc2UgMzg6XG5cdFx0XHRcdFx0XHRhbXBlcnNhbmQgPSBvZmZzZXQgPiAwID8gMSA6IChjaGFyYWN0ZXJzICs9ICdcXGYnLCAtMSlcblx0XHRcdFx0XHRcdGJyZWFrXG5cdFx0XHRcdFx0Ly8gLFxuXHRcdFx0XHRcdGNhc2UgNDQ6XG5cdFx0XHRcdFx0XHRwb2ludHNbaW5kZXgrK10gPSAoc3RybGVuKGNoYXJhY3RlcnMpIC0gMSkgKiBhbXBlcnNhbmQsIGFtcGVyc2FuZCA9IDFcblx0XHRcdFx0XHRcdGJyZWFrXG5cdFx0XHRcdFx0Ly8gQFxuXHRcdFx0XHRcdGNhc2UgNjQ6XG5cdFx0XHRcdFx0XHQvLyAtXG5cdFx0XHRcdFx0XHRpZiAocGVlaygpID09PSA0NSlcblx0XHRcdFx0XHRcdFx0Y2hhcmFjdGVycyArPSBkZWxpbWl0KG5leHQoKSlcblxuXHRcdFx0XHRcdFx0YXRydWxlID0gcGVlaygpLCBvZmZzZXQgPSBzdHJsZW4odHlwZSA9IGNoYXJhY3RlcnMgKz0gaWRlbnRpZmllcihjYXJldCgpKSksIGNoYXJhY3RlcisrXG5cdFx0XHRcdFx0XHRicmVha1xuXHRcdFx0XHRcdC8vIC1cblx0XHRcdFx0XHRjYXNlIDQ1OlxuXHRcdFx0XHRcdFx0aWYgKHByZXZpb3VzID09PSA0NSAmJiBzdHJsZW4oY2hhcmFjdGVycykgPT0gMilcblx0XHRcdFx0XHRcdFx0dmFyaWFibGUgPSAwXG5cdFx0XHRcdH1cblx0XHR9XG5cblx0cmV0dXJuIHJ1bGVzZXRzXG59XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKiBAcGFyYW0ge29iamVjdH0gcm9vdFxuICogQHBhcmFtIHtvYmplY3Q/fSBwYXJlbnRcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxuICogQHBhcmFtIHtudW1iZXJ9IG9mZnNldFxuICogQHBhcmFtIHtzdHJpbmdbXX0gcnVsZXNcbiAqIEBwYXJhbSB7bnVtYmVyW119IHBvaW50c1xuICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcbiAqIEBwYXJhbSB7c3RyaW5nW119IHByb3BzXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBjaGlsZHJlblxuICogQHBhcmFtIHtudW1iZXJ9IGxlbmd0aFxuICogQHJldHVybiB7b2JqZWN0fVxuICovXG5leHBvcnQgZnVuY3Rpb24gcnVsZXNldCAodmFsdWUsIHJvb3QsIHBhcmVudCwgaW5kZXgsIG9mZnNldCwgcnVsZXMsIHBvaW50cywgdHlwZSwgcHJvcHMsIGNoaWxkcmVuLCBsZW5ndGgpIHtcblx0dmFyIHBvc3QgPSBvZmZzZXQgLSAxXG5cdHZhciBydWxlID0gb2Zmc2V0ID09PSAwID8gcnVsZXMgOiBbJyddXG5cdHZhciBzaXplID0gc2l6ZW9mKHJ1bGUpXG5cblx0Zm9yICh2YXIgaSA9IDAsIGogPSAwLCBrID0gMDsgaSA8IGluZGV4OyArK2kpXG5cdFx0Zm9yICh2YXIgeCA9IDAsIHkgPSBzdWJzdHIodmFsdWUsIHBvc3QgKyAxLCBwb3N0ID0gYWJzKGogPSBwb2ludHNbaV0pKSwgeiA9IHZhbHVlOyB4IDwgc2l6ZTsgKyt4KVxuXHRcdFx0aWYgKHogPSB0cmltKGogPiAwID8gcnVsZVt4XSArICcgJyArIHkgOiByZXBsYWNlKHksIC8mXFxmL2csIHJ1bGVbeF0pKSlcblx0XHRcdFx0cHJvcHNbaysrXSA9IHpcblxuXHRyZXR1cm4gbm9kZSh2YWx1ZSwgcm9vdCwgcGFyZW50LCBvZmZzZXQgPT09IDAgPyBSVUxFU0VUIDogdHlwZSwgcHJvcHMsIGNoaWxkcmVuLCBsZW5ndGgpXG59XG5cbi8qKlxuICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlXG4gKiBAcGFyYW0ge29iamVjdH0gcm9vdFxuICogQHBhcmFtIHtvYmplY3Q/fSBwYXJlbnRcbiAqIEByZXR1cm4ge29iamVjdH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbW1lbnQgKHZhbHVlLCByb290LCBwYXJlbnQpIHtcblx0cmV0dXJuIG5vZGUodmFsdWUsIHJvb3QsIHBhcmVudCwgQ09NTUVOVCwgZnJvbShjaGFyKCkpLCBzdWJzdHIodmFsdWUsIDIsIC0yKSwgMClcbn1cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAqIEBwYXJhbSB7b2JqZWN0fSByb290XG4gKiBAcGFyYW0ge29iamVjdD99IHBhcmVudFxuICogQHBhcmFtIHtudW1iZXJ9IGxlbmd0aFxuICogQHJldHVybiB7b2JqZWN0fVxuICovXG5leHBvcnQgZnVuY3Rpb24gZGVjbGFyYXRpb24gKHZhbHVlLCByb290LCBwYXJlbnQsIGxlbmd0aCkge1xuXHRyZXR1cm4gbm9kZSh2YWx1ZSwgcm9vdCwgcGFyZW50LCBERUNMQVJBVElPTiwgc3Vic3RyKHZhbHVlLCAwLCBsZW5ndGgpLCBzdWJzdHIodmFsdWUsIGxlbmd0aCArIDEsIC0xKSwgbGVuZ3RoKVxufVxuIiwiaW1wb3J0IHtNUywgTU9aLCBXRUJLSVR9IGZyb20gJy4vRW51bS5qcydcbmltcG9ydCB7aGFzaCwgY2hhcmF0LCBzdHJsZW4sIGluZGV4b2YsIHJlcGxhY2V9IGZyb20gJy4vVXRpbGl0eS5qcydcblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAqIEBwYXJhbSB7bnVtYmVyfSBsZW5ndGhcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHByZWZpeCAodmFsdWUsIGxlbmd0aCkge1xuXHRzd2l0Y2ggKGhhc2godmFsdWUsIGxlbmd0aCkpIHtcblx0XHQvLyBjb2xvci1hZGp1c3Rcblx0XHRjYXNlIDUxMDM6XG5cdFx0XHRyZXR1cm4gV0VCS0lUICsgJ3ByaW50LScgKyB2YWx1ZSArIHZhbHVlXG5cdFx0Ly8gYW5pbWF0aW9uLCBhbmltYXRpb24tKGRlbGF5fGRpcmVjdGlvbnxkdXJhdGlvbnxmaWxsLW1vZGV8aXRlcmF0aW9uLWNvdW50fG5hbWV8cGxheS1zdGF0ZXx0aW1pbmctZnVuY3Rpb24pXG5cdFx0Y2FzZSA1NzM3OiBjYXNlIDQyMDE6IGNhc2UgMzE3NzogY2FzZSAzNDMzOiBjYXNlIDE2NDE6IGNhc2UgNDQ1NzogY2FzZSAyOTIxOlxuXHRcdC8vIHRleHQtZGVjb3JhdGlvbiwgZmlsdGVyLCBjbGlwLXBhdGgsIGJhY2tmYWNlLXZpc2liaWxpdHksIGNvbHVtbiwgYm94LWRlY29yYXRpb24tYnJlYWtcblx0XHRjYXNlIDU1NzI6IGNhc2UgNjM1NjogY2FzZSA1ODQ0OiBjYXNlIDMxOTE6IGNhc2UgNjY0NTogY2FzZSAzMDA1OlxuXHRcdC8vIG1hc2ssIG1hc2staW1hZ2UsIG1hc2stKG1vZGV8Y2xpcHxzaXplKSwgbWFzay0ocmVwZWF0fG9yaWdpbiksIG1hc2stcG9zaXRpb24sIG1hc2stY29tcG9zaXRlLFxuXHRcdGNhc2UgNjM5MTogY2FzZSA1ODc5OiBjYXNlIDU2MjM6IGNhc2UgNjEzNTogY2FzZSA0NTk5OiBjYXNlIDQ4NTU6XG5cdFx0Ly8gYmFja2dyb3VuZC1jbGlwLCBjb2x1bW5zLCBjb2x1bW4tKGNvdW50fGZpbGx8Z2FwfHJ1bGV8cnVsZS1jb2xvcnxydWxlLXN0eWxlfHJ1bGUtd2lkdGh8c3Bhbnx3aWR0aClcblx0XHRjYXNlIDQyMTU6IGNhc2UgNjM4OTogY2FzZSA1MTA5OiBjYXNlIDUzNjU6IGNhc2UgNTYyMTogY2FzZSAzODI5OlxuXHRcdFx0cmV0dXJuIFdFQktJVCArIHZhbHVlICsgdmFsdWVcblx0XHQvLyBhcHBlYXJhbmNlLCB1c2VyLXNlbGVjdCwgdHJhbnNmb3JtLCBoeXBoZW5zLCB0ZXh0LXNpemUtYWRqdXN0XG5cdFx0Y2FzZSA1MzQ5OiBjYXNlIDQyNDY6IGNhc2UgNDgxMDogY2FzZSA2OTY4OiBjYXNlIDI3NTY6XG5cdFx0XHRyZXR1cm4gV0VCS0lUICsgdmFsdWUgKyBNT1ogKyB2YWx1ZSArIE1TICsgdmFsdWUgKyB2YWx1ZVxuXHRcdC8vIGZsZXgsIGZsZXgtZGlyZWN0aW9uXG5cdFx0Y2FzZSA2ODI4OiBjYXNlIDQyNjg6XG5cdFx0XHRyZXR1cm4gV0VCS0lUICsgdmFsdWUgKyBNUyArIHZhbHVlICsgdmFsdWVcblx0XHQvLyBvcmRlclxuXHRcdGNhc2UgNjE2NTpcblx0XHRcdHJldHVybiBXRUJLSVQgKyB2YWx1ZSArIE1TICsgJ2ZsZXgtJyArIHZhbHVlICsgdmFsdWVcblx0XHQvLyBhbGlnbi1pdGVtc1xuXHRcdGNhc2UgNTE4Nzpcblx0XHRcdHJldHVybiBXRUJLSVQgKyB2YWx1ZSArIHJlcGxhY2UodmFsdWUsIC8oXFx3KykuKyg6W15dKykvLCBXRUJLSVQgKyAnYm94LSQxJDInICsgTVMgKyAnZmxleC0kMSQyJykgKyB2YWx1ZVxuXHRcdC8vIGFsaWduLXNlbGZcblx0XHRjYXNlIDU0NDM6XG5cdFx0XHRyZXR1cm4gV0VCS0lUICsgdmFsdWUgKyBNUyArICdmbGV4LWl0ZW0tJyArIHJlcGxhY2UodmFsdWUsIC9mbGV4LXwtc2VsZi8sICcnKSArIHZhbHVlXG5cdFx0Ly8gYWxpZ24tY29udGVudFxuXHRcdGNhc2UgNDY3NTpcblx0XHRcdHJldHVybiBXRUJLSVQgKyB2YWx1ZSArIE1TICsgJ2ZsZXgtbGluZS1wYWNrJyArIHJlcGxhY2UodmFsdWUsIC9hbGlnbi1jb250ZW50fGZsZXgtfC1zZWxmLywgJycpICsgdmFsdWVcblx0XHQvLyBmbGV4LXNocmlua1xuXHRcdGNhc2UgNTU0ODpcblx0XHRcdHJldHVybiBXRUJLSVQgKyB2YWx1ZSArIE1TICsgcmVwbGFjZSh2YWx1ZSwgJ3NocmluaycsICduZWdhdGl2ZScpICsgdmFsdWVcblx0XHQvLyBmbGV4LWJhc2lzXG5cdFx0Y2FzZSA1MjkyOlxuXHRcdFx0cmV0dXJuIFdFQktJVCArIHZhbHVlICsgTVMgKyByZXBsYWNlKHZhbHVlLCAnYmFzaXMnLCAncHJlZmVycmVkLXNpemUnKSArIHZhbHVlXG5cdFx0Ly8gZmxleC1ncm93XG5cdFx0Y2FzZSA2MDYwOlxuXHRcdFx0cmV0dXJuIFdFQktJVCArICdib3gtJyArIHJlcGxhY2UodmFsdWUsICctZ3JvdycsICcnKSArIFdFQktJVCArIHZhbHVlICsgTVMgKyByZXBsYWNlKHZhbHVlLCAnZ3JvdycsICdwb3NpdGl2ZScpICsgdmFsdWVcblx0XHQvLyB0cmFuc2l0aW9uXG5cdFx0Y2FzZSA0NTU0OlxuXHRcdFx0cmV0dXJuIFdFQktJVCArIHJlcGxhY2UodmFsdWUsIC8oW14tXSkodHJhbnNmb3JtKS9nLCAnJDEnICsgV0VCS0lUICsgJyQyJykgKyB2YWx1ZVxuXHRcdC8vIGN1cnNvclxuXHRcdGNhc2UgNjE4Nzpcblx0XHRcdHJldHVybiByZXBsYWNlKHJlcGxhY2UocmVwbGFjZSh2YWx1ZSwgLyh6b29tLXxncmFiKS8sIFdFQktJVCArICckMScpLCAvKGltYWdlLXNldCkvLCBXRUJLSVQgKyAnJDEnKSwgdmFsdWUsICcnKSArIHZhbHVlXG5cdFx0Ly8gYmFja2dyb3VuZCwgYmFja2dyb3VuZC1pbWFnZVxuXHRcdGNhc2UgNTQ5NTogY2FzZSAzOTU5OlxuXHRcdFx0cmV0dXJuIHJlcGxhY2UodmFsdWUsIC8oaW1hZ2Utc2V0XFwoW15dKikvLCBXRUJLSVQgKyAnJDEnICsgJyRgJDEnKVxuXHRcdC8vIGp1c3RpZnktY29udGVudFxuXHRcdGNhc2UgNDk2ODpcblx0XHRcdHJldHVybiByZXBsYWNlKHJlcGxhY2UodmFsdWUsIC8oLis6KShmbGV4LSk/KC4qKS8sIFdFQktJVCArICdib3gtcGFjazokMycgKyBNUyArICdmbGV4LXBhY2s6JDMnKSwgL3MuKy1iW147XSsvLCAnanVzdGlmeScpICsgV0VCS0lUICsgdmFsdWUgKyB2YWx1ZVxuXHRcdC8vIChtYXJnaW58cGFkZGluZyktaW5saW5lLShzdGFydHxlbmQpXG5cdFx0Y2FzZSA0MDk1OiBjYXNlIDM1ODM6IGNhc2UgNDA2ODogY2FzZSAyNTMyOlxuXHRcdFx0cmV0dXJuIHJlcGxhY2UodmFsdWUsIC8oLispLWlubGluZSguKykvLCBXRUJLSVQgKyAnJDEkMicpICsgdmFsdWVcblx0XHQvLyAobWlufG1heCk/KHdpZHRofGhlaWdodHxpbmxpbmUtc2l6ZXxibG9jay1zaXplKVxuXHRcdGNhc2UgODExNjogY2FzZSA3MDU5OiBjYXNlIDU3NTM6IGNhc2UgNTUzNTpcblx0XHRjYXNlIDU0NDU6IGNhc2UgNTcwMTogY2FzZSA0OTMzOiBjYXNlIDQ2Nzc6XG5cdFx0Y2FzZSA1NTMzOiBjYXNlIDU3ODk6IGNhc2UgNTAyMTogY2FzZSA0NzY1OlxuXHRcdFx0Ly8gc3RyZXRjaCwgbWF4LWNvbnRlbnQsIG1pbi1jb250ZW50LCBmaWxsLWF2YWlsYWJsZVxuXHRcdFx0aWYgKHN0cmxlbih2YWx1ZSkgLSAxIC0gbGVuZ3RoID4gNilcblx0XHRcdFx0c3dpdGNoIChjaGFyYXQodmFsdWUsIGxlbmd0aCArIDEpKSB7XG5cdFx0XHRcdFx0Ly8gKG0pYXgtY29udGVudCwgKG0paW4tY29udGVudFxuXHRcdFx0XHRcdGNhc2UgMTA5OlxuXHRcdFx0XHRcdFx0Ly8gLVxuXHRcdFx0XHRcdFx0aWYgKGNoYXJhdCh2YWx1ZSwgbGVuZ3RoICsgNCkgIT09IDQ1KVxuXHRcdFx0XHRcdFx0XHRicmVha1xuXHRcdFx0XHRcdC8vIChmKWlsbC1hdmFpbGFibGUsIChmKWl0LWNvbnRlbnRcblx0XHRcdFx0XHRjYXNlIDEwMjpcblx0XHRcdFx0XHRcdHJldHVybiByZXBsYWNlKHZhbHVlLCAvKC4rOikoLispLShbXl0rKS8sICckMScgKyBXRUJLSVQgKyAnJDItJDMnICsgJyQxJyArIE1PWiArIChjaGFyYXQodmFsdWUsIGxlbmd0aCArIDMpID09IDEwOCA/ICckMycgOiAnJDItJDMnKSkgKyB2YWx1ZVxuXHRcdFx0XHRcdC8vIChzKXRyZXRjaFxuXHRcdFx0XHRcdGNhc2UgMTE1OlxuXHRcdFx0XHRcdFx0cmV0dXJuIH5pbmRleG9mKHZhbHVlLCAnc3RyZXRjaCcpID8gcHJlZml4KHJlcGxhY2UodmFsdWUsICdzdHJldGNoJywgJ2ZpbGwtYXZhaWxhYmxlJyksIGxlbmd0aCkgKyB2YWx1ZSA6IHZhbHVlXG5cdFx0XHRcdH1cblx0XHRcdGJyZWFrXG5cdFx0Ly8gcG9zaXRpb246IHN0aWNreVxuXHRcdGNhc2UgNDk0OTpcblx0XHRcdC8vIChzKXRpY2t5P1xuXHRcdFx0aWYgKGNoYXJhdCh2YWx1ZSwgbGVuZ3RoICsgMSkgIT09IDExNSlcblx0XHRcdFx0YnJlYWtcblx0XHQvLyBkaXNwbGF5OiAoZmxleHxpbmxpbmUtZmxleClcblx0XHRjYXNlIDY0NDQ6XG5cdFx0XHRzd2l0Y2ggKGNoYXJhdCh2YWx1ZSwgc3RybGVuKHZhbHVlKSAtIDMgLSAofmluZGV4b2YodmFsdWUsICchaW1wb3J0YW50JykgJiYgMTApKSkge1xuXHRcdFx0XHQvLyBzdGljKGspeVxuXHRcdFx0XHRjYXNlIDEwNzpcblx0XHRcdFx0XHRyZXR1cm4gcmVwbGFjZSh2YWx1ZSwgJzonLCAnOicgKyBXRUJLSVQpICsgdmFsdWVcblx0XHRcdFx0Ly8gKGlubGluZS0pP2ZsKGUpeFxuXHRcdFx0XHRjYXNlIDEwMTpcblx0XHRcdFx0XHRyZXR1cm4gcmVwbGFjZSh2YWx1ZSwgLyguKzopKFteOyFdKykoO3whLispPy8sICckMScgKyBXRUJLSVQgKyAoY2hhcmF0KHZhbHVlLCAxNCkgPT09IDQ1ID8gJ2lubGluZS0nIDogJycpICsgJ2JveCQzJyArICckMScgKyBXRUJLSVQgKyAnJDIkMycgKyAnJDEnICsgTVMgKyAnJDJib3gkMycpICsgdmFsdWVcblx0XHRcdH1cblx0XHRcdGJyZWFrXG5cdFx0Ly8gd3JpdGluZy1tb2RlXG5cdFx0Y2FzZSA1OTM2OlxuXHRcdFx0c3dpdGNoIChjaGFyYXQodmFsdWUsIGxlbmd0aCArIDExKSkge1xuXHRcdFx0XHQvLyB2ZXJ0aWNhbC1sKHIpXG5cdFx0XHRcdGNhc2UgMTE0OlxuXHRcdFx0XHRcdHJldHVybiBXRUJLSVQgKyB2YWx1ZSArIE1TICsgcmVwbGFjZSh2YWx1ZSwgL1tzdmhdXFx3Ky1bdGJscl17Mn0vLCAndGInKSArIHZhbHVlXG5cdFx0XHRcdC8vIHZlcnRpY2FsLXIobClcblx0XHRcdFx0Y2FzZSAxMDg6XG5cdFx0XHRcdFx0cmV0dXJuIFdFQktJVCArIHZhbHVlICsgTVMgKyByZXBsYWNlKHZhbHVlLCAvW3N2aF1cXHcrLVt0YmxyXXsyfS8sICd0Yi1ybCcpICsgdmFsdWVcblx0XHRcdFx0Ly8gaG9yaXpvbnRhbCgtKXRiXG5cdFx0XHRcdGNhc2UgNDU6XG5cdFx0XHRcdFx0cmV0dXJuIFdFQktJVCArIHZhbHVlICsgTVMgKyByZXBsYWNlKHZhbHVlLCAvW3N2aF1cXHcrLVt0YmxyXXsyfS8sICdscicpICsgdmFsdWVcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIFdFQktJVCArIHZhbHVlICsgTVMgKyB2YWx1ZSArIHZhbHVlXG5cdH1cblxuXHRyZXR1cm4gdmFsdWVcbn1cbiIsImltcG9ydCB7SU1QT1JULCBDT01NRU5ULCBSVUxFU0VULCBERUNMQVJBVElPTn0gZnJvbSAnLi9FbnVtLmpzJ1xuaW1wb3J0IHtzdHJsZW4sIHNpemVvZn0gZnJvbSAnLi9VdGlsaXR5LmpzJ1xuXG4vKipcbiAqIEBwYXJhbSB7b2JqZWN0W119IGNoaWxkcmVuXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2VyaWFsaXplIChjaGlsZHJlbiwgY2FsbGJhY2spIHtcblx0dmFyIG91dHB1dCA9ICcnXG5cdHZhciBsZW5ndGggPSBzaXplb2YoY2hpbGRyZW4pXG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKylcblx0XHRvdXRwdXQgKz0gY2FsbGJhY2soY2hpbGRyZW5baV0sIGksIGNoaWxkcmVuLCBjYWxsYmFjaykgfHwgJydcblxuXHRyZXR1cm4gb3V0cHV0XG59XG5cbi8qKlxuICogQHBhcmFtIHtvYmplY3R9IGVsZW1lbnRcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxuICogQHBhcmFtIHtvYmplY3RbXX0gY2hpbGRyZW5cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdHJpbmdpZnkgKGVsZW1lbnQsIGluZGV4LCBjaGlsZHJlbiwgY2FsbGJhY2spIHtcblx0c3dpdGNoIChlbGVtZW50LnR5cGUpIHtcblx0XHRjYXNlIElNUE9SVDogY2FzZSBERUNMQVJBVElPTjogcmV0dXJuIGVsZW1lbnQucmV0dXJuID0gZWxlbWVudC5yZXR1cm4gfHwgZWxlbWVudC52YWx1ZVxuXHRcdGNhc2UgQ09NTUVOVDogcmV0dXJuICcnXG5cdFx0Y2FzZSBSVUxFU0VUOiBlbGVtZW50LnZhbHVlID0gZWxlbWVudC5wcm9wcy5qb2luKCcsJylcblx0fVxuXG5cdHJldHVybiBzdHJsZW4oY2hpbGRyZW4gPSBzZXJpYWxpemUoZWxlbWVudC5jaGlsZHJlbiwgY2FsbGJhY2spKSA/IGVsZW1lbnQucmV0dXJuID0gZWxlbWVudC52YWx1ZSArICd7JyArIGNoaWxkcmVuICsgJ30nIDogJydcbn1cbiIsImltcG9ydCB7ZnJvbSwgdHJpbSwgY2hhcmF0LCBzdHJsZW4sIHN1YnN0ciwgYXBwZW5kfSBmcm9tICcuL1V0aWxpdHkuanMnXG5cbmV4cG9ydCB2YXIgbGluZSA9IDFcbmV4cG9ydCB2YXIgY29sdW1uID0gMVxuZXhwb3J0IHZhciBsZW5ndGggPSAwXG5leHBvcnQgdmFyIHBvc2l0aW9uID0gMFxuZXhwb3J0IHZhciBjaGFyYWN0ZXIgPSAwXG5leHBvcnQgdmFyIGNoYXJhY3RlcnMgPSAnJ1xuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICogQHBhcmFtIHtvYmplY3R9IHJvb3RcbiAqIEBwYXJhbSB7b2JqZWN0P30gcGFyZW50XG4gKiBAcGFyYW0ge3N0cmluZ30gdHlwZVxuICogQHBhcmFtIHtzdHJpbmdbXX0gcHJvcHNcbiAqIEBwYXJhbSB7b2JqZWN0W119IGNoaWxkcmVuXG4gKiBAcGFyYW0ge251bWJlcn0gbGVuZ3RoXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBub2RlICh2YWx1ZSwgcm9vdCwgcGFyZW50LCB0eXBlLCBwcm9wcywgY2hpbGRyZW4sIGxlbmd0aCkge1xuXHRyZXR1cm4ge3ZhbHVlOiB2YWx1ZSwgcm9vdDogcm9vdCwgcGFyZW50OiBwYXJlbnQsIHR5cGU6IHR5cGUsIHByb3BzOiBwcm9wcywgY2hpbGRyZW46IGNoaWxkcmVuLCBsaW5lOiBsaW5lLCBjb2x1bW46IGNvbHVtbiwgbGVuZ3RoOiBsZW5ndGgsIHJldHVybjogJyd9XG59XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKiBAcGFyYW0ge29iamVjdH0gcm9vdFxuICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvcHkgKHZhbHVlLCByb290LCB0eXBlKSB7XG5cdHJldHVybiBub2RlKHZhbHVlLCByb290LnJvb3QsIHJvb3QucGFyZW50LCB0eXBlLCByb290LnByb3BzLCByb290LmNoaWxkcmVuLCAwKVxufVxuXG4vKipcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNoYXIgKCkge1xuXHRyZXR1cm4gY2hhcmFjdGVyXG59XG5cbi8qKlxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG5leHBvcnQgZnVuY3Rpb24gcHJldiAoKSB7XG5cdGNoYXJhY3RlciA9IHBvc2l0aW9uID4gMCA/IGNoYXJhdChjaGFyYWN0ZXJzLCAtLXBvc2l0aW9uKSA6IDBcblxuXHRpZiAoY29sdW1uLS0sIGNoYXJhY3RlciA9PT0gMTApXG5cdFx0Y29sdW1uID0gMSwgbGluZS0tXG5cblx0cmV0dXJuIGNoYXJhY3RlclxufVxuXG4vKipcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5leHQgKCkge1xuXHRjaGFyYWN0ZXIgPSBwb3NpdGlvbiA8IGxlbmd0aCA/IGNoYXJhdChjaGFyYWN0ZXJzLCBwb3NpdGlvbisrKSA6IDBcblxuXHRpZiAoY29sdW1uKyssIGNoYXJhY3RlciA9PT0gMTApXG5cdFx0Y29sdW1uID0gMSwgbGluZSsrXG5cblx0cmV0dXJuIGNoYXJhY3RlclxufVxuXG4vKipcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBlZWsgKCkge1xuXHRyZXR1cm4gY2hhcmF0KGNoYXJhY3RlcnMsIHBvc2l0aW9uKVxufVxuXG4vKipcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNhcmV0ICgpIHtcblx0cmV0dXJuIHBvc2l0aW9uXG59XG5cbi8qKlxuICogQHBhcmFtIHtudW1iZXJ9IGJlZ2luXG4gKiBAcGFyYW0ge251bWJlcn0gZW5kXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzbGljZSAoYmVnaW4sIGVuZCkge1xuXHRyZXR1cm4gc3Vic3RyKGNoYXJhY3RlcnMsIGJlZ2luLCBlbmQpXG59XG5cbi8qKlxuICogQHBhcmFtIHtudW1iZXJ9IHR5cGVcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRva2VuICh0eXBlKSB7XG5cdHN3aXRjaCAodHlwZSkge1xuXHRcdC8vIFxcMCBcXHQgXFxuIFxcciBcXHMgd2hpdGVzcGFjZSB0b2tlblxuXHRcdGNhc2UgMDogY2FzZSA5OiBjYXNlIDEwOiBjYXNlIDEzOiBjYXNlIDMyOlxuXHRcdFx0cmV0dXJuIDVcblx0XHQvLyAhICsgLCAvID4gQCB+IGlzb2xhdGUgdG9rZW5cblx0XHRjYXNlIDMzOiBjYXNlIDQzOiBjYXNlIDQ0OiBjYXNlIDQ3OiBjYXNlIDYyOiBjYXNlIDY0OiBjYXNlIDEyNjpcblx0XHQvLyA7IHsgfSBicmVha3BvaW50IHRva2VuXG5cdFx0Y2FzZSA1OTogY2FzZSAxMjM6IGNhc2UgMTI1OlxuXHRcdFx0cmV0dXJuIDRcblx0XHQvLyA6IGFjY29tcGFuaWVkIHRva2VuXG5cdFx0Y2FzZSA1ODpcblx0XHRcdHJldHVybiAzXG5cdFx0Ly8gXCIgJyAoIFsgb3BlbmluZyBkZWxpbWl0IHRva2VuXG5cdFx0Y2FzZSAzNDogY2FzZSAzOTogY2FzZSA0MDogY2FzZSA5MTpcblx0XHRcdHJldHVybiAyXG5cdFx0Ly8gKSBdIGNsb3NpbmcgZGVsaW1pdCB0b2tlblxuXHRcdGNhc2UgNDE6IGNhc2UgOTM6XG5cdFx0XHRyZXR1cm4gMVxuXHR9XG5cblx0cmV0dXJuIDBcbn1cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAqIEByZXR1cm4ge2FueVtdfVxuICovXG5leHBvcnQgZnVuY3Rpb24gYWxsb2MgKHZhbHVlKSB7XG5cdHJldHVybiBsaW5lID0gY29sdW1uID0gMSwgbGVuZ3RoID0gc3RybGVuKGNoYXJhY3RlcnMgPSB2YWx1ZSksIHBvc2l0aW9uID0gMCwgW11cbn1cblxuLyoqXG4gKiBAcGFyYW0ge2FueX0gdmFsdWVcbiAqIEByZXR1cm4ge2FueX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlYWxsb2MgKHZhbHVlKSB7XG5cdHJldHVybiBjaGFyYWN0ZXJzID0gJycsIHZhbHVlXG59XG5cbi8qKlxuICogQHBhcmFtIHtudW1iZXJ9IHR5cGVcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlbGltaXQgKHR5cGUpIHtcblx0cmV0dXJuIHRyaW0oc2xpY2UocG9zaXRpb24gLSAxLCBkZWxpbWl0ZXIodHlwZSA9PT0gOTEgPyB0eXBlICsgMiA6IHR5cGUgPT09IDQwID8gdHlwZSArIDEgOiB0eXBlKSkpXG59XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKiBAcmV0dXJuIHtzdHJpbmdbXX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRva2VuaXplICh2YWx1ZSkge1xuXHRyZXR1cm4gZGVhbGxvYyh0b2tlbml6ZXIoYWxsb2ModmFsdWUpKSlcbn1cblxuLyoqXG4gKiBAcGFyYW0ge251bWJlcn0gdHlwZVxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5leHBvcnQgZnVuY3Rpb24gd2hpdGVzcGFjZSAodHlwZSkge1xuXHR3aGlsZSAoY2hhcmFjdGVyID0gcGVlaygpKVxuXHRcdGlmIChjaGFyYWN0ZXIgPCAzMylcblx0XHRcdG5leHQoKVxuXHRcdGVsc2Vcblx0XHRcdGJyZWFrXG5cblx0cmV0dXJuIHRva2VuKHR5cGUpID4gMiB8fCB0b2tlbihjaGFyYWN0ZXIpID4gMyA/ICcnIDogJyAnXG59XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmdbXX0gY2hpbGRyZW5cbiAqIEByZXR1cm4ge3N0cmluZ1tdfVxuICovXG5leHBvcnQgZnVuY3Rpb24gdG9rZW5pemVyIChjaGlsZHJlbikge1xuXHR3aGlsZSAobmV4dCgpKVxuXHRcdHN3aXRjaCAodG9rZW4oY2hhcmFjdGVyKSkge1xuXHRcdFx0Y2FzZSAwOiBhcHBlbmQoaWRlbnRpZmllcihwb3NpdGlvbiAtIDEpLCBjaGlsZHJlbilcblx0XHRcdFx0YnJlYWtcblx0XHRcdGNhc2UgMjogYXBwZW5kKGRlbGltaXQoY2hhcmFjdGVyKSwgY2hpbGRyZW4pXG5cdFx0XHRcdGJyZWFrXG5cdFx0XHRkZWZhdWx0OiBhcHBlbmQoZnJvbShjaGFyYWN0ZXIpLCBjaGlsZHJlbilcblx0XHR9XG5cblx0cmV0dXJuIGNoaWxkcmVuXG59XG5cbi8qKlxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XG4gKiBAcGFyYW0ge251bWJlcn0gY291bnRcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVzY2FwaW5nIChpbmRleCwgY291bnQpIHtcblx0d2hpbGUgKC0tY291bnQgJiYgbmV4dCgpKVxuXHRcdC8vIG5vdCAwLTkgQS1GIGEtZlxuXHRcdGlmIChjaGFyYWN0ZXIgPCA0OCB8fCBjaGFyYWN0ZXIgPiAxMDIgfHwgKGNoYXJhY3RlciA+IDU3ICYmIGNoYXJhY3RlciA8IDY1KSB8fCAoY2hhcmFjdGVyID4gNzAgJiYgY2hhcmFjdGVyIDwgOTcpKVxuXHRcdFx0YnJlYWtcblxuXHRyZXR1cm4gc2xpY2UoaW5kZXgsIGNhcmV0KCkgKyAoY291bnQgPCA2ICYmIHBlZWsoKSA9PSAzMiAmJiBuZXh0KCkgPT0gMzIpKVxufVxuXG4vKipcbiAqIEBwYXJhbSB7bnVtYmVyfSB0eXBlXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZWxpbWl0ZXIgKHR5cGUpIHtcblx0d2hpbGUgKG5leHQoKSlcblx0XHRzd2l0Y2ggKGNoYXJhY3Rlcikge1xuXHRcdFx0Ly8gXSApIFwiICdcblx0XHRcdGNhc2UgdHlwZTpcblx0XHRcdFx0cmV0dXJuIHBvc2l0aW9uXG5cdFx0XHQvLyBcIiAnXG5cdFx0XHRjYXNlIDM0OiBjYXNlIDM5OlxuXHRcdFx0XHRyZXR1cm4gZGVsaW1pdGVyKHR5cGUgPT09IDM0IHx8IHR5cGUgPT09IDM5ID8gdHlwZSA6IGNoYXJhY3Rlcilcblx0XHRcdC8vIChcblx0XHRcdGNhc2UgNDA6XG5cdFx0XHRcdGlmICh0eXBlID09PSA0MSlcblx0XHRcdFx0XHRkZWxpbWl0ZXIodHlwZSlcblx0XHRcdFx0YnJlYWtcblx0XHRcdC8vIFxcXG5cdFx0XHRjYXNlIDkyOlxuXHRcdFx0XHRuZXh0KClcblx0XHRcdFx0YnJlYWtcblx0XHR9XG5cblx0cmV0dXJuIHBvc2l0aW9uXG59XG5cbi8qKlxuICogQHBhcmFtIHtudW1iZXJ9IHR5cGVcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG5leHBvcnQgZnVuY3Rpb24gY29tbWVudGVyICh0eXBlLCBpbmRleCkge1xuXHR3aGlsZSAobmV4dCgpKVxuXHRcdC8vIC8vXG5cdFx0aWYgKHR5cGUgKyBjaGFyYWN0ZXIgPT09IDQ3ICsgMTApXG5cdFx0XHRicmVha1xuXHRcdC8vIC8qXG5cdFx0ZWxzZSBpZiAodHlwZSArIGNoYXJhY3RlciA9PT0gNDIgKyA0MiAmJiBwZWVrKCkgPT09IDQ3KVxuXHRcdFx0YnJlYWtcblxuXHRyZXR1cm4gJy8qJyArIHNsaWNlKGluZGV4LCBwb3NpdGlvbiAtIDEpICsgJyonICsgZnJvbSh0eXBlID09PSA0NyA/IHR5cGUgOiBuZXh0KCkpXG59XG5cbi8qKlxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpZGVudGlmaWVyIChpbmRleCkge1xuXHR3aGlsZSAoIXRva2VuKHBlZWsoKSkpXG5cdFx0bmV4dCgpXG5cblx0cmV0dXJuIHNsaWNlKGluZGV4LCBwb3NpdGlvbilcbn1cbiIsIi8qKlxuICogQHBhcmFtIHtudW1iZXJ9XG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbmV4cG9ydCB2YXIgYWJzID0gTWF0aC5hYnNcblxuLyoqXG4gKiBAcGFyYW0ge251bWJlcn1cbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZXhwb3J0IHZhciBmcm9tID0gU3RyaW5nLmZyb21DaGFyQ29kZVxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICogQHBhcmFtIHtudW1iZXJ9IGxlbmd0aFxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG5leHBvcnQgZnVuY3Rpb24gaGFzaCAodmFsdWUsIGxlbmd0aCkge1xuXHRyZXR1cm4gKCgoKCgoKGxlbmd0aCA8PCAyKSBeIGNoYXJhdCh2YWx1ZSwgMCkpIDw8IDIpIF4gY2hhcmF0KHZhbHVlLCAxKSkgPDwgMikgXiBjaGFyYXQodmFsdWUsIDIpKSA8PCAyKSBeIGNoYXJhdCh2YWx1ZSwgMylcbn1cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRyaW0gKHZhbHVlKSB7XG5cdHJldHVybiB2YWx1ZS50cmltKClcbn1cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAqIEBwYXJhbSB7UmVnRXhwfSBwYXR0ZXJuXG4gKiBAcmV0dXJuIHtzdHJpbmc/fVxuICovXG5leHBvcnQgZnVuY3Rpb24gbWF0Y2ggKHZhbHVlLCBwYXR0ZXJuKSB7XG5cdHJldHVybiAodmFsdWUgPSBwYXR0ZXJuLmV4ZWModmFsdWUpKSA/IHZhbHVlWzBdIDogdmFsdWVcbn1cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAqIEBwYXJhbSB7KHN0cmluZ3xSZWdFeHApfSBwYXR0ZXJuXG4gKiBAcGFyYW0ge3N0cmluZ30gcmVwbGFjZW1lbnRcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlcGxhY2UgKHZhbHVlLCBwYXR0ZXJuLCByZXBsYWNlbWVudCkge1xuXHRyZXR1cm4gdmFsdWUucmVwbGFjZShwYXR0ZXJuLCByZXBsYWNlbWVudClcbn1cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG5leHBvcnQgZnVuY3Rpb24gaW5kZXhvZiAodmFsdWUsIHNlYXJjaCkge1xuXHRyZXR1cm4gdmFsdWUuaW5kZXhPZihzZWFyY2gpXG59XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNoYXJhdCAodmFsdWUsIGluZGV4KSB7XG5cdHJldHVybiB2YWx1ZS5jaGFyQ29kZUF0KGluZGV4KSB8IDBcbn1cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAqIEBwYXJhbSB7bnVtYmVyfSBiZWdpblxuICogQHBhcmFtIHtudW1iZXJ9IGVuZFxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5leHBvcnQgZnVuY3Rpb24gc3Vic3RyICh2YWx1ZSwgYmVnaW4sIGVuZCkge1xuXHRyZXR1cm4gdmFsdWUuc2xpY2UoYmVnaW4sIGVuZClcbn1cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0cmxlbiAodmFsdWUpIHtcblx0cmV0dXJuIHZhbHVlLmxlbmd0aFxufVxuXG4vKipcbiAqIEBwYXJhbSB7YW55W119IHZhbHVlXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzaXplb2YgKHZhbHVlKSB7XG5cdHJldHVybiB2YWx1ZS5sZW5ndGhcbn1cblxuLyoqXG4gKiBAcGFyYW0ge2FueX0gdmFsdWVcbiAqIEBwYXJhbSB7YW55W119IGFycmF5XG4gKiBAcmV0dXJuIHthbnl9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhcHBlbmQgKHZhbHVlLCBhcnJheSkge1xuXHRyZXR1cm4gYXJyYXkucHVzaCh2YWx1ZSksIHZhbHVlXG59XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmdbXX0gYXJyYXlcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb21iaW5lIChhcnJheSwgY2FsbGJhY2spIHtcblx0cmV0dXJuIGFycmF5Lm1hcChjYWxsYmFjaykuam9pbignJylcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=