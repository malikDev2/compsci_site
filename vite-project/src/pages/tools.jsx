import { Link } from "react-router-dom";

const Tools = () => {
    return(<>
    <h1>Tools</h1>
    <div className="home">
        <Link to="frameworks" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="homediv">
                <h1>Frameworks</h1>
                <h4>Frames</h4>
            </div>
        </Link>
        <Link to="devtools" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="homediv" style={{backgroundColor: 'rgb(12,20,120)'}}>
                <h1>Devtools</h1>
                <h4>dev</h4>
            </div>
        </Link>
        <Link to="resources" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="homediv">
                <h1>Resources</h1>
                <h4>helpful</h4>
            </div>
        </Link>  
    </div>
    </>);
}

export default Tools;