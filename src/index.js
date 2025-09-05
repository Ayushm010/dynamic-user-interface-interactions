import "./style.css";

// Dropdown list

const dropdownElement = document.querySelector(".dropdown");

dropdownElement.addEventListener("click", () => {
  const dropdownMenu = document.querySelector(".dropdown-menu"); // Selects the dropdown menu the parent div for items

  if (dropdownMenu.classList.contains("menu-visible")) { // for toggling 
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
