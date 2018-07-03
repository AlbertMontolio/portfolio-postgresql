import { showHidenBanner } from '../components/showHidenBanner'


const skipIntro = () => {
	const skipIntroBtn = document.querySelector(".skip-intro-wrapper");
	console.log(skipIntroBtn);
	skipIntroBtn.addEventListener("click", skipIntroBanner);
}

const skipIntroBanner = (event) => {
	// hide typejs
	const dynamicTextWrapper = document.querySelector(".dynamic-text-wrapper");
	dynamicTextWrapper.classList.add("my-hide")
	console.log("clicking");
	// show
	showHidenBanner();
	const el = event.target;
	el.classList.add("my-hide");
}

export { skipIntro };