// Reference documentation:
// https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
// https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style

// Shows nav element by clicking on element with menu-open class
var menuOpen = document.querySelector(".menu-open");
menuOpen.addEventListener("click", function(event) {
    document.querySelector("nav").classList.add("nav-open");
    document.querySelector(".menu-open").style.display = "none";
    document.querySelector(".menu-close").style.display = "block";
});

// Hides nav element by clicking on element with menu-close class
var menuOpen = document.querySelector(".menu-close");
menuOpen.addEventListener("click", function(event) {
    document.querySelector("nav").classList.remove("nav-open");
    document.querySelector(".menu-close").style.display = "none";
    document.querySelector(".menu-open").style.display = "block";
});
