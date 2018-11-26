// Reference documentation:
// https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
// https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
// https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
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

// Minimal form validation
var form = document.querySelector("form");
var email = document.querySelector("form input[type='email']");
form.addEventListener("submit", function(event) {
    if(!isEmailValid(email.value)) {
        event.preventDefault();
        document.querySelector(".form-email-error").style.display = "block";
    }
});

email.addEventListener("input", function(event) {
    if(isEmailValid(email.value)) {
        document.querySelector(".form-email-error").style.display = "none";
    }
});

// instead of this custom function you can use the default browser validation
// https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Form_validation
function isEmailValid(email) {
    var emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
    if(email.length > 0 && emailRegExp.test(email)) {
        return true;
    }
    return false;
}
