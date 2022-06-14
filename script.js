// Obtain the img element, and assign it to the image variable
let image 

// Obtain the 'shrink-grow' button, and assign it to the changeSize variable
let changeSize
document.querySelector('button').onclick = function(){
  document.querySelector('img').style.width = '250px';
  if (image.style.height == "100px") {
    image.style.height = "25px"
  }
  else {
    image.style.height = "100px"
  }
}




//DO NOT CHANGE THE FOLLOWING CODE
changeSize.addEventListener("click", function() {
  if (image.style.height == "100px") {
    image.style.height = "25px"
  }
  else {
    image.style.height = "100px"
  }
})