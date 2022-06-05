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
})({"6oyVt":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4a236f9275d0a351";
module.bundle.HMR_BUNDLE_ID = "8c70626fb793e1a0";
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

},{}],"6hGTq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _magicHand = require("../MagicHand");
var _magicHandDefault = parcelHelpers.interopDefault(_magicHand);
var _matterJs = require("matter-js");
class PunchGame {
    constructor(debug){
        this.sizes = {
            width: window.innerWidth,
            height: window.innerHeight
        };
    }
    init() {
        this.engine = _matterJs.Engine.create();
        this.world = this.engine.world;
        this.render = _matterJs.Render.create({
            element: document.body,
            engine: this.engine,
            options: {
                width: this.sizes.width,
                height: this.sizes.height,
                // showAngleIndicator: true,
                // showCollisions: true,
                // showVelocity: true,
                wireframes: false
            }
        });
        this.canvas = this.render.canvas;
        this.runner = _matterJs.Runner.create();
    }
    start() {
        this.init();
        _matterJs.Render.run(this.render);
        _matterJs.Runner.run(this.runner, this.engine);
        this.drawWorld();
        this.addMouse();
        this.handleEventListener();
    }
    drawWorld() {
        // 바닥
        const ground = _matterJs.Bodies.rectangle(this.sizes.width / 2, this.sizes.height, this.sizes.width, 100, {
            isStatic: true
        });
        const wall = [
            _matterJs.Bodies.rectangle(0, this.sizes.height / 2, 100, this.sizes.height, {
                isStatic: true
            }),
            _matterJs.Bodies.rectangle(this.sizes.width, this.sizes.height / 2, 100, this.sizes.height, {
                isStatic: true
            }), 
        ];
        this.balls = _matterJs.Composites.stack(this.sizes.width / 3, -3000, 12, 40, 10, 10, function(x, y) {
            return _matterJs.Bodies.circle(x, y, _matterJs.Common.random(15, 60), {
                restitution: 0.6,
                friction: 0.1
            });
        });
        _matterJs.Composite.add(this.world, [
            ground,
            ...wall,
            this.balls
        ]);
    }
    cleanWorld() {
        _matterJs.World.clear(this.world, false);
    }
    addMouse() {
        this.mouse = _matterJs.Mouse.create(this.render.canvas);
        this.mouseConstraint = _matterJs.MouseConstraint.create(this.engine, {
            mouse: this.mouse,
            constraint: {
                stiffness: 0.2,
                render: {
                    visible: false
                }
            }
        });
        _matterJs.Composite.add(this.world, this.mouseConstraint);
        // keep the mouse in sync with rendering
        this.render.mouse = this.mouse;
    }
    impact(point) {
        console.log(point);
        const ballsInArea = this.balls.bodies.filter((ball)=>{
            if (this.distance(point, ball.position) < 300) return true;
            else return false;
        });
        ballsInArea.forEach((ball)=>{
            _matterJs.Body.applyForce(ball, point, this.calculateForce(ball.position, point));
        });
    }
    calculateForce(from2, to2, factor = 0.01) {
        const force = {
            x: (from2.x - to2.x) * factor,
            y: (from2.y - to2.y) * factor
        };
        return force;
    }
    distance(from1, to1) {
        return Math.sqrt(Math.pow(from1.x - to1.x, 2) + Math.pow(from1.y - to1.y, 2));
    }
    handleEventListener() {
        window.addEventListener("resize", ()=>{
            if (this.resizeT) clearTimeout(this.resizeT);
            this.resizeT = setTimeout(this.resize.bind(this), 300);
        });
        window.addEventListener("click", (e)=>{
            const { clientX , clientY  } = e;
            this.impact({
                x: clientX,
                y: clientY
            });
        });
    }
    resize() {
        // Update sizes
        this.sizes = {
            width: window.innerWidth,
            height: window.innerHeight
        };
        this.canvas.width = this.sizes.width;
        this.canvas.height = this.sizes.height;
        this.cleanWorld();
        this.drawWorld();
    }
}
document.body.onload = ()=>{
    const punch = new PunchGame();
    punch.start();
    const magicHand = new _magicHandDefault.default(document.body);
    magicHand.start();
    magicHand.debug();
    magicHand.onGesture(handleGesture);
    magicHand.onPosition(handlePosition);
    const state = {
        left: {
            gesture: "",
            ready: false
        },
        right: {
            gesture: "",
            ready: false
        }
    };
    function handleGesture({ left , right  }) {
        state.left.gesture = left;
        state.right.gesture = right;
    // console.log(`Left is ${gesture.left}`);
    // console.log(`Right is ${gesture.right}`);
    }
    function handlePosition({ left , right  }) {
        // console.log(left[0], right[0]);
        // console.log(left, right);
        const PUNCH_FIST_SIZE = 17;
        if (state.right.gesture === "") {
            if (state.right.ready) state.right.ready = false;
        } else if (right.length > 0) {
            if (getFistSize(...right) < PUNCH_FIST_SIZE) state.right.ready = true;
            else if (state.right.ready) {
                punch.impact(getFistCenter(...right));
                state.right.ready = false;
            }
        }
        if (state.left.gesture === "") {
            if (state.left.ready) state.left.ready = false;
        } else if (left.length > 0) {
            if (getFistSize(...left) < PUNCH_FIST_SIZE) state.left.ready = true;
            else if (state.left.ready) {
                punch.impact(getFistCenter(...left));
                state.left.ready = false;
            }
        }
    // console.log(state.left, state.right);
    }
    function getFistSize(A, B, C, D) {
        const size = distance2d(A, C) * distance2d(B, D);
        return Math.floor(size * 1000);
    }
    function getFistCenter(A, B, C, D) {
        const xs = [
            A.x,
            B.x,
            C.x,
            D.x
        ].sort();
        const ys = [
            A.y,
            B.y,
            C.y,
            D.y
        ].sort();
        return {
            x: window.innerWidth * ((xs[3] + xs[0]) / 2),
            y: window.innerHeight * ((ys[3] + ys[0]) / 2)
        };
    }
    function getRadius(A, B, C) {
        const yDelta_a = B.y - A.y;
        const xDelta_a = B.x - A.x;
        const yDelta_b = C.y - B.y;
        const xDelta_b = C.x - B.x;
        const center = {
        };
        const aSlope = yDelta_a / xDelta_a;
        const bSlope = yDelta_b / xDelta_b;
        center.x = (aSlope * bSlope * (A.y - C.y) + bSlope * (A.x + B.x) - aSlope * (B.x + C.x)) / (2 * (bSlope - aSlope));
        center.y = -1 * (center.x - (A.x + B.x) / 2) / aSlope + (A.y + B.y) / 2;
        const radius = Math.sqrt(Math.pow(A.x - center.x, 2) + Math.pow(A.y - center.y, 2));
        return Math.floor(radius * 100);
    }
    function distance2d(from, to) {
        return Math.sqrt(Math.pow(from.x - to.x, 2) + Math.pow(from.y - to.y, 2));
    }
};

},{"../MagicHand":"bYgi2","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV","matter-js":"l8ZtM"}],"bYgi2":[function(require,module,exports) {
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

},{}],"708wo":[function() {},{}],"l8ZtM":[function(require,module,exports) {
var global = arguments[3];
/*!
 * matter-js 0.18.0 by @liabru
 * http://brm.io/matter-js/
 * License MIT
 * 
 * The MIT License (MIT)
 * 
 * Copyright (c) Liam Brummitt and contributors.
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */ (function webpackUniversalModuleDefinition(root, factory) {
    if (typeof exports === 'object' && typeof module === 'object') module.exports = factory();
    else if (typeof define === 'function' && define.amd) define("Matter", [], factory);
    else if (typeof exports === 'object') exports["Matter"] = factory();
    else root["Matter"] = factory();
})(this, function() {
    return(/******/ (function(modules) {
        /******/ // The module cache
        /******/ var installedModules = {
        };
        /******/ /******/ // The require function
        /******/ function __webpack_require__(moduleId) {
            /******/ /******/ // Check if module is in cache
            /******/ if (installedModules[moduleId]) /******/ return installedModules[moduleId].exports;
            /******/ // Create a new module (and put it into the cache)
            /******/ var module = installedModules[moduleId] = {
                /******/ i: moduleId,
                /******/ l: false,
                /******/ exports: {
                }
            };
            /******/ /******/ // Execute the module function
            /******/ modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
            /******/ /******/ // Flag the module as loaded
            /******/ module.l = true;
            /******/ /******/ // Return the exports of the module
            /******/ return module.exports;
        /******/ }
        /******/ /******/ /******/ // expose the modules object (__webpack_modules__)
        /******/ __webpack_require__.m = modules;
        /******/ /******/ // expose the module cache
        /******/ __webpack_require__.c = installedModules;
        /******/ /******/ // define getter function for harmony exports
        /******/ __webpack_require__.d = function(exports, name, getter) {
            /******/ if (!__webpack_require__.o(exports, name)) /******/ Object.defineProperty(exports, name, {
                enumerable: true,
                get: getter
            });
        /******/ };
        /******/ /******/ // define __esModule on exports
        /******/ __webpack_require__.r = function(exports) {
            /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) /******/ Object.defineProperty(exports, Symbol.toStringTag, {
                value: 'Module'
            });
            /******/ Object.defineProperty(exports, '__esModule', {
                value: true
            });
        /******/ };
        /******/ /******/ // create a fake namespace object
        /******/ // mode & 1: value is a module id, require it
        /******/ // mode & 2: merge all properties of value into the ns
        /******/ // mode & 4: return value when already ns object
        /******/ // mode & 8|1: behave like require
        /******/ __webpack_require__.t = function(value, mode) {
            /******/ if (mode & 1) value = __webpack_require__(value);
            /******/ if (mode & 8) return value;
            /******/ if (mode & 4 && typeof value === 'object' && value && value.__esModule) return value;
            /******/ var ns = Object.create(null);
            /******/ __webpack_require__.r(ns);
            /******/ Object.defineProperty(ns, 'default', {
                enumerable: true,
                value: value
            });
            /******/ if (mode & 2 && typeof value != 'string') for(var key in value)__webpack_require__.d(ns, key, (function(key) {
                return value[key];
            }).bind(null, key));
            /******/ return ns;
        /******/ };
        /******/ /******/ // getDefaultExport function for compatibility with non-harmony modules
        /******/ __webpack_require__.n = function(module) {
            /******/ var getter = module && module.__esModule ? /******/ function getDefault() {
                return module['default'];
            } : /******/ function getModuleExports() {
                return module;
            };
            /******/ __webpack_require__.d(getter, 'a', getter);
            /******/ return getter;
        /******/ };
        /******/ /******/ // Object.prototype.hasOwnProperty.call
        /******/ __webpack_require__.o = function(object, property) {
            return Object.prototype.hasOwnProperty.call(object, property);
        };
        /******/ /******/ // __webpack_public_path__
        /******/ __webpack_require__.p = "";
        /******/ /******/ /******/ // Load entry module and return exports
        /******/ return __webpack_require__(__webpack_require__.s = 21);
    /******/ })([
        function(module, exports) {
            /**
* The `Matter.Common` module contains utility functions that are common to all modules.
*
* @class Common
*/ var Common = {
            };
            module.exports = Common;
            (function() {
                Common._nextId = 0;
                Common._seed = 0;
                Common._nowStartTime = +new Date();
                Common._warnedOnce = {
                };
                Common._decomp = null;
                /**
     * Extends the object in the first argument using the object in the second argument.
     * @method extend
     * @param {} obj
     * @param {boolean} deep
     * @return {} obj extended
     */ Common.extend = function(obj, deep) {
                    var argsStart, args, deepClone;
                    if (typeof deep === 'boolean') {
                        argsStart = 2;
                        deepClone = deep;
                    } else {
                        argsStart = 1;
                        deepClone = true;
                    }
                    for(var i = argsStart; i < arguments.length; i++){
                        var source = arguments[i];
                        if (source) {
                            for(var prop in source)if (deepClone && source[prop] && source[prop].constructor === Object) {
                                if (!obj[prop] || obj[prop].constructor === Object) {
                                    obj[prop] = obj[prop] || {
                                    };
                                    Common.extend(obj[prop], deepClone, source[prop]);
                                } else obj[prop] = source[prop];
                            } else obj[prop] = source[prop];
                        }
                    }
                    return obj;
                };
                /**
     * Creates a new clone of the object, if deep is true references will also be cloned.
     * @method clone
     * @param {} obj
     * @param {bool} deep
     * @return {} obj cloned
     */ Common.clone = function(obj, deep) {
                    return Common.extend({
                    }, deep, obj);
                };
                /**
     * Returns the list of keys for the given object.
     * @method keys
     * @param {} obj
     * @return {string[]} keys
     */ Common.keys = function(obj) {
                    if (Object.keys) return Object.keys(obj);
                    // avoid hasOwnProperty for performance
                    var keys = [];
                    for(var key in obj)keys.push(key);
                    return keys;
                };
                /**
     * Returns the list of values for the given object.
     * @method values
     * @param {} obj
     * @return {array} Array of the objects property values
     */ Common.values = function(obj) {
                    var values = [];
                    if (Object.keys) {
                        var keys = Object.keys(obj);
                        for(var i = 0; i < keys.length; i++)values.push(obj[keys[i]]);
                        return values;
                    }
                    // avoid hasOwnProperty for performance
                    for(var key in obj)values.push(obj[key]);
                    return values;
                };
                /**
     * Gets a value from `base` relative to the `path` string.
     * @method get
     * @param {} obj The base object
     * @param {string} path The path relative to `base`, e.g. 'Foo.Bar.baz'
     * @param {number} [begin] Path slice begin
     * @param {number} [end] Path slice end
     * @return {} The object at the given path
     */ Common.get = function(obj, path, begin, end) {
                    path = path.split('.').slice(begin, end);
                    for(var i = 0; i < path.length; i += 1)obj = obj[path[i]];
                    return obj;
                };
                /**
     * Sets a value on `base` relative to the given `path` string.
     * @method set
     * @param {} obj The base object
     * @param {string} path The path relative to `base`, e.g. 'Foo.Bar.baz'
     * @param {} val The value to set
     * @param {number} [begin] Path slice begin
     * @param {number} [end] Path slice end
     * @return {} Pass through `val` for chaining
     */ Common.set = function(obj, path, val, begin, end) {
                    var parts = path.split('.').slice(begin, end);
                    Common.get(obj, path, 0, -1)[parts[parts.length - 1]] = val;
                    return val;
                };
                /**
     * Shuffles the given array in-place.
     * The function uses a seeded random generator.
     * @method shuffle
     * @param {array} array
     * @return {array} array shuffled randomly
     */ Common.shuffle = function(array) {
                    for(var i = array.length - 1; i > 0; i--){
                        var j = Math.floor(Common.random() * (i + 1));
                        var temp = array[i];
                        array[i] = array[j];
                        array[j] = temp;
                    }
                    return array;
                };
                /**
     * Randomly chooses a value from a list with equal probability.
     * The function uses a seeded random generator.
     * @method choose
     * @param {array} choices
     * @return {object} A random choice object from the array
     */ Common.choose = function(choices) {
                    return choices[Math.floor(Common.random() * choices.length)];
                };
                /**
     * Returns true if the object is a HTMLElement, otherwise false.
     * @method isElement
     * @param {object} obj
     * @return {boolean} True if the object is a HTMLElement, otherwise false
     */ Common.isElement = function(obj) {
                    if (typeof HTMLElement !== 'undefined') return obj instanceof HTMLElement;
                    return !!(obj && obj.nodeType && obj.nodeName);
                };
                /**
     * Returns true if the object is an array.
     * @method isArray
     * @param {object} obj
     * @return {boolean} True if the object is an array, otherwise false
     */ Common.isArray = function(obj) {
                    return Object.prototype.toString.call(obj) === '[object Array]';
                };
                /**
     * Returns true if the object is a function.
     * @method isFunction
     * @param {object} obj
     * @return {boolean} True if the object is a function, otherwise false
     */ Common.isFunction = function(obj) {
                    return typeof obj === "function";
                };
                /**
     * Returns true if the object is a plain object.
     * @method isPlainObject
     * @param {object} obj
     * @return {boolean} True if the object is a plain object, otherwise false
     */ Common.isPlainObject = function(obj) {
                    return typeof obj === 'object' && obj.constructor === Object;
                };
                /**
     * Returns true if the object is a string.
     * @method isString
     * @param {object} obj
     * @return {boolean} True if the object is a string, otherwise false
     */ Common.isString = function(obj) {
                    return toString.call(obj) === '[object String]';
                };
                /**
     * Returns the given value clamped between a minimum and maximum value.
     * @method clamp
     * @param {number} value
     * @param {number} min
     * @param {number} max
     * @return {number} The value clamped between min and max inclusive
     */ Common.clamp = function(value, min, max) {
                    if (value < min) return min;
                    if (value > max) return max;
                    return value;
                };
                /**
     * Returns the sign of the given value.
     * @method sign
     * @param {number} value
     * @return {number} -1 if negative, +1 if 0 or positive
     */ Common.sign = function(value) {
                    return value < 0 ? -1 : 1;
                };
                /**
     * Returns the current timestamp since the time origin (e.g. from page load).
     * The result is in milliseconds and will use high-resolution timing if available.
     * @method now
     * @return {number} the current timestamp in milliseconds
     */ Common.now = function() {
                    if (typeof window !== 'undefined' && window.performance) {
                        if (window.performance.now) return window.performance.now();
                        else if (window.performance.webkitNow) return window.performance.webkitNow();
                    }
                    if (Date.now) return Date.now();
                    return new Date() - Common._nowStartTime;
                };
                /**
     * Returns a random value between a minimum and a maximum value inclusive.
     * The function uses a seeded random generator.
     * @method random
     * @param {number} min
     * @param {number} max
     * @return {number} A random number between min and max inclusive
     */ Common.random = function(min, max) {
                    min = typeof min !== "undefined" ? min : 0;
                    max = typeof max !== "undefined" ? max : 1;
                    return min + _seededRandom() * (max - min);
                };
                var _seededRandom = function() {
                    // https://en.wikipedia.org/wiki/Linear_congruential_generator
                    Common._seed = (Common._seed * 9301 + 49297) % 233280;
                    return Common._seed / 233280;
                };
                /**
     * Converts a CSS hex colour string into an integer.
     * @method colorToNumber
     * @param {string} colorString
     * @return {number} An integer representing the CSS hex string
     */ Common.colorToNumber = function(colorString) {
                    colorString = colorString.replace('#', '');
                    if (colorString.length == 3) colorString = colorString.charAt(0) + colorString.charAt(0) + colorString.charAt(1) + colorString.charAt(1) + colorString.charAt(2) + colorString.charAt(2);
                    return parseInt(colorString, 16);
                };
                /**
     * The console logging level to use, where each level includes all levels above and excludes the levels below.
     * The default level is 'debug' which shows all console messages.  
     *
     * Possible level values are:
     * - 0 = None
     * - 1 = Debug
     * - 2 = Info
     * - 3 = Warn
     * - 4 = Error
     * @property Common.logLevel
     * @type {Number}
     * @default 1
     */ Common.logLevel = 1;
                /**
     * Shows a `console.log` message only if the current `Common.logLevel` allows it.
     * The message will be prefixed with 'matter-js' to make it easily identifiable.
     * @method log
     * @param ...objs {} The objects to log.
     */ Common.log = function() {
                    if (console && Common.logLevel > 0 && Common.logLevel <= 3) console.log.apply(console, [
                        'matter-js:'
                    ].concat(Array.prototype.slice.call(arguments)));
                };
                /**
     * Shows a `console.info` message only if the current `Common.logLevel` allows it.
     * The message will be prefixed with 'matter-js' to make it easily identifiable.
     * @method info
     * @param ...objs {} The objects to log.
     */ Common.info = function() {
                    if (console && Common.logLevel > 0 && Common.logLevel <= 2) console.info.apply(console, [
                        'matter-js:'
                    ].concat(Array.prototype.slice.call(arguments)));
                };
                /**
     * Shows a `console.warn` message only if the current `Common.logLevel` allows it.
     * The message will be prefixed with 'matter-js' to make it easily identifiable.
     * @method warn
     * @param ...objs {} The objects to log.
     */ Common.warn = function() {
                    if (console && Common.logLevel > 0 && Common.logLevel <= 3) console.warn.apply(console, [
                        'matter-js:'
                    ].concat(Array.prototype.slice.call(arguments)));
                };
                /**
     * Uses `Common.warn` to log the given message one time only.
     * @method warnOnce
     * @param ...objs {} The objects to log.
     */ Common.warnOnce = function() {
                    var message = Array.prototype.slice.call(arguments).join(' ');
                    if (!Common._warnedOnce[message]) {
                        Common.warn(message);
                        Common._warnedOnce[message] = true;
                    }
                };
                /**
     * Shows a deprecated console warning when the function on the given object is called.
     * The target function will be replaced with a new function that first shows the warning
     * and then calls the original function.
     * @method deprecated
     * @param {object} obj The object or module
     * @param {string} name The property name of the function on obj
     * @param {string} warning The one-time message to show if the function is called
     */ Common.deprecated = function(obj, prop, warning) {
                    obj[prop] = Common.chain(function() {
                        Common.warnOnce('🔅 deprecated 🔅', warning);
                    }, obj[prop]);
                };
                /**
     * Returns the next unique sequential ID.
     * @method nextId
     * @return {Number} Unique sequential ID
     */ Common.nextId = function() {
                    return Common._nextId++;
                };
                /**
     * A cross browser compatible indexOf implementation.
     * @method indexOf
     * @param {array} haystack
     * @param {object} needle
     * @return {number} The position of needle in haystack, otherwise -1.
     */ Common.indexOf = function(haystack, needle) {
                    if (haystack.indexOf) return haystack.indexOf(needle);
                    for(var i = 0; i < haystack.length; i++){
                        if (haystack[i] === needle) return i;
                    }
                    return -1;
                };
                /**
     * A cross browser compatible array map implementation.
     * @method map
     * @param {array} list
     * @param {function} func
     * @return {array} Values from list transformed by func.
     */ Common.map = function(list, func) {
                    if (list.map) return list.map(func);
                    var mapped = [];
                    for(var i = 0; i < list.length; i += 1)mapped.push(func(list[i]));
                    return mapped;
                };
                /**
     * Takes a directed graph and returns the partially ordered set of vertices in topological order.
     * Circular dependencies are allowed.
     * @method topologicalSort
     * @param {object} graph
     * @return {array} Partially ordered set of vertices in topological order.
     */ Common.topologicalSort = function(graph) {
                    // https://github.com/mgechev/javascript-algorithms
                    // Copyright (c) Minko Gechev (MIT license)
                    // Modifications: tidy formatting and naming
                    var result = [], visited = [], temp = [];
                    for(var node in graph)if (!visited[node] && !temp[node]) Common._topologicalSort(node, visited, temp, graph, result);
                    return result;
                };
                Common._topologicalSort = function(node, visited, temp, graph, result) {
                    var neighbors = graph[node] || [];
                    temp[node] = true;
                    for(var i = 0; i < neighbors.length; i += 1){
                        var neighbor = neighbors[i];
                        if (temp[neighbor]) continue;
                        if (!visited[neighbor]) Common._topologicalSort(neighbor, visited, temp, graph, result);
                    }
                    temp[node] = false;
                    visited[node] = true;
                    result.push(node);
                };
                /**
     * Takes _n_ functions as arguments and returns a new function that calls them in order.
     * The arguments applied when calling the new function will also be applied to every function passed.
     * The value of `this` refers to the last value returned in the chain that was not `undefined`.
     * Therefore if a passed function does not return a value, the previously returned value is maintained.
     * After all passed functions have been called the new function returns the last returned value (if any).
     * If any of the passed functions are a chain, then the chain will be flattened.
     * @method chain
     * @param ...funcs {function} The functions to chain.
     * @return {function} A new function that calls the passed functions in order.
     */ Common.chain = function() {
                    var funcs = [];
                    for(var i1 = 0; i1 < arguments.length; i1 += 1){
                        var func = arguments[i1];
                        if (func._chained) // flatten already chained functions
                        funcs.push.apply(funcs, func._chained);
                        else funcs.push(func);
                    }
                    var chain = function() {
                        // https://github.com/GoogleChrome/devtools-docs/issues/53#issuecomment-51941358
                        var lastResult, args = new Array(arguments.length);
                        for(var i = 0, l = arguments.length; i < l; i++)args[i] = arguments[i];
                        for(i = 0; i < funcs.length; i += 1){
                            var result = funcs[i].apply(lastResult, args);
                            if (typeof result !== 'undefined') lastResult = result;
                        }
                        return lastResult;
                    };
                    chain._chained = funcs;
                    return chain;
                };
                /**
     * Chains a function to excute before the original function on the given `path` relative to `base`.
     * See also docs for `Common.chain`.
     * @method chainPathBefore
     * @param {} base The base object
     * @param {string} path The path relative to `base`
     * @param {function} func The function to chain before the original
     * @return {function} The chained function that replaced the original
     */ Common.chainPathBefore = function(base, path, func) {
                    return Common.set(base, path, Common.chain(func, Common.get(base, path)));
                };
                /**
     * Chains a function to excute after the original function on the given `path` relative to `base`.
     * See also docs for `Common.chain`.
     * @method chainPathAfter
     * @param {} base The base object
     * @param {string} path The path relative to `base`
     * @param {function} func The function to chain after the original
     * @return {function} The chained function that replaced the original
     */ Common.chainPathAfter = function(base, path, func) {
                    return Common.set(base, path, Common.chain(Common.get(base, path), func));
                };
                /**
     * Provide the [poly-decomp](https://github.com/schteppe/poly-decomp.js) library module to enable
     * concave vertex decomposition support when using `Bodies.fromVertices` e.g. `Common.setDecomp(require('poly-decomp'))`.
     * @method setDecomp
     * @param {} decomp The [poly-decomp](https://github.com/schteppe/poly-decomp.js) library module.
     */ Common.setDecomp = function(decomp) {
                    Common._decomp = decomp;
                };
                /**
     * Returns the [poly-decomp](https://github.com/schteppe/poly-decomp.js) library module provided through `Common.setDecomp`,
     * otherwise returns the global `decomp` if set.
     * @method getDecomp
     * @return {} The [poly-decomp](https://github.com/schteppe/poly-decomp.js) library module if provided.
     */ Common.getDecomp = function() {
                    // get user provided decomp if set
                    var decomp = Common._decomp;
                    try {
                        // otherwise from window global
                        if (!decomp && typeof window !== 'undefined') decomp = window.decomp;
                        // otherwise from node global
                        if (!decomp && typeof global !== 'undefined') decomp = global.decomp;
                    } catch (e) {
                        // decomp not available
                        decomp = null;
                    }
                    return decomp;
                };
            })();
        /***/ },
        function(module, exports) {
            /**
* The `Matter.Bounds` module contains methods for creating and manipulating axis-aligned bounding boxes (AABB).
*
* @class Bounds
*/ var Bounds = {
            };
            module.exports = Bounds;
            (function() {
                /**
     * Creates a new axis-aligned bounding box (AABB) for the given vertices.
     * @method create
     * @param {vertices} vertices
     * @return {bounds} A new bounds object
     */ Bounds.create = function(vertices) {
                    var bounds = {
                        min: {
                            x: 0,
                            y: 0
                        },
                        max: {
                            x: 0,
                            y: 0
                        }
                    };
                    if (vertices) Bounds.update(bounds, vertices);
                    return bounds;
                };
                /**
     * Updates bounds using the given vertices and extends the bounds given a velocity.
     * @method update
     * @param {bounds} bounds
     * @param {vertices} vertices
     * @param {vector} velocity
     */ Bounds.update = function(bounds, vertices, velocity) {
                    bounds.min.x = Infinity;
                    bounds.max.x = -Infinity;
                    bounds.min.y = Infinity;
                    bounds.max.y = -Infinity;
                    for(var i = 0; i < vertices.length; i++){
                        var vertex = vertices[i];
                        if (vertex.x > bounds.max.x) bounds.max.x = vertex.x;
                        if (vertex.x < bounds.min.x) bounds.min.x = vertex.x;
                        if (vertex.y > bounds.max.y) bounds.max.y = vertex.y;
                        if (vertex.y < bounds.min.y) bounds.min.y = vertex.y;
                    }
                    if (velocity) {
                        if (velocity.x > 0) bounds.max.x += velocity.x;
                        else bounds.min.x += velocity.x;
                        if (velocity.y > 0) bounds.max.y += velocity.y;
                        else bounds.min.y += velocity.y;
                    }
                };
                /**
     * Returns true if the bounds contains the given point.
     * @method contains
     * @param {bounds} bounds
     * @param {vector} point
     * @return {boolean} True if the bounds contain the point, otherwise false
     */ Bounds.contains = function(bounds, point) {
                    return point.x >= bounds.min.x && point.x <= bounds.max.x && point.y >= bounds.min.y && point.y <= bounds.max.y;
                };
                /**
     * Returns true if the two bounds intersect.
     * @method overlaps
     * @param {bounds} boundsA
     * @param {bounds} boundsB
     * @return {boolean} True if the bounds overlap, otherwise false
     */ Bounds.overlaps = function(boundsA, boundsB) {
                    return boundsA.min.x <= boundsB.max.x && boundsA.max.x >= boundsB.min.x && boundsA.max.y >= boundsB.min.y && boundsA.min.y <= boundsB.max.y;
                };
                /**
     * Translates the bounds by the given vector.
     * @method translate
     * @param {bounds} bounds
     * @param {vector} vector
     */ Bounds.translate = function(bounds, vector) {
                    bounds.min.x += vector.x;
                    bounds.max.x += vector.x;
                    bounds.min.y += vector.y;
                    bounds.max.y += vector.y;
                };
                /**
     * Shifts the bounds to the given position.
     * @method shift
     * @param {bounds} bounds
     * @param {vector} position
     */ Bounds.shift = function(bounds, position) {
                    var deltaX = bounds.max.x - bounds.min.x, deltaY = bounds.max.y - bounds.min.y;
                    bounds.min.x = position.x;
                    bounds.max.x = position.x + deltaX;
                    bounds.min.y = position.y;
                    bounds.max.y = position.y + deltaY;
                };
            })();
        /***/ },
        function(module, exports) {
            /**
* The `Matter.Vector` module contains methods for creating and manipulating vectors.
* Vectors are the basis of all the geometry related operations in the engine.
* A `Matter.Vector` object is of the form `{ x: 0, y: 0 }`.
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class Vector
*/ // TODO: consider params for reusing vector objects
            var Vector = {
            };
            module.exports = Vector;
            (function() {
                /**
     * Creates a new vector.
     * @method create
     * @param {number} x
     * @param {number} y
     * @return {vector} A new vector
     */ Vector.create = function(x, y) {
                    return {
                        x: x || 0,
                        y: y || 0
                    };
                };
                /**
     * Returns a new vector with `x` and `y` copied from the given `vector`.
     * @method clone
     * @param {vector} vector
     * @return {vector} A new cloned vector
     */ Vector.clone = function(vector) {
                    return {
                        x: vector.x,
                        y: vector.y
                    };
                };
                /**
     * Returns the magnitude (length) of a vector.
     * @method magnitude
     * @param {vector} vector
     * @return {number} The magnitude of the vector
     */ Vector.magnitude = function(vector) {
                    return Math.sqrt(vector.x * vector.x + vector.y * vector.y);
                };
                /**
     * Returns the magnitude (length) of a vector (therefore saving a `sqrt` operation).
     * @method magnitudeSquared
     * @param {vector} vector
     * @return {number} The squared magnitude of the vector
     */ Vector.magnitudeSquared = function(vector) {
                    return vector.x * vector.x + vector.y * vector.y;
                };
                /**
     * Rotates the vector about (0, 0) by specified angle.
     * @method rotate
     * @param {vector} vector
     * @param {number} angle
     * @param {vector} [output]
     * @return {vector} The vector rotated about (0, 0)
     */ Vector.rotate = function(vector, angle, output) {
                    var cos = Math.cos(angle), sin = Math.sin(angle);
                    if (!output) output = {
                    };
                    var x = vector.x * cos - vector.y * sin;
                    output.y = vector.x * sin + vector.y * cos;
                    output.x = x;
                    return output;
                };
                /**
     * Rotates the vector about a specified point by specified angle.
     * @method rotateAbout
     * @param {vector} vector
     * @param {number} angle
     * @param {vector} point
     * @param {vector} [output]
     * @return {vector} A new vector rotated about the point
     */ Vector.rotateAbout = function(vector, angle, point, output) {
                    var cos = Math.cos(angle), sin = Math.sin(angle);
                    if (!output) output = {
                    };
                    var x = point.x + ((vector.x - point.x) * cos - (vector.y - point.y) * sin);
                    output.y = point.y + ((vector.x - point.x) * sin + (vector.y - point.y) * cos);
                    output.x = x;
                    return output;
                };
                /**
     * Normalises a vector (such that its magnitude is `1`).
     * @method normalise
     * @param {vector} vector
     * @return {vector} A new vector normalised
     */ Vector.normalise = function(vector) {
                    var magnitude = Vector.magnitude(vector);
                    if (magnitude === 0) return {
                        x: 0,
                        y: 0
                    };
                    return {
                        x: vector.x / magnitude,
                        y: vector.y / magnitude
                    };
                };
                /**
     * Returns the dot-product of two vectors.
     * @method dot
     * @param {vector} vectorA
     * @param {vector} vectorB
     * @return {number} The dot product of the two vectors
     */ Vector.dot = function(vectorA, vectorB) {
                    return vectorA.x * vectorB.x + vectorA.y * vectorB.y;
                };
                /**
     * Returns the cross-product of two vectors.
     * @method cross
     * @param {vector} vectorA
     * @param {vector} vectorB
     * @return {number} The cross product of the two vectors
     */ Vector.cross = function(vectorA, vectorB) {
                    return vectorA.x * vectorB.y - vectorA.y * vectorB.x;
                };
                /**
     * Returns the cross-product of three vectors.
     * @method cross3
     * @param {vector} vectorA
     * @param {vector} vectorB
     * @param {vector} vectorC
     * @return {number} The cross product of the three vectors
     */ Vector.cross3 = function(vectorA, vectorB, vectorC) {
                    return (vectorB.x - vectorA.x) * (vectorC.y - vectorA.y) - (vectorB.y - vectorA.y) * (vectorC.x - vectorA.x);
                };
                /**
     * Adds the two vectors.
     * @method add
     * @param {vector} vectorA
     * @param {vector} vectorB
     * @param {vector} [output]
     * @return {vector} A new vector of vectorA and vectorB added
     */ Vector.add = function(vectorA, vectorB, output) {
                    if (!output) output = {
                    };
                    output.x = vectorA.x + vectorB.x;
                    output.y = vectorA.y + vectorB.y;
                    return output;
                };
                /**
     * Subtracts the two vectors.
     * @method sub
     * @param {vector} vectorA
     * @param {vector} vectorB
     * @param {vector} [output]
     * @return {vector} A new vector of vectorA and vectorB subtracted
     */ Vector.sub = function(vectorA, vectorB, output) {
                    if (!output) output = {
                    };
                    output.x = vectorA.x - vectorB.x;
                    output.y = vectorA.y - vectorB.y;
                    return output;
                };
                /**
     * Multiplies a vector and a scalar.
     * @method mult
     * @param {vector} vector
     * @param {number} scalar
     * @return {vector} A new vector multiplied by scalar
     */ Vector.mult = function(vector, scalar) {
                    return {
                        x: vector.x * scalar,
                        y: vector.y * scalar
                    };
                };
                /**
     * Divides a vector and a scalar.
     * @method div
     * @param {vector} vector
     * @param {number} scalar
     * @return {vector} A new vector divided by scalar
     */ Vector.div = function(vector, scalar) {
                    return {
                        x: vector.x / scalar,
                        y: vector.y / scalar
                    };
                };
                /**
     * Returns the perpendicular vector. Set `negate` to true for the perpendicular in the opposite direction.
     * @method perp
     * @param {vector} vector
     * @param {bool} [negate=false]
     * @return {vector} The perpendicular vector
     */ Vector.perp = function(vector, negate) {
                    negate = negate === true ? -1 : 1;
                    return {
                        x: negate * -vector.y,
                        y: negate * vector.x
                    };
                };
                /**
     * Negates both components of a vector such that it points in the opposite direction.
     * @method neg
     * @param {vector} vector
     * @return {vector} The negated vector
     */ Vector.neg = function(vector) {
                    return {
                        x: -vector.x,
                        y: -vector.y
                    };
                };
                /**
     * Returns the angle between the vector `vectorB - vectorA` and the x-axis in radians.
     * @method angle
     * @param {vector} vectorA
     * @param {vector} vectorB
     * @return {number} The angle in radians
     */ Vector.angle = function(vectorA, vectorB) {
                    return Math.atan2(vectorB.y - vectorA.y, vectorB.x - vectorA.x);
                };
                /**
     * Temporary vector pool (not thread-safe).
     * @property _temp
     * @type {vector[]}
     * @private
     */ Vector._temp = [
                    Vector.create(),
                    Vector.create(),
                    Vector.create(),
                    Vector.create(),
                    Vector.create(),
                    Vector.create()
                ];
            })();
        /***/ },
        function(module, exports, __webpack_require__) {
            /**
* The `Matter.Vertices` module contains methods for creating and manipulating sets of vertices.
* A set of vertices is an array of `Matter.Vector` with additional indexing properties inserted by `Vertices.create`.
* A `Matter.Body` maintains a set of vertices to represent the shape of the object (its convex hull).
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class Vertices
*/ var Vertices = {
            };
            module.exports = Vertices;
            var Vector = __webpack_require__(2);
            var Common = __webpack_require__(0);
            (function() {
                /**
     * Creates a new set of `Matter.Body` compatible vertices.
     * The `points` argument accepts an array of `Matter.Vector` points orientated around the origin `(0, 0)`, for example:
     *
     *     [{ x: 0, y: 0 }, { x: 25, y: 50 }, { x: 50, y: 0 }]
     *
     * The `Vertices.create` method returns a new array of vertices, which are similar to Matter.Vector objects,
     * but with some additional references required for efficient collision detection routines.
     *
     * Vertices must be specified in clockwise order.
     *
     * Note that the `body` argument is not optional, a `Matter.Body` reference must be provided.
     *
     * @method create
     * @param {vector[]} points
     * @param {body} body
     */ Vertices.create = function(points, body) {
                    var vertices = [];
                    for(var i = 0; i < points.length; i++){
                        var point = points[i], vertex = {
                            x: point.x,
                            y: point.y,
                            index: i,
                            body: body,
                            isInternal: false
                        };
                        vertices.push(vertex);
                    }
                    return vertices;
                };
                /**
     * Parses a string containing ordered x y pairs separated by spaces (and optionally commas), 
     * into a `Matter.Vertices` object for the given `Matter.Body`.
     * For parsing SVG paths, see `Svg.pathToVertices`.
     * @method fromPath
     * @param {string} path
     * @param {body} body
     * @return {vertices} vertices
     */ Vertices.fromPath = function(path, body) {
                    var pathPattern = /L?\s*([-\d.e]+)[\s,]*([-\d.e]+)*/ig, points = [];
                    path.replace(pathPattern, function(match, x, y) {
                        points.push({
                            x: parseFloat(x),
                            y: parseFloat(y)
                        });
                    });
                    return Vertices.create(points, body);
                };
                /**
     * Returns the centre (centroid) of the set of vertices.
     * @method centre
     * @param {vertices} vertices
     * @return {vector} The centre point
     */ Vertices.centre = function(vertices) {
                    var area = Vertices.area(vertices, true), centre = {
                        x: 0,
                        y: 0
                    }, cross, temp, j;
                    for(var i = 0; i < vertices.length; i++){
                        j = (i + 1) % vertices.length;
                        cross = Vector.cross(vertices[i], vertices[j]);
                        temp = Vector.mult(Vector.add(vertices[i], vertices[j]), cross);
                        centre = Vector.add(centre, temp);
                    }
                    return Vector.div(centre, 6 * area);
                };
                /**
     * Returns the average (mean) of the set of vertices.
     * @method mean
     * @param {vertices} vertices
     * @return {vector} The average point
     */ Vertices.mean = function(vertices) {
                    var average = {
                        x: 0,
                        y: 0
                    };
                    for(var i = 0; i < vertices.length; i++){
                        average.x += vertices[i].x;
                        average.y += vertices[i].y;
                    }
                    return Vector.div(average, vertices.length);
                };
                /**
     * Returns the area of the set of vertices.
     * @method area
     * @param {vertices} vertices
     * @param {bool} signed
     * @return {number} The area
     */ Vertices.area = function(vertices, signed) {
                    var area = 0, j = vertices.length - 1;
                    for(var i = 0; i < vertices.length; i++){
                        area += (vertices[j].x - vertices[i].x) * (vertices[j].y + vertices[i].y);
                        j = i;
                    }
                    if (signed) return area / 2;
                    return Math.abs(area) / 2;
                };
                /**
     * Returns the moment of inertia (second moment of area) of the set of vertices given the total mass.
     * @method inertia
     * @param {vertices} vertices
     * @param {number} mass
     * @return {number} The polygon's moment of inertia
     */ Vertices.inertia = function(vertices, mass) {
                    var numerator = 0, denominator = 0, v = vertices, cross, j;
                    // find the polygon's moment of inertia, using second moment of area
                    // from equations at http://www.physicsforums.com/showthread.php?t=25293
                    for(var n = 0; n < v.length; n++){
                        j = (n + 1) % v.length;
                        cross = Math.abs(Vector.cross(v[j], v[n]));
                        numerator += cross * (Vector.dot(v[j], v[j]) + Vector.dot(v[j], v[n]) + Vector.dot(v[n], v[n]));
                        denominator += cross;
                    }
                    return mass / 6 * (numerator / denominator);
                };
                /**
     * Translates the set of vertices in-place.
     * @method translate
     * @param {vertices} vertices
     * @param {vector} vector
     * @param {number} scalar
     */ Vertices.translate = function(vertices, vector, scalar) {
                    scalar = typeof scalar !== 'undefined' ? scalar : 1;
                    var verticesLength = vertices.length, translateX = vector.x * scalar, translateY = vector.y * scalar, i;
                    for(i = 0; i < verticesLength; i++){
                        vertices[i].x += translateX;
                        vertices[i].y += translateY;
                    }
                    return vertices;
                };
                /**
     * Rotates the set of vertices in-place.
     * @method rotate
     * @param {vertices} vertices
     * @param {number} angle
     * @param {vector} point
     */ Vertices.rotate = function(vertices, angle, point) {
                    if (angle === 0) return;
                    var cos = Math.cos(angle), sin = Math.sin(angle), pointX = point.x, pointY = point.y, verticesLength = vertices.length, vertex, dx, dy, i;
                    for(i = 0; i < verticesLength; i++){
                        vertex = vertices[i];
                        dx = vertex.x - pointX;
                        dy = vertex.y - pointY;
                        vertex.x = pointX + (dx * cos - dy * sin);
                        vertex.y = pointY + (dx * sin + dy * cos);
                    }
                    return vertices;
                };
                /**
     * Returns `true` if the `point` is inside the set of `vertices`.
     * @method contains
     * @param {vertices} vertices
     * @param {vector} point
     * @return {boolean} True if the vertices contains point, otherwise false
     */ Vertices.contains = function(vertices, point) {
                    var pointX = point.x, pointY = point.y, verticesLength = vertices.length, vertex = vertices[verticesLength - 1], nextVertex;
                    for(var i = 0; i < verticesLength; i++){
                        nextVertex = vertices[i];
                        if ((pointX - vertex.x) * (nextVertex.y - vertex.y) + (pointY - vertex.y) * (vertex.x - nextVertex.x) > 0) return false;
                        vertex = nextVertex;
                    }
                    return true;
                };
                /**
     * Scales the vertices from a point (default is centre) in-place.
     * @method scale
     * @param {vertices} vertices
     * @param {number} scaleX
     * @param {number} scaleY
     * @param {vector} point
     */ Vertices.scale = function(vertices, scaleX, scaleY, point) {
                    if (scaleX === 1 && scaleY === 1) return vertices;
                    point = point || Vertices.centre(vertices);
                    var vertex, delta;
                    for(var i = 0; i < vertices.length; i++){
                        vertex = vertices[i];
                        delta = Vector.sub(vertex, point);
                        vertices[i].x = point.x + delta.x * scaleX;
                        vertices[i].y = point.y + delta.y * scaleY;
                    }
                    return vertices;
                };
                /**
     * Chamfers a set of vertices by giving them rounded corners, returns a new set of vertices.
     * The radius parameter is a single number or an array to specify the radius for each vertex.
     * @method chamfer
     * @param {vertices} vertices
     * @param {number[]} radius
     * @param {number} quality
     * @param {number} qualityMin
     * @param {number} qualityMax
     */ Vertices.chamfer = function(vertices, radius, quality, qualityMin, qualityMax) {
                    if (typeof radius === 'number') radius = [
                        radius
                    ];
                    else radius = radius || [
                        8
                    ];
                    // quality defaults to -1, which is auto
                    quality = typeof quality !== 'undefined' ? quality : -1;
                    qualityMin = qualityMin || 2;
                    qualityMax = qualityMax || 14;
                    var newVertices = [];
                    for(var i = 0; i < vertices.length; i++){
                        var prevVertex = vertices[i - 1 >= 0 ? i - 1 : vertices.length - 1], vertex = vertices[i], nextVertex = vertices[(i + 1) % vertices.length], currentRadius = radius[i < radius.length ? i : radius.length - 1];
                        if (currentRadius === 0) {
                            newVertices.push(vertex);
                            continue;
                        }
                        var prevNormal = Vector.normalise({
                            x: vertex.y - prevVertex.y,
                            y: prevVertex.x - vertex.x
                        });
                        var nextNormal = Vector.normalise({
                            x: nextVertex.y - vertex.y,
                            y: vertex.x - nextVertex.x
                        });
                        var diagonalRadius = Math.sqrt(2 * Math.pow(currentRadius, 2)), radiusVector = Vector.mult(Common.clone(prevNormal), currentRadius), midNormal = Vector.normalise(Vector.mult(Vector.add(prevNormal, nextNormal), 0.5)), scaledVertex = Vector.sub(vertex, Vector.mult(midNormal, diagonalRadius));
                        var precision = quality;
                        if (quality === -1) // automatically decide precision
                        precision = Math.pow(currentRadius, 0.32) * 1.75;
                        precision = Common.clamp(precision, qualityMin, qualityMax);
                        // use an even value for precision, more likely to reduce axes by using symmetry
                        if (precision % 2 === 1) precision += 1;
                        var alpha = Math.acos(Vector.dot(prevNormal, nextNormal)), theta = alpha / precision;
                        for(var j = 0; j < precision; j++)newVertices.push(Vector.add(Vector.rotate(radiusVector, theta * j), scaledVertex));
                    }
                    return newVertices;
                };
                /**
     * Sorts the input vertices into clockwise order in place.
     * @method clockwiseSort
     * @param {vertices} vertices
     * @return {vertices} vertices
     */ Vertices.clockwiseSort = function(vertices) {
                    var centre = Vertices.mean(vertices);
                    vertices.sort(function(vertexA, vertexB) {
                        return Vector.angle(centre, vertexA) - Vector.angle(centre, vertexB);
                    });
                    return vertices;
                };
                /**
     * Returns true if the vertices form a convex shape (vertices must be in clockwise order).
     * @method isConvex
     * @param {vertices} vertices
     * @return {bool} `true` if the `vertices` are convex, `false` if not (or `null` if not computable).
     */ Vertices.isConvex = function(vertices) {
                    // http://paulbourke.net/geometry/polygonmesh/
                    // Copyright (c) Paul Bourke (use permitted)
                    var flag = 0, n = vertices.length, i, j, k, z;
                    if (n < 3) return null;
                    for(i = 0; i < n; i++){
                        j = (i + 1) % n;
                        k = (i + 2) % n;
                        z = (vertices[j].x - vertices[i].x) * (vertices[k].y - vertices[j].y);
                        z -= (vertices[j].y - vertices[i].y) * (vertices[k].x - vertices[j].x);
                        if (z < 0) flag |= 1;
                        else if (z > 0) flag |= 2;
                        if (flag === 3) return false;
                    }
                    if (flag !== 0) return true;
                    else return null;
                };
                /**
     * Returns the convex hull of the input vertices as a new array of points.
     * @method hull
     * @param {vertices} vertices
     * @return [vertex] vertices
     */ Vertices.hull = function(vertices) {
                    // http://geomalgorithms.com/a10-_hull-1.html
                    var upper = [], lower = [], vertex, i;
                    // sort vertices on x-axis (y-axis for ties)
                    vertices = vertices.slice(0);
                    vertices.sort(function(vertexA, vertexB) {
                        var dx = vertexA.x - vertexB.x;
                        return dx !== 0 ? dx : vertexA.y - vertexB.y;
                    });
                    // build lower hull
                    for(i = 0; i < vertices.length; i += 1){
                        vertex = vertices[i];
                        while(lower.length >= 2 && Vector.cross3(lower[lower.length - 2], lower[lower.length - 1], vertex) <= 0)lower.pop();
                        lower.push(vertex);
                    }
                    // build upper hull
                    for(i = vertices.length - 1; i >= 0; i -= 1){
                        vertex = vertices[i];
                        while(upper.length >= 2 && Vector.cross3(upper[upper.length - 2], upper[upper.length - 1], vertex) <= 0)upper.pop();
                        upper.push(vertex);
                    }
                    // concatenation of the lower and upper hulls gives the convex hull
                    // omit last points because they are repeated at the beginning of the other list
                    upper.pop();
                    lower.pop();
                    return upper.concat(lower);
                };
            })();
        /***/ },
        function(module, exports, __webpack_require__) {
            /**
* The `Matter.Events` module contains methods to fire and listen to events on other objects.
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class Events
*/ var Events = {
            };
            module.exports = Events;
            var Common = __webpack_require__(0);
            (function() {
                /**
     * Subscribes a callback function to the given object's `eventName`.
     * @method on
     * @param {} object
     * @param {string} eventNames
     * @param {function} callback
     */ Events.on = function(object, eventNames, callback) {
                    var names = eventNames.split(' '), name;
                    for(var i = 0; i < names.length; i++){
                        name = names[i];
                        object.events = object.events || {
                        };
                        object.events[name] = object.events[name] || [];
                        object.events[name].push(callback);
                    }
                    return callback;
                };
                /**
     * Removes the given event callback. If no callback, clears all callbacks in `eventNames`. If no `eventNames`, clears all events.
     * @method off
     * @param {} object
     * @param {string} eventNames
     * @param {function} callback
     */ Events.off = function(object, eventNames, callback) {
                    if (!eventNames) {
                        object.events = {
                        };
                        return;
                    }
                    // handle Events.off(object, callback)
                    if (typeof eventNames === 'function') {
                        callback = eventNames;
                        eventNames = Common.keys(object.events).join(' ');
                    }
                    var names = eventNames.split(' ');
                    for(var i = 0; i < names.length; i++){
                        var callbacks = object.events[names[i]], newCallbacks = [];
                        if (callback && callbacks) {
                            for(var j = 0; j < callbacks.length; j++)if (callbacks[j] !== callback) newCallbacks.push(callbacks[j]);
                        }
                        object.events[names[i]] = newCallbacks;
                    }
                };
                /**
     * Fires all the callbacks subscribed to the given object's `eventName`, in the order they subscribed, if any.
     * @method trigger
     * @param {} object
     * @param {string} eventNames
     * @param {} event
     */ Events.trigger = function(object, eventNames, event) {
                    var names, name, callbacks, eventClone;
                    var events = object.events;
                    if (events && Common.keys(events).length > 0) {
                        if (!event) event = {
                        };
                        names = eventNames.split(' ');
                        for(var i = 0; i < names.length; i++){
                            name = names[i];
                            callbacks = events[name];
                            if (callbacks) {
                                eventClone = Common.clone(event, false);
                                eventClone.name = name;
                                eventClone.source = object;
                                for(var j = 0; j < callbacks.length; j++)callbacks[j].apply(object, [
                                    eventClone
                                ]);
                            }
                        }
                    }
                };
            })();
        /***/ },
        function(module, exports, __webpack_require__) {
            /**
* A composite is a collection of `Matter.Body`, `Matter.Constraint` and other `Matter.Composite` objects.
*
* They are a container that can represent complex objects made of multiple parts, even if they are not physically connected.
* A composite could contain anything from a single body all the way up to a whole world.
* 
* When making any changes to composites, use the included functions rather than changing their properties directly.
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class Composite
*/ var Composite = {
            };
            module.exports = Composite;
            var Events = __webpack_require__(4);
            var Common = __webpack_require__(0);
            var Bounds = __webpack_require__(1);
            var Body = __webpack_require__(6);
            (function() {
                /**
     * Creates a new composite. The options parameter is an object that specifies any properties you wish to override the defaults.
     * See the properites section below for detailed information on what you can pass via the `options` object.
     * @method create
     * @param {} [options]
     * @return {composite} A new composite
     */ Composite.create = function(options) {
                    return Common.extend({
                        id: Common.nextId(),
                        type: 'composite',
                        parent: null,
                        isModified: false,
                        bodies: [],
                        constraints: [],
                        composites: [],
                        label: 'Composite',
                        plugin: {
                        },
                        cache: {
                            allBodies: null,
                            allConstraints: null,
                            allComposites: null
                        }
                    }, options);
                };
                /**
     * Sets the composite's `isModified` flag. 
     * If `updateParents` is true, all parents will be set (default: false).
     * If `updateChildren` is true, all children will be set (default: false).
     * @private
     * @method setModified
     * @param {composite} composite
     * @param {boolean} isModified
     * @param {boolean} [updateParents=false]
     * @param {boolean} [updateChildren=false]
     */ Composite.setModified = function(composite, isModified, updateParents, updateChildren) {
                    composite.isModified = isModified;
                    if (isModified && composite.cache) {
                        composite.cache.allBodies = null;
                        composite.cache.allConstraints = null;
                        composite.cache.allComposites = null;
                    }
                    if (updateParents && composite.parent) Composite.setModified(composite.parent, isModified, updateParents, updateChildren);
                    if (updateChildren) for(var i = 0; i < composite.composites.length; i++){
                        var childComposite = composite.composites[i];
                        Composite.setModified(childComposite, isModified, updateParents, updateChildren);
                    }
                };
                /**
     * Generic single or multi-add function. Adds a single or an array of body(s), constraint(s) or composite(s) to the given composite.
     * Triggers `beforeAdd` and `afterAdd` events on the `composite`.
     * @method add
     * @param {composite} composite
     * @param {object|array} object A single or an array of body(s), constraint(s) or composite(s)
     * @return {composite} The original composite with the objects added
     */ Composite.add = function(composite, object) {
                    var objects = [].concat(object);
                    Events.trigger(composite, 'beforeAdd', {
                        object: object
                    });
                    for(var i = 0; i < objects.length; i++){
                        var obj = objects[i];
                        switch(obj.type){
                            case 'body':
                                // skip adding compound parts
                                if (obj.parent !== obj) {
                                    Common.warn('Composite.add: skipped adding a compound body part (you must add its parent instead)');
                                    break;
                                }
                                Composite.addBody(composite, obj);
                                break;
                            case 'constraint':
                                Composite.addConstraint(composite, obj);
                                break;
                            case 'composite':
                                Composite.addComposite(composite, obj);
                                break;
                            case 'mouseConstraint':
                                Composite.addConstraint(composite, obj.constraint);
                                break;
                        }
                    }
                    Events.trigger(composite, 'afterAdd', {
                        object: object
                    });
                    return composite;
                };
                /**
     * Generic remove function. Removes one or many body(s), constraint(s) or a composite(s) to the given composite.
     * Optionally searching its children recursively.
     * Triggers `beforeRemove` and `afterRemove` events on the `composite`.
     * @method remove
     * @param {composite} composite
     * @param {object|array} object
     * @param {boolean} [deep=false]
     * @return {composite} The original composite with the objects removed
     */ Composite.remove = function(composite, object, deep) {
                    var objects = [].concat(object);
                    Events.trigger(composite, 'beforeRemove', {
                        object: object
                    });
                    for(var i = 0; i < objects.length; i++){
                        var obj = objects[i];
                        switch(obj.type){
                            case 'body':
                                Composite.removeBody(composite, obj, deep);
                                break;
                            case 'constraint':
                                Composite.removeConstraint(composite, obj, deep);
                                break;
                            case 'composite':
                                Composite.removeComposite(composite, obj, deep);
                                break;
                            case 'mouseConstraint':
                                Composite.removeConstraint(composite, obj.constraint);
                                break;
                        }
                    }
                    Events.trigger(composite, 'afterRemove', {
                        object: object
                    });
                    return composite;
                };
                /**
     * Adds a composite to the given composite.
     * @private
     * @method addComposite
     * @param {composite} compositeA
     * @param {composite} compositeB
     * @return {composite} The original compositeA with the objects from compositeB added
     */ Composite.addComposite = function(compositeA, compositeB) {
                    compositeA.composites.push(compositeB);
                    compositeB.parent = compositeA;
                    Composite.setModified(compositeA, true, true, false);
                    return compositeA;
                };
                /**
     * Removes a composite from the given composite, and optionally searching its children recursively.
     * @private
     * @method removeComposite
     * @param {composite} compositeA
     * @param {composite} compositeB
     * @param {boolean} [deep=false]
     * @return {composite} The original compositeA with the composite removed
     */ Composite.removeComposite = function(compositeA, compositeB, deep) {
                    var position = Common.indexOf(compositeA.composites, compositeB);
                    if (position !== -1) Composite.removeCompositeAt(compositeA, position);
                    if (deep) for(var i = 0; i < compositeA.composites.length; i++)Composite.removeComposite(compositeA.composites[i], compositeB, true);
                    return compositeA;
                };
                /**
     * Removes a composite from the given composite.
     * @private
     * @method removeCompositeAt
     * @param {composite} composite
     * @param {number} position
     * @return {composite} The original composite with the composite removed
     */ Composite.removeCompositeAt = function(composite, position) {
                    composite.composites.splice(position, 1);
                    Composite.setModified(composite, true, true, false);
                    return composite;
                };
                /**
     * Adds a body to the given composite.
     * @private
     * @method addBody
     * @param {composite} composite
     * @param {body} body
     * @return {composite} The original composite with the body added
     */ Composite.addBody = function(composite, body) {
                    composite.bodies.push(body);
                    Composite.setModified(composite, true, true, false);
                    return composite;
                };
                /**
     * Removes a body from the given composite, and optionally searching its children recursively.
     * @private
     * @method removeBody
     * @param {composite} composite
     * @param {body} body
     * @param {boolean} [deep=false]
     * @return {composite} The original composite with the body removed
     */ Composite.removeBody = function(composite, body, deep) {
                    var position = Common.indexOf(composite.bodies, body);
                    if (position !== -1) Composite.removeBodyAt(composite, position);
                    if (deep) for(var i = 0; i < composite.composites.length; i++)Composite.removeBody(composite.composites[i], body, true);
                    return composite;
                };
                /**
     * Removes a body from the given composite.
     * @private
     * @method removeBodyAt
     * @param {composite} composite
     * @param {number} position
     * @return {composite} The original composite with the body removed
     */ Composite.removeBodyAt = function(composite, position) {
                    composite.bodies.splice(position, 1);
                    Composite.setModified(composite, true, true, false);
                    return composite;
                };
                /**
     * Adds a constraint to the given composite.
     * @private
     * @method addConstraint
     * @param {composite} composite
     * @param {constraint} constraint
     * @return {composite} The original composite with the constraint added
     */ Composite.addConstraint = function(composite, constraint) {
                    composite.constraints.push(constraint);
                    Composite.setModified(composite, true, true, false);
                    return composite;
                };
                /**
     * Removes a constraint from the given composite, and optionally searching its children recursively.
     * @private
     * @method removeConstraint
     * @param {composite} composite
     * @param {constraint} constraint
     * @param {boolean} [deep=false]
     * @return {composite} The original composite with the constraint removed
     */ Composite.removeConstraint = function(composite, constraint, deep) {
                    var position = Common.indexOf(composite.constraints, constraint);
                    if (position !== -1) Composite.removeConstraintAt(composite, position);
                    if (deep) for(var i = 0; i < composite.composites.length; i++)Composite.removeConstraint(composite.composites[i], constraint, true);
                    return composite;
                };
                /**
     * Removes a body from the given composite.
     * @private
     * @method removeConstraintAt
     * @param {composite} composite
     * @param {number} position
     * @return {composite} The original composite with the constraint removed
     */ Composite.removeConstraintAt = function(composite, position) {
                    composite.constraints.splice(position, 1);
                    Composite.setModified(composite, true, true, false);
                    return composite;
                };
                /**
     * Removes all bodies, constraints and composites from the given composite.
     * Optionally clearing its children recursively.
     * @method clear
     * @param {composite} composite
     * @param {boolean} keepStatic
     * @param {boolean} [deep=false]
     */ Composite.clear = function(composite, keepStatic, deep) {
                    if (deep) for(var i = 0; i < composite.composites.length; i++)Composite.clear(composite.composites[i], keepStatic, true);
                    if (keepStatic) composite.bodies = composite.bodies.filter(function(body) {
                        return body.isStatic;
                    });
                    else composite.bodies.length = 0;
                    composite.constraints.length = 0;
                    composite.composites.length = 0;
                    Composite.setModified(composite, true, true, false);
                    return composite;
                };
                /**
     * Returns all bodies in the given composite, including all bodies in its children, recursively.
     * @method allBodies
     * @param {composite} composite
     * @return {body[]} All the bodies
     */ Composite.allBodies = function(composite) {
                    if (composite.cache && composite.cache.allBodies) return composite.cache.allBodies;
                    var bodies = [].concat(composite.bodies);
                    for(var i = 0; i < composite.composites.length; i++)bodies = bodies.concat(Composite.allBodies(composite.composites[i]));
                    if (composite.cache) composite.cache.allBodies = bodies;
                    return bodies;
                };
                /**
     * Returns all constraints in the given composite, including all constraints in its children, recursively.
     * @method allConstraints
     * @param {composite} composite
     * @return {constraint[]} All the constraints
     */ Composite.allConstraints = function(composite) {
                    if (composite.cache && composite.cache.allConstraints) return composite.cache.allConstraints;
                    var constraints = [].concat(composite.constraints);
                    for(var i = 0; i < composite.composites.length; i++)constraints = constraints.concat(Composite.allConstraints(composite.composites[i]));
                    if (composite.cache) composite.cache.allConstraints = constraints;
                    return constraints;
                };
                /**
     * Returns all composites in the given composite, including all composites in its children, recursively.
     * @method allComposites
     * @param {composite} composite
     * @return {composite[]} All the composites
     */ Composite.allComposites = function(composite) {
                    if (composite.cache && composite.cache.allComposites) return composite.cache.allComposites;
                    var composites = [].concat(composite.composites);
                    for(var i = 0; i < composite.composites.length; i++)composites = composites.concat(Composite.allComposites(composite.composites[i]));
                    if (composite.cache) composite.cache.allComposites = composites;
                    return composites;
                };
                /**
     * Searches the composite recursively for an object matching the type and id supplied, null if not found.
     * @method get
     * @param {composite} composite
     * @param {number} id
     * @param {string} type
     * @return {object} The requested object, if found
     */ Composite.get = function(composite, id, type) {
                    var objects, object1;
                    switch(type){
                        case 'body':
                            objects = Composite.allBodies(composite);
                            break;
                        case 'constraint':
                            objects = Composite.allConstraints(composite);
                            break;
                        case 'composite':
                            objects = Composite.allComposites(composite).concat(composite);
                            break;
                    }
                    if (!objects) return null;
                    object1 = objects.filter(function(object) {
                        return object.id.toString() === id.toString();
                    });
                    return object1.length === 0 ? null : object1[0];
                };
                /**
     * Moves the given object(s) from compositeA to compositeB (equal to a remove followed by an add).
     * @method move
     * @param {compositeA} compositeA
     * @param {object[]} objects
     * @param {compositeB} compositeB
     * @return {composite} Returns compositeA
     */ Composite.move = function(compositeA, objects, compositeB) {
                    Composite.remove(compositeA, objects);
                    Composite.add(compositeB, objects);
                    return compositeA;
                };
                /**
     * Assigns new ids for all objects in the composite, recursively.
     * @method rebase
     * @param {composite} composite
     * @return {composite} Returns composite
     */ Composite.rebase = function(composite) {
                    var objects = Composite.allBodies(composite).concat(Composite.allConstraints(composite)).concat(Composite.allComposites(composite));
                    for(var i = 0; i < objects.length; i++)objects[i].id = Common.nextId();
                    return composite;
                };
                /**
     * Translates all children in the composite by a given vector relative to their current positions, 
     * without imparting any velocity.
     * @method translate
     * @param {composite} composite
     * @param {vector} translation
     * @param {bool} [recursive=true]
     */ Composite.translate = function(composite, translation, recursive) {
                    var bodies = recursive ? Composite.allBodies(composite) : composite.bodies;
                    for(var i = 0; i < bodies.length; i++)Body.translate(bodies[i], translation);
                    return composite;
                };
                /**
     * Rotates all children in the composite by a given angle about the given point, without imparting any angular velocity.
     * @method rotate
     * @param {composite} composite
     * @param {number} rotation
     * @param {vector} point
     * @param {bool} [recursive=true]
     */ Composite.rotate = function(composite, rotation, point, recursive) {
                    var cos = Math.cos(rotation), sin = Math.sin(rotation), bodies = recursive ? Composite.allBodies(composite) : composite.bodies;
                    for(var i = 0; i < bodies.length; i++){
                        var body = bodies[i], dx = body.position.x - point.x, dy = body.position.y - point.y;
                        Body.setPosition(body, {
                            x: point.x + (dx * cos - dy * sin),
                            y: point.y + (dx * sin + dy * cos)
                        });
                        Body.rotate(body, rotation);
                    }
                    return composite;
                };
                /**
     * Scales all children in the composite, including updating physical properties (mass, area, axes, inertia), from a world-space point.
     * @method scale
     * @param {composite} composite
     * @param {number} scaleX
     * @param {number} scaleY
     * @param {vector} point
     * @param {bool} [recursive=true]
     */ Composite.scale = function(composite, scaleX, scaleY, point, recursive) {
                    var bodies = recursive ? Composite.allBodies(composite) : composite.bodies;
                    for(var i = 0; i < bodies.length; i++){
                        var body = bodies[i], dx = body.position.x - point.x, dy = body.position.y - point.y;
                        Body.setPosition(body, {
                            x: point.x + dx * scaleX,
                            y: point.y + dy * scaleY
                        });
                        Body.scale(body, scaleX, scaleY);
                    }
                    return composite;
                };
                /**
     * Returns the union of the bounds of all of the composite's bodies.
     * @method bounds
     * @param {composite} composite The composite.
     * @returns {bounds} The composite bounds.
     */ Composite.bounds = function(composite) {
                    var bodies = Composite.allBodies(composite), vertices = [];
                    for(var i = 0; i < bodies.length; i += 1){
                        var body = bodies[i];
                        vertices.push(body.bounds.min, body.bounds.max);
                    }
                    return Bounds.create(vertices);
                };
            /*
    *
    *  Events Documentation
    *
    */ /**
    * Fired when a call to `Composite.add` is made, before objects have been added.
    *
    * @event beforeAdd
    * @param {} event An event object
    * @param {} event.object The object(s) to be added (may be a single body, constraint, composite or a mixed array of these)
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */ /**
    * Fired when a call to `Composite.add` is made, after objects have been added.
    *
    * @event afterAdd
    * @param {} event An event object
    * @param {} event.object The object(s) that have been added (may be a single body, constraint, composite or a mixed array of these)
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */ /**
    * Fired when a call to `Composite.remove` is made, before objects have been removed.
    *
    * @event beforeRemove
    * @param {} event An event object
    * @param {} event.object The object(s) to be removed (may be a single body, constraint, composite or a mixed array of these)
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */ /**
    * Fired when a call to `Composite.remove` is made, after objects have been removed.
    *
    * @event afterRemove
    * @param {} event An event object
    * @param {} event.object The object(s) that have been removed (may be a single body, constraint, composite or a mixed array of these)
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */ /*
    *
    *  Properties Documentation
    *
    */ /**
     * An integer `Number` uniquely identifying number generated in `Composite.create` by `Common.nextId`.
     *
     * @property id
     * @type number
     */ /**
     * A `String` denoting the type of object.
     *
     * @property type
     * @type string
     * @default "composite"
     * @readOnly
     */ /**
     * An arbitrary `String` name to help the user identify and manage composites.
     *
     * @property label
     * @type string
     * @default "Composite"
     */ /**
     * A flag that specifies whether the composite has been modified during the current step.
     * This is automatically managed when bodies, constraints or composites are added or removed.
     *
     * @property isModified
     * @type boolean
     * @default false
     */ /**
     * The `Composite` that is the parent of this composite. It is automatically managed by the `Matter.Composite` methods.
     *
     * @property parent
     * @type composite
     * @default null
     */ /**
     * An array of `Body` that are _direct_ children of this composite.
     * To add or remove bodies you should use `Composite.add` and `Composite.remove` methods rather than directly modifying this property.
     * If you wish to recursively find all descendants, you should use the `Composite.allBodies` method.
     *
     * @property bodies
     * @type body[]
     * @default []
     */ /**
     * An array of `Constraint` that are _direct_ children of this composite.
     * To add or remove constraints you should use `Composite.add` and `Composite.remove` methods rather than directly modifying this property.
     * If you wish to recursively find all descendants, you should use the `Composite.allConstraints` method.
     *
     * @property constraints
     * @type constraint[]
     * @default []
     */ /**
     * An array of `Composite` that are _direct_ children of this composite.
     * To add or remove composites you should use `Composite.add` and `Composite.remove` methods rather than directly modifying this property.
     * If you wish to recursively find all descendants, you should use the `Composite.allComposites` method.
     *
     * @property composites
     * @type composite[]
     * @default []
     */ /**
     * An object reserved for storing plugin-specific properties.
     *
     * @property plugin
     * @type {}
     */ /**
     * An object used for storing cached results for performance reasons.
     * This is used internally only and is automatically managed.
     *
     * @private
     * @property cache
     * @type {}
     */ })();
        /***/ },
        function(module, exports, __webpack_require__) {
            /**
* The `Matter.Body` module contains methods for creating and manipulating body models.
* A `Matter.Body` is a rigid body that can be simulated by a `Matter.Engine`.
* Factories for commonly used body configurations (such as rectangles, circles and other polygons) can be found in the module `Matter.Bodies`.
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).

* @class Body
*/ var Body = {
            };
            module.exports = Body;
            var Vertices = __webpack_require__(3);
            var Vector = __webpack_require__(2);
            var Sleeping = __webpack_require__(7);
            var Render = __webpack_require__(16);
            var Common = __webpack_require__(0);
            var Bounds = __webpack_require__(1);
            var Axes = __webpack_require__(11);
            (function() {
                Body._inertiaScale = 4;
                Body._nextCollidingGroupId = 1;
                Body._nextNonCollidingGroupId = -1;
                Body._nextCategory = 1;
                /**
     * Creates a new rigid body model. The options parameter is an object that specifies any properties you wish to override the defaults.
     * All properties have default values, and many are pre-calculated automatically based on other properties.
     * Vertices must be specified in clockwise order.
     * See the properties section below for detailed information on what you can pass via the `options` object.
     * @method create
     * @param {} options
     * @return {body} body
     */ Body.create = function(options) {
                    var defaults = {
                        id: Common.nextId(),
                        type: 'body',
                        label: 'Body',
                        parts: [],
                        plugin: {
                        },
                        angle: 0,
                        vertices: Vertices.fromPath('L 0 0 L 40 0 L 40 40 L 0 40'),
                        position: {
                            x: 0,
                            y: 0
                        },
                        force: {
                            x: 0,
                            y: 0
                        },
                        torque: 0,
                        positionImpulse: {
                            x: 0,
                            y: 0
                        },
                        constraintImpulse: {
                            x: 0,
                            y: 0,
                            angle: 0
                        },
                        totalContacts: 0,
                        speed: 0,
                        angularSpeed: 0,
                        velocity: {
                            x: 0,
                            y: 0
                        },
                        angularVelocity: 0,
                        isSensor: false,
                        isStatic: false,
                        isSleeping: false,
                        motion: 0,
                        sleepThreshold: 60,
                        density: 0.001,
                        restitution: 0,
                        friction: 0.1,
                        frictionStatic: 0.5,
                        frictionAir: 0.01,
                        collisionFilter: {
                            category: 1,
                            mask: 4294967295,
                            group: 0
                        },
                        slop: 0.05,
                        timeScale: 1,
                        render: {
                            visible: true,
                            opacity: 1,
                            strokeStyle: null,
                            fillStyle: null,
                            lineWidth: null,
                            sprite: {
                                xScale: 1,
                                yScale: 1,
                                xOffset: 0,
                                yOffset: 0
                            }
                        },
                        events: null,
                        bounds: null,
                        chamfer: null,
                        circleRadius: 0,
                        positionPrev: null,
                        anglePrev: 0,
                        parent: null,
                        axes: null,
                        area: 0,
                        mass: 0,
                        inertia: 0,
                        _original: null
                    };
                    var body = Common.extend(defaults, options);
                    _initProperties(body, options);
                    return body;
                };
                /**
     * Returns the next unique group index for which bodies will collide.
     * If `isNonColliding` is `true`, returns the next unique group index for which bodies will _not_ collide.
     * See `body.collisionFilter` for more information.
     * @method nextGroup
     * @param {bool} [isNonColliding=false]
     * @return {Number} Unique group index
     */ Body.nextGroup = function(isNonColliding) {
                    if (isNonColliding) return Body._nextNonCollidingGroupId--;
                    return Body._nextCollidingGroupId++;
                };
                /**
     * Returns the next unique category bitfield (starting after the initial default category `0x0001`).
     * There are 32 available. See `body.collisionFilter` for more information.
     * @method nextCategory
     * @return {Number} Unique category bitfield
     */ Body.nextCategory = function() {
                    Body._nextCategory = Body._nextCategory << 1;
                    return Body._nextCategory;
                };
                /**
     * Initialises body properties.
     * @method _initProperties
     * @private
     * @param {body} body
     * @param {} [options]
     */ var _initProperties = function(body, options) {
                    options = options || {
                    };
                    // init required properties (order is important)
                    Body.set(body, {
                        bounds: body.bounds || Bounds.create(body.vertices),
                        positionPrev: body.positionPrev || Vector.clone(body.position),
                        anglePrev: body.anglePrev || body.angle,
                        vertices: body.vertices,
                        parts: body.parts || [
                            body
                        ],
                        isStatic: body.isStatic,
                        isSleeping: body.isSleeping,
                        parent: body.parent || body
                    });
                    Vertices.rotate(body.vertices, body.angle, body.position);
                    Axes.rotate(body.axes, body.angle);
                    Bounds.update(body.bounds, body.vertices, body.velocity);
                    // allow options to override the automatically calculated properties
                    Body.set(body, {
                        axes: options.axes || body.axes,
                        area: options.area || body.area,
                        mass: options.mass || body.mass,
                        inertia: options.inertia || body.inertia
                    });
                    // render properties
                    var defaultFillStyle = body.isStatic ? '#14151f' : Common.choose([
                        '#f19648',
                        '#f5d259',
                        '#f55a3c',
                        '#063e7b',
                        '#ececd1'
                    ]), defaultStrokeStyle = body.isStatic ? '#555' : '#ccc', defaultLineWidth = body.isStatic && body.render.fillStyle === null ? 1 : 0;
                    body.render.fillStyle = body.render.fillStyle || defaultFillStyle;
                    body.render.strokeStyle = body.render.strokeStyle || defaultStrokeStyle;
                    body.render.lineWidth = body.render.lineWidth || defaultLineWidth;
                    body.render.sprite.xOffset += -(body.bounds.min.x - body.position.x) / (body.bounds.max.x - body.bounds.min.x);
                    body.render.sprite.yOffset += -(body.bounds.min.y - body.position.y) / (body.bounds.max.y - body.bounds.min.y);
                };
                /**
     * Given a property and a value (or map of), sets the property(s) on the body, using the appropriate setter functions if they exist.
     * Prefer to use the actual setter functions in performance critical situations.
     * @method set
     * @param {body} body
     * @param {} settings A property name (or map of properties and values) to set on the body.
     * @param {} value The value to set if `settings` is a single property name.
     */ Body.set = function(body, settings, value) {
                    var property;
                    if (typeof settings === 'string') {
                        property = settings;
                        settings = {
                        };
                        settings[property] = value;
                    }
                    for(property in settings){
                        if (!Object.prototype.hasOwnProperty.call(settings, property)) continue;
                        value = settings[property];
                        switch(property){
                            case 'isStatic':
                                Body.setStatic(body, value);
                                break;
                            case 'isSleeping':
                                Sleeping.set(body, value);
                                break;
                            case 'mass':
                                Body.setMass(body, value);
                                break;
                            case 'density':
                                Body.setDensity(body, value);
                                break;
                            case 'inertia':
                                Body.setInertia(body, value);
                                break;
                            case 'vertices':
                                Body.setVertices(body, value);
                                break;
                            case 'position':
                                Body.setPosition(body, value);
                                break;
                            case 'angle':
                                Body.setAngle(body, value);
                                break;
                            case 'velocity':
                                Body.setVelocity(body, value);
                                break;
                            case 'angularVelocity':
                                Body.setAngularVelocity(body, value);
                                break;
                            case 'parts':
                                Body.setParts(body, value);
                                break;
                            case 'centre':
                                Body.setCentre(body, value);
                                break;
                            default:
                                body[property] = value;
                        }
                    }
                };
                /**
     * Sets the body as static, including isStatic flag and setting mass and inertia to Infinity.
     * @method setStatic
     * @param {body} body
     * @param {bool} isStatic
     */ Body.setStatic = function(body, isStatic) {
                    for(var i = 0; i < body.parts.length; i++){
                        var part = body.parts[i];
                        part.isStatic = isStatic;
                        if (isStatic) {
                            part._original = {
                                restitution: part.restitution,
                                friction: part.friction,
                                mass: part.mass,
                                inertia: part.inertia,
                                density: part.density,
                                inverseMass: part.inverseMass,
                                inverseInertia: part.inverseInertia
                            };
                            part.restitution = 0;
                            part.friction = 1;
                            part.mass = part.inertia = part.density = Infinity;
                            part.inverseMass = part.inverseInertia = 0;
                            part.positionPrev.x = part.position.x;
                            part.positionPrev.y = part.position.y;
                            part.anglePrev = part.angle;
                            part.angularVelocity = 0;
                            part.speed = 0;
                            part.angularSpeed = 0;
                            part.motion = 0;
                        } else if (part._original) {
                            part.restitution = part._original.restitution;
                            part.friction = part._original.friction;
                            part.mass = part._original.mass;
                            part.inertia = part._original.inertia;
                            part.density = part._original.density;
                            part.inverseMass = part._original.inverseMass;
                            part.inverseInertia = part._original.inverseInertia;
                            part._original = null;
                        }
                    }
                };
                /**
     * Sets the mass of the body. Inverse mass, density and inertia are automatically updated to reflect the change.
     * @method setMass
     * @param {body} body
     * @param {number} mass
     */ Body.setMass = function(body, mass) {
                    var moment = body.inertia / (body.mass / 6);
                    body.inertia = moment * (mass / 6);
                    body.inverseInertia = 1 / body.inertia;
                    body.mass = mass;
                    body.inverseMass = 1 / body.mass;
                    body.density = body.mass / body.area;
                };
                /**
     * Sets the density of the body. Mass and inertia are automatically updated to reflect the change.
     * @method setDensity
     * @param {body} body
     * @param {number} density
     */ Body.setDensity = function(body, density) {
                    Body.setMass(body, density * body.area);
                    body.density = density;
                };
                /**
     * Sets the moment of inertia (i.e. second moment of area) of the body. 
     * Inverse inertia is automatically updated to reflect the change. Mass is not changed.
     * @method setInertia
     * @param {body} body
     * @param {number} inertia
     */ Body.setInertia = function(body, inertia) {
                    body.inertia = inertia;
                    body.inverseInertia = 1 / body.inertia;
                };
                /**
     * Sets the body's vertices and updates body properties accordingly, including inertia, area and mass (with respect to `body.density`).
     * Vertices will be automatically transformed to be orientated around their centre of mass as the origin.
     * They are then automatically translated to world space based on `body.position`.
     *
     * The `vertices` argument should be passed as an array of `Matter.Vector` points (or a `Matter.Vertices` array).
     * Vertices must form a convex hull, concave hulls are not supported.
     *
     * @method setVertices
     * @param {body} body
     * @param {vector[]} vertices
     */ Body.setVertices = function(body, vertices) {
                    // change vertices
                    if (vertices[0].body === body) body.vertices = vertices;
                    else body.vertices = Vertices.create(vertices, body);
                    // update properties
                    body.axes = Axes.fromVertices(body.vertices);
                    body.area = Vertices.area(body.vertices);
                    Body.setMass(body, body.density * body.area);
                    // orient vertices around the centre of mass at origin (0, 0)
                    var centre = Vertices.centre(body.vertices);
                    Vertices.translate(body.vertices, centre, -1);
                    // update inertia while vertices are at origin (0, 0)
                    Body.setInertia(body, Body._inertiaScale * Vertices.inertia(body.vertices, body.mass));
                    // update geometry
                    Vertices.translate(body.vertices, body.position);
                    Bounds.update(body.bounds, body.vertices, body.velocity);
                };
                /**
     * Sets the parts of the `body` and updates mass, inertia and centroid.
     * Each part will have its parent set to `body`.
     * By default the convex hull will be automatically computed and set on `body`, unless `autoHull` is set to `false.`
     * Note that this method will ensure that the first part in `body.parts` will always be the `body`.
     * @method setParts
     * @param {body} body
     * @param [body] parts
     * @param {bool} [autoHull=true]
     */ Body.setParts = function(body, parts, autoHull) {
                    var i;
                    // add all the parts, ensuring that the first part is always the parent body
                    parts = parts.slice(0);
                    body.parts.length = 0;
                    body.parts.push(body);
                    body.parent = body;
                    for(i = 0; i < parts.length; i++){
                        var part = parts[i];
                        if (part !== body) {
                            part.parent = body;
                            body.parts.push(part);
                        }
                    }
                    if (body.parts.length === 1) return;
                    autoHull = typeof autoHull !== 'undefined' ? autoHull : true;
                    // find the convex hull of all parts to set on the parent body
                    if (autoHull) {
                        var vertices = [];
                        for(i = 0; i < parts.length; i++)vertices = vertices.concat(parts[i].vertices);
                        Vertices.clockwiseSort(vertices);
                        var hull = Vertices.hull(vertices), hullCentre = Vertices.centre(hull);
                        Body.setVertices(body, hull);
                        Vertices.translate(body.vertices, hullCentre);
                    }
                    // sum the properties of all compound parts of the parent body
                    var total = Body._totalProperties(body);
                    body.area = total.area;
                    body.parent = body;
                    body.position.x = total.centre.x;
                    body.position.y = total.centre.y;
                    body.positionPrev.x = total.centre.x;
                    body.positionPrev.y = total.centre.y;
                    Body.setMass(body, total.mass);
                    Body.setInertia(body, total.inertia);
                    Body.setPosition(body, total.centre);
                };
                /**
     * Set the centre of mass of the body. 
     * The `centre` is a vector in world-space unless `relative` is set, in which case it is a translation.
     * The centre of mass is the point the body rotates about and can be used to simulate non-uniform density.
     * This is equal to moving `body.position` but not the `body.vertices`.
     * Invalid if the `centre` falls outside the body's convex hull.
     * @method setCentre
     * @param {body} body
     * @param {vector} centre
     * @param {bool} relative
     */ Body.setCentre = function(body, centre, relative) {
                    if (!relative) {
                        body.positionPrev.x = centre.x - (body.position.x - body.positionPrev.x);
                        body.positionPrev.y = centre.y - (body.position.y - body.positionPrev.y);
                        body.position.x = centre.x;
                        body.position.y = centre.y;
                    } else {
                        body.positionPrev.x += centre.x;
                        body.positionPrev.y += centre.y;
                        body.position.x += centre.x;
                        body.position.y += centre.y;
                    }
                };
                /**
     * Sets the position of the body instantly. Velocity, angle, force etc. are unchanged.
     * @method setPosition
     * @param {body} body
     * @param {vector} position
     */ Body.setPosition = function(body, position) {
                    var delta = Vector.sub(position, body.position);
                    body.positionPrev.x += delta.x;
                    body.positionPrev.y += delta.y;
                    for(var i = 0; i < body.parts.length; i++){
                        var part = body.parts[i];
                        part.position.x += delta.x;
                        part.position.y += delta.y;
                        Vertices.translate(part.vertices, delta);
                        Bounds.update(part.bounds, part.vertices, body.velocity);
                    }
                };
                /**
     * Sets the angle of the body instantly. Angular velocity, position, force etc. are unchanged.
     * @method setAngle
     * @param {body} body
     * @param {number} angle
     */ Body.setAngle = function(body, angle) {
                    var delta = angle - body.angle;
                    body.anglePrev += delta;
                    for(var i = 0; i < body.parts.length; i++){
                        var part = body.parts[i];
                        part.angle += delta;
                        Vertices.rotate(part.vertices, delta, body.position);
                        Axes.rotate(part.axes, delta);
                        Bounds.update(part.bounds, part.vertices, body.velocity);
                        if (i > 0) Vector.rotateAbout(part.position, delta, body.position, part.position);
                    }
                };
                /**
     * Sets the linear velocity of the body instantly. Position, angle, force etc. are unchanged. See also `Body.applyForce`.
     * @method setVelocity
     * @param {body} body
     * @param {vector} velocity
     */ Body.setVelocity = function(body, velocity) {
                    body.positionPrev.x = body.position.x - velocity.x;
                    body.positionPrev.y = body.position.y - velocity.y;
                    body.velocity.x = velocity.x;
                    body.velocity.y = velocity.y;
                    body.speed = Vector.magnitude(body.velocity);
                };
                /**
     * Sets the angular velocity of the body instantly. Position, angle, force etc. are unchanged. See also `Body.applyForce`.
     * @method setAngularVelocity
     * @param {body} body
     * @param {number} velocity
     */ Body.setAngularVelocity = function(body, velocity) {
                    body.anglePrev = body.angle - velocity;
                    body.angularVelocity = velocity;
                    body.angularSpeed = Math.abs(body.angularVelocity);
                };
                /**
     * Moves a body by a given vector relative to its current position, without imparting any velocity.
     * @method translate
     * @param {body} body
     * @param {vector} translation
     */ Body.translate = function(body, translation) {
                    Body.setPosition(body, Vector.add(body.position, translation));
                };
                /**
     * Rotates a body by a given angle relative to its current angle, without imparting any angular velocity.
     * @method rotate
     * @param {body} body
     * @param {number} rotation
     * @param {vector} [point]
     */ Body.rotate = function(body, rotation, point) {
                    if (!point) Body.setAngle(body, body.angle + rotation);
                    else {
                        var cos = Math.cos(rotation), sin = Math.sin(rotation), dx = body.position.x - point.x, dy = body.position.y - point.y;
                        Body.setPosition(body, {
                            x: point.x + (dx * cos - dy * sin),
                            y: point.y + (dx * sin + dy * cos)
                        });
                        Body.setAngle(body, body.angle + rotation);
                    }
                };
                /**
     * Scales the body, including updating physical properties (mass, area, axes, inertia), from a world-space point (default is body centre).
     * @method scale
     * @param {body} body
     * @param {number} scaleX
     * @param {number} scaleY
     * @param {vector} [point]
     */ Body.scale = function(body, scaleX, scaleY, point) {
                    var totalArea = 0, totalInertia = 0;
                    point = point || body.position;
                    for(var i = 0; i < body.parts.length; i++){
                        var part = body.parts[i];
                        // scale vertices
                        Vertices.scale(part.vertices, scaleX, scaleY, point);
                        // update properties
                        part.axes = Axes.fromVertices(part.vertices);
                        part.area = Vertices.area(part.vertices);
                        Body.setMass(part, body.density * part.area);
                        // update inertia (requires vertices to be at origin)
                        Vertices.translate(part.vertices, {
                            x: -part.position.x,
                            y: -part.position.y
                        });
                        Body.setInertia(part, Body._inertiaScale * Vertices.inertia(part.vertices, part.mass));
                        Vertices.translate(part.vertices, {
                            x: part.position.x,
                            y: part.position.y
                        });
                        if (i > 0) {
                            totalArea += part.area;
                            totalInertia += part.inertia;
                        }
                        // scale position
                        part.position.x = point.x + (part.position.x - point.x) * scaleX;
                        part.position.y = point.y + (part.position.y - point.y) * scaleY;
                        // update bounds
                        Bounds.update(part.bounds, part.vertices, body.velocity);
                    }
                    // handle parent body
                    if (body.parts.length > 1) {
                        body.area = totalArea;
                        if (!body.isStatic) {
                            Body.setMass(body, body.density * totalArea);
                            Body.setInertia(body, totalInertia);
                        }
                    }
                    // handle circles
                    if (body.circleRadius) {
                        if (scaleX === scaleY) body.circleRadius *= scaleX;
                        else // body is no longer a circle
                        body.circleRadius = null;
                    }
                };
                /**
     * Performs a simulation step for the given `body`, including updating position and angle using Verlet integration.
     * @method update
     * @param {body} body
     * @param {number} deltaTime
     * @param {number} timeScale
     * @param {number} correction
     */ Body.update = function(body, deltaTime, timeScale, correction) {
                    var deltaTimeSquared = Math.pow(deltaTime * timeScale * body.timeScale, 2);
                    // from the previous step
                    var frictionAir = 1 - body.frictionAir * timeScale * body.timeScale, velocityPrevX = body.position.x - body.positionPrev.x, velocityPrevY = body.position.y - body.positionPrev.y;
                    // update velocity with Verlet integration
                    body.velocity.x = velocityPrevX * frictionAir * correction + body.force.x / body.mass * deltaTimeSquared;
                    body.velocity.y = velocityPrevY * frictionAir * correction + body.force.y / body.mass * deltaTimeSquared;
                    body.positionPrev.x = body.position.x;
                    body.positionPrev.y = body.position.y;
                    body.position.x += body.velocity.x;
                    body.position.y += body.velocity.y;
                    // update angular velocity with Verlet integration
                    body.angularVelocity = (body.angle - body.anglePrev) * frictionAir * correction + body.torque / body.inertia * deltaTimeSquared;
                    body.anglePrev = body.angle;
                    body.angle += body.angularVelocity;
                    // track speed and acceleration
                    body.speed = Vector.magnitude(body.velocity);
                    body.angularSpeed = Math.abs(body.angularVelocity);
                    // transform the body geometry
                    for(var i = 0; i < body.parts.length; i++){
                        var part = body.parts[i];
                        Vertices.translate(part.vertices, body.velocity);
                        if (i > 0) {
                            part.position.x += body.velocity.x;
                            part.position.y += body.velocity.y;
                        }
                        if (body.angularVelocity !== 0) {
                            Vertices.rotate(part.vertices, body.angularVelocity, body.position);
                            Axes.rotate(part.axes, body.angularVelocity);
                            if (i > 0) Vector.rotateAbout(part.position, body.angularVelocity, body.position, part.position);
                        }
                        Bounds.update(part.bounds, part.vertices, body.velocity);
                    }
                };
                /**
     * Applies a force to a body from a given world-space position, including resulting torque.
     * @method applyForce
     * @param {body} body
     * @param {vector} position
     * @param {vector} force
     */ Body.applyForce = function(body, position, force) {
                    body.force.x += force.x;
                    body.force.y += force.y;
                    var offset = {
                        x: position.x - body.position.x,
                        y: position.y - body.position.y
                    };
                    body.torque += offset.x * force.y - offset.y * force.x;
                };
                /**
     * Returns the sums of the properties of all compound parts of the parent body.
     * @method _totalProperties
     * @private
     * @param {body} body
     * @return {}
     */ Body._totalProperties = function(body) {
                    // from equations at:
                    // https://ecourses.ou.edu/cgi-bin/ebook.cgi?doc=&topic=st&chap_sec=07.2&page=theory
                    // http://output.to/sideway/default.asp?qno=121100087
                    var properties = {
                        mass: 0,
                        area: 0,
                        inertia: 0,
                        centre: {
                            x: 0,
                            y: 0
                        }
                    };
                    // sum the properties of all compound parts of the parent body
                    for(var i = body.parts.length === 1 ? 0 : 1; i < body.parts.length; i++){
                        var part = body.parts[i], mass = part.mass !== Infinity ? part.mass : 1;
                        properties.mass += mass;
                        properties.area += part.area;
                        properties.inertia += part.inertia;
                        properties.centre = Vector.add(properties.centre, Vector.mult(part.position, mass));
                    }
                    properties.centre = Vector.div(properties.centre, properties.mass);
                    return properties;
                };
            /*
    *
    *  Events Documentation
    *
    */ /**
    * Fired when a body starts sleeping (where `this` is the body).
    *
    * @event sleepStart
    * @this {body} The body that has started sleeping
    * @param {} event An event object
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */ /**
    * Fired when a body ends sleeping (where `this` is the body).
    *
    * @event sleepEnd
    * @this {body} The body that has ended sleeping
    * @param {} event An event object
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */ /*
    *
    *  Properties Documentation
    *
    */ /**
     * An integer `Number` uniquely identifying number generated in `Body.create` by `Common.nextId`.
     *
     * @property id
     * @type number
     */ /**
     * A `String` denoting the type of object.
     *
     * @property type
     * @type string
     * @default "body"
     * @readOnly
     */ /**
     * An arbitrary `String` name to help the user identify and manage bodies.
     *
     * @property label
     * @type string
     * @default "Body"
     */ /**
     * An array of bodies that make up this body. 
     * The first body in the array must always be a self reference to the current body instance.
     * All bodies in the `parts` array together form a single rigid compound body.
     * Parts are allowed to overlap, have gaps or holes or even form concave bodies.
     * Parts themselves should never be added to a `World`, only the parent body should be.
     * Use `Body.setParts` when setting parts to ensure correct updates of all properties.
     *
     * @property parts
     * @type body[]
     */ /**
     * An object reserved for storing plugin-specific properties.
     *
     * @property plugin
     * @type {}
     */ /**
     * A self reference if the body is _not_ a part of another body.
     * Otherwise this is a reference to the body that this is a part of.
     * See `body.parts`.
     *
     * @property parent
     * @type body
     */ /**
     * A `Number` specifying the angle of the body, in radians.
     *
     * @property angle
     * @type number
     * @default 0
     */ /**
     * An array of `Vector` objects that specify the convex hull of the rigid body.
     * These should be provided about the origin `(0, 0)`. E.g.
     *
     *     [{ x: 0, y: 0 }, { x: 25, y: 50 }, { x: 50, y: 0 }]
     *
     * When passed via `Body.create`, the vertices are translated relative to `body.position` (i.e. world-space, and constantly updated by `Body.update` during simulation).
     * The `Vector` objects are also augmented with additional properties required for efficient collision detection. 
     *
     * Other properties such as `inertia` and `bounds` are automatically calculated from the passed vertices (unless provided via `options`).
     * Concave hulls are not currently supported. The module `Matter.Vertices` contains useful methods for working with vertices.
     *
     * @property vertices
     * @type vector[]
     */ /**
     * A `Vector` that specifies the current world-space position of the body.
     *
     * @property position
     * @type vector
     * @default { x: 0, y: 0 }
     */ /**
     * A `Vector` that specifies the force to apply in the current step. It is zeroed after every `Body.update`. See also `Body.applyForce`.
     *
     * @property force
     * @type vector
     * @default { x: 0, y: 0 }
     */ /**
     * A `Number` that specifies the torque (turning force) to apply in the current step. It is zeroed after every `Body.update`.
     *
     * @property torque
     * @type number
     * @default 0
     */ /**
     * A `Number` that _measures_ the current speed of the body after the last `Body.update`. It is read-only and always positive (it's the magnitude of `body.velocity`).
     *
     * @readOnly
     * @property speed
     * @type number
     * @default 0
     */ /**
     * A `Number` that _measures_ the current angular speed of the body after the last `Body.update`. It is read-only and always positive (it's the magnitude of `body.angularVelocity`).
     *
     * @readOnly
     * @property angularSpeed
     * @type number
     * @default 0
     */ /**
     * A `Vector` that _measures_ the current velocity of the body after the last `Body.update`. It is read-only. 
     * If you need to modify a body's velocity directly, you should either apply a force or simply change the body's `position` (as the engine uses position-Verlet integration).
     *
     * @readOnly
     * @property velocity
     * @type vector
     * @default { x: 0, y: 0 }
     */ /**
     * A `Number` that _measures_ the current angular velocity of the body after the last `Body.update`. It is read-only. 
     * If you need to modify a body's angular velocity directly, you should apply a torque or simply change the body's `angle` (as the engine uses position-Verlet integration).
     *
     * @readOnly
     * @property angularVelocity
     * @type number
     * @default 0
     */ /**
     * A flag that indicates whether a body is considered static. A static body can never change position or angle and is completely fixed.
     * If you need to set a body as static after its creation, you should use `Body.setStatic` as this requires more than just setting this flag.
     *
     * @property isStatic
     * @type boolean
     * @default false
     */ /**
     * A flag that indicates whether a body is a sensor. Sensor triggers collision events, but doesn't react with colliding body physically.
     *
     * @property isSensor
     * @type boolean
     * @default false
     */ /**
     * A flag that indicates whether the body is considered sleeping. A sleeping body acts similar to a static body, except it is only temporary and can be awoken.
     * If you need to set a body as sleeping, you should use `Sleeping.set` as this requires more than just setting this flag.
     *
     * @property isSleeping
     * @type boolean
     * @default false
     */ /**
     * A `Number` that _measures_ the amount of movement a body currently has (a combination of `speed` and `angularSpeed`). It is read-only and always positive.
     * It is used and updated by the `Matter.Sleeping` module during simulation to decide if a body has come to rest.
     *
     * @readOnly
     * @property motion
     * @type number
     * @default 0
     */ /**
     * A `Number` that defines the number of updates in which this body must have near-zero velocity before it is set as sleeping by the `Matter.Sleeping` module (if sleeping is enabled by the engine).
     *
     * @property sleepThreshold
     * @type number
     * @default 60
     */ /**
     * A `Number` that defines the density of the body, that is its mass per unit area.
     * If you pass the density via `Body.create` the `mass` property is automatically calculated for you based on the size (area) of the object.
     * This is generally preferable to simply setting mass and allows for more intuitive definition of materials (e.g. rock has a higher density than wood).
     *
     * @property density
     * @type number
     * @default 0.001
     */ /**
     * A `Number` that defines the mass of the body, although it may be more appropriate to specify the `density` property instead.
     * If you modify this value, you must also modify the `body.inverseMass` property (`1 / mass`).
     *
     * @property mass
     * @type number
     */ /**
     * A `Number` that defines the inverse mass of the body (`1 / mass`).
     * If you modify this value, you must also modify the `body.mass` property.
     *
     * @property inverseMass
     * @type number
     */ /**
     * A `Number` that defines the moment of inertia (i.e. second moment of area) of the body.
     * It is automatically calculated from the given convex hull (`vertices` array) and density in `Body.create`.
     * If you modify this value, you must also modify the `body.inverseInertia` property (`1 / inertia`).
     *
     * @property inertia
     * @type number
     */ /**
     * A `Number` that defines the inverse moment of inertia of the body (`1 / inertia`).
     * If you modify this value, you must also modify the `body.inertia` property.
     *
     * @property inverseInertia
     * @type number
     */ /**
     * A `Number` that defines the restitution (elasticity) of the body. The value is always positive and is in the range `(0, 1)`.
     * A value of `0` means collisions may be perfectly inelastic and no bouncing may occur. 
     * A value of `0.8` means the body may bounce back with approximately 80% of its kinetic energy.
     * Note that collision response is based on _pairs_ of bodies, and that `restitution` values are _combined_ with the following formula:
     *
     *     Math.max(bodyA.restitution, bodyB.restitution)
     *
     * @property restitution
     * @type number
     * @default 0
     */ /**
     * A `Number` that defines the friction of the body. The value is always positive and is in the range `(0, 1)`.
     * A value of `0` means that the body may slide indefinitely.
     * A value of `1` means the body may come to a stop almost instantly after a force is applied.
     *
     * The effects of the value may be non-linear. 
     * High values may be unstable depending on the body.
     * The engine uses a Coulomb friction model including static and kinetic friction.
     * Note that collision response is based on _pairs_ of bodies, and that `friction` values are _combined_ with the following formula:
     *
     *     Math.min(bodyA.friction, bodyB.friction)
     *
     * @property friction
     * @type number
     * @default 0.1
     */ /**
     * A `Number` that defines the static friction of the body (in the Coulomb friction model). 
     * A value of `0` means the body will never 'stick' when it is nearly stationary and only dynamic `friction` is used.
     * The higher the value (e.g. `10`), the more force it will take to initially get the body moving when nearly stationary.
     * This value is multiplied with the `friction` property to make it easier to change `friction` and maintain an appropriate amount of static friction.
     *
     * @property frictionStatic
     * @type number
     * @default 0.5
     */ /**
     * A `Number` that defines the air friction of the body (air resistance). 
     * A value of `0` means the body will never slow as it moves through space.
     * The higher the value, the faster a body slows when moving through space.
     * The effects of the value are non-linear. 
     *
     * @property frictionAir
     * @type number
     * @default 0.01
     */ /**
     * An `Object` that specifies the collision filtering properties of this body.
     *
     * Collisions between two bodies will obey the following rules:
     * - If the two bodies have the same non-zero value of `collisionFilter.group`,
     *   they will always collide if the value is positive, and they will never collide
     *   if the value is negative.
     * - If the two bodies have different values of `collisionFilter.group` or if one
     *   (or both) of the bodies has a value of 0, then the category/mask rules apply as follows:
     *
     * Each body belongs to a collision category, given by `collisionFilter.category`. This
     * value is used as a bit field and the category should have only one bit set, meaning that
     * the value of this property is a power of two in the range [1, 2^31]. Thus, there are 32
     * different collision categories available.
     *
     * Each body also defines a collision bitmask, given by `collisionFilter.mask` which specifies
     * the categories it collides with (the value is the bitwise AND value of all these categories).
     *
     * Using the category/mask rules, two bodies `A` and `B` collide if each includes the other's
     * category in its mask, i.e. `(categoryA & maskB) !== 0` and `(categoryB & maskA) !== 0`
     * are both true.
     *
     * @property collisionFilter
     * @type object
     */ /**
     * An Integer `Number`, that specifies the collision group this body belongs to.
     * See `body.collisionFilter` for more information.
     *
     * @property collisionFilter.group
     * @type object
     * @default 0
     */ /**
     * A bit field that specifies the collision category this body belongs to.
     * The category value should have only one bit set, for example `0x0001`.
     * This means there are up to 32 unique collision categories available.
     * See `body.collisionFilter` for more information.
     *
     * @property collisionFilter.category
     * @type object
     * @default 1
     */ /**
     * A bit mask that specifies the collision categories this body may collide with.
     * See `body.collisionFilter` for more information.
     *
     * @property collisionFilter.mask
     * @type object
     * @default -1
     */ /**
     * A `Number` that specifies a tolerance on how far a body is allowed to 'sink' or rotate into other bodies.
     * Avoid changing this value unless you understand the purpose of `slop` in physics engines.
     * The default should generally suffice, although very large bodies may require larger values for stable stacking.
     *
     * @property slop
     * @type number
     * @default 0.05
     */ /**
     * A `Number` that allows per-body time scaling, e.g. a force-field where bodies inside are in slow-motion, while others are at full speed.
     *
     * @property timeScale
     * @type number
     * @default 1
     */ /**
     * An `Object` that defines the rendering properties to be consumed by the module `Matter.Render`.
     *
     * @property render
     * @type object
     */ /**
     * A flag that indicates if the body should be rendered.
     *
     * @property render.visible
     * @type boolean
     * @default true
     */ /**
     * Sets the opacity to use when rendering.
     *
     * @property render.opacity
     * @type number
     * @default 1
    */ /**
     * An `Object` that defines the sprite properties to use when rendering, if any.
     *
     * @property render.sprite
     * @type object
     */ /**
     * An `String` that defines the path to the image to use as the sprite texture, if any.
     *
     * @property render.sprite.texture
     * @type string
     */ /**
     * A `Number` that defines the scaling in the x-axis for the sprite, if any.
     *
     * @property render.sprite.xScale
     * @type number
     * @default 1
     */ /**
     * A `Number` that defines the scaling in the y-axis for the sprite, if any.
     *
     * @property render.sprite.yScale
     * @type number
     * @default 1
     */ /**
      * A `Number` that defines the offset in the x-axis for the sprite (normalised by texture width).
      *
      * @property render.sprite.xOffset
      * @type number
      * @default 0
      */ /**
      * A `Number` that defines the offset in the y-axis for the sprite (normalised by texture height).
      *
      * @property render.sprite.yOffset
      * @type number
      * @default 0
      */ /**
     * A `Number` that defines the line width to use when rendering the body outline (if a sprite is not defined).
     * A value of `0` means no outline will be rendered.
     *
     * @property render.lineWidth
     * @type number
     * @default 0
     */ /**
     * A `String` that defines the fill style to use when rendering the body (if a sprite is not defined).
     * It is the same as when using a canvas, so it accepts CSS style property values.
     *
     * @property render.fillStyle
     * @type string
     * @default a random colour
     */ /**
     * A `String` that defines the stroke style to use when rendering the body outline (if a sprite is not defined).
     * It is the same as when using a canvas, so it accepts CSS style property values.
     *
     * @property render.strokeStyle
     * @type string
     * @default a random colour
     */ /**
     * An array of unique axis vectors (edge normals) used for collision detection.
     * These are automatically calculated from the given convex hull (`vertices` array) in `Body.create`.
     * They are constantly updated by `Body.update` during the simulation.
     *
     * @property axes
     * @type vector[]
     */ /**
     * A `Number` that _measures_ the area of the body's convex hull, calculated at creation by `Body.create`.
     *
     * @property area
     * @type string
     * @default 
     */ /**
     * A `Bounds` object that defines the AABB region for the body.
     * It is automatically calculated from the given convex hull (`vertices` array) in `Body.create` and constantly updated by `Body.update` during simulation.
     *
     * @property bounds
     * @type bounds
     */ })();
        /***/ },
        function(module, exports, __webpack_require__) {
            /**
* The `Matter.Sleeping` module contains methods to manage the sleeping state of bodies.
*
* @class Sleeping
*/ var Sleeping = {
            };
            module.exports = Sleeping;
            var Events = __webpack_require__(4);
            (function() {
                Sleeping._motionWakeThreshold = 0.18;
                Sleeping._motionSleepThreshold = 0.08;
                Sleeping._minBias = 0.9;
                /**
     * Puts bodies to sleep or wakes them up depending on their motion.
     * @method update
     * @param {body[]} bodies
     * @param {number} timeScale
     */ Sleeping.update = function(bodies, timeScale) {
                    var timeFactor = timeScale * timeScale * timeScale;
                    // update bodies sleeping status
                    for(var i = 0; i < bodies.length; i++){
                        var body = bodies[i], motion = body.speed * body.speed + body.angularSpeed * body.angularSpeed;
                        // wake up bodies if they have a force applied
                        if (body.force.x !== 0 || body.force.y !== 0) {
                            Sleeping.set(body, false);
                            continue;
                        }
                        var minMotion = Math.min(body.motion, motion), maxMotion = Math.max(body.motion, motion);
                        // biased average motion estimation between frames
                        body.motion = Sleeping._minBias * minMotion + (1 - Sleeping._minBias) * maxMotion;
                        if (body.sleepThreshold > 0 && body.motion < Sleeping._motionSleepThreshold * timeFactor) {
                            body.sleepCounter += 1;
                            if (body.sleepCounter >= body.sleepThreshold) Sleeping.set(body, true);
                        } else if (body.sleepCounter > 0) body.sleepCounter -= 1;
                    }
                };
                /**
     * Given a set of colliding pairs, wakes the sleeping bodies involved.
     * @method afterCollisions
     * @param {pair[]} pairs
     * @param {number} timeScale
     */ Sleeping.afterCollisions = function(pairs, timeScale) {
                    var timeFactor = timeScale * timeScale * timeScale;
                    // wake up bodies involved in collisions
                    for(var i = 0; i < pairs.length; i++){
                        var pair = pairs[i];
                        // don't wake inactive pairs
                        if (!pair.isActive) continue;
                        var collision = pair.collision, bodyA = collision.bodyA.parent, bodyB = collision.bodyB.parent;
                        // don't wake if at least one body is static
                        if (bodyA.isSleeping && bodyB.isSleeping || bodyA.isStatic || bodyB.isStatic) continue;
                        if (bodyA.isSleeping || bodyB.isSleeping) {
                            var sleepingBody = bodyA.isSleeping && !bodyA.isStatic ? bodyA : bodyB, movingBody = sleepingBody === bodyA ? bodyB : bodyA;
                            if (!sleepingBody.isStatic && movingBody.motion > Sleeping._motionWakeThreshold * timeFactor) Sleeping.set(sleepingBody, false);
                        }
                    }
                };
                /**
     * Set a body as sleeping or awake.
     * @method set
     * @param {body} body
     * @param {boolean} isSleeping
     */ Sleeping.set = function(body, isSleeping) {
                    var wasSleeping = body.isSleeping;
                    if (isSleeping) {
                        body.isSleeping = true;
                        body.sleepCounter = body.sleepThreshold;
                        body.positionImpulse.x = 0;
                        body.positionImpulse.y = 0;
                        body.positionPrev.x = body.position.x;
                        body.positionPrev.y = body.position.y;
                        body.anglePrev = body.angle;
                        body.speed = 0;
                        body.angularSpeed = 0;
                        body.motion = 0;
                        if (!wasSleeping) Events.trigger(body, 'sleepStart');
                    } else {
                        body.isSleeping = false;
                        body.sleepCounter = 0;
                        if (wasSleeping) Events.trigger(body, 'sleepEnd');
                    }
                };
            })();
        /***/ },
        function(module, exports, __webpack_require__) {
            /**
* The `Matter.Collision` module contains methods for detecting collisions between a given pair of bodies.
*
* For efficient detection between a list of bodies, see `Matter.Detector` and `Matter.Query`.
*
* See `Matter.Engine` for collision events.
*
* @class Collision
*/ var Collision = {
            };
            module.exports = Collision;
            var Vertices = __webpack_require__(3);
            var Pair = __webpack_require__(9);
            (function() {
                var _supports = [];
                var _overlapAB = {
                    overlap: 0,
                    axis: null
                };
                var _overlapBA = {
                    overlap: 0,
                    axis: null
                };
                /**
     * Creates a new collision record.
     * @method create
     * @param {body} bodyA The first body part represented by the collision record
     * @param {body} bodyB The second body part represented by the collision record
     * @return {collision} A new collision record
     */ Collision.create = function(bodyA, bodyB) {
                    return {
                        pair: null,
                        collided: false,
                        bodyA: bodyA,
                        bodyB: bodyB,
                        parentA: bodyA.parent,
                        parentB: bodyB.parent,
                        depth: 0,
                        normal: {
                            x: 0,
                            y: 0
                        },
                        tangent: {
                            x: 0,
                            y: 0
                        },
                        penetration: {
                            x: 0,
                            y: 0
                        },
                        supports: []
                    };
                };
                /**
     * Detect collision between two bodies.
     * @method collides
     * @param {body} bodyA
     * @param {body} bodyB
     * @param {pairs} [pairs] Optionally reuse collision records from existing pairs.
     * @return {collision|null} A collision record if detected, otherwise null
     */ Collision.collides = function(bodyA, bodyB, pairs) {
                    Collision._overlapAxes(_overlapAB, bodyA.vertices, bodyB.vertices, bodyA.axes);
                    if (_overlapAB.overlap <= 0) return null;
                    Collision._overlapAxes(_overlapBA, bodyB.vertices, bodyA.vertices, bodyB.axes);
                    if (_overlapBA.overlap <= 0) return null;
                    // reuse collision records for gc efficiency
                    var pair = pairs && pairs.table[Pair.id(bodyA, bodyB)], collision;
                    if (!pair) {
                        collision = Collision.create(bodyA, bodyB);
                        collision.collided = true;
                        collision.bodyA = bodyA.id < bodyB.id ? bodyA : bodyB;
                        collision.bodyB = bodyA.id < bodyB.id ? bodyB : bodyA;
                        collision.parentA = collision.bodyA.parent;
                        collision.parentB = collision.bodyB.parent;
                    } else collision = pair.collision;
                    bodyA = collision.bodyA;
                    bodyB = collision.bodyB;
                    var minOverlap;
                    if (_overlapAB.overlap < _overlapBA.overlap) minOverlap = _overlapAB;
                    else minOverlap = _overlapBA;
                    var normal = collision.normal, supports = collision.supports, minAxis = minOverlap.axis, minAxisX = minAxis.x, minAxisY = minAxis.y;
                    // ensure normal is facing away from bodyA
                    if (minAxisX * (bodyB.position.x - bodyA.position.x) + minAxisY * (bodyB.position.y - bodyA.position.y) < 0) {
                        normal.x = minAxisX;
                        normal.y = minAxisY;
                    } else {
                        normal.x = -minAxisX;
                        normal.y = -minAxisY;
                    }
                    collision.tangent.x = -normal.y;
                    collision.tangent.y = normal.x;
                    collision.depth = minOverlap.overlap;
                    collision.penetration.x = normal.x * collision.depth;
                    collision.penetration.y = normal.y * collision.depth;
                    // find support points, there is always either exactly one or two
                    var supportsB = Collision._findSupports(bodyA, bodyB, normal, 1), supportCount = 0;
                    // find the supports from bodyB that are inside bodyA
                    if (Vertices.contains(bodyA.vertices, supportsB[0])) supports[supportCount++] = supportsB[0];
                    if (Vertices.contains(bodyA.vertices, supportsB[1])) supports[supportCount++] = supportsB[1];
                    // find the supports from bodyA that are inside bodyB
                    if (supportCount < 2) {
                        var supportsA = Collision._findSupports(bodyB, bodyA, normal, -1);
                        if (Vertices.contains(bodyB.vertices, supportsA[0])) supports[supportCount++] = supportsA[0];
                        if (supportCount < 2 && Vertices.contains(bodyB.vertices, supportsA[1])) supports[supportCount++] = supportsA[1];
                    }
                    // account for the edge case of overlapping but no vertex containment
                    if (supportCount === 0) supports[supportCount++] = supportsB[0];
                    // update supports array size
                    supports.length = supportCount;
                    return collision;
                };
                /**
     * Find the overlap between two sets of vertices.
     * @method _overlapAxes
     * @private
     * @param {object} result
     * @param {vertices} verticesA
     * @param {vertices} verticesB
     * @param {axes} axes
     */ Collision._overlapAxes = function(result, verticesA, verticesB, axes) {
                    var verticesALength = verticesA.length, verticesBLength = verticesB.length, verticesAX = verticesA[0].x, verticesAY = verticesA[0].y, verticesBX = verticesB[0].x, verticesBY = verticesB[0].y, axesLength = axes.length, overlapMin = Number.MAX_VALUE, overlapAxisNumber = 0, overlap, overlapAB, overlapBA, dot, i, j;
                    for(i = 0; i < axesLength; i++){
                        var axis = axes[i], axisX = axis.x, axisY = axis.y, minA = verticesAX * axisX + verticesAY * axisY, minB = verticesBX * axisX + verticesBY * axisY, maxA = minA, maxB = minB;
                        for(j = 1; j < verticesALength; j += 1){
                            dot = verticesA[j].x * axisX + verticesA[j].y * axisY;
                            if (dot > maxA) maxA = dot;
                            else if (dot < minA) minA = dot;
                        }
                        for(j = 1; j < verticesBLength; j += 1){
                            dot = verticesB[j].x * axisX + verticesB[j].y * axisY;
                            if (dot > maxB) maxB = dot;
                            else if (dot < minB) minB = dot;
                        }
                        overlapAB = maxA - minB;
                        overlapBA = maxB - minA;
                        overlap = overlapAB < overlapBA ? overlapAB : overlapBA;
                        if (overlap < overlapMin) {
                            overlapMin = overlap;
                            overlapAxisNumber = i;
                            if (overlap <= 0) break;
                        }
                    }
                    result.axis = axes[overlapAxisNumber];
                    result.overlap = overlapMin;
                };
                /**
     * Projects vertices on an axis and returns an interval.
     * @method _projectToAxis
     * @private
     * @param {} projection
     * @param {} vertices
     * @param {} axis
     */ Collision._projectToAxis = function(projection, vertices, axis) {
                    var min = vertices[0].x * axis.x + vertices[0].y * axis.y, max = min;
                    for(var i = 1; i < vertices.length; i += 1){
                        var dot = vertices[i].x * axis.x + vertices[i].y * axis.y;
                        if (dot > max) max = dot;
                        else if (dot < min) min = dot;
                    }
                    projection.min = min;
                    projection.max = max;
                };
                /**
     * Finds supporting vertices given two bodies along a given direction using hill-climbing.
     * @method _findSupports
     * @private
     * @param {body} bodyA
     * @param {body} bodyB
     * @param {vector} normal
     * @param {number} direction
     * @return [vector]
     */ Collision._findSupports = function(bodyA, bodyB, normal, direction) {
                    var vertices = bodyB.vertices, verticesLength = vertices.length, bodyAPositionX = bodyA.position.x, bodyAPositionY = bodyA.position.y, normalX = normal.x * direction, normalY = normal.y * direction, nearestDistance = Number.MAX_VALUE, vertexA, vertexB, vertexC, distance, j;
                    // find deepest vertex relative to the axis
                    for(j = 0; j < verticesLength; j += 1){
                        vertexB = vertices[j];
                        distance = normalX * (bodyAPositionX - vertexB.x) + normalY * (bodyAPositionY - vertexB.y);
                        // convex hill-climbing
                        if (distance < nearestDistance) {
                            nearestDistance = distance;
                            vertexA = vertexB;
                        }
                    }
                    // measure next vertex
                    vertexC = vertices[(verticesLength + vertexA.index - 1) % verticesLength];
                    nearestDistance = normalX * (bodyAPositionX - vertexC.x) + normalY * (bodyAPositionY - vertexC.y);
                    // compare with previous vertex
                    vertexB = vertices[(vertexA.index + 1) % verticesLength];
                    if (normalX * (bodyAPositionX - vertexB.x) + normalY * (bodyAPositionY - vertexB.y) < nearestDistance) {
                        _supports[0] = vertexA;
                        _supports[1] = vertexB;
                        return _supports;
                    }
                    _supports[0] = vertexA;
                    _supports[1] = vertexC;
                    return _supports;
                };
            /*
    *
    *  Properties Documentation
    *
    */ /**
     * A reference to the pair using this collision record, if there is one.
     *
     * @property pair
     * @type {pair|null}
     * @default null
     */ /**
     * A flag that indicates if the bodies were colliding when the collision was last updated.
     * 
     * @property collided
     * @type boolean
     * @default false
     */ /**
     * The first body part represented by the collision (see also `collision.parentA`).
     * 
     * @property bodyA
     * @type body
     */ /**
     * The second body part represented by the collision (see also `collision.parentB`).
     * 
     * @property bodyB
     * @type body
     */ /**
     * The first body represented by the collision (i.e. `collision.bodyA.parent`).
     * 
     * @property parentA
     * @type body
     */ /**
     * The second body represented by the collision (i.e. `collision.bodyB.parent`).
     * 
     * @property parentB
     * @type body
     */ /**
     * A `Number` that represents the minimum separating distance between the bodies along the collision normal.
     *
     * @readOnly
     * @property depth
     * @type number
     * @default 0
     */ /**
     * A normalised `Vector` that represents the direction between the bodies that provides the minimum separating distance.
     *
     * @property normal
     * @type vector
     * @default { x: 0, y: 0 }
     */ /**
     * A normalised `Vector` that is the tangent direction to the collision normal.
     *
     * @property tangent
     * @type vector
     * @default { x: 0, y: 0 }
     */ /**
     * A `Vector` that represents the direction and depth of the collision.
     *
     * @property penetration
     * @type vector
     * @default { x: 0, y: 0 }
     */ /**
     * An array of body vertices that represent the support points in the collision.
     * These are the deepest vertices (along the collision normal) of each body that are contained by the other body's vertices.
     *
     * @property supports
     * @type vector[]
     * @default []
     */ })();
        /***/ },
        function(module, exports, __webpack_require__) {
            /**
* The `Matter.Pair` module contains methods for creating and manipulating collision pairs.
*
* @class Pair
*/ var Pair = {
            };
            module.exports = Pair;
            var Contact = __webpack_require__(17);
            (function() {
                /**
     * Creates a pair.
     * @method create
     * @param {collision} collision
     * @param {number} timestamp
     * @return {pair} A new pair
     */ Pair.create = function(collision, timestamp) {
                    var bodyA = collision.bodyA, bodyB = collision.bodyB;
                    var pair = {
                        id: Pair.id(bodyA, bodyB),
                        bodyA: bodyA,
                        bodyB: bodyB,
                        collision: collision,
                        contacts: [],
                        activeContacts: [],
                        separation: 0,
                        isActive: true,
                        confirmedActive: true,
                        isSensor: bodyA.isSensor || bodyB.isSensor,
                        timeCreated: timestamp,
                        timeUpdated: timestamp,
                        inverseMass: 0,
                        friction: 0,
                        frictionStatic: 0,
                        restitution: 0,
                        slop: 0
                    };
                    Pair.update(pair, collision, timestamp);
                    return pair;
                };
                /**
     * Updates a pair given a collision.
     * @method update
     * @param {pair} pair
     * @param {collision} collision
     * @param {number} timestamp
     */ Pair.update = function(pair, collision, timestamp) {
                    var contacts = pair.contacts, supports = collision.supports, activeContacts = pair.activeContacts, parentA = collision.parentA, parentB = collision.parentB, parentAVerticesLength = parentA.vertices.length;
                    pair.isActive = true;
                    pair.timeUpdated = timestamp;
                    pair.collision = collision;
                    pair.separation = collision.depth;
                    pair.inverseMass = parentA.inverseMass + parentB.inverseMass;
                    pair.friction = parentA.friction < parentB.friction ? parentA.friction : parentB.friction;
                    pair.frictionStatic = parentA.frictionStatic > parentB.frictionStatic ? parentA.frictionStatic : parentB.frictionStatic;
                    pair.restitution = parentA.restitution > parentB.restitution ? parentA.restitution : parentB.restitution;
                    pair.slop = parentA.slop > parentB.slop ? parentA.slop : parentB.slop;
                    collision.pair = pair;
                    activeContacts.length = 0;
                    for(var i = 0; i < supports.length; i++){
                        var support = supports[i], contactId = support.body === parentA ? support.index : parentAVerticesLength + support.index, contact = contacts[contactId];
                        if (contact) activeContacts.push(contact);
                        else activeContacts.push(contacts[contactId] = Contact.create(support));
                    }
                };
                /**
     * Set a pair as active or inactive.
     * @method setActive
     * @param {pair} pair
     * @param {bool} isActive
     * @param {number} timestamp
     */ Pair.setActive = function(pair, isActive, timestamp) {
                    if (isActive) {
                        pair.isActive = true;
                        pair.timeUpdated = timestamp;
                    } else {
                        pair.isActive = false;
                        pair.activeContacts.length = 0;
                    }
                };
                /**
     * Get the id for the given pair.
     * @method id
     * @param {body} bodyA
     * @param {body} bodyB
     * @return {string} Unique pairId
     */ Pair.id = function(bodyA, bodyB) {
                    if (bodyA.id < bodyB.id) return 'A' + bodyA.id + 'B' + bodyB.id;
                    else return 'A' + bodyB.id + 'B' + bodyA.id;
                };
            })();
        /***/ },
        function(module, exports, __webpack_require__) {
            /**
* The `Matter.Constraint` module contains methods for creating and manipulating constraints.
* Constraints are used for specifying that a fixed distance must be maintained between two bodies (or a body and a fixed world-space position).
* The stiffness of constraints can be modified to create springs or elastic.
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class Constraint
*/ var Constraint = {
            };
            module.exports = Constraint;
            var Vertices = __webpack_require__(3);
            var Vector = __webpack_require__(2);
            var Sleeping = __webpack_require__(7);
            var Bounds = __webpack_require__(1);
            var Axes = __webpack_require__(11);
            var Common = __webpack_require__(0);
            (function() {
                Constraint._warming = 0.4;
                Constraint._torqueDampen = 1;
                Constraint._minLength = 0.000001;
                /**
     * Creates a new constraint.
     * All properties have default values, and many are pre-calculated automatically based on other properties.
     * To simulate a revolute constraint (or pin joint) set `length: 0` and a high `stiffness` value (e.g. `0.7` or above).
     * If the constraint is unstable, try lowering the `stiffness` value and / or increasing `engine.constraintIterations`.
     * For compound bodies, constraints must be applied to the parent body (not one of its parts).
     * See the properties section below for detailed information on what you can pass via the `options` object.
     * @method create
     * @param {} options
     * @return {constraint} constraint
     */ Constraint.create = function(options) {
                    var constraint = options;
                    // if bodies defined but no points, use body centre
                    if (constraint.bodyA && !constraint.pointA) constraint.pointA = {
                        x: 0,
                        y: 0
                    };
                    if (constraint.bodyB && !constraint.pointB) constraint.pointB = {
                        x: 0,
                        y: 0
                    };
                    // calculate static length using initial world space points
                    var initialPointA = constraint.bodyA ? Vector.add(constraint.bodyA.position, constraint.pointA) : constraint.pointA, initialPointB = constraint.bodyB ? Vector.add(constraint.bodyB.position, constraint.pointB) : constraint.pointB, length = Vector.magnitude(Vector.sub(initialPointA, initialPointB));
                    constraint.length = typeof constraint.length !== 'undefined' ? constraint.length : length;
                    // option defaults
                    constraint.id = constraint.id || Common.nextId();
                    constraint.label = constraint.label || 'Constraint';
                    constraint.type = 'constraint';
                    constraint.stiffness = constraint.stiffness || (constraint.length > 0 ? 1 : 0.7);
                    constraint.damping = constraint.damping || 0;
                    constraint.angularStiffness = constraint.angularStiffness || 0;
                    constraint.angleA = constraint.bodyA ? constraint.bodyA.angle : constraint.angleA;
                    constraint.angleB = constraint.bodyB ? constraint.bodyB.angle : constraint.angleB;
                    constraint.plugin = {
                    };
                    // render
                    var render = {
                        visible: true,
                        lineWidth: 2,
                        strokeStyle: '#ffffff',
                        type: 'line',
                        anchors: true
                    };
                    if (constraint.length === 0 && constraint.stiffness > 0.1) {
                        render.type = 'pin';
                        render.anchors = false;
                    } else if (constraint.stiffness < 0.9) render.type = 'spring';
                    constraint.render = Common.extend(render, constraint.render);
                    return constraint;
                };
                /**
     * Prepares for solving by constraint warming.
     * @private
     * @method preSolveAll
     * @param {body[]} bodies
     */ Constraint.preSolveAll = function(bodies) {
                    for(var i = 0; i < bodies.length; i += 1){
                        var body = bodies[i], impulse = body.constraintImpulse;
                        if (body.isStatic || impulse.x === 0 && impulse.y === 0 && impulse.angle === 0) continue;
                        body.position.x += impulse.x;
                        body.position.y += impulse.y;
                        body.angle += impulse.angle;
                    }
                };
                /**
     * Solves all constraints in a list of collisions.
     * @private
     * @method solveAll
     * @param {constraint[]} constraints
     * @param {number} timeScale
     */ Constraint.solveAll = function(constraints, timeScale) {
                    // Solve fixed constraints first.
                    for(var i = 0; i < constraints.length; i += 1){
                        var constraint = constraints[i], fixedA = !constraint.bodyA || constraint.bodyA && constraint.bodyA.isStatic, fixedB = !constraint.bodyB || constraint.bodyB && constraint.bodyB.isStatic;
                        if (fixedA || fixedB) Constraint.solve(constraints[i], timeScale);
                    }
                    // Solve free constraints last.
                    for(i = 0; i < constraints.length; i += 1){
                        constraint = constraints[i];
                        fixedA = !constraint.bodyA || constraint.bodyA && constraint.bodyA.isStatic;
                        fixedB = !constraint.bodyB || constraint.bodyB && constraint.bodyB.isStatic;
                        if (!fixedA && !fixedB) Constraint.solve(constraints[i], timeScale);
                    }
                };
                /**
     * Solves a distance constraint with Gauss-Siedel method.
     * @private
     * @method solve
     * @param {constraint} constraint
     * @param {number} timeScale
     */ Constraint.solve = function(constraint, timeScale) {
                    var bodyA = constraint.bodyA, bodyB = constraint.bodyB, pointA = constraint.pointA, pointB = constraint.pointB;
                    if (!bodyA && !bodyB) return;
                    // update reference angle
                    if (bodyA && !bodyA.isStatic) {
                        Vector.rotate(pointA, bodyA.angle - constraint.angleA, pointA);
                        constraint.angleA = bodyA.angle;
                    }
                    // update reference angle
                    if (bodyB && !bodyB.isStatic) {
                        Vector.rotate(pointB, bodyB.angle - constraint.angleB, pointB);
                        constraint.angleB = bodyB.angle;
                    }
                    var pointAWorld = pointA, pointBWorld = pointB;
                    if (bodyA) pointAWorld = Vector.add(bodyA.position, pointA);
                    if (bodyB) pointBWorld = Vector.add(bodyB.position, pointB);
                    if (!pointAWorld || !pointBWorld) return;
                    var delta = Vector.sub(pointAWorld, pointBWorld), currentLength = Vector.magnitude(delta);
                    // prevent singularity
                    if (currentLength < Constraint._minLength) currentLength = Constraint._minLength;
                    // solve distance constraint with Gauss-Siedel method
                    var difference = (currentLength - constraint.length) / currentLength, stiffness = constraint.stiffness < 1 ? constraint.stiffness * timeScale : constraint.stiffness, force = Vector.mult(delta, difference * stiffness), massTotal = (bodyA ? bodyA.inverseMass : 0) + (bodyB ? bodyB.inverseMass : 0), inertiaTotal = (bodyA ? bodyA.inverseInertia : 0) + (bodyB ? bodyB.inverseInertia : 0), resistanceTotal = massTotal + inertiaTotal, torque, share, normal, normalVelocity, relativeVelocity;
                    if (constraint.damping) {
                        var zero = Vector.create();
                        normal = Vector.div(delta, currentLength);
                        relativeVelocity = Vector.sub(bodyB && Vector.sub(bodyB.position, bodyB.positionPrev) || zero, bodyA && Vector.sub(bodyA.position, bodyA.positionPrev) || zero);
                        normalVelocity = Vector.dot(normal, relativeVelocity);
                    }
                    if (bodyA && !bodyA.isStatic) {
                        share = bodyA.inverseMass / massTotal;
                        // keep track of applied impulses for post solving
                        bodyA.constraintImpulse.x -= force.x * share;
                        bodyA.constraintImpulse.y -= force.y * share;
                        // apply forces
                        bodyA.position.x -= force.x * share;
                        bodyA.position.y -= force.y * share;
                        // apply damping
                        if (constraint.damping) {
                            bodyA.positionPrev.x -= constraint.damping * normal.x * normalVelocity * share;
                            bodyA.positionPrev.y -= constraint.damping * normal.y * normalVelocity * share;
                        }
                        // apply torque
                        torque = Vector.cross(pointA, force) / resistanceTotal * Constraint._torqueDampen * bodyA.inverseInertia * (1 - constraint.angularStiffness);
                        bodyA.constraintImpulse.angle -= torque;
                        bodyA.angle -= torque;
                    }
                    if (bodyB && !bodyB.isStatic) {
                        share = bodyB.inverseMass / massTotal;
                        // keep track of applied impulses for post solving
                        bodyB.constraintImpulse.x += force.x * share;
                        bodyB.constraintImpulse.y += force.y * share;
                        // apply forces
                        bodyB.position.x += force.x * share;
                        bodyB.position.y += force.y * share;
                        // apply damping
                        if (constraint.damping) {
                            bodyB.positionPrev.x += constraint.damping * normal.x * normalVelocity * share;
                            bodyB.positionPrev.y += constraint.damping * normal.y * normalVelocity * share;
                        }
                        // apply torque
                        torque = Vector.cross(pointB, force) / resistanceTotal * Constraint._torqueDampen * bodyB.inverseInertia * (1 - constraint.angularStiffness);
                        bodyB.constraintImpulse.angle += torque;
                        bodyB.angle += torque;
                    }
                };
                /**
     * Performs body updates required after solving constraints.
     * @private
     * @method postSolveAll
     * @param {body[]} bodies
     */ Constraint.postSolveAll = function(bodies) {
                    for(var i = 0; i < bodies.length; i++){
                        var body = bodies[i], impulse = body.constraintImpulse;
                        if (body.isStatic || impulse.x === 0 && impulse.y === 0 && impulse.angle === 0) continue;
                        Sleeping.set(body, false);
                        // update geometry and reset
                        for(var j = 0; j < body.parts.length; j++){
                            var part = body.parts[j];
                            Vertices.translate(part.vertices, impulse);
                            if (j > 0) {
                                part.position.x += impulse.x;
                                part.position.y += impulse.y;
                            }
                            if (impulse.angle !== 0) {
                                Vertices.rotate(part.vertices, impulse.angle, body.position);
                                Axes.rotate(part.axes, impulse.angle);
                                if (j > 0) Vector.rotateAbout(part.position, impulse.angle, body.position, part.position);
                            }
                            Bounds.update(part.bounds, part.vertices, body.velocity);
                        }
                        // dampen the cached impulse for warming next step
                        impulse.angle *= Constraint._warming;
                        impulse.x *= Constraint._warming;
                        impulse.y *= Constraint._warming;
                    }
                };
                /**
     * Returns the world-space position of `constraint.pointA`, accounting for `constraint.bodyA`.
     * @method pointAWorld
     * @param {constraint} constraint
     * @returns {vector} the world-space position
     */ Constraint.pointAWorld = function(constraint) {
                    return {
                        x: (constraint.bodyA ? constraint.bodyA.position.x : 0) + constraint.pointA.x,
                        y: (constraint.bodyA ? constraint.bodyA.position.y : 0) + constraint.pointA.y
                    };
                };
                /**
     * Returns the world-space position of `constraint.pointB`, accounting for `constraint.bodyB`.
     * @method pointBWorld
     * @param {constraint} constraint
     * @returns {vector} the world-space position
     */ Constraint.pointBWorld = function(constraint) {
                    return {
                        x: (constraint.bodyB ? constraint.bodyB.position.x : 0) + constraint.pointB.x,
                        y: (constraint.bodyB ? constraint.bodyB.position.y : 0) + constraint.pointB.y
                    };
                };
            /*
    *
    *  Properties Documentation
    *
    */ /**
     * An integer `Number` uniquely identifying number generated in `Composite.create` by `Common.nextId`.
     *
     * @property id
     * @type number
     */ /**
     * A `String` denoting the type of object.
     *
     * @property type
     * @type string
     * @default "constraint"
     * @readOnly
     */ /**
     * An arbitrary `String` name to help the user identify and manage bodies.
     *
     * @property label
     * @type string
     * @default "Constraint"
     */ /**
     * An `Object` that defines the rendering properties to be consumed by the module `Matter.Render`.
     *
     * @property render
     * @type object
     */ /**
     * A flag that indicates if the constraint should be rendered.
     *
     * @property render.visible
     * @type boolean
     * @default true
     */ /**
     * A `Number` that defines the line width to use when rendering the constraint outline.
     * A value of `0` means no outline will be rendered.
     *
     * @property render.lineWidth
     * @type number
     * @default 2
     */ /**
     * A `String` that defines the stroke style to use when rendering the constraint outline.
     * It is the same as when using a canvas, so it accepts CSS style property values.
     *
     * @property render.strokeStyle
     * @type string
     * @default a random colour
     */ /**
     * A `String` that defines the constraint rendering type. 
     * The possible values are 'line', 'pin', 'spring'.
     * An appropriate render type will be automatically chosen unless one is given in options.
     *
     * @property render.type
     * @type string
     * @default 'line'
     */ /**
     * A `Boolean` that defines if the constraint's anchor points should be rendered.
     *
     * @property render.anchors
     * @type boolean
     * @default true
     */ /**
     * The first possible `Body` that this constraint is attached to.
     *
     * @property bodyA
     * @type body
     * @default null
     */ /**
     * The second possible `Body` that this constraint is attached to.
     *
     * @property bodyB
     * @type body
     * @default null
     */ /**
     * A `Vector` that specifies the offset of the constraint from center of the `constraint.bodyA` if defined, otherwise a world-space position.
     *
     * @property pointA
     * @type vector
     * @default { x: 0, y: 0 }
     */ /**
     * A `Vector` that specifies the offset of the constraint from center of the `constraint.bodyB` if defined, otherwise a world-space position.
     *
     * @property pointB
     * @type vector
     * @default { x: 0, y: 0 }
     */ /**
     * A `Number` that specifies the stiffness of the constraint, i.e. the rate at which it returns to its resting `constraint.length`.
     * A value of `1` means the constraint should be very stiff.
     * A value of `0.2` means the constraint acts like a soft spring.
     *
     * @property stiffness
     * @type number
     * @default 1
     */ /**
     * A `Number` that specifies the damping of the constraint, 
     * i.e. the amount of resistance applied to each body based on their velocities to limit the amount of oscillation.
     * Damping will only be apparent when the constraint also has a very low `stiffness`.
     * A value of `0.1` means the constraint will apply heavy damping, resulting in little to no oscillation.
     * A value of `0` means the constraint will apply no damping.
     *
     * @property damping
     * @type number
     * @default 0
     */ /**
     * A `Number` that specifies the target resting length of the constraint. 
     * It is calculated automatically in `Constraint.create` from initial positions of the `constraint.bodyA` and `constraint.bodyB`.
     *
     * @property length
     * @type number
     */ /**
     * An object reserved for storing plugin-specific properties.
     *
     * @property plugin
     * @type {}
     */ })();
        /***/ },
        function(module, exports, __webpack_require__) {
            /**
* The `Matter.Axes` module contains methods for creating and manipulating sets of axes.
*
* @class Axes
*/ var Axes = {
            };
            module.exports = Axes;
            var Vector = __webpack_require__(2);
            var Common = __webpack_require__(0);
            (function() {
                /**
     * Creates a new set of axes from the given vertices.
     * @method fromVertices
     * @param {vertices} vertices
     * @return {axes} A new axes from the given vertices
     */ Axes.fromVertices = function(vertices) {
                    var axes = {
                    };
                    // find the unique axes, using edge normal gradients
                    for(var i = 0; i < vertices.length; i++){
                        var j = (i + 1) % vertices.length, normal = Vector.normalise({
                            x: vertices[j].y - vertices[i].y,
                            y: vertices[i].x - vertices[j].x
                        }), gradient = normal.y === 0 ? Infinity : normal.x / normal.y;
                        // limit precision
                        gradient = gradient.toFixed(3).toString();
                        axes[gradient] = normal;
                    }
                    return Common.values(axes);
                };
                /**
     * Rotates a set of axes by the given angle.
     * @method rotate
     * @param {axes} axes
     * @param {number} angle
     */ Axes.rotate = function(axes, angle) {
                    if (angle === 0) return;
                    var cos = Math.cos(angle), sin = Math.sin(angle);
                    for(var i = 0; i < axes.length; i++){
                        var axis = axes[i], xx;
                        xx = axis.x * cos - axis.y * sin;
                        axis.y = axis.x * sin + axis.y * cos;
                        axis.x = xx;
                    }
                };
            })();
        /***/ },
        function(module, exports, __webpack_require__) {
            /**
* The `Matter.Bodies` module contains factory methods for creating rigid body models 
* with commonly used body configurations (such as rectangles, circles and other polygons).
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class Bodies
*/ // TODO: true circle bodies
            var Bodies = {
            };
            module.exports = Bodies;
            var Vertices = __webpack_require__(3);
            var Common = __webpack_require__(0);
            var Body = __webpack_require__(6);
            var Bounds = __webpack_require__(1);
            var Vector = __webpack_require__(2);
            (function() {
                /**
     * Creates a new rigid body model with a rectangle hull. 
     * The options parameter is an object that specifies any properties you wish to override the defaults.
     * See the properties section of the `Matter.Body` module for detailed information on what you can pass via the `options` object.
     * @method rectangle
     * @param {number} x
     * @param {number} y
     * @param {number} width
     * @param {number} height
     * @param {object} [options]
     * @return {body} A new rectangle body
     */ Bodies.rectangle = function(x, y, width, height, options) {
                    options = options || {
                    };
                    var rectangle = {
                        label: 'Rectangle Body',
                        position: {
                            x: x,
                            y: y
                        },
                        vertices: Vertices.fromPath('L 0 0 L ' + width + ' 0 L ' + width + ' ' + height + ' L 0 ' + height)
                    };
                    if (options.chamfer) {
                        var chamfer = options.chamfer;
                        rectangle.vertices = Vertices.chamfer(rectangle.vertices, chamfer.radius, chamfer.quality, chamfer.qualityMin, chamfer.qualityMax);
                        delete options.chamfer;
                    }
                    return Body.create(Common.extend({
                    }, rectangle, options));
                };
                /**
     * Creates a new rigid body model with a trapezoid hull. 
     * The options parameter is an object that specifies any properties you wish to override the defaults.
     * See the properties section of the `Matter.Body` module for detailed information on what you can pass via the `options` object.
     * @method trapezoid
     * @param {number} x
     * @param {number} y
     * @param {number} width
     * @param {number} height
     * @param {number} slope
     * @param {object} [options]
     * @return {body} A new trapezoid body
     */ Bodies.trapezoid = function(x, y, width, height, slope, options) {
                    options = options || {
                    };
                    slope *= 0.5;
                    var roof = (1 - slope * 2) * width;
                    var x1 = width * slope, x2 = x1 + roof, x3 = x2 + x1, verticesPath;
                    if (slope < 0.5) verticesPath = 'L 0 0 L ' + x1 + ' ' + -height + ' L ' + x2 + ' ' + -height + ' L ' + x3 + ' 0';
                    else verticesPath = 'L 0 0 L ' + x2 + ' ' + -height + ' L ' + x3 + ' 0';
                    var trapezoid = {
                        label: 'Trapezoid Body',
                        position: {
                            x: x,
                            y: y
                        },
                        vertices: Vertices.fromPath(verticesPath)
                    };
                    if (options.chamfer) {
                        var chamfer = options.chamfer;
                        trapezoid.vertices = Vertices.chamfer(trapezoid.vertices, chamfer.radius, chamfer.quality, chamfer.qualityMin, chamfer.qualityMax);
                        delete options.chamfer;
                    }
                    return Body.create(Common.extend({
                    }, trapezoid, options));
                };
                /**
     * Creates a new rigid body model with a circle hull. 
     * The options parameter is an object that specifies any properties you wish to override the defaults.
     * See the properties section of the `Matter.Body` module for detailed information on what you can pass via the `options` object.
     * @method circle
     * @param {number} x
     * @param {number} y
     * @param {number} radius
     * @param {object} [options]
     * @param {number} [maxSides]
     * @return {body} A new circle body
     */ Bodies.circle = function(x, y, radius, options, maxSides) {
                    options = options || {
                    };
                    var circle = {
                        label: 'Circle Body',
                        circleRadius: radius
                    };
                    // approximate circles with polygons until true circles implemented in SAT
                    maxSides = maxSides || 25;
                    var sides = Math.ceil(Math.max(10, Math.min(maxSides, radius)));
                    // optimisation: always use even number of sides (half the number of unique axes)
                    if (sides % 2 === 1) sides += 1;
                    return Bodies.polygon(x, y, sides, radius, Common.extend({
                    }, circle, options));
                };
                /**
     * Creates a new rigid body model with a regular polygon hull with the given number of sides. 
     * The options parameter is an object that specifies any properties you wish to override the defaults.
     * See the properties section of the `Matter.Body` module for detailed information on what you can pass via the `options` object.
     * @method polygon
     * @param {number} x
     * @param {number} y
     * @param {number} sides
     * @param {number} radius
     * @param {object} [options]
     * @return {body} A new regular polygon body
     */ Bodies.polygon = function(x, y, sides, radius, options) {
                    options = options || {
                    };
                    if (sides < 3) return Bodies.circle(x, y, radius, options);
                    var theta = 2 * Math.PI / sides, path = '', offset = theta * 0.5;
                    for(var i = 0; i < sides; i += 1){
                        var angle = offset + i * theta, xx = Math.cos(angle) * radius, yy = Math.sin(angle) * radius;
                        path += 'L ' + xx.toFixed(3) + ' ' + yy.toFixed(3) + ' ';
                    }
                    var polygon = {
                        label: 'Polygon Body',
                        position: {
                            x: x,
                            y: y
                        },
                        vertices: Vertices.fromPath(path)
                    };
                    if (options.chamfer) {
                        var chamfer = options.chamfer;
                        polygon.vertices = Vertices.chamfer(polygon.vertices, chamfer.radius, chamfer.quality, chamfer.qualityMin, chamfer.qualityMax);
                        delete options.chamfer;
                    }
                    return Body.create(Common.extend({
                    }, polygon, options));
                };
                /**
     * Utility to create a compound body based on set(s) of vertices.
     * 
     * _Note:_ To optionally enable automatic concave vertices decomposition the [poly-decomp](https://github.com/schteppe/poly-decomp.js) 
     * package must be first installed and provided see `Common.setDecomp`, otherwise the convex hull of each vertex set will be used.
     * 
     * The resulting vertices are reorientated about their centre of mass,
     * and offset such that `body.position` corresponds to this point.
     * 
     * The resulting offset may be found if needed by subtracting `body.bounds` from the original input bounds.
     * To later move the centre of mass see `Body.setCentre`.
     * 
     * Note that automatic conconcave decomposition results are not always optimal. 
     * For best results, simplify the input vertices as much as possible first.
     * By default this function applies some addtional simplification to help.
     * 
     * Some outputs may also require further manual processing afterwards to be robust.
     * In particular some parts may need to be overlapped to avoid collision gaps.
     * Thin parts and sharp points should be avoided or removed where possible.
     *
     * The options parameter object specifies any `Matter.Body` properties you wish to override the defaults.
     * 
     * See the properties section of the `Matter.Body` module for detailed information on what you can pass via the `options` object.
     * @method fromVertices
     * @param {number} x
     * @param {number} y
     * @param {array} vertexSets One or more arrays of vertex points e.g. `[[{ x: 0, y: 0 }...], ...]`.
     * @param {object} [options] The body options.
     * @param {bool} [flagInternal=false] Optionally marks internal edges with `isInternal`.
     * @param {number} [removeCollinear=0.01] Threshold when simplifying vertices along the same edge.
     * @param {number} [minimumArea=10] Threshold when removing small parts.
     * @param {number} [removeDuplicatePoints=0.01] Threshold when simplifying nearby vertices.
     * @return {body}
     */ Bodies.fromVertices = function(x, y, vertexSets, options, flagInternal, removeCollinear, minimumArea, removeDuplicatePoints) {
                    var decomp = Common.getDecomp(), canDecomp, body, parts, isConvex, isConcave, vertices1, i, j, k, v, z;
                    // check decomp is as expected
                    canDecomp = Boolean(decomp && decomp.quickDecomp);
                    options = options || {
                    };
                    parts = [];
                    flagInternal = typeof flagInternal !== 'undefined' ? flagInternal : false;
                    removeCollinear = typeof removeCollinear !== 'undefined' ? removeCollinear : 0.01;
                    minimumArea = typeof minimumArea !== 'undefined' ? minimumArea : 10;
                    removeDuplicatePoints = typeof removeDuplicatePoints !== 'undefined' ? removeDuplicatePoints : 0.01;
                    // ensure vertexSets is an array of arrays
                    if (!Common.isArray(vertexSets[0])) vertexSets = [
                        vertexSets
                    ];
                    for(v = 0; v < vertexSets.length; v += 1){
                        vertices1 = vertexSets[v];
                        isConvex = Vertices.isConvex(vertices1);
                        isConcave = !isConvex;
                        if (isConcave && !canDecomp) Common.warnOnce('Bodies.fromVertices: Install the \'poly-decomp\' library and use Common.setDecomp or provide \'decomp\' as a global to decompose concave vertices.');
                        if (isConvex || !canDecomp) {
                            if (isConvex) vertices1 = Vertices.clockwiseSort(vertices1);
                            else // fallback to convex hull when decomposition is not possible
                            vertices1 = Vertices.hull(vertices1);
                            parts.push({
                                position: {
                                    x: x,
                                    y: y
                                },
                                vertices: vertices1
                            });
                        } else {
                            // initialise a decomposition
                            var concave = vertices1.map(function(vertex) {
                                return [
                                    vertex.x,
                                    vertex.y
                                ];
                            });
                            // vertices are concave and simple, we can decompose into parts
                            decomp.makeCCW(concave);
                            if (removeCollinear !== false) decomp.removeCollinearPoints(concave, removeCollinear);
                            if (removeDuplicatePoints !== false && decomp.removeDuplicatePoints) decomp.removeDuplicatePoints(concave, removeDuplicatePoints);
                            // use the quick decomposition algorithm (Bayazit)
                            var decomposed = decomp.quickDecomp(concave);
                            // for each decomposed chunk
                            for(i = 0; i < decomposed.length; i++){
                                var chunk = decomposed[i];
                                // convert vertices into the correct structure
                                var chunkVertices = chunk.map(function(vertices) {
                                    return {
                                        x: vertices[0],
                                        y: vertices[1]
                                    };
                                });
                                // skip small chunks
                                if (minimumArea > 0 && Vertices.area(chunkVertices) < minimumArea) continue;
                                // create a compound part
                                parts.push({
                                    position: Vertices.centre(chunkVertices),
                                    vertices: chunkVertices
                                });
                            }
                        }
                    }
                    // create body parts
                    for(i = 0; i < parts.length; i++)parts[i] = Body.create(Common.extend(parts[i], options));
                    // flag internal edges (coincident part edges)
                    if (flagInternal) {
                        var coincident_max_dist = 5;
                        for(i = 0; i < parts.length; i++){
                            var partA = parts[i];
                            for(j = i + 1; j < parts.length; j++){
                                var partB = parts[j];
                                if (Bounds.overlaps(partA.bounds, partB.bounds)) {
                                    var pav = partA.vertices, pbv = partB.vertices;
                                    // iterate vertices of both parts
                                    for(k = 0; k < partA.vertices.length; k++)for(z = 0; z < partB.vertices.length; z++){
                                        // find distances between the vertices
                                        var da = Vector.magnitudeSquared(Vector.sub(pav[(k + 1) % pav.length], pbv[z])), db = Vector.magnitudeSquared(Vector.sub(pav[k], pbv[(z + 1) % pbv.length]));
                                        // if both vertices are very close, consider the edge concident (internal)
                                        if (da < coincident_max_dist && db < coincident_max_dist) {
                                            pav[k].isInternal = true;
                                            pbv[z].isInternal = true;
                                        }
                                    }
                                }
                            }
                        }
                    }
                    if (parts.length > 1) {
                        // create the parent body to be returned, that contains generated compound parts
                        body = Body.create(Common.extend({
                            parts: parts.slice(0)
                        }, options));
                        // offset such that body.position is at the centre off mass
                        Body.setPosition(body, {
                            x: x,
                            y: y
                        });
                        return body;
                    } else return parts[0];
                };
            })();
        /***/ },
        function(module, exports, __webpack_require__) {
            /**
* The `Matter.Mouse` module contains methods for creating and manipulating mouse inputs.
*
* @class Mouse
*/ var Mouse = {
            };
            module.exports = Mouse;
            var Common = __webpack_require__(0);
            (function() {
                /**
     * Creates a mouse input.
     * @method create
     * @param {HTMLElement} element
     * @return {mouse} A new mouse
     */ Mouse.create = function(element) {
                    var mouse = {
                    };
                    if (!element) Common.log('Mouse.create: element was undefined, defaulting to document.body', 'warn');
                    mouse.element = element || document.body;
                    mouse.absolute = {
                        x: 0,
                        y: 0
                    };
                    mouse.position = {
                        x: 0,
                        y: 0
                    };
                    mouse.mousedownPosition = {
                        x: 0,
                        y: 0
                    };
                    mouse.mouseupPosition = {
                        x: 0,
                        y: 0
                    };
                    mouse.offset = {
                        x: 0,
                        y: 0
                    };
                    mouse.scale = {
                        x: 1,
                        y: 1
                    };
                    mouse.wheelDelta = 0;
                    mouse.button = -1;
                    mouse.pixelRatio = parseInt(mouse.element.getAttribute('data-pixel-ratio'), 10) || 1;
                    mouse.sourceEvents = {
                        mousemove: null,
                        mousedown: null,
                        mouseup: null,
                        mousewheel: null
                    };
                    mouse.mousemove = function(event) {
                        var position = Mouse._getRelativeMousePosition(event, mouse.element, mouse.pixelRatio), touches = event.changedTouches;
                        if (touches) {
                            mouse.button = 0;
                            event.preventDefault();
                        }
                        mouse.absolute.x = position.x;
                        mouse.absolute.y = position.y;
                        mouse.position.x = mouse.absolute.x * mouse.scale.x + mouse.offset.x;
                        mouse.position.y = mouse.absolute.y * mouse.scale.y + mouse.offset.y;
                        mouse.sourceEvents.mousemove = event;
                    };
                    mouse.mousedown = function(event) {
                        var position = Mouse._getRelativeMousePosition(event, mouse.element, mouse.pixelRatio), touches = event.changedTouches;
                        if (touches) {
                            mouse.button = 0;
                            event.preventDefault();
                        } else mouse.button = event.button;
                        mouse.absolute.x = position.x;
                        mouse.absolute.y = position.y;
                        mouse.position.x = mouse.absolute.x * mouse.scale.x + mouse.offset.x;
                        mouse.position.y = mouse.absolute.y * mouse.scale.y + mouse.offset.y;
                        mouse.mousedownPosition.x = mouse.position.x;
                        mouse.mousedownPosition.y = mouse.position.y;
                        mouse.sourceEvents.mousedown = event;
                    };
                    mouse.mouseup = function(event) {
                        var position = Mouse._getRelativeMousePosition(event, mouse.element, mouse.pixelRatio), touches = event.changedTouches;
                        if (touches) event.preventDefault();
                        mouse.button = -1;
                        mouse.absolute.x = position.x;
                        mouse.absolute.y = position.y;
                        mouse.position.x = mouse.absolute.x * mouse.scale.x + mouse.offset.x;
                        mouse.position.y = mouse.absolute.y * mouse.scale.y + mouse.offset.y;
                        mouse.mouseupPosition.x = mouse.position.x;
                        mouse.mouseupPosition.y = mouse.position.y;
                        mouse.sourceEvents.mouseup = event;
                    };
                    mouse.mousewheel = function(event) {
                        mouse.wheelDelta = Math.max(-1, Math.min(1, event.wheelDelta || -event.detail));
                        event.preventDefault();
                    };
                    Mouse.setElement(mouse, mouse.element);
                    return mouse;
                };
                /**
     * Sets the element the mouse is bound to (and relative to).
     * @method setElement
     * @param {mouse} mouse
     * @param {HTMLElement} element
     */ Mouse.setElement = function(mouse, element) {
                    mouse.element = element;
                    element.addEventListener('mousemove', mouse.mousemove);
                    element.addEventListener('mousedown', mouse.mousedown);
                    element.addEventListener('mouseup', mouse.mouseup);
                    element.addEventListener('mousewheel', mouse.mousewheel);
                    element.addEventListener('DOMMouseScroll', mouse.mousewheel);
                    element.addEventListener('touchmove', mouse.mousemove);
                    element.addEventListener('touchstart', mouse.mousedown);
                    element.addEventListener('touchend', mouse.mouseup);
                };
                /**
     * Clears all captured source events.
     * @method clearSourceEvents
     * @param {mouse} mouse
     */ Mouse.clearSourceEvents = function(mouse) {
                    mouse.sourceEvents.mousemove = null;
                    mouse.sourceEvents.mousedown = null;
                    mouse.sourceEvents.mouseup = null;
                    mouse.sourceEvents.mousewheel = null;
                    mouse.wheelDelta = 0;
                };
                /**
     * Sets the mouse position offset.
     * @method setOffset
     * @param {mouse} mouse
     * @param {vector} offset
     */ Mouse.setOffset = function(mouse, offset) {
                    mouse.offset.x = offset.x;
                    mouse.offset.y = offset.y;
                    mouse.position.x = mouse.absolute.x * mouse.scale.x + mouse.offset.x;
                    mouse.position.y = mouse.absolute.y * mouse.scale.y + mouse.offset.y;
                };
                /**
     * Sets the mouse position scale.
     * @method setScale
     * @param {mouse} mouse
     * @param {vector} scale
     */ Mouse.setScale = function(mouse, scale) {
                    mouse.scale.x = scale.x;
                    mouse.scale.y = scale.y;
                    mouse.position.x = mouse.absolute.x * mouse.scale.x + mouse.offset.x;
                    mouse.position.y = mouse.absolute.y * mouse.scale.y + mouse.offset.y;
                };
                /**
     * Gets the mouse position relative to an element given a screen pixel ratio.
     * @method _getRelativeMousePosition
     * @private
     * @param {} event
     * @param {} element
     * @param {number} pixelRatio
     * @return {}
     */ Mouse._getRelativeMousePosition = function(event, element, pixelRatio) {
                    var elementBounds = element.getBoundingClientRect(), rootNode = document.documentElement || document.body.parentNode || document.body, scrollX = window.pageXOffset !== undefined ? window.pageXOffset : rootNode.scrollLeft, scrollY = window.pageYOffset !== undefined ? window.pageYOffset : rootNode.scrollTop, touches = event.changedTouches, x, y;
                    if (touches) {
                        x = touches[0].pageX - elementBounds.left - scrollX;
                        y = touches[0].pageY - elementBounds.top - scrollY;
                    } else {
                        x = event.pageX - elementBounds.left - scrollX;
                        y = event.pageY - elementBounds.top - scrollY;
                    }
                    return {
                        x: x / (element.clientWidth / (element.width || element.clientWidth) * pixelRatio),
                        y: y / (element.clientHeight / (element.height || element.clientHeight) * pixelRatio)
                    };
                };
            })();
        /***/ },
        function(module, exports, __webpack_require__) {
            /**
* The `Matter.Detector` module contains methods for efficiently detecting collisions between a list of bodies using a broadphase algorithm.
*
* @class Detector
*/ var Detector = {
            };
            module.exports = Detector;
            var Common = __webpack_require__(0);
            var Collision = __webpack_require__(8);
            (function() {
                /**
     * Creates a new collision detector.
     * @method create
     * @param {} options
     * @return {detector} A new collision detector
     */ Detector.create = function(options) {
                    var defaults = {
                        bodies: [],
                        pairs: null
                    };
                    return Common.extend(defaults, options);
                };
                /**
     * Sets the list of bodies in the detector.
     * @method setBodies
     * @param {detector} detector
     * @param {body[]} bodies
     */ Detector.setBodies = function(detector, bodies) {
                    detector.bodies = bodies.slice(0);
                };
                /**
     * Clears the detector including its list of bodies.
     * @method clear
     * @param {detector} detector
     */ Detector.clear = function(detector) {
                    detector.bodies = [];
                };
                /**
     * Efficiently finds all collisions among all the bodies in `detector.bodies` using a broadphase algorithm.
     * 
     * _Note:_ The specific ordering of collisions returned is not guaranteed between releases and may change for performance reasons.
     * If a specific ordering is required then apply a sort to the resulting array.
     * @method collisions
     * @param {detector} detector
     * @return {collision[]} collisions
     */ Detector.collisions = function(detector) {
                    var collisions = [], pairs = detector.pairs, bodies = detector.bodies, bodiesLength = bodies.length, canCollide = Detector.canCollide, collides = Collision.collides, i, j;
                    bodies.sort(Detector._compareBoundsX);
                    for(i = 0; i < bodiesLength; i++){
                        var bodyA = bodies[i], boundsA = bodyA.bounds, boundXMax = bodyA.bounds.max.x, boundYMax = bodyA.bounds.max.y, boundYMin = bodyA.bounds.min.y, bodyAStatic = bodyA.isStatic || bodyA.isSleeping, partsALength = bodyA.parts.length, partsASingle = partsALength === 1;
                        for(j = i + 1; j < bodiesLength; j++){
                            var bodyB = bodies[j], boundsB = bodyB.bounds;
                            if (boundsB.min.x > boundXMax) break;
                            if (boundYMax < boundsB.min.y || boundYMin > boundsB.max.y) continue;
                            if (bodyAStatic && (bodyB.isStatic || bodyB.isSleeping)) continue;
                            if (!canCollide(bodyA.collisionFilter, bodyB.collisionFilter)) continue;
                            var partsBLength = bodyB.parts.length;
                            if (partsASingle && partsBLength === 1) {
                                var collision = collides(bodyA, bodyB, pairs);
                                if (collision) collisions.push(collision);
                            } else {
                                var partsAStart = partsALength > 1 ? 1 : 0, partsBStart = partsBLength > 1 ? 1 : 0;
                                for(var k = partsAStart; k < partsALength; k++){
                                    var partA = bodyA.parts[k], boundsA = partA.bounds;
                                    for(var z = partsBStart; z < partsBLength; z++){
                                        var partB = bodyB.parts[z], boundsB = partB.bounds;
                                        if (boundsA.min.x > boundsB.max.x || boundsA.max.x < boundsB.min.x || boundsA.max.y < boundsB.min.y || boundsA.min.y > boundsB.max.y) continue;
                                        var collision = collides(partA, partB, pairs);
                                        if (collision) collisions.push(collision);
                                    }
                                }
                            }
                        }
                    }
                    return collisions;
                };
                /**
     * Returns `true` if both supplied collision filters will allow a collision to occur.
     * See `body.collisionFilter` for more information.
     * @method canCollide
     * @param {} filterA
     * @param {} filterB
     * @return {bool} `true` if collision can occur
     */ Detector.canCollide = function(filterA, filterB) {
                    if (filterA.group === filterB.group && filterA.group !== 0) return filterA.group > 0;
                    return (filterA.mask & filterB.category) !== 0 && (filterB.mask & filterA.category) !== 0;
                };
                /**
     * The comparison function used in the broadphase algorithm.
     * Returns the signed delta of the bodies bounds on the x-axis.
     * @private
     * @method _sortCompare
     * @param {body} bodyA
     * @param {body} bodyB
     * @return {number} The signed delta used for sorting
     */ Detector._compareBoundsX = function(bodyA, bodyB) {
                    return bodyA.bounds.min.x - bodyB.bounds.min.x;
                };
            /*
    *
    *  Properties Documentation
    *
    */ /**
     * The array of `Matter.Body` between which the detector finds collisions.
     * 
     * _Note:_ The order of bodies in this array _is not fixed_ and will be continually managed by the detector.
     * @property bodies
     * @type body[]
     * @default []
     */ /**
     * Optional. A `Matter.Pairs` object from which previous collision objects may be reused. Intended for internal `Matter.Engine` usage.
     * @property pairs
     * @type {pairs|null}
     * @default null
     */ })();
        /***/ },
        function(module1, exports, __webpack_require__) {
            /**
* The `Matter.Plugin` module contains functions for registering and installing plugins on modules.
*
* @class Plugin
*/ var Plugin = {
            };
            module1.exports = Plugin;
            var Common = __webpack_require__(0);
            (function() {
                Plugin._registry = {
                };
                /**
     * Registers a plugin object so it can be resolved later by name.
     * @method register
     * @param plugin {} The plugin to register.
     * @return {object} The plugin.
     */ Plugin.register = function(plugin) {
                    if (!Plugin.isPlugin(plugin)) Common.warn('Plugin.register:', Plugin.toString(plugin), 'does not implement all required fields.');
                    if (plugin.name in Plugin._registry) {
                        var registered = Plugin._registry[plugin.name], pluginVersion = Plugin.versionParse(plugin.version).number, registeredVersion = Plugin.versionParse(registered.version).number;
                        if (pluginVersion > registeredVersion) {
                            Common.warn('Plugin.register:', Plugin.toString(registered), 'was upgraded to', Plugin.toString(plugin));
                            Plugin._registry[plugin.name] = plugin;
                        } else if (pluginVersion < registeredVersion) Common.warn('Plugin.register:', Plugin.toString(registered), 'can not be downgraded to', Plugin.toString(plugin));
                        else if (plugin !== registered) Common.warn('Plugin.register:', Plugin.toString(plugin), 'is already registered to different plugin object');
                    } else Plugin._registry[plugin.name] = plugin;
                    return plugin;
                };
                /**
     * Resolves a dependency to a plugin object from the registry if it exists. 
     * The `dependency` may contain a version, but only the name matters when resolving.
     * @method resolve
     * @param dependency {string} The dependency.
     * @return {object} The plugin if resolved, otherwise `undefined`.
     */ Plugin.resolve = function(dependency) {
                    return Plugin._registry[Plugin.dependencyParse(dependency).name];
                };
                /**
     * Returns a pretty printed plugin name and version.
     * @method toString
     * @param plugin {} The plugin.
     * @return {string} Pretty printed plugin name and version.
     */ Plugin.toString = function(plugin) {
                    return typeof plugin === 'string' ? plugin : (plugin.name || 'anonymous') + '@' + (plugin.version || plugin.range || '0.0.0');
                };
                /**
     * Returns `true` if the object meets the minimum standard to be considered a plugin.
     * This means it must define the following properties:
     * - `name`
     * - `version`
     * - `install`
     * @method isPlugin
     * @param obj {} The obj to test.
     * @return {boolean} `true` if the object can be considered a plugin otherwise `false`.
     */ Plugin.isPlugin = function(obj) {
                    return obj && obj.name && obj.version && obj.install;
                };
                /**
     * Returns `true` if a plugin with the given `name` been installed on `module`.
     * @method isUsed
     * @param module {} The module.
     * @param name {string} The plugin name.
     * @return {boolean} `true` if a plugin with the given `name` been installed on `module`, otherwise `false`.
     */ Plugin.isUsed = function(module, name) {
                    return module.used.indexOf(name) > -1;
                };
                /**
     * Returns `true` if `plugin.for` is applicable to `module` by comparing against `module.name` and `module.version`.
     * If `plugin.for` is not specified then it is assumed to be applicable.
     * The value of `plugin.for` is a string of the format `'module-name'` or `'module-name@version'`.
     * @method isFor
     * @param plugin {} The plugin.
     * @param module {} The module.
     * @return {boolean} `true` if `plugin.for` is applicable to `module`, otherwise `false`.
     */ Plugin.isFor = function(plugin, module) {
                    var parsed = plugin.for && Plugin.dependencyParse(plugin.for);
                    return !plugin.for || module.name === parsed.name && Plugin.versionSatisfies(module.version, parsed.range);
                };
                /**
     * Installs the plugins by calling `plugin.install` on each plugin specified in `plugins` if passed, otherwise `module.uses`.
     * For installing plugins on `Matter` see the convenience function `Matter.use`.
     * Plugins may be specified either by their name or a reference to the plugin object.
     * Plugins themselves may specify further dependencies, but each plugin is installed only once.
     * Order is important, a topological sort is performed to find the best resulting order of installation.
     * This sorting attempts to satisfy every dependency's requested ordering, but may not be exact in all cases.
     * This function logs the resulting status of each dependency in the console, along with any warnings.
     * - A green tick ✅ indicates a dependency was resolved and installed.
     * - An orange diamond 🔶 indicates a dependency was resolved but a warning was thrown for it or one if its dependencies.
     * - A red cross ❌ indicates a dependency could not be resolved.
     * Avoid calling this function multiple times on the same module unless you intend to manually control installation order.
     * @method use
     * @param module {} The module install plugins on.
     * @param [plugins=module.uses] {} The plugins to install on module (optional, defaults to `module.uses`).
     */ Plugin.use = function(module, plugins) {
                    module.uses = (module.uses || []).concat(plugins || []);
                    if (module.uses.length === 0) {
                        Common.warn('Plugin.use:', Plugin.toString(module), 'does not specify any dependencies to install.');
                        return;
                    }
                    var dependencies = Plugin.dependencies(module), sortedDependencies = Common.topologicalSort(dependencies), status = [];
                    for(var i = 0; i < sortedDependencies.length; i += 1){
                        if (sortedDependencies[i] === module.name) continue;
                        var plugin = Plugin.resolve(sortedDependencies[i]);
                        if (!plugin) {
                            status.push('❌ ' + sortedDependencies[i]);
                            continue;
                        }
                        if (Plugin.isUsed(module, plugin.name)) continue;
                        if (!Plugin.isFor(plugin, module)) {
                            Common.warn('Plugin.use:', Plugin.toString(plugin), 'is for', plugin.for, 'but installed on', Plugin.toString(module) + '.');
                            plugin._warned = true;
                        }
                        if (plugin.install) plugin.install(module);
                        else {
                            Common.warn('Plugin.use:', Plugin.toString(plugin), 'does not specify an install function.');
                            plugin._warned = true;
                        }
                        if (plugin._warned) {
                            status.push('🔶 ' + Plugin.toString(plugin));
                            delete plugin._warned;
                        } else status.push('✅ ' + Plugin.toString(plugin));
                        module.used.push(plugin.name);
                    }
                    if (status.length > 0) Common.info(status.join('  '));
                };
                /**
     * Recursively finds all of a module's dependencies and returns a flat dependency graph.
     * @method dependencies
     * @param module {} The module.
     * @return {object} A dependency graph.
     */ Plugin.dependencies = function(module, tracked) {
                    var parsedBase = Plugin.dependencyParse(module), name = parsedBase.name;
                    tracked = tracked || {
                    };
                    if (name in tracked) return;
                    module = Plugin.resolve(module) || module;
                    tracked[name] = Common.map(module.uses || [], function(dependency) {
                        if (Plugin.isPlugin(dependency)) Plugin.register(dependency);
                        var parsed = Plugin.dependencyParse(dependency), resolved = Plugin.resolve(dependency);
                        if (resolved && !Plugin.versionSatisfies(resolved.version, parsed.range)) {
                            Common.warn('Plugin.dependencies:', Plugin.toString(resolved), 'does not satisfy', Plugin.toString(parsed), 'used by', Plugin.toString(parsedBase) + '.');
                            resolved._warned = true;
                            module._warned = true;
                        } else if (!resolved) {
                            Common.warn('Plugin.dependencies:', Plugin.toString(dependency), 'used by', Plugin.toString(parsedBase), 'could not be resolved.');
                            module._warned = true;
                        }
                        return parsed.name;
                    });
                    for(var i = 0; i < tracked[name].length; i += 1)Plugin.dependencies(tracked[name][i], tracked);
                    return tracked;
                };
                /**
     * Parses a dependency string into its components.
     * The `dependency` is a string of the format `'module-name'` or `'module-name@version'`.
     * See documentation for `Plugin.versionParse` for a description of the format.
     * This function can also handle dependencies that are already resolved (e.g. a module object).
     * @method dependencyParse
     * @param dependency {string} The dependency of the format `'module-name'` or `'module-name@version'`.
     * @return {object} The dependency parsed into its components.
     */ Plugin.dependencyParse = function(dependency) {
                    if (Common.isString(dependency)) {
                        var pattern = /^[\w-]+(@(\*|[\^~]?\d+\.\d+\.\d+(-[0-9A-Za-z-+]+)?))?$/;
                        if (!pattern.test(dependency)) Common.warn('Plugin.dependencyParse:', dependency, 'is not a valid dependency string.');
                        return {
                            name: dependency.split('@')[0],
                            range: dependency.split('@')[1] || '*'
                        };
                    }
                    return {
                        name: dependency.name,
                        range: dependency.range || dependency.version
                    };
                };
                /**
     * Parses a version string into its components.  
     * Versions are strictly of the format `x.y.z` (as in [semver](http://semver.org/)).
     * Versions may optionally have a prerelease tag in the format `x.y.z-alpha`.
     * Ranges are a strict subset of [npm ranges](https://docs.npmjs.com/misc/semver#advanced-range-syntax).
     * Only the following range types are supported:
     * - Tilde ranges e.g. `~1.2.3`
     * - Caret ranges e.g. `^1.2.3`
     * - Greater than ranges e.g. `>1.2.3`
     * - Greater than or equal ranges e.g. `>=1.2.3`
     * - Exact version e.g. `1.2.3`
     * - Any version `*`
     * @method versionParse
     * @param range {string} The version string.
     * @return {object} The version range parsed into its components.
     */ Plugin.versionParse = function(range) {
                    var pattern = /^(\*)|(\^|~|>=|>)?\s*((\d+)\.(\d+)\.(\d+))(-[0-9A-Za-z-+]+)?$/;
                    if (!pattern.test(range)) Common.warn('Plugin.versionParse:', range, 'is not a valid version or range.');
                    var parts = pattern.exec(range);
                    var major = Number(parts[4]);
                    var minor = Number(parts[5]);
                    var patch = Number(parts[6]);
                    return {
                        isRange: Boolean(parts[1] || parts[2]),
                        version: parts[3],
                        range: range,
                        operator: parts[1] || parts[2] || '',
                        major: major,
                        minor: minor,
                        patch: patch,
                        parts: [
                            major,
                            minor,
                            patch
                        ],
                        prerelease: parts[7],
                        number: major * 100000000 + minor * 10000 + patch
                    };
                };
                /**
     * Returns `true` if `version` satisfies the given `range`.
     * See documentation for `Plugin.versionParse` for a description of the format.
     * If a version or range is not specified, then any version (`*`) is assumed to satisfy.
     * @method versionSatisfies
     * @param version {string} The version string.
     * @param range {string} The range string.
     * @return {boolean} `true` if `version` satisfies `range`, otherwise `false`.
     */ Plugin.versionSatisfies = function(version, range) {
                    range = range || '*';
                    var r = Plugin.versionParse(range), v = Plugin.versionParse(version);
                    if (r.isRange) {
                        if (r.operator === '*' || version === '*') return true;
                        if (r.operator === '>') return v.number > r.number;
                        if (r.operator === '>=') return v.number >= r.number;
                        if (r.operator === '~') return v.major === r.major && v.minor === r.minor && v.patch >= r.patch;
                        if (r.operator === '^') {
                            if (r.major > 0) return v.major === r.major && v.number >= r.number;
                            if (r.minor > 0) return v.minor === r.minor && v.patch >= r.patch;
                            return v.patch === r.patch;
                        }
                    }
                    return version === range || version === '*';
                };
            })();
        /***/ },
        function(module, exports, __webpack_require__) {
            /**
* The `Matter.Render` module is a simple canvas based renderer for visualising instances of `Matter.Engine`.
* It is intended for development and debugging purposes, but may also be suitable for simple games.
* It includes a number of drawing options including wireframe, vector with support for sprites and viewports.
*
* @class Render
*/ var Render = {
            };
            module.exports = Render;
            var Common = __webpack_require__(0);
            var Composite = __webpack_require__(5);
            var Bounds = __webpack_require__(1);
            var Events = __webpack_require__(4);
            var Vector = __webpack_require__(2);
            var Mouse = __webpack_require__(13);
            (function() {
                var _requestAnimationFrame, _cancelAnimationFrame;
                if (typeof window !== 'undefined') {
                    _requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || function(callback) {
                        window.setTimeout(function() {
                            callback(Common.now());
                        }, 1000 / 60);
                    };
                    _cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.msCancelAnimationFrame;
                }
                Render._goodFps = 30;
                Render._goodDelta = 1000 / 60;
                /**
     * Creates a new renderer. The options parameter is an object that specifies any properties you wish to override the defaults.
     * All properties have default values, and many are pre-calculated automatically based on other properties.
     * See the properties section below for detailed information on what you can pass via the `options` object.
     * @method create
     * @param {object} [options]
     * @return {render} A new renderer
     */ Render.create = function(options) {
                    var defaults = {
                        controller: Render,
                        engine: null,
                        element: null,
                        canvas: null,
                        mouse: null,
                        frameRequestId: null,
                        timing: {
                            historySize: 60,
                            delta: 0,
                            deltaHistory: [],
                            lastTime: 0,
                            lastTimestamp: 0,
                            lastElapsed: 0,
                            timestampElapsed: 0,
                            timestampElapsedHistory: [],
                            engineDeltaHistory: [],
                            engineElapsedHistory: [],
                            elapsedHistory: []
                        },
                        options: {
                            width: 800,
                            height: 600,
                            pixelRatio: 1,
                            background: '#14151f',
                            wireframeBackground: '#14151f',
                            hasBounds: !!options.bounds,
                            enabled: true,
                            wireframes: true,
                            showSleeping: true,
                            showDebug: false,
                            showStats: false,
                            showPerformance: false,
                            showBounds: false,
                            showVelocity: false,
                            showCollisions: false,
                            showSeparations: false,
                            showAxes: false,
                            showPositions: false,
                            showAngleIndicator: false,
                            showIds: false,
                            showVertexNumbers: false,
                            showConvexHulls: false,
                            showInternalEdges: false,
                            showMousePosition: false
                        }
                    };
                    var render = Common.extend(defaults, options);
                    if (render.canvas) {
                        render.canvas.width = render.options.width || render.canvas.width;
                        render.canvas.height = render.options.height || render.canvas.height;
                    }
                    render.mouse = options.mouse;
                    render.engine = options.engine;
                    render.canvas = render.canvas || _createCanvas(render.options.width, render.options.height);
                    render.context = render.canvas.getContext('2d');
                    render.textures = {
                    };
                    render.bounds = render.bounds || {
                        min: {
                            x: 0,
                            y: 0
                        },
                        max: {
                            x: render.canvas.width,
                            y: render.canvas.height
                        }
                    };
                    // for temporary back compatibility only
                    render.options.showBroadphase = false;
                    if (render.options.pixelRatio !== 1) Render.setPixelRatio(render, render.options.pixelRatio);
                    if (Common.isElement(render.element)) render.element.appendChild(render.canvas);
                    else if (!render.canvas.parentNode) Common.log('Render.create: options.element was undefined, render.canvas was created but not appended', 'warn');
                    return render;
                };
                /**
     * Continuously updates the render canvas on the `requestAnimationFrame` event.
     * @method run
     * @param {render} render
     */ Render.run = function(render) {
                    (function loop(time) {
                        render.frameRequestId = _requestAnimationFrame(loop);
                        _updateTiming(render, time);
                        Render.world(render, time);
                        if (render.options.showStats || render.options.showDebug) Render.stats(render, render.context, time);
                        if (render.options.showPerformance || render.options.showDebug) Render.performance(render, render.context, time);
                    })();
                };
                /**
     * Ends execution of `Render.run` on the given `render`, by canceling the animation frame request event loop.
     * @method stop
     * @param {render} render
     */ Render.stop = function(render) {
                    _cancelAnimationFrame(render.frameRequestId);
                };
                /**
     * Sets the pixel ratio of the renderer and updates the canvas.
     * To automatically detect the correct ratio, pass the string `'auto'` for `pixelRatio`.
     * @method setPixelRatio
     * @param {render} render
     * @param {number} pixelRatio
     */ Render.setPixelRatio = function(render, pixelRatio) {
                    var options = render.options, canvas = render.canvas;
                    if (pixelRatio === 'auto') pixelRatio = _getPixelRatio(canvas);
                    options.pixelRatio = pixelRatio;
                    canvas.setAttribute('data-pixel-ratio', pixelRatio);
                    canvas.width = options.width * pixelRatio;
                    canvas.height = options.height * pixelRatio;
                    canvas.style.width = options.width + 'px';
                    canvas.style.height = options.height + 'px';
                };
                /**
     * Positions and sizes the viewport around the given object bounds.
     * Objects must have at least one of the following properties:
     * - `object.bounds`
     * - `object.position`
     * - `object.min` and `object.max`
     * - `object.x` and `object.y`
     * @method lookAt
     * @param {render} render
     * @param {object[]} objects
     * @param {vector} [padding]
     * @param {bool} [center=true]
     */ Render.lookAt = function(render, objects, padding, center) {
                    center = typeof center !== 'undefined' ? center : true;
                    objects = Common.isArray(objects) ? objects : [
                        objects
                    ];
                    padding = padding || {
                        x: 0,
                        y: 0
                    };
                    // find bounds of all objects
                    var bounds = {
                        min: {
                            x: Infinity,
                            y: Infinity
                        },
                        max: {
                            x: -Infinity,
                            y: -Infinity
                        }
                    };
                    for(var i = 0; i < objects.length; i += 1){
                        var object = objects[i], min = object.bounds ? object.bounds.min : object.min || object.position || object, max = object.bounds ? object.bounds.max : object.max || object.position || object;
                        if (min && max) {
                            if (min.x < bounds.min.x) bounds.min.x = min.x;
                            if (max.x > bounds.max.x) bounds.max.x = max.x;
                            if (min.y < bounds.min.y) bounds.min.y = min.y;
                            if (max.y > bounds.max.y) bounds.max.y = max.y;
                        }
                    }
                    // find ratios
                    var width = bounds.max.x - bounds.min.x + 2 * padding.x, height = bounds.max.y - bounds.min.y + 2 * padding.y, viewHeight = render.canvas.height, viewWidth = render.canvas.width, outerRatio = viewWidth / viewHeight, innerRatio = width / height, scaleX = 1, scaleY = 1;
                    // find scale factor
                    if (innerRatio > outerRatio) scaleY = innerRatio / outerRatio;
                    else scaleX = outerRatio / innerRatio;
                    // enable bounds
                    render.options.hasBounds = true;
                    // position and size
                    render.bounds.min.x = bounds.min.x;
                    render.bounds.max.x = bounds.min.x + width * scaleX;
                    render.bounds.min.y = bounds.min.y;
                    render.bounds.max.y = bounds.min.y + height * scaleY;
                    // center
                    if (center) {
                        render.bounds.min.x += width * 0.5 - width * scaleX * 0.5;
                        render.bounds.max.x += width * 0.5 - width * scaleX * 0.5;
                        render.bounds.min.y += height * 0.5 - height * scaleY * 0.5;
                        render.bounds.max.y += height * 0.5 - height * scaleY * 0.5;
                    }
                    // padding
                    render.bounds.min.x -= padding.x;
                    render.bounds.max.x -= padding.x;
                    render.bounds.min.y -= padding.y;
                    render.bounds.max.y -= padding.y;
                    // update mouse
                    if (render.mouse) {
                        Mouse.setScale(render.mouse, {
                            x: (render.bounds.max.x - render.bounds.min.x) / render.canvas.width,
                            y: (render.bounds.max.y - render.bounds.min.y) / render.canvas.height
                        });
                        Mouse.setOffset(render.mouse, render.bounds.min);
                    }
                };
                /**
     * Applies viewport transforms based on `render.bounds` to a render context.
     * @method startViewTransform
     * @param {render} render
     */ Render.startViewTransform = function(render) {
                    var boundsWidth = render.bounds.max.x - render.bounds.min.x, boundsHeight = render.bounds.max.y - render.bounds.min.y, boundsScaleX = boundsWidth / render.options.width, boundsScaleY = boundsHeight / render.options.height;
                    render.context.setTransform(render.options.pixelRatio / boundsScaleX, 0, 0, render.options.pixelRatio / boundsScaleY, 0, 0);
                    render.context.translate(-render.bounds.min.x, -render.bounds.min.y);
                };
                /**
     * Resets all transforms on the render context.
     * @method endViewTransform
     * @param {render} render
     */ Render.endViewTransform = function(render) {
                    render.context.setTransform(render.options.pixelRatio, 0, 0, render.options.pixelRatio, 0, 0);
                };
                /**
     * Renders the given `engine`'s `Matter.World` object.
     * This is the entry point for all rendering and should be called every time the scene changes.
     * @method world
     * @param {render} render
     */ Render.world = function(render, time) {
                    var startTime = Common.now(), engine = render.engine, world = engine.world, canvas = render.canvas, context = render.context, options = render.options, timing = render.timing;
                    var allBodies = Composite.allBodies(world), allConstraints = Composite.allConstraints(world), background = options.wireframes ? options.wireframeBackground : options.background, bodies = [], constraints = [], i;
                    var event = {
                        timestamp: engine.timing.timestamp
                    };
                    Events.trigger(render, 'beforeRender', event);
                    // apply background if it has changed
                    if (render.currentBackground !== background) _applyBackground(render, background);
                    // clear the canvas with a transparent fill, to allow the canvas background to show
                    context.globalCompositeOperation = 'source-in';
                    context.fillStyle = "transparent";
                    context.fillRect(0, 0, canvas.width, canvas.height);
                    context.globalCompositeOperation = 'source-over';
                    // handle bounds
                    if (options.hasBounds) {
                        // filter out bodies that are not in view
                        for(i = 0; i < allBodies.length; i++){
                            var body = allBodies[i];
                            if (Bounds.overlaps(body.bounds, render.bounds)) bodies.push(body);
                        }
                        // filter out constraints that are not in view
                        for(i = 0; i < allConstraints.length; i++){
                            var constraint = allConstraints[i], bodyA = constraint.bodyA, bodyB = constraint.bodyB, pointAWorld = constraint.pointA, pointBWorld = constraint.pointB;
                            if (bodyA) pointAWorld = Vector.add(bodyA.position, constraint.pointA);
                            if (bodyB) pointBWorld = Vector.add(bodyB.position, constraint.pointB);
                            if (!pointAWorld || !pointBWorld) continue;
                            if (Bounds.contains(render.bounds, pointAWorld) || Bounds.contains(render.bounds, pointBWorld)) constraints.push(constraint);
                        }
                        // transform the view
                        Render.startViewTransform(render);
                        // update mouse
                        if (render.mouse) {
                            Mouse.setScale(render.mouse, {
                                x: (render.bounds.max.x - render.bounds.min.x) / render.options.width,
                                y: (render.bounds.max.y - render.bounds.min.y) / render.options.height
                            });
                            Mouse.setOffset(render.mouse, render.bounds.min);
                        }
                    } else {
                        constraints = allConstraints;
                        bodies = allBodies;
                        if (render.options.pixelRatio !== 1) render.context.setTransform(render.options.pixelRatio, 0, 0, render.options.pixelRatio, 0, 0);
                    }
                    if (!options.wireframes || engine.enableSleeping && options.showSleeping) // fully featured rendering of bodies
                    Render.bodies(render, bodies, context);
                    else {
                        if (options.showConvexHulls) Render.bodyConvexHulls(render, bodies, context);
                        // optimised method for wireframes only
                        Render.bodyWireframes(render, bodies, context);
                    }
                    if (options.showBounds) Render.bodyBounds(render, bodies, context);
                    if (options.showAxes || options.showAngleIndicator) Render.bodyAxes(render, bodies, context);
                    if (options.showPositions) Render.bodyPositions(render, bodies, context);
                    if (options.showVelocity) Render.bodyVelocity(render, bodies, context);
                    if (options.showIds) Render.bodyIds(render, bodies, context);
                    if (options.showSeparations) Render.separations(render, engine.pairs.list, context);
                    if (options.showCollisions) Render.collisions(render, engine.pairs.list, context);
                    if (options.showVertexNumbers) Render.vertexNumbers(render, bodies, context);
                    if (options.showMousePosition) Render.mousePosition(render, render.mouse, context);
                    Render.constraints(constraints, context);
                    if (options.hasBounds) // revert view transforms
                    Render.endViewTransform(render);
                    Events.trigger(render, 'afterRender', event);
                    // log the time elapsed computing this update
                    timing.lastElapsed = Common.now() - startTime;
                };
                /**
     * Renders statistics about the engine and world useful for debugging.
     * @private
     * @method stats
     * @param {render} render
     * @param {RenderingContext} context
     * @param {Number} time
     */ Render.stats = function(render, context, time) {
                    var engine = render.engine, world = engine.world, bodies = Composite.allBodies(world), parts = 0, width = 55, height = 44, x = 0, y = 0;
                    // count parts
                    for(var i = 0; i < bodies.length; i += 1)parts += bodies[i].parts.length;
                    // sections
                    var sections = {
                        'Part': parts,
                        'Body': bodies.length,
                        'Cons': Composite.allConstraints(world).length,
                        'Comp': Composite.allComposites(world).length,
                        'Pair': engine.pairs.list.length
                    };
                    // background
                    context.fillStyle = '#0e0f19';
                    context.fillRect(x, y, width * 5.5, height);
                    context.font = '12px Arial';
                    context.textBaseline = 'top';
                    context.textAlign = 'right';
                    // sections
                    for(var key in sections){
                        var section = sections[key];
                        // label
                        context.fillStyle = '#aaa';
                        context.fillText(key, x + width, y + 8);
                        // value
                        context.fillStyle = '#eee';
                        context.fillText(section, x + width, y + 26);
                        x += width;
                    }
                };
                /**
     * Renders engine and render performance information.
     * @private
     * @method performance
     * @param {render} render
     * @param {RenderingContext} context
     */ Render.performance = function(render, context) {
                    var engine = render.engine, timing = render.timing, deltaHistory = timing.deltaHistory, elapsedHistory = timing.elapsedHistory, timestampElapsedHistory = timing.timestampElapsedHistory, engineDeltaHistory = timing.engineDeltaHistory, engineElapsedHistory = timing.engineElapsedHistory, lastEngineDelta = engine.timing.lastDelta;
                    var deltaMean = _mean(deltaHistory), elapsedMean = _mean(elapsedHistory), engineDeltaMean = _mean(engineDeltaHistory), engineElapsedMean = _mean(engineElapsedHistory), timestampElapsedMean = _mean(timestampElapsedHistory), rateMean = timestampElapsedMean / deltaMean || 0, fps = 1000 / deltaMean || 0;
                    var graphHeight = 4, gap = 12, width = 60, height = 34, x = 10, y = 69;
                    // background
                    context.fillStyle = '#0e0f19';
                    context.fillRect(0, 50, gap * 4 + width * 5 + 22, height);
                    // show FPS
                    Render.status(context, x, y, width, graphHeight, deltaHistory.length, Math.round(fps) + ' fps', fps / Render._goodFps, function(i) {
                        return deltaHistory[i] / deltaMean - 1;
                    });
                    // show engine delta
                    Render.status(context, x + gap + width, y, width, graphHeight, engineDeltaHistory.length, lastEngineDelta.toFixed(2) + ' dt', Render._goodDelta / lastEngineDelta, function(i) {
                        return engineDeltaHistory[i] / engineDeltaMean - 1;
                    });
                    // show engine update time
                    Render.status(context, x + (gap + width) * 2, y, width, graphHeight, engineElapsedHistory.length, engineElapsedMean.toFixed(2) + ' ut', 1 - engineElapsedMean / Render._goodFps, function(i) {
                        return engineElapsedHistory[i] / engineElapsedMean - 1;
                    });
                    // show render time
                    Render.status(context, x + (gap + width) * 3, y, width, graphHeight, elapsedHistory.length, elapsedMean.toFixed(2) + ' rt', 1 - elapsedMean / Render._goodFps, function(i) {
                        return elapsedHistory[i] / elapsedMean - 1;
                    });
                    // show effective speed
                    Render.status(context, x + (gap + width) * 4, y, width, graphHeight, timestampElapsedHistory.length, rateMean.toFixed(2) + ' x', rateMean * rateMean * rateMean, function(i) {
                        return (timestampElapsedHistory[i] / deltaHistory[i] / rateMean || 0) - 1;
                    });
                };
                /**
     * Renders a label, indicator and a chart.
     * @private
     * @method status
     * @param {RenderingContext} context
     * @param {number} x
     * @param {number} y
     * @param {number} width
     * @param {number} height
     * @param {number} count
     * @param {string} label
     * @param {string} indicator
     * @param {function} plotY
     */ Render.status = function(context, x, y, width, height, count, label, indicator, plotY) {
                    // background
                    context.strokeStyle = '#888';
                    context.fillStyle = '#444';
                    context.lineWidth = 1;
                    context.fillRect(x, y + 7, width, 1);
                    // chart
                    context.beginPath();
                    context.moveTo(x, y + 7 - height * Common.clamp(0.4 * plotY(0), -2, 2));
                    for(var i = 0; i < width; i += 1)context.lineTo(x + i, y + 7 - (i < count ? height * Common.clamp(0.4 * plotY(i), -2, 2) : 0));
                    context.stroke();
                    // indicator
                    context.fillStyle = 'hsl(' + Common.clamp(25 + 95 * indicator, 0, 120) + ',100%,60%)';
                    context.fillRect(x, y - 7, 4, 4);
                    // label
                    context.font = '12px Arial';
                    context.textBaseline = 'middle';
                    context.textAlign = 'right';
                    context.fillStyle = '#eee';
                    context.fillText(label, x + width, y - 5);
                };
                /**
     * Description
     * @private
     * @method constraints
     * @param {constraint[]} constraints
     * @param {RenderingContext} context
     */ Render.constraints = function(constraints, context) {
                    var c = context;
                    for(var i = 0; i < constraints.length; i++){
                        var constraint = constraints[i];
                        if (!constraint.render.visible || !constraint.pointA || !constraint.pointB) continue;
                        var bodyA = constraint.bodyA, bodyB = constraint.bodyB, start, end;
                        if (bodyA) start = Vector.add(bodyA.position, constraint.pointA);
                        else start = constraint.pointA;
                        if (constraint.render.type === 'pin') {
                            c.beginPath();
                            c.arc(start.x, start.y, 3, 0, 2 * Math.PI);
                            c.closePath();
                        } else {
                            if (bodyB) end = Vector.add(bodyB.position, constraint.pointB);
                            else end = constraint.pointB;
                            c.beginPath();
                            c.moveTo(start.x, start.y);
                            if (constraint.render.type === 'spring') {
                                var delta = Vector.sub(end, start), normal = Vector.perp(Vector.normalise(delta)), coils = Math.ceil(Common.clamp(constraint.length / 5, 12, 20)), offset;
                                for(var j = 1; j < coils; j += 1){
                                    offset = j % 2 === 0 ? 1 : -1;
                                    c.lineTo(start.x + delta.x * (j / coils) + normal.x * offset * 4, start.y + delta.y * (j / coils) + normal.y * offset * 4);
                                }
                            }
                            c.lineTo(end.x, end.y);
                        }
                        if (constraint.render.lineWidth) {
                            c.lineWidth = constraint.render.lineWidth;
                            c.strokeStyle = constraint.render.strokeStyle;
                            c.stroke();
                        }
                        if (constraint.render.anchors) {
                            c.fillStyle = constraint.render.strokeStyle;
                            c.beginPath();
                            c.arc(start.x, start.y, 3, 0, 2 * Math.PI);
                            c.arc(end.x, end.y, 3, 0, 2 * Math.PI);
                            c.closePath();
                            c.fill();
                        }
                    }
                };
                /**
     * Description
     * @private
     * @method bodies
     * @param {render} render
     * @param {body[]} bodies
     * @param {RenderingContext} context
     */ Render.bodies = function(render, bodies, context) {
                    var c = context, engine = render.engine, options = render.options, showInternalEdges = options.showInternalEdges || !options.wireframes, body, part, i, k;
                    for(i = 0; i < bodies.length; i++){
                        body = bodies[i];
                        if (!body.render.visible) continue;
                        // handle compound parts
                        for(k = body.parts.length > 1 ? 1 : 0; k < body.parts.length; k++){
                            part = body.parts[k];
                            if (!part.render.visible) continue;
                            if (options.showSleeping && body.isSleeping) c.globalAlpha = 0.5 * part.render.opacity;
                            else if (part.render.opacity !== 1) c.globalAlpha = part.render.opacity;
                            if (part.render.sprite && part.render.sprite.texture && !options.wireframes) {
                                // part sprite
                                var sprite = part.render.sprite, texture = _getTexture(render, sprite.texture);
                                c.translate(part.position.x, part.position.y);
                                c.rotate(part.angle);
                                c.drawImage(texture, texture.width * -sprite.xOffset * sprite.xScale, texture.height * -sprite.yOffset * sprite.yScale, texture.width * sprite.xScale, texture.height * sprite.yScale);
                                // revert translation, hopefully faster than save / restore
                                c.rotate(-part.angle);
                                c.translate(-part.position.x, -part.position.y);
                            } else {
                                // part polygon
                                if (part.circleRadius) {
                                    c.beginPath();
                                    c.arc(part.position.x, part.position.y, part.circleRadius, 0, 2 * Math.PI);
                                } else {
                                    c.beginPath();
                                    c.moveTo(part.vertices[0].x, part.vertices[0].y);
                                    for(var j = 1; j < part.vertices.length; j++){
                                        if (!part.vertices[j - 1].isInternal || showInternalEdges) c.lineTo(part.vertices[j].x, part.vertices[j].y);
                                        else c.moveTo(part.vertices[j].x, part.vertices[j].y);
                                        if (part.vertices[j].isInternal && !showInternalEdges) c.moveTo(part.vertices[(j + 1) % part.vertices.length].x, part.vertices[(j + 1) % part.vertices.length].y);
                                    }
                                    c.lineTo(part.vertices[0].x, part.vertices[0].y);
                                    c.closePath();
                                }
                                if (!options.wireframes) {
                                    c.fillStyle = part.render.fillStyle;
                                    if (part.render.lineWidth) {
                                        c.lineWidth = part.render.lineWidth;
                                        c.strokeStyle = part.render.strokeStyle;
                                        c.stroke();
                                    }
                                    c.fill();
                                } else {
                                    c.lineWidth = 1;
                                    c.strokeStyle = '#bbb';
                                    c.stroke();
                                }
                            }
                            c.globalAlpha = 1;
                        }
                    }
                };
                /**
     * Optimised method for drawing body wireframes in one pass
     * @private
     * @method bodyWireframes
     * @param {render} render
     * @param {body[]} bodies
     * @param {RenderingContext} context
     */ Render.bodyWireframes = function(render, bodies, context) {
                    var c = context, showInternalEdges = render.options.showInternalEdges, body, part, i, j, k;
                    c.beginPath();
                    // render all bodies
                    for(i = 0; i < bodies.length; i++){
                        body = bodies[i];
                        if (!body.render.visible) continue;
                        // handle compound parts
                        for(k = body.parts.length > 1 ? 1 : 0; k < body.parts.length; k++){
                            part = body.parts[k];
                            c.moveTo(part.vertices[0].x, part.vertices[0].y);
                            for(j = 1; j < part.vertices.length; j++){
                                if (!part.vertices[j - 1].isInternal || showInternalEdges) c.lineTo(part.vertices[j].x, part.vertices[j].y);
                                else c.moveTo(part.vertices[j].x, part.vertices[j].y);
                                if (part.vertices[j].isInternal && !showInternalEdges) c.moveTo(part.vertices[(j + 1) % part.vertices.length].x, part.vertices[(j + 1) % part.vertices.length].y);
                            }
                            c.lineTo(part.vertices[0].x, part.vertices[0].y);
                        }
                    }
                    c.lineWidth = 1;
                    c.strokeStyle = '#bbb';
                    c.stroke();
                };
                /**
     * Optimised method for drawing body convex hull wireframes in one pass
     * @private
     * @method bodyConvexHulls
     * @param {render} render
     * @param {body[]} bodies
     * @param {RenderingContext} context
     */ Render.bodyConvexHulls = function(render, bodies, context) {
                    var c = context, body, part, i, j, k;
                    c.beginPath();
                    // render convex hulls
                    for(i = 0; i < bodies.length; i++){
                        body = bodies[i];
                        if (!body.render.visible || body.parts.length === 1) continue;
                        c.moveTo(body.vertices[0].x, body.vertices[0].y);
                        for(j = 1; j < body.vertices.length; j++)c.lineTo(body.vertices[j].x, body.vertices[j].y);
                        c.lineTo(body.vertices[0].x, body.vertices[0].y);
                    }
                    c.lineWidth = 1;
                    c.strokeStyle = 'rgba(255,255,255,0.2)';
                    c.stroke();
                };
                /**
     * Renders body vertex numbers.
     * @private
     * @method vertexNumbers
     * @param {render} render
     * @param {body[]} bodies
     * @param {RenderingContext} context
     */ Render.vertexNumbers = function(render, bodies, context) {
                    var c = context, i, j, k;
                    for(i = 0; i < bodies.length; i++){
                        var parts = bodies[i].parts;
                        for(k = parts.length > 1 ? 1 : 0; k < parts.length; k++){
                            var part = parts[k];
                            for(j = 0; j < part.vertices.length; j++){
                                c.fillStyle = 'rgba(255,255,255,0.2)';
                                c.fillText(i + '_' + j, part.position.x + (part.vertices[j].x - part.position.x) * 0.8, part.position.y + (part.vertices[j].y - part.position.y) * 0.8);
                            }
                        }
                    }
                };
                /**
     * Renders mouse position.
     * @private
     * @method mousePosition
     * @param {render} render
     * @param {mouse} mouse
     * @param {RenderingContext} context
     */ Render.mousePosition = function(render, mouse, context) {
                    var c = context;
                    c.fillStyle = 'rgba(255,255,255,0.8)';
                    c.fillText(mouse.position.x + '  ' + mouse.position.y, mouse.position.x + 5, mouse.position.y - 5);
                };
                /**
     * Draws body bounds
     * @private
     * @method bodyBounds
     * @param {render} render
     * @param {body[]} bodies
     * @param {RenderingContext} context
     */ Render.bodyBounds = function(render, bodies, context) {
                    var c = context, engine = render.engine, options = render.options;
                    c.beginPath();
                    for(var i = 0; i < bodies.length; i++){
                        var body = bodies[i];
                        if (body.render.visible) {
                            var parts = bodies[i].parts;
                            for(var j = parts.length > 1 ? 1 : 0; j < parts.length; j++){
                                var part = parts[j];
                                c.rect(part.bounds.min.x, part.bounds.min.y, part.bounds.max.x - part.bounds.min.x, part.bounds.max.y - part.bounds.min.y);
                            }
                        }
                    }
                    if (options.wireframes) c.strokeStyle = 'rgba(255,255,255,0.08)';
                    else c.strokeStyle = 'rgba(0,0,0,0.1)';
                    c.lineWidth = 1;
                    c.stroke();
                };
                /**
     * Draws body angle indicators and axes
     * @private
     * @method bodyAxes
     * @param {render} render
     * @param {body[]} bodies
     * @param {RenderingContext} context
     */ Render.bodyAxes = function(render, bodies, context) {
                    var c = context, engine = render.engine, options = render.options, part, i, j, k;
                    c.beginPath();
                    for(i = 0; i < bodies.length; i++){
                        var body = bodies[i], parts = body.parts;
                        if (!body.render.visible) continue;
                        if (options.showAxes) // render all axes
                        for(j = parts.length > 1 ? 1 : 0; j < parts.length; j++){
                            part = parts[j];
                            for(k = 0; k < part.axes.length; k++){
                                var axis = part.axes[k];
                                c.moveTo(part.position.x, part.position.y);
                                c.lineTo(part.position.x + axis.x * 20, part.position.y + axis.y * 20);
                            }
                        }
                        else for(j = parts.length > 1 ? 1 : 0; j < parts.length; j++){
                            part = parts[j];
                            for(k = 0; k < part.axes.length; k++){
                                // render a single axis indicator
                                c.moveTo(part.position.x, part.position.y);
                                c.lineTo((part.vertices[0].x + part.vertices[part.vertices.length - 1].x) / 2, (part.vertices[0].y + part.vertices[part.vertices.length - 1].y) / 2);
                            }
                        }
                    }
                    if (options.wireframes) {
                        c.strokeStyle = 'indianred';
                        c.lineWidth = 1;
                    } else {
                        c.strokeStyle = 'rgba(255, 255, 255, 0.4)';
                        c.globalCompositeOperation = 'overlay';
                        c.lineWidth = 2;
                    }
                    c.stroke();
                    c.globalCompositeOperation = 'source-over';
                };
                /**
     * Draws body positions
     * @private
     * @method bodyPositions
     * @param {render} render
     * @param {body[]} bodies
     * @param {RenderingContext} context
     */ Render.bodyPositions = function(render, bodies, context) {
                    var c = context, engine = render.engine, options = render.options, body, part, i, k;
                    c.beginPath();
                    // render current positions
                    for(i = 0; i < bodies.length; i++){
                        body = bodies[i];
                        if (!body.render.visible) continue;
                        // handle compound parts
                        for(k = 0; k < body.parts.length; k++){
                            part = body.parts[k];
                            c.arc(part.position.x, part.position.y, 3, 0, 2 * Math.PI, false);
                            c.closePath();
                        }
                    }
                    if (options.wireframes) c.fillStyle = 'indianred';
                    else c.fillStyle = 'rgba(0,0,0,0.5)';
                    c.fill();
                    c.beginPath();
                    // render previous positions
                    for(i = 0; i < bodies.length; i++){
                        body = bodies[i];
                        if (body.render.visible) {
                            c.arc(body.positionPrev.x, body.positionPrev.y, 2, 0, 2 * Math.PI, false);
                            c.closePath();
                        }
                    }
                    c.fillStyle = 'rgba(255,165,0,0.8)';
                    c.fill();
                };
                /**
     * Draws body velocity
     * @private
     * @method bodyVelocity
     * @param {render} render
     * @param {body[]} bodies
     * @param {RenderingContext} context
     */ Render.bodyVelocity = function(render, bodies, context) {
                    var c = context;
                    c.beginPath();
                    for(var i = 0; i < bodies.length; i++){
                        var body = bodies[i];
                        if (!body.render.visible) continue;
                        c.moveTo(body.position.x, body.position.y);
                        c.lineTo(body.position.x + (body.position.x - body.positionPrev.x) * 2, body.position.y + (body.position.y - body.positionPrev.y) * 2);
                    }
                    c.lineWidth = 3;
                    c.strokeStyle = 'cornflowerblue';
                    c.stroke();
                };
                /**
     * Draws body ids
     * @private
     * @method bodyIds
     * @param {render} render
     * @param {body[]} bodies
     * @param {RenderingContext} context
     */ Render.bodyIds = function(render, bodies, context) {
                    var c = context, i, j;
                    for(i = 0; i < bodies.length; i++){
                        if (!bodies[i].render.visible) continue;
                        var parts = bodies[i].parts;
                        for(j = parts.length > 1 ? 1 : 0; j < parts.length; j++){
                            var part = parts[j];
                            c.font = "12px Arial";
                            c.fillStyle = 'rgba(255,255,255,0.5)';
                            c.fillText(part.id, part.position.x + 10, part.position.y - 10);
                        }
                    }
                };
                /**
     * Description
     * @private
     * @method collisions
     * @param {render} render
     * @param {pair[]} pairs
     * @param {RenderingContext} context
     */ Render.collisions = function(render, pairs, context) {
                    var c = context, options = render.options, pair, collision, corrected, bodyA, bodyB, i, j;
                    c.beginPath();
                    // render collision positions
                    for(i = 0; i < pairs.length; i++){
                        pair = pairs[i];
                        if (!pair.isActive) continue;
                        collision = pair.collision;
                        for(j = 0; j < pair.activeContacts.length; j++){
                            var contact = pair.activeContacts[j], vertex = contact.vertex;
                            c.rect(vertex.x - 1.5, vertex.y - 1.5, 3.5, 3.5);
                        }
                    }
                    if (options.wireframes) c.fillStyle = 'rgba(255,255,255,0.7)';
                    else c.fillStyle = 'orange';
                    c.fill();
                    c.beginPath();
                    // render collision normals
                    for(i = 0; i < pairs.length; i++){
                        pair = pairs[i];
                        if (!pair.isActive) continue;
                        collision = pair.collision;
                        if (pair.activeContacts.length > 0) {
                            var normalPosX = pair.activeContacts[0].vertex.x, normalPosY = pair.activeContacts[0].vertex.y;
                            if (pair.activeContacts.length === 2) {
                                normalPosX = (pair.activeContacts[0].vertex.x + pair.activeContacts[1].vertex.x) / 2;
                                normalPosY = (pair.activeContacts[0].vertex.y + pair.activeContacts[1].vertex.y) / 2;
                            }
                            if (collision.bodyB === collision.supports[0].body || collision.bodyA.isStatic === true) c.moveTo(normalPosX - collision.normal.x * 8, normalPosY - collision.normal.y * 8);
                            else c.moveTo(normalPosX + collision.normal.x * 8, normalPosY + collision.normal.y * 8);
                            c.lineTo(normalPosX, normalPosY);
                        }
                    }
                    if (options.wireframes) c.strokeStyle = 'rgba(255,165,0,0.7)';
                    else c.strokeStyle = 'orange';
                    c.lineWidth = 1;
                    c.stroke();
                };
                /**
     * Description
     * @private
     * @method separations
     * @param {render} render
     * @param {pair[]} pairs
     * @param {RenderingContext} context
     */ Render.separations = function(render, pairs, context) {
                    var c = context, options = render.options, pair, collision, corrected, bodyA, bodyB, i, j;
                    c.beginPath();
                    // render separations
                    for(i = 0; i < pairs.length; i++){
                        pair = pairs[i];
                        if (!pair.isActive) continue;
                        collision = pair.collision;
                        bodyA = collision.bodyA;
                        bodyB = collision.bodyB;
                        var k = 1;
                        if (!bodyB.isStatic && !bodyA.isStatic) k = 0.5;
                        if (bodyB.isStatic) k = 0;
                        c.moveTo(bodyB.position.x, bodyB.position.y);
                        c.lineTo(bodyB.position.x - collision.penetration.x * k, bodyB.position.y - collision.penetration.y * k);
                        k = 1;
                        if (!bodyB.isStatic && !bodyA.isStatic) k = 0.5;
                        if (bodyA.isStatic) k = 0;
                        c.moveTo(bodyA.position.x, bodyA.position.y);
                        c.lineTo(bodyA.position.x + collision.penetration.x * k, bodyA.position.y + collision.penetration.y * k);
                    }
                    if (options.wireframes) c.strokeStyle = 'rgba(255,165,0,0.5)';
                    else c.strokeStyle = 'orange';
                    c.stroke();
                };
                /**
     * Description
     * @private
     * @method inspector
     * @param {inspector} inspector
     * @param {RenderingContext} context
     */ Render.inspector = function(inspector, context) {
                    var engine = inspector.engine, selected = inspector.selected, render = inspector.render, options = render.options, bounds;
                    if (options.hasBounds) {
                        var boundsWidth = render.bounds.max.x - render.bounds.min.x, boundsHeight = render.bounds.max.y - render.bounds.min.y, boundsScaleX = boundsWidth / render.options.width, boundsScaleY = boundsHeight / render.options.height;
                        context.scale(1 / boundsScaleX, 1 / boundsScaleY);
                        context.translate(-render.bounds.min.x, -render.bounds.min.y);
                    }
                    for(var i = 0; i < selected.length; i++){
                        var item = selected[i].data;
                        context.translate(0.5, 0.5);
                        context.lineWidth = 1;
                        context.strokeStyle = 'rgba(255,165,0,0.9)';
                        context.setLineDash([
                            1,
                            2
                        ]);
                        switch(item.type){
                            case 'body':
                                // render body selections
                                bounds = item.bounds;
                                context.beginPath();
                                context.rect(Math.floor(bounds.min.x - 3), Math.floor(bounds.min.y - 3), Math.floor(bounds.max.x - bounds.min.x + 6), Math.floor(bounds.max.y - bounds.min.y + 6));
                                context.closePath();
                                context.stroke();
                                break;
                            case 'constraint':
                                // render constraint selections
                                var point = item.pointA;
                                if (item.bodyA) point = item.pointB;
                                context.beginPath();
                                context.arc(point.x, point.y, 10, 0, 2 * Math.PI);
                                context.closePath();
                                context.stroke();
                                break;
                        }
                        context.setLineDash([]);
                        context.translate(-0.5, -0.5);
                    }
                    // render selection region
                    if (inspector.selectStart !== null) {
                        context.translate(0.5, 0.5);
                        context.lineWidth = 1;
                        context.strokeStyle = 'rgba(255,165,0,0.6)';
                        context.fillStyle = 'rgba(255,165,0,0.1)';
                        bounds = inspector.selectBounds;
                        context.beginPath();
                        context.rect(Math.floor(bounds.min.x), Math.floor(bounds.min.y), Math.floor(bounds.max.x - bounds.min.x), Math.floor(bounds.max.y - bounds.min.y));
                        context.closePath();
                        context.stroke();
                        context.fill();
                        context.translate(-0.5, -0.5);
                    }
                    if (options.hasBounds) context.setTransform(1, 0, 0, 1, 0, 0);
                };
                /**
     * Updates render timing.
     * @method _updateTiming
     * @private
     * @param {render} render
     * @param {number} time
     */ var _updateTiming = function(render, time) {
                    var engine = render.engine, timing = render.timing, historySize = timing.historySize, timestamp = engine.timing.timestamp;
                    timing.delta = time - timing.lastTime || Render._goodDelta;
                    timing.lastTime = time;
                    timing.timestampElapsed = timestamp - timing.lastTimestamp || 0;
                    timing.lastTimestamp = timestamp;
                    timing.deltaHistory.unshift(timing.delta);
                    timing.deltaHistory.length = Math.min(timing.deltaHistory.length, historySize);
                    timing.engineDeltaHistory.unshift(engine.timing.lastDelta);
                    timing.engineDeltaHistory.length = Math.min(timing.engineDeltaHistory.length, historySize);
                    timing.timestampElapsedHistory.unshift(timing.timestampElapsed);
                    timing.timestampElapsedHistory.length = Math.min(timing.timestampElapsedHistory.length, historySize);
                    timing.engineElapsedHistory.unshift(engine.timing.lastElapsed);
                    timing.engineElapsedHistory.length = Math.min(timing.engineElapsedHistory.length, historySize);
                    timing.elapsedHistory.unshift(timing.lastElapsed);
                    timing.elapsedHistory.length = Math.min(timing.elapsedHistory.length, historySize);
                };
                /**
     * Returns the mean value of the given numbers.
     * @method _mean
     * @private
     * @param {Number[]} values
     * @return {Number} the mean of given values
     */ var _mean = function(values) {
                    var result = 0;
                    for(var i = 0; i < values.length; i += 1)result += values[i];
                    return result / values.length || 0;
                };
                /**
     * @method _createCanvas
     * @private
     * @param {} width
     * @param {} height
     * @return canvas
     */ var _createCanvas = function(width, height) {
                    var canvas = document.createElement('canvas');
                    canvas.width = width;
                    canvas.height = height;
                    canvas.oncontextmenu = function() {
                        return false;
                    };
                    canvas.onselectstart = function() {
                        return false;
                    };
                    return canvas;
                };
                /**
     * Gets the pixel ratio of the canvas.
     * @method _getPixelRatio
     * @private
     * @param {HTMLElement} canvas
     * @return {Number} pixel ratio
     */ var _getPixelRatio = function(canvas) {
                    var context = canvas.getContext('2d'), devicePixelRatio = window.devicePixelRatio || 1, backingStorePixelRatio = context.webkitBackingStorePixelRatio || context.mozBackingStorePixelRatio || context.msBackingStorePixelRatio || context.oBackingStorePixelRatio || context.backingStorePixelRatio || 1;
                    return devicePixelRatio / backingStorePixelRatio;
                };
                /**
     * Gets the requested texture (an Image) via its path
     * @method _getTexture
     * @private
     * @param {render} render
     * @param {string} imagePath
     * @return {Image} texture
     */ var _getTexture = function(render, imagePath) {
                    var image = render.textures[imagePath];
                    if (image) return image;
                    image = render.textures[imagePath] = new Image();
                    image.src = imagePath;
                    return image;
                };
                /**
     * Applies the background to the canvas using CSS.
     * @method applyBackground
     * @private
     * @param {render} render
     * @param {string} background
     */ var _applyBackground = function(render, background) {
                    var cssBackground = background;
                    if (/(jpg|gif|png)$/.test(background)) cssBackground = 'url(' + background + ')';
                    render.canvas.style.background = cssBackground;
                    render.canvas.style.backgroundSize = "contain";
                    render.currentBackground = background;
                };
            /*
    *
    *  Events Documentation
    *
    */ /**
    * Fired before rendering
    *
    * @event beforeRender
    * @param {} event An event object
    * @param {number} event.timestamp The engine.timing.timestamp of the event
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */ /**
    * Fired after rendering
    *
    * @event afterRender
    * @param {} event An event object
    * @param {number} event.timestamp The engine.timing.timestamp of the event
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */ /*
    *
    *  Properties Documentation
    *
    */ /**
     * A back-reference to the `Matter.Render` module.
     *
     * @property controller
     * @type render
     */ /**
     * A reference to the `Matter.Engine` instance to be used.
     *
     * @property engine
     * @type engine
     */ /**
     * A reference to the element where the canvas is to be inserted (if `render.canvas` has not been specified)
     *
     * @property element
     * @type HTMLElement
     * @default null
     */ /**
     * The canvas element to render to. If not specified, one will be created if `render.element` has been specified.
     *
     * @property canvas
     * @type HTMLCanvasElement
     * @default null
     */ /**
     * A `Bounds` object that specifies the drawing view region.
     * Rendering will be automatically transformed and scaled to fit within the canvas size (`render.options.width` and `render.options.height`).
     * This allows for creating views that can pan or zoom around the scene.
     * You must also set `render.options.hasBounds` to `true` to enable bounded rendering.
     *
     * @property bounds
     * @type bounds
     */ /**
     * The 2d rendering context from the `render.canvas` element.
     *
     * @property context
     * @type CanvasRenderingContext2D
     */ /**
     * The sprite texture cache.
     *
     * @property textures
     * @type {}
     */ /**
     * The mouse to render if `render.options.showMousePosition` is enabled.
     *
     * @property mouse
     * @type mouse
     * @default null
     */ /**
     * The configuration options of the renderer.
     *
     * @property options
     * @type {}
     */ /**
     * The target width in pixels of the `render.canvas` to be created.
     * See also the `options.pixelRatio` property to change render quality.
     *
     * @property options.width
     * @type number
     * @default 800
     */ /**
     * The target height in pixels of the `render.canvas` to be created.
     * See also the `options.pixelRatio` property to change render quality.
     *
     * @property options.height
     * @type number
     * @default 600
     */ /**
     * The [pixel ratio](https://developer.mozilla.org/en-US/docs/Web/API/Window/devicePixelRatio) to use when rendering.
     *
     * @property options.pixelRatio
     * @type number
     * @default 1
     */ /**
     * A CSS background color string to use when `render.options.wireframes` is disabled.
     * This may be also set to `'transparent'` or equivalent.
     *
     * @property options.background
     * @type string
     * @default '#14151f'
     */ /**
     * A CSS background color string to use when `render.options.wireframes` is enabled.
     * This may be also set to `'transparent'` or equivalent.
     *
     * @property options.wireframeBackground
     * @type string
     * @default '#14151f'
     */ /**
     * A flag that specifies if `render.bounds` should be used when rendering.
     *
     * @property options.hasBounds
     * @type boolean
     * @default false
     */ /**
     * A flag to enable or disable all debug information overlays together.  
     * This includes and has priority over the values of:
     *
     * - `render.options.showStats`
     * - `render.options.showPerformance`
     *
     * @property options.showDebug
     * @type boolean
     * @default false
     */ /**
     * A flag to enable or disable the engine stats info overlay.  
     * From left to right, the values shown are:
     *
     * - body parts total
     * - body total
     * - constraints total
     * - composites total
     * - collision pairs total
     *
     * @property options.showStats
     * @type boolean
     * @default false
     */ /**
     * A flag to enable or disable performance charts.  
     * From left to right, the values shown are:
     *
     * - average render frequency (e.g. 60 fps)
     * - exact engine delta time used for last update (e.g. 16.66ms)
     * - average engine execution duration (e.g. 5.00ms)
     * - average render execution duration (e.g. 0.40ms)
     * - average effective play speed (e.g. '1.00x' is 'real-time')
     *
     * Each value is recorded over a fixed sample of past frames (60 frames).
     *
     * A chart shown below each value indicates the variance from the average over the sample.
     * The more stable or fixed the value is the flatter the chart will appear.
     *
     * @property options.showPerformance
     * @type boolean
     * @default false
     */ /**
     * A flag to enable or disable rendering entirely.
     *
     * @property options.enabled
     * @type boolean
     * @default false
     */ /**
     * A flag to toggle wireframe rendering otherwise solid fill rendering is used.
     *
     * @property options.wireframes
     * @type boolean
     * @default true
     */ /**
     * A flag to enable or disable sleeping bodies indicators.
     *
     * @property options.showSleeping
     * @type boolean
     * @default true
     */ /**
     * A flag to enable or disable the debug information overlay.
     *
     * @property options.showDebug
     * @type boolean
     * @default false
     */ /**
     * A flag to enable or disable the collision broadphase debug overlay.
     *
     * @deprecated no longer implemented
     * @property options.showBroadphase
     * @type boolean
     * @default false
     */ /**
     * A flag to enable or disable the body bounds debug overlay.
     *
     * @property options.showBounds
     * @type boolean
     * @default false
     */ /**
     * A flag to enable or disable the body velocity debug overlay.
     *
     * @property options.showVelocity
     * @type boolean
     * @default false
     */ /**
     * A flag to enable or disable the body collisions debug overlay.
     *
     * @property options.showCollisions
     * @type boolean
     * @default false
     */ /**
     * A flag to enable or disable the collision resolver separations debug overlay.
     *
     * @property options.showSeparations
     * @type boolean
     * @default false
     */ /**
     * A flag to enable or disable the body axes debug overlay.
     *
     * @property options.showAxes
     * @type boolean
     * @default false
     */ /**
     * A flag to enable or disable the body positions debug overlay.
     *
     * @property options.showPositions
     * @type boolean
     * @default false
     */ /**
     * A flag to enable or disable the body angle debug overlay.
     *
     * @property options.showAngleIndicator
     * @type boolean
     * @default false
     */ /**
     * A flag to enable or disable the body and part ids debug overlay.
     *
     * @property options.showIds
     * @type boolean
     * @default false
     */ /**
     * A flag to enable or disable the body vertex numbers debug overlay.
     *
     * @property options.showVertexNumbers
     * @type boolean
     * @default false
     */ /**
     * A flag to enable or disable the body convex hulls debug overlay.
     *
     * @property options.showConvexHulls
     * @type boolean
     * @default false
     */ /**
     * A flag to enable or disable the body internal edges debug overlay.
     *
     * @property options.showInternalEdges
     * @type boolean
     * @default false
     */ /**
     * A flag to enable or disable the mouse position debug overlay.
     *
     * @property options.showMousePosition
     * @type boolean
     * @default false
     */ })();
        /***/ },
        function(module, exports) {
            /**
* The `Matter.Contact` module contains methods for creating and manipulating collision contacts.
*
* @class Contact
*/ var Contact = {
            };
            module.exports = Contact;
            (function() {
                /**
     * Creates a new contact.
     * @method create
     * @param {vertex} vertex
     * @return {contact} A new contact
     */ Contact.create = function(vertex) {
                    return {
                        vertex: vertex,
                        normalImpulse: 0,
                        tangentImpulse: 0
                    };
                };
            })();
        /***/ },
        function(module, exports, __webpack_require__) {
            /**
* The `Matter.Engine` module contains methods for creating and manipulating engines.
* An engine is a controller that manages updating the simulation of the world.
* See `Matter.Runner` for an optional game loop utility.
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class Engine
*/ var Engine = {
            };
            module.exports = Engine;
            var Sleeping = __webpack_require__(7);
            var Resolver = __webpack_require__(19);
            var Detector = __webpack_require__(14);
            var Pairs = __webpack_require__(20);
            var Events = __webpack_require__(4);
            var Composite = __webpack_require__(5);
            var Constraint = __webpack_require__(10);
            var Common = __webpack_require__(0);
            var Body = __webpack_require__(6);
            (function() {
                /**
     * Creates a new engine. The options parameter is an object that specifies any properties you wish to override the defaults.
     * All properties have default values, and many are pre-calculated automatically based on other properties.
     * See the properties section below for detailed information on what you can pass via the `options` object.
     * @method create
     * @param {object} [options]
     * @return {engine} engine
     */ Engine.create = function(options) {
                    options = options || {
                    };
                    var defaults = {
                        positionIterations: 6,
                        velocityIterations: 4,
                        constraintIterations: 2,
                        enableSleeping: false,
                        events: [],
                        plugin: {
                        },
                        gravity: {
                            x: 0,
                            y: 1,
                            scale: 0.001
                        },
                        timing: {
                            timestamp: 0,
                            timeScale: 1,
                            lastDelta: 0,
                            lastElapsed: 0
                        }
                    };
                    var engine = Common.extend(defaults, options);
                    engine.world = options.world || Composite.create({
                        label: 'World'
                    });
                    engine.pairs = options.pairs || Pairs.create();
                    engine.detector = options.detector || Detector.create();
                    // for temporary back compatibility only
                    engine.grid = {
                        buckets: []
                    };
                    engine.world.gravity = engine.gravity;
                    engine.broadphase = engine.grid;
                    engine.metrics = {
                    };
                    return engine;
                };
                /**
     * Moves the simulation forward in time by `delta` ms.
     * The `correction` argument is an optional `Number` that specifies the time correction factor to apply to the update.
     * This can help improve the accuracy of the simulation in cases where `delta` is changing between updates.
     * The value of `correction` is defined as `delta / lastDelta`, i.e. the percentage change of `delta` over the last step.
     * Therefore the value is always `1` (no correction) when `delta` constant (or when no correction is desired, which is the default).
     * See the paper on <a href="http://lonesock.net/article/verlet.html">Time Corrected Verlet</a> for more information.
     *
     * Triggers `beforeUpdate` and `afterUpdate` events.
     * Triggers `collisionStart`, `collisionActive` and `collisionEnd` events.
     * @method update
     * @param {engine} engine
     * @param {number} [delta=16.666]
     * @param {number} [correction=1]
     */ Engine.update = function(engine, delta, correction) {
                    var startTime = Common.now();
                    delta = delta || 1000 / 60;
                    correction = correction || 1;
                    var world = engine.world, detector = engine.detector, pairs = engine.pairs, timing = engine.timing, timestamp = timing.timestamp, i;
                    // increment timestamp
                    timing.timestamp += delta * timing.timeScale;
                    timing.lastDelta = delta * timing.timeScale;
                    // create an event object
                    var event = {
                        timestamp: timing.timestamp
                    };
                    Events.trigger(engine, 'beforeUpdate', event);
                    // get all bodies and all constraints in the world
                    var allBodies = Composite.allBodies(world), allConstraints = Composite.allConstraints(world);
                    // update the detector bodies if they have changed
                    if (world.isModified) Detector.setBodies(detector, allBodies);
                    // reset all composite modified flags
                    if (world.isModified) Composite.setModified(world, false, false, true);
                    // update sleeping if enabled
                    if (engine.enableSleeping) Sleeping.update(allBodies, timing.timeScale);
                    // apply gravity to all bodies
                    Engine._bodiesApplyGravity(allBodies, engine.gravity);
                    // update all body position and rotation by integration
                    Engine._bodiesUpdate(allBodies, delta, timing.timeScale, correction, world.bounds);
                    // update all constraints (first pass)
                    Constraint.preSolveAll(allBodies);
                    for(i = 0; i < engine.constraintIterations; i++)Constraint.solveAll(allConstraints, timing.timeScale);
                    Constraint.postSolveAll(allBodies);
                    // find all collisions
                    detector.pairs = engine.pairs;
                    var collisions = Detector.collisions(detector);
                    // update collision pairs
                    Pairs.update(pairs, collisions, timestamp);
                    // wake up bodies involved in collisions
                    if (engine.enableSleeping) Sleeping.afterCollisions(pairs.list, timing.timeScale);
                    // trigger collision events
                    if (pairs.collisionStart.length > 0) Events.trigger(engine, 'collisionStart', {
                        pairs: pairs.collisionStart
                    });
                    // iteratively resolve position between collisions
                    Resolver.preSolvePosition(pairs.list);
                    for(i = 0; i < engine.positionIterations; i++)Resolver.solvePosition(pairs.list, timing.timeScale);
                    Resolver.postSolvePosition(allBodies);
                    // update all constraints (second pass)
                    Constraint.preSolveAll(allBodies);
                    for(i = 0; i < engine.constraintIterations; i++)Constraint.solveAll(allConstraints, timing.timeScale);
                    Constraint.postSolveAll(allBodies);
                    // iteratively resolve velocity between collisions
                    Resolver.preSolveVelocity(pairs.list);
                    for(i = 0; i < engine.velocityIterations; i++)Resolver.solveVelocity(pairs.list, timing.timeScale);
                    // trigger collision events
                    if (pairs.collisionActive.length > 0) Events.trigger(engine, 'collisionActive', {
                        pairs: pairs.collisionActive
                    });
                    if (pairs.collisionEnd.length > 0) Events.trigger(engine, 'collisionEnd', {
                        pairs: pairs.collisionEnd
                    });
                    // clear force buffers
                    Engine._bodiesClearForces(allBodies);
                    Events.trigger(engine, 'afterUpdate', event);
                    // log the time elapsed computing this update
                    engine.timing.lastElapsed = Common.now() - startTime;
                    return engine;
                };
                /**
     * Merges two engines by keeping the configuration of `engineA` but replacing the world with the one from `engineB`.
     * @method merge
     * @param {engine} engineA
     * @param {engine} engineB
     */ Engine.merge = function(engineA, engineB) {
                    Common.extend(engineA, engineB);
                    if (engineB.world) {
                        engineA.world = engineB.world;
                        Engine.clear(engineA);
                        var bodies = Composite.allBodies(engineA.world);
                        for(var i = 0; i < bodies.length; i++){
                            var body = bodies[i];
                            Sleeping.set(body, false);
                            body.id = Common.nextId();
                        }
                    }
                };
                /**
     * Clears the engine pairs and detector.
     * @method clear
     * @param {engine} engine
     */ Engine.clear = function(engine) {
                    Pairs.clear(engine.pairs);
                    Detector.clear(engine.detector);
                };
                /**
     * Zeroes the `body.force` and `body.torque` force buffers.
     * @method _bodiesClearForces
     * @private
     * @param {body[]} bodies
     */ Engine._bodiesClearForces = function(bodies) {
                    for(var i = 0; i < bodies.length; i++){
                        var body = bodies[i];
                        // reset force buffers
                        body.force.x = 0;
                        body.force.y = 0;
                        body.torque = 0;
                    }
                };
                /**
     * Applys a mass dependant force to all given bodies.
     * @method _bodiesApplyGravity
     * @private
     * @param {body[]} bodies
     * @param {vector} gravity
     */ Engine._bodiesApplyGravity = function(bodies, gravity) {
                    var gravityScale = typeof gravity.scale !== 'undefined' ? gravity.scale : 0.001;
                    if (gravity.x === 0 && gravity.y === 0 || gravityScale === 0) return;
                    for(var i = 0; i < bodies.length; i++){
                        var body = bodies[i];
                        if (body.isStatic || body.isSleeping) continue;
                        // apply gravity
                        body.force.y += body.mass * gravity.y * gravityScale;
                        body.force.x += body.mass * gravity.x * gravityScale;
                    }
                };
                /**
     * Applys `Body.update` to all given `bodies`.
     * @method _bodiesUpdate
     * @private
     * @param {body[]} bodies
     * @param {number} deltaTime 
     * The amount of time elapsed between updates
     * @param {number} timeScale
     * @param {number} correction 
     * The Verlet correction factor (deltaTime / lastDeltaTime)
     * @param {bounds} worldBounds
     */ Engine._bodiesUpdate = function(bodies, deltaTime, timeScale, correction, worldBounds) {
                    for(var i = 0; i < bodies.length; i++){
                        var body = bodies[i];
                        if (body.isStatic || body.isSleeping) continue;
                        Body.update(body, deltaTime, timeScale, correction);
                    }
                };
            /**
     * A deprecated alias for `Runner.run`, use `Matter.Runner.run(engine)` instead and see `Matter.Runner` for more information.
     * @deprecated use Matter.Runner.run(engine) instead
     * @method run
     * @param {engine} engine
     */ /**
    * Fired just before an update
    *
    * @event beforeUpdate
    * @param {object} event An event object
    * @param {number} event.timestamp The engine.timing.timestamp of the event
    * @param {engine} event.source The source object of the event
    * @param {string} event.name The name of the event
    */ /**
    * Fired after engine update and all collision events
    *
    * @event afterUpdate
    * @param {object} event An event object
    * @param {number} event.timestamp The engine.timing.timestamp of the event
    * @param {engine} event.source The source object of the event
    * @param {string} event.name The name of the event
    */ /**
    * Fired after engine update, provides a list of all pairs that have started to collide in the current tick (if any)
    *
    * @event collisionStart
    * @param {object} event An event object
    * @param {pair[]} event.pairs List of affected pairs
    * @param {number} event.timestamp The engine.timing.timestamp of the event
    * @param {engine} event.source The source object of the event
    * @param {string} event.name The name of the event
    */ /**
    * Fired after engine update, provides a list of all pairs that are colliding in the current tick (if any)
    *
    * @event collisionActive
    * @param {object} event An event object
    * @param {pair[]} event.pairs List of affected pairs
    * @param {number} event.timestamp The engine.timing.timestamp of the event
    * @param {engine} event.source The source object of the event
    * @param {string} event.name The name of the event
    */ /**
    * Fired after engine update, provides a list of all pairs that have ended collision in the current tick (if any)
    *
    * @event collisionEnd
    * @param {object} event An event object
    * @param {pair[]} event.pairs List of affected pairs
    * @param {number} event.timestamp The engine.timing.timestamp of the event
    * @param {engine} event.source The source object of the event
    * @param {string} event.name The name of the event
    */ /*
    *
    *  Properties Documentation
    *
    */ /**
     * An integer `Number` that specifies the number of position iterations to perform each update.
     * The higher the value, the higher quality the simulation will be at the expense of performance.
     *
     * @property positionIterations
     * @type number
     * @default 6
     */ /**
     * An integer `Number` that specifies the number of velocity iterations to perform each update.
     * The higher the value, the higher quality the simulation will be at the expense of performance.
     *
     * @property velocityIterations
     * @type number
     * @default 4
     */ /**
     * An integer `Number` that specifies the number of constraint iterations to perform each update.
     * The higher the value, the higher quality the simulation will be at the expense of performance.
     * The default value of `2` is usually very adequate.
     *
     * @property constraintIterations
     * @type number
     * @default 2
     */ /**
     * A flag that specifies whether the engine should allow sleeping via the `Matter.Sleeping` module.
     * Sleeping can improve stability and performance, but often at the expense of accuracy.
     *
     * @property enableSleeping
     * @type boolean
     * @default false
     */ /**
     * An `Object` containing properties regarding the timing systems of the engine. 
     *
     * @property timing
     * @type object
     */ /**
     * A `Number` that specifies the global scaling factor of time for all bodies.
     * A value of `0` freezes the simulation.
     * A value of `0.1` gives a slow-motion effect.
     * A value of `1.2` gives a speed-up effect.
     *
     * @property timing.timeScale
     * @type number
     * @default 1
     */ /**
     * A `Number` that specifies the current simulation-time in milliseconds starting from `0`. 
     * It is incremented on every `Engine.update` by the given `delta` argument. 
     *
     * @property timing.timestamp
     * @type number
     * @default 0
     */ /**
     * A `Number` that represents the total execution time elapsed during the last `Engine.update` in milliseconds.
     * It is updated by timing from the start of the last `Engine.update` call until it ends.
     *
     * This value will also include the total execution time of all event handlers directly or indirectly triggered by the engine update.
     *
     * @property timing.lastElapsed
     * @type number
     * @default 0
     */ /**
     * A `Number` that represents the `delta` value used in the last engine update.
     *
     * @property timing.lastDelta
     * @type number
     * @default 0
     */ /**
     * A `Matter.Detector` instance.
     *
     * @property detector
     * @type detector
     * @default a Matter.Detector instance
     */ /**
     * A `Matter.Grid` instance.
     *
     * @deprecated replaced by `engine.detector`
     * @property grid
     * @type grid
     * @default a Matter.Grid instance
     */ /**
     * Replaced by and now alias for `engine.grid`.
     *
     * @deprecated replaced by `engine.detector`
     * @property broadphase
     * @type grid
     * @default a Matter.Grid instance
     */ /**
     * The root `Matter.Composite` instance that will contain all bodies, constraints and other composites to be simulated by this engine.
     *
     * @property world
     * @type composite
     * @default a Matter.Composite instance
     */ /**
     * An object reserved for storing plugin-specific properties.
     *
     * @property plugin
     * @type {}
     */ /**
     * The gravity to apply on all bodies in `engine.world`.
     *
     * @property gravity
     * @type object
     */ /**
     * The gravity x component.
     *
     * @property gravity.x
     * @type object
     * @default 0
     */ /**
     * The gravity y component.
     *
     * @property gravity.y
     * @type object
     * @default 1
     */ /**
     * The gravity scale factor.
     *
     * @property gravity.scale
     * @type object
     * @default 0.001
     */ })();
        /***/ },
        function(module, exports, __webpack_require__) {
            /**
* The `Matter.Resolver` module contains methods for resolving collision pairs.
*
* @class Resolver
*/ var Resolver = {
            };
            module.exports = Resolver;
            var Vertices = __webpack_require__(3);
            var Bounds = __webpack_require__(1);
            (function() {
                Resolver._restingThresh = 4;
                Resolver._restingThreshTangent = 6;
                Resolver._positionDampen = 0.9;
                Resolver._positionWarming = 0.8;
                Resolver._frictionNormalMultiplier = 5;
                /**
     * Prepare pairs for position solving.
     * @method preSolvePosition
     * @param {pair[]} pairs
     */ Resolver.preSolvePosition = function(pairs) {
                    var i, pair, activeCount, pairsLength = pairs.length;
                    // find total contacts on each body
                    for(i = 0; i < pairsLength; i++){
                        pair = pairs[i];
                        if (!pair.isActive) continue;
                        activeCount = pair.activeContacts.length;
                        pair.collision.parentA.totalContacts += activeCount;
                        pair.collision.parentB.totalContacts += activeCount;
                    }
                };
                /**
     * Find a solution for pair positions.
     * @method solvePosition
     * @param {pair[]} pairs
     * @param {number} timeScale
     */ Resolver.solvePosition = function(pairs, timeScale) {
                    var i, pair, collision, bodyA, bodyB, normal, contactShare, positionImpulse, positionDampen = Resolver._positionDampen, pairsLength = pairs.length;
                    // find impulses required to resolve penetration
                    for(i = 0; i < pairsLength; i++){
                        pair = pairs[i];
                        if (!pair.isActive || pair.isSensor) continue;
                        collision = pair.collision;
                        bodyA = collision.parentA;
                        bodyB = collision.parentB;
                        normal = collision.normal;
                        // get current separation between body edges involved in collision
                        pair.separation = normal.x * (bodyB.positionImpulse.x + collision.penetration.x - bodyA.positionImpulse.x) + normal.y * (bodyB.positionImpulse.y + collision.penetration.y - bodyA.positionImpulse.y);
                    }
                    for(i = 0; i < pairsLength; i++){
                        pair = pairs[i];
                        if (!pair.isActive || pair.isSensor) continue;
                        collision = pair.collision;
                        bodyA = collision.parentA;
                        bodyB = collision.parentB;
                        normal = collision.normal;
                        positionImpulse = (pair.separation - pair.slop) * timeScale;
                        if (bodyA.isStatic || bodyB.isStatic) positionImpulse *= 2;
                        if (!(bodyA.isStatic || bodyA.isSleeping)) {
                            contactShare = positionDampen / bodyA.totalContacts;
                            bodyA.positionImpulse.x += normal.x * positionImpulse * contactShare;
                            bodyA.positionImpulse.y += normal.y * positionImpulse * contactShare;
                        }
                        if (!(bodyB.isStatic || bodyB.isSleeping)) {
                            contactShare = positionDampen / bodyB.totalContacts;
                            bodyB.positionImpulse.x -= normal.x * positionImpulse * contactShare;
                            bodyB.positionImpulse.y -= normal.y * positionImpulse * contactShare;
                        }
                    }
                };
                /**
     * Apply position resolution.
     * @method postSolvePosition
     * @param {body[]} bodies
     */ Resolver.postSolvePosition = function(bodies) {
                    var positionWarming = Resolver._positionWarming, bodiesLength = bodies.length, verticesTranslate = Vertices.translate, boundsUpdate = Bounds.update;
                    for(var i = 0; i < bodiesLength; i++){
                        var body = bodies[i], positionImpulse = body.positionImpulse, positionImpulseX = positionImpulse.x, positionImpulseY = positionImpulse.y, velocity = body.velocity;
                        // reset contact count
                        body.totalContacts = 0;
                        if (positionImpulseX !== 0 || positionImpulseY !== 0) {
                            // update body geometry
                            for(var j = 0; j < body.parts.length; j++){
                                var part = body.parts[j];
                                verticesTranslate(part.vertices, positionImpulse);
                                boundsUpdate(part.bounds, part.vertices, velocity);
                                part.position.x += positionImpulseX;
                                part.position.y += positionImpulseY;
                            }
                            // move the body without changing velocity
                            body.positionPrev.x += positionImpulseX;
                            body.positionPrev.y += positionImpulseY;
                            if (positionImpulseX * velocity.x + positionImpulseY * velocity.y < 0) {
                                // reset cached impulse if the body has velocity along it
                                positionImpulse.x = 0;
                                positionImpulse.y = 0;
                            } else {
                                // warm the next iteration
                                positionImpulse.x *= positionWarming;
                                positionImpulse.y *= positionWarming;
                            }
                        }
                    }
                };
                /**
     * Prepare pairs for velocity solving.
     * @method preSolveVelocity
     * @param {pair[]} pairs
     */ Resolver.preSolveVelocity = function(pairs) {
                    var pairsLength = pairs.length, i, j;
                    for(i = 0; i < pairsLength; i++){
                        var pair = pairs[i];
                        if (!pair.isActive || pair.isSensor) continue;
                        var contacts = pair.activeContacts, contactsLength = contacts.length, collision = pair.collision, bodyA = collision.parentA, bodyB = collision.parentB, normal = collision.normal, tangent = collision.tangent;
                        // resolve each contact
                        for(j = 0; j < contactsLength; j++){
                            var contact = contacts[j], contactVertex = contact.vertex, normalImpulse = contact.normalImpulse, tangentImpulse = contact.tangentImpulse;
                            if (normalImpulse !== 0 || tangentImpulse !== 0) {
                                // total impulse from contact
                                var impulseX = normal.x * normalImpulse + tangent.x * tangentImpulse, impulseY = normal.y * normalImpulse + tangent.y * tangentImpulse;
                                // apply impulse from contact
                                if (!(bodyA.isStatic || bodyA.isSleeping)) {
                                    bodyA.positionPrev.x += impulseX * bodyA.inverseMass;
                                    bodyA.positionPrev.y += impulseY * bodyA.inverseMass;
                                    bodyA.anglePrev += bodyA.inverseInertia * ((contactVertex.x - bodyA.position.x) * impulseY - (contactVertex.y - bodyA.position.y) * impulseX);
                                }
                                if (!(bodyB.isStatic || bodyB.isSleeping)) {
                                    bodyB.positionPrev.x -= impulseX * bodyB.inverseMass;
                                    bodyB.positionPrev.y -= impulseY * bodyB.inverseMass;
                                    bodyB.anglePrev -= bodyB.inverseInertia * ((contactVertex.x - bodyB.position.x) * impulseY - (contactVertex.y - bodyB.position.y) * impulseX);
                                }
                            }
                        }
                    }
                };
                /**
     * Find a solution for pair velocities.
     * @method solveVelocity
     * @param {pair[]} pairs
     * @param {number} timeScale
     */ Resolver.solveVelocity = function(pairs, timeScale) {
                    var timeScaleSquared = timeScale * timeScale, restingThresh = Resolver._restingThresh * timeScaleSquared, frictionNormalMultiplier = Resolver._frictionNormalMultiplier, restingThreshTangent = Resolver._restingThreshTangent * timeScaleSquared, NumberMaxValue = Number.MAX_VALUE, pairsLength = pairs.length, tangentImpulse, maxFriction, i, j;
                    for(i = 0; i < pairsLength; i++){
                        var pair = pairs[i];
                        if (!pair.isActive || pair.isSensor) continue;
                        var collision = pair.collision, bodyA = collision.parentA, bodyB = collision.parentB, bodyAVelocity = bodyA.velocity, bodyBVelocity = bodyB.velocity, normalX = collision.normal.x, normalY = collision.normal.y, tangentX = collision.tangent.x, tangentY = collision.tangent.y, contacts = pair.activeContacts, contactsLength = contacts.length, contactShare = 1 / contactsLength, inverseMassTotal = bodyA.inverseMass + bodyB.inverseMass, friction = pair.friction * pair.frictionStatic * frictionNormalMultiplier * timeScaleSquared;
                        // update body velocities
                        bodyAVelocity.x = bodyA.position.x - bodyA.positionPrev.x;
                        bodyAVelocity.y = bodyA.position.y - bodyA.positionPrev.y;
                        bodyBVelocity.x = bodyB.position.x - bodyB.positionPrev.x;
                        bodyBVelocity.y = bodyB.position.y - bodyB.positionPrev.y;
                        bodyA.angularVelocity = bodyA.angle - bodyA.anglePrev;
                        bodyB.angularVelocity = bodyB.angle - bodyB.anglePrev;
                        // resolve each contact
                        for(j = 0; j < contactsLength; j++){
                            var contact = contacts[j], contactVertex = contact.vertex;
                            var offsetAX = contactVertex.x - bodyA.position.x, offsetAY = contactVertex.y - bodyA.position.y, offsetBX = contactVertex.x - bodyB.position.x, offsetBY = contactVertex.y - bodyB.position.y;
                            var velocityPointAX = bodyAVelocity.x - offsetAY * bodyA.angularVelocity, velocityPointAY = bodyAVelocity.y + offsetAX * bodyA.angularVelocity, velocityPointBX = bodyBVelocity.x - offsetBY * bodyB.angularVelocity, velocityPointBY = bodyBVelocity.y + offsetBX * bodyB.angularVelocity;
                            var relativeVelocityX = velocityPointAX - velocityPointBX, relativeVelocityY = velocityPointAY - velocityPointBY;
                            var normalVelocity = normalX * relativeVelocityX + normalY * relativeVelocityY, tangentVelocity = tangentX * relativeVelocityX + tangentY * relativeVelocityY;
                            // coulomb friction
                            var normalOverlap = pair.separation + normalVelocity;
                            var normalForce = Math.min(normalOverlap, 1);
                            normalForce = normalOverlap < 0 ? 0 : normalForce;
                            var frictionLimit = normalForce * friction;
                            if (tangentVelocity > frictionLimit || -tangentVelocity > frictionLimit) {
                                maxFriction = tangentVelocity > 0 ? tangentVelocity : -tangentVelocity;
                                tangentImpulse = pair.friction * (tangentVelocity > 0 ? 1 : -1) * timeScaleSquared;
                                if (tangentImpulse < -maxFriction) tangentImpulse = -maxFriction;
                                else if (tangentImpulse > maxFriction) tangentImpulse = maxFriction;
                            } else {
                                tangentImpulse = tangentVelocity;
                                maxFriction = NumberMaxValue;
                            }
                            // account for mass, inertia and contact offset
                            var oAcN = offsetAX * normalY - offsetAY * normalX, oBcN = offsetBX * normalY - offsetBY * normalX, share = contactShare / (inverseMassTotal + bodyA.inverseInertia * oAcN * oAcN + bodyB.inverseInertia * oBcN * oBcN);
                            // raw impulses
                            var normalImpulse = (1 + pair.restitution) * normalVelocity * share;
                            tangentImpulse *= share;
                            // handle high velocity and resting collisions separately
                            if (normalVelocity * normalVelocity > restingThresh && normalVelocity < 0) // high normal velocity so clear cached contact normal impulse
                            contact.normalImpulse = 0;
                            else {
                                // solve resting collision constraints using Erin Catto's method (GDC08)
                                // impulse constraint tends to 0
                                var contactNormalImpulse = contact.normalImpulse;
                                contact.normalImpulse += normalImpulse;
                                contact.normalImpulse = Math.min(contact.normalImpulse, 0);
                                normalImpulse = contact.normalImpulse - contactNormalImpulse;
                            }
                            // handle high velocity and resting collisions separately
                            if (tangentVelocity * tangentVelocity > restingThreshTangent) // high tangent velocity so clear cached contact tangent impulse
                            contact.tangentImpulse = 0;
                            else {
                                // solve resting collision constraints using Erin Catto's method (GDC08)
                                // tangent impulse tends to -tangentSpeed or +tangentSpeed
                                var contactTangentImpulse = contact.tangentImpulse;
                                contact.tangentImpulse += tangentImpulse;
                                if (contact.tangentImpulse < -maxFriction) contact.tangentImpulse = -maxFriction;
                                if (contact.tangentImpulse > maxFriction) contact.tangentImpulse = maxFriction;
                                tangentImpulse = contact.tangentImpulse - contactTangentImpulse;
                            }
                            // total impulse from contact
                            var impulseX = normalX * normalImpulse + tangentX * tangentImpulse, impulseY = normalY * normalImpulse + tangentY * tangentImpulse;
                            // apply impulse from contact
                            if (!(bodyA.isStatic || bodyA.isSleeping)) {
                                bodyA.positionPrev.x += impulseX * bodyA.inverseMass;
                                bodyA.positionPrev.y += impulseY * bodyA.inverseMass;
                                bodyA.anglePrev += (offsetAX * impulseY - offsetAY * impulseX) * bodyA.inverseInertia;
                            }
                            if (!(bodyB.isStatic || bodyB.isSleeping)) {
                                bodyB.positionPrev.x -= impulseX * bodyB.inverseMass;
                                bodyB.positionPrev.y -= impulseY * bodyB.inverseMass;
                                bodyB.anglePrev -= (offsetBX * impulseY - offsetBY * impulseX) * bodyB.inverseInertia;
                            }
                        }
                    }
                };
            })();
        /***/ },
        function(module, exports, __webpack_require__) {
            /**
* The `Matter.Pairs` module contains methods for creating and manipulating collision pair sets.
*
* @class Pairs
*/ var Pairs = {
            };
            module.exports = Pairs;
            var Pair = __webpack_require__(9);
            var Common = __webpack_require__(0);
            (function() {
                /**
     * Creates a new pairs structure.
     * @method create
     * @param {object} options
     * @return {pairs} A new pairs structure
     */ Pairs.create = function(options) {
                    return Common.extend({
                        table: {
                        },
                        list: [],
                        collisionStart: [],
                        collisionActive: [],
                        collisionEnd: []
                    }, options);
                };
                /**
     * Updates pairs given a list of collisions.
     * @method update
     * @param {object} pairs
     * @param {collision[]} collisions
     * @param {number} timestamp
     */ Pairs.update = function(pairs, collisions, timestamp) {
                    var pairsList = pairs.list, pairsListLength = pairsList.length, pairsTable = pairs.table, collisionsLength = collisions.length, collisionStart = pairs.collisionStart, collisionEnd = pairs.collisionEnd, collisionActive = pairs.collisionActive, collision, pairIndex, pair, i;
                    // clear collision state arrays, but maintain old reference
                    collisionStart.length = 0;
                    collisionEnd.length = 0;
                    collisionActive.length = 0;
                    for(i = 0; i < pairsListLength; i++)pairsList[i].confirmedActive = false;
                    for(i = 0; i < collisionsLength; i++){
                        collision = collisions[i];
                        pair = collision.pair;
                        if (pair) {
                            // pair already exists (but may or may not be active)
                            if (pair.isActive) // pair exists and is active
                            collisionActive.push(pair);
                            else // pair exists but was inactive, so a collision has just started again
                            collisionStart.push(pair);
                            // update the pair
                            Pair.update(pair, collision, timestamp);
                            pair.confirmedActive = true;
                        } else {
                            // pair did not exist, create a new pair
                            pair = Pair.create(collision, timestamp);
                            pairsTable[pair.id] = pair;
                            // push the new pair
                            collisionStart.push(pair);
                            pairsList.push(pair);
                        }
                    }
                    // find pairs that are no longer active
                    var removePairIndex = [];
                    pairsListLength = pairsList.length;
                    for(i = 0; i < pairsListLength; i++){
                        pair = pairsList[i];
                        if (!pair.confirmedActive) {
                            Pair.setActive(pair, false, timestamp);
                            collisionEnd.push(pair);
                            if (!pair.collision.bodyA.isSleeping && !pair.collision.bodyB.isSleeping) removePairIndex.push(i);
                        }
                    }
                    // remove inactive pairs
                    for(i = 0; i < removePairIndex.length; i++){
                        pairIndex = removePairIndex[i] - i;
                        pair = pairsList[pairIndex];
                        pairsList.splice(pairIndex, 1);
                        delete pairsTable[pair.id];
                    }
                };
                /**
     * Clears the given pairs structure.
     * @method clear
     * @param {pairs} pairs
     * @return {pairs} pairs
     */ Pairs.clear = function(pairs) {
                    pairs.table = {
                    };
                    pairs.list.length = 0;
                    pairs.collisionStart.length = 0;
                    pairs.collisionActive.length = 0;
                    pairs.collisionEnd.length = 0;
                    return pairs;
                };
            })();
        /***/ },
        function(module, exports, __webpack_require__) {
            var Matter = module.exports = __webpack_require__(22);
            Matter.Axes = __webpack_require__(11);
            Matter.Bodies = __webpack_require__(12);
            Matter.Body = __webpack_require__(6);
            Matter.Bounds = __webpack_require__(1);
            Matter.Collision = __webpack_require__(8);
            Matter.Common = __webpack_require__(0);
            Matter.Composite = __webpack_require__(5);
            Matter.Composites = __webpack_require__(23);
            Matter.Constraint = __webpack_require__(10);
            Matter.Contact = __webpack_require__(17);
            Matter.Detector = __webpack_require__(14);
            Matter.Engine = __webpack_require__(18);
            Matter.Events = __webpack_require__(4);
            Matter.Grid = __webpack_require__(24);
            Matter.Mouse = __webpack_require__(13);
            Matter.MouseConstraint = __webpack_require__(25);
            Matter.Pair = __webpack_require__(9);
            Matter.Pairs = __webpack_require__(20);
            Matter.Plugin = __webpack_require__(15);
            Matter.Query = __webpack_require__(26);
            Matter.Render = __webpack_require__(16);
            Matter.Resolver = __webpack_require__(19);
            Matter.Runner = __webpack_require__(27);
            Matter.SAT = __webpack_require__(28);
            Matter.Sleeping = __webpack_require__(7);
            Matter.Svg = __webpack_require__(29);
            Matter.Vector = __webpack_require__(2);
            Matter.Vertices = __webpack_require__(3);
            Matter.World = __webpack_require__(30);
            // temporary back compatibility
            Matter.Engine.run = Matter.Runner.run;
            Matter.Common.deprecated(Matter.Engine, 'run', 'Engine.run ➤ use Matter.Runner.run(engine) instead');
        /***/ },
        function(module, exports, __webpack_require__) {
            /**
* The `Matter` module is the top level namespace. It also includes a function for installing plugins on top of the library.
*
* @class Matter
*/ var Matter = {
            };
            module.exports = Matter;
            var Plugin = __webpack_require__(15);
            var Common = __webpack_require__(0);
            (function() {
                /**
     * The library name.
     * @property name
     * @readOnly
     * @type {String}
     */ Matter.name = 'matter-js';
                /**
     * The library version.
     * @property version
     * @readOnly
     * @type {String}
     */ Matter.version = "0.18.0";
                /**
     * A list of plugin dependencies to be installed. These are normally set and installed through `Matter.use`.
     * Alternatively you may set `Matter.uses` manually and install them by calling `Plugin.use(Matter)`.
     * @property uses
     * @type {Array}
     */ Matter.uses = [];
                /**
     * The plugins that have been installed through `Matter.Plugin.install`. Read only.
     * @property used
     * @readOnly
     * @type {Array}
     */ Matter.used = [];
                /**
     * Installs the given plugins on the `Matter` namespace.
     * This is a short-hand for `Plugin.use`, see it for more information.
     * Call this function once at the start of your code, with all of the plugins you wish to install as arguments.
     * Avoid calling this function multiple times unless you intend to manually control installation order.
     * @method use
     * @param ...plugin {Function} The plugin(s) to install on `base` (multi-argument).
     */ Matter.use = function() {
                    Plugin.use(Matter, Array.prototype.slice.call(arguments));
                };
                /**
     * Chains a function to excute before the original function on the given `path` relative to `Matter`.
     * See also docs for `Common.chain`.
     * @method before
     * @param {string} path The path relative to `Matter`
     * @param {function} func The function to chain before the original
     * @return {function} The chained function that replaced the original
     */ Matter.before = function(path, func) {
                    path = path.replace(/^Matter./, '');
                    return Common.chainPathBefore(Matter, path, func);
                };
                /**
     * Chains a function to excute after the original function on the given `path` relative to `Matter`.
     * See also docs for `Common.chain`.
     * @method after
     * @param {string} path The path relative to `Matter`
     * @param {function} func The function to chain after the original
     * @return {function} The chained function that replaced the original
     */ Matter.after = function(path, func) {
                    path = path.replace(/^Matter./, '');
                    return Common.chainPathAfter(Matter, path, func);
                };
            })();
        /***/ },
        function(module, exports, __webpack_require__) {
            /**
* The `Matter.Composites` module contains factory methods for creating composite bodies
* with commonly used configurations (such as stacks and chains).
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class Composites
*/ var Composites = {
            };
            module.exports = Composites;
            var Composite = __webpack_require__(5);
            var Constraint = __webpack_require__(10);
            var Common = __webpack_require__(0);
            var Body = __webpack_require__(6);
            var Bodies = __webpack_require__(12);
            var deprecated = Common.deprecated;
            (function() {
                /**
     * Create a new composite containing bodies created in the callback in a grid arrangement.
     * This function uses the body's bounds to prevent overlaps.
     * @method stack
     * @param {number} xx
     * @param {number} yy
     * @param {number} columns
     * @param {number} rows
     * @param {number} columnGap
     * @param {number} rowGap
     * @param {function} callback
     * @return {composite} A new composite containing objects created in the callback
     */ Composites.stack = function(xx, yy, columns, rows, columnGap, rowGap, callback) {
                    var stack = Composite.create({
                        label: 'Stack'
                    }), x = xx, y = yy, lastBody, i = 0;
                    for(var row = 0; row < rows; row++){
                        var maxHeight = 0;
                        for(var column = 0; column < columns; column++){
                            var body = callback(x, y, column, row, lastBody, i);
                            if (body) {
                                var bodyHeight = body.bounds.max.y - body.bounds.min.y, bodyWidth = body.bounds.max.x - body.bounds.min.x;
                                if (bodyHeight > maxHeight) maxHeight = bodyHeight;
                                Body.translate(body, {
                                    x: bodyWidth * 0.5,
                                    y: bodyHeight * 0.5
                                });
                                x = body.bounds.max.x + columnGap;
                                Composite.addBody(stack, body);
                                lastBody = body;
                                i += 1;
                            } else x += columnGap;
                        }
                        y += maxHeight + rowGap;
                        x = xx;
                    }
                    return stack;
                };
                /**
     * Chains all bodies in the given composite together using constraints.
     * @method chain
     * @param {composite} composite
     * @param {number} xOffsetA
     * @param {number} yOffsetA
     * @param {number} xOffsetB
     * @param {number} yOffsetB
     * @param {object} options
     * @return {composite} A new composite containing objects chained together with constraints
     */ Composites.chain = function(composite, xOffsetA, yOffsetA, xOffsetB, yOffsetB, options) {
                    var bodies = composite.bodies;
                    for(var i = 1; i < bodies.length; i++){
                        var bodyA = bodies[i - 1], bodyB = bodies[i], bodyAHeight = bodyA.bounds.max.y - bodyA.bounds.min.y, bodyAWidth = bodyA.bounds.max.x - bodyA.bounds.min.x, bodyBHeight = bodyB.bounds.max.y - bodyB.bounds.min.y, bodyBWidth = bodyB.bounds.max.x - bodyB.bounds.min.x;
                        var defaults = {
                            bodyA: bodyA,
                            pointA: {
                                x: bodyAWidth * xOffsetA,
                                y: bodyAHeight * yOffsetA
                            },
                            bodyB: bodyB,
                            pointB: {
                                x: bodyBWidth * xOffsetB,
                                y: bodyBHeight * yOffsetB
                            }
                        };
                        var constraint = Common.extend(defaults, options);
                        Composite.addConstraint(composite, Constraint.create(constraint));
                    }
                    composite.label += ' Chain';
                    return composite;
                };
                /**
     * Connects bodies in the composite with constraints in a grid pattern, with optional cross braces.
     * @method mesh
     * @param {composite} composite
     * @param {number} columns
     * @param {number} rows
     * @param {boolean} crossBrace
     * @param {object} options
     * @return {composite} The composite containing objects meshed together with constraints
     */ Composites.mesh = function(composite, columns, rows, crossBrace, options) {
                    var bodies = composite.bodies, row, col, bodyA, bodyB, bodyC;
                    for(row = 0; row < rows; row++){
                        for(col = 1; col < columns; col++){
                            bodyA = bodies[col - 1 + row * columns];
                            bodyB = bodies[col + row * columns];
                            Composite.addConstraint(composite, Constraint.create(Common.extend({
                                bodyA: bodyA,
                                bodyB: bodyB
                            }, options)));
                        }
                        if (row > 0) for(col = 0; col < columns; col++){
                            bodyA = bodies[col + (row - 1) * columns];
                            bodyB = bodies[col + row * columns];
                            Composite.addConstraint(composite, Constraint.create(Common.extend({
                                bodyA: bodyA,
                                bodyB: bodyB
                            }, options)));
                            if (crossBrace && col > 0) {
                                bodyC = bodies[col - 1 + (row - 1) * columns];
                                Composite.addConstraint(composite, Constraint.create(Common.extend({
                                    bodyA: bodyC,
                                    bodyB: bodyB
                                }, options)));
                            }
                            if (crossBrace && col < columns - 1) {
                                bodyC = bodies[col + 1 + (row - 1) * columns];
                                Composite.addConstraint(composite, Constraint.create(Common.extend({
                                    bodyA: bodyC,
                                    bodyB: bodyB
                                }, options)));
                            }
                        }
                    }
                    composite.label += ' Mesh';
                    return composite;
                };
                /**
     * Create a new composite containing bodies created in the callback in a pyramid arrangement.
     * This function uses the body's bounds to prevent overlaps.
     * @method pyramid
     * @param {number} xx
     * @param {number} yy
     * @param {number} columns
     * @param {number} rows
     * @param {number} columnGap
     * @param {number} rowGap
     * @param {function} callback
     * @return {composite} A new composite containing objects created in the callback
     */ Composites.pyramid = function(xx, yy, columns, rows, columnGap, rowGap, callback) {
                    return Composites.stack(xx, yy, columns, rows, columnGap, rowGap, function(x, y, column, row, lastBody, i) {
                        var actualRows = Math.min(rows, Math.ceil(columns / 2)), lastBodyWidth = lastBody ? lastBody.bounds.max.x - lastBody.bounds.min.x : 0;
                        if (row > actualRows) return;
                        // reverse row order
                        row = actualRows - row;
                        var start = row, end = columns - 1 - row;
                        if (column < start || column > end) return;
                        // retroactively fix the first body's position, since width was unknown
                        if (i === 1) Body.translate(lastBody, {
                            x: (column + (columns % 2 === 1 ? 1 : -1)) * lastBodyWidth,
                            y: 0
                        });
                        var xOffset = lastBody ? column * lastBodyWidth : 0;
                        return callback(xx + xOffset + column * columnGap, y, column, row, lastBody, i);
                    });
                };
                /**
     * This has now moved to the [newtonsCradle example](https://github.com/liabru/matter-js/blob/master/examples/newtonsCradle.js), follow that instead as this function is deprecated here.
     * @deprecated moved to newtonsCradle example
     * @method newtonsCradle
     * @param {number} xx
     * @param {number} yy
     * @param {number} number
     * @param {number} size
     * @param {number} length
     * @return {composite} A new composite newtonsCradle body
     */ Composites.newtonsCradle = function(xx, yy, number, size, length) {
                    var newtonsCradle = Composite.create({
                        label: 'Newtons Cradle'
                    });
                    for(var i = 0; i < number; i++){
                        var separation = 1.9, circle = Bodies.circle(xx + i * (size * separation), yy + length, size, {
                            inertia: Infinity,
                            restitution: 1,
                            friction: 0,
                            frictionAir: 0.0001,
                            slop: 1
                        }), constraint = Constraint.create({
                            pointA: {
                                x: xx + i * (size * separation),
                                y: yy
                            },
                            bodyB: circle
                        });
                        Composite.addBody(newtonsCradle, circle);
                        Composite.addConstraint(newtonsCradle, constraint);
                    }
                    return newtonsCradle;
                };
                deprecated(Composites, 'newtonsCradle', 'Composites.newtonsCradle ➤ moved to newtonsCradle example');
                /**
     * This has now moved to the [car example](https://github.com/liabru/matter-js/blob/master/examples/car.js), follow that instead as this function is deprecated here.
     * @deprecated moved to car example
     * @method car
     * @param {number} xx
     * @param {number} yy
     * @param {number} width
     * @param {number} height
     * @param {number} wheelSize
     * @return {composite} A new composite car body
     */ Composites.car = function(xx, yy, width, height, wheelSize) {
                    var group = Body.nextGroup(true), wheelBase = 20, wheelAOffset = -width * 0.5 + wheelBase, wheelBOffset = width * 0.5 - wheelBase, wheelYOffset = 0;
                    var car = Composite.create({
                        label: 'Car'
                    }), body = Bodies.rectangle(xx, yy, width, height, {
                        collisionFilter: {
                            group: group
                        },
                        chamfer: {
                            radius: height * 0.5
                        },
                        density: 0.0002
                    });
                    var wheelA = Bodies.circle(xx + wheelAOffset, yy + wheelYOffset, wheelSize, {
                        collisionFilter: {
                            group: group
                        },
                        friction: 0.8
                    });
                    var wheelB = Bodies.circle(xx + wheelBOffset, yy + wheelYOffset, wheelSize, {
                        collisionFilter: {
                            group: group
                        },
                        friction: 0.8
                    });
                    var axelA = Constraint.create({
                        bodyB: body,
                        pointB: {
                            x: wheelAOffset,
                            y: wheelYOffset
                        },
                        bodyA: wheelA,
                        stiffness: 1,
                        length: 0
                    });
                    var axelB = Constraint.create({
                        bodyB: body,
                        pointB: {
                            x: wheelBOffset,
                            y: wheelYOffset
                        },
                        bodyA: wheelB,
                        stiffness: 1,
                        length: 0
                    });
                    Composite.addBody(car, body);
                    Composite.addBody(car, wheelA);
                    Composite.addBody(car, wheelB);
                    Composite.addConstraint(car, axelA);
                    Composite.addConstraint(car, axelB);
                    return car;
                };
                deprecated(Composites, 'car', 'Composites.car ➤ moved to car example');
                /**
     * This has now moved to the [softBody example](https://github.com/liabru/matter-js/blob/master/examples/softBody.js)
     * and the [cloth example](https://github.com/liabru/matter-js/blob/master/examples/cloth.js), follow those instead as this function is deprecated here.
     * @deprecated moved to softBody and cloth examples
     * @method softBody
     * @param {number} xx
     * @param {number} yy
     * @param {number} columns
     * @param {number} rows
     * @param {number} columnGap
     * @param {number} rowGap
     * @param {boolean} crossBrace
     * @param {number} particleRadius
     * @param {} particleOptions
     * @param {} constraintOptions
     * @return {composite} A new composite softBody
     */ Composites.softBody = function(xx, yy, columns, rows, columnGap, rowGap, crossBrace, particleRadius, particleOptions, constraintOptions) {
                    particleOptions = Common.extend({
                        inertia: Infinity
                    }, particleOptions);
                    constraintOptions = Common.extend({
                        stiffness: 0.2,
                        render: {
                            type: 'line',
                            anchors: false
                        }
                    }, constraintOptions);
                    var softBody = Composites.stack(xx, yy, columns, rows, columnGap, rowGap, function(x, y) {
                        return Bodies.circle(x, y, particleRadius, particleOptions);
                    });
                    Composites.mesh(softBody, columns, rows, crossBrace, constraintOptions);
                    softBody.label = 'Soft Body';
                    return softBody;
                };
                deprecated(Composites, 'softBody', 'Composites.softBody ➤ moved to softBody and cloth examples');
            })();
        /***/ },
        function(module, exports, __webpack_require__) {
            /**
* This module has now been replaced by `Matter.Detector`.
*
* All usage should be migrated to `Matter.Detector` or another alternative.
* For back-compatibility purposes this module will remain for a short term and then later removed in a future release.
*
* The `Matter.Grid` module contains methods for creating and manipulating collision broadphase grid structures.
*
* @class Grid
* @deprecated
*/ var Grid = {
            };
            module.exports = Grid;
            var Pair = __webpack_require__(9);
            var Common = __webpack_require__(0);
            var deprecated = Common.deprecated;
            (function() {
                /**
     * Creates a new grid.
     * @deprecated replaced by Matter.Detector
     * @method create
     * @param {} options
     * @return {grid} A new grid
     */ Grid.create = function(options) {
                    var defaults = {
                        buckets: {
                        },
                        pairs: {
                        },
                        pairsList: [],
                        bucketWidth: 48,
                        bucketHeight: 48
                    };
                    return Common.extend(defaults, options);
                };
                /**
     * The width of a single grid bucket.
     *
     * @property bucketWidth
     * @type number
     * @default 48
     */ /**
     * The height of a single grid bucket.
     *
     * @property bucketHeight
     * @type number
     * @default 48
     */ /**
     * Updates the grid.
     * @deprecated replaced by Matter.Detector
     * @method update
     * @param {grid} grid
     * @param {body[]} bodies
     * @param {engine} engine
     * @param {boolean} forceUpdate
     */ Grid.update = function(grid, bodies, engine, forceUpdate) {
                    var i, col, row, world = engine.world, buckets = grid.buckets, bucket, bucketId, gridChanged = false;
                    for(i = 0; i < bodies.length; i++){
                        var body = bodies[i];
                        if (body.isSleeping && !forceUpdate) continue;
                        // temporary back compatibility bounds check
                        if (world.bounds && (body.bounds.max.x < world.bounds.min.x || body.bounds.min.x > world.bounds.max.x || body.bounds.max.y < world.bounds.min.y || body.bounds.min.y > world.bounds.max.y)) continue;
                        var newRegion = Grid._getRegion(grid, body);
                        // if the body has changed grid region
                        if (!body.region || newRegion.id !== body.region.id || forceUpdate) {
                            if (!body.region || forceUpdate) body.region = newRegion;
                            var union = Grid._regionUnion(newRegion, body.region);
                            // update grid buckets affected by region change
                            // iterate over the union of both regions
                            for(col = union.startCol; col <= union.endCol; col++)for(row = union.startRow; row <= union.endRow; row++){
                                bucketId = Grid._getBucketId(col, row);
                                bucket = buckets[bucketId];
                                var isInsideNewRegion = col >= newRegion.startCol && col <= newRegion.endCol && row >= newRegion.startRow && row <= newRegion.endRow;
                                var isInsideOldRegion = col >= body.region.startCol && col <= body.region.endCol && row >= body.region.startRow && row <= body.region.endRow;
                                // remove from old region buckets
                                if (!isInsideNewRegion && isInsideOldRegion) {
                                    if (isInsideOldRegion) {
                                        if (bucket) Grid._bucketRemoveBody(grid, bucket, body);
                                    }
                                }
                                // add to new region buckets
                                if (body.region === newRegion || isInsideNewRegion && !isInsideOldRegion || forceUpdate) {
                                    if (!bucket) bucket = Grid._createBucket(buckets, bucketId);
                                    Grid._bucketAddBody(grid, bucket, body);
                                }
                            }
                            // set the new region
                            body.region = newRegion;
                            // flag changes so we can update pairs
                            gridChanged = true;
                        }
                    }
                    // update pairs list only if pairs changed (i.e. a body changed region)
                    if (gridChanged) grid.pairsList = Grid._createActivePairsList(grid);
                };
                deprecated(Grid, 'update', 'Grid.update ➤ replaced by Matter.Detector');
                /**
     * Clears the grid.
     * @deprecated replaced by Matter.Detector
     * @method clear
     * @param {grid} grid
     */ Grid.clear = function(grid) {
                    grid.buckets = {
                    };
                    grid.pairs = {
                    };
                    grid.pairsList = [];
                };
                deprecated(Grid, 'clear', 'Grid.clear ➤ replaced by Matter.Detector');
                /**
     * Finds the union of two regions.
     * @method _regionUnion
     * @deprecated replaced by Matter.Detector
     * @private
     * @param {} regionA
     * @param {} regionB
     * @return {} region
     */ Grid._regionUnion = function(regionA, regionB) {
                    var startCol = Math.min(regionA.startCol, regionB.startCol), endCol = Math.max(regionA.endCol, regionB.endCol), startRow = Math.min(regionA.startRow, regionB.startRow), endRow = Math.max(regionA.endRow, regionB.endRow);
                    return Grid._createRegion(startCol, endCol, startRow, endRow);
                };
                /**
     * Gets the region a given body falls in for a given grid.
     * @method _getRegion
     * @deprecated replaced by Matter.Detector
     * @private
     * @param {} grid
     * @param {} body
     * @return {} region
     */ Grid._getRegion = function(grid, body) {
                    var bounds = body.bounds, startCol = Math.floor(bounds.min.x / grid.bucketWidth), endCol = Math.floor(bounds.max.x / grid.bucketWidth), startRow = Math.floor(bounds.min.y / grid.bucketHeight), endRow = Math.floor(bounds.max.y / grid.bucketHeight);
                    return Grid._createRegion(startCol, endCol, startRow, endRow);
                };
                /**
     * Creates a region.
     * @method _createRegion
     * @deprecated replaced by Matter.Detector
     * @private
     * @param {} startCol
     * @param {} endCol
     * @param {} startRow
     * @param {} endRow
     * @return {} region
     */ Grid._createRegion = function(startCol, endCol, startRow, endRow) {
                    return {
                        id: startCol + ',' + endCol + ',' + startRow + ',' + endRow,
                        startCol: startCol,
                        endCol: endCol,
                        startRow: startRow,
                        endRow: endRow
                    };
                };
                /**
     * Gets the bucket id at the given position.
     * @method _getBucketId
     * @deprecated replaced by Matter.Detector
     * @private
     * @param {} column
     * @param {} row
     * @return {string} bucket id
     */ Grid._getBucketId = function(column, row) {
                    return 'C' + column + 'R' + row;
                };
                /**
     * Creates a bucket.
     * @method _createBucket
     * @deprecated replaced by Matter.Detector
     * @private
     * @param {} buckets
     * @param {} bucketId
     * @return {} bucket
     */ Grid._createBucket = function(buckets, bucketId) {
                    var bucket = buckets[bucketId] = [];
                    return bucket;
                };
                /**
     * Adds a body to a bucket.
     * @method _bucketAddBody
     * @deprecated replaced by Matter.Detector
     * @private
     * @param {} grid
     * @param {} bucket
     * @param {} body
     */ Grid._bucketAddBody = function(grid, bucket, body) {
                    var gridPairs = grid.pairs, pairId = Pair.id, bucketLength = bucket.length, i;
                    // add new pairs
                    for(i = 0; i < bucketLength; i++){
                        var bodyB = bucket[i];
                        if (body.id === bodyB.id || body.isStatic && bodyB.isStatic) continue;
                        // keep track of the number of buckets the pair exists in
                        // important for Grid.update to work
                        var id = pairId(body, bodyB), pair = gridPairs[id];
                        if (pair) pair[2] += 1;
                        else gridPairs[id] = [
                            body,
                            bodyB,
                            1
                        ];
                    }
                    // add to bodies (after pairs, otherwise pairs with self)
                    bucket.push(body);
                };
                /**
     * Removes a body from a bucket.
     * @method _bucketRemoveBody
     * @deprecated replaced by Matter.Detector
     * @private
     * @param {} grid
     * @param {} bucket
     * @param {} body
     */ Grid._bucketRemoveBody = function(grid, bucket, body) {
                    var gridPairs = grid.pairs, pairId = Pair.id, i;
                    // remove from bucket
                    bucket.splice(Common.indexOf(bucket, body), 1);
                    var bucketLength = bucket.length;
                    // update pair counts
                    for(i = 0; i < bucketLength; i++){
                        // keep track of the number of buckets the pair exists in
                        // important for _createActivePairsList to work
                        var pair = gridPairs[pairId(body, bucket[i])];
                        if (pair) pair[2] -= 1;
                    }
                };
                /**
     * Generates a list of the active pairs in the grid.
     * @method _createActivePairsList
     * @deprecated replaced by Matter.Detector
     * @private
     * @param {} grid
     * @return [] pairs
     */ Grid._createActivePairsList = function(grid) {
                    var pair, gridPairs = grid.pairs, pairKeys = Common.keys(gridPairs), pairKeysLength = pairKeys.length, pairs = [], k;
                    // iterate over grid.pairs
                    for(k = 0; k < pairKeysLength; k++){
                        pair = gridPairs[pairKeys[k]];
                        // if pair exists in at least one bucket
                        // it is a pair that needs further collision testing so push it
                        if (pair[2] > 0) pairs.push(pair);
                        else delete gridPairs[pairKeys[k]];
                    }
                    return pairs;
                };
            })();
        /***/ },
        function(module, exports, __webpack_require__) {
            /**
* The `Matter.MouseConstraint` module contains methods for creating mouse constraints.
* Mouse constraints are used for allowing user interaction, providing the ability to move bodies via the mouse or touch.
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class MouseConstraint
*/ var MouseConstraint = {
            };
            module.exports = MouseConstraint;
            var Vertices = __webpack_require__(3);
            var Sleeping = __webpack_require__(7);
            var Mouse = __webpack_require__(13);
            var Events = __webpack_require__(4);
            var Detector = __webpack_require__(14);
            var Constraint = __webpack_require__(10);
            var Composite = __webpack_require__(5);
            var Common = __webpack_require__(0);
            var Bounds = __webpack_require__(1);
            (function() {
                /**
     * Creates a new mouse constraint.
     * All properties have default values, and many are pre-calculated automatically based on other properties.
     * See the properties section below for detailed information on what you can pass via the `options` object.
     * @method create
     * @param {engine} engine
     * @param {} options
     * @return {MouseConstraint} A new MouseConstraint
     */ MouseConstraint.create = function(engine, options) {
                    var mouse = (engine ? engine.mouse : null) || (options ? options.mouse : null);
                    if (!mouse) {
                        if (engine && engine.render && engine.render.canvas) mouse = Mouse.create(engine.render.canvas);
                        else if (options && options.element) mouse = Mouse.create(options.element);
                        else {
                            mouse = Mouse.create();
                            Common.warn('MouseConstraint.create: options.mouse was undefined, options.element was undefined, may not function as expected');
                        }
                    }
                    var constraint = Constraint.create({
                        label: 'Mouse Constraint',
                        pointA: mouse.position,
                        pointB: {
                            x: 0,
                            y: 0
                        },
                        length: 0.01,
                        stiffness: 0.1,
                        angularStiffness: 1,
                        render: {
                            strokeStyle: '#90EE90',
                            lineWidth: 3
                        }
                    });
                    var defaults = {
                        type: 'mouseConstraint',
                        mouse: mouse,
                        element: null,
                        body: null,
                        constraint: constraint,
                        collisionFilter: {
                            category: 1,
                            mask: 4294967295,
                            group: 0
                        }
                    };
                    var mouseConstraint = Common.extend(defaults, options);
                    Events.on(engine, 'beforeUpdate', function() {
                        var allBodies = Composite.allBodies(engine.world);
                        MouseConstraint.update(mouseConstraint, allBodies);
                        MouseConstraint._triggerEvents(mouseConstraint);
                    });
                    return mouseConstraint;
                };
                /**
     * Updates the given mouse constraint.
     * @private
     * @method update
     * @param {MouseConstraint} mouseConstraint
     * @param {body[]} bodies
     */ MouseConstraint.update = function(mouseConstraint, bodies) {
                    var mouse = mouseConstraint.mouse, constraint = mouseConstraint.constraint, body = mouseConstraint.body;
                    if (mouse.button === 0) {
                        if (!constraint.bodyB) for(var i = 0; i < bodies.length; i++){
                            body = bodies[i];
                            if (Bounds.contains(body.bounds, mouse.position) && Detector.canCollide(body.collisionFilter, mouseConstraint.collisionFilter)) for(var j = body.parts.length > 1 ? 1 : 0; j < body.parts.length; j++){
                                var part = body.parts[j];
                                if (Vertices.contains(part.vertices, mouse.position)) {
                                    constraint.pointA = mouse.position;
                                    constraint.bodyB = mouseConstraint.body = body;
                                    constraint.pointB = {
                                        x: mouse.position.x - body.position.x,
                                        y: mouse.position.y - body.position.y
                                    };
                                    constraint.angleB = body.angle;
                                    Sleeping.set(body, false);
                                    Events.trigger(mouseConstraint, 'startdrag', {
                                        mouse: mouse,
                                        body: body
                                    });
                                    break;
                                }
                            }
                        }
                        else {
                            Sleeping.set(constraint.bodyB, false);
                            constraint.pointA = mouse.position;
                        }
                    } else {
                        constraint.bodyB = mouseConstraint.body = null;
                        constraint.pointB = null;
                        if (body) Events.trigger(mouseConstraint, 'enddrag', {
                            mouse: mouse,
                            body: body
                        });
                    }
                };
                /**
     * Triggers mouse constraint events.
     * @method _triggerEvents
     * @private
     * @param {mouse} mouseConstraint
     */ MouseConstraint._triggerEvents = function(mouseConstraint) {
                    var mouse = mouseConstraint.mouse, mouseEvents = mouse.sourceEvents;
                    if (mouseEvents.mousemove) Events.trigger(mouseConstraint, 'mousemove', {
                        mouse: mouse
                    });
                    if (mouseEvents.mousedown) Events.trigger(mouseConstraint, 'mousedown', {
                        mouse: mouse
                    });
                    if (mouseEvents.mouseup) Events.trigger(mouseConstraint, 'mouseup', {
                        mouse: mouse
                    });
                    // reset the mouse state ready for the next step
                    Mouse.clearSourceEvents(mouse);
                };
            /*
    *
    *  Events Documentation
    *
    */ /**
    * Fired when the mouse has moved (or a touch moves) during the last step
    *
    * @event mousemove
    * @param {} event An event object
    * @param {mouse} event.mouse The engine's mouse instance
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */ /**
    * Fired when the mouse is down (or a touch has started) during the last step
    *
    * @event mousedown
    * @param {} event An event object
    * @param {mouse} event.mouse The engine's mouse instance
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */ /**
    * Fired when the mouse is up (or a touch has ended) during the last step
    *
    * @event mouseup
    * @param {} event An event object
    * @param {mouse} event.mouse The engine's mouse instance
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */ /**
    * Fired when the user starts dragging a body
    *
    * @event startdrag
    * @param {} event An event object
    * @param {mouse} event.mouse The engine's mouse instance
    * @param {body} event.body The body being dragged
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */ /**
    * Fired when the user ends dragging a body
    *
    * @event enddrag
    * @param {} event An event object
    * @param {mouse} event.mouse The engine's mouse instance
    * @param {body} event.body The body that has stopped being dragged
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */ /*
    *
    *  Properties Documentation
    *
    */ /**
     * A `String` denoting the type of object.
     *
     * @property type
     * @type string
     * @default "constraint"
     * @readOnly
     */ /**
     * The `Mouse` instance in use. If not supplied in `MouseConstraint.create`, one will be created.
     *
     * @property mouse
     * @type mouse
     * @default mouse
     */ /**
     * The `Body` that is currently being moved by the user, or `null` if no body.
     *
     * @property body
     * @type body
     * @default null
     */ /**
     * The `Constraint` object that is used to move the body during interaction.
     *
     * @property constraint
     * @type constraint
     */ /**
     * An `Object` that specifies the collision filter properties.
     * The collision filter allows the user to define which types of body this mouse constraint can interact with.
     * See `body.collisionFilter` for more information.
     *
     * @property collisionFilter
     * @type object
     */ })();
        /***/ },
        function(module, exports, __webpack_require__) {
            /**
* The `Matter.Query` module contains methods for performing collision queries.
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class Query
*/ var Query = {
            };
            module.exports = Query;
            var Vector = __webpack_require__(2);
            var Collision = __webpack_require__(8);
            var Bounds = __webpack_require__(1);
            var Bodies = __webpack_require__(12);
            var Vertices = __webpack_require__(3);
            (function() {
                /**
     * Returns a list of collisions between `body` and `bodies`.
     * @method collides
     * @param {body} body
     * @param {body[]} bodies
     * @return {collision[]} Collisions
     */ Query.collides = function(body, bodies) {
                    var collisions = [], bodiesLength = bodies.length, bounds = body.bounds, collides = Collision.collides, overlaps = Bounds.overlaps;
                    for(var i = 0; i < bodiesLength; i++){
                        var bodyA = bodies[i], partsALength = bodyA.parts.length, partsAStart = partsALength === 1 ? 0 : 1;
                        if (overlaps(bodyA.bounds, bounds)) for(var j = partsAStart; j < partsALength; j++){
                            var part = bodyA.parts[j];
                            if (overlaps(part.bounds, bounds)) {
                                var collision = collides(part, body);
                                if (collision) {
                                    collisions.push(collision);
                                    break;
                                }
                            }
                        }
                    }
                    return collisions;
                };
                /**
     * Casts a ray segment against a set of bodies and returns all collisions, ray width is optional. Intersection points are not provided.
     * @method ray
     * @param {body[]} bodies
     * @param {vector} startPoint
     * @param {vector} endPoint
     * @param {number} [rayWidth]
     * @return {collision[]} Collisions
     */ Query.ray = function(bodies, startPoint, endPoint, rayWidth) {
                    rayWidth = rayWidth || 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001;
                    var rayAngle = Vector.angle(startPoint, endPoint), rayLength = Vector.magnitude(Vector.sub(startPoint, endPoint)), rayX = (endPoint.x + startPoint.x) * 0.5, rayY = (endPoint.y + startPoint.y) * 0.5, ray = Bodies.rectangle(rayX, rayY, rayLength, rayWidth, {
                        angle: rayAngle
                    }), collisions = Query.collides(ray, bodies);
                    for(var i = 0; i < collisions.length; i += 1){
                        var collision = collisions[i];
                        collision.body = collision.bodyB = collision.bodyA;
                    }
                    return collisions;
                };
                /**
     * Returns all bodies whose bounds are inside (or outside if set) the given set of bounds, from the given set of bodies.
     * @method region
     * @param {body[]} bodies
     * @param {bounds} bounds
     * @param {bool} [outside=false]
     * @return {body[]} The bodies matching the query
     */ Query.region = function(bodies, bounds, outside) {
                    var result = [];
                    for(var i = 0; i < bodies.length; i++){
                        var body = bodies[i], overlaps = Bounds.overlaps(body.bounds, bounds);
                        if (overlaps && !outside || !overlaps && outside) result.push(body);
                    }
                    return result;
                };
                /**
     * Returns all bodies whose vertices contain the given point, from the given set of bodies.
     * @method point
     * @param {body[]} bodies
     * @param {vector} point
     * @return {body[]} The bodies matching the query
     */ Query.point = function(bodies, point) {
                    var result = [];
                    for(var i = 0; i < bodies.length; i++){
                        var body = bodies[i];
                        if (Bounds.contains(body.bounds, point)) for(var j = body.parts.length === 1 ? 0 : 1; j < body.parts.length; j++){
                            var part = body.parts[j];
                            if (Bounds.contains(part.bounds, point) && Vertices.contains(part.vertices, point)) {
                                result.push(body);
                                break;
                            }
                        }
                    }
                    return result;
                };
            })();
        /***/ },
        function(module, exports, __webpack_require__) {
            /**
* The `Matter.Runner` module is an optional utility which provides a game loop, 
* that handles continuously updating a `Matter.Engine` for you within a browser.
* It is intended for development and debugging purposes, but may also be suitable for simple games.
* If you are using your own game loop instead, then you do not need the `Matter.Runner` module.
* Instead just call `Engine.update(engine, delta)` in your own loop.
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class Runner
*/ var Runner = {
            };
            module.exports = Runner;
            var Events = __webpack_require__(4);
            var Engine = __webpack_require__(18);
            var Common = __webpack_require__(0);
            (function() {
                var _requestAnimationFrame, _cancelAnimationFrame;
                if (typeof window !== 'undefined') {
                    _requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame;
                    _cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.msCancelAnimationFrame;
                }
                if (!_requestAnimationFrame) {
                    var _frameTimeout;
                    _requestAnimationFrame = function(callback) {
                        _frameTimeout = setTimeout(function() {
                            callback(Common.now());
                        }, 1000 / 60);
                    };
                    _cancelAnimationFrame = function() {
                        clearTimeout(_frameTimeout);
                    };
                }
                /**
     * Creates a new Runner. The options parameter is an object that specifies any properties you wish to override the defaults.
     * @method create
     * @param {} options
     */ Runner.create = function(options) {
                    var defaults = {
                        fps: 60,
                        correction: 1,
                        deltaSampleSize: 60,
                        counterTimestamp: 0,
                        frameCounter: 0,
                        deltaHistory: [],
                        timePrev: null,
                        timeScalePrev: 1,
                        frameRequestId: null,
                        isFixed: false,
                        enabled: true
                    };
                    var runner = Common.extend(defaults, options);
                    runner.delta = runner.delta || 1000 / runner.fps;
                    runner.deltaMin = runner.deltaMin || 1000 / runner.fps;
                    runner.deltaMax = runner.deltaMax || 1000 / (runner.fps * 0.5);
                    runner.fps = 1000 / runner.delta;
                    return runner;
                };
                /**
     * Continuously ticks a `Matter.Engine` by calling `Runner.tick` on the `requestAnimationFrame` event.
     * @method run
     * @param {engine} engine
     */ Runner.run = function(runner, engine) {
                    // create runner if engine is first argument
                    if (typeof runner.positionIterations !== 'undefined') {
                        engine = runner;
                        runner = Runner.create();
                    }
                    (function render(time) {
                        runner.frameRequestId = _requestAnimationFrame(render);
                        if (time && runner.enabled) Runner.tick(runner, engine, time);
                    })();
                    return runner;
                };
                /**
     * A game loop utility that updates the engine and renderer by one step (a 'tick').
     * Features delta smoothing, time correction and fixed or dynamic timing.
     * Consider just `Engine.update(engine, delta)` if you're using your own loop.
     * @method tick
     * @param {runner} runner
     * @param {engine} engine
     * @param {number} time
     */ Runner.tick = function(runner, engine, time) {
                    var timing = engine.timing, correction = 1, delta;
                    // create an event object
                    var event = {
                        timestamp: timing.timestamp
                    };
                    Events.trigger(runner, 'beforeTick', event);
                    if (runner.isFixed) // fixed timestep
                    delta = runner.delta;
                    else {
                        // dynamic timestep based on wall clock between calls
                        delta = time - runner.timePrev || runner.delta;
                        runner.timePrev = time;
                        // optimistically filter delta over a few frames, to improve stability
                        runner.deltaHistory.push(delta);
                        runner.deltaHistory = runner.deltaHistory.slice(-runner.deltaSampleSize);
                        delta = Math.min.apply(null, runner.deltaHistory);
                        // limit delta
                        delta = delta < runner.deltaMin ? runner.deltaMin : delta;
                        delta = delta > runner.deltaMax ? runner.deltaMax : delta;
                        // correction for delta
                        correction = delta / runner.delta;
                        // update engine timing object
                        runner.delta = delta;
                    }
                    // time correction for time scaling
                    if (runner.timeScalePrev !== 0) correction *= timing.timeScale / runner.timeScalePrev;
                    if (timing.timeScale === 0) correction = 0;
                    runner.timeScalePrev = timing.timeScale;
                    runner.correction = correction;
                    // fps counter
                    runner.frameCounter += 1;
                    if (time - runner.counterTimestamp >= 1000) {
                        runner.fps = runner.frameCounter * ((time - runner.counterTimestamp) / 1000);
                        runner.counterTimestamp = time;
                        runner.frameCounter = 0;
                    }
                    Events.trigger(runner, 'tick', event);
                    // update
                    Events.trigger(runner, 'beforeUpdate', event);
                    Engine.update(engine, delta, correction);
                    Events.trigger(runner, 'afterUpdate', event);
                    Events.trigger(runner, 'afterTick', event);
                };
                /**
     * Ends execution of `Runner.run` on the given `runner`, by canceling the animation frame request event loop.
     * If you wish to only temporarily pause the engine, see `engine.enabled` instead.
     * @method stop
     * @param {runner} runner
     */ Runner.stop = function(runner) {
                    _cancelAnimationFrame(runner.frameRequestId);
                };
                /**
     * Alias for `Runner.run`.
     * @method start
     * @param {runner} runner
     * @param {engine} engine
     */ Runner.start = function(runner, engine) {
                    Runner.run(runner, engine);
                };
            /*
    *
    *  Events Documentation
    *
    */ /**
    * Fired at the start of a tick, before any updates to the engine or timing
    *
    * @event beforeTick
    * @param {} event An event object
    * @param {number} event.timestamp The engine.timing.timestamp of the event
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */ /**
    * Fired after engine timing updated, but just before update
    *
    * @event tick
    * @param {} event An event object
    * @param {number} event.timestamp The engine.timing.timestamp of the event
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */ /**
    * Fired at the end of a tick, after engine update and after rendering
    *
    * @event afterTick
    * @param {} event An event object
    * @param {number} event.timestamp The engine.timing.timestamp of the event
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */ /**
    * Fired before update
    *
    * @event beforeUpdate
    * @param {} event An event object
    * @param {number} event.timestamp The engine.timing.timestamp of the event
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */ /**
    * Fired after update
    *
    * @event afterUpdate
    * @param {} event An event object
    * @param {number} event.timestamp The engine.timing.timestamp of the event
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */ /*
    *
    *  Properties Documentation
    *
    */ /**
     * A flag that specifies whether the runner is running or not.
     *
     * @property enabled
     * @type boolean
     * @default true
     */ /**
     * A `Boolean` that specifies if the runner should use a fixed timestep (otherwise it is variable).
     * If timing is fixed, then the apparent simulation speed will change depending on the frame rate (but behaviour will be deterministic).
     * If the timing is variable, then the apparent simulation speed will be constant (approximately, but at the cost of determininism).
     *
     * @property isFixed
     * @type boolean
     * @default false
     */ /**
     * A `Number` that specifies the time step between updates in milliseconds.
     * If `engine.timing.isFixed` is set to `true`, then `delta` is fixed.
     * If it is `false`, then `delta` can dynamically change to maintain the correct apparent simulation speed.
     *
     * @property delta
     * @type number
     * @default 1000 / 60
     */ })();
        /***/ },
        function(module, exports, __webpack_require__) {
            /**
* This module has now been replaced by `Matter.Collision`.
*
* All usage should be migrated to `Matter.Collision`.
* For back-compatibility purposes this module will remain for a short term and then later removed in a future release.
*
* The `Matter.SAT` module contains methods for detecting collisions using the Separating Axis Theorem.
*
* @class SAT
* @deprecated
*/ var SAT = {
            };
            module.exports = SAT;
            var Collision = __webpack_require__(8);
            var Common = __webpack_require__(0);
            var deprecated = Common.deprecated;
            (function() {
                /**
     * Detect collision between two bodies using the Separating Axis Theorem.
     * @deprecated replaced by Collision.collides
     * @method collides
     * @param {body} bodyA
     * @param {body} bodyB
     * @return {collision} collision
     */ SAT.collides = function(bodyA, bodyB) {
                    return Collision.collides(bodyA, bodyB);
                };
                deprecated(SAT, 'collides', 'SAT.collides ➤ replaced by Collision.collides');
            })();
        /***/ },
        function(module, exports, __webpack_require__) {
            /**
* The `Matter.Svg` module contains methods for converting SVG images into an array of vector points.
*
* To use this module you also need the SVGPathSeg polyfill: https://github.com/progers/pathseg
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class Svg
*/ var Svg = {
            };
            module.exports = Svg;
            var Bounds = __webpack_require__(1);
            var Common = __webpack_require__(0);
            (function() {
                /**
     * Converts an SVG path into an array of vector points.
     * If the input path forms a concave shape, you must decompose the result into convex parts before use.
     * See `Bodies.fromVertices` which provides support for this.
     * Note that this function is not guaranteed to support complex paths (such as those with holes).
     * You must load the `pathseg.js` polyfill on newer browsers.
     * @method pathToVertices
     * @param {SVGPathElement} path
     * @param {Number} [sampleLength=15]
     * @return {Vector[]} points
     */ Svg.pathToVertices = function(path, sampleLength) {
                    if (typeof window !== 'undefined' && !('SVGPathSeg' in window)) Common.warn('Svg.pathToVertices: SVGPathSeg not defined, a polyfill is required.');
                    // https://github.com/wout/svg.topoly.js/blob/master/svg.topoly.js
                    var i, il, total, point1, segment1, segments, segmentsQueue, lastSegment, lastPoint, segmentIndex, points = [], lx, ly, length = 0, x = 0, y = 0;
                    sampleLength = sampleLength || 15;
                    var addPoint = function(px, py, pathSegType) {
                        // all odd-numbered path types are relative except PATHSEG_CLOSEPATH (1)
                        var isRelative = pathSegType % 2 === 1 && pathSegType > 1;
                        // when the last point doesn't equal the current point add the current point
                        if (!lastPoint || px != lastPoint.x || py != lastPoint.y) {
                            if (lastPoint && isRelative) {
                                lx = lastPoint.x;
                                ly = lastPoint.y;
                            } else {
                                lx = 0;
                                ly = 0;
                            }
                            var point = {
                                x: lx + px,
                                y: ly + py
                            };
                            // set last point
                            if (isRelative || !lastPoint) lastPoint = point;
                            points.push(point);
                            x = lx + px;
                            y = ly + py;
                        }
                    };
                    var addSegmentPoint = function(segment) {
                        var segType = segment.pathSegTypeAsLetter.toUpperCase();
                        // skip path ends
                        if (segType === 'Z') return;
                        // map segment to x and y
                        switch(segType){
                            case 'M':
                            case 'L':
                            case 'T':
                            case 'C':
                            case 'S':
                            case 'Q':
                                x = segment.x;
                                y = segment.y;
                                break;
                            case 'H':
                                x = segment.x;
                                break;
                            case 'V':
                                y = segment.y;
                                break;
                        }
                        addPoint(x, y, segment.pathSegType);
                    };
                    // ensure path is absolute
                    Svg._svgPathToAbsolute(path);
                    // get total length
                    total = path.getTotalLength();
                    // queue segments
                    segments = [];
                    for(i = 0; i < path.pathSegList.numberOfItems; i += 1)segments.push(path.pathSegList.getItem(i));
                    segmentsQueue = segments.concat();
                    // sample through path
                    while(length < total){
                        // get segment at position
                        segmentIndex = path.getPathSegAtLength(length);
                        segment1 = segments[segmentIndex];
                        // new segment
                        if (segment1 != lastSegment) {
                            while(segmentsQueue.length && segmentsQueue[0] != segment1)addSegmentPoint(segmentsQueue.shift());
                            lastSegment = segment1;
                        }
                        // add points in between when curving
                        // TODO: adaptive sampling
                        switch(segment1.pathSegTypeAsLetter.toUpperCase()){
                            case 'C':
                            case 'T':
                            case 'S':
                            case 'Q':
                            case 'A':
                                point1 = path.getPointAtLength(length);
                                addPoint(point1.x, point1.y, 0);
                                break;
                        }
                        // increment by sample value
                        length += sampleLength;
                    }
                    // add remaining segments not passed by sampling
                    for(i = 0, il = segmentsQueue.length; i < il; ++i)addSegmentPoint(segmentsQueue[i]);
                    return points;
                };
                Svg._svgPathToAbsolute = function(path) {
                    // http://phrogz.net/convert-svg-path-to-all-absolute-commands
                    // Copyright (c) Gavin Kistner
                    // http://phrogz.net/js/_ReuseLicense.txt
                    // Modifications: tidy formatting and naming
                    var x0, y0, x1, y1, x2, y2, segs = path.pathSegList, x = 0, y = 0, len = segs.numberOfItems;
                    for(var i = 0; i < len; ++i){
                        var seg = segs.getItem(i), segType = seg.pathSegTypeAsLetter;
                        if (/[MLHVCSQTA]/.test(segType)) {
                            if ('x' in seg) x = seg.x;
                            if ('y' in seg) y = seg.y;
                        } else {
                            if ('x1' in seg) x1 = x + seg.x1;
                            if ('x2' in seg) x2 = x + seg.x2;
                            if ('y1' in seg) y1 = y + seg.y1;
                            if ('y2' in seg) y2 = y + seg.y2;
                            if ('x' in seg) x += seg.x;
                            if ('y' in seg) y += seg.y;
                            switch(segType){
                                case 'm':
                                    segs.replaceItem(path.createSVGPathSegMovetoAbs(x, y), i);
                                    break;
                                case 'l':
                                    segs.replaceItem(path.createSVGPathSegLinetoAbs(x, y), i);
                                    break;
                                case 'h':
                                    segs.replaceItem(path.createSVGPathSegLinetoHorizontalAbs(x), i);
                                    break;
                                case 'v':
                                    segs.replaceItem(path.createSVGPathSegLinetoVerticalAbs(y), i);
                                    break;
                                case 'c':
                                    segs.replaceItem(path.createSVGPathSegCurvetoCubicAbs(x, y, x1, y1, x2, y2), i);
                                    break;
                                case 's':
                                    segs.replaceItem(path.createSVGPathSegCurvetoCubicSmoothAbs(x, y, x2, y2), i);
                                    break;
                                case 'q':
                                    segs.replaceItem(path.createSVGPathSegCurvetoQuadraticAbs(x, y, x1, y1), i);
                                    break;
                                case 't':
                                    segs.replaceItem(path.createSVGPathSegCurvetoQuadraticSmoothAbs(x, y), i);
                                    break;
                                case 'a':
                                    segs.replaceItem(path.createSVGPathSegArcAbs(x, y, seg.r1, seg.r2, seg.angle, seg.largeArcFlag, seg.sweepFlag), i);
                                    break;
                                case 'z':
                                case 'Z':
                                    x = x0;
                                    y = y0;
                                    break;
                            }
                        }
                        if (segType == 'M' || segType == 'm') {
                            x0 = x;
                            y0 = y;
                        }
                    }
                };
            })();
        /***/ },
        function(module, exports, __webpack_require__) {
            /**
* This module has now been replaced by `Matter.Composite`.
*
* All usage should be migrated to the equivalent functions found on `Matter.Composite`.
* For example `World.add(world, body)` now becomes `Composite.add(world, body)`.
*
* The property `world.gravity` has been moved to `engine.gravity`.
*
* For back-compatibility purposes this module will remain as a direct alias to `Matter.Composite` in the short term during migration.
* Eventually this alias module will be marked as deprecated and then later removed in a future release.
*
* @class World
*/ var World = {
            };
            module.exports = World;
            var Composite = __webpack_require__(5);
            var Common = __webpack_require__(0);
            (function() {
                /**
     * See above, aliases for back compatibility only
     */ World.create = Composite.create;
                World.add = Composite.add;
                World.remove = Composite.remove;
                World.clear = Composite.clear;
                World.addComposite = Composite.addComposite;
                World.addBody = Composite.addBody;
                World.addConstraint = Composite.addConstraint;
            })();
        /***/ }
    ]));
});

},{}]},["6oyVt","6hGTq"], "6hGTq", "parcelRequire0eb0")

//# sourceMappingURL=index.b793e1a0.js.map
