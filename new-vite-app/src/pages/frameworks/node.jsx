import YT from '../yt';
import { Link } from "react-router-dom";
import node from "../../assets/nOde.png";

const Node = () => {
    return (
        <>
            <div className="tooldiv">
                <h2>Description</h2>
                <p>
                    Node.js is a runtime environment that executes JavaScript outside of a web browser. Node serves as the backbone for JS web development by managing backend and server-side functionality. Key features of Node include its asynchronous structure, high performance from Google's V8 engine, and the Node Package Manager which provides developers with numerous open-source libraries.
                </p>
                
                <a href="https://nodejs.org/en" target="_blank" style={{ color: 'black', textDecoration: 'none' }}>
                    <h2>Visit site ↓</h2>
                    <img src={node} alt="Node Logo" style={{ width: '150px' }} />
                </a>

                <h2>Code Snippet</h2>
                <pre
                    className="code-snippet"
                    style={{
                        backgroundColor: '#f4f4f401',
                        padding: '1em',
                        borderRadius: '8px',
                        overflowX: 'auto'
                    }}
                >
<code>{`// Basic vanilla Node.js server 
const http = require('http');
const PORT = 3000;

const server = http.createServer((req, res) => {
  if (req.url === '/' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello from vanilla Node.js 🚀');
  } else if (req.url === '/data' && req.method === 'GET') {
    // Example of async handling
    Promise.resolve({ msg: 'Async response success!' })
      .then(data => {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(data));
      })
      .catch(() => {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Something went wrong' }));
      });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

server.listen(PORT, () => {
  console.log(\`Server running at http://localhost:\${PORT}\`);
});`}</code>
                </pre>

                <h2>Videos</h2>
                <div className="video-row">
                    <div className="video-wrapper">
                        <YT videoId="q-xS25lsN3I" />
                    </div>
                    <div className="video-wrapper">
                        <YT videoId="TlB_eWDSMt4" />
                    </div>
                </div>

                <Link to="/tools/frameworks" className="L">
                    <button className="divbut3">Back</button>
                </Link>
            </div>
        </>
    )
}

export default Node;
