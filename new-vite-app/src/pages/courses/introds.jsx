import React, { useState } from 'react';
import { Link } from "react-router-dom";

const IntroDS = () => {
  const [expandedSections, setExpandedSections] = useState({
    description: false,
    units: false,
    unit1: false,
    unit2: false,
    unit3: false,
    unit4: false,
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
      <h1>Intro to Data Science</h1>
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
                  <h3 className="subsection-title">Unit 1: Introduction to Data Science</h3>
                  <span className="arrow-icon">
                    {expandedSections.unit1 ? '▼' : '▶'}
                  </span>
                </div>
                {expandedSections.unit1 && (
                  <div className="subsection-content">
                    <h4>Main Concept</h4>
                    <p>Overview of what Data Science is, why it's important, and how it came to be.</p>
                    <h5>Key topics:</h5>
                    <ul>
                      <li>What is Data Science?</li>
                      <li>History of Data Science</li>
                      <li>Data Engineer vs Data Scientist vs Data Analyst</li>
                      <li>Data Science Lifecycle</li>
                      <li>Ethics in Data Science</li>
                    </ul>
                    <h5>Key terms:</h5>
                    <p>Data science, data analysis, statistics, programming, machine learning, data collection, data extraction, data cleaning, data visualization, R, SQL, Python.</p>
                  </div>
                )}
              </div>

              {/* Unit 2 */}
              <div className="subsection">
                <div className="subsection-header-container" onClick={() => toggleSection('unit2')}>
                  <h3 className="subsection-title">Unit 2: Python for Data Science</h3>
                  <span className="arrow-icon">
                    {expandedSections.unit2 ? '▼' : '▶'}
                  </span>
                </div>
                {expandedSections.unit2 && (
                  <div className="subsection-content">
                    <h4>Main Concept</h4>
                    <p>Overview of Python and it's applications within Data Science.</p>
                    <h5>Key topics:</h5>
                    <ul>
                      <li>Python fundamentals</li>
                      <li>Numpy library</li>
                      <li>Pandas library</li>
                      <li>Matplotlib library</li>
                      <li>Jupyter Notebook</li>
                    </ul>
                    <h5>Key terms:</h5>
                    <p>Python, Numpy, Pandas, Matplotlib, Jupyter, function, variable, data type</p>

                    <h5>Numpy library:</h5>
                    <ul>
                      <li><strong>Import statement:</strong> import numpy as np</li>
                      <li><strong>Create Array:</strong> np.array([1,2,3])</li>
                      <li><strong>Data abstraction from Array: </strong>arr.sum(), arr.mean(), arr.std(), arr.min(), arr.max()</li>
                    </ul>

                    <h5>Numpy library:</h5>
                    <ul>
                      <li><strong>Create array: </strong>np.array([1, 2, 3, 4])</li>
                      <li><strong>Array aggregations:</strong> arr.sum(), arr.mean(), arr.std(), arr.min(), arr.max()</li>
                      <li><strong>Array summarization: </strong>arr.shape, arr.ndim, arr.size, arr.dtype</li>
                      <li><strong>Array reshape: </strong>arr.reshape(3,2)</li>
                    </ul>

                    <h5>Pandas library:</h5>
                    <ul>
                      <li><strong>Import statement: </strong>import pandas as pd</li>
                      <li><strong>Create a Series (1D):</strong> pd.Series(data)</li>
                      <li><strong>Create a DataFrame (2D table):</strong> pd.DataFrame(data)</li>
                      <li><strong>Read csv/excel file:</strong> pd.read_csv('fname.csv'), pd.read_excel('fname.excel')</li>
                      <li><strong>Summarize dataframe: </strong>df.describe()</li>
                      <li><strong>Select columns: </strong> df['col'], df[['col1'],['col2']]</li>
                      <li><strong>Select row: </strong>df.loc[2], df.loc[[1,3,5]], df.loc[6:13]</li>
                      <li><strong>Select row & column: </strong> df.loc[row_label, col_label]</li>
                      <li><strong>Modifying Data: </strong>df.drop(), df.rename(), df.replace(), df.astype() </li>
                      <li><strong>Merging/Joining DataFrames: </strong> pd.concat([df1, df2]), pd.merge(df1, df2, on='key', how='inner'), df.join(other_df)</li>
                      <li><strong>Handling missing data: </strong> df.isnull(), df.notnull(), df.dropna(), df.fillna(value)</li>
                    </ul>

                    

                  </div>
                )}
              </div>

              {/* Unit 3 */}
              <div className="subsection">
                <div className="subsection-header-container" onClick={() => toggleSection('unit3')}>
                  <h3 className="subsection-title">Unit 3: Probability and Statistics</h3>
                  <span className="arrow-icon">
                    {expandedSections.unit3 ? '▼' : '▶'}
                  </span>
                </div>
                {expandedSections.unit3 && (
                  <div className="subsection-content">
                    <h4>Main Concept</h4>
                    <p>Overview of probability and statistics, along with some python programming examples.</p>
                    <h5>Key topics:</h5>
                    <ul>
                      <li>Data Collection</li>
                      <li>Descriptive Statistics</li>
                      <li>Probability</li>
                      <li>Probability Distributions</li>
                      <li>Inferential Statistics</li>
                    </ul>
                    <h5>Key terms:</h5>
                    <p>Statistics, probability, Bayes, mean, median, mode, standard deviation, variance, </p>
                  </div>
                )}
              </div>

              {/* Unit 4 */}
              <div className="subsection">
                <div className="subsection-header-container" onClick={() => toggleSection('unit4')}>
                  <h3 className="subsection-title">Unit 4: SQL for Data Science</h3>
                  <span className="arrow-icon">
                    {expandedSections.unit4 ? '▼' : '▶'}
                  </span>
                </div>
                {expandedSections.unit4 && (
                  <div className="subsection-content">
                    <h4>Main Concept</h4>
                    <p>Introduction to structured query language (SQL) and its core operations.</p>
                    <h5>Key topics:</h5>
                    <ul>
                      <li>Relational databases</li>
                      <li>Querying with SQL</li>
                      <li>Operators and Clauses</li>
                      <li>Join Queries</li>
                      <li>Subqueries</li>
                    </ul>
                    <h5>SQL operators:</h5>
                    <ul>
                      <li><b>SELECT:</b> Select a specific column or feature </li>
                      <li><b>FROM:</b> Database that contains selected data</li>
                      <li><b>WHERE</b></li>
                      <li><b>JOIN</b></li>
                      <li><b>*</b></li> 
                    </ul>
                    <h5>Key terms:</h5>
                    <p>Query, database, subquery, SQL, relational database </p>
                    
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
                <dt>Function</dt>
                <dd>[Definition of matrix goes here...]</dd>
                
                <dt>Data</dt>
                <dd>[Definition of vector goes here...]</dd>
              </dl>
            </div>
          )}
        </div>

        <Link to="/courses/ds" className="L">
          <button className="divbut">Back</button>
        </Link>
      </div>
    </>
  );
};

export default IntroDS;
