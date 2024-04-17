function webSite() {
  let hambugerMenu = document.querySelector("#collapsible");
  let contactCard = document.querySelector(".contact-card ");
  hambugerMenu.addEventListener("click", () => {
    contactCard.classList.toggle("collapsible-expander");
  });
}

webSite();
