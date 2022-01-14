import './HeaderContent.css'

const HeaderContent = () => {
    return (
        <div className="header-content">
            <h1 className="header-content__heading">gpa <span>calculator</span></h1>
            <p className="header-content__text">
                Calculate your GPA, cummulative GPA, find out the marks required
                to pass your theory/lab component
            </p>
        </div>
    );
}

export default HeaderContent;