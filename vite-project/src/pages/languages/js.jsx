import YT from '../yt';
import { Link } from "react-router-dom";
import JS from "../../assets/JS.png";

const Js = () => {
  return(<>

  <h1>Javasscript</h1>
  <div className="languagediv">
    <h2>Description</h2>
    <p>
      JavaScript is a high-level, versatile programming language that powers the dynamic behavior of most modern websites.
      Originally developed for client-side scripting in web browsers, JavaScript has grown into a full-fledged, general-purpose
      language thanks to tools like Node.js. Its event-driven, non-blocking model makes it particularly well-suited for
      real-time applications. With broad browser support, a massive ecosystem, and a strong community, JavaScript remains
      essential for frontend, backend, and full stack development in today’s web-driven world.
    </p>

    
    
    <h2>(No Download Needed)</h2>
    <img src={JS} alt="JS Logo" style={{width: '200px'}}/>
    

    <h2>Syntax</h2>
    <ul>
      <li><strong>Printing:</strong> <code>console.log(&quot;Hello, world!&quot;);</code></li>
      <li><strong>Variables:</strong> <code>let x = 10;</code>, <code>const name = &quot;Alice&quot;;</code></li>
      <li><strong>Loops:</strong> <code>for (let i = 0; i &lt; 5; i++) &#123; console.log(i); &#125;</code></li>
      <li><strong>Conditionals:</strong> <code>if (x &gt; 5) &#123; console.log(&quot;Greater&quot;); &#125;</code></li>
      <li><strong>User Input (Browser):</strong> <code>let name = prompt(&quot;Enter your name:&quot;);</code></li>
      <li><strong>Functions:</strong> <code>function greet(name) &#123; console.log(&quot;Hello, &quot; + name); &#125;</code></li>
    </ul>

    <h2>Frameworks/tools</h2>
    <ul>
      <li><strong>Frontend:</strong> React, Vue.js, Angular, Svelte</li>
      <li><strong>Backend:</strong> Node.js, Express, NestJS, Koa</li>
      <li><strong>Full Stack:</strong> Next.js, Nuxt.js, Meteor, RedwoodJS</li>
      <li><strong>Build Tools:</strong> Webpack, Vite, Babel, Parcel</li>
      <li><strong>Testing:</strong> Jest, Mocha, Cypress, Jasmine</li>
      <li><strong>GUI / Desktop:</strong> Electron, Tauri</li>
    </ul>

    <h2>Videos</h2>
    <div className="video-row">
      <div className="video-wrapper">
        <YT videoId="DHjqpvDnNGE"/>
      </div>
      <div className="video-wrapper">
        <YT videoId="PkZNo7MFNFg"/>
      </div>
    </div>

    <Link to="/languages" className="L">
      <button className="divbut3">Back</button>
    </Link>
  </div>

  </>);
};

export default Js;