const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

// || CARA PERTAMA
// menuToggle.addEventListener('click', function (){
//     nav.classList.toggle('slide');
// });

// // || CARA KEDUA
// menuToggle.addEventListener('click',  () => {
//     // menuToggle.classList.toggle('active');
//     nav.classList.toggle('slide');
// });

// menuToggle.addEventListener("click", function() {
//     nav.classList.toggle('slide')
// })

menuToggle.addEventListener('click', gobi);

function gobi() {
    nav.classList.toggle('slide')
}