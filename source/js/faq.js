class FAQ {
	constructor(node , parent , rowText , verticalLine) {
		this.node = node
		this.node = document.querySelectorAll('.circle-el');
		this.parent = parent
		this.rowText = rowText
		this.verticalLine = verticalLine
		this.init()
	}
	init() {
		this.node.forEach(el => {
			el.addEventListener('click', () => {
				this.node = el; this.toggle()
			});
		});
	}
	toggle(height) {
		this.height = height
		this.parent = this.node.closest('.faq-row').querySelector('.parent');
		this.rowText = this.parent.querySelector('.js-row-text');
		this.verticalLine = this.node.querySelector('.vertical-line');
		this.parent.classList.toggle('active');
		if (this.parent.classList.contains('active')) {
			this.rowText.style.maxHeight = '';
			this.height = this.rowText.clientHeight;
			this.rowText.style.maxHeight = `${height}px`;
			this.verticalLine.classList.add('hide');
		} else {
			this.rowText.style.maxHeight = '0';
			this.verticalLine.classList.remove('hide');
		}
	}
}
const faq = new FAQ();


// function testFoo(count) {
// 	function innerFoo() {
// 		count ++
// 		console.log(count)
// 	}
// 	count = 2
// 	return innerFoo;
// }
// const result =  testFoo(0);
// const result2 =  testFoo(0)
//
// result()
// result2()
// result2()
// result2()



