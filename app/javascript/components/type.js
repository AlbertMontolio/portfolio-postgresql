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
		albertMontolio.classList.add("opacity-1");
		albertMontolio.classList.add("banner-element-white");
	}, 500);
	setTimeout(() => {
		curriculum.classList.add("opacity-1");
		curriculum.classList.add("banner-element-grayish");
	}, 700);

	setTimeout(() => {
		startPositionWrapper.classList.add("opacity-1");
		startPositionWrapper.classList.add("banner-element-white");
	}, 900);

	setTimeout(() => {
		picGoogleSpeaker.classList.add("opacity-1");
	}, 1100);
	
	

	setTimeout(() => {
		webpageWrapper.classList.remove("my-hide");
	}, 1400);
	
}

export { typeJsBanner };