import { Routes, Route } from 'react-router-dom';

import Header from "../Header/Header";
// import Booking from "../Booking-Old/Booking";
import Catalog from "../Catalog/Catalog";
import Tour from "../Tour/Tour";

import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/tours" element={<Catalog />} />
        <Route path="/tour" element={<Tour />} />
        {/* <Route path="/booking" element={<Booking />} /> */}
      </Routes>
    </div>
  );
}

export default App;
