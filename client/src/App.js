import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/navbar";
import { Auth } from "./pages/auth";
import { CreateRecipe } from "./pages/create-recipe";
import { Home } from "./pages/home";
import {Homepage} from "./pages/Homepage"
import { About } from "./pages/About";
import { Donated } from "./pages/Donated";
import { Recycle } from "./pages/Recycle";
// import { SavedRecipes } from "./pages/saved-recipe";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/create-recipe" element={<CreateRecipe />} />
          <Route path="/donated-food" element={<Donated />} />
          <Route path="/recycle" element={<Recycle />} />
          <Route path="/about-us" element={<About />} />
          {/* <Route path="/saved-recipes" element={<SavedRecipes />} /> */}
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;