import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./pages/navbar";
import Home from "./pages/home";
import Languages from "./pages/languages";
import Courses from "./pages/courses";
import Tools from "./pages/tools";
import './App.css'

function App() {
  

  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/languages" element={<Languages />}/>
        <Route path="/courses" element={<Courses />}/>
        <Route path="/tools" element={<Tools />}/>
      </Routes>
    </BrowserRouter>
    
  )
}

export default App;
