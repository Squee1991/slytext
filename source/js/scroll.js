class Scroll {
	constructor(node) {
		this.node = node;
		this.node = document.querySelector('.js-scroll__top');
		this.clickHand = this.clickHand.bind(this);
		this.scrolling = this.scrolling.bind(this);
		this.init();
	}
	scrolling() {
		if (window.pageYOffset > 2000 && window.innerWidth > 768) {
			if (!this.node.classList.contains('scrollUp')) {
				this.node.classList.add('scrollUp');
				this.node.addEventListener('click', this.clickHand);
			}
		} else {
			this.node.classList.remove('scrollUp');
			this.node.removeEventListener('click', this.clickHand);
		}
	}
	clickHand() {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
		this.node.classList.remove('scrollUp');
	}

	init() {
		document.addEventListener('scroll', this.scrolling);
	}
}
document.addEventListener('DOMContentLoaded', function () {
	const scrolling = new Scroll();
});



