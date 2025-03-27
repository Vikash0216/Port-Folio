import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import Home from './Components/Home/Home.jsx';
import './index.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import About from './Components/About/About.jsx';
import Projects from './Components/Projects/Projects.jsx';
import Skills from './Components/Skills/Skills.jsx';
import Contact from './Components/Contact/Contact.jsx';
import Github, {githubLoader } from './Components/Github/Github.jsx';
import ProjectExpress from './Components/Projects/AllProjects/ProjectExpress.jsx';
import ProjectNextjs from './Components/Projects/AllProjects/ProjectNextjs.jsx';
import ProjectReact from './Components/Projects/AllProjects/ProjectReact.jsx';
import ProjectMongodb from './Components/Projects/AllProjects/ProjectMongodb.jsx';
import ProjectTailwinscss from './Components/Projects/AllProjects/ProjectTailwinscss.jsx';
import ProjectList from './Components/Projects/AllProjects/ProjectList.jsx';

 
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='projects' element={<Projects />} />

      <Route path='projects/projectjavascript' element={<ProjectList />} />
      <Route path='projects/projectexpress' element={<ProjectExpress />} />
      <Route path='projects/projectnextjs' element={<ProjectNextjs />} />
      <Route path='projects/projectreact' element={<ProjectReact />} />
      <Route path='projects/projectmongodb' element={<ProjectMongodb />} />
      <Route path='projects/projecttailwindcss' element={<ProjectTailwinscss />} />
      
      <Route path='skills' element={<Skills />} />
      <Route path='contact' element={<Contact />} />
      <Route
       loader={githubLoader}
       path='github'
        element={<Github />} />
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} /> 
  </StrictMode>
);
