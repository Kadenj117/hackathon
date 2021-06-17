//this function runs in the background 
//(background in a chrome extension option still not quite sure why we need it to be this)
//refer to the update file if you need some ideas

//this runs whenever a new tab is opened
chrome.webNavigation.onCompleted.addListener(function (tab) {
  if (tab.frameId == 0) { //make sure that it only runs once we dont want duplicates
    chrome.tabs.executeScript({
      file: "inject.js" //find and execute the scipt from this file
    });

    chrome.tabs.insertCSS({ file: "test.scss" }) //inserting the css to change and modigy the div we just added

    chrome.tabs.executeScript({ //runs after the div has been created so that we dont have any conflicts
      file: "cursor.js" //finds and runs this file
    })
  }

});



//console.log('hello')