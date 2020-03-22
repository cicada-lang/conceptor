export declare class Lattice<T> {
    pre: (x: T, y: T) => boolean;
    join: (x: T, y: T) => T;
    meet: (x: T, y: T) => T;
    constructor(pre: (x: T, y: T) => boolean, join: (x: T, y: T) => T, meet: (x: T, y: T) => T);
}
export declare class CompleteLattice<T> extends Lattice<T> {
    pre: (x: T, y: T) => boolean;
    sup: (xs: Array<T>) => T;
    inf: (xs: Array<T>) => T;
    constructor(pre: (x: T, y: T) => boolean, sup: (xs: Array<T>) => T, inf: (xs: Array<T>) => T);
    get top(): T;
    get bottom(): T;
}
