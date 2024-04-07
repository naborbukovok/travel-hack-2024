import { Routes, Route } from "react-router-dom";
import Catalog from "../Catalog/Catalog";
import Tour from "../Tour/Tour";
import Profile from "../Profile/Profile";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/tours" element={<Catalog />} />
        <Route path="/tour" element={<Tour />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
