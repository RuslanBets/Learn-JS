import WOW from "wow.js/src/WOW";
new WOW().init();

let modal = document.querySelector('.modal-window'),
    btn = document.querySelector('button')
btn.onclick = function () {
    modal.classList.remove('animate__backOutDown')
    modal.classList.add('animate__backInDown')
    modal.style.display = 'block'
}
modal.onclick = function (){
    modal.classList.remove('animate__backInDown')
    modal.classList.add('animate__backOutDown')
}