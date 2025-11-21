const statusText = document.getElementById("status-text");
const changeBtn = document.getElementById("change-btn");
const voltageInput = document.getElementById("voltage-input");
const calcBtn = document.getElementById("calc-btn");
const resultText = document.getElementById("result-text");

// Obično dugme za promenu teksta
changeBtn.addEventListener("click", () => {
  statusText.textContent =
    "Bravo! Ovo je tvoj prvi public mirror test na GitHub-u.";
});

// Jako uprošćena logika "stanja baterije" samo da imamo malo 'BMS šmeka'
calcBtn.addEventListener("click", () => {
  const v = parseFloat(voltageInput.value);

  if (isNaN(v)) {
    resultText.textContent = "Unesi validan napon.";
    resultText.style.color = "#f97316";
    return;
  }

  let msg = "";
  let color = "#22c55e";

  if (v >= 12.7) {
    msg = "Baterija je (grubo) puna ili skoro puna.";
  } else if (v >= 12.2) {
    msg = "Baterija je negde na sredini kapaciteta.";
    color = "#eab308";
  } else if (v >= 11.8) {
    msg = "Baterija je prilično prazna, razmisli o punjenju.";
    color = "#f97316";
  } else {
    msg = "Baterija je skoro prazna! Hitno punjenje.";
    color = "#ef4444";
  }

  resultText.textContent = msg;
  resultText.style.color = color;
});
console.log("Git vežba – commit test.");
