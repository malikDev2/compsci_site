import YT from '../yt';
import { Link } from "react-router-dom";
import jsts from "../../assets/jsts.png";

const Jsx = () => {
  return(<>
  <h1>JSX/TSX</h1>

  <div className="languagediv">
    <h2>Description</h2>
    <p>
      JSX (JavaScript XML) is a syntax extension for JavaScript that allows developers to write HTML-like code directly
      within JavaScript. It's commonly used with React to define UI components in a declarative, component-driven way.
      TSX is the TypeScript version of JSX, offering the same capabilities but with strong typing. These syntaxes streamline
      UI development and enhance readability, combining the expressive power of HTML with the dynamic logic of JS/TS.
    </p>

    <h2>(JSX/TSX already installed when initializing react project)</h2>
    <img src={jsts} alt="Assembly Logo" style={{width: '200px'}}/>
           

    <h2>Syntax</h2>
    <h3>JSX Syntax Examples</h3>
    <ul>
      <li><strong>Component Definition:</strong>
        <pre>{`function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}`}</pre>
      </li>
      <li><strong>Rendering Elements:</strong>
        <pre>{`const element = <button>Click Me</button>;`}</pre>
      </li>
      <li><strong>Event Handling:</strong>
        <pre>{`<button onClick={() => alert('Clicked!')}>Click</button>`}</pre>
      </li>
      <li><strong>Embedding Expressions:</strong>
        <pre>{`<p>{5 + 3}</p>`}</pre>
      </li>
    </ul>

    <h3>TSX Syntax Differences</h3>
    <ul>
      <li><strong>Typed Props:</strong>
        <pre>{`type Props = { name: string };

function Welcome({ name }: Props) {
  return <h1>Hello, {name}</h1>;
}`}</pre>
      </li>
      <li><strong>State Typing:</strong>
        <pre>{`const [count, setCount] = useState<number>(0);`}</pre>
      </li>
      <li><strong>Event Types:</strong>
        <pre>{`const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
  console.log(e);
};`}</pre>
      </li>
      <li><strong>Generics in Components:</strong>
        <pre>{`function List<T>({ items }: { items: T[] }) {
  return <ul>{items.map((item, i) => <li key={i}>{item}</li>)}</ul>;
}`}</pre>
      </li>
    </ul>

    <h2>Frameworks/tools</h2>
    <ul>
      <li><strong>Libraries:</strong> React, Preact</li>
      <li><strong>Full Stack:</strong> Next.js, Remix</li>
      <li><strong>Bundlers:</strong> Vite, Webpack, Parcel</li>
      <li><strong>Type Safety:</strong> TypeScript, Zod, React Hook Form</li>
      <li><strong>Component Styling:</strong> styled-components, Emotion, Tailwind CSS</li>
    </ul>

    <h2>Videos</h2>
    <div className="video-row">
      <div className="video-wrapper">
        <YT videoId="tbrR0KoGk_Q"/>
      </div>
    </div>
    <Link to="/languages" className="L">
      <button className="divbut3">Back</button>
    </Link>
  </div>
  </>);
};

export default Jsx;