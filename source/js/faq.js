const circleElList = document.querySelectorAll('.circle-el');
circleElList.forEach(circleEl => {
	circleEl.addEventListener('click', () => {
		const $parent = circleEl.closest('.faq-row').querySelector('.parent');
		const $rowText = $parent.querySelector('.row-text');
		const $verticalLine = circleEl.querySelector('.vertical-line');
		$parent.classList.toggle('active');
		if ($parent.classList.contains('active')) {
			$rowText.style.maxHeight = '1000px';
			const height = $rowText.clientHeight;
			$rowText.style.maxHeight = `${height}px`;
			$verticalLine.classList.add('active');
		} else {
			$rowText.style.maxHeight = '0' ;
			$verticalLine.classList.remove('active');
		}
	});
});



function testFoo(count) {
	function innerFoo() {
		count ++
		console.log(count)
	}
	count = 2
	return innerFoo;
}
const result =  testFoo(0);
const result2 =  testFoo(0)

result()
result2()
result2()
result2()


