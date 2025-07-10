import YT from '../yt';
import { Link } from "react-router-dom";
import py from "../../assets/python.png";

const Python = () => {
  return(<>

  <h1>Python</h1>
  <div className="languagediv">
    <h2>Description</h2>
    <p>
      Python is one of the world's most widely used general-purpose programming languages. It rose to popularity due to its
      simple, readable syntax that lowers the barrier to entry for new programmers, along with its massive collection of
      libraries that make development faster and easier. Originally designed as a simplified alternative to complex
      languages like C/C++, Python has evolved into a dominant force in the programming world. Its popularity has surged
      even further with the rise of data science, machine learning, and AI, where Python is now considered the de facto standard.
    </p>

    
    <a href="https://www.python.org/" target="_blank" style={{color: 'black', textDecoration: 'none'}}>
      <h2>Visit site ↓</h2>
      <img src={py} alt="Python Logo" style={{width: '200px'}}/>
    </a>

    <h2>Syntax</h2>
    <ul>
      <li><strong>Printing:</strong> <code>print("Hello, world!")</code></li>
      <li><strong>Variables:</strong> <code>x = 10</code>, <code>name = "Alice"</code></li>
      <li><strong>Loops:</strong> <code>for i in range(5): print(i)</code></li>
      <li><strong>Conditionals:</strong> <code>if x &gt; 5: print("Greater")</code></li>
      <li><strong>User Input:</strong> <code>name = input("Enter your name: ")</code></li>
      <li><strong>Functions:</strong> <code>def greet(name): print("Hello, " + name)</code></li>
    </ul>

    <h2>Frameworks/tools</h2>
    <ul>
      <li><strong>Frontend:</strong> Brython, Anvil</li>
      <li><strong>Backend:</strong> Django, Flask, FastAPI</li>
      <li><strong>Full Stack:</strong> PyScript (experimental), Anvil</li>
      <li><strong>Data Science:</strong> Pandas, NumPy, Matplotlib</li>
      <li><strong>AI / ML:</strong> TensorFlow, PyTorch, Scikit-learn</li>
      <li><strong>GUI:</strong> Tkinter, PyQt, Kivy</li>
      <li><strong>Web Scraping:</strong> BeautifulSoup, Scrapy</li>
      <li><strong>Dev Tools:</strong> Jupyter, pip, virtualenv</li>
    </ul>

    <h2>Videos</h2>
    <div className="video-row">
      <div className="video-wrapper">
        <YT videoId="x7X9w_GIm1s"/>
      </div>
      <div className="video-wrapper">
        <YT videoId="K5KVEU3aaeQ"/>
      </div>
    </div>

    <Link to="/languages" className="L">
      <button className="divbut3">🢀</button>
    </Link>
  </div>

  </>)
};

export default Python;
