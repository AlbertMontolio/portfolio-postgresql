const startBanner = () => {
	const startWrapper = document.querySelector(".start-wrapper");
	startWrapper.addEventListener("click", scrollDown);
}

const scrollDown = (event) => {
	const el = event.target;
	const technologiesSection = document.querySelector(".technologies-section");
	technologiesSection.scrollIntoView({ behavior: "smooth"} );
}


export { startBanner };