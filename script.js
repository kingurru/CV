let head = document.head

let link = head.querySelector('link')
let myPhoto = document.querySelector('.user-image img')
let headerButton = document.querySelectorAll('.header-button')

headerButton[0].addEventListener('click', function (evt) {
    evt.preventDefault()
    if (link.getAttribute('href') === 'style.css') {
        myPhoto.setAttribute('src', './img/photo-dark.jpg')
        link.setAttribute('href', 'style-dark.css')
    } else {
        link.setAttribute('href', 'style.css')
        myPhoto.setAttribute('src', './img/photo.jpg')
    }
})
