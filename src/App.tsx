import Header from "./components/Header.tsx";
import AboutMe from "./components/AboutMe.tsx";
import Technologies from "./components/Technologies.tsx";
import Projects from "./components/Projects.tsx";
import Footer from "./components/Footer.tsx";

function App() {
  return (
    <>
      <Header />
      <main>
        <AboutMe />
        <Technologies />
        <Projects />
      </main>
      <Footer />
    </>
  );
}

export default App;