import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./pages/navbar";
import Home from "./pages/home";
import Languages from "./pages/languages";
import Courses from "./pages/courses";
import Tools from "./pages/tools";
import Math from "./pages/math";
import Cs from "./pages/cs";
import Frameworks from "./pages/frameworks";
import Devtools from "./pages/devtools";
import Resources from "./pages/resources"
import Python from "./languages/courses/python"
import './App.css'

function App() {
  

  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/languages" element={<Languages />}/>
        <Route path="/languages/python" element={<Python/>}/>
        <Route path="/courses" element={<Courses />}/>
        <Route path="/courses/math" element={<Math/>}/>
        <Route path="/courses/cs" element={<Cs/>}/>
        <Route path="/tools" element={<Tools />}/>
        <Route path="/tools/frameworks" element={<Frameworks/>}/>
        <Route path="/tools/devtools" element={<Devtools/>}/>
        <Route path="/tools/resources" element={<Resources/>}/>
      </Routes>
    </BrowserRouter>
    
  )
}

export default App;
