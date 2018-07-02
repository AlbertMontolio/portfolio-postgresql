import Typed from 'typed.js';
// "Clients have ^1500 awesome ideas in their minds",

// function loadDynamicBannerText = () => {
const typeJsBanner = () => {
	console.log("helloooooooooo");
	var options = {
	  strings: ["", 
	  	"^500 Web Development is the closest thing to magic",  
	  	"Clients have awesome ideas to improve our world",
	  	"With my coding skills, I make your project happen", 
	  	"" ],
	  typeSpeed: 30,
	  smartBackspace: true
	}

	var typed = new Typed(".dynamic-text", options);
}

const showCurriculum = () => {
	const curriculum = document.querySelector(".curriculum");
	const albertMontolio = document.querySelector(".albert-montolio");
	const staticTextWrapper = document.querySelector(".static-text-wrapper");
	const dynamicTextWrapper = document.querySelector(".dynamic-text-wrapper");
	const picGoogleSpeaker = document.querySelector(".pic-google-speaker");
	const webpageWrapper = document.querySelector(".webpage-wrapper");
	const startPositionWrapper = document.querySelector(".start-position-wrapper");


	setTimeout(() => {
		dynamicTextWrapper.classList.add("my-hide");
	}, 11000);
	setTimeout(() => {
		staticTextWrapper.classList.remove("my-hide");
	}, 11000);
	setTimeout(() => {
		albertMontolio.classList.remove("my-hide");
	}, 11500);
	setTimeout(() => {
		curriculum.classList.remove("my-hide");
	}, 11700);
	setTimeout(() => {
		picGoogleSpeaker.classList.remove("my-hide");
	}, 11900);
	setTimeout(() => {
		webpageWrapper.classList.remove("my-hide");
	}, 11900);
	setTimeout(() => {
		startPositionWrapper.classList.remove("my-hide");
	}, 11900);
	
}

export { typeJsBanner, showCurriculum };