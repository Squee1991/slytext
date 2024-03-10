const $singInBtn = document.querySelector('js-btn-sing-in')
$singInBtn.addEventListener('click', function (event) {
	event.preventDefault()
	location.href = $singInBtn.getAttribute('href')
})


