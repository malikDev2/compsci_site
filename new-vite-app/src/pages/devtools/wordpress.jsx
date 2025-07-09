import YT from '../yt';
import { Link } from "react-router-dom";
import wordPress from "../../assets/wordPress.png";

const Word = () =>{
    return(<>
    <div className="tooldiv">
        <h2>Description</h2>
        <p>Wordpress is a web development tool that makes managing and developing web pages easier. Wordpress provides a dashboard for viewing all pages of a website. The tool also allows the choice of zero-code, full-code, or a mixture of the two for developing each page.</p>
        
        <a href="https://wordpress.com/ppc/lohp-campaign/?utm_source=google&utm_campaign=google_search_wpcom_acquisition_brand_us_en&utm_medium=paid_search&keyword=wordpress&creative=685174474764&campaignid=20879142434&adgroupid=157130594819&matchtype=p&device=c&network=g&targetid=kwd-507175142&utm_content=&gad_source=1&gad_campaignid=20879142434&gbraid=0AAAAADhlTH6fWVGvKsOM0xn6uhsNkHUbY&gclid=CjwKCAjw9uPCBhATEiwABHN9K6UmZa5m6CLdg5moa9oiFUaTOes1MEDS7i2yvVmMXj5RZGH5zENLZBoCwfEQAvD_BwE" target="_blank" style={{color: 'black', textDecoration: 'none'}}>
            <h2>Visit site ↓</h2>
            <img src={wordPress} alt="WordPress Logo" style={{width: '150px'}}/>
        </a>
        
        <h2>Videos</h2>
        <div className="video-row">
            <div className="video-wrapper">
                <YT videoId="zd5_MN-6kqs"/>
            </div>
        </div>
        <Link to="/tools/devtools" className="L">
            <button className="divbut3">Back</button>
        </Link>
    </div>
    </>)

}

export default Word;