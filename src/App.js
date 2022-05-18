import Aboutme from "./components/Aboutme";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Project from "./components/Projects";

function App() {
  return (
    <div className="app">
      <main>
        <Header />
        <Aboutme/>
        <Experience/>
        <Project/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
