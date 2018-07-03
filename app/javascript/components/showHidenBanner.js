const showHidenBanner = () => {
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
	}, 1400);
	
	setTimeout(() => {
		webpageWrapper.classList.remove("my-hide");
	}, 1400);
	
}

export { showHidenBanner };