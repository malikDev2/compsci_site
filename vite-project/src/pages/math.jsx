import { Link } from "react-router-dom";

const Math = () => {
    return(<>
    <h1>Math</h1>
    <div className="mathcourse" style={{ backgroundColor: 'rgb(245, 20, 20)' }}>
        <h2>Calculus I</h2>
        <h4>The first of the calculus courses. Main topics include limits, derivatives, and basic integration.</h4>
        <button>Learn More</button>
    </div>
    <div className="mathcourse" style={{ backgroundColor: 'rgb(245, 20, 230)' }}>
        <h2>Calculus II</h2>
        <h4>The second course in the calculus series. Dives deeper into integration, lots of conversion/diversion tests, and introduces students to polar coordinates.</h4>
        <button>Learn More</button>
    </div>
    <div className="mathcourse" style={{ backgroundColor: 'hsl(74, 100.00%, 55.70%)' }}>
        <h2>Intro to Linear Algebra</h2>
        <h4>Math based on matricies. Echelon forms, vector spaces,  and eigenvalues are among the covered topics.</h4>
        <button>Learn More</button>
    </div>
    
    
    <Link to="/courses">
        <button>back</button>
    </Link>
    
    </>);
}

export default Math;