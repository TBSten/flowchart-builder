import { useDispatch, useSelector } from "react-redux";
import { remove, set } from "./actions";
import { getItem, getItems,  } from "./selectors";
import { Item, ItemId } from "./types";

export const useItem = (itemId:ItemId)=>{
    const item = useSelector(getItem(itemId));
    return item ;
} ;

export const useItems = (itemIds?:ItemId[])=>{
    const item = useSelector(getItems(itemIds));
    return item ;
} ;

export const useItemOperations = ()=>{
    const dispatch = useDispatch() ;
    const setItem = (itemId:ItemId,item:Item)=>{
        dispatch(set({itemId,item}));
    } ;
    const removeItem = (itemId:ItemId)=>{
        dispatch(remove({itemId}))
    } ;
    return {
        setItem,
        removeItem,
    } ;
} ;


