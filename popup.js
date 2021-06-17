// When the button is clicked, inject setPageBackgroundColor into current page
const changeColor = document.querySelector("#changeColor");

chrome.storage.sync.get("color", ({ color }) => {
  changeColor.style.backgroundColor = color;
});

changeColor.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: setPageBackgroundColor,
  });
});

// The body of this function will be executed as a content script inside the
// current page
function setPageBackgroundColor() {
  chrome.storage.sync.get("color", ({ color }) => {
    document.body.style.backgroundColor = color;
  });
}




// // Initialize button with user's preferred color
// const cursor =document.querySelector('cursor');

// document.addEventListener('mousemove', e => {
//   cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
// })

// document.addEventListener('click', () => {
//   cursor.classList.add("expand");

//   setTimeout(() => {
//       cursor.classList.remove("expand");
//   }, 500)
// })