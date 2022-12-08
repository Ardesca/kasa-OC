import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "../pages/About";
import Accueil from "../pages/Accueil";
import NotFound from "../pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/about" element={<About />} />
        {/* ici nous mettons en place la page 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
