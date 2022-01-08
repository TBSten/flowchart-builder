import Box from "@mui/material/Box";
import React,{ FC, useEffect, useRef } from "react";
import { baseSetting } from "sym/base/SymBase";

const width = baseSetting.size.width ;
const height = baseSetting.size.height/2 ;

export interface ArrowProps {}

const Arrow: FC<ArrowProps> = () => {
    const ref = useRef<HTMLCanvasElement>(null) ;
    useEffect(()=>{
        const canvas = ref.current ;
        if(canvas){
            const ctx = canvas.getContext("2d");
            if(ctx){
                ctx.fillStyle = baseSetting.color.back ;
                ctx.strokeStyle = baseSetting.color.fore ;
                ctx.lineWidth = baseSetting.size.lineWidth ;

                //線を引く
                ctx.beginPath();
                ctx.moveTo(width/2,0);
                ctx.lineTo(width/2,height);
                ctx.closePath();
                ctx.stroke() ;
            }
        }
    },[])
    return (
        <Box sx={{width,height,}}>
            <canvas
                width={width}
                height={height}
                ref={ref}/>
        </Box>
    );
};
export default React.memo(Arrow) ;
