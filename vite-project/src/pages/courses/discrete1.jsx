import React, { useState } from 'react';
import YT from '../yt';

const DiscreteI = () => {
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
      <h1>Intro to Discrete Structures I</h1>
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
              <p>Discrete Structures I introduces fundamental mathematical concepts essential for computer science, focusing on structures that are discrete rather than continuous. This course covers logical reasoning, proof techniques, set theory, relations, functions, and formal languages, providing the theoretical foundation for algorithms, data structures, and computation theory.</p>
              <p>Key topics include propositional logic, proof techniques, finite state machines, and number theory concepts crucial for cryptography and algorithm design.</p>
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
                  <h3 className="subsection-title">Unit 1: Propositional Logic</h3>
                  <span className="arrow-icon">
                    {expandedSections.unit1 ? '▼' : '▶'}
                  </span>
                </div>
                {expandedSections.unit1 && (
                  <div className="subsection-content">
                    <h4>Main Concept</h4>
                    <p>Propositional logic deals with statements that are either true or false. These statements are expressed through variables (which are assigned either true/false) and logical operators.</p>
                    
                    <h5>Logic Operators:</h5>
                    <ul>
                      <li>∧ (AND): Conjunction</li>
                      <li>∨ (OR): Disjunction</li>
                      <li>¬/∼ (NOT): Negation</li>
                      <li>→ (Implication): "If P then Q"</li>
                      <li>↔ (Biconditional): "P if and only if Q"</li>
                      <li>⊕ (XOR): Exclusive OR</li>
                      <li>∀ (Universal Quantifier): "For all"</li>
                      <li>∃ (Existential Quantifier): "There exists"</li>
                    </ul>
                    
                    <h5>Logical Equivalences:</h5>
                    <ul>
                      <li>De Morgan's Laws: ¬(P∧Q) ≡ ¬P∨¬Q</li>
                      <li>Distributive Laws: P∨(Q∧R) ≡ (P∨Q)∧(P∨R)</li>
                      <li>Implication: P→Q ≡ ¬P∨Q</li>
                    </ul>
                    
                    <h5>Problems encountered:</h5>
                    <ul>
                      <li>Proving/verifying logical equivalence</li>
                      <li>Generating truth tables</li>
                      <li>Translating between propositional logic and English</li>
                      <li>Simplifying logical expressions</li>
                      <li>Determining validity of arguments</li>
                    </ul>
                    
                    <h5>Applications:</h5>
                    <ul>
                      <li>Digital circuit design</li>
                      <li>Algorithm correctness proofs</li>
                      <li>Database query optimization</li>
                    </ul>

                    <h5>Videos:</h5>
                    <div className="video-row">
                      <div className="video-wrapper">
                        <YT videoId="5NGKbiA04Cw"/>
                      </div>
                      <div className="video-wrapper">
                        <YT videoId="93CxSLi89Ok"/>
                      </div>
                      <div className="video-wrapper">
                        <YT videoId="itrXYg41-V0"/>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Unit 2 */}
              <div className="subsection">
                <div className="subsection-header-container" onClick={() => toggleSection('unit2')}>
                  <h3 className="subsection-title">Unit 2: Set Theory & Functions</h3>
                  <span className="arrow-icon">
                    {expandedSections.unit2 ? '▼' : '▶'}
                  </span>
                </div>
                {expandedSections.unit2 && (
                  <div className="subsection-content">
                    <h4>Main Concept</h4>
                    <p>Set theory is the area of discrete structures/math that deals with sets - well-defined collections of distinct objects. This unit also introduces functions that map elements between sets.</p>
                    
                    <h5>Set Operations:</h5>
                    <ul>
                      <li>∪ (Union): A∪B = x | x∈A ∨ x∈B</li>
                      <li>∩ (Intersection): A∩B = x | x∈A ∧ x∈B</li>
                      <li>∖ (Difference): A∖B = x | x∈A ∧ x∉B</li>
                      <li>⊆ (Subset): A⊆B if ∀x(x∈A → x∈B)</li>
                      <li>∈ (Element of): x∈A means x is in A</li>
                      <li>P(A) (Power Set): Set of all subsets of A</li>
                      <li>A×B (Cartesian Product): Set of ordered pairs</li>
                    </ul>
                    
                    <h5>Function Types:</h5>
                    <ul>
                      <li><strong>Injective (One-to-One):</strong> f(a)=f(b) ⇒ a=b</li>
                      <li><strong>Surjective (Onto):</strong> ∀y∈Y, ∃x∈X s.t. f(x)=y</li>
                      <li><strong>Bijective:</strong> Both injective and surjective</li>
                      <li><strong>Total Function:</strong> Defined for all inputs</li>
                    </ul>
                    
                    <h5>Problems encountered:</h5>
                    <ul>
                      <li>Proving set identities</li>
                      <li>Determining function properties</li>
                      <li>Constructing bijections between sets</li>
                      <li>Working with power sets and Cartesian products</li>
                      <li>Proving countability/uncountability</li>
                    </ul>
                    
                    <h5>Applications:</h5>
                    <ul>
                      <li>Database theory</li>
                      <li>Relational algebra</li>
                      <li>Function complexity analysis</li>
                    </ul>

                    <h5>Videos:</h5>
                    <div className="video-row">
                      <div className="video-wrapper">
                        <YT videoId="5ZhNmKb-dqk"/>
                      </div>
                      <div className="video-wrapper">
                        <YT videoId="tyDKR4FG3Yw"/>
                      </div>
                      <div className="video-wrapper">
                        <YT videoId="4TlCToZZ5gA"/>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Unit 3 */}
              <div className="subsection">
                <div className="subsection-header-container" onClick={() => toggleSection('unit3')}>
                  <h3 className="subsection-title">Unit 3: Proofs</h3>
                  <span className="arrow-icon">
                    {expandedSections.unit3 ? '▼' : '▶'}
                  </span>
                </div>
                {expandedSections.unit3 && (
                  <div className="subsection-content">
                    <h4>Main Concept</h4>
                    <p>Introduction to formal proof techniques essential for establishing the validity of mathematical statements in computer science.</p>
                    
                    <h5>Proof Techniques:</h5>
                    <ul>
                      <li><strong>Direct Proof:</strong> Assume P, show Q follows</li>
                      <li><strong>Contrapositive:</strong> Prove ¬Q → ¬P instead of P→Q</li>
                      <li><strong>Contradiction:</strong> Assume ¬P, find contradiction</li>
                      <li><strong>Induction:</strong>
                        <ul>
                          <li>Base case: Prove for smallest case</li>
                          <li>Inductive step: Show P(k) → P(k+1)</li>
                        </ul>
                      </li>
                      <li><strong>Cases:</strong> Break into exhaustive cases</li>
                      <li><strong>Constructive:</strong> Find explicit example</li>
                    </ul>
                    
                    <h5>Problems encountered:</h5>
                    <ul>
                      <li>Choosing appropriate proof technique</li>
                      <li>Structuring inductive proofs correctly</li>
                      <li>Finding contradictions in indirect proofs</li>
                      <li>Identifying base cases for induction</li>
                      <li>Formulating strong induction hypotheses</li>
                    </ul>
                    
                    <h5>Applications:</h5>
                    <ul>
                      <li>Algorithm correctness proofs</li>
                      <li>Program verification</li>
                      <li>Complexity analysis</li>
                    </ul>
                    
                    <h5>Key terms:</h5>
                    <p>Axiom, conjecture, lemma, theorem, corollary, induction hypothesis, base case, inductive step, counterexample.</p>

                    <h5>Videos:</h5>
                    <div className="video-row">
                      <div className="video-wrapper">
                        <YT videoId="HIkIqt_ytdc"/>
                      </div>
                      <div className="video-wrapper">
                        <YT videoId="V5tUc-J124s"/>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Unit 4 */}
              <div className="subsection">
                <div className="subsection-header-container" onClick={() => toggleSection('unit4')}>
                  <h3 className="subsection-title">Unit 4: Languages, Grammar, and Relations</h3>
                  <span className="arrow-icon">
                    {expandedSections.unit4 ? '▼' : '▶'}
                  </span>
                </div>
                {expandedSections.unit4 && (
                  <div className="subsection-content">
                    <h4>Main Concept</h4>
                    <p>Explores formal languages as sets of strings, grammars as language generators, and relations as connections between set elements.</p>
                    
                    <h5>Key Concepts:</h5>
                    <ul>
                      <li><strong>Formal Languages:</strong> Sets of strings over an alphabet</li>
                      <li><strong>Context-Free Grammars:</strong> Production rules for languages</li>
                      <li><strong>Regular Expressions:</strong> Pattern notation for regular languages</li>
                      <li><strong>Relations:</strong>
                        <ul>
                          <li>Reflexive: ∀a, (a,a)∈R</li>
                          <li>Symmetric: (a,b)∈R ⇒ (b,a)∈R</li>
                          <li>Transitive: (a,b)∈R ∧ (b,c)∈R ⇒ (a,c)∈R</li>
                          <li>Equivalence Relations: Reflexive, symmetric, transitive</li>
                        </ul>
                      </li>
                    </ul>
                    
                    <h5>Problems encountered:</h5>
                    <ul>
                      <li>Constructing grammars for given languages</li>
                      <li>Converting between regular expressions and finite automata</li>
                      <li>Determining properties of relations</li>
                      <li>Finding equivalence classes</li>
                      <li>Working with closures of relations</li>
                    </ul>
                    
                    <h5>Applications:</h5>
                    <ul>
                      <li>Compiler design</li>
                      <li>Database relations</li>
                      <li>Pattern matching</li>
                    </ul>
                    
                    <h5>Key terms:</h5>
                    <p>Alphabet, string, language, production rule, derivation, parse tree, regular language, reflexive closure, symmetric closure, transitive closure, equivalence class.</p>

                    <h5>Videos:</h5>
                    <div className="video-row">
                      <div className="video-wrapper">
                        <YT videoId="7MBpk4gJRkk"/>
                      </div>
                      <div className="video-wrapper">
                        <YT videoId="h1OSmLSacNA"/>
                      </div>
                      <div className="video-wrapper">
                        <YT videoId="DiXMoBMWMmA"/>
                      </div>
                      <div className="video-wrapper">
                        <YT videoId="VssLdh6YhXI"/>
                      </div>
                      <div className="video-wrapper">
                        <YT videoId="dbihQ6tiRJ0"/>
                      </div>
                      <div className="video-wrapper">
                        <YT videoId="uGxPGT6boYQ"/>
                      </div>

                    </div>
                  </div>
                )}
              </div>

              {/* Unit 5 */}
              <div className="subsection">
                <div className="subsection-header-container" onClick={() => toggleSection('unit5')}>
                  <h3 className="subsection-title">Unit 5: State Machines</h3>
                  <span className="arrow-icon">
                    {expandedSections.unit5 ? '▼' : '▶'}
                  </span>
                </div>
                {expandedSections.unit5 && (
                  <div className="subsection-content">
                    <h4>Main Concept</h4>
                    <p>Finite state machines as computational models that process inputs and transition between states according to defined rules.</p>
                    
                    <h5>Machine Types:</h5>
                    <ul>
                      <li><strong>FSM (Finite State Machine):</strong> Abstract machine with finite states</li>
                      <li><strong>FSA (Finite State Automaton):</strong> Recognizes regular languages</li>
                      <li><strong>DFA (Deterministic FSA):</strong> Unique transition for each state/input</li>
                      <li><strong>NFA (Nondeterministic FSA):</strong> Multiple possible transitions</li>
                      <li><strong>Turing Machine:</strong> More powerful computational model</li>
                    </ul>
                    
                    <h5>Problems encountered:</h5>
                    <ul>
                      <li>Designing state machines for specific tasks</li>
                      <li>Converting between NFAs and DFAs</li>
                      <li>Minimizing DFAs</li>
                      <li>Determining language acceptance</li>
                      <li>Simulating Turing machine computations</li>
                    </ul>
                    
                    <h5>Applications:</h5>
                    <ul>
                      <li>Lexical analysis in compilers</li>
                      <li>Protocol design</li>
                      <li>Hardware design</li>
                    </ul>
                    
                    <h5>Key terms:</h5>
                    <p>State, transition, alphabet, accept state, reject state, halting problem, universal Turing machine, decidability, tape alphabet.</p>

                    <h5>Videos:</h5>
                    <div className="video-row">
                      <div className="video-wrapper">
                        <YT videoId="njzrUYrCK0w"/>
                      </div>
                      <div className="video-wrapper">
                        <YT videoId="N_N9Ky6tN_s"/>
                      </div>
                      <div className="video-wrapper">
                        <YT videoId="gJQTFhkhwPA"/>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Unit 6 */}
              <div className="subsection">
                <div className="subsection-header-container" onClick={() => toggleSection('unit6')}>
                  <h3 className="subsection-title">Unit 6: Number Theory</h3>
                  <span className="arrow-icon">
                    {expandedSections.unit6 ? '▼' : '▶'}
                  </span>
                </div>
                {expandedSections.unit6 && (
                  <div className="subsection-content">
                    <h4>Main Concept</h4>
                    <p>Fundamental concepts of integers and their properties, with applications to cryptography and computer algorithms.</p>
                    
                    <h5>Key Topics:</h5>
                    <ul>
                      <li><strong>Number Systems:</strong> Binary, octal, decimal, hexadecimal</li>
                      <li><strong>Divisibility:</strong> a|b if ∃c(b=ac)</li>
                      <li><strong>Modular Arithmetic:</strong> a ≡ b mod m if m|(a-b)</li>
                      <li><strong>Euclidean Algorithm:</strong> Finds GCD(a,b)</li>
                      <li><strong>RSA Cryptography:</strong> Based on prime factorization</li>
                      <li><strong>Fast Exponentiation:</strong> Efficient computation of aⁿ mod m</li>
                    </ul>
                    
                    <h5>Problems encountered:</h5>
                    <ul>
                      <li>Converting between number bases</li>
                      <li>Solving linear congruences</li>
                      <li>Finding modular inverses</li>
                      <li>Implementing Euclidean algorithm</li>
                      <li>Working with prime numbers</li>
                    </ul>
                    
                    <h5>Applications:</h5>
                    <ul>
                      <li>Cryptographic systems</li>
                      <li>Hash functions</li>
                      <li>Error-correcting codes</li>
                    </ul>
                    
                    <h5>Key terms:</h5>
                    <p>Prime number, composite number, greatest common divisor (GCD), least common multiple (LCM), congruence, modular inverse, public-key cryptography, primality testing.</p>

                    <h5>Videos:</h5>
                    <div className="video-row">
                      <div className="video-wrapper">
                        <YT videoId="E-Sg2YsvZds"/>
                      </div>
                      <div className="video-wrapper">
                        <YT videoId="JUzYl1TYMcU"/>
                      </div>
                      <div className="video-wrapper">
                        <YT videoId="wcbH4t5SJpg"/>
                      </div>
                      <div className="video-wrapper">
                        <YT videoId="K2YmMpulFA4"/>
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
                <dt>Proposition</dt>
                <dd>A declarative statement that is either true or false, but not both.</dd>
                
                <dt>Tautology</dt>
                <dd>A compound proposition that is always true, regardless of the truth values of the individual propositions.</dd>
                
                <dt>Set</dt>
                <dd>A well-defined collection of distinct objects, considered as an object in its own right.</dd>
                
                <dt>Function</dt>
                <dd>A relation between a set of inputs (domain) and a set of permissible outputs (codomain) where each input is related to exactly one output.</dd>
                
                <dt>Proof by Induction</dt>
                <dd>A mathematical proof technique used to prove that a statement holds for all natural numbers by proving a base case and an inductive step.</dd>
                
                <dt>Regular Language</dt>
                <dd>A formal language that can be expressed using regular expressions and recognized by finite automata.</dd>
                
                <dt>Equivalence Relation</dt>
                <dd>A binary relation that is reflexive, symmetric, and transitive, partitioning a set into equivalence classes.</dd>
                
                <dt>Deterministic Finite Automaton (DFA)</dt>
                <dd>A finite state machine where for each pair of state and input symbol, there is exactly one transition to a next state.</dd>
                
                <dt>Greatest Common Divisor (GCD)</dt>
                <dd>The largest positive integer that divides each of the integers without a remainder.</dd>
                
                <dt>Modular Arithmetic</dt>
                <dd>A system of arithmetic for integers where numbers "wrap around" after reaching a certain value (the modulus).</dd>
                
                <dt>Context-Free Grammar</dt>
                <dd>A formal grammar where each production rule is of the form V → w, with V a nonterminal symbol and w a string of terminals and/or nonterminals.</dd>
                
                <dt>Turing Machine</dt>
                <dd>A mathematical model of computation that defines an abstract machine which manipulates symbols on a strip of tape according to a table of rules.</dd>
                
                <dt>Public-Key Cryptography</dt>
                <dd>A cryptographic system that uses pairs of keys: public keys which may be disseminated widely, and private keys which are known only to the owner.</dd>
                
                <dt>Bijective Function</dt>
                <dd>A function that is both injective (one-to-one) and surjective (onto), establishing a perfect pairing between elements of domain and codomain.</dd>
                
                <dt>Cartesian Product</dt>
                <dd>The set of all ordered pairs (a, b) where a ∈ A and b ∈ B, for sets A and B.</dd>
              </dl>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default DiscreteI;