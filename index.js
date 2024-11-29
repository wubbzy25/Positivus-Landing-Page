document.addEventListener("DOMContentLoaded", () => {
  const hamburger_menu = document.querySelector(".hamburger_menu");
  const hamburger_menu_item = document.querySelector(".hamburger_menu i");
  const dropdown_menu = document.querySelector(".dropdown_menu");
  const cards = document.querySelectorAll(".cards");

  // Menú hamburguesa
  hamburger_menu.addEventListener("click", function () {
    dropdown_menu.classList.toggle("open");
    let isOpen = dropdown_menu.classList.contains("open");
    hamburger_menu_item.classList = isOpen
      ? "fa-solid fa-xmark"
      : "fa-solid fa-bars";
  });

  // Acordeón
  cards.forEach((card) => {
    const iconContainer = card.querySelector("#icon-acordeon");
    const iconImage = card.querySelector("#icon_acordeon_img");
    const content = card.querySelector(".content");

    if (iconContainer && iconImage && content) {
      iconContainer.addEventListener("click", () => {
        const isOpen = card.classList.contains("open");

        // Cierra todas las tarjetas abiertas
        cards.forEach((otherCard) => {
          otherCard.classList.remove("open");
          const otherIconImage = otherCard.querySelector("#icon_acordeon_img");
          const otherContent = otherCard.querySelector(".content");
          if (otherIconImage && otherContent) {
            otherIconImage.src = "./assets/icons/accordeon-open.svg";
            otherContent.style.display = "none";
          }
        });

        // Abre o cierra la tarjeta actual
        if (!isOpen) {
          card.classList.add("open");
          iconImage.src = "./assets/icons/accordeon-close.svg";
          content.style.display = "block";
        } else {
          card.classList.remove("open");
          iconImage.src = "./assets/icons/accordeon-open.svg";
          content.style.display = "none";
        }
      });
    }
  });
});
