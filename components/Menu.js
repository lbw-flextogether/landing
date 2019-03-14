///Hamburger menu slide in navigation

// declare

// let menuBtn = document.querySelector(".slideBtn");
// let menu = document.querySelector(".slideContent");

// menuBtn.addEventListener("click", displayMobile);

// function displayMobile() {
// 	menu.classList.toggle("slideHidden");
// 	console.log("hi");
// }

// Making reusable component for mobile hamburger nav items

// class SlideLink {
// 	constructor(sL) {
// 		this.sL = sL;
// 	}
// }

// let slideLinks = document.querySelectorAll(".slideLink");
// slideLinks.forEach(sL => new SlideLink(sL));

class Slide {
	constructor(element) {
		this.element = element;
		this.menuBtn = document.querySelector(".slideBtn");
		this.content = document.querySelector(".slideContent");

		this.menuBtn.addEventListener("click", () => {
			this.toggleContent();
		});
		this.links = document
			.querySelectorAll(".slideLink")
			.forEach(link => new Link(link));
	}
	toggleContent() {
		this.content.classList.toggle("slideHidden");
	}
}

class Link {
	constructor(link) {
		this.link = link;
	}
}

let slides = document
	.querySelectorAll(".mobile")
	.forEach(slide => new Slide(slide));
