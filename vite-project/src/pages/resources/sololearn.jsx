import YT from '../yt';
import { Link } from "react-router-dom";
import soloLearn from "../../assets/soloLearn.png";

const Solo = () =>{
    return(<>
    <div className="tooldiv">
        <h2>Description</h2>
        <p>Sololearn is a great app for learning/practicing coding. Sololearn contains both beginner and intermediate lessons for a multitude of programming languages. The app also features many AI-related mini-courses. Apon completing a course, the app generates downloadable certificates.</p>
        <a href="https://www.sololearn.com/en/" target="_blank" style={{color: 'black', textDecoration: 'none'}}>
            <h2>Visit site ↓</h2>
            <img src={soloLearn} alt="Leetcode Logo" style={{width: '150px'}}/>
        </a>
        <h2>Languages taught</h2>
        <p>Python, Java, Javascript, C, C#, C++, Html, CSS, SQL, Angular</p>
        <h2>Additional lessons</h2>
        <p>Artifical intelligence mini lessons, Web development, Front-end, Coding for Data, Coding foundations/Tech for everyone (intro courses)</p>
        <h2>Videos</h2>
        <div className="video-row">
            <div className="video-wrapper">
                <YT videoId="4I8OuzLszuo"/>
            </div>
        </div>
    </div>
    </>)

}

export default Solo;