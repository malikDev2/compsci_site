import { Link } from "react-router-dom";

const Frameworks = () =>{
    return(<>
    <h1>Frameworks</h1>
    <div className="category">
        <h2>Category:</h2>
        <button>Frontend</button>
        <button>Backend</button>
        <button>Data</button>
        <button>Full Stack</button>
    </div>
    <Link to="/tools">
        <button>Back</button>
    </Link>
    </>)
}

export default Frameworks;