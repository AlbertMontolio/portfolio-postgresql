import { isMobileDevice } from '../functions'


const successPic = () => {
	const successPicDesktop = document.querySelector(".success-pic-desktop");
	const successPicMobile = document.querySelector(".success-pic-mobile");
	if (isMobileDevice()) {
		console.log("i am in mobile device");
		successPicDesktop.classList.add("my-hide");
		successPicMobile.classList.remove("my-hide");
	} else {
		successPicDesktop.classList.remove("my-hide");
		successPicMobile.classList.add("my-hide");
	}
	
}

export { successPic };