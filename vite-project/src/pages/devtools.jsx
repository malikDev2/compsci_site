import { Link } from "react-router-dom";

const Devtools = () =>{
    return(<>
    <h1>Development Tools</h1>
    <div className="category">
        <h2>Category:</h2>
        <button>Code Editor</button>
        <button>Aritifical Intelligence</button>
        <button>Version Control</button>
    </div>
    <Link to="/tools">
        <button>Back</button>
    </Link>
    </>)
}

export default Devtools;