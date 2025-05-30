import React, { useState } from 'react';
import YT from '../yt';

const Calculus = () => {
  // Section logic
  const [expandedSections, setExpandedSections] = useState({
    description: false,
    units: false,
    unit1: false,
    unit2: false,
    unit3: false,
    unit4: false,
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
      <h1>Calculus I</h1>
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
              <p>Calculus I introduces the fundamental concepts of limits, derivatives, and integrals, along with their applications. Calculus I is the first math course taken in pursuit of a Computer Science bachelor's degree, as it's concepts reappear in both later math and computer science courses.</p>
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
                  <h3 className="subsection-title">Unit 1: Limits and Continuity</h3>
                  <span className="arrow-icon">
                    {expandedSections.unit1 ? '▼' : '▶'}
                  </span>
                </div>
                {expandedSections.unit1 && (
                  <div className="subsection-content">
                    <h4>Main Concept</h4>
                    <p>Calculus kicks off with limits, the value f(x) nears as x approaches a defined value. Continuity is also introduced, built on top of prior knowledge of functions.</p>
                    <h5>Problems encountered:</h5>
                    <ul>
                      <li>Determine continuity of a function</li>
                      <li>Classify type of discontinuity</li>
                      <li>Identify points of discontinuity</li>
                      <li>Solve for limit of function</li>
                    </ul>
                    <h5>Syntax:</h5>
                    <ul>
                      <li><strong>Limit:</strong> lim(x→a) f(x) </li>
                    </ul>
                    <h5>Key terms:</h5>
                    <p>Limit, Continuity, Continuous, Discontinuous, Function, Discontinuity type: (Removable, Jump, Infinite), Intermediate Value Theorem.</p>
                    <h5>Videos:</h5>
                    <div className="video-row">
                      <div className="video-wrapper">
                        <YT videoId="YNstP0ESndU"/>
                      </div>
                      <div className="video-wrapper">
                        <YT videoId="joewRl1CTL8"/>
                      </div>
                    </div>
                    
                  </div>
                )}
              </div>

              {/* Unit 2 */}
              <div className="subsection">
                <div className="subsection-header-container" onClick={() => toggleSection('unit2')}>
                  <h3 className="subsection-title">Unit 2: Differentiation</h3>
                  <span className="arrow-icon">
                    {expandedSections.unit2 ? '▼' : '▶'}
                  </span>
                </div>
                {expandedSections.unit2 && (
                  <div className="subsection-content">
                    <h4>Main Concept</h4>
                    <p>The main focus of this course, the derivative, is introduced. The derivative of a function represents the instantaneous rate of change or the slope of the tangent line at any point on the function.</p>
                    
                    <h5>Derivatives</h5>
                    <ul>
                      <li><strong>Linear:</strong> d/dx (mx + b) = m</li>
                      <li><strong>Power Rule:</strong> d/dx (x^n) = nx^(n-1)</li>
                      <li><strong>Exponential:</strong> d/dx (e^x) = e^x, d/dx (a^x) = a^x ln(a)</li>
                      <li><strong>Logarithmic:</strong> d/dx (ln x) = 1/x, d/dx (log_a x) = 1/(x ln a)</li>
                      <li><strong>Trigonometric:</strong> 
                        <ul>
                          <li>d/dx (sin x) = cos x</li>
                          <li>d/dx (cos x) = -sin x</li>
                          <li>d/dx (tan x) = sec² x</li>
                        </ul>
                      </li>
                    </ul>
                    
                    <h5>Problems encountered:</h5>
                    <ul>
                      <li>Finding derivatives using limit definition</li>
                      <li>Applying differentiation rules (product, quotient, chain)</li>
                      <li>Implicit differentiation</li>
                      <li>Related rates problems</li>
                    </ul>
                    
                    <h5>Syntax:</h5>
                    <ul>
                      <li>Derivative: f'(x) or dy/dx</li>
                      <li>Second derivative: f''(x) or d²y/dx²</li>
                    </ul>
                    
                    <h5>Key terms:</h5>
                    <p>Derivative, Differentiation, Tangent line, Instantaneous rate of change, Product rule, Quotient rule, Chain rule, Implicit differentiation, Related rates.</p>
                  </div>
                )}
              </div>

              {/* Unit 3 */}
              <div className="subsection">
                <div className="subsection-header-container" onClick={() => toggleSection('unit3')}>
                  <h3 className="subsection-title">Unit 3: Applications of Derivatives</h3>
                  <span className="arrow-icon">
                    {expandedSections.unit3 ? '▼' : '▶'}
                  </span>
                </div>
                {expandedSections.unit3 && (
                  <div className="subsection-content">
                    <h4>Main Concept</h4>
                    <p>Derivatives are used to analyze functions and solve practical problems. This includes finding extrema, determining concavity, optimization, and motion problems.</p>
                    
                    <h5>Applications:</h5>
                    <ul>
                      <li>Finding critical points and extrema (First and Second Derivative Tests)</li>
                      <li>Determining intervals of increase/decrease</li>
                      <li>Analyzing concavity and inflection points</li>
                      <li>Optimization problems (maximizing/minimizing quantities)</li>
                      <li>Curve sketching</li>
                      <li>Motion along a line (position, velocity, acceleration)</li>
                    </ul>
                    
                    <h5>Problems encountered:</h5>
                    <ul>
                      <li>Applying derivative tests to find extrema</li>
                      <li>Solving optimization word problems</li>
                      <li>Analyzing motion using derivatives</li>
                      <li>Sketching curves using derivative information</li>
                    </ul>
                    
                    <h5>Key terms:</h5>
                    <p>Critical point, Local maximum/minimum, Absolute maximum/minimum, Concave up/down, Inflection point, Optimization, Related rates, Position function, Velocity, Acceleration.</p>
                  </div>
                )}
              </div>

              {/* Unit 4 */}
              <div className="subsection">
                <div className="subsection-header-container" onClick={() => toggleSection('unit4')}>
                  <h3 className="subsection-title">Unit 4: Integrals</h3>
                  <span className="arrow-icon">
                    {expandedSections.unit4 ? '▼' : '▶'}
                  </span>
                </div>
                {expandedSections.unit4 && (
                  <div className="subsection-content">
                    <h4>Main Concept</h4>
                    <p>Integration introduces the concept of accumulation and area under curves. The Fundamental Theorem of Calculus connects differentiation and integration.</p>
                    
                    <h5>Integration Techniques:</h5>
                    <ul>
                      <li>Antiderivatives and indefinite integrals</li>
                      <li>Riemann sums and definite integrals</li>
                      <li>Substitution rule</li>
                      <li>Fundamental Theorem of Calculus</li>
                    </ul>
                    
                    <h5>Applications of Integration:</h5>
                    <ul>
                      <li>Area between curves</li>
                      <li>Volumes of revolution:
                        <ul>
                          <li><strong>Disk Method:</strong> V = π∫[R(x)]² dx</li>
                          <li><strong>Washer Method:</strong> V = π∫([R(x)]² - [r(x)]²) dx</li>
                        </ul>
                      </li>
                      <li>Average value of a function</li>
                    </ul>
                    
                    <h5>Problems encountered:</h5>
                    <ul>
                      <li>Evaluating definite and indefinite integrals</li>
                      <li>Applying substitution rule</li>
                      <li>Setting up integrals for area/volume problems</li>
                      <li>Determining bounds for region of integration</li>
                    </ul>
                    
                    <h5>Syntax:</h5>
                    <ul>
                      <li>Indefinite integral: ∫f(x) dx</li>
                      <li>Definite integral: ∫[a,b] f(x) dx</li>
                    </ul>
                    
                    <h5>Key terms:</h5>
                    <p>Integral, Antiderivative, Riemann sum, Fundamental Theorem of Calculus, Substitution, Area between curves, Volume of revolution, Disk method, Washer method.</p>
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
                <dt>Limit</dt>
                <dd>The value that a function approaches as the input approaches some value.</dd>
                
                <dt>Derivative</dt>
                <dd>The instantaneous rate of change of a function with respect to its variable, representing the slope of the tangent line at any point.</dd>
                
                <dt>Integral</dt>
                <dd>The antiderivative of a function, representing the area under the curve of the function between two points.</dd>
                
                <dt>Continuity</dt>
                <dd>A function is continuous at a point if the limit exists at that point and equals the function's value.</dd>
                
                <dt>Critical Point</dt>
                <dd>A point on a function where the derivative is zero or undefined.</dd>
                
                <dt>Fundamental Theorem of Calculus</dt>
                <dd>Connects differentiation and integration, stating that the definite integral of a function can be computed using its antiderivative.</dd>
                
                <dt>Disk Method</dt>
                <dd>A technique for finding volumes of revolution by summing circular cross-sections perpendicular to the axis of rotation.</dd>
                
                <dt>Washer Method</dt>
                <dd>An extension of the disk method for volumes with hollow centers, using annular rings as cross-sections.</dd>
              </dl>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Calculus;