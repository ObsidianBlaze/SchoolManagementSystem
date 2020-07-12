const nav = document.getElementById("nav");
const logo = document.getElementById("brand");
const links = document.getElementById("links");
const body = document.getElementById("body");
const land = document.getElementById("land");
const feature_1 = document.getElementById("feature-1")
const feature_2 = document.getElementById("feature-2")
const mobile = document.getElementById("mobile")
let landing_img = document.getElementById("land-img");
let app = document.getElementById("app");
const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");
const formContainer = document.getElementById("form-container");
const icon = document.getElementById("icon")
let toggleImg = true;

function changeImg() {
    if (toggleImg == true) {
        landing_img.setAttribute("src", "img/work.png")
        app.setAttribute("src", "img/mobile.png");
    } else {
        landing_img.setAttribute("src", "img/work-4997565_1280.png");
        app.setAttribute("src", "img/Cyber Guardian.jpg")
    }
    toggleImg = !toggleImg;
}

function changeIcon() {
    if (toggleImg == true) {
        icon.setAttribute("src", "img/gicon.png")
    } else {
        icon.setAttribute("src", "img/icons8-google-64.png");
    }
    toggleImg = !toggleImg;
}

const changeTheme = () => {
    changeImg();
    nav.classList.toggle("dark-mode");
    body.classList.toggle("dark-body");
    logo.classList.toggle("cal");
    links.classList.toggle("link-items");
    land.classList.toggle("dark-mode");
    feature_1.classList.toggle("dark-mode")
    feature_2.classList.toggle("dark-mode")
    mobile.classList.toggle("dark-mode")

}

const changeConfirmPageTheme = () => {
    body.classList.toggle("dark-body");
    box1.classList.toggle("dark-mode");
    box2.classList.toggle("dark-mode")

}

const changeTutorPageTheme = () => {
    body.classList.toggle("dark-body");
    formContainer.classList.toggle("dark-mode")
    changeIcon()

}


const team = document.getElementsByClassName("team-mate");
if (window.innerWidth <= 480) {
    for (i = 0; i < team.length; i++) {
        team[i].setAttribute("data-aos", "fade-up")
    }
}