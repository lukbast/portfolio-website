import "./navbar-button.scss"

function NavbarButton({link,onClick ,children}){
   return(
        <a href={link} onClick={onClick} className="navbar-button">{children}</a>
    );
}


export default NavbarButton;