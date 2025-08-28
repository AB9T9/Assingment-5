console.log("hello world ! ");
//! working for nav bar

//! working heart
const heartText = document.getElementById("heart");
let heartCount = 0;
const heartButton = document.getElementsByClassName("heart-card");
for (const heart of heartButton) {
  heart.addEventListener("click", function () {
    heartCount++;
    heartText.innerText = heartCount;
  });
}
