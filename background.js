chrome.webNavigation.onCompleted.addListener(function (tab) {
  if (tab.frameId == 0) {
    chrome.tabs.executeScript({
      file: "inject.js"
    });

    chrome.tabs.insertCSS({ file: "test.scss" })

    chrome.tabs.executeScript({
      file: "cursor.js"
    })
  }

});



//console.log('hello')