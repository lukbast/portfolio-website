import AboutMe from "./components/about-me/about-me.jsx";
import Contact from "./components/contact/contact.jsx";
import Introduction from "./components/introduction/introduction.jsx";
import MyProjectsHeader from "./components/my-projects/header.jsx";
import MyProjects from "./components/my-projects/my-projects-section.jsx";
import Navbar from "./components/navbar/navbar.jsx";
import Skills from "./components/skills/skills.jsx";

function App() {
  return (
  <>
    <Navbar/>
    <Introduction/>
    <MyProjectsHeader/>
    <MyProjects/>
    <AboutMe/>
    <Skills/>
    <Contact/>
  </>
  );
}

export default App;
