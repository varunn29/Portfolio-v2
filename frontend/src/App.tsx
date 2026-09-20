import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import TechStack from "./sections/TechStack";
import OpenSource from "./sections/OpenSource";
import Contact from "./sections/Contact";

function App() {
    return (
        <div className="relative">
            <Navbar />

            <main>
                <Hero />
                <Projects />
                <TechStack />
                <OpenSource />
                <Contact />
            </main>
        </div>
    );
}

export default App;