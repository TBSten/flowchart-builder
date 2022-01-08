import { ItemId, Sym } from "redux/items/types";
import itemCreator from "sym/base/creator";

export default function rectCreator(parentFlow:ItemId) :Sym{
    return {
        ...itemCreator("rect"),
        parentFlow,
        options:[
            {name:"テキスト", value:"表示文字列", },
        ],
    } ;
}

