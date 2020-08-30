// js from
let btn_login = document.querySelector('.menu_right_login > b');
let main_form = document.querySelector('.main_form');
let hide_pw = document.querySelector('.input_form > .hiddeneye');
let show_pw = document.querySelector('.showeye');
let input_pw = document.querySelector('#password');

show_pw.style.display = "none";
hide_pw.addEventListener('click', () => {
    input_pw.type = "text";
    show_pw.style.display = "block";
    hide_pw.style.display = "none";
})
show_pw.addEventListener('click', () => {
    input_pw.type = "password";
    show_pw.style.display = "none";
    hide_pw.style.display = "block";
})
btn_login.addEventListener('click', function () {
    main_form.style.opacity = 1;
    main_form.style.visibility = "visible";
})
main_form.addEventListener('click', function (e) {
    console.log(e);
    console.log(this);
    if (e.target === this) {
        main_form.style.opacity = 0;
        main_form.style.visibility = "hidden";
    }
})
$(document).keyup(function (e) {
    if (e.keyCode === 27) {
        main_form.style.opacity = 0;
        main_form.style.visibility = "hidden";
    }   // esc
});
// js from xxxxxxxxxxx
