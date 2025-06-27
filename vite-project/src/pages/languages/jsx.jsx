import YT from '../yt';
import { Link } from "react-router-dom";
import node from "../../assets/nOde.png";

const Jsx = () => {
  return(<>
  <h1>Language</h1>

  <div className="languagediv">
    <h2>Description</h2>
    <h3>Language page/install</h3>
    <h2>Syntax</h2>
    <h2>Frameworks/tools</h2>
    <h2>Videos</h2>
    <div className="video-row">
      <div className="video-wrapper">
        <YT videoId=""/>
      </div>
    </div>
    <Link to="/languages" className="L">
      <button className="divbut3">Back</button>
    </Link>
  </div>
  
  
  
  
  
  </>)
  

};

export default Jsx;