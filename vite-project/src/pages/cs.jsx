import { Link } from "react-router-dom";

const Cs = () => {
    return(<>
    <h1>Cs</h1>
    <div>
        <h3>Category:</h3>
        <button>Programming</button>
        <button>Theory</button>
    </div>
    <div></div>
    <Link to="/courses">
        <button>Back</button>
    </Link>
    </>);
}

export default Cs;