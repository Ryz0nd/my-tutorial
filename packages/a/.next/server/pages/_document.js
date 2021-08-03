(function() {
var exports = {};
exports.id = "pages/_document";
exports.ids = ["pages/_document"];
exports.modules = {

/***/ "../../.yarn/__virtual__/next-virtual-f84b51c559/0/cache/next-npm-11.0.1-c40bc7f380-c6b4747f1a.zip/node_modules/next/dist/client/head-manager.js":
/*!*******************************************************************************************************************************************************!*\
  !*** ../../.yarn/__virtual__/next-virtual-f84b51c559/0/cache/next-npm-11.0.1-c40bc7f380-c6b4747f1a.zip/node_modules/next/dist/client/head-manager.js ***!
  \*******************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.default = initHeadManager;
exports.DOMAttributeNames = void 0;
const DOMAttributeNames = {
  acceptCharset: 'accept-charset',
  className: 'class',
  htmlFor: 'for',
  httpEquiv: 'http-equiv',
  noModule: 'noModule'
};
exports.DOMAttributeNames = DOMAttributeNames;

function reactElementToDOM({
  type,
  props
}) {
  const el = document.createElement(type);

  for (const p in props) {
    if (!props.hasOwnProperty(p)) continue;
    if (p === 'children' || p === 'dangerouslySetInnerHTML') continue; // we don't render undefined props to the DOM

    if (props[p] === undefined) continue;
    const attr = DOMAttributeNames[p] || p.toLowerCase();

    if (type === 'script' && (attr === 'async' || attr === 'defer' || attr === 'noModule')) {
      ;
      el[attr] = !!props[p];
    } else {
      el.setAttribute(attr, props[p]);
    }
  }

  const {
    children,
    dangerouslySetInnerHTML
  } = props;

  if (dangerouslySetInnerHTML) {
    el.innerHTML = dangerouslySetInnerHTML.__html || '';
  } else if (children) {
    el.textContent = typeof children === 'string' ? children : Array.isArray(children) ? children.join('') : '';
  }

  return el;
}

function updateElements(type, components) {
  const headEl = document.getElementsByTagName('head')[0];
  const headCountEl = headEl.querySelector('meta[name=next-head-count]');

  if (true) {
    if (!headCountEl) {
      console.error('Warning: next-head-count is missing. https://nextjs.org/docs/messages/next-head-count-missing');
      return;
    }
  }

  const headCount = Number(headCountEl.content);
  const oldTags = [];

  for (let i = 0, j = headCountEl.previousElementSibling; i < headCount; i++, j = j.previousElementSibling) {
    if (j.tagName.toLowerCase() === type) {
      oldTags.push(j);
    }
  }

  const newTags = components.map(reactElementToDOM).filter(newTag => {
    for (let k = 0, len = oldTags.length; k < len; k++) {
      const oldTag = oldTags[k];

      if (oldTag.isEqualNode(newTag)) {
        oldTags.splice(k, 1);
        return false;
      }
    }

    return true;
  });
  oldTags.forEach(t => t.parentNode.removeChild(t));
  newTags.forEach(t => headEl.insertBefore(t, headCountEl));
  headCountEl.content = (headCount - oldTags.length + newTags.length).toString();
}

function initHeadManager() {
  let updatePromise = null;
  return {
    mountedInstances: new Set(),
    updateHead: head => {
      const promise = updatePromise = Promise.resolve().then(() => {
        if (promise !== updatePromise) return;
        updatePromise = null;
        const tags = {};
        head.forEach(h => {
          if ( // If the font tag is loaded only on client navigation
          // it won't be inlined. In this case revert to the original behavior
          h.type === 'link' && h.props['data-optimized-fonts'] && !document.querySelector(`style[data-href="${h.props['data-href']}"]`)) {
            h.props.href = h.props['data-href'];
            h.props['data-href'] = undefined;
          }

          const components = tags[h.type] || [];
          components.push(h);
          tags[h.type] = components;
        });
        const titleComponent = tags.title ? tags.title[0] : null;
        let title = '';

        if (titleComponent) {
          const {
            children
          } = titleComponent.props;
          title = typeof children === 'string' ? children : Array.isArray(children) ? children.join('') : '';
        }

        if (title !== document.title) document.title = title;
        ['meta', 'base', 'link', 'style', 'script'].forEach(type => {
          updateElements(type, tags[type] || []);
        });
      });
    }
  };
}

/***/ }),

/***/ "../../.yarn/__virtual__/next-virtual-f84b51c559/0/cache/next-npm-11.0.1-c40bc7f380-c6b4747f1a.zip/node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************************************************************************************************************!*\
  !*** ../../.yarn/__virtual__/next-virtual-f84b51c559/0/cache/next-npm-11.0.1-c40bc7f380-c6b4747f1a.zip/node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "../../.yarn/__virtual__/next-virtual-f84b51c559/0/cache/next-npm-11.0.1-c40bc7f380-c6b4747f1a.zip/node_modules/next/dist/client/script.js":
/*!*************************************************************************************************************************************************!*\
  !*** ../../.yarn/__virtual__/next-virtual-f84b51c559/0/cache/next-npm-11.0.1-c40bc7f380-c6b4747f1a.zip/node_modules/next/dist/client/script.js ***!
  \*************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../.yarn/cache/@babel-runtime-npm-7.12.5-b3edb8ee8e-64964a0fd1.zip/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.initScriptLoader = initScriptLoader;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "../../.yarn/cache/@babel-runtime-npm-7.12.5-b3edb8ee8e-64964a0fd1.zip/node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "../../.yarn/cache/@babel-runtime-npm-7.12.5-b3edb8ee8e-64964a0fd1.zip/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _react = __webpack_require__(/*! react */ "react");

var _headManagerContext = __webpack_require__(/*! ../next-server/lib/head-manager-context */ "../next-server/lib/head-manager-context");

var _headManager = __webpack_require__(/*! ./head-manager */ "../../.yarn/__virtual__/next-virtual-f84b51c559/0/cache/next-npm-11.0.1-c40bc7f380-c6b4747f1a.zip/node_modules/next/dist/client/head-manager.js");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "../../.yarn/__virtual__/next-virtual-f84b51c559/0/cache/next-npm-11.0.1-c40bc7f380-c6b4747f1a.zip/node_modules/next/dist/client/request-idle-callback.js");

const ScriptCache = new Map();
const LoadCache = new Set();
const ignoreProps = ['onLoad', 'dangerouslySetInnerHTML', 'children', 'onError', 'strategy'];

const loadScript = props => {
  const {
    src,
    id,
    onLoad = () => {},
    dangerouslySetInnerHTML,
    children = '',
    onError
  } = props;
  const cacheKey = id || src;

  if (ScriptCache.has(src)) {
    if (!LoadCache.has(cacheKey)) {
      LoadCache.add(cacheKey); // Execute onLoad since the script loading has begun

      ScriptCache.get(src).then(onLoad, onError);
    }

    return;
  }

  const el = document.createElement('script');
  const loadPromise = new Promise((resolve, reject) => {
    el.addEventListener('load', function () {
      resolve();

      if (onLoad) {
        onLoad.call(this);
      }
    });
    el.addEventListener('error', function () {
      reject();

      if (onError) {
        onError();
      }
    });
  });

  if (src) {
    ScriptCache.set(src, loadPromise);
    LoadCache.add(cacheKey);
  }

  if (dangerouslySetInnerHTML) {
    el.innerHTML = dangerouslySetInnerHTML.__html || '';
  } else if (children) {
    el.textContent = typeof children === 'string' ? children : Array.isArray(children) ? children.join('') : '';
  } else if (src) {
    el.src = src;
  }

  for (const [k, value] of Object.entries(props)) {
    if (value === undefined || ignoreProps.includes(k)) {
      continue;
    }

    const attr = _headManager.DOMAttributeNames[k] || k.toLowerCase();
    el.setAttribute(attr, value);
  }

  document.body.appendChild(el);
};

function handleClientScriptLoad(props) {
  const {
    strategy = 'afterInteractive'
  } = props;

  if (strategy === 'afterInteractive') {
    loadScript(props);
  } else if (strategy === 'lazyOnload') {
    window.addEventListener('load', () => {
      (0, _requestIdleCallback.requestIdleCallback)(() => loadScript(props));
    });
  }
}

function loadLazyScript(props) {
  if (document.readyState === 'complete') {
    (0, _requestIdleCallback.requestIdleCallback)(() => loadScript(props));
  } else {
    window.addEventListener('load', () => {
      (0, _requestIdleCallback.requestIdleCallback)(() => loadScript(props));
    });
  }
}

function initScriptLoader(scriptLoaderItems) {
  scriptLoaderItems.forEach(handleClientScriptLoad);
}

function Script(props) {
  const {
    src = '',
    onLoad = () => {},
    strategy = 'afterInteractive',
    onError
  } = props,
        restProps = (0, _objectWithoutPropertiesLoose2.default)(props, ["src", "onLoad", "dangerouslySetInnerHTML", "strategy", "onError"]); // Context is available only during SSR

  const {
    updateScripts,
    scripts
  } = (0, _react.useContext)(_headManagerContext.HeadManagerContext);
  (0, _react.useEffect)(() => {
    if (strategy === 'afterInteractive') {
      loadScript(props);
    } else if (strategy === 'lazyOnload') {
      loadLazyScript(props);
    }
  }, [props, strategy]);

  if (strategy === 'beforeInteractive') {
    if (updateScripts) {
      scripts.beforeInteractive = (scripts.beforeInteractive || []).concat([(0, _extends2.default)({
        src,
        onLoad,
        onError
      }, restProps)]);
      updateScripts(scripts);
    }
  }

  return null;
}

var _default = Script;
exports.default = _default;

/***/ }),

/***/ "../../.yarn/__virtual__/next-virtual-f84b51c559/0/cache/next-npm-11.0.1-c40bc7f380-c6b4747f1a.zip/node_modules/next/dist/pages/_document.js":
/*!***************************************************************************************************************************************************!*\
  !*** ../../.yarn/__virtual__/next-virtual-f84b51c559/0/cache/next-npm-11.0.1-c40bc7f380-c6b4747f1a.zip/node_modules/next/dist/pages/_document.js ***!
  \***************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

exports.__esModule = true;
exports.Html = Html;
exports.Main = Main;
exports.NextScript = exports.Head = exports.default = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "../../.yarn/cache/prop-types-npm-15.7.2-d7a04f2274-5eef82fdda.zip/node_modules/prop-types/index.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _server = _interopRequireDefault(__webpack_require__(/*! styled-jsx/server */ "../../.yarn/__virtual__/styled-jsx-virtual-04cda5d2fe/0/cache/styled-jsx-npm-3.3.2-e6d9ca13f4-74a129dee7.zip/node_modules/styled-jsx/server.js"));

var _constants = __webpack_require__(/*! ../next-server/lib/constants */ "../next-server/lib/constants");

var _documentContext = __webpack_require__(/*! ../next-server/lib/document-context */ "../next-server/lib/document-context");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

exports.DocumentContext = _utils.DocumentContext;
exports.DocumentInitialProps = _utils.DocumentInitialProps;
exports.DocumentProps = _utils.DocumentProps;

var _getPageFiles = __webpack_require__(/*! ../next-server/server/get-page-files */ "../next-server/server/get-page-files");

var _utils2 = __webpack_require__(/*! ../next-server/server/utils */ "../next-server/server/utils");

var _htmlescape = __webpack_require__(/*! ../server/htmlescape */ "../../.yarn/__virtual__/next-virtual-f84b51c559/0/cache/next-npm-11.0.1-c40bc7f380-c6b4747f1a.zip/node_modules/next/dist/server/htmlescape.js");

var _script = _interopRequireDefault(__webpack_require__(/*! ../client/script */ "../../.yarn/__virtual__/next-virtual-f84b51c559/0/cache/next-npm-11.0.1-c40bc7f380-c6b4747f1a.zip/node_modules/next/dist/client/script.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function getDocumentFiles(buildManifest, pathname, inAmpMode) {
  const sharedFiles = (0, _getPageFiles.getPageFiles)(buildManifest, '/_app');
  const pageFiles = inAmpMode ? [] : (0, _getPageFiles.getPageFiles)(buildManifest, pathname);
  return {
    sharedFiles,
    pageFiles,
    allFiles: [...new Set([...sharedFiles, ...pageFiles])]
  };
}

function getPolyfillScripts(context, props) {
  // polyfills.js has to be rendered as nomodule without async
  // It also has to be the first script to load
  const {
    assetPrefix,
    buildManifest,
    devOnlyCacheBusterQueryString,
    disableOptimizedLoading
  } = context;
  return buildManifest.polyfillFiles.filter(polyfill => polyfill.endsWith('.js') && !polyfill.endsWith('.module.js')).map(polyfill => /*#__PURE__*/_react.default.createElement("script", {
    key: polyfill,
    defer: !disableOptimizedLoading,
    nonce: props.nonce,
    crossOrigin: props.crossOrigin || undefined,
    noModule: true,
    src: `${assetPrefix}/_next/${polyfill}${devOnlyCacheBusterQueryString}`
  }));
}

function getPreNextScripts(context, props) {
  const {
    scriptLoader,
    disableOptimizedLoading
  } = context;
  return (scriptLoader.beforeInteractive || []).map(file => {
    const {
      strategy
    } = file,
          scriptProps = _objectWithoutProperties(file, ["strategy"]);

    return /*#__PURE__*/_react.default.createElement("script", Object.assign({}, scriptProps, {
      defer: !disableOptimizedLoading,
      nonce: props.nonce,
      crossOrigin: props.crossOrigin || undefined
    }));
  });
}

function getDynamicChunks(context, props, files) {
  const {
    dynamicImports,
    assetPrefix,
    isDevelopment,
    devOnlyCacheBusterQueryString,
    disableOptimizedLoading
  } = context;
  return dynamicImports.map(file => {
    if (!file.endsWith('.js') || files.allFiles.includes(file)) return null;
    return /*#__PURE__*/_react.default.createElement("script", {
      async: !isDevelopment && disableOptimizedLoading,
      defer: !disableOptimizedLoading,
      key: file,
      src: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
      nonce: props.nonce,
      crossOrigin: props.crossOrigin || undefined
    });
  });
}

function getScripts(context, props, files) {
  var _buildManifest$lowPri;

  const {
    assetPrefix,
    buildManifest,
    isDevelopment,
    devOnlyCacheBusterQueryString,
    disableOptimizedLoading
  } = context;
  const normalScripts = files.allFiles.filter(file => file.endsWith('.js'));
  const lowPriorityScripts = (_buildManifest$lowPri = buildManifest.lowPriorityFiles) == null ? void 0 : _buildManifest$lowPri.filter(file => file.endsWith('.js'));
  return [...normalScripts, ...lowPriorityScripts].map(file => {
    return /*#__PURE__*/_react.default.createElement("script", {
      key: file,
      src: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
      nonce: props.nonce,
      async: !isDevelopment && disableOptimizedLoading,
      defer: !disableOptimizedLoading,
      crossOrigin: props.crossOrigin || undefined
    });
  });
}
/**
* `Document` component handles the initial `document` markup and renders only on the server side.
* Commonly used for implementing server side rendering for `css-in-js` libraries.
*/


class Document extends _react.Component {
  /**
  * `getInitialProps` hook returns the context object with the addition of `renderPage`.
  * `renderPage` callback executes `React` rendering logic synchronously to support server-rendering wrappers
  */
  static async getInitialProps(ctx) {
    const enhanceApp = App => {
      return props => /*#__PURE__*/_react.default.createElement(App, props);
    };

    const {
      html,
      head
    } = await ctx.renderPage({
      enhanceApp
    });
    const styles = [...(0, _server.default)()];
    return {
      html,
      head,
      styles
    };
  }

  static renderDocument(DocumentComponent, props) {
    return /*#__PURE__*/_react.default.createElement(_documentContext.DocumentContext.Provider, {
      value: props
    }, /*#__PURE__*/_react.default.createElement(DocumentComponent, props));
  }

  render() {
    return /*#__PURE__*/_react.default.createElement(Html, null, /*#__PURE__*/_react.default.createElement(Head, null), /*#__PURE__*/_react.default.createElement("body", null, /*#__PURE__*/_react.default.createElement(Main, null), /*#__PURE__*/_react.default.createElement(NextScript, null)));
  }

}

exports.default = Document;

function Html(props) {
  const {
    inAmpMode,
    docComponentsRendered,
    locale
  } = (0, _react.useContext)(_documentContext.DocumentContext);
  docComponentsRendered.Html = true;
  return /*#__PURE__*/_react.default.createElement("html", Object.assign({}, props, {
    lang: props.lang || locale || undefined,
    amp: inAmpMode ? '' : undefined,
    "data-ampdevmode": inAmpMode && true ? '' : undefined
  }));
}

class Head extends _react.Component {
  constructor(...args) {
    super(...args);
    this.context = void 0;
  }

  getCssLinks(files) {
    const {
      assetPrefix,
      devOnlyCacheBusterQueryString,
      dynamicImports
    } = this.context;
    const cssFiles = files.allFiles.filter(f => f.endsWith('.css'));
    const sharedFiles = new Set(files.sharedFiles); // Unmanaged files are CSS files that will be handled directly by the
    // webpack runtime (`mini-css-extract-plugin`).

    let unmangedFiles = new Set([]);
    let dynamicCssFiles = Array.from(new Set(dynamicImports.filter(file => file.endsWith('.css'))));

    if (dynamicCssFiles.length) {
      const existing = new Set(cssFiles);
      dynamicCssFiles = dynamicCssFiles.filter(f => !(existing.has(f) || sharedFiles.has(f)));
      unmangedFiles = new Set(dynamicCssFiles);
      cssFiles.push(...dynamicCssFiles);
    }

    let cssLinkElements = [];
    cssFiles.forEach(file => {
      const isSharedFile = sharedFiles.has(file);

      if (true) {
        cssLinkElements.push( /*#__PURE__*/_react.default.createElement("link", {
          key: `${file}-preload`,
          nonce: this.props.nonce,
          rel: "preload",
          href: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
          as: "style",
          crossOrigin: this.props.crossOrigin || undefined
        }));
      }

      const isUnmanagedFile = unmangedFiles.has(file);
      cssLinkElements.push( /*#__PURE__*/_react.default.createElement("link", {
        key: file,
        nonce: this.props.nonce,
        rel: "stylesheet",
        href: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
        crossOrigin: this.props.crossOrigin || undefined,
        "data-n-g": isUnmanagedFile ? undefined : isSharedFile ? '' : undefined,
        "data-n-p": isUnmanagedFile ? undefined : isSharedFile ? undefined : ''
      }));
    });

    if (false) {}

    return cssLinkElements.length === 0 ? null : cssLinkElements;
  }

  getPreloadDynamicChunks() {
    const {
      dynamicImports,
      assetPrefix,
      devOnlyCacheBusterQueryString
    } = this.context;
    return dynamicImports.map(file => {
      if (!file.endsWith('.js')) {
        return null;
      }

      return /*#__PURE__*/_react.default.createElement("link", {
        rel: "preload",
        key: file,
        href: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
        as: "script",
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined
      });
    }) // Filter out nulled scripts
    .filter(Boolean);
  }

  getPreloadMainLinks(files) {
    const {
      assetPrefix,
      devOnlyCacheBusterQueryString,
      scriptLoader
    } = this.context;
    const preloadFiles = files.allFiles.filter(file => {
      return file.endsWith('.js');
    });
    return [...(scriptLoader.beforeInteractive || []).map(file => /*#__PURE__*/_react.default.createElement("link", {
      key: file.src,
      nonce: this.props.nonce,
      rel: "preload",
      href: file.src,
      as: "script",
      crossOrigin: this.props.crossOrigin || undefined
    })), ...preloadFiles.map(file => /*#__PURE__*/_react.default.createElement("link", {
      key: file,
      nonce: this.props.nonce,
      rel: "preload",
      href: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
      as: "script",
      crossOrigin: this.props.crossOrigin || undefined
    }))];
  }

  getDynamicChunks(files) {
    return getDynamicChunks(this.context, this.props, files);
  }

  getPreNextScripts() {
    return getPreNextScripts(this.context, this.props);
  }

  getScripts(files) {
    return getScripts(this.context, this.props, files);
  }

  getPolyfillScripts() {
    return getPolyfillScripts(this.context, this.props);
  }

  handleDocumentScriptLoaderItems(children) {
    const {
      scriptLoader
    } = this.context;
    const scriptLoaderItems = [];
    const filteredChildren = [];

    _react.default.Children.forEach(children, child => {
      if (child.type === _script.default) {
        if (child.props.strategy === 'beforeInteractive') {
          scriptLoader.beforeInteractive = (scriptLoader.beforeInteractive || []).concat([_objectSpread({}, child.props)]);
          return;
        } else if (['lazyOnload', 'afterInteractive'].includes(child.props.strategy)) {
          scriptLoaderItems.push(child.props);
          return;
        }
      }

      filteredChildren.push(child);
    });

    this.context.__NEXT_DATA__.scriptLoader = scriptLoaderItems;
    return filteredChildren;
  }

  makeStylesheetInert(node) {
    return _react.default.Children.map(node, c => {
      if (c.type === 'link' && c.props['href'] && _constants.OPTIMIZED_FONT_PROVIDERS.some(({
        url
      }) => c.props['href'].startsWith(url))) {
        const newProps = _objectSpread({}, c.props || {});

        newProps['data-href'] = newProps['href'];
        newProps['href'] = undefined;
        return /*#__PURE__*/_react.default.cloneElement(c, newProps);
      } else if (c.props && c.props['children']) {
        c.props['children'] = this.makeStylesheetInert(c.props['children']);
      }

      return c;
    });
  }

  render() {
    var _this$props$nonce, _this$props$nonce2;

    const {
      styles,
      ampPath,
      inAmpMode,
      hybridAmp,
      canonicalBase,
      __NEXT_DATA__,
      dangerousAsPath,
      headTags,
      unstable_runtimeJS,
      unstable_JsPreload,
      disableOptimizedLoading
    } = this.context;
    const disableRuntimeJS = unstable_runtimeJS === false;
    const disableJsPreload = unstable_JsPreload === false || !disableOptimizedLoading;
    this.context.docComponentsRendered.Head = true;
    let {
      head
    } = this.context;
    let cssPreloads = [];
    let otherHeadElements = [];

    if (head) {
      head.forEach(c => {
        if (c && c.type === 'link' && c.props['rel'] === 'preload' && c.props['as'] === 'style') {
          cssPreloads.push(c);
        } else {
          c && otherHeadElements.push(c);
        }
      });
      head = cssPreloads.concat(otherHeadElements);
    }

    let children = _react.default.Children.toArray(this.props.children).filter(Boolean); // show a warning if Head contains <title> (only in development)


    if (true) {
      children = _react.default.Children.map(children, child => {
        var _child$props;

        const isReactHelmet = child == null ? void 0 : (_child$props = child.props) == null ? void 0 : _child$props['data-react-helmet'];

        if (!isReactHelmet) {
          var _child$props2;

          if ((child == null ? void 0 : child.type) === 'title') {
            console.warn("Warning: <title> should not be used in _document.js's <Head>. https://nextjs.org/docs/messages/no-document-title");
          } else if ((child == null ? void 0 : child.type) === 'meta' && (child == null ? void 0 : (_child$props2 = child.props) == null ? void 0 : _child$props2.name) === 'viewport') {
            console.warn("Warning: viewport meta tags should not be used in _document.js's <Head>. https://nextjs.org/docs/messages/no-document-viewport-meta");
          }
        }

        return child;
      });
      if (this.props.crossOrigin) console.warn('Warning: `Head` attribute `crossOrigin` is deprecated. https://nextjs.org/docs/messages/doc-crossorigin-deprecated');
    }

    if (false) {}

    children = this.handleDocumentScriptLoaderItems(children);
    let hasAmphtmlRel = false;
    let hasCanonicalRel = false; // show warning and remove conflicting amp head tags

    head = _react.default.Children.map(head || [], child => {
      if (!child) return child;
      const {
        type,
        props
      } = child;

      if (inAmpMode) {
        let badProp = '';

        if (type === 'meta' && props.name === 'viewport') {
          badProp = 'name="viewport"';
        } else if (type === 'link' && props.rel === 'canonical') {
          hasCanonicalRel = true;
        } else if (type === 'script') {
          // only block if
          // 1. it has a src and isn't pointing to ampproject's CDN
          // 2. it is using dangerouslySetInnerHTML without a type or
          // a type of text/javascript
          if (props.src && props.src.indexOf('ampproject') < -1 || props.dangerouslySetInnerHTML && (!props.type || props.type === 'text/javascript')) {
            badProp = '<script';
            Object.keys(props).forEach(prop => {
              badProp += ` ${prop}="${props[prop]}"`;
            });
            badProp += '/>';
          }
        }

        if (badProp) {
          console.warn(`Found conflicting amp tag "${child.type}" with conflicting prop ${badProp} in ${__NEXT_DATA__.page}. https://nextjs.org/docs/messages/conflicting-amp-tag`);
          return null;
        }
      } else {
        // non-amp mode
        if (type === 'link' && props.rel === 'amphtml') {
          hasAmphtmlRel = true;
        }
      }

      return child;
    }); // try to parse styles from fragment for backwards compat

    const curStyles = Array.isArray(styles) ? styles : [];

    if (inAmpMode && styles && // @ts-ignore Property 'props' does not exist on type ReactElement
    styles.props && // @ts-ignore Property 'props' does not exist on type ReactElement
    Array.isArray(styles.props.children)) {
      const hasStyles = el => {
        var _el$props, _el$props$dangerously;

        return el == null ? void 0 : (_el$props = el.props) == null ? void 0 : (_el$props$dangerously = _el$props.dangerouslySetInnerHTML) == null ? void 0 : _el$props$dangerously.__html;
      }; // @ts-ignore Property 'props' does not exist on type ReactElement


      styles.props.children.forEach(child => {
        if (Array.isArray(child)) {
          child.forEach(el => hasStyles(el) && curStyles.push(el));
        } else if (hasStyles(child)) {
          curStyles.push(child);
        }
      });
    }

    const files = getDocumentFiles(this.context.buildManifest, this.context.__NEXT_DATA__.page, inAmpMode);
    return /*#__PURE__*/_react.default.createElement("head", this.props, this.context.isDevelopment && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("style", {
      "data-next-hide-fouc": true,
      "data-ampdevmode": inAmpMode ? 'true' : undefined,
      dangerouslySetInnerHTML: {
        __html: `body{display:none}`
      }
    }), /*#__PURE__*/_react.default.createElement("noscript", {
      "data-next-hide-fouc": true,
      "data-ampdevmode": inAmpMode ? 'true' : undefined
    }, /*#__PURE__*/_react.default.createElement("style", {
      dangerouslySetInnerHTML: {
        __html: `body{display:block}`
      }
    }))), children,  false && /*#__PURE__*/0, head, /*#__PURE__*/_react.default.createElement("meta", {
      name: "next-head-count",
      content: _react.default.Children.count(head || []).toString()
    }), inAmpMode && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("meta", {
      name: "viewport",
      content: "width=device-width,minimum-scale=1,initial-scale=1"
    }), !hasCanonicalRel && /*#__PURE__*/_react.default.createElement("link", {
      rel: "canonical",
      href: canonicalBase + (0, _utils2.cleanAmpPath)(dangerousAsPath)
    }), /*#__PURE__*/_react.default.createElement("link", {
      rel: "preload",
      as: "script",
      href: "https://cdn.ampproject.org/v0.js"
    }), styles && /*#__PURE__*/_react.default.createElement("style", {
      "amp-custom": "",
      dangerouslySetInnerHTML: {
        __html: curStyles.map(style => style.props.dangerouslySetInnerHTML.__html).join('').replace(/\/\*# sourceMappingURL=.*\*\//g, '').replace(/\/\*@ sourceURL=.*?\*\//g, '')
      }
    }), /*#__PURE__*/_react.default.createElement("style", {
      "amp-boilerplate": "",
      dangerouslySetInnerHTML: {
        __html: `body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}`
      }
    }), /*#__PURE__*/_react.default.createElement("noscript", null, /*#__PURE__*/_react.default.createElement("style", {
      "amp-boilerplate": "",
      dangerouslySetInnerHTML: {
        __html: `body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}`
      }
    })), /*#__PURE__*/_react.default.createElement("script", {
      async: true,
      src: "https://cdn.ampproject.org/v0.js"
    })), !inAmpMode && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !hasAmphtmlRel && hybridAmp && /*#__PURE__*/_react.default.createElement("link", {
      rel: "amphtml",
      href: canonicalBase + getAmpPath(ampPath, dangerousAsPath)
    }),  true && this.getCssLinks(files),  true && /*#__PURE__*/_react.default.createElement("noscript", {
      "data-n-css": (_this$props$nonce = this.props.nonce) != null ? _this$props$nonce : ''
    }),  false && /*#__PURE__*/0, !disableRuntimeJS && !disableJsPreload && this.getPreloadDynamicChunks(), !disableRuntimeJS && !disableJsPreload && this.getPreloadMainLinks(files), !disableOptimizedLoading && !disableRuntimeJS && this.getPolyfillScripts(), !disableOptimizedLoading && !disableRuntimeJS && this.getPreNextScripts(), !disableOptimizedLoading && !disableRuntimeJS && this.getDynamicChunks(files), !disableOptimizedLoading && !disableRuntimeJS && this.getScripts(files),  false && 0,  false && /*#__PURE__*/0, this.context.isDevelopment &&
    /*#__PURE__*/
    // this element is used to mount development styles so the
    // ordering matches production
    // (by default, style-loader injects at the bottom of <head />)
    _react.default.createElement("noscript", {
      id: "__next_css__DO_NOT_USE__"
    }), styles || null), /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {}, ...(headTags || [])));
  }

}

exports.Head = Head;
Head.contextType = _documentContext.DocumentContext;
Head.propTypes = {
  nonce: _propTypes.default.string,
  crossOrigin: _propTypes.default.string
};

function Main() {
  const {
    inAmpMode,
    html,
    docComponentsRendered
  } = (0, _react.useContext)(_documentContext.DocumentContext);
  docComponentsRendered.Main = true;
  if (inAmpMode) return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, _constants.AMP_RENDER_TARGET);
  return /*#__PURE__*/_react.default.createElement("div", {
    id: "__next",
    dangerouslySetInnerHTML: {
      __html: html
    }
  });
}

class NextScript extends _react.Component {
  constructor(...args) {
    super(...args);
    this.context = void 0;
  }

  getDynamicChunks(files) {
    return getDynamicChunks(this.context, this.props, files);
  }

  getPreNextScripts() {
    return getPreNextScripts(this.context, this.props);
  }

  getScripts(files) {
    return getScripts(this.context, this.props, files);
  }

  getPolyfillScripts() {
    return getPolyfillScripts(this.context, this.props);
  }

  static getInlineScriptSource(documentProps) {
    const {
      __NEXT_DATA__
    } = documentProps;

    try {
      const data = JSON.stringify(__NEXT_DATA__);
      return (0, _htmlescape.htmlEscapeJsonString)(data);
    } catch (err) {
      if (err.message.indexOf('circular structure')) {
        throw new Error(`Circular structure in "getInitialProps" result of page "${__NEXT_DATA__.page}". https://nextjs.org/docs/messages/circular-structure`);
      }

      throw err;
    }
  }

  render() {
    const {
      assetPrefix,
      inAmpMode,
      buildManifest,
      unstable_runtimeJS,
      docComponentsRendered,
      devOnlyCacheBusterQueryString,
      disableOptimizedLoading
    } = this.context;
    const disableRuntimeJS = unstable_runtimeJS === false;
    docComponentsRendered.NextScript = true;

    if (inAmpMode) {
      if (false) {}

      const ampDevFiles = [...buildManifest.devFiles, ...buildManifest.polyfillFiles, ...buildManifest.ampDevFiles];
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, disableRuntimeJS ? null : /*#__PURE__*/_react.default.createElement("script", {
        id: "__NEXT_DATA__",
        type: "application/json",
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined,
        dangerouslySetInnerHTML: {
          __html: NextScript.getInlineScriptSource(this.context)
        },
        "data-ampdevmode": true
      }), ampDevFiles.map(file => /*#__PURE__*/_react.default.createElement("script", {
        key: file,
        src: `${assetPrefix}/_next/${file}${devOnlyCacheBusterQueryString}`,
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined,
        "data-ampdevmode": true
      })));
    }

    if (true) {
      if (this.props.crossOrigin) console.warn('Warning: `NextScript` attribute `crossOrigin` is deprecated. https://nextjs.org/docs/messages/doc-crossorigin-deprecated');
    }

    const files = getDocumentFiles(this.context.buildManifest, this.context.__NEXT_DATA__.page, inAmpMode);
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !disableRuntimeJS && buildManifest.devFiles ? buildManifest.devFiles.map(file => /*#__PURE__*/_react.default.createElement("script", {
      key: file,
      src: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined
    })) : null, disableRuntimeJS ? null : /*#__PURE__*/_react.default.createElement("script", {
      id: "__NEXT_DATA__",
      type: "application/json",
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined,
      dangerouslySetInnerHTML: {
        __html: NextScript.getInlineScriptSource(this.context)
      }
    }), disableOptimizedLoading && !disableRuntimeJS && this.getPolyfillScripts(), disableOptimizedLoading && !disableRuntimeJS && this.getPreNextScripts(), disableOptimizedLoading && !disableRuntimeJS && this.getDynamicChunks(files), disableOptimizedLoading && !disableRuntimeJS && this.getScripts(files));
  }

}

exports.NextScript = NextScript;
NextScript.contextType = _documentContext.DocumentContext;
NextScript.propTypes = {
  nonce: _propTypes.default.string,
  crossOrigin: _propTypes.default.string
};
NextScript.safariNomoduleFix = '!function(){var e=document,t=e.createElement("script");if(!("noModule"in t)&&"onbeforeload"in t){var n=!1;e.addEventListener("beforeload",function(e){if(e.target===t)n=!0;else if(!e.target.hasAttribute("nomodule")||!n)return;e.preventDefault()},!0),t.type="module",t.src=".",e.head.appendChild(t),t.remove()}}();';

function getAmpPath(ampPath, asPath) {
  return ampPath || `${asPath}${asPath.includes('?') ? '&' : '?'}amp=1`;
}

/***/ }),

