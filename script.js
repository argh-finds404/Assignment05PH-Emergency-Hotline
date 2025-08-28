
//? Heart Increase
const heartIcons = document.getElementsByClassName('heart'); 
const heartCount = document.getElementById('heart-count');

for (let i = 0; i < heartIcons.length; i++) {
  heartIcons[i].addEventListener('click', function(event) {
    event.preventDefault();

    let count = parseInt(heartCount.innerText) || 0;
    heartCount.innerText = count + 1;
  });
}



//? Call Button
 const coinEl = document.getElementById("coins-count");
 document.querySelectorAll(".call-btn").forEach((btn) => {
    btn.addEventListener("click", (event) => {
      event.preventDefault();

      // get current coins from DOM
      let coins = parseInt(coinEl.innerText);

      if (coins < 20) {
        alert("⚠️ Not enough coins to make a call!");
        return;
      }

      // find service info (name & number) from this card
      const card = btn.closest(".card");
      const serviceName = card.querySelector(".srvc-name").textContent.trim();
      const serviceNumber = card.querySelector(".srvc-num").textContent.trim();

      // show alert
      alert(`📞 Calling ${serviceName} Service at ${serviceNumber}...`);

      // deduct 20 coins and update DOM
      coins -= 20;
      coinEl.textContent = coins;
    });
  });




//? Copy
const copyNum=document.getElementById('copyCount');
document.querySelectorAll('.copy-btn').forEach((btn)=>{
btn.addEventListener('click',(event)=>{
    event.preventDefault();
    let copyCat=parseInt(copyNum.innerText);

    const cardCopy= btn.closest(".card");
    const serviceCopyNum = cardCopy.querySelector(".srvc-num").textContent.trim();

    alert(`Number is copied: ${serviceCopyNum}`);
    navigator.clipboard.writeText(serviceCopyNum);
    copyCat +=1;
    copyNum.textContent=copyCat;
})
});



