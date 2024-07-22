import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, About, Contact, Projects, Error } from "./pages";

import ProjectPost from "./pages/ProjectPost";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="projects" element={<Projects />} />
        <Route path="projects/project-post" element={<ProjectPost />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
