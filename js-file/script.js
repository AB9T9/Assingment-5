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
//! working with calling coing ;
const coinText = document.getElementById("coin");
let coinCount = parseInt(coinText.innerText);
console.log(coinCount);
const callButton = document.getElementsByClassName("call-button");
for (const call of callButton) {
  call.addEventListener("click", function (e) {
    e.preventDefault();
    const serviceName =
      call.parentElement.parentElement.querySelector("h1").innerText;
    const serviceNumber =
      call.parentElement.parentElement.querySelector("h2").innerText;

    if (coinCount > 0) {
      coinCount = coinCount - 20;
      alert("Calling " + serviceName + serviceNumber);
      document.getElementById("coin").innerText = coinCount;
    } else {
      alert("You have no sufficient balance,Mininum 20 coin required for call");
    }

    console.log("i am click by call function ");
  });
}
