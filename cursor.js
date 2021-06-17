const cursor = document.querySelector('#kadenj')
console.log('cursor', cursor.id)
document.addEventListener('mousemove', e => {
  //console.log(cursor)
  cursor.setAttribute("style", "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;")
})

document.addEventListener('click', () => {
  cursor.classList.add("expand");

  setTimeout(() => {
    cursor.classList.remove("expand");
  }, 500)
})
