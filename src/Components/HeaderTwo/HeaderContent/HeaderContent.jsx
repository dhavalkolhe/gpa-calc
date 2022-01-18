import "./HeaderContent.css";
import illus from "../../../assets/illus.png";

const HeaderContent = () => {
  return (
    <div className="header-content">
      <div className="header-text-content">
        <h1 className="header-content__heading">
          gpa <span>calculator</span>
        </h1>
        <p className="header-content__text">
          Calculate your GPA, cumulative GPA, find out the marks required to
          pass your theory/lab component
        </p>
      </div>
      <div className="illus-div">
        <img src={illus} alt="" />
      </div>
    </div>
  );
};

export default HeaderContent;
