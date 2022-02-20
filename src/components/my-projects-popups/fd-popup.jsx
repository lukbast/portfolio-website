import "./popup.scss"
import ImageCarousell from "../image-carousell/image-carousell";

import { fdContent, LinksFd } from "./content"
import img1 from "../../assets/fd_tile.png"
import img2 from "../../assets/fd_tile2.png"
import img3 from "../../assets/fd3.png"


import close from "../../assets/close.svg"

const img_arr = [img1, img2, img3];



function FdPopup({toggler}){

    return(
        <div className="popup">
            <div onClick={toggler} className="popup-button">
                <span className="popup-button-close">Close</span>
                <img src={close} alt="close"/>
            </div>
            <ImageCarousell mobile={true} img_arr={img_arr}/>
            <h2 className="popup-header">Overview</h2>
            <div className="popup-section"> {<>{fdContent[0]} </>}</div>
            <h2 className="popup-header">Tech stack</h2>
            <div className="popup-section">
                {fdContent[1].map(item => <div key={Math.random()} className="popup-section-item">{item}</div>)}
                <LinksFd/>
            </div>
        </div>

    )
}


export default FdPopup