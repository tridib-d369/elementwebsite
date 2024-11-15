import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ElementWebsite from './components/ElementWebsite';
import Helium from './components/Helium';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<ElementWebsite />} />
            <Route path="/helium" element={<Helium />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
