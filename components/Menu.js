///Hamburger menu slide in navigation

// Making reusable component for mobile hamburger nav items

class Slide {
	constructor(element) {
		this.element = element;
		this.menuBtn = document.querySelector(".slideBtn");
		this.content = document.querySelector(".slideContent");

		this.menuBtn.addEventListener("click", () => {
			this.toggleContent();
		});
		this.links = document.querySelectorAll(".slideLink");
		// this.links.forEach(link => new Link(link));
		this.links.forEach(function(link) {
			link.addEventListener("click", () => {
				this.menuClose();
			});
		});
	}
	toggleContent() {
		this.content.classList.toggle("slideHidden");
	}
	menuClose() {
		if (this.content.classList === ".slideHidden") {
			this.toggleContent();
		}
		console.log("ran");
	}
}

class Link {
	constructor(link) {
		// super();
		this.link = link;
		// this.content = content;
		// console.log(this.content);
		// this.link.addEventListener("click", () => {
		// this.menuClose();
		// });
	}
	// menuClose() {
	// 	if (content.classList === ".slideLink") {
	// 		this.content.toggleContent();
	// 	}
	// 	console.log(this);
	// }
}

let slides = document
	.querySelectorAll(".mobile")
	.forEach(slide => new Slide(slide));
