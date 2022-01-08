import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadItems } from "redux/items/actions";
import { useItems } from "redux/items/hooks";
import { ItemId, Items } from "redux/items/types";
import { loadMeta } from "redux/meta/actions";
import { StoreState } from "redux/store";
import store from "storejs" ;

const STORE_KEY = "flowchartbuilder-savedata" ;

export const useSaveBrowser = ()=>{
    //itemsとmetaを取得
    const items = useItems();
    const meta = useSelector((state:StoreState)=>state.meta);
    const dispatch = useDispatch() ;
    const save = ()=>{
        //セーブ対象をオブジェクトとして取得
        const saveData = {
            items,
            meta,
        } ;
        //ブラウザに保存
        store(STORE_KEY,JSON.stringify(saveData));
    } ;
    useEffect(()=>{
        //セーブデータのロード機能
        const saveData = {
            items:{},
            meta:{
                title:"",
                flows:[],
            },
            ...JSON.parse(store(STORE_KEY)),
        } as const ;
        dispatch(loadItems({items:saveData.items}));
        dispatch(loadMeta({meta:saveData.meta}));
    },[]);
    useEffect(()=>{
        //オートセーブ機能
        const autoSaveId = setInterval(()=>{
            save();
        },5*1000);//5秒ごとに保存
        return ()=>{
            clearInterval(autoSaveId) ;
        }
    },[items,meta,])
} ;
