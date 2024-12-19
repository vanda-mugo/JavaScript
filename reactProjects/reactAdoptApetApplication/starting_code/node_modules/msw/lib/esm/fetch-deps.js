var statuses = {
	"100": "Continue",
	"101": "Switching Protocols",
	"102": "Processing",
	"103": "Early Hints",
	"200": "OK",
	"201": "Created",
	"202": "Accepted",
	"203": "Non-Authoritative Information",
	"204": "No Content",
	"205": "Reset Content",
	"206": "Partial Content",
	"207": "Multi-Status",
	"208": "Already Reported",
	"226": "IM Used",
	"300": "Multiple Choices",
	"301": "Moved Permanently",
	"302": "Found",
	"303": "See Other",
	"304": "Not Modified",
	"305": "Use Proxy",
	"307": "Temporary Redirect",
	"308": "Permanent Redirect",
	"400": "Bad Request",
	"401": "Unauthorized",
	"402": "Payment Required",
	"403": "Forbidden",
	"404": "Not Found",
	"405": "Method Not Allowed",
	"406": "Not Acceptable",
	"407": "Proxy Authentication Required",
	"408": "Request Timeout",
	"409": "Conflict",
	"410": "Gone",
	"411": "Length Required",
	"412": "Precondition Failed",
	"413": "Payload Too Large",
	"414": "URI Too Long",
	"415": "Unsupported Media Type",
	"416": "Range Not Satisfiable",
	"417": "Expectation Failed",
	"418": "I'm a Teapot",
	"421": "Misdirected Request",
	"422": "Unprocessable Entity",
	"423": "Locked",
	"424": "Failed Dependency",
	"425": "Too Early",
	"426": "Upgrade Required",
	"428": "Precondition Required",
	"429": "Too Many Requests",
	"431": "Request Header Fields Too Large",
	"451": "Unavailable For Legal Reasons",
	"500": "Internal Server Error",
	"501": "Not Implemented",
	"502": "Bad Gateway",
	"503": "Service Unavailable",
	"504": "Gateway Timeout",
	"505": "HTTP Version Not Supported",
	"506": "Variant Also Negotiates",
	"507": "Insufficient Storage",
	"508": "Loop Detected",
	"509": "Bandwidth Limit Exceeded",
	"510": "Not Extended",
	"511": "Network Authentication Required"
};

/**
 * Sets a response status code and text.
 * @example
 * res(ctx.status(301))
 * res(ctx.status(400, 'Custom status text'))
 * @see {@link https://mswjs.io/docs/api/context/status `ctx.status()`}
 */
const status = (statusCode, statusText) => {
    return (res) => {
        res.status = statusCode;
        res.statusText =
            statusText || statuses[String(statusCode)];
        return res;
    };
};

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn) {
  var module = { exports: {} };
	return fn(module, module.exports), module.exports;
}

var normalizeHeaderName_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.normalizeHeaderName = void 0;
var HEADERS_INVALID_CHARACTERS = /[^a-z0-9\-#$%&'*+.^_`|~]/i;
function normalizeHeaderName(name) {
    if (typeof name !== 'string') {
        name = String(name);
    }
    if (HEADERS_INVALID_CHARACTERS.test(name) || name.trim() === '') {
        throw new TypeError('Invalid character in header field name');
    }
    return name.toLowerCase();
}
exports.normalizeHeaderName = normalizeHeaderName;
});

var normalizeHeaderValue_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.normalizeHeaderValue = void 0;
function normalizeHeaderValue(value) {
    if (typeof value !== 'string') {
        value = String(value);
    }
    return value;
}
exports.normalizeHeaderValue = normalizeHeaderValue;
});

