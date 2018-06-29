import Typed from 'typed.js';
// "Clients have ^1500 awesome ideas in their minds",

// function loadDynamicBannerText = () => {
const typeJsBanner = () => {
	console.log("helloooooooooo");
	var options = {
	  strings: ["", 
	  	"^1000 Web Development is the closest thing to  ^1500 magic ^1500",  
	  	"I use ^1500 my coding skills to make ^1500 your idea happen ^1500", 
	  	"" ],
	  typeSpeed: 30,
	  smartBackspace: true
	}

	var typed = new Typed(".dynamic-text", options);
}

const showCurriculum = () => {
	const phrase3 = document.querySelector(".phrase-3");
	setTimeout(() => {
		phrase3.classList.remove("hide");
	}, 16000);
	
}

export { typeJsBanner, showCurriculum };