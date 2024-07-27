// Selecting DOM elements
const select = (item) => document.querySelector(item);

const BODY = document.body;
const OVERLAY = select(".overlay");
const MOBILE_NAV_WRAPPER = select(".mobile-nav");
const FEATURES_DOWN_ARROW = select(".features-arrow-down");
const FEATURES_UP_ARROW = select(".features-arrow-up");
const COMPANY_DOWN_ARROW = select(".company-arrow-down");
const COMPANY_UP_ARROW = select(".company-arrow-up");
const OPEN_MENU_BTN = select(".open_menu_btn");
const CLOSE_MENU_BTN = select(".close_menu_btn");
const FEATURES_LINK = select(".features_link");
const COMPANY_LINK = select(".company_link");
const MOBILE_FEATURES_DROPDOWN = select(".mobile-features-dropdown");
const MOBILE_COMPANY_DROPDOWN = select(".mobile-company-dropdown");

// Hiding the overlay and the side menu
const closeMenu = () => {
  OVERLAY.classList.add("hidden");
  MOBILE_NAV_WRAPPER.classList.add("hidden");
  BODY.style.overflow = "auto";
};

// Toggling the nav dropdowns when clicking on it
// (Showing different arrows if menu is down or up)
// I made the function reusable
const toggleDropDownMenu = (link, downArrow, upArrow, dropDown) => {
  let isOpen = false; // By default, dropdown menu is up (closed)

  link.addEventListener("click", () => {
    isOpen = !isOpen; // If open = closed, if closed = open
    downArrow.classList.toggle("hidden", isOpen);
    upArrow.classList.toggle("hidden", !isOpen);
    dropDown.classList.toggle("hidden", !isOpen);
  });
};

// Showing the right side navigation when clicking on the hamburger
OPEN_MENU_BTN.addEventListener("click", () => {
  BODY.style.overflow = "hidden";
  OVERLAY.classList.remove("hidden");
  MOBILE_NAV_WRAPPER.classList.remove("hidden");
});

// Using the closeMenu() function that hides the side menu & the overlay
// I think closing a menu when clicking anywhere out of it is good user experience
CLOSE_MENU_BTN.addEventListener("click", closeMenu);
OVERLAY.addEventListener("click", closeMenu);

// Defining the dropdown menus to toggle with the DOM elements we selected
toggleDropDownMenu(
  FEATURES_LINK,
  FEATURES_DOWN_ARROW,
  FEATURES_UP_ARROW,
  MOBILE_FEATURES_DROPDOWN
);

toggleDropDownMenu(
  COMPANY_LINK,
  COMPANY_DOWN_ARROW,
  COMPANY_UP_ARROW,
  MOBILE_COMPANY_DROPDOWN
);
