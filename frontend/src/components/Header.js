import logo from "../images/logo.png";
import "../style/Header.scss";


const Header = ({ onClick }) => {
    return (
        <div className="header">
            <a>
                <img src={logo} className="logo"></img>
            </a>
            <div className="menu">
                <span>About Us</span>
                <span>FAQs</span>
                <span>Enquiry</span>
                <span>More</span>
                <span>Search</span>
            </div>
        </div>

    )
}

export default Header
