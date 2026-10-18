import useTheme from "./hooks/useTheme";
import Background from "./components/layout/Background";
import ScrollProgress from "./components/layout/ScrollProgress";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import Skills from "./components/sections/Skills";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";
import Education from "./components/sections/Education";
import Extras from "./components/sections/Extras";
import "./styles/base.css";

export default function App() {
  const [theme, toggleTheme] = useTheme();

  return (
    <>
      <ScrollProgress />
      <Background />
      <Header theme={theme} onToggleTheme={toggleTheme} />
      <main id="top">
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Extras />
      </main>
      <Footer />
    </>
  );
}
