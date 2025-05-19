import { Link } from "react-router-dom";

const Tools = () => {
    return(<>
    <h1>Tools</h1>
    <div className="home">
        <Link to="frameworks" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="homediv" style={{backgroundColor: 'rgb(247, 225, 31)'}}>
                <h1>Frameworks</h1>
            </div>
        </Link>
        <Link to="devtools" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="homediv" style={{backgroundColor: 'rgb(136, 142, 221)'}}>
                <h1>Development Tools</h1>
            </div>
        </Link>
        <Link to="resources" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="homediv" style={{backgroundColor: 'rgb(96, 247, 31)'}}>
                <h1>Resources</h1>
            </div>
        </Link>  
    </div>
    </>);
}

export default Tools;