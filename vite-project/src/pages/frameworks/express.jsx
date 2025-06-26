import YT from '../yt';
import { Link } from "react-router-dom";
import exp from "../../assets/express.png";

const Express = () =>{
    return(<>
    <div className="tooldiv">
        <h2>Description</h2>
        <p>Express.js is a framework which simplifies the server side syntax of Node.js. Express provides simplified syntax for routing, middleware for request handling, and allows API/Database integration. </p>
        
        <a href="https://expressjs.com/" target="_blank" style={{color: 'black', textDecoration: 'none'}}>
            <h2>Visit site ↓</h2>
            <img src={exp} alt="Express Logo" style={{width: '250px'}}/>
        </a>

        <h2>Videos</h2>
        <div className="video-row">
            <div className="video-wrapper">
                <YT videoId="SccSCuHhOw0"/>
            </div>
        </div>
        <Link to="/tools/frameworks" className="L">
            <button className="divbut3">Back</button>
        </Link>
    </div>
    </>)

}

export default Express;