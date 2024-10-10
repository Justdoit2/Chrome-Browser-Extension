Chrome browser extension that displays organization-wide messages from an admin to users. 

Features
  -
  -Unread Messages Badge: Displays a red badge icon when there are unread messages.

  -Message Popup: Shows messages in a popup when the extension icon is clicked.

  -Mark as Read: Allows users to mark messages as read.

  -Local Storage: Stores message history locally using Chrome's storage API.

Technical Implementation
  -
  -useState: Manages the state of messages within the popup component.

  -useEffect: Fetches and updates messages from Chrome's storage on component mount.

  -useCallback: Optimizes the mark-as-read functionality to prevent unnecessary re-renders.
  

