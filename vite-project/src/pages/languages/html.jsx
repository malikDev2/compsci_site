import React, { useState } from 'react';

const Html = () => {
  // Main section logic
  const [expandedSections, setExpandedSections] = useState({
    description: false,
    tools: false,
    syntax: false
  });

  // Subsection logic
  const [expandedSubsections, setExpandedSubsections] = useState({
    syntaxA: false,
    syntaxB: false,
    toolsA: false,
    toolsB: false
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const toggleSubsection = (subsection) => {
    setExpandedSubsections(prev => ({
      ...prev,
      [subsection]: !prev[subsection]
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
          <div className="section-header-container" onClick={() => toggleSection('syntax')}>
            <h2 className="section-title">Syntax</h2>
            <span className="arrow-icon">
              {expandedSections.syntax ? '▼' : '▶'}
            </span>
          </div>
          {expandedSections.syntax && (
            <div className="section-content">
              <div className="subsection">
                <div className="subsection-header-container" onClick={() => toggleSubsection('syntaxA')}>
                  <h3 className="subsection-title">a</h3>
                  <span className="arrow-icon">
                    {expandedSubsections.syntaxA ? '▼' : '▶'}
                  </span>
                </div>
                {expandedSubsections.syntaxA && (
                  <div className="subsection-content">
                    {/* Content for syntax section a */}
                  </div>
                )}
              </div>
              <div className="subsection">
                <div className="subsection-header-container" onClick={() => toggleSubsection('syntaxB')}>
                  <h3 className="subsection-title">b</h3>
                  <span className="arrow-icon">
                    {expandedSubsections.syntaxB ? '▼' : '▶'}
                  </span>
                </div>
                {expandedSubsections.syntaxB && (
                  <div className="subsection-content">
                    {/* Content for syntax section b */}
                  </div>
                )}
              </div>
            </div>
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
            <div className="section-content">
              <div className="subsection">
                <div className="subsection-header-container" onClick={() => toggleSubsection('toolsA')}>
                  <h3 className="subsection-title">a</h3>
                  <span className="arrow-icon">
                    {expandedSubsections.toolsA ? '▼' : '▶'}
                  </span>
                </div>
                {expandedSubsections.toolsA && (
                  <div className="subsection-content">
                    {/* Content for tools section a */}
                  </div>
                )}
              </div>
              <div className="subsection">
                <div className="subsection-header-container" onClick={() => toggleSubsection('toolsB')}>
                  <h3 className="subsection-title">b</h3>
                  <span className="arrow-icon">
                    {expandedSubsections.toolsB ? '▼' : '▶'}
                  </span>
                </div>
                {expandedSubsections.toolsB && (
                  <div className="subsection-content">
                    {/* Content for tools section b */}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Html;