import React, { useState } from 'react';
import { Link } from "react-router-dom";

const DiscII = () => {
  const [expandedSections, setExpandedSections] = useState({
    description: false,
    units: false,
    unit1: false,
    unit2: false,
    unit3: false,
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
      <h1>Discrete Structures II</h1>
      <div className="language-div">
        
        {/* Description Section */}
        <div className="section">
          <div className="section-header-container" onClick={() => toggleSection('description')}>
            <h2 className="section-title">Description</h2>
            <span className="arrow-icon">
              {expandedSections.description ? '▼' : '▶'}
            </span>
          </div>
          {expandedSections.description && (
            <div className="section-content">
              <p>[Course description goes here...]</p>
            </div>
          )}
        </div>

        {/* Units Section */}
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
                  <h3 className="subsection-title">Unit 1: Set Theory</h3>
                  <span className="arrow-icon">
                    {expandedSections.unit1 ? '▼' : '▶'}
                  </span>
                </div>
                {expandedSections.unit1 && (
                  <div className="subsection-content">
                    <h4>Main Concept</h4>
                    <p>Reintroduction to set theory, with an emphasis on Venn diagrams.</p>
                    <h5>Key topics:</h5>
                    <ul>
                      <li>Set operators</li>
                      <li>Set Representation</li>
                      <li>Cardinality</li>
                      <li>Power sets</li>
                      <li>Cartesian product</li>
                      <li>Venn Diagrams</li>
                    </ul>

                    <h5>Set operations:</h5>
                    <ul>
                      Set A = {"{"}1, 2{"}"}, Set B = {"{"}X, Y{"}"}, Set C =  {"{"}2, 3{"}"}
                      <li><strong>Union (U): </strong>A U C = {"{"}1, 2, 3{"}"}</li>
                      <li><strong>Intersection (∩): </strong>A ∩ C = {"{"}2{"}"} </li>
                      <li><strong>Cardinality (n): </strong>n(A) = 2</li>
                      <li><strong>Difference (-): </strong>A - C = {"{"}1{"}"}</li>
                      <li><strong>Complement ('):</strong> if (U = A U B U C), A' = {"{"}X, Y, 3{"}"}</li>
                      <li><strong>Cross Product (X):</strong> A X B = {"{"}{"{"}1, X{"}"}, {"{"}1, Y{"}"}, {"{"}2, X{"}"}, {"{"}2, Y{"}"}{"}"}</li>
                      <li><strong>Power Set (P): </strong>P(A) = {"{"}{"}"}, {"{"}1{"}"}, {"{"}2{"}"}, {"{"}1, 2{"}"}</li>
                      <li><strong>De Morgan's Law: </strong> (A U B)' = (A' ∩ B')</li>
                      
                    </ul>

                    <h5>Listing methods: </h5>
                    <ul>
                      S = {"{"}1, 2, 3{"}"}
                      <li><strong>Listing/Roster:</strong> {"{"}1, 2, 3{"}"}</li>
                      <li><strong>Description: </strong> The set of natural numbers below 4</li>
                      <li><strong>Set builder:</strong> {"{"}S | S ∈ N, S &lt; 4 {"}"}</li>
                    </ul>

                    <h5>Key terms:</h5>
                    <p>Set, union, intersection, cross product, difference, subset, power set, cardinality, listing, set-builder, empty set</p>

                  </div>
                )}
              </div>

              {/* Unit 2 */}
              <div className="subsection">
                <div className="subsection-header-container" onClick={() => toggleSection('unit2')}>
                  <h3 className="subsection-title">Unit 2: Counting</h3>
                  <span className="arrow-icon">
                    {expandedSections.unit2 ? '▼' : '▶'}
                  </span>
                </div>
                {expandedSections.unit2 && (
                  <div className="subsection-content">
                    <h4>Main Concept</h4>
                    <p>The amount of possibilities a given scenario has</p>
                    <h5>Key topics: </h5>
                    <ul>
                      <li>Fundamental Counting Principale</li>
                      <li>Permutations</li>
                      <li>Combinations</li>
                      <li>Pascal's Triangle</li>
                      <li>Permutations/Combinations using set operations</li>
                    </ul>

                    <h5>Fundamental Counting Principale:</h5>
                    <ul>
                      <li>If event A has n outcomes and event B has m outcomes, the total number of possible outcomes when both events occur is nxm.</li>
                      <li>If a resturant offers 5 drinks, 6 entres, and 4 sides, there are a total of +5x6x4 = 120 possible complete orders.</li>
                    </ul>

                    <h5>Combinations:</h5>
                    <ul>
                      
                      <li>Amount of ways a scenario can happen in which order does NOT matter.</li>
                      <li><strong>Notation: </strong>x C y | where x and y are naturals</li>
                      <li><strong>Computation: </strong> x! / y!(x-y)!</li>

                    </ul>

                    <h5>Permutations:</h5>
                    <ul>
                      <li>Amount of ways a scenario can happen in which order DOES matter.</li>
                      <li><strong>Notation: </strong>x P y | where x and y are naturals</li>
                      <li><strong>Computation: </strong> x! / (x-y)!</li>
                    </ul>
                  </div>
                )}
              </div>

              {/* Unit 3 */}
              <div className="subsection">
                <div className="subsection-header-container" onClick={() => toggleSection('unit3')}>
                  <h3 className="subsection-title">Unit 3: Probability</h3>
                  <span className="arrow-icon">
                    {expandedSections.unit3 ? '▼' : '▶'}
                  </span>
                </div>
                {expandedSections.unit3 && (
                  <div className="subsection-content">
                    <h4>Main Concept</h4>
                    <p>[Unit 3 content goes here...]</p>
                    <h5>Key topics:</h5>
                    <ul>
                      <li>Basic probability</li>
                      <li>Probability using and/or</li>
                      <li>Probability using not</li>
                      <li>Conditional probability</li>
                      <li>Bayesian probability</li>
                    </ul>
                    <h5>Probability:</h5>
                    <ul>
                      <li>P(x): probability of event X as value from 0 to 1.</li>
                      <li>P(x∪y): probability of event X or event Y</li>
                      <li>P(x∩y): probabilty of event X and event Y</li>
                      <li>P(x | y): probability of event x given event y has happened</li>
                      <li>P(x'): probability of event X not happening</li>
                    </ul>
                    <h5>Solving probability:</h5>
                    <ul>
                      <li>P(x∪y): P(x) + P(y) - P(x∩y)</li>
                      <li>P(x | y): P(x∩y) / P(y)</li>
                      <li>P(x'): P(U) (which is 1)  - P(x)</li>
                    </ul>
                    <h5>Bayesian conditional probability:</h5>
                    <ul>
                      <li>P(A|B) = P(B|A)P(A) / P(B)</li>
                      <li>P(B) = P(B|A)P(A) + P(B|A')P(A')</li>
                    </ul>
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
                <dt>Matrix</dt>
                <dd>[Definition of matrix goes here...]</dd>
                
                <dt>Vector</dt>
                <dd>[Definition of vector goes here...]</dd>
              </dl>
            </div>
          )}
        </div>

        <Link to="/courses/math" className="L">
          <button className="divbut">Back</button>
        </Link>
      </div>
    </>
  );
};

export default DiscII;
