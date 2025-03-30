import { Link } from "react-router-dom";

const Home = () =>{
    return <>
    <h1>Home page for code site</h1>
    <div className="home">
        <div className="homediv">
            <h1>Courses</h1>
            <h2>description</h2>
            <Link to="courses">
                <button>Visit</button>
            </Link>
        </div>
        <div className="homediv">
            <h1>Programming Languages</h1>
            <h2>description</h2>
            <Link to="languages">
                <button>Visit</button>
            </Link>
            
        </div>
        <div className="homediv">
            <h1>Tools</h1>
            <h2>description</h2>
            <Link to="tools">
                <button>Visit</button>
            </Link>
            
        </div>
    </div>
    </>;
}
export default Home;