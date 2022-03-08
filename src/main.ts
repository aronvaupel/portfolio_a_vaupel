const aron = document.getElementById("aron") as HTMLElement;
const vaupel = document.getElementById("vaupel") as HTMLElement;
const flipCard = document.getElementById("flip-card") as HTMLElement;
const flipCardInner = document.getElementById("flip-card-inner") as HTMLElement;
const flipCardFront = document.getElementById("flip-card-front") as HTMLElement;
const flipCardBack = document.getElementById("flip-card-back") as HTMLElement;
const profilePicture = document.getElementById(
  "profile-picture"
) as HTMLElement;
const flipCardText = document.getElementById("flip-card-text") as HTMLElement;
const header = document.getElementById("header") as HTMLElement;

let state: number = 1;

function scroll(event: WheelEvent): void {
  if (state > 0 && event.deltaY < 0) {
    state -= 1;
  } else if (state < 20 && event.deltaY > 0) {
    state += 1;
  }

  const moveUp = `translateY(-${state <= 10 ? state * 5 : 50}vh)`;
  const moveDown = `translateY(${state <= 10 ? state * 5 : 50}vh)`;
  const slide = `translateX(calc(${state <= 5 ? state * 10 : 50}vw - 12.5vw))`;
  const roll = `rotateZ(${state <= 5 ? state * 72 : 360}deg)`;
  const grow = `${state <= 5 ? state * 10 : 50}vh`;
  const growText = `${state <= 5 ? state * 0.2 : 1}rem`;
  const headerAppear = `translateY(${state <= 14 ? 0 : 11}vh)`;
  const opacityIncrease = `${state <= 10 ? state / 10 : 1}`;
  const opacityDecrease = `${state <= 10 ? 1 - state / 10 : 0}`;

  aron.style.transform = moveUp;
  aron.style.opacity = opacityDecrease;
  vaupel.style.transform = moveDown;
  vaupel.style.opacity = opacityDecrease;
  flipCard.style.transform = slide;
  flipCardInner.style.transform = roll;
  flipCard.style.width = grow;
  flipCard.style.height = grow;
  flipCardInner.style.width = grow;
  flipCardInner.style.height = grow;
  flipCardFront.style.width = grow;
  flipCardFront.style.height = grow;
  flipCardBack.style.width = grow;
  flipCardBack.style.height = grow;
  profilePicture.style.width = grow;
  profilePicture.style.height = grow;
  flipCardText.style.fontSize = growText;
  header.style.transform = headerAppear;
  header.style.opacity = opacityIncrease;

  console.log(state);
}

function flipPic(): void {
  if (state >= 14) {
    flipCardInner.style.transform = "rotateY(180deg)";
  }
}

function flipOnHover(): void {
  if (state >= 14 && state < 20) {
    flipCard.addEventListener(
      "mouseenter",
      () => (flipCardInner.style.transform = "rotateY(360deg)")
    );
    flipCard.addEventListener(
      "mouseleave",
      () => (flipCardInner.style.transform = "rotateY(180deg)")
    );
  } else {
    flipCard.removeEventListener(
      "mouseenter",
      () => (flipCardInner.style.transform = "rotateY(180deg)")
    );
    flipCard.removeEventListener(
      "mouseleave",
      () => (flipCardInner.style.transform = "rotateY(360deg)")
    );
  }
}

window.addEventListener("wheel", scroll);
window.addEventListener("wheel", flipPic);
window.addEventListener("wheel", flipOnHover);
