import { Link } from "react-router-dom";
import mathLogo from '../assets/mathlogo.png';
import csLogo from '../assets/cslogo.png';
import dsLogo from '../assets/dslogo.png'

const Courses = () => {
    return(<>
    <h1>Courses</h1>
    <div className="home">
        <Link to="/courses/math" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="homediv" style={{backgroundColor: 'rgb(207, 255, 51)'}}>
                <h1>Math</h1>
                <img src={mathLogo} alt="math" />
                
            </div>
        </Link>
        <Link to="/courses/cs" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="homediv" style={{backgroundColor: 'rgb(53, 65, 229)'}}>
                <h1>Computer Science</h1>
                <img src={csLogo} alt="cs" style={{ width: '100px', height: '100px', marginLeft: '27%'}} />
                
            </div>
        </Link>
        <Link to="ds" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="homediv" style={{backgroundColor: 'rgb(226, 73, 17)'}}>
                <h1>Data Science</h1>
                <img src={dsLogo} alt="ds" style={{ width: '120px', height: '120px', marginLeft: '23%'}}/>
            </div>
        </Link>
        
    </div>

    <Link to="/" className="L">
        <button className="divbut">🢀</button>
    </Link>
    

    </>);
}

export default Courses;