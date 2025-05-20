import { Link } from "react-router-dom";

import devLogo from '../assets/devlogo.png';
import frameLogo from '../assets/framelogo.png';
import resLogo from '../assets/reslogo.png';

const Tools = () => {
    return(<>
    <h1>Tools</h1>
    <div className="home">
        <Link to="frameworks" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="homediv" style={{backgroundColor: 'rgb(247, 225, 31)'}}>
                <h1>Frameworks</h1>
                <img src={frameLogo} alt="fl" style={{ width: '150px', height: '150px', marginLeft: '15%'}}/>
            </div>
        </Link>
        <Link to="devtools" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="homediv" style={{backgroundColor: 'rgb(136, 142, 221)'}}>
                <h1>Development Tools</h1>
                <img src={devLogo} alt="fl" style={{ width: '100px', height: '100px', marginLeft: '26%'}}/>
            </div>
        </Link>
        <Link to="resources" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="homediv" style={{backgroundColor: 'rgb(96, 247, 31)'}}>
                <h1>Resources</h1>
                <img src={resLogo} alt="fl" style={{ width: '150px', height: '150px', marginLeft: '15%'}}/>
            </div>
        </Link>  
    </div>
    <Link to="/">
        <button>Back</button>
    </Link>
    </>);
}

export default Tools;