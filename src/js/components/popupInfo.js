const body = document.querySelector('body');
const linksProgram = document.querySelectorAll('.js-link-program');
const popupCloseBtn = document.querySelector('.js-button-close');
const popup = document.querySelector('.js-popup');
const popupLink = document.querySelector('.js-popup-link');
const popupContent = document.querySelector('.js-popup-content');

const dataProgram = [{ //data popup
	title: `<h2 class="title popup__title">Хатха-йога</h2>`,
	text: `<div class="popup__text">
				Хатха-йога учит сознательно и внимательно относиться к своему здоровью. 
				Здесь много упражнений, позволяющих со временем восстанавливать нормальную 
				работу организма, излечиваться. Во время занятий чередуются напряжение и 
				расслабление, что позволяет достичь лучшего результата, укрепить здоровье.
			</div>`,
	img: `<picture>
					<source srcset="img/program-1.webp" type="image/webp">

					<img src="img/program-1.jpg" alt="Фото занятия" class="program-slider__img">
				</picture>`
},

{
	title: `<h2 class="title popup__title">Аштанга-йога</h2>`,
	text: `<div class="popup__text">
				Аштанга-йога — это особая практика, сформировавшаяся в русле хатха-йоги. 
				Если классическая йога уделяет первоочередное внимание дыхательным упражнениям, 
				развитию гибкости и расслаблению, то аштанга-йога формирует силу духа и тела.
			</div>`,
	img: `<picture>
					<source srcset="img/program-2.webp" type="image/webp">

					<img src="img/program-2.jpg" alt="Фото занятия" class="program-slider__img">
				</picture>`
},

{
	title: `<h2 class="title popup__title">Йога для беременных</h2>`,
	text: `<div class="popup__text">
				Йога для беременных делает тело гибким, растягивает и расслабляет мышцы. 
				Она, также, успокаивает, учит контролировать дыхание и, прежде всего, 
				подготавливает тело женщины к родам.
			</div>`,
	img: `<picture>
					<source srcset="img/program-3.webp" type="image/webp">

					<img src="img/program-3.jpg" alt="Фото занятия" class="program-slider__img">
				</picture>`
},

{
	title: `<h2 class="title popup__title">Fly-йога</h2>`,
	text: `<div class="popup__text">
				Плюс йоги в гамаках заключается в том, 
				что она гораздо быстрее развивает гибкость и разгружает позвоночник. 
				Во время уроков задействованы основные мышцы корпуса,
				что особенно важно для людей с сидячей профессией. 
				Балансирование в гамаке значительно улучшает координацию движений,
				развивает вестибулярный аппарат и приносит состояние легкости и контроля над телом.
			</div>`,
	img: `<picture>
					<source srcset="img/program-1.webp" type="image/webp">

					<img src="img/program-1.jpg" alt="Фото занятия" class="program-slider__img">
				</picture>`
}];

linksProgram.forEach((el) => {
	el.addEventListener('click', (e) => {
		e.preventDefault();
		popup.classList.add('active');
		lock();

		const programNum = e.currentTarget.getAttribute('data-program');
		if (!(programNum === null)) {
			let num = parseInt(programNum);
			const { title, text, img } = dataProgram[num];

			popupContent.innerHTML =
				`
			${title}
			<div class="popup__content">
				${text}
				${img}
			</div>
			`
		}
	});
});

popupCloseBtn.addEventListener('click', (e) => {
	popup.classList.remove('active');
	unlock();
});

popupLink.addEventListener('click', (e) => {
	e.preventDefault();
	popup.classList.remove('active');
	unlock();
	const href = popupLink.getAttribute('href');
	const elem = document.querySelector(href);

	const elemPosition = elem.getBoundingClientRect().top - headerHeight;
	window.scrollBy({
		top: elemPosition,
		behavior: 'smooth',
	});
});
