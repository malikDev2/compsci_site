import YT from '../yt';
import { Link } from "react-router-dom";
import node from "../../assets/nOde.png";

const Node = () =>{
    return(<>
    <div className="tooldiv">
        <h2>Description</h2>
        <p>Node.js is a runtime environment that executes JavaScript outside of a web browser. Node serves as the backbone for JS web development by managing backend and server-side functionality. Key features of Node include it's asynchronous structure, high performance from google's V8 engine, and the Node Package Manager which provides developers with numeours open-source libraries.   </p>
        
        <a href="https://nodejs.org/en" target="_blank" style={{color: 'black', textDecoration: 'none'}}>
            <h2>Visit site ↓</h2>
            <img src={node} alt="Node Logo" style={{width: '150px'}}/>
        </a>
        
        <h2>Videos</h2>
        <div className="video-row">
            <div className="video-wrapper">
                <YT videoId="q-xS25lsN3I"/>
            </div>
            <div className="video-wrapper">
                <YT videoId="TlB_eWDSMt4"/>
            </div>
        </div>

        <Link to="/tools/frameworks" className="L">
            <button className="divbut3">Back</button>
        </Link>
    </div>
    </>)

}

export default Node;

