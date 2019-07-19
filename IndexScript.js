const parallax = document.getElementById("TitleSection");

window.addEventListener("scroll", function function_name(argument) {
	
let offset = window.pageYOffset; 
parallax.style.backgroundPositionY = offset * 0.7 + "px";
})

const parallax2 = document.getElementById("BlogSection");

window.addEventListener("scroll", function function_name(argument) {
	
let offset = window.pageYOffset; 
parallax2.style.backgroundPositionY = offset * 0.5 - 1000 + "px";
})