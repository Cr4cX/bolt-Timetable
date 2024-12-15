```jsx
import React, { useState } from 'react';

function PersonalTimetable() {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (event) => {
    if (favorites.includes(event)) {
      setFavorites(favorites.filter(e => e !== event));
    } else {
      setFavorites([...favorites, event]);
    }
  };

  return (
    <div>
      <h2>My Timetable</h2>
      <ul>
        {favorites.map((event, index) => (
          <li key={index}>
            {event.title} - {event.time}
            <button onClick={() => toggleFavorite(event)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PersonalTimetable;
```
