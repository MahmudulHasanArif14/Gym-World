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



// BMI Calculation Part
let form = document.querySelector("#bmiForm");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let height = document.querySelector("#height");
    let weight = document.querySelector("#Weight");
    let age = document.querySelector("#age");
    let gender = document.querySelector("#Gender");
    let activity = document.querySelector("#activity");
    let result = document.querySelector("#result");

    let heightval = parseFloat(height.value);
    let weightval = parseFloat(weight.value);
    let ageval = parseInt(age.value);
    let genderval = gender.value;
    let activityval = parseFloat(activity.value);

    if (heightval > 0 && weightval > 0 && !isNaN(ageval) && activityval > 0) {
        let bmi = weightval / (heightval * heightval);
        let bmr;
        if (genderval === 'Male') {
            bmr = 88.362 + (13.397 * weightval) + (4.799 * heightval * 100) - (5.677 * ageval);
        } else if (genderval === 'Female') {
            bmr = 447.593 + (9.247 * weightval) + (3.098 * heightval * 100) - (4.330 * ageval);
        } else {
            bmr = 0;
        }

        result.innerHTML = `Your BMI is ${bmi.toFixed(2)}<br>BMR is ${bmr.toFixed(2)}`;
    } else {
        result.innerHTML = "Please enter valid values for all fields.";
    }
});
