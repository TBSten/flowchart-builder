import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import React,{ FC } from "react" ; 
import { useMode } from "redux/app/hooks";
import { useItems,useItemOperations } from "redux/items/hooks";
import { Flow } from "redux/items/types";
import { useFlows } from "redux/meta/hooks";
import flowCreator from "sym/flow/creator";
import FlowComp from "sym/flow/Flow";


export interface BuildPanelProps{
}

const BuildPanel :FC<BuildPanelProps> = ({})=>{
  const {
    flows:flowIds,
    addFlow,
  } = useFlows();
  const flows = useItems(flowIds) ;
  const { setItem } = useItemOperations() ;

  //フローを追加する処理
  const handleAddFlow = ()=>{
    //フローオブジェクト作成
    const flow = flowCreator() ;
    //フローのIDを決定(ランダム)
    const flowId = `id-flow-${Math.floor(Math.random()*10000000)}` ;
    //idとオブジェクトを紐づける(setItem呼び出し)
    setItem(flowId,flow);
    //meta.flowsにフローのID追加する
    addFlow(flowId);
  } ;

  //previewモード中はボタンを表示しない
  const {
    mode,
  } = useMode() ;

  return (
    <div>
      <Stack spacing={2} id="flowchart">
        {Object.entries(flows).map(([flowId,_item])=>{
          return (
            <FlowComp flowId={flowId}/>
          ) ;
        })}
        {
          mode!=="preview"?
          <Box sx={{border:"dashed 1px black",p:2,width:"fit-content"}}>
            <Button onClick={handleAddFlow}>フローを追加</Button>
          </Box>
          :
          ""
        }
      </Stack>
    </div>
  )
} 
export default React.memo(BuildPanel) ;

