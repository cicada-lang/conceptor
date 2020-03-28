"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
function include(big_set, small_set) {
    return forall(small_set, (x) => big_set.has(x));
}
exports.include = include;
function union(...sets) {
    let result = new Set();
    for (let s of sets)
        for (let x of s)
            result.add(x);
    return result;
}
exports.union = union;
function intersection(...sets) {
    if (sets.length === 0)
        return new Set();
    let head = sets[0];
    let tail = sets.slice(1);
    let result = head;
    for (let s of tail)
        for (let x of result)
            if (!s.has(x))
                result.delete(x);
    return result;
}
exports.intersection = intersection;
