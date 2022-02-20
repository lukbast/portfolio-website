import "./my-photo.scss"

import photo from "../../assets/my_photo.png"
import background from "../../assets/circle-scatter-haikei (6).svg"

const MyPhoto = ()=>{
    return(
        <div className="my-photo">
            <img className="my-photo-background" src={background}/>
            <img className="my-photo-img" src={photo}/>
        </div>
    )
}

export default MyPhoto