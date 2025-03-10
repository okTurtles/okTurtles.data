// =======================
// Domain: Data persistence
// =======================
import sbp from '@sbp/sbp';
const _store = new Map();
export default sbp('sbp/selectors/register', {
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
