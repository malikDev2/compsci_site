import YT from '../yt';
import { Link } from "react-router-dom";
import asm from "../../assets/asm.png";

const Assembly = () => {
  return(<>

  <h1>Assembly</h1>
  <div className="languagediv">
    <h2>Description</h2>
    <p>
      Assembly language is a low-level programming language that provides direct access to a system's hardware through
      symbolic instructions and register manipulation. Unlike high-level languages, assembly is specific to a computer
      architecture (such as x86, ARM, or MIPS) and allows precise control over CPU operations, memory management, and
      instruction execution. While difficult to write and debug, it's essential for performance-critical systems,
      embedded development, and understanding how computers work at the hardware level.
    </p>

    <h2>(Use any Assembler + Code editor to run/write Assembly)</h2>
    <img src={asm} alt="Assembly Logo" style={{width: '200px'}}/>
       

    <h2>Syntax</h2>
    <ul>
      <li><strong>Registers (x86):</strong> <code>EAX</code>, <code>EBX</code>, <code>ECX</code>, <code>EDX</code> (General purpose), <code>ESP</code>, <code>EBP</code> (Stack-related)</li>
      <li><strong>Registers (ARM):</strong> <code>R0</code>–<code>R15</code> with special use for <code>R13</code> (SP), <code>R14</code> (LR), <code>R15</code> (PC)</li>
      <li><strong>Data Movement:</strong> <code>MOV EAX, 1</code> — Move value into register</li>
      <li><strong>Arithmetic:</strong> <code>ADD EAX, 2</code>, <code>SUB EAX, EBX</code>, <code>INC ECX</code></li>
      <li><strong>Control Flow:</strong> <code>JMP label</code>, <code>JE label</code> (jump if equal), <code>CALL function</code>, <code>RET</code></li>
      <li><strong>Stack Operations:</strong> <code>PUSH EBX</code>, <code>POP EAX</code></li>
      <li><strong>Labels &amp; Comments:</strong> <code>start:</code> defines a label, <code>; this is a comment</code></li>
    </ul>

    <h2>Frameworks/tools</h2>
    <ul>
      <li><strong>Assemblers:</strong> NASM (Netwide Assembler), MASM (Microsoft), GAS (GNU Assembler)</li>
      <li><strong>Debuggers:</strong> GDB, OllyDbg, WinDbg</li>
      <li><strong>Emulators:</strong> QEMU, Bochs, DOSBox</li>
      <li><strong>IDE/Editors:</strong> RadASM, SASM, Visual Studio (with MASM support)</li>
      <li><strong>Binary Analysis:</strong> x64dbg, Cutter, IDA Free, Ghidra</li>
    </ul>

    <h3>Major Assembly Dialects</h3>
    <ul>
      <li><strong>x86 / x86-64:</strong> Common in PC and OS-level development</li>
      <li><strong>ARM:</strong> Widely used in mobile and embedded devices</li>
      <li><strong>MIPS:</strong> Often used in education and legacy embedded systems</li>
      <li><strong>RISC-V:</strong> Open-source architecture gaining popularity</li>
    </ul>

    <h2>Videos</h2>
    <div className="video-row">
      <div className="video-wrapper">
        <YT videoId="4gwYkEK0gOk"/>
      </div>
      <div className="video-wrapper">
        <YT videoId="LdWU8JEfPhg"/>
      </div>
    </div>

    <Link to="/languages" className="L">
      <button className="divbut3">Back</button>
    </Link>
  </div>

  </>);
};

export default Assembly;
