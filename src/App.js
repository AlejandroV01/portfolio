import "./App.css";
import About from "./components/about/About";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/Footer";
import NavBar from "./components/navbar/navbar";
import ProjectSection from "./components/ProjectSection/Project";
import Section1 from "./components/Section1/section1";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Section1 />
      <ProjectSection />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
