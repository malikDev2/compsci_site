import React, { useState } from 'react';

const Calculus = () => {
  // Section logic
  const [expandedSections, setExpandedSections] = useState({
    description: false,
    unit1: false,
    unit2: false,
    unit3: false
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <>
      <h1>Calculus</h1>
      <div className="language-div">
        <div className="section">
          <div className="section-header-container" onClick={() => toggleSection('description')}>
            <h2 className="section-title">Description</h2>
            <span className="arrow-icon">
              {expandedSections.description ? '▼' : '▶'}
            </span>
          </div>
          {expandedSections.description && (
            <h4 className="section-content">
              Calculus is a branch of mathematics that studies continuous change. It has two major branches: 
              differential calculus (concerning rates of change and slopes of curves) and integral calculus 
              (concerning accumulation of quantities and areas under curves). These two branches are related 
              to each other by the fundamental theorem of calculus.
            </h4>
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
                  <h4 className="subsection-content">
                    This unit covers the concept of limits, one-sided limits, infinite limits, 
                    continuity, and the Intermediate Value Theorem.
                  </h4>
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
                  <h4 className="subsection-content">
                    This unit introduces derivatives, differentiation rules, chain rule, 
                    implicit differentiation, and applications of derivatives.
                  </h4>
                )}
              </div>

              {/* Unit 3 */}
              <div className="subsection">
                <div className="subsection-header-container" onClick={() => toggleSection('unit3')}>
                  <h3 className="subsection-title">Unit 3: Integration</h3>
                  <span className="arrow-icon">
                    {expandedSections.unit3 ? '▼' : '▶'}
                  </span>
                </div>
                {expandedSections.unit3 && (
                  <h4 className="subsection-content">
                    This unit covers antiderivatives, definite integrals, 
                    the Fundamental Theorem of Calculus, and integration techniques.
                  </h4>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Calculus;