var __generator = (commonjsGlobal && commonjsGlobal.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __read = (commonjsGlobal && commonjsGlobal.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __values = (commonjsGlobal && commonjsGlobal.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};



var HeadersPolyfill = /** @class */ (function () {
    function HeadersPolyfill(init) {
        var _this = this;
        // Normalized header {"name":"a, b"} storage.
        this._headers = {};
        // Keeps the mapping between the raw header name
        // and the normalized header name to ease the lookup.
        this._names = new Map();
        /**
         * @note Cannot check if the `init` is an instance of the `Headers`
         * because that class is only defined in the browser.
         */
        if (['Headers', 'HeadersPolyfill'].includes(init === null || init === void 0 ? void 0 : init.constructor.name) ||
            init instanceof HeadersPolyfill) {
            var initialHeaders = init;
            initialHeaders.forEach(function (value, name) {
                _this.append(name, value);
            }, this);
        }
        else if (Array.isArray(init)) {
            init.forEach(function (_a) {
                var _b = __read(_a, 2), name = _b[0], value = _b[1];
                _this.append(name, Array.isArray(value) ? value.join(', ') : value);
            });
        }
        else if (init) {
            Object.getOwnPropertyNames(init).forEach(function (name) {
                var value = init[name];
                _this.append(name, Array.isArray(value) ? value.join(', ') : value);
            });
        }
    }
    HeadersPolyfill.prototype[Symbol.iterator] = function () {
        return this.entries();
    };
    HeadersPolyfill.prototype.keys = function () {
        var _a, _b, name_1, e_1_1;
        var e_1, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    _d.trys.push([0, 5, 6, 7]);
                    _a = __values(Object.keys(this._headers)), _b = _a.next();
                    _d.label = 1;
                case 1:
                    if (!!_b.done) return [3 /*break*/, 4];
                    name_1 = _b.value;
                    return [4 /*yield*/, name_1];
                case 2:
                    _d.sent();
                    _d.label = 3;
                case 3:
                    _b = _a.next();
                    return [3 /*break*/, 1];
                case 4: return [3 /*break*/, 7];
                case 5:
                    e_1_1 = _d.sent();
                    e_1 = { error: e_1_1 };
                    return [3 /*break*/, 7];
                case 6:
                    try {
                        if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                    }
                    finally { if (e_1) throw e_1.error; }
                    return [7 /*endfinally*/];
                case 7: return [2 /*return*/];
            }
        });
    };
    HeadersPolyfill.prototype.values = function () {
        var _a, _b, value, e_2_1;
        var e_2, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    _d.trys.push([0, 5, 6, 7]);
                    _a = __values(Object.values(this._headers)), _b = _a.next();
                    _d.label = 1;
                case 1:
                    if (!!_b.done) return [3 /*break*/, 4];
                    value = _b.value;
                    return [4 /*yield*/, value];
                case 2:
                    _d.sent();
                    _d.label = 3;
                case 3:
                    _b = _a.next();
                    return [3 /*break*/, 1];
                case 4: return [3 /*break*/, 7];
                case 5:
                    e_2_1 = _d.sent();
                    e_2 = { error: e_2_1 };
                    return [3 /*break*/, 7];
                case 6:
                    try {
                        if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                    }
                    finally { if (e_2) throw e_2.error; }
                    return [7 /*endfinally*/];
                case 7: return [2 /*return*/];
            }
        });
    };
    HeadersPolyfill.prototype.entries = function () {
        var _a, _b, name_2, e_3_1;
        var e_3, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    _d.trys.push([0, 5, 6, 7]);
                    _a = __values(Object.keys(this._headers)), _b = _a.next();
                    _d.label = 1;
                case 1:
                    if (!!_b.done) return [3 /*break*/, 4];
                    name_2 = _b.value;
                    return [4 /*yield*/, [name_2, this.get(name_2)]];
                case 2:
                    _d.sent();
                    _d.label = 3;
                case 3:
                    _b = _a.next();
                    return [3 /*break*/, 1];
                case 4: return [3 /*break*/, 7];
                case 5:
                    e_3_1 = _d.sent();
                    e_3 = { error: e_3_1 };
                    return [3 /*break*/, 7];
                case 6:
                    try {
                        if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                    }
                    finally { if (e_3) throw e_3.error; }
                    return [7 /*endfinally*/];
                case 7: return [2 /*return*/];
            }
        });
    };
    /**
     * Returns a `ByteString` sequence of all the values of a header with a given name.
     */
    HeadersPolyfill.prototype.get = function (name) {
        return this._headers[normalizeHeaderName_1.normalizeHeaderName(name)] || null;
    };
    /**
     * Sets a new value for an existing header inside a `Headers` object, or adds the header if it does not already exist.
     */
    HeadersPolyfill.prototype.set = function (name, value) {
        var normalizedName = normalizeHeaderName_1.normalizeHeaderName(name);
        this._headers[normalizedName] = normalizeHeaderValue_1.normalizeHeaderValue(value);
        this._names.set(normalizedName, name);
    };
    /**
     * Appends a new value onto an existing header inside a `Headers` object, or adds the header if it does not already exist.
     */
    HeadersPolyfill.prototype.append = function (name, value) {
        var resolvedValue = this.has(name) ? this.get(name) + ", " + value : value;
        this.set(name, resolvedValue);
    };
    /**
     * Deletes a header from the `Headers` object.
     */
    HeadersPolyfill.prototype.delete = function (name) {
        if (!this.has(name)) {
            return this;
        }
        var normalizedName = normalizeHeaderName_1.normalizeHeaderName(name);
        delete this._headers[normalizedName];
        this._names.delete(normalizedName);
        return this;
    };
    /**
     * Returns the object of all the normalized headers.
     */
    HeadersPolyfill.prototype.all = function () {
        return this._headers;
    };
    /**
     * Returns the object of all the raw headers.
     */
    HeadersPolyfill.prototype.raw = function () {
        var _this = this;
        return Object.entries(this._headers).reduce(function (headers, _a) {
            var _b = __read(_a, 2), name = _b[0], value = _b[1];
            headers[_this._names.get(name)] = value;
            return headers;
        }, {});
    };
    /**
     * Returns a boolean stating whether a `Headers` object contains a certain header.
     */
    HeadersPolyfill.prototype.has = function (name) {
        return this._headers.hasOwnProperty(normalizeHeaderName_1.normalizeHeaderName(name));
    };
    /**
     * Traverses the `Headers` object,
     * calling the given callback for each header.
     */
    HeadersPolyfill.prototype.forEach = function (callback, thisArg) {
        for (var name_3 in this._headers) {
            if (this._headers.hasOwnProperty(name_3)) {
                callback.call(thisArg, this._headers[name_3], name_3, this);
            }
        }
    };
    return HeadersPolyfill;
}());
var _default = HeadersPolyfill;

