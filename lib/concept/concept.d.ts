import * as Ctx from "../ctx/ctx";
export declare class Concept {
    objs: Set<string>;
    attrs: Set<string>;
    constructor(ctx: Ctx.Ctx, objs: Set<string>, attrs: Set<string>);
}
export * from "./concept_builder";
export * from "./concept_operator";
export * from "./concept_predicate";
export * from "./concept_pretty";
