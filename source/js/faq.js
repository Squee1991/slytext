document.addEventListener('DOMContentLoaded', function () {
	const circleElList = document.querySelectorAll('.circle-el');
	circleElList.forEach(circleEl => {
		circleEl.addEventListener('click', function () {
			const $parent = circleEl.closest('.faq-row').querySelector('.parent');
			const $rowText = $parent.querySelector('.js-row-text');
			const $verticalLine = circleEl.querySelector('.vertical-line');
			$parent.classList.toggle('active');
			if ($parent.classList.contains('active')) {
				$rowText.style.maxHeight = '';
				const height = $rowText.clientHeight;
				$rowText.style.maxHeight = `${height}px`;
				$verticalLine.classList.add('hide');
				console.log($parent.classList.contains('active'))

			} else {
				$rowText.style.maxHeight = '0';
				$verticalLine.classList.remove('hide');
			}
		});
	});
});


console.log('hello')
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



