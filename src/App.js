import { LanguageProvider } from "./context/LanguageContext";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import CursorRingField from "./components/CursorRingField/CursorRingField";
import Navbar from "./components/Navbar/Navbar";
import Accueil from "./components/Accueil/Accueil";
import APropos from "./components/APropos/APropos";
import Competences from "./components/Competences/Competences";
import Projets from "./components/Projets/Projets";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import "./App.css";

const BACKGROUNDS = {
  dark: {
    background: "#1a1a1a",
    colors: ["#3b82f6", "#22d3ee", "#1a1a1a"],
    accent: "#a78bfa",
  },
  light: {
    background: "#ffffff",
    colors: ["#3b82f6", "#22d3ee", "#ffffff"],
    accent: "#7c3aed",
  },
};

function AnimatedBackground() {
  const { theme } = useTheme();
  const { background, colors, accent } = BACKGROUNDS[theme];
  return (
    <div className="animated-bg" aria-hidden="true">
      <CursorRingField background={background} colors={colors} accentColor={accent} />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AnimatedBackground />
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
