let div = document.querySelector(".play")
let btn = document.querySelector(".btn")
let remove = document.querySelector(".remove")

function  up() {
    div.style.display = "block";

    btn.onclick = function () {
        btn.parentElement.remove()
    }
}

let start = setTimeout(up, 5000);

let bt = document.querySelector(".up");

window.onscroll = function () {
    if (window.scrollY >= 200) {
        bt.style.display = "block"
    } else {
        bt.style.display = "none"
    }
}

bt.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}