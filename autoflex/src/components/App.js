import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MP from "../pages/mainPage";
import CP from "../pages/contactPage";
import OSP from "../pages/ourServicesPage"
import ScrollToTop from '../components/scrollTop';

const App = () => {
  return (
    <Router>
      <div>
      <ScrollToTop />
        <Routes>
          <Route path="/home" element={<MP />} />
          <Route path="/contact" element={<CP />} />
          <Route path="/service" element={<OSP />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
