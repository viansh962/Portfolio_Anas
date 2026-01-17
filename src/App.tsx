import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Exeducation from './components/Exeducation';
import Skills from './components/Skill';
import Achievements from './components/Achievements';
import CourseCompleted from './components/CourseCompleted'; // ✅ renamed
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <Hero />
      <About />
      <Exeducation />
      <Skills />
      <Achievements />
      <CourseCompleted />   {/* ✅ correct component */}
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
