chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ startDate: '', endDate: '' });
});