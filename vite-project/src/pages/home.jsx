import { Link } from "react-router-dom";

const Home = () =>{
    return <>
    <h1>Computer science catalog</h1>
    <div className="home" >
        <Link to="courses" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="homediv">
                <h1>Courses</h1>
                <h4>View the various Computer Science, Math, and Data Science courses I've taken in pursuit of my degree.</h4>        
        </div>
        </Link>
        <Link to="languages" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="homediv">
                <h1>Programming Languages</h1>
                <h4>Learn about the various different programming languages I've picked up over the years.</h4>
            </div>
        </Link>
        <Link to="tools" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="homediv">
                <h1>Tools</h1>
                <h4>Discover the various editors, dev tools, frameworks, and more that allow me to write and run code.</h4>     
            </div>
        </Link>
    </div>
    </>;
}
export default Home;