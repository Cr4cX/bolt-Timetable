```jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Map from './components/Map';
import Timeline from './components/Timeline';
import PersonalTimetable from './components/PersonalTimetable';
import Share from './components/Share';

function App() {
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(
        (position) => setUserLocation(position.coords),
        (error) => console.error('Error getting location:', error)
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Map userLocation={userLocation} />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/personal" element={<PersonalTimetable />} />
          <Route path="/share" element={<Share />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
```
