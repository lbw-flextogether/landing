class Face {
	constructor(face) {
		this.face = face;
		this.face.addEventListener("mouseenter", () => {
			this.faceHover();
		});
		this.face.addEventListener("mouseleave", () => {
			this.faceHover();
		});
	}
	faceHover() {
		this.face.classList.toggle("faceHvr");
	}
}

let faces = document.querySelectorAll(".face");
faces.forEach(face => new Face(face));
