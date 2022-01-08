import { reducerWithInitialState } from "typescript-fsa-reducers";
import * as actions from "./actions" ;
import { Flow, isSym, Items } from "./types";

export const init :Items = {} ;

export const items = reducerWithInitialState(init)
    .case( actions.set ,(state,payload)=>{
        const newState = {
            ...state,
            [payload.itemId] : payload.item,
        } ;
        return newState ;
    })
    .case( actions.remove ,(state,payload)=>{
        const deleteItem = state[payload.itemId] ;
        let newState = {...state} as Items ;
        let isUpdate = false ;
        //アイテム一覧から削除
        const keys = Object.keys(state)
        if(keys.includes(payload.itemId)){
            isUpdate = true ;
            delete newState[payload.itemId] ;
        }
        //フローの場合はchildrenSymsからも削除
        if(isSym(deleteItem)){
            const parentFlow = (newState[deleteItem.parentFlow]) as Flow ;
            parentFlow.childrenSyms = parentFlow.childrenSyms.filter(symId=>symId!==payload.itemId) ;
        }
        //戻り値
        if(isUpdate){
            return newState ;
        }
        return state ;
    })
    .case( actions.loadItems,(state,payload)=>{
        return payload.items ;
    })



