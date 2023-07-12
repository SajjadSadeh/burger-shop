let openMenu = document.querySelector(".bar-memu")
let menuItem = document.querySelector(".menu")
let closeBtn = document.querySelector(".close-btn")
openMenu.addEventListener("click", function () {
    menuItem.style.right = "0"
    document.querySelector(".blur-all-content").style.display = "block"
})
closeBtn.addEventListener("click", function () {
    menuItem.style.right = "-999px"
    document.querySelector(".blur-all-content").style.display = "none"


})