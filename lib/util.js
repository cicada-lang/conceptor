"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fast_deep_equal_1 = __importDefault(require("fast-deep-equal"));
function forall(s, p) {
    for (let x of s) {
        if (!p(x))
            return false;
    }
    return true;
}
exports.forall = forall;
function exists(s, p) {
    for (let x of s) {
        if (p(x))
            return true;
    }
    return false;
}
exports.exists = exists;
function include_p(big_set, small_set) {
    return forall(small_set, (x) => big_set.has(x));
}
exports.include_p = include_p;
// NOTE The module "fast-deep-equal": https://github.com/epoberezkin/fast-deep-equal
// Comparison details of Node's `assert.deepEqual()`:
//   https://nodejs.org/api/all.html#assert_assert_deepstrictequal_actual_expected_message
function equal(x, y) {
    if (typeof x.equal === 'function') {
        return x.equal(y);
    }
    else {
        return fast_deep_equal_1.default(x, y);
    }
}
exports.equal = equal;
