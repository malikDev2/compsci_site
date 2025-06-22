import YT from '../yt';
import { Link } from "react-router-dom";
import gitHub from "../../assets/gitHub.png";

const Github = () =>{
    return(<>
    <div className="tooldiv">
        <h2>Description</h2>
        <p>GitHub is a cloud-based platform purposed to store code. It allows users to view their own, as well as any publicly posted repository. Github is used in personal, academic, and professional settings. Github is commonly paired with Git for managing reposotories, however Github can be used by itself. </p>
        
        <a href="https://github.com/" target="_blank" style={{color: 'black', textDecoration: 'none'}}>
            <h2>Visit site ↓</h2>
            <img src={gitHub} alt="git" style={{width: '200px'}}/>
        </a>
        
        <h2>Videos</h2>
        <div className="video-row">
            <div className="video-wrapper">
                <YT videoId="a9u2yZvsqHA"/>
            </div>
        </div>

        <Link to="/tools/devtools" className="L">
            <button className="divbut3">Back</button>
        </Link>
    </div>
    </>)

}

export default Github;