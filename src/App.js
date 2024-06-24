import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EventCreation from './components/EventCreation';
import EventRegistration from './components/EventRegistration';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<EventCreation />} />
          <Route path="/register" element={<EventRegistration />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
