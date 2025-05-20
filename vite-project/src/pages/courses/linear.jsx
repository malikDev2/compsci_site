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
                    <p>Introductory unit to linear algebra. Introduces matricies, row transformations and row echelon forms by building off of prior knowledge of systems of linear equations.</p>
                    <h5>Problems encountered:</h5>
                    <ul>
                      <li>Find the row echelon form/RREF of a matrix</li>
                      <li>Convert system of equations into matrix</li>
                      <li>Solve a system of linear equations</li>
                    </ul>
                    <h5>Row transformations:</h5>
                    <ul>
                      <li>Row addition: r1 + r2</li>
                      <li>Row swap: r3 ⟺ r4</li>
                      <li>Row scaler: r2 = r2/3</li>
                    </ul>
                    <h5>Key terms:</h5>
                    <p>Matrix, row transformation, row echelon form, reduced row echelon form.</p>
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
                    <p>Introduces the concept of vectors, and how they're intertwined with matricies.</p>
                    <h5>Problems encountered:</h5>
                    <ul>
                      <li>Solving for span of a set of vectors</li>
                      <li>Determining linear independence/dependence of vectors</li>
                      <li>Finding solutions to Ax=b</li>
                    </ul>
                    <h5>Key terms:</h5>
                    <p>Vectors, span, linear independece/linear dependence, linear combination.</p>
                  </div>
                )}
              </div>

              {/* Unit 3 */}
              <div className="subsection">
                <div className="subsection-header-container" onClick={() => toggleSection('unit3')}>
                  <h3 className="subsection-title">Unit 3: Matrix Algebra, Inverses, and Determinants</h3>
                  <span className="arrow-icon">
                    {expandedSections.unit3 ? '▼' : '▶'}
                  </span>
                </div>
                {expandedSections.unit3 && (
                  <div className="subsection-content">
                    <h4>Main Concept</h4>
                    <p>New operations such as matrix multiplication, inversing, and transposing are introduced along with the concept of determinants.</p>
                    <h5>Problems encountered:</h5>
                    <ul>
                      <li>Matrix multiplication</li>
                      <li>Finding determinant of matrix</li>
                      <li>Finding inverse of matrix</li>
                      <li>Transposing matrix</li>
                      <li>Finding out if matrix is invertible</li>
                    </ul>
                    <h5>Key terms:</h5>
                    <p>Inverse, transpose, determinant, matrix multiplication, invertible</p>
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
                    <p>Explores the concept of basis by introducing row, column, and null spaces.</p>
                    <h5>Problems encountered:</h5>
                    <ul>
                      <li>Find the row/col/null space of matrix</li>
                      <li>Find if a set of vectors is a valid basis</li>
                      <li>Find dimensions of basis</li>
                    </ul>
                    <h5>Key terms:</h5>
                    <p>Basis, Dimension, Row space, Column space, Null space (kernel)</p>
                  </div>
                )}
              </div>

              {/* Unit 5 */}
              <div className="subsection">
                <div className="subsection-header-container" onClick={() => toggleSection('unit5')}>
                  <h3 className="subsection-title">Unit 5: Eigenvalues and Diagonalization</h3>
                  <span className="arrow-icon">
                    {expandedSections.unit5 ? '▼' : '▶'}
                  </span>
                </div>
                {expandedSections.unit5 && (
                  <div className="subsection-content">
                    <h4>Main Concept</h4>
                    <p>Introduces eigenvalues, which is the gateway to diagonalization operations.</p>
                    <h5>Problems encountered:</h5>
                    <ul>
                      <li>Finding eigenvalues of a matrix</li>
                      <li>Creating elementary matricies</li>
                      <li>Finding eigenvectors using eigenvalues</li>
                      <li>Diagonalizing matricies (PDP⁻¹)</li>
                    </ul>
                    <h5>Key terms:</h5>
                    <p>Eigenvalue, Eigenvector, Elementary Matrix, P, D, P⁻¹, Diagonalization</p>
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
                    <p>Defines the concept of orthogonality, two vectors that are perpendicular to each other. Also introduces a new dimension, length, to linear algebra.</p>
                    <h5>Problems encountered:</h5>
                    <ul>
                      <li>Determining orthogonality of set of vectors</li>
                      <li>Normalizing set of orthogonal vectors</li>
                      <li>Finding an orthogonal basis</li>
                      <li>Finding length of vector</li>
                      <li>Projecting vector onto span of vectors</li>
                      <li>Orthogonal Projecting (Gram-Schmidt)</li>
                    </ul>
                    <h5>Key terms:</h5>
                    <p>Orthogonal, Orthonormal, Vector Length, Least Squares, Projection, Orthogonal Projection, Orthogonal Basis, Unit Vector, Unit Length, Dot Product, Gram-Schmidt</p>
                  </div>
                )}
              </div>

              {/* Unit 7 */}
              <div className="subsection">
                <div className="subsection-header-container" onClick={() => toggleSection('unit7')}>
                  <h3 className="subsection-title">Unit 7: Quadratic Forms and Singular Values</h3>
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