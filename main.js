const BODY = document.body;
const OVERLAY = document.querySelector(".overlay");
const MOBILE_NAV_WRAPPER = document.querySelector(".mobile-nav");
const FEATURES_DOWN_ARROW = document.querySelector(".features-arrow-down");
const FEATURES_UP_ARROW = document.querySelector(".features-arrow-up");
const COMPANY_DOWN_ARROW = document.querySelector(".company-arrow-down");
const COMPANY_UP_ARROW = document.querySelector(".company-arrow-up");
const OPEN_MENU_BTN = document.querySelector(".open_menu_btn");
const CLOSE_MENU_BTN = document.querySelector(".close_menu_btn");
const FEATURES_LINK = document.querySelector(".features_link");
const COMPANY_LINK = document.querySelector(".company_link");
const MOBILE_FEATURES_DROPDOWN = document.querySelector(
  ".mobile-features-dropdown"
);
const MOBILE_COMPANY_DROPDOWN = document.querySelector(
  ".mobile-company-dropdown"
);

const closeMenu = () => {
  BODY.style.overflow = "auto";
  OVERLAY.classList.add("hidden");
  MOBILE_NAV_WRAPPER.classList.add("hidden");
};

OPEN_MENU_BTN.addEventListener("click", () => {
  BODY.style.overflow = "hidden";
  OVERLAY.classList.remove("hidden");
  MOBILE_NAV_WRAPPER.classList.remove("hidden");
});

CLOSE_MENU_BTN.addEventListener("click", () => {
  closeMenu();
});

OVERLAY.addEventListener("click", () => {
  closeMenu();
});

const toggleDropDownMenu = (link, downArrow, upArrow, dropDown) => {
  let isOpen = false;
  link.addEventListener("click", () => {
    if (!isOpen) {
      downArrow.classList.add("hidden");
      upArrow.classList.remove("hidden");
      dropDown.classList.remove("hidden");
    } else {
      downArrow.classList.remove("hidden");
      upArrow.classList.add("hidden");
      dropDown.classList.add("hidden");
    }

    isOpen = !isOpen;
  });
};

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
