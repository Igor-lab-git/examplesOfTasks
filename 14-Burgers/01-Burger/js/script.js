const menu = document.querySelector('.menu__body');
const buttonCloseMenu = document.querySelector('.menu__icon');
const menuList = document.querySelector('.menu__list');
const body = document.body;

if(menu && buttonCloseMenu) {
	buttonCloseMenu.addEventListener('click', (e) => {
		// console.log(e.target);
		menu.classList.toggle('active');
		buttonCloseMenu.classList.toggle('active');
		body.classList.toggle('active');
	});

	menu.addEventListener('click', (e) => {
		if(e.target.classList.contains('menu__body')) {
			menu.classList.remove('active');
			buttonCloseMenu.classList.remove('active');
			body.classList.remove('active');
		}
	});

	const listLinkMenu = menu.querySelectorAll('.menu__link');
	listLinkMenu.forEach(link => {
		link.addEventListener('click', (e) => {
			menu.classList.remove('active');
			buttonCloseMenu.classList.remove('active');
			body.classList.remove('active');
		})
	}) //при клике на ссылку в бургкр меню закрывается это меню и скролится до якаря
}

const anchors = document.querySelectorAll('a[href*="#"]');

anchors.forEach(anchor => {
	anchor.addEventListener('click', (e) => {
		e.preventDefault();

		const idSections = anchor.getAttribute('href').substring(1); //substring одаляет первый элемент в атрибуте тоесть #

		document.getElementById(idSections).scrollIntoView({
			behavior: 'smooth',
			block: 'start',
		}); //для плавного скрола к секциям при клике на нужный якорь
	})
})