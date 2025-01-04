import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import DestinationsListPage from "./pages/DestinationsListPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import DestinationDetails from "./pages/DestinationDetails";
import ContactPage from "./pages/Contactpage";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/destinations" element={<DestinationsListPage />} />
            <Route path="/destination/:id" element={<DestinationDetails />} />
            <Route path="/contact" element={<ContactPage/>}/>
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
