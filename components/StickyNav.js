// Here I will create my code to have a nav bar that will 
// follow me when scrolling!

//Define my nav bar
let navBar = document.querySelector(".navContainer");

//calculating position
let sticky = navBar.offsetTop;

//function declaration

function scrollEvent() {
    if (window.pageYOffset > sticky) {
        navBar.classList.add("sticky")
        console.log("stick")
    }
    else {
        navBar.classList.remove("sticky")
    }
}

//listening and invokation!
window.onscroll = function() {scrollEvent()};



