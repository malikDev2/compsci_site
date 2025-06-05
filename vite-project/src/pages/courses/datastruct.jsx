import React, { useState } from 'react';

const DataStruct = () => {
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
      <h1>Data Structures</h1>
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
              <p>Data Structures introduces fundamental ways to organize and store data efficiently for different computational purposes. This course covers abstract data types, their implementations, and analysis of their time and space complexity.</p>
              <p>Key topics include runtime analysis, fundamental data structures (stacks, queues, linked lists), trees, graphs, sorting algorithms, and their applications in solving computational problems.</p>
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
                  <h3 className="subsection-title">Unit 1: Runtime & Union-find</h3>
                  <span className="arrow-icon">
                    {expandedSections.unit1 ? '▼' : '▶'}
                  </span>
                </div>
                {expandedSections.unit1 && (
                  <div className="subsection-content">
                    <h4>Main Concept</h4>
                    <p>Analysis of algorithm efficiency using asymptotic notation and implementation of union-find data structures for disjoint sets.</p>
                    
                    <h5>Runtime Analysis:</h5>
                    <ul>
                      <li>Big-O notation (O): Upper bound of growth rate</li>
                      <li>Big-Ω notation (Ω): Lower bound of growth rate</li>
                      <li>Big-Θ notation (Θ): Tight bound of growth rate</li>
                      <li>Tilde notation (~): Approximate model of growth</li>
                      <li>Run-time scale: 1 → log(n) → n → n^2 → n! → ∞ </li>
                    </ul>
                    
                    <h5>Union-Find Operations:</h5>
                    <ul>
                      <li><strong>Quick Find:</strong> O(1) find, O(N) union</li>
                      <li><strong>Quick Union:</strong> O(N) find/union worst case</li>
                      <li><strong>Weighted Quick Union:</strong> O(log N) find/union</li>
                      <li><strong>Path Compression:</strong> Improves to nearly O(1)</li>
                    </ul>
                    
                    <h5>Problems encountered:</h5>
                    <ul>
                      <li>Analyzing algorithm time complexity</li>
                      <li>Implementing efficient union-find structures</li>
                      <li>Choosing appropriate notation for runtime</li>
                      <li>Balancing trees in weighted union</li>
                    </ul>
                    
                    <h5>Applications:</h5>
                    <ul>
                      <li>Network connectivity</li>
                      <li>Image processing</li>
                      <li>Kruskal's algorithm for MST</li>
                    </ul>
                    
                    <h5>Key terms:</h5>
                    <p>Time complexity, space complexity, run-time notation, find, union.</p>
                  </div>
                )}
              </div>

              {/* Unit 2 */}
              <div className="subsection">
                <div className="subsection-header-container" onClick={() => toggleSection('unit2')}>
                  <h3 className="subsection-title">Unit 2: Stacks & Queues</h3>
                  <span className="arrow-icon">
                    {expandedSections.unit2 ? '▼' : '▶'}
                  </span>
                </div>
                {expandedSections.unit2 && (
                  <div className="subsection-content">
                    <h4>Main Concept</h4>
                    <p>Linear data structures that follow particular order for operations: LIFO (Last-In-First-Out) for stacks and FIFO (First-In-First-Out) for queues.</p>
                    
                    <h5>Stack Operations:</h5>
                    <ul>
                      <li>push(e): Add element to top - O(1)</li>
                      <li>pop(): Remove top element - O(1)</li>
                      <li>peek(): View top element - O(1)</li>
                      <li>isEmpty(): Check if empty - O(1)</li>
                    </ul>
                    
                    <h5>Queue Operations:</h5>
                    <ul>
                      <li>enqueue(e): Add to rear - O(1)</li>
                      <li>dequeue(): Remove from front - O(1)</li>
                      <li>peek(): View front element - O(1)</li>
                      <li>isEmpty(): Check if empty - O(1)</li>
                    </ul>
                    
                    <h5>Implementations:</h5>
                    <ul>
                      <li>Array-based (fixed/dynamic size)</li>
                      <li>Linked list-based</li>
                      <li>Circular queue (array implementation)</li>
                    </ul>
                    
                    <h5>Problems encountered:</h5>
                    <ul>
                      <li>Balancing parentheses</li>
                      <li>Evaluating postfix expressions</li>
                      <li>Implementing queue with stacks</li>
                    </ul>
                    
                    <h5>Applications:</h5>
                    <ul>
                      <li>Function call stack</li>
                      <li>Undo mechanisms</li>
                      <li>Breadth-first search</li>
                      <li>CPU scheduling</li>
                    </ul>
                    
                    <h5>Key terms:</h5>
                    <p>LIFO, FIFO, priority queue, enqueue, dequeue, push, pop, stack, queue.</p>
                  </div>
                )}
              </div>

              {/* Unit 3 */}
              <div className="subsection">
                <div className="subsection-header-container" onClick={() => toggleSection('unit3')}>
                  <h3 className="subsection-title">Unit 3: Linked Lists</h3>
                  <span className="arrow-icon">
                    {expandedSections.unit3 ? '▼' : '▶'}
                  </span>
                </div>
                {expandedSections.unit3 && (
                  <div className="subsection-content">
                    <h4>Main Concept</h4>
                    <p>Linear data structure where elements are linked using pointers, allowing dynamic memory allocation and efficient insertions/deletions.</p>
                    
                    <h5>Types of Linked Lists:</h5>
                    <ul>
                      <li><strong>Singly Linked:</strong> Nodes with data and next pointer</li>
                      <li><strong>Doubly Linked:</strong> Adds previous pointer</li>
                      <li><strong>Circular:</strong> Last node points to first</li>
                      <li><strong>Skip List:</strong> Multi-level linked list</li>
                    </ul>
                    
                    <h5>Operations (Singly Linked):</h5>
                    <ul>
                      <li>insertAtHead(e): O(1)</li>
                      <li>insertAtTail(e): O(n) or O(1) with tail pointer</li>
                      <li>delete(e): O(n) search + O(1) removal</li>
                      <li>search(e): O(n)</li>
                    </ul>
                    
                    <h5>Problems encountered:</h5>
                    <ul>
                      <li>Reversing a linked list</li>
                      <li>Detecting cycles</li>
                      <li>Finding middle element</li>
                      <li>Merging sorted lists</li>
                      <li>Handling memory allocation</li>
                    </ul>
                    
                    <h5>Applications:</h5>
                    <ul>
                      <li>Implementing stacks/queues</li>
                      <li>Hash table chaining</li>
                      <li>Polynomial representation</li>
                      <li>Browser history</li>
                    </ul>
                    
                    <h5>Key terms:</h5>
                    <p>Node, pointer/reference, head, tail, next.</p>
                  </div>
                )}
              </div>

              {/* Unit 4 */}
              <div className="subsection">
                <div className="subsection-header-container" onClick={() => toggleSection('unit4')}>
                  <h3 className="subsection-title">Unit 4: Trees</h3>
                  <span className="arrow-icon">
                    {expandedSections.unit4 ? '▼' : '▶'}
                  </span>
                </div>
                {expandedSections.unit4 && (
                  <div className="subsection-content">
                    <h4>Main Concept</h4>
                    <p>Hierarchical data structures with root value and subtrees of children, with various specialized forms for efficient searching and storage.</p>
                    
                    <h5>Tree Types:</h5>
                    <ul>
                      <li><strong>Binary Tree:</strong> ≤2 children per node</li>
                      <li><strong>Binary Search Tree (BST):</strong> Ordered left ≤ node ≤ right</li>
                      <li><strong>AVL Tree:</strong> Height-balanced BST</li>
                      <li><strong>Red-Black Tree:</strong> Balanced BST with color properties</li>
                      <li><strong>2-3 Tree:</strong> B-tree with 2 or 3 children</li>
                      <li><strong>Heap:</strong> Complete binary tree with heap property</li>
                    </ul>
                    
                    <h5>Operations (BST):</h5>
                    <ul>
                      <li>insert(e): O(h) where h is height</li>
                      <li>search(e): O(h)</li>
                      <li>delete(e): O(h)</li>
                      <li>traversals: Inorder, Preorder, Postorder (all O(n))</li>
                    </ul>
                    
                    <h5>Problems encountered:</h5>
                    <ul>
                      <li>Balancing trees</li>
                      <li>Tree serialization</li>
                      <li>Lowest common ancestor</li>
                      <li>Tree diameter calculation</li>
                      <li>Implementing heap operations</li>
                    </ul>
                    
                    <h5>Applications:</h5>
                    <ul>
                      <li>Database indexing</li>
                      <li>Filesystem hierarchy</li>
                      <li>Priority queues (heaps)</li>
                      <li>Decision trees</li>
                    </ul>
                    
                    <h5>Key terms:</h5>
                    <p>Root, leaf, depth, height, balanced tree, rotation, traversal, complete tree, heapify.</p>
                  </div>
                )}
              </div>

              {/* Unit 5 */}
              <div className="subsection">
                <div className="subsection-header-container" onClick={() => toggleSection('unit5')}>
                  <h3 className="subsection-title">Unit 5: Graphs</h3>
                  <span className="arrow-icon">
                    {expandedSections.unit5 ? '▼' : '▶'}
                  </span>
                </div>
                {expandedSections.unit5 && (
                  <div className="subsection-content">
                    <h4>Main Concept</h4>
                    <p>Non-linear data structure consisting of vertices (nodes) connected by edges, with various representations and algorithms for traversal and pathfinding.</p>
                    
                    <h5>Graph Types:</h5>
                    <ul>
                      <li><strong>Directed/Undirected:</strong> Edges with/without direction</li>
                      <li><strong>Weighted/Unweighted:</strong> Edges with/without weights</li>
                      <li><strong>Cyclic/Acyclic:</strong> Contains cycles or not</li>
                      <li><strong>Connected:</strong> Path between any two vertices</li>
                    </ul>
                    
                    <h5>Representations:</h5>
                    <ul>
                      <li>Adjacency Matrix: O(1) edge query, O(V²) space</li>
                      <li>Adjacency List: O(degree(V)) edge query, O(V+E) space</li>
                    </ul>
                    
                    <h5>Algorithms:</h5>
                    <ul>
                      <li><strong>BFS:</strong> O(V+E), finds shortest path (unweighted)</li>
                      <li><strong>DFS:</strong> O(V+E), useful for connectivity</li>
                      <li><strong>Dijkstra's:</strong> O(E log V), shortest path (non-negative weights)</li>
                      <li><strong>Prim's/Kruskal's:</strong> MST algorithms</li>
                    </ul>
                    
                    <h5>Problems encountered:</h5>
                    <ul>
                      <li>Traversing graph using BFS/DFS</li>
                      <li>Finding last vertex reached using BFS/DFS</li>
                      <li>Determine shortest path</li>
                      <li>Cycle detection</li>
                    </ul>
                    
                    <h5>Applications:</h5>
                    <ul>
                      <li>Social networks</li>
                      <li>Routing protocols</li>
                      <li>Recommendation systems</li>
                      <li>Dependency resolution</li>
                    </ul>
                    
                    <h5>Key terms:</h5>
                    <p>Vertex, edge, adjacency, path, cycle, connectivity, shortest path, minimum spanning tree, topological order.</p>
                  </div>
                )}
              </div>

              {/* Unit 6 */}
              <div className="subsection">
                <div className="subsection-header-container" onClick={() => toggleSection('unit6')}>
                  <h3 className="subsection-title">Unit 6: Sorting Algorithms</h3>
                  <span className="arrow-icon">
                    {expandedSections.unit6 ? '▼' : '▶'}
                  </span>
                </div>
                {expandedSections.unit6 && (
                  <div className="subsection-content">
                    <h4>Main Concept</h4>
                    <p>Algorithms that arrange elements in a particular order (typically numerical or lexicographical), with varying time/space complexity tradeoffs.</p>
                    
                    <h5>Comparison Sorts:</h5>
                    <ul>
                      <li><strong>Bubble Sort:</strong> O(n²), stable</li>
                      <li><strong>Selection Sort:</strong> O(n²), not stable</li>
                      <li><strong>Insertion Sort:</strong> O(n²), stable, good for small n</li>
                      <li><strong>Merge Sort:</strong> O(n log n), stable, O(n) space</li>
                      <li><strong>Quick Sort:</strong> O(n log n) avg, O(n²) worst, not stable</li>
                      <li><strong>Heap Sort:</strong> O(n log n), not stable</li>
                    </ul>
                    
                    <h5>Non-comparison Sorts:</h5>
                    <ul>
                      <li><strong>Counting Sort:</strong> O(n+k), k is range</li>
                      <li><strong>Radix Sort:</strong> O(nk), k is digit length</li>
                      <li><strong>Bucket Sort:</strong> O(n) when well-distributed</li>
                    </ul>
                    
                    <h5>Problems encountered:</h5>
                    <ul>
                      <li>Choosing appropriate sort for data</li>
                      <li>Implementing in-place sorts</li>
                      <li>Sort Q/A</li>
                    </ul>
                    
                    <h5>Applications:</h5>
                    <ul>
                      <li>Database indexing</li>
                      <li>Search result ranking</li>
                      <li>Data analysis</li>
                      <li>Operating system scheduling</li>
                    </ul>
                    
                    <h5>Key terms:</h5>
                    <p>Stability, in-place, comparison sort, adaptive sort, divide-and-conquer, pivot, partition, external sort.</p>
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
                
                <dt>Time Complexity</dt>
                <dd>The computational complexity that describes the amount of time an algorithm takes to run as a function of the input size.</dd>
                
                <dt>Space Complexity</dt>
                <dd>The amount of memory space required by an algorithm to execute, as a function of the input size.</dd>
                
                <dt>Hash Table</dt>
                <dd>A data structure that implements an associative array abstract data type, using a hash function to compute an index into an array of buckets.</dd>
                
                <dt>Binary Heap</dt>
                <dd>A complete binary tree that satisfies the heap property: each node is ≥ (max-heap) or ≤ (min-heap) its children.</dd>
                
                <dt>Balanced Binary Search Tree</dt>
                <dd>A BST that automatically keeps its height small to guarantee O(log n) operations, such as AVL or Red-Black trees.</dd>
                
                <dt>Adjacency List</dt>
                <dd>A collection of unordered lists used to represent a graph, where each list describes the neighbors of a vertex.</dd>
                
                <dt>Minimum Spanning Tree (MST)</dt>
                <dd>A subset of the edges of a connected, edge-weighted undirected graph that connects all vertices with the minimal total edge weight.</dd>
                
                <dt>In-place Algorithm</dt>
                <dd>An algorithm that transforms input using no auxiliary data structure, typically using O(1) additional space.</dd>
                
                <dt>Dynamic Array</dt>
                <dd>An array that grows automatically when full, typically doubling in size, providing amortized O(1) insertion at end.</dd>
                
                <dt>Circular Buffer</dt>
                <dd>A data structure that uses a single, fixed-size buffer as if it were connected end-to-end for queue implementations.</dd>
                
                <dt>Skip List</dt>
                <dd>A probabilistic data structure that allows O(log n) search complexity as well as O(log n) insertion complexity.</dd>
                
                <dt>Dijkstra's Algorithm</dt>
                <dd>An algorithm for finding the shortest paths between nodes in a graph with non-negative edge weights.</dd>
              </dl>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default DataStruct;