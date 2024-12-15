```jsx
import React from 'react';
import { Timeline as SemanticTimeline } from 'react-timeline-semantic-ui';

function Timeline() {
  const events = [
    { title: 'Event 1', date: '2023-09-01T10:00:00', content: 'Description of Event 1' },
    { title: 'Event 2', date: '2023-09-01T12:00:00', content: 'Description of Event 2' },
    // Add more events here
  ];

  return (
    <SemanticTimeline
      events={events}
      defaultOpen={true}
      showDate={true}
      dateFormat="YYYY-MM-DD HH:mm"
    />
  );
}

export default Timeline;
```
