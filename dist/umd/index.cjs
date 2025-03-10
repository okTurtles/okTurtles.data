// =======================
// Domain: Data persistence
// =======================
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@sbp/sbp"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const sbp_1 = __importDefault(require("@sbp/sbp"));
    const _store = new Map();
    exports.default = (0, sbp_1.default)('sbp/selectors/register', {
        'okTurtles.data/get': function (key) {
            return _store.get(key);
        },
        'okTurtles.data/set': function (key, data) {
            _store.set(key, data);
            return data;
        },
        'okTurtles.data/delete': function (key) {
            return _store.delete(key);
        },
        'okTurtles.data/add': function (key, data) {
            const array = _store.get(key);
            if (array) {
                array.push(data);
            }
            else {
                _store.set(key, [data]);
            }
        },
        'okTurtles.data/remove': function (key, data) {
            const array = _store.get(key);
            if (array) {
                const aLen = array.length;
                const filtered = array.filter((v) => v !== data);
                _store.set(key, filtered);
                return aLen - filtered.length;
            }
        },
        'okTurtles.data/apply': function (key, fn) {
            return fn(_store.get(key));
        }
    });
});
