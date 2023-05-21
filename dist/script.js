"use strict";var navbar=document.querySelector(".navbar"),overlay=document.querySelector(".overlay"),navbarBtn=document.querySelector("#hamburger"),navbarLinks=document.querySelectorAll(".navbar__item"),bookmarkBtn=document.querySelector("#bookmark");function navbarBtnClick(){navbar.classList.contains("open")?closeMenu():openMenu()}function closeMenu(){navbar.classList.remove("open"),navbarBtn.setAttribute("aria-expanded","true"),overlay.setAttribute("class","overlay overlay--hidden"),document.body.classList.remove("disable-scroll")}function openMenu(){navbar.classList.add("open"),navbarBtn.setAttribute("aria-expanded","false"),overlay.setAttribute("class","overlay overlay--modal"),document.body.classList.add("disable-scroll")}navbarBtn.addEventListener("click",navbarBtnClick),bookmarkBtn.addEventListener("click",bookmarkBtnClick),overlay.addEventListener("click",closeMenu),navbarLinks.forEach((function(e){e.addEventListener("click",closeMenu)}));var isBookmarked=!1;function bookmarkBtnClick(){isBookmarked=!isBookmarked,bookmarkBtn.setAttribute("data-bookmarked",isBookmarked)}
//# sourceMappingURL=script.js.map