export declare class Context {
    objects: Array<string>;
    attributes: Array<string>;
    incidence: Set<string>;
    constructor();
}
export declare type Entry = {
    [key: string]: string;
};
export declare function context_from_table(table: Array<Entry>): Context;
export declare function derive_extent(context: Context, intent: Set<string>): Set<string>;
export declare function derive_intent(context: Context, intent: Set<string>): Set<string>;
export declare function extent_closure(context: Context, extent: Set<string>): Set<string>;
export declare function intent_closure(context: Context, intent: Set<string>): Set<string>;
export declare function formal_concept_p(context: Context, extent: Set<string>, intent: Set<string>): boolean;
