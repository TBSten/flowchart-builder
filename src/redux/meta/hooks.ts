import { useDispatch, useSelector } from "react-redux";
import { getFlows, getTitle } from "./selectors";
import * as actions from "./actions" ;
import { ItemId } from "redux/items/types";


export const useTitle = ()=>{
    const dispatch = useDispatch() ;
    const title = useSelector(getTitle()) ;
    const setTitle = (title:string)=>{
        dispatch(actions.setTitle({title}))
    } ;
    return {
        title,
        setTitle,
    } ;
} ;

export const useFlows = ()=>{
    const dispatch = useDispatch() ;
    const flows = useSelector(getFlows()) ;
    const addFlow = (flowId:ItemId)=>{
        dispatch(actions.addFlow({flowId}));
    } ;
    const removeFlow = (flowId:ItemId)=>{
        dispatch(actions.removeFlow({flowId}));
    } ;
    return {
        flows,
        addFlow,
        removeFlow,
    } ;
} ;


