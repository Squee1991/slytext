const $singInBtn = document.querySelector('js-btn-sing-in')
$singInBtn.addEventListener('click', function (event) {
	event.preventDefault()
	location.href = $singInBtn.getAttribute('href')
})


const $inputEmail = document.querySelector('sing_input_email')
const $inputPassword = document.querySelector('sing_input_password')
const $btn = document.querySelector('sing__in-btn')


$btn.addEventListener('submit' , function (event) {
    event.preventDefault()
})


function emailFoo() {

}


function passwordFoo() {

}