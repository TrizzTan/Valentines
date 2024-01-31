const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const jpg = document.querySelector(".jpg");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Thank You! \nI love you! 😘";
  jpg.src = "C4otf8WXAAE5ZMR.jpg";
  noBtn.remove();

  const rose = document.createElement("div");
  rose.className = "rose";
  wrapper.appendChild(rose);

  const leaf1 = document.createElement("div");
  leaf1.className = "leaf";
  wrapper.appendChild(leaf1);

  const leaf2 = document.createElement("div");
  leaf2.className = "leaf";
  wrapper.appendChild(leaf2);

  const stem = document.createElement("div");
  stem.className = "stem";
  wrapper.appendChild(stem);
  });


noBtn.addEventListener("click", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});
