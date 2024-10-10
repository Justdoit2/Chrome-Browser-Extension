import React, { useState, useEffect, useCallback } from 'react';
import { createRoot } from 'react-dom/client';

function Popup() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (chrome && chrome.storage && chrome.storage.local) {
      chrome.storage.local.get('messages', (result) => {
        setMessages(result.messages || []);
      });
    }
  }, []);

  const markAsRead = useCallback((id) => {
    const updatedMessages = messages.map(message =>
      message.id === id ? { ...message, read: true } : message
    );
    setMessages(updatedMessages);

    chrome.storage.local.set({ messages: updatedMessages }, () => {
      // Update badge
      const unreadCount = updatedMessages.filter(msg => !msg.read).length;
      if (unreadCount > 0) {
        chrome.action.setBadgeText({ text: unreadCount.toString() });
        chrome.action.setBadgeBackgroundColor({ color: '#FF0000' });
      } else {
        chrome.action.setBadgeText({ text: '' });
        chrome.action.setBadgeBackgroundColor({ color: '' }); // Reset background color
      }
    });
  }, [messages]);

  return (
    <div>
      <h2>Admin Messages Here</h2>
      <ul>
        {messages.map((message) => (
          <li key={message.id} className={message.read ? 'read' : 'unread'}>
            {message.content}
            {!message.read && (
              <button onClick={() => markAsRead(message.id)}>Mark as read</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<Popup />);

