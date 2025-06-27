import YT from '../yt';
import { Link } from "react-router-dom";
import vsCode from "../../assets/vsCode.png";
const Vscode = () =>{
    return(<>
    <div className="tooldiv">
        <h2>Description</h2>
        <p>Visual Studio Code is the most widely used code editor. Vscode allows development in nearly any programming language or framework. The editor also includes a terminal and downloadable extensions, further enhancing the development process.</p>
        
        <a href="https://code.visualstudio.com/" target="_blank" style={{color: 'black', textDecoration: 'none'}}>
            <h2>Visit site ↓</h2>
            <img src={vsCode} alt="vsCode" style={{width: '200px'}}/>
        </a>
        
        <h2>Videos</h2>
        <div className="video-row">
            <div className="video-wrapper">
                <YT videoId="KMxo3T_MTvY"/>
            </div>
        </div>

        <Link to="/tools/devtools" className="L">
            <button className="divbut3">Back</button>
        </Link>
    </div>
    </>)

}

export default Vscode;