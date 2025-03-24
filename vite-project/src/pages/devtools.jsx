import { Link } from "react-router-dom";

const Devtools = () =>{
    return(<>
    <h1>Development Tools</h1>
    <Link to="/tools">
        <button>Back</button>
    </Link>
    </>)
}

export default Devtools;