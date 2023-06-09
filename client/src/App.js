// Main component which holds the Route Data For the Application

import './App.css';
import { Routes, Route } from 'react-router-dom';
// import necessary children of BrowserRouter, Browser Router implemented in index.js

// Importing the necessary pages for the routes object to know

import HomePage from './components/HomePage';
import ContactPage from './components/ContactPage';
import MixesPage from './components/MixesPage';
import RoutingBar from './components/RoutingBar';

// 6 Pages now succesfully imported

function App() {
  return (
    // PARENT DIV here with ClassName of App (This className may need to change for personal styling)
    <div className="App">
      <RoutingBar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/mixes" element={<MixesPage />}></Route>
        <Route path="/contact" element={<ContactPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
