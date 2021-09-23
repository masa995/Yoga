const html = document.querySelector('html');
const body = document.querySelector('body');
const header = document.querySelector('.js-header');
const burger = document.querySelector('.js-menu__btn');
const menu = document.querySelector('.js-menu__list');
const links = document.querySelectorAll('.js-links');

const widthScroll = window.innerWidth - document.documentElement.clientWidth + 'px';
const headerHeight = header.clientHeight; //clientHeight: VISIBLE content & padding

burger.addEventListener('click', () => {
	burger.classList.toggle('active');
	menu.classList.toggle('active');
	html.classList.toggle('html_lock');
	body.classList.toggle('lock');
});

links.forEach((el) => {
	el.addEventListener('click', (e) => {
		e.preventDefault();
		const href = e.currentTarget.getAttribute('href');
		const elem = document.querySelector(href);

		const elemPosition = elem.getBoundingClientRect().top - headerHeight;
		window.scrollBy({
			top: elemPosition,
			behavior: 'smooth',
		});

		burger.classList.remove('active');
		menu.classList.remove('active');
		unlock();
	});
});

function lock() {
	html.classList.add('html_lock');
	body.classList.add('lock');
	body.style.paddingRight = widthScroll;
}

function unlock() {
	html.classList.remove('html_lock');
	body.classList.remove('lock');
	body.style.paddingRight = 0;
}

