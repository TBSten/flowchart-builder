import { Flow } from "redux/items/types";
import itemCreator from "sym/base/creator";

export default function flowCreator():Flow{
    return {
        ...itemCreator("flow"),
        childrenSyms:[],
    } ;
}