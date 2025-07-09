import YT from '../yt';
import { Link } from "react-router-dom";
import freecc from "../../assets/freecc.png";
import youTube from "../../assets/youTUbe.png";

const Fcc = () =>{
    return(<>
    <div className="tooldiv">
        <h2>Description</h2>
        <p>FreeCodeCamp provides tutorials on nearly every essential Programming Language and Tool, whether that be through their website or youtube channel.</p>
        
        <a href="https://www.freecodecamp.org/" target="_blank" style={{color: 'black', textDecoration: 'none'}}>
            <h2>Visit site ↓</h2>
            <img src={freecc} alt="Frecc Logo" style={{width: '150px'}}/>
        </a>
        <a href="https://www.youtube.com/@freecodecamp/playlists" target="_blank" style={{color: 'black', textDecoration: 'none'}}>
            <img src={youTube} alt="Youtube Logo" style={{width: '150px'}}/>
        </a>
        <h2>Additional sections</h2>
        <h2>Videos</h2>
        <div className="video-row">
            <div className="video-wrapper">
                <YT videoId="pCtkD5AMbDo"/>
            </div>
        </div>
        <Link to="/tools/resources" className="L">
            <button className="divbut3">Back</button>
        </Link>
    </div>
    </>)

}

export default Fcc;