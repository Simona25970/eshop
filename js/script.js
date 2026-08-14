// Efekt pro menu při scrollování - jemná spodní linka
window.addEventListener('scroll', function () {
     const menu = document.querySelector('.menu');

     if (window.scrollY > 10) {
          menu.classList.add('scrolled');
     } else {
          menu.classList.remove('scrolled');
     }
});