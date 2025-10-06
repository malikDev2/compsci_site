import React, { useState } from 'react';
import { Link } from "react-router-dom";

const DataO = () => {
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
      <h1>Data 101</h1>
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
                  <h3 className="subsection-title">Unit 1: Basic Statistics</h3>
                  <span className="arrow-icon">
                    {expandedSections.unit1 ? '▼' : '▶'}
                  </span>
                </div>
                {expandedSections.unit1 && (
                  <div className="subsection-content">
                    <h4>Main Concept</h4>
                    <p>First introduction to data science through basic statistical concepts.</p>
                    <h5>Key topics:</h5>
                    <ul>
                      <li>Summary statistics</li>
                      <li>Hypothesis testing</li>
                      <li>Normalization</li>
                      <li>Z-test</li>
                      <li>T-test</li>
                      <li>Bonferroni correction</li>
                      <li>Bayes theorem</li>
                      <li>P-values</li>
                      <li>R programming</li>
                    </ul>
                    <h5>Key terms:</h5>
                    <li>Mean, median, standard deviation, one-tail, two-tailed, black swan</li>
                  </div>
                )}
              </div>

              {/* Unit 2 */}
              <div className="subsection">
                <div className="subsection-header-container" onClick={() => toggleSection('unit2')}>
                  <h3 className="subsection-title">Unit 2: [Title]</h3>
                  <span className="arrow-icon">
                    {expandedSections.unit2 ? '▼' : '▶'}
                  </span>
                </div>
                {expandedSections.unit2 && (
                  <div className="subsection-content">
                    <h4>Main Concept</h4>
                    <p>[Unit 2 content goes here...]</p>
                  </div>
                )}
              </div>

              {/* Unit 3 */}
              <div className="subsection">
                <div className="subsection-header-container" onClick={() => toggleSection('unit3')}>
                  <h3 className="subsection-title">Unit 3: [Title]</h3>
                  <span className="arrow-icon">
                    {expandedSections.unit3 ? '▼' : '▶'}
                  </span>
                </div>
                {expandedSections.unit3 && (
                  <div className="subsection-content">
                    <h4>Main Concept</h4>
                    <p>[Unit 3 content goes here...]</p>
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

export default DataO;
