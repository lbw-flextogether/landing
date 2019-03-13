// Code for Button actions
//must make open to https://lbwft.netlify.com/

// Button creation

class Button {
    constructor(button) {
        this.button = button;
        this.button.addEventListener('click', ()    =>
          { this.signup()   })
}
    signup() {
        open("https://lbwft.netlify.com/")


    }

}



// Origination, declaration

let buttons = document.querySelectorAll(".react")

// Transfer to modifiable state

buttons.forEach(    (buttons)  =>  (new Button(buttons))  )

console.log('test')



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

// let allButtons = document.querySelectorAll(".noBar");
// allButtons.forEach( (button) => (button.onclick = noLink)   )

// function noLink() {
//     return false;
// }