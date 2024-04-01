// const $inputEmail = document.querySelector('sing_input_email')
// const $inputPassword = document.querySelector('sing_input_password')
// const $form = document.querySelector('sing__in-btn')
//
//
// const $pagePaths = document.querySelectorAll('js-auth-btns')
// $pagePaths.forEach(btnItem => {
// 	btnItem.addEventListener('click', function (event) {
// 		event.preventDefault()
// 		location.href = btnItem.getAttribute('href')
// 	})
// })

class Paths {
	constructor(DomElement) {
		this.btn = document.querySelectorAll(DomElement)
		this.Event()
	}

	Event() {
		this.btn.forEach(item => {
			item.addEventListener('click', this.ClickBtn(PathsBtns))
			location.href = item.getAttribute('href')
		})
	}

	ClickBtn(event) {
		event.preventDefault()
	}
}

let PathsBtns = new Paths('js-auth-btns')


function emailFoo() {

}


function passwordFoo() {

}




