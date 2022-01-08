
import { ItemId } from "redux/items/types";
import actionCreatorFactory from "typescript-fsa" ;

const actionCreator = actionCreatorFactory() ;

//titleに関するActionCreator
export const setTitle = actionCreator<{title:string}>("meta/setTitle") ;

//flowに関するActionCreator
export const addFlow = actionCreator<{flowId:ItemId}>("meta/flow/add");
export const removeFlow = actionCreator<{flowId:ItemId}>("meta/flow/remove");

//ロード処理
export const loadMeta = actionCreator<{meta:{flows:ItemId[],title:string,}}>("meta/load") ;


