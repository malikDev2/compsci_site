import React, { useState } from 'react';


const Python = () => {
// Section logic
  const [expandedSections, setExpandedSections] = useState({
    description: false,
    tools: false,
    syntax: false
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <>
      <h1>Python</h1>
      <div className="language-div">
        <div className="section">
          <div className="section-header-container" onClick={() => toggleSection('description')}>
            <h2 className="section-title">Description</h2>
            <span className="arrow-icon">
              {expandedSections.description ? '▼' : '▶'}
            </span>
          </div>
          {expandedSections.description && (
            <h4 className="section-content">body</h4>
          )}
        </div>

        <div className="section">
          <div className="section-header-container" onClick={() => toggleSection('tools')}>
            <h2 className="section-title">Tools</h2>
            <span className="arrow-icon">
              {expandedSections.tools ? '▼' : '▶'}
            </span>
          </div>
          {expandedSections.tools && (
            <h4 className="section-content">body</h4>
          )}
        </div>

        <div className="section">
          <div className="section-header-container" onClick={() => toggleSection('syntax')}>
            <h2 className="section-title">Syntax</h2>
            <span className="arrow-icon">
              {expandedSections.syntax ? '▼' : '▶'}
            </span>
          </div>
          {expandedSections.syntax && (
            <h4 className="section-content">body</h4>
          )}
        </div>
      </div>
    </>
  );
};

export default Python;