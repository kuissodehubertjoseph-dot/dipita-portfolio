import { LanguageProvider } from "./context/LanguageContext";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar/Navbar";
import Accueil from "./components/Accueil/Accueil";
import APropos from "./components/APropos/APropos";
import Competences from "./components/Competences/Competences";
import Projets from "./components/Projets/Projets";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="App">
          <Navbar />
          <Accueil />
          <APropos />
          <Competences />
          <Projets />
          <Contact />
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
