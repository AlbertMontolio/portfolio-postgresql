import { isMobileDevice } from '../functions'


const successPic = () => {
	const successPic = document.querySelector(".jsSuccessPic");
	if (isMobileDevice()) {
		console.log("i am in mobile device");
		successPic.classList.remove("parallax");
	} else {
		// successPicDesktop.classList.remove("my-hide");
		// successPicMobile.classList.add("my-hide");
	}
	
}

export { successPic };