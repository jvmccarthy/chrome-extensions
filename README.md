Chrome Extensions
-----------------

Simple collection of chrome extensions focused initially around extending the basic functionality of the chrome browser.  

[Start in Non-Pinned Tab](https://github.com/jvmccarthy/chrome-extensions/tree/master/start%20in%20nonpinned%20tab)
-------------------------

[@ Chrome Web Store](https://chrome.google.com/webstore/detail/ihdmghkoepdddbcdomljmbaajiccappf)

This extension is fairly self explanatory.  Pinned tabs are great, but usually you want the tab to start in the background.  For users that often open and close the browser, usually the first move when opening the browser is to go to a non pinned tab.  Some users have requested this functionality on forums such as [here](http://groups.google.com/a/googleproductforums.com/forum/#!category-topic/chrome/give-feature-feedback-and-suggestions/7lGyC_nvOGI).

This simple app uses a [background page](http://code.google.com/chrome/extensions/background_pages.html) to monitor when a new window is opened.  If the window has an active pinned tab, the extension activates the first non-pinned tab instead.

Further Improving Pinned Tabs
-----------------------------
Forums contain a number of different ideas to further enhance pinned tabs.  I plan to spawn the simple start in non-pinned tab extension to include more options for working with pinned tabs including,

* Start in non-pinned tab
 * Focus on the address bar
  * [Simulate](http://stackoverflow.com/questions/961532/firing-a-keyboard-event-in-javascript) an F6 keypress 
* Open all links in a pinned tab in a new tab (preserves pinned tab location)
 * Use a [content script](http://code.google.com/chrome/extensions/content_scripts.html) to wrap links in an [open] call (see [here](http://code.google.com/chrome/extensions/content_scripts.html))
* Hide address bar on pinned tabs (minimalistic, can unpin tab to change address)
 * May be able to change [window type](http://code.google.com/chrome/extensions/windows.html) to accomplish this

The plan is also to include an [options page](http://julianapena.com/2010/01/how-to-build-a-chrome-extension-part-2-options-and-localstorage/) for configuring these options.  (This is probably obvious to extension developers, but I'm a newbie and am also documenting this for my own purposes.)  These are just ideas right now.