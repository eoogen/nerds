var link = document.querySelector(".button-contacts");
var popup = document.querySelector(".modal-contact");
var close = popup.querySelector(".modal-close");
var login = popup.querySelector("[id=name-form]");

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    login.focus();
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
});