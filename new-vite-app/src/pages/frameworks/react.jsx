import YT from '../yt';
import { Link } from "react-router-dom";
import reacT from "../../assets/reacT.png";

const Reac = () =>{
    return(<>
    <div className="tooldiv">
        <h2>Description</h2>
        <p>React is a frontend framework which vastly improves web development. Key features of React include its reusable component architecture, react hooks such as useState and useEffect, and the react router DOM which vastly simplifies managing webpages. When using react, code is either written in JSX or TSX, which are a mix of Javascript/Typescript and HTML. </p>
        
        <a href="https://react.dev/" target="_blank" style={{color: 'black', textDecoration: 'none'}}>
            <h2>Visit site ↓</h2>
            <img src={reacT} alt="React Logo" style={{width: '150px'}}/>
        </a>
        
        <h2>Videos</h2>
        <div className="video-row">
            <div className="video-wrapper">
                <YT videoId="SqcY0GlETPk"/>
            </div>
        </div>
        <Link to="/tools/frameworks" className="L">
            <button className="divbut3">Back</button>
        </Link>
        
    </div>
    </>)

}

export default Reac;