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

let imgSource = [brbaIMg, darkImg, gotImg, trueDetectiveImg, daredevilImg];


