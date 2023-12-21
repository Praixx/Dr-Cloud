const menuHmaburger = document.querySelector(".hamburger-menu");
const menuNav = document.querySelector(".header-body header nav")

menuHmaburger.addEventListener("click", menuAnimation);

function menuAnimation(event) {
    event.preventDefault();

    if (menuNav.style.right === "0px") {
        // menuNav.style.display = "none" 
        menuNav.style.right = "-300px";
        
    } else {
        // menuNav.style.display = "block"
        menuNav.style.right = "0px"; 
        
    }
}