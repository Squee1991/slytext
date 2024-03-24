const $footerLinks = document.querySelectorAll('.js__footer-links')
$footerLinks.forEach(footerLink => {
	footerLink.addEventListener('click' , function (event) {
		event.preventDefault()
		location.href = footerLink.getAttribute('href')
	})
})