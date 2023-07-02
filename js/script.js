(function () {
  /* EVENT LISTENER ON MULTIPLE ELEMENTS */
  const addEventOnElements = function (elements, eventType, callback) {
    for (let i = 0, len = elements.length; i < len; i++) {
      elements[i].addEventListener(eventType, callback);
    }
  };

  /* HEADER */
  const header = document.querySelector("[data-header]");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
      header.classList.add("active");
    } else {
      header.classList.remove("active");
    }
  });

  /* NAVBAR */

  const navbar = document.querySelector("[data-navbar]");
  const navTogglers = document.querySelectorAll("[data-nav-toggler]");
  const overlay = document.querySelector("[data-overlay]");

  const toggleNavbar = function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("nav-active");
  };

  addEventOnElements(navTogglers, "click", toggleNavbar);

  /* FOOTER */
  const footerCopy = document.querySelector("[data-footer-copy]");
  const currentDate = new Date();
  footerCopy.textContent = `© ${currentDate.getFullYear()} Loopstudios. All rights reserved.`;
})();
