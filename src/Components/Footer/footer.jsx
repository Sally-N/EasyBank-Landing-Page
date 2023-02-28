import logo from "../images/logo.svg";
import facebookicon from "../images/icon-facebook.svg";
import youtubeicon from "../images/icon-youtube.svg";
import twittericon from "../images/icon-twitter.svg";
import pinteresticon from "../images/icon-pinterest.svg";
import instagramicon from "../images/icon-instagram.svg";
import "./footer.css"


const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="footer-contain">
                <div className="logoandicons">
                    <div className="logo-footer">
                        <img src={logo} className="text-white" alt="logo footer" />
                    </div>

                    <div className="icons">
                        <img src={facebookicon} alt="facebook" />
                        <img src={youtubeicon} alt="youtube" />
                        <img src={twittericon} alt="twitter" />
                        <img src={pinteresticon} alt="pinterest" />
                        <img src={instagramicon} alt="instagram" />
                    </div>
                </div>
                <div className="footer-links">
                    <ul>
                        <li><a href="a">About Us</a></li>
                        <li><a href="#a">Contact</a></li>
                        <li><a href="#b">Blog</a></li>
                        <li> <a href="#c">Careers</a></li>
                        <li><a href="#d">Support</a></li>
                        <li><a href="#f">Privacy Policy</a></li>
                    </ul>
                </div>
                <div className="footer-right">
                    <button id="request-invitebtn">Request Invite</button>

                    <h6><span>&#169;</span>EasyBank.AllRightsReserved</h6>

                </div>
            </div>
            </div>
        </div>
        
    )
}

export default Footer;