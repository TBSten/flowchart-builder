import actionCreatorFactory from "typescript-fsa" ;
import { Item, ItemId, Items } from "./types";

const actionCreator = actionCreatorFactory() ;

//いつ使うのかわからないけど公式ドキュメントに載っていたのでおいておきます
export const init = actionCreator("items/init");
//アイテムの追加（更新）
export const set = actionCreator<{ itemId:ItemId,item:Item, }>("items/set");
//アイテムの削除
export const remove = actionCreator<{ itemId:ItemId}>("items/remove");
//アイテムをセーブデータからロード
export const loadItems = actionCreator<{items:Items}>("items/load") ;

