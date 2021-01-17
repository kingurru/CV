let head = document.head
console.log(head)

let link = head.querySelector('link')
let myPhoto = document.querySelector('.user-image img')
let headerButton = document.querySelectorAll('.header-button')
console.log(myPhoto)

headerButton[0].addEventListener('click', function (evt) {
    evt.preventDefault()
    if (link.getAttribute('href') === 'style.css') {
        myPhoto.setAttribute('src', './img/photo-dark.jpeg')
        link.setAttribute('href', 'style-dark.css')
    } else {
        link.setAttribute('href', 'style.css')
        myPhoto.setAttribute('src', './img/photo.jpeg')
    }
})
