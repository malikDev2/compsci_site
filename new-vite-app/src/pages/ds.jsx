import { Link } from "react-router-dom";

const Ds = () => {
    return(<>
    <Link to="data101" className="linkdiv">
    <div className="language" style={{ backgroundColor: 'rgba(20, 170, 245, 1)', marginTop: "10px" }}>
        <h2>Data 101</h2>
        <h4>(In Progress) Introductory Data Science Course</h4>   
    </div>
    </Link>
    <Link to="introds" className="linkdiv">
    <div className="language" style={{ backgroundColor: 'rgba(20, 245, 39, 1)', marginTop: "10px" }}>
        <h2>Intro to Data Science </h2>
        <h4>(In Progress) Data Science overview course covering topics such as Python, SQL, Probability&Statistics, and Machine Learning.</h4>   
    </div>
    </Link>
    


    <Link to="/courses" className="L">
        <button className="divbut2">Back</button>
    </Link>
    
    
    </>)
}

export default Ds;