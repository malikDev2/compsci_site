import YT from '../yt';
import { Link } from "react-router-dom";
import node from "../../assets/nOde.png";

const Node = () => {
    return (
        <>
            <div className="tooldiv">
                <h2>Description</h2>
                <p>Node.js is a runtime environment that executes JavaScript outside of a web browser. Node serves as the backbone for JS web development by managing backend and server-side functionality. Key features of Node include its asynchronous structure, high performance from Google's V8 engine, and the Node Package Manager which provides developers with numerous open-source libraries.</p>
                
                <a href="https://nodejs.org/en" target="_blank" style={{ color: 'black', textDecoration: 'none' }}>
                    <h2>Visit site ↓</h2>
                    <img src={node} alt="Node Logo" style={{ width: '150px' }} />
                </a>

                <h2>Code Snippet</h2>
                <pre style={{ backgroundColor: '#f4f4f401', padding: '1em', borderRadius: '8px', overflowX: 'auto' }}>
<code>{`// Basic Express server in Node.js
const express = require('express');
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Route
app.get('/', (req, res) => {
  res.send('Hello from Node.js 🚀');
});

// Asynchronous example
app.get('/data', async (req, res) => {
  try {
    const fakeData = await Promise.resolve({ msg: 'Async response success!' });
    res.json(fakeData);
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
  }
});

app.listen(PORT, () => {
  console.log(\`Server is running on http://localhost:\${PORT}\`);
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
