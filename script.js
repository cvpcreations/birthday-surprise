/* =========================================
   BIRTHDAY SURPRISE — INTERACTIONS
   ========================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* -----------------------------------------
     ALWAYS START PAGE AT TOP
     ----------------------------------------- */

  if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }

  window.scrollTo(0, 0);


  /* -----------------------------------------
     DISCOVER BUTTON → VIDEO
     ----------------------------------------- */

  const scrollButton = document.querySelector(".scroll-button");
  const videoSection = document.querySelector(".video-section");

  if (scrollButton && videoSection) {

    scrollButton.addEventListener("click", (event) => {

      event.preventDefault();
      event.stopPropagation();

      videoSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

      scrollButton.blur();

    }, true);

  }


  /* -----------------------------------------
     MESSAGE REVEAL
     ----------------------------------------- */

  const messageCard = document.querySelector(".message-card");

  if (messageCard) {

    const revealObserver = new IntersectionObserver(
      (entries) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {

            entry.target.classList.add("visible");

            revealObserver.unobserve(entry.target);

          }

        });

      },
      {
        threshold: 0.2
      }
    );

    revealObserver.observe(messageCard);

  }


  /* -----------------------------------------
     SUBTLE PARALLAX AMBIENT LIGHT
     ----------------------------------------- */

  const ambientOne = document.querySelector(".ambient-one");
  const ambientTwo = document.querySelector(".ambient-two");

  if (
    ambientOne &&
    ambientTwo &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {

    let ticking = false;

    window.addEventListener(
      "scroll",
      () => {

        if (!ticking) {

          window.requestAnimationFrame(() => {

            const scrollY = window.scrollY;

            ambientOne.style.transform =
              `translate3d(0, ${scrollY * 0.08}px, 0)`;

            ambientTwo.style.transform =
              `translate3d(0, ${scrollY * -0.05}px, 0)`;

            ticking = false;

          });

          ticking = true;

        }

      },
      { passive: true }
    );

  }

});