/***/ "./pages/_document.tsx":
/*!*****************************!*\
  !*** ./pages/_document.tsx ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ MyDocument; }
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ "@emotion/react/jsx-dev-runtime");
/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/document */ "../../.yarn/__virtual__/next-virtual-f84b51c559/0/cache/next-npm-11.0.1-c40bc7f380-c6b4747f1a.zip/node_modules/next/document.js");
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\jungy\\Documents\\GitHub\\my-tutorial\\packages\\a\\pages\\_document.tsx";

class MyDocument extends (next_document__WEBPACK_IMPORTED_MODULE_1___default()) {
  render() {
    return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Html, {
      lang: "ko",
      children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Head, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 9
      }, this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("body", {
        children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Main, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 11
        }, this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.NextScript, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }, this);
  }

}

/***/ }),

/***/ "../../.yarn/__virtual__/next-virtual-f84b51c559/0/cache/next-npm-11.0.1-c40bc7f380-c6b4747f1a.zip/node_modules/next/dist/server/htmlescape.js":
/*!*****************************************************************************************************************************************************!*\
  !*** ../../.yarn/__virtual__/next-virtual-f84b51c559/0/cache/next-npm-11.0.1-c40bc7f380-c6b4747f1a.zip/node_modules/next/dist/server/htmlescape.js ***!
  \*****************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";
exports.__esModule=true;exports.htmlEscapeJsonString=htmlEscapeJsonString;// This utility is based on https://github.com/zertosh/htmlescape
// License: https://github.com/zertosh/htmlescape/blob/0527ca7156a524d256101bb310a9f970f63078ad/LICENSE
const ESCAPE_LOOKUP={'&':'\\u0026','>':'\\u003e','<':'\\u003c','\u2028':'\\u2028','\u2029':'\\u2029'};const ESCAPE_REGEX=/[&><\u2028\u2029]/g;function htmlEscapeJsonString(str){return str.replace(ESCAPE_REGEX,match=>ESCAPE_LOOKUP[match]);}
//# sourceMappingURL=htmlescape.js.map

/***/ }),

/***/ "../../.yarn/__virtual__/next-virtual-f84b51c559/0/cache/next-npm-11.0.1-c40bc7f380-c6b4747f1a.zip/node_modules/next/document.js":
/*!***************************************************************************************************************************************!*\
  !*** ../../.yarn/__virtual__/next-virtual-f84b51c559/0/cache/next-npm-11.0.1-c40bc7f380-c6b4747f1a.zip/node_modules/next/document.js ***!
  \***************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_document */ "../../.yarn/__virtual__/next-virtual-f84b51c559/0/cache/next-npm-11.0.1-c40bc7f380-c6b4747f1a.zip/node_modules/next/dist/pages/_document.js")


/***/ }),

/***/ "../../.yarn/__virtual__/styled-jsx-virtual-04cda5d2fe/0/cache/styled-jsx-npm-3.3.2-e6d9ca13f4-74a129dee7.zip/node_modules/styled-jsx/dist/lib/stylesheet.js":
/*!*******************************************************************************************************************************************************************!*\
  !*** ../../.yarn/__virtual__/styled-jsx-virtual-04cda5d2fe/0/cache/styled-jsx-npm-3.3.2-e6d9ca13f4-74a129dee7.zip/node_modules/styled-jsx/dist/lib/stylesheet.js ***!
  \*******************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
Based on Glamor's sheet
https://github.com/threepointone/glamor/blob/667b480d31b3721a905021b26e1290ce92ca2879/src/sheet.js
*/
var isProd = typeof process !== 'undefined' && process.env && "development" === 'production';

var isString = function isString(o) {
  return Object.prototype.toString.call(o) === '[object String]';
};

var StyleSheet = /*#__PURE__*/function () {
  function StyleSheet(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        _ref$name = _ref.name,
        name = _ref$name === void 0 ? 'stylesheet' : _ref$name,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? isProd : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    invariant(isString(name), '`name` must be a string');
    this._name = name;
    this._deletedRulePlaceholder = "#" + name + "-deleted-rule____{}";
    invariant(typeof optimizeForSpeed === 'boolean', '`optimizeForSpeed` must be a boolean');
    this._optimizeForSpeed = optimizeForSpeed;
    this._isBrowser = isBrowser;
    this._serverSheet = undefined;
    this._tags = [];
    this._injected = false;
    this._rulesCount = 0;
    var node = this._isBrowser && document.querySelector('meta[property="csp-nonce"]');
    this._nonce = node ? node.getAttribute('content') : null;
  }

  var _proto = StyleSheet.prototype;

  _proto.setOptimizeForSpeed = function setOptimizeForSpeed(bool) {
    invariant(typeof bool === 'boolean', '`setOptimizeForSpeed` accepts a boolean');
    invariant(this._rulesCount === 0, 'optimizeForSpeed cannot be when rules have already been inserted');
    this.flush();
    this._optimizeForSpeed = bool;
    this.inject();
  };

  _proto.isOptimizeForSpeed = function isOptimizeForSpeed() {
    return this._optimizeForSpeed;
  };

  _proto.inject = function inject() {
    var _this = this;

    invariant(!this._injected, 'sheet already injected');
    this._injected = true;

    if (this._isBrowser && this._optimizeForSpeed) {
      this._tags[0] = this.makeStyleTag(this._name);
      this._optimizeForSpeed = 'insertRule' in this.getSheet();

      if (!this._optimizeForSpeed) {
        if (!isProd) {
          console.warn('StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.');
        }

        this.flush();
        this._injected = true;
      }

      return;
    }

    this._serverSheet = {
      cssRules: [],
      insertRule: function insertRule(rule, index) {
        if (typeof index === 'number') {
          _this._serverSheet.cssRules[index] = {
            cssText: rule
          };
        } else {
          _this._serverSheet.cssRules.push({
            cssText: rule
          });
        }

        return index;
      },
      deleteRule: function deleteRule(index) {
        _this._serverSheet.cssRules[index] = null;
      }
    };
  };

  _proto.getSheetForTag = function getSheetForTag(tag) {
    if (tag.sheet) {
      return tag.sheet;
    } // this weirdness brought to you by firefox


    for (var i = 0; i < document.styleSheets.length; i++) {
      if (document.styleSheets[i].ownerNode === tag) {
        return document.styleSheets[i];
      }
    }
  };

  _proto.getSheet = function getSheet() {
    return this.getSheetForTag(this._tags[this._tags.length - 1]);
  };

  _proto.insertRule = function insertRule(rule, index) {
    invariant(isString(rule), '`insertRule` accepts only strings');

    if (!this._isBrowser) {
      if (typeof index !== 'number') {
        index = this._serverSheet.cssRules.length;
      }

      this._serverSheet.insertRule(rule, index);

      return this._rulesCount++;
    }

    if (this._optimizeForSpeed) {
      var sheet = this.getSheet();

      if (typeof index !== 'number') {
        index = sheet.cssRules.length;
      } // this weirdness for perf, and chrome's weird bug
      // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule


      try {
        sheet.insertRule(rule, index);
      } catch (error) {
        if (!isProd) {
          console.warn("StyleSheet: illegal rule: \n\n" + rule + "\n\nSee https://stackoverflow.com/q/20007992 for more info");
        }

        return -1;
      }
    } else {
      var insertionPoint = this._tags[index];

      this._tags.push(this.makeStyleTag(this._name, rule, insertionPoint));
    }

    return this._rulesCount++;
  };

  _proto.replaceRule = function replaceRule(index, rule) {
    if (this._optimizeForSpeed || !this._isBrowser) {
      var sheet = this._isBrowser ? this.getSheet() : this._serverSheet;

      if (!rule.trim()) {
        rule = this._deletedRulePlaceholder;
      }

      if (!sheet.cssRules[index]) {
        // @TBD Should we throw an error?
        return index;
      }

      sheet.deleteRule(index);

      try {
        sheet.insertRule(rule, index);
      } catch (error) {
        if (!isProd) {
          console.warn("StyleSheet: illegal rule: \n\n" + rule + "\n\nSee https://stackoverflow.com/q/20007992 for more info");
        } // In order to preserve the indices we insert a deleteRulePlaceholder


        sheet.insertRule(this._deletedRulePlaceholder, index);
      }
    } else {
      var tag = this._tags[index];
      invariant(tag, "old rule at index `" + index + "` not found");
      tag.textContent = rule;
    }

    return index;
  };

  _proto.deleteRule = function deleteRule(index) {
    if (!this._isBrowser) {
      this._serverSheet.deleteRule(index);

      return;
    }

    if (this._optimizeForSpeed) {
      this.replaceRule(index, '');
    } else {
      var tag = this._tags[index];
      invariant(tag, "rule at index `" + index + "` not found");
      tag.parentNode.removeChild(tag);
      this._tags[index] = null;
    }
  };

  _proto.flush = function flush() {
    this._injected = false;
    this._rulesCount = 0;

    if (this._isBrowser) {
      this._tags.forEach(function (tag) {
        return tag && tag.parentNode.removeChild(tag);
      });

      this._tags = [];
    } else {
      // simpler on server
      this._serverSheet.cssRules = [];
    }
  };

  _proto.cssRules = function cssRules() {
    var _this2 = this;

    if (!this._isBrowser) {
      return this._serverSheet.cssRules;
    }

    return this._tags.reduce(function (rules, tag) {
      if (tag) {
        rules = rules.concat(Array.prototype.map.call(_this2.getSheetForTag(tag).cssRules, function (rule) {
          return rule.cssText === _this2._deletedRulePlaceholder ? null : rule;
        }));
      } else {
        rules.push(null);
      }

      return rules;
    }, []);
  };

  _proto.makeStyleTag = function makeStyleTag(name, cssString, relativeToTag) {
    if (cssString) {
      invariant(isString(cssString), 'makeStyleTag acceps only strings as second parameter');
    }

    var tag = document.createElement('style');
    if (this._nonce) tag.setAttribute('nonce', this._nonce);
    tag.type = 'text/css';
    tag.setAttribute("data-" + name, '');

    if (cssString) {
      tag.appendChild(document.createTextNode(cssString));
    }

    var head = document.head || document.getElementsByTagName('head')[0];

    if (relativeToTag) {
      head.insertBefore(tag, relativeToTag);
    } else {
      head.appendChild(tag);
    }

    return tag;
  };

  _createClass(StyleSheet, [{
    key: "length",
    get: function get() {
      return this._rulesCount;
    }
  }]);

  return StyleSheet;
}();

exports.default = StyleSheet;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheet: " + message + ".");
  }
}

/***/ }),

/***/ "../../.yarn/__virtual__/styled-jsx-virtual-04cda5d2fe/0/cache/styled-jsx-npm-3.3.2-e6d9ca13f4-74a129dee7.zip/node_modules/styled-jsx/dist/server.js":
/*!***********************************************************************************************************************************************************!*\
  !*** ../../.yarn/__virtual__/styled-jsx-virtual-04cda5d2fe/0/cache/styled-jsx-npm-3.3.2-e6d9ca13f4-74a129dee7.zip/node_modules/styled-jsx/dist/server.js ***!
  \***********************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = flushToReact;
exports.flushToHTML = flushToHTML;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _style = __webpack_require__(/*! ./style */ "../../.yarn/__virtual__/styled-jsx-virtual-04cda5d2fe/0/cache/styled-jsx-npm-3.3.2-e6d9ca13f4-74a129dee7.zip/node_modules/styled-jsx/dist/style.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function flushToReact(options) {
  if (options === void 0) {
    options = {};
  }

  return (0, _style.flush)().map(function (args) {
    var id = args[0];
    var css = args[1];
    return _react["default"].createElement('style', {
      id: "__" + id,
      // Avoid warnings upon render with a key
      key: "__" + id,
      nonce: options.nonce ? options.nonce : undefined,
      dangerouslySetInnerHTML: {
        __html: css
      }
    });
  });
}

function flushToHTML(options) {
  if (options === void 0) {
    options = {};
  }

  return (0, _style.flush)().reduce(function (html, args) {
    var id = args[0];
    var css = args[1];
    html += "<style id=\"__" + id + "\"" + (options.nonce ? " nonce=\"" + options.nonce + "\"" : '') + ">" + css + "</style>";
    return html;
  }, '');
}

/***/ }),

/***/ "../../.yarn/__virtual__/styled-jsx-virtual-04cda5d2fe/0/cache/styled-jsx-npm-3.3.2-e6d9ca13f4-74a129dee7.zip/node_modules/styled-jsx/dist/style.js":
/*!**********************************************************************************************************************************************************!*\
  !*** ../../.yarn/__virtual__/styled-jsx-virtual-04cda5d2fe/0/cache/styled-jsx-npm-3.3.2-e6d9ca13f4-74a129dee7.zip/node_modules/styled-jsx/dist/style.js ***!
  \**********************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.flush = flush;
exports.default = void 0;

var _react = __webpack_require__(/*! react */ "react");

var _stylesheetRegistry = _interopRequireDefault(__webpack_require__(/*! ./stylesheet-registry */ "../../.yarn/__virtual__/styled-jsx-virtual-04cda5d2fe/0/cache/styled-jsx-npm-3.3.2-e6d9ca13f4-74a129dee7.zip/node_modules/styled-jsx/dist/stylesheet-registry.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var styleSheetRegistry = new _stylesheetRegistry["default"]();

var JSXStyle = /*#__PURE__*/function (_Component) {
  _inheritsLoose(JSXStyle, _Component);

  function JSXStyle(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.prevProps = {};
    return _this;
  }

  JSXStyle.dynamic = function dynamic(info) {
    return info.map(function (tagInfo) {
      var baseId = tagInfo[0];
      var props = tagInfo[1];
      return styleSheetRegistry.computeId(baseId, props);
    }).join(' ');
  } // probably faster than PureComponent (shallowEqual)
  ;

  var _proto = JSXStyle.prototype;

  _proto.shouldComponentUpdate = function shouldComponentUpdate(otherProps) {
    return this.props.id !== otherProps.id || // We do this check because `dynamic` is an array of strings or undefined.
    // These are the computed values for dynamic styles.
    String(this.props.dynamic) !== String(otherProps.dynamic);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    styleSheetRegistry.remove(this.props);
  };

  _proto.render = function render() {
    // This is a workaround to make the side effect async safe in the "render" phase.
    // See https://github.com/zeit/styled-jsx/pull/484
    if (this.shouldComponentUpdate(this.prevProps)) {
      // Updates
      if (this.prevProps.id) {
        styleSheetRegistry.remove(this.prevProps);
      }

      styleSheetRegistry.add(this.props);
      this.prevProps = this.props;
    }

    return null;
  };

  return JSXStyle;
}(_react.Component);

exports.default = JSXStyle;

function flush() {
  var cssRules = styleSheetRegistry.cssRules();
  styleSheetRegistry.flush();
  return cssRules;
}

/***/ }),

/***/ "../../.yarn/__virtual__/styled-jsx-virtual-04cda5d2fe/0/cache/styled-jsx-npm-3.3.2-e6d9ca13f4-74a129dee7.zip/node_modules/styled-jsx/dist/stylesheet-registry.js":
/*!************************************************************************************************************************************************************************!*\
  !*** ../../.yarn/__virtual__/styled-jsx-virtual-04cda5d2fe/0/cache/styled-jsx-npm-3.3.2-e6d9ca13f4-74a129dee7.zip/node_modules/styled-jsx/dist/stylesheet-registry.js ***!
  \************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _stringHash = _interopRequireDefault(__webpack_require__(/*! string-hash */ "../../.yarn/cache/string-hash-npm-1.1.3-3cb8892e7c-104b8667a5.zip/node_modules/string-hash/index.js"));

var _stylesheet = _interopRequireDefault(__webpack_require__(/*! ./lib/stylesheet */ "../../.yarn/__virtual__/styled-jsx-virtual-04cda5d2fe/0/cache/styled-jsx-npm-3.3.2-e6d9ca13f4-74a129dee7.zip/node_modules/styled-jsx/dist/lib/stylesheet.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var sanitize = function sanitize(rule) {
  return rule.replace(/\/style/gi, '\\/style');
};

var StyleSheetRegistry = /*#__PURE__*/function () {
  function StyleSheetRegistry(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        _ref$styleSheet = _ref.styleSheet,
        styleSheet = _ref$styleSheet === void 0 ? null : _ref$styleSheet,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? false : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    this._sheet = styleSheet || new _stylesheet["default"]({
      name: 'styled-jsx',
      optimizeForSpeed: optimizeForSpeed
    });

    this._sheet.inject();

    if (styleSheet && typeof optimizeForSpeed === 'boolean') {
      this._sheet.setOptimizeForSpeed(optimizeForSpeed);

      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    this._isBrowser = isBrowser;
    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};
    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  }

  var _proto = StyleSheetRegistry.prototype;

  _proto.add = function add(props) {
    var _this = this;

    if (undefined === this._optimizeForSpeed) {
      this._optimizeForSpeed = Array.isArray(props.children);

      this._sheet.setOptimizeForSpeed(this._optimizeForSpeed);

      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    if (this._isBrowser && !this._fromServer) {
      this._fromServer = this.selectFromServer();
      this._instancesCounts = Object.keys(this._fromServer).reduce(function (acc, tagName) {
        acc[tagName] = 0;
        return acc;
      }, {});
    }

    var _this$getIdAndRules = this.getIdAndRules(props),
        styleId = _this$getIdAndRules.styleId,
        rules = _this$getIdAndRules.rules; // Deduping: just increase the instances count.


    if (styleId in this._instancesCounts) {
      this._instancesCounts[styleId] += 1;
      return;
    }

    var indices = rules.map(function (rule) {
      return _this._sheet.insertRule(rule);
    }) // Filter out invalid rules
    .filter(function (index) {
      return index !== -1;
    });
    this._indices[styleId] = indices;
    this._instancesCounts[styleId] = 1;
  };

  _proto.remove = function remove(props) {
    var _this2 = this;

    var _this$getIdAndRules2 = this.getIdAndRules(props),
        styleId = _this$getIdAndRules2.styleId;

    invariant(styleId in this._instancesCounts, "styleId: `" + styleId + "` not found");
    this._instancesCounts[styleId] -= 1;

    if (this._instancesCounts[styleId] < 1) {
      var tagFromServer = this._fromServer && this._fromServer[styleId];

      if (tagFromServer) {
        tagFromServer.parentNode.removeChild(tagFromServer);
        delete this._fromServer[styleId];
      } else {
        this._indices[styleId].forEach(function (index) {
          return _this2._sheet.deleteRule(index);
        });

        delete this._indices[styleId];
      }

      delete this._instancesCounts[styleId];
    }
  };

  _proto.update = function update(props, nextProps) {
    this.add(nextProps);
    this.remove(props);
  };

  _proto.flush = function flush() {
    this._sheet.flush();

    this._sheet.inject();

    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};
    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  };

  _proto.cssRules = function cssRules() {
    var _this3 = this;

    var fromServer = this._fromServer ? Object.keys(this._fromServer).map(function (styleId) {
      return [styleId, _this3._fromServer[styleId]];
    }) : [];

    var cssRules = this._sheet.cssRules();

    return fromServer.concat(Object.keys(this._indices).map(function (styleId) {
      return [styleId, _this3._indices[styleId].map(function (index) {
        return cssRules[index].cssText;
      }).join(_this3._optimizeForSpeed ? '' : '\n')];
    }) // filter out empty rules
    .filter(function (rule) {
      return Boolean(rule[1]);
    }));
  }
  /**
   * createComputeId
   *
   * Creates a function to compute and memoize a jsx id from a basedId and optionally props.
   */
  ;

  _proto.createComputeId = function createComputeId() {
    var cache = {};
    return function (baseId, props) {
      if (!props) {
        return "jsx-" + baseId;
      }

      var propsToString = String(props);
      var key = baseId + propsToString; // return `jsx-${hashString(`${baseId}-${propsToString}`)}`

      if (!cache[key]) {
        cache[key] = "jsx-" + (0, _stringHash["default"])(baseId + "-" + propsToString);
      }

      return cache[key];
    };
  }
  /**
   * createComputeSelector
   *
   * Creates a function to compute and memoize dynamic selectors.
   */
  ;

  _proto.createComputeSelector = function createComputeSelector(selectoPlaceholderRegexp) {
    if (selectoPlaceholderRegexp === void 0) {
      selectoPlaceholderRegexp = /__jsx-style-dynamic-selector/g;
    }

    var cache = {};
    return function (id, css) {
      // Sanitize SSR-ed CSS.
      // Client side code doesn't need to be sanitized since we use
      // document.createTextNode (dev) and the CSSOM api sheet.insertRule (prod).
      if (!this._isBrowser) {
        css = sanitize(css);
      }

      var idcss = id + css;

      if (!cache[idcss]) {
        cache[idcss] = css.replace(selectoPlaceholderRegexp, id);
      }

      return cache[idcss];
    };
  };

  _proto.getIdAndRules = function getIdAndRules(props) {
    var _this4 = this;

    var css = props.children,
        dynamic = props.dynamic,
        id = props.id;

    if (dynamic) {
      var styleId = this.computeId(id, dynamic);
      return {
        styleId: styleId,
        rules: Array.isArray(css) ? css.map(function (rule) {
          return _this4.computeSelector(styleId, rule);
        }) : [this.computeSelector(styleId, css)]
      };
    }

    return {
      styleId: this.computeId(id),
      rules: Array.isArray(css) ? css : [css]
    };
  }
  /**
   * selectFromServer
   *
   * Collects style tags from the document with id __jsx-XXX
   */
  ;

  _proto.selectFromServer = function selectFromServer() {
    var elements = Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));
    return elements.reduce(function (acc, element) {
      var id = element.id.slice(2);
      acc[id] = element;
      return acc;
    }, {});
  };

  return StyleSheetRegistry;
}();

exports.default = StyleSheetRegistry;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheetRegistry: " + message + ".");
  }
}

/***/ }),

/***/ "../../.yarn/__virtual__/styled-jsx-virtual-04cda5d2fe/0/cache/styled-jsx-npm-3.3.2-e6d9ca13f4-74a129dee7.zip/node_modules/styled-jsx/server.js":
/*!******************************************************************************************************************************************************!*\
  !*** ../../.yarn/__virtual__/styled-jsx-virtual-04cda5d2fe/0/cache/styled-jsx-npm-3.3.2-e6d9ca13f4-74a129dee7.zip/node_modules/styled-jsx/server.js ***!
  \******************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/server */ "../../.yarn/__virtual__/styled-jsx-virtual-04cda5d2fe/0/cache/styled-jsx-npm-3.3.2-e6d9ca13f4-74a129dee7.zip/node_modules/styled-jsx/dist/server.js")


/***/ }),

/***/ "../../.yarn/cache/@babel-runtime-npm-7.12.5-b3edb8ee8e-64964a0fd1.zip/node_modules/@babel/runtime/helpers/extends.js":
/*!****************************************************************************************************************************!*\
  !*** ../../.yarn/cache/@babel-runtime-npm-7.12.5-b3edb8ee8e-64964a0fd1.zip/node_modules/@babel/runtime/helpers/extends.js ***!
  \****************************************************************************************************************************/
/***/ (function(module) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
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

module.exports = _extends;

/***/ }),

/***/ "../../.yarn/cache/@babel-runtime-npm-7.12.5-b3edb8ee8e-64964a0fd1.zip/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!******************************************************************************************************************************************!*\
  !*** ../../.yarn/cache/@babel-runtime-npm-7.12.5-b3edb8ee8e-64964a0fd1.zip/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \******************************************************************************************************************************************/
/***/ (function(module) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "../../.yarn/cache/@babel-runtime-npm-7.12.5-b3edb8ee8e-64964a0fd1.zip/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!*************************************************************************************************************************************************!*\
  !*** ../../.yarn/cache/@babel-runtime-npm-7.12.5-b3edb8ee8e-64964a0fd1.zip/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \*************************************************************************************************************************************************/
/***/ (function(module) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "../../.yarn/cache/object-assign-npm-4.1.1-1004ad6dec-fcc6e4ea8c.zip/node_modules/object-assign/index.js":
/*!***************************************************************************************************************!*\
  !*** ../../.yarn/cache/object-assign-npm-4.1.1-1004ad6dec-fcc6e4ea8c.zip/node_modules/object-assign/index.js ***!
  \***************************************************************************************************************/
/***/ (function(module) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "../../.yarn/cache/prop-types-npm-15.7.2-d7a04f2274-5eef82fdda.zip/node_modules/prop-types/checkPropTypes.js":
/*!*******************************************************************************************************************!*\
  !*** ../../.yarn/cache/prop-types-npm-15.7.2-d7a04f2274-5eef82fdda.zip/node_modules/prop-types/checkPropTypes.js ***!
  \*******************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "../../.yarn/cache/prop-types-npm-15.7.2-d7a04f2274-5eef82fdda.zip/node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "../../.yarn/cache/prop-types-npm-15.7.2-d7a04f2274-5eef82fdda.zip/node_modules/prop-types/factoryWithTypeCheckers.js":
/*!****************************************************************************************************************************!*\
  !*** ../../.yarn/cache/prop-types-npm-15.7.2-d7a04f2274-5eef82fdda.zip/node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \****************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "../../.yarn/cache/react-is-npm-16.13.1-a9b9382b4f-f7a19ac349.zip/node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "../../.yarn/cache/object-assign-npm-4.1.1-1004ad6dec-fcc6e4ea8c.zip/node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "../../.yarn/cache/prop-types-npm-15.7.2-d7a04f2274-5eef82fdda.zip/node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "../../.yarn/cache/prop-types-npm-15.7.2-d7a04f2274-5eef82fdda.zip/node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "../../.yarn/cache/prop-types-npm-15.7.2-d7a04f2274-5eef82fdda.zip/node_modules/prop-types/index.js":
/*!**********************************************************************************************************!*\
  !*** ../../.yarn/cache/prop-types-npm-15.7.2-d7a04f2274-5eef82fdda.zip/node_modules/prop-types/index.js ***!
  \**********************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "../../.yarn/cache/react-is-npm-16.13.1-a9b9382b4f-f7a19ac349.zip/node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "../../.yarn/cache/prop-types-npm-15.7.2-d7a04f2274-5eef82fdda.zip/node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "../../.yarn/cache/prop-types-npm-15.7.2-d7a04f2274-5eef82fdda.zip/node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*****************************************************************************************************************************!*\
  !*** ../../.yarn/cache/prop-types-npm-15.7.2-d7a04f2274-5eef82fdda.zip/node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*****************************************************************************************************************************/
/***/ (function(module) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


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

/***/ "../../.yarn/cache/string-hash-npm-1.1.3-3cb8892e7c-104b8667a5.zip/node_modules/string-hash/index.js":
/*!***********************************************************************************************************!*\
  !*** ../../.yarn/cache/string-hash-npm-1.1.3-3cb8892e7c-104b8667a5.zip/node_modules/string-hash/index.js ***!
  \***********************************************************************************************************/
/***/ (function(module) {

"use strict";


function hash(str) {
  var hash = 5381,
      i    = str.length;

  while(i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }

  /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */
  return hash >>> 0;
}

module.exports = hash;


/***/ }),

/***/ "@emotion/react/jsx-dev-runtime":
/*!*************************************************!*\
  !*** external "@emotion/react/jsx-dev-runtime" ***!
  \*************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@emotion/react/jsx-dev-runtime");;

/***/ }),

/***/ "../next-server/lib/constants":
/*!*********************************************************!*\
  !*** external "next/dist/next-server/lib/constants.js" ***!
  \*********************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/constants.js");;

/***/ }),

/***/ "../next-server/lib/document-context":
/*!****************************************************************!*\
  !*** external "next/dist/next-server/lib/document-context.js" ***!
  \****************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/document-context.js");;

/***/ }),

/***/ "../next-server/lib/head-manager-context":
/*!********************************************************************!*\
  !*** external "next/dist/next-server/lib/head-manager-context.js" ***!
  \********************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/head-manager-context.js");;

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/utils.js");;

/***/ }),

/***/ "../next-server/server/get-page-files":
/*!*****************************************************************!*\
  !*** external "next/dist/next-server/server/get-page-files.js" ***!
  \*****************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/get-page-files.js");;

/***/ }),

