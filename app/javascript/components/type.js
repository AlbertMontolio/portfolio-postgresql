import Typed from 'typed.js';
// "Clients have ^1500 awesome ideas in their minds",

function isMobileDevice() {
  return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
};

// function loadDynamicBannerText = () => {
const typeJsBanner = () => {

	let deviceTypeSpeed = 0;
	if (isMobileDevice()) {
		deviceTypeSpeed = 10;
	} else {
		deviceTypeSpeed = 30;
	}

	console.log("helloooooooooo");
	var options = {
	  strings: ["", 
	  	"^500 Web Development is the closest thing to magic",  
	  	"Clients have awesome ideas to improve our world",
	  	"With my coding skills, I make your project happen", 
	  	"" ],
	  typeSpeed: deviceTypeSpeed,
	  smartBackspace: true,
	  onComplete: (self) => {
	  	showCurriculum();
	  }
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

	dynamicTextWrapper.classList.add("my-hide");
	staticTextWrapper.classList.remove("my-hide");

	setTimeout(() => {
		albertMontolio.classList.remove("my-hide");
	}, 500);
	setTimeout(() => {
		curriculum.classList.remove("my-hide");
	}, 700);
	setTimeout(() => {
		picGoogleSpeaker.classList.remove("my-hide");
	}, 900);
	
	setTimeout(() => {
		startPositionWrapper.classList.remove("my-hide");
	}, 900);

	setTimeout(() => {
		webpageWrapper.classList.remove("my-hide");
	}, 900);
	
}

export { typeJsBanner };