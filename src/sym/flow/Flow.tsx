import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "components/util/Button";
import React,{ FC } from "react";
import { useMode } from "redux/app/hooks";
import { useItem, useItemOperations } from "redux/items/hooks";
import { ItemId,Flow, Sym } from "redux/items/types";
import { baseSetting } from "sym/base/SymBase";
import rectCreator from "sym/rect/creator";
import RectSym from "sym/rect/RectSym";
import { createRandomItemId } from "sym/util";
import Arrow from "./Arrow";

export interface FlowProps {
    flowId:ItemId,
}

const FlowComp: FC<FlowProps> = ({flowId}) => {
    const flow = useItem(flowId) as Flow;
    const { setItem } = useItemOperations() ;
    //追加処理
    const handleAddSym = (idx:number)=>{
        //子要素の追加処理
        //idxで指定した位置に追加する
        const sym :Sym = rectCreator(flowId) ;
        const symId = createRandomItemId(sym.itemType) ;
        setItem(symId,sym);
        const newChildrenSyms = [...flow.childrenSyms] ;
        newChildrenSyms.splice(idx,0,symId) ;
        const newFlow = {
            ...flow,
            childrenSyms:newChildrenSyms,
        } ;
        setItem(flowId,newFlow)
    } ;
    const {mode} = useMode() ;
    return (
        <Stack direction="column" sx={{width:"fit-content"}}>

            {flow.childrenSyms.map((symId, idx) => (
                <>
                    {idx === 0 ? null : <Arrow />}
                    {mode!=="preview"?
                    <Box sx={{display:"flex",justifyContent:"center",width:baseSetting.size.width}}>
                        <Button onClick={()=>handleAddSym(idx)} sx={{width:"fit-content"}}>追加</Button>
                    </Box>
                    :""}

                    <RectSym itemId={symId} />

                    {mode!=="preview"?
                    <Box sx={{display:"flex",justifyContent:"center",width:baseSetting.size.width}}>
                        <Button onClick={()=>handleAddSym(idx+1)} sx={{width:"fit-content"}}>追加</Button>
                    </Box>
                    :""}
                </>
            ))}

            {/* 子要素がない */}
            {flow.childrenSyms.length === 0 && mode !== "preview"? 
            <>
                子要素がありません
                <Button onClick={()=>handleAddSym(0)}>
                    記号を追加する
                </Button>
            </>
            : ""}
        </Stack>
    );
};
export default React.memo(FlowComp) ;
