import "./navbar.css";
import logo from "../images/logo.svg"
import menuIcon from "../images/icon-hamburger.svg"

export const Navbar = () => {
    return (
        <div className="navbar">
            <div className="container">
                <div className="navbarNavbar">
                    <div className="logo">
                        <img src={logo} alt="bank-logo" />
                    </div>
                    <div className="menu">
                        <ul>
                            <li> <a href="#home">Home</a>
                            </li>
                            <li>
                                <a href="#about"> About</a></li>
                            <li> <a href="#contact"> Contact</a></li>
                            <li> <a href="#blog"> Blog</a></li>
                            <li> <a href="#careers"> Careers</a></li>
                        </ul>
                    </div>
                    <div className="invitation">
                        <button className="invitation-btn">Request Invite</button>
                    </div>
                    <button className="menuBtn">
                        <img src={menuIcon} alt="menuImage" />
                    </button>
                </div>

            </div>
        </div>
    )
}



export const MobileModal = () => {
    return (
        <div className="modal">
                <ul className="mobile-modal">
                    <li> <a href="#home">Home</a>
                    </li>
                    <li>
                        <a href="#about"> About</a></li>
                    <li> <a href="#contact"> Contact</a></li>
                    <li> <a href="#blog"> Blog</a></li>
                    <li> <a href="#careers"> Careers</a></li>
                </ul>
        </div>
    )
}


window.addEventListener("load", function(){
    const menuBtn = document.querySelector('.menuBtn');
    console.log(menuBtn)
    const menuModal = document.querySelector('.modal');
    
    
    if(menuBtn){
        menuBtn.onclick = function(){        
            menuModal.classList.toggle('open'); 
         }
    }
});









