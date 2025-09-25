document.addEventListener("DOMContentLoaded", function () {
  const exercice1 = document.querySelector("#exercice-1");
  const exercice2 = document.querySelector("#exercice-2");
  const exercice3 = document.querySelector("#exercice-3");

  if (exercice1) {
    document.querySelectorAll(".broccoli").forEach((el) => el.remove());
  }

  if (exercice2) {
    document.querySelector("#pizza-to-cook").classList.add("cooked");
    document.querySelector(".burned").classList.remove("burned");
    document.querySelector("#pizza-special").classList.toggle("highlighted");
    document.querySelector(".basic").classList.add("premium", "deluxe");
    document.querySelector(".reheated").classList.remove("cold");
    document.querySelector(".reheated").classList.add("hot");
  }

  if (exercice3) {
    const myElement = document.querySelector("#exercice-3-1");
    const btn = document.querySelector("#exercice-3-1");

    btn.addEventListener("click", function () {
      myElement.classList.add("highlight");
    });

    const card2 = document.querySelector("#exercice-3-2");
    const btn2 = card2.querySelector("button");

    btn2.addEventListener("click", function () {
      card2.classList.toggle("highlight");
    });

    const card3 = document.querySelector("#exercice-3-3");

    card3.addEventListener("mouseenter", function () {
      card3.classList.add("highlight");
    });

    card3.addEventListener("mouseleave", function () {
      card3.classList.remove("highlight");
    });

    const card4 = document.querySelector("#exercice-3-4");

    document.addEventListener("mousemove", function () {
      card4.classList.add("highlight");
    });
    const card5 = document.querySelector("#exercice-3-5");

    document.addEventListener("scroll", function () {
      card5.classList.add("highlight");
    });
    const card6 = document.querySelector("#exercice-3-6");

    document.addEventListener("keydown", function () {
      card6.classList.add("highlight");
    });
    const card7 = document.querySelector("#exercice-3-7");

    window.addEventListener("resize", function () {
      card7.classList.add("highlight");
    });
  }
});
