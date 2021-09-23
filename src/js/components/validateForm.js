const form = document.querySelector('.js-form');

new window.JustValidate('.js-form', {
	rules: {
		name: {
			required: true
		},

		email: {
			required: true,
			email: true
		}
	},

	messages: {
		name: {
			required: 'Введите имя'
		},

		email: {
			required: 'Введите почту',
			email: 'Формат почты неверный'
		}
	},

	submitHandler: function (form) {
		console.log("Валидация успешна!");
		form.reset();
	},
});