// Register for created window events
chrome.windows.onCreated.addListener(function(window) {changeToNonPinnedTab(window.id)});
// Update the current window
changeToNonPinnedTab(chrome.windows.WINDOW_ID_CURRENT);

function changeToNonPinnedTab(windowId) {
	chrome.windows.get(windowId, {"populate": true}, function (window)
	{
		// First check and see if the active tab needs to be changed
		var pinnedTabIsActive = false;
		for(var i = 0; i < window.tabs.length; i++) {
			var tab = window.tabs[i];
			if(tab.pinned && tab.active) {
				pinnedTabIsActive = true;
			}
			break;
		}
		if(!pinnedTabIsActive) {
			return;
		}
		
		// Take the first non-pinned tab and activate it
		for(var i = 0; i < window.tabs.length; i++) {
			var tab = window.tabs[i];
			if(!tab.pinned) {
				chrome.tabs.update(tab.id, {"active": true});
				return;
			}
		}
	});
}

