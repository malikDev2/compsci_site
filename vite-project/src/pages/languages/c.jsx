import YT from '../yt';
import { Link } from "react-router-dom";
import c from "../../assets/c.png";

const C = () => {
  return(<>

  <h1>Language</h1>
  <div className="languagediv">
    <h2>Description</h2>
    <p>
      C is a powerful, low-level programming language that laid the foundation for many modern languages, including C++, Java,
      and Python. Developed in the early 1970s, it has become a critical tool for system programming, embedded systems, and
      operating systems like UNIX. C provides granular control over memory, allowing developers to write highly efficient
      code. While it lacks many abstractions of higher-level languages, C's speed, portability, and influence make it
      indispensable in performance-critical environments.
    </p>

    
    
      <h2>(Use compiler such as GCC or Clang to run C)</h2>
      <img src={c} alt="C Logo" style={{width: '200px'}}/>
   

    <h2>Syntax</h2>
    <ul>
      <li><strong>Printing:</strong> <code>printf(&quot;Hello, world!\n&quot;);</code></li>
      <li><strong>Variables:</strong> <code>int x = 10;</code>, <code>char name[] = &quot;Alice&quot;;</code></li>
      <li><strong>Loops:</strong> <code>for (int i = 0; i &lt; 5; i++) &#123; printf(&quot;%d\n&quot;, i); &#125;</code></li>
      <li><strong>Conditionals:</strong> <code>if (x &gt; 5) &#123; printf(&quot;Greater\n&quot;); &#125;</code></li>
      <li><strong>User Input:</strong> <code>scanf(&quot;%s&quot;, name);</code></li>
      <li><strong>Functions:</strong> <code>void greet(char* name) &#123; printf(&quot;Hello, %s\n&quot;, name); &#125;</code></li>
    </ul>

    <h3>Memory Management &amp; Pointers</h3>
    <ul>
      <li><strong>Pointer Declaration:</strong> <code>int* ptr;</code></li>
      <li><strong>Pointer Assignment:</strong> <code>ptr = &amp;x;</code></li>
      <li><strong>Dereferencing:</strong> <code>printf(&quot;%d&quot;, *ptr);</code></li>
      <li><strong>Dynamic Memory:</strong> <code>int* arr = (int*) malloc(5 * sizeof(int));</code></li>
      <li><strong>Freeing Memory:</strong> <code>free(arr);</code></li>
    </ul>

    <h2>Frameworks/tools</h2>
    <ul>
      <li><strong>Build Tools:</strong> GCC, Clang, Make, CMake</li>
      <li><strong>GUI:</strong> GTK, ncurses</li>
      <li><strong>Embedded Dev:</strong> AVR-GCC, STM32CubeIDE, MPLAB X</li>
      <li><strong>Debugging:</strong> GDB, Valgrind</li>
    </ul>

    <h2>Videos</h2>
    <div className="video-row">
      <div className="video-wrapper">
        <YT videoId="U3aXWizDbQ4"/>
      </div>
      <div className="video-wrapper">
        <YT videoId="KJgsSFOSQv0"/>
      </div>
    </div>

    <Link to="/languages" className="L">
      <button className="divbut3">Back</button>
    </Link>
  </div>

  </>);
};

export default C;