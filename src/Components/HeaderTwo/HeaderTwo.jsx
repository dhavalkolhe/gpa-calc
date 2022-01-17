import Navbar from '../Navbar/Navbar';
import HeaderContent from './HeaderContent/HeaderContent';
import './Headertwo.css';

const HeaderTwo = () => {
    return (
        <div className="header-main">
            <div className="header">
                <Navbar />
                <HeaderContent />
            </div>
        </div>
    );
};

export default HeaderTwo;
