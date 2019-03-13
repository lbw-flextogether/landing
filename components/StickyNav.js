// Here I will create my code to have a nav bar that will 
// follow me when scrolling!


//Define my nav bar
let navBar = document.querySelector(".navBar");
console.log(navBar)

//calculating position

let sticky = navBar.offsetTop;
console.log(sticky)

//function declaration

function scrollEvent() {
    if (window.pageYOffset >= sticky) {
        navBar.classList.add("sticky")
    }
    else {
        navBar.classList.remove("sticky")
    }
}

//listening and invokation!

