import { ItemId } from "redux/items/types";
import actionCreatorFactory from "typescript-fsa" ;
import { Mode } from "./types";

const actionCreator = actionCreatorFactory() ;

//いつ使うのかわからないけど公式ドキュメントに載っていたのでおいておきます
export const init = actionCreator("app/init");
//選択中アイテムを更新
export const setSelectItemId = actionCreator<{itemId:null|ItemId}>("app/selectItemId/set");

//モードを切り替える
export const setMode = actionCreator<{mode:Mode}>("app/mode/set") ;

