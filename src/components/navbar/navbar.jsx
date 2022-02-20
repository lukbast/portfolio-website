import "./navbar.scss";

import NavbarButton from "../navbar-button/navbar-button";

import React, {useState, useEffect} from "react"
import Icon from "../../assets/hamburger_white.svg"
import NavbarMenu from "../navbar-menu-mobile/navbar-menu-mobile";



function Navbar() {

    const [windowWidth, setwindowWidth] = useState(window.innerWidth)
    const [hideMenu, setHideMenu] = useState(true)

    const handleResize = (e) => {
        setwindowWidth(window.innerWidth);
    };

    const toggleMenu = () =>{
        setHideMenu(!hideMenu)
    }


    useEffect(()=>{
        return window.addEventListener("resize", handleResize);
    }, [])

    if (windowWidth < 1000){
        return (
            <div className="navbar">
                <span className="navbar-menu-toggler" onClick={toggleMenu}>
                    <img height={"25px"} width={"25px"}  
                        src={Icon} alt="Toggle menu"
                    />
                </span>
                <NavbarMenu isHidden={hideMenu} toggler={toggleMenu}></NavbarMenu>
            </div>
        )
    } else {
        return(
            <div className="navbar">
                <div className="buttons">
                    <NavbarButton link="#my-projects">My projects</NavbarButton>
                    <NavbarButton link="#about-me">About me</NavbarButton>
                    <NavbarButton link="#skills">Skills</NavbarButton>
                    <NavbarButton link="#contact">Contact</NavbarButton>
                </div>
            </div>
        );
    }}
    
export default Navbar;