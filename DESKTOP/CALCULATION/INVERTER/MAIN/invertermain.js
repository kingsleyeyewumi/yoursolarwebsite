// Getting Total Watt Through Localstorage Start
let totalWattFromLoadValue = document.querySelector(".totalWattFromLoadValue");

totalWattFromLoadValue.innerHTML = localStorage.getItem("totalWatt");
// Getting Total Watt Through Localstorage End

// Getting Total Surge Through Localstorage Start
let totalSurgeFromLoadValue = document.querySelector(
  ".totalSurgeFromLoadValue "
);

totalSurgeFromLoadValue.innerHTML = localStorage.getItem("totalSurgeVal");
// Getting Total Surge Through Localstorage End

// Getting All Output Values Containers start
let actualInverterValue = document.querySelector(".actualInverterValue");
let adjustedInverterValue = document.querySelector(".adjustedInverterValue");
// Getting All Output Values Containers end

// All Input Fields Start Here
// Inverter Efficiency Start
let inverterEfficiency = document.querySelector("#inverterEfficiency");
let inverterEfficiencyHolder = document.querySelector(
  ".inverterEfficiencyHolder"
);

inverterEfficiency.addEventListener("click", () => {
  inverterEfficiencyHolder.style.border =
    "0.09rem solid rgba(50, 141, 142, 0.8)";
});
// Inverter Efficiency End

// Inverter Marginal Safety Start
let inverterMarginalSafety = document.querySelector("#inverterMarginalSafety");
let inverterMarginalSafetyHolder = document.querySelector(
  ".inverterMarginalSafetyHolder"
);

inverterMarginalSafety.addEventListener("click", () => {
  inverterMarginalSafetyHolder.style.border =
    "0.09rem solid rgba(50, 141, 142, 0.8)";
});
// Inverter Marginal Safety End
// All Input Fields Ends Here

// Calculation Part Start Here
function calculation() {
  // Actual Inverter Start
  let invertEffValue;

  if (inverterEfficiency.value < 1) {
    let invEffConv = inverterEfficiency.value * 100;

    let invEffConvSub = 100 - invEffConv;

    let invEffConvHolder =
      (totalWattFromLoadValue.innerHTML * invEffConvSub) / 100;

    invertEffValue =
      Number(totalWattFromLoadValue.innerHTML) + Number(invEffConvHolder);
  } else if (inverterEfficiency.value >= 1) {
    let invEffValSub = 100 - inverterEfficiency.value;

    let invEffConvHolder2 =
      (totalWattFromLoadValue.innerHTML * invEffValSub) / 100;

    invertEffValue =
      Number(totalWattFromLoadValue.innerHTML) + Number(invEffConvHolder2);
  }

  actualInverterValue.innerHTML = invertEffValue * inverterMarginalSafety.value;
  // Actual Inverter End

  // Adjusted Inverter Start
  adjustedInverterValue.innerHTML =
    Number(actualInverterValue.innerHTML) +
    Number(totalSurgeFromLoadValue.innerHTML);
  // Adjusted Inverter End
}

// Proceed Btn start
let proceedBtn = document.querySelector(".proceedBtn");
proceedBtn.addEventListener("click", calculation);
// Proceed Btn end
// Calculation Part Ends Here
