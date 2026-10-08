import Nav from "./components/Nav";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import QuickLinks from "./components/QuickLinks";
import SocMed from "./components/SocMed";

function App() {
  return (
    <>
      <div className="">
        <Nav />
        <Home />
        <Skills />
        <Contact />
        <QuickLinks />
        <SocMed />
      </div>
    </>
  );
}

export default App;
