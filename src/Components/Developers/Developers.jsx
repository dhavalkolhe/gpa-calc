import './Developers.css';
import abhishek from '../../assets/abhishek.png';
import rohan from '../../assets/rohan.png';
import mona from '../../assets/mona.png';
import harsh from '../../assets/harsh.png';

const Developers = () => {
    return (
        <div className="developers">
            <h3 className="developers_heading">Made By</h3>
            <div className="developers_info row">
                <div className="developer-card col-xl-3 col-sm-6">
                    <div className="developer-img">
                        <img src={abhishek} alt="img" />
                    </div>
                    <h4 className="developer-name">Abhishek Agarwal</h4>
                    <p className="role">Developer</p>
                    <p className="developer-contact">
                        <a
                            href="https://www.linkedin.com/in/abhishek-agarwal-42b927201/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <i className="fab fa-linkedin fa-2x"></i>
                        </a>
                        <a
                            href="https://github.com/Abhii-Agarwal09"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <i className="fab fa-github fa-2x"></i>
                        </a>
                        <a
                            href="https://www.instagram.com/agarwal__abhii/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <i className="fab fa-instagram fa-2x"></i>
                        </a>
                    </p>
                </div>
                <div className="developer-card col-xl-3 col-sm-6">
                    <div className="developer-img">
                        <img src={rohan} alt="img" />
                    </div>
                    <h4 className="developer-name">Rohan Gupta</h4>
                    <p className="role">Developer</p>
                    <p className="developer-contact">
                        <a
                            href="https://www.linkedin.com/in/rohan-gupta-51b16615a/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <i className="fab fa-linkedin fa-2x"></i>
                        </a>
                        <a
                            href="https://github.com/Rohan1572"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <i className="fab fa-github fa-2x"></i>
                        </a>
                        <a
                            href="https://www.instagram.com/rohan_g1572/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <i className="fab fa-instagram fa-2x"></i>
                        </a>
                    </p>
                </div>
                <div className="developer-card col-xl-3 col-sm-6">
                    <div className="developer-img">
                        <img src={mona} alt="img" />
                    </div>
                    <h4 className="developer-name">Monalisa Maiti</h4>
                    <p className="role">UI/UX Designer</p>
                    <p className="developer-contact">
                        <a
                            href="https://www.linkedin.com/in/monalisa-maiti-4b789b1b8/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <i className="fab fa-linkedin fa-2x"></i>
                        </a>
                        <a
                            href="https://github.com/monalisamaiti"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <i className="fab fa-github fa-2x"></i>
                        </a>
                        <a
                            href="https://www.instagram.com/monalisamaiti/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <i className="fab fa-instagram fa-2x"></i>
                        </a>
                    </p>
                </div>
                <div className="developer-card col-xl-3 col-sm-6">
                    <div className="developer-img">
                        <img src={harsh} alt="img" />
                    </div>
                    <h4 className="developer-name">Harshvardhan Agarwal</h4>
                    <p className="role">UI/UX Designer</p>
                    <p className="developer-contact">
                        <a
                            href="https://www.linkedin.com/in/harshui/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <i className="fab fa-linkedin fa-2x"></i>
                        </a>
                        <a
                            href="https://github.com/harsh5903"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <i className="fab fa-github fa-2x"></i>
                        </a>
                        <a
                            href="https://www.instagram.com/iharsh_agarwal/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <i className="fab fa-instagram fa-2x"></i>
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Developers;
