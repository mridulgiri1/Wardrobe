const slideImg = document.querySelectorAll(".slide-img");
const dots = document.querySelectorAll(".dot");

let activeSlide = 0;

function slide() {
  for (let img of slideImg) {
    // console.log(img);
    img.style.display = "none";
  }

  activeSlide++;
  if (activeSlide > slideImg.length) {
    activeSlide = 1;
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }

  slideImg[activeSlide - 1].style.display = "block";
  dots[activeSlide - 1].classList.add("active");

  setTimeout(slide, 2000);
}

slide();

const clicked = () => {
  let dot1 = document.getElementById("dot1");
  let dot2 = document.getElementById("dot2");
  let dot3 = document.getElementById("dot3");

  dot1.addEventListener("click", () => {
    removeSlide();
    slideImg[0].style.display = "block";
    dot1.classList.add("active");

    activeSlide = 1;
  });

  dot2.addEventListener("click", () => {
    removeSlide();

    slideImg[1].style.display = "block";
    dot2.classList.add("active");

    activeSlide = 2;
  });

  dot3.addEventListener("click", () => {
    removeSlide();

    slideImg[2].style.display = "block";
    dot3.classList.add("active");

    activeSlide = 0;
  });
};

clicked();

const removeSlide = () => {
  slideImg[activeSlide - 1].style.display = "none";
  dots[activeSlide - 1].classList.remove("active");
};
