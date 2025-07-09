import YT from '../yt';
import { Link } from "react-router-dom";
import ht from "../../assets/ht.png";

const Html = () => {
  return(<>

  <h1>HTML</h1>
  <div className="languagediv">
    <h2>Description</h2>
    <p>
      HTML (HyperText Markup Language) is the standard language used to create and structure content on the web.
      It forms the backbone of all web pages by defining the elements and layout of a page, such as headings, paragraphs,
      images, links, and more. While not a programming language, HTML is a **markup language** and works closely with CSS
      and JavaScript to deliver rich, interactive user experiences. Its simplicity and universal support have made it a
      foundational technology for the web.
    </p>

    
    
      <h2>(No need to download)</h2>
      <img src={ht} alt="Html Logo" style={{width: '200px'}}/>
    

    <h2>Syntax</h2>
    <ul>
      <li><strong>Basic Structure:</strong>
        <pre>{`<!DOCTYPE html>
<html>
  <head>
    <title>Page Title</title>
  </head>
  <body>
    <h1>Hello, world!</h1>
  </body>
</html>`}</pre>
      </li>
      <li><strong>Headings:</strong> <code>&lt;h1&gt; to &lt;h6&gt;</code></li>
      <li><strong>Paragraphs:</strong> <code>&lt;p&gt;This is a paragraph.&lt;/p&gt;</code></li>
      <li><strong>Links:</strong> <code>&lt;a href=&quot;https://example.com&quot;&gt;Visit&lt;/a&gt;</code></li>
      <li><strong>Images:</strong> <code>&lt;img src=&quot;image.jpg&quot; alt=&quot;desc&quot; /&gt;</code></li>
      <li><strong>Lists:</strong> <code>&lt;ul&gt;&lt;li&gt;Item&lt;/li&gt;&lt;/ul&gt;</code>, <code>&lt;ol&gt;&lt;li&gt;Item&lt;/li&gt;&lt;/ol&gt;</code></li>
      <li><strong>Forms:</strong> <code>&lt;form&gt;&lt;input type=&quot;text&quot; /&gt;&lt;/form&gt;</code></li>
    </ul>

    <h2>Frameworks/tools</h2>
    <ul>
      <li><strong>UI Frameworks:</strong> Bootstrap, Foundation, Tailwind CSS</li>
      <li><strong>Editors:</strong> VS Code, Sublime Text, Atom, Brackets</li>
      <li><strong>Static Site Generators:</strong> Jekyll, Hugo, Eleventy</li>
      <li><strong>Validators &amp; Linters:</strong> W3C Validator, HTMLHint</li>
    </ul>

    <h2>Videos</h2>
    <div className="video-row">
      <div className="video-wrapper">
        <YT videoId="ok-plXXHlWw"/>
      </div>
      <div className="video-wrapper">
        <YT videoId="qz0aGYrrlhU"/>
      </div>
    </div>

    <Link to="/languages" className="L">
      <button className="divbut3">Back</button>
    </Link>
  </div>

  </>);
};

export default Html;
