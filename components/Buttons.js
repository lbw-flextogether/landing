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