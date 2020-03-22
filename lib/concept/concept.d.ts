import * as Context from "../context/context";
export declare class Concept {
    ctx: Context.Context;
    objs: Set<string>;
    attrs: Set<string>;
    constructor(ctx: Context.Context, objs: Set<string>, attrs: Set<string>);
}
export * from "./concept-builder";
export * from "./concept-operator";
export * from "./concept-predicate";
export * from "./concept-pretty";
