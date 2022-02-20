import "./my-projects-section.scss"
import ProjectTile from "./project-tile";
import GroiPopup from "../my-projects-popups/groi-popup";
import CrwnPopup from "../my-projects-popups/crwn-popup";
import FdPopup from "../my-projects-popups/fd-popup";


import groi from "../../assets/groi.jpg"
import crwn from "../../assets/crwn.jpg"
import fd from "../../assets/fd_tile.png"

import { useState } from "react";


function MyProjects(){

    const [groiHidden, setGroiHidden] = useState(true)
    const [crwnHidden, setCrwnHidden] = useState(true)
    const [fdHidden, setFdHidden] = useState(true)

    function toggleGroi(){
        setGroiHidden(!groiHidden)
    }

    function toggleCrwn(){
        setCrwnHidden(!crwnHidden)
    }

    function toggleFd(){
        setFdHidden(!fdHidden)
    }

    return(
        <section className="my-projects">        
            <ProjectTile toggler={toggleGroi}
                         img={groi}
                         title="GROI"
                         description="Fullstack web application project"
            />
            {groiHidden? "": <GroiPopup toggler={toggleGroi}/>}
            <ProjectTile toggler={toggleFd} img={fd}
                         title="Food detector"
                         description="Fullstack mobile application and machine learning project"
                         mobile={true}
            />
            {fdHidden? "":<FdPopup toggler={toggleFd}></FdPopup>}
            <ProjectTile toggler={toggleCrwn} img={crwn}
                         title="CRWN clothing"
                         description="Frontend web application project"
            />
            {crwnHidden? "": <CrwnPopup toggler={toggleCrwn}/>}
        </section>
    )
}


export default MyProjects;