const wrapperNavbar = document.querySelector(".wrapper__navbar");
const buttonPortableWrapper = document.getElementById("show__portfable__id");
const faplus = document.querySelector(".fa-plus");
const linkNavbar = document.querySelectorAll(".wrapper__navbar__a");

buttonPortableWrapper.addEventListener("click", function () {
  wrapperNavbar.classList.toggle("full__nav");
  faplus.classList.toggle("rotate");
  document.body.classList.toggle("hiddenOverflow");
  linkNavbar.forEach(function (element) {
    element.classList.toggle("show__link");
  });
});

/* ACTIVE CLASS */
document.addEventListener("scroll", function () {
  const sections = document.querySelectorAll(".section");
  const navLinks = document.querySelectorAll(".wrapper__navbar__a");

  const observerOptions = {
    root: null, // use the viewport as the container
    rootMargin: "0px",
    threshold: 0.3, // trigger when 50% of the section is visible
  };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Remove 'active' class from all nav links
        navLinks.forEach((link) => link.classList.remove("active__link"));

        // Add 'active' class to the corresponding nav link
        const id = entry.target.id;
        document
          .querySelector(`nav a[href="#${id}"]`)
          .classList.add("active__link");
      }
    });
  }, observerOptions);

  sections.forEach((section) => {
    observer.observe(section);
  });
});

//CONTACT
let contactSend = document.querySelector(".sendContact");

contactSend.addEventListener("click", function () {
  let valueName = document.querySelector("#name").value;
  let valueEmail = document.querySelector("#email").value;
  let valueSujet = document.querySelector("#sujet").value;
  let valueText = document.querySelector("#message").value;
  alert(`Hi ${valueName}, your message is on his way!`);
});
