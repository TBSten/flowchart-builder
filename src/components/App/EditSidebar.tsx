import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Button from "components/util/Button";
import TextField from "components/util/TextField";
import React,{ChangeEvent, FC, } from "react" ; 
import { useSelectItem } from "redux/app/hooks";
import { useItem, useItemOperations, } from "redux/items/hooks";
import { Sym } from "redux/items/types";

export interface EditSidebarProps {}

const EditSidebar: FC<EditSidebarProps> = ({}) => {
    const {
        selectItemId,
      } = useSelectItem() ;
      const selectItem = useItem(selectItemId??"") as Sym ;
      const { setItem,removeItem } = useItemOperations();
      const handleOptionChange = (idx:number, e :ChangeEvent<HTMLInputElement|HTMLTextAreaElement>)=>{
        //オプションの更新処理
        const newValue = e.target.value ;
        const newOptions = [...selectItem.options] ;
        newOptions[idx] = {
          ...newOptions[idx],
          value:newValue,
        } ;
        const newItem = {
          ...selectItem,
          options:newOptions,
        } ;
        setItem(selectItemId??"",newItem);
      }
      const handleRemoveSym = ()=>{
        if(selectItemId){
          //親から削除
          //アイテム自体を削除
          removeItem(selectItemId);
        }
      } ;
      return (
        <div>
          {selectItemId && selectItem?
          <>
          <List>
              {selectItem.options.map((option,idx)=>{
                return (
                  <ListItem>
                    {option.name}
                    :
                    <TextField value={option.value} onChange={e=>handleOptionChange(idx,e)}/>
                  </ListItem>
                ) ;
              })}
            </List>
            <Button onClick={handleRemoveSym}>
              記号を削除する
            </Button>
          </>
          :"アイテムが選択されていません"}
        </div>
      )
    };
export default React.memo(EditSidebar) ;
