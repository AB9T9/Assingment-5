const coinText = document.getElementById("coin");
let coinCount = parseInt(coinText.innerText);
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

const callButton = document.getElementsByClassName("call-button");
for (const call of callButton) {
  call.addEventListener("click", function (e) {
    e.preventDefault();
    const serviceName =
      call.parentElement.parentElement.querySelector("h1").innerText;
    const serviceNumber =
      call.parentElement.parentElement.querySelector("h2").innerText;
    const serviceCallTime = new Date().toLocaleTimeString();

    if (coinCount > 0) {
      coinCount = coinCount - 20;
      alert("Calling " + serviceName + serviceNumber);
      document.getElementById("coin").innerText = coinCount;
      // added into histoy
      const historyPart = document.getElementById("history-add");
      const div = document.createElement("div");
      div.innerHTML = `<div class="flex justify-between items-center p-3 mt-3">
              <div>
                <h1 class="font-semibold text-xl">${serviceName}</h1>
                <p class="text-[#5C5C5C]">${serviceNumber}</p>
              </div>
              <h1 class="text-[18px]">${serviceCallTime}</h1>
            </div>
    `;
      historyPart.appendChild(div);
    } else {
      alert("You have no sufficient balance,Mininum 20 coin required for call");
    }
  });
}
//! making history remove button

document.getElementById("clear").addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById("history-add").innerHTML = "";
});

// ! making copy button
let count = 0;
const copyBtn = document.getElementsByClassName("copy-button");
const copyText = document.getElementById("copy-text");
const copyCount = document.getElementById("copy-count");
for (const btn of copyBtn) {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    const serviceNumber =
      btn.parentElement.parentElement.querySelector("h2").innerText;
    navigator.clipboard.writeText(serviceNumber);
    alert("Number is copied : " + serviceNumber);

    count++;
    copyCount.innerText = count;
  });
}
