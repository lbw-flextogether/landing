///Hamburger menu slide in navigation

// declare



let menuBtn = document.querySelector(".slideBtn")
let menu = document.querySelector(".slideContent")

menuBtn.addEventListener("click", displayMobile);

function displayMobile() {
    menu.classList.toggle("slideHidden")
    console.log("hi")

}