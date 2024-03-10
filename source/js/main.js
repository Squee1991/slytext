const $lists = document.querySelectorAll('.business__list-el')
const $columns = document.querySelectorAll('.businnes__active__wrapper')

$columns.forEach(item => {
	if (item.classList.contains('hide')) {
		$lists[0].classList.add('active');
		$lists[0].style.color = '#2974D3';
	}
})

document.addEventListener('DOMContentLoaded', function () {
	function bussinesListColor() {
		$lists.forEach(list => {
			list.style.color = '';
			list.classList.remove('active');
		});
		this.classList.add('active');
		this.style.color = '#2974D3';
	}

	const hideColumns = (event) => {
		$columns.forEach(column => {
			if (column.dataset.content === event.target.dataset.list) {
				column.classList.remove('hide');
			} else {
				column.classList.add('hide');
			}
		});

	}

	$lists.forEach(function (item) {
		item.addEventListener('click', function (event) {
			bussinesListColor.call(this);
			hideColumns(event);
		});
	});

	function menuEvents() {
		const $links = document.querySelectorAll('.js-menu__link-js')
		$links.forEach(itemlink => {
			itemlink.addEventListener('click', function (event) {
				event.preventDefault()
				location.href = itemlink.getAttribute('href')
			})
		})

	}

	menuEvents()

});


// console.log(this)
//
// function obj() {
// 	console.log(this)
// }
//
// obj()
// const myObj = {
// 	method() {
// 		console.log(this)
// 	}
// }
//
// myObj.method()
//
// function bye() {
// 	console.log('Say bye bye', this)
// }
//
// bye()
// const userinfo = {
// 	name: 'Igor',
// 	say: bye,
// }
// userinfo.say()
//
//
// const username = {
// 	name: "igor",
// 	getName() {
// 		const myname = () => {
// 			console.log(this)
// 		};
// 		myname()
// 	}
// }
// username.getName()
// setTimeout(() => {
// 	console.log('Первый')
// }, 0)
//
// console.log('второй');
//
// const promise = new Promise.resolve();
//
// promise().then(() => {
// 	console.log('Третий');
// })
//
// console.log('четвертый');
//
// setTimeout(() => {
// 	console.log('Пятный')
// }, 0)
//
//
// document.body.addEventListener("click", () => {
// 	console.log('Шестой');
// })
//
// console.log('1')
