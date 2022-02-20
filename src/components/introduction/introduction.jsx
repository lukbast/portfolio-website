import IntrodutcionText from "../introduction-text/introduction-text"
import MyPhoto from "../my-photo/my-photo"
import "./introduction.scss"

const Introduction = () =>{
    return (
        <div className="introduction">
            <IntrodutcionText/>
            <MyPhoto/>
        </div>
    )
}

export default Introduction
