import { Link } from "react-router-dom";

const Tools = () => {
    return(<>
    <h1>Tools</h1>
    <div>
        <h2>Select:</h2>
        <Link to="/tools/frameworks">
            <button>Frameworks</button>
        </Link>
        <button>Development Tools</button>
        <button>Guides/Tutorials</button>
    </div>
    </>);
}

export default Tools;