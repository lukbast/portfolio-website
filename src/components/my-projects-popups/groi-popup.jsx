import "./popup.scss"
import ImageCarousell from "../image-carousell/image-carousell";

import { groi_content, LinksGroi } from "./content"
import img1 from "../../assets/groi.jpg"
import img2 from "../../assets/groi2.jpg"
import img3 from "../../assets/groi3.jpg"

import close from "../../assets/close.svg"

const img_arr = [img1, img2, img3];



function GroiPopup({toggler}){

    return(
        <div className="popup">
            <div onClick={toggler} className="popup-button">
                <span className="popup-button-close">Close</span>
                <img src={close} alt="close"/>
            </div>
            <ImageCarousell img_arr={img_arr}/>
            <h2 className="popup-header">Overview</h2>
            <div className="popup-section">
             {<>{groi_content[0]} <a className="popup-section-link" href="https://groi.herokuapp.com/">https://groi.herokuapp.com/</a> </>}
             </div>
            <h2 className="popup-header">Tech stack</h2>
            <div className="popup-section">
                {groi_content[1].map(item => <div key={Math.random()} className="popup-section-item">{item}</div>)}
                <LinksGroi></LinksGroi>
            </div>
        </div>

    )
}


export default GroiPopup