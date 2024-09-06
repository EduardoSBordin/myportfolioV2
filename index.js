const menuIcon = document.querySelector("#menu-icon");
const navBar = document.querySelector(".navbar");

menuIcon.onclick = () => {

    menuIcon.classList.toggle('bx-x');
    navBar.classList.toggle('active');
};

function btnDarkMode(){
    document.querySelector(":root").classList.toggle('activeMode');
}
