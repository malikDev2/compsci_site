import YT from '../yt';
import { Link } from "react-router-dom";
import Jav from "../../assets/java.png";

const Java = () => {
  return(<>

  <h1>Java</h1>
  <div className="languagediv">
    <h2>Description</h2>
    <p>
      Java is a high-level, class-based, object-oriented programming language that has been a cornerstone of enterprise and
      backend development since the 1990s. Designed with the philosophy of "write once, run anywhere," Java became popular
      for its portability across platforms via the Java Virtual Machine (JVM). Its strong typing, extensive standard
      libraries, and mature ecosystem make it a trusted choice for building large, maintainable systems. Java continues to be
      widely used in Android development, backend servers, and big data platforms, maintaining its status as one of the most
      used languages globally.
    </p>

    
    <a href="https://www.java.com/en/" target="_blank" style={{color: 'black', textDecoration: 'none'}}>
      <h2>Visit site ↓</h2>
      <img src={Jav} alt="Java Logo" style={{width: '200px'}}/>
    </a>

    <h2>Syntax</h2>
    <ul>
      <li><strong>Printing:</strong> <code>System.out.println(&quot;Hello, world!&quot;);</code></li>
      <li><strong>Variables:</strong> <code>int x = 10;</code>, <code>String name = &quot;Alice&quot;;</code></li>
      <li><strong>Loops:</strong> <code>for (int i = 0; i &lt; 5; i++) &#123; System.out.println(i); &#125;</code></li>
      <li><strong>Conditionals:</strong> <code>if (x &gt; 5) &#123; System.out.println(&quot;Greater&quot;); &#125;</code></li>
      <li><strong>User Input:</strong> <code>Scanner sc = new Scanner(System.in); String name = sc.nextLine();</code></li>
      <li><strong>Functions (methods):</strong> <code>public static void greet(String name) &#123; System.out.println(&quot;Hello, &quot; + name); &#125;</code></li>
    </ul>

    <h2>Frameworks/tools</h2>
    <ul>
      <li><strong>Backend:</strong> Spring, Jakarta EE, Micronaut, Quarkus</li>
      <li><strong>Full Stack:</strong> Vaadin, JHipster</li>
      <li><strong>Android/Mobile:</strong> Android SDK, Jetpack</li>
      <li><strong>GUI:</strong> JavaFX, Swing, SWT</li>
      <li><strong>Build Tools:</strong> Maven, Gradle, Ant</li>
      <li><strong>Testing:</strong> JUnit, TestNG, Mockito</li>
    </ul>

    <h2>Videos</h2>
    <div className="video-row">
      <div className="video-wrapper">
        <YT videoId="l9AzO1FMgM8"/>
      </div>
      <div className="video-wrapper">
        <YT videoId="eIrMbAQSU34"/>
      </div>
    </div>

    <Link to="/languages" className="L">
      <button className="divbut3">Back</button>
    </Link>
  </div>

  </>);
};

export default Java;
