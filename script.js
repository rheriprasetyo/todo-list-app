"use strict";

// done task

let lists = document.querySelectorAll(".list-item");
let circles = document.querySelectorAll(".fa-circle");

Array.from(lists).forEach((list) => {
  list.addEventListener("click", () => {
    console.log("list");
    list.classList.add("done");
  });
});

Array.from(circles).forEach((circle) => {
  circle.addEventListener("click", () => {
    console.log("circle");
    circle.classList.remove("fa-regular");
    circle.classList.add("fa-solid", "fa-circle-check");
  });
});
