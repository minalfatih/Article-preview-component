let btn = document.querySelector(".share")
let social = document.querySelector(".social")

btn.onclick = function() {
  btn.classList.toggle("active")
  social.classList.toggle("active")
}
