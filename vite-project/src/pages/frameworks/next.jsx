import YT from '../yt';
import { Link } from "react-router-dom";

const Next = () =>{
    return(<>
    <div className="tooldiv">
        <h2>Description</h2>
        <h2>Logo + Link</h2>
        <h2>Additional sections</h2>
        <h2>Videos</h2>
        <div className="video-row">
            <div className="video-wrapper">
                <YT videoId=""/>
            </div>
        </div>
    </div>
    </>)

}

export default Next;