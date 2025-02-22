import { Link } from "react-router-dom";

const Navbar = () => {
    return(<>
    <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/languages">Programming Languages</Link>
            </li>
            <li>
                <Link to="/tools">Tools</Link>
            </li>
            <li>
                <Link to="/courses">Courses</Link>
            </li>
        </ul>
    </nav>
    </>)
}

export default Navbar;