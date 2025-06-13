import React, { useState } from 'react';
import YT from '../yt';

const Intro = () => {
  // Section logic
  const [expandedSections, setExpandedSections] = useState({
    description: false,
    units: false,
    unit1: false,
    unit2: false,
    unit3: false,
    unit4: false,
    unit5: false,
    definitions: false
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <>
      <h1>Intro to Computer Science</h1>
      <h2 style={{color: 'rgb(255, 152, 221)'}}>(AP Computer Science A)</h2>
      <div className="language-div">
        <div className="section">
          <div className="section-header-container" onClick={() => toggleSection('description')}>
            <h2 className="section-title">Description</h2>
            <span className="arrow-icon">
              {expandedSections.description ? '▼' : '▶'}
            </span>
          </div>
          {expandedSections.description && (
            <div className="section-content">
              <p>Introduction to Computer Science provides foundational knowledge of programming and computational thinking using Java. This course covers programming concepts, problem-solving techniques, and object-oriented design principles aligned with the AP Computer Science A curriculum.</p>
              <p>Students will learn to design, implement, and analyze programs in Java. The course emphasizes developing logical reasoning skills applicable to future computer science studies.</p>
            </div>
          )}
        </div>

        <div className="section">
          <div className="section-header-container" onClick={() => toggleSection('units')}>
            <h2 className="section-title">Units</h2>
            <span className="arrow-icon">
              {expandedSections.units ? '▼' : '▶'}
            </span>
          </div>
          {expandedSections.units && (
            <div className="subsection-container">
              {/* Unit 1 */}
              <div className="subsection">
                <div className="subsection-header-container" onClick={() => toggleSection('unit1')}>
                  <h3 className="subsection-title">Unit 1: Primitive Types & Objects</h3>
                  <span className="arrow-icon">
                    {expandedSections.unit1 ? '▼' : '▶'}
                  </span>
                </div>
                {expandedSections.unit1 && (
                  <div className="subsection-content">
                    <h4>Main Concept</h4>
                    <p>Introduction to Java programming fundamentals including variables, data types, operators, and basic object-oriented concepts.</p>
                    
                    <h5>Primitive Types:</h5>
                    <ul>
                      <li>int, double, boolean, char</li>
                      <li>Declaration and initialization</li>
                      <li>Type casting and conversion</li>
                    </ul>
                    
                    <h5>Objects and Classes:</h5>
                    <ul>
                      <li>String class and methods</li>
                      <li>Math class operations</li>
                      <li>Object creation with constructors</li>
                    </ul>
                    
                    <h5>Operations:</h5>
                    <ul>
                      <li>Arithmetic operators (+, -, *, /, %)</li>
                      <li>Compound assignment operators (+=, -=)</li>
                      <li>Increment/decrement (++, --)</li>
                      <li>String concatenation</li>
                    </ul>
                    
                    <h5>Problems encountered:</h5>
                    <ul>
                      <li>Programming arithmetic</li>
                      <li>Printing and returning code</li>
                      <li>Declaring variables</li>
                      <li>Writing simple methods/functions</li>
                    </ul>
                    
                    <h5>Key terms:</h5>
                    <p>Variable, constant, identifier, primitive type, reference type, object, instance, method, parameter, return type.</p>

                    <h5>Videos:</h5>
                    <div className="video-row">
                      <div className="video-wrapper">
                        <YT videoId="WQ7mvQFSmYc"/>
                      </div>
                      <div className="video-wrapper">
                        <YT videoId="MY_d3VrKtIo"/>
                      </div>
                      <div className="video-wrapper">
                        <YT videoId="pZHJU9T0vwE"/>
                      </div>
                      <div className="video-wrapper">
                        <YT videoId="IUqKuGNasdM"/>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Unit 2 */}
              <div className="subsection">
                <div className="subsection-header-container" onClick={() => toggleSection('unit2')}>
                  <h3 className="subsection-title">Unit 2: Booleans and Iteration</h3>
                  <span className="arrow-icon">
                    {expandedSections.unit2 ? '▼' : '▶'}
                  </span>
                </div>
                {expandedSections.unit2 && (
                  <div className="subsection-content">
                    <h4>Main Concept</h4>
                    <p>Control flow in programs using boolean expressions and loops to create dynamic program behavior.</p>
                    
                    <h5>Boolean Expressions:</h5>
                    <ul>
                      <li>Relational operators (&lt;, &gt;, ==, !=)</li>
                      <li>Logical operators (&&, ||, !)</li>
                      <li>Truth tables and De Morgan's Laws</li>
                    </ul>
                    
                    <h5>Conditional Statements:</h5>
                    <ul>
                      <li>if, if-else, if-else if</li>
                      <li>Nested conditionals</li>
                      <li>Ternary operator</li>
                    </ul>
                    
                    <h5>Iteration:</h5>
                    <ul>
                      <li>for loops (standard and enhanced)</li>
                      <li>while loops</li>
                      <li>do-while loops</li>
                      <li>Nested loops</li>
                    </ul>
                    
                    <h5>Problems encountered:</h5>
                    <ul>
                      <li>Creating for/while loops</li>
                      <li>Implementing if statements</li>
                      <li>Complex boolean expressions</li>
                    </ul>
                    
                    <h5>Key terms:</h5>
                    <p>Control flow, iteration, loop control variable, sentinel value, boolean flag, short-circuit evaluation, nested control structures.</p>

                    <h5>Videos:</h5>
                    <div className="video-row">
                      <div className="video-wrapper">
                        <YT videoId="FuF6uRkZats"/>
                      </div>
                      <div className="video-wrapper">
                        <YT videoId="6djggrlkHY8"/>
                      </div>
                      <div className="video-wrapper">
                        <YT videoId="MY03bt_0JQI"/>
                      </div>
                      <div className="video-wrapper">
                        <YT videoId="sd4x2QG2K6U"/>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Unit 3 */}
              <div className="subsection">
                <div className="subsection-header-container" onClick={() => toggleSection('unit3')}>
                  <h3 className="subsection-title">Unit 3: Classes and Inheritance</h3>
                  <span className="arrow-icon">
                    {expandedSections.unit3 ? '▼' : '▶'}
                  </span>
                </div>
                {expandedSections.unit3 && (
                  <div className="subsection-content">
                    <h4>Main Concept</h4>
                    <p>Object-oriented programming principles including class design, encapsulation, and inheritance hierarchies.</p>
                    
                    <h5>Class Design:</h5>
                    <ul>
                      <li>Instance variables vs local variables</li>
                      <li>Constructors (default and parameterized)</li>
                      <li>Access modifiers (public, private)</li>
                      <li>Getter and setter methods</li>
                    </ul>
                    
                    <h5>Inheritance:</h5>
                    <ul>
                      <li>extends keyword</li>
                      <li>Method overriding</li>
                      <li>super keyword</li>
                      <li>Polymorphism</li>
                    </ul>
                    
                    <h5>AP Exam Focus:</h5>
                    <ul>
                      <li>Designing classes for specific problems</li>
                      <li>Understanding is-a and has-a relationships</li>
                      <li>Implementing toString(), equals() methods</li>
                    </ul>
                    
                    <h5>Problems encountered:</h5>
                    <ul>
                      <li>Proper access control</li>
                      <li>Method signature matching in overriding</li>
                      <li>Creating getters and setters</li>
                      <li>Object casting</li>
                      <li>Utilizing 'this' and 'super' keywords</li>
                    </ul>
                    
                    <h5>Key terms:</h5>
                    <p>Encapsulation, inheritance, polymorphism, superclass, subclass, method signature, method overriding, abstract class, interface.</p>

                    <h5>Videos:</h5>
                    <div className="video-row">
                      <div className="video-wrapper">
                        <YT videoId="pgBk8HC7jbU"/>
                      </div>
                      <div className="video-wrapper">
                        <YT videoId="Zs342ePFvRI"/>
                      </div>
                      <div className="video-wrapper">
                        <YT videoId="6wVmqY-CrGM"/>
                      </div>
                      <div className="video-wrapper">
                        <YT videoId="Qb_NUn0TSAU"/>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Unit 4 */}
              <div className="subsection">
                <div className="subsection-header-container" onClick={() => toggleSection('unit4')}>
                  <h3 className="subsection-title">Unit 4: Arrays</h3>
                  <span className="arrow-icon">
                    {expandedSections.unit4 ? '▼' : '▶'}
                  </span>
                </div>
                {expandedSections.unit4 && (
                  <div className="subsection-content">
                    <h4>Main Concept</h4>
                    <p>Structured data storage using arrays and algorithms for array processing.</p>
                    
                    <h5>Array Fundamentals:</h5>
                    <ul>
                      <li>Declaration and initialization</li>
                      <li>Indexing and bounds checking</li>
                      <li>Traversal using loops</li>
                      <li>Array length property</li>
                    </ul>
                    
                    <h5>Array Algorithms:</h5>
                    <ul>
                      <li>Searching (linear, binary)</li>
                      <li>Sorting (selection, insertion)</li>
                      <li>Sum/average calculations</li>
                      <li>Finding min/max values</li>
                    </ul>
                    
                    <h5>2D Arrays:</h5>
                    <ul>
                      <li>Row-major order</li>
                      <li>Nested loop traversal</li>
                      <li>Rectangular vs ragged arrays</li>
                    </ul>
                    
                    <h5>Problems encountered:</h5>
                    <ul>
                      <li>Index out of bounds errors</li>
                      <li>Reference vs value semantics</li>
                      <li>Array vs ArrayList syntax</li>
                      <li>Algorithm efficiency</li>
                    </ul>
                    
                    <h5>Key terms:</h5>
                    <p>Element, index, bounds, traversal, algorithm, pass-by-reference, arraylist, multidimensional array.</p>

                    <h5>Videos:</h5>
                    <div className="video-row">
                      <div className="video-wrapper">
                        <YT videoId="ei_4Nt7XWOw"/>
                      </div>
                      <div className="video-wrapper">
                        <YT videoId="NbYgm0r7u6o"/>
                      </div>
                      <div className="video-wrapper">
                        <YT videoId="w-9ZTeO7q_E"/>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Unit 5 */}
              <div className="subsection">
                <div className="subsection-header-container" onClick={() => toggleSection('unit5')}>
                  <h3 className="subsection-title">Unit 5: Recursion</h3>
                  <span className="arrow-icon">
                    {expandedSections.unit5 ? '▼' : '▶'}
                  </span>
                </div>
                {expandedSections.unit5 && (
                  <div className="subsection-content">
                    <h4>Main Concept</h4>
                    <p>Problem-solving technique where methods call themselves to solve smaller instances of the same problem.</p>
                    
                    <h5>Recursive Concepts:</h5>
                    <ul>
                      <li>Base case and recursive case</li>
                      <li>Call stack visualization</li>
                      <li>Recursive vs iterative solutions</li>
                      <li>Helper methods</li>
                    </ul>
                    
                    <h5>Common Recursive Problems:</h5>
                    <ul>
                      <li>Factorial calculation</li>
                      <li>Fibonacci sequence</li>
                      <li>Binary search</li>
                      <li>Tower of Hanoi</li>
                      <li>Fractal patterns</li>
                    </ul>
                    
                    <h5>Recursion with Data Structures:</h5>
                    <ul>
                      <li>Recursive array processing</li>
                      <li>Linked list & Tree traversal (Covered in data structures)</li>
                    </ul>
                    
                    <h5>Problems encountered:</h5>
                    <ul>
                      <li>Solving problems recursiveley</li>
                      <li>Counting recursive iterations</li>
                      <li>Identifying recursive opportunities</li>
                    </ul>
                    
                    <h5>Key terms:</h5>
                    <p>Base case, recursive case, call stack, stack frame, tail recursion, divide-and-conquer, backtracking.</p>

                    <h5>Videos:</h5>
                    <div className="video-row">
                      <div className="video-wrapper">
                        <YT videoId="k-7jJP7QFEM"/>
                      </div>
                      <div className="video-wrapper">
                        <YT videoId="_mClihsGtjY"/>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Definitions Section */}
        <div className="section">
          <div className="section-header-container" onClick={() => toggleSection('definitions')}>
            <h2 className="section-title">Definitions</h2>
            <span className="arrow-icon">
              {expandedSections.definitions ? '▼' : '▶'}
            </span>
          </div>
          {expandedSections.definitions && (
            <div className="section-content">
              <dl>
                <dt>Variable</dt>
                <dd>A named storage location in memory that holds a value of a specific type.</dd>
                
                <dt>Method</dt>
                <dd>A named sequence of statements that performs some operation, optionally taking parameters and returning a value.</dd>
                
                <dt>Object</dt>
                <dd>An instance of a class that contains data (attributes) and behavior (methods).</dd>
                
                <dt>Class</dt>
                <dd>A blueprint or template for creating objects that defines the attributes and methods common to all objects of that type.</dd>
                
                <dt>Inheritance</dt>
                <dd>A mechanism where a new class (subclass) derives attributes and methods from an existing class (superclass).</dd>
                
                <dt>Polymorphism</dt>
                <dd>The ability of objects of different classes to respond to the same method call in different ways.</dd>
                
                <dt>Array</dt>
                <dd>A fixed-size data structure that stores elements of the same type in contiguous memory locations.</dd>
                
                <dt>Recursion</dt>
                <dd>A problem-solving technique where a method calls itself to solve smaller instances of the same problem.</dd>
                
                <dt>Algorithm</dt>
                <dd>A step-by-step procedure for solving a problem or accomplishing a task.</dd>
                
                <dt>Boolean Expression</dt>
                <dd>An expression that evaluates to either true or false, typically using relational or logical operators.</dd>
                
                <dt>Loop</dt>
                <dd>A control structure that repeatedly executes a block of code while a condition remains true.</dd>
                
                <dt>Encapsulation</dt>
                <dd>The bundling of data with the methods that operate on that data, and restricting direct access to some components.</dd>
                
                <dt>API (Application Programming Interface)</dt>
                <dd>A specification of how software components should interact, including the methods and classes available for use.</dd>
                
                <dt>Parameter</dt>
                <dd>A variable in a method definition that receives a value when the method is called.</dd>
                
                <dt>Return Type</dt>
                <dd>The data type of the value that a method returns, specified in the method declaration.</dd>
              </dl>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Intro;