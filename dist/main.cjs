'use strict'; // =======================
// Domain: Data persistence
// =======================

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _sbpJs = _interopRequireDefault(require("sbp-js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _store = new Map();

var _default = (0, _sbpJs.default)('sbp/selectors/register', {
  'okTurtles.data/get': function okTurtlesDataGet(key) {
    return _store.get(key);
  },
  'okTurtles.data/set': function okTurtlesDataSet(key, data) {
    _store.set(key, data);

    return data;
  },
  'okTurtles.data/delete': function okTurtlesDataDelete(key) {
    return _store.delete(key);
  },
  'okTurtles.data/add': function okTurtlesDataAdd(key, data) {
    var array = _store.get(key);

    if (array) {
      array.push(data);
    } else {
      _store.set(key, [data]);
    }
  },
  'okTurtles.data/remove': function okTurtlesDataRemove(key, data) {
    var array = _store.get(key);

    if (array) {
      var aLen = array.length;
      var filtered = array.filter(function (v) {
        return v !== data;
      });

      _store.set(key, filtered);

      return aLen - filtered.length;
    }
  },
  'okTurtles.data/apply': function okTurtlesDataApply(key, fn) {
    return fn(_store.get(key));
  }
});

exports.default = _default;
