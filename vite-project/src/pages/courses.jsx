import { Link } from "react-router-dom";

const Courses = () => {
    return(<>
    <h1>Courses</h1>
    <div className="home">
        <Link to="/courses/math" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="homediv" style={{backgroundColor: 'rgb(249, 101, 88)'}}>
                <h1>Math</h1>
                <h4>Mathematics</h4>
            </div>
        </Link>
        <Link to="/courses/cs" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="homediv" style={{backgroundColor: 'rgb(53, 65, 229)'}}>
                <h1>Computer Science</h1>
                <h4>Programming & Logic based courses</h4>
            </div>
        </Link>
    </div>
    

    </>);
}

export default Courses;