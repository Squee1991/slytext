function burgerMenu() {
	const $burger = document.querySelector('.js-burger');
	const $menu = document.querySelector('.js-menu__list');
	const $btn = document.querySelector('.js-btn__wrapper');
	const $Logo = document.querySelector('.js-logo');

	$burger.addEventListener('click', openBurger)

	function openBurger() {
		if ($burger.classList.toggle('open-burger')) {
			$menu.style.display = 'block'
			$btn.style.display = 'flex'
			$Logo.style.zIndex = '9999'
			document.body.style.overflow = 'hidden'

		} else {
			$menu.style.display = 'none'
			$btn.style.display = 'none'
			document.body.style.overflow = 'visible'
		}
		let $menuLink = document.querySelectorAll('js-menu__link');
		for (let i = 0; i < $menuLink.length; i++) {
			let links = $menuLink[i]
			links.addEventListener('click', changeColorLinks)

			function changeColorLinks() {
				for (let i = 0; i < $menuLink.length; i++) {
					$menuLink[i].style.color = ''
					if (this) {
						this.style.color = '#2974D3'
					}
				}
			}
		}
	}
}

burgerMenu()

function scrolling() {
	const $scrolling = document.querySelector('.js-scroll__top');
	if (window.pageYOffset > 2000 && window.innerWidth > 768) {
		if (!$scrolling.classList.contains('scrollUp')) {
			$scrolling.classList.add('scrollUp');
			$scrolling.addEventListener('click', clickHand);
		}
	} else {
		$scrolling.classList.remove('scrollUp');
		$scrolling.removeEventListener('click', clickHand);

	}

	function clickHand() {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
		$scrolling.classList.remove('scrollUp');

	}
}

window.addEventListener('scroll', scrolling);


function bussinesListColor() {
	const $lists = document.querySelectorAll('.business__list-el')
	if (!$lists && !$lists.length) return;
	for (let i = 0; i < $lists.length; i++) {
		let list = $lists[i]
		list.addEventListener('click', changeColor)
	}

	function changeColor() {
		for (let i = 0; i < $lists.length; i++) {
			$lists[i].style.color = ''
		}
		if (this) {
			this.style.color = '#2974D3'
		}
	}
}

const $columns = document.querySelectorAll('.businnes__active__wrapper'),
	$lists = document.querySelectorAll('.business__list-el');

const hideColumns = event => {
	$columns.forEach(column => {
		if (column.dataset.content === event.target.dataset.list) {
			column.classList.remove('hide');
		} else {
			column.classList.add('hide')
		}
	});
};

$lists.forEach(item => {
	item.addEventListener('click', event => {
		bussinesListColor()
		hideColumns(event);
	});
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



