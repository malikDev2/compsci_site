import { Link } from "react-router-dom";

const Courses = () => {
    return(<>
    <h1>Courses</h1>
    <Link to="/courses/math">
        <button>Math</button>
    </Link>
    <Link to="/courses/cs">
        <button>Comp-Sci</button>
    </Link>

    </>);
}

export default Courses;