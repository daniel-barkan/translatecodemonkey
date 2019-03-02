chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
	chrome.tabs.executeScript(tab.ib, {
		file: 'doWork.js'
	});
}); 

