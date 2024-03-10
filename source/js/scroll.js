document.addEventListener('DOMContentLoaded', function () {
	function scrolling() {
		const $scrolling = document.querySelector('.js-scroll__top');
		if ($scrolling) {
			if (window.pageYOffset > 2000 && window.innerWidth > 768) {
				if (!$scrolling.classList.contains('scrollUp')) {
					$scrolling.classList.add('scrollUp');
					$scrolling.addEventListener('click', clickHand);
				}
			} else {
				$scrolling.classList.remove('scrollUp');
				$scrolling.removeEventListener('click', clickHand);
			}
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
})