var Headers = /*#__PURE__*/Object.defineProperty({
	default: _default
}, '__esModule', {value: true});

var headersToList_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.headersToList = void 0;
function headersToList(headers) {
    var headersList = [];
    headers.forEach(function (value, name) {
        var resolvedValue = value.includes(',')
            ? value.split(',').map(function (value) { return value.trim(); })
            : value;
        headersList.push([name, resolvedValue]);
    });
    return headersList;
}
exports.headersToList = headersToList;
});

var headersToString_1 = createCommonjsModule(function (module, exports) {
var __read = (commonjsGlobal && commonjsGlobal.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.headersToString = void 0;

/**
 * Converts a given `Headers` instance to its string representation.
 */
function headersToString(headers) {
    var list = headersToList_1.headersToList(headers);
    var lines = list.map(function (_a) {
        var _b = __read(_a, 2), name = _b[0], value = _b[1];
        var values = [].concat(value);
        return name + ": " + values.join(', ');
    });
    return lines.join('\r\n');
}
exports.headersToString = headersToString;
});

var headersToObject_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.headersToObject = void 0;
// List of headers that cannot have multiple values,
// while potentially having a comma in their single value.
var singleValueHeaders = ['user-agent'];
/**
 * Converts a given `Headers` instance into a plain object.
 * Respects headers with multiple values.
 */
function headersToObject(headers) {
    var headersObject = {};
    headers.forEach(function (value, name) {
        var isMultiValue = !singleValueHeaders.includes(name.toLowerCase()) && value.includes(',');
        headersObject[name] = isMultiValue
            ? value.split(',').map(function (s) { return s.trim(); })
            : value;
    });
    return headersObject;
}
exports.headersToObject = headersToObject;
});

var stringToHeaders_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringToHeaders = void 0;

/**
 * Converts a string representation of headers (i.e. from XMLHttpRequest)
 * to a new `Headers` instance.
 */
function stringToHeaders(str) {
    var lines = str.trim().split(/[\r\n]+/);
    return lines.reduce(function (headers, line) {
        var parts = line.split(': ');
        var name = parts.shift();
        var value = parts.join(': ');
        headers.append(name, value);
        return headers;
    }, new Headers.default());
}
exports.stringToHeaders = stringToHeaders;
});

var listToHeaders_1 = createCommonjsModule(function (module, exports) {
var __read = (commonjsGlobal && commonjsGlobal.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.listToHeaders = void 0;

function listToHeaders(list) {
    var headers = new Headers.default();
    list.forEach(function (_a) {
        var _b = __read(_a, 2), name = _b[0], value = _b[1];
        var values = [].concat(value);
        values.forEach(function (value) {
            headers.append(name, value);
        });
    });
    return headers;
}
exports.listToHeaders = listToHeaders;
});

var reduceHeadersObject_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.reduceHeadersObject = void 0;
/**
 * Reduces given headers object instnace.
 */
function reduceHeadersObject(headers, reducer, initialState) {
    return Object.keys(headers).reduce(function (nextHeaders, name) {
        return reducer(nextHeaders, name, headers[name]);
    }, initialState);
}
exports.reduceHeadersObject = reduceHeadersObject;
});

