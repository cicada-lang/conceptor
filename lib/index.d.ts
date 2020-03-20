declare class context_t {
    objects: Array<string>;
    attributes: Array<string>;
    relation: Set<string>;
    constructor();
}
declare type entry_t = {
    [key: string]: string;
};
declare function context_from_table(table: Array<entry_t>): context_t;
declare function concept_p(ctx: context_t, extent: Set<string>, intent: Set<string>): boolean;
