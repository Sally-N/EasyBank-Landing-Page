import "./navbar.css";
import logo from "../images/logo.svg"



const Navbar = () => {

    return (
        <div className="container">
            <div className="navbar">
                <div className="logo">
                    <img src={logo} alt="bank-logo" />
                    </div>
                    <div>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Blog</li>
                        <li>Careers</li>
                    </ul>
                    </div>
                    <div className="request-invites">
                        <button id="request-invitebtn">Request Invite</button>
                    </div>

                </div>
            </div>

    )

}

export default Navbar;