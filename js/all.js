let dog = document.querySelector("#click");
let check = document.querySelector(".check");
let non = document.querySelector("#no")


dog.onclick = function () {
    check.style.display = "block"
    non.style.display = "block"
    dog.style.display = "none"
}

non.onclick = function () {
    check.style.display = "none"
    dog.style.display = "block"
    non.style.display = "none"
};


let lis = document.querySelectorAll("ul li");

if (window.localStorage.getItem("color")) {
  // If There Is Color In Local Storage
  // [1] Add Color To Div
  document.body.style.backgroundColor = window.localStorage.getItem("color");
  // [2] Remove Active Class From All Lis
  lis.forEach((li) => {
    li.classList.remove("active");
  });
  // [3] Add Active Class To Current Color
  document.querySelector(`[data-color="${window.localStorage.getItem("color")}"]`)
}

lis.forEach((li) => {
  li.addEventListener("click", (e) => {
    // console.log(e.currentTarget.dataset.color);
    // Remove Active Class From all Lis
    lis.forEach((li) => {
      li.classList.remove("active");
    });
    // Add Active Class To Current Element
    e.currentTarget.classList.add("active");
    // Add Current Color To Local Storage
    window.localStorage.setItem("color", e.currentTarget.dataset.color);
    // Change Div Background Color
    document.body.style.backgroundColor = e.currentTarget.dataset.color;
  });
});