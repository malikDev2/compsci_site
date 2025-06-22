import YT from '../yt';
import { Link } from "react-router-dom";
import chatGPT from "../../assets/chatGPT.png";

const Chat = () =>{
    return(<>
    <div className="tooldiv">
        <h2>Description</h2>
        <p>ChatGPT is a generative AI tool developed by OpenAI. ChatGPT assists computer science students by explaining complicated topics, reviewing homework problems, fixing programming bugs, and through many other ways. As AI continues to grow in power, it's capabilites will only expand.</p>
        
        <a href="https://chatgpt.com/" target="_blank" style={{color: 'black', textDecoration: 'none'}}>
            <h2>Visit site ↓</h2>
            <img src={chatGPT} alt="chatGPT" style={{width: '200px'}}/>
        </a>
        
        <h2>Videos</h2>
        <div className="video-row">
            <div className="video-wrapper">
                <YT videoId="OGmDr8TLtTo"/>
            </div>
        </div>

        <Link to="/tools/devtools" className="L">
            <button className="divbut3">Back</button>
        </Link>
    </div>
    </>)

}

export default Chat;