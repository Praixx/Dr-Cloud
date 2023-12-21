const menuHmaburger = document.querySelector(".hamburger-menu");
const menuNav = document.querySelector(".header-body header nav")

menuHmaburger.addEventListener("click", menuAnimation);

function menuAnimation(event) {
    event.preventDefault();

    // if (menuNav.style.right === "0px") { 
    //     menuNav.style.right = "-300px";
    //     menuNav.style.display = "none"
        
    // } else {
    //     //menuNav.style.display = "block"
    //     menuNav.style.right = "0px"; 
        
    // }

    if(menuNav.style.display === "none"){
        menuNav.style.display = "block"
    }else{
        menuNav.style.display = "none"
    }
}