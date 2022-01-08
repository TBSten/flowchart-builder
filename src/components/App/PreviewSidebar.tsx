import Button from "components/util/Button";
import React,{ FC } from "react";

import {toPng} from "html-to-image" ;
import { useTitle } from "redux/meta/hooks";

export interface PreviewSidebarProps {}

function downloadImage(title:string, image:string){
    const aEle = document.createElement("a") ;
    aEle.download = title+".png" ;
    aEle.href = image ;
    aEle.click();
    aEle.remove();
}

const PreviewSidebar: FC<PreviewSidebarProps> = ({}) => {
    const {title} = useTitle() ;
    const handleDownloadImage = async ()=>{
        //DOM要素を取得
        const ele = document.getElementById("flowchart");
        if(ele){
            //画像に変換
            const image = await toPng(ele) ;
            //画像をダウンロード
            downloadImage(title,image) ;
        }else{
            alert("エラー:画像に変換できませんでした")
        }
    } ;
    return (
        <div>
            <Button onClick={handleDownloadImage}>
                画像として保存
            </Button>
        </div>
    );
};
export default React.memo(PreviewSidebar) ;
