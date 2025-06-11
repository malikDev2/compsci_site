import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./pages/navbar";
import Home from "./pages/home";
import Languages from "./pages/languages";
import Courses from "./pages/courses";
import Tools from "./pages/tools";
import Math from "./pages/math";
import Cs from "./pages/cs";
import Ds from "./pages/ds";
import Frameworks from "./pages/frameworks";
import Devtools from "./pages/devtools";
import Resources from "./pages/resources";
import Python from "./pages/languages/python"
import Java from "./pages/languages/java"
import Assembly from "./pages/languages/assembly"
import C from "./pages/languages/c"
import Csharp from "./pages/languages/csharp"
import Css from "./pages/languages/css"
import Js from "./pages/languages/Js"
import Jsx from "./pages/languages/Jsx"
import Html from "./pages/languages/html"
import Calculus from "./pages/courses/calculus"
import Calculus2 from "./pages/courses/calculus2"
import Linear from "./pages/courses/linear"
import Intro from "./pages/courses/intro"
import DataStruct from "./pages/courses/datastruct"
import CompArc from "./pages/courses/comparc";
import DiscreteI from "./pages/courses/discrete1";




import './App.css'

function App() {
  

  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/languages" element={<Languages />}/>
        <Route path="/languages/python" element={<Python/>}/>
        <Route path="/languages/java" element={<Java/>}/>
        <Route path="/languages/html" element={<Html/>}/>
        <Route path="/languages/css" element={<Css/>}/>
        <Route path="/languages/javascript" element={<Js/>}/>
        <Route path="/languages/c" element={<C/>}/>
        <Route path="/languages/csharp" element={<Csharp/>}/>
        <Route path="/languages/assembly" element={<Assembly/>}/>
        <Route path="/languages/jsx" element={<Jsx/>}/>
        <Route path="/courses" element={<Courses />}/>
        <Route path="/courses/math" element={<Math/>}/>
        <Route path="/courses/math/calc1" element={<Calculus/>}/>
        <Route path="/courses/math/calc2" element={<Calculus2/>}/>
        <Route path="/courses/math/linear" element={<Linear/>}/>
        <Route path="/courses/cs" element={<Cs/>}/>
        <Route path="/courses/cs/intro-compsci" element={<Intro/>}/>
        <Route path="/courses/cs/data-structures" element={<DataStruct/>}/>
        <Route path="/courses/cs/computer-architecture" element={<CompArc/>}/>
        <Route path="/courses/cs/discrete" element={<DiscreteI/>}/>
        <Route path ="/courses/ds" element={<Ds/>}/>
        <Route path="/tools" element={<Tools />}/>
        <Route path="/tools/frameworks" element={<Frameworks/>}/>
        <Route path="/tools/devtools" element={<Devtools/>}/>
        <Route path="/tools/resources" element={<Resources/>}/>
      </Routes>
    </BrowserRouter>
    
  )
}

export default App;
