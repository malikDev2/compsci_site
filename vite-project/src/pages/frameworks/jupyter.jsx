import YT from '../yt';
import { Link } from "react-router-dom";
import jup from "../../assets/jup.png";

const Jupyter = () =>{
    return(<>
    <div className="tooldiv">
        <h2>Description</h2>
        <p>Jupyter notebook is a python environment for working with data. Jupyter allows the use of libraries such as Pandas, Matplotlib, and Seaborn to sort, modify, and visualize sets of data. </p>
        
        <a href="https://jupyter.org/" target="_blank" style={{color: 'black', textDecoration: 'none'}}>
            <h2>Visit site ↓</h2>
            <img src={jup} alt="Jupyter Logo" style={{width: '150px'}}/>
        </a>
        
        <h2>Videos</h2>
        <div className="video-row">
            <div className="video-wrapper">
                <YT videoId="tse_8LLWtfY"/>
            </div>
        </div>
    </div>
    </>)

}

export default Jupyter;