// Getting Actual Battery Capacity From Battery Audit Through Localstorage start
let actualBatteryCapAHValue = document.querySelector(
  ".actualBatteryCapAHValue"
);

actualBatteryCapAHValue.innerHTML = localStorage.getItem("actualBatteryCap");
// Getting Actual Battery Capacity From Battery Audit Through Localstorage end

// Getting Adjusted Battery Capacity From Battery Audit Through Localstorage start
let adjustedBatteryCapacityValue = document.querySelector(
  ".adjustedBatteryCapacityValue"
);

adjustedBatteryCapacityValue.innerHTML =
  localStorage.getItem("adjustedBatteryCap");
// Getting Adjusted Battery Capacity From Battery Audit Through Localstorage end

// Getting All Output Values HoContainers start
let sizeOfPanelRequiredBatteryAuditValue = document.querySelector(
  ".sizeOfPanelRequiredBatteryAuditValue"
);
let sizeOfPanelRequiredForAdjustedValue = document.querySelector(
  ".sizeOfPanelRequiredForAdjustedValue"
);
let noOfPanelRequiredBatteryValue = document.querySelector(
  ".noOfPanelRequiredBatteryValue"
);
let noOfPanelRequiredForAdjustedBatteryValue = document.querySelector(
  ".noOfPanelRequiredForAdjustedBatteryValue"
);
// Getting All Output Values HoContainers end

// All Input Fields Start Here
// Performance Ratio start
let performanceRatio = document.querySelector("#performanceRatio");
let performanceRatioHolder = document.querySelector(".performanceRatioHolder");

performanceRatio.addEventListener("click", () => {
  performanceRatioHolder.style.border = "0.09rem solid rgba(98, 21, 21, 0.8)";
});
// Performance Ratio end

// Performance Ratio start
let peakSunHour = document.querySelector("#peakSunHour");
let peakSunHourHolder = document.querySelector(".peakSunHourHolder");

peakSunHour.addEventListener("click", () => {
  peakSunHourHolder.style.border = "0.09rem solid rgba(98, 21, 21, 0.8)";
});
// Performance Ratio end

// Power Rating Of Solar Panel start
let powerRating = document.querySelector("#powerRating");
let powerRatingHolder = document.querySelector(".powerRatingHolder");

powerRating.addEventListener("click", () => {
  powerRatingHolder.style.border = "0.09rem solid rgba(98, 21, 21, 0.8)";
});
// Power Rating Of Solar Panel end

// Marginal Safety start
let marginalSafety = document.querySelector("#marginalSafety");
let marginalSafetyHolder = document.querySelector(".marginalSafetyHolder");

marginalSafety.addEventListener("click", () => {
  marginalSafetyHolder.style.border = "0.09rem solid rgba(98, 21, 21, 0.8)";
});
// Marginal Safety end

// Panel Size Choosen start
let panelSizeChoosen = document.querySelector("#panelSizeChoosen");
let panelSizeChoosenHolder = document.querySelector(".panelSizeChoosenHolder");

panelSizeChoosen.addEventListener("click", () => {
  panelSizeChoosenHolder.style.border = "0.09rem solid rgba(98, 21, 21, 0.8)";
});
// Panel Size Choosen end
// All Input Fields Ends Here

// Calculation Part Start Here

let totalPerf;
let totalPowerRate;

