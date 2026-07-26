function initAccordion() {
  const headers = document.querySelectorAll(".accordion-header");

  headers.forEach((header) => {
    header.addEventListener("click", () => {
      const panel = header.nextElementSibling;
      const isOpen = header.classList.contains("active");

      headers.forEach((h) => {
        h.classList.remove("active");
        h.nextElementSibling.style.maxHeight = null;
      });

      if (!isOpen) {
        header.classList.add("active");
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  });
}

function initSlider() {
  const slider = document.querySelector(".slider");
  if (!slider) return;

  const track = slider.querySelector(".slider-track");
  const slides = slider.querySelectorAll(".slide");
  const dotsWrap = slider.querySelector(".slider-dots");
  const prevBtn = slider.querySelector(".prev");
  const nextBtn = slider.querySelector(".next");

  let index = 0;

  slides.forEach((_, i) => {
    const dot = document.createElement("span");
    dot.className = "dot" + (i === 0 ? " active" : "");
    dot.addEventListener("click", () => goToSlide(i));
    dotsWrap.appendChild(dot);
  });
  const dots = dotsWrap.querySelectorAll(".dot");

  function goToSlide(n) {

    index = (n + slides.length) % slides.length;
    track.style.transform = `translateX(-${index * 100}%)`;

    dots.forEach((dot, i) => dot.classList.toggle("active", i === index));
  }

  prevBtn.addEventListener("click", () => goToSlide(index - 1));
  nextBtn.addEventListener("click", () => goToSlide(index + 1));
}

document.addEventListener("DOMContentLoaded", () => {
  initAccordion();
  initSlider();
});