import React, { useState } from 'react';
import YT from '../yt';

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
              <p>Linear Algebra is the final required math course for a Bachelors degree in Computer Science. It is typically taken after the completion of Calculus 2. Linear algebra builds on top of systems of linear-equations by introducing a new way to express them, the matrix.</p>
              <p>This course covers fundamental concepts including vector spaces, matrix operations, linear transformations, eigenvalues, and their applications in computer science such as computer graphics, machine learning, and data analysis.</p>
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
                    <p>Introductory unit to linear algebra. Introduces matrices, row transformations and row echelon forms by building off of prior knowledge of systems of linear equations.</p>
                    
                    <h5>Problems encountered:</h5>
                    <ul>
                      <li>Find the row echelon form/RREF of a matrix</li>
                      <li>Convert system of equations into matrix</li>
                      <li>Solve a system of linear equations</li>
                      <li>Determine if a system is consistent or inconsistent</li>
                      <li>Identify free variables in a system</li>
                    </ul>
                    
                    <h5>Row transformations:</h5>
                    <ul>
                      <li>Row addition: r1 + r2 → r1</li>
                      <li>Row swap: r3 ↔ r4</li>
                      <li>Row scaling: r2 = r2/3</li>
                    </ul>
                    
                    <h5>Special Matrices:</h5>
                    <ul>
                      <li>Identity matrix (I)</li>
                      <li>Zero matrix</li>
                      <li>Triangular matrices</li>
                    </ul>
                    
                    <h5>Key terms:</h5>
                    <p>Matrix, row transformation, row echelon form (REF), reduced row echelon form (RREF), pivot positions, free variables, consistent/inconsistent systems.</p>

                    <h5>Videos:</h5>
                    <div className="video-row">
                      <div className="video-wrapper">
                        <YT videoId="yRwQ7A6jVLk"/>
                      </div>
                      <div className="video-wrapper">
                        <YT videoId="9PNCjHemIhI"/>
                      </div>
                      <div className="video-wrapper">
                        <YT videoId="eDb6iugi6Uk"/>
                      </div>
                    </div>

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
                    <p>Introduces the concept of vectors, and how they're intertwined with matrices. Covers vector operations and the fundamental concepts of linear combinations and independence.</p>
                    
                    <h5>Vector Operations:</h5>
                    <ul>
                      <li>Vector addition: u + v</li>
                      <li>Scalar multiplication: c·v</li>
                      <li>Dot product: u·v</li>
                      <li>Cross product (in ℝ³): u × v</li>
                    </ul>
                    
                    <h5>Problems encountered:</h5>
                    <ul>
                      <li>Solving for span of a set of vectors</li>
                      <li>Determining linear independence/dependence of vectors</li>
                      <li>Finding solutions to Ax = b</li>
                      <li>Expressing vectors as linear combinations</li>
                      <li>Determining if a vector is in the span of a set</li>
                    </ul>
                    
                    <h5>Key terms:</h5>
                    <p>Vectors, vector space, span, linear independence/dependence, linear combination, trivial solution, homogeneous system.</p>

                    <h5>Videos:</h5>
                    <div className="video-row">
                      <div className="video-wrapper">
                        <YT videoId="Qm_OS-8COwU"/>
                      </div>
                      <div className="video-wrapper">
                        <YT videoId="9kDpbZCK62Y"/>
                      </div>
                      <div className="video-wrapper">
                        <YT videoId="EP2ghkO0lSk"/>
                      </div>
                    </div>
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
                    <p>New operations such as matrix multiplication, inversing, and transposing are introduced along with the concept of determinants, which provide important information about matrices.</p>
                    
                    <h5>Matrix Operations:</h5>
                    <ul>
                      <li>Addition: A + B</li>
                      <li>Scalar multiplication: cA</li>
                      <li>Matrix multiplication: AB</li>
                      <li>Transpose: Aᵀ</li>
                      <li>Inverse: A⁻¹</li>
                    </ul>
                    
                    <h5>Determinant Properties:</h5>
                    <ul>
                      <li>det(AB) = det(A)det(B)</li>
                      <li>det(Aᵀ) = det(A)</li>
                      <li>det(A⁻¹) = 1/det(A)</li>
                    </ul>
                    
                    <h5>Problems encountered:</h5>
                    <ul>
                      <li>Matrix multiplication</li>
                      <li>Finding determinant of matrix</li>
                      <li>Finding inverse of matrix using adjugate method</li>
                      <li>Transposing matrix</li>
                      <li>Determining if matrix is invertible</li>
                      <li>Solving matrix equations</li>
                    </ul>
                    
                    <h5>Key terms:</h5>
                    <p>Inverse, transpose, determinant, matrix multiplication, invertible, singular matrix, adjugate, cofactor, minor.</p>

                    <h5>Videos:</h5>
                    <div className="video-row">
                      <div className="video-wrapper">
                        <YT videoId="QXUbFzEd3Ww"/>
                      </div>
                      <div className="video-wrapper">
                        <YT videoId="vzt9c7iWPxs"/>
                      </div>
                      <div className="video-wrapper">
                        <YT videoId="kWorj5BBy9k"/>
                      </div>
                      <div className="video-wrapper">
                        <YT videoId="Fg7_mv3izR0"/>
                      </div>
                      <div className="video-wrapper">
                        <YT videoId="HgFUYepT7FM"/>
                      </div>
                    </div>
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
                    <p>Explores the concept of basis by introducing row, column, and null spaces. Dimension provides a measure of the size of these spaces.</p>
                    
                    <h5>Fundamental Subspaces:</h5>
                    <ul>
                      <li>Row space: C(Aᵀ)</li>
                      <li>Column space: C(A)</li>
                      <li>Null space: N(A)</li>
                      <li>Left null space: N(Aᵀ)</li>
                    </ul>
                    
                    <h5>Rank-Nullity Theorem:</h5>
                    <p>rank(A) + nullity(A) = n (number of columns)</p>
                    
                    <h5>Problems encountered:</h5>
                    <ul>
                      <li>Find the row/col/null space of matrix</li>
                      <li>Determine if a set of vectors is a valid basis</li>
                      <li>Find dimensions of basis</li>
                      <li>Extend a linearly independent set to a basis</li>
                      <li>Find basis for sum and intersection of subspaces</li>
                    </ul>
                    
                    <h5>Key terms:</h5>
                    <p>Basis, dimension, row space, column space, null space (kernel), rank, nullity, fundamental theorem of linear algebra.</p>

                    <h5>Videos:</h5>
                    <div className="video-row">
                      <div className="video-wrapper">
                        <YT videoId="4C9GKyfUQkc"/>
                      </div>
                      <div className="video-wrapper">
                        <YT videoId="AVWTlNkTNfw"/>
                      </div>
                    </div>
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
                    <p>Introduces eigenvalues and eigenvectors, which are fundamental to understanding matrix behavior and enable diagonalization operations that simplify matrix computations.</p>
                    
                    <h5>Key Equations:</h5>
                    <ul>
                      <li>Characteristic equation: det(A - λI) = 0</li>
                      <li>Eigenvalue equation: Av = λv</li>
                      <li>Diagonalization: A = PDP⁻¹</li>
                    </ul>
                    
                    <h5>Problems encountered:</h5>
                    <ul>
                      <li>Finding eigenvalues of a matrix</li>
                      <li>Finding eigenvectors using eigenvalues</li>
                      <li>Diagonalizing matrices (PDP⁻¹)</li>
                      <li>Determining if a matrix is diagonalizable</li>
                      <li>Computing matrix powers using diagonalization</li>
                    </ul>
                    
                    <h5>Special Cases:</h5>
                    <ul>
                      <li>Matrices with repeated eigenvalues</li>
                      <li>Defective matrices</li>
                      <li>Symmetric matrices</li>
                    </ul>
                    
                    <h5>Key terms:</h5>
                    <p>Eigenvalue, eigenvector, eigenspace, characteristic polynomial, algebraic/geometric multiplicity, diagonalizable, similarity transformation.</p>

                    <h5>Videos:</h5>
                    <div className="video-row">
                      <div className="video-wrapper">
                        <YT videoId="PFDu9oVAE-g"/>
                      </div>
                      <div className="video-wrapper">
                        <YT videoId="TQvxWaQnrqI"/>
                      </div>
                      <div className="video-wrapper">
                        <YT videoId="WTLl03D4TNA"/>
                      </div>
                    </div>
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
                    <p>Defines the concept of orthogonality (perpendicularity) and introduces projections which are crucial for approximation methods like least squares.</p>
                    
                    <h5>Key Formulas:</h5>
                    <ul>
                      <li>Dot product: u·v = u₁v₁ + u₂v₂ + ... + uₙvₙ</li>
                      <li>Vector length: ||v|| = √(v·v)</li>
                      <li>Projection: projᵤv = (u·v)/(u·u) u</li>
                      <li>Least squares: AᵀAx̂ = Aᵀb</li>
                    </ul>
                    
                    <h5>Problems encountered:</h5>
                    <ul>
                      <li>Determining orthogonality of set of vectors</li>
                      <li>Normalizing set of orthogonal vectors</li>
                      <li>Finding an orthogonal basis (Gram-Schmidt)</li>
                      <li>Finding length of vector</li>
                      <li>Projecting vector onto span of vectors</li>
                      <li>Solving for least square solution</li>
                    </ul>
                    
                    <h5>Applications:</h5>
                    <ul>
                      <li>QR factorization</li>
                      <li>Fourier series</li>
                      <li>Data fitting</li>
                    </ul>
                    
                    <h5>Key terms:</h5>
                    <p>Orthogonal, orthonormal, norm, unit vector, projection, orthogonal complement, Gram-Schmidt process, least squares, normal equations.</p>

                    <h5>Videos:</h5>
                    <div className="video-row">
                      <div className="video-wrapper">
                        <YT videoId="6nqMegdbxik"/>
                      </div>
                      <div className="video-wrapper">
                        <YT videoId="WNuIhXo39_k"/>
                      </div>
                      <div className="video-wrapper">
                        <YT videoId="zHbfZWZJTGc"/>
                      </div>
                      <div className="video-wrapper">
                        <YT videoId="27vT-NWuw0M"/>
                      </div>
                      <div className="video-wrapper">
                        <YT videoId="uUWxGVVk0AY"/>
                      </div>
                    </div>
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
                    <p>Brief introduction to quadratic forms and singular value decomposition (SVD), which is one of the most important matrix factorizations with applications in data science and engineering.</p>
                    
                    <h5>Key Concepts:</h5>
                    <ul>
                      <li>Spectral theorem for symmetric matrices</li>
                      <li>Positive definite matrices</li>
                      <li>Singular value decomposition: A = UΣVᵀ</li>
                      <li>Principal component analysis (PCA)</li>
                    </ul>
                    
                    <h5>Problems encountered:</h5>
                    <ul>
                      <li>Find singular values of matrix</li>
                      <li>Find Singular Value Decomposition of matrix</li>
                      <li>Convert between quadratic forms and matrices</li>
                      <li>Classify quadratic forms</li>
                      <li>Find principal axes of quadratic form</li>
                    </ul>
                    
                    <h5>Applications:</h5>
                    <ul>
                      <li>Image compression</li>
                      <li>Principal component analysis</li>
                      <li>Pseudoinverses</li>
                    </ul>
                    
                    <h5>Key terms:</h5>
                    <p>Quadratic form, singular value, singular value decomposition (SVD), positive/negative definite, semi-definite, indefinite, pseudoinverse, condition number.</p>

                    <h5>Videos:</h5>
                    <div className="video-row">
                      <div className="video-wrapper">
                        <YT videoId="0yEiCV-xEWQ"/>
                      </div>
                      <div className="video-wrapper">
                        <YT videoId="wHAJzemKQW4"/>
                      </div>
                      <div className="video-wrapper">
                        <YT videoId="OFnnWWIFg64"/>
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
                <dt>Matrix</dt>
                <dd>A rectangular array of numbers arranged in rows and columns, used to represent linear transformations and systems of linear equations.</dd>
                
                <dt>Vector</dt>
                <dd>An element of a vector space, typically represented as an ordered list of numbers that can be added together and multiplied by scalars.</dd>
                
                <dt>Linear Independence</dt>
                <dd>A set of vectors is linearly independent if no vector in the set can be written as a linear combination of the others.</dd>
                
                <dt>Basis</dt>
                <dd>A linearly independent set of vectors that spans a vector space or subspace.</dd>
                
                <dt>Determinant</dt>
                <dd>A scalar value that can be computed from a square matrix and encodes certain properties of the linear transformation represented by the matrix.</dd>
                
                <dt>Eigenvalue</dt>
                <dd>A scalar λ such that there exists a non-zero vector v (eigenvector) where Av = λv.</dd>
                
                <dt>Orthogonal</dt>
                <dd>Two vectors are orthogonal if their dot product is zero, meaning they are perpendicular to each other.</dd>
                
                <dt>Singular Value Decomposition (SVD)</dt>
                <dd>A factorization of a real or complex matrix that generalizes the eigendecomposition to non-square matrices.</dd>
                
                <dt>Rank</dt>
                <dd>The dimension of the column space (or row space) of a matrix, equal to the number of linearly independent columns (or rows).</dd>
                
                <dt>Null Space (Kernel)</dt>
                <dd>The set of all vectors that are mapped to the zero vector by a given linear transformation.</dd>
                
                <dt>Diagonalization</dt>
                <dd>The process of finding a diagonal matrix D that is similar to a given square matrix A (A = PDP⁻¹).</dd>
                
                <dt>Quadratic Form</dt>
                <dd>A homogeneous polynomial of degree two in several variables, which can be represented by a symmetric matrix.</dd>
                
                <dt>Positive Definite Matrix</dt>
                <dd>A symmetric matrix where all eigenvalues are positive, or equivalently, xᵀAx is greater than 0 for all non-zero vectors x.</dd>
              </dl>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Linear;