const BODY = document.body;
const OVERLAY = document.querySelector(".overlay");
const MOBILE_NAV_WRAPPER = document.querySelector(".mobile-nav-wrapper");
const FEATURES_DOWN_ARROW = document.querySelector(".features-arrow-down");
const FEATURES_UP_ARROW = document.querySelector(".features-arrow-up");
const COMPANY_DOWN_ARROW = document.querySelector(".company-arrow-down");
const COMPANY_UP_ARROW = document.querySelector(".company-arrow-up");
const OPEN_MENU_BTN = document.querySelector(".open_menu_btn");
const CLOSE_MENU_BTN = document.querySelector(".close_menu_btn");
const FEATURES_LINK = document.querySelector(".features_link");
const COMPANY_LINK = document.querySelector(".company_link");

const DESKTOP_FEATURES_LINK = document.querySelector(".desktop-features_link");
const DESKTOP_COMPANY_LINK = document.querySelector(".desktop-company_link");
const MOBILE_FEATURES_DROPDOWN = document.querySelector(
  ".mobile-features-dropdown"
);
const MOBILE_COMPANY_DROPDOWN = document.querySelector(
  ".mobile-company-dropdown"
);

const DESKTOP_NAV = document.querySelector(".desktop_nav");
const DESKTOP_FEATURES_DROPDOWN = document.querySelector(
  ".desktop-features-dropdown"
);
const DESKTOP_COMPANY_DROPDOWN = document.querySelector(
  ".desktop-company-dropdown"
);

OPEN_MENU_BTN.addEventListener("click", () => {
  console.log("Btn clicked OPEN MENU");
  BODY.style.overflow = "hidden";
  OVERLAY.classList.remove("hidden");
  MOBILE_NAV_WRAPPER.classList.remove("hidden");
});

CLOSE_MENU_BTN.addEventListener("click", () => {
  console.log("Btn clicked CLOSE MENU");
  BODY.style.overflow = "auto";
  OVERLAY.classList.add("hidden");
  MOBILE_NAV_WRAPPER.classList.add("hidden");
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

toggleDropDownMenu(
  DESKTOP_FEATURES_LINK,
  FEATURES_DOWN_ARROW,
  FEATURES_UP_ARROW,
  DESKTOP_FEATURES_DROPDOWN
);

toggleDropDownMenu(
  DESKTOP_COMPANY_LINK,
  COMPANY_DOWN_ARROW,
  COMPANY_UP_ARROW,
  DESKTOP_COMPANY_DROPDOWN
);
