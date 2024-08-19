let hamburger=document.querySelector('.hamburger');

let navitems=document.querySelectorAll(".navbar-items");

let overlay=document.querySelector(".overlay");


hamburger.addEventListener("click", function() {
    overlay.classList.toggle('overlay');
});

const navItems = document.querySelectorAll(".nav-item");

navitems.forEach((item)=>{
    item.addEventListener("click",()=>{
        overlay.classList.toggle('overlay');
    });
});
