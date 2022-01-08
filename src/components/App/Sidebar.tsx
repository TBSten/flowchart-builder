import React,{ FC, } from "react" ; 
import { useMode } from "redux/app/hooks";
import EditSidebar from "./EditSidebar";
import PreviewSidebar from "./PreviewSidebar";


export interface SidebarProps{
}

const Sidebar :FC<SidebarProps> = ({})=>{
  const {mode} = useMode() ;
  return (
    <div>
      {mode==="edit"?<EditSidebar />:""}
      {mode==="preview"?<PreviewSidebar />:""}
    </div>
  )
} 
export default React.memo(Sidebar) ;
