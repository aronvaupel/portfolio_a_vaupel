const aron = document.getElementById("image-container1");
const vaupel = document.getElementById("image-container2");

let state = 0;

function scroll(event) {
  if (state > 0 && event.deltaY < 0) {
    state -= 1;
  } else if (state < 10 && event.deltaY > 0) {
    state += 1;
  }
  console.log(state);
  aron.style.transform = `translateY(-${state * 5}vh)`;
  vaupel.style.transform = `translateY(${state * 5}vh)`;
}

window.addEventListener("wheel", scroll);