var objectToHeaders_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.objectToHeaders = void 0;


/**
 * Converts a given headers object to a new `Headers` instance.
 */
function objectToHeaders(headersObject) {
    return reduceHeadersObject_1.reduceHeadersObject(headersObject, function (headers, name, value) {
        var values = [].concat(value).filter(Boolean);
        values.forEach(function (value) {
            headers.append(name, value);
        });
        return headers;
    }, new Headers.default());
}
exports.objectToHeaders = objectToHeaders;
});

var flattenHeadersList_1 = createCommonjsModule(function (module, exports) {
var __read = (commonjsGlobal && commonjsGlobal.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.flattenHeadersList = void 0;
function flattenHeadersList(list) {
    return list.map(function (_a) {
        var _b = __read(_a, 2), name = _b[0], values = _b[1];
        return [name, [].concat(values).join('; ')];
    });
}
exports.flattenHeadersList = flattenHeadersList;
});

var flattenHeadersObject_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.flattenHeadersObject = void 0;

function flattenHeadersObject(headersObject) {
    return reduceHeadersObject_1.reduceHeadersObject(headersObject, function (headers, name, value) {
        headers[name] = [].concat(value).join('; ');
        return headers;
    }, {});
}
exports.flattenHeadersObject = flattenHeadersObject;
});

var lib = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.flattenHeadersObject = exports.flattenHeadersList = exports.reduceHeadersObject = exports.objectToHeaders = exports.listToHeaders = exports.stringToHeaders = exports.headersToObject = exports.headersToList = exports.headersToString = exports.Headers = void 0;

Object.defineProperty(exports, "Headers", { enumerable: true, get: function () { return Headers.default; } });

Object.defineProperty(exports, "headersToString", { enumerable: true, get: function () { return headersToString_1.headersToString; } });

Object.defineProperty(exports, "headersToList", { enumerable: true, get: function () { return headersToList_1.headersToList; } });

Object.defineProperty(exports, "headersToObject", { enumerable: true, get: function () { return headersToObject_1.headersToObject; } });

Object.defineProperty(exports, "stringToHeaders", { enumerable: true, get: function () { return stringToHeaders_1.stringToHeaders; } });

Object.defineProperty(exports, "listToHeaders", { enumerable: true, get: function () { return listToHeaders_1.listToHeaders; } });

Object.defineProperty(exports, "objectToHeaders", { enumerable: true, get: function () { return objectToHeaders_1.objectToHeaders; } });

Object.defineProperty(exports, "reduceHeadersObject", { enumerable: true, get: function () { return reduceHeadersObject_1.reduceHeadersObject; } });

Object.defineProperty(exports, "flattenHeadersList", { enumerable: true, get: function () { return flattenHeadersList_1.flattenHeadersList; } });

Object.defineProperty(exports, "flattenHeadersObject", { enumerable: true, get: function () { return flattenHeadersObject_1.flattenHeadersObject; } });
});

/**
 * Sets one or multiple response headers.
 * @see {@link https://mswjs.io/docs/api/context/set `ctx.set()`}
 */
function set(...args) {
    return (res) => {
        const [name, value] = args;
        if (typeof name === 'string') {
            res.headers.append(name, value);
        }
        else {
            const headers = lib.objectToHeaders(name);
            headers.forEach((value, name) => {
                res.headers.append(name, value);
            });
        }
        return res;
    };
}

/**
 * Parses a given string into a JSON.
 * Does not throw an exception on an invalid JSON string.
 */
function jsonParse(str) {
    try {
        return JSON.parse(str);
    }
    catch (error) {
        return undefined;
    }
}

/**
 * Sets the given value as the JSON body of the response.
 * Appends a `Content-Type: application/json` header on the
 * mocked response.
 * @example
 * res(ctx.json('Some string'))
 * res(ctx.json({ key: 'value' }))
 * res(ctx.json([1, '2', false, { ok: true }]))
 * @see {@link https://mswjs.io/docs/api/context/json `ctx.json()`}
 */
const json = (body) => {
    return (res) => {
        res.headers.set('Content-Type', 'application/json');
        res.body = JSON.stringify(body);
        return res;
    };
};

