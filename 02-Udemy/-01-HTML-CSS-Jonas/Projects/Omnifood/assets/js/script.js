///////////////////////////////////////////////////////////
// Set current year.
const yearEl = document.querySelector(".copyright-year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

///////////////////////////////////////////////////////////
// Make mobile navigation work.
const headerEl = document.querySelector(".header");
const mobileToggleEl = document.querySelector(".btn-mobile-nav");

mobileToggleEl.addEventListener("click", (e) => {
  headerEl.classList.toggle("nav-open");
});

///////////////////////////////////////////////////////////
// Smooth scrolling animation
const allLinks = document.querySelectorAll("a:link");
allLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const href = link.getAttribute("href");

    //  Scroll back to top
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile navigation
    if (link.classList.contains("main-nav-link"))
      headerEl.classList.toggle("nav-open");
  });
});

///////////////////////////////////////////////////////////
// Sticky Navigation
const sectionHeroEL = document.querySelector(".section-hero");
const obs = new IntersectionObserver(
  (entries) => {
    const entry = entries[0];
    if (!entry.isIntersecting) {
      document.body.classList.add("sticky");
    }

    if (entry.isIntersecting) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);

obs.observe(sectionHeroEL);

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();
