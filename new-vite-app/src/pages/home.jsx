import { Link } from "react-router-dom";

import toolLogo from '../assets/toollogo.png';
import proLogo from '../assets/prologo.png';
import courseLogo from '../assets/courselogo.png';

const Home = () =>{
    return <>
    <h1>Computer Science Guide</h1>
    <h4 style={{justifySelf: 'center', marginLeft: '140px'}}>By: Malik Jacobs</h4>
    <div className="home" >
        <Link to="courses" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="homediv" style={{backgroundColor: 'rgb(255, 123, 100)'}}>
                <h1>Courses</h1>
                <img src={courseLogo} alt="courses" style={{ width: '120px', height: '120px', marginLeft: '23%'}} />        
        </div>
        </Link>
        <Link to="languages" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="homediv" style={{backgroundColor: 'rgb(159, 111, 255)'}}>
                <h1>Programming Languages</h1>
                <img src={proLogo} alt="languages" style={{ width: '120px', height: '120px', marginLeft: '23%'}} /> 
            </div>
        </Link>
        <Link to="tools" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="homediv" style={{backgroundColor: 'rgb(255, 225, 91)'}}>
                <h1>Tools</h1>
                <img src={toolLogo} alt="tools" style={{ width: '120px', height: '120px', marginLeft: '20%'}} /> 
            </div>
        </Link>
    </div>

    </>;
}
export default Home;