import { Link } from "react-router-dom";

const Math = () => {
    return(<>
    <h1>Math</h1>
    <div className="mathcourse" style={{ backgroundColor: "red" }}>
        <h2>Calculus I</h2>
        <h4>Description</h4>
        <button>Learn More</button>
    </div>
    <Link to="/courses">
        <button>back</button>
    </Link>
    
    </>);
}

export default Math;