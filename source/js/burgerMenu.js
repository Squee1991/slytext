function burgerMenu() {
	const $burger = document.querySelector('.js-burger');
	const $menu = document.querySelector('.js-menu__list');
	const $btn = document.querySelector('.js-btn__wrapper');
	const $Logo = document.querySelector('.js-logo');


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

	$burger.addEventListener('click', openBurger)
}

burgerMenu()