// 保存された値があれば使い、なければ0
let points = parseInt(localStorage.getItem("points")) || 0;
let auto = parseInt(localStorage.getItem("auto")) || 0;

function earnPoints() {
  points++;
  updateDisplay();
  saveData();
}

function buyAuto() {
  if (points >= 10) {
    points -= 10;
    auto++;
    updateDisplay();
    saveData();
  }
}

function updateDisplay() {
  document.getElementById("points").innerText = points;
  document.getElementById("autoCount").innerText = auto;
}

function saveData() {
  localStorage.setItem("points", points);
  localStorage.setItem("auto", auto);
}

//reset Data
function resetData() {
    points = 0;
    auto = 0;
    saveData();         // localStorage もリセット
    updateDisplay();    // 即時反映
    playBambooEffect(); // 爆発！
  }

  function playBambooEffect() {
    const container = document.getElementById("bamboo-effect-container");
  
    for (let i = 0; i < 10; i++) {
      const bamboo = document.createElement("div");
      bamboo.classList.add("bamboo");
      bamboo.innerText = "🎍"; // 🥬 や 🐼 などに変えてもOK
      bamboo.style.left = Math.random() * 100 + "vw";
      bamboo.style.top = Math.random() * 20 + "vh";
      container.appendChild(bamboo);
  
      setTimeout(() => {
        bamboo.remove();
      }, 1000);
    }
  }
  
// 自動加算
setInterval(() => {
  points += auto;
  updateDisplay();
  saveData();
}, 1000);

// 初期表示
updateDisplay();