/***/ "../next-server/server/utils":
/*!********************************************************!*\
  !*** external "next/dist/next-server/server/utils.js" ***!
  \********************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/utils.js");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/_document.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1zYW1wbGUtY29kZS8uLi8ueWFybi9fX3ZpcnR1YWxfXy9uZXh0LXZpcnR1YWwtZjg0YjUxYzU1OS8wL2NhY2hlL25leHQtbnBtLTExLjAuMS1jNDBiYzdmMzgwLWM2YjQ3NDdmMWEuemlwL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L2hlYWQtbWFuYWdlci5qcyIsIndlYnBhY2s6Ly9teS1zYW1wbGUtY29kZS8uLi8ueWFybi9fX3ZpcnR1YWxfXy9uZXh0LXZpcnR1YWwtZjg0YjUxYzU1OS8wL2NhY2hlL25leHQtbnBtLTExLjAuMS1jNDBiYzdmMzgwLWM2YjQ3NDdmMWEuemlwL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JlcXVlc3QtaWRsZS1jYWxsYmFjay5qcyIsIndlYnBhY2s6Ly9teS1zYW1wbGUtY29kZS8uLi8ueWFybi9fX3ZpcnR1YWxfXy9uZXh0LXZpcnR1YWwtZjg0YjUxYzU1OS8wL2NhY2hlL25leHQtbnBtLTExLjAuMS1jNDBiYzdmMzgwLWM2YjQ3NDdmMWEuemlwL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3NjcmlwdC5qcyIsIndlYnBhY2s6Ly9teS1zYW1wbGUtY29kZS8uLi8ueWFybi9fX3ZpcnR1YWxfXy9uZXh0LXZpcnR1YWwtZjg0YjUxYzU1OS8wL2NhY2hlL25leHQtbnBtLTExLjAuMS1jNDBiYzdmMzgwLWM2YjQ3NDdmMWEuemlwL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvcGFnZXMvX2RvY3VtZW50LmpzIiwid2VicGFjazovL215LXNhbXBsZS1jb2RlLy4vcGFnZXMvX2RvY3VtZW50LnRzeCIsIndlYnBhY2s6Ly9teS1zYW1wbGUtY29kZS8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy9uZXh0LXZpcnR1YWwtZjg0YjUxYzU1OS8wL2NhY2hlL25leHQtbnBtLTExLjAuMS1jNDBiYzdmMzgwLWM2YjQ3NDdmMWEuemlwL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3Qvc2VydmVyL2h0bWxlc2NhcGUuanMiLCJ3ZWJwYWNrOi8vbXktc2FtcGxlLWNvZGUvLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vbmV4dC12aXJ0dWFsLWY4NGI1MWM1NTkvMC9jYWNoZS9uZXh0LW5wbS0xMS4wLjEtYzQwYmM3ZjM4MC1jNmI0NzQ3ZjFhLnppcC9ub2RlX21vZHVsZXMvbmV4dC9kb2N1bWVudC5qcyIsIndlYnBhY2s6Ly9teS1zYW1wbGUtY29kZS8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy9zdHlsZWQtanN4LXZpcnR1YWwtMDRjZGE1ZDJmZS8wL2NhY2hlL3N0eWxlZC1qc3gtbnBtLTMuMy4yLWU2ZDljYTEzZjQtNzRhMTI5ZGVlNy56aXAvbm9kZV9tb2R1bGVzL3N0eWxlZC1qc3gvZGlzdC9saWIvc3R5bGVzaGVldC5qcyIsIndlYnBhY2s6Ly9teS1zYW1wbGUtY29kZS8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy9zdHlsZWQtanN4LXZpcnR1YWwtMDRjZGE1ZDJmZS8wL2NhY2hlL3N0eWxlZC1qc3gtbnBtLTMuMy4yLWU2ZDljYTEzZjQtNzRhMTI5ZGVlNy56aXAvbm9kZV9tb2R1bGVzL3N0eWxlZC1qc3gvZGlzdC9zZXJ2ZXIuanMiLCJ3ZWJwYWNrOi8vbXktc2FtcGxlLWNvZGUvLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vc3R5bGVkLWpzeC12aXJ0dWFsLTA0Y2RhNWQyZmUvMC9jYWNoZS9zdHlsZWQtanN4LW5wbS0zLjMuMi1lNmQ5Y2ExM2Y0LTc0YTEyOWRlZTcuemlwL25vZGVfbW9kdWxlcy9zdHlsZWQtanN4L2Rpc3Qvc3R5bGUuanMiLCJ3ZWJwYWNrOi8vbXktc2FtcGxlLWNvZGUvLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vc3R5bGVkLWpzeC12aXJ0dWFsLTA0Y2RhNWQyZmUvMC9jYWNoZS9zdHlsZWQtanN4LW5wbS0zLjMuMi1lNmQ5Y2ExM2Y0LTc0YTEyOWRlZTcuemlwL25vZGVfbW9kdWxlcy9zdHlsZWQtanN4L2Rpc3Qvc3R5bGVzaGVldC1yZWdpc3RyeS5qcyIsIndlYnBhY2s6Ly9teS1zYW1wbGUtY29kZS8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy9zdHlsZWQtanN4LXZpcnR1YWwtMDRjZGE1ZDJmZS8wL2NhY2hlL3N0eWxlZC1qc3gtbnBtLTMuMy4yLWU2ZDljYTEzZjQtNzRhMTI5ZGVlNy56aXAvbm9kZV9tb2R1bGVzL3N0eWxlZC1qc3gvc2VydmVyLmpzIiwid2VicGFjazovL215LXNhbXBsZS1jb2RlLy4uLy4uLy55YXJuL2NhY2hlL0BiYWJlbC1ydW50aW1lLW5wbS03LjEyLjUtYjNlZGI4ZWU4ZS02NDk2NGEwZmQxLnppcC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzLmpzIiwid2VicGFjazovL215LXNhbXBsZS1jb2RlLy4uLy4uLy55YXJuL2NhY2hlL0BiYWJlbC1ydW50aW1lLW5wbS03LjEyLjUtYjNlZGI4ZWU4ZS02NDk2NGEwZmQxLnppcC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vbXktc2FtcGxlLWNvZGUvLi4vLi4vLnlhcm4vY2FjaGUvQGJhYmVsLXJ1bnRpbWUtbnBtLTcuMTIuNS1iM2VkYjhlZThlLTY0OTY0YTBmZDEuemlwL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UuanMiLCJ3ZWJwYWNrOi8vbXktc2FtcGxlLWNvZGUvLi4vLi4vLnlhcm4vY2FjaGUvb2JqZWN0LWFzc2lnbi1ucG0tNC4xLjEtMTAwNGFkNmRlYy1mY2M2ZTRlYThjLnppcC9ub2RlX21vZHVsZXMvb2JqZWN0LWFzc2lnbi9pbmRleC5qcyIsIndlYnBhY2s6Ly9teS1zYW1wbGUtY29kZS8uLi8uLi8ueWFybi9jYWNoZS9wcm9wLXR5cGVzLW5wbS0xNS43LjItZDdhMDRmMjI3NC01ZWVmODJmZGRhLnppcC9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9jaGVja1Byb3BUeXBlcy5qcyIsIndlYnBhY2s6Ly9teS1zYW1wbGUtY29kZS8uLi8uLi8ueWFybi9jYWNoZS9wcm9wLXR5cGVzLW5wbS0xNS43LjItZDdhMDRmMjI3NC01ZWVmODJmZGRhLnppcC9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9mYWN0b3J5V2l0aFR5cGVDaGVja2Vycy5qcyIsIndlYnBhY2s6Ly9teS1zYW1wbGUtY29kZS8uLi8uLi8ueWFybi9jYWNoZS9wcm9wLXR5cGVzLW5wbS0xNS43LjItZDdhMDRmMjI3NC01ZWVmODJmZGRhLnppcC9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9teS1zYW1wbGUtY29kZS8uLi8uLi8ueWFybi9jYWNoZS9wcm9wLXR5cGVzLW5wbS0xNS43LjItZDdhMDRmMjI3NC01ZWVmODJmZGRhLnppcC9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQuanMiLCJ3ZWJwYWNrOi8vbXktc2FtcGxlLWNvZGUvLi4vLi4vLnlhcm4vY2FjaGUvcmVhY3QtaXMtbnBtLTE2LjEzLjEtYTliOTM4MmI0Zi1mN2ExOWFjMzQ5LnppcC9ub2RlX21vZHVsZXMvcmVhY3QtaXMvY2pzL3JlYWN0LWlzLmRldmVsb3BtZW50LmpzIiwid2VicGFjazovL215LXNhbXBsZS1jb2RlLy4uLy4uLy55YXJuL2NhY2hlL3JlYWN0LWlzLW5wbS0xNi4xMy4xLWE5YjkzODJiNGYtZjdhMTlhYzM0OS56aXAvbm9kZV9tb2R1bGVzL3JlYWN0LWlzL2luZGV4LmpzIiwid2VicGFjazovL215LXNhbXBsZS1jb2RlLy4uLy4uLy55YXJuL2NhY2hlL3N0cmluZy1oYXNoLW5wbS0xLjEuMy0zY2I4ODkyZTdjLTEwNGI4NjY3YTUuemlwL25vZGVfbW9kdWxlcy9zdHJpbmctaGFzaC9pbmRleC5qcyIsIndlYnBhY2s6Ly9teS1zYW1wbGUtY29kZS9leHRlcm5hbCBcIkBlbW90aW9uL3JlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL215LXNhbXBsZS1jb2RlL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9jb25zdGFudHMuanNcIiIsIndlYnBhY2s6Ly9teS1zYW1wbGUtY29kZS9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvZG9jdW1lbnQtY29udGV4dC5qc1wiIiwid2VicGFjazovL215LXNhbXBsZS1jb2RlL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9oZWFkLW1hbmFnZXItY29udGV4dC5qc1wiIiwid2VicGFjazovL215LXNhbXBsZS1jb2RlL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiIiwid2VicGFjazovL215LXNhbXBsZS1jb2RlL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9nZXQtcGFnZS1maWxlcy5qc1wiIiwid2VicGFjazovL215LXNhbXBsZS1jb2RlL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci91dGlscy5qc1wiIiwid2VicGFjazovL215LXNhbXBsZS1jb2RlL2V4dGVybmFsIFwicmVhY3RcIiJdLCJuYW1lcyI6WyJleHBvcnRzIiwiaW5pdEhlYWRNYW5hZ2VyIiwiRE9NQXR0cmlidXRlTmFtZXMiLCJhY2NlcHRDaGFyc2V0IiwiY2xhc3NOYW1lIiwiaHRtbEZvciIsImh0dHBFcXVpdiIsIm5vTW9kdWxlIiwicmVhY3RFbGVtZW50VG9ET00iLCJ0eXBlIiwicHJvcHMiLCJlbCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInAiLCJoYXNPd25Qcm9wZXJ0eSIsInVuZGVmaW5lZCIsImF0dHIiLCJ0b0xvd2VyQ2FzZSIsInNldEF0dHJpYnV0ZSIsImNoaWxkcmVuIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJpbm5lckhUTUwiLCJfX2h0bWwiLCJ0ZXh0Q29udGVudCIsIkFycmF5IiwiaXNBcnJheSIsImpvaW4iLCJ1cGRhdGVFbGVtZW50cyIsImNvbXBvbmVudHMiLCJoZWFkRWwiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImhlYWRDb3VudEVsIiwicXVlcnlTZWxlY3RvciIsImNvbnNvbGUiLCJlcnJvciIsImhlYWRDb3VudCIsIk51bWJlciIsImNvbnRlbnQiLCJvbGRUYWdzIiwiaSIsImoiLCJwcmV2aW91c0VsZW1lbnRTaWJsaW5nIiwidGFnTmFtZSIsInB1c2giLCJuZXdUYWdzIiwibWFwIiwiZmlsdGVyIiwibmV3VGFnIiwiayIsImxlbiIsImxlbmd0aCIsIm9sZFRhZyIsImlzRXF1YWxOb2RlIiwic3BsaWNlIiwiZm9yRWFjaCIsInQiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJpbnNlcnRCZWZvcmUiLCJ0b1N0cmluZyIsInVwZGF0ZVByb21pc2UiLCJtb3VudGVkSW5zdGFuY2VzIiwiU2V0IiwidXBkYXRlSGVhZCIsImhlYWQiLCJwcm9taXNlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJ0aGVuIiwidGFncyIsImgiLCJocmVmIiwidGl0bGVDb21wb25lbnQiLCJ0aXRsZSIsInJlcXVlc3RJZGxlQ2FsbGJhY2siLCJzZWxmIiwiY2IiLCJzdGFydCIsIkRhdGUiLCJub3ciLCJzZXRUaW1lb3V0IiwiZGlkVGltZW91dCIsInRpbWVSZW1haW5pbmciLCJNYXRoIiwibWF4IiwiY2FuY2VsSWRsZUNhbGxiYWNrIiwiaWQiLCJjbGVhclRpbWVvdXQiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsImluaXRTY3JpcHRMb2FkZXIiLCJfZXh0ZW5kczIiLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZTIiLCJfcmVhY3QiLCJfaGVhZE1hbmFnZXJDb250ZXh0IiwiX2hlYWRNYW5hZ2VyIiwiX3JlcXVlc3RJZGxlQ2FsbGJhY2siLCJTY3JpcHRDYWNoZSIsIk1hcCIsIkxvYWRDYWNoZSIsImlnbm9yZVByb3BzIiwibG9hZFNjcmlwdCIsInNyYyIsIm9uTG9hZCIsIm9uRXJyb3IiLCJjYWNoZUtleSIsImhhcyIsImFkZCIsImdldCIsImxvYWRQcm9taXNlIiwicmVqZWN0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNhbGwiLCJzZXQiLCJ2YWx1ZSIsIk9iamVjdCIsImVudHJpZXMiLCJpbmNsdWRlcyIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImhhbmRsZUNsaWVudFNjcmlwdExvYWQiLCJzdHJhdGVneSIsIndpbmRvdyIsImxvYWRMYXp5U2NyaXB0IiwicmVhZHlTdGF0ZSIsInNjcmlwdExvYWRlckl0ZW1zIiwiU2NyaXB0IiwicmVzdFByb3BzIiwiZGVmYXVsdCIsInVwZGF0ZVNjcmlwdHMiLCJzY3JpcHRzIiwidXNlQ29udGV4dCIsIkhlYWRNYW5hZ2VyQ29udGV4dCIsInVzZUVmZmVjdCIsImJlZm9yZUludGVyYWN0aXZlIiwiY29uY2F0IiwiX2RlZmF1bHQiLCJIdG1sIiwiTWFpbiIsIl9wcm9wVHlwZXMiLCJfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCIsIl9zZXJ2ZXIiLCJfY29uc3RhbnRzIiwiX2RvY3VtZW50Q29udGV4dCIsIl91dGlscyIsIkRvY3VtZW50Q29udGV4dCIsIkRvY3VtZW50SW5pdGlhbFByb3BzIiwiRG9jdW1lbnRQcm9wcyIsIl9nZXRQYWdlRmlsZXMiLCJfdXRpbHMyIiwiX2h0bWxlc2NhcGUiLCJfc2NyaXB0IiwiX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlIiwiV2Vha01hcCIsImNhY2hlIiwib2JqIiwiX19lc01vZHVsZSIsIm5ld09iaiIsImhhc1Byb3BlcnR5RGVzY3JpcHRvciIsImRlZmluZVByb3BlcnR5IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwia2V5IiwicHJvdG90eXBlIiwiZGVzYyIsImdldERvY3VtZW50RmlsZXMiLCJidWlsZE1hbmlmZXN0IiwicGF0aG5hbWUiLCJpbkFtcE1vZGUiLCJzaGFyZWRGaWxlcyIsImdldFBhZ2VGaWxlcyIsInBhZ2VGaWxlcyIsImFsbEZpbGVzIiwiZ2V0UG9seWZpbGxTY3JpcHRzIiwiY29udGV4dCIsImFzc2V0UHJlZml4IiwiZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmciLCJkaXNhYmxlT3B0aW1pemVkTG9hZGluZyIsInBvbHlmaWxsRmlsZXMiLCJwb2x5ZmlsbCIsImVuZHNXaXRoIiwiZGVmZXIiLCJub25jZSIsImNyb3NzT3JpZ2luIiwicHJvY2VzcyIsImdldFByZU5leHRTY3JpcHRzIiwic2NyaXB0TG9hZGVyIiwiZmlsZSIsInNjcmlwdFByb3BzIiwiYXNzaWduIiwiX19ORVhUX0NST1NTX09SSUdJTiIsImdldER5bmFtaWNDaHVua3MiLCJmaWxlcyIsImR5bmFtaWNJbXBvcnRzIiwiaXNEZXZlbG9wbWVudCIsImFzeW5jIiwiZW5jb2RlVVJJIiwiZ2V0U2NyaXB0cyIsIl9idWlsZE1hbmlmZXN0JGxvd1ByaSIsIm5vcm1hbFNjcmlwdHMiLCJsb3dQcmlvcml0eVNjcmlwdHMiLCJsb3dQcmlvcml0eUZpbGVzIiwiRG9jdW1lbnQiLCJDb21wb25lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJlbmhhbmNlQXBwIiwiQXBwIiwiaHRtbCIsInJlbmRlclBhZ2UiLCJzdHlsZXMiLCJyZW5kZXJEb2N1bWVudCIsIkRvY3VtZW50Q29tcG9uZW50IiwiUHJvdmlkZXIiLCJyZW5kZXIiLCJIZWFkIiwiTmV4dFNjcmlwdCIsImRvY0NvbXBvbmVudHNSZW5kZXJlZCIsImxvY2FsZSIsImxhbmciLCJhbXAiLCJjb25zdHJ1Y3RvciIsImFyZ3MiLCJnZXRDc3NMaW5rcyIsImNzc0ZpbGVzIiwiZiIsInVubWFuZ2VkRmlsZXMiLCJkeW5hbWljQ3NzRmlsZXMiLCJmcm9tIiwiZXhpc3RpbmciLCJjc3NMaW5rRWxlbWVudHMiLCJpc1NoYXJlZEZpbGUiLCJyZWwiLCJhcyIsImlzVW5tYW5hZ2VkRmlsZSIsImdldFByZWxvYWREeW5hbWljQ2h1bmtzIiwiQm9vbGVhbiIsImdldFByZWxvYWRNYWluTGlua3MiLCJwcmVsb2FkRmlsZXMiLCJoYW5kbGVEb2N1bWVudFNjcmlwdExvYWRlckl0ZW1zIiwiZmlsdGVyZWRDaGlsZHJlbiIsIkNoaWxkcmVuIiwiY2hpbGQiLCJfX05FWFRfREFUQV9fIiwibWFrZVN0eWxlc2hlZXRJbmVydCIsIm5vZGUiLCJjIiwiT1BUSU1JWkVEX0ZPTlRfUFJPVklERVJTIiwic29tZSIsInVybCIsInN0YXJ0c1dpdGgiLCJuZXdQcm9wcyIsImNsb25lRWxlbWVudCIsIl90aGlzJHByb3BzJG5vbmNlIiwiX3RoaXMkcHJvcHMkbm9uY2UyIiwiYW1wUGF0aCIsImh5YnJpZEFtcCIsImNhbm9uaWNhbEJhc2UiLCJkYW5nZXJvdXNBc1BhdGgiLCJoZWFkVGFncyIsInVuc3RhYmxlX3J1bnRpbWVKUyIsInVuc3RhYmxlX0pzUHJlbG9hZCIsImRpc2FibGVSdW50aW1lSlMiLCJkaXNhYmxlSnNQcmVsb2FkIiwiY3NzUHJlbG9hZHMiLCJvdGhlckhlYWRFbGVtZW50cyIsInRvQXJyYXkiLCJfY2hpbGQkcHJvcHMiLCJpc1JlYWN0SGVsbWV0IiwiX2NoaWxkJHByb3BzMiIsIndhcm4iLCJuYW1lIiwiaGFzQW1waHRtbFJlbCIsImhhc0Nhbm9uaWNhbFJlbCIsImJhZFByb3AiLCJpbmRleE9mIiwia2V5cyIsInByb3AiLCJwYWdlIiwiY3VyU3R5bGVzIiwiaGFzU3R5bGVzIiwiX2VsJHByb3BzIiwiX2VsJHByb3BzJGRhbmdlcm91c2x5IiwiRnJhZ21lbnQiLCJjb3VudCIsImNsZWFuQW1wUGF0aCIsInN0eWxlIiwicmVwbGFjZSIsImdldEFtcFBhdGgiLCJjb250ZXh0VHlwZSIsInByb3BUeXBlcyIsInN0cmluZyIsIkFNUF9SRU5ERVJfVEFSR0VUIiwiZ2V0SW5saW5lU2NyaXB0U291cmNlIiwiZG9jdW1lbnRQcm9wcyIsImRhdGEiLCJKU09OIiwic3RyaW5naWZ5IiwiaHRtbEVzY2FwZUpzb25TdHJpbmciLCJlcnIiLCJtZXNzYWdlIiwiRXJyb3IiLCJhbXBEZXZGaWxlcyIsImRldkZpbGVzIiwic2FmYXJpTm9tb2R1bGVGaXgiLCJhc1BhdGgiLCJNeURvY3VtZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQWE7O0FBQUFBLGtCQUFBLEdBQW1C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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsNkJBQTZCO0FBQzdCLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixLQUFLO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsNEJBQTRCO0FBQzVCLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQVEsSUFBcUM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxVQUFVLEtBQXFDO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHNCQUFzQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVUsSUFBcUM7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQkFBcUIsMkJBQTJCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTSxLQUFxQyw0RkFBNEYsQ0FBTTtBQUM3STtBQUNBOztBQUVBLG1CQUFtQixnQ0FBZ0M7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUJBQXFCLGdDQUFnQztBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7OztBQzlrQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQUksSUFBcUM7QUFDekMsZ0JBQWdCLG1CQUFPLENBQUMsaUhBQVU7O0FBRWxDO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixtQkFBTyxDQUFDLHVKQUEyQjtBQUN0RCxDQUFDLE1BQU0sRUFJTjs7Ozs7Ozs7Ozs7O0FDbEJEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFYTs7QUFFYjs7QUFFQTs7Ozs7Ozs7Ozs7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFYTs7OztBQUliLElBQUksSUFBcUM7QUFDekM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwRUFBMEU7QUFDMUU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdEOztBQUVoRDtBQUNBO0FBQ0E7QUFDQSxpREFBaUQ7O0FBRWpEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFpQjtBQUNqQixzQkFBc0I7QUFDdEIsdUJBQXVCO0FBQ3ZCLHVCQUF1QjtBQUN2QixlQUFlO0FBQ2Ysa0JBQWtCO0FBQ2xCLGdCQUFnQjtBQUNoQixZQUFZO0FBQ1osWUFBWTtBQUNaLGNBQWM7QUFDZCxnQkFBZ0I7QUFDaEIsa0JBQWtCO0FBQ2xCLGdCQUFnQjtBQUNoQixtQkFBbUI7QUFDbkIsd0JBQXdCO0FBQ3hCLHlCQUF5QjtBQUN6Qix5QkFBeUI7QUFDekIsaUJBQWlCO0FBQ2pCLG9CQUFvQjtBQUNwQixrQkFBa0I7QUFDbEIsY0FBYztBQUNkLGNBQWM7QUFDZCxnQkFBZ0I7QUFDaEIsa0JBQWtCO0FBQ2xCLG9CQUFvQjtBQUNwQixrQkFBa0I7QUFDbEIsMEJBQTBCO0FBQzFCLGNBQWM7QUFDZCxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7OztBQ3BMYTs7QUFFYixJQUFJLEtBQXFDLEVBQUUsRUFFMUM7QUFDRCxFQUFFLCtMQUF5RDtBQUMzRDs7Ozs7Ozs7Ozs7O0FDTmE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7QUNoQkEsNEQ7Ozs7Ozs7Ozs7O0FDQUEsb0U7Ozs7Ozs7Ozs7O0FDQUEsMkU7Ozs7Ozs7Ozs7O0FDQUEsK0U7Ozs7Ozs7Ozs7O0FDQUEsZ0U7Ozs7Ozs7Ozs7O0FDQUEsNEU7Ozs7Ozs7Ozs7O0FDQUEsbUU7Ozs7Ozs7Ozs7O0FDQUEsbUMiLCJmaWxlIjoicGFnZXMvX2RvY3VtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5kZWZhdWx0PWluaXRIZWFkTWFuYWdlcjtleHBvcnRzLkRPTUF0dHJpYnV0ZU5hbWVzPXZvaWQgMDtjb25zdCBET01BdHRyaWJ1dGVOYW1lcz17YWNjZXB0Q2hhcnNldDonYWNjZXB0LWNoYXJzZXQnLGNsYXNzTmFtZTonY2xhc3MnLGh0bWxGb3I6J2ZvcicsaHR0cEVxdWl2OidodHRwLWVxdWl2Jyxub01vZHVsZTonbm9Nb2R1bGUnfTtleHBvcnRzLkRPTUF0dHJpYnV0ZU5hbWVzPURPTUF0dHJpYnV0ZU5hbWVzO2Z1bmN0aW9uIHJlYWN0RWxlbWVudFRvRE9NKHt0eXBlLHByb3BzfSl7Y29uc3QgZWw9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtmb3IoY29uc3QgcCBpbiBwcm9wcyl7aWYoIXByb3BzLmhhc093blByb3BlcnR5KHApKWNvbnRpbnVlO2lmKHA9PT0nY2hpbGRyZW4nfHxwPT09J2Rhbmdlcm91c2x5U2V0SW5uZXJIVE1MJyljb250aW51ZTsvLyB3ZSBkb24ndCByZW5kZXIgdW5kZWZpbmVkIHByb3BzIHRvIHRoZSBET01cbmlmKHByb3BzW3BdPT09dW5kZWZpbmVkKWNvbnRpbnVlO2NvbnN0IGF0dHI9RE9NQXR0cmlidXRlTmFtZXNbcF18fHAudG9Mb3dlckNhc2UoKTtpZih0eXBlPT09J3NjcmlwdCcmJihhdHRyPT09J2FzeW5jJ3x8YXR0cj09PSdkZWZlcid8fGF0dHI9PT0nbm9Nb2R1bGUnKSl7O2VsW2F0dHJdPSEhcHJvcHNbcF07fWVsc2V7ZWwuc2V0QXR0cmlidXRlKGF0dHIscHJvcHNbcF0pO319Y29uc3R7Y2hpbGRyZW4sZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUx9PXByb3BzO2lmKGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MKXtlbC5pbm5lckhUTUw9ZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwuX19odG1sfHwnJzt9ZWxzZSBpZihjaGlsZHJlbil7ZWwudGV4dENvbnRlbnQ9dHlwZW9mIGNoaWxkcmVuPT09J3N0cmluZyc/Y2hpbGRyZW46QXJyYXkuaXNBcnJheShjaGlsZHJlbik/Y2hpbGRyZW4uam9pbignJyk6Jyc7fXJldHVybiBlbDt9ZnVuY3Rpb24gdXBkYXRlRWxlbWVudHModHlwZSxjb21wb25lbnRzKXtjb25zdCBoZWFkRWw9ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXTtjb25zdCBoZWFkQ291bnRFbD1oZWFkRWwucXVlcnlTZWxlY3RvcignbWV0YVtuYW1lPW5leHQtaGVhZC1jb3VudF0nKTtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7aWYoIWhlYWRDb3VudEVsKXtjb25zb2xlLmVycm9yKCdXYXJuaW5nOiBuZXh0LWhlYWQtY291bnQgaXMgbWlzc2luZy4gaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvbmV4dC1oZWFkLWNvdW50LW1pc3NpbmcnKTtyZXR1cm47fX1jb25zdCBoZWFkQ291bnQ9TnVtYmVyKGhlYWRDb3VudEVsLmNvbnRlbnQpO2NvbnN0IG9sZFRhZ3M9W107Zm9yKGxldCBpPTAsaj1oZWFkQ291bnRFbC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO2k8aGVhZENvdW50O2krKyxqPWoucHJldmlvdXNFbGVtZW50U2libGluZyl7aWYoai50YWdOYW1lLnRvTG93ZXJDYXNlKCk9PT10eXBlKXtvbGRUYWdzLnB1c2goaik7fX1jb25zdCBuZXdUYWdzPWNvbXBvbmVudHMubWFwKHJlYWN0RWxlbWVudFRvRE9NKS5maWx0ZXIobmV3VGFnPT57Zm9yKGxldCBrPTAsbGVuPW9sZFRhZ3MubGVuZ3RoO2s8bGVuO2srKyl7Y29uc3Qgb2xkVGFnPW9sZFRhZ3Nba107aWYob2xkVGFnLmlzRXF1YWxOb2RlKG5ld1RhZykpe29sZFRhZ3Muc3BsaWNlKGssMSk7cmV0dXJuIGZhbHNlO319cmV0dXJuIHRydWU7fSk7b2xkVGFncy5mb3JFYWNoKHQ9PnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0KSk7bmV3VGFncy5mb3JFYWNoKHQ9PmhlYWRFbC5pbnNlcnRCZWZvcmUodCxoZWFkQ291bnRFbCkpO2hlYWRDb3VudEVsLmNvbnRlbnQ9KGhlYWRDb3VudC1vbGRUYWdzLmxlbmd0aCtuZXdUYWdzLmxlbmd0aCkudG9TdHJpbmcoKTt9ZnVuY3Rpb24gaW5pdEhlYWRNYW5hZ2VyKCl7bGV0IHVwZGF0ZVByb21pc2U9bnVsbDtyZXR1cm57bW91bnRlZEluc3RhbmNlczpuZXcgU2V0KCksdXBkYXRlSGVhZDpoZWFkPT57Y29uc3QgcHJvbWlzZT11cGRhdGVQcm9taXNlPVByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCk9PntpZihwcm9taXNlIT09dXBkYXRlUHJvbWlzZSlyZXR1cm47dXBkYXRlUHJvbWlzZT1udWxsO2NvbnN0IHRhZ3M9e307aGVhZC5mb3JFYWNoKGg9PntpZigvLyBJZiB0aGUgZm9udCB0YWcgaXMgbG9hZGVkIG9ubHkgb24gY2xpZW50IG5hdmlnYXRpb25cbi8vIGl0IHdvbid0IGJlIGlubGluZWQuIEluIHRoaXMgY2FzZSByZXZlcnQgdG8gdGhlIG9yaWdpbmFsIGJlaGF2aW9yXG5oLnR5cGU9PT0nbGluaycmJmgucHJvcHNbJ2RhdGEtb3B0aW1pemVkLWZvbnRzJ10mJiFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBzdHlsZVtkYXRhLWhyZWY9XCIke2gucHJvcHNbJ2RhdGEtaHJlZiddfVwiXWApKXtoLnByb3BzLmhyZWY9aC5wcm9wc1snZGF0YS1ocmVmJ107aC5wcm9wc1snZGF0YS1ocmVmJ109dW5kZWZpbmVkO31jb25zdCBjb21wb25lbnRzPXRhZ3NbaC50eXBlXXx8W107Y29tcG9uZW50cy5wdXNoKGgpO3RhZ3NbaC50eXBlXT1jb21wb25lbnRzO30pO2NvbnN0IHRpdGxlQ29tcG9uZW50PXRhZ3MudGl0bGU/dGFncy50aXRsZVswXTpudWxsO2xldCB0aXRsZT0nJztpZih0aXRsZUNvbXBvbmVudCl7Y29uc3R7Y2hpbGRyZW59PXRpdGxlQ29tcG9uZW50LnByb3BzO3RpdGxlPXR5cGVvZiBjaGlsZHJlbj09PSdzdHJpbmcnP2NoaWxkcmVuOkFycmF5LmlzQXJyYXkoY2hpbGRyZW4pP2NoaWxkcmVuLmpvaW4oJycpOicnO31pZih0aXRsZSE9PWRvY3VtZW50LnRpdGxlKWRvY3VtZW50LnRpdGxlPXRpdGxlO1snbWV0YScsJ2Jhc2UnLCdsaW5rJywnc3R5bGUnLCdzY3JpcHQnXS5mb3JFYWNoKHR5cGU9Pnt1cGRhdGVFbGVtZW50cyh0eXBlLHRhZ3NbdHlwZV18fFtdKTt9KTt9KTt9fTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1oZWFkLW1hbmFnZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5jYW5jZWxJZGxlQ2FsbGJhY2s9ZXhwb3J0cy5yZXF1ZXN0SWRsZUNhbGxiYWNrPXZvaWQgMDtjb25zdCByZXF1ZXN0SWRsZUNhbGxiYWNrPXR5cGVvZiBzZWxmIT09J3VuZGVmaW5lZCcmJnNlbGYucmVxdWVzdElkbGVDYWxsYmFja3x8ZnVuY3Rpb24oY2Ipe2xldCBzdGFydD1EYXRlLm5vdygpO3JldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7Y2Ioe2RpZFRpbWVvdXQ6ZmFsc2UsdGltZVJlbWFpbmluZzpmdW5jdGlvbigpe3JldHVybiBNYXRoLm1heCgwLDUwLShEYXRlLm5vdygpLXN0YXJ0KSk7fX0pO30sMSk7fTtleHBvcnRzLnJlcXVlc3RJZGxlQ2FsbGJhY2s9cmVxdWVzdElkbGVDYWxsYmFjaztjb25zdCBjYW5jZWxJZGxlQ2FsbGJhY2s9dHlwZW9mIHNlbGYhPT0ndW5kZWZpbmVkJyYmc2VsZi5jYW5jZWxJZGxlQ2FsbGJhY2t8fGZ1bmN0aW9uKGlkKXtyZXR1cm4gY2xlYXJUaW1lb3V0KGlkKTt9O2V4cG9ydHMuY2FuY2VsSWRsZUNhbGxiYWNrPWNhbmNlbElkbGVDYWxsYmFjaztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlcXVlc3QtaWRsZS1jYWxsYmFjay5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5pbml0U2NyaXB0TG9hZGVyPWluaXRTY3JpcHRMb2FkZXI7ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX2V4dGVuZHMyPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kc1wiKSk7dmFyIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlMj1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2VcIikpO3ZhciBfcmVhY3Q9cmVxdWlyZShcInJlYWN0XCIpO3ZhciBfaGVhZE1hbmFnZXJDb250ZXh0PXJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvaGVhZC1tYW5hZ2VyLWNvbnRleHRcIik7dmFyIF9oZWFkTWFuYWdlcj1yZXF1aXJlKFwiLi9oZWFkLW1hbmFnZXJcIik7dmFyIF9yZXF1ZXN0SWRsZUNhbGxiYWNrPXJlcXVpcmUoXCIuL3JlcXVlc3QtaWRsZS1jYWxsYmFja1wiKTtjb25zdCBTY3JpcHRDYWNoZT1uZXcgTWFwKCk7Y29uc3QgTG9hZENhY2hlPW5ldyBTZXQoKTtjb25zdCBpZ25vcmVQcm9wcz1bJ29uTG9hZCcsJ2Rhbmdlcm91c2x5U2V0SW5uZXJIVE1MJywnY2hpbGRyZW4nLCdvbkVycm9yJywnc3RyYXRlZ3knXTtjb25zdCBsb2FkU2NyaXB0PXByb3BzPT57Y29uc3R7c3JjLGlkLG9uTG9hZD0oKT0+e30sZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwsY2hpbGRyZW49Jycsb25FcnJvcn09cHJvcHM7Y29uc3QgY2FjaGVLZXk9aWR8fHNyYztpZihTY3JpcHRDYWNoZS5oYXMoc3JjKSl7aWYoIUxvYWRDYWNoZS5oYXMoY2FjaGVLZXkpKXtMb2FkQ2FjaGUuYWRkKGNhY2hlS2V5KTsvLyBFeGVjdXRlIG9uTG9hZCBzaW5jZSB0aGUgc2NyaXB0IGxvYWRpbmcgaGFzIGJlZ3VuXG5TY3JpcHRDYWNoZS5nZXQoc3JjKS50aGVuKG9uTG9hZCxvbkVycm9yKTt9cmV0dXJuO31jb25zdCBlbD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtjb25zdCBsb2FkUHJvbWlzZT1uZXcgUHJvbWlzZSgocmVzb2x2ZSxyZWplY3QpPT57ZWwuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsZnVuY3Rpb24oKXtyZXNvbHZlKCk7aWYob25Mb2FkKXtvbkxvYWQuY2FsbCh0aGlzKTt9fSk7ZWwuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLGZ1bmN0aW9uKCl7cmVqZWN0KCk7aWYob25FcnJvcil7b25FcnJvcigpO319KTt9KTtpZihzcmMpe1NjcmlwdENhY2hlLnNldChzcmMsbG9hZFByb21pc2UpO0xvYWRDYWNoZS5hZGQoY2FjaGVLZXkpO31pZihkYW5nZXJvdXNseVNldElubmVySFRNTCl7ZWwuaW5uZXJIVE1MPWRhbmdlcm91c2x5U2V0SW5uZXJIVE1MLl9faHRtbHx8Jyc7fWVsc2UgaWYoY2hpbGRyZW4pe2VsLnRleHRDb250ZW50PXR5cGVvZiBjaGlsZHJlbj09PSdzdHJpbmcnP2NoaWxkcmVuOkFycmF5LmlzQXJyYXkoY2hpbGRyZW4pP2NoaWxkcmVuLmpvaW4oJycpOicnO31lbHNlIGlmKHNyYyl7ZWwuc3JjPXNyYzt9Zm9yKGNvbnN0W2ssdmFsdWVdb2YgT2JqZWN0LmVudHJpZXMocHJvcHMpKXtpZih2YWx1ZT09PXVuZGVmaW5lZHx8aWdub3JlUHJvcHMuaW5jbHVkZXMoaykpe2NvbnRpbnVlO31jb25zdCBhdHRyPV9oZWFkTWFuYWdlci5ET01BdHRyaWJ1dGVOYW1lc1trXXx8ay50b0xvd2VyQ2FzZSgpO2VsLnNldEF0dHJpYnV0ZShhdHRyLHZhbHVlKTt9ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbCk7fTtmdW5jdGlvbiBoYW5kbGVDbGllbnRTY3JpcHRMb2FkKHByb3BzKXtjb25zdHtzdHJhdGVneT0nYWZ0ZXJJbnRlcmFjdGl2ZSd9PXByb3BzO2lmKHN0cmF0ZWd5PT09J2FmdGVySW50ZXJhY3RpdmUnKXtsb2FkU2NyaXB0KHByb3BzKTt9ZWxzZSBpZihzdHJhdGVneT09PSdsYXp5T25sb2FkJyl7d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCgpPT57KDAsX3JlcXVlc3RJZGxlQ2FsbGJhY2sucmVxdWVzdElkbGVDYWxsYmFjaykoKCk9PmxvYWRTY3JpcHQocHJvcHMpKTt9KTt9fWZ1bmN0aW9uIGxvYWRMYXp5U2NyaXB0KHByb3BzKXtpZihkb2N1bWVudC5yZWFkeVN0YXRlPT09J2NvbXBsZXRlJyl7KDAsX3JlcXVlc3RJZGxlQ2FsbGJhY2sucmVxdWVzdElkbGVDYWxsYmFjaykoKCk9PmxvYWRTY3JpcHQocHJvcHMpKTt9ZWxzZXt3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsKCk9PnsoMCxfcmVxdWVzdElkbGVDYWxsYmFjay5yZXF1ZXN0SWRsZUNhbGxiYWNrKSgoKT0+bG9hZFNjcmlwdChwcm9wcykpO30pO319ZnVuY3Rpb24gaW5pdFNjcmlwdExvYWRlcihzY3JpcHRMb2FkZXJJdGVtcyl7c2NyaXB0TG9hZGVySXRlbXMuZm9yRWFjaChoYW5kbGVDbGllbnRTY3JpcHRMb2FkKTt9ZnVuY3Rpb24gU2NyaXB0KHByb3BzKXtjb25zdHtzcmM9Jycsb25Mb2FkPSgpPT57fSxzdHJhdGVneT0nYWZ0ZXJJbnRlcmFjdGl2ZScsb25FcnJvcn09cHJvcHMscmVzdFByb3BzPSgwLF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlMi5kZWZhdWx0KShwcm9wcyxbXCJzcmNcIixcIm9uTG9hZFwiLFwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUxcIixcInN0cmF0ZWd5XCIsXCJvbkVycm9yXCJdKTsvLyBDb250ZXh0IGlzIGF2YWlsYWJsZSBvbmx5IGR1cmluZyBTU1JcbmNvbnN0e3VwZGF0ZVNjcmlwdHMsc2NyaXB0c309KDAsX3JlYWN0LnVzZUNvbnRleHQpKF9oZWFkTWFuYWdlckNvbnRleHQuSGVhZE1hbmFnZXJDb250ZXh0KTsoMCxfcmVhY3QudXNlRWZmZWN0KSgoKT0+e2lmKHN0cmF0ZWd5PT09J2FmdGVySW50ZXJhY3RpdmUnKXtsb2FkU2NyaXB0KHByb3BzKTt9ZWxzZSBpZihzdHJhdGVneT09PSdsYXp5T25sb2FkJyl7bG9hZExhenlTY3JpcHQocHJvcHMpO319LFtwcm9wcyxzdHJhdGVneV0pO2lmKHN0cmF0ZWd5PT09J2JlZm9yZUludGVyYWN0aXZlJyl7aWYodXBkYXRlU2NyaXB0cyl7c2NyaXB0cy5iZWZvcmVJbnRlcmFjdGl2ZT0oc2NyaXB0cy5iZWZvcmVJbnRlcmFjdGl2ZXx8W10pLmNvbmNhdChbKDAsX2V4dGVuZHMyLmRlZmF1bHQpKHtzcmMsb25Mb2FkLG9uRXJyb3J9LHJlc3RQcm9wcyldKTt1cGRhdGVTY3JpcHRzKHNjcmlwdHMpO319cmV0dXJuIG51bGw7fXZhciBfZGVmYXVsdD1TY3JpcHQ7ZXhwb3J0cy5kZWZhdWx0PV9kZWZhdWx0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c2NyaXB0LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuSHRtbD1IdG1sO2V4cG9ydHMuTWFpbj1NYWluO2V4cG9ydHMuTmV4dFNjcmlwdD1leHBvcnRzLkhlYWQ9ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX3Byb3BUeXBlcz1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpKTt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF9zZXJ2ZXI9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwic3R5bGVkLWpzeC9zZXJ2ZXJcIikpO3ZhciBfY29uc3RhbnRzPXJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvY29uc3RhbnRzXCIpO3ZhciBfZG9jdW1lbnRDb250ZXh0PXJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvZG9jdW1lbnQtY29udGV4dFwiKTt2YXIgX3V0aWxzPXJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvdXRpbHNcIik7ZXhwb3J0cy5Eb2N1bWVudENvbnRleHQ9X3V0aWxzLkRvY3VtZW50Q29udGV4dDtleHBvcnRzLkRvY3VtZW50SW5pdGlhbFByb3BzPV91dGlscy5Eb2N1bWVudEluaXRpYWxQcm9wcztleHBvcnRzLkRvY3VtZW50UHJvcHM9X3V0aWxzLkRvY3VtZW50UHJvcHM7dmFyIF9nZXRQYWdlRmlsZXM9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL3NlcnZlci9nZXQtcGFnZS1maWxlc1wiKTt2YXIgX3V0aWxzMj1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvc2VydmVyL3V0aWxzXCIpO3ZhciBfaHRtbGVzY2FwZT1yZXF1aXJlKFwiLi4vc2VydmVyL2h0bWxlc2NhcGVcIik7dmFyIF9zY3JpcHQ9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vY2xpZW50L3NjcmlwdFwiKSk7ZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCl7aWYodHlwZW9mIFdlYWtNYXAhPT1cImZ1bmN0aW9uXCIpcmV0dXJuIG51bGw7dmFyIGNhY2hlPW5ldyBXZWFrTWFwKCk7X2dldFJlcXVpcmVXaWxkY2FyZENhY2hlPWZ1bmN0aW9uKCl7cmV0dXJuIGNhY2hlO307cmV0dXJuIGNhY2hlO31mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmope2lmKG9iaiYmb2JqLl9fZXNNb2R1bGUpe3JldHVybiBvYmo7fWlmKG9iaj09PW51bGx8fHR5cGVvZiBvYmohPT1cIm9iamVjdFwiJiZ0eXBlb2Ygb2JqIT09XCJmdW5jdGlvblwiKXtyZXR1cm57ZGVmYXVsdDpvYmp9O312YXIgY2FjaGU9X2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7aWYoY2FjaGUmJmNhY2hlLmhhcyhvYmopKXtyZXR1cm4gY2FjaGUuZ2V0KG9iaik7fXZhciBuZXdPYmo9e307dmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvcj1PYmplY3QuZGVmaW5lUHJvcGVydHkmJk9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7Zm9yKHZhciBrZXkgaW4gb2JqKXtpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLGtleSkpe3ZhciBkZXNjPWhhc1Byb3BlcnR5RGVzY3JpcHRvcj9PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaixrZXkpOm51bGw7aWYoZGVzYyYmKGRlc2MuZ2V0fHxkZXNjLnNldCkpe09iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosa2V5LGRlc2MpO31lbHNle25ld09ialtrZXldPW9ialtrZXldO319fW5ld09iai5kZWZhdWx0PW9iajtpZihjYWNoZSl7Y2FjaGUuc2V0KG9iaixuZXdPYmopO31yZXR1cm4gbmV3T2JqO31mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iail7cmV0dXJuIG9iaiYmb2JqLl9fZXNNb2R1bGU/b2JqOntkZWZhdWx0Om9ian07fWZ1bmN0aW9uIGdldERvY3VtZW50RmlsZXMoYnVpbGRNYW5pZmVzdCxwYXRobmFtZSxpbkFtcE1vZGUpe2NvbnN0IHNoYXJlZEZpbGVzPSgwLF9nZXRQYWdlRmlsZXMuZ2V0UGFnZUZpbGVzKShidWlsZE1hbmlmZXN0LCcvX2FwcCcpO2NvbnN0IHBhZ2VGaWxlcz1pbkFtcE1vZGU/W106KDAsX2dldFBhZ2VGaWxlcy5nZXRQYWdlRmlsZXMpKGJ1aWxkTWFuaWZlc3QscGF0aG5hbWUpO3JldHVybntzaGFyZWRGaWxlcyxwYWdlRmlsZXMsYWxsRmlsZXM6Wy4uLm5ldyBTZXQoWy4uLnNoYXJlZEZpbGVzLC4uLnBhZ2VGaWxlc10pXX07fWZ1bmN0aW9uIGdldFBvbHlmaWxsU2NyaXB0cyhjb250ZXh0LHByb3BzKXsvLyBwb2x5ZmlsbHMuanMgaGFzIHRvIGJlIHJlbmRlcmVkIGFzIG5vbW9kdWxlIHdpdGhvdXQgYXN5bmNcbi8vIEl0IGFsc28gaGFzIHRvIGJlIHRoZSBmaXJzdCBzY3JpcHQgdG8gbG9hZFxuY29uc3R7YXNzZXRQcmVmaXgsYnVpbGRNYW5pZmVzdCxkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZyxkaXNhYmxlT3B0aW1pemVkTG9hZGluZ309Y29udGV4dDtyZXR1cm4gYnVpbGRNYW5pZmVzdC5wb2x5ZmlsbEZpbGVzLmZpbHRlcihwb2x5ZmlsbD0+cG9seWZpbGwuZW5kc1dpdGgoJy5qcycpJiYhcG9seWZpbGwuZW5kc1dpdGgoJy5tb2R1bGUuanMnKSkubWFwKHBvbHlmaWxsPT4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiLHtrZXk6cG9seWZpbGwsZGVmZXI6IWRpc2FibGVPcHRpbWl6ZWRMb2FkaW5nLG5vbmNlOnByb3BzLm5vbmNlLGNyb3NzT3JpZ2luOnByb3BzLmNyb3NzT3JpZ2lufHxwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOLG5vTW9kdWxlOnRydWUsc3JjOmAke2Fzc2V0UHJlZml4fS9fbmV4dC8ke3BvbHlmaWxsfSR7ZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmd9YH0pKTt9ZnVuY3Rpb24gZ2V0UHJlTmV4dFNjcmlwdHMoY29udGV4dCxwcm9wcyl7Y29uc3R7c2NyaXB0TG9hZGVyLGRpc2FibGVPcHRpbWl6ZWRMb2FkaW5nfT1jb250ZXh0O3JldHVybihzY3JpcHRMb2FkZXIuYmVmb3JlSW50ZXJhY3RpdmV8fFtdKS5tYXAoZmlsZT0+e2NvbnN0e3N0cmF0ZWd5LC4uLnNjcmlwdFByb3BzfT1maWxlO3JldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIsT2JqZWN0LmFzc2lnbih7fSxzY3JpcHRQcm9wcyx7ZGVmZXI6IWRpc2FibGVPcHRpbWl6ZWRMb2FkaW5nLG5vbmNlOnByb3BzLm5vbmNlLGNyb3NzT3JpZ2luOnByb3BzLmNyb3NzT3JpZ2lufHxwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOfSkpO30pO31mdW5jdGlvbiBnZXREeW5hbWljQ2h1bmtzKGNvbnRleHQscHJvcHMsZmlsZXMpe2NvbnN0e2R5bmFtaWNJbXBvcnRzLGFzc2V0UHJlZml4LGlzRGV2ZWxvcG1lbnQsZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmcsZGlzYWJsZU9wdGltaXplZExvYWRpbmd9PWNvbnRleHQ7cmV0dXJuIGR5bmFtaWNJbXBvcnRzLm1hcChmaWxlPT57aWYoIWZpbGUuZW5kc1dpdGgoJy5qcycpfHxmaWxlcy5hbGxGaWxlcy5pbmNsdWRlcyhmaWxlKSlyZXR1cm4gbnVsbDtyZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiLHthc3luYzohaXNEZXZlbG9wbWVudCYmZGlzYWJsZU9wdGltaXplZExvYWRpbmcsZGVmZXI6IWRpc2FibGVPcHRpbWl6ZWRMb2FkaW5nLGtleTpmaWxlLHNyYzpgJHthc3NldFByZWZpeH0vX25leHQvJHtlbmNvZGVVUkkoZmlsZSl9JHtkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZ31gLG5vbmNlOnByb3BzLm5vbmNlLGNyb3NzT3JpZ2luOnByb3BzLmNyb3NzT3JpZ2lufHxwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOfSk7fSk7fWZ1bmN0aW9uIGdldFNjcmlwdHMoY29udGV4dCxwcm9wcyxmaWxlcyl7dmFyIF9idWlsZE1hbmlmZXN0JGxvd1ByaTtjb25zdHthc3NldFByZWZpeCxidWlsZE1hbmlmZXN0LGlzRGV2ZWxvcG1lbnQsZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmcsZGlzYWJsZU9wdGltaXplZExvYWRpbmd9PWNvbnRleHQ7Y29uc3Qgbm9ybWFsU2NyaXB0cz1maWxlcy5hbGxGaWxlcy5maWx0ZXIoZmlsZT0+ZmlsZS5lbmRzV2l0aCgnLmpzJykpO2NvbnN0IGxvd1ByaW9yaXR5U2NyaXB0cz0oX2J1aWxkTWFuaWZlc3QkbG93UHJpPWJ1aWxkTWFuaWZlc3QubG93UHJpb3JpdHlGaWxlcyk9PW51bGw/dm9pZCAwOl9idWlsZE1hbmlmZXN0JGxvd1ByaS5maWx0ZXIoZmlsZT0+ZmlsZS5lbmRzV2l0aCgnLmpzJykpO3JldHVyblsuLi5ub3JtYWxTY3JpcHRzLC4uLmxvd1ByaW9yaXR5U2NyaXB0c10ubWFwKGZpbGU9PntyZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiLHtrZXk6ZmlsZSxzcmM6YCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7ZW5jb2RlVVJJKGZpbGUpfSR7ZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmd9YCxub25jZTpwcm9wcy5ub25jZSxhc3luYzohaXNEZXZlbG9wbWVudCYmZGlzYWJsZU9wdGltaXplZExvYWRpbmcsZGVmZXI6IWRpc2FibGVPcHRpbWl6ZWRMb2FkaW5nLGNyb3NzT3JpZ2luOnByb3BzLmNyb3NzT3JpZ2lufHxwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOfSk7fSk7fS8qKlxuICogYERvY3VtZW50YCBjb21wb25lbnQgaGFuZGxlcyB0aGUgaW5pdGlhbCBgZG9jdW1lbnRgIG1hcmt1cCBhbmQgcmVuZGVycyBvbmx5IG9uIHRoZSBzZXJ2ZXIgc2lkZS5cbiAqIENvbW1vbmx5IHVzZWQgZm9yIGltcGxlbWVudGluZyBzZXJ2ZXIgc2lkZSByZW5kZXJpbmcgZm9yIGBjc3MtaW4tanNgIGxpYnJhcmllcy5cbiAqL2NsYXNzIERvY3VtZW50IGV4dGVuZHMgX3JlYWN0LkNvbXBvbmVudHsvKipcbiAgICogYGdldEluaXRpYWxQcm9wc2AgaG9vayByZXR1cm5zIHRoZSBjb250ZXh0IG9iamVjdCB3aXRoIHRoZSBhZGRpdGlvbiBvZiBgcmVuZGVyUGFnZWAuXG4gICAqIGByZW5kZXJQYWdlYCBjYWxsYmFjayBleGVjdXRlcyBgUmVhY3RgIHJlbmRlcmluZyBsb2dpYyBzeW5jaHJvbm91c2x5IHRvIHN1cHBvcnQgc2VydmVyLXJlbmRlcmluZyB3cmFwcGVyc1xuICAgKi9zdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKGN0eCl7Y29uc3QgZW5oYW5jZUFwcD1BcHA9PntyZXR1cm4gcHJvcHM9Pi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KEFwcCxwcm9wcyk7fTtjb25zdHtodG1sLGhlYWR9PWF3YWl0IGN0eC5yZW5kZXJQYWdlKHtlbmhhbmNlQXBwfSk7Y29uc3Qgc3R5bGVzPVsuLi4oMCxfc2VydmVyLmRlZmF1bHQpKCldO3JldHVybntodG1sLGhlYWQsc3R5bGVzfTt9c3RhdGljIHJlbmRlckRvY3VtZW50KERvY3VtZW50Q29tcG9uZW50LHByb3BzKXtyZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfZG9jdW1lbnRDb250ZXh0LkRvY3VtZW50Q29udGV4dC5Qcm92aWRlcix7dmFsdWU6cHJvcHN9LC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KERvY3VtZW50Q29tcG9uZW50LHByb3BzKSk7fXJlbmRlcigpe3JldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KEh0bWwsbnVsbCwvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChIZWFkLG51bGwpLC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYm9keVwiLG51bGwsLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoTWFpbixudWxsKSwvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChOZXh0U2NyaXB0LG51bGwpKSk7fX1leHBvcnRzLmRlZmF1bHQ9RG9jdW1lbnQ7ZnVuY3Rpb24gSHRtbChwcm9wcyl7Y29uc3R7aW5BbXBNb2RlLGRvY0NvbXBvbmVudHNSZW5kZXJlZCxsb2NhbGV9PSgwLF9yZWFjdC51c2VDb250ZXh0KShfZG9jdW1lbnRDb250ZXh0LkRvY3VtZW50Q29udGV4dCk7ZG9jQ29tcG9uZW50c1JlbmRlcmVkLkh0bWw9dHJ1ZTtyZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImh0bWxcIixPYmplY3QuYXNzaWduKHt9LHByb3BzLHtsYW5nOnByb3BzLmxhbmd8fGxvY2FsZXx8dW5kZWZpbmVkLGFtcDppbkFtcE1vZGU/Jyc6dW5kZWZpbmVkLFwiZGF0YS1hbXBkZXZtb2RlXCI6aW5BbXBNb2RlJiZwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJz8nJzp1bmRlZmluZWR9KSk7fWNsYXNzIEhlYWQgZXh0ZW5kcyBfcmVhY3QuQ29tcG9uZW50e2NvbnN0cnVjdG9yKC4uLmFyZ3Mpe3N1cGVyKC4uLmFyZ3MpO3RoaXMuY29udGV4dD12b2lkIDA7fWdldENzc0xpbmtzKGZpbGVzKXtjb25zdHthc3NldFByZWZpeCxkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZyxkeW5hbWljSW1wb3J0c309dGhpcy5jb250ZXh0O2NvbnN0IGNzc0ZpbGVzPWZpbGVzLmFsbEZpbGVzLmZpbHRlcihmPT5mLmVuZHNXaXRoKCcuY3NzJykpO2NvbnN0IHNoYXJlZEZpbGVzPW5ldyBTZXQoZmlsZXMuc2hhcmVkRmlsZXMpOy8vIFVubWFuYWdlZCBmaWxlcyBhcmUgQ1NTIGZpbGVzIHRoYXQgd2lsbCBiZSBoYW5kbGVkIGRpcmVjdGx5IGJ5IHRoZVxuLy8gd2VicGFjayBydW50aW1lIChgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5gKS5cbmxldCB1bm1hbmdlZEZpbGVzPW5ldyBTZXQoW10pO2xldCBkeW5hbWljQ3NzRmlsZXM9QXJyYXkuZnJvbShuZXcgU2V0KGR5bmFtaWNJbXBvcnRzLmZpbHRlcihmaWxlPT5maWxlLmVuZHNXaXRoKCcuY3NzJykpKSk7aWYoZHluYW1pY0Nzc0ZpbGVzLmxlbmd0aCl7Y29uc3QgZXhpc3Rpbmc9bmV3IFNldChjc3NGaWxlcyk7ZHluYW1pY0Nzc0ZpbGVzPWR5bmFtaWNDc3NGaWxlcy5maWx0ZXIoZj0+IShleGlzdGluZy5oYXMoZil8fHNoYXJlZEZpbGVzLmhhcyhmKSkpO3VubWFuZ2VkRmlsZXM9bmV3IFNldChkeW5hbWljQ3NzRmlsZXMpO2Nzc0ZpbGVzLnB1c2goLi4uZHluYW1pY0Nzc0ZpbGVzKTt9bGV0IGNzc0xpbmtFbGVtZW50cz1bXTtjc3NGaWxlcy5mb3JFYWNoKGZpbGU9Pntjb25zdCBpc1NoYXJlZEZpbGU9c2hhcmVkRmlsZXMuaGFzKGZpbGUpO2lmKCFwcm9jZXNzLmVudi5fX05FWFRfT1BUSU1JWkVfQ1NTKXtjc3NMaW5rRWxlbWVudHMucHVzaCgvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImxpbmtcIix7a2V5OmAke2ZpbGV9LXByZWxvYWRgLG5vbmNlOnRoaXMucHJvcHMubm9uY2UscmVsOlwicHJlbG9hZFwiLGhyZWY6YCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7ZW5jb2RlVVJJKGZpbGUpfSR7ZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmd9YCxhczpcInN0eWxlXCIsY3Jvc3NPcmlnaW46dGhpcy5wcm9wcy5jcm9zc09yaWdpbnx8cHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTn0pKTt9Y29uc3QgaXNVbm1hbmFnZWRGaWxlPXVubWFuZ2VkRmlsZXMuaGFzKGZpbGUpO2Nzc0xpbmtFbGVtZW50cy5wdXNoKC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibGlua1wiLHtrZXk6ZmlsZSxub25jZTp0aGlzLnByb3BzLm5vbmNlLHJlbDpcInN0eWxlc2hlZXRcIixocmVmOmAke2Fzc2V0UHJlZml4fS9fbmV4dC8ke2VuY29kZVVSSShmaWxlKX0ke2Rldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nfWAsY3Jvc3NPcmlnaW46dGhpcy5wcm9wcy5jcm9zc09yaWdpbnx8cHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTixcImRhdGEtbi1nXCI6aXNVbm1hbmFnZWRGaWxlP3VuZGVmaW5lZDppc1NoYXJlZEZpbGU/Jyc6dW5kZWZpbmVkLFwiZGF0YS1uLXBcIjppc1VubWFuYWdlZEZpbGU/dW5kZWZpbmVkOmlzU2hhcmVkRmlsZT91bmRlZmluZWQ6Jyd9KSk7fSk7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0nZGV2ZWxvcG1lbnQnJiZwcm9jZXNzLmVudi5fX05FWFRfT1BUSU1JWkVfRk9OVFMpe2Nzc0xpbmtFbGVtZW50cz10aGlzLm1ha2VTdHlsZXNoZWV0SW5lcnQoY3NzTGlua0VsZW1lbnRzKTt9cmV0dXJuIGNzc0xpbmtFbGVtZW50cy5sZW5ndGg9PT0wP251bGw6Y3NzTGlua0VsZW1lbnRzO31nZXRQcmVsb2FkRHluYW1pY0NodW5rcygpe2NvbnN0e2R5bmFtaWNJbXBvcnRzLGFzc2V0UHJlZml4LGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nfT10aGlzLmNvbnRleHQ7cmV0dXJuIGR5bmFtaWNJbXBvcnRzLm1hcChmaWxlPT57aWYoIWZpbGUuZW5kc1dpdGgoJy5qcycpKXtyZXR1cm4gbnVsbDt9cmV0dXJuLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIse3JlbDpcInByZWxvYWRcIixrZXk6ZmlsZSxocmVmOmAke2Fzc2V0UHJlZml4fS9fbmV4dC8ke2VuY29kZVVSSShmaWxlKX0ke2Rldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nfWAsYXM6XCJzY3JpcHRcIixub25jZTp0aGlzLnByb3BzLm5vbmNlLGNyb3NzT3JpZ2luOnRoaXMucHJvcHMuY3Jvc3NPcmlnaW58fHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU59KTt9KS8vIEZpbHRlciBvdXQgbnVsbGVkIHNjcmlwdHNcbi5maWx0ZXIoQm9vbGVhbik7fWdldFByZWxvYWRNYWluTGlua3MoZmlsZXMpe2NvbnN0e2Fzc2V0UHJlZml4LGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nLHNjcmlwdExvYWRlcn09dGhpcy5jb250ZXh0O2NvbnN0IHByZWxvYWRGaWxlcz1maWxlcy5hbGxGaWxlcy5maWx0ZXIoZmlsZT0+e3JldHVybiBmaWxlLmVuZHNXaXRoKCcuanMnKTt9KTtyZXR1cm5bLi4uKHNjcmlwdExvYWRlci5iZWZvcmVJbnRlcmFjdGl2ZXx8W10pLm1hcChmaWxlPT4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImxpbmtcIix7a2V5OmZpbGUuc3JjLG5vbmNlOnRoaXMucHJvcHMubm9uY2UscmVsOlwicHJlbG9hZFwiLGhyZWY6ZmlsZS5zcmMsYXM6XCJzY3JpcHRcIixjcm9zc09yaWdpbjp0aGlzLnByb3BzLmNyb3NzT3JpZ2lufHxwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOfSkpLC4uLnByZWxvYWRGaWxlcy5tYXAoZmlsZT0+LyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIse2tleTpmaWxlLG5vbmNlOnRoaXMucHJvcHMubm9uY2UscmVsOlwicHJlbG9hZFwiLGhyZWY6YCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7ZW5jb2RlVVJJKGZpbGUpfSR7ZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmd9YCxhczpcInNjcmlwdFwiLGNyb3NzT3JpZ2luOnRoaXMucHJvcHMuY3Jvc3NPcmlnaW58fHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU59KSldO31nZXREeW5hbWljQ2h1bmtzKGZpbGVzKXtyZXR1cm4gZ2V0RHluYW1pY0NodW5rcyh0aGlzLmNvbnRleHQsdGhpcy5wcm9wcyxmaWxlcyk7fWdldFByZU5leHRTY3JpcHRzKCl7cmV0dXJuIGdldFByZU5leHRTY3JpcHRzKHRoaXMuY29udGV4dCx0aGlzLnByb3BzKTt9Z2V0U2NyaXB0cyhmaWxlcyl7cmV0dXJuIGdldFNjcmlwdHModGhpcy5jb250ZXh0LHRoaXMucHJvcHMsZmlsZXMpO31nZXRQb2x5ZmlsbFNjcmlwdHMoKXtyZXR1cm4gZ2V0UG9seWZpbGxTY3JpcHRzKHRoaXMuY29udGV4dCx0aGlzLnByb3BzKTt9aGFuZGxlRG9jdW1lbnRTY3JpcHRMb2FkZXJJdGVtcyhjaGlsZHJlbil7Y29uc3R7c2NyaXB0TG9hZGVyfT10aGlzLmNvbnRleHQ7Y29uc3Qgc2NyaXB0TG9hZGVySXRlbXM9W107Y29uc3QgZmlsdGVyZWRDaGlsZHJlbj1bXTtfcmVhY3QuZGVmYXVsdC5DaGlsZHJlbi5mb3JFYWNoKGNoaWxkcmVuLGNoaWxkPT57aWYoY2hpbGQudHlwZT09PV9zY3JpcHQuZGVmYXVsdCl7aWYoY2hpbGQucHJvcHMuc3RyYXRlZ3k9PT0nYmVmb3JlSW50ZXJhY3RpdmUnKXtzY3JpcHRMb2FkZXIuYmVmb3JlSW50ZXJhY3RpdmU9KHNjcmlwdExvYWRlci5iZWZvcmVJbnRlcmFjdGl2ZXx8W10pLmNvbmNhdChbey4uLmNoaWxkLnByb3BzfV0pO3JldHVybjt9ZWxzZSBpZihbJ2xhenlPbmxvYWQnLCdhZnRlckludGVyYWN0aXZlJ10uaW5jbHVkZXMoY2hpbGQucHJvcHMuc3RyYXRlZ3kpKXtzY3JpcHRMb2FkZXJJdGVtcy5wdXNoKGNoaWxkLnByb3BzKTtyZXR1cm47fX1maWx0ZXJlZENoaWxkcmVuLnB1c2goY2hpbGQpO30pO3RoaXMuY29udGV4dC5fX05FWFRfREFUQV9fLnNjcmlwdExvYWRlcj1zY3JpcHRMb2FkZXJJdGVtcztyZXR1cm4gZmlsdGVyZWRDaGlsZHJlbjt9bWFrZVN0eWxlc2hlZXRJbmVydChub2RlKXtyZXR1cm4gX3JlYWN0LmRlZmF1bHQuQ2hpbGRyZW4ubWFwKG5vZGUsYz0+e2lmKGMudHlwZT09PSdsaW5rJyYmYy5wcm9wc1snaHJlZiddJiZfY29uc3RhbnRzLk9QVElNSVpFRF9GT05UX1BST1ZJREVSUy5zb21lKCh7dXJsfSk9PmMucHJvcHNbJ2hyZWYnXS5zdGFydHNXaXRoKHVybCkpKXtjb25zdCBuZXdQcm9wcz17Li4uKGMucHJvcHN8fHt9KX07bmV3UHJvcHNbJ2RhdGEtaHJlZiddPW5ld1Byb3BzWydocmVmJ107bmV3UHJvcHNbJ2hyZWYnXT11bmRlZmluZWQ7cmV0dXJuLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNsb25lRWxlbWVudChjLG5ld1Byb3BzKTt9ZWxzZSBpZihjLnByb3BzJiZjLnByb3BzWydjaGlsZHJlbiddKXtjLnByb3BzWydjaGlsZHJlbiddPXRoaXMubWFrZVN0eWxlc2hlZXRJbmVydChjLnByb3BzWydjaGlsZHJlbiddKTt9cmV0dXJuIGM7fSk7fXJlbmRlcigpe3ZhciBfdGhpcyRwcm9wcyRub25jZSxfdGhpcyRwcm9wcyRub25jZTI7Y29uc3R7c3R5bGVzLGFtcFBhdGgsaW5BbXBNb2RlLGh5YnJpZEFtcCxjYW5vbmljYWxCYXNlLF9fTkVYVF9EQVRBX18sZGFuZ2Vyb3VzQXNQYXRoLGhlYWRUYWdzLHVuc3RhYmxlX3J1bnRpbWVKUyx1bnN0YWJsZV9Kc1ByZWxvYWQsZGlzYWJsZU9wdGltaXplZExvYWRpbmd9PXRoaXMuY29udGV4dDtjb25zdCBkaXNhYmxlUnVudGltZUpTPXVuc3RhYmxlX3J1bnRpbWVKUz09PWZhbHNlO2NvbnN0IGRpc2FibGVKc1ByZWxvYWQ9dW5zdGFibGVfSnNQcmVsb2FkPT09ZmFsc2V8fCFkaXNhYmxlT3B0aW1pemVkTG9hZGluZzt0aGlzLmNvbnRleHQuZG9jQ29tcG9uZW50c1JlbmRlcmVkLkhlYWQ9dHJ1ZTtsZXR7aGVhZH09dGhpcy5jb250ZXh0O2xldCBjc3NQcmVsb2Fkcz1bXTtsZXQgb3RoZXJIZWFkRWxlbWVudHM9W107aWYoaGVhZCl7aGVhZC5mb3JFYWNoKGM9PntpZihjJiZjLnR5cGU9PT0nbGluaycmJmMucHJvcHNbJ3JlbCddPT09J3ByZWxvYWQnJiZjLnByb3BzWydhcyddPT09J3N0eWxlJyl7Y3NzUHJlbG9hZHMucHVzaChjKTt9ZWxzZXtjJiZvdGhlckhlYWRFbGVtZW50cy5wdXNoKGMpO319KTtoZWFkPWNzc1ByZWxvYWRzLmNvbmNhdChvdGhlckhlYWRFbGVtZW50cyk7fWxldCBjaGlsZHJlbj1fcmVhY3QuZGVmYXVsdC5DaGlsZHJlbi50b0FycmF5KHRoaXMucHJvcHMuY2hpbGRyZW4pLmZpbHRlcihCb29sZWFuKTsvLyBzaG93IGEgd2FybmluZyBpZiBIZWFkIGNvbnRhaW5zIDx0aXRsZT4gKG9ubHkgaW4gZGV2ZWxvcG1lbnQpXG5pZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7Y2hpbGRyZW49X3JlYWN0LmRlZmF1bHQuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLGNoaWxkPT57dmFyIF9jaGlsZCRwcm9wcztjb25zdCBpc1JlYWN0SGVsbWV0PWNoaWxkPT1udWxsP3ZvaWQgMDooX2NoaWxkJHByb3BzPWNoaWxkLnByb3BzKT09bnVsbD92b2lkIDA6X2NoaWxkJHByb3BzWydkYXRhLXJlYWN0LWhlbG1ldCddO2lmKCFpc1JlYWN0SGVsbWV0KXt2YXIgX2NoaWxkJHByb3BzMjtpZigoY2hpbGQ9PW51bGw/dm9pZCAwOmNoaWxkLnR5cGUpPT09J3RpdGxlJyl7Y29uc29sZS53YXJuKFwiV2FybmluZzogPHRpdGxlPiBzaG91bGQgbm90IGJlIHVzZWQgaW4gX2RvY3VtZW50LmpzJ3MgPEhlYWQ+LiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9uby1kb2N1bWVudC10aXRsZVwiKTt9ZWxzZSBpZigoY2hpbGQ9PW51bGw/dm9pZCAwOmNoaWxkLnR5cGUpPT09J21ldGEnJiYoY2hpbGQ9PW51bGw/dm9pZCAwOihfY2hpbGQkcHJvcHMyPWNoaWxkLnByb3BzKT09bnVsbD92b2lkIDA6X2NoaWxkJHByb3BzMi5uYW1lKT09PSd2aWV3cG9ydCcpe2NvbnNvbGUud2FybihcIldhcm5pbmc6IHZpZXdwb3J0IG1ldGEgdGFncyBzaG91bGQgbm90IGJlIHVzZWQgaW4gX2RvY3VtZW50LmpzJ3MgPEhlYWQ+LiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9uby1kb2N1bWVudC12aWV3cG9ydC1tZXRhXCIpO319cmV0dXJuIGNoaWxkO30pO2lmKHRoaXMucHJvcHMuY3Jvc3NPcmlnaW4pY29uc29sZS53YXJuKCdXYXJuaW5nOiBgSGVhZGAgYXR0cmlidXRlIGBjcm9zc09yaWdpbmAgaXMgZGVwcmVjYXRlZC4gaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvZG9jLWNyb3Nzb3JpZ2luLWRlcHJlY2F0ZWQnKTt9aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0nZGV2ZWxvcG1lbnQnJiZwcm9jZXNzLmVudi5fX05FWFRfT1BUSU1JWkVfRk9OVFMmJiFpbkFtcE1vZGUpe2NoaWxkcmVuPXRoaXMubWFrZVN0eWxlc2hlZXRJbmVydChjaGlsZHJlbik7fWNoaWxkcmVuPXRoaXMuaGFuZGxlRG9jdW1lbnRTY3JpcHRMb2FkZXJJdGVtcyhjaGlsZHJlbik7bGV0IGhhc0FtcGh0bWxSZWw9ZmFsc2U7bGV0IGhhc0Nhbm9uaWNhbFJlbD1mYWxzZTsvLyBzaG93IHdhcm5pbmcgYW5kIHJlbW92ZSBjb25mbGljdGluZyBhbXAgaGVhZCB0YWdzXG5oZWFkPV9yZWFjdC5kZWZhdWx0LkNoaWxkcmVuLm1hcChoZWFkfHxbXSxjaGlsZD0+e2lmKCFjaGlsZClyZXR1cm4gY2hpbGQ7Y29uc3R7dHlwZSxwcm9wc309Y2hpbGQ7aWYoaW5BbXBNb2RlKXtsZXQgYmFkUHJvcD0nJztpZih0eXBlPT09J21ldGEnJiZwcm9wcy5uYW1lPT09J3ZpZXdwb3J0Jyl7YmFkUHJvcD0nbmFtZT1cInZpZXdwb3J0XCInO31lbHNlIGlmKHR5cGU9PT0nbGluaycmJnByb3BzLnJlbD09PSdjYW5vbmljYWwnKXtoYXNDYW5vbmljYWxSZWw9dHJ1ZTt9ZWxzZSBpZih0eXBlPT09J3NjcmlwdCcpey8vIG9ubHkgYmxvY2sgaWZcbi8vIDEuIGl0IGhhcyBhIHNyYyBhbmQgaXNuJ3QgcG9pbnRpbmcgdG8gYW1wcHJvamVjdCdzIENETlxuLy8gMi4gaXQgaXMgdXNpbmcgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwgd2l0aG91dCBhIHR5cGUgb3Jcbi8vIGEgdHlwZSBvZiB0ZXh0L2phdmFzY3JpcHRcbmlmKHByb3BzLnNyYyYmcHJvcHMuc3JjLmluZGV4T2YoJ2FtcHByb2plY3QnKTwtMXx8cHJvcHMuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwmJighcHJvcHMudHlwZXx8cHJvcHMudHlwZT09PSd0ZXh0L2phdmFzY3JpcHQnKSl7YmFkUHJvcD0nPHNjcmlwdCc7T2JqZWN0LmtleXMocHJvcHMpLmZvckVhY2gocHJvcD0+e2JhZFByb3ArPWAgJHtwcm9wfT1cIiR7cHJvcHNbcHJvcF19XCJgO30pO2JhZFByb3ArPScvPic7fX1pZihiYWRQcm9wKXtjb25zb2xlLndhcm4oYEZvdW5kIGNvbmZsaWN0aW5nIGFtcCB0YWcgXCIke2NoaWxkLnR5cGV9XCIgd2l0aCBjb25mbGljdGluZyBwcm9wICR7YmFkUHJvcH0gaW4gJHtfX05FWFRfREFUQV9fLnBhZ2V9LiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9jb25mbGljdGluZy1hbXAtdGFnYCk7cmV0dXJuIG51bGw7fX1lbHNley8vIG5vbi1hbXAgbW9kZVxuaWYodHlwZT09PSdsaW5rJyYmcHJvcHMucmVsPT09J2FtcGh0bWwnKXtoYXNBbXBodG1sUmVsPXRydWU7fX1yZXR1cm4gY2hpbGQ7fSk7Ly8gdHJ5IHRvIHBhcnNlIHN0eWxlcyBmcm9tIGZyYWdtZW50IGZvciBiYWNrd2FyZHMgY29tcGF0XG5jb25zdCBjdXJTdHlsZXM9QXJyYXkuaXNBcnJheShzdHlsZXMpP3N0eWxlczpbXTtpZihpbkFtcE1vZGUmJnN0eWxlcyYmLy8gQHRzLWlnbm9yZSBQcm9wZXJ0eSAncHJvcHMnIGRvZXMgbm90IGV4aXN0IG9uIHR5cGUgUmVhY3RFbGVtZW50XG5zdHlsZXMucHJvcHMmJi8vIEB0cy1pZ25vcmUgUHJvcGVydHkgJ3Byb3BzJyBkb2VzIG5vdCBleGlzdCBvbiB0eXBlIFJlYWN0RWxlbWVudFxuQXJyYXkuaXNBcnJheShzdHlsZXMucHJvcHMuY2hpbGRyZW4pKXtjb25zdCBoYXNTdHlsZXM9ZWw9Pnt2YXIgX2VsJHByb3BzLF9lbCRwcm9wcyRkYW5nZXJvdXNseTtyZXR1cm4gZWw9PW51bGw/dm9pZCAwOihfZWwkcHJvcHM9ZWwucHJvcHMpPT1udWxsP3ZvaWQgMDooX2VsJHByb3BzJGRhbmdlcm91c2x5PV9lbCRwcm9wcy5kYW5nZXJvdXNseVNldElubmVySFRNTCk9PW51bGw/dm9pZCAwOl9lbCRwcm9wcyRkYW5nZXJvdXNseS5fX2h0bWw7fTsvLyBAdHMtaWdub3JlIFByb3BlcnR5ICdwcm9wcycgZG9lcyBub3QgZXhpc3Qgb24gdHlwZSBSZWFjdEVsZW1lbnRcbnN0eWxlcy5wcm9wcy5jaGlsZHJlbi5mb3JFYWNoKGNoaWxkPT57aWYoQXJyYXkuaXNBcnJheShjaGlsZCkpe2NoaWxkLmZvckVhY2goZWw9Pmhhc1N0eWxlcyhlbCkmJmN1clN0eWxlcy5wdXNoKGVsKSk7fWVsc2UgaWYoaGFzU3R5bGVzKGNoaWxkKSl7Y3VyU3R5bGVzLnB1c2goY2hpbGQpO319KTt9Y29uc3QgZmlsZXM9Z2V0RG9jdW1lbnRGaWxlcyh0aGlzLmNvbnRleHQuYnVpbGRNYW5pZmVzdCx0aGlzLmNvbnRleHQuX19ORVhUX0RBVEFfXy5wYWdlLGluQW1wTW9kZSk7cmV0dXJuLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJoZWFkXCIsdGhpcy5wcm9wcyx0aGlzLmNvbnRleHQuaXNEZXZlbG9wbWVudCYmLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX3JlYWN0LmRlZmF1bHQuRnJhZ21lbnQsbnVsbCwvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIse1wiZGF0YS1uZXh0LWhpZGUtZm91Y1wiOnRydWUsXCJkYXRhLWFtcGRldm1vZGVcIjppbkFtcE1vZGU/J3RydWUnOnVuZGVmaW5lZCxkYW5nZXJvdXNseVNldElubmVySFRNTDp7X19odG1sOmBib2R5e2Rpc3BsYXk6bm9uZX1gfX0pLC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibm9zY3JpcHRcIix7XCJkYXRhLW5leHQtaGlkZS1mb3VjXCI6dHJ1ZSxcImRhdGEtYW1wZGV2bW9kZVwiOmluQW1wTW9kZT8ndHJ1ZSc6dW5kZWZpbmVkfSwvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIse2Rhbmdlcm91c2x5U2V0SW5uZXJIVE1MOntfX2h0bWw6YGJvZHl7ZGlzcGxheTpibG9ja31gfX0pKSksY2hpbGRyZW4scHJvY2Vzcy5lbnYuX19ORVhUX09QVElNSVpFX0ZPTlRTJiYvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcIm1ldGFcIix7bmFtZTpcIm5leHQtZm9udC1wcmVjb25uZWN0XCJ9KSxoZWFkLC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLHtuYW1lOlwibmV4dC1oZWFkLWNvdW50XCIsY29udGVudDpfcmVhY3QuZGVmYXVsdC5DaGlsZHJlbi5jb3VudChoZWFkfHxbXSkudG9TdHJpbmcoKX0pLGluQW1wTW9kZSYmLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX3JlYWN0LmRlZmF1bHQuRnJhZ21lbnQsbnVsbCwvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcIm1ldGFcIix7bmFtZTpcInZpZXdwb3J0XCIsY29udGVudDpcIndpZHRoPWRldmljZS13aWR0aCxtaW5pbXVtLXNjYWxlPTEsaW5pdGlhbC1zY2FsZT0xXCJ9KSwhaGFzQ2Fub25pY2FsUmVsJiYvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImxpbmtcIix7cmVsOlwiY2Fub25pY2FsXCIsaHJlZjpjYW5vbmljYWxCYXNlKygwLF91dGlsczIuY2xlYW5BbXBQYXRoKShkYW5nZXJvdXNBc1BhdGgpfSksLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIse3JlbDpcInByZWxvYWRcIixhczpcInNjcmlwdFwiLGhyZWY6XCJodHRwczovL2Nkbi5hbXBwcm9qZWN0Lm9yZy92MC5qc1wifSksc3R5bGVzJiYvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIse1wiYW1wLWN1c3RvbVwiOlwiXCIsZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6e19faHRtbDpjdXJTdHlsZXMubWFwKHN0eWxlPT5zdHlsZS5wcm9wcy5kYW5nZXJvdXNseVNldElubmVySFRNTC5fX2h0bWwpLmpvaW4oJycpLnJlcGxhY2UoL1xcL1xcKiMgc291cmNlTWFwcGluZ1VSTD0uKlxcKlxcLy9nLCcnKS5yZXBsYWNlKC9cXC9cXCpAIHNvdXJjZVVSTD0uKj9cXCpcXC8vZywnJyl9fSksLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiLHtcImFtcC1ib2lsZXJwbGF0ZVwiOlwiXCIsZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6e19faHRtbDpgYm9keXstd2Via2l0LWFuaW1hdGlvbjotYW1wLXN0YXJ0IDhzIHN0ZXBzKDEsZW5kKSAwcyAxIG5vcm1hbCBib3RoOy1tb3otYW5pbWF0aW9uOi1hbXAtc3RhcnQgOHMgc3RlcHMoMSxlbmQpIDBzIDEgbm9ybWFsIGJvdGg7LW1zLWFuaW1hdGlvbjotYW1wLXN0YXJ0IDhzIHN0ZXBzKDEsZW5kKSAwcyAxIG5vcm1hbCBib3RoO2FuaW1hdGlvbjotYW1wLXN0YXJ0IDhzIHN0ZXBzKDEsZW5kKSAwcyAxIG5vcm1hbCBib3RofUAtd2Via2l0LWtleWZyYW1lcyAtYW1wLXN0YXJ0e2Zyb217dmlzaWJpbGl0eTpoaWRkZW59dG97dmlzaWJpbGl0eTp2aXNpYmxlfX1ALW1vei1rZXlmcmFtZXMgLWFtcC1zdGFydHtmcm9te3Zpc2liaWxpdHk6aGlkZGVufXRve3Zpc2liaWxpdHk6dmlzaWJsZX19QC1tcy1rZXlmcmFtZXMgLWFtcC1zdGFydHtmcm9te3Zpc2liaWxpdHk6aGlkZGVufXRve3Zpc2liaWxpdHk6dmlzaWJsZX19QC1vLWtleWZyYW1lcyAtYW1wLXN0YXJ0e2Zyb217dmlzaWJpbGl0eTpoaWRkZW59dG97dmlzaWJpbGl0eTp2aXNpYmxlfX1Aa2V5ZnJhbWVzIC1hbXAtc3RhcnR7ZnJvbXt2aXNpYmlsaXR5OmhpZGRlbn10b3t2aXNpYmlsaXR5OnZpc2libGV9fWB9fSksLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJub3NjcmlwdFwiLG51bGwsLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiLHtcImFtcC1ib2lsZXJwbGF0ZVwiOlwiXCIsZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6e19faHRtbDpgYm9keXstd2Via2l0LWFuaW1hdGlvbjpub25lOy1tb3otYW5pbWF0aW9uOm5vbmU7LW1zLWFuaW1hdGlvbjpub25lO2FuaW1hdGlvbjpub25lfWB9fSkpLC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIse2FzeW5jOnRydWUsc3JjOlwiaHR0cHM6Ly9jZG4uYW1wcHJvamVjdC5vcmcvdjAuanNcIn0pKSwhaW5BbXBNb2RlJiYvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfcmVhY3QuZGVmYXVsdC5GcmFnbWVudCxudWxsLCFoYXNBbXBodG1sUmVsJiZoeWJyaWRBbXAmJi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibGlua1wiLHtyZWw6XCJhbXBodG1sXCIsaHJlZjpjYW5vbmljYWxCYXNlK2dldEFtcFBhdGgoYW1wUGF0aCxkYW5nZXJvdXNBc1BhdGgpfSksIXByb2Nlc3MuZW52Ll9fTkVYVF9PUFRJTUlaRV9DU1MmJnRoaXMuZ2V0Q3NzTGlua3MoZmlsZXMpLCFwcm9jZXNzLmVudi5fX05FWFRfT1BUSU1JWkVfQ1NTJiYvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcIm5vc2NyaXB0XCIse1wiZGF0YS1uLWNzc1wiOihfdGhpcyRwcm9wcyRub25jZT10aGlzLnByb3BzLm5vbmNlKSE9bnVsbD9fdGhpcyRwcm9wcyRub25jZTonJ30pLHByb2Nlc3MuZW52Ll9fTkVYVF9PUFRJTUlaRV9JTUFHRVMmJi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLHtuYW1lOlwibmV4dC1pbWFnZS1wcmVsb2FkXCJ9KSwhZGlzYWJsZVJ1bnRpbWVKUyYmIWRpc2FibGVKc1ByZWxvYWQmJnRoaXMuZ2V0UHJlbG9hZER5bmFtaWNDaHVua3MoKSwhZGlzYWJsZVJ1bnRpbWVKUyYmIWRpc2FibGVKc1ByZWxvYWQmJnRoaXMuZ2V0UHJlbG9hZE1haW5MaW5rcyhmaWxlcyksIWRpc2FibGVPcHRpbWl6ZWRMb2FkaW5nJiYhZGlzYWJsZVJ1bnRpbWVKUyYmdGhpcy5nZXRQb2x5ZmlsbFNjcmlwdHMoKSwhZGlzYWJsZU9wdGltaXplZExvYWRpbmcmJiFkaXNhYmxlUnVudGltZUpTJiZ0aGlzLmdldFByZU5leHRTY3JpcHRzKCksIWRpc2FibGVPcHRpbWl6ZWRMb2FkaW5nJiYhZGlzYWJsZVJ1bnRpbWVKUyYmdGhpcy5nZXREeW5hbWljQ2h1bmtzKGZpbGVzKSwhZGlzYWJsZU9wdGltaXplZExvYWRpbmcmJiFkaXNhYmxlUnVudGltZUpTJiZ0aGlzLmdldFNjcmlwdHMoZmlsZXMpLHByb2Nlc3MuZW52Ll9fTkVYVF9PUFRJTUlaRV9DU1MmJnRoaXMuZ2V0Q3NzTGlua3MoZmlsZXMpLHByb2Nlc3MuZW52Ll9fTkVYVF9PUFRJTUlaRV9DU1MmJi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibm9zY3JpcHRcIix7XCJkYXRhLW4tY3NzXCI6KF90aGlzJHByb3BzJG5vbmNlMj10aGlzLnByb3BzLm5vbmNlKSE9bnVsbD9fdGhpcyRwcm9wcyRub25jZTI6Jyd9KSx0aGlzLmNvbnRleHQuaXNEZXZlbG9wbWVudCYmLyojX19QVVJFX18qLyAvLyB0aGlzIGVsZW1lbnQgaXMgdXNlZCB0byBtb3VudCBkZXZlbG9wbWVudCBzdHlsZXMgc28gdGhlXG4vLyBvcmRlcmluZyBtYXRjaGVzIHByb2R1Y3Rpb25cbi8vIChieSBkZWZhdWx0LCBzdHlsZS1sb2FkZXIgaW5qZWN0cyBhdCB0aGUgYm90dG9tIG9mIDxoZWFkIC8+KVxuX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcIm5vc2NyaXB0XCIse2lkOlwiX19uZXh0X2Nzc19fRE9fTk9UX1VTRV9fXCJ9KSxzdHlsZXN8fG51bGwpLC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9yZWFjdC5kZWZhdWx0LkZyYWdtZW50LHt9LC4uLihoZWFkVGFnc3x8W10pKSk7fX1leHBvcnRzLkhlYWQ9SGVhZDtIZWFkLmNvbnRleHRUeXBlPV9kb2N1bWVudENvbnRleHQuRG9jdW1lbnRDb250ZXh0O0hlYWQucHJvcFR5cGVzPXtub25jZTpfcHJvcFR5cGVzLmRlZmF1bHQuc3RyaW5nLGNyb3NzT3JpZ2luOl9wcm9wVHlwZXMuZGVmYXVsdC5zdHJpbmd9O2Z1bmN0aW9uIE1haW4oKXtjb25zdHtpbkFtcE1vZGUsaHRtbCxkb2NDb21wb25lbnRzUmVuZGVyZWR9PSgwLF9yZWFjdC51c2VDb250ZXh0KShfZG9jdW1lbnRDb250ZXh0LkRvY3VtZW50Q29udGV4dCk7ZG9jQ29tcG9uZW50c1JlbmRlcmVkLk1haW49dHJ1ZTtpZihpbkFtcE1vZGUpcmV0dXJuLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX3JlYWN0LmRlZmF1bHQuRnJhZ21lbnQsbnVsbCxfY29uc3RhbnRzLkFNUF9SRU5ERVJfVEFSR0VUKTtyZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLHtpZDpcIl9fbmV4dFwiLGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MOntfX2h0bWw6aHRtbH19KTt9Y2xhc3MgTmV4dFNjcmlwdCBleHRlbmRzIF9yZWFjdC5Db21wb25lbnR7Y29uc3RydWN0b3IoLi4uYXJncyl7c3VwZXIoLi4uYXJncyk7dGhpcy5jb250ZXh0PXZvaWQgMDt9Z2V0RHluYW1pY0NodW5rcyhmaWxlcyl7cmV0dXJuIGdldER5bmFtaWNDaHVua3ModGhpcy5jb250ZXh0LHRoaXMucHJvcHMsZmlsZXMpO31nZXRQcmVOZXh0U2NyaXB0cygpe3JldHVybiBnZXRQcmVOZXh0U2NyaXB0cyh0aGlzLmNvbnRleHQsdGhpcy5wcm9wcyk7fWdldFNjcmlwdHMoZmlsZXMpe3JldHVybiBnZXRTY3JpcHRzKHRoaXMuY29udGV4dCx0aGlzLnByb3BzLGZpbGVzKTt9Z2V0UG9seWZpbGxTY3JpcHRzKCl7cmV0dXJuIGdldFBvbHlmaWxsU2NyaXB0cyh0aGlzLmNvbnRleHQsdGhpcy5wcm9wcyk7fXN0YXRpYyBnZXRJbmxpbmVTY3JpcHRTb3VyY2UoZG9jdW1lbnRQcm9wcyl7Y29uc3R7X19ORVhUX0RBVEFfX309ZG9jdW1lbnRQcm9wczt0cnl7Y29uc3QgZGF0YT1KU09OLnN0cmluZ2lmeShfX05FWFRfREFUQV9fKTtyZXR1cm4oMCxfaHRtbGVzY2FwZS5odG1sRXNjYXBlSnNvblN0cmluZykoZGF0YSk7fWNhdGNoKGVycil7aWYoZXJyLm1lc3NhZ2UuaW5kZXhPZignY2lyY3VsYXIgc3RydWN0dXJlJykpe3Rocm93IG5ldyBFcnJvcihgQ2lyY3VsYXIgc3RydWN0dXJlIGluIFwiZ2V0SW5pdGlhbFByb3BzXCIgcmVzdWx0IG9mIHBhZ2UgXCIke19fTkVYVF9EQVRBX18ucGFnZX1cIi4gaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvY2lyY3VsYXItc3RydWN0dXJlYCk7fXRocm93IGVycjt9fXJlbmRlcigpe2NvbnN0e2Fzc2V0UHJlZml4LGluQW1wTW9kZSxidWlsZE1hbmlmZXN0LHVuc3RhYmxlX3J1bnRpbWVKUyxkb2NDb21wb25lbnRzUmVuZGVyZWQsZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmcsZGlzYWJsZU9wdGltaXplZExvYWRpbmd9PXRoaXMuY29udGV4dDtjb25zdCBkaXNhYmxlUnVudGltZUpTPXVuc3RhYmxlX3J1bnRpbWVKUz09PWZhbHNlO2RvY0NvbXBvbmVudHNSZW5kZXJlZC5OZXh0U2NyaXB0PXRydWU7aWYoaW5BbXBNb2RlKXtpZihwcm9jZXNzLmVudi5OT0RFX0VOVj09PSdwcm9kdWN0aW9uJyl7cmV0dXJuIG51bGw7fWNvbnN0IGFtcERldkZpbGVzPVsuLi5idWlsZE1hbmlmZXN0LmRldkZpbGVzLC4uLmJ1aWxkTWFuaWZlc3QucG9seWZpbGxGaWxlcywuLi5idWlsZE1hbmlmZXN0LmFtcERldkZpbGVzXTtyZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfcmVhY3QuZGVmYXVsdC5GcmFnbWVudCxudWxsLGRpc2FibGVSdW50aW1lSlM/bnVsbDovKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiLHtpZDpcIl9fTkVYVF9EQVRBX19cIix0eXBlOlwiYXBwbGljYXRpb24vanNvblwiLG5vbmNlOnRoaXMucHJvcHMubm9uY2UsY3Jvc3NPcmlnaW46dGhpcy5wcm9wcy5jcm9zc09yaWdpbnx8cHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTixkYW5nZXJvdXNseVNldElubmVySFRNTDp7X19odG1sOk5leHRTY3JpcHQuZ2V0SW5saW5lU2NyaXB0U291cmNlKHRoaXMuY29udGV4dCl9LFwiZGF0YS1hbXBkZXZtb2RlXCI6dHJ1ZX0pLGFtcERldkZpbGVzLm1hcChmaWxlPT4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiLHtrZXk6ZmlsZSxzcmM6YCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7ZmlsZX0ke2Rldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nfWAsbm9uY2U6dGhpcy5wcm9wcy5ub25jZSxjcm9zc09yaWdpbjp0aGlzLnByb3BzLmNyb3NzT3JpZ2lufHxwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOLFwiZGF0YS1hbXBkZXZtb2RlXCI6dHJ1ZX0pKSk7fWlmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtpZih0aGlzLnByb3BzLmNyb3NzT3JpZ2luKWNvbnNvbGUud2FybignV2FybmluZzogYE5leHRTY3JpcHRgIGF0dHJpYnV0ZSBgY3Jvc3NPcmlnaW5gIGlzIGRlcHJlY2F0ZWQuIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2RvYy1jcm9zc29yaWdpbi1kZXByZWNhdGVkJyk7fWNvbnN0IGZpbGVzPWdldERvY3VtZW50RmlsZXModGhpcy5jb250ZXh0LmJ1aWxkTWFuaWZlc3QsdGhpcy5jb250ZXh0Ll9fTkVYVF9EQVRBX18ucGFnZSxpbkFtcE1vZGUpO3JldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9yZWFjdC5kZWZhdWx0LkZyYWdtZW50LG51bGwsIWRpc2FibGVSdW50aW1lSlMmJmJ1aWxkTWFuaWZlc3QuZGV2RmlsZXM/YnVpbGRNYW5pZmVzdC5kZXZGaWxlcy5tYXAoZmlsZT0+LyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIix7a2V5OmZpbGUsc3JjOmAke2Fzc2V0UHJlZml4fS9fbmV4dC8ke2VuY29kZVVSSShmaWxlKX0ke2Rldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nfWAsbm9uY2U6dGhpcy5wcm9wcy5ub25jZSxjcm9zc09yaWdpbjp0aGlzLnByb3BzLmNyb3NzT3JpZ2lufHxwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOfSkpOm51bGwsZGlzYWJsZVJ1bnRpbWVKUz9udWxsOi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIse2lkOlwiX19ORVhUX0RBVEFfX1wiLHR5cGU6XCJhcHBsaWNhdGlvbi9qc29uXCIsbm9uY2U6dGhpcy5wcm9wcy5ub25jZSxjcm9zc09yaWdpbjp0aGlzLnByb3BzLmNyb3NzT3JpZ2lufHxwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOLGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MOntfX2h0bWw6TmV4dFNjcmlwdC5nZXRJbmxpbmVTY3JpcHRTb3VyY2UodGhpcy5jb250ZXh0KX19KSxkaXNhYmxlT3B0aW1pemVkTG9hZGluZyYmIWRpc2FibGVSdW50aW1lSlMmJnRoaXMuZ2V0UG9seWZpbGxTY3JpcHRzKCksZGlzYWJsZU9wdGltaXplZExvYWRpbmcmJiFkaXNhYmxlUnVudGltZUpTJiZ0aGlzLmdldFByZU5leHRTY3JpcHRzKCksZGlzYWJsZU9wdGltaXplZExvYWRpbmcmJiFkaXNhYmxlUnVudGltZUpTJiZ0aGlzLmdldER5bmFtaWNDaHVua3MoZmlsZXMpLGRpc2FibGVPcHRpbWl6ZWRMb2FkaW5nJiYhZGlzYWJsZVJ1bnRpbWVKUyYmdGhpcy5nZXRTY3JpcHRzKGZpbGVzKSk7fX1leHBvcnRzLk5leHRTY3JpcHQ9TmV4dFNjcmlwdDtOZXh0U2NyaXB0LmNvbnRleHRUeXBlPV9kb2N1bWVudENvbnRleHQuRG9jdW1lbnRDb250ZXh0O05leHRTY3JpcHQucHJvcFR5cGVzPXtub25jZTpfcHJvcFR5cGVzLmRlZmF1bHQuc3RyaW5nLGNyb3NzT3JpZ2luOl9wcm9wVHlwZXMuZGVmYXVsdC5zdHJpbmd9O05leHRTY3JpcHQuc2FmYXJpTm9tb2R1bGVGaXg9JyFmdW5jdGlvbigpe3ZhciBlPWRvY3VtZW50LHQ9ZS5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO2lmKCEoXCJub01vZHVsZVwiaW4gdCkmJlwib25iZWZvcmVsb2FkXCJpbiB0KXt2YXIgbj0hMTtlLmFkZEV2ZW50TGlzdGVuZXIoXCJiZWZvcmVsb2FkXCIsZnVuY3Rpb24oZSl7aWYoZS50YXJnZXQ9PT10KW49ITA7ZWxzZSBpZighZS50YXJnZXQuaGFzQXR0cmlidXRlKFwibm9tb2R1bGVcIil8fCFuKXJldHVybjtlLnByZXZlbnREZWZhdWx0KCl9LCEwKSx0LnR5cGU9XCJtb2R1bGVcIix0LnNyYz1cIi5cIixlLmhlYWQuYXBwZW5kQ2hpbGQodCksdC5yZW1vdmUoKX19KCk7JztmdW5jdGlvbiBnZXRBbXBQYXRoKGFtcFBhdGgsYXNQYXRoKXtyZXR1cm4gYW1wUGF0aHx8YCR7YXNQYXRofSR7YXNQYXRoLmluY2x1ZGVzKCc/Jyk/JyYnOic/J31hbXA9MWA7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9X2RvY3VtZW50LmpzLm1hcCIsImltcG9ydCBEb2N1bWVudCwgeyBIdG1sLCBNYWluLCBIZWFkLCBOZXh0U2NyaXB0IH0gZnJvbSBcIm5leHQvZG9jdW1lbnRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE15RG9jdW1lbnQgZXh0ZW5kcyBEb2N1bWVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPEh0bWwgbGFuZz1cImtvXCI+XHJcbiAgICAgICAgPEhlYWQgLz5cclxuICAgICAgICA8Ym9keT5cclxuICAgICAgICAgIDxNYWluIC8+XHJcbiAgICAgICAgICA8TmV4dFNjcmlwdCAvPlxyXG4gICAgICAgIDwvYm9keT5cclxuICAgICAgPC9IdG1sPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5odG1sRXNjYXBlSnNvblN0cmluZz1odG1sRXNjYXBlSnNvblN0cmluZzsvLyBUaGlzIHV0aWxpdHkgaXMgYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL3plcnRvc2gvaHRtbGVzY2FwZVxuLy8gTGljZW5zZTogaHR0cHM6Ly9naXRodWIuY29tL3plcnRvc2gvaHRtbGVzY2FwZS9ibG9iLzA1MjdjYTcxNTZhNTI0ZDI1NjEwMWJiMzEwYTlmOTcwZjYzMDc4YWQvTElDRU5TRVxuY29uc3QgRVNDQVBFX0xPT0tVUD17JyYnOidcXFxcdTAwMjYnLCc+JzonXFxcXHUwMDNlJywnPCc6J1xcXFx1MDAzYycsJ1xcdTIwMjgnOidcXFxcdTIwMjgnLCdcXHUyMDI5JzonXFxcXHUyMDI5J307Y29uc3QgRVNDQVBFX1JFR0VYPS9bJj48XFx1MjAyOFxcdTIwMjldL2c7ZnVuY3Rpb24gaHRtbEVzY2FwZUpzb25TdHJpbmcoc3RyKXtyZXR1cm4gc3RyLnJlcGxhY2UoRVNDQVBFX1JFR0VYLG1hdGNoPT5FU0NBUEVfTE9PS1VQW21hdGNoXSk7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aHRtbGVzY2FwZS5qcy5tYXAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9wYWdlcy9fZG9jdW1lbnQnKVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG4vKlxuQmFzZWQgb24gR2xhbW9yJ3Mgc2hlZXRcbmh0dHBzOi8vZ2l0aHViLmNvbS90aHJlZXBvaW50b25lL2dsYW1vci9ibG9iLzY2N2I0ODBkMzFiMzcyMWE5MDUwMjFiMjZlMTI5MGNlOTJjYTI4Nzkvc3JjL3NoZWV0LmpzXG4qL1xudmFyIGlzUHJvZCA9IHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJyAmJiBwcm9jZXNzLmVudiAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nO1xuXG52YXIgaXNTdHJpbmcgPSBmdW5jdGlvbiBpc1N0cmluZyhvKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykgPT09ICdbb2JqZWN0IFN0cmluZ10nO1xufTtcblxudmFyIFN0eWxlU2hlZXQgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBTdHlsZVNoZWV0KF90ZW1wKSB7XG4gICAgdmFyIF9yZWYgPSBfdGVtcCA9PT0gdm9pZCAwID8ge30gOiBfdGVtcCxcbiAgICAgICAgX3JlZiRuYW1lID0gX3JlZi5uYW1lLFxuICAgICAgICBuYW1lID0gX3JlZiRuYW1lID09PSB2b2lkIDAgPyAnc3R5bGVzaGVldCcgOiBfcmVmJG5hbWUsXG4gICAgICAgIF9yZWYkb3B0aW1pemVGb3JTcGVlZCA9IF9yZWYub3B0aW1pemVGb3JTcGVlZCxcbiAgICAgICAgb3B0aW1pemVGb3JTcGVlZCA9IF9yZWYkb3B0aW1pemVGb3JTcGVlZCA9PT0gdm9pZCAwID8gaXNQcm9kIDogX3JlZiRvcHRpbWl6ZUZvclNwZWVkLFxuICAgICAgICBfcmVmJGlzQnJvd3NlciA9IF9yZWYuaXNCcm93c2VyLFxuICAgICAgICBpc0Jyb3dzZXIgPSBfcmVmJGlzQnJvd3NlciA9PT0gdm9pZCAwID8gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgOiBfcmVmJGlzQnJvd3NlcjtcblxuICAgIGludmFyaWFudChpc1N0cmluZyhuYW1lKSwgJ2BuYW1lYCBtdXN0IGJlIGEgc3RyaW5nJyk7XG4gICAgdGhpcy5fbmFtZSA9IG5hbWU7XG4gICAgdGhpcy5fZGVsZXRlZFJ1bGVQbGFjZWhvbGRlciA9IFwiI1wiICsgbmFtZSArIFwiLWRlbGV0ZWQtcnVsZV9fX197fVwiO1xuICAgIGludmFyaWFudCh0eXBlb2Ygb3B0aW1pemVGb3JTcGVlZCA9PT0gJ2Jvb2xlYW4nLCAnYG9wdGltaXplRm9yU3BlZWRgIG11c3QgYmUgYSBib29sZWFuJyk7XG4gICAgdGhpcy5fb3B0aW1pemVGb3JTcGVlZCA9IG9wdGltaXplRm9yU3BlZWQ7XG4gICAgdGhpcy5faXNCcm93c2VyID0gaXNCcm93c2VyO1xuICAgIHRoaXMuX3NlcnZlclNoZWV0ID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuX3RhZ3MgPSBbXTtcbiAgICB0aGlzLl9pbmplY3RlZCA9IGZhbHNlO1xuICAgIHRoaXMuX3J1bGVzQ291bnQgPSAwO1xuICAgIHZhciBub2RlID0gdGhpcy5faXNCcm93c2VyICYmIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21ldGFbcHJvcGVydHk9XCJjc3Atbm9uY2VcIl0nKTtcbiAgICB0aGlzLl9ub25jZSA9IG5vZGUgPyBub2RlLmdldEF0dHJpYnV0ZSgnY29udGVudCcpIDogbnVsbDtcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBTdHlsZVNoZWV0LnByb3RvdHlwZTtcblxuICBfcHJvdG8uc2V0T3B0aW1pemVGb3JTcGVlZCA9IGZ1bmN0aW9uIHNldE9wdGltaXplRm9yU3BlZWQoYm9vbCkge1xuICAgIGludmFyaWFudCh0eXBlb2YgYm9vbCA9PT0gJ2Jvb2xlYW4nLCAnYHNldE9wdGltaXplRm9yU3BlZWRgIGFjY2VwdHMgYSBib29sZWFuJyk7XG4gICAgaW52YXJpYW50KHRoaXMuX3J1bGVzQ291bnQgPT09IDAsICdvcHRpbWl6ZUZvclNwZWVkIGNhbm5vdCBiZSB3aGVuIHJ1bGVzIGhhdmUgYWxyZWFkeSBiZWVuIGluc2VydGVkJyk7XG4gICAgdGhpcy5mbHVzaCgpO1xuICAgIHRoaXMuX29wdGltaXplRm9yU3BlZWQgPSBib29sO1xuICAgIHRoaXMuaW5qZWN0KCk7XG4gIH07XG5cbiAgX3Byb3RvLmlzT3B0aW1pemVGb3JTcGVlZCA9IGZ1bmN0aW9uIGlzT3B0aW1pemVGb3JTcGVlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fb3B0aW1pemVGb3JTcGVlZDtcbiAgfTtcblxuICBfcHJvdG8uaW5qZWN0ID0gZnVuY3Rpb24gaW5qZWN0KCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICBpbnZhcmlhbnQoIXRoaXMuX2luamVjdGVkLCAnc2hlZXQgYWxyZWFkeSBpbmplY3RlZCcpO1xuICAgIHRoaXMuX2luamVjdGVkID0gdHJ1ZTtcblxuICAgIGlmICh0aGlzLl9pc0Jyb3dzZXIgJiYgdGhpcy5fb3B0aW1pemVGb3JTcGVlZCkge1xuICAgICAgdGhpcy5fdGFnc1swXSA9IHRoaXMubWFrZVN0eWxlVGFnKHRoaXMuX25hbWUpO1xuICAgICAgdGhpcy5fb3B0aW1pemVGb3JTcGVlZCA9ICdpbnNlcnRSdWxlJyBpbiB0aGlzLmdldFNoZWV0KCk7XG5cbiAgICAgIGlmICghdGhpcy5fb3B0aW1pemVGb3JTcGVlZCkge1xuICAgICAgICBpZiAoIWlzUHJvZCkge1xuICAgICAgICAgIGNvbnNvbGUud2FybignU3R5bGVTaGVldDogb3B0aW1pemVGb3JTcGVlZCBtb2RlIG5vdCBzdXBwb3J0ZWQgZmFsbGluZyBiYWNrIHRvIHN0YW5kYXJkIG1vZGUuJyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmZsdXNoKCk7XG4gICAgICAgIHRoaXMuX2luamVjdGVkID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX3NlcnZlclNoZWV0ID0ge1xuICAgICAgY3NzUnVsZXM6IFtdLFxuICAgICAgaW5zZXJ0UnVsZTogZnVuY3Rpb24gaW5zZXJ0UnVsZShydWxlLCBpbmRleCkge1xuICAgICAgICBpZiAodHlwZW9mIGluZGV4ID09PSAnbnVtYmVyJykge1xuICAgICAgICAgIF90aGlzLl9zZXJ2ZXJTaGVldC5jc3NSdWxlc1tpbmRleF0gPSB7XG4gICAgICAgICAgICBjc3NUZXh0OiBydWxlXG4gICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBfdGhpcy5fc2VydmVyU2hlZXQuY3NzUnVsZXMucHVzaCh7XG4gICAgICAgICAgICBjc3NUZXh0OiBydWxlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaW5kZXg7XG4gICAgICB9LFxuICAgICAgZGVsZXRlUnVsZTogZnVuY3Rpb24gZGVsZXRlUnVsZShpbmRleCkge1xuICAgICAgICBfdGhpcy5fc2VydmVyU2hlZXQuY3NzUnVsZXNbaW5kZXhdID0gbnVsbDtcbiAgICAgIH1cbiAgICB9O1xuICB9O1xuXG4gIF9wcm90by5nZXRTaGVldEZvclRhZyA9IGZ1bmN0aW9uIGdldFNoZWV0Rm9yVGFnKHRhZykge1xuICAgIGlmICh0YWcuc2hlZXQpIHtcbiAgICAgIHJldHVybiB0YWcuc2hlZXQ7XG4gICAgfSAvLyB0aGlzIHdlaXJkbmVzcyBicm91Z2h0IHRvIHlvdSBieSBmaXJlZm94XG5cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZG9jdW1lbnQuc3R5bGVTaGVldHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChkb2N1bWVudC5zdHlsZVNoZWV0c1tpXS5vd25lck5vZGUgPT09IHRhZykge1xuICAgICAgICByZXR1cm4gZG9jdW1lbnQuc3R5bGVTaGVldHNbaV07XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5nZXRTaGVldCA9IGZ1bmN0aW9uIGdldFNoZWV0KCkge1xuICAgIHJldHVybiB0aGlzLmdldFNoZWV0Rm9yVGFnKHRoaXMuX3RhZ3NbdGhpcy5fdGFncy5sZW5ndGggLSAxXSk7XG4gIH07XG5cbiAgX3Byb3RvLmluc2VydFJ1bGUgPSBmdW5jdGlvbiBpbnNlcnRSdWxlKHJ1bGUsIGluZGV4KSB7XG4gICAgaW52YXJpYW50KGlzU3RyaW5nKHJ1bGUpLCAnYGluc2VydFJ1bGVgIGFjY2VwdHMgb25seSBzdHJpbmdzJyk7XG5cbiAgICBpZiAoIXRoaXMuX2lzQnJvd3Nlcikge1xuICAgICAgaWYgKHR5cGVvZiBpbmRleCAhPT0gJ251bWJlcicpIHtcbiAgICAgICAgaW5kZXggPSB0aGlzLl9zZXJ2ZXJTaGVldC5jc3NSdWxlcy5sZW5ndGg7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3NlcnZlclNoZWV0Lmluc2VydFJ1bGUocnVsZSwgaW5kZXgpO1xuXG4gICAgICByZXR1cm4gdGhpcy5fcnVsZXNDb3VudCsrO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9vcHRpbWl6ZUZvclNwZWVkKSB7XG4gICAgICB2YXIgc2hlZXQgPSB0aGlzLmdldFNoZWV0KCk7XG5cbiAgICAgIGlmICh0eXBlb2YgaW5kZXggIT09ICdudW1iZXInKSB7XG4gICAgICAgIGluZGV4ID0gc2hlZXQuY3NzUnVsZXMubGVuZ3RoO1xuICAgICAgfSAvLyB0aGlzIHdlaXJkbmVzcyBmb3IgcGVyZiwgYW5kIGNocm9tZSdzIHdlaXJkIGJ1Z1xuICAgICAgLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMjAwMDc5OTIvY2hyb21lLXN1ZGRlbmx5LXN0b3BwZWQtYWNjZXB0aW5nLWluc2VydHJ1bGVcblxuXG4gICAgICB0cnkge1xuICAgICAgICBzaGVldC5pbnNlcnRSdWxlKHJ1bGUsIGluZGV4KTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGlmICghaXNQcm9kKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFwiU3R5bGVTaGVldDogaWxsZWdhbCBydWxlOiBcXG5cXG5cIiArIHJ1bGUgKyBcIlxcblxcblNlZSBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3EvMjAwMDc5OTIgZm9yIG1vcmUgaW5mb1wiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAtMTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGluc2VydGlvblBvaW50ID0gdGhpcy5fdGFnc1tpbmRleF07XG5cbiAgICAgIHRoaXMuX3RhZ3MucHVzaCh0aGlzLm1ha2VTdHlsZVRhZyh0aGlzLl9uYW1lLCBydWxlLCBpbnNlcnRpb25Qb2ludCkpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9ydWxlc0NvdW50Kys7XG4gIH07XG5cbiAgX3Byb3RvLnJlcGxhY2VSdWxlID0gZnVuY3Rpb24gcmVwbGFjZVJ1bGUoaW5kZXgsIHJ1bGUpIHtcbiAgICBpZiAodGhpcy5fb3B0aW1pemVGb3JTcGVlZCB8fCAhdGhpcy5faXNCcm93c2VyKSB7XG4gICAgICB2YXIgc2hlZXQgPSB0aGlzLl9pc0Jyb3dzZXIgPyB0aGlzLmdldFNoZWV0KCkgOiB0aGlzLl9zZXJ2ZXJTaGVldDtcblxuICAgICAgaWYgKCFydWxlLnRyaW0oKSkge1xuICAgICAgICBydWxlID0gdGhpcy5fZGVsZXRlZFJ1bGVQbGFjZWhvbGRlcjtcbiAgICAgIH1cblxuICAgICAgaWYgKCFzaGVldC5jc3NSdWxlc1tpbmRleF0pIHtcbiAgICAgICAgLy8gQFRCRCBTaG91bGQgd2UgdGhyb3cgYW4gZXJyb3I/XG4gICAgICAgIHJldHVybiBpbmRleDtcbiAgICAgIH1cblxuICAgICAgc2hlZXQuZGVsZXRlUnVsZShpbmRleCk7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIHNoZWV0Lmluc2VydFJ1bGUocnVsZSwgaW5kZXgpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgaWYgKCFpc1Byb2QpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXCJTdHlsZVNoZWV0OiBpbGxlZ2FsIHJ1bGU6IFxcblxcblwiICsgcnVsZSArIFwiXFxuXFxuU2VlIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcS8yMDAwNzk5MiBmb3IgbW9yZSBpbmZvXCIpO1xuICAgICAgICB9IC8vIEluIG9yZGVyIHRvIHByZXNlcnZlIHRoZSBpbmRpY2VzIHdlIGluc2VydCBhIGRlbGV0ZVJ1bGVQbGFjZWhvbGRlclxuXG5cbiAgICAgICAgc2hlZXQuaW5zZXJ0UnVsZSh0aGlzLl9kZWxldGVkUnVsZVBsYWNlaG9sZGVyLCBpbmRleCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB0YWcgPSB0aGlzLl90YWdzW2luZGV4XTtcbiAgICAgIGludmFyaWFudCh0YWcsIFwib2xkIHJ1bGUgYXQgaW5kZXggYFwiICsgaW5kZXggKyBcImAgbm90IGZvdW5kXCIpO1xuICAgICAgdGFnLnRleHRDb250ZW50ID0gcnVsZTtcbiAgICB9XG5cbiAgICByZXR1cm4gaW5kZXg7XG4gIH07XG5cbiAgX3Byb3RvLmRlbGV0ZVJ1bGUgPSBmdW5jdGlvbiBkZWxldGVSdWxlKGluZGV4KSB7XG4gICAgaWYgKCF0aGlzLl9pc0Jyb3dzZXIpIHtcbiAgICAgIHRoaXMuX3NlcnZlclNoZWV0LmRlbGV0ZVJ1bGUoaW5kZXgpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX29wdGltaXplRm9yU3BlZWQpIHtcbiAgICAgIHRoaXMucmVwbGFjZVJ1bGUoaW5kZXgsICcnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHRhZyA9IHRoaXMuX3RhZ3NbaW5kZXhdO1xuICAgICAgaW52YXJpYW50KHRhZywgXCJydWxlIGF0IGluZGV4IGBcIiArIGluZGV4ICsgXCJgIG5vdCBmb3VuZFwiKTtcbiAgICAgIHRhZy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRhZyk7XG4gICAgICB0aGlzLl90YWdzW2luZGV4XSA9IG51bGw7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5mbHVzaCA9IGZ1bmN0aW9uIGZsdXNoKCkge1xuICAgIHRoaXMuX2luamVjdGVkID0gZmFsc2U7XG4gICAgdGhpcy5fcnVsZXNDb3VudCA9IDA7XG5cbiAgICBpZiAodGhpcy5faXNCcm93c2VyKSB7XG4gICAgICB0aGlzLl90YWdzLmZvckVhY2goZnVuY3Rpb24gKHRhZykge1xuICAgICAgICByZXR1cm4gdGFnICYmIHRhZy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRhZyk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5fdGFncyA9IFtdO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBzaW1wbGVyIG9uIHNlcnZlclxuICAgICAgdGhpcy5fc2VydmVyU2hlZXQuY3NzUnVsZXMgPSBbXTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLmNzc1J1bGVzID0gZnVuY3Rpb24gY3NzUnVsZXMoKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICBpZiAoIXRoaXMuX2lzQnJvd3Nlcikge1xuICAgICAgcmV0dXJuIHRoaXMuX3NlcnZlclNoZWV0LmNzc1J1bGVzO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl90YWdzLnJlZHVjZShmdW5jdGlvbiAocnVsZXMsIHRhZykge1xuICAgICAgaWYgKHRhZykge1xuICAgICAgICBydWxlcyA9IHJ1bGVzLmNvbmNhdChBcnJheS5wcm90b3R5cGUubWFwLmNhbGwoX3RoaXMyLmdldFNoZWV0Rm9yVGFnKHRhZykuY3NzUnVsZXMsIGZ1bmN0aW9uIChydWxlKSB7XG4gICAgICAgICAgcmV0dXJuIHJ1bGUuY3NzVGV4dCA9PT0gX3RoaXMyLl9kZWxldGVkUnVsZVBsYWNlaG9sZGVyID8gbnVsbCA6IHJ1bGU7XG4gICAgICAgIH0pKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJ1bGVzLnB1c2gobnVsbCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBydWxlcztcbiAgICB9LCBbXSk7XG4gIH07XG5cbiAgX3Byb3RvLm1ha2VTdHlsZVRhZyA9IGZ1bmN0aW9uIG1ha2VTdHlsZVRhZyhuYW1lLCBjc3NTdHJpbmcsIHJlbGF0aXZlVG9UYWcpIHtcbiAgICBpZiAoY3NzU3RyaW5nKSB7XG4gICAgICBpbnZhcmlhbnQoaXNTdHJpbmcoY3NzU3RyaW5nKSwgJ21ha2VTdHlsZVRhZyBhY2NlcHMgb25seSBzdHJpbmdzIGFzIHNlY29uZCBwYXJhbWV0ZXInKTtcbiAgICB9XG5cbiAgICB2YXIgdGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICBpZiAodGhpcy5fbm9uY2UpIHRhZy5zZXRBdHRyaWJ1dGUoJ25vbmNlJywgdGhpcy5fbm9uY2UpO1xuICAgIHRhZy50eXBlID0gJ3RleHQvY3NzJztcbiAgICB0YWcuc2V0QXR0cmlidXRlKFwiZGF0YS1cIiArIG5hbWUsICcnKTtcblxuICAgIGlmIChjc3NTdHJpbmcpIHtcbiAgICAgIHRhZy5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3NTdHJpbmcpKTtcbiAgICB9XG5cbiAgICB2YXIgaGVhZCA9IGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXTtcblxuICAgIGlmIChyZWxhdGl2ZVRvVGFnKSB7XG4gICAgICBoZWFkLmluc2VydEJlZm9yZSh0YWcsIHJlbGF0aXZlVG9UYWcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBoZWFkLmFwcGVuZENoaWxkKHRhZyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhZztcbiAgfTtcblxuICBfY3JlYXRlQ2xhc3MoU3R5bGVTaGVldCwgW3tcbiAgICBrZXk6IFwibGVuZ3RoXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcnVsZXNDb3VudDtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gU3R5bGVTaGVldDtcbn0oKTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBTdHlsZVNoZWV0O1xuXG5mdW5jdGlvbiBpbnZhcmlhbnQoY29uZGl0aW9uLCBtZXNzYWdlKSB7XG4gIGlmICghY29uZGl0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiU3R5bGVTaGVldDogXCIgKyBtZXNzYWdlICsgXCIuXCIpO1xuICB9XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IGZsdXNoVG9SZWFjdDtcbmV4cG9ydHMuZmx1c2hUb0hUTUwgPSBmbHVzaFRvSFRNTDtcblxudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9zdHlsZSA9IHJlcXVpcmUoXCIuL3N0eWxlXCIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuZnVuY3Rpb24gZmx1c2hUb1JlYWN0KG9wdGlvbnMpIHtcbiAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIHJldHVybiAoMCwgX3N0eWxlLmZsdXNoKSgpLm1hcChmdW5jdGlvbiAoYXJncykge1xuICAgIHZhciBpZCA9IGFyZ3NbMF07XG4gICAgdmFyIGNzcyA9IGFyZ3NbMV07XG4gICAgcmV0dXJuIF9yZWFjdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudCgnc3R5bGUnLCB7XG4gICAgICBpZDogXCJfX1wiICsgaWQsXG4gICAgICAvLyBBdm9pZCB3YXJuaW5ncyB1cG9uIHJlbmRlciB3aXRoIGEga2V5XG4gICAgICBrZXk6IFwiX19cIiArIGlkLFxuICAgICAgbm9uY2U6IG9wdGlvbnMubm9uY2UgPyBvcHRpb25zLm5vbmNlIDogdW5kZWZpbmVkLFxuICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6IHtcbiAgICAgICAgX19odG1sOiBjc3NcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGZsdXNoVG9IVE1MKG9wdGlvbnMpIHtcbiAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIHJldHVybiAoMCwgX3N0eWxlLmZsdXNoKSgpLnJlZHVjZShmdW5jdGlvbiAoaHRtbCwgYXJncykge1xuICAgIHZhciBpZCA9IGFyZ3NbMF07XG4gICAgdmFyIGNzcyA9IGFyZ3NbMV07XG4gICAgaHRtbCArPSBcIjxzdHlsZSBpZD1cXFwiX19cIiArIGlkICsgXCJcXFwiXCIgKyAob3B0aW9ucy5ub25jZSA/IFwiIG5vbmNlPVxcXCJcIiArIG9wdGlvbnMubm9uY2UgKyBcIlxcXCJcIiA6ICcnKSArIFwiPlwiICsgY3NzICsgXCI8L3N0eWxlPlwiO1xuICAgIHJldHVybiBodG1sO1xuICB9LCAnJyk7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmZsdXNoID0gZmx1c2g7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcblxudmFyIF9zdHlsZXNoZWV0UmVnaXN0cnkgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3N0eWxlc2hlZXQtcmVnaXN0cnlcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzTG9vc2Uoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzLnByb3RvdHlwZSk7IHN1YkNsYXNzLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IHN1YkNsYXNzOyBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBzdHlsZVNoZWV0UmVnaXN0cnkgPSBuZXcgX3N0eWxlc2hlZXRSZWdpc3RyeVtcImRlZmF1bHRcIl0oKTtcblxudmFyIEpTWFN0eWxlID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0c0xvb3NlKEpTWFN0eWxlLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBKU1hTdHlsZShwcm9wcykge1xuICAgIHZhciBfdGhpcztcblxuICAgIF90aGlzID0gX0NvbXBvbmVudC5jYWxsKHRoaXMsIHByb3BzKSB8fCB0aGlzO1xuICAgIF90aGlzLnByZXZQcm9wcyA9IHt9O1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIEpTWFN0eWxlLmR5bmFtaWMgPSBmdW5jdGlvbiBkeW5hbWljKGluZm8pIHtcbiAgICByZXR1cm4gaW5mby5tYXAoZnVuY3Rpb24gKHRhZ0luZm8pIHtcbiAgICAgIHZhciBiYXNlSWQgPSB0YWdJbmZvWzBdO1xuICAgICAgdmFyIHByb3BzID0gdGFnSW5mb1sxXTtcbiAgICAgIHJldHVybiBzdHlsZVNoZWV0UmVnaXN0cnkuY29tcHV0ZUlkKGJhc2VJZCwgcHJvcHMpO1xuICAgIH0pLmpvaW4oJyAnKTtcbiAgfSAvLyBwcm9iYWJseSBmYXN0ZXIgdGhhbiBQdXJlQ29tcG9uZW50IChzaGFsbG93RXF1YWwpXG4gIDtcblxuICB2YXIgX3Byb3RvID0gSlNYU3R5bGUucHJvdG90eXBlO1xuXG4gIF9wcm90by5zaG91bGRDb21wb25lbnRVcGRhdGUgPSBmdW5jdGlvbiBzaG91bGRDb21wb25lbnRVcGRhdGUob3RoZXJQcm9wcykge1xuICAgIHJldHVybiB0aGlzLnByb3BzLmlkICE9PSBvdGhlclByb3BzLmlkIHx8IC8vIFdlIGRvIHRoaXMgY2hlY2sgYmVjYXVzZSBgZHluYW1pY2AgaXMgYW4gYXJyYXkgb2Ygc3RyaW5ncyBvciB1bmRlZmluZWQuXG4gICAgLy8gVGhlc2UgYXJlIHRoZSBjb21wdXRlZCB2YWx1ZXMgZm9yIGR5bmFtaWMgc3R5bGVzLlxuICAgIFN0cmluZyh0aGlzLnByb3BzLmR5bmFtaWMpICE9PSBTdHJpbmcob3RoZXJQcm9wcy5keW5hbWljKTtcbiAgfTtcblxuICBfcHJvdG8uY29tcG9uZW50V2lsbFVubW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBzdHlsZVNoZWV0UmVnaXN0cnkucmVtb3ZlKHRoaXMucHJvcHMpO1xuICB9O1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgLy8gVGhpcyBpcyBhIHdvcmthcm91bmQgdG8gbWFrZSB0aGUgc2lkZSBlZmZlY3QgYXN5bmMgc2FmZSBpbiB0aGUgXCJyZW5kZXJcIiBwaGFzZS5cbiAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3plaXQvc3R5bGVkLWpzeC9wdWxsLzQ4NFxuICAgIGlmICh0aGlzLnNob3VsZENvbXBvbmVudFVwZGF0ZSh0aGlzLnByZXZQcm9wcykpIHtcbiAgICAgIC8vIFVwZGF0ZXNcbiAgICAgIGlmICh0aGlzLnByZXZQcm9wcy5pZCkge1xuICAgICAgICBzdHlsZVNoZWV0UmVnaXN0cnkucmVtb3ZlKHRoaXMucHJldlByb3BzKTtcbiAgICAgIH1cblxuICAgICAgc3R5bGVTaGVldFJlZ2lzdHJ5LmFkZCh0aGlzLnByb3BzKTtcbiAgICAgIHRoaXMucHJldlByb3BzID0gdGhpcy5wcm9wcztcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcblxuICByZXR1cm4gSlNYU3R5bGU7XG59KF9yZWFjdC5Db21wb25lbnQpO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IEpTWFN0eWxlO1xuXG5mdW5jdGlvbiBmbHVzaCgpIHtcbiAgdmFyIGNzc1J1bGVzID0gc3R5bGVTaGVldFJlZ2lzdHJ5LmNzc1J1bGVzKCk7XG4gIHN0eWxlU2hlZXRSZWdpc3RyeS5mbHVzaCgpO1xuICByZXR1cm4gY3NzUnVsZXM7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIF9zdHJpbmdIYXNoID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwic3RyaW5nLWhhc2hcIikpO1xuXG52YXIgX3N0eWxlc2hlZXQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2xpYi9zdHlsZXNoZWV0XCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbnZhciBzYW5pdGl6ZSA9IGZ1bmN0aW9uIHNhbml0aXplKHJ1bGUpIHtcbiAgcmV0dXJuIHJ1bGUucmVwbGFjZSgvXFwvc3R5bGUvZ2ksICdcXFxcL3N0eWxlJyk7XG59O1xuXG52YXIgU3R5bGVTaGVldFJlZ2lzdHJ5ID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gU3R5bGVTaGVldFJlZ2lzdHJ5KF90ZW1wKSB7XG4gICAgdmFyIF9yZWYgPSBfdGVtcCA9PT0gdm9pZCAwID8ge30gOiBfdGVtcCxcbiAgICAgICAgX3JlZiRzdHlsZVNoZWV0ID0gX3JlZi5zdHlsZVNoZWV0LFxuICAgICAgICBzdHlsZVNoZWV0ID0gX3JlZiRzdHlsZVNoZWV0ID09PSB2b2lkIDAgPyBudWxsIDogX3JlZiRzdHlsZVNoZWV0LFxuICAgICAgICBfcmVmJG9wdGltaXplRm9yU3BlZWQgPSBfcmVmLm9wdGltaXplRm9yU3BlZWQsXG4gICAgICAgIG9wdGltaXplRm9yU3BlZWQgPSBfcmVmJG9wdGltaXplRm9yU3BlZWQgPT09IHZvaWQgMCA/IGZhbHNlIDogX3JlZiRvcHRpbWl6ZUZvclNwZWVkLFxuICAgICAgICBfcmVmJGlzQnJvd3NlciA9IF9yZWYuaXNCcm93c2VyLFxuICAgICAgICBpc0Jyb3dzZXIgPSBfcmVmJGlzQnJvd3NlciA9PT0gdm9pZCAwID8gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgOiBfcmVmJGlzQnJvd3NlcjtcblxuICAgIHRoaXMuX3NoZWV0ID0gc3R5bGVTaGVldCB8fCBuZXcgX3N0eWxlc2hlZXRbXCJkZWZhdWx0XCJdKHtcbiAgICAgIG5hbWU6ICdzdHlsZWQtanN4JyxcbiAgICAgIG9wdGltaXplRm9yU3BlZWQ6IG9wdGltaXplRm9yU3BlZWRcbiAgICB9KTtcblxuICAgIHRoaXMuX3NoZWV0LmluamVjdCgpO1xuXG4gICAgaWYgKHN0eWxlU2hlZXQgJiYgdHlwZW9mIG9wdGltaXplRm9yU3BlZWQgPT09ICdib29sZWFuJykge1xuICAgICAgdGhpcy5fc2hlZXQuc2V0T3B0aW1pemVGb3JTcGVlZChvcHRpbWl6ZUZvclNwZWVkKTtcblxuICAgICAgdGhpcy5fb3B0aW1pemVGb3JTcGVlZCA9IHRoaXMuX3NoZWV0LmlzT3B0aW1pemVGb3JTcGVlZCgpO1xuICAgIH1cblxuICAgIHRoaXMuX2lzQnJvd3NlciA9IGlzQnJvd3NlcjtcbiAgICB0aGlzLl9mcm9tU2VydmVyID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuX2luZGljZXMgPSB7fTtcbiAgICB0aGlzLl9pbnN0YW5jZXNDb3VudHMgPSB7fTtcbiAgICB0aGlzLmNvbXB1dGVJZCA9IHRoaXMuY3JlYXRlQ29tcHV0ZUlkKCk7XG4gICAgdGhpcy5jb21wdXRlU2VsZWN0b3IgPSB0aGlzLmNyZWF0ZUNvbXB1dGVTZWxlY3RvcigpO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IFN0eWxlU2hlZXRSZWdpc3RyeS5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmFkZCA9IGZ1bmN0aW9uIGFkZChwcm9wcykge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICBpZiAodW5kZWZpbmVkID09PSB0aGlzLl9vcHRpbWl6ZUZvclNwZWVkKSB7XG4gICAgICB0aGlzLl9vcHRpbWl6ZUZvclNwZWVkID0gQXJyYXkuaXNBcnJheShwcm9wcy5jaGlsZHJlbik7XG5cbiAgICAgIHRoaXMuX3NoZWV0LnNldE9wdGltaXplRm9yU3BlZWQodGhpcy5fb3B0aW1pemVGb3JTcGVlZCk7XG5cbiAgICAgIHRoaXMuX29wdGltaXplRm9yU3BlZWQgPSB0aGlzLl9zaGVldC5pc09wdGltaXplRm9yU3BlZWQoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5faXNCcm93c2VyICYmICF0aGlzLl9mcm9tU2VydmVyKSB7XG4gICAgICB0aGlzLl9mcm9tU2VydmVyID0gdGhpcy5zZWxlY3RGcm9tU2VydmVyKCk7XG4gICAgICB0aGlzLl9pbnN0YW5jZXNDb3VudHMgPSBPYmplY3Qua2V5cyh0aGlzLl9mcm9tU2VydmVyKS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgdGFnTmFtZSkge1xuICAgICAgICBhY2NbdGFnTmFtZV0gPSAwO1xuICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgfSwge30pO1xuICAgIH1cblxuICAgIHZhciBfdGhpcyRnZXRJZEFuZFJ1bGVzID0gdGhpcy5nZXRJZEFuZFJ1bGVzKHByb3BzKSxcbiAgICAgICAgc3R5bGVJZCA9IF90aGlzJGdldElkQW5kUnVsZXMuc3R5bGVJZCxcbiAgICAgICAgcnVsZXMgPSBfdGhpcyRnZXRJZEFuZFJ1bGVzLnJ1bGVzOyAvLyBEZWR1cGluZzoganVzdCBpbmNyZWFzZSB0aGUgaW5zdGFuY2VzIGNvdW50LlxuXG5cbiAgICBpZiAoc3R5bGVJZCBpbiB0aGlzLl9pbnN0YW5jZXNDb3VudHMpIHtcbiAgICAgIHRoaXMuX2luc3RhbmNlc0NvdW50c1tzdHlsZUlkXSArPSAxO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBpbmRpY2VzID0gcnVsZXMubWFwKGZ1bmN0aW9uIChydWxlKSB7XG4gICAgICByZXR1cm4gX3RoaXMuX3NoZWV0Lmluc2VydFJ1bGUocnVsZSk7XG4gICAgfSkgLy8gRmlsdGVyIG91dCBpbnZhbGlkIHJ1bGVzXG4gICAgLmZpbHRlcihmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgIHJldHVybiBpbmRleCAhPT0gLTE7XG4gICAgfSk7XG4gICAgdGhpcy5faW5kaWNlc1tzdHlsZUlkXSA9IGluZGljZXM7XG4gICAgdGhpcy5faW5zdGFuY2VzQ291bnRzW3N0eWxlSWRdID0gMTtcbiAgfTtcblxuICBfcHJvdG8ucmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKHByb3BzKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICB2YXIgX3RoaXMkZ2V0SWRBbmRSdWxlczIgPSB0aGlzLmdldElkQW5kUnVsZXMocHJvcHMpLFxuICAgICAgICBzdHlsZUlkID0gX3RoaXMkZ2V0SWRBbmRSdWxlczIuc3R5bGVJZDtcblxuICAgIGludmFyaWFudChzdHlsZUlkIGluIHRoaXMuX2luc3RhbmNlc0NvdW50cywgXCJzdHlsZUlkOiBgXCIgKyBzdHlsZUlkICsgXCJgIG5vdCBmb3VuZFwiKTtcbiAgICB0aGlzLl9pbnN0YW5jZXNDb3VudHNbc3R5bGVJZF0gLT0gMTtcblxuICAgIGlmICh0aGlzLl9pbnN0YW5jZXNDb3VudHNbc3R5bGVJZF0gPCAxKSB7XG4gICAgICB2YXIgdGFnRnJvbVNlcnZlciA9IHRoaXMuX2Zyb21TZXJ2ZXIgJiYgdGhpcy5fZnJvbVNlcnZlcltzdHlsZUlkXTtcblxuICAgICAgaWYgKHRhZ0Zyb21TZXJ2ZXIpIHtcbiAgICAgICAgdGFnRnJvbVNlcnZlci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRhZ0Zyb21TZXJ2ZXIpO1xuICAgICAgICBkZWxldGUgdGhpcy5fZnJvbVNlcnZlcltzdHlsZUlkXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2luZGljZXNbc3R5bGVJZF0uZm9yRWFjaChmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMyLl9zaGVldC5kZWxldGVSdWxlKGluZGV4KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZGVsZXRlIHRoaXMuX2luZGljZXNbc3R5bGVJZF07XG4gICAgICB9XG5cbiAgICAgIGRlbGV0ZSB0aGlzLl9pbnN0YW5jZXNDb3VudHNbc3R5bGVJZF07XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by51cGRhdGUgPSBmdW5jdGlvbiB1cGRhdGUocHJvcHMsIG5leHRQcm9wcykge1xuICAgIHRoaXMuYWRkKG5leHRQcm9wcyk7XG4gICAgdGhpcy5yZW1vdmUocHJvcHMpO1xuICB9O1xuXG4gIF9wcm90by5mbHVzaCA9IGZ1bmN0aW9uIGZsdXNoKCkge1xuICAgIHRoaXMuX3NoZWV0LmZsdXNoKCk7XG5cbiAgICB0aGlzLl9zaGVldC5pbmplY3QoKTtcblxuICAgIHRoaXMuX2Zyb21TZXJ2ZXIgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5faW5kaWNlcyA9IHt9O1xuICAgIHRoaXMuX2luc3RhbmNlc0NvdW50cyA9IHt9O1xuICAgIHRoaXMuY29tcHV0ZUlkID0gdGhpcy5jcmVhdGVDb21wdXRlSWQoKTtcbiAgICB0aGlzLmNvbXB1dGVTZWxlY3RvciA9IHRoaXMuY3JlYXRlQ29tcHV0ZVNlbGVjdG9yKCk7XG4gIH07XG5cbiAgX3Byb3RvLmNzc1J1bGVzID0gZnVuY3Rpb24gY3NzUnVsZXMoKSB7XG4gICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICB2YXIgZnJvbVNlcnZlciA9IHRoaXMuX2Zyb21TZXJ2ZXIgPyBPYmplY3Qua2V5cyh0aGlzLl9mcm9tU2VydmVyKS5tYXAoZnVuY3Rpb24gKHN0eWxlSWQpIHtcbiAgICAgIHJldHVybiBbc3R5bGVJZCwgX3RoaXMzLl9mcm9tU2VydmVyW3N0eWxlSWRdXTtcbiAgICB9KSA6IFtdO1xuXG4gICAgdmFyIGNzc1J1bGVzID0gdGhpcy5fc2hlZXQuY3NzUnVsZXMoKTtcblxuICAgIHJldHVybiBmcm9tU2VydmVyLmNvbmNhdChPYmplY3Qua2V5cyh0aGlzLl9pbmRpY2VzKS5tYXAoZnVuY3Rpb24gKHN0eWxlSWQpIHtcbiAgICAgIHJldHVybiBbc3R5bGVJZCwgX3RoaXMzLl9pbmRpY2VzW3N0eWxlSWRdLm1hcChmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIGNzc1J1bGVzW2luZGV4XS5jc3NUZXh0O1xuICAgICAgfSkuam9pbihfdGhpczMuX29wdGltaXplRm9yU3BlZWQgPyAnJyA6ICdcXG4nKV07XG4gICAgfSkgLy8gZmlsdGVyIG91dCBlbXB0eSBydWxlc1xuICAgIC5maWx0ZXIoZnVuY3Rpb24gKHJ1bGUpIHtcbiAgICAgIHJldHVybiBCb29sZWFuKHJ1bGVbMV0pO1xuICAgIH0pKTtcbiAgfVxuICAvKipcbiAgICogY3JlYXRlQ29tcHV0ZUlkXG4gICAqXG4gICAqIENyZWF0ZXMgYSBmdW5jdGlvbiB0byBjb21wdXRlIGFuZCBtZW1vaXplIGEganN4IGlkIGZyb20gYSBiYXNlZElkIGFuZCBvcHRpb25hbGx5IHByb3BzLlxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5jcmVhdGVDb21wdXRlSWQgPSBmdW5jdGlvbiBjcmVhdGVDb21wdXRlSWQoKSB7XG4gICAgdmFyIGNhY2hlID0ge307XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChiYXNlSWQsIHByb3BzKSB7XG4gICAgICBpZiAoIXByb3BzKSB7XG4gICAgICAgIHJldHVybiBcImpzeC1cIiArIGJhc2VJZDtcbiAgICAgIH1cblxuICAgICAgdmFyIHByb3BzVG9TdHJpbmcgPSBTdHJpbmcocHJvcHMpO1xuICAgICAgdmFyIGtleSA9IGJhc2VJZCArIHByb3BzVG9TdHJpbmc7IC8vIHJldHVybiBganN4LSR7aGFzaFN0cmluZyhgJHtiYXNlSWR9LSR7cHJvcHNUb1N0cmluZ31gKX1gXG5cbiAgICAgIGlmICghY2FjaGVba2V5XSkge1xuICAgICAgICBjYWNoZVtrZXldID0gXCJqc3gtXCIgKyAoMCwgX3N0cmluZ0hhc2hbXCJkZWZhdWx0XCJdKShiYXNlSWQgKyBcIi1cIiArIHByb3BzVG9TdHJpbmcpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY2FjaGVba2V5XTtcbiAgICB9O1xuICB9XG4gIC8qKlxuICAgKiBjcmVhdGVDb21wdXRlU2VsZWN0b3JcbiAgICpcbiAgICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRvIGNvbXB1dGUgYW5kIG1lbW9pemUgZHluYW1pYyBzZWxlY3RvcnMuXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLmNyZWF0ZUNvbXB1dGVTZWxlY3RvciA9IGZ1bmN0aW9uIGNyZWF0ZUNvbXB1dGVTZWxlY3RvcihzZWxlY3RvUGxhY2Vob2xkZXJSZWdleHApIHtcbiAgICBpZiAoc2VsZWN0b1BsYWNlaG9sZGVyUmVnZXhwID09PSB2b2lkIDApIHtcbiAgICAgIHNlbGVjdG9QbGFjZWhvbGRlclJlZ2V4cCA9IC9fX2pzeC1zdHlsZS1keW5hbWljLXNlbGVjdG9yL2c7XG4gICAgfVxuXG4gICAgdmFyIGNhY2hlID0ge307XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChpZCwgY3NzKSB7XG4gICAgICAvLyBTYW5pdGl6ZSBTU1ItZWQgQ1NTLlxuICAgICAgLy8gQ2xpZW50IHNpZGUgY29kZSBkb2Vzbid0IG5lZWQgdG8gYmUgc2FuaXRpemVkIHNpbmNlIHdlIHVzZVxuICAgICAgLy8gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUgKGRldikgYW5kIHRoZSBDU1NPTSBhcGkgc2hlZXQuaW5zZXJ0UnVsZSAocHJvZCkuXG4gICAgICBpZiAoIXRoaXMuX2lzQnJvd3Nlcikge1xuICAgICAgICBjc3MgPSBzYW5pdGl6ZShjc3MpO1xuICAgICAgfVxuXG4gICAgICB2YXIgaWRjc3MgPSBpZCArIGNzcztcblxuICAgICAgaWYgKCFjYWNoZVtpZGNzc10pIHtcbiAgICAgICAgY2FjaGVbaWRjc3NdID0gY3NzLnJlcGxhY2Uoc2VsZWN0b1BsYWNlaG9sZGVyUmVnZXhwLCBpZCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjYWNoZVtpZGNzc107XG4gICAgfTtcbiAgfTtcblxuICBfcHJvdG8uZ2V0SWRBbmRSdWxlcyA9IGZ1bmN0aW9uIGdldElkQW5kUnVsZXMocHJvcHMpIHtcbiAgICB2YXIgX3RoaXM0ID0gdGhpcztcblxuICAgIHZhciBjc3MgPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgICAgZHluYW1pYyA9IHByb3BzLmR5bmFtaWMsXG4gICAgICAgIGlkID0gcHJvcHMuaWQ7XG5cbiAgICBpZiAoZHluYW1pYykge1xuICAgICAgdmFyIHN0eWxlSWQgPSB0aGlzLmNvbXB1dGVJZChpZCwgZHluYW1pYyk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdHlsZUlkOiBzdHlsZUlkLFxuICAgICAgICBydWxlczogQXJyYXkuaXNBcnJheShjc3MpID8gY3NzLm1hcChmdW5jdGlvbiAocnVsZSkge1xuICAgICAgICAgIHJldHVybiBfdGhpczQuY29tcHV0ZVNlbGVjdG9yKHN0eWxlSWQsIHJ1bGUpO1xuICAgICAgICB9KSA6IFt0aGlzLmNvbXB1dGVTZWxlY3RvcihzdHlsZUlkLCBjc3MpXVxuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgc3R5bGVJZDogdGhpcy5jb21wdXRlSWQoaWQpLFxuICAgICAgcnVsZXM6IEFycmF5LmlzQXJyYXkoY3NzKSA/IGNzcyA6IFtjc3NdXG4gICAgfTtcbiAgfVxuICAvKipcbiAgICogc2VsZWN0RnJvbVNlcnZlclxuICAgKlxuICAgKiBDb2xsZWN0cyBzdHlsZSB0YWdzIGZyb20gdGhlIGRvY3VtZW50IHdpdGggaWQgX19qc3gtWFhYXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnNlbGVjdEZyb21TZXJ2ZXIgPSBmdW5jdGlvbiBzZWxlY3RGcm9tU2VydmVyKCkge1xuICAgIHZhciBlbGVtZW50cyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tpZF49XCJfX2pzeC1cIl0nKSk7XG4gICAgcmV0dXJuIGVsZW1lbnRzLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBlbGVtZW50KSB7XG4gICAgICB2YXIgaWQgPSBlbGVtZW50LmlkLnNsaWNlKDIpO1xuICAgICAgYWNjW2lkXSA9IGVsZW1lbnQ7XG4gICAgICByZXR1cm4gYWNjO1xuICAgIH0sIHt9KTtcbiAgfTtcblxuICByZXR1cm4gU3R5bGVTaGVldFJlZ2lzdHJ5O1xufSgpO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IFN0eWxlU2hlZXRSZWdpc3RyeTtcblxuZnVuY3Rpb24gaW52YXJpYW50KGNvbmRpdGlvbiwgbWVzc2FnZSkge1xuICBpZiAoIWNvbmRpdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlN0eWxlU2hlZXRSZWdpc3RyeTogXCIgKyBtZXNzYWdlICsgXCIuXCIpO1xuICB9XG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3Qvc2VydmVyJylcbiIsImZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcblxuICByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZXh0ZW5kczsiLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsImZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG4gIHZhciB0YXJnZXQgPSB7fTtcbiAgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICB2YXIga2V5LCBpO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAga2V5ID0gc291cmNlS2V5c1tpXTtcbiAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlOyIsIi8qXG5vYmplY3QtYXNzaWduXG4oYykgU2luZHJlIFNvcmh1c1xuQGxpY2Vuc2UgTUlUXG4qL1xuXG4ndXNlIHN0cmljdCc7XG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xudmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIHByb3BJc0VudW1lcmFibGUgPSBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG5mdW5jdGlvbiB0b09iamVjdCh2YWwpIHtcblx0aWYgKHZhbCA9PT0gbnVsbCB8fCB2YWwgPT09IHVuZGVmaW5lZCkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ09iamVjdC5hc3NpZ24gY2Fubm90IGJlIGNhbGxlZCB3aXRoIG51bGwgb3IgdW5kZWZpbmVkJyk7XG5cdH1cblxuXHRyZXR1cm4gT2JqZWN0KHZhbCk7XG59XG5cbmZ1bmN0aW9uIHNob3VsZFVzZU5hdGl2ZSgpIHtcblx0dHJ5IHtcblx0XHRpZiAoIU9iamVjdC5hc3NpZ24pIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBEZXRlY3QgYnVnZ3kgcHJvcGVydHkgZW51bWVyYXRpb24gb3JkZXIgaW4gb2xkZXIgVjggdmVyc2lvbnMuXG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD00MTE4XG5cdFx0dmFyIHRlc3QxID0gbmV3IFN0cmluZygnYWJjJyk7ICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ldy13cmFwcGVyc1xuXHRcdHRlc3QxWzVdID0gJ2RlJztcblx0XHRpZiAoT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDEpWzBdID09PSAnNScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0dmFyIHRlc3QyID0ge307XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG5cdFx0XHR0ZXN0MlsnXycgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGkpXSA9IGk7XG5cdFx0fVxuXHRcdHZhciBvcmRlcjIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MikubWFwKGZ1bmN0aW9uIChuKSB7XG5cdFx0XHRyZXR1cm4gdGVzdDJbbl07XG5cdFx0fSk7XG5cdFx0aWYgKG9yZGVyMi5qb2luKCcnKSAhPT0gJzAxMjM0NTY3ODknKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MyA9IHt9O1xuXHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24gKGxldHRlcikge1xuXHRcdFx0dGVzdDNbbGV0dGVyXSA9IGxldHRlcjtcblx0XHR9KTtcblx0XHRpZiAoT2JqZWN0LmtleXMoT2JqZWN0LmFzc2lnbih7fSwgdGVzdDMpKS5qb2luKCcnKSAhPT1cblx0XHRcdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHJldHVybiB0cnVlO1xuXHR9IGNhdGNoIChlcnIpIHtcblx0XHQvLyBXZSBkb24ndCBleHBlY3QgYW55IG9mIHRoZSBhYm92ZSB0byB0aHJvdywgYnV0IGJldHRlciB0byBiZSBzYWZlLlxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNob3VsZFVzZU5hdGl2ZSgpID8gT2JqZWN0LmFzc2lnbiA6IGZ1bmN0aW9uICh0YXJnZXQsIHNvdXJjZSkge1xuXHR2YXIgZnJvbTtcblx0dmFyIHRvID0gdG9PYmplY3QodGFyZ2V0KTtcblx0dmFyIHN5bWJvbHM7XG5cblx0Zm9yICh2YXIgcyA9IDE7IHMgPCBhcmd1bWVudHMubGVuZ3RoOyBzKyspIHtcblx0XHRmcm9tID0gT2JqZWN0KGFyZ3VtZW50c1tzXSk7XG5cblx0XHRmb3IgKHZhciBrZXkgaW4gZnJvbSkge1xuXHRcdFx0aWYgKGhhc093blByb3BlcnR5LmNhbGwoZnJvbSwga2V5KSkge1xuXHRcdFx0XHR0b1trZXldID0gZnJvbVtrZXldO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcblx0XHRcdHN5bWJvbHMgPSBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZnJvbSk7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN5bWJvbHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aWYgKHByb3BJc0VudW1lcmFibGUuY2FsbChmcm9tLCBzeW1ib2xzW2ldKSkge1xuXHRcdFx0XHRcdHRvW3N5bWJvbHNbaV1dID0gZnJvbVtzeW1ib2xzW2ldXTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiB0bztcbn07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIHByaW50V2FybmluZyA9IGZ1bmN0aW9uKCkge307XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9IHJlcXVpcmUoJy4vbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0Jyk7XG4gIHZhciBsb2dnZWRUeXBlRmFpbHVyZXMgPSB7fTtcbiAgdmFyIGhhcyA9IEZ1bmN0aW9uLmNhbGwuYmluZChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5KTtcblxuICBwcmludFdhcm5pbmcgPSBmdW5jdGlvbih0ZXh0KSB7XG4gICAgdmFyIG1lc3NhZ2UgPSAnV2FybmluZzogJyArIHRleHQ7XG4gICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIC8vIC0tLSBXZWxjb21lIHRvIGRlYnVnZ2luZyBSZWFjdCAtLS1cbiAgICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgeW91IGNhbiB1c2UgdGhpcyBzdGFja1xuICAgICAgLy8gdG8gZmluZCB0aGUgY2FsbHNpdGUgdGhhdCBjYXVzZWQgdGhpcyB3YXJuaW5nIHRvIGZpcmUuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfSBjYXRjaCAoeCkge31cbiAgfTtcbn1cblxuLyoqXG4gKiBBc3NlcnQgdGhhdCB0aGUgdmFsdWVzIG1hdGNoIHdpdGggdGhlIHR5cGUgc3BlY3MuXG4gKiBFcnJvciBtZXNzYWdlcyBhcmUgbWVtb3JpemVkIGFuZCB3aWxsIG9ubHkgYmUgc2hvd24gb25jZS5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gdHlwZVNwZWNzIE1hcCBvZiBuYW1lIHRvIGEgUmVhY3RQcm9wVHlwZVxuICogQHBhcmFtIHtvYmplY3R9IHZhbHVlcyBSdW50aW1lIHZhbHVlcyB0aGF0IG5lZWQgdG8gYmUgdHlwZS1jaGVja2VkXG4gKiBAcGFyYW0ge3N0cmluZ30gbG9jYXRpb24gZS5nLiBcInByb3BcIiwgXCJjb250ZXh0XCIsIFwiY2hpbGQgY29udGV4dFwiXG4gKiBAcGFyYW0ge3N0cmluZ30gY29tcG9uZW50TmFtZSBOYW1lIG9mIHRoZSBjb21wb25lbnQgZm9yIGVycm9yIG1lc3NhZ2VzLlxuICogQHBhcmFtIHs/RnVuY3Rpb259IGdldFN0YWNrIFJldHVybnMgdGhlIGNvbXBvbmVudCBzdGFjay5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGNoZWNrUHJvcFR5cGVzKHR5cGVTcGVjcywgdmFsdWVzLCBsb2NhdGlvbiwgY29tcG9uZW50TmFtZSwgZ2V0U3RhY2spIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBmb3IgKHZhciB0eXBlU3BlY05hbWUgaW4gdHlwZVNwZWNzKSB7XG4gICAgICBpZiAoaGFzKHR5cGVTcGVjcywgdHlwZVNwZWNOYW1lKSkge1xuICAgICAgICB2YXIgZXJyb3I7XG4gICAgICAgIC8vIFByb3AgdHlwZSB2YWxpZGF0aW9uIG1heSB0aHJvdy4gSW4gY2FzZSB0aGV5IGRvLCB3ZSBkb24ndCB3YW50IHRvXG4gICAgICAgIC8vIGZhaWwgdGhlIHJlbmRlciBwaGFzZSB3aGVyZSBpdCBkaWRuJ3QgZmFpbCBiZWZvcmUuIFNvIHdlIGxvZyBpdC5cbiAgICAgICAgLy8gQWZ0ZXIgdGhlc2UgaGF2ZSBiZWVuIGNsZWFuZWQgdXAsIHdlJ2xsIGxldCB0aGVtIHRocm93LlxuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgaXMgaW50ZW50aW9uYWxseSBhbiBpbnZhcmlhbnQgdGhhdCBnZXRzIGNhdWdodC4gSXQncyB0aGUgc2FtZVxuICAgICAgICAgIC8vIGJlaGF2aW9yIGFzIHdpdGhvdXQgdGhpcyBzdGF0ZW1lbnQgZXhjZXB0IHdpdGggYSBiZXR0ZXIgbWVzc2FnZS5cbiAgICAgICAgICBpZiAodHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB2YXIgZXJyID0gRXJyb3IoXG4gICAgICAgICAgICAgIChjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycpICsgJzogJyArIGxvY2F0aW9uICsgJyB0eXBlIGAnICsgdHlwZVNwZWNOYW1lICsgJ2AgaXMgaW52YWxpZDsgJyArXG4gICAgICAgICAgICAgICdpdCBtdXN0IGJlIGEgZnVuY3Rpb24sIHVzdWFsbHkgZnJvbSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UsIGJ1dCByZWNlaXZlZCBgJyArIHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSArICdgLidcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBlcnIubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICB9XG4gICAgICAgICAgZXJyb3IgPSB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSh2YWx1ZXMsIHR5cGVTcGVjTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIG51bGwsIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICBlcnJvciA9IGV4O1xuICAgICAgICB9XG4gICAgICAgIGlmIChlcnJvciAmJiAhKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpKSB7XG4gICAgICAgICAgcHJpbnRXYXJuaW5nKFxuICAgICAgICAgICAgKGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJykgKyAnOiB0eXBlIHNwZWNpZmljYXRpb24gb2YgJyArXG4gICAgICAgICAgICBsb2NhdGlvbiArICcgYCcgKyB0eXBlU3BlY05hbWUgKyAnYCBpcyBpbnZhbGlkOyB0aGUgdHlwZSBjaGVja2VyICcgK1xuICAgICAgICAgICAgJ2Z1bmN0aW9uIG11c3QgcmV0dXJuIGBudWxsYCBvciBhbiBgRXJyb3JgIGJ1dCByZXR1cm5lZCBhICcgKyB0eXBlb2YgZXJyb3IgKyAnLiAnICtcbiAgICAgICAgICAgICdZb3UgbWF5IGhhdmUgZm9yZ290dGVuIHRvIHBhc3MgYW4gYXJndW1lbnQgdG8gdGhlIHR5cGUgY2hlY2tlciAnICtcbiAgICAgICAgICAgICdjcmVhdG9yIChhcnJheU9mLCBpbnN0YW5jZU9mLCBvYmplY3RPZiwgb25lT2YsIG9uZU9mVHlwZSwgYW5kICcgK1xuICAgICAgICAgICAgJ3NoYXBlIGFsbCByZXF1aXJlIGFuIGFyZ3VtZW50KS4nXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvciAmJiAhKGVycm9yLm1lc3NhZ2UgaW4gbG9nZ2VkVHlwZUZhaWx1cmVzKSkge1xuICAgICAgICAgIC8vIE9ubHkgbW9uaXRvciB0aGlzIGZhaWx1cmUgb25jZSBiZWNhdXNlIHRoZXJlIHRlbmRzIHRvIGJlIGEgbG90IG9mIHRoZVxuICAgICAgICAgIC8vIHNhbWUgZXJyb3IuXG4gICAgICAgICAgbG9nZ2VkVHlwZUZhaWx1cmVzW2Vycm9yLm1lc3NhZ2VdID0gdHJ1ZTtcblxuICAgICAgICAgIHZhciBzdGFjayA9IGdldFN0YWNrID8gZ2V0U3RhY2soKSA6ICcnO1xuXG4gICAgICAgICAgcHJpbnRXYXJuaW5nKFxuICAgICAgICAgICAgJ0ZhaWxlZCAnICsgbG9jYXRpb24gKyAnIHR5cGU6ICcgKyBlcnJvci5tZXNzYWdlICsgKHN0YWNrICE9IG51bGwgPyBzdGFjayA6ICcnKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBSZXNldHMgd2FybmluZyBjYWNoZSB3aGVuIHRlc3RpbmcuXG4gKlxuICogQHByaXZhdGVcbiAqL1xuY2hlY2tQcm9wVHlwZXMucmVzZXRXYXJuaW5nQ2FjaGUgPSBmdW5jdGlvbigpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBsb2dnZWRUeXBlRmFpbHVyZXMgPSB7fTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNoZWNrUHJvcFR5cGVzO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdElzID0gcmVxdWlyZSgncmVhY3QtaXMnKTtcbnZhciBhc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG5cbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9IHJlcXVpcmUoJy4vbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0Jyk7XG52YXIgY2hlY2tQcm9wVHlwZXMgPSByZXF1aXJlKCcuL2NoZWNrUHJvcFR5cGVzJyk7XG5cbnZhciBoYXMgPSBGdW5jdGlvbi5jYWxsLmJpbmQoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSk7XG52YXIgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24oKSB7fTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24odGV4dCkge1xuICAgIHZhciBtZXNzYWdlID0gJ1dhcm5pbmc6ICcgKyB0ZXh0O1xuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAvLyAtLS0gV2VsY29tZSB0byBkZWJ1Z2dpbmcgUmVhY3QgLS0tXG4gICAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IHlvdSBjYW4gdXNlIHRoaXMgc3RhY2tcbiAgICAgIC8vIHRvIGZpbmQgdGhlIGNhbGxzaXRlIHRoYXQgY2F1c2VkIHRoaXMgd2FybmluZyB0byBmaXJlLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH0gY2F0Y2ggKHgpIHt9XG4gIH07XG59XG5cbmZ1bmN0aW9uIGVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGwoKSB7XG4gIHJldHVybiBudWxsO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGlzVmFsaWRFbGVtZW50LCB0aHJvd09uRGlyZWN0QWNjZXNzKSB7XG4gIC8qIGdsb2JhbCBTeW1ib2wgKi9cbiAgdmFyIElURVJBVE9SX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLml0ZXJhdG9yO1xuICB2YXIgRkFVWF9JVEVSQVRPUl9TWU1CT0wgPSAnQEBpdGVyYXRvcic7IC8vIEJlZm9yZSBTeW1ib2wgc3BlYy5cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgaXRlcmF0b3IgbWV0aG9kIGZ1bmN0aW9uIGNvbnRhaW5lZCBvbiB0aGUgaXRlcmFibGUgb2JqZWN0LlxuICAgKlxuICAgKiBCZSBzdXJlIHRvIGludm9rZSB0aGUgZnVuY3Rpb24gd2l0aCB0aGUgaXRlcmFibGUgYXMgY29udGV4dDpcbiAgICpcbiAgICogICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihteUl0ZXJhYmxlKTtcbiAgICogICAgIGlmIChpdGVyYXRvckZuKSB7XG4gICAqICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChteUl0ZXJhYmxlKTtcbiAgICogICAgICAgLi4uXG4gICAqICAgICB9XG4gICAqXG4gICAqIEBwYXJhbSB7P29iamVjdH0gbWF5YmVJdGVyYWJsZVxuICAgKiBAcmV0dXJuIHs/ZnVuY3Rpb259XG4gICAqL1xuICBmdW5jdGlvbiBnZXRJdGVyYXRvckZuKG1heWJlSXRlcmFibGUpIHtcbiAgICB2YXIgaXRlcmF0b3JGbiA9IG1heWJlSXRlcmFibGUgJiYgKElURVJBVE9SX1NZTUJPTCAmJiBtYXliZUl0ZXJhYmxlW0lURVJBVE9SX1NZTUJPTF0gfHwgbWF5YmVJdGVyYWJsZVtGQVVYX0lURVJBVE9SX1NZTUJPTF0pO1xuICAgIGlmICh0eXBlb2YgaXRlcmF0b3JGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIGl0ZXJhdG9yRm47XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENvbGxlY3Rpb24gb2YgbWV0aG9kcyB0aGF0IGFsbG93IGRlY2xhcmF0aW9uIGFuZCB2YWxpZGF0aW9uIG9mIHByb3BzIHRoYXQgYXJlXG4gICAqIHN1cHBsaWVkIHRvIFJlYWN0IGNvbXBvbmVudHMuIEV4YW1wbGUgdXNhZ2U6XG4gICAqXG4gICAqICAgdmFyIFByb3BzID0gcmVxdWlyZSgnUmVhY3RQcm9wVHlwZXMnKTtcbiAgICogICB2YXIgTXlBcnRpY2xlID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgKiAgICAgcHJvcFR5cGVzOiB7XG4gICAqICAgICAgIC8vIEFuIG9wdGlvbmFsIHN0cmluZyBwcm9wIG5hbWVkIFwiZGVzY3JpcHRpb25cIi5cbiAgICogICAgICAgZGVzY3JpcHRpb246IFByb3BzLnN0cmluZyxcbiAgICpcbiAgICogICAgICAgLy8gQSByZXF1aXJlZCBlbnVtIHByb3AgbmFtZWQgXCJjYXRlZ29yeVwiLlxuICAgKiAgICAgICBjYXRlZ29yeTogUHJvcHMub25lT2YoWydOZXdzJywnUGhvdG9zJ10pLmlzUmVxdWlyZWQsXG4gICAqXG4gICAqICAgICAgIC8vIEEgcHJvcCBuYW1lZCBcImRpYWxvZ1wiIHRoYXQgcmVxdWlyZXMgYW4gaW5zdGFuY2Ugb2YgRGlhbG9nLlxuICAgKiAgICAgICBkaWFsb2c6IFByb3BzLmluc3RhbmNlT2YoRGlhbG9nKS5pc1JlcXVpcmVkXG4gICAqICAgICB9LFxuICAgKiAgICAgcmVuZGVyOiBmdW5jdGlvbigpIHsgLi4uIH1cbiAgICogICB9KTtcbiAgICpcbiAgICogQSBtb3JlIGZvcm1hbCBzcGVjaWZpY2F0aW9uIG9mIGhvdyB0aGVzZSBtZXRob2RzIGFyZSB1c2VkOlxuICAgKlxuICAgKiAgIHR5cGUgOj0gYXJyYXl8Ym9vbHxmdW5jfG9iamVjdHxudW1iZXJ8c3RyaW5nfG9uZU9mKFsuLi5dKXxpbnN0YW5jZU9mKC4uLilcbiAgICogICBkZWNsIDo9IFJlYWN0UHJvcFR5cGVzLnt0eXBlfSguaXNSZXF1aXJlZCk/XG4gICAqXG4gICAqIEVhY2ggYW5kIGV2ZXJ5IGRlY2xhcmF0aW9uIHByb2R1Y2VzIGEgZnVuY3Rpb24gd2l0aCB0aGUgc2FtZSBzaWduYXR1cmUuIFRoaXNcbiAgICogYWxsb3dzIHRoZSBjcmVhdGlvbiBvZiBjdXN0b20gdmFsaWRhdGlvbiBmdW5jdGlvbnMuIEZvciBleGFtcGxlOlxuICAgKlxuICAgKiAgdmFyIE15TGluayA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICogICAgcHJvcFR5cGVzOiB7XG4gICAqICAgICAgLy8gQW4gb3B0aW9uYWwgc3RyaW5nIG9yIFVSSSBwcm9wIG5hbWVkIFwiaHJlZlwiLlxuICAgKiAgICAgIGhyZWY6IGZ1bmN0aW9uKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSkge1xuICAgKiAgICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICogICAgICAgIGlmIChwcm9wVmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgcHJvcFZhbHVlICE9PSAnc3RyaW5nJyAmJlxuICAgKiAgICAgICAgICAgICEocHJvcFZhbHVlIGluc3RhbmNlb2YgVVJJKSkge1xuICAgKiAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKFxuICAgKiAgICAgICAgICAgICdFeHBlY3RlZCBhIHN0cmluZyBvciBhbiBVUkkgZm9yICcgKyBwcm9wTmFtZSArICcgaW4gJyArXG4gICAqICAgICAgICAgICAgY29tcG9uZW50TmFtZVxuICAgKiAgICAgICAgICApO1xuICAgKiAgICAgICAgfVxuICAgKiAgICAgIH1cbiAgICogICAgfSxcbiAgICogICAgcmVuZGVyOiBmdW5jdGlvbigpIHsuLi59XG4gICAqICB9KTtcbiAgICpcbiAgICogQGludGVybmFsXG4gICAqL1xuXG4gIHZhciBBTk9OWU1PVVMgPSAnPDxhbm9ueW1vdXM+Pic7XG5cbiAgLy8gSW1wb3J0YW50IVxuICAvLyBLZWVwIHRoaXMgbGlzdCBpbiBzeW5jIHdpdGggcHJvZHVjdGlvbiB2ZXJzaW9uIGluIGAuL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcy5qc2AuXG4gIHZhciBSZWFjdFByb3BUeXBlcyA9IHtcbiAgICBhcnJheTogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ2FycmF5JyksXG4gICAgYm9vbDogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ2Jvb2xlYW4nKSxcbiAgICBmdW5jOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignZnVuY3Rpb24nKSxcbiAgICBudW1iZXI6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdudW1iZXInKSxcbiAgICBvYmplY3Q6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdvYmplY3QnKSxcbiAgICBzdHJpbmc6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdzdHJpbmcnKSxcbiAgICBzeW1ib2w6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdzeW1ib2wnKSxcblxuICAgIGFueTogY3JlYXRlQW55VHlwZUNoZWNrZXIoKSxcbiAgICBhcnJheU9mOiBjcmVhdGVBcnJheU9mVHlwZUNoZWNrZXIsXG4gICAgZWxlbWVudDogY3JlYXRlRWxlbWVudFR5cGVDaGVja2VyKCksXG4gICAgZWxlbWVudFR5cGU6IGNyZWF0ZUVsZW1lbnRUeXBlVHlwZUNoZWNrZXIoKSxcbiAgICBpbnN0YW5jZU9mOiBjcmVhdGVJbnN0YW5jZVR5cGVDaGVja2VyLFxuICAgIG5vZGU6IGNyZWF0ZU5vZGVDaGVja2VyKCksXG4gICAgb2JqZWN0T2Y6IGNyZWF0ZU9iamVjdE9mVHlwZUNoZWNrZXIsXG4gICAgb25lT2Y6IGNyZWF0ZUVudW1UeXBlQ2hlY2tlcixcbiAgICBvbmVPZlR5cGU6IGNyZWF0ZVVuaW9uVHlwZUNoZWNrZXIsXG4gICAgc2hhcGU6IGNyZWF0ZVNoYXBlVHlwZUNoZWNrZXIsXG4gICAgZXhhY3Q6IGNyZWF0ZVN0cmljdFNoYXBlVHlwZUNoZWNrZXIsXG4gIH07XG5cbiAgLyoqXG4gICAqIGlubGluZWQgT2JqZWN0LmlzIHBvbHlmaWxsIHRvIGF2b2lkIHJlcXVpcmluZyBjb25zdW1lcnMgc2hpcCB0aGVpciBvd25cbiAgICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvT2JqZWN0L2lzXG4gICAqL1xuICAvKmVzbGludC1kaXNhYmxlIG5vLXNlbGYtY29tcGFyZSovXG4gIGZ1bmN0aW9uIGlzKHgsIHkpIHtcbiAgICAvLyBTYW1lVmFsdWUgYWxnb3JpdGhtXG4gICAgaWYgKHggPT09IHkpIHtcbiAgICAgIC8vIFN0ZXBzIDEtNSwgNy0xMFxuICAgICAgLy8gU3RlcHMgNi5iLTYuZTogKzAgIT0gLTBcbiAgICAgIHJldHVybiB4ICE9PSAwIHx8IDEgLyB4ID09PSAxIC8geTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gU3RlcCA2LmE6IE5hTiA9PSBOYU5cbiAgICAgIHJldHVybiB4ICE9PSB4ICYmIHkgIT09IHk7XG4gICAgfVxuICB9XG4gIC8qZXNsaW50LWVuYWJsZSBuby1zZWxmLWNvbXBhcmUqL1xuXG4gIC8qKlxuICAgKiBXZSB1c2UgYW4gRXJyb3ItbGlrZSBvYmplY3QgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgYXMgcGVvcGxlIG1heSBjYWxsXG4gICAqIFByb3BUeXBlcyBkaXJlY3RseSBhbmQgaW5zcGVjdCB0aGVpciBvdXRwdXQuIEhvd2V2ZXIsIHdlIGRvbid0IHVzZSByZWFsXG4gICAqIEVycm9ycyBhbnltb3JlLiBXZSBkb24ndCBpbnNwZWN0IHRoZWlyIHN0YWNrIGFueXdheSwgYW5kIGNyZWF0aW5nIHRoZW1cbiAgICogaXMgcHJvaGliaXRpdmVseSBleHBlbnNpdmUgaWYgdGhleSBhcmUgY3JlYXRlZCB0b28gb2Z0ZW4sIHN1Y2ggYXMgd2hhdFxuICAgKiBoYXBwZW5zIGluIG9uZU9mVHlwZSgpIGZvciBhbnkgdHlwZSBiZWZvcmUgdGhlIG9uZSB0aGF0IG1hdGNoZWQuXG4gICAqL1xuICBmdW5jdGlvbiBQcm9wVHlwZUVycm9yKG1lc3NhZ2UpIHtcbiAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgIHRoaXMuc3RhY2sgPSAnJztcbiAgfVxuICAvLyBNYWtlIGBpbnN0YW5jZW9mIEVycm9yYCBzdGlsbCB3b3JrIGZvciByZXR1cm5lZCBlcnJvcnMuXG4gIFByb3BUeXBlRXJyb3IucHJvdG90eXBlID0gRXJyb3IucHJvdG90eXBlO1xuXG4gIGZ1bmN0aW9uIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHZhciBtYW51YWxQcm9wVHlwZUNhbGxDYWNoZSA9IHt9O1xuICAgICAgdmFyIG1hbnVhbFByb3BUeXBlV2FybmluZ0NvdW50ID0gMDtcbiAgICB9XG4gICAgZnVuY3Rpb24gY2hlY2tUeXBlKGlzUmVxdWlyZWQsIHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgc2VjcmV0KSB7XG4gICAgICBjb21wb25lbnROYW1lID0gY29tcG9uZW50TmFtZSB8fCBBTk9OWU1PVVM7XG4gICAgICBwcm9wRnVsbE5hbWUgPSBwcm9wRnVsbE5hbWUgfHwgcHJvcE5hbWU7XG5cbiAgICAgIGlmIChzZWNyZXQgIT09IFJlYWN0UHJvcFR5cGVzU2VjcmV0KSB7XG4gICAgICAgIGlmICh0aHJvd09uRGlyZWN0QWNjZXNzKSB7XG4gICAgICAgICAgLy8gTmV3IGJlaGF2aW9yIG9ubHkgZm9yIHVzZXJzIG9mIGBwcm9wLXR5cGVzYCBwYWNrYWdlXG4gICAgICAgICAgdmFyIGVyciA9IG5ldyBFcnJvcihcbiAgICAgICAgICAgICdDYWxsaW5nIFByb3BUeXBlcyB2YWxpZGF0b3JzIGRpcmVjdGx5IGlzIG5vdCBzdXBwb3J0ZWQgYnkgdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLiAnICtcbiAgICAgICAgICAgICdVc2UgYFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcygpYCB0byBjYWxsIHRoZW0uICcgK1xuICAgICAgICAgICAgJ1JlYWQgbW9yZSBhdCBodHRwOi8vZmIubWUvdXNlLWNoZWNrLXByb3AtdHlwZXMnXG4gICAgICAgICAgKTtcbiAgICAgICAgICBlcnIubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgIH0gZWxzZSBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAvLyBPbGQgYmVoYXZpb3IgZm9yIHBlb3BsZSB1c2luZyBSZWFjdC5Qcm9wVHlwZXNcbiAgICAgICAgICB2YXIgY2FjaGVLZXkgPSBjb21wb25lbnROYW1lICsgJzonICsgcHJvcE5hbWU7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgIW1hbnVhbFByb3BUeXBlQ2FsbENhY2hlW2NhY2hlS2V5XSAmJlxuICAgICAgICAgICAgLy8gQXZvaWQgc3BhbW1pbmcgdGhlIGNvbnNvbGUgYmVjYXVzZSB0aGV5IGFyZSBvZnRlbiBub3QgYWN0aW9uYWJsZSBleGNlcHQgZm9yIGxpYiBhdXRob3JzXG4gICAgICAgICAgICBtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCA8IDNcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHByaW50V2FybmluZyhcbiAgICAgICAgICAgICAgJ1lvdSBhcmUgbWFudWFsbHkgY2FsbGluZyBhIFJlYWN0LlByb3BUeXBlcyB2YWxpZGF0aW9uICcgK1xuICAgICAgICAgICAgICAnZnVuY3Rpb24gZm9yIHRoZSBgJyArIHByb3BGdWxsTmFtZSArICdgIHByb3Agb24gYCcgKyBjb21wb25lbnROYW1lICArICdgLiBUaGlzIGlzIGRlcHJlY2F0ZWQgJyArXG4gICAgICAgICAgICAgICdhbmQgd2lsbCB0aHJvdyBpbiB0aGUgc3RhbmRhbG9uZSBgcHJvcC10eXBlc2AgcGFja2FnZS4gJyArXG4gICAgICAgICAgICAgICdZb3UgbWF5IGJlIHNlZWluZyB0aGlzIHdhcm5pbmcgZHVlIHRvIGEgdGhpcmQtcGFydHkgUHJvcFR5cGVzICcgK1xuICAgICAgICAgICAgICAnbGlicmFyeS4gU2VlIGh0dHBzOi8vZmIubWUvcmVhY3Qtd2FybmluZy1kb250LWNhbGwtcHJvcHR5cGVzICcgKyAnZm9yIGRldGFpbHMuJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIG1hbnVhbFByb3BUeXBlQ2FsbENhY2hlW2NhY2hlS2V5XSA9IHRydWU7XG4gICAgICAgICAgICBtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCsrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PSBudWxsKSB7XG4gICAgICAgIGlmIChpc1JlcXVpcmVkKSB7XG4gICAgICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdUaGUgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIGlzIG1hcmtlZCBhcyByZXF1aXJlZCAnICsgKCdpbiBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgYnV0IGl0cyB2YWx1ZSBpcyBgbnVsbGAuJykpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1RoZSAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2AgaXMgbWFya2VkIGFzIHJlcXVpcmVkIGluICcgKyAoJ2AnICsgY29tcG9uZW50TmFtZSArICdgLCBidXQgaXRzIHZhbHVlIGlzIGB1bmRlZmluZWRgLicpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBjaGFpbmVkQ2hlY2tUeXBlID0gY2hlY2tUeXBlLmJpbmQobnVsbCwgZmFsc2UpO1xuICAgIGNoYWluZWRDaGVja1R5cGUuaXNSZXF1aXJlZCA9IGNoZWNrVHlwZS5iaW5kKG51bGwsIHRydWUpO1xuXG4gICAgcmV0dXJuIGNoYWluZWRDaGVja1R5cGU7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcihleHBlY3RlZFR5cGUpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIHNlY3JldCkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09IGV4cGVjdGVkVHlwZSkge1xuICAgICAgICAvLyBgcHJvcFZhbHVlYCBiZWluZyBpbnN0YW5jZSBvZiwgc2F5LCBkYXRlL3JlZ2V4cCwgcGFzcyB0aGUgJ29iamVjdCdcbiAgICAgICAgLy8gY2hlY2ssIGJ1dCB3ZSBjYW4gb2ZmZXIgYSBtb3JlIHByZWNpc2UgZXJyb3IgbWVzc2FnZSBoZXJlIHJhdGhlciB0aGFuXG4gICAgICAgIC8vICdvZiB0eXBlIGBvYmplY3RgJy5cbiAgICAgICAgdmFyIHByZWNpc2VUeXBlID0gZ2V0UHJlY2lzZVR5cGUocHJvcFZhbHVlKTtcblxuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcmVjaXNlVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCAnKSArICgnYCcgKyBleHBlY3RlZFR5cGUgKyAnYC4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUFueVR5cGVDaGVja2VyKCkge1xuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcihlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUFycmF5T2ZUeXBlQ2hlY2tlcih0eXBlQ2hlY2tlcikge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgaWYgKHR5cGVvZiB0eXBlQ2hlY2tlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1Byb3BlcnR5IGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgY29tcG9uZW50IGAnICsgY29tcG9uZW50TmFtZSArICdgIGhhcyBpbnZhbGlkIFByb3BUeXBlIG5vdGF0aW9uIGluc2lkZSBhcnJheU9mLicpO1xuICAgICAgfVxuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShwcm9wVmFsdWUpKSB7XG4gICAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGFuIGFycmF5LicpKTtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcFZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBlcnJvciA9IHR5cGVDaGVja2VyKHByb3BWYWx1ZSwgaSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICdbJyArIGkgKyAnXScsIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlRWxlbWVudFR5cGVDaGVja2VyKCkge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGlmICghaXNWYWxpZEVsZW1lbnQocHJvcFZhbHVlKSkge1xuICAgICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhIHNpbmdsZSBSZWFjdEVsZW1lbnQuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVFbGVtZW50VHlwZVR5cGVDaGVja2VyKCkge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGlmICghUmVhY3RJcy5pc1ZhbGlkRWxlbWVudFR5cGUocHJvcFZhbHVlKSkge1xuICAgICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhIHNpbmdsZSBSZWFjdEVsZW1lbnQgdHlwZS4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUluc3RhbmNlVHlwZUNoZWNrZXIoZXhwZWN0ZWRDbGFzcykge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgaWYgKCEocHJvcHNbcHJvcE5hbWVdIGluc3RhbmNlb2YgZXhwZWN0ZWRDbGFzcykpIHtcbiAgICAgICAgdmFyIGV4cGVjdGVkQ2xhc3NOYW1lID0gZXhwZWN0ZWRDbGFzcy5uYW1lIHx8IEFOT05ZTU9VUztcbiAgICAgICAgdmFyIGFjdHVhbENsYXNzTmFtZSA9IGdldENsYXNzTmFtZShwcm9wc1twcm9wTmFtZV0pO1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBhY3R1YWxDbGFzc05hbWUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgJykgKyAoJ2luc3RhbmNlIG9mIGAnICsgZXhwZWN0ZWRDbGFzc05hbWUgKyAnYC4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUVudW1UeXBlQ2hlY2tlcihleHBlY3RlZFZhbHVlcykge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShleHBlY3RlZFZhbHVlcykpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgIHByaW50V2FybmluZyhcbiAgICAgICAgICAgICdJbnZhbGlkIGFyZ3VtZW50cyBzdXBwbGllZCB0byBvbmVPZiwgZXhwZWN0ZWQgYW4gYXJyYXksIGdvdCAnICsgYXJndW1lbnRzLmxlbmd0aCArICcgYXJndW1lbnRzLiAnICtcbiAgICAgICAgICAgICdBIGNvbW1vbiBtaXN0YWtlIGlzIHRvIHdyaXRlIG9uZU9mKHgsIHksIHopIGluc3RlYWQgb2Ygb25lT2YoW3gsIHksIHpdKS4nXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcmludFdhcm5pbmcoJ0ludmFsaWQgYXJndW1lbnQgc3VwcGxpZWQgdG8gb25lT2YsIGV4cGVjdGVkIGFuIGFycmF5LicpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGV4cGVjdGVkVmFsdWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChpcyhwcm9wVmFsdWUsIGV4cGVjdGVkVmFsdWVzW2ldKSkge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciB2YWx1ZXNTdHJpbmcgPSBKU09OLnN0cmluZ2lmeShleHBlY3RlZFZhbHVlcywgZnVuY3Rpb24gcmVwbGFjZXIoa2V5LCB2YWx1ZSkge1xuICAgICAgICB2YXIgdHlwZSA9IGdldFByZWNpc2VUeXBlKHZhbHVlKTtcbiAgICAgICAgaWYgKHR5cGUgPT09ICdzeW1ib2wnKSB7XG4gICAgICAgICAgcmV0dXJuIFN0cmluZyh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHZhbHVlIGAnICsgU3RyaW5nKHByb3BWYWx1ZSkgKyAnYCAnICsgKCdzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgb25lIG9mICcgKyB2YWx1ZXNTdHJpbmcgKyAnLicpKTtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZU9iamVjdE9mVHlwZUNoZWNrZXIodHlwZUNoZWNrZXIpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICh0eXBlb2YgdHlwZUNoZWNrZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdQcm9wZXJ0eSBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIGNvbXBvbmVudCBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCBoYXMgaW52YWxpZCBQcm9wVHlwZSBub3RhdGlvbiBpbnNpZGUgb2JqZWN0T2YuJyk7XG4gICAgICB9XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJvcFR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYW4gb2JqZWN0LicpKTtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGtleSBpbiBwcm9wVmFsdWUpIHtcbiAgICAgICAgaWYgKGhhcyhwcm9wVmFsdWUsIGtleSkpIHtcbiAgICAgICAgICB2YXIgZXJyb3IgPSB0eXBlQ2hlY2tlcihwcm9wVmFsdWUsIGtleSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICcuJyArIGtleSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVVuaW9uVHlwZUNoZWNrZXIoYXJyYXlPZlR5cGVDaGVja2Vycykge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShhcnJheU9mVHlwZUNoZWNrZXJzKSkge1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IHByaW50V2FybmluZygnSW52YWxpZCBhcmd1bWVudCBzdXBwbGllZCB0byBvbmVPZlR5cGUsIGV4cGVjdGVkIGFuIGluc3RhbmNlIG9mIGFycmF5LicpIDogdm9pZCAwO1xuICAgICAgcmV0dXJuIGVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGw7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheU9mVHlwZUNoZWNrZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgY2hlY2tlciA9IGFycmF5T2ZUeXBlQ2hlY2tlcnNbaV07XG4gICAgICBpZiAodHlwZW9mIGNoZWNrZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcHJpbnRXYXJuaW5nKFxuICAgICAgICAgICdJbnZhbGlkIGFyZ3VtZW50IHN1cHBsaWVkIHRvIG9uZU9mVHlwZS4gRXhwZWN0ZWQgYW4gYXJyYXkgb2YgY2hlY2sgZnVuY3Rpb25zLCBidXQgJyArXG4gICAgICAgICAgJ3JlY2VpdmVkICcgKyBnZXRQb3N0Zml4Rm9yVHlwZVdhcm5pbmcoY2hlY2tlcikgKyAnIGF0IGluZGV4ICcgKyBpICsgJy4nXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiBlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheU9mVHlwZUNoZWNrZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBjaGVja2VyID0gYXJyYXlPZlR5cGVDaGVja2Vyc1tpXTtcbiAgICAgICAgaWYgKGNoZWNrZXIocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBSZWFjdFByb3BUeXBlc1NlY3JldCkgPT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agc3VwcGxpZWQgdG8gJyArICgnYCcgKyBjb21wb25lbnROYW1lICsgJ2AuJykpO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlTm9kZUNoZWNrZXIoKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAoIWlzTm9kZShwcm9wc1twcm9wTmFtZV0pKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agc3VwcGxpZWQgdG8gJyArICgnYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGEgUmVhY3ROb2RlLicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlU2hhcGVUeXBlQ2hlY2tlcihzaGFwZVR5cGVzKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlIGAnICsgcHJvcFR5cGUgKyAnYCAnICsgKCdzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYG9iamVjdGAuJykpO1xuICAgICAgfVxuICAgICAgZm9yICh2YXIga2V5IGluIHNoYXBlVHlwZXMpIHtcbiAgICAgICAgdmFyIGNoZWNrZXIgPSBzaGFwZVR5cGVzW2tleV07XG4gICAgICAgIGlmICghY2hlY2tlcikge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciBlcnJvciA9IGNoZWNrZXIocHJvcFZhbHVlLCBrZXksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnLicgKyBrZXksIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVN0cmljdFNoYXBlVHlwZUNoZWNrZXIoc2hhcGVUeXBlcykge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSBgJyArIHByb3BUeXBlICsgJ2AgJyArICgnc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGBvYmplY3RgLicpKTtcbiAgICAgIH1cbiAgICAgIC8vIFdlIG5lZWQgdG8gY2hlY2sgYWxsIGtleXMgaW4gY2FzZSBzb21lIGFyZSByZXF1aXJlZCBidXQgbWlzc2luZyBmcm9tXG4gICAgICAvLyBwcm9wcy5cbiAgICAgIHZhciBhbGxLZXlzID0gYXNzaWduKHt9LCBwcm9wc1twcm9wTmFtZV0sIHNoYXBlVHlwZXMpO1xuICAgICAgZm9yICh2YXIga2V5IGluIGFsbEtleXMpIHtcbiAgICAgICAgdmFyIGNoZWNrZXIgPSBzaGFwZVR5cGVzW2tleV07XG4gICAgICAgIGlmICghY2hlY2tlcikge1xuICAgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcihcbiAgICAgICAgICAgICdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBrZXkgYCcgKyBrZXkgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYC4nICtcbiAgICAgICAgICAgICdcXG5CYWQgb2JqZWN0OiAnICsgSlNPTi5zdHJpbmdpZnkocHJvcHNbcHJvcE5hbWVdLCBudWxsLCAnICAnKSArXG4gICAgICAgICAgICAnXFxuVmFsaWQga2V5czogJyArICBKU09OLnN0cmluZ2lmeShPYmplY3Qua2V5cyhzaGFwZVR5cGVzKSwgbnVsbCwgJyAgJylcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHZhciBlcnJvciA9IGNoZWNrZXIocHJvcFZhbHVlLCBrZXksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnLicgKyBrZXksIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNOb2RlKHByb3BWYWx1ZSkge1xuICAgIHN3aXRjaCAodHlwZW9mIHByb3BWYWx1ZSkge1xuICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICBjYXNlICd1bmRlZmluZWQnOlxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgICByZXR1cm4gIXByb3BWYWx1ZTtcbiAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgICByZXR1cm4gcHJvcFZhbHVlLmV2ZXJ5KGlzTm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb3BWYWx1ZSA9PT0gbnVsbCB8fCBpc1ZhbGlkRWxlbWVudChwcm9wVmFsdWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4ocHJvcFZhbHVlKTtcbiAgICAgICAgaWYgKGl0ZXJhdG9yRm4pIHtcbiAgICAgICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwocHJvcFZhbHVlKTtcbiAgICAgICAgICB2YXIgc3RlcDtcbiAgICAgICAgICBpZiAoaXRlcmF0b3JGbiAhPT0gcHJvcFZhbHVlLmVudHJpZXMpIHtcbiAgICAgICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICAgICAgaWYgKCFpc05vZGUoc3RlcC52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gSXRlcmF0b3Igd2lsbCBwcm92aWRlIGVudHJ5IFtrLHZdIHR1cGxlcyByYXRoZXIgdGhhbiB2YWx1ZXMuXG4gICAgICAgICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgICAgICAgIHZhciBlbnRyeSA9IHN0ZXAudmFsdWU7XG4gICAgICAgICAgICAgIGlmIChlbnRyeSkge1xuICAgICAgICAgICAgICAgIGlmICghaXNOb2RlKGVudHJ5WzFdKSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBpc1N5bWJvbChwcm9wVHlwZSwgcHJvcFZhbHVlKSB7XG4gICAgLy8gTmF0aXZlIFN5bWJvbC5cbiAgICBpZiAocHJvcFR5cGUgPT09ICdzeW1ib2wnKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBmYWxzeSB2YWx1ZSBjYW4ndCBiZSBhIFN5bWJvbFxuICAgIGlmICghcHJvcFZhbHVlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gMTkuNC4zLjUgU3ltYm9sLnByb3RvdHlwZVtAQHRvU3RyaW5nVGFnXSA9PT0gJ1N5bWJvbCdcbiAgICBpZiAocHJvcFZhbHVlWydAQHRvU3RyaW5nVGFnJ10gPT09ICdTeW1ib2wnKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBGYWxsYmFjayBmb3Igbm9uLXNwZWMgY29tcGxpYW50IFN5bWJvbHMgd2hpY2ggYXJlIHBvbHlmaWxsZWQuXG4gICAgaWYgKHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgcHJvcFZhbHVlIGluc3RhbmNlb2YgU3ltYm9sKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBFcXVpdmFsZW50IG9mIGB0eXBlb2ZgIGJ1dCB3aXRoIHNwZWNpYWwgaGFuZGxpbmcgZm9yIGFycmF5IGFuZCByZWdleHAuXG4gIGZ1bmN0aW9uIGdldFByb3BUeXBlKHByb3BWYWx1ZSkge1xuICAgIHZhciBwcm9wVHlwZSA9IHR5cGVvZiBwcm9wVmFsdWU7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkocHJvcFZhbHVlKSkge1xuICAgICAgcmV0dXJuICdhcnJheSc7XG4gICAgfVxuICAgIGlmIChwcm9wVmFsdWUgaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICAgIC8vIE9sZCB3ZWJraXRzIChhdCBsZWFzdCB1bnRpbCBBbmRyb2lkIDQuMCkgcmV0dXJuICdmdW5jdGlvbicgcmF0aGVyIHRoYW5cbiAgICAgIC8vICdvYmplY3QnIGZvciB0eXBlb2YgYSBSZWdFeHAuIFdlJ2xsIG5vcm1hbGl6ZSB0aGlzIGhlcmUgc28gdGhhdCAvYmxhL1xuICAgICAgLy8gcGFzc2VzIFByb3BUeXBlcy5vYmplY3QuXG4gICAgICByZXR1cm4gJ29iamVjdCc7XG4gICAgfVxuICAgIGlmIChpc1N5bWJvbChwcm9wVHlwZSwgcHJvcFZhbHVlKSkge1xuICAgICAgcmV0dXJuICdzeW1ib2wnO1xuICAgIH1cbiAgICByZXR1cm4gcHJvcFR5cGU7XG4gIH1cblxuICAvLyBUaGlzIGhhbmRsZXMgbW9yZSB0eXBlcyB0aGFuIGBnZXRQcm9wVHlwZWAuIE9ubHkgdXNlZCBmb3IgZXJyb3IgbWVzc2FnZXMuXG4gIC8vIFNlZSBgY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXJgLlxuICBmdW5jdGlvbiBnZXRQcmVjaXNlVHlwZShwcm9wVmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIHByb3BWYWx1ZSA9PT0gJ3VuZGVmaW5lZCcgfHwgcHJvcFZhbHVlID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gJycgKyBwcm9wVmFsdWU7XG4gICAgfVxuICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgaWYgKHByb3BUeXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgaWYgKHByb3BWYWx1ZSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgcmV0dXJuICdkYXRlJztcbiAgICAgIH0gZWxzZSBpZiAocHJvcFZhbHVlIGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgICAgIHJldHVybiAncmVnZXhwJztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHByb3BUeXBlO1xuICB9XG5cbiAgLy8gUmV0dXJucyBhIHN0cmluZyB0aGF0IGlzIHBvc3RmaXhlZCB0byBhIHdhcm5pbmcgYWJvdXQgYW4gaW52YWxpZCB0eXBlLlxuICAvLyBGb3IgZXhhbXBsZSwgXCJ1bmRlZmluZWRcIiBvciBcIm9mIHR5cGUgYXJyYXlcIlxuICBmdW5jdGlvbiBnZXRQb3N0Zml4Rm9yVHlwZVdhcm5pbmcodmFsdWUpIHtcbiAgICB2YXIgdHlwZSA9IGdldFByZWNpc2VUeXBlKHZhbHVlKTtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgJ2FycmF5JzpcbiAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgIHJldHVybiAnYW4gJyArIHR5cGU7XG4gICAgICBjYXNlICdib29sZWFuJzpcbiAgICAgIGNhc2UgJ2RhdGUnOlxuICAgICAgY2FzZSAncmVnZXhwJzpcbiAgICAgICAgcmV0dXJuICdhICcgKyB0eXBlO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHR5cGU7XG4gICAgfVxuICB9XG5cbiAgLy8gUmV0dXJucyBjbGFzcyBuYW1lIG9mIHRoZSBvYmplY3QsIGlmIGFueS5cbiAgZnVuY3Rpb24gZ2V0Q2xhc3NOYW1lKHByb3BWYWx1ZSkge1xuICAgIGlmICghcHJvcFZhbHVlLmNvbnN0cnVjdG9yIHx8ICFwcm9wVmFsdWUuY29uc3RydWN0b3IubmFtZSkge1xuICAgICAgcmV0dXJuIEFOT05ZTU9VUztcbiAgICB9XG4gICAgcmV0dXJuIHByb3BWYWx1ZS5jb25zdHJ1Y3Rvci5uYW1lO1xuICB9XG5cbiAgUmVhY3RQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMgPSBjaGVja1Byb3BUeXBlcztcbiAgUmVhY3RQcm9wVHlwZXMucmVzZXRXYXJuaW5nQ2FjaGUgPSBjaGVja1Byb3BUeXBlcy5yZXNldFdhcm5pbmdDYWNoZTtcbiAgUmVhY3RQcm9wVHlwZXMuUHJvcFR5cGVzID0gUmVhY3RQcm9wVHlwZXM7XG5cbiAgcmV0dXJuIFJlYWN0UHJvcFR5cGVzO1xufTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFyIFJlYWN0SXMgPSByZXF1aXJlKCdyZWFjdC1pcycpO1xuXG4gIC8vIEJ5IGV4cGxpY2l0bHkgdXNpbmcgYHByb3AtdHlwZXNgIHlvdSBhcmUgb3B0aW5nIGludG8gbmV3IGRldmVsb3BtZW50IGJlaGF2aW9yLlxuICAvLyBodHRwOi8vZmIubWUvcHJvcC10eXBlcy1pbi1wcm9kXG4gIHZhciB0aHJvd09uRGlyZWN0QWNjZXNzID0gdHJ1ZTtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2ZhY3RvcnlXaXRoVHlwZUNoZWNrZXJzJykoUmVhY3RJcy5pc0VsZW1lbnQsIHRocm93T25EaXJlY3RBY2Nlc3MpO1xufSBlbHNlIHtcbiAgLy8gQnkgZXhwbGljaXRseSB1c2luZyBgcHJvcC10eXBlc2AgeW91IGFyZSBvcHRpbmcgaW50byBuZXcgcHJvZHVjdGlvbiBiZWhhdmlvci5cbiAgLy8gaHR0cDovL2ZiLm1lL3Byb3AtdHlwZXMtaW4tcHJvZFxuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zJykoKTtcbn1cbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSAnU0VDUkVUX0RPX05PVF9QQVNTX1RISVNfT1JfWU9VX1dJTExfQkVfRklSRUQnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0UHJvcFR5cGVzU2VjcmV0O1xuIiwiLyoqIEBsaWNlbnNlIFJlYWN0IHYxNi4xMy4xXG4gKiByZWFjdC1pcy5kZXZlbG9wbWVudC5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgKGZ1bmN0aW9uKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG4vLyBUaGUgU3ltYm9sIHVzZWQgdG8gdGFnIHRoZSBSZWFjdEVsZW1lbnQtbGlrZSB0eXBlcy4gSWYgdGhlcmUgaXMgbm8gbmF0aXZlIFN5bWJvbFxuLy8gbm9yIHBvbHlmaWxsLCB0aGVuIGEgcGxhaW4gbnVtYmVyIGlzIHVzZWQgZm9yIHBlcmZvcm1hbmNlLlxudmFyIGhhc1N5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLmZvcjtcbnZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JykgOiAweGVhYzc7XG52YXIgUkVBQ1RfUE9SVEFMX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5wb3J0YWwnKSA6IDB4ZWFjYTtcbnZhciBSRUFDVF9GUkFHTUVOVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZnJhZ21lbnQnKSA6IDB4ZWFjYjtcbnZhciBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3RyaWN0X21vZGUnKSA6IDB4ZWFjYztcbnZhciBSRUFDVF9QUk9GSUxFUl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucHJvZmlsZXInKSA6IDB4ZWFkMjtcbnZhciBSRUFDVF9QUk9WSURFUl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucHJvdmlkZXInKSA6IDB4ZWFjZDtcbnZhciBSRUFDVF9DT05URVhUX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5jb250ZXh0JykgOiAweGVhY2U7IC8vIFRPRE86IFdlIGRvbid0IHVzZSBBc3luY01vZGUgb3IgQ29uY3VycmVudE1vZGUgYW55bW9yZS4gVGhleSB3ZXJlIHRlbXBvcmFyeVxuLy8gKHVuc3RhYmxlKSBBUElzIHRoYXQgaGF2ZSBiZWVuIHJlbW92ZWQuIENhbiB3ZSByZW1vdmUgdGhlIHN5bWJvbHM/XG5cbnZhciBSRUFDVF9BU1lOQ19NT0RFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5hc3luY19tb2RlJykgOiAweGVhY2Y7XG52YXIgUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5jb25jdXJyZW50X21vZGUnKSA6IDB4ZWFjZjtcbnZhciBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZm9yd2FyZF9yZWYnKSA6IDB4ZWFkMDtcbnZhciBSRUFDVF9TVVNQRU5TRV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3VzcGVuc2UnKSA6IDB4ZWFkMTtcbnZhciBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zdXNwZW5zZV9saXN0JykgOiAweGVhZDg7XG52YXIgUkVBQ1RfTUVNT19UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QubWVtbycpIDogMHhlYWQzO1xudmFyIFJFQUNUX0xBWllfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmxhenknKSA6IDB4ZWFkNDtcbnZhciBSRUFDVF9CTE9DS19UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuYmxvY2snKSA6IDB4ZWFkOTtcbnZhciBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZnVuZGFtZW50YWwnKSA6IDB4ZWFkNTtcbnZhciBSRUFDVF9SRVNQT05ERVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnJlc3BvbmRlcicpIDogMHhlYWQ2O1xudmFyIFJFQUNUX1NDT1BFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zY29wZScpIDogMHhlYWQ3O1xuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSkge1xuICByZXR1cm4gdHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nIHx8IC8vIE5vdGU6IGl0cyB0eXBlb2YgbWlnaHQgYmUgb3RoZXIgdGhhbiAnc3ltYm9sJyBvciAnbnVtYmVyJyBpZiBpdCdzIGEgcG9seWZpbGwuXG4gIHR5cGUgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFIHx8IHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsICYmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9MQVpZX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1BST1ZJREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9SRVNQT05ERVJfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9TQ09QRV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0JMT0NLX1RZUEUpO1xufVxuXG5mdW5jdGlvbiB0eXBlT2Yob2JqZWN0KSB7XG4gIGlmICh0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwpIHtcbiAgICB2YXIgJCR0eXBlb2YgPSBvYmplY3QuJCR0eXBlb2Y7XG5cbiAgICBzd2l0Y2ggKCQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0VMRU1FTlRfVFlQRTpcbiAgICAgICAgdmFyIHR5cGUgPSBvYmplY3QudHlwZTtcblxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICBjYXNlIFJFQUNUX0FTWU5DX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfRlJBR01FTlRfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1BST0ZJTEVSX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcbiAgICAgICAgICAgIHJldHVybiB0eXBlO1xuXG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHZhciAkJHR5cGVvZlR5cGUgPSB0eXBlICYmIHR5cGUuJCR0eXBlb2Y7XG5cbiAgICAgICAgICAgIHN3aXRjaCAoJCR0eXBlb2ZUeXBlKSB7XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfQ09OVEVYVF9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9QUk9WSURFUl9UWVBFOlxuICAgICAgICAgICAgICAgIHJldHVybiAkJHR5cGVvZlR5cGU7XG5cbiAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gJCR0eXBlb2Y7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICBjYXNlIFJFQUNUX1BPUlRBTF9UWVBFOlxuICAgICAgICByZXR1cm4gJCR0eXBlb2Y7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn0gLy8gQXN5bmNNb2RlIGlzIGRlcHJlY2F0ZWQgYWxvbmcgd2l0aCBpc0FzeW5jTW9kZVxuXG52YXIgQXN5bmNNb2RlID0gUkVBQ1RfQVNZTkNfTU9ERV9UWVBFO1xudmFyIENvbmN1cnJlbnRNb2RlID0gUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEU7XG52YXIgQ29udGV4dENvbnN1bWVyID0gUkVBQ1RfQ09OVEVYVF9UWVBFO1xudmFyIENvbnRleHRQcm92aWRlciA9IFJFQUNUX1BST1ZJREVSX1RZUEU7XG52YXIgRWxlbWVudCA9IFJFQUNUX0VMRU1FTlRfVFlQRTtcbnZhciBGb3J3YXJkUmVmID0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTtcbnZhciBGcmFnbWVudCA9IFJFQUNUX0ZSQUdNRU5UX1RZUEU7XG52YXIgTGF6eSA9IFJFQUNUX0xBWllfVFlQRTtcbnZhciBNZW1vID0gUkVBQ1RfTUVNT19UWVBFO1xudmFyIFBvcnRhbCA9IFJFQUNUX1BPUlRBTF9UWVBFO1xudmFyIFByb2ZpbGVyID0gUkVBQ1RfUFJPRklMRVJfVFlQRTtcbnZhciBTdHJpY3RNb2RlID0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRTtcbnZhciBTdXNwZW5zZSA9IFJFQUNUX1NVU1BFTlNFX1RZUEU7XG52YXIgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUgPSBmYWxzZTsgLy8gQXN5bmNNb2RlIHNob3VsZCBiZSBkZXByZWNhdGVkXG5cbmZ1bmN0aW9uIGlzQXN5bmNNb2RlKG9iamVjdCkge1xuICB7XG4gICAgaWYgKCFoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSkge1xuICAgICAgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUgPSB0cnVlOyAvLyBVc2luZyBjb25zb2xlWyd3YXJuJ10gdG8gZXZhZGUgQmFiZWwgYW5kIEVTTGludFxuXG4gICAgICBjb25zb2xlWyd3YXJuJ10oJ1RoZSBSZWFjdElzLmlzQXN5bmNNb2RlKCkgYWxpYXMgaGFzIGJlZW4gZGVwcmVjYXRlZCwgJyArICdhbmQgd2lsbCBiZSByZW1vdmVkIGluIFJlYWN0IDE3Ky4gVXBkYXRlIHlvdXIgY29kZSB0byB1c2UgJyArICdSZWFjdElzLmlzQ29uY3VycmVudE1vZGUoKSBpbnN0ZWFkLiBJdCBoYXMgdGhlIGV4YWN0IHNhbWUgQVBJLicpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBpc0NvbmN1cnJlbnRNb2RlKG9iamVjdCkgfHwgdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0FTWU5DX01PREVfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzQ29uY3VycmVudE1vZGUob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEU7XG59XG5mdW5jdGlvbiBpc0NvbnRleHRDb25zdW1lcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9DT05URVhUX1RZUEU7XG59XG5mdW5jdGlvbiBpc0NvbnRleHRQcm92aWRlcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QUk9WSURFUl9UWVBFO1xufVxuZnVuY3Rpb24gaXNFbGVtZW50KG9iamVjdCkge1xuICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsICYmIG9iamVjdC4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNGb3J3YXJkUmVmKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU7XG59XG5mdW5jdGlvbiBpc0ZyYWdtZW50KG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEU7XG59XG5mdW5jdGlvbiBpc0xhenkob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfTEFaWV9UWVBFO1xufVxuZnVuY3Rpb24gaXNNZW1vKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX01FTU9fVFlQRTtcbn1cbmZ1bmN0aW9uIGlzUG9ydGFsKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BPUlRBTF9UWVBFO1xufVxuZnVuY3Rpb24gaXNQcm9maWxlcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFO1xufVxuZnVuY3Rpb24gaXNTdHJpY3RNb2RlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEU7XG59XG5mdW5jdGlvbiBpc1N1c3BlbnNlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEU7XG59XG5cbmV4cG9ydHMuQXN5bmNNb2RlID0gQXN5bmNNb2RlO1xuZXhwb3J0cy5Db25jdXJyZW50TW9kZSA9IENvbmN1cnJlbnRNb2RlO1xuZXhwb3J0cy5Db250ZXh0Q29uc3VtZXIgPSBDb250ZXh0Q29uc3VtZXI7XG5leHBvcnRzLkNvbnRleHRQcm92aWRlciA9IENvbnRleHRQcm92aWRlcjtcbmV4cG9ydHMuRWxlbWVudCA9IEVsZW1lbnQ7XG5leHBvcnRzLkZvcndhcmRSZWYgPSBGb3J3YXJkUmVmO1xuZXhwb3J0cy5GcmFnbWVudCA9IEZyYWdtZW50O1xuZXhwb3J0cy5MYXp5ID0gTGF6eTtcbmV4cG9ydHMuTWVtbyA9IE1lbW87XG5leHBvcnRzLlBvcnRhbCA9IFBvcnRhbDtcbmV4cG9ydHMuUHJvZmlsZXIgPSBQcm9maWxlcjtcbmV4cG9ydHMuU3RyaWN0TW9kZSA9IFN0cmljdE1vZGU7XG5leHBvcnRzLlN1c3BlbnNlID0gU3VzcGVuc2U7XG5leHBvcnRzLmlzQXN5bmNNb2RlID0gaXNBc3luY01vZGU7XG5leHBvcnRzLmlzQ29uY3VycmVudE1vZGUgPSBpc0NvbmN1cnJlbnRNb2RlO1xuZXhwb3J0cy5pc0NvbnRleHRDb25zdW1lciA9IGlzQ29udGV4dENvbnN1bWVyO1xuZXhwb3J0cy5pc0NvbnRleHRQcm92aWRlciA9IGlzQ29udGV4dFByb3ZpZGVyO1xuZXhwb3J0cy5pc0VsZW1lbnQgPSBpc0VsZW1lbnQ7XG5leHBvcnRzLmlzRm9yd2FyZFJlZiA9IGlzRm9yd2FyZFJlZjtcbmV4cG9ydHMuaXNGcmFnbWVudCA9IGlzRnJhZ21lbnQ7XG5leHBvcnRzLmlzTGF6eSA9IGlzTGF6eTtcbmV4cG9ydHMuaXNNZW1vID0gaXNNZW1vO1xuZXhwb3J0cy5pc1BvcnRhbCA9IGlzUG9ydGFsO1xuZXhwb3J0cy5pc1Byb2ZpbGVyID0gaXNQcm9maWxlcjtcbmV4cG9ydHMuaXNTdHJpY3RNb2RlID0gaXNTdHJpY3RNb2RlO1xuZXhwb3J0cy5pc1N1c3BlbnNlID0gaXNTdXNwZW5zZTtcbmV4cG9ydHMuaXNWYWxpZEVsZW1lbnRUeXBlID0gaXNWYWxpZEVsZW1lbnRUeXBlO1xuZXhwb3J0cy50eXBlT2YgPSB0eXBlT2Y7XG4gIH0pKCk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtaXMucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBoYXNoKHN0cikge1xuICB2YXIgaGFzaCA9IDUzODEsXG4gICAgICBpICAgID0gc3RyLmxlbmd0aDtcblxuICB3aGlsZShpKSB7XG4gICAgaGFzaCA9IChoYXNoICogMzMpIF4gc3RyLmNoYXJDb2RlQXQoLS1pKTtcbiAgfVxuXG4gIC8qIEphdmFTY3JpcHQgZG9lcyBiaXR3aXNlIG9wZXJhdGlvbnMgKGxpa2UgWE9SLCBhYm92ZSkgb24gMzItYml0IHNpZ25lZFxuICAgKiBpbnRlZ2Vycy4gU2luY2Ugd2Ugd2FudCB0aGUgcmVzdWx0cyB0byBiZSBhbHdheXMgcG9zaXRpdmUsIGNvbnZlcnQgdGhlXG4gICAqIHNpZ25lZCBpbnQgdG8gYW4gdW5zaWduZWQgYnkgZG9pbmcgYW4gdW5zaWduZWQgYml0c2hpZnQuICovXG4gIHJldHVybiBoYXNoID4+PiAwO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc2g7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAZW1vdGlvbi9yZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvY29uc3RhbnRzLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2RvY3VtZW50LWNvbnRleHQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvaGVhZC1tYW5hZ2VyLWNvbnRleHQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvZ2V0LXBhZ2UtZmlsZXMuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvdXRpbHMuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiXSwic291cmNlUm9vdCI6IiJ9