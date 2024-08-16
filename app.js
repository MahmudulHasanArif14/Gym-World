
let hamburger=document.querySelector('.hamburger');

let navitems=document.querySelector(".navbar-items");

let overlay=document.querySelector(".overlay");

// hamburger.addEventListener('click', function () {
//     navitems.classList.toggle('active');

// });

hamburger.addEventListener("click", function() {
    overlay.classList.toggle('overlay');
});

const navItems = document.querySelectorAll(".nav-item");

navItems.forEach(item => {
    item.addEventListener("click", function() {
        document.getElementById("overlay").style.display = "none";
    });
});
