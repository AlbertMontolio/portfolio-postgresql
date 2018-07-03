import Typed from 'typed.js';
// "Clients have ^1500 awesome ideas in their minds",
import { isMobileDevice } from '../functions'
import { showHidenBanner } from '../components/showHidenBanner'



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
	  	showHidenBanner();
	  	const skipIntroBtn = document.querySelector(".jsSkipIntroBtn");
	  	skipIntroBtn.classList.add("my-hide");
	  }
	}

	var typed = new Typed(".dynamic-text", options);
}



export { typeJsBanner };