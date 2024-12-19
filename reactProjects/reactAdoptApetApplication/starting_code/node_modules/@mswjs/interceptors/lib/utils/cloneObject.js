"use strict";
var __read = (this && this.__read) || function (o, n) {
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
exports.cloneObject = void 0;
var isObject_1 = require("./isObject");
function cloneObject(obj) {
    return Object.entries(obj).reduce(function (acc, _a) {
        var _b = __read(_a, 2), key = _b[0], value = _b[1];
        acc[key] = isObject_1.isObject(value) ? cloneObject(value) : value;
        return acc;
    }, {});
}
exports.cloneObject = cloneObject;
//# sourceMappingURL=cloneObject.js.map