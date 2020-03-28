export declare function forall<A>(s: Set<A>, p: (x: A) => boolean): boolean;
export declare function exists<A>(s: Set<A>, p: (x: A) => boolean): boolean;
export declare function include<A>(big_set: Set<A>, small_set: Set<A>): boolean;
export declare function union<A>(...sets: Array<Set<A>>): Set<A>;
export declare function intersection<A>(...sets: Array<Set<A>>): Set<A>;
