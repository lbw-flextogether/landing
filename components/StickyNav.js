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
    }
    else {
        navBar.classList.remove("sticky")
    }
}

//listening and invokation!
window.onscroll = function() {scrollEvent()};


// Add Home button that takes us to top of entire doc!
class Home {
    constructor(homeBtn) {
        this.homeBtn = homeBtn;
        this.homeBtn.addEventListener('click', ()   =>  this.scrollToTop())
    }
    scrollToTop(){
        document.documentElement.scrollTop = 0;
        console.log(homeBtn.hash)
    }
}


let homeBtn = document.querySelectorAll(".home");
homeBtn.forEach(    (homeBtn)   =>  new Home(homeBtn))



////// Let's expand this and make our navBar have functioning anchors
/// With active anchor effects!
