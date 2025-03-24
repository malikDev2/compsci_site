import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./pages/navbar";
import Home from "./pages/home";
import Languages from "./pages/languages";
import Courses from "./pages/courses";
import Tools from "./pages/tools";
import Math from "./pages/math";
import Cs from "./pages/cs";
import Frameworks from "./pages/frameworks";
import './App.css'

function App() {
  

  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/languages" element={<Languages />}/>
        <Route path="/courses" element={<Courses />}/>
        <Route path="/courses/math" element={<Math/>}/>
        <Route path="/courses/cs" element={<Cs/>}/>
        <Route path="/tools" element={<Tools />}/>
        <Route path="/tools/frameworks" element={<Frameworks/>}/>
      </Routes>
    </BrowserRouter>
    
  )
}

export default App;
