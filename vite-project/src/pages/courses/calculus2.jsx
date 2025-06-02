import React, { useState } from 'react';
import YT from '../yt';

const Calculus2 = () => {
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
      <h1>Calculus II</h1>
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
              <p>Calculus II extends the concepts of integration from Calculus I, introducing advanced integration techniques and applications. The course covers sequences and series, parametric equations, polar coordinates, and their applications in science and engineering.</p>
              <p>Key topics include integration methods, infinite series convergence, Taylor and Maclaurin series, and the exploration of alternative coordinate systems for problem-solving.</p>
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
                  <h3 className="subsection-title">Unit 1: Applications of Integration</h3>
                  <span className="arrow-icon">
                    {expandedSections.unit1 ? '▼' : '▶'}
                  </span>
                </div>
                {expandedSections.unit1 && (
                  <div className="subsection-content">
                    <h4>Main Concept</h4>
                    <p>Extends integration concepts to practical applications including area, volume, and arc length.</p>
                    
                    <h5>Key Applications:</h5>
                    <ul>
                      <li><strong>Area Between Curves:</strong> ∫[a,b] (f(x) - g(x)) dx</li>
                      <li><strong>Volumes by Slicing:</strong> V = ∫[a,b] A(x) dx</li>
                      <li><strong>Volumes of Revolution:</strong>
                        <ul>
                          <li>Disk Method: V = π∫[a,b] [R(x)]² dx</li>
                          <li>Washer Method: V = π∫[a,b] ([R(x)]² - [r(x)]²) dx</li>
                          <li>Shell Method: V = 2π∫[a,b] x·f(x) dx</li>
                        </ul>
                      </li>
                      <li><strong>Arc Length:</strong> L = ∫[a,b] √(1 + [f'(x)]²) dx</li>
                      <li><strong>Surface Area:</strong> SA = 2π∫[a,b] f(x)√(1 + [f'(x)]²) dx</li>
                      
                    </ul>
                    
                    <h5>Problems encountered:</h5>
                    <ul>
                      <li>Setting up integrals for area/volume problems</li>
                      <li>Choosing between disk/washer/shell methods</li>
                      <li>Determining bounds of integration</li>
                      <li>Solving for arc length</li>
                    </ul>
                    
                    <h5>Key terms:</h5>
                    <p>Solid of revolution, cross-sectional area, arc length, surface of revolution, work, hydrostatic pressure, center of mass, fluid force.</p>
                    
                    <h5>Videos:</h5>
                    <div className="video-row">
                      <div className="video-wrapper">
                        <YT videoId="SAHSVg7Jw_A"/>
                      </div>
                      <div className="video-wrapper">
                        <YT videoId="DNDAwWIL5FY"/>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Unit 2 */}
              <div className="subsection">
                <div className="subsection-header-container" onClick={() => toggleSection('unit2')}>
                  <h3 className="subsection-title">Unit 2: Integration Techniques</h3>
                  <span className="arrow-icon">
                    {expandedSections.unit2 ? '▼' : '▶'}
                  </span>
                </div>
                {expandedSections.unit2 && (
                  <div className="subsection-content">
                    <h4>Main Concept</h4>
                    <p>Introduces various methods for evaluating integrals that cannot be solved with basic antiderivative rules, expanding the range of functions we can integrate.</p>
                    
                    <h5>Integration Methods:</h5>
                    <ul>
                      <li><strong>Substitution:</strong> ∫f(g(x))g'(x)dx = ∫f(u)du</li>
                      <li><strong>Integration by Parts:</strong> ∫udv = uv - ∫vdu</li>
                      <li><strong>Trigonometric Integrals:</strong> ∫sin^n(x)cos^m(x)dx</li>
                      <li><strong>Trigonometric Substitution:</strong>
                        <ul>
                          <li>√(a²-x²) → x = a sin(θ)</li>
                          <li>√(a²+x²) → x = a tan(θ)</li>
                          <li>√(x²-a²) → x = a sec(θ)</li>
                        </ul>
                      </li>
                      <li><strong>Partial Fractions:</strong> P(x)/Q(x) = A/(x-a) + B/(x-b) + ...</li>
                      <li><strong>Improper Integrals:</strong> ∫[a,∞] f(x)dx = lim[b→∞] ∫[a,b] f(x)dx</li>
                    </ul>
                    
                    <h5>Problems encountered:</h5>
                    <ul>
                      <li>Recognizing which integration method to use</li>
                      <li>Applying trigonometric identities</li>
                      <li>Setting up partial fraction decompositions</li>
                      <li>Evaluating limits for improper integrals</li>
                      <li>Determining convergence/divergence of improper integrals</li>
                    </ul>
                    
                    <h5>Key terms:</h5>
                    <p>Antiderivative, u-substitution, integration by parts, trigonometric identity, partial fractions, improper integral, convergence, divergence.</p>

                    <h5>Videos:</h5>
                    <div className="video-row">
                      <div className="video-wrapper">
                        <YT videoId="sdYdnpYn-1o"/>
                      </div>
                      <div className="video-wrapper">
                        <YT videoId="sWSLLO3DS1I"/>
                      </div>
                      <div className="video-wrapper">
                        <YT videoId="3pXALn2ovIE"/>
                      </div>
                      <div className="video-wrapper">
                        <YT videoId="ocgjfF2AboA"/>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Unit 3 */}
              <div className="subsection">
                <div className="subsection-header-container" onClick={() => toggleSection('unit3')}>
                  <h3 className="subsection-title">Unit 3: Sequences, Series, and Convergence</h3>
                  <span className="arrow-icon">
                    {expandedSections.unit3 ? '▼' : '▶'}
                  </span>
                </div>
                {expandedSections.unit3 && (
                  <div className="subsection-content">
                    <h4>Main Concept</h4>
                    <p>Introduces infinite sequences and series, focusing on determining convergence or divergence and estimating sums of convergent series.</p>
                    
                    <h5>Convergence Tests:</h5>
                    <ul>
                      <li><strong>Divergence Test:</strong> If lim a_n ≠ 0, Σa_n diverges</li>
                      <li><strong>Integral Test:</strong> Compare Σa_n to ∫f(x)dx</li>
                      <li><strong>Comparison Tests:</strong> Direct and Limit Comparison</li>
                      <li><strong>Alternating Series Test:</strong> For (-1)^n a_n</li>
                      <li><strong>Ratio Test:</strong> lim |a_(n+1)/a_n| = L</li>
                      <li><strong>Root Test:</strong> lim (n-th root of |a_n|) = L</li>
                    </ul>
                    
                    <h5>Special Series:</h5>
                    <ul>
                      <li><strong>Geometric Series:</strong> Σar^n = a/(1-r) if |r| &lt; 1</li>
                      <li><strong>p-Series:</strong> Σ1/n^p converges if p &gt; 1</li>
                      <li><strong>Telescoping Series:</strong> Partial sums collapse</li>
                      <li><strong>Harmonic Series:</strong> Σ1/n diverges</li>
                    </ul>
                    
                    <h5>Problems encountered:</h5>
                    <ul>
                      <li>Determining convergence/divergence of series</li>
                      <li>Choosing appropriate convergence tests</li>
                      <li>Estimating sums of convergent series</li>
                      <li>Finding bounds on remainder terms</li>
                      <li>Working with alternating series error bounds</li>
                    </ul>
                    
                    <h5>Key terms:</h5>
                    <p>Sequence, series, partial sum, convergence, divergence, absolute convergence, conditional convergence, remainder, error bound.</p>

                    <h5>Videos:</h5>
                    <div className="video-row">
                      <div className="video-wrapper">
                        <YT videoId="Tj89FA-d0f8"/>
                      </div>
                      <div className="video-wrapper">
                        <YT videoId="zg9N2gAf6a4"/>
                      </div>
                      <div className="video-wrapper">
                        <YT videoId="0YeON4p0ogw"/>
                      </div>
                      <div className="video-wrapper">
                        <YT videoId="FkUrAgBzAZo"/>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Unit 4 */}
              <div className="subsection">
                <div className="subsection-header-container" onClick={() => toggleSection('unit4')}>
                  <h3 className="subsection-title">Unit 4: Power Series</h3>
                  <span className="arrow-icon">
                    {expandedSections.unit4 ? '▼' : '▶'}
                  </span>
                </div>
                {expandedSections.unit4 && (
                  <div className="subsection-content">
                    <h4>Main Concept</h4>
                    <p>Extends series concepts to power series, which represent functions as infinite polynomials, enabling approximation of functions and solution of differential equations.</p>
                    
                    <h5>Key Concepts:</h5>
                    <ul>
                      <li><strong>Power Series:</strong> Σc_n(x-a)^n</li>
                      <li><strong>Radius of Convergence:</strong> R = 1/lim sup (n-th root of |c_n|)</li>
                      <li><strong>Interval of Convergence:</strong> (a-R, a+R)</li>
                      <li><strong>Taylor Series:</strong> Σf^(n)(a)/n! (x-a)^n</li>
                      <li><strong>Maclaurin Series:</strong> Taylor series at a=0</li>
                      <li><strong>Common Series:</strong>
                        <ul>
                          <li>e^x = Σx^n/n!</li>
                          <li>sin(x) = Σ(-1)^n x^(2n+1)/(2n+1)!</li>
                          <li>cos(x) = Σ(-1)^n x^(2n)/(2n)!</li>
                          <li>1/(1-x) = Σx^n (|x| &lt; 1)</li>
                        </ul>
                      </li>
                    </ul>
                    
                    <h5>Operations:</h5>
                    <ul>
                      <li>Term-by-term differentiation/integration</li>
                      <li>Multiplication of power series</li>
                      <li>Substitution in power series</li>
                    </ul>
                    
                    <h5>Problems encountered:</h5>
                    <ul>
                      <li>Finding radius/interval of convergence</li>
                      <li>Constructing Taylor/Maclaurin series</li>
                      <li>Estimating function values using series</li>
                      <li>Solving differential equations with series</li>
                      <li>Computing limits using series expansions</li>
                    </ul>
                    
                    <h5>Key terms:</h5>
                    <p>Power series, radius of convergence, interval of convergence, Taylor polynomial, Taylor series, Maclaurin series, binomial series, remainder term.</p>

                    <h5>Videos:</h5>
                    <div className="video-row">
                      <div className="video-wrapper">
                        <YT videoId="EGni2-m5yxM"/>
                      </div>
                      <div className="video-wrapper">
                        <YT videoId="LDBnS4c7YbA"/>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Unit 5 */}
              <div className="subsection">
                <div className="subsection-header-container" onClick={() => toggleSection('unit5')}>
                  <h3 className="subsection-title">Unit 5: Parametric Equations and Polar Coordinates</h3>
                  <span className="arrow-icon">
                    {expandedSections.unit5 ? '▼' : '▶'}
                  </span>
                </div>
                {expandedSections.unit5 && (
                  <div className="subsection-content">
                    <h4>Main Concept</h4>
                    <p>Introduces alternative coordinate systems and representations of curves, extending calculus concepts to these new systems.</p>
                    
                    <h5>Parametric Equations:</h5>
                    <ul>
                      <li><strong>Derivatives:</strong> dy/dx = (dy/dt)/(dx/dt)</li>
                      <li><strong>Arc Length:</strong> L = ∫√[(dx/dt)² + (dy/dt)²] dt</li>
                      <li><strong>Area:</strong> A = ∫y(t)x'(t) dt</li>
                    </ul>
                    
                    <h5>Polar Coordinates:</h5>
                    <ul>
                      <li><strong>Conversion:</strong> x = r cos(θ), y = r sin(θ)</li>
                      <li><strong>Area:</strong> A = ½∫[α,β] [r(θ)]² dθ</li>
                      <li><strong>Arc Length:</strong> L = ∫√[r² + (dr/dθ)²] dθ</li>
                      <li><strong>Common Graphs:</strong>
                        <ul>
                          <li>Cardioids: r = a ± a cos(θ)</li>
                          <li>Rose Curves: r = a cos(nθ)</li>
                          <li>Limaçons: r = a ± b cos(θ)</li>
                          <li>Spirals: r = aθ</li>
                        </ul>
                      </li>
                    </ul>
                    
                    <h5>Problems encountered:</h5>
                    <ul>
                      <li>Converting between Cartesian and polar</li>
                      <li>Finding tangent lines to parametric curves</li>
                      <li>Calculating areas in polar coordinates</li>
                      <li>Determining arc lengths for parametric/polar curves</li>
                      <li>Graphing polar equations</li>
                    </ul>
                    
                    <h5>Key terms:</h5>
                    <p>Parametric equations, parameter, polar coordinates, polar graph, cardioid, rose curve, limaçon, arc length in polar, area in polar.</p>

                    <h5>Videos:</h5>
                    <div className="video-row">
                      <div className="video-wrapper">
                        <YT videoId="97pe-QlSGqA"/>
                      </div>
                      <div className="video-wrapper">
                        <YT videoId="aSdaT62ndYE"/>
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
                <dt>Improper Integral</dt>
                <dd>An integral with infinite limits of integration or an integrand that approaches infinity at one or more points in the range of integration.</dd>
                
                <dt>Sequence</dt>
                <dd>An ordered list of numbers a_1, a_2, a_3, ... where each term is defined by a particular rule or pattern.</dd>
                
                <dt>Series</dt>
                <dd>The sum of the terms of a sequence, typically written as Σa_n = a_1 + a_2 + a_3 + ...</dd>
                
                <dt>Convergence (Series)</dt>
                <dd>A series converges if the sequence of its partial sums approaches a finite limit as more terms are added.</dd>
                
                <dt>Power Series</dt>
                <dd>An infinite series of the form Σc_n(x-a)^n that represents a function within its interval of convergence.</dd>
                
                <dt>Radius of Convergence</dt>
                <dd>The distance from the center of a power series within which the series converges absolutely.</dd>
                
                <dt>Taylor Series</dt>
                <dd>A power series representation of a function about a point, using the function's derivatives at that point.</dd>
                
                <dt>Parametric Equations</dt>
                <dd>A set of equations that express a set of quantities as explicit functions of one or more independent variables called parameters.</dd>
                
                <dt>Polar Coordinates</dt>
                <dd>A two-dimensional coordinate system where each point is determined by a distance from a reference point and an angle from a reference direction.</dd>
                
                <dt>Solid of Revolution</dt>
                <dd>A three-dimensional solid obtained by rotating a two-dimensional curve about an axis.</dd>
                
                <dt>Integration by Parts</dt>
                <dd>A technique based on the product rule for differentiation that transforms the integral of a product of functions into simpler integrals.</dd>
                
                <dt>Trigonometric Substitution</dt>
                <dd>A technique for evaluating integrals containing radical expressions by substituting trigonometric functions for other variables.</dd>
                
                <dt>Partial Fractions</dt>
                <dd>A method for decomposing rational functions into simpler fractions that are easier to integrate.</dd>
                
                <dt>Maclaurin Series</dt>
                <dd>A Taylor series expansion about zero, providing a polynomial approximation of a function near the origin.</dd>
                
                <dt>Polar Graph</dt>
                <dd>A graph in polar coordinates showing the relationship between the radial distance r and the angle θ.</dd>
              </dl>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Calculus2;