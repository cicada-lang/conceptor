import * as Ctx from "../ctx/ctx";
export declare class Concept {
    objs: Set<string>;
    attrs: Set<string>;
    constructor(ctx: Ctx.Ctx, objs: Set<string>, attrs: Set<string>);
}
export * from "./concept-builder";
export * from "./concept-operator";
export * from "./concept-predicate";
export * from "./concept-pretty";
