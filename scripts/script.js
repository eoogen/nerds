var link = document.querySelector('.button-contacts');
var popup = document.querySelector('.modal-contact');
var close = popup.querySelector('.modal-close');
var login = popup.querySelector('[id=name-form]');
var form = popup.querySelector('form');

link.addEventListener('click', function (evt) {
    evt.preventDefault();
    popup.classList.add('modal-show');
    login.focus();
});

close.addEventListener('click', function (evt) {
    evt.preventDefault();
    popup.classList.remove('modal-show');
});

window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
        if (popup.classList.contains('modal-show')) {
            popup.classList.remove('modal-show');
        }
    }
});
