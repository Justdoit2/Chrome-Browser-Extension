chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.set({ messages: getMockMessages() });
  console.log("running confirmation");
  unreadMessages();
});

chrome.runtime.onStartup.addListener(() => {
  unreadMessages();
});

chrome.storage.onChanged.addListener(() => {
  unreadMessages();
});

function getMockMessages() {
  return [
    {
      id: "msg123",
      content: "Team meeting at 3 PM today 🙂",
      priority: "high",
      timestamp: "2024-09-30T15:00:00Z",
      read: false
    },
    {
      id: "msg124",
      content: "Project deadline is tomorrow. 🙂",
      priority: "low",
      timestamp: "2024-10-01T10:00:00Z",
      read: true
    }
  ];
}

function unreadMessages() {
  chrome.storage.local.get('messages', (result) => {
    const unreadCount = result.messages ? result.messages.filter((message) => !message.read) : 0;
 
    if (unreadCount.length > 0) {
  
      chrome.action.setBadgeText({ text: unreadCount.toString() });
      chrome.action.setBadgeBackgroundColor({ color: '#FF0000' });
    } else {
      chrome.action.setBadgeText({ text: '' });
    }
  });
}
