import * as Context from "../context/context";
export declare class Concept {
    ctx: Context.Context;
    objs: Set<string>;
    attrs: Set<string>;
    constructor(ctx: Context.Context, objs: Set<string>, attrs: Set<string>);
}
export declare function objs_match_attrs_p(ctx: Context.Context, objs: Set<string>, attrs: Set<string>): boolean;
export declare function subconcept_p(x: Concept, y: Concept): boolean;
export declare function superconcept_p(x: Concept, y: Concept): boolean;
export declare function greatest_common_subconcept(xs: Array<Concept>): Concept;
export declare function least_common_superconcept(xs: Array<Concept>): Concept;
