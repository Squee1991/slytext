const $pagePaths = document.querySelectorAll('js-auth-btns')
const $inputEmail = document.querySelector('sing_input_email')
const $inputPassword = document.querySelector('sing_input_password')
const $form = document.querySelector('sing__in-btn')

$pagePaths.forEach(btnItem => {
	btnItem.addEventListener('click' , function (event) {
      event.preventDefault()
		location.href = btnItem.getAttribute('href')
	})
})


function emailFoo() {

}


function passwordFoo() {

}
