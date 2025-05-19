import { Link } from "react-router-dom";

const Home = () =>{
    return <>
    <h1>Computer science catalog</h1>
    <div className="home" >
        <Link to="courses" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="homediv" style={{backgroundColor: 'rgb(255, 123, 100)'}}>
                <h1>Courses</h1>        
        </div>
        </Link>
        <Link to="languages" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="homediv" style={{backgroundColor: 'rgb(159, 111, 255)'}}>
                <h1>Programming Languages</h1>
            </div>
        </Link>
        <Link to="tools" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="homediv" style={{backgroundColor: 'rgb(255, 225, 91)'}}>
                <h1>Tools</h1>
            </div>
        </Link>
    </div>
    </>;
}
export default Home;