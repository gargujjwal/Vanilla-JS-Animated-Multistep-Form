"use strict";

const formCounter = Array.from(document.querySelectorAll(".steps > li"));
const formSteps = Array.from(document.querySelectorAll("[data-step-number]"));

let currStep = formSteps.find(step => step.classList.contains("active")).getAttribute("data-step-number");

document.querySelectorAll(`.next`)
    .forEach(btn => btn.addEventListener("click", () => {
        formSteps[currStep].classList.toggle("slide-left");
        setTimeout(() => {
            formSteps[currStep].classList.toggle("slide-left");
            formSteps[currStep].classList.toggle("active");
            currStep = (currStep + 1) % 3;
            formSteps[currStep].classList.toggle("active");
            formCounter[currStep].classList.toggle("active");

        }, 600)
    }));

document.querySelectorAll(".prev")
    .forEach(btn => btn.addEventListener("click", () => {
        formSteps[currStep].classList.toggle("slide-right");
        setTimeout(() => {
            formSteps[currStep].classList.toggle("slide-right");
            formSteps[currStep].classList.toggle("active");
            formCounter[currStep].classList.toggle("active");

            currStep = (currStep - 1) % 3;

            formSteps[currStep].classList.toggle("active");
        }, 600);
    }));

