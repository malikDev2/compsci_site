import YT from '../yt';
import { Link } from "react-router-dom";
import youTube from "../../assets/youTUbe.png";

const Youtube = () =>{
    return(<>
    <div className="tooldiv">
        <h2>Description</h2>
        <p>Youtube is the widely popular videostreaming service owned by google. Youtube serves as a great resource for Computer Science students due to it's wide array of math, computer science, and programming based content.</p>
         <a href="https://youtube.com" target="_blank" style={{color: 'black', textDecoration: 'none'}}>
                    <h2>Visit site ↓</h2>
                    <img src={youTube} alt="Leetcode Logo" style={{width: '150px'}}/>
                </a>
        <h2>Key uses</h2>
        <ul>
            <li>Midterm/Final review</li>
            <li>Lectures/videos on specific course topics</li>
            <li>Learning new languages/frameworks</li>
            <li>Roadmaps or tips</li>
        </ul>
        <Link to="/tools/resources" className="L">
            <button className="divbut3">Back</button>
        </Link>
        
    </div>
    </>)

}

export default Youtube;