var section = document.querySelectorAll("section");
var sections = {};
var i = 0;

Array.prototype.forEach.call(section, function (e) {
    sections[e.id] = e.offsetTop;
});

window.onscroll = function () {
    var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
    for (i in sections) {
        if (sections[i] <= scrollPosition) {
            document.querySelector(".pagination__button.-active").classList.remove("-active");
            document.querySelector(`.pagination__button[href*="${i}"]`).classList.add("-active");
        }
    }
};
