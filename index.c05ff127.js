// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"79gfX":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4a236f9275d0a351";
module.bundle.HMR_BUNDLE_ID = "91f24895c05ff127";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    var parents = getParents(module.bundle.root, id); // If no parents, the asset is new. Prevent reloading the page.
    if (!parents.length) return true;
    return parents.some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"i8ewE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _index = require("./MagicHand/index");
var _indexDefault = parcelHelpers.interopDefault(_index);
document.body.onload = ()=>{
    const aside = document.querySelector("aside#list");
    const canvas = document.querySelector("section#canvas");
    const label = document.querySelector("section#label");
    const magicHand = new _indexDefault.default(canvas);
    magicHand.availableGesture.forEach((gesture)=>{
        const gestureItem = document.createElement("span");
        gestureItem.className = "gesture-item";
        gestureItem.dataset["gesture"] = gesture;
        gestureItem.innerHTML = gesture;
        aside.appendChild(gestureItem);
    });
    magicHand.debug();
    magicHand.onGesture(handleGesture);
    magicHand.start();
    function handleGesture({ left , right  }) {
        label.querySelector("div#left-hand>span.value").innerHTML = left;
        label.querySelector("div#right-hand>span.value").innerHTML = right;
        // hightlight
        document.querySelectorAll("aside>span").forEach((span)=>{
            span.classList.remove("highlight");
        });
        document.querySelector(`[data-gesture=${left}]`)?.classList.add("highlight");
        document.querySelector(`[data-gesture=${right}]`)?.classList.add("highlight");
    }
};

},{"./MagicHand/index":"bYgi2","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"bYgi2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _hands = require("@mediapipe/hands");
var _cameraUtils = require("@mediapipe/camera_utils");
var _drawingUtils = require("@mediapipe/drawing_utils");
var _gestureValidation = require("./gestureValidation");
var _styleScss = require("./style.scss");
class MagicHand {
    constructor(target){
        // Elements
        this.videoElm = document.createElement("video");
        this.videoElm.id = "input";
        document.body.appendChild(this.videoElm);
        this.canvas = document.createElement("canvas");
        this.canvas.id = "debug";
        this.ctx = this.canvas.getContext("2d");
        this.target = target;
        // LifeCycle
        this.isDebug = false;
        // Detection Data
        this.handIdx = {
            0: undefined,
            1: undefined
        };
        this.existHand = {
            left: false,
            right: false
        };
        this.handPose = {
            left: "noexist",
            right: "noexist"
        };
        this.handPosition = {
            left: [],
            right: []
        };
        this.availableGesture = [
            "stand",
            "stretchBack",
            "rockNRoll",
            "victory",
            "fist", 
        ];
    }
    start() {
        this.resize();
        this.initHands();
        this.initCamera();
        this.hands.onResults(this.onResults.bind(this));
        this.handleEventListener();
    }
    debug() {
        this.isDebug = true;
        this.target.appendChild(this.canvas);
    }
    getAvailableGesture() {
        return this.availableGesture;
    }
    initHands() {
        this.hands = new _hands.Hands({
            locateFile: (file)=>{
                return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`;
            }
        });
        this.hands.setOptions({
            maxNumHands: 2,
            modelComplexity: 1,
            minDetectionConfidence: 0.5,
            minTrackingConfidence: 0.5,
            selfieMode: true
        });
    }
    initCamera() {
        this.camera = new _cameraUtils.Camera(this.videoElm, {
            onFrame: async ()=>{
                await this.hands.send({
                    image: this.videoElm
                });
            },
            width: 1920,
            height: 1080
        });
        this.camera.start();
    }
    debugResult(results) {
        this.ctx.save();
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.fillStyle = "transparent";
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        // this.ctx.drawImage(
        //   results.image,
        //   0,
        //   0,
        //   this.canvas.width,
        //   this.canvas.height
        // );
        if (results.multiHandLandmarks) {
            const { multiHandLandmarks  } = results;
            for(let i = 0; i < 2; i++){
                const landmark = multiHandLandmarks[i];
                const hand = this.handIdx[i]; // left or right
                if (hand) {
                    _drawingUtils.drawConnectors(this.ctx, landmark, _hands.HAND_CONNECTIONS, {
                        color: hand === "left" ? "#006E7F" : "#112B3C",
                        lineWidth: 5
                    });
                    _drawingUtils.drawLandmarks(this.ctx, landmark, {
                        color: hand === "left" ? "#73777B" : "#205375",
                        lineWidth: 2
                    });
                }
            }
        }
        this.ctx.restore();
    }
    onResults(results1) {
        if (this.isDebug) this.debugResult(results1);
        this.existHand = {
            left: false,
            right: false
        };
        const { multiHandLandmarks , multiHandWorldLandmarks , multiHandedness  } = results1;
        // Left or Right
        for(let i = 0; i < 2; i++){
            const hand = multiHandedness[i];
            if (hand) this.handIdx[i] = `${hand.label}`.toLowerCase();
            else this.handIdx[i] = undefined;
        }
        for(let i1 = 0; i1 < 2; i1++){
            const hand = this.handIdx[i1]; // left or right
            if (hand) {
                this.existHand[hand] = true;
                const landmark = multiHandLandmarks[i1];
                const worldLandmark = multiHandWorldLandmarks[i1];
                if (landmark) {
                    this.handPose[hand] = this.findGesture({
                        landmark,
                        worldLandmark
                    });
                    this.handPosition[hand] = this.findPosition({
                        landmark
                    });
                } else {
                    this.handPose[hand] = "unknown";
                    this.handPosition[hand] = [];
                }
            }
        }
        // 보이지 않는 손 초기화
        if (!this.existHand.left) {
            this.handPose.left = "noexist";
            this.handPosition.left = [];
        }
        if (!this.existHand.right) {
            this.handPose.right = "noexist";
            this.handPosition.right = [];
        }
    }
    findGesture({ landmark , worldLandmark  }) {
        if (_gestureValidation.isRockNRoll(landmark)) return "rockNRoll";
        else if (_gestureValidation.isVictory(landmark)) return "victory";
        else if (_gestureValidation.isFist(landmark)) return "fist";
        else if (_gestureValidation.isStretchBack(worldLandmark)) return "stretchBack";
        else if (_gestureValidation.isStand(landmark)) return "stand";
        else return "unknown";
    }
    findPosition({ landmark: landmark1  }) {
        const ret = [];
        ret.push(landmark1[5], landmark1[8], landmark1[17], landmark1[20]);
        return ret;
    }
    onGesture(callback) {
        setInterval(callback.bind(this, this.handPose), 1000 / 24);
    }
    onPosition(callback1) {
        setInterval(callback1.bind(this, this.handPosition), 1000 / 24);
    // setInterval(callback.bind(this, this.handPosition), 5000);
    }
    handleEventListener() {
        window.addEventListener("resize", this.resize.bind(this));
    }
    resize() {
        this.size = {
            width: this.target.clientWidth,
            height: this.target.clientHeight
        };
        this.canvas.width = this.size.width;
        this.canvas.height = this.size.height;
    }
}
exports.default = MagicHand;

},{"@mediapipe/hands":"37Lsh","@mediapipe/camera_utils":"jo1qi","@mediapipe/drawing_utils":"hRegf","./gestureValidation":"aNPGb","./style.scss":"708wo","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"37Lsh":[function(require,module,exports) {
var global = arguments[3];
(function() {
    var x;
    function aa(a) {
        var b = 0;
        return function() {
            return b < a.length ? {
                done: !1,
                value: a[b++]
            } : {
                done: !0
            };
        };
    }
    var ba = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
        if (a == Array.prototype || a == Object.prototype) return a;
        a[b] = c.value;
        return a;
    };
    function ca(a) {
        a = [
            "object" == typeof globalThis && globalThis,
            a,
            "object" == typeof window && window,
            "object" == typeof self && self,
            "object" == typeof global && global
        ];
        for(var b = 0; b < a.length; ++b){
            var c = a[b];
            if (c && c.Math == Math) return c;
        }
        throw Error("Cannot find global object");
    }
    var y = ca(this);
    function B(a, b) {
        if (b) a: {
            var c = y;
            a = a.split(".");
            for(var d = 0; d < a.length - 1; d++){
                var e = a[d];
                if (!(e in c)) break a;
                c = c[e];
            }
            a = a[a.length - 1];
            d = c[a];
            b = b(d);
            b != d && null != b && ba(c, a, {
                configurable: !0,
                writable: !0,
                value: b
            });
        }
    }
    B("Symbol", function(a) {
        function b(g) {
            if (this instanceof b) throw new TypeError("Symbol is not a constructor");
            return new c(d + (g || "") + "_" + e++, g);
        }
        function c(g, f) {
            this.g = g;
            ba(this, "description", {
                configurable: !0,
                writable: !0,
                value: f
            });
        }
        if (a) return a;
        c.prototype.toString = function() {
            return this.g;
        };
        var d = "jscomp_symbol_" + (1000000000 * Math.random() >>> 0) + "_", e = 0;
        return b;
    });
    B("Symbol.iterator", function(a) {
        if (a) return a;
        a = Symbol("Symbol.iterator");
        for(var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++){
            var d = y[b[c]];
            "function" === typeof d && "function" != typeof d.prototype[a] && ba(d.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function() {
                    return da(aa(this));
                }
            });
        }
        return a;
    });
    function da(a) {
        a = {
            next: a
        };
        a[Symbol.iterator] = function() {
            return this;
        };
        return a;
    }
    function C(a) {
        var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
        return b ? b.call(a) : {
            next: aa(a)
        };
    }
    function ea(a) {
        if (!(a instanceof Array)) {
            a = C(a);
            for(var b, c = []; !(b = a.next()).done;)c.push(b.value);
            a = c;
        }
        return a;
    }
    var fa = "function" == typeof Object.create ? Object.create : function(a) {
        function b() {
        }
        b.prototype = a;
        return new b;
    }, ha;
    if ("function" == typeof Object.setPrototypeOf) ha = Object.setPrototypeOf;
    else {
        var ia;
        a: {
            var ja = {
                a: !0
            }, ka = {
            };
            try {
                ka.__proto__ = ja;
                ia = ka.a;
                break a;
            } catch (a) {
            }
            ia = !1;
        }
        ha = ia ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a;
        } : null;
    }
    var la = ha;
    function E(a, b) {
        a.prototype = fa(b.prototype);
        a.prototype.constructor = a;
        if (la) la(a, b);
        else for(var c in b)if ("prototype" != c) {
            if (Object.defineProperties) {
                var d = Object.getOwnPropertyDescriptor(b, c);
                d && Object.defineProperty(a, c, d);
            } else a[c] = b[c];
        }
        a.da = b.prototype;
    }
    function ma() {
        this.l = !1;
        this.i = null;
        this.h = void 0;
        this.g = 1;
        this.s = this.m = 0;
        this.j = null;
    }
    function na(a) {
        if (a.l) throw new TypeError("Generator is already running");
        a.l = !0;
    }
    ma.prototype.o = function(a) {
        this.h = a;
    };
    function oa(a, b) {
        a.j = {
            U: b,
            V: !0
        };
        a.g = a.m || a.s;
    }
    ma.prototype.return = function(a) {
        this.j = {
            return: a
        };
        this.g = this.s;
    };
    function F(a, b, c) {
        a.g = c;
        return {
            value: b
        };
    }
    function pa(a) {
        this.g = new ma;
        this.h = a;
    }
    function qa(a, b) {
        na(a.g);
        var c = a.g.i;
        if (c) return ra(a, "return" in c ? c["return"] : function(d) {
            return {
                value: d,
                done: !0
            };
        }, b, a.g.return);
        a.g.return(b);
        return G(a);
    }
    function ra(a, b, c, d) {
        try {
            var e = b.call(a.g.i, c);
            if (!(e instanceof Object)) throw new TypeError("Iterator result " + e + " is not an object");
            if (!e.done) return a.g.l = !1, e;
            var g = e.value;
        } catch (f) {
            return a.g.i = null, oa(a.g, f), G(a);
        }
        a.g.i = null;
        d.call(a.g, g);
        return G(a);
    }
    function G(a) {
        for(; a.g.g;)try {
            var b = a.h(a.g);
            if (b) return a.g.l = !1, {
                value: b.value,
                done: !1
            };
        } catch (c) {
            a.g.h = void 0, oa(a.g, c);
        }
        a.g.l = !1;
        if (a.g.j) {
            b = a.g.j;
            a.g.j = null;
            if (b.V) throw b.U;
            return {
                value: b.return,
                done: !0
            };
        }
        return {
            value: void 0,
            done: !0
        };
    }
    function sa(a) {
        this.next = function(b) {
            na(a.g);
            a.g.i ? b = ra(a, a.g.i.next, b, a.g.o) : (a.g.o(b), b = G(a));
            return b;
        };
        this.throw = function(b) {
            na(a.g);
            a.g.i ? b = ra(a, a.g.i["throw"], b, a.g.o) : (oa(a.g, b), b = G(a));
            return b;
        };
        this.return = function(b) {
            return qa(a, b);
        };
        this[Symbol.iterator] = function() {
            return this;
        };
    }
    function ta(a) {
        function b(d) {
            return a.next(d);
        }
        function c(d) {
            return a.throw(d);
        }
        return new Promise(function(d, e) {
            function g(f) {
                f.done ? d(f.value) : Promise.resolve(f.value).then(b, c).then(g, e);
            }
            g(a.next());
        });
    }
    function H(a) {
        return ta(new sa(new pa(a)));
    }
    B("Promise", function(a) {
        function b(f) {
            this.h = 0;
            this.i = void 0;
            this.g = [];
            this.o = !1;
            var k = this.j();
            try {
                f(k.resolve, k.reject);
            } catch (h) {
                k.reject(h);
            }
        }
        function c() {
            this.g = null;
        }
        function d(f) {
            return f instanceof b ? f : new b(function(k) {
                k(f);
            });
        }
        if (a) return a;
        c.prototype.h = function(f) {
            if (null == this.g) {
                this.g = [];
                var k = this;
                this.i(function() {
                    k.l();
                });
            }
            this.g.push(f);
        };
        var e = y.setTimeout;
        c.prototype.i = function(f) {
            e(f, 0);
        };
        c.prototype.l = function() {
            for(; this.g && this.g.length;){
                var f = this.g;
                this.g = [];
                for(var k = 0; k < f.length; ++k){
                    var h = f[k];
                    f[k] = null;
                    try {
                        h();
                    } catch (l) {
                        this.j(l);
                    }
                }
            }
            this.g = null;
        };
        c.prototype.j = function(f) {
            this.i(function() {
                throw f;
            });
        };
        b.prototype.j = function() {
            function f(l) {
                return function(n) {
                    h || (h = !0, l.call(k, n));
                };
            }
            var k = this, h = !1;
            return {
                resolve: f(this.C),
                reject: f(this.l)
            };
        };
        b.prototype.C = function(f) {
            if (f === this) this.l(new TypeError("A Promise cannot resolve to itself"));
            else if (f instanceof b) this.F(f);
            else {
                a: switch(typeof f){
                    case "object":
                        var k = null != f;
                        break a;
                    case "function":
                        k = !0;
                        break a;
                    default:
                        k = !1;
                }
                k ? this.v(f) : this.m(f);
            }
        };
        b.prototype.v = function(f) {
            var k = void 0;
            try {
                k = f.then;
            } catch (h) {
                this.l(h);
                return;
            }
            "function" == typeof k ? this.G(k, f) : this.m(f);
        };
        b.prototype.l = function(f) {
            this.s(2, f);
        };
        b.prototype.m = function(f) {
            this.s(1, f);
        };
        b.prototype.s = function(f, k) {
            if (0 != this.h) throw Error("Cannot settle(" + f + ", " + k + "): Promise already settled in state" + this.h);
            this.h = f;
            this.i = k;
            2 === this.h && this.D();
            this.A();
        };
        b.prototype.D = function() {
            var f = this;
            e(function() {
                if (f.B()) {
                    var k = y.console;
                    "undefined" !== typeof k && k.error(f.i);
                }
            }, 1);
        };
        b.prototype.B = function() {
            if (this.o) return !1;
            var f = y.CustomEvent, k = y.Event, h = y.dispatchEvent;
            if ("undefined" === typeof h) return !0;
            "function" === typeof f ? f = new f("unhandledrejection", {
                cancelable: !0
            }) : "function" === typeof k ? f = new k("unhandledrejection", {
                cancelable: !0
            }) : (f = y.document.createEvent("CustomEvent"), f.initCustomEvent("unhandledrejection", !1, !0, f));
            f.promise = this;
            f.reason = this.i;
            return h(f);
        };
        b.prototype.A = function() {
            if (null != this.g) {
                for(var f = 0; f < this.g.length; ++f)g.h(this.g[f]);
                this.g = null;
            }
        };
        var g = new c;
        b.prototype.F = function(f) {
            var k = this.j();
            f.J(k.resolve, k.reject);
        };
        b.prototype.G = function(f, k) {
            var h = this.j();
            try {
                f.call(k, h.resolve, h.reject);
            } catch (l) {
                h.reject(l);
            }
        };
        b.prototype.then = function(f, k) {
            function h(p, m) {
                return "function" == typeof p ? function(q) {
                    try {
                        l(p(q));
                    } catch (t) {
                        n(t);
                    }
                } : m;
            }
            var l, n, r = new b(function(p, m) {
                l = p;
                n = m;
            });
            this.J(h(f, l), h(k, n));
            return r;
        };
        b.prototype.catch = function(f) {
            return this.then(void 0, f);
        };
        b.prototype.J = function(f, k) {
            function h() {
                switch(l.h){
                    case 1:
                        f(l.i);
                        break;
                    case 2:
                        k(l.i);
                        break;
                    default:
                        throw Error("Unexpected state: " + l.h);
                }
            }
            var l = this;
            null == this.g ? g.h(h) : this.g.push(h);
            this.o = !0;
        };
        b.resolve = d;
        b.reject = function(f) {
            return new b(function(k, h) {
                h(f);
            });
        };
        b.race = function(f) {
            return new b(function(k, h) {
                for(var l = C(f), n = l.next(); !n.done; n = l.next())d(n.value).J(k, h);
            });
        };
        b.all = function(f) {
            var k = C(f), h = k.next();
            return h.done ? d([]) : new b(function(l, n) {
                function r(q) {
                    return function(t) {
                        p[q] = t;
                        m--;
                        0 == m && l(p);
                    };
                }
                var p = [], m = 0;
                do p.push(void 0), m++, d(h.value).J(r(p.length - 1), n), h = k.next();
                while (!h.done)
            });
        };
        return b;
    });
    function ua(a, b) {
        a instanceof String && (a += "");
        var c = 0, d = !1, e = {
            next: function() {
                if (!d && c < a.length) {
                    var g = c++;
                    return {
                        value: b(g, a[g]),
                        done: !1
                    };
                }
                d = !0;
                return {
                    done: !0,
                    value: void 0
                };
            }
        };
        e[Symbol.iterator] = function() {
            return e;
        };
        return e;
    }
    var va = "function" == typeof Object.assign ? Object.assign : function(a, b) {
        for(var c = 1; c < arguments.length; c++){
            var d = arguments[c];
            if (d) for(var e in d)Object.prototype.hasOwnProperty.call(d, e) && (a[e] = d[e]);
        }
        return a;
    };
    B("Object.assign", function(a) {
        return a || va;
    });
    B("Object.is", function(a) {
        return a ? a : function(b, c) {
            return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c;
        };
    });
    B("Array.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            var d = this;
            d instanceof String && (d = String(d));
            var e = d.length;
            c = c || 0;
            for(0 > c && (c = Math.max(c + e, 0)); c < e; c++){
                var g = d[c];
                if (g === b || Object.is(g, b)) return !0;
            }
            return !1;
        };
    });
    B("String.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            if (null == this) throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");
            if (b instanceof RegExp) throw new TypeError("First argument to String.prototype.includes must not be a regular expression");
            return -1 !== this.indexOf(b, c || 0);
        };
    });
    B("Array.prototype.keys", function(a) {
        return a ? a : function() {
            return ua(this, function(b) {
                return b;
            });
        };
    });
    var wa = this || self;
    function J(a, b) {
        a = a.split(".");
        var c = wa;
        a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
        for(var d; a.length && (d = a.shift());)a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {
        } : c[d] = b;
    }
    function xa(a) {
        wa.setTimeout(function() {
            throw a;
        }, 0);
    }
    function K(a) {
        xa(a);
        return;
    }
    function ya(a, b) {
        K(Error("Invalid wire type: " + a + " (at position " + b + ")"));
    }
    function za() {
        K(Error("Failed to read varint, encoding is invalid."));
    }
    function Aa(a, b) {
        b = String.fromCharCode.apply(null, b);
        return null == a ? b : a + b;
    }
    var Ba, Ca = "undefined" !== typeof TextDecoder, Da, Ea = "undefined" !== typeof TextEncoder;
    function Fa(a) {
        if (Ea) a = (Da || (Da = new TextEncoder)).encode(a);
        else {
            var b = void 0;
            b = void 0 === b ? !1 : b;
            for(var c = 0, d = new Uint8Array(3 * a.length), e = 0; e < a.length; e++){
                var g = a.charCodeAt(e);
                if (128 > g) d[c++] = g;
                else {
                    if (2048 > g) d[c++] = g >> 6 | 192;
                    else {
                        if (55296 <= g && 57343 >= g) {
                            if (56319 >= g && e < a.length) {
                                var f = a.charCodeAt(++e);
                                if (56320 <= f && 57343 >= f) {
                                    g = 1024 * (g - 55296) + f - 56320 + 65536;
                                    d[c++] = g >> 18 | 240;
                                    d[c++] = g >> 12 & 63 | 128;
                                    d[c++] = g >> 6 & 63 | 128;
                                    d[c++] = g & 63 | 128;
                                    continue;
                                } else e--;
                            }
                            if (b) throw Error("Found an unpaired surrogate");
                            g = 65533;
                        }
                        d[c++] = g >> 12 | 224;
                        d[c++] = g >> 6 & 63 | 128;
                    }
                    d[c++] = g & 63 | 128;
                }
            }
            a = d.subarray(0, c);
        }
        return a;
    }
    var Ga = {
    }, L = null;
    function Ha(a) {
        var b;
        void 0 === b && (b = 0);
        Ia();
        b = Ga[b];
        for(var c = Array(Math.floor(a.length / 3)), d = b[64] || "", e = 0, g = 0; e < a.length - 2; e += 3){
            var f = a[e], k = a[e + 1], h = a[e + 2], l = b[f >> 2];
            f = b[(f & 3) << 4 | k >> 4];
            k = b[(k & 15) << 2 | h >> 6];
            h = b[h & 63];
            c[g++] = l + f + k + h;
        }
        l = 0;
        h = d;
        switch(a.length - e){
            case 2:
                l = a[e + 1], h = b[(l & 15) << 2] || d;
            case 1:
                a = a[e], c[g] = b[a >> 2] + b[(a & 3) << 4 | l >> 4] + h + d;
        }
        return c.join("");
    }
    function Ja(a) {
        var b = a.length, c = 3 * b / 4;
        c % 3 ? c = Math.floor(c) : -1 != "=.".indexOf(a[b - 1]) && (c = -1 != "=.".indexOf(a[b - 2]) ? c - 2 : c - 1);
        var d = new Uint8Array(c), e = 0;
        Ka(a, function(g) {
            d[e++] = g;
        });
        return d.subarray(0, e);
    }
    function Ka(a, b) {
        function c(h) {
            for(; d < a.length;){
                var l = a.charAt(d++), n = L[l];
                if (null != n) return n;
                if (!/^[\s\xa0]*$/.test(l)) throw Error("Unknown base64 encoding at char: " + l);
            }
            return h;
        }
        Ia();
        for(var d = 0;;){
            var e = c(-1), g = c(0), f = c(64), k = c(64);
            if (64 === k && -1 === e) break;
            b(e << 2 | g >> 4);
            64 != f && (b(g << 4 & 240 | f >> 2), 64 != k && b(f << 6 & 192 | k));
        }
    }
    function Ia() {
        if (!L) {
            L = {
            };
            for(var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = [
                "+/=",
                "+/",
                "-_=",
                "-_.",
                "-_"
            ], c = 0; 5 > c; c++){
                var d = a.concat(b[c].split(""));
                Ga[c] = d;
                for(var e = 0; e < d.length; e++){
                    var g = d[e];
                    void 0 === L[g] && (L[g] = e);
                }
            }
        }
    }
    var La = "function" === typeof Uint8Array, Ma;
    function Na(a) {
        this.g = a;
        if (null !== a && 0 === a.length) throw Error("ByteString should be constructed with non-empty values");
    }
    Na.prototype.toJSON = function() {
        if (null == this.g) var a = "";
        else a = this.g, a = this.g = null == a || "string" === typeof a ? a : La && a instanceof Uint8Array ? Ha(a) : null;
        return a;
    };
    var Oa = "function" === typeof Uint8Array.prototype.slice;
    function Pa(a, b, c) {
        return b === c ? Ma || (Ma = new Uint8Array(0)) : Oa ? a.slice(b, c) : new Uint8Array(a.subarray(b, c));
    }
    var M = 0, N = 0;
    function Qa(a) {
        if (a.constructor === Uint8Array) return a;
        if (a.constructor === ArrayBuffer) return new Uint8Array(a);
        if (a.constructor === Array) return new Uint8Array(a);
        if (a.constructor === String) return Ja(a);
        if (a.constructor === Na) {
            if (null == a.g) var b = Ma || (Ma = new Uint8Array(0));
            else {
                b = Uint8Array;
                var c = a.g;
                c = null == c || La && null != c && c instanceof Uint8Array ? c : "string" === typeof c ? Ja(c) : null;
                a = a.g = c;
                b = new b(a);
            }
            return b;
        }
        if (a instanceof Uint8Array) return new Uint8Array(a.buffer, a.byteOffset, a.byteLength);
        throw Error("Type not convertible to a Uint8Array, expected a Uint8Array, an ArrayBuffer, a base64 encoded string, or Array of numbers");
    }
    function Ra(a, b) {
        b = void 0 === b ? {
        } : b;
        b = void 0 === b.u ? !1 : b.u;
        this.h = null;
        this.g = this.i = this.l = 0;
        this.j = !1;
        this.u = b;
        a && Sa(this, a);
    }
    function Sa(a, b) {
        a.h = Qa(b);
        a.l = 0;
        a.i = a.h.length;
        a.g = a.l;
    }
    Ra.prototype.reset = function() {
        this.g = this.l;
    };
    function O(a) {
        a.g > a.i && (a.j = !0, K(Error("Tried to read past the end of the data " + a.g + " > " + a.i)));
    }
    function P(a) {
        var b = a.h, c = b[a.g], d = c & 127;
        if (128 > c) return a.g += 1, O(a), d;
        c = b[a.g + 1];
        d |= (c & 127) << 7;
        if (128 > c) return a.g += 2, O(a), d;
        c = b[a.g + 2];
        d |= (c & 127) << 14;
        if (128 > c) return a.g += 3, O(a), d;
        c = b[a.g + 3];
        d |= (c & 127) << 21;
        if (128 > c) return a.g += 4, O(a), d;
        c = b[a.g + 4];
        d |= (c & 15) << 28;
        if (128 > c) return a.g += 5, O(a), d >>> 0;
        a.g += 5;
        if (128 <= b[a.g++] && 128 <= b[a.g++] && 128 <= b[a.g++] && 128 <= b[a.g++] && 128 <= b[a.g++]) return a.j = !0, za(), d;
        O(a);
        return d;
    }
    var Ta = [];
    function Ua() {
        this.g = new Uint8Array(64);
        this.h = 0;
    }
    function Q(a, b) {
        if (!(a.h + 1 < a.g.length)) {
            var c = a.g;
            a.g = new Uint8Array(Math.ceil(1 + 2 * a.g.length));
            a.g.set(c);
        }
        a.g[a.h++] = b;
    }
    Ua.prototype.length = function() {
        return this.h;
    };
    Ua.prototype.end = function() {
        var a = this.g, b = this.h;
        this.h = 0;
        return Pa(a, 0, b);
    };
    function S(a, b) {
        for(; 127 < b;)Q(a, b & 127 | 128), b >>>= 7;
        Q(a, b);
    }
    function Va(a) {
        var b = {
        }, c = void 0 === b.N ? !1 : b.N;
        this.m = {
            u: void 0 === b.u ? !1 : b.u
        };
        this.N = c;
        b = this.m;
        Ta.length ? (c = Ta.pop(), b && (c.u = b.u), a && Sa(c, a), a = c) : a = new Ra(a, b);
        this.g = a;
        this.l = this.g.g;
        this.h = this.i = -1;
        this.j = !1;
    }
    Va.prototype.reset = function() {
        this.g.reset();
        this.h = this.i = -1;
    };
    function Wa(a) {
        var b = a.g;
        (b = b.g == b.i) || (b = a.j) || (b = a.g, b = b.j || 0 > b.g || b.g > b.i);
        if (b) return !1;
        a.l = a.g.g;
        var c = P(a.g);
        b = c >>> 3;
        c &= 7;
        if (!(0 <= c && 5 >= c)) return a.j = !0, ya(c, a.l), !1;
        a.i = b;
        a.h = c;
        return !0;
    }
    function Xa(a) {
        switch(a.h){
            case 0:
                if (0 != a.h) Xa(a);
                else a: {
                    a = a.g;
                    for(var b = a.g, c = 0; 10 > c; c++){
                        if (0 === (a.h[b] & 128)) {
                            a.g = b + 1;
                            O(a);
                            break a;
                        }
                        b++;
                    }
                    a.j = !0;
                    za();
                }
                break;
            case 1:
                a = a.g;
                a.g += 8;
                O(a);
                break;
            case 2:
                2 != a.h ? Xa(a) : (b = P(a.g), a = a.g, a.g += b, O(a));
                break;
            case 5:
                a = a.g;
                a.g += 4;
                O(a);
                break;
            case 3:
                b = a.i;
                do {
                    if (!Wa(a)) {
                        a.j = !0;
                        K(Error("Unmatched start-group tag: stream EOF"));
                        break;
                    }
                    if (4 == a.h) {
                        a.i != b && (a.j = !0, K(Error("Unmatched end-group tag")));
                        break;
                    }
                    Xa(a);
                }while (1)
                break;
            default:
                a.j = !0, ya(a.h, a.l);
        }
    }
    function Ya(a, b, c) {
        a.N || (a = Pa(a.g.h, c, a.g.g), (c = b.m) ? c.push(a) : b.m = [
            a
        ]);
    }
    var Za = [];
    function $a() {
        this.h = [];
        this.i = 0;
        this.g = new Ua;
    }
    function ab(a, b) {
        0 !== b.length && (a.h.push(b), a.i += b.length);
    }
    function bb(a, b, c) {
        S(a.g, 8 * b + 2);
        S(a.g, c.length);
        ab(a, a.g.end());
        ab(a, c);
    }
    var cb = "function" === typeof Symbol && "symbol" === typeof Symbol() ? Symbol(void 0) : void 0;
    function db(a, b) {
        Object.isFrozen(a) || (cb ? a[cb] |= b : void 0 !== a.g ? a.g |= b : Object.defineProperties(a, {
            g: {
                value: b,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        }));
    }
    function eb(a) {
        if (!a) return 0;
        var b;
        cb ? b = a[cb] : b = a.g;
        return null == b ? 0 : b;
    }
    function fb(a) {
        if (!Array.isArray(a)) return a;
        db(a, 1);
        return a;
    }
    function gb(a) {
        if (!Array.isArray(a)) throw Error("cannot mark non-array as immutable");
        db(a, 2);
    }
    function hb(a) {
        return null !== a && "object" === typeof a && a.constructor === Object;
    }
    function ib(a) {
        switch(typeof a){
            case "number":
                return isFinite(a) ? a : String(a);
            case "object":
                return La && null != a && a instanceof Uint8Array ? Ha(a) : a;
            default:
                return a;
        }
    }
    function jb(a, b) {
        if (null != a) return Array.isArray(a) || hb(a) ? kb(a, b) : b(a);
    }
    function kb(a, b) {
        if (Array.isArray(a)) {
            for(var c = Array(a.length), d = 0; d < a.length; d++)c[d] = jb(a[d], b);
            eb(a) & 1 && fb(c);
            return c;
        }
        c = {
        };
        for(d in a)c[d] = jb(a[d], b);
        return c;
    }
    var lb;
    function T(a, b, c) {
        var d = lb;
        lb = null;
        a || (a = d);
        d = this.constructor.ba;
        a || (a = d ? [
            d
        ] : []);
        this.j = (d ? 0 : -1) - (this.constructor.$ || 0);
        this.i = null;
        this.g = a;
        a: {
            d = this.g.length;
            a = d - 1;
            if (d && (d = this.g[a], hb(d))) {
                this.l = a - this.j;
                this.h = d;
                break a;
            }
            void 0 !== b && -1 < b ? (this.l = Math.max(b, a + 1 - this.j), this.h = null) : this.l = Number.MAX_VALUE;
        }
        if (c) for(b = 0; b < c.length; b++)a = c[b], a < this.l ? (a += this.j, (d = this.g[a]) ? fb(d) : this.g[a] = mb) : (nb(this), (d = this.h[a]) ? fb(d) : this.h[a] = mb);
    }
    var mb = Object.freeze(fb([]));
    function nb(a) {
        var b = a.l + a.j;
        a.g[b] || (a.h = a.g[b] = {
        });
    }
    function U(a, b, c) {
        return -1 === b ? null : (void 0 === c ? 0 : c) || b >= a.l ? a.h ? a.h[b] : void 0 : a.g[b + a.j];
    }
    function ob(a, b, c) {
        c = void 0 === c ? !0 : c;
        var d = void 0 === d ? !1 : d;
        var e = U(a, b, d);
        null == e && (e = mb);
        e === mb ? (e = fb([]), V(a, b, e, d)) : c && Array.isArray(e) && eb(e) & 2 && (e = e.slice(), V(a, b, e, d));
        return e;
    }
    function W(a, b, c) {
        a = U(a, b);
        a = null == a ? a : +a;
        return null == a ? void 0 === c ? 0 : c : a;
    }
    function V(a, b, c, d) {
        (void 0 === d ? 0 : d) || b >= a.l ? (nb(a), a.h[b] = c) : a.g[b + a.j] = c;
    }
    function pb(a, b, c) {
        a.i || (a.i = {
        });
        var d = a.i[c];
        if (!d) {
            var e = ob(a, c, !1);
            d = [];
            for(var g = Array.isArray(e) ? !!(eb(e) & 2) : !1, f = 0; f < e.length; f++)d[f] = new b(e[f]), g && gb(d[f].g);
            g && (gb(d), Object.freeze(d));
            a.i[c] = d;
        }
        return d;
    }
    function qb(a, b, c, d, e) {
        var g = pb(a, d, b);
        c = c ? c : new d;
        a = ob(a, b);
        void 0 != e ? (g.splice(e, 0, c), a.splice(e, 0, X(c))) : (g.push(c), a.push(X(c)));
    }
    T.prototype.toJSON = function() {
        var a = X(this);
        return kb(a, ib);
    };
    function X(a) {
        if (a.i) for(var b in a.i){
            var c = a.i[b];
            if (Array.isArray(c)) for(var d = 0; d < c.length; d++)c[d] && X(c[d]);
            else c && X(c);
        }
        return a.g;
    }
    T.prototype.toString = function() {
        return X(this).toString();
    };
    function rb(a, b) {
        a = U(a, b);
        return null == a ? 0 : a;
    }
    function sb(a, b) {
        a = U(a, b);
        return null == a ? "" : a;
    }
    function tb(a, b) {
        if (a = a.m) {
            ab(b, b.g.end());
            for(var c = 0; c < a.length; c++)ab(b, a[c]);
        }
    }
    function ub(a) {
        var b = a[0];
        switch(a.length){
            case 2:
                var c = a[1];
                return function(h, l, n) {
                    return b(h, l, n, c);
                };
            case 3:
                var d = a[1], e = a[2];
                return function(h, l, n) {
                    return b(h, l, n, d, e);
                };
            case 4:
                var g = a[1], f = a[2], k = a[3];
                return function(h, l, n) {
                    return b(h, l, n, g, f, k);
                };
            default:
                throw Error("unsupported number of parameters, expected [2-4], got " + a.length);
        }
    }
    function vb(a, b, c) {
        for(; Wa(b) && 4 != b.h;){
            var d = b.i, e = c[d];
            if (e) {
                if (Array.isArray(e) && (e = c[d] = ub(e)), !e(b, a, d)) {
                    d = b;
                    e = a;
                    var g = d.l;
                    Xa(d);
                    Ya(d, e, g);
                }
            } else d = b, e = a, g = d.l, Xa(d), Ya(d, e, g);
        }
        return a;
    }
    function wb(a, b) {
        var c = new $a;
        b(a, c);
        a = c.i + c.g.length();
        if (0 === a) c = new Uint8Array(0);
        else {
            a = new Uint8Array(a);
            for(var d = c.h, e = d.length, g = b = 0; g < e; g++){
                var f = d[g];
                0 !== f.length && (a.set(f, b), b += f.length);
            }
            d = c.g;
            e = d.h;
            0 !== e && (a.set(d.g.subarray(0, e), b), d.h = 0);
            c.h = [
                a
            ];
            c = a;
        }
        return c;
    }
    function xb(a, b, c) {
        if (Za.length) {
            var d = Za.pop();
            a && (Sa(d.g, a), d.i = -1, d.h = -1);
            a = d;
        } else a = new Va(a);
        try {
            return c(new b, a);
        } finally{
            b = a.g, b.h = null, b.l = 0, b.i = 0, b.g = 0, b.j = !1, b.u = !1, a.i = -1, a.h = -1, a.j = !1, 100 > Za.length && Za.push(a);
        }
    }
    function Y(a, b, c) {
        b = U(b, c);
        if (null != b) {
            S(a.g, 8 * c + 5);
            a = a.g;
            var d = b;
            d = (c = 0 > d ? 1 : 0) ? -d : d;
            0 === d ? 0 < 1 / d ? M = N = 0 : (N = 0, M = 2147483648) : isNaN(d) ? (N = 0, M = 2147483647) : 340282346638528860000000000000000000000 < d ? (N = 0, M = (c << 31 | 2139095040) >>> 0) : 0.000000000000000000000000000000000000011754943508222875 > d ? (d = Math.round(d / Math.pow(2, -149)), N = 0, M = (c << 31 | d) >>> 0) : (b = Math.floor(Math.log(d) / Math.LN2), d *= Math.pow(2, -b), d = Math.round(8388608 * d), 16777216 <= d && ++b, N = 0, M = (c << 31 | b + 127 << 23 | d & 8388607) >>> 0);
            c = M;
            Q(a, c >>> 0 & 255);
            Q(a, c >>> 8 & 255);
            Q(a, c >>> 16 & 255);
            Q(a, c >>> 24 & 255);
        }
    }
    function Z(a, b, c) {
        if (5 !== a.h) return !1;
        a = a.g;
        var d = a.h[a.g];
        var e = a.h[a.g + 1];
        var g = a.h[a.g + 2], f = a.h[a.g + 3];
        a.g += 4;
        O(a);
        e = (d << 0 | e << 8 | g << 16 | f << 24) >>> 0;
        a = 2 * (e >> 31) + 1;
        d = e >>> 23 & 255;
        e &= 8388607;
        V(b, c, 255 == d ? e ? NaN : Infinity * a : 0 == d ? a * Math.pow(2, -149) * e : a * Math.pow(2, d - 150) * (e + Math.pow(2, 23)));
        return !0;
    }
    function yb(a, b, c) {
        if (0 !== a.h) return !1;
        for(var d = a.g, e = 128, g = 0, f = a = 0; 4 > f && 128 <= e; f++)e = d.h[d.g++], g |= (e & 127) << 7 * f;
        128 <= e && (e = d.h[d.g++], g |= (e & 127) << 28, a |= (e & 127) >> 4);
        if (128 <= e) for(f = 0; 5 > f && 128 <= e; f++)e = d.h[d.g++], a |= (e & 127) << 7 * f + 3;
        if (128 > e) {
            d = g >>> 0;
            e = a >>> 0;
            if (a = e & 2147483648) d = ~d + 1 >>> 0, e = ~e >>> 0, 0 == d && (e = e + 1 >>> 0);
            d = 4294967296 * e + (d >>> 0);
            a = a ? -d : d;
        } else d.j = !0, za(), a = void 0;
        V(b, c, a);
        return !0;
    }
    function zb(a, b, c) {
        if (0 !== a.h) return !1;
        V(b, c, P(a.g));
        return !0;
    }
    function Ab(a, b, c) {
        if (2 !== a.h) return !1;
        var d = P(a.g);
        a = a.g;
        var e = a.g;
        a.g += d;
        O(a);
        a = a.h;
        var g;
        if (Ca) (g = Ba) || (g = Ba = new TextDecoder("utf-8", {
            fatal: !1
        })), g = g.decode(a.subarray(e, e + d));
        else {
            d = e + d;
            for(var f = [], k = null, h, l, n; e < d;)h = a[e++], 128 > h ? f.push(h) : 224 > h ? e >= d ? f.push(65533) : (l = a[e++], 194 > h || 128 !== (l & 192) ? (e--, f.push(65533)) : f.push((h & 31) << 6 | l & 63)) : 240 > h ? e >= d - 1 ? f.push(65533) : (l = a[e++], 128 !== (l & 192) || 224 === h && 160 > l || 237 === h && 160 <= l || 128 !== ((g = a[e++]) & 192) ? (e--, f.push(65533)) : f.push((h & 15) << 12 | (l & 63) << 6 | g & 63)) : 244 >= h ? e >= d - 2 ? f.push(65533) : (l = a[e++], 128 !== (l & 192) || 0 !== (h << 28) + (l - 144) >> 30 || 128 !== ((g = a[e++]) & 192) || 128 !== ((n = a[e++]) & 192) ? (e--, f.push(65533)) : (h = (h & 7) << 18 | (l & 63) << 12 | (g & 63) << 6 | n & 63, h -= 65536, f.push((h >> 10 & 1023) + 55296, (h & 1023) + 56320))) : f.push(65533), 8192 <= f.length && (k = Aa(k, f), f.length = 0);
            g = Aa(k, f);
        }
        V(b, c, g);
        return !0;
    }
    function Bb(a, b, c, d, e) {
        if (2 !== a.h) return !1;
        var g = new d, f = a.g.i, k = P(a.g), h = a.g.g + k;
        a.g.i = h;
        e(g, a);
        e = h - a.g.g;
        if (0 !== e) throw Error("Message parsing ended unexpectedly. Expected to read " + (k + " bytes, instead read " + (k - e) + " bytes, either the data ended unexpectedly or the message misreported its own length"));
        a.g.g = h;
        a.g.i = f;
        qb(b, c, g, d, void 0);
        return !0;
    }
    function Cb(a) {
        T.call(this, a);
    }
    var Db;
    E(Cb, T);
    function Eb(a, b) {
        var c = U(a, 1);
        if (null != c && null != c) {
            S(b.g, 8);
            var d = b.g;
            if (0 <= c) S(d, c);
            else {
                for(var e = 0; 9 > e; e++)Q(d, c & 127 | 128), c >>= 7;
                Q(d, 1);
            }
        }
        Y(b, a, 2);
        d = U(a, 3);
        null != d && bb(b, 3, Fa(d));
        d = U(a, 4);
        null != d && bb(b, 4, Fa(d));
        tb(a, b);
    }
    function Fb(a, b) {
        return vb(a, b, Db || (Db = {
            1: zb,
            2: Z,
            3: Ab,
            4: Ab
        }));
    }
    function Gb(a) {
        T.call(this, a, -1, Hb);
    }
    var Ib;
    E(Gb, T);
    Gb.prototype.addClassification = function(a, b) {
        qb(this, 1, a, Cb, b);
        return this;
    };
    function Jb(a, b) {
        return vb(a, b, Ib || (Ib = {
            1: [
                Bb,
                Cb,
                Fb
            ]
        }));
    }
    var Hb = [
        1
    ];
    function Kb(a) {
        T.call(this, a);
    }
    var Lb;
    E(Kb, T);
    function Mb(a, b) {
        Y(b, a, 1);
        Y(b, a, 2);
        Y(b, a, 3);
        Y(b, a, 4);
        Y(b, a, 5);
        tb(a, b);
    }
    function Nb(a, b) {
        return vb(a, b, Lb || (Lb = {
            1: Z,
            2: Z,
            3: Z,
            4: Z,
            5: Z
        }));
    }
    function Ob(a) {
        T.call(this, a, -1, Pb);
    }
    var Qb;
    E(Ob, T);
    function Rb(a, b) {
        return vb(a, b, Qb || (Qb = {
            1: [
                Bb,
                Kb,
                Nb
            ]
        }));
    }
    var Pb = [
        1
    ];
    function Sb(a) {
        T.call(this, a);
    }
    var Tb;
    E(Sb, T);
    function Ub(a, b) {
        Y(b, a, 1);
        Y(b, a, 2);
        Y(b, a, 3);
        Y(b, a, 4);
        Y(b, a, 5);
        var c = U(a, 6);
        if (null != c && null != c) {
            S(b.g, 48);
            var d = b.g, e = c;
            c = 0 > e;
            e = Math.abs(e);
            var g = e >>> 0;
            e = Math.floor((e - g) / 4294967296);
            e >>>= 0;
            c && (e = ~e >>> 0, g = (~g >>> 0) + 1, 4294967295 < g && (g = 0, e++, 4294967295 < e && (e = 0)));
            M = g;
            N = e;
            c = M;
            for(g = N; 0 < g || 127 < c;)Q(d, c & 127 | 128), c = (c >>> 7 | g << 25) >>> 0, g >>>= 7;
            Q(d, c);
        }
        tb(a, b);
    }
    function Vb(a, b) {
        return vb(a, b, Tb || (Tb = {
            1: Z,
            2: Z,
            3: Z,
            4: Z,
            5: Z,
            6: yb
        }));
    }
    function Wb(a, b, c) {
        c = a.createShader(0 === c ? a.VERTEX_SHADER : a.FRAGMENT_SHADER);
        a.shaderSource(c, b);
        a.compileShader(c);
        if (!a.getShaderParameter(c, a.COMPILE_STATUS)) throw Error("Could not compile WebGL shader.\n\n" + a.getShaderInfoLog(c));
        return c;
    }
    function Xb(a) {
        return pb(a, Cb, 1).map(function(b) {
            return {
                index: rb(b, 1),
                score: W(b, 2),
                label: null != U(b, 3) ? sb(b, 3) : void 0,
                displayName: null != U(b, 4) ? sb(b, 4) : void 0
            };
        });
    }
    function Yb(a) {
        return {
            x: W(a, 1),
            y: W(a, 2),
            z: W(a, 3),
            visibility: null != U(a, 4) ? W(a, 4) : void 0
        };
    }
    function Zb(a) {
        return a.map(function(b) {
            return pb(xb(b, Ob, Rb), Kb, 1).map(Yb);
        });
    }
    function $b(a, b) {
        this.h = a;
        this.g = b;
        this.l = 0;
    }
    function ac(a, b, c) {
        bc(a, b);
        if ("function" === typeof a.g.canvas.transferToImageBitmap) return Promise.resolve(a.g.canvas.transferToImageBitmap());
        if (c) return Promise.resolve(a.g.canvas);
        if ("function" === typeof createImageBitmap) return createImageBitmap(a.g.canvas);
        void 0 === a.i && (a.i = document.createElement("canvas"));
        return new Promise(function(d) {
            a.i.height = a.g.canvas.height;
            a.i.width = a.g.canvas.width;
            a.i.getContext("2d", {
            }).drawImage(a.g.canvas, 0, 0, a.g.canvas.width, a.g.canvas.height);
            d(a.i);
        });
    }
    function bc(a, b) {
        var c = a.g;
        if (void 0 === a.m) {
            var d = Wb(c, "\n  attribute vec2 aVertex;\n  attribute vec2 aTex;\n  varying vec2 vTex;\n  void main(void) {\n    gl_Position = vec4(aVertex, 0.0, 1.0);\n    vTex = aTex;\n  }", 0), e = Wb(c, "\n  precision mediump float;\n  varying vec2 vTex;\n  uniform sampler2D sampler0;\n  void main(){\n    gl_FragColor = texture2D(sampler0, vTex);\n  }", 1), g = c.createProgram();
            c.attachShader(g, d);
            c.attachShader(g, e);
            c.linkProgram(g);
            if (!c.getProgramParameter(g, c.LINK_STATUS)) throw Error("Could not compile WebGL program.\n\n" + c.getProgramInfoLog(g));
            d = a.m = g;
            c.useProgram(d);
            e = c.getUniformLocation(d, "sampler0");
            a.j = {
                I: c.getAttribLocation(d, "aVertex"),
                H: c.getAttribLocation(d, "aTex"),
                ca: e
            };
            a.s = c.createBuffer();
            c.bindBuffer(c.ARRAY_BUFFER, a.s);
            c.enableVertexAttribArray(a.j.I);
            c.vertexAttribPointer(a.j.I, 2, c.FLOAT, !1, 0, 0);
            c.bufferData(c.ARRAY_BUFFER, new Float32Array([
                -1,
                -1,
                -1,
                1,
                1,
                1,
                1,
                -1
            ]), c.STATIC_DRAW);
            c.bindBuffer(c.ARRAY_BUFFER, null);
            a.o = c.createBuffer();
            c.bindBuffer(c.ARRAY_BUFFER, a.o);
            c.enableVertexAttribArray(a.j.H);
            c.vertexAttribPointer(a.j.H, 2, c.FLOAT, !1, 0, 0);
            c.bufferData(c.ARRAY_BUFFER, new Float32Array([
                0,
                1,
                0,
                0,
                1,
                0,
                1,
                1
            ]), c.STATIC_DRAW);
            c.bindBuffer(c.ARRAY_BUFFER, null);
            c.uniform1i(e, 0);
        }
        d = a.j;
        c.useProgram(a.m);
        c.canvas.width = b.width;
        c.canvas.height = b.height;
        c.viewport(0, 0, b.width, b.height);
        c.activeTexture(c.TEXTURE0);
        a.h.bindTexture2d(b.glName);
        c.enableVertexAttribArray(d.I);
        c.bindBuffer(c.ARRAY_BUFFER, a.s);
        c.vertexAttribPointer(d.I, 2, c.FLOAT, !1, 0, 0);
        c.enableVertexAttribArray(d.H);
        c.bindBuffer(c.ARRAY_BUFFER, a.o);
        c.vertexAttribPointer(d.H, 2, c.FLOAT, !1, 0, 0);
        c.bindFramebuffer(c.DRAW_FRAMEBUFFER ? c.DRAW_FRAMEBUFFER : c.FRAMEBUFFER, null);
        c.clearColor(0, 0, 0, 0);
        c.clear(c.COLOR_BUFFER_BIT);
        c.colorMask(!0, !0, !0, !0);
        c.drawArrays(c.TRIANGLE_FAN, 0, 4);
        c.disableVertexAttribArray(d.I);
        c.disableVertexAttribArray(d.H);
        c.bindBuffer(c.ARRAY_BUFFER, null);
        a.h.bindTexture2d(0);
    }
    function cc(a) {
        this.g = a;
    }
    var dc = new Uint8Array([
        0,
        97,
        115,
        109,
        1,
        0,
        0,
        0,
        1,
        4,
        1,
        96,
        0,
        0,
        3,
        2,
        1,
        0,
        10,
        9,
        1,
        7,
        0,
        65,
        0,
        253,
        15,
        26,
        11
    ]);
    function ec(a, b) {
        return b + a;
    }
    function fc(a, b) {
        window[a] = b;
    }
    function gc(a) {
        var b = document.createElement("script");
        b.setAttribute("src", a);
        b.setAttribute("crossorigin", "anonymous");
        return new Promise(function(c) {
            b.addEventListener("load", function() {
                c();
            }, !1);
            b.addEventListener("error", function() {
                c();
            }, !1);
            document.body.appendChild(b);
        });
    }
    function hc() {
        return H(function(a) {
            switch(a.g){
                case 1:
                    return a.m = 2, F(a, WebAssembly.instantiate(dc), 4);
                case 4:
                    a.g = 3;
                    a.m = 0;
                    break;
                case 2:
                    return a.m = 0, a.j = null, a.return(!1);
                case 3:
                    return a.return(!0);
            }
        });
    }
    function ic(a) {
        this.g = a;
        this.listeners = {
        };
        this.j = {
        };
        this.F = {
        };
        this.m = {
        };
        this.s = {
        };
        this.G = this.o = this.R = !0;
        this.C = Promise.resolve();
        this.P = "";
        this.B = {
        };
        this.locateFile = a && a.locateFile || ec;
        if ("object" === typeof window) var b = window.location.pathname.toString().substring(0, window.location.pathname.toString().lastIndexOf("/")) + "/";
        else if ("undefined" !== typeof location) b = location.pathname.toString().substring(0, location.pathname.toString().lastIndexOf("/")) + "/";
        else throw Error("solutions can only be loaded on a web page or in a web worker");
        this.S = b;
        if (a.options) {
            b = C(Object.keys(a.options));
            for(var c = b.next(); !c.done; c = b.next()){
                c = c.value;
                var d = a.options[c].default;
                void 0 !== d && (this.j[c] = "function" === typeof d ? d() : d);
            }
        }
    }
    x = ic.prototype;
    x.close = function() {
        this.i && this.i.delete();
        return Promise.resolve();
    };
    function jc(a) {
        var b, c, d, e, g, f, k, h, l, n, r;
        return H(function(p) {
            switch(p.g){
                case 1:
                    if (!a.R) return p.return();
                    b = void 0 === a.g.files ? [] : "function" === typeof a.g.files ? a.g.files(a.j) : a.g.files;
                    return F(p, hc(), 2);
                case 2:
                    c = p.h;
                    if ("object" === typeof window) return fc("createMediapipeSolutionsWasm", {
                        locateFile: a.locateFile
                    }), fc("createMediapipeSolutionsPackedAssets", {
                        locateFile: a.locateFile
                    }), f = b.filter(function(m) {
                        return void 0 !== m.data;
                    }), k = b.filter(function(m) {
                        return void 0 === m.data;
                    }), h = Promise.all(f.map(function(m) {
                        var q = kc(a, m.url);
                        if (void 0 !== m.path) {
                            var t = m.path;
                            q = q.then(function(w) {
                                a.overrideFile(t, w);
                                return Promise.resolve(w);
                            });
                        }
                        return q;
                    })), l = Promise.all(k.map(function(m) {
                        return void 0 === m.simd || m.simd && c || !m.simd && !c ? gc(a.locateFile(m.url, a.S)) : Promise.resolve();
                    })).then(function() {
                        var m, q, t;
                        return H(function(w) {
                            if (1 == w.g) return m = window.createMediapipeSolutionsWasm, q = window.createMediapipeSolutionsPackedAssets, t = a, F(w, m(q), 2);
                            t.h = w.h;
                            w.g = 0;
                        });
                    }), n = (function() {
                        return H(function(m) {
                            a.g.graph && a.g.graph.url ? m = F(m, kc(a, a.g.graph.url), 0) : (m.g = 0, m = void 0);
                            return m;
                        });
                    })(), F(p, Promise.all([
                        l,
                        h,
                        n
                    ]), 7);
                    if ("function" !== typeof importScripts) throw Error("solutions can only be loaded on a web page or in a web worker");
                    d = b.filter(function(m) {
                        return void 0 === m.simd || m.simd && c || !m.simd && !c;
                    }).map(function(m) {
                        return a.locateFile(m.url, a.S);
                    });
                    importScripts.apply(null, ea(d));
                    e = a;
                    return F(p, createMediapipeSolutionsWasm(Module), 6);
                case 6:
                    e.h = p.h;
                    a.l = new OffscreenCanvas(1, 1);
                    a.h.canvas = a.l;
                    g = a.h.GL.createContext(a.l, {
                        antialias: !1,
                        alpha: !1,
                        aa: "undefined" !== typeof WebGL2RenderingContext ? 2 : 1
                    });
                    a.h.GL.makeContextCurrent(g);
                    p.g = 4;
                    break;
                case 7:
                    a.l = document.createElement("canvas");
                    r = a.l.getContext("webgl2", {
                    });
                    if (!r && (r = a.l.getContext("webgl", {
                    }), !r)) return alert("Failed to create WebGL canvas context when passing video frame."), p.return();
                    a.D = r;
                    a.h.canvas = a.l;
                    a.h.createContext(a.l, !0, !0, {
                    });
                case 4:
                    a.i = new a.h.SolutionWasm, a.R = !1, p.g = 0;
            }
        });
    }
    function lc(a) {
        var b, c, d, e, g, f, k, h;
        return H(function(l) {
            if (1 == l.g) {
                if (a.g.graph && a.g.graph.url && a.P === a.g.graph.url) return l.return();
                a.o = !0;
                if (!a.g.graph || !a.g.graph.url) {
                    l.g = 2;
                    return;
                }
                a.P = a.g.graph.url;
                return F(l, kc(a, a.g.graph.url), 3);
            }
            2 != l.g && (b = l.h, a.i.loadGraph(b));
            c = C(Object.keys(a.B));
            for(d = c.next(); !d.done; d = c.next())e = d.value, a.i.overrideFile(e, a.B[e]);
            a.B = {
            };
            if (a.g.listeners) for(g = C(a.g.listeners), f = g.next(); !f.done; f = g.next())k = f.value, mc(a, k);
            h = a.j;
            a.j = {
            };
            a.setOptions(h);
            l.g = 0;
        });
    }
    x.reset = function() {
        var a = this;
        return H(function(b) {
            a.i && (a.i.reset(), a.m = {
            }, a.s = {
            });
            b.g = 0;
        });
    };
    x.setOptions = function(a, b) {
        var c = this;
        if (b = b || this.g.options) {
            for(var d = [], e = [], g = {
            }, f = C(Object.keys(a)), k = f.next(); !k.done; g = {
                K: g.K,
                L: g.L
            }, k = f.next()){
                var h = k.value;
                h in this.j && this.j[h] === a[h] || (this.j[h] = a[h], k = b[h], void 0 !== k && (k.onChange && (g.K = k.onChange, g.L = a[h], d.push(function(l) {
                    return function() {
                        var n;
                        return H(function(r) {
                            if (1 == r.g) return F(r, l.K(l.L), 2);
                            n = r.h;
                            !0 === n && (c.o = !0);
                            r.g = 0;
                        });
                    };
                }(g))), k.graphOptionXref && (h = {
                    valueNumber: 1 === k.type ? a[h] : 0,
                    valueBoolean: 0 === k.type ? a[h] : !1,
                    valueString: 2 === k.type ? a[h] : ""
                }, k = Object.assign(Object.assign(Object.assign({
                }, {
                    calculatorName: "",
                    calculatorIndex: 0
                }), k.graphOptionXref), h), e.push(k))));
            }
            if (0 !== d.length || 0 !== e.length) this.o = !0, this.A = (void 0 === this.A ? [] : this.A).concat(e), this.v = (void 0 === this.v ? [] : this.v).concat(d);
        }
    };
    function nc(a) {
        var b, c, d, e, g, f, k;
        return H(function(h) {
            switch(h.g){
                case 1:
                    if (!a.o) return h.return();
                    if (!a.v) {
                        h.g = 2;
                        break;
                    }
                    b = C(a.v);
                    c = b.next();
                case 3:
                    if (c.done) {
                        h.g = 5;
                        break;
                    }
                    d = c.value;
                    return F(h, d(), 4);
                case 4:
                    c = b.next();
                    h.g = 3;
                    break;
                case 5:
                    a.v = void 0;
                case 2:
                    if (a.A) {
                        e = new a.h.GraphOptionChangeRequestList;
                        g = C(a.A);
                        for(f = g.next(); !f.done; f = g.next())k = f.value, e.push_back(k);
                        a.i.changeOptions(e);
                        e.delete();
                        a.A = void 0;
                    }
                    a.o = !1;
                    h.g = 0;
            }
        });
    }
    x.initialize = function() {
        var a = this;
        return H(function(b) {
            return 1 == b.g ? F(b, jc(a), 2) : 3 != b.g ? F(b, lc(a), 3) : F(b, nc(a), 0);
        });
    };
    function kc(a, b) {
        var c, d;
        return H(function(e) {
            if (b in a.F) return e.return(a.F[b]);
            c = a.locateFile(b, "");
            d = fetch(c).then(function(g) {
                return g.arrayBuffer();
            });
            a.F[b] = d;
            return e.return(d);
        });
    }
    x.overrideFile = function(a, b) {
        this.i ? this.i.overrideFile(a, b) : this.B[a] = b;
    };
    x.clearOverriddenFiles = function() {
        this.B = {
        };
        this.i && this.i.clearOverriddenFiles();
    };
    x.send = function(a, b) {
        var c = this, d, e, g, f, k, h, l, n, r;
        return H(function(p) {
            switch(p.g){
                case 1:
                    if (!c.g.inputs) return p.return();
                    d = 1000 * (void 0 === b || null === b ? performance.now() : b);
                    return F(p, c.C, 2);
                case 2:
                    return F(p, c.initialize(), 3);
                case 3:
                    e = new c.h.PacketDataList;
                    g = C(Object.keys(a));
                    for(f = g.next(); !f.done; f = g.next())if (k = f.value, h = c.g.inputs[k]) {
                        a: {
                            var m = a[k];
                            switch(h.type){
                                case "video":
                                    var q = c.m[h.stream];
                                    q || (q = new $b(c.h, c.D), c.m[h.stream] = q);
                                    0 === q.l && (q.l = q.h.createTexture());
                                    if ("undefined" !== typeof HTMLVideoElement && m instanceof HTMLVideoElement) {
                                        var t = m.videoWidth;
                                        var w = m.videoHeight;
                                    } else "undefined" !== typeof HTMLImageElement && m instanceof HTMLImageElement ? (t = m.naturalWidth, w = m.naturalHeight) : (t = m.width, w = m.height);
                                    w = {
                                        glName: q.l,
                                        width: t,
                                        height: w
                                    };
                                    t = q.g;
                                    t.canvas.width = w.width;
                                    t.canvas.height = w.height;
                                    t.activeTexture(t.TEXTURE0);
                                    q.h.bindTexture2d(q.l);
                                    t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, t.RGBA, t.UNSIGNED_BYTE, m);
                                    q.h.bindTexture2d(0);
                                    q = w;
                                    break a;
                                case "detections":
                                    q = c.m[h.stream];
                                    q || (q = new cc(c.h), c.m[h.stream] = q);
                                    q.data || (q.data = new q.g.DetectionListData);
                                    q.data.reset(m.length);
                                    for(w = 0; w < m.length; ++w){
                                        t = m[w];
                                        var v = q.data, A = v.setBoundingBox, I = w;
                                        var D = t.T;
                                        var u = new Sb;
                                        V(u, 1, D.X);
                                        V(u, 2, D.Y);
                                        V(u, 3, D.height);
                                        V(u, 4, D.width);
                                        V(u, 5, D.rotation);
                                        V(u, 6, D.W);
                                        D = wb(u, Ub);
                                        A.call(v, I, D);
                                        if (t.O) for(v = 0; v < t.O.length; ++v){
                                            u = t.O[v];
                                            var z = u.visibility ? !0 : !1;
                                            A = q.data;
                                            I = A.addNormalizedLandmark;
                                            D = w;
                                            u = Object.assign(Object.assign({
                                            }, u), {
                                                visibility: z ? u.visibility : 0
                                            });
                                            z = new Kb;
                                            V(z, 1, u.x);
                                            V(z, 2, u.y);
                                            V(z, 3, u.z);
                                            u.visibility && V(z, 4, u.visibility);
                                            u = wb(z, Mb);
                                            I.call(A, D, u);
                                        }
                                        if (t.M) for(v = 0; v < t.M.length; ++v)A = q.data, I = A.addClassification, D = w, u = t.M[v], z = new Cb, V(z, 2, u.score), u.index && V(z, 1, u.index), u.label && V(z, 3, u.label), u.displayName && V(z, 4, u.displayName), u = wb(z, Eb), I.call(A, D, u);
                                    }
                                    q = q.data;
                                    break a;
                                default:
                                    q = {
                                    };
                            }
                        }
                        l = q;
                        n = h.stream;
                        switch(h.type){
                            case "video":
                                e.pushTexture2d(Object.assign(Object.assign({
                                }, l), {
                                    stream: n,
                                    timestamp: d
                                }));
                                break;
                            case "detections":
                                r = l;
                                r.stream = n;
                                r.timestamp = d;
                                e.pushDetectionList(r);
                                break;
                            default:
                                throw Error("Unknown input config type: '" + h.type + "'");
                        }
                    }
                    c.i.send(e);
                    return F(p, c.C, 4);
                case 4:
                    e.delete(), p.g = 0;
            }
        });
    };
    function oc(a, b, c) {
        var d, e, g, f, k, h, l, n, r, p, m, q, t, w;
        return H(function(v) {
            switch(v.g){
                case 1:
                    if (!c) return v.return(b);
                    d = {
                    };
                    e = 0;
                    g = C(Object.keys(c));
                    for(f = g.next(); !f.done; f = g.next())k = f.value, h = c[k], "string" !== typeof h && "texture" === h.type && void 0 !== b[h.stream] && ++e;
                    1 < e && (a.G = !1);
                    l = C(Object.keys(c));
                    f = l.next();
                case 2:
                    if (f.done) {
                        v.g = 4;
                        break;
                    }
                    n = f.value;
                    r = c[n];
                    if ("string" === typeof r) return t = d, w = n, F(v, pc(a, n, b[r]), 14);
                    p = b[r.stream];
                    if ("detection_list" === r.type) {
                        if (p) {
                            var A = p.getRectList();
                            for(var I = p.getLandmarksList(), D = p.getClassificationsList(), u = [], z = 0; z < A.size(); ++z){
                                var R = xb(A.get(z), Sb, Vb);
                                R = {
                                    T: {
                                        X: W(R, 1),
                                        Y: W(R, 2),
                                        height: W(R, 3),
                                        width: W(R, 4),
                                        rotation: W(R, 5, 0),
                                        W: rb(R, 6)
                                    },
                                    O: pb(xb(I.get(z), Ob, Rb), Kb, 1).map(Yb),
                                    M: Xb(xb(D.get(z), Gb, Jb))
                                };
                                u.push(R);
                            }
                            A = u;
                        } else A = [];
                        d[n] = A;
                        v.g = 7;
                        break;
                    }
                    if ("proto_list" === r.type) {
                        if (p) {
                            A = Array(p.size());
                            for(I = 0; I < p.size(); I++)A[I] = p.get(I);
                            p.delete();
                        } else A = [];
                        d[n] = A;
                        v.g = 7;
                        break;
                    }
                    if (void 0 === p) {
                        v.g = 3;
                        break;
                    }
                    if ("float_list" === r.type) {
                        d[n] = p;
                        v.g = 7;
                        break;
                    }
                    if ("proto" === r.type) {
                        d[n] = p;
                        v.g = 7;
                        break;
                    }
                    if ("texture" !== r.type) throw Error("Unknown output config type: '" + r.type + "'");
                    m = a.s[n];
                    m || (m = new $b(a.h, a.D), a.s[n] = m);
                    return F(v, ac(m, p, a.G), 13);
                case 13:
                    q = v.h, d[n] = q;
                case 7:
                    r.transform && d[n] && (d[n] = r.transform(d[n]));
                    v.g = 3;
                    break;
                case 14:
                    t[w] = v.h;
                case 3:
                    f = l.next();
                    v.g = 2;
                    break;
                case 4:
                    return v.return(d);
            }
        });
    }
    function pc(a, b, c) {
        var d;
        return H(function(e) {
            return "number" === typeof c || c instanceof Uint8Array || c instanceof a.h.Uint8BlobList ? e.return(c) : c instanceof a.h.Texture2dDataOut ? (d = a.s[b], d || (d = new $b(a.h, a.D), a.s[b] = d), e.return(ac(d, c, a.G))) : e.return(void 0);
        });
    }
    function mc(a, b) {
        for(var c = b.name || "$", d = [].concat(ea(b.wants)), e = new a.h.StringList, g = C(b.wants), f = g.next(); !f.done; f = g.next())e.push_back(f.value);
        g = a.h.PacketListener.implement({
            onResults: function(k) {
                for(var h = {
                }, l = 0; l < b.wants.length; ++l)h[d[l]] = k.get(l);
                var n = a.listeners[c];
                n && (a.C = oc(a, h, b.outs).then(function(r) {
                    r = n(r);
                    for(var p = 0; p < b.wants.length; ++p){
                        var m = h[d[p]];
                        "object" === typeof m && m.hasOwnProperty && m.hasOwnProperty("delete") && m.delete();
                    }
                    r && (a.C = r);
                }));
            }
        });
        a.i.attachMultiListener(e, g);
        e.delete();
    }
    x.onResults = function(a, b) {
        this.listeners[b || "$"] = a;
    };
    J("Solution", ic);
    J("OptionType", {
        BOOL: 0,
        NUMBER: 1,
        Z: 2,
        0: "BOOL",
        1: "NUMBER",
        2: "STRING"
    });
    function qc(a) {
        void 0 === a && (a = 0);
        return 1 === a ? "hand_landmark_full.tflite" : "hand_landmark_lite.tflite";
    }
    function rc(a) {
        var b = this;
        a = a || {
        };
        this.g = new ic({
            locateFile: a.locateFile,
            files: function(c) {
                return [
                    {
                        url: "hands_solution_packed_assets_loader.js"
                    },
                    {
                        simd: !1,
                        url: "hands_solution_wasm_bin.js"
                    },
                    {
                        simd: !0,
                        url: "hands_solution_simd_wasm_bin.js"
                    },
                    {
                        data: !0,
                        url: qc(c.modelComplexity)
                    }
                ];
            },
            graph: {
                url: "hands.binarypb"
            },
            inputs: {
                image: {
                    type: "video",
                    stream: "input_frames_gpu"
                }
            },
            listeners: [
                {
                    wants: [
                        "multi_hand_landmarks",
                        "multi_hand_world_landmarks",
                        "image_transformed",
                        "multi_handedness"
                    ],
                    outs: {
                        image: "image_transformed",
                        multiHandLandmarks: {
                            type: "proto_list",
                            stream: "multi_hand_landmarks",
                            transform: Zb
                        },
                        multiHandWorldLandmarks: {
                            type: "proto_list",
                            stream: "multi_hand_world_landmarks",
                            transform: Zb
                        },
                        multiHandedness: {
                            type: "proto_list",
                            stream: "multi_handedness",
                            transform: function(c) {
                                return c.map(function(d) {
                                    return Xb(xb(d, Gb, Jb))[0];
                                });
                            }
                        }
                    }
                }
            ],
            options: {
                useCpuInference: {
                    type: 0,
                    graphOptionXref: {
                        calculatorType: "InferenceCalculator",
                        fieldName: "use_cpu_inference"
                    },
                    default: "iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform) || navigator.userAgent.includes("Mac") && "ontouchend" in document
                },
                selfieMode: {
                    type: 0,
                    graphOptionXref: {
                        calculatorType: "GlScalerCalculator",
                        calculatorIndex: 1,
                        fieldName: "flip_horizontal"
                    }
                },
                maxNumHands: {
                    type: 1,
                    graphOptionXref: {
                        calculatorType: "ConstantSidePacketCalculator",
                        calculatorName: "ConstantSidePacketCalculator",
                        fieldName: "int_value"
                    }
                },
                modelComplexity: {
                    type: 1,
                    graphOptionXref: {
                        calculatorType: "ConstantSidePacketCalculator",
                        calculatorName: "ConstantSidePacketCalculatorModelComplexity",
                        fieldName: "int_value"
                    },
                    onChange: function(c) {
                        var d, e, g;
                        return H(function(f) {
                            if (1 == f.g) return d = qc(c), e = "third_party/mediapipe/modules/hand_landmark/" + d, F(f, kc(b.g, d), 2);
                            g = f.h;
                            b.g.overrideFile(e, g);
                            return f.return(!0);
                        });
                    }
                },
                minDetectionConfidence: {
                    type: 1,
                    graphOptionXref: {
                        calculatorType: "TensorsToDetectionsCalculator",
                        calculatorName: "handlandmarktrackinggpu__palmdetectiongpu__TensorsToDetectionsCalculator",
                        fieldName: "min_score_thresh"
                    }
                },
                minTrackingConfidence: {
                    type: 1,
                    graphOptionXref: {
                        calculatorType: "ThresholdingCalculator",
                        calculatorName: "handlandmarktrackinggpu__handlandmarkgpu__ThresholdingCalculator",
                        fieldName: "threshold"
                    }
                }
            }
        });
    }
    x = rc.prototype;
    x.close = function() {
        this.g.close();
        return Promise.resolve();
    };
    x.onResults = function(a) {
        this.g.onResults(a);
    };
    x.initialize = function() {
        var a = this;
        return H(function(b) {
            return F(b, a.g.initialize(), 0);
        });
    };
    x.reset = function() {
        this.g.reset();
    };
    x.send = function(a) {
        var b = this;
        return H(function(c) {
            return F(c, b.g.send(a), 0);
        });
    };
    x.setOptions = function(a) {
        this.g.setOptions(a);
    };
    J("Hands", rc);
    J("HAND_CONNECTIONS", [
        [
            0,
            1
        ],
        [
            1,
            2
        ],
        [
            2,
            3
        ],
        [
            3,
            4
        ],
        [
            0,
            5
        ],
        [
            5,
            6
        ],
        [
            6,
            7
        ],
        [
            7,
            8
        ],
        [
            5,
            9
        ],
        [
            9,
            10
        ],
        [
            10,
            11
        ],
        [
            11,
            12
        ],
        [
            9,
            13
        ],
        [
            13,
            14
        ],
        [
            14,
            15
        ],
        [
            15,
            16
        ],
        [
            13,
            17
        ],
        [
            0,
            17
        ],
        [
            17,
            18
        ],
        [
            18,
            19
        ],
        [
            19,
            20
        ]
    ]);
    J("VERSION", "0.4.1635986972");
}).call(this);

},{}],"jo1qi":[function(require,module,exports) {
var global = arguments[3];
(function() {
    function n(a) {
        var b = 0;
        return function() {
            return b < a.length ? {
                done: !1,
                value: a[b++]
            } : {
                done: !0
            };
        };
    }
    var q = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, e) {
        if (a == Array.prototype || a == Object.prototype) return a;
        a[b] = e.value;
        return a;
    };
    function t(a) {
        a = [
            "object" == typeof globalThis && globalThis,
            a,
            "object" == typeof window && window,
            "object" == typeof self && self,
            "object" == typeof global && global
        ];
        for(var b = 0; b < a.length; ++b){
            var e = a[b];
            if (e && e.Math == Math) return e;
        }
        throw Error("Cannot find global object");
    }
    var u = t(this);
    function v(a, b) {
        if (b) a: {
            var e = u;
            a = a.split(".");
            for(var f = 0; f < a.length - 1; f++){
                var h = a[f];
                if (!(h in e)) break a;
                e = e[h];
            }
            a = a[a.length - 1];
            f = e[a];
            b = b(f);
            b != f && null != b && q(e, a, {
                configurable: !0,
                writable: !0,
                value: b
            });
        }
    }
    v("Symbol", function(a) {
        function b(l) {
            if (this instanceof b) throw new TypeError("Symbol is not a constructor");
            return new e(f + (l || "") + "_" + h++, l);
        }
        function e(l, c) {
            this.g = l;
            q(this, "description", {
                configurable: !0,
                writable: !0,
                value: c
            });
        }
        if (a) return a;
        e.prototype.toString = function() {
            return this.g;
        };
        var f = "jscomp_symbol_" + (1000000000 * Math.random() >>> 0) + "_", h = 0;
        return b;
    });
    v("Symbol.iterator", function(a) {
        if (a) return a;
        a = Symbol("Symbol.iterator");
        for(var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), e = 0; e < b.length; e++){
            var f = u[b[e]];
            "function" === typeof f && "function" != typeof f.prototype[a] && q(f.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function() {
                    return w(n(this));
                }
            });
        }
        return a;
    });
    function w(a) {
        a = {
            next: a
        };
        a[Symbol.iterator] = function() {
            return this;
        };
        return a;
    }
    function x(a) {
        var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
        return b ? b.call(a) : {
            next: n(a)
        };
    }
    function y() {
        this.i = !1;
        this.g = null;
        this.o = void 0;
        this.j = 1;
        this.m = 0;
        this.h = null;
    }
    function z(a) {
        if (a.i) throw new TypeError("Generator is already running");
        a.i = !0;
    }
    y.prototype.l = function(a) {
        this.o = a;
    };
    function A(a, b) {
        a.h = {
            F: b,
            G: !0
        };
        a.j = a.m;
    }
    y.prototype.return = function(a) {
        this.h = {
            return: a
        };
        this.j = this.m;
    };
    function B(a) {
        this.g = new y;
        this.h = a;
    }
    function C(a, b) {
        z(a.g);
        var e = a.g.g;
        if (e) return D(a, "return" in e ? e["return"] : function(f) {
            return {
                value: f,
                done: !0
            };
        }, b, a.g.return);
        a.g.return(b);
        return H(a);
    }
    function D(a, b, e, f) {
        try {
            var h = b.call(a.g.g, e);
            if (!(h instanceof Object)) throw new TypeError("Iterator result " + h + " is not an object");
            if (!h.done) return a.g.i = !1, h;
            var l = h.value;
        } catch (c) {
            return a.g.g = null, A(a.g, c), H(a);
        }
        a.g.g = null;
        f.call(a.g, l);
        return H(a);
    }
    function H(a) {
        for(; a.g.j;)try {
            var b = a.h(a.g);
            if (b) return a.g.i = !1, {
                value: b.value,
                done: !1
            };
        } catch (e) {
            a.g.o = void 0, A(a.g, e);
        }
        a.g.i = !1;
        if (a.g.h) {
            b = a.g.h;
            a.g.h = null;
            if (b.G) throw b.F;
            return {
                value: b.return,
                done: !0
            };
        }
        return {
            value: void 0,
            done: !0
        };
    }
    function I(a) {
        this.next = function(b) {
            z(a.g);
            a.g.g ? b = D(a, a.g.g.next, b, a.g.l) : (a.g.l(b), b = H(a));
            return b;
        };
        this.throw = function(b) {
            z(a.g);
            a.g.g ? b = D(a, a.g.g["throw"], b, a.g.l) : (A(a.g, b), b = H(a));
            return b;
        };
        this.return = function(b) {
            return C(a, b);
        };
        this[Symbol.iterator] = function() {
            return this;
        };
    }
    function J(a) {
        function b(f) {
            return a.next(f);
        }
        function e(f) {
            return a.throw(f);
        }
        return new Promise(function(f, h) {
            function l(c) {
                c.done ? f(c.value) : Promise.resolve(c.value).then(b, e).then(l, h);
            }
            l(a.next());
        });
    }
    v("Promise", function(a) {
        function b(c) {
            this.h = 0;
            this.i = void 0;
            this.g = [];
            this.o = !1;
            var d = this.j();
            try {
                c(d.resolve, d.reject);
            } catch (g) {
                d.reject(g);
            }
        }
        function e() {
            this.g = null;
        }
        function f(c) {
            return c instanceof b ? c : new b(function(d) {
                d(c);
            });
        }
        if (a) return a;
        e.prototype.h = function(c) {
            if (null == this.g) {
                this.g = [];
                var d = this;
                this.i(function() {
                    d.l();
                });
            }
            this.g.push(c);
        };
        var h = u.setTimeout;
        e.prototype.i = function(c) {
            h(c, 0);
        };
        e.prototype.l = function() {
            for(; this.g && this.g.length;){
                var c = this.g;
                this.g = [];
                for(var d = 0; d < c.length; ++d){
                    var g = c[d];
                    c[d] = null;
                    try {
                        g();
                    } catch (k) {
                        this.j(k);
                    }
                }
            }
            this.g = null;
        };
        e.prototype.j = function(c) {
            this.i(function() {
                throw c;
            });
        };
        b.prototype.j = function() {
            function c(k) {
                return function(m) {
                    g || (g = !0, k.call(d, m));
                };
            }
            var d = this, g = !1;
            return {
                resolve: c(this.A),
                reject: c(this.l)
            };
        };
        b.prototype.A = function(c) {
            if (c === this) this.l(new TypeError("A Promise cannot resolve to itself"));
            else if (c instanceof b) this.C(c);
            else {
                a: switch(typeof c){
                    case "object":
                        var d = null != c;
                        break a;
                    case "function":
                        d = !0;
                        break a;
                    default:
                        d = !1;
                }
                d ? this.v(c) : this.m(c);
            }
        };
        b.prototype.v = function(c) {
            var d = void 0;
            try {
                d = c.then;
            } catch (g) {
                this.l(g);
                return;
            }
            "function" == typeof d ? this.D(d, c) : this.m(c);
        };
        b.prototype.l = function(c) {
            this.u(2, c);
        };
        b.prototype.m = function(c) {
            this.u(1, c);
        };
        b.prototype.u = function(c, d) {
            if (0 != this.h) throw Error("Cannot settle(" + c + ", " + d + "): Promise already settled in state" + this.h);
            this.h = c;
            this.i = d;
            2 === this.h && this.B();
            this.H();
        };
        b.prototype.B = function() {
            var c = this;
            h(function() {
                if (c.I()) {
                    var d = u.console;
                    "undefined" !== typeof d && d.error(c.i);
                }
            }, 1);
        };
        b.prototype.I = function() {
            if (this.o) return !1;
            var c = u.CustomEvent, d = u.Event, g = u.dispatchEvent;
            if ("undefined" === typeof g) return !0;
            "function" === typeof c ? c = new c("unhandledrejection", {
                cancelable: !0
            }) : "function" === typeof d ? c = new d("unhandledrejection", {
                cancelable: !0
            }) : (c = u.document.createEvent("CustomEvent"), c.initCustomEvent("unhandledrejection", !1, !0, c));
            c.promise = this;
            c.reason = this.i;
            return g(c);
        };
        b.prototype.H = function() {
            if (null != this.g) {
                for(var c = 0; c < this.g.length; ++c)l.h(this.g[c]);
                this.g = null;
            }
        };
        var l = new e;
        b.prototype.C = function(c) {
            var d = this.j();
            c.s(d.resolve, d.reject);
        };
        b.prototype.D = function(c, d) {
            var g = this.j();
            try {
                c.call(d, g.resolve, g.reject);
            } catch (k) {
                g.reject(k);
            }
        };
        b.prototype.then = function(c, d) {
            function g(p, r) {
                return "function" == typeof p ? function(E) {
                    try {
                        k(p(E));
                    } catch (F) {
                        m(F);
                    }
                } : r;
            }
            var k, m, G = new b(function(p, r) {
                k = p;
                m = r;
            });
            this.s(g(c, k), g(d, m));
            return G;
        };
        b.prototype.catch = function(c) {
            return this.then(void 0, c);
        };
        b.prototype.s = function(c, d) {
            function g() {
                switch(k.h){
                    case 1:
                        c(k.i);
                        break;
                    case 2:
                        d(k.i);
                        break;
                    default:
                        throw Error("Unexpected state: " + k.h);
                }
            }
            var k = this;
            null == this.g ? l.h(g) : this.g.push(g);
            this.o = !0;
        };
        b.resolve = f;
        b.reject = function(c) {
            return new b(function(d, g) {
                g(c);
            });
        };
        b.race = function(c) {
            return new b(function(d, g) {
                for(var k = x(c), m = k.next(); !m.done; m = k.next())f(m.value).s(d, g);
            });
        };
        b.all = function(c) {
            var d = x(c), g = d.next();
            return g.done ? f([]) : new b(function(k, m) {
                function G(E) {
                    return function(F) {
                        p[E] = F;
                        r--;
                        0 == r && k(p);
                    };
                }
                var p = [], r = 0;
                do p.push(void 0), r++, f(g.value).s(G(p.length - 1), m), g = d.next();
                while (!g.done)
            });
        };
        return b;
    });
    var K = "function" == typeof Object.assign ? Object.assign : function(a, b) {
        for(var e = 1; e < arguments.length; e++){
            var f = arguments[e];
            if (f) for(var h in f)Object.prototype.hasOwnProperty.call(f, h) && (a[h] = f[h]);
        }
        return a;
    };
    v("Object.assign", function(a) {
        return a || K;
    });
    var L = this || self;
    var M = {
        facingMode: "user",
        width: 640,
        height: 480
    };
    function N(a, b) {
        this.video = a;
        this.i = 0;
        this.h = Object.assign(Object.assign({
        }, M), b);
    }
    N.prototype.stop = function() {
        var a = this, b, e, f, h;
        return J(new I(new B(function(l) {
            if (a.g) {
                b = a.g.getTracks();
                e = x(b);
                for(f = e.next(); !f.done; f = e.next())h = f.value, h.stop();
                a.g = void 0;
            }
            l.j = 0;
        })));
    };
    N.prototype.start = function() {
        var a = this, b;
        return J(new I(new B(function(e) {
            navigator.mediaDevices && navigator.mediaDevices.getUserMedia || alert("No navigator.mediaDevices.getUserMedia exists.");
            b = a.h;
            return e.return(navigator.mediaDevices.getUserMedia({
                video: {
                    facingMode: b.facingMode,
                    width: b.width,
                    height: b.height
                }
            }).then(function(f) {
                O(a, f);
            }).catch(function(f) {
                var h = "Failed to acquire camera feed: " + f;
                console.error(h);
                alert(h);
                throw f;
            }));
        })));
    };
    function P(a) {
        window.requestAnimationFrame(function() {
            Q(a);
        });
    }
    function O(a, b) {
        a.g = b;
        a.video.srcObject = b;
        a.video.onloadedmetadata = function() {
            a.video.play();
            P(a);
        };
    }
    function Q(a) {
        var b = null;
        a.video.paused || a.video.currentTime === a.i || (a.i = a.video.currentTime, b = a.h.onFrame());
        b ? b.then(function() {
            P(a);
        }) : P(a);
    }
    var R = [
        "Camera"
    ], S = L;
    R[0] in S || "undefined" == typeof S.execScript || S.execScript("var " + R[0]);
    for(var T; R.length && (T = R.shift());)R.length || void 0 === N ? S[T] && S[T] !== Object.prototype[T] ? S = S[T] : S = S[T] = {
    } : S[T] = N;
}).call(this);

},{}],"hRegf":[function(require,module,exports) {
var global = arguments[3];
(function() {
    function h(a) {
        var c = 0;
        return function() {
            return c < a.length ? {
                done: !1,
                value: a[c++]
            } : {
                done: !0
            };
        };
    }
    var l = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, c, b) {
        if (a == Array.prototype || a == Object.prototype) return a;
        a[c] = b.value;
        return a;
    };
    function m(a) {
        a = [
            "object" == typeof globalThis && globalThis,
            a,
            "object" == typeof window && window,
            "object" == typeof self && self,
            "object" == typeof global && global
        ];
        for(var c = 0; c < a.length; ++c){
            var b = a[c];
            if (b && b.Math == Math) return b;
        }
        throw Error("Cannot find global object");
    }
    var n = m(this);
    function p(a, c) {
        if (c) a: {
            var b = n;
            a = a.split(".");
            for(var d = 0; d < a.length - 1; d++){
                var e = a[d];
                if (!(e in b)) break a;
                b = b[e];
            }
            a = a[a.length - 1];
            d = b[a];
            c = c(d);
            c != d && null != c && l(b, a, {
                configurable: !0,
                writable: !0,
                value: c
            });
        }
    }
    function q(a) {
        var c = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
        return c ? c.call(a) : {
            next: h(a)
        };
    }
    var r = "function" == typeof Object.assign ? Object.assign : function(a, c) {
        for(var b = 1; b < arguments.length; b++){
            var d = arguments[b];
            if (d) for(var e in d)Object.prototype.hasOwnProperty.call(d, e) && (a[e] = d[e]);
        }
        return a;
    };
    p("Object.assign", function(a) {
        return a || r;
    });
    p("Array.prototype.fill", function(a) {
        return a ? a : function(c, b, d) {
            var e = this.length || 0;
            0 > b && (b = Math.max(0, e + b));
            if (null == d || d > e) d = e;
            d = Number(d);
            0 > d && (d = Math.max(0, e + d));
            for(b = Number(b || 0); b < d; b++)this[b] = c;
            return this;
        };
    });
    function t(a) {
        return a ? a : Array.prototype.fill;
    }
    p("Int8Array.prototype.fill", t);
    p("Uint8Array.prototype.fill", t);
    p("Uint8ClampedArray.prototype.fill", t);
    p("Int16Array.prototype.fill", t);
    p("Uint16Array.prototype.fill", t);
    p("Int32Array.prototype.fill", t);
    p("Uint32Array.prototype.fill", t);
    p("Float32Array.prototype.fill", t);
    p("Float64Array.prototype.fill", t);
    var u = this || self;
    function v(a, c) {
        a = a.split(".");
        var b = u;
        a[0] in b || "undefined" == typeof b.execScript || b.execScript("var " + a[0]);
        for(var d; a.length && (d = a.shift());)a.length || void 0 === c ? b[d] && b[d] !== Object.prototype[d] ? b = b[d] : b = b[d] = {
        } : b[d] = c;
    }
    var w = {
        color: "white",
        lineWidth: 4,
        radius: 6,
        visibilityMin: 0.5
    };
    function x(a) {
        a = a || {
        };
        return Object.assign(Object.assign(Object.assign({
        }, w), {
            fillColor: a.color
        }), a);
    }
    function y(a, c) {
        return a instanceof Function ? a(c) : a;
    }
    function z(a, c, b) {
        return Math.max(Math.min(c, b), Math.min(Math.max(c, b), a));
    }
    v("clamp", z);
    v("drawLandmarks", function(a, c, b) {
        if (c) {
            b = x(b);
            a.save();
            var d = a.canvas, e = 0;
            c = q(c);
            for(var f = c.next(); !f.done; f = c.next())if (f = f.value, void 0 !== f && (void 0 === f.visibility || f.visibility > b.visibilityMin)) {
                a.fillStyle = y(b.fillColor, {
                    index: e,
                    from: f
                });
                a.strokeStyle = y(b.color, {
                    index: e,
                    from: f
                });
                a.lineWidth = y(b.lineWidth, {
                    index: e,
                    from: f
                });
                var g = new Path2D;
                g.arc(f.x * d.width, f.y * d.height, y(b.radius, {
                    index: e,
                    from: f
                }), 0, 2 * Math.PI);
                a.fill(g);
                a.stroke(g);
                ++e;
            }
            a.restore();
        }
    });
    v("drawConnectors", function(a, c, b, d) {
        if (c && b) {
            d = x(d);
            a.save();
            var e = a.canvas, f = 0;
            b = q(b);
            for(var g = b.next(); !g.done; g = b.next()){
                var k = g.value;
                a.beginPath();
                g = c[k[0]];
                k = c[k[1]];
                g && k && (void 0 === g.visibility || g.visibility > d.visibilityMin) && (void 0 === k.visibility || k.visibility > d.visibilityMin) && (a.strokeStyle = y(d.color, {
                    index: f,
                    from: g,
                    to: k
                }), a.lineWidth = y(d.lineWidth, {
                    index: f,
                    from: g,
                    to: k
                }), a.moveTo(g.x * e.width, g.y * e.height), a.lineTo(k.x * e.width, k.y * e.height));
                ++f;
                a.stroke();
            }
            a.restore();
        }
    });
    v("drawRectangle", function(a, c, b) {
        b = x(b);
        a.save();
        var d = a.canvas;
        a.beginPath();
        a.lineWidth = y(b.lineWidth, {
        });
        a.strokeStyle = y(b.color, {
        });
        a.fillStyle = y(b.fillColor, {
        });
        a.translate(c.xCenter * d.width, c.yCenter * d.height);
        a.rotate(c.rotation * Math.PI / 180);
        a.rect(-c.width / 2 * d.width, -c.height / 2 * d.height, c.width * d.width, c.height * d.height);
        a.translate(-c.xCenter * d.width, -c.yCenter * d.height);
        a.stroke();
        a.fill();
        a.restore();
    });
    v("lerp", function(a, c, b, d, e) {
        return z(d * (1 - (a - c) / (b - c)) + e * (1 - (b - a) / (b - c)), d, e);
    });
}).call(this);

},{}],"aNPGb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isRockNRoll", ()=>isRockNRoll
);
parcelHelpers.export(exports, "isVictory", ()=>isVictory
);
parcelHelpers.export(exports, "isFist", ()=>isFist
);
parcelHelpers.export(exports, "isStand", ()=>isStand
);
parcelHelpers.export(exports, "isStretchBack", ()=>isStretchBack
);
function distance(from, to) {
    return Math.sqrt(Math.pow(Math.abs(from.x - to.x), 2) + Math.pow(Math.abs(from.y - to.y), 2) + Math.pow(Math.abs(from.z - to.z), 2));
}
function isRockNRoll(landmark) {
    if (distance(landmark[0], landmark[8]) > distance(landmark[0], landmark[5]) && distance(landmark[0], landmark[12]) <= distance(landmark[0], landmark[9]) && distance(landmark[0], landmark[16]) <= distance(landmark[0], landmark[13]) && distance(landmark[0], landmark[20]) > distance(landmark[0], landmark[17])) return true;
    else return false;
}
function isVictory(landmark) {
    if (distance(landmark[0], landmark[8]) > distance(landmark[0], landmark[5]) && distance(landmark[0], landmark[12]) > distance(landmark[0], landmark[9]) && distance(landmark[0], landmark[16]) <= distance(landmark[0], landmark[13]) && distance(landmark[0], landmark[20]) <= distance(landmark[0], landmark[17])) return true;
    else return false;
}
function isFist(landmark) {
    if (distance(landmark[0], landmark[8]) <= distance(landmark[0], landmark[5]) && distance(landmark[0], landmark[12]) <= distance(landmark[0], landmark[9]) && distance(landmark[0], landmark[16]) <= distance(landmark[0], landmark[13]) && distance(landmark[0], landmark[20]) <= distance(landmark[0], landmark[17])) return true;
    else if (landmark[5].y <= landmark[8].y && landmark[8].y <= landmark[6].y) return true;
    else return false;
}
function isStand(landmark) {
    // 평범하게 손을 들고 있는 상태 트리거
    let ret = true;
    if (landmark[7].y < landmark[8].y || landmark[11].y < landmark[12].y || landmark[15].y < landmark[16].y || landmark[19].y < landmark[20].y) ret = false;
    return ret;
}
function isStretchBack(landmark) {
    // 농구공을 들듯 손을 당기는 제스쳐
    let ret = false;
    // console.log(
    //   Math.floor(landmark[0].z * 10000) - Math.floor(landmark[9].z * 10000)
    // );
    if (Math.floor(landmark[0].z * 10000) - Math.floor(landmark[9].z * 10000) < -100) ret = true;
    return ret;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"ciiiV":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"708wo":[function() {},{}]},["79gfX","i8ewE"], "i8ewE", "parcelRequire0eb0")

//# sourceMappingURL=index.c05ff127.js.map