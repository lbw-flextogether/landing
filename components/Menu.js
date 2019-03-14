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
