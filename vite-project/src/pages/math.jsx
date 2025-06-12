import { Link } from "react-router-dom";

const Math = () => {
    return(<>
    <h1>Math</h1>
    
    <Link to="calc1" className="linkdiv">
    <div className="language" style={{ backgroundColor: 'rgb(245, 20, 20)' }}>
        <h2>Calculus I</h2>
        <h4>The first of the calculus courses. Main topics include limits, derivatives, and basic integration.</h4>   
    </div>
    </Link>
    <Link to="calc2" className="linkdiv">
    <div className="language" style={{ backgroundColor: 'rgb(245, 20, 230)' }}>
        <h2>Calculus II</h2>
        <h4>The second course in the calculus series. Dives deeper into integration, explores sequences/series, and introduces students to polar coordinates.</h4>
    </div>
    </Link>
    <Link to="linear" className="linkdiv">
    <div className="language" style={{ backgroundColor: 'hsl(74, 100.00%, 55.70%)' }}>
        <h2>Intro to Linear Algebra</h2>
        <h4>Math based on matricies. Echelon forms, vector spaces,  and eigenvalues are among the covered topics.</h4>
    </div>
    </Link>
    
    
    <Link to="/courses">
        <button>back</button>
    </Link>
    
    </>);
}

export default Math;