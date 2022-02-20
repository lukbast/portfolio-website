import "./popup.scss"
import ImageCarousell from "../image-carousell/image-carousell";

import { crwnContent, LinksCrwn } from "./content"
import img1 from "../../assets/crwn.jpg"
import img2 from "../../assets/crwn2.jpg"
import img3 from "../../assets/crwn3.jpg"
import img4 from "../../assets/crwn4.jpg"

import close from "../../assets/close.svg"

const img_arr = [img1, img2, img3, img4];



function CrwnPopup({toggler}){

    return(
        <div className="popup">
            <div onClick={toggler} className="popup-button">
                <span className="popup-button-close">Close</span>
                <img src={close} alt="close"/>
            </div>
            <ImageCarousell img_arr={img_arr}/>
            <h2 className="popup-header">Overview</h2>
            <div className="popup-section">
             {<>{crwnContent[0]} <a className="popup-section-link" href="https://my-app-crwn-live.herokuapp.com/">https://my-app-crwn-live.herokuapp.com/</a> </>}
            </div>
            <h2 className="popup-header">Tech stack</h2>
            <div className="popup-section">
                {crwnContent[1].map(item => <div key={Math.random()} className="popup-section-item">{item}</div>)}
                <LinksCrwn/>
            </div>
        </div>

    )
}


export default CrwnPopup