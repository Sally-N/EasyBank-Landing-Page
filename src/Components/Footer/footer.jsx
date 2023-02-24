import logo from "../images/logo.svg";
import facebookicon from "../images/icon-facebook.svg";
import youtubeicon from "../images/icon-youtube.svg";
import twittericon from "../images/icon-twitter.svg";
import pinteresticon from "../images/icon-pinterest.svg";
import instagramicon from "../images/icon-instagram.svg";


const Footer = () => {
    return (<div>
        <img src={logo} alt="" />
        <div className="icons">
            <img src={facebookicon} alt="" />
            <img src={youtubeicon} alt="" />
            <img src={twittericon} alt="" />
            <img src={pinteresticon} alt="" />
            <img src={instagramicon} alt="" />
        </div>
        <div className="footer-links">
            <a href="a">About Us</a>
            <a href="#a">Contact</a>
            <a href="#b">Blog</a>
            <a href="#c">Careers</a>
            <a href="#d">Support</a>
            <a href="#f">Privacy Policy</a>

        </div>
        <div className="request-invites">
            <button id="request-invitebtn">Request Invite</button>
        </div>
        <div className="copyright">
            <h6><span>&#169;</span>EasyBank.AllRightsReserved</h6>
        </div>

    </div>
    )
}

export default Footer;