/**
 * Returns a boolean indicating if the current process is running in Node.js environment.
 * @see https://github.com/mswjs/msw/pull/255
 */
function isNodeProcess() {
    // Check browser environment.
    if (typeof global !== 'object') {
        return false;
    }
    // Check nodejs or React Native environment.
    if (Object.prototype.toString.call(global.process) === '[object process]' ||
        navigator.product === 'ReactNative') {
        return true;
    }
}

const SET_TIMEOUT_MAX_ALLOWED_INT = 2147483647;
const MIN_SERVER_RESPONSE_TIME = 100;
const MAX_SERVER_RESPONSE_TIME = 400;
const NODE_SERVER_RESPONSE_TIME = 5;
const getRandomServerResponseTime = () => {
    if (isNodeProcess()) {
        return NODE_SERVER_RESPONSE_TIME;
    }
    return Math.floor(Math.random() * (MAX_SERVER_RESPONSE_TIME - MIN_SERVER_RESPONSE_TIME) +
        MIN_SERVER_RESPONSE_TIME);
};
/**
 * Delays the response by the given duration (ms).
 * @example
 * res(ctx.delay(1200)) // delay response by 1200ms
 * res(ctx.delay()) // emulate realistic server response time
 * res(ctx.delay('infinite')) // delay response infinitely
 * @see {@link https://mswjs.io/docs/api/context/delay `ctx.delay()`}
 */
const delay = (durationOrMode) => {
    return (res) => {
        let delayTime;
        if (typeof durationOrMode === 'string') {
            switch (durationOrMode) {
                case 'infinite': {
                    // Using `Infinity` as a delay value executes the response timeout immediately.
                    // Instead, use the maximum allowed integer for `setTimeout`.
                    delayTime = SET_TIMEOUT_MAX_ALLOWED_INT;
                    break;
                }
                case 'real': {
                    delayTime = getRandomServerResponseTime();
                    break;
                }
                default: {
                    throw new Error(`Failed to delay a response: unknown delay mode "${durationOrMode}". Please make sure you provide one of the supported modes ("real", "infinite") or a number to "ctx.delay".`);
                }
            }
        }
        else if (typeof durationOrMode === 'undefined') {
            // Use random realistic server response time when no explicit delay duration was provided.
            delayTime = getRandomServerResponseTime();
        }
        else {
            // Guard against passing values like `Infinity` or `Number.MAX_VALUE`
            // as the response delay duration. They don't produce the result you may expect.
            if (durationOrMode > SET_TIMEOUT_MAX_ALLOWED_INT) {
                throw new Error(`Failed to delay a response: provided delay duration (${durationOrMode}) exceeds the maximum allowed duration for "setTimeout" (${SET_TIMEOUT_MAX_ALLOWED_INT}). This will cause the response to be returned immediately. Please use a number within the allowed range to delay the response by exact duration, or consider the "infinite" delay mode to delay the response indefinitely.`);
            }
            delayTime = durationOrMode;
        }
        res.delay = delayTime;
        return res;
    };
};

const useFetch = isNodeProcess() ? require('node-fetch') : window.fetch;
const augmentRequestInit = (requestInit) => {
    const headers = new lib.Headers(requestInit.headers);
    headers.set('x-msw-bypass', 'true');
    return Object.assign(Object.assign({}, requestInit), { headers: headers.all() });
};
const createFetchRequestParameters = (input) => {
    const { body, method } = input;
    const requestParameters = Object.assign(Object.assign({}, input), { body: undefined });
    if (['GET', 'HEAD'].includes(method)) {
        return requestParameters;
    }
    requestParameters.body =
        typeof body === 'object' ? JSON.stringify(body) : body;
    return requestParameters;
};
/**
 * Performs a bypassed request inside a request handler.
 * @example
 * const originalResponse = await ctx.fetch(req)
 * @see {@link https://mswjs.io/docs/api/context/fetch `ctx.fetch()`}
 */
const fetch = (input, requestInit = {}) => {
    if (typeof input === 'string') {
        return useFetch(input, augmentRequestInit(requestInit));
    }
    const requestParameters = createFetchRequestParameters(input);
    const derivedRequestInit = augmentRequestInit(requestParameters);
    return useFetch(input.url.href, derivedRequestInit);
};

export { commonjsGlobal as a, set as b, createCommonjsModule as c, delay as d, json as e, fetch as f, isNodeProcess as i, jsonParse as j, lib as l, status as s };
