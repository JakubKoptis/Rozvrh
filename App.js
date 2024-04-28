import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import DayView from './DayView';
import HomePage from './HomePage';

function App() {
  const [schedule, setSchedule] = useState([]);

  const addScheduleItem = (newItem) => {
    setSchedule([...schedule, newItem]);
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<HomePage schedule={schedule} addScheduleItem={addScheduleItem} />}
          />
          <Route path="/:day" element={<DayView schedule={schedule} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
