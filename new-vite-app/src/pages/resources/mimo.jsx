import YT from '../yt';
import { Link } from "react-router-dom";
import mimo from "../../assets/mimo.png";

const Mimo = () =>{
    return(<>
    <div className="tooldiv">
        <h2>Description</h2>
        <p>Mimo is an app that teaches users how to program. Mimo hosts tutorials on many of the most used programming languages, as well as featuring career-based lessons.</p>
        <a href="https://mimo.org" target="_blank" style={{color: 'black', textDecoration: 'none'}}>
            <h2>Visit site ↓</h2>
            <img src={mimo} alt="Mimo Logo" style={{width: '150px'}}/>
        </a>
        <h2>Programming languages</h2>
        <p>Javascript, Typescript, Swift, Html, CSS, SQL, Python</p>
        <p><strong>Special:</strong> React</p>
        <h2>Career path lessons</h2>
        <p>Front end developer, Back-end developer, Full-stack developer, Python developer.</p>
        <h2>Additional features</h2>
        <p>Leaderboard, Review practice, Mimo AI</p>
        <h2>Videos</h2>
        <div className="video-row">
            <div className="video-wrapper">
                <YT videoId="sA7liNyzhvQ"/>
            </div>
        </div>
        <Link to="/tools/resources" className="L">
            <button className="divbut3">Back</button>
        </Link>
    </div>
    </>)

}

export default Mimo;