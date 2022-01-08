
export type ItemId = string ;

export type OptionValue = 
    string | number | boolean | 
    string[] | number[] | boolean[] ;
export interface Option {
    name:string;
    value:OptionValue ;
}

export interface Item {
    itemType:string;
}

export interface Sym extends Item {
    options:Option[];
    parentFlow:ItemId,
}

export interface Flow extends Item {
    childrenSyms:ItemId[] ;
}

export type Items = {
    [key:ItemId] :Item ;
} ;

export function isItem(arg: any):arg is Item{
    return (
        arg && 
        typeof arg === "object" &&
        typeof arg.itemType === "string"
    ) ;
}

export function isSym(arg: any):arg is Sym{
    return (
        arg && 
        arg.options instanceof Array && 
        isItem(arg)
    ) ;
}

export function isFlow(arg: any):arg is Flow{
    return (
        arg && 
        arg.childrenSyms instanceof Array && 
        isItem(arg)
    ) ;
}

