$(document).ready(
    function () {
      let header = document.querySelector('.header'),
        hamburger = document.querySelector('.hamburger');

      hamburger.addEventListener('click', function (event) {
        header.classList.toggle('active');
      });
    }
 );




