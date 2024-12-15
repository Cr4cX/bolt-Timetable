```jsx
import React from 'react';
import { EmailShareButton, EmailIcon } from 'react-share';

function Share() {
  const shareUrl = window.location.href;

  return (
    <div>
      <h2>Share Your Timetable</h2>
      <EmailShareButton url={shareUrl} subject="Check out my festival timetable!">
        <EmailIcon size={32} round />
      </EmailShareButton>
    </div>
  );
}

export default Share;
```
