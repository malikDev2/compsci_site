import React, { useState } from 'react';

const DiscreteI = () => {
  // Section logic
  const [expandedSections, setExpandedSections] = useState({
    description: false,
    units: false,
    unit1: false,
    unit2: false,
    unit3: false,
    unit4: false,
    unit5: false,
    unit6: false,
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
      <h1>Intro to Discrete Structures I</h1>
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
              {/* Content would go here */}
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
                  <h3 className="subsection-title">Unit 1: Propositional Logic</h3>
                  <span className="arrow-icon">
                    {expandedSections.unit1 ? '▼' : '▶'}
                  </span>
                </div>
                {expandedSections.unit1 && (
                  <div className="subsection-content">
                    <h4>Main Concept</h4>
                    <p>Propositional logic deals with statements that are either true or false. These statements are expressed through variables (which are assigned either true/false) and logical operators.</p>
                    <h5>Logic operators:</h5>
                    <p>∧ (and), ∨ (or), ~/¬ (not), → (implies), ↔ (biconditional), ⊕ (xor), ≡ (logical equivalence), ∀ (for all), ∃ (there exists) </p>
                    <h5>Problems encountered:</h5>
                    <ul>
                      <li>Proving/verifying logical equivalence</li>
                      <li>Generating truth table</li>
                      <li>Translate propositional logic to english</li>
                    </ul>
                  </div>
                )}
              </div>

              {/* Unit 2 */}
              <div className="subsection">
                <div className="subsection-header-container" onClick={() => toggleSection('unit2')}>
                  <h3 className="subsection-title">Unit 2: Set theory & Functions</h3>
                  <span className="arrow-icon">
                    {expandedSections.unit2 ? '▼' : '▶'}
                  </span>
                </div>
                {expandedSections.unit2 && (
                  <div className="subsection-content">
                    <h4>Main Concept</h4>
                    <p>Set theory is the area of discrete structures/math that deals with sets. Sets are well-defined collections of distinct objects. Similar to propositional logic, sets also have their own operators. This unit also introduces functions that contain sets.</p>
                    <h5>Set operators:</h5>
                    <p>∪ (union), ∩ (intersection), - (difference), ⊆ (subset), ∈ (element of), P(x) (power-set), X (cross-product)</p>
                    <h5>Function terms:</h5>
                    <p>Function, Total function, Injective (One-to-One), Surjective (Onto), Bijective</p>
                    <h5>Problems encountered:</h5>
                    <ul>
                      <li>Proving/verifying set equivalence</li>
                      <li>Defining functions</li>
                    </ul>
                  </div>
                )}
              </div>

              {/* Unit 3 */}
              <div className="subsection">
                <div className="subsection-header-container" onClick={() => toggleSection('unit3')}>
                  <h3 className="subsection-title">Unit 3: Proofs</h3>
                  <span className="arrow-icon">
                    {expandedSections.unit3 ? '▼' : '▶'}
                  </span>
                </div>
                {expandedSections.unit3 && (
                  <div className="subsection-content">
                    <h4>Main Concept</h4>
                    <p>Detailed explanation would go here</p>
                    <h5>Examples</h5>
                    <p>Example problems and solutions</p>
                  </div>
                )}
              </div>

              {/* Unit 4 */}
              <div className="subsection">
                <div className="subsection-header-container" onClick={() => toggleSection('unit4')}>
                  <h3 className="subsection-title">Unit 4: Languages and Grammar</h3>
                  <span className="arrow-icon">
                    {expandedSections.unit4 ? '▼' : '▶'}
                  </span>
                </div>
                {expandedSections.unit4 && (
                  <div className="subsection-content">
                    <h4>Main Concept</h4>
                    <p>Detailed explanation would go here</p>
                    <h5>Examples</h5>
                    <p>Example problems and solutions</p>
                  </div>
                )}
              </div>

              {/* Unit 5 */}
              <div className="subsection">
                <div className="subsection-header-container" onClick={() => toggleSection('unit5')}>
                  <h3 className="subsection-title">Unit 5: State machines</h3>
                  <span className="arrow-icon">
                    {expandedSections.unit5 ? '▼' : '▶'}
                  </span>
                </div>
                {expandedSections.unit5 && (
                  <div className="subsection-content">
                    <h4>Main Concept</h4>
                    <p>Detailed explanation would go here</p>
                    <h5>Examples</h5>
                    <p>Example problems and solutions</p>
                  </div>
                )}
              </div>

              {/* Unit 6 */}
              <div className="subsection">
                <div className="subsection-header-container" onClick={() => toggleSection('unit6')}>
                  <h3 className="subsection-title">Unit 6: Number theorey</h3>
                  <span className="arrow-icon">
                    {expandedSections.unit6 ? '▼' : '▶'}
                  </span>
                </div>
                {expandedSections.unit6 && (
                  <div className="subsection-content">
                    <h4>Main Concept</h4>
                    <p>Detailed explanation would go here</p>
                    <h5>Examples</h5>
                    <p>Example problems and solutions</p>
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
                <dd>Definition would go here</dd>
                <dt>Derivative</dt>
                <dd>Definition would go here</dd>
              </dl>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default DiscreteI;