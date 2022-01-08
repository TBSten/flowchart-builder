import { useDispatch, useSelector } from "react-redux";
import { ItemId } from "redux/items/types";
import { setSelectItemId,setMode } from "./actions";
import { getMode, getSelectItemId } from "./selectors";
import { Mode } from "./types";

export function useSelectItem(){
    const selectItemId = useSelector(getSelectItemId());
    const dispatch = useDispatch() ;
    const changeSelectItemId = (itemId:null|ItemId)=>{
        dispatch(setSelectItemId({itemId}));
    }
    return {
        selectItemId,
        changeSelectItemId,
    } ;
}

export function useMode() {
    const mode = useSelector(getMode()) ;
    const dispatch = useDispatch() ;
    const set = (mode:Mode)=>{
        dispatch(setMode({mode})) ;
    } ;
    return {
        mode,
        setMode:set,
    } ;
}