function calculation() {
  // Actual Battery Calculation Start
  if (performanceRatio.value < 1) {
    let performanceVal = 100 * performanceRatio.value;

    let performanceValHolder = 100 - performanceVal;

    let actualHolder =
      (actualBatteryCapAHValue.innerHTML * performanceValHolder) / 100;

    totalPerf =
      Number(actualBatteryCapAHValue.innerHTML) + Number(actualHolder);
  } else if (performanceRatio.value >= 1) {
    let actualValHold = 100 - performanceRatio.value;

    actualHolder = (actualBatteryCapAHValue.innerHTML * actualValHold) / 100;

    totalPerf =
      Number(actualBatteryCapAHValue.innerHTML) + Number(actualHolder);
  }

  if (powerRating.value < 1) {
    let powerRateVal = 100 * powerRating.value;

    let powerRateValHolder = 100 - powerRateVal;

    let powerRateHolder = (totalPerf * powerRateValHolder) / 100;

    totalPowerRate = Number(totalPerf) + Number(powerRateHolder);
  } else if (powerRating.value >= 1) {
    let powerRateHolder1 = 100 - powerRating.value;

    let powerRateHolder2 = (totalPerf * powerRateHolder1) / 100;

    totalPowerRate = Number(totalPerf) + Number(powerRateHolder2);
  }

  sizeOfPanelRequiredBatteryAuditValue.innerHTML =
    (totalPowerRate * marginalSafety.value) / peakSunHour.value;

  localStorage.setItem(
    "overallActualPanelWatt",
    sizeOfPanelRequiredBatteryAuditValue.innerHTML
  );

  // Actual Battery Calculation End

  // Adjusted Battery Calculation Start
  if (performanceRatio.value < 1) {
    let performanceVal = 100 * performanceRatio.value;

    let performanceValHolder = 100 - performanceVal;

    let actualHolder =
      (adjustedBatteryCapacityValue.innerHTML * performanceValHolder) / 100;

    totalPerf =
      Number(adjustedBatteryCapacityValue.innerHTML) + Number(actualHolder);
  } else if (performanceRatio.value >= 1) {
    let performanceRatioHolder2 = 100 - performanceRatio.value;

    actualHolder =
      (adjustedBatteryCapacityValue.innerHTML * performanceRatioHolder2) / 100;

    totalPerf =
      Number(adjustedBatteryCapacityValue.innerHTML) + Number(actualHolder);
  }

  if (powerRating.value < 1) {
    let powerRateVal = 100 * powerRating.value;

    let powerRateValHolder = 100 - powerRateVal;

    let powerRateHolder = (totalPerf * powerRateValHolder) / 100;

    totalPowerRate = Number(totalPerf) + Number(powerRateHolder);
  } else if (powerRating.value >= 1) {
    let powerRateHolder1 = 100 - powerRating.value;

    let powerRateHolder2 = (totalPerf * powerRateHolder1) / 100;

    totalPowerRate = Number(totalPerf) + Number(powerRateHolder2);
  }

  sizeOfPanelRequiredForAdjustedValue.innerHTML =
    (totalPowerRate * marginalSafety.value) / peakSunHour.value;

  localStorage.setItem(
    "overallAdjustedPanelWatt",
    sizeOfPanelRequiredForAdjustedValue.innerHTML
  );
  // Adjusted Battery Calculation End

  // No Of Panel Required For Actual Battery Capacity Start
  noOfPanelRequiredBatteryValue.innerHTML =
    sizeOfPanelRequiredBatteryAuditValue.innerHTML / panelSizeChoosen.value;

  localStorage.setItem(
    "noOfPanelForActual",
    noOfPanelRequiredBatteryValue.innerHTML
  );
  // No Of Panel Required For Actual Battery Capacity End

  // No Of Panel Required For Adjusted Battery Capacity Start
  noOfPanelRequiredForAdjustedBatteryValue.innerHTML =
    sizeOfPanelRequiredForAdjustedValue.innerHTML / panelSizeChoosen.value;

  localStorage.setItem(
    "noOfPanelForAdjustedBattery",
    noOfPanelRequiredForAdjustedBatteryValue.innerHTML
  );
  // No Of Panel Required For Adjusted Battery Capacity End
}

// Proceed Btn start
let proceedBtn = document.querySelector(".proceedBtn");
proceedBtn.addEventListener("click", calculation);
// Proceed Btn end
// Calculation Part Ends Here
