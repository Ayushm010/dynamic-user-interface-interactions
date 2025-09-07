import "./style.css";

// Dropdown Menu

const dropdownElement = document.querySelector(".dropdown-text");

dropdownElement.addEventListener("click", () => {
  const dropdownMenu = document.querySelector(".dropdown-menu"); // Selects the dropdown menu the parent div for items

  if (dropdownMenu.classList.contains("menu-visible")) {
    // for toggling
    console.log("here");
    dropdownMenu.classList.remove("menu-visible");

    const dropdownItemsList = document.querySelectorAll(".dropdown-items");
    dropdownItemsList.forEach((item) => {
      if (item.classList.contains("item-visible")) {
        item.classList.remove("item-visible");
      }
    });
  } else {
    dropdownMenu.classList.add("menu-visible");
    console.log(dropdownMenu);

    const dropdownItemsList = document.querySelectorAll(".dropdown-items");
    dropdownItemsList.forEach((item) => {
      item.classList.add("item-visible");
    });
  }
});

// Image Carousel

import brbaIMg from "./img/BrBa.jpeg";
import darkImg from "./img/Dark.jpeg";
import gotImg from "./img/Got.jpeg";
import trueDetectiveImg from "./img/TrueDetective.jpeg";
import daredevilImg from "./img/Daredevil.jpeg";

const images = [brbaIMg, darkImg, gotImg, trueDetectiveImg, daredevilImg];

let currentIndex = 0;

const frame = document.querySelector(".frame");

function showImage() {
  frame.innerHTML = "";
  const img = document.createElement("img");
  img.src = images[currentIndex];
  img.classList.add("slideImage");
  frame.appendChild(img);
}

showImage();

document.querySelector(".next").addEventListener("click", () => {
  currentIndex += 1;
  if (currentIndex === 5) currentIndex = 0;
  showImage();
});

document.querySelector(".previous").addEventListener("click", () => {
  currentIndex -= 1;
  if (currentIndex === -1) currentIndex = 4;
  showImage();
});

setInterval(() => {
  currentIndex++;
  if (currentIndex === images.length) currentIndex = 0;
  showImage();
}, 5000);

// Navigation dots

document.querySelector(".nav-dots").addEventListener("click",(event)=>{
  const dot = event.target;
  console.log(dot);
  currentIndex = Number(dot.id);
  showImage();
})