document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("nav ul li").forEach(item => {
        item.addEventListener("click", function () {
            let targetId = this.getAttribute("data-target");
            let targetSection = document.getElementById(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: "smooth"
                });
            }
        });
    });
});

let footer = document.querySelector("footer")
let article = document.querySelector("article")
// // let header = document.querySelector("header")
let main = document.querySelector("body main")
let navbut = document.querySelector("header nav ul .text img")

article.classList.toggle("hidden")

navbut.addEventListener("click", () => {
    footer.classList.toggle("back")
    main.classList.toggle("back")
    article.classList.toggle("hidden")
})