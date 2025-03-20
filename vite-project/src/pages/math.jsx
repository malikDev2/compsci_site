import { Link } from "react-router-dom";

const Math = () => {
    return(<>
    <h1>Math</h1>
    <div className="mathcourse" style={{ backgroundColor: 'rgb(245, 20, 20)' }}>
        <h2>Calculus I</h2>
        <h4>Description</h4>
        <button>Learn More</button>
    </div>
    <div className="mathcourse" style={{ backgroundColor: 'rgb(245, 20, 230)' }}>
        <h2>Calculus II</h2>
        <h4>Description</h4>
        <button>Learn More</button>
    </div>
    <div className="mathcourse" style={{ backgroundColor: 'hsl(74, 100.00%, 55.70%)' }}>
        <h2>Linear Algebra</h2>
        <h4>Description</h4>
        <button>Learn More</button>
    </div>
    
    
    <Link to="/courses">
        <button>back</button>
    </Link>
    
    </>);
}

export default Math;