window.addEventListener("load", navShow);

function navShow() {
    console.log("navShow");
    document.querySelector(".burger").addEventListener("click", burgerClicked);
}
burgerClicked

function burgerClicked() {
    console.log("burgerClicked");
    document.querySelector(".burger_links").classList.toggle("nav-active");
    document.querySelector(".burger_links").classList.toggle("drop");
    document.querySelector("#burger_menu").classList.toggle("hidden");
}
