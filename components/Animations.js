// // General file for all animations that will be used.
// //Would  rather have one general folder than several animations spread around multiple
// //JavaScript  files.

// // Here I will create my code to have a nav bar that will
// // follow me when scrolling!

// //Define my nav bar
// let navBar = document.querySelector(".navContainer");

// //calculating position
// let sticky = navBar.offsetTop;

// //function declaration

// function scrollEvent() {
// 	if (window.pageYOffset > sticky) {
// 		navBar.classList.add("sticky");
// 		// console.log("stick");
// 	} else {
// 		navBar.classList.remove("sticky");
// 	}
// }

// //listening and invokation!
// window.onscroll = function() {
// 	scrollEvent();
// };
// // Code for Button actions
// //must make open to https://lbwft.netlify.com/

// // Button creation

// class Button {
// 	constructor(button) {
// 		this.button = button;
// 		this.button.addEventListener("click", () => {
// 			this.signup();
// 		});
// 	}
// 	signup() {
// 		open("https://lbwft.netlify.com/");
// 	}
// }

// // Origination, declaration

// let buttons = document.querySelectorAll(".react");

// // Transfer to modifiable state

// buttons.forEach(buttons => new Button(buttons));

// console.log("test");

// // Add Home button that takes us to top of entire doc!
// class Home {
// 	constructor(homeBtn) {
// 		this.homeBtn = homeBtn;
// 		this.homeBtn.addEventListener("click", () => this.scrollToTop());
// 	}
// 	scrollToTop() {
// 		document.documentElement.scrollTop = 0;
// 		console.log(homeBtn.hash);
// 	}
// }

// let homeBtn = document.querySelectorAll(".home");
// homeBtn.forEach(homeBtn => new Home(homeBtn));

// ////// Let's expand this and make our navBar have functioning anchors
// /// With active anchor effects!

// // let allButtons = document.querySelectorAll(".noBar");
// // allButtons.forEach( (button) => (button.onclick = noLink)   )

// // function noLink() {
// //     return false;
// // }
// ///Hamburger menu slide in navigation

// // Making reusable component for mobile hamburger nav items

// class Slide {
//     constructor(element) {
//         this.element = element;
//         this.menuBtn = document.querySelector(".slideBtn");
//         this.content = document.querySelector(".slideContent");

//         this.menuBtn.addEventListener("click", () => {
//             this.toggleContent();
//         });
//         this.links = document.querySelectorAll(".slideLink");
//         // this.links.forEach(link => new Link(link));
//         this.links.forEach(function (link) {
//             link.addEventListener("click", () => {
//                 this.menuClose();
//             });
//         });
//     }
//     toggleContent() {
//         this.content.classList.toggle("slideHidden");
//     }
//     menuClose() {
//         if (this.content.classList === ".slideHidden") {
//             this.toggleContent();
//         }
//         console.log("ran");
//     }
// }

// class Link {
//     constructor(link) {
//         // super();
//         this.link = link;
//         // this.content = content;
//         // console.log(this.content);
//         // this.link.addEventListener("click", () => {
//         // this.menuClose();
//         // });
//     }
//     // menuClose() {
//     // 	if (content.classList === ".slideLink") {
//     // 		this.content.toggleContent();
//     // 	}
//     // 	console.log(this);
//     // }
// }

// let slides = document
//     .querySelectorAll(".mobile")
//     .forEach(slide => new Slide(slide));
