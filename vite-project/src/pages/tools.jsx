import { Link } from "react-router-dom";

const Tools = () => {
    return(<>
    <h1>Tools</h1>
    <div>
        <h2>Select:</h2>
        <Link to="frameworks">
            <button>Frameworks</button>
        </Link>
        <Link to="devtools">
            <button>Development Tools</button>
        </Link>
        <Link to="resources">
        <button>Resources</button>
        </Link>
        
    </div>
    </>);
}

export default Tools;