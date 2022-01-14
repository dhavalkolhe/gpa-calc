import Navbar from "../Navbar/Navbar"
import HeaderContent from "./HeaderContent/HeaderContent";
import headerSvg from '../../assets/header-svg.svg';
import './Headertwo.css'

const HeaderTwo = () => {
    return (
        <div className="header-main">
            <img className="header-svg" src={headerSvg} alt="header-background" />
            <div className="header">
                <Navbar />
                <HeaderContent />
            </div>
        </div>
    );
}

export default HeaderTwo;