//this file makes the div we created in the inject.js follow the cursor as we move
//refer to the update file if you need ideas

const cursor = document.querySelector('#kadenj') //select the div of kadenj
//console.log('cursor', cursor.id)
//when the mouse moves this function is called
document.addEventListener('mousemove', e => {
  //console.log(cursor)
  //set the attributes of the div to be both the top and left of the cursor
  //Note: setting this to harsh pixels may be why the cursor is offsett in some pages
  cursor.setAttribute("style", "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;")
})

//this listener while register whenever a click has been made anywhere on the webpage
document.addEventListener('click', () => {
  //adds the class of expand to the div
  cursor.classList.add("expand");

  //removes the class of expand after 5 mil. secs
  //gets rid of the red circle
  setTimeout(() => {
    cursor.classList.remove("expand");
  }, 500)
})
