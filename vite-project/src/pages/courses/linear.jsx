import React, { useState } from 'react';

const Linear = () => {
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
    unit7: false,
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
      <h1>Intro to Linear Algebra</h1>
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
                  <h3 className="subsection-title">Unit 1: Systems of Linear Equations and Row Reduction</h3>
                  <span className="arrow-icon">
                    {expandedSections.unit1 ? '▼' : '▶'}
                  </span>
                </div>
                {expandedSections.unit1 && (
                  <div className="subsection-content">
                    <h4>Main Concept</h4>
                    <p>Detailed explanation would go here</p>
                    <h5>Sub-topic</h5>
                    <p>More details about this specific aspect</p>
                  </div>
                )}
              </div>

              {/* Unit 2 */}
              <div className="subsection">
                <div className="subsection-header-container" onClick={() => toggleSection('unit2')}>
                  <h3 className="subsection-title">Unit 2: Vectors and Linear Independence</h3>
                  <span className="arrow-icon">
                    {expandedSections.unit2 ? '▼' : '▶'}
                  </span>
                </div>
                {expandedSections.unit2 && (
                  <div className="subsection-content">
                    <h4>Main Concept</h4>
                    <p>Detailed explanation would go here</p>
                    <ul>
                      <li>Key point 1</li>
                      <li>Key point 2</li>
                    </ul>
                  </div>
                )}
              </div>

              {/* Unit 3 */}
              <div className="subsection">
                <div className="subsection-header-container" onClick={() => toggleSection('unit3')}>
                  <h3 className="subsection-title">Unit 3: Matrix Algebra and Inverses</h3>
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
                  <h3 className="subsection-title">Unit 4: Subspaces and Dimension</h3>
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
                  <h3 className="subsection-title">Unit 5: Determinants and Diagonalization</h3>
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
                  <h3 className="subsection-title">Unit 6: Orthogonality and Projections</h3>
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

              {/* Unit 7 */}
              <div className="subsection">
                <div className="subsection-header-container" onClick={() => toggleSection('unit7')}>
                  <h3 className="subsection-title">Unit 7: Least Squares and Quadratic Forms</h3>
                  <span className="arrow-icon">
                    {expandedSections.unit7 ? '▼' : '▶'}
                  </span>
                </div>
                {expandedSections.unit7 && (
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

export default Linear;