import React, { useState } from 'react';

const Python = () => {
  // Main section logic
  const [expandedSections, setExpandedSections] = useState({
    description: false,
    tools: false,
    syntax: false,
    uniqueFeatures: false
  });

  // Subsection logic
  const [expandedSubsections, setExpandedSubsections] = useState({
    // Syntax
    dataTypes: false,
    operators: false,
    controlFlow: false,
    functions: false,
    methods: false,
    fileIO: false,
    memoryManagement: false,
    // Unique Features
    comprehensions: false,
    decorators: false,
    contextManagers: false,
    // Tools
    dataTools: false,
    guiTools: false,
    backendTools: false,
    testingTools: false,
    otherLibs: false,
    aiMlTools: false
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
              <p>
                Python is a high-level, interpreted programming language known for its readability and versatility. 
                It supports multiple paradigms (procedural, object-oriented, functional) and is widely used in:
              </p>
              <ul>
                <li><strong>Web Development</strong> (Django, Flask)</li>
                <li><strong>Data Science</strong> (Pandas, NumPy)</li>
                <li><strong>Machine Learning</strong> (TensorFlow, PyTorch)</li>
                <li><strong>Automation & Scripting</strong></li>
              </ul>
            </div>
          )}
        </div>

        {/* Syntax Section */}
        <div className="section">
          <div className="section-header-container" onClick={() => toggleSection('syntax')}>
            <h2 className="section-title">Syntax</h2>
            <span className="arrow-icon">
              {expandedSections.syntax ? '▼' : '▶'}
            </span>
          </div>
          {expandedSections.syntax && (
            <div className="section-content">
              {/* Data Types Subsection */}
              <div className="subsection">
                <div className="subsection-header-container" onClick={() => toggleSubsection('dataTypes')}>
                  <h3 className="subsection-title">Data Types</h3>
                  <span className="arrow-icon">
                    {expandedSubsections.dataTypes ? '▼' : '▶'}
                  </span>
                </div>
                {expandedSubsections.dataTypes && (
                  <div className="subsection-content">
                    <ul>
                      <li><strong>Primitives:</strong> 
                        <code>int</code> (arbitrary precision), 
                        <code>float</code>, 
                        <code>bool</code>, 
                        <code>None</code>
                      </li>
                      <li><strong>Collections:</strong>
                        <code>list</code> (mutable), 
                        <code>tuple</code> (immutable), 
                        <code>dict</code> (key-value), 
                        <code>set</code> (unique items)
                      </li>
                      <li><strong>Binary:</strong>
                        <code>bytes</code>, 
                        <code>bytearray</code>, 
                        <code>memoryview</code>
                      </li>
                      <li><strong>Special:</strong>
                        <code>frozenset</code> (immutable set), 
                        <code>range</code>, 
                        <code>slice</code>
                      </li>
                      <li><strong>Memory/Pointers:</strong>
                        <code>id()</code> (memory address), <code>ctypes</code> (low-level memory access)
                      </li>
                      <li><strong>LeetCode Specials:</strong>
                        <pre>{`# Linked List Node\nclass ListNode:\n    def __init__(self, val=0, next=None):\n        self.val = val\n        self.next = next`}</pre>
                        <pre>{`# Binary Tree Node\nclass TreeNode:\n    def __init__(self, val=0, left=None, right=None):\n        self.val = val\n        self.left = left\n        self.right = right`}</pre>
                      </li>
                    </ul>
                  </div>
                )}
              </div>

              {/* Operators Subsection */}
              <div className="subsection">
                <div className="subsection-header-container" onClick={() => toggleSubsection('operators')}>
                  <h3 className="subsection-title">Operators</h3>
                  <span className="arrow-icon">
                    {expandedSubsections.operators ? '▼' : '▶'}
                  </span>
                </div>
                {expandedSubsections.operators && (
                  <div className="subsection-content">
                    <ul>
                      <li><strong>Arithmetic:</strong> <code>+</code>, <code>-</code>, <code>*</code>, <code>**</code> (exponent), <code>//</code> (floor division)</li>
                      <li><strong>Comparison:</strong> <code>==</code>, <code>is</code> (identity check), <code>in</code> (membership)</li>
                      <li><strong>Walrus Operator (3.8+):</strong> <code>:=</code> (assignment in expressions)</li>
                      <li><strong>Bitwise:</strong> <code>&</code>, <code>|</code>, <code>^</code>, <code>~</code>, <code>&lt;&lt;</code>, <code>&gt;&gt;</code></li>
                    </ul>
                  </div>
                )}
              </div>

              {/* Methods Subsection */}
              <div className="subsection">
                <div className="subsection-header-container" onClick={() => toggleSubsection('methods')}>
                  <h3 className="subsection-title">Common Methods</h3>
                  <span className="arrow-icon">
                    {expandedSubsections.methods ? '▼' : '▶'}
                  </span>
                </div>
                {expandedSubsections.methods && (
                  <div className="subsection-content">
                    <ul>
                      <li><strong>List:</strong> 
                        <code>append()</code>, 
                        <code>extend()</code>, 
                        <code>pop(index)</code>, 
                        <code>sort(key=..., reverse=True)</code>,
                        <code>reverse()</code>,
                        <code>copy()</code>,
                        <code>index()</code>,
                        <code>count()</code>
                      </li>
                      <li><strong>String:</strong> 
                        <code>split()</code>, 
                        <code>join()</code>, 
                        <code>strip()</code>, 
                        <code>format()</code>, 
                        <code>f-strings</code> (3.6+),
                        <code>replace()</code>,
                        <code>find()</code>,
                        <code>startswith()</code>
                      </li>
                      <li><strong>Dict:</strong> 
                        <code>keys()</code>, 
                        <code>values()</code>, 
                        <code>items()</code>, 
                        <code>get(key, default)</code>,
                        <code>update()</code>,
                        <code>setdefault()</code>,
                        <code>popitem()</code>
                      </li>
                      <li><strong>Heapq (for interviews):</strong>
                        <code>heapq.heappush()</code>, 
                        <code>heapq.heappop()</code>,
                        <code>heapq.heapify()</code>
                      </li>
                      <li><strong>Collections Module:</strong>
                        <code>defaultdict</code>, 
                        <code>Counter</code>, 
                        <code>deque</code>
                        (with <code>popleft()</code>, <code>appendleft()</code>)
                      </li>
                    </ul>
                  </div>
                )}
              </div>

              {/* Memory Management Subsection */}
              <div className="subsection">
                <div className="subsection-header-container" onClick={() => toggleSubsection('memoryManagement')}>
                  <h3 className="subsection-title">Memory Management</h3>
                  <span className="arrow-icon">
                    {expandedSubsections.memoryManagement ? '▼' : '▶'}
                  </span>
                </div>
                {expandedSubsections.memoryManagement && (
                  <div className="subsection-content">
                    <ul>
                      <li><strong>No Explicit Pointers:</strong> But objects are passed by reference.</li>
                      <li><strong>id():</strong> Get memory address (e.g., <code>id(x)</code>).</li>
                      <li><strong>copy Module:</strong> 
                        <code>copy.copy()</code> (shallow), 
                        <code>copy.deepcopy()</code>
                      </li>
                      <li><strong>GC:</strong> Garbage collector handles cycles (via <code>gc</code> module).</li>
                      <li><strong>Memory Views:</strong> <code>memoryview()</code> for zero-copy slicing</li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Unique Features Section */}
        <div className="section">
          <div className="section-header-container" onClick={() => toggleSection('uniqueFeatures')}>
            <h2 className="section-title">Unique Features</h2>
            <span className="arrow-icon">
              {expandedSections.uniqueFeatures ? '▼' : '▶'}
            </span>
          </div>
          {expandedSections.uniqueFeatures && (
            <div className="section-content">
              {/* List Comprehensions */}
              <div className="subsection">
                <div className="subsection-header-container" onClick={() => toggleSubsection('comprehensions')}>
                  <h3 className="subsection-title">Comprehensions</h3>
                  <span className="arrow-icon">
                    {expandedSubsections.comprehensions ? '▼' : '▶'}
                  </span>
                </div>
                {expandedSubsections.comprehensions && (
                  <div className="subsection-content">
                    <ul>
                      <li><strong>List:</strong> <code>[x*2 for x in range(5)]</code></li>
                      <li><strong>Dict:</strong> <code>{"{x: x**2 for x in range(3)}"}</code></li>
                      <li><strong>Set:</strong> <code>{"{x for x in 'abracadabra' if x not in 'abc'}"}</code></li>
                      <li><strong>Generator:</strong> <code>(x for x in range(10) if x % 2 == 0)</code></li>
                      <li><strong>Nested:</strong> <code>[[0 for _ in range(3)] for _ in range(3)]</code></li>
                    </ul>
                  </div>
                )}
              </div>

              {/* Decorators */}
              <div className="subsection">
                <div className="subsection-header-container" onClick={() => toggleSubsection('decorators')}>
                  <h3 className="subsection-title">Decorators</h3>
                  <span className="arrow-icon">
                    {expandedSubsections.decorators ? '▼' : '▶'}
                  </span>
                </div>
                {expandedSubsections.decorators && (
                  <div className="subsection-content">
                    <ul>
                      <li><strong>Syntax:</strong> <code>@decorator</code> above function/class</li>
                      <li><strong>Built-in Examples:</strong>
                        <code>@classmethod</code>, 
                        <code>@staticmethod</code>,
                        <code>@property</code>
                      </li>
                      <li><strong>Custom Example:</strong>
                        <pre>{`def timer(func):\n    def wrapper(*args, **kwargs):\n        start = time.time()\n        result = func(*args, **kwargs)\n        print(f"Time: {time.time()-start:.2f}s")\n        return result\n    return wrapper\n\n@timer\ndef long_running_func():\n    ...`}</pre>
                      </li>
                    </ul>
                  </div>
                )}
              </div>

              {/* Context Managers */}
              <div className="subsection">
                <div className="subsection-header-container" onClick={() => toggleSubsection('contextManagers')}>
                  <h3 className="subsection-title">Context Managers</h3>
                  <span className="arrow-icon">
                    {expandedSubsections.contextManagers ? '▼' : '▶'}
                  </span>
                </div>
                {expandedSubsections.contextManagers && (
                  <div className="subsection-content">
                    <ul>
                      <li><strong>With Statement:</strong> <code>with open('file.txt') as f: ...</code></li>
                      <li><strong>Custom Implementation:</strong>
                        <pre>{`class ManagedFile:\n    def __init__(self, filename):\n        self.filename = filename\n\n    def __enter__(self):\n        self.file = open(self.filename, 'w')\n        return self.file\n\n    def __exit__(self, exc_type, exc_val, exc_tb):\n        if self.file:\n            self.file.close()`}</pre>
                      </li>
                      <li><strong>Contextlib:</strong> <code>@contextmanager</code> decorator</li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Tools Section */}
        <div className="section">
          <div className="section-header-container" onClick={() => toggleSection('tools')}>
            <h2 className="section-title">Tools</h2>
            <span className="arrow-icon">
              {expandedSections.tools ? '▼' : '▶'}
            </span>
          </div>
          {expandedSections.tools && (
            <div className="section-content">
              {/* Data Tools */}
              <div className="subsection">
                <div className="subsection-header-container" onClick={() => toggleSubsection('dataTools')}>
                  <h3 className="subsection-title">Data Science</h3>
                  <span className="arrow-icon">
                    {expandedSubsections.dataTools ? '▼' : '▶'}
                  </span>
                </div>
                {expandedSubsections.dataTools && (
                  <div className="subsection-content">
                    <ul>
                      <li><strong>Pandas:</strong> Data manipulation and analysis</li>
                      <li><strong>NumPy:</strong> Numerical computing with arrays</li>
                      <li><strong>Matplotlib/Seaborn:</strong> Data visualization</li>
                      <li><strong>SciPy:</strong> Scientific computing</li>
                      <li><strong>Dask:</strong> Parallel computing for large datasets</li>
                      <li><strong>Polars:</strong> High-performance DataFrame library</li>
                    </ul>
                  </div>
                )}
              </div>

              {/* AI/ML Tools */}
              <div className="subsection">
                <div className="subsection-header-container" onClick={() => toggleSubsection('aiMlTools')}>
                  <h3 className="subsection-title">AI/ML</h3>
                  <span className="arrow-icon">
                    {expandedSubsections.aiMlTools ? '▼' : '▶'}
                  </span>
                </div>
                {expandedSubsections.aiMlTools && (
                  <div className="subsection-content">
                    <ul>
                      <li><strong>TensorFlow:</strong> End-to-end ML platform</li>
                      <li><strong>PyTorch:</strong> Research-focused ML framework</li>
                      <li><strong>Scikit-learn:</strong> Classical ML algorithms</li>
                      <li><strong>Keras:</strong> High-level neural networks API</li>
                      <li><strong>Transformers:</strong> State-of-the-art NLP models</li>
                      <li><strong>OpenAI Gym:</strong> Reinforcement learning toolkit</li>
                      <li><strong>LangChain:</strong> LLM application framework</li>
                    </ul>
                  </div>
                )}
              </div>

              {/* Backend Tools */}
              <div className="subsection">
                <div className="subsection-header-container" onClick={() => toggleSubsection('backendTools')}>
                  <h3 className="subsection-title">Backend</h3>
                  <span className="arrow-icon">
                    {expandedSubsections.backendTools ? '▼' : '▶'}
                  </span>
                </div>
                {expandedSubsections.backendTools && (
                  <div className="subsection-content">
                    <ul>
                      <li><strong>Django:</strong> Full-featured web framework</li>
                      <li><strong>Flask:</strong> Lightweight microframework</li>
                      <li><strong>FastAPI:</strong> Modern API framework</li>
                      <li><strong>Celery:</strong> Distributed task queues</li>
                      <li><strong>SQLAlchemy:</strong> ORM and database toolkit</li>
                    </ul>
                  </div>
                )}
              </div>

              {/* Testing Tools */}
              <div className="subsection">
                <div className="subsection-header-container" onClick={() => toggleSubsection('testingTools')}>
                  <h3 className="subsection-title">Testing</h3>
                  <span className="arrow-icon">
                    {expandedSubsections.testingTools ? '▼' : '▶'}
                  </span>
                </div>
                {expandedSubsections.testingTools && (
                  <div className="subsection-content">
                    <ul>
                      <li><strong>pytest:</strong> Scalable testing framework</li>
                      <li><strong>unittest:</strong> Built-in testing library</li>
                      <li><strong>hypothesis:</strong> Property-based testing</li>
                      <li><strong>mock:</strong> Mocking library</li>
                    </ul>
                  </div>
                )}
              </div>

              {/* Other Libraries */}
              <div className="subsection">
                <div className="subsection-header-container" onClick={() => toggleSubsection('otherLibs')}>
                  <h3 className="subsection-title">Other Libraries</h3>
                  <span className="arrow-icon">
                    {expandedSubsections.otherLibs ? '▼' : '▶'}
                  </span>
                </div>
                {expandedSubsections.otherLibs && (
                  <div className="subsection-content">
                    <ul>
                      <li><strong>Requests:</strong> HTTP requests</li>
                      <li><strong>BeautifulSoup:</strong> Web scraping</li>
                      <li><strong>OpenCV:</strong> Computer vision</li>
                      <li><strong>Pillow:</strong> Image processing</li>
                      <li><strong>Asyncio:</strong> Async I/O</li>
                      <li><strong>Click:</strong> Command line interfaces</li>
                    </ul>
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

export default Python;