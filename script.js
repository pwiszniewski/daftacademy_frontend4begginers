// Show/hide page navigation
const menuButton = document.querySelector('#hamburger');
const menuIcon = document.querySelector('.menu-button');

menuButton.addEventListener('click', (e) => {
	const pageNavigation = document.querySelector('.page-navigation');
	pageNavigation.classList.toggle('page-navigation--visible');
	menuIcon.classList.toggle('.menu-button--open');
});

const galleryImages = document.querySelectorAll(".gallery__image");
const enter = "mouseenter";
const leave = "mouseleave";

galleryImages.forEach((image) => {
	image.addEventListener(enter, function(){
	  	this.classList.remove(leave);
	  	this.classList.add(enter);
	  	this.addEventListener(leave, function(){
		    this.classList.remove(enter);
		  	this.classList.add(leave);
		});  
	});
});

// Mark ticket as bought
const concerts = document.querySelector('#concerts');

concerts.addEventListener('click', (e) => {
	if (e.target.classList.contains('button--buy-ticket')) {
		const buyTicketButton = e.target;
		const haveFunText = document.createElement('p');
		haveFunText.textContent = 'Have fun!';

		const buttonContainer = buyTicketButton.parentElement;
		buttonContainer.insertBefore(haveFunText, buyTicketButton);
		buyTicketButton.remove();
		// OR
		// buyTicketButton.replaceWith(haveFunText);
	}
});

// Log form data
const contactForm = document.querySelector('.contact__form');

contactForm.addEventListener('submit', (e) => {
	e.preventDefault();
	const formData = new FormData(e.target);
	const formObject = Object.fromEntries(formData);
	console.log(formObject);
});
