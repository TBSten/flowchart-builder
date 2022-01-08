import Box from "@mui/material/Box";
import React,{ FC, useEffect, useRef } from "react";
import { useSelectItem } from "redux/app/hooks";
import { useItem } from "redux/items/hooks";
import { Item, ItemId } from "redux/items/types";

export const baseSetting = {
    size:{
        width:180,
        height:40,
        lineWidth:2,
    },
    color:{
        fore:"black",
        back:"white",
    },
} ;
const width = baseSetting.size.width ;
const height = baseSetting.size.height ;

export type SymChild = FC<{itemId:ItemId,item:Item}> ;
export type SymRender = (
    ctx:CanvasRenderingContext2D,
    setting:typeof baseSetting,
)=>void ;

const SymBase = (Child:SymChild, render:SymRender)=>{
    const Sym :FC<{itemId:ItemId}> = ({itemId})=>{
        //選択処理
        const { selectItemId,changeSelectItemId, } = useSelectItem() ;

        //アイテムの取得 -> Childに渡す
        const item = useItem(itemId) ;
        //render関連の処理
        const ref = useRef<HTMLCanvasElement>(null) ;
        useEffect(() => {
            const canvas = ref.current ;
            if(canvas){
                const ctx = canvas.getContext("2d") ;
                if(ctx){
                    const setting = baseSetting ;
                    ctx.fillStyle = setting.color.back ;
                    ctx.strokeStyle = setting.color.fore ;
                    ctx.lineWidth = setting.size.lineWidth ;

                    if(selectItemId === itemId){
                        ctx.strokeStyle = "blue" ;
                    }
                    
                    //renderの呼び出し
                    render(ctx,setting) ;
                }
            }
        }, [itemId, selectItemId]) ;
        return (
            <Box sx={{
                position:"relative",width:width,height:baseSetting.size,
                textAlign:"center",fontSize:"14px"}} 
                onClick={()=>changeSelectItemId(itemId)}>
                    
                <Box sx={{position:"absolute",left:0,top:0,width,height,}}>
                    <canvas 
                        ref={ref} 
                        width={width}
                        height={height}/>
                </Box>
                <Box sx={{position:"absolute",left:0,top:0,width,height,}}>
                    <Child itemId={itemId} item={item} />
                </Box>

            </Box>
        ) ;
    } ;
    return React.memo(Sym) ;
} ;

export default SymBase ;
