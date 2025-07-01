import YT from '../yt';
import { Link } from "react-router-dom";
import css from "../../assets/css.png";

const Css = () => {
  return(<>

  <h1>Language</h1>
  <div className="languagediv">
    <h2>Description</h2>
    <p>
      CSS (Cascading Style Sheets) is the language used to control the presentation and layout of HTML elements on web pages.
      It enables developers and designers to apply styles such as colors, fonts, spacing, and responsive design. CSS works
      alongside HTML and JavaScript to deliver beautiful and dynamic user interfaces. With the evolution of CSS3,
      capabilities like animations, grid/flex layouts, and media queries have made it an essential part of modern web
      development.
    </p>

    
    <h2>(No need to download)</h2>
          <img src={css} alt="Css Logo" style={{width: '150px'}}/>
        

    <h2>Syntax</h2>
    <ul>
      <li><strong>Basic Rule:</strong>
        <pre>{`selector {
  property: value;
}`}</pre>
      </li>
      <li><strong>Color and Font:</strong> <code>color: red;</code>, <code>font-family: Arial;</code></li>
      <li><strong>Box Model:</strong> <code>margin: 10px;</code>, <code>padding: 5px;</code>, <code>border: 1px solid black;</code></li>
      <li><strong>Layout:</strong> <code>display: flex;</code>, <code>grid-template-columns: repeat(3, 1fr);</code></li>
      <li><strong>Positioning:</strong> <code>position: absolute;</code>, <code>top: 0;</code></li>
      <li><strong>Pseudo-selectors:</strong> <code>:hover</code>, <code>:nth-child(2)</code></li>
      <li><strong>Media Queries:</strong>
        <pre>{`@media (max-width: 600px) {
  body {
    font-size: 14px;
  }
}`}</pre>
      </li>
      <li><strong>Animations:</strong>
        <pre>{`@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}`}</pre>
      </li>
    </ul>

    <h2>Frameworks/tools</h2>
    <ul>
      <li><strong>Utility-first:</strong> Tailwind CSS, Windi CSS</li>
      <li><strong>Component-based:</strong> Bootstrap, Bulma, Foundation</li>
      <li><strong>Preprocessors:</strong> SASS/SCSS, LESS, Stylus</li>
      <li><strong>Postprocessors:</strong> PostCSS</li>
      <li><strong>Dev Tools:</strong> Chrome DevTools, Stylelint</li>
    </ul>

    <h2>Videos</h2>
    <div className="video-row">
      <div className="video-wrapper">
        <YT videoId="OEV8gMkCHXQ"/>
      </div>
      <div className="video-wrapper">
        <YT videoId="1PnVor36_40"/>
      </div>
    </div>

    <Link to="/languages" className="L">
      <button className="divbut3">Back</button>
    </Link>
  </div>

  </>);
};

export default Css;
