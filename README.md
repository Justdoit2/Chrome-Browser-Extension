Chrome Browser Extension: Organization Messages
Description
This project is a Chrome browser extension that displays organization-wide messages from an admin to users. It leverages React Hooks, ensures optimal website performance, and adheres to modern browser architecture principles. 

Features
Unread Messages Badge: Displays a red badge icon when there are unread messages.

Message Popup: Shows messages in a popup when the extension icon is clicked.

Mark as Read: Allows users to mark messages as read.

Local Storage: Stores message history locally using Chrome's storage API.

Technical Implementation
React Hooks
useState: Manages the state of messages within the popup component.

useEffect: Fetches and updates messages from Chrome's storage on component mount.

useCallback: Optimizes the mark-as-read functionality to prevent unnecessary re-renders.

Website Performance
Efficient State Management: Uses React Hooks to manage state effectively, ensuring smooth and performant UI interactions.

Code Splitting: Bundles code efficiently using Webpack for optimal performance.

CSS Styling: Minimal and efficient CSS to ensure fast load times and a clean user interface.

Browser Architecture
Content Security Policy (CSP): Adheres to strict CSP guidelines for security.

Chrome Storage API: Persists message state locally, allowing for efficient data management.

Background Scripts: Uses background scripts to periodically check for new messages and update the badge accordingly.

Real-World Features
Mock API Endpoint: Simulates an API endpoint to provide messages in JSON format, ensuring realistic data handling.

User Interaction: Enhances user experience by allowing users to interact with messages and mark them as read.

Responsive UI: Ensures the extension is user-friendly and responsive.

