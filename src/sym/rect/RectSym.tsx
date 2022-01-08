import { Sym } from "redux/items/types";
import SymBase, { SymChild, SymRender } from "sym/base/SymBase";

const Child :SymChild = ({itemId,item : _item})=>{
    const item = _item as Sym ;
    return (
        <>
            {item.options[0].name}
            :
            {item.options[0].value}
        </>
    )
} ;

const render :SymRender = (ctx,{size,color})=>{
    ctx.fillRect(0,0,size.width,size.height)
    ctx.strokeRect(0,0,size.width,size.height);
} ;

const RectSym = SymBase(Child,render) ;

export default RectSym ;
