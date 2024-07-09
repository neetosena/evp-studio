import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, About, Contact, Projects } from "./pages";

import useScrollTop from "./components/useScrollTop";

import ProjectPost from "./pages/ProjectPost";
  
function App() {
  // useScrollTop();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="projects" element={<Projects />} />
        <Route path="projects/project-post" element={<ProjectPost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
