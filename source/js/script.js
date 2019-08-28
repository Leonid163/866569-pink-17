var header = document.querySelector(".main-header");
var nav = header.querySelector(".main-nav");
var open = header.querySelector(".main-header__button--open");
var close = header.querySelector(".main-header__button--close");

header.classList.add("main-header--nav-hidden");
nav.classList.remove("main-nav--display");
open.classList.remove("main-header__button--nav-hidden");

open.addEventListener("click", function() {
  if (header.classList.contains("main-header--nav-hidden")) {
    header.classList.remove("main-header--nav-hidden");
    nav.classList.add("main-nav--display");
    open.classList.add("main-header__button--nav-hidden");
    close.classList.remove("main-header__button--nav-hidden");
  }
})

close.addEventListener("click", function() {
  if (nav.classList.contains("main-nav--display")) {
    header.classList.add("main-header--nav-hidden");
    nav.classList.remove("main-nav--display");
    open.classList.remove("main-header__button--nav-hidden");
    close.classList.add("main-header__button--nav-hidden");
  }
})
