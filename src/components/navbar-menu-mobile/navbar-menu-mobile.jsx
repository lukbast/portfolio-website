import "./navbar-menu-mobile.scss"
import "../navbar-button/navbar-button"
import NavbarButton from "../navbar-button/navbar-button";


function NavbarMenu({toggler, isHidden}){

    return(
        <div className={isHidden? "navbar-menu hidden": "navbar-menu"}>
            <NavbarButton onClick={toggler} link="#my-projects">My projects</NavbarButton>
            <NavbarButton onClick={toggler} link="#about-me">About me</NavbarButton>
            <NavbarButton onClick={toggler} link="#skills">Skills</NavbarButton>
            <NavbarButton onClick={toggler} link="#contact">Contact</NavbarButton>
        </div>
    );
}


export default NavbarMenu;