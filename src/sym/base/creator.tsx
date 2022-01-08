import { Item } from "redux/items/types";

export default function itemCreator(itemType:string) :Item{
    return {
        itemType,
    } ;
}

