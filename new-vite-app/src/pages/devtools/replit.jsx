import YT from '../yt';
import { Link } from "react-router-dom";
import repLit from "../../assets/repLit.png";

const Replit = () =>{
    return(<>
    <div className="tooldiv">
        <h2>Description</h2>
        <p>Replit is a browser-based code editor that allows development and collaboration in nearly every relevant programming language. Replit also hosts community features such as posting projects and following other users. In recent years replit has added AI tools to enhance the development experience.</p>
        
        <a href="https://replit.com" target="_blank" style={{color: 'black', textDecoration: 'none'}}>
            <h2>Visit site ↓</h2>
            <img src={repLit} alt="Replit Logo" style={{width: '150px'}}/>
        </a>
        
        <h2>Videos</h2>
        <div className="video-row">
            <div className="video-wrapper">
                <YT videoId="D4f7_lPwXtE"/>
            </div>
            <div className="video-wrapper">
                <YT videoId="LKI0iJx8PU4"/>
            </div>
        </div>
        <Link to="/tools/devtools" className="L">
            <button className="divbut3">Back</button>
        </Link>
    </div>
    </>)

}

export default Replit;