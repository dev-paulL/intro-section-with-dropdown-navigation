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

CLOSE_MENU_BTN.addEventListener("click", closeMenu);

OVERLAY.addEventListener("click", closeMenu);

const toggleDropDownMenu = (link, downArrow, upArrow, dropDown) => {
  let isOpen = true;

  link.addEventListener("click", () => {
    downArrow.classList.toggle("hidden", isOpen);
    upArrow.classList.toggle("hidden", !isOpen);
    dropDown.classList.toggle("hidden", !isOpen);
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
