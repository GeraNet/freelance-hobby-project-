// анимация карточек
const cards = document.querySelectorAll(".price-card");

window.addEventListener("scroll", () => {
  cards.forEach(card => {
    const top = card.getBoundingClientRect().top;

    if (top < window.innerHeight - 50) {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }
  });
});

// анимация фото
const img = document.querySelector(".hero-image img");

window.addEventListener("load", () => {
  img.style.opacity = "0";
  img.style.transform = "translateY(30px)";

  setTimeout(() => {
    img.style.transition = "0.8s";
    img.style.opacity = "1";
    img.style.transform = "translateY(0)";
  }, 300);
});
