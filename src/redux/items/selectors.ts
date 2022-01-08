import { StoreState } from "redux/store";
import { isSym, ItemId, Items } from "./types";


//1つのアイテムを参照したいときのselector。どのアイテム化を指定するためにitemIdを渡す
export const getItem = (itemId:ItemId)=>{
    return (state:StoreState)=>state.items[itemId] ;
} ;

//複数のアイテムを参照したいときのselector。引数を省略するとすべてのアイテムを取得
export const getItems = (itemIds?:ItemId[])=>{
    if(itemIds){
        //引数の指定があった場合はitemIdsに含まれるアイテムを取得
        return (state:StoreState)=>{
            return Object.entries(state.items).reduce((items, [itemId,item])=>{
                if(itemIds.includes(itemId) && item){
                    items[itemId] = item ;
                }
                return items ;
            }, {} as Items) ;
        } ;
    }
    return (state:StoreState)=>state.items ;
} ;

export const getOption = (itemId:ItemId,name:string)=>{
    return (state:StoreState)=>{
        const item = state.items[itemId] ;
        if(isSym(item)){
            const option = item.options.find(option=>option.name === name) ;
            if(option){
                return option ;
            }else{
                throw new Error(`${name} is not exist in ${itemId}'id`) ;
            }
        }else{
            throw new Error(`${itemId} is not sym`) ;
        }
    } ;
}