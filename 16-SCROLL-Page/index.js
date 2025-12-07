const buttonTopScroll = document.querySelector(".scroll-top");
const buttonBottomScroll = document.querySelector(".scroll-bottom");
const buttonTop = document.querySelector(".top");

let scrollInterval = null;

const startAutoScrollDown = () => {
  scrollInterval = setInterval(() => {
    window.scrollBy({
      top: 80,
      behavior: "smooth"
    });
  }, 100)
};

const startAutoScrollBottom = () => {
  scrollInterval = setInterval(() => {
    window.scrollBy({
      top: -80,
      behavior: "smooth"
    });
  }, 100)
};

function stopAutoScroll() {
  clearInterval(scrollInterval);
}


buttonBottomScroll.addEventListener("click", () => {
  window.scrollBy({
    top: 80,
    behavior: "smooth"
  });
});

buttonBottomScroll.addEventListener("mousedown", () => {
  startAutoScrollDown();
});

buttonBottomScroll.addEventListener("mouseup", () => {
  stopAutoScroll();
});

buttonBottomScroll.addEventListener("mouseleave", () => {
  stopAutoScroll();
})

// Events Down

buttonTopScroll.addEventListener("click", () => {
  window.scrollBy({
    top: -80,
    behavior: "smooth"
  });
});


buttonTopScroll.addEventListener("mousedown", () => {
  startAutoScrollBottom();
});

buttonTopScroll.addEventListener("mouseup", () => {
  stopAutoScroll();
});

buttonTopScroll.addEventListener("mouseleave", () => {
  stopAutoScroll();
})

//Event All Top

buttonTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
