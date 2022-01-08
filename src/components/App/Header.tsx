import AppBar, { AppBarProps } from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton/IconButton";
import Toolbar from "@mui/material/Toolbar/Toolbar";
import MenuIcon from "@mui/icons-material/Menu" ;
import PreviewIcon from "@mui/icons-material/Preview" ;
import EditIcon from "@mui/icons-material/Edit" ;
import React,{ FC } from "react";
import { useTitle } from "redux/meta/hooks";
import TextField from "components/util/TextField";
import { useMode } from "redux/app/hooks";

export type HeaderProps = {} & AppBarProps;

const Header: FC<HeaderProps> = (props) => {
    const {title,setTitle} = useTitle() ;
    //モード関係
    const {mode,setMode} = useMode();
    const handleToggleMode = ()=>{
        if(mode === "edit") setMode("preview") 
        if(mode === "preview") setMode("edit") 
    } ;
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    sx={{ mr: 2 }}
                >
                    <MenuIcon />
                </IconButton>
                <TextField value={title} onChange={e=>setTitle(e.target.value)} style={{flexGrow:1,color:"white"}}/> 
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    sx={{ml:2}}
                    onClick={handleToggleMode}>
                    {
                        mode==="edit"?
                        <EditIcon />
                        :
                        mode==="preview"?
                        <PreviewIcon />
                        :
                        "???"
                    }
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};
export default React.memo(Header) ;
