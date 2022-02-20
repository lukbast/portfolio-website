import './image-carousell.scss'

import prev from "../../assets/back.svg"
import next from "../../assets/next.svg"

import { useState } from 'react'

function ImageCarousell({img_arr, mobile}){

    const [i, setI] = useState(0)

    function left(){
        if (i > 0){
            setI(i+-1) 
        }
    }

    function right(){
        if (i < img_arr.length -1){
            setI(i+1)
        }
    }


    return (
        <div className={mobile? "image-carousell mobile-carousell": "image-carousell"}>
            <div onClick={left} className='image-carousell-button left no-highlight'>
                <img alt='previous screenshot' src={prev}/>
            </div>
            <img className='image-carousell-image' src={img_arr[i]} alt="screenshot"/>
            <div onClick={right} className='image-carousell-button right no-highlight'>
                <img alt='next screenshot' src={next}/>
            </div>
        </div>
    )
}

export default ImageCarousell