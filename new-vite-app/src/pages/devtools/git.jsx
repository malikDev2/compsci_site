import YT from '../yt';
import { Link } from "react-router-dom";
import git from "../../assets/git.png"

const Git = () =>{
    return(<>
    <div className="tooldiv">
        <h2>Description</h2>
        <p>Git is a version control system used to track the progression of programs. Key features of git include creating, deleting, branching, merging, pulling, and committing to reposotories. Git can be used via bash/terminal or Git GUI. Git is commonly paired with github.</p>
        <a href="https://git-scm.com/" target="_blank" style={{color: 'black', textDecoration: 'none'}}>
            <h2>Visit site ↓</h2>
            <img src={git} alt="git" style={{width: '200px'}}/>
        </a>
       
        <h2>Videos</h2>
        <div className="video-row">
            <div className="video-wrapper">
                <YT videoId="e9lnsKot_SQ"/>
            </div>
        </div>

        <Link to="/tools/devtools" className="L">
            <button className="divbut3">Back</button>
        </Link>
    </div>
    </>)

}

export default Git;