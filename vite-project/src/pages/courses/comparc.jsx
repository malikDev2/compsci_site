import React, { useState } from 'react';

const CompArc = () => {
  // Section logic
  const [expandedSections, setExpandedSections] = useState({
    description: false,
    units: false,
    unit1: false,
    unit2: false,
    unit3: false,
    unit4: false,
    unit5: false,
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
      <h1>Computer Architecture</h1>
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
              <p>Computer Architecture explores the fundamental concepts underlying the design and organization of computer systems. This course covers the interface between hardware and software, from low-level programming to digital logic design.</p>
              <p>Key topics include C programming for system-level access, memory hierarchy, assembly language programming, digital logic circuits, and caching strategies that bridge the performance gap between processors and memory.</p>
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
              {/* Unit 1 - C Programming */}
              <div className="subsection">
                <div className="subsection-header-container" onClick={() => toggleSection('unit1')}>
                  <h3 className="subsection-title">Unit 1: C Programming</h3>
                  <span className="arrow-icon">
                    {expandedSections.unit1 ? '▼' : '▶'}
                  </span>
                </div>
                {expandedSections.unit1 && (
                  <div className="subsection-content">
                    <h4>Main Concept</h4>
                    <p>Introduction to C language focusing on system programming concepts, memory management, and low-level operations that differ from higher-level languages like Java.</p>
                    
                    <h5>Key C Features:</h5>
                    <ul>
                      <li><strong>Pointers:</strong> Direct memory manipulation with *, & operators</li>
                      <li><strong>Memory Management:</strong> malloc(), calloc(), free()</li>
                      <li><strong>Structures:</strong> struct keyword and -> operator</li>
                      <li><strong>Bit Operations:</strong> &, |, ^, ~, bit shifting </li>
                      <li><strong>File I/O:</strong> fopen(), fread(), fwrite(), fclose()</li>
                      <li><strong>Strings:</strong> Null-terminated char arrays</li>
                      <li><strong>Preprocessor:</strong> #include, #define, macros</li>
                    </ul>
                    
                    <h5>Problems encountered:</h5>
                    <ul>
                      <li>Pointer arithmetic and dereferencing</li>
                      <li>Memory leaks and dangling pointers</li>
                      <li>Buffer overflow vulnerabilities</li>
                      <li>Endianness issues in binary I/O</li>
                      <li>Type casting between pointers</li>
                    </ul>
                    
                    <h5>Applications:</h5>
                    <ul>
                      <li>System programming</li>
                      <li>Embedded systems</li>
                      <li>Operating system components</li>
                      <li>Performance-critical applications</li>
                    </ul>
                    
                    <h5>Key terms:</h5>
                    <p>Pointer, dereference, memory allocation, segmentation fault, struct, union, typedef, header file, preprocessor directive.</p>
                  </div>
                )}
              </div>

              {/* Unit 2 - Computer Memory */}
              <div className="subsection">
                <div className="subsection-header-container" onClick={() => toggleSection('unit2')}>
                  <h3 className="subsection-title">Unit 2: Computer Memory</h3>
                  <span className="arrow-icon">
                    {expandedSections.unit2 ? '▼' : '▶'}
                  </span>
                </div>
                {expandedSections.unit2 && (
                  <div className="subsection-content">
                    <h4>Main Concept</h4>
                    <p>Hierarchical organization of computer memory systems, including number representations, addressing, and the von Neumann architecture that underpins modern computers.</p>
                    
                    <h5>Memory Hierarchy:</h5>
                    <ul>
                      <li>Registers → Cache → Main Memory → Storage</li>
                      <li>Access times and tradeoffs</li>
                    </ul>
                    
                    <h5>Number Systems:</h5>
                    <ul>
                      <li>Binary, hexadecimal, octal conversions</li>
                      <li>Signed representations: 1's complement, 2's complement</li>
                      <li>Floating point (IEEE 754)</li>
                    </ul>
                    
                    <h5>Architectural Concepts:</h5>
                    <ul>
                      <li>Von Neumann vs Harvard architecture</li>
                      <li>Multi-core processors and clock speed limits</li>
                      <li>Memory bus organization</li>
                      <li>Endianness (big vs little)</li>
                      <li>Memory-mapped I/O</li>
                    </ul>
                    
                    <h5>Problems encountered:</h5>
                    <ul>
                      <li>Integer overflow/underflow</li>
                      <li>Floating point precision issues</li>
                      <li>Memory alignment requirements</li>
                      <li>Endianness in data transmission</li>
                      <li>Memory bandwidth bottlenecks</li>
                    </ul>
                    
                    <h5>Applications:</h5>
                    <ul>
                      <li>Performance optimization</li>
                      <li>Cross-platform development</li>
                      <li>Embedded system design</li>
                    </ul>
                    
                    <h5>Key terms:</h5>
                    <p>Word size, byte ordering, memory alignment, virtual memory, physical address, memory latency, memory bandwidth, memory wall.</p>
                  </div>
                )}
              </div>

              {/* Unit 3 - Assembly */}
              <div className="subsection">
                <div className="subsection-header-container" onClick={() => toggleSection('unit3')}>
                  <h3 className="subsection-title">Unit 3: Assembly Language</h3>
                  <span className="arrow-icon">
                    {expandedSections.unit3 ? '▼' : '▶'}
                  </span>
                </div>
                {expandedSections.unit3 && (
                  <div className="subsection-content">
                    <h4>Main Concept</h4>
                    <p>Low-level programming using processor-specific instructions that provide direct control over hardware resources and execution flow.</p>
                    
                    <h5>x86 Architecture:</h5>
                    <ul>
                      <li><strong>Registers:</strong> EAX, EBX, ECX, EDX, ESI, EDI, ESP, EBP</li>
                      <li><strong>Segment Registers:</strong> CS, DS, SS, ES, FS, GS</li>
                      <li><strong>Flags Register:</strong> Status flags (ZF, SF, CF, OF)</li>
                    </ul>
                    
                    <h5>Common Instructions:</h5>
                    <ul>
                      <li>MOV: Data transfer</li>
                      <li>ADD/SUB: Arithmetic</li>
                      <li>LEA: Load effective address</li>
                      <li>CMP/TEST: Comparisons</li>
                      <li>JMP/Jcc: Conditional jumps</li>
                      <li>CALL/RET: Function calls</li>
                      <li>PUSH/POP: Stack operations</li>
                    </ul>
                    
                    <h5>Addressing Modes:</h5>
                    <ul>
                      <li>Immediate: MOV EAX, 42</li>
                      <li>Register: MOV EAX, EBX</li>
                      <li>Direct: MOV EAX, [0x1234]</li>
                      <li>Register Indirect: MOV EAX, [EBX]</li>
                      <li>Indexed: MOV EAX, [EBX+ESI*4+8]</li>
                    </ul>
                    
                    <h5>Problems encountered:</h5>
                    <ul>
                      <li>Register allocation conflicts</li>
                      <li>Stack frame management</li>
                      <li>Parameter passing conventions</li>
                      <li>Preserving registers across calls</li>
                      <li>Optimizing instruction sequences</li>
                    </ul>
                    
                    <h5>Applications:</h5>
                    <ul>
                      <li>Reverse engineering</li>
                      <li>Performance-critical code</li>
                      <li>Bootloaders and firmware</li>
                      <li>Exploit development</li>
                    </ul>
                    
                    <h5>Key terms:</h5>
                    <p>Opcode, operand, calling convention, stack frame, ABI, instruction pointer, displacement, base pointer.</p>
                  </div>
                )}
              </div>

              {/* Unit 4 - Digital Logic */}
              <div className="subsection">
                <div className="subsection-header-container" onClick={() => toggleSection('unit4')}>
                  <h3 className="subsection-title">Unit 4: Digital Logic</h3>
                  <span className="arrow-icon">
                    {expandedSections.unit4 ? '▼' : '▶'}
                  </span>
                </div>
                {expandedSections.unit4 && (
                  <div className="subsection-content">
                    <h4>Main Concept</h4>
                    <p>Fundamental building blocks of digital circuits that implement Boolean logic and stateful components used in processor design.</p>
                    
                    <h5>Combinational Logic:</h5>
                    <ul>
                      <li><strong>Gates:</strong> AND, OR, NOT, NAND, NOR, XOR, XNOR</li>
                      <li><strong>Multiplexers:</strong> Data selectors</li>
                      <li><strong>Decoders:</strong> Address decoding</li>
                      <li><strong>Adders:</strong> Half-adder, full-adder</li>
                      <li><strong>Karnaugh Maps:</strong> Logic minimization</li>
                    </ul>
                    
                    <h5>Sequential Logic:</h5>
                    <ul>
                      <li><strong>Latches:</strong> SR, D latches</li>
                      <li><strong>Flip-flops:</strong> D, JK, T types</li>
                      <li><strong>Registers:</strong> Collections of flip-flops</li>
                      <li><strong>Finite State Machines:</strong> Mealy vs Moore</li>
                      <li><strong>Clocking:</strong> Edge-triggered behavior</li>
                    </ul>
                    
                    <h5>Problems encountered:</h5>
                    <ul>
                      <li>Race conditions in sequential circuits</li>
                      <li>Hazards in combinational logic</li>
                      <li>Clock skew issues</li>
                      <li>State machine minimization</li>
                      <li>Timing constraints</li>
                    </ul>
                    
                    <h5>Applications:</h5>
                    <ul>
                      <li>Processor ALU design</li>
                      <li>Cache controllers</li>
                      <li>Peripheral interfaces</li>
                      <li>FPGA programming</li>
                    </ul>
                    
                    <h5>Key terms:</h5>
                    <p>Propagation delay, setup/hold time, glitch, metastability, fan-out, truth table, state diagram, clock domain.</p>
                  </div>
                )}
              </div>

              {/* Unit 5 - Caching */}
              <div className="subsection">
                <div className="subsection-header-container" onClick={() => toggleSection('unit5')}>
                  <h3 className="subsection-title">Unit 5: Caching</h3>
                  <span className="arrow-icon">
                    {expandedSections.unit5 ? '▼' : '▶'}
                  </span>
                </div>
                {expandedSections.unit5 && (
                  <div className="subsection-content">
                    <h4>Main Concept</h4>
                    <p>Hierarchical memory systems that exploit locality to bridge the growing performance gap between processors and main memory.</p>
                    
                    <h5>Cache Organization:</h5>
                    <ul>
                      <li><strong>Levels:</strong> L1, L2, L3 caches</li>
                      <li><strong>Mapping:</strong> Direct, associative, set-associative</li>
                      <li><strong>Write Policies:</strong> Write-through, write-back</li>
                      <li><strong>Replacement:</strong> LRU, FIFO, random</li>
                    </ul>
                    
                    <h5>Memory Technologies:</h5>
                    <ul>
                      <li><strong>SRAM:</strong> Fast, expensive (cache)</li>
                      <li><strong>DRAM:</strong> Slower, dense (main memory)</li>
                      <li><strong>Non-volatile:</strong> Flash, NVRAM</li>
                    </ul>
                    
                    <h5>Performance Concepts:</h5>
                    <ul>
                      <li><strong>Locality:</strong> Temporal and spatial</li>
                      <li><strong>Hit/Miss:</strong> Hit time, miss penalty</li>
                      <li><strong>Miss Types:</strong> Compulsory, capacity, conflict</li>
                      <li><strong>Prefetching:</strong> Anticipatory loading</li>
                    </ul>
                    
                    <h5>Problems encountered:</h5>
                    <ul>
                      <li>Cache thrashing</li>
                      <li>False sharing in multi-core</li>
                      <li>Cache coherence protocols</li>
                      <li>Virtual vs physical addressing</li>
                      <li>TLB interactions</li>
                    </ul>
                    
                    <h5>Applications:</h5>
                    <ul>
                      <li>Performance optimization</li>
                      <li>Multi-core processor design</li>
                      <li>Database systems</li>
                      <li>Real-time systems</li>
                    </ul>
                    
                    <h5>Key terms:</h5>
                    <p>Cache line, tag, index, offset, dirty bit, valid bit, inclusive/exclusive cache, snooping, MESI protocol.</p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Definitions Section - Completed */}
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
                <dt>Von Neumann Architecture</dt>
                <dd>A computer architecture design that uses a single storage structure to hold both instructions and data.</dd>
                
                <dt>2's Complement</dt>
                <dd>A mathematical operation on binary numbers that allows representation of both positive and negative integers.</dd>
                
                <dt>Endianness</dt>
                <dd>The sequential order in which bytes are arranged into larger numerical values in computer memory (big-endian vs little-endian).</dd>
                
                <dt>Memory Hierarchy</dt>
                <dd>The organization of memory in levels with different size, speed, and cost characteristics that trade off capacity for performance.</dd>
                
                <dt>Instruction Set Architecture (ISA)</dt>
                <dd>The part of computer architecture that defines the set of instructions the processor can execute, including registers, addressing modes, and data types.</dd>
                
                <dt>Pipeline</dt>
                <dd>A technique where multiple instructions are overlapped in execution to improve processor throughput.</dd>
                
                <dt>Cache Hit/Miss</dt>
                <dd>A hit occurs when requested data is found in cache, while a miss requires fetching from slower memory.</dd>
                
                <dt>Locality</dt>
                <dd>The tendency of programs to access the same or nearby memory locations repeatedly (temporal locality) or nearby locations in space (spatial locality).</dd>
                
                <dt>Finite State Machine</dt>
                <dd>A mathematical model of computation with a finite number of states that transitions between states based on inputs.</dd>
                
                <dt>Clock Cycle</dt>
                <dd>The basic time unit of a processor, during which a single pipeline stage is executed.</dd>
                
                <dt>Register</dt>
                <dd>A small amount of fast storage directly accessible to the processor, used to hold temporary results.</dd>
                
                <dt>Memory Alignment</dt>
                <dd>The requirement that data objects in memory begin at addresses that are multiples of their size.</dd>
                
                <dt>TLB (Translation Lookaside Buffer)</dt>
                <dd>A cache that stores recent translations of virtual memory addresses to physical addresses.</dd>
                
                <dt>Hazard</dt>
                <dd>A situation in pipelined processors where the next instruction cannot execute in the following clock cycle.</dd>
                
                <dt>Speculative Execution</dt>
                <dd>An optimization technique where a processor executes instructions before knowing whether they are needed.</dd>
              </dl>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CompArc;