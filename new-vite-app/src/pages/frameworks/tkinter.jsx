import YT from '../yt';
import { Link } from "react-router-dom";
import tkin from "../../assets/tkin.png";

const Tkinter = () =>{
    return(<>
    <div className="tooldiv">
        <h2>Description</h2>
        <p>Tkinter is a python GUI used to create basic applications. Tkinter's blocky architecture makes it a great tool for programming beginners.</p>
        
        <a href="https://docs.python.org/3/library/tkinter.html" target="_blank" style={{color: 'black', textDecoration: 'none'}}>
            <h2>Visit site ↓</h2>
            <img src={tkin} alt="Tkinter Logo" style={{width: '150px'}}/>
        </a>
        
        <h2>Videos</h2>
        <div className="video-row">
            <div className="video-wrapper">
                <YT videoId="ibf5cx221hk"/>
            </div>
        </div>
        <Link to="/tools/frameworks" className="L">
            <button className="divbut3">Back</button>
        </Link>
    </div>
    </>)

}

export default Tkinter;