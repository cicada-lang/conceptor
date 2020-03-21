"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const util = __importStar(require("./util"));
{
    let x = [1, 2, new Set([1, 2, [1, 2, 3]])];
    let y = [1, 2, new Set([1, 2, [1, 2, 3]])];
    assert_1.default(util.equal(x, y));
}
{
    let x = new Map()
        .set("a", "a")
        .set("b", "b")
        .set("c", "c");
    let y = new Map()
        .set("c", "c")
        .set("b", "b")
        .set("a", "a");
    assert_1.default(util.equal(x, y));
}
{
    let x = [1, { x: "x", y: "y" }, new Set([1, 2, [1, 2, { x: "x", y: "y" }]])];
    let y = [1, { x: "x", y: "y" }, new Set([1, 2, [1, 2, { x: "x", y: "y" }]])];
    assert_1.default(util.equal(x, y));
}
{
    function f(x) {
        return `x: ${x}`;
    }
    let x = [f, { x: "x", y: "y" }, new Set([1, 2, [1, 2, { x: "x", y: "y" }]])];
    let y = [f, { x: "x", y: "y" }, new Set([1, 2, [1, 2, { x: "x", y: "y" }]])];
    assert_1.default(util.equal(x, y));
}
{
    function f(x) {
        return (y) => `x: ${x}, y: ${y}`;
    }
    let x = f(1);
    let y = f(1);
    assert_1.default(!util.equal(x, y));
}
