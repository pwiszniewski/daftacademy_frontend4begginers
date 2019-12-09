const menuButton = document.querySelector('.page-navigation_menuIcon');

menuButton.addEventListener('click', event => {
	console.log('clicked');
	let menu = document.querySelector('.page-navigation__items');
	menu.classList.toggle('toggled');
});

const ticketButtons = document.querySelectorAll('.concerts__info .button');

ticketButtons.forEach(btn => {
	 btn.addEventListener('click', event => {
		const btnRepacement = document.createElement('span');
		btnRepacement.textContent = 'Have fun!';
		btnRepacement.style.fontSize = '16px';
		btnRepacement.style.height = btn.style.height;
		btnRepacement.classList.add('btn-replace');
		btn.replaceWith(btnRepacement);
	 });
});


const contactForm = document.querySelector('.contact__form');

contactForm.addEventListener('submit', function(event) {
	event.preventDefault();
	const formData = new FormData(this);
	const entires = formData.entries();
	console.log(Object.fromEntries(entires));
});