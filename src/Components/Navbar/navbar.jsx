import "./navbar.css";
import logo from "../images/logo.svg"



export const Navbar = () => {

    return (
        <div className="container">
            <div className="navbar">
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

            </div>
        </div>

    )

}


 export const homeModal = () => {
    <div>
        <div className="container">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Blog</li>
                <li>Careers</li>

            </ul>
        </div>
    </div>

}

